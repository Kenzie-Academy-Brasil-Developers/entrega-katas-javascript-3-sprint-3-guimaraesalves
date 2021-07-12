for(i=1; i<=18; i++) {
    // Create a div, with class "bar", and set the width to 100px.
    var newElement = document.createElement("div");
    newElement.className = "bar";
    newElement.style.width = i*50 + "px";

    // Place a text label inside the new div.
    var newText = document.createTextNode("d" + i);
    newElement.appendChild(newText);

    // Put the new div on the page inside the existing element "d1".
    var destination = document.getElementById("kts");
    destination.appendChild(newElement);   
}

console.log(newText)







const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults (valor) {
    const resposta = document.getElementById('d1');    
    var newElement = document.createElement("p");       
    newElement.innerHTML = valor;
    resposta.appendChild(newElement);


}

function kata1(n) {
    // implemente o código do kata 1 aqui
    let k1 = []
    for(let i = 1; i <= n; i++) {
        k1.push(i);
    }
    return showResults(k1)
}
console.log(kata1(25))


function kata2(n) {
    // implemente o código do kata 2 aqui
    let k2 = []
    for(let i = 25; i > 0; i--) {
        k2.push(i);
    }
    return showResults(k2)
}
console.log(kata2(25))
    
   





function kata3() {
    // implemente o código do kata 3 aqui
}

function kata4() {
    // implemente o código do kata 4 aqui
}

function kata5() {
    // implemente o código do kata 5 aqui
}

function kata6() {
    // implemente o código do kata 6 aqui
}

function kata7() {
    // implemente o código do kata 7 aqui
}

function kata8() {
    // implemente o código do kata 8 aqui
}

function kata9() {
    // implemente o código do kata 9 aqui
}

function kata10() {
    // implemente o código do kata 10 aqui
}

function kata11() {
    // implemente o código do kata 11 aqui
}

function kata12() {
    // implemente o código do kata 12 aqui
}

function kata13() {
    // implemente o código do kata 13 aqui
}

function kata14() {
    // implemente o código do kata 14 aqui
}

function kata15() {
    // implemente o código do kata 15 aqui
}

function kata16() {
    // implemente o código do kata 16 aqui
}

function kata17() {
    // implemente o código do kata 17 aqui
}

function kata18() {
    // implemente o código do kata 18 aqui
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
