# liri-node-app

This is my LIRI-NODE-APP.  It is a node.js based javascript application that will draw input from the user or from a txt file (random.txt, which is included) and return information about a movie, a song, or concert information as a response.  Since it is node.js based, there is no deployed website or html files.  This code is executed entirely from the bash/terminal, after it has been downloaded locally and with proper node packets installed (package.json, node-spotify-api, dotenv, request, moment, axios).  I will explain the instructions for using this programas much as I can, and I will include Screenshots of instructions when I can.

After Downloading the files and after proper package installation, the app will be ready for use.  To use it, navigate to the directory that contains the liri.js and keys.js and the other files:

![Starting Location](/screenshots/directory-screenshot.png)

Once here, the following command line arguments will need to be entered every time the program is to be run: node liri.js

![node liri.js](/screenshots/first-commands.png)

After that, you can choose whether you want to look up information on a song, a band's upcoming concerts, or a movie.  This can be done with the commands: spotify-this-song   :   concert-this    :   movie-this

Commands can also be taken from the text file "random.txt", and that can be done by entering:      do-what-it-wants

Whenever the program is executed, a message saying "this is loaded" will display before the results.  This is to show that the keys from the keys.js file have been accessed successfully.

spotify-this-song is followed by the song name, no quotes or braces or underscores needed.  And if no song is entered, "The Sign" by Ace of Base will be shown:

![spotify-this-song](/screenshots/songs.png)

concert-this is followed by the name of a band, and then information on that band's upcoming concerts and venues will be displayed (if any):

![concert-this](/screenshots/concerts.png)

