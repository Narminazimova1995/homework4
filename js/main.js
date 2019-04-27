"use strict"
let sec = document.getElementsByClassName("sec");

let first;

    for (let first = 0; first <sec.length ; first++) {
        sec[first].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
           panel.classList.add("active")

        });
    }
