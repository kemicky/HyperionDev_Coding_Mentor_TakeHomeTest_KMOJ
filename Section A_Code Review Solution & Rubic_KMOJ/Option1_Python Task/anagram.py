# Author: Kemmy MO Jones
# Date created: 10/5/2023
# Version: 1.0
# Programming Language: Python
# Program Name: Anagram
# Program Description: This program takes a list of words or phrases and groups the anagrams together.

class Anagram:
     # @param strs, a list of strings
     # function that returns a list of grouped anagrams
    def grouped_anagrams(self, strs):

        # privately calling groupby function from itertools
        from itertools import groupby

        # using lambda function and groupby fuction to sort the string
        # defining a temp variable to store the sorted string
        temp = lambda s: sorted(s)
        result = [list(val) for key, val in groupby(sorted(strs, key = temp), temp)]
        return result

if __name__ == '__main__':
    # taking user input for number of words or phrases and error handling.
    while True:
        u = int(input("Enter number of words or phrases you wish to check the anagram: " + "\n"))
        if u < 0 or u == 0:
            print("Invalid input, Enter a positive or a non-zero number, please try again.")
            continue
        else:
            break
    # taking user input for words or phrases and error handling.
    while True:
        strs = []
        for i in range(u):
            # appending the user input to the list by prompting the user to enter a word or phrase.
             strs.append(input("Enter a word or phrases: "))

                # error handling for empty string.
             if not strs[i] or strs[i].strip() == "" :
                 print("Input cannot be empty.")
                 print("Program terminated due to invalid input error, Restart the program to try again.")
                 print("Thank you for using the program, Goodbye!" + "\n")
                 exit()
        else:
            # printing the result.
            print("The grouped anagram is: ", Anagram().grouped_anagrams(strs))
            print("Thank you for using the Anagram program, Goodbye!" + "\n")
            exit()









