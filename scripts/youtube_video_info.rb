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
      videos = youtube_videos_from_playlist(YAML.load_file(file)['youtube_playlist'])
      all_videos << videos
    end
    write_file(all_videos.flatten)
  end

  def youtube_videos_from_playlist(playlist_id)
    puts playlist_id
    playlist = Yt::Playlist.new id: playlist_id
    playlist.playlist_items.map do |item|
       {
         playlist_item_id: item.id,
         playlist_id: item.playlist_id,
         video_id: item.video_id,
         title: item.title,
         published_at: item.published_at,
         thumbnail_url: item.thumbnail_url(:high),
         description: item.description,
         position: item.position,
         tags: item.video.tags,
         view_count: item.video.view_count,
         like_count: item.video.like_count,
         dislike_count: item.video.dislike_count,
         favorite_count: item.video.favorite_count,
         comment_count: item.video.comment_count
       }
    end
  end

  private

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
