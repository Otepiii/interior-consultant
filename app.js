const hamburgerBtn = document.querySelector(".hamburger");

hamburgerBtn.addEventListener("click", toggleNav);

function toggleNav() {
    const nav = document.querySelector(".nav-items");

    if (!nav.classList.contains("active")) {
        nav.classList.add("active")
        nav.classList.remove("close")
        nav.style.display="flex"
    }else {
        nav.classList.remove("active")
        nav.classList.add("close")
        nav.style.display="none"
    }
} 