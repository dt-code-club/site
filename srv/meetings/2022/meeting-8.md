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
This will give the bot administrator permissions,
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

![Copy your bot's token.](/img/2022/copy_bot_token.png)

A Discord bot account is not unlike a user account;
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

Run this code,
and you should see that your bot is now online in your Discord server!

### Turning the bot on

The library discord.py will be used for this project,
and the documentation can be found
at <https://discordpy.readthedocs.io/en/stable/index.html>.

![You've logged your bot in!!!](https://cdn.discordapp.com/attachments/784512962152235019/946275696794300447/1-18.png)

