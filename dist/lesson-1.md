# Lesson 1 -- Setup, Datatypes, Variables, and If Statements

## Setup

Python can be downloaded from [its website](https://www.python.org/).
If you're doing it on a school computer,
make sure to uncheck "Install launcher for all users"
on the first page.

Once done, hit the windows key then type in "IDLE".
If you're on mac, go to launchpad and search for IDLE.
Open the application, and you're ready to start coding!

We'll begin by doing a standard procedure
when learning a new coding language:
printing "Hello world".
It looks like this:

    print("Hello world")

After typing that in,
hit `F5` or go into Run -> Run Module.
A new window should pop up displaying "Hello world".
That's your very first line of code!

\*Important side note:
In coding, we have "commenting",
which makes the computer ignore the line of code.
You can use this to write notes
for potential reviewers of your code,
and they are crucial in writing readable code.
To comment out lines, begin them with `#`
or surround a block of code with `""" """` like this:

    # This line is a comment

    """
    Any line between these triple quotation marks is a comment
    """

In the IDLE editor,
you can highlight a chunk of code and press Alt+3 to comment
and Alt+4 to uncomment code.
These shortcuts can also be accessed
through Format tab at the top as well.

## Datatypes

If we dissect what we've just done here, we have two things:
the print() function and "Hello world" string.
But what are these?
We'll be going over functions in a later lesson,
but for now just think of them like recipes:
They're instructions for the computer to take things in (input)
and put something back out (output).
Today we'll be focusing on the second part, the "string".
A string is a datatype,
and other common datatypes along with examples can be seen here:

- Strings: `""`, `''`
- Integers: `5`, `10`, `15`
- Floats: `5.5`, `1.5`
- Booleans: `True`, `False`

Strings are marked with single or double quotation marks.
These are most used for text.
The computer will see
whatever is inside the quotation marks
as a string,
even if they are another datatype (ex. `5`),
so be careful with that.

Integers are numbers with no decimals.

Floats are numbers with decimals.

Booleans are either `True` or `False`,
make sure to have them without quotation marks.

## Variables

If we want to keep on using the same value,
it would be tedious to type out the same thing
every time you wanted to use it.
If the value changed,
you would also need to change every instance of it in your code.
This is where variables come in.

Variables are containers for storing data values.
Think of them like a paint bucket:
You can put paint into it,
and use that same paint whenever necessary.
Whenever a modification is made,
like adding a bit of orange paint to a bucket of white paint,
it would change the colour of the paint
in every instance it is used.

To get a better understanding of this,
examples can help.
To create a variable in python, it's simple:

    variable = "Hello"
    print(variable)

Now if you ever wanted to change what the computer printed,
you would only need to change what's inside of the variable.

## Evaluation and If Statements

Type this into your IDLE editor,
and note the difference between the results:

    print(1 + 1)
    print("1 + 1")

The first line prints out `2`,
while the second line literally prints out `1+1`.
Python "evaluated" the first line
since it's a math operation involving two integers.
The second line is read as a string
and printed literally due to the quotation marks.

"Evaluation" is when python checks for something
and returns a result based on what it finds.
A slightly more complex example is as follows:

    result = 2
    if result == 1:
        print("The result is 1")
    elif result == 2:
        print("The result is 2")
    else:
        print("The result is not 1 or 2")

A variable named `result` was made,
and we have these new lines with `if`, `elif`, and `else`.
`if` checks to see if a condition is met.
If a condition is not met,
it doesn't execute the line underneath and moves on.
`elif` means `else if`,
which is another `if` statement that runs
if the first `if` statement is not true.
If this statement is also not true, we arrive at `else`,
which executes the line underneath it.
Note the syntax:
Each line after the `if`, `elif`, and `else` statements
require colons at the ends.

Most importantly, we have the double equals sign here.
**If there's one thing you remember from this lesson,
this is it.**
While the single equals sign declares
that one thing is equivalent to another,
**a double equals sign checks to see if two things are equal.**
If they are, it tells the computer that the statement is `True`,
and if not it tells computer the statement is `False`.
I like to read a single equals sign as "is",
and a double equals sign as "is equal to".
The first if statement would read:
"If the result is equal to one,
print 'The result is 1'."

You can also use `==`
to see if one variable is equal to another.
Think of it like having two paint buckets:
You look at the colour inside of one,
then take a look at the colour inside of the other,
and you can say whether or not they are the same colour.

## Try it!

With the following variables in mind,
translate the commented lines into Python code:

    my_favourite_colour = "Insert your favourite colour"
    erics_favourite_colour = "Orange"
    """
    if erics colour matches mine
        print we have the same favourite colour
    if it does not match
        print we dont have the same favourite colour
    """

Writing out the logic for what you want to program with comments
is also knows as pseudocoding.
It's very helpful to work out the general logic of the code
before figuring out the proper syntax for it!

## Answer

    my_favourite_colour = "Blue"
    erics_favourite_colour = "Orange"
    if my_favourite_colour == erics_favourite_colour:
        print("We have the same favourite colour!")
    else:
        print("We don't have the same favourite colour.")

We likely have very similar lines,
but in the future your answer may look completely different
even though it gives the same result.
That's okay!
The beauty of coding is
that there are so many ways of approaching problems.
They may vary in efficiency, conciseness, and readability,
and in time you'll learn new ways to optimize these aspects.
