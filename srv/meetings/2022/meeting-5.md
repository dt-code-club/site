% Python Lesson #5: Functions
% Eric Y.
% December 2, 2021

If variables are the nouns of programming,
functions are the verbs.
In this lesson we'll learn a few important functions
and how to create our own custom ones!

## Returning

"Returning" means telling the computer internally.
It's like `print()` except instead of showing us,
it shows the computer.
`return` itself is a keyword we will be using
in our functions to make the computer output
the result of the function.

When a function `return`s, it exits,
and if there is any code after the `return` statement,
it will not be executed.

## Length

The function `len()` returns the number of items
in a sequence (strings, lists, tuples, sets)
or mapping (dictionary, which will be covered later).

```python
list = ["item_1", "item_2", "item_3"]
print(len(list))
```

## Input

The function `input()` allows us
to take in user input through the terminal.
Whatever is typed is returned as a string.

```python
favorite_color = input("What's your favourite colour? ")
print(favorite_color)
```

This prints out the string you input.

## Datatype conversion

`type()` returns what datatype a certain value is.

```python
print(type("Example"))
print(type([]))
```

To convert a value from one type to another,
these functions are needed.
These are just a few common ones:

- `int()`: number to integer
- `float()`: number to float (decimal number)
- `list()`: sequence to list
- `str()`: anything to string

Sometimes, you may want to work with certain values as certain types.
For example:

```python
print("5" + "5")
print(5 + 5)
```

The first prints `"55"` and the second prints `10`.

## Creating functions

To create our own functions, use the `def` keyword:

```python
def function_name(arguments):
    # Actions
```

Arguments are what we pass into the function,
separated by commas.
Imagine them like ingredients:
Python needs to know what they are
before it starts cooking with them.
Not all functions require arguments.

Here is a simple function that adds two numbers together:

```python
def add_two_numbers(num_1, num_2):
    return num_1 + num_2
```

Since return is used, Python stores the value internally.
To see it ourselves, we need to print the function call.

```python
print(add_two_numbers(1, 2)) # Prints `3`
```

We can call functions within our functions,
for example adding user input:

```python
def add_two_numbers_with_input():
    x = int(input("Enter your first number: "))
    y = int(input("Enter your second number: "))
    return x + y
print(add_two_numbers_with_input()) # Prints sum of input
```

Since `input()` returns a string,
we need `int()` to change it into an integer.

To use this function, we need to call it.
Since it adds together user input and not hard coded numbers,
we do not need any arguments.

## Try it!

Create a function that takes a number as an argument
that returns `"The number is above 10"` if it is greater than 10
and `"The number is 10 or below"` if it is not.

Then, call the function with a number taken from `input()`
and print the result.

## Answer

```python
def my_function(number):
    if number > 10:
        return "The number is above 10"
    return "The number is 10 or below"
number = input("Enter a number: ")
result = my_function(number)
print(result)
```
