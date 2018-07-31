module Jekyll
  module ResponsiveImage
    class Tag < Liquid::Tag

      attr_reader :markup

      def initialize(tag_name, markup, tokens)
        @markup = markup
        super

        @attributes = {}
      end

      def render(context)

        markup.scan(::Liquid::TagAttributes) do |key, value|
          # Strip quotes from around attribute values
          stripped = value.gsub(/^['"]|['"]$/, '')
          if stripped == value
            @attributes[key] = context[value]
          else
            @attributes[key] = stripped
          end

          @attributes[key] = process_widths(stripped) if key == "widths" && stripped
        end

        Renderer.new(context.registers[:site], @attributes).render_responsive_image
      end

      private

      def process_widths(widths)
        widths.split(",").map do |width|
          {
            "width" => width.to_i
          }
        end
      end

    end
  end
end
