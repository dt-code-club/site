% Programming a Discord Bot (Part 3): Adding a “Random Fact” Command
% Eric Y.
% April 14, 2022

This lesson will cover basic usage of the built-in random module and opening up information from a separate file! We’ll use these concepts to create a command that sends us a random fact from a separate text file.

## Making a Fact List/Text File
Within the same folder of your bot’s code, make a new text file (it can be named whatever you want). Add a few lines of text on separate lines, each line containing a different message you’d like your bot to send. My text file, named `facts.txt`, looks like this:
```
This is fact 1!
This is fact 2!
This is fact 3!
```

## Making Functions
To start, put `import random` at the top of your bot’s code. The built-in random module will help us randomize the fact the bot will send.

Next, we’ll make two functions: One to open and read the text file, and another to return a random fact from the fact list. These functions will be put above the events because they are simple functions to be used within our code and do not need the `@client.event` keyword. 

## Opening the Text File in Code with .readlines()
The first one, `get_list()`, will take in the text file we want to use as an argument. 
We’ll store the contents of the list in a temporary variable we’ll call `list` using the open() function. 
Then, the function will return `list` as a list with each line as a string with the `.readlines()` method.
```
def get_list(text_file):
  list = open(text_file)
  return list.readlines()
```

## Using the Random Module to send a Random Fact
The second one, `get_fact()`, will not have any arguments. 
Using the `get_list` function we just made, we’ll store the contents of the fact list in a variable called `fact_list`. 
Specify which text file should be used in the `get_list` function using the path from the folder you’re working in 
(here, the `.` represents the current directory (or folder) and the `/` indicates which file within the folder to access).
Then, the function will return a random fact from `fact_list` using the `random.choice()` function from the `random` module.
```
def get_fact():
  fact_list = get_list("./facts.txt")
  return random.choice(fact_list)
```

## Making the Discord Command
Underneath the if statement for the `.hello` command from last time, make a new if statement. 
It will have `if message.content.startswith()` like last time, but instead of `.hello` we’ll have `.fact` within the brackets. 
Within the if statement, put `await.channel.send(get_fact())`. This will send a random fact using the two functions we made above. 
The whole event block (including code from the previous lesson) should look like this:
```
@client.event
async def on_message(message):
  if message.author == client.user:
    return
  if message.content.startswith(".hello"):
    await message.channel.send("Hello!")
  if message.content.startswith(".fact"):
    await message.channel.send(get_fact())
```

Run your code to turn on the bot, and send .fact in your Discord server to see what happens. 
You can take the concepts from this lesson to make other randomized functions, like a magic 8-ball or a coin flipper! 
If you do, send some screenshots of your work to our Discord server or email!
