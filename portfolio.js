let detailsButton = document.getElementById("detailsButton");
let projDetails = document.getElementById("projDetails");

detailsButton.addEventListener("click", function(){
    projDetails.removeAttribute("hidden");
    detailsButton.textContent = "Hello?";
})

let detailsButton2 = document.getElementById("detailsButton2");
let projDetails2 = document.getElementById("projDetails2");

detailsButton2.addEventListener("click", function(){
    projDetails2.removeAttribute("hidden");
    detailsButton2.textContent = "isthisWokring?";
})

let detailsButton3 = document.getElementById("detailsButton3");
let projDetails3 = document.getElementById("projDetails3");

detailsButton3.addEventListener("click", function(){
    projDetails3.removeAttribute("hidden");
    detailsButton3.textContent = "WaitWhat???";
})