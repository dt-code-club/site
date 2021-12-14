% Python Lesson #6: Dictionaries and Miscellaneous
% Eric Y.
% December 9, 2021

This lesson will cover miscellaneous topics
that could not fit into previous lessons
and introduce the dictionary data structure.

## Comments

In coding, we have **commenting**,
which makes the computer ignore a part of the code.
Comments can be used leave notes or explanations
or to disable a section of the code without removing it.
To comment out a single line,
prepend it with an octothorpe (`#`),
and to comment out multiple lines,
surround a block of code with three quotes (`"""`):

```python
# This line is single-line a comment

"""
print("Any line between these triple quotation marks")
print("will be ignored by Python")
"""
```

## F-strings

In Python, we can **concatenate** strings using the `+` operator.
For example:

```python
print("Hello " + "world!")
# Prints "Hello world!"

subject = "everyone!"
print("Hello " + subject)
# Prints "Hello everyone!"
```

However, this can get awkward
when adding many segments together,
where f-strings (formatted string literals)
become more readable and concise.
They begin with an `f` before the first quotation mark
and use curly braces (`{}`) to contain expressions
that will be replaced with their values
(automatically converted to strings if necessary):

```python
subject = "everyone!"
print(f"Hello {subject}")
# Prints "Hello everyone!"
```

## Operators

### Math operators

- `**`: exponent
- `%`: modulo, returns remainder after division

```python
print(2 ** 3)
# Prints 8
print(5 % 2)
# Prints 1
```

### Boolean operators

Boolean operators are used to combine conditional statements:

- `and`: returns `True` if and only if both values are true
- `or`: returns `True` if at least one of the values is true
- `not`: returns opposite of value; reverses the result

```python
print(True and True)
# Prints True

print(True and False)
# Prints False

print(True or False)
# Prints True

print(False or False)
# Prints False

print(not False)
# Prints True
```

## Truthy and falsy values

By default, most values **evaluate** to `True`,
with the exception of mainly `False`, `0`,
and empty sequences (strings, tuples, lists, etc),
which evaluate to `False`.

Values can be called **truthy** or **falsy**
because they evaluate to `True` or `False`
even though they may not themselves be
the boolean values `True` or `False`.

Conditional statements evaluate
whether something is truthy or falsy,
so it is possible to, for example,
directly pass in a value to an if statement
without comparing it:

```python
num = 2021
if num:
    print("num is not zero!")
# Prints "num is not zero!"
```

Make sure to avoid using quotation marks
when using boolean values,
as non-empty strings evaluate to `True`!

```python
if "False":
    print("It is True!")
# Prints "It is True!"
```

This can be used to check whether a list is empty:

```python
my_list = []
if not my_list:
    print("my_list is empty!")
# Prints "my_list is empty!"
```

Evaluating truthy and falsy values
can make code more concise and terse,
but it can also reduce readability,
so don't make sure not to overuse this!

## Dictionaries

Dictionaries are used to store key-value pairs.
The key can be any immutable value (usually a string or number)
and the value can be any value.
Think about it like an actual dictionary:
The "key" would be the word,
and the "value" would be its definition.
You can't have duplicate keys,
but you can have duplicate values.

Dictionaries are created with curly braces (`{}`),
each key-value pair is separated by a colon,
and pairs are separated by commas.

```python
grocery_list = {
    "oranges": "$2",
    "mangos": "$5",
    "avocados": "$4",
    "grapes": "$4",
}
print(grocery_list)
```

This prints out the dictionary as it is,
but if we want to access the keys and values,
we can use the `.items()` method:

```python
print(grocery_list.items())
```

After printing this,
we can see that the method turns the dictionary
into a list of tuples for each key-value pair.
We can then use the tuples to do something like this:

```python
for food, cost in grocery_list.items():
    print(f"The {food} cost {cost}!")
```

Here, for each tuple,
the key is assigned to `food`
and the value is assigned to `cost`,
and a string is printed using these.

To get a specific value,
we can use its key and the `.get()` method.

```python
cost_of_oranges = grocery_list.get("oranges")
print(f"Oranges cost {cost_of_oranges}!")
```

To add a new pair to the dictionary
or change the value of an existing pair:

```python
grocery_list["crackers"] = "$3"
print(grocery_list)
```

To remove an item,
we can use its key and the `.pop()` method.
It returns the value popped.

```python
cost_of_avocados = grocery_list.pop("avocados")
print(f"Removed avocados, which costed {cost_of_avocados}!")
```

## Try it!

Create an empty dictionary,
then fill it with three food items (as strings)
along with their prices (as integers)
using other lines of code.
Create a function that takes in a grocery list like this
and returns the items with even prices.
It can return it as a list or as strings.

Hint: Use the `%` operator to see if an integer is even!

## Answer

```python
dictionary = {}
dictionary["juice"] = 3
dictionary["watermelon"] = 6
dictionary["papaya"] = 6
print(dictionary)

def receipt(grocery_list):
    res = []
    for item, cost in grocery_list.items():
        if cost % 2 == 0:
            res.append(item)
    return res

print(receipt(dictionary))
```
## Todo

- Order of boolean operations
- `in` operator
- Multiple assignment is not explained
- `for key in dict` might be better than `.items()`
  because people already know how that works (from lists)
  and do not need to learn new methods
- [`.get()` vs square brackets (`[]`)](https://stackoverflow.com/q/11041405/9281985)
    - Consistency with lists as well as changing dictionary values
- How different can the document be from the actual lesson?
- Simplify/shorten lesson maybe? somehow???

