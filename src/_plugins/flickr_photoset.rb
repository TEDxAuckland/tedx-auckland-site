require 'flickr-objects'

Flickr.configure do |config|
  config.api_key       = ENV['FLICKR_KEY']
  config.shared_secret = ENV['FLICKR_SECRET']
end

module Jekyll
  module FlickrPhotoSet
    def images_from_photoset(photoset_id)
      photoset = Flickr.sets.find(photoset_id)
      photos = photoset.get_photos
      photo_urls = photos.map do |photo|
        info = photo.get_info!
        url = "https://farm#{info.farm}.staticflickr.com/#{info.server}/#{info.id}_#{info.secret}.jpg"
        puts url
        url
      end
      photo_urls
    end
  end
end

Liquid::Template.register_filter(Jekyll::FlickrPhotoSet)
