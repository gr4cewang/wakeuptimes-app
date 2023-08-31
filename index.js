const clcBtn = document.getElementById("calc-btn");
const refreshBtn = document.getElementById("refresh-btn");
const returnBtn = document.getElementById("return-btn");
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");
const promptSection = document.getElementById("prompt-section");
const imageContainer = document.getElementById("img-container");
const resultSection = document.getElementById("result-section");

clcBtn.addEventListener("click", calcWakeUpTimes); //the action of clicking the button
refreshBtn.addEventListener("click", calcWakeUpTimes);
returnBtn.addEventListener("click", () => { //this function is never reused so it's written IN the action call
  promptSection.classList.remove("hidden");
  imageContainer.classList.remove("hidden");
  resultSection.classList.add("hidden");
});

function calcWakeUpTimes() {
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);

  const wakeUpTime = new Date(fallAsleepTime);
  wakeUpHoursDiv.innerHTML = "";
  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });
    const cycleDiv = document.createElement("div");
    cycleDiv.classList.add("cycle");
    cycleDiv.setAttribute("id", `cycle-${i}`);
    cycleDiv.textContent = wakeUpTimeString;
    wakeUpHoursDiv.appendChild(cycleDiv);
  }

  promptSection.classList.add("hidden"); //adding the hidden class
  imageContainer.classList.add("hidden");
  resultSection.classList.remove("hidden"); //removes the hidden class from the results section
}