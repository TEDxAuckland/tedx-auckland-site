require 'flickr-objects'

Flickr.configure do |config|
  config.api_key       = ENV['FLICKR_KEY']
  config.shared_secret = ENV['FLICKR_SECRET']
end

module Jekyll
  module FlickrPhotoSet
    JSON_FOLDER = '_plugins/flickr_gallery/'

    def flickr_photos_from_gallery(photoset_id)
      FileUtils::mkdir_p(JSON_FOLDER)
      photos = ""
      if File.exist?(json_path(photoset_id))
        photos = fetch_local_flickr_galleries(photoset_id)
      else
        photos = fetch_remote_flickr_galleries(photoset_id)
        write_file(photos, photoset_id)
      end
      photos
    end

    def fetch_local_flickr_galleries(photoset_id)
      puts "Fetching photos locally from flickr_gallery #{photoset_id}"
      file = File.read(json_path(photoset_id))
      JSON.parse(file)
    end

    def fetch_remote_flickr_galleries(photoset_id)
      photoset = Flickr.sets.find(photoset_id)
      photos = photoset.get_photos
      photo_urls = photos.limit(10).map do |photo|
        info = photo.get_info!
        url = "https://farm#{info.farm}.staticflickr.com/#{info.server}/#{info.id}_#{info.secret}.jpg"
        puts url
        url
      end
      photo_urls
    end

    def write_file(data, photoset_id)
      File.open(json_path(photoset_id), 'w') do |f|
        f.write(JSON.generate(data))
      end
    end

    def json_path(photoset_id)
      File.expand_path("#{JSON_FOLDER}#{photoset_id}.json")
    end
  end
end

Liquid::Template.register_filter(Jekyll::FlickrPhotoSet)
