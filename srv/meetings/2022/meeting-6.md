% Python Lesson #6:
    Miscellaneous (Comments, F-strings, Other Operators, Truthy Falsy, Dictionaries)
% Eric Y.
% December 9, 2021

This lesson will cover miscellaneous topics
that could not fit into previous lessons.

## Comments

In coding, we have "commenting",
which makes the computer ignore the line of code.
You can use this to write notes for potential reviewers of your code,
and they are crucial in writing readable code.
To comment out lines,
begin them with `#`
or surround a block of code with `''' '''` like this:

# This line is a comment

```python
'''
Any line between these triple quotation marks is a comment
'''
```

In the IDLE editor,
you can highlight a chunk of code
and press `Alt + 3` to comment
and `Alt + 4` to uncomment code.
These shortcuts can be accessed
through Format tab at the top as well.

## F-strings

In python, we can "concatenate" strings using the `+` sign.
For example:

```python
print("Hello " + "world!")

subject = "everyone!"
print("Hello " + subject)
```

However, this can get awkward
when adding many segments together.
To make your code more readable and concise,
f-strings (formatted string literals) are much better.
They begin with an `f` before the first quotation mark
and use curly braces to contain expressions
that will be replaced with their values.
For example:

```python
subject = "everyone!"
print(f"Hello {subject}")
```

## Other operators

### Math operators

- Exponent: `**` (e.g. `2 ** 3 == 8`)
- Modulo: `%` (divides two numbers and returns the remainder,
  e.g. `5 % 2 == 1`)

## Boolean operators

Boolean operators are used to combine conditional statements:

- `and`: Returns `True` if both statements are true

```python
#Returns True
if 0 == 0 and 1 == 1:
    print(True)
else:
    print(False)

#Returns False
if 0 == 0 and 1 == 0:
    print(True)
else:
    print(False)
```

- `or`: Returns `True` if one of the statements is true

```python
#Returns True
if 0 == 0 or 1 == 0:
    print(True)
else:
    print(False)

#Returns False
if 0 == 1 or 1 == 0:
    print(True)
else:
    print(False)
```

- `not`: Reverses the result, returns `False` if the statement is true

```python
#Returns True
if not 1 == 0:
    print(True)
else:
    print(False)

#Returns False
if not 1 == 1:
    print(True)
else:
    print(False)
```

## Truthy Falsy

By default, strings, filled sequences, and numbers return `True`
and empty sequences and 0 return `False`.
If statements evaluate whether something is `True`,
so you don't need to compare expressions
to Boolean values using `==`.
An example:

```python
res = False
if res:
    print("It is True")
else:
    print("It is False")
```

If you wanted to see whether something is `False`,
the `not` operator can be used after the `if`.

Make sure to avoid using quotation marks
when using the Boolean values `True` or `False`
as it will always return `True`.

```python
res = "False"
if res:
    print("It is True")
else:
    print("It is False")
```

These are called "Truthy Falsy" values
because they are not the Boolean `True` `False` values themselves.
They instead return `True` or `False` when evaluated.

```python
# All of these return True
if 1 and ("Yes") and ["Yes"]:
    print("This will print")

# None of these return True
if 0 or () or []:
    print("This won't print")
```

Overall, knowing about this can make our code more concise.

## Dictionaries -- Made With {}

Dictionaries are used to store key-value pairs.
The key can be any immutable value (usually a string or number)
and the value can be any data type/structure.
Think about it like an actual dictionary:
The "key" would be the word,
and the "value" would be its definition.
You can't have duplicate keys,
but you can have duplicate values.
Each pair is divided by a colon,
and pairs are separated by commas.
For example:

```python
grocery_list = {
    "oranges" : "$2",
    "mangos" : "$5",
    "avocados" : "$4",
    "grapes" : "$4"
}
print(grocery_list)
```

This prints out the dictionary as it is,
but if we want them in pairs to use
we need the `.items()` method:

```python
print(grocery_list.items())
```

After printing this,
we can see that the method turns the dictionary into a list
and key-value pairs into tuples.
We can then use the tuples in something like this:

```python
for food, cost in grocery_list.items():
##Without an f-string: print("The " + food + " cost " + cost)
    print(f"The {food} cost {cost}")
```

Here, the values in each tuple are assigned to be food and cost.
For every tuple, an f-string containing the food and cost gets printed.

To get a specific value,
we can use its key and the `.get()` method.

```python
print(grocery_list.get("oranges"))
```

To add a new pair to the dictionary,
it looks like this:

```python
grocery_list["crackers"] = "$3"
print(grocery_list)
```

To remove an item,
we can use its key and the `.pop()` method.
It returns the value popped.
The following prints $4, and then the updated dictionary:

```python
print(grocery_list.pop("avocados"))
print(grocery_list)
```

## Try it!

Create an empty dictionary,
then fill it with 3 food items (as strings)
along with their prices (as integers)
using other lines of code.
Create a function that takes in a grocery list like this
and returns the items with even prices.
It can return it as a list or as strings.

Hint: It may be helpful to create an empty list named res
and to use the % operator!

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

It's possible to have a different looking answer.
Also, the line that checks to see
whether the cost is even or not
can be simplified to this:

```python
if not cost % 2:
```

By default, `0` is a `False` value.
If the cost divided by `2` leaves a remainder of 0
it would be `False`,
but since the not operator precedes it,
the result is reversed.
Even numbers then return `True`,
and the item is added to the list.

