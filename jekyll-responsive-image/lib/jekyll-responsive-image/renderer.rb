module Jekyll
  module ResponsiveImage
    class Renderer
      include Jekyll::ResponsiveImage::Utils

      def initialize(site, attributes)
        @site = site
        @attributes = attributes
      end

      def render_responsive_image
        config = Config.new(@site).to_h
        use_cache = config['cache'] || @attributes['cache']
        cache_key = @attributes.to_s
        result = use_cache ? RenderCache.get(cache_key) : nil

        if result.nil?
          image = ImageProcessor.process(@attributes['path'], config, @attributes['widths'])
          @attributes['original'] = image[:original]
          @attributes['resized'] = image[:resized]

          @attributes['resized'].each { |resized| keep_resized_image!(@site, resized) }

          image_template = @site.in_source_dir(@attributes['template'] || config['template'])
          partial = File.read(image_template)
          template = Liquid::Template.parse(partial)

          result = template.render!(@attributes.merge(@site.site_payload))

          RenderCache.set(cache_key, result)
        end

        result
      end
    end
  end
end
