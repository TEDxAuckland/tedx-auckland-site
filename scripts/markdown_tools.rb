require 'fileutils'
require 'yaml'

def write_md_file(path, yaml_hash, content, overwrite = false)
  if File.exist?(path) && !overwrite
    puts "> #{path} already exists, not updating"
  else
    puts "> creating #{path}"
    File.open(path, 'w') do |f|
      f << yaml_hash.to_yaml
      f << "---\n\n"
      f << content
      f << "\n"
    end
  end
end
