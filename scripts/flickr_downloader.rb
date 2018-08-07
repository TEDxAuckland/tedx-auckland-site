require 'flickr-objects'
require 'yaml'
require 'fileutils'

Flickr.configure do |config|
  config.api_key       = ENV['FLICKR_KEY']
  config.shared_secret = ENV['FLICKR_SECRET']
end

class FlickrDownloader
  JSON_FOLDER = '../src/_data/flickr_gallery'

  def initialize
    @files = Dir["../src/_events/*"]
    @files = @files - ["../src/_events/_defaults.md", "../src/_events/tedxauckland-2018.md"]
  end

  def flickr_photos_from_gallery
    puts @files
    FileUtils::mkdir_p(JSON_FOLDER)
    @files.each do |file|
      YAML.load_file(file)['flikr_galleries'].each do |photoset_id|
        photos = fetch_remote_flickr_galleries(photoset_id)
        write_file(photos, photoset_id)
      end
    end
  end

  def fetch_remote_flickr_galleries(photoset_id)
    photoset = Flickr.sets.find(photoset_id)
    photos = photoset.get_photos.take((ENV['TAKE'] || 10).to_i)
    photo_urls = photos.map do |photo|
      med500 = photo.medium500!.source_url
      med800 = photo.medium800!.source_url
      large1024 = photo.large1024!.source_url
      large1600 = photo.large1600!.source_url
      original = photo.original.source_url
      # TODO: Get gallery author and different resolutions
      # url = "https://farm#{info.farm}.staticflickr.com/#{info.server}/#{info.id}_#{info.secret}.jpg"

      {
        med500: med500,
        med800: med800,
        large1024: large1024,
        large1600: large1600,
        original: original
      }
    end
    photo_urls
  rescue Flickr::ApiError
    retry
  end

  private

  def write_file(data, photoset_id)
    File.open(json_path(photoset_id), 'w') do |f|
      f.write(JSON.generate(data))
    end
  end

  def json_path(photoset_id)
    File.expand_path("#{JSON_FOLDER}/#{photoset_id}.json")
  end
end

FlickrDownloader.new.flickr_photos_from_gallery
