class Buzzed
  def fizzbuzz
    (1..100).each do |i|
      if i % 3 == 0 && i % 5 == 0
        puts "FizzBuzz"
      elsif i % 3 == 0
        puts "Fizz"
      elsif i % 5 == 0
        puts "Buzz"
      else
        puts i
      end
    end
  end

  def fizz
      (1..100).each do |i|
        first_condition = i % 3 == 0
        second_condition = i % 5 == 0

        puts case

        when first_condition
          "Fizz"
        when second_condition
          "FizzBuzz"
        when first_condition && second_condition
          "FizzBuzz"
        else
          i
        end
      end
  end

  def reverse(string)
    new_string = string.reverse!
    puts new_string
  end
end

run_it = Buzzed.new
run_it.reverse("Madam, I’m Adam")
