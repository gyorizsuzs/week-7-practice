/*===============================================================*\
*                                                                 * 
*                          JS EVENT LISTENERS                     *
*                                                                 * 
\*================================================================*/

/* === Initialize Components === */

let formComponent = function () {
  return `
    <form>
        <input id="nameInput" type="text" placeholder="Enter your name..." />
    </form>
`;
};

let displayComponent = function () {
  return `
        <p id="name-display">Your Name</p>
    `;
};

let contentComponent = function (first, second) {
  return `
        <section class="first">${first}</section>
        <section class="second">${second}</section>
    `;
};

/* === Initialize Functions === */

function loadEvent() {
  console.log('loadEvent executed');

  let rootElement = document.querySelector('#root');

  rootElement.insertAdjacentHTML(
    'beforeend',
    contentComponent(formComponent(), displayComponent())
  );

  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
  });

  let inputElement = document.querySelector('#name-input');

  const displayElement = document.querySelector('#name-display');

  inputElement.addEventListener('input', function (event) {
    let inputData = event.target.value;
    displayElement.innerHTML = inputData;
  });
}

/* === Call Functions === */

window.addEventListener(`load`, loadEvent);

/* feladat, adni a selectnek eventlistenert, https://www.w3schools.com/tags/tag_select.asp lenyilo gecit kell baszni ra faszom */
