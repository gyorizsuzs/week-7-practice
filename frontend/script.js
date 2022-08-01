/*===============================================================*\
*                                                                 * 
*                          JS EVENT LISTENERS                     *
*                                                                 * 
\*================================================================*/

/* === Initialize Components === */

let formComponent = function () {
  return `
  <form>
  <input id="name-input" type="text" placeholder="Enter your name..." />
  </form>
  `;
};

let displayComponent = function () {
  return `
  <p id="name-display">Your Name</p>
  `;
};

let selectComponent = function () {
  return `
    <label id="sex-select">Sex:<br/>
      <select name="sex-select:drop-down">
        <option value="1">female</option>
        <option value="2">male</option>
        <option value="3">other</option>
      </select>
  `;
}

let contentComponent = function (first, second, third) {
  return `
  <section class="first">${first}</section>
  <section class="second">${second}</section>
  <section class="third">${third}</section>
  `;
};


/* === Initialize Functions === */

function loadEvent() {
  console.log("loadEvent executed");

  let rootElement = document.querySelector("#root");

  rootElement.insertAdjacentHTML(
    "beforeend",
    contentComponent(formComponent(), displayComponent(), selectComponent())
  );

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
  });

  let inputElement = document.querySelector("#name-input");

  const displayElement = document.querySelector("#name-display");

  let selectElement = document.querySelector("#sex-select");

  inputElement.addEventListener("input", function (event) {
    let inputData = event.target.value;
    displayElement.innerHTML = inputData;
    console.log(inputData);
  });

  selectElement.addEventListener("option", function (event) {
    let optionData = event.target.value;
    displayElement.innerHTML = optionData;
    console.log(optionData);
  })
}



/* === Call Functions === */

window.addEventListener(`load`, loadEvent);

/* feladat, adni a selectnek eventlistenert, https://www.w3schools.com/tags/tag_select.asp  */



