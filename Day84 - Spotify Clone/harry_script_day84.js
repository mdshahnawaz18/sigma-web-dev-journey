let currentSong = new Audio();
let songs = [];
let currentFolder = "";

// Utility function: seconds → mm:ss
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// Play a song
function playMusic(track, pause = false) {
    if (!track) return;
    currentSong.src = `${currentFolder}/${track}`;
    if (!pause) {
        currentSong.play();
        document.getElementById("play").src = "img/pause.svg";
    } else {
        document.getElementById("play").src = "img/play.svg"; // default pause
    }
    document.querySelector(".songinfo").innerHTML = decodeURIComponent(track);
}

// Fetch songs from a folder
async function getSongs(folder) {
    currentFolder = folder;
    let a = await fetch(`${folder}/`);
    let response = await a.text();
    console.log('response', response);

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");

    songs = [];
    for (let i = 0; i < as.length; i++) {
        let element = as[i];
        if (element.href.endsWith(".mp3")) {

            let songName = element.href.split(`/${folder}/`)[1];
            console.log('name', songName);

            songs.push(songName);
        }
    }

    // Show in Your Library
    let songUL = document.querySelector(".songList ul");
    songUL.innerHTML = "";
    for (const song of songs) {
        songUL.innerHTML += `
        <li>
            <img class="invert" src="img/music.svg" alt="">
            <div class="info">${decodeURIComponent(song)}</div>
        </li>`;
    }

    // Click to play from library
    Array.from(songUL.getElementsByTagName("li")).forEach((li, index) => {
        li.addEventListener("click", () => {
            playMusic(songs[index]);
        });
    });

    return songs;
}

// Fetch albums/cards
async function displayAlbums() {
    let a = await fetch("songs/");
    // console.log('a dis',a);

    let response = await a.text();
    console.log("response2", response);

    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");

    let cardContainer = document.querySelector(".cardContainer");
    cardContainer.innerHTML = "";

    let firstFolder = null;

    for (let i = 0; i < anchors.length; i++) {
        let element = anchors[i];
        if (element.href.includes("/songs/")) {
            let folder = element.href.split("/").slice(-2)[0];
            console.log('folder', folder);

            if (!firstFolder) firstFolder = folder; // ✅ store first album

            try {
                let info = await fetch(`songs/${folder}/info.json`);
                let infoData = await info.json();

                cardContainer.innerHTML += `
                <div class="card" data-folder="${folder}">
                    <div class="play">;
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                            stroke-linejoin="round" />
                            </svg>
                    </div>
                        <img src="songs/${folder}/cover.jpg" alt="">
                        <h2>${infoData.title}</h2>
                        <p>${infoData.description}</p>
                </div>`;
            } catch (e) {
                console.warn("info.json missing in", folder);
            }
        }
    }

    // Card click → load songs
    Array.from(document.getElementsByClassName("card")).forEach(card => {
        card.addEventListener("click", async () => {
            console.log('Card', card);

            let folder = card.getAttribute("data-folder");
            songs = await getSongs(`songs/${folder}`);
            playMusic(songs[0], false); // ✅ load first song in play
        });
    });

    return firstFolder;
}

// Player controls
document.getElementById("play").addEventListener("click", () => {
    if (currentSong.paused) {
        currentSong.play();
        document.getElementById("play").src = "img/pause.svg";
    } else {
        currentSong.pause();
        document.getElementById("play").src = "img/play.svg";
    }
});

document.getElementById("previous").addEventListener("click", () => {
    let currentTrack = currentSong.src.split("/").pop();
    let index = songs.indexOf(currentTrack);
    if (index > 0) {
        playMusic(songs[index - 1]);
    }
});

document.getElementById("next").addEventListener("click", () => {
    let currentTrack = currentSong.src.split("/").pop();
    let index = songs.indexOf(currentTrack);
    if (index < songs.length - 1) {
        playMusic(songs[index + 1]);
    }
});

// Hamburger menu
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
});
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%";
});

// Time update
currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerHTML =
        `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;

    document.querySelector(".circle").style.left =
        (currentSong.currentTime / currentSong.duration) * 100 + "%";
});

// Seekbar
document.querySelector(".seekbar").addEventListener("click", e => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
});

// Volume
document.querySelector(".range input").addEventListener("change", (e) => {
    currentSong.volume = parseInt(e.target.value) / 100;
    if (currentSong.volume > 0) {
        document.querySelector(".volume>img").src = "img/volume.svg";
    } else {
        document.querySelector(".volume>img").src = "img/mute.svg";
    }
});

// Mute/unmute
document.querySelector(".volume>img").addEventListener("click", e => {
    if (e.target.src.includes("volume.svg")) {
        e.target.src = "img/mute.svg";
        currentSong.volume = 0;
        document.querySelector(".range input").value = 0;
    } else {
        e.target.src = "img/volume.svg";
        currentSong.volume = 0.1;
        document.querySelector(".range input").value = 10;
    }
});

// On page load

async function main() {
    let firstFolder = await displayAlbums(); // ✅ detect first album
    if (firstFolder) {
        songs = await getSongs(`songs/${firstFolder}`);
        if (songs.length > 0) {
            playMusic(songs[0], true); // ✅ load first song but keep paused
        }
    }
}
main();
