require 'json'
require 'fileutils'
require 'yaml'

require './lib/Array'

COLLECTIONS_PATH='../src/collections/'
YAML_FRONT_MATTER_REGEXP = /\A(---\s*\n.*?\n?)^((---|\.\.\.)\s*$\n?)/m

ARGV.each do|a|
  puts "Argument: #{a}"
end

collection_name = ARGV[0]

unless collection_name
  puts "Please call this script with a Collection Name arg"
  return
end

collection_path = "#{ COLLECTIONS_PATH }/_#{ collection_name }"

item_paths = Dir["#{ collection_path }/*.md"] - ["#{ collection_path }/_defaults.md"]

items = item_paths.map do |i|
  file = File.read(i)
  m = file.match(YAML_FRONT_MATTER_REGEXP)
  if m
    data = YAML.load(m[1])
  end
end.compact

keys = Hash.new(0)

items.each do |item|
  item.keys.each do |k|
    keys[k] += 1
  end
end

# keys.each do |k, v|
#   puts "#{k}\t\t\t#{v}"
# end

puts keys.to_a.to_table
