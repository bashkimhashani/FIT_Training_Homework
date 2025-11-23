// 3. Create an array of css-styles (color, font size, alignment, underline etc.) 
// Each element of the array is an object consisting of two properties: style name and style value, 

// Write a function that accepts the style array and a text and puts out this text via document.write() in the <p></p> tags, 
// adding the style attribute with all the styles in the array to the opening tag.

let styles = [
  { name: "color", value: "blue" },
  { name: "font-size", value: "20px" },
  { name: "text-align", value: "center" },
  { name: "text-decoration", value: "underline" }
];

style(styles, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis a veritatis, repellat libero accusamus itaque sapiente unde hic dolor.");

function style(list, text) {
    let styleString = "";

    for(let i = 0; i < list.length; i++) {
        styleString += `${list[i].name}: ${list[i].value};`;
    }

    let temp = `<p style="${styleString}"> ${text} </p>`;

    document.write(temp);
}