const adviceCount = document.querySelector(".advice_id");
const adviceText = document.querySelector(".advice_text");
const btnInput = document.querySelector(".btn_input");

// Fetching Data and printing results on window
const urlAdvice = "https://api.adviceslip.com/advice";

// Function draft with console.log
// fetch(urlAdvice, { cache: "no-cache" })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// Evolved function
window.onload = function () {
  fetch(urlAdvice, { cache: "no-cache" })
    .then((response) => response.json())
    .then((data) => {
      // Taking the JSON data (Advice, id) and assigning them to two constants
      const adviceTxt = data.slip.advice;
      const adviceId = data.slip.id;
      // Displaying the results in HTML
      adviceText.innerHTML = `"${adviceTxt}"`;
      adviceCount.innerHTML = `Advice #${adviceId}`;
    });
};
// Call to action = generating random Advices by each time clicking the button
btnInput.addEventListener("click", onload);
