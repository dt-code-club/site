CCC (Canadian Computing Competition) is a well-known waterloo coding competition taken once a year in Febuary by students across Canada.

Search "CCC Past Contests". Click into https://cemc.uwaterloo.ca/contests/past_contests.html and scroll down to the bottom. Click on 2021 -> Junior. A PDF should open up with the J1 Boiling Water question. There is a Junior CCC, and a Senior CCC, each CCC has 5 questions (J1, J2, J3, J4, J5 and S1, S2, S3, S4, S5), you have 3 hours to complete either set but you cannot do both Junior and Senior. Difficulty increases with J1 being the easiest and J5 being the hardest. A score of 60+/75 is a good score to aim for in Junior and 30+/75 is a good cutoff for Senior. 

All CCC questions are input output questoins, your program must return the correct output given an input. To do a CCC question there are 4 main steps, we will be using J1 from 2021 as an example:

# 1. Read the Question to Break it Down
- Water boils at different temperatures depending on your elevation
- wants you to find atmospheric pressure based off the boiling point of water
- gives you the formula P = 5*b - 400

# 2. Look at the input and outputs

- Get one line of input of a single integer
  - this is the B we see in the formula
- Have to output two lines
  1) the atmospheric pressure
  2) either -1, 0, or 1 to see if your above/below or at sea level

# 3. Write the code

	```
	# Input
	b = int(input())
	
	# Calculation
	p = 5*b-400)
		
	# output
	print(p)

	# 2nd Calculation + output
	if b == 100: print("0")
	elif b > 100: print("-1")
	else: print("1")
	```

# 4. Test the Code with Sample Input
Inputting 99 in console should return 95 and 1 on seperate lines. If it does not return on seperate lines the output will be marked incorrect. The grader is extremely strict and extra spaces appended onto the end of a String will be marked completely wrong.

Try J1 2020 yourself! The solution is as follows:

	```
	# Grabbing Input
	s = int(input())
	m = int(input())
	l = int(input())
	
	# Calculating Score
	score = s + 2*m + 3*l
	
	# Output
	if score >= 10: print("happy")
	else: print("sad")
	```

