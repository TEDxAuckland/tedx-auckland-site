require 'yt'
require 'json'
require 'fileutils'

Yt.configure do |config|
  config.api_key = ENV['YOUTUBE_API_KEY']
end

module Jekyll
  module YoutubePlaylist
    JSON_FOLDER = '_plugins/youtube_playlists/'

    def youtube_videos_from_playlist(playlist_id)
      FileUtils::mkdir_p(JSON_FOLDER)
      videos = ""
      if File.exist?(json_path(playlist_id))
        videos = fetch_local_videos(playlist_id)
      else
        videos = fetch_remote_videos(playlist_id)
        write_file(videos, playlist_id)
      end
      videos
    end

    def fetch_local_videos(playlist_id)
      puts "Fetching videos locally from youtube playlist #{playlist_id}"
      file = File.read(json_path(playlist_id))
      JSON.parse(file)
    end

    def fetch_remote_videos(playlist_id)
      puts "Fetching videos remotely from youtube playlist #{playlist_id}"
      playlist = Yt::Playlist.new id: playlist_id
      playlist.playlist_items.map do |item|
        {
          "playlist_item_id" => item.id,
          "title" => item.title,
          "description" => item.description,
          "published_at" => item.published_at,
          "thumbnail_url" => {
            "default" => item.thumbnail_url(:default),    # 120w
            "medium" => item.thumbnail_url(:medium),      # 320w
            "high" => item.thumbnail_url(:high),          # 480w
            "standard" => item.thumbnail_url(:standard),  # 640w
            "maxres" => item.thumbnail_url(:maxres),      # 1280w
          },

          "video_id" => item.video_id,
          "position" => item.position,
          "tags" => item.video.tags
        }
      end
    end

    def write_file(data, playlist_id)
      File.open(json_path(playlist_id), 'w') do |f|
        f.write(JSON.generate(data))
      end
    end

    def json_path(playlist_id)
      File.expand_path("#{JSON_FOLDER}#{playlist_id}.json")
    end

  end
end

Liquid::Template.register_filter(Jekyll::YoutubePlaylist)
