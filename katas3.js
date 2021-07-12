








const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults (valor) {
    const resposta = document.getElementById('d1');    
    let newElement = document.createElement("p");       
    newElement.innerHTML = valor;
    resposta.appendChild(newElement);


}

function kata1(n1) {
    // implemente o código do kata 1 aqui
    //Exibir os números de 1 a 25: (1, 2, 3, …, 24, 25)
    let k1 = []
    for(let i = 1; i <= n1; i++) {
        k1.push(" " + i);
    }
    return showResults( "kata 1: " + k1)
}
kata1(25)


function kata2(n2) {
    // implemente o código do kata 2 aqui
    // Exibir os números de 25 a 1: (25, 24, 23, …, 2, 1)
    let k2 = []
    for(let i = n2; i > 0; i--) {
        k2.push(" " + i);
    }
    return showResults("kata 2: " + k2)
}
kata2(25)   



function kata3(n3) {
    // implemente o código do kata 3 aqui
    // Exibir os números de -1 a -25: (-1, -2, -3, …, -24, -25)

    let k3 = []
    for(let i = -1; i >= n3 ; i--) {
        k3.push(" " + i);
    }
    return showResults("kata 3: " + k3)
}
kata3(-25)
    


function kata4(n4) {
    // implemente o código do kata 4 aqui
    // Exibir os números de -25 a -1: (-25, -24, -23, …, -2, -1)
    let k4 = []
    for(let i = n4; i <= -1; i++) {
        k4.push(" " + i);
    }
    return showResults("kata 4: " + k4)
}
kata4(-25)

function kata5(n5) {
    // implemente o código do kata 5 aqui
    //Exibir os números ímpares de 25 a -25: (25, 23, 21, …, -23, -25)
    let k5 = []
    for (let i = 25; i >= n5; i--) {
        if (i % 2 !== 0){
            k5.push(" " + i)
        }
    }
    return showResults("kata 5: " + k5)
}
kata5(-25)

function kata6(n6) {
    // implemente o código do kata 6 aqui
    // Exibir os números divisíveis por 3 até o 100: (3, 6, 9, …, 96, 99)
    let k6 = []
    for (let i = 1; i < n6; i++){
        if ( i % 3 == 0){
            k6.push(" " + i)
        }
    }
    return showResults("kata 6: " + k6)
}

kata6(100)

function kata7(n7) {
    // implemente o código do kata 7 aqui
    // Exibir os números divisíveis por 7 até o 100: (7, 14, 21, …, 91, 98)
    let k7 = []
    for (let i = 1; i < n7; i ++){
        if (i % 7 == 0){
            k7.push(" " + i)
        }
    }
    return showResults("Kata 7: " + k7)
}
kata7(100)

function kata8(n8) {
    // implemente o código do kata 8 aqui
    // Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)
    let k8 = []
    for (let i = n8; i > 0; i --){
        if ((i % 3 == 0) || (i % 7 == 0)){
            k8.push(" " + i)
        }
    }
    return showResults("Kata 8: " + k8)
}
kata8(100)




function kata9(n9) {
    // implemente o código do kata 9 aqui
    // Exibir os números ímpares divisíveis por 5 até o 100: (5, 15, 25, …, 85, 95)
    let k9 = []
    for (let i = 1; i < n9; i ++) {
        if ((i % 5 == 0) && (i % 2 != 0)){
            k9.push(" " + i)
        }
    }
    return showResults("kata 9 : " + k9)
}
kata9(100)



function kata10(n10) {
    // implemente o código do kata 10 aqui
    // Exibir os 20 elementos de sampleArray. (469, 755, 244, …, 940, 472)
    //let k10 = n10.slice(0, 20)
    let k10 = []
    for(let i = 0; i < n10.length; i++){
        if(i < 20){
            k10.push(" " + n10[i])
        }
        
    }    
    return showResults("kata 10:  " + k10)
}
kata10(sampleArray)


function kata11(n11) {
    // implemente o código do kata 11 aqui
    // Exibir todos os números pares contidos em sampleArray. (244, 758, 450, …, 940, 472)
    let k11 = []
    for (let i = 0; i < n11.length; i++) {
        if (n11[i] % 2 == 0){
            k11.push(" " + n11[i])
        }
    }
    return showResults("kata 11: " +  k11)

}
kata11(sampleArray)

function kata12(n12) {
    // implemente o código do kata 12 aqui
    // Exibir todos os números ímpares contidos em sampleArray. (469, 755, 245, …, 179, 535)
    let k12 = []
    for (let i = 0; i < n12.length; i++) {
        if (n12[i] % 2 !== 0){
            k12.push(" " + n12[i])
        }
    }
    return showResults("kata 12: " +  k12)

}
kata12(sampleArray)
    


function kata13(n13) {
    // implemente o código do kata 13 aqui
    // Exibir os números divisíveis por 8 em sampleArray: (712, 456, …, 472)
    let k13 = []
    for (let i = 0; i < n13.length; i ++){
        if (n13[i] % 8  == 0){
            k13.push(" " + n13[i])
        }
    }
    return showResults("Kata 13: " + k13)
}
kata13(sampleArray)



function kata14(n14) {
    // implemente o código do kata 14 aqui
    // Exibir o quadrado de cada elemento de sampleArray. (219961, 570025, …, 222784)
    let k14 = []
    for (let i = 0; i < n14.length; i ++) {
        k14.push(" " + n14[i] * n14[i])
    }
    return showResults("Kata 14: " + k14)
}
kata14(sampleArray)



function kata15(n15) {
    // implemente o código do kata 15 aqui
    // Exibir a soma de todos os números de 1 a 20.
    let k15 = []
    let soma = 0
    for(let i = 0; i <= n15; i++){
        soma += i        
    } 
    k15.push("Soma de 1 a 20: " + soma)   
    return showResults("kata 15 -  " + k15)
}
kata15(20)


function kata16(n16) {
    // implemente o código do kata 16 aqui
    // Exibir a soma de todos os elementos de sampleArray.
    let k16 = []
    let somaArr = 0
    for (let i = 0; i < n16.length; i++) {
        somaArr += n16[i]
    }
    k16.push("A soma dos elementos do Array é: " + somaArr)
    return showResults("Kata 16 - " + k16)
}
kata16(sampleArray)

function kata17(n17) {
    // implemente o código do kata 17 aqui
    //Exibir o menor elemento de sampleArray.
    let k17 = []
    let menor = n17[0]
    for (let i = 0; i <= n17.length; i++) {
        if (n17[i] < menor) {
            menor = n17[i]
        }
    }
    k17.push("O menor elemento do Array é: " + menor)
    return showResults("kata 17 - " + k17)
}
kata17(sampleArray)

function kata18(n18) {
    // implemente o código do kata 18 aqui
    let k18 = []
    let maior = n18[0]
    for (let i = 0; i <= n18.length; i++) {
        if (n18[i] > maior) {
            maior = n18[i]
        }
    }
    k18.push("O maior elemento do Array é: " + maior)
    return showResults("kata 18 - " + k18)
}
kata18(sampleArray)





/**
 * Daqui em diante são os bônus, por sua conta e risco
 */
/*for(i=1; i<=18; i++) {
    // Create a div, with class "bar", and set the width to 100px.
    let newElement = document.createElement("div");
    newElement.className = "bar";
    newElement.style.width = i*50 + "px";

    // Place a text label inside the new div.
    let newText = document.createTextNode("d" + i);
    newElement.appendChild(newText);

    // Put the new div on the page inside the existing element "d1".
    let destination = document.getElementById("kts");
    destination.appendChild(newElement);   
}

console.log(newText)*/

function kataBonus1(e1) {
    // implemente o código do kata bonus 1 aqui
    //Exibir 20 retângulos cinza sólido, cada um com 20px de altura e 100px de largura.
    for (let i = 0; i <= e1; i ++) {
        let newSquare = document.createElement("div")
        newSquare.className = "box"
        newSquare.style.height = "20px";
        newSquare.style.width = "100px";
        let destino = document.getElementById("d2");
        destino.appendChild(newSquare)
    }
}
kataBonus1(20)



function kataBonus2(e2) {
    // implemente o código do kata bonus 2 aqui
    // Exibir 20 retângulos cinza sólido, cada um com 20px de altura e larguras variando uniformemente de 105px a 200px, com o intervalo de 5px entre cada retangulo.
    let larg = 105
    for (let i = 1; i <= e2; i ++){
        
        let newrect = document.createElement("div");
        newrect.className = "box2"
        newrect.style.height = "20px"
        newrect.style.width = larg +  "px";
        let plot = document.getElementById("d3");
        plot.appendChild(newrect);
        larg += 5

    }
}
kataBonus2(20)



function kataBonus3(e3) {
    // implemente o código do kata bonus 3 aqui
    //Exibir 20 retângulos cinza sólido, cada um com 20px de altura e com larguras em pixels determinadas pelos 20 elementos do sampleArray.
    
    for(let i = 0; i < 20; i++){
        let novo = document.createElement("div");
        novo.className ="box3";
        novo.style.height = "20px";
        novo.style.width = e3[i] + "px"
        let imprime = document.getElementById("d4");
        imprime.appendChild(novo);        
    }      
}

kataBonus3(sampleArray) 



function kataBonus4(e4) {
    // implemente o código do kata bonus 4 aqui
    //Como no Item #3, mas alternando cores para que retângulo sim, retângulo não seja vermelho.
    for(let i = 0; i < 20; i++){
        let novo = document.createElement("div");
        if (i % 2 !== 0){
            novo.className ="box3";
        } else {
            novo.className = "box4"
        }
        
        novo.style.height = "20px";
        novo.style.width = e4[i] + "px"
        let imprime = document.getElementById("d5");
        imprime.appendChild(novo);        
    } 
}

kataBonus4(sampleArray)

function kataBonus5(e5) {
    // implemente o código do kata bonus 5 aqui
    //Como no Item #3, mas pinte os retângulos de largura par de vermelho.
    for(let i = 0; i < 20; i++){
        let novo = document.createElement("div");
        if (e5[i] % 2 == 0){
            novo.className ="box3";
        } else {
            novo.className = "box4"
        }
        
        novo.style.height = "20px";
        novo.style.width = e5[i] + "px"
        let imprime = document.getElementById("d6");
        imprime.appendChild(novo);        
    } 
}
kataBonus5(sampleArray)
