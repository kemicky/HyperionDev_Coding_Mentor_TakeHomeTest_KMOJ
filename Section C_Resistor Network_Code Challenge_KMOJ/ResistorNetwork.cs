/* Author:  Kemmy MO Jones
   Date:  10/5/2023
   Version: 1.0
   Copyright: Copyright © 2023, all rights reserved
   Programming Language: C#
   Program Name:  Resistor Network
   Purpose: This program takes user input and calculates the total resistance in a resistor network.
*/

using System;
using System.Collections.Generic;


public class ResistorNetwork
{
	public static bool match(string left, string right)
	{
		if ("(".Equals(left) && ")".Equals(right))
		{
			return true;
		}
		if ("[".Equals(left) && "]".Equals(right))
		{
			return true;
		}
		return false;
	}

	// Create a method to calculate the total resistance in a resistor network
	public static double resist(string net)
	{
		while (net.IndexOf("(", StringComparison.Ordinal) != -1 || net.IndexOf("[", StringComparison.Ordinal) != -1)
		{
			string left = "", right = "";
			int d1 = 0, d2 = 0;
			for (int i = 0; i < net.Length; i++)
			{
				string ch = net.Substring(i, 1);
				if (")".Equals(ch) || "]".Equals(ch))
				{
					right = ch;
					d2 = i;
				}
				if (ResistorNetwork.match(left,right) && d2 > d1)
				{
					string s = net.Substring(d1 + 1, d2 - (d1 + 1));
					IList<string> v = new List<string>();
					int idx = s.IndexOf(", ", StringComparison.Ordinal);
					while (idx != -1)
					{
						v.Add(s.Substring(0,idx));
						s = s.Substring(idx + 2);
						idx = s.IndexOf(", ", StringComparison.Ordinal);
					}
					v.Add(s);
					double n = 0.0;
					for (int j = 0; j < v.Count; j++)
					{
						if ("(".Equals(left))
						{
							n += double.Parse(v[j]);
						}
						else
						{
							n += 1.0 / double.Parse(v[j]);
						}
					}
					if ("[".Equals(left))
					{
						n = 1.0 / n;
					}
					n = Math.Round(n * 1000) / 1000.0;
					net = net.Substring(0,d1) + Convert.ToString(n) + net.Substring(d2 + 1);
					break;
				}
				if ("(".Equals(ch) || "[".Equals(ch))
				{
					left = ch;
					d1 = i;
				}
			}
		}
		return Math.Round(double.Parse(net) * 10) / 10.0;
	}

	// Create a main method to take user input and display the total resistance in a resistor network
	public static void Main(string[] args)
	{
		 Console.WriteLine("\tWelcome to the MJ's Resistor Network Console Application. " );
		 Console.WriteLine("\t====___======_______=============__________============== " +"\n");
		 Console.WriteLine("\tApp Name: Resistor Network ");
		 Console.WriteLine("\tApp Description: This program takes user input and calculates the total resistance in a resistor network. ");
		 Console.WriteLine("\tProgrammer: Kemmy MO Jones " +"\n");
		 Console.WriteLine("Application Instructions: ");
		 Console.WriteLine("On prompt, enter the resistor network in the following format: ((1, 2, 3)) or ([1, 2, 3]) ");
		 Console.WriteLine("Or On prompt, Enter 'q' to quit program. " );
		 Console.WriteLine("====___======_______=============__________================___________===============___========__======== " +"\n");
		 while (true)
        {
            Console.Write("Enter the resistor network or press q to quit the app:  ");
            string net = Console.ReadLine();

                // exit program when q is pressed using the console.ReadLine
				if (net.Equals("q" , StringComparison.OrdinalIgnoreCase)){

					Console.WriteLine("\nOutput: ");
			        Console.WriteLine("=============" + "\n");
					Console.WriteLine("\tYou have reached the end of the Resistor Network console app. ");
					Console.WriteLine("\tApplication written in C#.");
					Console.WriteLine("\tThanks for using Resistor Network console app, Goodbye! ");
					Console.WriteLine("\tApplication successfully ended. " +"\n");
					Console.WriteLine("\t====___======__________===============___========__============ " +"\n");

					break;
				} //end of if statement to exit application

                if (net.Length == 0)
                {
					Console.WriteLine("\nOutput: ");
			        Console.WriteLine("=============" + "\n");
                    continue;
                }
                if (ResistorNetwork.resist(net) > 0)
                {
                    // user input
                    try
                    {
						Console.WriteLine("\nOutput: ");
			            Console.WriteLine("=============" + "\n");
                        Console.WriteLine("The total resistance in the resistor network is: " + ResistorNetwork.resist(net) + " " + "ohms " + "\n");

                    }
                    catch (Exception e)
                    {
                        Console.WriteLine("Error: " + e.Message);
                    }
                    continue;

                } //end of if statement

        }// end of while loop


	} //end of main

} //end of class
