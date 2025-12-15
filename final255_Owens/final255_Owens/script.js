const videoPart1 = [
	    { src: "videos/winterInside.mp4", caption: "Inside of Building" },
		{ src: "videos/winterInside2.mp4", caption: "Inside of Building 2" },
		{ src: "videos/winterMorning.mp4", caption: "Daytime" },
		{ src: "videos/winterMorning2.mp4", caption: "Daytime 2" },
		{ src: "videos/winterMorning3.mp4", caption: "Daytime 3" }
]

const videoPart2 = [
	   { src: "videos/evening.mp4", caption: "Midday" },
	   { src: "videos/winterEvening2.mp4", caption: "Midday 2" },
	   { src: "videos/winterEvening3.mp4", caption: "Midday 3" },
	   { src: "videos/winterEvening4.mp4", caption: "Midday 4" },
	   { src: "videos/winterEvening5.mp4", caption: "Midday 5" }
]

const videoPart3 =  [
		{ src: "videos/winterNight.mp4", caption: "Winter Night Random 1" },
		{ src: "videos/winterNight2.mp4", caption: "Winter Night Random 2" },
		{ src: "videos/winterNight3.mp4",caption: "Winter Night Random 3" },
		{ src: "videos/winterNight4.mp4", caption: "Winter Night Random 4" },
		{ src: "videos/winterNight5.mp4", caption: "Ending" }
];

const titleOverlay = document.getElementById("titleOverlay");
const player = document.getElementById("player");
const titleText = document.getElementById("titleText"); // NEW
const replayBtn = document.getElementById("replayBtn");

function picker(array) {
	const randomIndex = Math.floor(Math.random() * array.length);
	console.log("Random word:", array[randomIndex]);
	return array[randomIndex];
};

titleOverlay.addEventListener("click", buildVideo);
replayBtn.addEventListener("click", buildVideo);

let playlist = []; // creates an empty array
let currentIndex = 0;

function buildVideo() {
	
titleOverlay.classList.add("playing");
replayBtn.style.display = "none";
player.classList.add("fullscreen");
	
		playlist = [
			picker(videoPart1),
			picker(videoPart2),
			picker(videoPart3),
];
	currentIndex = 0;
	playCurrent();
};

function playCurrent() {
	const current = playlist[currentIndex]; // { src: "...", caption: 	"..." }
	titleText.textContent = current.caption;
	
	player.src = current.src;
	player.load();
	player.play().catch(err => {
		console.warn("Play interrupted (autoplay policy?):", err);
});
}

// Advance when a video ends
player.addEventListener("ended", () => {
	currentIndex++;
	if (currentIndex < playlist.length) {
		playCurrent();
	} else {
		console.log("All three parts finished.");
		replayBtn.style.display = "block";
	}
});