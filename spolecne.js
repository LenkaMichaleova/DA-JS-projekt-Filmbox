const menuElm = document.querySelector("#menu-tlacitko")
const menuPolozky = document.querySelector("#menu-polozky")
const iconMenu = document.querySelector("#menu-tlacitko .fa-bars")

menuElm.addEventListener("click", () => {
    menuPolozky.classList.toggle("show")
    if (menuPolozky.classList.contains("show")) {
        iconMenu.className = "fas fa-xmark"
    } else {
        iconMenu.className = "fas fa-bars"
    }
})

// let clickCount = 0
// menuElm.addEventListener("click", () => {
//     if(clickCount % 2 === 1) {
//         menuPolozky.classList.add("show")
//         iconMenu.className = "fas fa-xmark"
//         clickCount ++
//     } else {
//         menuPolozky.classList.remove("show")
//         iconMenu.className = "fas fa-bars"
//         clickCount ++
//     }
// })