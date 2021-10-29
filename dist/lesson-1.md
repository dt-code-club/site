# Setup, Datatypes, and Variables

## Setup

Python can be downloaded from <https://www.python.org/>.
If you're doing it on a school computer,
make sure to uncheck "Install launcher for all users"
on the first page.

Once done, hit the Windows key then type in "IDLE".
If you're on mac, go to launchpad and search for IDLE.
Open the application,
then create a new file by clicking on the file tab at the top.
It can be named anything you want,
just make sure you know where you saved it.
Once done, you're ready to start coding inside of this new file!

We'll begin by doing a standard procedure
when learning a new coding language:
printing "Hello world".
It looks like this:

    print('Hello world')

After typing that in,
hit `F5` or go into Run -> Run Module.
The initial window should pop up displaying "Hello world".
That's your very first line of code!

Note: Every time you want to run code,
you need to save the file.
The easiest way to do this
is by hitting `Ctrl+S` (Windows) or `Command+S` (Mac).

## Datatypes

If we dissect what we've just done here,
we have two things:
the `print()` function and `"Hello world"` string.
But what are these?
We'll be going over functions in a later lesson,
but for now just think of them like recipes:
they're instructions for the computer
to take things in (input)
and put something back out (output).
Today we'll be focusing on the second part, the "string".
A string is a datatype,
and other common datatypes along with examples
can be seen here:

- Strings: `""`, `''`
- Integers: `5`, `10`, `15`
- Floats: `5.5`, `1.5`
- Booleans: `True`, `False`

Strings are marked with single or double quotation marks.
These are most used for text.
The computer will see
whatever is inside the quotation marks as a string,
even if they are another datatype (ex. `5`),
so be careful with that.

Integers are numbers with no decimals.

Floats (floating points) are numbers with decimals.

Booleans are either `True` or `False`,
make sure to have them without quotation marks.

## Variables

If we want to keep on using the same value,
it would be tedious to type out the same thing
every time you wanted to use it.
If the value changed,
you would also need to change
every instance of it in your code.
This is where variables come in.

Variables are containers for storing data values.
Think of them like a paint bucket:
you can put paint into it
and use that same paint whenever necessary.
Whenever a modification is made,
like adding a bit of orange paint to a bucket of white paint,
it would change the colour of the paint
in every instance it is used.

To create a variable in python,
you type the variable name (whatever you want it to be),
an equals sign (=),
and whatever you want to store.

    variable = "Hello"
    print(variable)

In the first line, a variable named "variable" is made.
In the second, python calls to the variable named variable,
which contains the string "Hello".
It then prints the "Hello".

Now if you ever wanted to change what the computer printed,
you would only need to change what's inside of the variable.

Note: Variables cannot have spaces in their names.
In python we generally follow naming conventions of `snake_case`,
where words are all in lowercase and separated by underscores.
Names should be short but describe their purpose.
