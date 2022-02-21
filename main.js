

let nums = document.querySelectorAll(".stats .number");
let section = document.querySelector(".box");
let started = false; // Function Started ? No

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 5000 / goal);
}



function myFunction() {
    let name = document.forms["form"]["answer1"].value;
    let Email = document.forms["form"]["answer1"].value;
    let textAeria = document.forms["form"]["answer1"].value;
    let inbut = true;
    if (i = 0; i = inbut; i++) {
        alert('god');
    } else {
        alert('يرجى ');
    }
}

