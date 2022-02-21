

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
    document.querySelector('but')
    if (myFunction == true) {
        alert('god');
    } else {
        alert('يرجى ');
    }
}

