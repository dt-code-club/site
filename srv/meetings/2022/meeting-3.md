% Python Lesson #3:\
    Data Structures (Tuples, Lists)
% Eric Y.
% November 18, 2021

## Data structures

Data structures let us group together data types.
They're useful for storing several pieces of information in one place.
In these lessons, we'll be using three kinds of data structures:
tuples, lists, and dictionaries.
This lesson will cover tuples and lists,
and a later one will cover dictionaries.

## Tuples

Tuples are somewhat specific to Python,
as most other languages don't have them.
They are iterable (meaning you can go through each element in sequence)
and immutable (meaning you cannot change what is inside of them).
An example:

```python
my_tuple = ("red", "orange", "yellow")
```

Here, the tuple `my_tuple`
stores the values `"red"`, `"orange"`, and `"yellow"`.
Each item is separated by a comma
and the whole tuple is enclosed with `()`.
Each value gets assigned a number in sequential order,
also called an index,
which we can use to access specific items.
An item can be accessed by using `name[#]`,
where `name` is the name of the tuple
and `#` is the index number of the item.

```python
print(my_tuple[0])
print(my_tuple[1])
print(my_tuple[2])
```

When run, this should print out
red, orange, then yellow on separate lines.
Computers count from zero.

Since you cannot change the values inside tuples,
they are only used when you know the values should never change.
You likely will not be using tuples as much as lists.

## Lists

Lists are more commonly used than tuples
because they are both
iterable (meaning you can go through each element in sequence)
and mutable (meaning you can change what is inside of them).
An example:

```python
my_list = ["green", "blue", "purple"]
```

Just like tuples,
you can access each element with the same syntax:

```python
my_list = ["green", "blue", "purple"]
print(my_list[0])
print(my_list[1])
print(my_list[2])
```

When run, this should print out
green, blue, and purple on separate lines.

To replace values within lists,
you can access the value
then use an equal sign to reassign it to something else.
An example:

```python
my_list = ["green", "blue", "purple"]
print(my_list)
my_list[2] = "indigo"
print(my_list)
```

In the first line,
the list `my_list` is created along with its stored values.
In the second line,
the computer prints out the original list.
In the third line,
the second index of the list which is `"purple"` is accessed
(remember that computers count from zero)
then changed to `"indigo"`.
In the fourth line the updated list is printed,
with `"indigo"` now in place of `"purple"`.

## Appending to lists

To add another value to a list,
the `.append()` function is needed.
It can be applied to a list like this:

```python
list_name.append("new_item")
```

Example:

```python
my_list = ["green", "blue", "purple"]
my_list.append("black")
print(my_list)
```

It prints `["green", "blue", "purple", "black"]`.

## Removing from lists

To remove a value from a list,
the `.remove()` function is needed.
It can be applied like this:

```python
list_name.remove("item")
```

You need to tell the function the value of the item
that you want removed,
not its index.
Example:

```python
my_list = ["green", "blue", "purple"]
my_list.remove("purple")
print(my_list)
```

It prints `["green", "blue"]`.

## Try it!

Create a shopping list named `shop_list`
with `"apples"` and `"bananas"` inside.

Using `.append()`, add `"oranges"` and `"bread"`.

Using `.remove()`, remove `"apples"`.

Don't forget to use `print(shop_list)` in between lines
to see the contents of the shopping list at different stages!

For something slightly more challenging,
try to remove the second item of the shopping list using its index.

## Answer

The `print()` lines aren't necessary,
but they let us see the changes
we make to the list after every line.

```python
shop_list = ["apples", "bananas"]
print(shop_list)

shop_list.append("oranges")
print(shop_list)

shop_list.append("bread")
print(shop_list)

shop_list.remove("apples")
print(shop_list)
```

For the slightly more challenging question:

```python
shop_list.remove(shop_list[1])
print(shop_list)
```
