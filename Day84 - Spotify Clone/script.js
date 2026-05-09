console.log('Lets write javascript');
let currentSong = new Audio();
let songs = [];
let currFolder = "";

// Utility function
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Fetch songs
async function getSongs(folder) {
    currFolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/${folder}/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");

    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            console.log('folder',folder);
            
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
    }

    // Show all songs in Your Library
    let songUL = document.querySelector(".songList ul");
    songUL.innerHTML = "";
    for (const song of songs) {
        songUL.innerHTML += `<li>
            <img class="invert" width="34" src="img/music.svg" alt="">
            <div class="info">
                <div>${decodeURIComponent(song)}</div>
            </div>
            <div class="playnow">
                <span>Play Now</span>
                <img class="invert" src="img/play.svg" alt="">
            </div>
        </li>`;
    }

    // Attach event listener to each song in library
    Array.from(songUL.getElementsByTagName("li")).forEach((e, index) => {
        e.addEventListener("click", () => {
            playMusic(songs[index]);
        });
    });

    return songs;
}

// Play music
function playMusic(track, pause = false) {
    if (!track) return;
    currentSong.src = `${currFolder}/` + track;
    if (!pause) {
        currentSong.play();
        document.getElementById("play").src = "img/pause.svg";
    } else {
        document.getElementById("play").src = "img/play.svg"; // show play button in pause mode
    }
    document.querySelector(".songinfo").innerHTML = decodeURIComponent(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
}

// Display albums
async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:3000/songs/`);
    console.log('a',a);
    
    let response = await a.text();
    console.log('response',response);
    
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let cardContainer = document.querySelector(".cardContainer");

    let firstFolder = null;

    Array.from(anchors).forEach(async e => {
        if (e.href.includes("/songs")) {
            let folder = e.href.split("/").slice(-2)[0];
            if (!firstFolder) firstFolder = folder; // ✅ first album

            let res = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`);
            let info = await res.json();

            cardContainer.innerHTML += `
                <div data-folder="${folder}" class="card">
                    <div class="play">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
                    </div>
                    <img src="/songs/${folder}/cover.jpg" alt="">
                    <h2>${info.title}</h2>
                    <p>${info.description}</p>
                </div>`;
        }
    });

    // Album card click
    setTimeout(() => {
        Array.from(document.getElementsByClassName("card")).forEach(e => {
            console.log('e',e);
            
            e.addEventListener("click", async item => {
                console.log('current',item.currentTarget);
                console.log('all',item.currentTarget.dataset.folder);
                

                let folder = item.currentTarget.dataset.folder;
                songs = await getSongs(`songs/${folder}`);
                if (songs.length > 0) playMusic(songs[0], true);
            });
        });
    }, 500);

    return firstFolder;
}

// Main
async function main() {
    let firstFolder = await displayAlbums();
    if (firstFolder) {
        songs = await getSongs(`songs/${firstFolder}`);
        if (songs.length > 0) playMusic(songs[0], true); // ✅ load first song paused
    }

    // Hamburger menu
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%";
    });



    // Controls
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
        let index = songs.indexOf(currentSong.src.split("/").pop());
        if (index > 0) playMusic(songs[index - 1]);
    });

    document.getElementById("next").addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").pop());
        if (index < songs.length - 1) playMusic(songs[index + 1]);
    });

    // Seekbar
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML =
            `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
        document.querySelector(".circle").style.left =
            (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });

    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration * percent) / 100;
    });
}

main();






















































// console.log('Lets write javascript');
// let currentSong = new Audio();
// let songs;
// let currFolder;

// function secondsToMinutesSeconds(seconds) {
//     if (isNaN(seconds) || seconds < 0) {
//         return "00:00";
//     }

//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);

//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(remainingSeconds).padStart(2, '0');

//     return `${formattedMinutes}:${formattedSeconds}`;
// }

// async function getSongs(folder) {
//     currFolder = folder;
//     let a = await fetch(`http://127.0.0.1:3000/${folder}/`)
//     let response = await a.text();
//     // console.log(response);
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a")
//     songs = []
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href.split(`/${folder}/`)[1])
//         }
//     }

//     //Show all the songs in playlist
//     let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
//     songUL.innerHTML = ""
//     for (const song of songs) {
//         songUL.innerHTML = songUL.innerHTML + `<li>
//                             <img class="invert" width="34" src="img/music.svg" alt="">
//                             <div class="info">
//                                 <div>${song.replaceAll("%20" , " ")}</div>
//                                 <div>Shahnawaz</div>
//                             </div>
//                             <div class="playnow">
//                                 <span>Play Now</span>
//                                 <img class="invert" src="img/play.svg" alt="">
//                             </div></li> `;
//                             // console.log("Songs fetched:", song.replaceAll("%20" , " "))
//                         }

//     //Attach an event listener to each song
//     Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
//         e.addEventListener("click", element => {
//             console.log(e.querySelector(".info").firstElementChild.innerHTML);
//             playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
//         })
//     })
//     return songs

// }

// const playMusic = (track, pause = false) => {
//     //let audio = new Audio("/songs/" + track)
//     currentSong.src = `${currFolder}/` + track;
//     if (!pause) {
//         currentSong.play()
//         play.src = "img/pause.svg"
//     }
//     document.querySelector(".songinfo").innerHTML = decodeURI(track)
//     document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
// }


// async function displayAlbums() {
//     console.log('Displaying albums');
//     let a = await fetch(`http://127.0.0.1:3000/songs/`)
//     let response = await a.text();
//     // console.log(response);
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let anchors = div.getElementsByTagName("a")
//     let cardContainer = document.querySelector(".cardContainer")


//     Array.from(anchors).forEach(async e => {
//         if (e.href.includes("/songs")) {
//             let folder = e.href.split("/").slice(-2)[0]
//             //Get the metatdata of the folder
//             let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`)
//             let response = await a.json();
//             console.log(response);
//             cardContainer.innerHTML = cardContainer.innerHTML + `
//                     <div data-folder="${folder}" class="card">
//                         <div class = "play">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
//                                 <circle cx="50" cy="50" r="45" stroke="#1f6a2e" stroke-width="2" />
//                                 <path d="M 42 35 L 65 50 L 42 65 Z" fill="#1976d2" stroke="#0f4f9a" stroke-width="2"
//                                     stroke-linejoin="round" />
//                             </svg>
//                         </div>
//                         <img src="/songs/${folder}/cover.jpg" alt="">
//                         <h2>${response.title}</h2>
//                         <p>${response.description}</p>
//                     </div>`
//         }
//     });

//     //Load the playlist whenever the card is clicked
//     Array.from(document.getElementsByClassName("card")).forEach(e => {
//         e.addEventListener("click", async item => {
//             console.log(item, item.currentTarget.dataset.folder)

//             songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
//             // songs = await getSongs(`${item.currentTarget.dataset.folder}`)
//             if (songs.length > 0) {
//                 playMusic(songs[0]);
//             }
//         })
//     })
// }

// async function main() {
//     //Get list of all songs
//     await getSongs("songs/ncs")
//     console.log(songs);
//     playMusic(songs[0], true)


//     //display all the albums on the page
//     await displayAlbums()


//     //Attach an event listener to play,next and previous
//     document.getElementById("play").addEventListener("click", () => {
//         if (currentSong.paused) {
//             currentSong.play()
//             play.src = "img/pause.svg"
//         }
//         else {
//             currentSong.pause()
//             play.src = "img/play.svg"

//         }
//     })

//     //Listen for timeupdate event
//     currentSong.addEventListener("timeupdate", () => {
//         // console.log(currentSong.currentTime, currentSong.duration);
//         document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`
//         document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
//     })

//     //Add an event listener to seekbar
//     document.querySelector(".seekbar").addEventListener("click", e => {
//         let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
//         document.querySelector(".circle").style.left = percent + "%";
//         currentSong.currentTime = (currentSong.duration * percent) / 100
//     })


//     //Add an event listener for hamburger button
//     document.querySelector(".hamburger").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "0"
//     })

//     //Add an event listener for close button
//     document.querySelector(".close").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "-120%"
//     })

//     //Add an event listener to previous
//     document.getElementById("previous").addEventListener("click", () => {
//         currentSong.pause()
//         console.log('Previous Clicked');
//         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
//         if ((index - 1) >= 0) {
//             playMusic(songs[index - 1])
//         }
//     })


//     //Add an event listener to next
//     document.getElementById("next").addEventListener("click", () => {
//         currentSong.pause()
//         console.log('Next Clicked');

//         let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
//         if ((index + 1) < songs.length) {
//             playMusic(songs[index + 1])
//         }
//     })

//     //Add an event to volume
//     document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
//         console.log('Setting Volume to', e.target.value, "/100");
//         currentSong.volume = parseInt(e.target.value) / 100
//         if (currentSong.volume > 0) {
//             document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("img/mute.svg", "img/volume.svg")
//         }
//     })



//     //Add an event listener to mute the volume
//     document.querySelector(".volume>img").addEventListener("click", e => {
//         console.log(e.target);
//         console.log("Changing", e.target.src);
//         if (e.target.src.includes("img/volume.svg")) {
//             e.target.src = e.target.src.replace("img/volume.svg", "img/mute.svg")
//             currentSong.volume = 0;
//             document.querySelector(".range").getElementsByTagName("input")[0].value = 0
//         }
//         else {
//             e.target.src = e.target.src.replace("img/mute.svg", "img/volume.svg")
//             currentSong.volume = .1;
//             document.querySelector(".range").getElementsByTagName("input")[0].value = 10;

//         }
//     }
//     )

// }


// main()


















