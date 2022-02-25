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
are more readable and concise.
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

### In operator

The `in` operator returns `True`
if a value is found in a sequence (strings, tuples, lists, etc).

```python
print("f" in "Hello world!")
# Prints False

print("Hel" in "Hello world!")
# Prints True

print("banana" in ["apple", "banana", "coconut", "dagger"])
# Prints True
```

## Truthy and falsy values

By default, most values **evaluate** to `True`,
with the exception of mainly `False`, `0`, and empty sequences,
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

## Multiple Assignment

To assign multiple values to multiple variables at once,
commas can be used for multiple assignment. 
Each variable corresponds to the value with the matching index
on the other side of the `=` sign.

```python
num_1, num_2 = 123, 456
print(num_1)
print(num_2)
# Prints 123 and 456 on separate lines

fruit_1, fruit_2, fruit_3 = ["apple", "banana", "coconut"]
print(fruit_1, fruit2, fruit_3)
# Prints apple, followed by banana, followed by coconut
```

## Dictionaries

Dictionaries are used to store key-value pairs.
The key must be an immutable datatype (usually a string or number)
but the value can be any value.
You can't have duplicate keys,
but you can have duplicate values.
If you think about it like an actual dictionary,
the key would be the word,
and the value would be its definition.

Dictionaries are created with curly braces (`{}`),
each key-value pair is separated by a colon,
and pairs are separated by commas:

```python
grocery_list = {
    "oranges": 2,
    "mangos": 5,
    "avocados": 4,
    "grapes": 4,
}
print(grocery_list)
# Prints {'oranges': 2, 'mangos': 5, 'avocados': 4, 'grapes': 4}
```

### Getting values

We can use a key to get a value from a dictionary,
similarly to how we can use indexes to retrieve items lists:

```python
cost_of_oranges = grocery_list["oranges"]
print(f"Oranges cost ${cost_of_oranges}!")
# Prints Oranges cost $2!
```

We can also use the `.get()` method:

```python
cost_of_oranges = grocery_list.get("oranges")
print(f"Oranges cost ${cost_of_oranges}!")
# Prints Oranges cost $2!
```

The difference between square brackets and `.get()`
is that if the value is missing,
`[] will throw an error,
while `.get()` will return a default value,
which can be set by passing it a second argument.

```python
cost_of_bananas = grocery_list["bananas"]
# KeyError: 'bananas'

cost_of_bananas = grocery_list.get("bananas", "0")
print(f"Bananas cost ${cost_of_oranges}!!!")
# Prints Bananas cost $0!!!
```

### Setting values

To add a new key-value pair to the dictionary
or change the value of an existing pair:

```python
grocery_list["grapes"] = 10000
grocery_list["crackers"] = 3
print(grocery_list)
# Prints {'oranges': 2, 'mangos': 5, 'avocados': 4, 'grapes': 10000, 'crackers': 3}
```

### Removing values

To remove an item,
we can use its key and the `.pop()` method.
It returns the value popped.

```python
cost_of_avocados = grocery_list.pop("avocados")
print(f"Removed avocados, which costed ${cost_of_avocados}!")
# Prints "Removed avocados, which costed $4!"
```

### Iterating through dictionaries

We can also iterate through a dictionary using keys:

```python
for food in grocery_list.items():
    print(f"The {food} cost ${grocery_list['food']}!")
# Prints The oranges cost $2!
# Prints The mangos cost $5!
# Prints The grapes cost $10000!
# Prints The crackers cost $3!
```

The `.items()` method returns the dictionary as a list, with a tuple in place of each key-value pair.

```python
print(grocery_list.items())
# Prints dict_items([('oranges', '$2'), ('mangos', '$5'), ('avocados', '$4'), ('grapes', '$4')])
```

We can use multiple assignment on the tuples to do something like this:

```python
for food, cost in grocery_list.items():
    print(f"The {food} cost ${cost}!")
# Prints The oranges cost $2!
# Prints The mangos cost $5!
# Prints The grapes cost $10000!
# Prints The crackers cost $3!
```

Here, for each tuple,
the key is assigned to `food`
and the value is assigned to `cost`,
and a string is printed using these.

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

