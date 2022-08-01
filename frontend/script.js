/*===============================================================*\
*                                                                 * 
*                          JS EVENT LISTENERS                     *
*                                                                 * 
\*================================================================*/

/* === Initialize Components === */

let formComponent = function () {
  return `
  <form>
  <input id="name-input" type="text" placeholder="Character Name" />
  <br>
  <label id="gender-select">Gender:<br/>
      <select name="gender-select:drop-down">
        <option value="1">female</option>
        <option value="2">male</option>
        <option value="3">other</option>
      </select>
    <br>
  <label id="race-select">Race:<br/>
    <select name="race-select:drop-down">
      <option value="1">Ainur</option>
      <option value="2">Black Númenórean</option>
      <option value="3">Dwarf</option>
      <option value="4">Elf</option>
      <option value="5">Hobbit</option>
      <option value="6">Maiar</option>
      <option value="7">Men</option>
      <option value="8">Nazgûl</option>
      <option value="9">Olog-Hai</option>
      <option value="9">Undead</option>
      <option value="10">Uruk</option>
      <option value="10">Valar</option>
    </select>
  <br>
  <label id="class-select">Class:<br/>
    <select name="class-select:drop-down">
      <option value="1">Beastmaster</option>
      <option value="2">Executioner</option>
      <option value="3">Ranger</option>
      <option value="4">Slaver</option>
      <option value="5">Sawbone</option>
    </select>
  </form>
  `;
};

let displayComponent = function () {
  return `
  <p id="name-display">Character</p>
  `;
};

/* let selectComponent = function () {
  return `
    <label id="gender-select">Gender:<br/>
      <select name="gender-select:drop-down">
        <option value="1">female</option>
        <option value="2">male</option>
        <option value="3">other</option>
      </select>
    <br>
    <label id="race-select">Race:<br/>
    <select name="race-select:drop-down">
      <option value="1">Ainur</option>
      <option value="2">Black Númenórean</option>
      <option value="3">Dwarf</option>
      <option value="4">Elf</option>
      <option value="5">Hobbit</option>
      <option value="6">Maiar</option>
      <option value="7">Men</option>
      <option value="8">Nazgûl</option>
      <option value="9">Olog-Hai</option>
      <option value="9">Undead</option>
      <option value="10">Uruk</option>
      <option value="10">Valar</option>
      </select>
    <br>
    <label id="class-select">Class:<br/>
    <select name="class-select:drop-down">
      <option value="1">Beastmaster</option>
      <option value="2">Executioner</option>
      <option value="3">Ranger</option>
      <option value="4">Slaver</option>
      <option value="5">Sawbone</option>
    </select>
      `;
    } */


let contentComponent = function (first, second, third) {
  return `
  <section class="first">${first}</section>
  <section class="second">${second}</section>
 
  `;
};


/* === Initialize Functions === */

function loadEvent() {
  console.log("loadEvent executed");

  let rootElement = document.querySelector("#root");

  rootElement.insertAdjacentHTML(
    "beforeend",
    contentComponent(formComponent(), displayComponent(),)
  );

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
  });

  let inputElement = document.querySelector("#name-input");

  const displayElement = document.querySelector("#name-display");

 /*  let selectElement = document.querySelector("#gender-select"); */

  inputElement.addEventListener("input", function (event) {
    let inputData = event.target.value;
    displayElement.innerHTML = inputData;
    console.log(inputData);
  });

/*   selectElement.addEventListener("option", function (event) {
    let optionData = event.target.value;
    displayElement.innerHTML = optionData;
    console.log(optionData);
  }) */
}



/* === Call Functions === */

window.addEventListener(`load`, loadEvent);

/* feladat, adni a selectnek eventlistenert, https://www.w3schools.com/tags/tag_select.asp  */



