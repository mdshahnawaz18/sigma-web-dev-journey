console.log("Lets Write Javascript ");
let songs = [];
let currentFolder = "";
let currentSong = new Audio();



function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

function playMusic(track, pause = false) {
    if (!track) return;
    currentSong.src = `${currentFolder}/${track}`;
    if (!pause) {
        currentSong.play();
        document.getElementById("play").src = "img/pause.svg";
    }
    else {
        document.getElementById("play").src = "img/play.svg";
    }
    document.querySelector(".songinfo").innerHTML = decodeURIComponent(track);

}


async function getSongs(folder) {
    console.log('folder', folder);
    currentFolder = folder;
    let a = await fetch(`${folder}`);
    let response = await a.text();

    console.log('response', response);
    let div = document.createElement("div");
    div.innerHTML = response;

    let as = div.getElementsByTagName('a');

    let uniqueSongs = new Set();

    Array.from(as).forEach(e => {

        let raw = decodeURIComponent(e.getAttribute("href"));

        let songName = raw
            .replace(/\\/g, "/")
            .split("/")
            .pop();

        if (songName.endsWith(".mp3")) {
            uniqueSongs.add(songName);
        }
    });

    songs = Array.from(uniqueSongs);
    console.log("final songs", songs);


    let songUL = document.querySelector(".songList ul");
    songUL.innerHTML = ""

    for (const song of songs) {
        songUL.innerHTML += `
    <li>
    <img class="invert" width="30px" src="img/music.svg" alt="">
    <div class="info">${decodeURIComponent(song)}</div>
    </li>
    `
    }
    Array.from(songUL.getElementsByTagName("li")).forEach((li, index) => {
        li.addEventListener("click", () => {
            playMusic(songs[index]);
        });
    });
    return songs;
}


async function displayAlbums() {
    let a = await fetch("songs/");
    let response = await a.text();
    console.log('a', response);
    let div = document.createElement('div');
    div.innerHTML = response;

    let anchors = div.getElementsByTagName('a');
    let cardContainer = document.querySelector('.cardContainer');

    cardContainer.innerHTML = "";
    let firstFolder = null;

    for (let i = 0; i < anchors.length; i++) {
        const element = anchors[i];

        console.log('songsDisplay', songs);

        if (element.href.includes("songs") && !element.href.includes("..")) {
            // let folder = element.href.split('/').pop();
            let raw = decodeURIComponent(element.getAttribute("href"));

            let folder = raw
                .replace(/\\/g, "/")
                .split("/")
                .filter(e => e && e !== "songs")
                .pop();

            console.log("folderinsidedisplay", folder);

            if (!firstFolder) firstFolder = folder;
            console.log('folderinsidedisplay', folder);
            try {
                let info = await fetch(`songs/${folder}/info.json`);
                let infoData = await info.json();

                cardContainer.innerHTML +=

                    `<div class="card" data-folder="${folder}">
                        <div class="play">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                            stroke-linejoin="round" />
                            </svg>
                        </div>
                        <img src="songs/${folder}/cover.jpg" alt="">
                        <h2>${infoData.title}</h2>
                        <p>${infoData.description}</p>
                    </div>`
            } catch (e) {
                console.warn("Info.json file is misssing", folder)
            }
        }
    }


    console.log('This is card section 1');

    Array.from(document.getElementsByClassName("card")).forEach(card => {
        card.addEventListener("click", async () => {

            let folder = card.getAttribute("data-folder");
            songs = await getSongs(`songs/${folder}`);
            playMusic(songs[0], false);
        });

    });
    console.log('firstinsidefolder', firstFolder);
    return firstFolder;

}

document.getElementById("play").addEventListener("click", e => {
    if (currentSong.paused) {
        currentSong.play();
        document.getElementById("play").src = "img/pause.svg";
    }
    else {
        currentSong.pause();
        document.getElementById("play").src = "img/play.svg";

    }
})

document.getElementById("prev").addEventListener("click", () => {
    let currentTrack = currentSong.src.split("/").pop();
    let index = songs.indexOf(currentTrack);
    if (index > 0) {
        playMusic(songs[index - 1]);
    }
})

document.getElementById("next").addEventListener("click", () => {
    let currentTrack = currentSong.src.split("/").pop();
    let index = songs.indexOf(currentTrack);
    if (index < songs.length - 1) {
        playMusic(songs[index + 1]);
    }
})

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
});

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-320px";
});
document.getElementById("homebtn").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-320px";
});

currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`;

    document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
})

document.querySelector(".seekbar").addEventListener("click", e => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
});

document.querySelector(".volume input").addEventListener("change", (e) => {

    currentSong.volume = parseInt(e.target.value) / 100;
    if (currentSong.volume > 0) {
        document.querySelector(".volume>img").src = "img/volume.svg";
    }
    else {
        document.querySelector(".volume>img").src = "img/mute.svg";

    }
})


document.querySelector(".volume>img").addEventListener("click", e => {
    if (e.target.src.includes("volume.svg")) {
        e.target.src = "img/mute.svg";
        currentSong.volume = 0;
        document.querySelector(".volume input").value = 0;
    }
    else {
        e.target.src = "img/volume.svg";
        currentSong.volume = 0.1;
        document.querySelector(".volume input").value = 10;
    }
})



async function main() {
    let firstFolder = await displayAlbums();
    console.log('firstFolder:', firstFolder);

    if (firstFolder) {
        let songs = await getSongs(`songs/${firstFolder}`);
        if (songs.length > 0) {
            playMusic(songs[0], true);
        }
    }
}

main();


