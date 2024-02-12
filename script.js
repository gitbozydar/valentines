const yesBtn = document.getElementById("yes-btn");
const wrapper = document.getElementById("wrapper-container");
const mainContainer = document.querySelector(".main");
const canvasConfetti = document.querySelector("#confetti");
const newWrapper = document.createElement("div");
newWrapper.className = "new-wrapper";
newWrapper.style.display = "flex";
newWrapper.style.flexDirection = "column";
const noBtn = document.getElementById("no-btn");

const createAudio = document.createElement("audio");
const createSource = document.createElement("source");
createSource.src = "benzyna.wav";
createSource.type = "audio/wav";
const jsConfetti = new JSConfetti();

yesBtn.addEventListener("click", () => {
  wrapper.remove();

  mainContainer.appendChild(newWrapper);
  createCanvas();
  jsConfetti.addConfetti({
    emojis: ["😍", "❤️‍🔥", "❤️"],
  });

  const iFrame = document.createElement("iframe");
  iFrame.src = "https://giphy.com/embed/Wcil7wEpUX0CJVX3q9";
  iFrame.style.border = "none";
  buildHappyHeader();
  newWrapper.appendChild(iFrame);
  newWrapper.appendChild(createAudio);
  createAudio.appendChild(createSource);
  createAudio.play();
});

noBtn.addEventListener("mouseover", () => {
  noBtn.disabled = true;
});

noBtn.addEventListener("mouseout", () => {
  noBtn.disabled = false;
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
