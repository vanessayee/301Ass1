# Assignment 1
## Description
This module provides functionalities for managing a music library and playlists efficiently. It allows users to add, update, delete music entries, search for music by genre, and manage playlists seamlessly.

## How to Use?
- Clone the repository to your own directory
<!-- * Install the node.js to use the module for your project
```
npm install vanessa_music.js
``` -->
+ You may want to create another js file to test the code:
```
const music = require("./music.js");

music.displayMusicLists();
// Adding a new music
music.addMusic('小幸運','Hebe Tien','CPoP','C01');
// Displaying the updated music lists
music.displayMusicLists();
// Adding music from the library to the playlist
music.addMusicPlaylist('The Greatest SnowMan','EL2');
music.displayMusicLists();
// Deleting music from the playlist
music.deleteMusicPlaylist('EL2');
music.displayMusicLists();
// Searching for music by genre
music.searchMusicByGenre("Pop");
// Updating music in the library
music.updateMusic('C01','小幸運','Hebe Tien','CPOP');
music.displayMusicLists();
```

## Explanation of the Functions:
- addMusic() : Able to add music to the library 
- addMusicPlaylist() : Add music in the library to the playlist
- deleteMusicPlaylist() : Delete the specific music from the playlist (using code to check then proceed to delete the music the user specify)
- updateMusic() : Update the music library if the music is found in the library (using code to check wether the music is stored in the library list)
- displayMusicLists() : Display the updated library and playlist list 
- searchMusicByGenre() 
    - displayMusicGerneList() : Search and display the music that belong to that genre from the library list.