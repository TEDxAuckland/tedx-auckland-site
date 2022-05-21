# Monkey Patch #to_table for cli

class Array
  def to_table
    column_sizes = self.reduce([]) do |lengths, row|
      row.each_with_index.map{|iterand, index| [lengths[index] || 0, iterand.to_s.length].max}
    end
    puts head = '-' * (column_sizes.inject(&:+) + (3 * column_sizes.count) + 1)
    self.each do |row|
      row = row.fill(nil, row.size..(column_sizes.size - 1))
      row = row.each_with_index.map{|v, i| v = v.to_s + ' ' * (column_sizes[i] - v.to_s.length)}
      puts '| ' + row.join(' | ') + ' |'
    end
    puts head
  end
end