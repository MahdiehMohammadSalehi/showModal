'use strict'
const openbtn = document.querySelectorAll(".openbtn");
const modal = document.querySelectorAll(".modal");
const ovarlay = document.querySelector(".ovarlay");
const closebtn = document.querySelectorAll(".closebtn");


function openmodal(idx) {
    modal[idx].classList.remove("hidden");
    ovarlay.classList.remove("hidden");
}

function closemodal(idx) {
    modal[idx].classList.add("hidden");
    ovarlay.classList.add("hidden");
}

for (let i = 0; i < openbtn.length; i++) {
    //openbtn pressed
    openbtn[i].addEventListener('click', openmodal.bind(this, i));
    //closebtn pressed
    closebtn[i].addEventListener('click', closemodal.bind(this, i));
    //overlay clicked
    ovarlay.addEventListener('click', closemodal.bind(this, i));

}
//Esc key pressed
document.addEventListener('keydown', function (e) {
    for (let i = 0; i < openbtn.length; i++)
        if (e.key === 'Escape') {
            modal[i].classList.add("hidden")
            ovarlay.classList.add("hidden");
        }

}
)
