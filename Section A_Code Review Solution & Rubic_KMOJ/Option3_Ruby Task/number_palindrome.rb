# Author: Kemmy MO Jones
# Date: 05/10/2023
# Version: 1.0
# Programming Language: Ruby
# Program Name: Number Palindrome
# Program Description: This program checks whether a number is palindrome or not.


# Task: Write a program to check whether a number is palindrome or not.
# Prompt the user to enter the number
puts "Enter any number:"

# Get the number from the user
num = gets.chomp.to_i

temp = num
sum = 0

# Check if the number is a valid, negative or zero
if (num < 0)
    puts "#{num} is a either a negative number or zero, please enter a positive number."
    exit
end
# While loop to loop through the number
while num != 0
    rem = num % 10
    num = num / 10
    sum = sum * 10 + rem
end

# If condition to check whether the number is palindrome or not
if(temp == sum)
    puts "The #{temp} is a palindrome."
else
    puts "The #{temp} is not a palindrome."
end




