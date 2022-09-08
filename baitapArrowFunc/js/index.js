const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar'];


function dom(params) {
    return document.querySelector(params);
}

let container = dom("#colorContainer");
let loadColor = (() => {
    for (let i = 0; i < colorList.length; i++) {
        console.log(colorList[i]);
        container.innerHTML += 0 == i ? `<button class="color-button ${colorList[i]} active"></button>` : `<button class="color-button ${colorList[i]}"></button>`
    }
})
loadColor();

let colorButton = document.getElementsByClassName("color-button");
let house = document.getElementById("house");

for (let i = 0; i < colorButton.length; i++) {
    console.log(colorButton[i]);
    colorButton[i].addEventListener("click", () => {
        // alert(colorList[i])\
        changeColor(colorList[i],i);
    })
}

let changeColor = ((color, active) => {
    for (let i = 0; i < colorButton.length; i++) {
        colorButton[i].classList.remove("active")
    }
    colorButton[active].classList.add("active")
    house.className = "house " + color
})


