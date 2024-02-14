const yesBtn = document.getElementById("yes-btn");
const wrapper = document.getElementById("wrapper-container");
const mainContainer = document.querySelector(".main");
const canvasConfetti = document.querySelector("#confetti");
const newWrapper = document.createElement("div");
newWrapper.className = "new-wrapper";
newWrapper.style.display = "flex";
newWrapper.style.flexDirection = "column";
const noBtn = document.getElementById("no-btn");

const ahaAudioShort = new Audio("ahashort.wav");
const ahaAudioLong = new Audio("ahalong.wav");
const kissAudio = new Audio("kissyes.wav");
const benzynaAudio = new Audio("benzyna.wav");

const jsConfetti = new JSConfetti();

yesBtn.addEventListener("click", () => {
  wrapper.remove();
  mainContainer.appendChild(newWrapper);
  createCanvas();
  jsConfetti.addConfetti({
    emojis: ["😍", "❤️‍🔥", "❤️"],
  });
  kissAudio.play();
  benzynaAudio.play();
  const iFrame = document.createElement("iframe");
  iFrame.src = "https://giphy.com/embed/Wcil7wEpUX0CJVX3q9";
  iFrame.style.border = "none";
  buildHappyHeader();
  newWrapper.appendChild(iFrame);
});

noBtn.addEventListener("click", () => {
  handelSize();
});

let scaleOfYesBtn = 1;
let scaleOfNoBtn = 1;
let counter = 0;

const handelSize = () => {
  scaleOfYesBtn += 0.1;
  scaleOfNoBtn -= 0.1;
  console.log("bok");
  yesBtn.style.transform = `scale(${scaleOfYesBtn})`;
  noBtn.style.transform = `scale(${scaleOfNoBtn})`;
  if (counter === 0) {
    noBtn.innerHTML = "🥺aha?🥺";
    ahaAudioShort.play();
    counter += 1;
  } else if (counter === 1) {
    noBtn.innerHTML = "AAAHAA, ok to pa tera😣";
    ahaAudioLong.play();
    counter += 1;
  } else if (counter === 2) {
    yesBtn.innerHTML = "Mam cię 😈";
    noBtn.remove();
  }
};

benzynaAudio.addEventListener("ended", () => {
  $(newWrapper).fadeOut();
  setTimeout(() => {
    clearNewWrapper();
    createHeart();
  }, 1000);
});

const createCanvas = () => {
  const canvasCreate = document.createElement("canvas");
  canvasCreate.id = "confetti";
  newWrapper.appendChild(canvasCreate);
};

const buildHappyHeader = () => {
  const happyHeader = document.createElement("div");
  happyHeader.className = "happy-header";
  newWrapper.appendChild(happyHeader);
  const headerOfHappy = document.createElement("h2");
  headerOfHappy.innerHTML = "Yaaaaaaay!1!1!❤️‍🔥❤️";
  happyHeader.appendChild(headerOfHappy);
};

const clearNewWrapper = () => {
  newWrapper.innerHTML = "";
};

const createHeart = () => {
  newWrapper.innerHTML = "❤️";
  newWrapper.style.fontSize = "10rem";
  newWrapper.style.animation = "none";
  $(newWrapper).css("opacity", "0").css("transform", "scale(1)");
  $(newWrapper).fadeIn();
  $(newWrapper).animate({
    opacity: 1,
    scale: "1.2",
  });
  $(newWrapper).animate({
    opacity: 1,
    scale: "1",
  });
};
