// Toggles Harmburger 
function myFunction(x) {
    x.classList.toggle("change");

    // Toggles menu
    var navBar = document.getElementById("nav-bar");
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
      } else {
        navBar.style.display = "block";
      }
}