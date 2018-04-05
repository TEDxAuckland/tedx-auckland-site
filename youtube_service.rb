def fetch_video_data(channel)
  channel.videos.each do |video|
    video_json = {
      video_id: video.id,
      title: video.title,
      description: video.description,
      published_at: video.published_at,
      thumbnail_url: video.thumbnail_url,
      view_count: video.view_count,
      like_count: video.like_count,
      dislike_count: video.dislike_count,
      favorite_count: video.favorite_count,
      comment_count: video.comment_count
    }

    File.open("_data/youtube_videos/#{video.id}.yml", 'w') {|f| f.write video_json.to_yaml }
  end
end

def fetch_playlist_data(channel)
  channel.playlists.each do |playlist|
    FileUtils.mkdir_p("_data/youtube_playlists/#{playlist.id}")
    playlist.playlist_items.each do |item|
      playlist_video = {
        playlist_item_id: item.id,
        item_title: item.title,
        description: item.description,
        published_at: item.published_at,
        thumbnail_url: item.thumbnail_url,
        channel_id: item.channel_id,
        channel_title: item.channel_title,
        playlist_id: item.playlist_id,
        video_id: item.video_id,
        position: item.position
      }

      File.open("_data/youtube_playlists/#{item.playlist_id}/#{item.id}.yml", 'w') {|f| f.write playlist_video.to_yaml }
    end
  end
end

require 'yt'
require 'yaml'
require 'fileutils'

Yt.configure do |config|
  config.api_key = API_KEY
end

channel = Yt::Channel.new(id: CHANNEL_ID)
fetch_video_data(channel)
fetch_playlist_data(channel)
