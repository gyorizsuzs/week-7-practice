function loadEvent() {
    console.log("page loaded");
    const menuElement = document.querySelector(".container");
    menuElement.addEventListener("click", function(event) {
        console.log(event.target.classList);
        event.target.classList.toggle("clicked"); //lehet add, remove, toggle stb
    });
};

window.addEventListener("load", loadEvent);