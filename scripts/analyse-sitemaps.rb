require 'nokogiri'

# A quick tool to see which paths are on the wordpress site but not on the new site.
# Run using ruby analyse-sitemaps.rb from withing the scripts folder.

class Sitemap

  def initialize(path:, start_el: 3, end_el: -1)
    @path = path
    @start_el = start_el
    @end_el = end_el
    @doc = read_doc(path)
  end

  def paths
    paths_array.map { |f| f.join("/") + "/" }
  end

  def paths_array
    doc.css("loc").map(&:text).map { |f| f.split("/")[start_el..end_el] }.sort
  end

  private

  attr_reader :doc, :start_el, :end_el

  def read_doc(path)
    Nokogiri::XML(File.open(path))
  end
end

class SitemapDiff

  def initialize(new_path:, old_path:)
    @new_sitemap = Sitemap.new(path: new_path)
    @old_sitemap = Sitemap.new(path: old_path)
  end

  attr_reader :new_sitemap, :old_sitemap

  def diff_paths
    diff_array.map { |f| f.join("/") + "/" }
  end

  def diff_array
    old_sitemap.paths_array - new_sitemap.paths_array
  end
end

sd = SitemapDiff.new(
  new_path: "../dist/site/sitemap.xml",
  old_path: "sitemap-pre-name-fixes.xml"
  # old_path: "wordpress-sitemap.xml"
)

puts sd.diff_paths
