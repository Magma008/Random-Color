const button = document.querySelector(".button")
const bg = document.querySelector(".main")
const value = document.querySelector(".value")
const colors = ["Salmon", "Crimson", "Red", "FireBrick", "DarkRed", "Pink", "DeepPink", "HotPink", "Coral", "Tomato", "Orange", "Gold", "Yellow", "Moccasin", "Khaki", "Lavender", "Thistle", "Plum", "Violet", "Orchid", "Fuchsia", "Magenta", "Purple", "Indigo", "Chartreuse", "LawnGreen", "Lime", "Green", "SeaGreen", "Olive", "Teal", "Aqua", "Cyan", "Aquamarine", "Turquoise", "Blue", "Navy", "Cornsilk", "Bisque", "Salmon", "Wheat", "Tan", "Peru", "Chocolate", "Sienna", "Brown", "Maroon", "Snow", "Azure", "Beige", "OldLace", "Ivory", "Linen", "Silver", "Gray", "DimGray", "SlateGray", "SkyBlue", "LimeGreen"]

button.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * colors.length)
    let number = colors[randomNum]
    bg.style.background = number
    value.style.color = number
    value.textContent = number
})