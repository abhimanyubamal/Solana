let t1 = document.querySelector("#tab-link-1");
let t2 = document.querySelector("#tab-link-2");
let t3 = document.querySelector("#tab-link-3");
let t4 = document.querySelector("#tab-link-4");
let t5 = document.querySelector("#tab-link-5");
let s1 = document.querySelector("#span-1-active");
let s2 = document.querySelector("#span-2-active");
let s3 = document.querySelector("#span-3-active");
let s4 = document.querySelector("#span-4-active");
let s5 = document.querySelector("#span-5-active");
let tabs = document.querySelectorAll(".tab-links");

tabs.forEach((heading) => {
    heading.addEventListener("click", (e) => {

        const show = document.querySelector(".show");

        const b = document.querySelector(".active");
        b && b.classList.remove("active");
        heading.classList.add("active");

        show && show.classList.remove("show");
        show && show.classList.add("d-none");

        if (t1.classList.contains("active")) {
            s1.classList.remove("d-none");
            s1.classList.add("show");
        }
        else if (t2.classList.contains("active")) {
            s2.classList.remove("d-none");
            s2.classList.add("show");
        }
        else if (t3.classList.contains("active")) {
            s3.classList.remove("d-none");
            s3.classList.add("show");
        }
        else if (t4.classList.contains("active")) {
            s4.classList.remove("d-none");
            s4.classList.add("show");
        }
        else {
            s5.classList.remove("d-none");
            s5.classList.add("show");
        }
    });
});

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