% Programming a Discord Bot (Part 2): First Command
% Eric Y.
% March 3, 2022

In this lesson, we will be making an activation indicator
to let us know that the bot has turned on
and our first text-based command!

## Activation indicator

You should have the following code from last time:

```
import discord

client = discord.Client()

token = "OTQ3MfsYsdflDoisdsfDTcc4.YhdrTt.hIdsfpJDFSifdsrelaxHmtYalL4"
client.run(token)
```

(If you missed it, be sure to check out the notes from [part 1](/2022/meeting_8.html)!)

To register an event we'll put in `@client.event`,
and in the next line put `async def on_ready():`.
Events are actions that occur when something else happens,
and in the discord.py library
the `on_ready()` event is called once the bot has logged in.
The `async` keyword makes this asynchronous,
meaning that instead of reading the code strictly line-by-line,
this function will only be called whenever this event happens.
Multiple things can be set up at once at a faster pace.
You can find out more at <https://realpython.com/python-async-features/>.

Next, within the `on_ready()` function,
we'll put `print(f"We have logged in as {client.user}")`.
This will make the bot print its Discord tag
in the shell once it turns on.

Your code should look like this right now:

```
import discord

client = discord.Client()

@client.event
async def on_ready():
    print(f"We have logged in as {client.user}")

token = "OTQ3MfsYsdflDoisdsfDTcc4.YhdrTt.hIdsfpJDFSifdsrelaxHmtYalL4"
client.run(token)
```

Run the code,
and you should see "We have logged in as (Discord tag)"
in your terminal.

## "Hello" Command

This command will make the bot say "Hello!"
when you send ".hello" in your server.
First, make a new event under the previous code block with `@client.event`.
The `on_message()` event from discord.py will trigger
after any message is sent.
This function will need the `async` keyword
as well as `message` in the brackets as an argument,
representing any message we send.

It should appear like this:

```
@client.event
async def on_message(message):
```

Underneath this is where the fun begins!
However, we first need to prevent the bot from responding to itself.
If we sent ".hello" to it and it sent ".hello" back,
we wouldn't want it to keep sending ".hello" indefinitely
(taking in its own message as a command).
To do this, we'll make an if statement:

```
@client.event
async def on_message(message):
    if message.author == client.user:
        return
```

This way, if the author of the message is the bot,
the `return` keyword will stop the function from doing anything else.

Next, we'll add an if statement
that sends us a message if we send ".hello". 

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
for the start of someone's message (`message.content`)
to be ".hello" in the discord server,
and then sends "Hello!" in the channel the message is in.

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

