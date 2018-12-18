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
    @files = Dir["../src/_events/*"]
    @files = @files - ["../src/_events/_defaults.md", "../src/_events/tedxauckland-2018.md"]
  end

  def fetch_youtube_videos
    puts @files
    FileUtils::mkdir_p(JSON_FOLDER)
    all_videos = []
    @files.each do |file|
      videos = fetch_video_data(YAML.load_file(file)['youtube_playlist'])
      all_videos << videos
    end
    videos_for_save = transform_videos(all_videos.flatten.compact)
    write_file(videos_for_save)
  end

  def fetch_video_data(playlist_id)
    puts "\n#{playlist_id}"
    playlist = Yt::Playlist.new id: playlist_id
    playlist.playlist_items.map do |item|
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

  def transform_videos(videos_array)
    videos_hash = {}
    videos_array.each do |video|
      video_id = video.delete(:video_id)
      videos_hash[video_id] = video
    end
    videos_hash
  end

  def write_file(data)
    File.open(json_path, 'w') do |f|
      f.write(JSON.pretty_generate(data))
    end
  end

  def json_path
    File.expand_path("#{JSON_FOLDER}/videos.json")
  end
end

YoutubeVideoInfo.new.fetch_youtube_videos
