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

require 'yt'
require 'yaml'

Yt.configure do |config|
  config.api_key = API_KEY
end

channel = Yt::Channel.new(id: CHANNEL_ID)
fetch_video_data(channel)
