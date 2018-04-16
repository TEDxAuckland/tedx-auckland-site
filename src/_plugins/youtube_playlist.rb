require 'yt'


Yt.configure do |config|
  config.api_key = API_KEY
end

module Jekyll
  module YoutubePlaylist
    def youtube_videos_from_playlist(playlist_id)
      puts "Listing videos from youtube playlist #{playlist_id}"
      playlist = Yt::Playlist.new id: playlist_id
      playlist.playlist_items.map do |item|
        {
          "playlist_item_id" => item.id,
          "title" => item.title,
          "description" => item.description,
          "published_at" => item.published_at,
          "thumbnail_url" => item.thumbnail_url,
          "video_id" => item.video_id,
          "position" => item.position
        }
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::YoutubePlaylist)
