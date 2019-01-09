require 'yt'
require 'json'
require 'fileutils'
require 'yaml'

Yt.configure do |config|
  config.api_key = ENV['YOUTUBE_API_KEY']
end

class YoutubeVideoInfo
  JSON_FOLDER = '../src/_data/youtube_playlists'
  VIDEOS_FOLDER = "../src/_videos"

  def initialize
    @playlist_paths = Dir["../src/_events/*"] - ["../src/_events/_defaults.md"] + Dir["../src/talks.html"]
    @video_paths = Dir["#{VIDEOS_FOLDER}/*.md"] - ["../src/_events/_defaults.md"]
    @all_video_ids = videos_collection_ids
  end

  def call
    FileUtils::mkdir_p(JSON_FOLDER)
    process_playlists(event_playlist_ids)
    process_video_ids(all_video_ids.uniq)
  end

  def process_playlists(playlist_ids)
    puts @playlist_paths

    playlist_structure = playlist_ids.map do |playlist_id|
      puts "\n#{playlist_id}"

      playlist = Yt::Playlist.new id: playlist_id

      playlist.playlist_items.map.with_index do |item, index|
        next if item.title == "Deleted video"
        puts "> #{item.title}"
        all_video_ids << item.video_id
        {
          playlist_item_id: item.id,
          playlist_id: item.playlist_id,
          video_id: item.video_id,
          position: item.position,
        }
      end
    end.flatten.compact


    write_json(
      "playlist_videos.json",
      video_hash_by_playlist_id(playlist_structure)
    )
  end

  def process_video_ids(video_ids)
    puts @video_paths

    all_videos = video_ids.map do |video_id|
      puts "processing #{video_id}"
      video_hash(Yt::Video.new(id: video_id))
    end

    write_json(
      "videos.json",
      video_hash_by_video_id(all_videos)
    )

  end

  private

  attr_accessor :all_video_ids

  def video_hash_by_video_id(videos_array)
    videos_hash = {}
    videos_array.each do |video|
      videos_hash[video[:id]] = video
    end
    videos_hash
  end

  def video_hash_by_playlist_id(videos_array)
    playlist_data = {}
    videos_array.deep_dup.each do |video|
      playlist_data[video[:playlist_id]] = [] if playlist_data[video[:playlist_id]].nil?
      playlist_data[video[:playlist_id]] << {
        video_id: video[:video_id],
        position: video[:position]
      }
    end
    playlist_data
  end

  def videos_collection_ids
    @video_paths.map do |path|
      YAML.load_file(path)["youtube_video_id"]
    end.compact
  end

  def event_playlist_ids
    @playlist_paths.map do |path|
      yaml = YAML.load_file(path)
      playlist_ids = []
      playlist_ids << yaml["youtube_playlist"]
      playlist_ids << yaml["other_youtube_playlist"]
      if yaml["other_playlists"]
        yaml["other_playlists"].each do |playlist_id|
          playlist_ids << playlist_id
        end
      end
      playlist_ids
    end.flatten.compact
  end

  def video_hash(video)
    {
      id: video.id,
      title: video.title,
      published_at: video.published_at,
      thumbnail_url: {
        default: video.thumbnail_url(:default),    # 120w
        medium: video.thumbnail_url(:medium),      # 320w
        high: video.thumbnail_url(:high),          # 480w
        standard: video.thumbnail_url(:standard),  # 640w
        maxres: video.thumbnail_url(:maxres),      # 1280w
      },
      description: video.description,
      tags: video.tags,
      view_count: video.view_count,
      like_count: video.like_count,
      dislike_count: video.dislike_count,
      favorite_count: video.favorite_count,
      comment_count: video.comment_count
    }
  end

  def write_json(filename, data)
    File.open(file_path(filename), 'w') do |f|
      f.write(JSON.pretty_generate(data))
    end
  end

  def file_path(filename)
    File.expand_path("#{JSON_FOLDER}/#{filename}")
  end
end

YoutubeVideoInfo.new.call
