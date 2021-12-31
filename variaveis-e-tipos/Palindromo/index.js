var botao = document.querySelector("#botao");
var str = [];
var saida = document.querySelector("#saida");


botao.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log("fui clicado");
    verificaPalindromo();
});

function verificaPalindromo() {
    var entrada = document.querySelector("#palindromo").value;
    console.log(entrada);

    for (let i = 0; i < entrada.length; i++) {
        // console.log(entrada[i]);
        
        str.push(entrada[i]);
        console.log(str);
        
    }
    

    for (let j = 0; j < str.length; j++) {
        if (str[0] === str[str.length - 1]) {
            str.pop();
            str.shift();
            var resposta = true;
            // console.log("Palindromo");
        } else {
            resposta = false;
            // console.log("Não Palidromo");
        }
    }

    if (resposta === true) {
        console.log("Palíndromo");
        
        
        saida.innerHTML = `A palavra ${entrada} é um palíndormo.`;
    } else {
        saida.innerHTML = `A palavra ${entrada} não é um palíndormo.`;
        console.log("Não Palíndromo");

    }
    /* do {
        if (str[0] == str[entrada.length - 1]) {
            console.log("palindromo");
            str.shift();
            str.pop();
        } else {
                console.log("Não palindromo");
        }
        
        console.log(str[0]);
        console.log(str[str.length - 1]);
    } while (str.length > 0); */

    str = [];
    
}