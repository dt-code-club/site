% Programming a Discord Bot (Part 2): First Command
% Eric Y.
% March 3, 2022

In this lesson, we will be making an activation indicator
to let us know that the bot has logged in,
as well as our first text-based command!

## Activation indicator

You should have the following code
from the [last meeting](/2022/meeting_8.html):

```
import discord

client = discord.Client()

token = "OTQ3MfsYsdflDoisdsfDTcc4.YhdrTt.hIdsfpJDFSifdsrelaxHmtYalL4"
client.run(token)
```

To implement the activation indicator,
we will need to use events.
Events are functions that are called whenever a specific thing happens.
In the discord.py library,
the `on_ready()` event is called once the bot has logged in.

Events are asynchronous,
meaning that instead of running one line of code after the other,
multiple events can be executed simultaneously.
This allows the bot to process multiple events at a faster pace.
You can [read more about asynchronous programming in Python](https://realpython.com/python-async-features/).

To register an event we'll put in `@client.event`,
and in the next line create a function called `on_ready()`,
with the `async` keyword before it to make it asynchronous.
Within the function,
we'll put `print(f"We have logged in as {client.user}")`.
This will make the bot print its Discord tag
in the shell once it turns on:

```
@client.event
async def on_ready():
    print(f"We have logged in as {client.user}")
```

Run the code,
and you should see "We have logged in as My First Bot!!!!!!#5130"
in your terminal
(but with the Discord tag of *your* bot).

## "Hello" command

This command will make the bot say "Hello!"
when you send ".hello" in your server.
First, make another asynchronous event,
this time with a function called `on_message()`.
This event from discord.py will trigger
on each message that is sent.
This function will also need the `async` keyword
as well as an argument `message` for the function
representing the sent message that triggered the event:

```
@client.event
async def on_message(message):
```

Underneath this is where the fun begins!
However, we first need to prevent the bot from responding to itself.
If we sent ".hello" to it and it sent ".hello" back,
we wouldn't want it to keep sending ".hello" indefinitely
(taking in its own message as a command).
To do this, we'll make an if statement
to check that the message was not sent by the bot:

```
@client.event
async def on_message(message):
    if message.author == client.user:
        return
```

Next, we'll add an if statement
that sends a message if we send ".hello". 

```
@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith(".hello"):
        await message.channel.send("Hello!")
```

The `await` keyword makes Python wait
until something is returned,
which in this case is
for the response message to finish sending.

Everything should now look like this:

```
import discord

client = discord.Client()

@client.event
async def on_ready():
    print(f"We have logged in as {client.user}")

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith(".hello"):
        await message.channel.send("Hello!")

token = "OTQ3MfsYsdflDoisdsfDTcc4.YhdrTt.hIdsfpJDFSifdsrelaxHmtYalL4"
client.run(token)
```

Run your code,
and send ".hello" in your test server to see what happens!

Try playing around,
changing what triggers the `on_message()` event
or what the response is,
even making the bot do something else
instead of just replying "Hello!"
Be creative...the possibilities are limitless!

