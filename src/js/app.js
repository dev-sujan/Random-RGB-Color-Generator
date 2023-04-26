// onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");

  // Handle click event
  document.body.addEventListener("click", function () {
    root.style.backgroundColor = generateRGBColor();
  });

  // Handle keyboard event
  document.body.onkeyup = function (e) {
    if (e.key === " " || e.code === "Space" || e.keyCode === 32) {
      root.style.backgroundColor = generateRGBColor();
    }
  };
}

/**
 * Generates random RGB color
 * @returns {string} RGB color
 */
function generateRGBColor() {
  const red = randomNumber(0, 255);
  const green = randomNumber(0, 255);
  const blue = randomNumber(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * Generates random Integer in given range
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
