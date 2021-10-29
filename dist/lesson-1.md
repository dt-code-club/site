# Setup, Datatypes, and Variables

## Setup

Python can be downloaded from [its website](https://www.python.org/).
If you're installing it on a school computer,
make sure to uncheck "Install launcher for all users" on the installer
as you do not have admin permissions.

Once done, hit the Windows key then search for "idle".
Open the application
and create a new file by typing `Ctrl+N`.
Name it anything you want,
but Python files are generally named
with lowercase words separated by underscores

Now you're ready to start coding!

## Hello world!

We'll begin by doing a standard procedure
when learning a new coding language:
Printing "Hello world!".
It looks like this:

    print("Hello world!")

After typing that in,
save your file by hitting `Ctrl+S`
and execute your code by hitting `F5`.
The initial window should pop up displaying "Hello world!".
That's your very first line of code!

## Datatypes

If we dissect what we've just done here,
we have two things:
the `print()` function and `"Hello world!"` string.
But what are these?
We'll be going over functions in a later lesson,
but for now just think of them like recipes:
They're instructions for the computer
to take things in (input)
and put something back out (output).
Today we'll be focusing on the second part, the "string".
A string is a datatype,
and other common datatypes along with examples
can be seen here:

- Strings: `"Hello world!"`, `'123'`
- Integers: `5`, `10`, `-15`
- Floats: `5.0`, `1.5`
- Booleans: `True`, `False`

Strings are marked with either single or double quotation marks
(it's good practice to use only one and be consistent),
and they store a sequence of characters.
Python will see whatever is inside the quotation marks as a string,
even if it is another datatype (i.e. `5` is not the same as `"5"`),
so make sure you understand don't accidentally quote
datatypes that aren't strings!

## Variables

If we want to keep on using the same value,
it would be tedious to type out the same thing
every time you wanted to use it.
If the value changed,
we would also need to change
every instance of it in our code.
This is where variables come in.

Variables are containers for storing data values.
Think of them like a paint bucket:
You can put paint into it
and use that same paint whenever necessary.
Whenever a modification is made,
like changing the color of the paint,
the color of the paint would change everywhere the bucket is used.

To create a variable in Python,
type the variable name (whatever you want it to be),
an equals sign (`=`),
and the data you want to store:

    variable = "Hello world!"
    print(variable)

In the first line, a variable named "variable" is made.
In the second, Python reads the variable named "variable",
which contains the string "Hello world!".
It then prints the "Hello world!".

Variables may only contain letters, numbers, and underscores;
and they may not begin with a number.
In Python we generally follow naming conventions of `snake_case`,
where words are all in lowercase and separated by underscores.
Names should be short and descriptive.
