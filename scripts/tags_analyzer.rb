require 'json'
require 'fileutils'

class TagAnalyzer
  PLAYLIST_FOLDER = '../src/_data/youtube_playlists'.freeze
  TAGS_FOLDER = '../src/_data/youtube_tags'.freeze

  def initialize; end

  def analyze
    file = File.read("#{PLAYLIST_FOLDER}/videos.json")
    data_hash = JSON.parse(file)
    tags = []
    tags << data_hash.map { |video| video['tags'] }


    File.open("#{TAGS_FOLDER}/tags_output.json", 'w') do |output|
      occurences = tags.flatten.inject(Hash.new(0)) { |total, e| total[e] += 1 ;total}
      occurences = occurences.sort_by { |tag, occurence| occurence }.reverse.flatten
      output.write(JSON.pretty_generate(occurences))
    end

  end
end

TagAnalyzer.new.analyze
