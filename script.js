let dares = [
    "Do your best Santa laugh for 10 seconds 🎅😂",
    "Talk in a cartoon voice for 3 minutes 🎭",
    "Act like a celebrity chosen by friends 🌟",
    "Do a solo ramp walk 🚶‍♂️🚶‍♀️",
    "Tell your college degree name in bengali, no English word 😅",
    "Dance to a song chosen by friends 💃",
    "Sing any song but replace all lyrics with “Santa” 🎶",
    "Speak without using the letter “A” for 1 minute 😵",
    "Act like a kid who did not get gifts 😭",
    "Give proposal to your heart 💗",
    "Share your most embarrassing funny moment 😅",
    "Reveal one weird habit 🤭",
    "Talk only in Bengali English mixed language for next 5 minutes 😜",
    "Give someone an imaginary gift 🎁",
    "Do 10 jumping jacks while shouting  Ho Ho Ho! 🎅",
    "Thank someone who helped you this year🙏"
];

function startGame() {
    let username = document.getElementById("username").value.trim();
    let music = document.getElementById("bgMusic");

    if (username === "") {
        alert("Please enter your name!");
        return;
    }

    // Play music ONLY after user click (browser rule)
    music.volume = 0.5;
    music.play().catch(() => {
        console.log("Music will play after user interaction");
    });

    document.getElementById("welcome").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("userDisplay").innerText =
        " Welcome " + username;

    // If already got dare
    if (localStorage.getItem(username)) {
        document.getElementById("result").innerHTML =
            "🎁 Your Dare:<br><strong>" +
            localStorage.getItem(username) +
            "</strong>";
    }
}

function getDare() {
    let username = document.getElementById("username").value;

    if (localStorage.getItem(username)) {
        alert("❌ You already received a dare!");
        return;
    }

    if (dares.length === 0) {
        document.getElementById("result").innerText =
            "🎉 All dares are completed!";
        return;
    }

    let randomIndex = Math.floor(Math.random() * dares.length);
    let selectedDare = dares[randomIndex];

    dares.splice(randomIndex, 1);
    localStorage.setItem(username, selectedDare);

    document.getElementById("result").innerHTML =
        "🎁 Your Dare:<br><strong>" + selectedDare + "</strong>";
}
