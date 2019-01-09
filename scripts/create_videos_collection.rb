require 'json'
require 'fileutils'
require 'yaml'

class CreateVideosCollection
  NO_OVERWRITE = false
  JSON_FOLDER = '../src/_data/youtube_playlists'
  VIDEOS_FOLDER = "../src/_videos"
  PEOPLE_FOLDER = "../src/_people"
  IMAGES_FOLDER = "../src/uploads"

  def initialize
    people_paths = Dir["#{PEOPLE_FOLDER}/*"] - ["#{PEOPLE_FOLDER}/_defaults.md"]
    @people_hashes = people_paths.map { |p| YAML.load_file(p) }
    @yt_json = JSON.parse(IO.read(json_path))
  end

  def call
    people_hashes.each do |person|
      next if person["youtube_video_id"].nil?
      next if yt_json[person["youtube_video_id"]].nil?
      video = yt_json[person["youtube_video_id"]]
      puts ""
      puts person["name"]
      puts "> #{video["title"]}"

      person["youtube_video_ids"] = [person["youtube_video_id"]]
      video_hash = video_schema(video, person)
      person.delete("youtube_video_id")
      content = video["description"]
      write_md_file("#{VIDEOS_FOLDER}/#{video_filename(video)}", video_hash, content)
    end
  end

  private

  attr_reader :people_hashes, :yt_json

  def video_schema(video, person)
    {
      "title" => video_title(video),
      "youtube_video_id" => person["youtube_video_id"],
      "performance" => false,
      "highlight" => false,
      "images" => video_images(person["name"].downcase.gsub(" ", "-")),
      "related_posts" => [],
    }
  end

  def video_images(name)
    Dir["#{IMAGES_FOLDER}/#{name}_talk*"].map do |path|
      path.gsub("../src", "")
    end
  end

  def video_title(video)
    video["title"]
      .yield_self { |title| title.split("|").first}
      .yield_self { |title| title.split(":").first}
      .yield_self { |title| title.strip }
  end

  def video_filename(video)
    video_title(video)
      .yield_self { |title| title.gsub("/", "|") }
      .yield_self { |title| title.gsub("?", "") }
      .yield_self { |title| title.gsub(" ", "-") }
      .yield_self { |title| title.downcase }
      .yield_self { |title| "#{title}.md" }
  end

  def write_md_file(path, yaml, content)
    if File.exist?(path) && NO_OVERWRITE
      puts "> #{path} already exists, not updating"
    else
      puts "> creating #{path}"
      File.open(path, 'w') do |f|
        f << yaml.to_yaml
        f << "---\n\n"
        f << content
        f << "\n"
      end
    end
  end

  def json_path
    File.expand_path("#{JSON_FOLDER}/videos.json")
  end
end

CreateVideosCollection.new.call
