let sctListOfArtists, sctArtists, ulSongs;

window.addEventListener('load', init);

function init(){
    loadDOM();
    addListToDOM();
    addListOfArtistInfoToDOM();
}

function loadDOM(){
    sctListOfArtists = document.querySelector(".list-of-artists");
    sctArtists = document.querySelector(".artists");
    ulSongs = document.querySelector(".songs");
}

function addListToDOM() {
    for (const artist of musicArtists) {
        const articleNewArtist = document.createElement("article");
        articleNewArtist.textContent = artist;
        sctListOfArtists.appendChild(articleNewArtist);
    }
}

function addListOfArtistInfoToDOM(){
    for (const artist of musicArtistsObj) {
        const articleArtist = createArtistCard(artist.name, artist.image, artist.description);
        sctArtists.appendChild(articleArtist);
    }
}

function createArtistCard(name, image, description) {
    const hdgName = document.createElement("h2");
    hdgName.textContent = name;

    const pDescription = document.createElement("p");
    pDescription.textContent = description;

    const imgArtist = document.createElement("img");
    imgArtist.src = image;

    const articleArtist = document.createElement("article");
    articleArtist.appendChild(imgArtist);
    articleArtist.appendChild(hdgName);
    articleArtist.appendChild(pDescription);

    articleArtist.addEventListener("click", showSongsOfArtist);

    return articleArtist;
}

function showSongsOfArtist() {
    const artistName = this.querySelector("h2").textContent;
    const artistObj = findArtistInfo(artistName)

    clearSongs();
    artistObj.songs.forEach(song => {
        const liSong = document.createElement("li");
        liSong.textContent = song;
        ulSongs.appendChild(liSong);
    });
}

function findArtistInfo(name) {
    for (const artist of musicArtistsObj) {
        if(artist.name === name){
            return artist;
        }
    }
    return null;
}

function clearSongs() {
    while(ulSongs.firstChild){
        ulSongs.removeChild(ulSongs.firstChild);
    }
}