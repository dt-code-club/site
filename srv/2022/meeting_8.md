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

First, you'll want to have a Discord server
in which you can test your bot.
If you do not already have one, make a new Discord server
by clicking the green "Add A Server" button
beneath your servers in the bottom left.

Now, go to <https://discord.com/developers/applications>
and click on "New Application".
You can name it whatever you'd like!

![Create and name your application in Discord's Developer Portal!](/img/2022/create_discord_application.png)

Go down to the "Bot" section,
and click "Add Bot" to create the actual Discord bot with its own profile.

![Add a bot to the application.](/img/2022/add_discord_bot.png)

Your bot has been created!
To invite your bot into your server,
navigate to "URL Generator" under the "OAuth2" section,
and select "bot" in "Scopes" and "Administrator" in "Bot Permissions".
This will give the bot administrator permissions,
letting it do anything we program it to do;
you can select more specific permissions if you'd like.

![Generate an URL to add your bot.](/img/2022/discord_url_generator.png)

Copy and paste the generated URL into a new tab,
select your test server, and invite your bot.

![Select server to which to add your bot.](/img/2022/add_bot_to_server.png)

You should see your bot in your server now,
though it is offline!

![Your bot has joined your server!](/img/2022/bot_offline.png)

### Installing discord.py

Discord.py is a Python library that wraps the Discord API;
essentially, it provides an interface
for your Python program to interact with Discord.

In Python, libraries are called *modules* or *packages*;
they're nicely packaged sets of code
that someone else has put together where 
they've basically done all the complicated work for us.
Using modules is something very common in Python programming, 
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

A Discord bot account is not unlike a user account;
it needs to log into Discord to work.
This can be done with a *token*.

Go back to your application in the Discord Developer Portal
and copy the token in the "Bot" section.
As the token is what logs the bot in,
it is similar to a password, and should be kept private.

![Copy your bot's token.](/img/2022/copy_bot_token.png)

Paste it into your code and save it to a variable:

```python
# Your token will look something like this
token = "OTQ3MfsYsdflDoisdsfDTcc4.YhdrTt.hIdsfpJDFSifdsrelaxHmtYalL4"
```

To create the bot in Python,
use discord.py's `discord.Client()` function,
and save that to a variable, such as `bot` or `client`.

To log in, the only thing left to do
is to call the `.run()` method with the private token as an argument!

The following code will create a Discord bot and log in:

```python
import discord

client = discord.Client()

token = "OTQ3MfsYsdflDoisdsfDTcc4.YhdrTt.hIdsfpJDFSifdsrelaxHmtYalL4"
client.run(token)
```

You should see that your bot is now online in your Discord server!

![You've logged your bot in!!!](/img/2022/bot_online.png)

That's all we have time for today!
Come back next week to explore the different things
that you can make your Discord bot do!

If you want to look ahead,
you can try reading the [discord.py documentation](https://discordpy.readthedocs.io/en/stable/index.html)!

