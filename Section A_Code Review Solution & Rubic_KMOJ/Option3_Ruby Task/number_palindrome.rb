# Author: Kemmy MO Jones
# Date: 05/10/2023
# Version: 1.0
# Programming Language: Ruby
# Program Name: Number Palindrome
# Program Description: This program checks whether a number is palindrome or not.

puts "\n\tWelcome to MJ's Number Palindrome Console Application."
puts "\t--------------------------------------------------------\n"
puts "\tApp Name: Number Palidrome Console App."
puts "\tApp Description: This program checks whether a number is palindrome or not."
puts "\tProgrammer: Kemmy MO Jones " + "\n"
puts "Application Instructions: "
puts "Enter the number you want to check whether it is a palindrome or not."
puts "If the number is a palindrome, the program will display a message saying the number is a palindrome."
puts  "-----------------------------------------------------------------------------------------------------\n"

# Display the program title
# Prompt the user to enter the number
puts "Enter any number:"

# Get the number from the user
num = gets.chomp.to_i

temp = num
sum = 0

# Check if the number is a valid, negative or zero
if (num < 0)

    # Display Error message to user
    puts "\n\tALERT: ERROR MESSAGE"
    puts"\t------------------------" + "\n"

    puts "#{num} is a either a negative number or zero, please enter a positive number." + "\n"
    puts "\nApplication written in Ruby."
    puts "Thanks for using MJ's Number Palindrome Console App, Goodbye!. "
    puts "Application is terminating now....\n"
    puts "------------------------------------------------------------------------------------------" + "\n"

    # Exit the program
    exit
end
# While loop to loop through the number
while num != 0
    rem = num % 10
    num = num / 10
    sum = sum * 10 + rem
end

# If condition to check whether the number is palindrome or not
puts "\n\tOutput: "
puts"\t-------" + "\n"

if(temp == sum)
    puts "#{temp} is a palindrome."
else
    puts "#{temp} is not a palindrome."
end

# Inform user that program is ending and who created it.
puts "\n\tYou have reached the end of the number palindrome console app. "
puts "\tApplication written in Ruby."
puts "\tThanks for using MJ's Number Palindrome Console App, Goodbye!. "
puts "\tApplication successfully ended. " + "\n"
puts "----------------------------------------------------------------------------------------------" + "\n"


