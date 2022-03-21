let teste = "hehe"

function Sub(){
    teste = document.getElementById("teste").value
    console.log(teste)
}

function Rec(){
    const txt = document.createElement("h1")

    txt.innerText = teste

    document.getElementById("AAA").appendChild(txt)
}