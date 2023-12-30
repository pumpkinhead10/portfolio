let ctext = document.getElementById("ctext");

// fetch random cat facts
fetch("https://catfact.ninja/fact").then(response => response.json())
.then(data => {
    ctext.innerText = data["fact"];
}).catch((err) => {
    console.log(err);
})