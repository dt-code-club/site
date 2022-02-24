## Basic Discord Bot (Part 1) - Making Your Bot Turn On
To follow along with this tutorial exactly, you will need a [Discord](https://discord.com/) and [Replit](https://replit.com/) account.
Replit is like Google Docs for code, so if you want to write all the code in files on your own computer, you can. However, using replit will let you
access your work no matter what computer you are on, and if you want to keep your bot running 24/7 you can do so with Replit's "Hacker Plan" (which 
you can get three months for free from the [GitHub Student Developer Pack](https://education.github.com/pack)).

### Discord Setup
First, make a new Discord server to test your bot in. You can do this by clicking the green "Add A Server" button beneath your servers in the bottom
left. Then go to https://discord.com/developers/applications, sign in, click "Applications", then click "New Application". You can name it whatever you'd like!

(image)(2x)

Go down to “Bot”, and click “Add Bot” to create the actual discord bot with its own profile.

(image)(2x)

Scroll down to “Privileged Gateway Intents”, then turn on all three sliders. These give permissions to let the bot do things!

(image)

Go down to “OAuth2”, then “URL Generator”. Select “bot” and “Administrator” to give it administrator privileges. 
You can select more specific permissions if you’d like, but this will let it do anything we program it to do.

(image)

Copy and paste the generated url into a new tab, select your test server, and invite your bot.

(image)(2x)

You should see your bot in your server now!

(image)

### Replit Setup

Go to https://replit.com/ and login or create an account.
Create a new repl with the “Create” button in the top left. Select Python, name your repl, then click “Create Repl”.

(image)(2x)

Next, connect the bot to the repl by making the bot’s token an environment variable. The bot’s token is like a password to control the bot, 
so it’s best to keep it private. We can’t make our repl private without the paid version of replit, 
but we can make the token an environment variable so that people who look at the public code won’t be able to access the token.

First, go back to the Discord bot's page and click "Copy" under Token.

(image)

Under “secrets” in the sidebar of replit, name the key TOKEN and paste the token into value. This is like adding a key and value to a dictionary.

(image)

Insert the import and secret with the two prompts. You can also rename “my_secret” to “token”. Importing modules is something very common in Python programming, 
and you’ll find them useful for many projects you do. They’re nicely packaged sets of code that someone else has put together where 
they’ve basically done all the complicated work for us. Make sure to have all the import declarations at the top. 

(image)(2x)

Some libraries are built in, while some you have to download. Repl handles the downloading for us, 
so we don’t have to worry about downloading the ones we don’t have. 
The “os” library stands for operating system, and lets us access things like environment variables. 
The variable “token” accesses the value that the “TOKEN” key gives us.

### Writing Some Code

The library discord.py will be used for this project, and the documentation can be found at https://discordpy.readthedocs.io/en/stable/index.html.
(Note: if you are doing this on your own machine, you can download libraries
by entering `pip install (library name)` into your terminal. For this project, you would need to do `pip install discord`).
Type in “import discord”, and then “from discord.ext import commands”. 

(image)

Make a “client” variable to detail some more about our bot. 
Specify two arguments: the prefix used to indicate we’re using a command (a period in our case), and intents. 
Intents are basically permissions, and in our case for the sake of simplicity we’re letting it use all of them.

Next, make an “event” that runs when we start the bot with @client.event. 
This function will print out the bot’s username in the terminal once we turn the bot on, calling it on_ready(). 
However, “async” makes the program asynchronous. This means that instead of reading the code strictly line by line, 
the function will only be called whenever this event happens. Multiple things can be set up at once at a faster pace. 
You can find out more at https://realpython.com/python-async-features/.

Add client.run(token) at the bottom to make the bot turn on when you run the replit. 

(image)(2x)

Click run, and after replit sets up a few more things automatically you should see your bot come online in your server!
