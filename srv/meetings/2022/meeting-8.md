% Programming a Discord Bot (Part 1): Setup
% Eric Y. and Bruce T.
% February 23, 2022

### Basic Discord Bot (Part 1) - Making Your Bot Turn On

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

### Discord Setup

First, make a new Discord server to test your bot in.
You can do this by clicking the green "Add A Server" button
beneath your servers in the bottom left.
Then go to <https://discord.com/developers/applications>,
sign in, click "Applications", then click "New Application".
You can name it whatever you'd like!

![Create and name your application in Discord's Developer Portal!](/img/2022/create_discord_application.png)

Go down to "Bot",
and click "Add Bot" to create the actual Discord bot with its own profile.

![Add a bot to the application.](/img/2022/add_discord_bot.png)

![Your bot profile has been created!](/img/2022/discord_bot_profile.png)

Scroll down to "Privileged Gateway Intents",
then turn on all three sliders.
These give permissions to let the bot do things!

![Permissions](https://cdn.discordapp.com/attachments/784512962152235019/946275586756730990/1-5.png)

Go down to "OAuth2", then "URL Generator".
Select "bot" and "Administrator" to give it administrator privileges. 
You can select more specific permissions if you'd like,
but this will let it do anything we program it to do.

![Generate an URL to add your bot.](/img/2022/discord_url_generator.png)

Copy and paste the generated URL into a new tab,
select your test server, and invite your bot.

![Select server to which to add your bot.](/img/2022/add_bot_to_server.png)

![Authorize bot.](/img/2022/authorize_bot.png)

You should see your bot in your server now!

![Your bot has joined your server!](/img/2022/bot_in_server.png)

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

First, go back to the Discord bot's page and click "Copy" under Token.

![Copy your bot's token.](/img/2022/copy_bot_token.png)

Under "Secrets" in the sidebar of Replit,
name the key `TOKEN` and paste the token into value.
This is like adding a key and value to a dictionary.

![Make Secret](https://cdn.discordapp.com/attachments/784512962152235019/946275695527600148/1-13.png)

Insert the import and secret with the two prompts.
You can also rename `my_secret` to `token`.
Importing modules is something very common in Python programming, 
and you'll find them useful for many projects you do.
They're nicely packaged sets of code
that someone else has put together where 
they've basically done all the complicated work for us.
Make sure to have all the import declarations at the top. 

![Insert Prompts](https://cdn.discordapp.com/attachments/784512962152235019/946275695703781376/1-14.png)

![Rename Secret to Token](https://cdn.discordapp.com/attachments/784512962152235019/946275696018358342/1-15.png)

Some libraries are built-in, while some you have to download.
Replit handles the downloading for us, 
so we don't have to worry about downloading the ones we don't have. 
The `os` library stands for operating system,
and lets us access things like environment variables. 
The variable `token` accesses the value that the `TOKEN` key gives us.

### Turning the bot on

The library discord.py will be used for this project,
and the documentation can be found
at <https://discordpy.readthedocs.io/en/stable/index.html>.
(Note: if you are doing this on your own machine,
you can download libraries by entering
`pip install (library name)` into your terminal.
For this project, you would need to do `pip install discord`).
Type in `import discord`, and then `from discord.ext import commands`. 

![Import Discord](https://cdn.discordapp.com/attachments/784512962152235019/946275696270008320/1-16.png)

Make a `client` variable to detail some more about our bot. 
Specify two arguments:
the prefix used to indicate we're using a command (a period in our case),
and intents. 
Intents are basically permissions,
and in our case for the sake of simplicity,
we're letting it use all of them.

Next, make an "event" that runs
when we start the bot with `@client.event`. 
This function will print out the bot's username in the terminal
once we turn the bot on, calling it `on_ready()`. 
However, `async` makes the program asynchronous.
This means that instead of reading the code strictly line by line, 
the function will only be called whenever this event happens.
Multiple things can be set up at once at a faster pace. 
You can find out more at <https://realpython.com/python-async-features/>.

Add `client.run(token)` at the bottom
to make the bot turn on when you run the Replit. 

![Code](https://cdn.discordapp.com/attachments/784512962152235019/946275696559398992/1-17.png)

![Bot is On](https://cdn.discordapp.com/attachments/784512962152235019/946275696794300447/1-18.png)

Click run, and after Replit sets up a few more things automatically,
you should see your bot come online in your server!

