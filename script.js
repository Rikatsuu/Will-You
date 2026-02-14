// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const animaImg = document.getElementById("letter-anima");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.visibility = "visible";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50)
});

// Make Yes Button Grow

let yesScale = 1;
yesBtn.style.position = "relative";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition ="transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale +=2;

    if (yesBtn.style.positon !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;

    }

    else {
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;

    }
})

// YES Clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yupiiiiii !!!!";
    animaImg.src = "cat-dance.png";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});