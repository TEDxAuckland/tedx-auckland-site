# A tool to change all the rem values due to change in base rem value.

class ChangeREM

  def initialize(path: "../src/_sass/", old_px_per_rem: 18, new_px_per_rem: 10)
    @old_px_per_rem = old_px_per_rem
    @new_px_per_rem = new_px_per_rem
    @regex = /(\d?[.]?\d?)rem/
  end

  def run
    paths[3]
  end

  def paths
    Dir["../src/_sass/*/*.scss"]
  end

  private

  attr_reader :old_px_per_rem, :new_px_per_rem, :regex

end

class SCSSFile

  def initialize(path:, old_px_per_rem: 18, new_px_per_rem: 10)
    @path = path
    @file = File.read(path)
    @old_px_per_rem = old_px_per_rem
    @new_px_per_rem = new_px_per_rem
    @regex = /(\d*[.]?\d*)rem/
  end

  def change_rem_values
    File.open(path, 'w') do |out|
      out << changed_data
    end
  end

  private

  attr_reader :path, :file, :old_px_per_rem, :new_px_per_rem, :regex

  def changed_data
    file.gsub(regex) { new_rem($1.to_f).to_s + "rem" }.gsub(".0rem", "rem")
  end

  def new_rem(old_rem)
    puts old_rem
    old_px = old_px_per_rem * old_rem
    puts old_px
    a = ((1.0 / new_px_per_rem) * old_px).round(1)
    puts a
    puts "=========================="
    a
  end
end

cr = ChangeREM.new( path: "../src/_sass/", old_px_per_rem: 18, new_px_per_rem: 10)

cr.paths.each do |path|
  scss = SCSSFile.new(path: path)
  scss.change_rem_values
end
