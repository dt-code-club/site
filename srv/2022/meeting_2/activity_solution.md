---
title: "Activity Solution for Python Lesson #2"
author: Bruce T.
date: November 8, 2021
---

Hopefully you were able to successfully complete
the activity we posted last Friday!

Here is a possible solution:

```python
num_1 = -5
num_2 = 8
num_3 = 7.5

total = num_1 + num_2 + num_3
average = total / 3

print(average)

if average > 0:
    print("The average is positive")
elif average < 0:
    print("The average is negative")
else:
    print("The average is zero")
```

## Explanation

The average of a set of numbers can be found
by adding each of the numbers together
and dividing the total by the amount of numbers.

Next, the first if statement checks
whether the average is greater than zero.
If `average > 0` evaluates to `True`,
then that means the average *is* greater than zero,
and it prints "The average is positive".

Otherwise, it continues,
checking whether the average is less than zero.
If `average < 0` evaluates to `True`,
then it will print "The average is negative".

If it instead evaluates to `False`,
then there is only one other possibility left:
The average is zero, which is neither positive nor negative.
The code inside the `else` block will be executed,
printing "The answer is zero".
