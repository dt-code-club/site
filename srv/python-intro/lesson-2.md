% Python Lesson #2:\
    Math, Operators, and If Statements
% Eric Y.
% November 4, 2021

## Math

Type the following into your IDLE editor:

```python
print(1 + 1)
print("1 + 1")
```

Do you see a difference between the two results you receive?

The first line prints out "2",
while the second line literally prints out "1 + 1".
In the first line,
Python can automatically recognize the numbers as integers
and the `+` sign as an operator.
It "evaluates" this operation because it knows
that is what it is supposed to do
with these special characters.

The second line is printed literally
since it's surrounded by quotation marks,
which turns it into a string.
Python does not consider doing anything
with what's inside the string
because the string is the value itself,
and special characters within it
are not seen as special characters.

Using these symbols (known as "operators"),
Python can do math operations on integers/floats (numbers):

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Float division: `/`
  (e.g. `5 / 2 == 2.5`)
- Integer division: `//`
  (rounds down the nearest integer; e.g. `5 // 2 == 2`)

Python can also compare two separate values
using the following symbols:

- Equal to: `==`
- Less than or equal to: `<=`
- Less than: `<`
- Greater than or equal to: `>=`
- Greater than: `>`
- Not equal to: `!=`

## If statements

If statements check to see whether a condition is met.
It returns (internally tells the computer) the result
as either of the Boolean values `True` or `False`.
If it returns `True`,
Python will proceed to the next line.
If it returns `False`,
Python will skip over the block of code within the if statement
(the part after the if statement which has been indented).

An example:

```python
result = 1
if result == 1:
    print("The result is 1")
```

In the first line, a variable named `result` is made.
In the second, Python calls to the variable `result`
to see if the value in it is equal to `1`.
Since they are equal,
it executes the indented line beneath,
printing "The result is 1".
If `result` were not `1`,
it simply would not print anything.
You can test this by changing the result to `2`
and seeing what happens.

**The most important thing to remember here is the double equals sign**.
While a single equals sign declares
that one thing is equivalent to another,
a double equals sign checks to see if two things are equal.
To use the paint bucket metaphor again:
The single equals sign is like
filling a bucket of paint with a certain color.
On the other hand, the double equals sign is like
looking into one bucket of paint
and then comparing its color to the paint inside another bucket.
If they are the same color, the statement would be `True`.
If not, it would be `False`.
It's helpful to read a single equals sign as "is",
and a double equals sign as "is equal to".
You can also read a single equals sign like a statement of fact,
and a double equals sign like a question you want the answer to.

Note the syntax:
There is a colon after `1` and an indent in the line after.
The colon indicates that the if statement condition is fully completed
(like a period when writing a sentence in English),
and the indent is necessary to tell the computer
that the `print()` is within the if statement
(so if the result is `True`,
the that's the next step it will move on to).
It's common to forget these when starting out,
but in time it will come naturally.

There are additional things we can add to if statements:
`elif` (else if) and `else`.
They can execute code
in case the initial if statement
returns `False` instead of `True`.

An example:

```python
result = 2
if result == 1:
    print("The result is 1")
elif result == 2:
    print("The result is 2")
else:
    print("The result is not 1 or 2")
```

In the first line,
a variable named result is created
with the value `2` stored in it.
The second line has an if statement checking to see
whether the variable `result` is equal to `1`.
Since it is not, it returns `False`,
and does not execute what is underneath it.
It then goes down to the `elif` line.
`elif` basically does the same thing as an if statement
but can only work after something above has returned `False`,
so you cannot start with it.
It checks to see if the variable `result` is equal to 2.
Since it is, it executes the print statement beneath it.
The `else` statement is never reached here.
`else` statements run if everything above it has returned `False`.
Try changing the value of `result` to a different number
and seeing what happens.

## Try it!

With the following variables in mind,
translate the commented lines into python code:

```python
my_favorite_color = "(INSERT YOUR FAVORITE COLOR)"
erics_favorite_color = "Orange"

"""
If Eric's favorite color matches mine,
print we have the same favorite color;
if it does not match,
print we don't have the same favorite color.
"""
```

Writing out the logic for what you want to program with comments
is also known as pseudocoding.
It's very helpful to work out the general logic of the code
before figuring out the proper syntax for it!

## Answer

```python
my_favorite_color = "Blue"
erics_favorite_color = "Orange"
if my_favorite_color == erics_favorite_color:
    print("We have the same favorite color!")
else:
    print("We don't have the same favorite color.")
```

We likely have very similar lines,
but in the future your answer may look completely different
even though it gives the same result.
That's okay!
The beauty of coding is
that there are so many ways of approaching problems.
They may vary in efficiency, conciseness, and readability,
but in time you'll learn new ways to optimize these aspects.
