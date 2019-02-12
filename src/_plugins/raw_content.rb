module Jekyll
  class RawContent < Generator
    def generate(site)
      site.collections.each do |name, collection|
        collection.docs.each do |doc|
          doc.data['raw_content'] = doc.content
        end
      end
    end
  end
end
