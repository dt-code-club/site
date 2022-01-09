% Canadian Computing Competition - Part 1
% Alex W.
% January 13, 2021

The CCC (Canadian Computing Competition)
is a well-known coding competition
held by the University of Waterloo,
taken each year in February
by students across Canada.

All the past contests can be found at [here](https://cemc.uwaterloo.ca/contests/past_contests.html#ccc).
There is a junior and senior competition,
each three hours long with five questions
that increase in difficulty.
You may participate in either competition but not both.
60+/75 is a good score to aim for in the junior contest
and 30+/75 is a good cutoff for the senior contest. 

All CCC questions are input-output questions;
your program must return the correct output given an input.

To do a CCC question, there are four main steps.
We will be using J1
from the [2021 junior competition](https://cemc.uwaterloo.ca/contests/computing/2021/ccc/juniorEF.pdf)
as an example.

## Read the question to break it down

- Water boils at different temperatures depending on your elevation
- Find the atmospheric pressure based off the boiling point of water
- The formula `P = 5 * b - 400` is provided

## Look at the input and outputs

- Get one line of input of a single integer
    - This is the `B` we see in the formula
- Output two lines:
    1. The atmospheric pressure
    2. Either `-1`, `0`, or `1` to indicate
       whether you are above, below, or at sea level

# Write the code

```python
# Input
b = int(input())

# First calculation
p = 5 * b - 400
print(p)

# Second calculation
if b == 100:
    print("0")
elif b > 100:
    print("-1")
else:
    print("1")
```

# Test the code with sample input

An input of `"99"` should result in
an output of `"95"` on the first line
and `1` on the next line.

The grader is extremely strict
and the output must be exactly as specified
(i.e. extra spaces will be marked wrong).

Try [J1 from 2020](https://cemc.uwaterloo.ca/contests/computing/2020/ccc/juniorEF.pdf)
by yourself!
The solution is as follows:

```python
# Input
s = int(input())
m = int(input())
l = int(input())

# Calculation
score = s + 2 * m + 3 * l

# Output
if score >= 10:
    print("happy")
else:
    print("sad")
```

