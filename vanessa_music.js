module.exports = {
    //Library List
    MusicLib:[
        {title:"Who Says",artist:"Selena Gomez",genre:"Pop",code:"EL1"},
        {title:"Moment to Memories",artist:"Adeline Hill",genre:"Pop",code:"EL2"},
        {title:"Blue and White Porcelain",artist:"Jay Chou",genre:"CPop",code:"C02"}
    ],
    //Playlist List
    MusicPlaylist:[
        {title:"Who Says",code:"EL1"},
        {title:"Blue and White Porcelain",code:"C02"}

    ],

    //Add music to the library 
    addMusic(title,artist,genre,code){
        this.MusicLib.push({title:title,artist:artist,genre:genre,code:code});
    },
    //Add Music from the library to the playlist
    addMusicPlaylist(title, code ) {
        const music = this.MusicLib.find(music => music.code === code);
        if (!music) {
            console.log(`Music with code "${code}" not found in the library.`);
            return music;
        }
        if (this.MusicPlaylist.some(item => item.code === code)) {
            console.log(`Music with code "${code}" is already in the playlist.`);
            return music;
        }
        this.MusicPlaylist.push(music);
        console.log( `Added "${title}" to the playlist.`);
    },
    
    //Delete specific music using code from playlist 
    deleteMusicPlaylist(code) {
        const index = this.MusicPlaylist.findIndex(music => music.code === code);
        if (index === -1) {
            console.log(`Music with code "${code}" not found in the playlist.`);
        }
        this.MusicPlaylist.splice(index, 1);
        console.log( `Deleted music with code "${code}" from the playlist.`);
    },
    //Display the Music inside the library  based on it gerne
    searchMusicByGenre(genre) {
        const searchResult = this.MusicLib.filter(music => music.genre === genre);
        if (searchResult.length === 0) {
            console.log(`No music found in the library for genre "${genre}".`);
            return searchResult;
        }
        console.log(`\nThe results for music in the library with a genre "${genre}":\n`);
        this.displayMusicGerneList();
        //return searchResult;
    },
    //Update the Music Library
    updateMusic(code, newTitle, newArtist, newGenre) {
        const musicIndex = this.MusicLib.findIndex(music => music.code === code);
        if (musicIndex === -1) {
            console.log(`Music with code "${code}" not found in the library.`);
        }
        // If the code exist it will do an update 
        const music = this.MusicLib[musicIndex];
        if (newTitle) music.title = newTitle;
        if (newArtist) music.artist = newArtist;
        if (newGenre) music.genre = newGenre;

        console.log (`Updated music with code "${code}".`);
    },
    //Display the Music Library and Playlist
    displayMusicLists() {
        console.log("\nMusic Library:");
        this.MusicLib.forEach(music => {
            console.log(`Title: ${music.title}, Artist: ${music.artist}, Genre: ${music.genre}, Code: ${music.code}\n`);
        });
        console.log("\nMusic Playlist:");
        this.MusicPlaylist.forEach(music => {
            console.log(`Title: ${music.title}, Code: ${music.code}\n`);
        });
    },
    //Display the result with the searched gerne
    displayMusicGerneList(){
        
        this.MusicLib.forEach(music => {
            console.log(`Title: ${music.title}, Artist: ${music.artist}, Genre: ${music.genre}, Code: ${music.code}\n`);
        });
    }
    

    
};
