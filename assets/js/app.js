const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTop.style.display = "flex";
    }
    else {
        toTop.style.display = "none";
    }
});

const viewAll = document.querySelector(".S3-view-all-btn");
const boxesNone = document.querySelectorAll(".boxes-none");
let flag = 0

viewAll.addEventListener("click", () => {
    boxesNone.forEach((a) => {
        a.classList.toggle("d-block");
    })
    if (flag == 0) {
        viewAll.innerHTML = "View Less"; flag++;
    }
    else { viewAll.innerHTML = "View All"; flag-- }
})

let label = document.querySelector("label");
let menu = document.querySelector("#menu");
let open = 0;

label.addEventListener("click", () => {
    if (open == 0) {
        menu.style.right = 0;
        document.body.classList.add("overflow-y-hidden");
        label.classList.add("label-switch");
        open++;
    }

    else {
        menu.style.right = '-100%';
        document.body.classList.remove("overflow-y-hidden");
        label.classList.remove("label-switch");
        open--;
    }
});