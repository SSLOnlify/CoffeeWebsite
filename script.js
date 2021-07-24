let dropDownLinks = Array.prototype.slice.call(document.getElementsByClassName("DD"));

dropDownLinks.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.children[0].firstElementChild.style.transform = "rotate(180deg)";
        item.lastElementChild.style.visibility = "visible";
        item.lastElementChild.style.opacity = "1";

    })
    item.addEventListener("mouseleave", () => {
        item.lastElementChild.style.visibility = "hidden";
        item.lastElementChild.style.opacity = "0";
        item.children[0].firstElementChild.style.transform = "rotate(0deg)";

    })
});



// MENU TOGGLE

let menu = document.querySelector(".navLinks");
let openMenu = document.getElementById("DDToggle");
let closeMenu = document.getElementById("DDClose");

function classNameToggler() {
    openMenu.classList.toggle("visibleMenuToggle");
    closeMenu.classList.toggle("visibleMenuToggle");
}
openMenu.addEventListener("click", () => {
    menu.style.left = "0px";
    classNameToggler();
});

closeMenu.addEventListener("click", () => {
    menu.style.left = "100%";
    classNameToggler();
})

// Perks section- Third row
let thirdRowItems = Array.prototype.slice.call(document.getElementsByClassName("thirdRow"));
thirdRowItems.forEach(item => {
    console.log(item.children);
    item.addEventListener("mouseenter", () => {
        let icon = item.children[1];
        let infoPop = item.children[2];
        icon.classList.toggle("fa-chevron-down-rotate");
        infoPop.style.top = "0px";
    })
    item.addEventListener("mouseleave", () => {
        let icon = item.children[1];
        let infoPop = item.children[2];

        icon.classList.toggle("fa-chevron-down-rotate");
        infoPop.style.top = "100%";

    })
})
