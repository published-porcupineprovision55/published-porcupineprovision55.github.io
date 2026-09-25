let detailsButton = document.getElementById("detailsButton");
let projDetails = document.getElementById("projDetails");

detailsButton.addEventListener("click", function(){
    projDetails.removeAttribute("hidden");
    detailsButton.textContent("More Details Showing");
})