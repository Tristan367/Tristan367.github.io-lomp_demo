let fadedInAiText1 = false;
let preparingToFadeInAiText2 = true;

const searchBar = document.getElementById("search");
searchBar.addEventListener("input", function () {
  const value = searchBar.value;
  if (value) {
    preparingToFadeInAiText2 = false;
  }
});

function fadeInAiText2() {
  if (preparingToFadeInAiText2) {
    fadeInWords("aiText2", 250);
  }
}

function fadeInWords(id, interval) {
  const element = document.getElementById(id);
  element.style.opacity = "1";
  const words = element.innerText.split(" ");
  element.innerHTML = words
    .map((word) => `<span class="hidden">${word}</span>`)
    .join(" ");

  const spans = element.querySelectorAll("span");
  let index = 0;

  const fadeIn = () => {
    if (index < spans.length) {
      spans[index].style.transition = "opacity 2s";
      spans[index].style.opacity = 1;
      index++;
    } else {
      clearInterval(fadeInterval);
      if (!fadedInAiText1) {
        fadedInAiText1 = true;
        setTimeout(fadeInAiText2, 5000);
      }
    }
  };

  const fadeInterval = setInterval(fadeIn, interval);
}

window.onload = () => setTimeout(fadeInWords, 1000, "aiText1", 500);
