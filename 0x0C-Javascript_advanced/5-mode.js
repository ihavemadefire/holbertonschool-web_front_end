function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main(){
    let spooky = changeMode(9, bold, uppercase, pink, green);
    let darkMode = changeMode(12, bold, capitalize, black, white);
    let screamMode = changeMode(12, normal, lowercase, white, black);
    let newParagraph = document.createElement("p");
    let spookyButton = document.createElement("button");
    let darkButton = document.createElement("button");
    let screamButton = document.createElement("button");
    paragraph.innerHTML = "Welcome Holberton!";
    spookyButton.innerHTML = "Spooky";
    darkButton.innerHTML = "Dark mode";
    screamButton.innerHTML = "Scream mode";
    document.body.append(newParagraph);
    document.body.append(spookyButton);
    document.body.append(darkButton);
    document.body.append(screamButton);
    spookyButton.addEventListener("click", spooky);
    darkButton.addEventListener("click", darkMode);
    screamButton.addEventListener("click", screamMode);
}

main();