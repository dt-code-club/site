% Programming a Discord Bot (Part 4): Using Discord.Embed to Make a “Help” Command
% Eric Y.
% April 21, 2022

For all Discord bots designed to be used by people other than yourself, it’s nice to have a “help” command to let users know what the bot can do. 
In this lesson, we’ll be making the help command with a Discord embed, which makes the message look nicer.

## Making a Command List
In the same folder as your code, create a new text file. You can name it whatever you want, but we’ll be naming it “help.txt” in this tutorial. 
In it, indicate what you want the bot to say in the main body of the message. 
Mine indicates what prefix the bot uses, what commands are available, and what they do.
```
The prefix for this bot is the period (.)!

.help - sends the list of commands
.hello - sends a hello message
.fact - sends an extremely true fact
```

## Opening the Text File in Code with .read() 
Beneath your client variable, create a new function called `get_text`. 
This function will open up the command list you just made to be used in the help command. 
We’ll store the contents of the list in a temporary variable we’ll call `text` using the open() function. 
Then, the function will return `text` with the .read() method. 
Unlike the `.readlines()` method, `.read()` returns the file’s text as is instead of putting each line into a list of strings. 
```
def get_text(text_file):
  text = open(text_file)
  return text.read()
```

## Formatting the Embed Message
Embedded messages might not do much more than regular messages, but they look much nicer. 
You can use them to make your bot’s messages stand out from regular user messages. 
This lesson will be using the title, colour, description, and thumbnail attributes of embedded messages, 
but a full list of attributes can be found in the 
[discord.py documentation](https://discordpy.readthedocs.io/en/stable/api.html?highlight=discord%20embed#discord.Embed).

To make our code neater, we’ll store the embedded message in a variable called `help`. 
This variable should be placed below the functions, but above the events. With `discord.Embed()`, 
we can specify what attributes we want in the message within the brackets.
Attributes are all separated by commas and have their values indicated with an equals (=) sign.

In our example, the title is `“Here’s a list of commands!”`, the colour (specified with its hex code and a “0x” before it) 
is green, and the description is the text file opened with the `get_text` function.
To set the thumbnail, which will appear as a tiny image in the top right of the message, 
you must use the `set_thumbnail()` method. Within it, put the link to the image in the `url` attribute. 
If you want to use an image stored locally, 
[this Reddit thread](https://www.reddit.com/r/Discord_Bots/comments/rfq0a4/discordpy_set_thumbnail_in_embeds_with_a_local/) explains it.
```
help = discord.Embed(title = "Here's a list of commands!", colour = 0x005c24, description = get_text("./help.txt")).set_thumbnail(url="https://dtcode.club/img/picardia.png")
```
If you instead wanted the image to appear larger and beneath the description, change `set_thumbnail` to `set_image`. They can be gifs too, so have fun!

## Making the Help Command
Just like with the hello and fact commands, we’ll be using an if statement for the help command. 
However, we’ll need to specify that the message that will be sent is embedded with the `embed` attribute in `message.channel.send()`. 
This attribute can be set to help, which is what we named the variable storing our embedded message.
```
  if message.content.startswith(".help"):
    await message.channel.send(embed = help)
```
Run your code to turn on the bot, and send .help in your Discord server to see what happens. 
You can take the concepts from this lesson to play around with embedded message formatting, 
or combine it with last week’s lesson to make your randomized responses fancier! If you do, 
send some screenshots of your work to our Discord server or email!
