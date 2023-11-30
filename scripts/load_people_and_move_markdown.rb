# This script loads all the people markdown files and moves "description_markdown"
# key to content part of the file.

require 'json'
require 'fileutils'
require 'yaml'
require './markdown_tools'

COLLECTIONS_PATH = '../src/collections'
COLLECTION_NAME = 'people'

collection_path = "#{ COLLECTIONS_PATH }/_#{ COLLECTION_NAME }"
item_paths = Dir["#{ collection_path }/*.md"]

item_paths.each do |item_path|
  yaml_hash = YAML.load_file(item_path)

  if yaml_hash.key?("description_markdown")
    content = yaml_hash["description_markdown"]
    yaml_hash.delete("description_markdown")
    write_md_file(item_path, yaml_hash, content, true)
  end
end
