require 'yt'
require 'json'
require 'fileutils'
require 'yaml'

Yt.configure do |config|
  config.api_key = ENV['YOUTUBE_API_KEY']
end

class YoutubeVideoInfo
  JSON_FOLDER = '../src/_data/youtube_playlists'

  def initialize
    @file_paths = Dir["../src/_events/*"] - ["../src/_events/_defaults.md"] + Dir["../src/index*"]
  end

  def fetch_youtube_videos
    puts @file_paths
    FileUtils::mkdir_p(JSON_FOLDER)

    playlist_ids = @file_paths
      .yield_self { |filenames| filenames.map { |filename| YAML.load_file(filename) }}
      .yield_self { |files| files.map { |yaml| yaml["youtube_playlist"] }}
      .yield_self { |playlist_ids| playlist_ids.compact }

    all_videos = playlist_ids.map do |playlist_id|
      videos = fetch_video_data(playlist_id)
    end

    write_file(
      "videos.json",
      video_hash_by_video_id(all_videos.flatten.compact)
    )

    write_file(
      "playlist_videos.json",
      video_hash_by_playlist_id(all_videos.flatten.compact)
    )
  end

  def fetch_video_data(playlist_id)
    puts "\n#{playlist_id}"
    playlist = Yt::Playlist.new id: playlist_id
    playlist.playlist_items.map.with_index do |item, index|
      next if item.title == "Deleted video"
      puts "> #{item.title}"
       {
         playlist_item_id: item.id,
         playlist_id: item.playlist_id,
         video_id: item.video_id,
         title: item.title,
         published_at: item.published_at,
         thumbnail_url: {
           default: item.thumbnail_url(:default),    # 120w
           medium: item.thumbnail_url(:medium),      # 320w
           high: item.thumbnail_url(:high),          # 480w
           standard: item.thumbnail_url(:standard),  # 640w
           maxres: item.thumbnail_url(:maxres),      # 1280w
         },
         description: item.description,
         position: item.position,
         tags: item.video.tags,
         view_count: item.video.view_count,
         like_count: item.video.like_count,
         dislike_count: item.video.dislike_count,
         favorite_count: item.video.favorite_count,
         comment_count: item.video.comment_count
       }.compact
    end
  end

  private

  def video_hash_by_video_id(videos_array)
    videos_hash = {}
    videos_array.deep_dup.each do |video|
      video_id = video.delete(:video_id)
      videos_hash[video_id] = video
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

  def write_file(filename, data)
    File.open(file_path(filename), 'w') do |f|
      f.write(JSON.pretty_generate(data))
    end
  end

  def file_path(filename)
    File.expand_path("#{JSON_FOLDER}/#{filename}")
  end
end

YoutubeVideoInfo.new.fetch_youtube_videos
