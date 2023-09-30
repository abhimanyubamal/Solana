const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTop.style.display = "flex";
    }
    else {
        toTop.style.display = "none";
    }
});

const viewAll = document.querySelector(".S3-view-all-btn")
const boxesNone = document.querySelectorAll(".boxes-none")

viewAll.addEventListener("click", () => {
    boxesNone.forEach((a) => {
        a.classList.toggle("d-block");
    })
})