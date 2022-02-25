% Python Lesson #4: Loops
% Eric Y.
% November 25, 2021

Loops let us repeat things!
Loops let us repeat things!

## For Loops

For loops repeat code a specified number of times.
They are formatted like this:

```python
for (counter variable) in (sequence):
    (do something)
```

The counter variable can be named anything,
naming it `i` is quite common.
The sequence can be a list,
tuple,
dictionary (we will cover these later),
set (these aren't that useful, search them up if you'd like),
or string.

To repeat code a specific number of times,
`range()` can be used as the sequence.
`range()` returns a sequence of numbers,
starting from `0` (by default),
goes up by `1` (by default),
and stops at a specified number.
The following example prints `"Hello!"` three times
because Python runs the code for `0`, `1`, and `2`.
It stops counting at `3`, our specified number.

```python
for i in range(3):
    print("Hello!")
```

More commonly,
for loops will be used to go through items in a list
and do something for each element in sequence.
A real-life analogy would be
knocking on each watermelon at a grocery store
to hear if they are hollow,
and then taking out the hollow-sounding ones to purchase.
In code, it would look something like this:

```python
basket = ["hollow", "not_hollow", "hollow"]
for watermelon in basket:
    if watermelon == "hollow":
        print("A hollow watermelon was taken out!")
```

For loops can be used on strings like this,
taking each letter as a unit to iterate over.
Think of a string as a list of characters!

```python
for letter in "word":
    print(letter)
```

## While loops

While loops repeat as long as a specified condition
evaluates to `True`.

```python
i = 1
while i < 4:
    print(i)
    i += 1
```

Since `i` is initially `1`,
which is less than `4`,
Python prints `1` and then adds `1` to `i` (to become `2`).
`i += 1` is just a cleaner way of writing `i = i + 1`.
All this repeats this until i becomes `4`,
and since `i < 4` now evaluates to `False`,
the loop stops.

## Important notes

Loops can be dangerous
because they have the potential to run indefinitely.
It can overwhelm your computer
if there's no end to a loop with intensive code.
If you ever make a mistake,
you can hit `Ctrl+C` to interrupt the code in the terminal/shell.
An example:

```
while True:
    print("Hit Ctrl+C")
```

`while True` is one way to make code constantly run.
Once you know what you're doing,
you may want a piece of code to run indefinitely.
However, we don't want this in our case,
so once the code is run we need to hit `Ctrl+C` to stop it.

The keyword `break` can also be used in code.
Once the line is run, it will break the loop.

```python
while True:
    print("Hit ctrl+C")
    break
```

This will only print one line.

## Try it!

Create a script that prints out the numbers 1 to 10
on separate lines when run.
Try making it using both for and while loops (separately).

The result should look like:

```python
1
2
3
4
5
6
7
8
9
10
```

## Answer

With a for loop:

```python
for i in range(10):
    print(i + 1)
```

Remember, `range()` returns a sequence of numbers.
For every unit in the sequence,
the number (add `1` because `range()` counts from `0`) is printed.

With a while loop:

```python
count = 1
while count <= 10:
    print(count)
    count += 1
```

A variable called `count` is initially created.
Since it is less than or equal to `10`,
the number is printed.
The count is increased by one,
and the loop continues until it is greater than `10`.
