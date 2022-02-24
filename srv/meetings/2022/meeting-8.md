% Programming a Discord Bot (Part 1): Setup
% Eric Y. and Bruce T.
% February 23, 2022

We've heard what you want
--- our highest voted option in our survey
was creating Discord bots ---
so starting today,
we'll be starting a short series of lessons
to get you started on your own Discord bots!

The only thing you'll need for this tutorial
is to have Python3 installed
--- we will be using the [discord.py](https://github.com/Rapptz/discord.py)
Python module ---
and a Discord account.

### Creating a bot account

![Create and name your application in Discord's Developer Portal!](/img/2022/create_discord_application.png)

First, you'll want to have a Discord server
in which you can test your bot.
If you do not already have one, make a new Discord server
by clicking the green "Add A Server" button
beneath your servers in the bottom left.

Now, go to <https://discord.com/developers/applications>
and click on "New Application".
You can name it whatever you'd like!

Next, go down to the "Bot" section,
and click "Add Bot" to create the actual Discord bot with its own profile.

![Add a bot to the application.](/img/2022/add_discord_bot.png){width=45%}
![Your bot profile has been created!](/img/2022/discord_bot_profile.png){width=45%}

Your bot has been created!
To invite your bot into your server,
navigate to "URL Generator" under the "OAuth2" section,
and select "bot" in "Scopes" and "Administrator" in "Bot Permissions".
This will give the bot adminitrator permissions,
letting it do anything we program it to do;
you can select more specific permissions if you'd like.

![Generate an URL to add your bot.](/img/2022/discord_url_generator.png)

Copy and paste the generated URL into a new tab,
select your test server, and invite your bot.

![Select server to which to add your bot.](/img/2022/add_bot_to_server.png)

![Authorize bot.](/img/2022/authorize_bot.png)

You should see your bot in your server now!

![Your bot has joined your server!](/img/2022/bot_in_server.png)

### Installing discord.py

Discord.py is a Python library that wraps the Discord API;
essentially, it provides an interface
for your Python program to interact with Discord.

In Python, libraries are called *modules* or *packages*;
they're nicely packaged sets of code
that someone else has put together where 
they've basically done all the complicated work for us.
Uisng modules is something very common in Python programming, 
and you may find them useful for many projects you do.

Some modules are built-in, while some you have to be installed.
Python's package manager, PIP, can be used to install modules.
To install discord.py, open up a terminal
(Command Prompt or PowerShell on Windows)
and enter:

```
pip install discord
```

In your code, installed modules must be imported to be used.
This can be done at the top of each Python script
with `import` statements.
Create a new Python file,
and write at the top:

```python
import discord
```

### Logging in

![Copy your bot's token.](/img/2022/copy_bot_token.png)

A Discord bot account is not unlike a user acccount;
it needs to log into Discord to work.
This can be done with a *token*.

Go back to your application in the Discord Developer Portal
and copy the token in the "Bot" section.
As the token is what logs the bot in,
it is similar to a password, and should be kept private.

Paste it into your code and save it to a variable:

```python
# Your token will look something like this
token = "OTQ3MfsYsdflDoisdsfDTcc4.YhdrTt.hIdsfpJDFSifdsrelaxHmtYalL4"
```

The following code will create a Discord bot and log in:

```python
import discord

client = discord.Client()

token = "OTQ3MfsYsdflDoisdsfDTcc4.YhdrTt.hIdsfpJDFSifdsrelaxHmtYalL4"
client.run(token)
```

Run this code, and you should see your bot in your Discord server!

### Events

Next, make an "event" that runs
when we start the bot with `@client.event`. 
This function will print out the bot's username in the terminal
once we turn the bot on, calling it `on_ready()`. 
However, `async` makes the program asynchronous.
This means that instead of reading the code strictly line by line, 
the function will only be called whenever this event happens.
Multiple things can be set up at once at a faster pace. 
You can find out more at <https://realpython.com/python-async-features/>.

```python
@client.event
async def on_ready():
    print(f"Logged in as {client.user}!")

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    await message.channel.send(message.content)
```

<!--

### Replit Setup

Go to <https://replit.com/> and login or create an account.
Create a new repl with the "Create" button in the top left.
Select Python, name your repl, then click "Create Repl".

![Replit Homepage](https://cdn.discordapp.com/attachments/784512962152235019/946275694810370089/1-10.png)

![Create Repl](https://cdn.discordapp.com/attachments/784512962152235019/946275695091417138/1-11.png)

Next, connect the bot to the repl
by making the bot's token an environment variable.
The bot's token is like a password to control the bot, 
so it's best to keep it private.
We can't make our repl private without the paid version of Replit, 
but we can make the token an environment variable
so that people who look at the public code
won't be able to access the token.

Under "Secrets" in the sidebar of Replit,
name the key `TOKEN` and paste the token into value.
This is like adding a key and value to a dictionary.

![Make Secret](https://cdn.discordapp.com/attachments/784512962152235019/946275695527600148/1-13.png)

Insert the import and secret with the two prompts.
You can also rename `my_secret` to `token`.

![Insert Prompts](https://cdn.discordapp.com/attachments/784512962152235019/946275695703781376/1-14.png)

![Rename Secret to Token](https://cdn.discordapp.com/attachments/784512962152235019/946275696018358342/1-15.png)

Replit handles the downloading for us, 
so we don't have to worry about downloading the ones we don't have. 
The `os` library stands for operating system,
and lets us access things like environment variables. 
The variable `token` accesses the value that the `TOKEN` key gives us.

### Turning the bot on

The library discord.py will be used for this project,
and the documentation can be found
at <https://discordpy.readthedocs.io/en/stable/index.html>.

![Import Discord](https://cdn.discordapp.com/attachments/784512962152235019/946275696270008320/1-16.png)

![Code](https://cdn.discordapp.com/attachments/784512962152235019/946275696559398992/1-17.png)

![Bot is On](https://cdn.discordapp.com/attachments/784512962152235019/946275696794300447/1-18.png)

Click run, and after Replit sets up a few more things automatically,
you should see your bot come online in your server!

## Replit

To follow along with this tutorial exactly,
you will need a [Discord](https://discord.com/)
and [Replit](https://replit.com/) account.
Replit is like Google Docs for code,
so if you want to write all the code in files on your own computer, you can.
However, using Replit will let you
access your work no matter what computer you are on,
and if you want to keep your bot running 24/7
you can do so with Replit's "Hacker Plan"
(which you can get three months for free
from the [GitHub Student Developer Pack](https://education.github.com/pack)).

-->
