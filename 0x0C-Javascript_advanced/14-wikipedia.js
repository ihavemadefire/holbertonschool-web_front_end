function createElement(data) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = data;
    document.body.append(newParagraph);
}

function queryWikipedia(callback) {
    let req = new XMLHttpRequest();
    req.open(
        "GET",
        "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
    );
    req.send();
    req.onload = () =>
        callback(JSON.parse(req.response).query.pages["21721040"].extract);
}

queryWikipedia(createElement);