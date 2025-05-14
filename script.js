function downloadFile() {
  const zipUrl = "https://example.com/sample.zip"; // Replace with actual file
  const link = document.createElement('a');
  link.href = zipUrl;
  link.download = "sample.zip";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function saveUserPreference(key, value) {
  localStorage.setItem(key, value);
}

function getUserPreference(key) {
  return localStorage.getItem(key);
}

const button = document.querySelector(".animated-btn");
button.addEventListener("click", () => {
  saveUserPreference("theme", "teal");
  document.body.classList.add("theme-saved");
});

const savedTheme = getUserPreference("theme");
if (savedTheme === "teal") {
  document.body.classList.add("theme-saved");
}

function triggerCustomAnimation() {
  const aboutImg = document.querySelector(".animated-img");
  aboutImg.classList.add("wiggle-effect");
  setTimeout(() => {
    aboutImg.classList.remove("wiggle-effect");
  }, 600);
  saveUserPreference("lastAction", "wiggleTriggered");
}