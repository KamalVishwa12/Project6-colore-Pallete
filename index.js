const generateBtn = document.getElementById("generateBtn");   // this one is an html element

const singleHexColorGenerator = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for(let i = 0; i < 6; i++){
        
        let random = Math.floor(Math.random()* hex.length);
        // hexColor += hex[ random];
     hexColor = hexColor + hex[random];

     console.log("hexColor")
     console.log(hexColor)

        // console.log({random});
    }
    console.log(" final hex color")
    console.log(hexColor)
    return hexColor;
};

const colorPaletteGenerator =() => {
    const colorPalette = [];
    for (let i = 0; i < 4; i++){
        let colorcode = singleHexColorGenerator();
        colorPalette.push(colorcode);
    }
    return colorPalette;
}


const renderColorPalette = () => {
    const colorsContainer = document.querySelector(".colors_container");
    colorsContainer.innerHTML = "";

//   const hex =  singleHexColorGenerator();
// const hex =  hexColor;
const colorPalette = colorPaletteGenerator();
console.log("ye array hae bhai 4 random color wala ",colorPalette);





colorPalette.forEach((color, i) => {
    const colorDiv = document.createElement("div");
    colorDiv.id = `color${i + 1}`;
    console.log("di vi kaesi aaegi ",`color${i + 1}`)
    colorDiv.style.background = color;
    colorDiv.className = "colorBox";

    const colorTag = document.createElement("p");
    colorTag.id = `color${i + 1}Tag`;
    colorTag.className = "colorTag";
    colorTag.innerHTML = "#D45B29";
    colorDiv.appendChild(colorTag);
    colorsContainer.appendChild(colorDiv);
});


// console.log({colorPalette});
//   console.log({hex});
// console.log("btn pressed");
};
generateBtn.addEventListener("click", renderColorPalette);

