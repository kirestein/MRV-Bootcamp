var botao = document.querySelector("#botao");
var str = [];
var saida = document.querySelector("#saida");
// var resposta = false;


botao.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log("fui clicado");
    verificaPalindromo();
});

function verificaPalindromo() {
    var entrada = document.querySelector("#entrada").value;
    
    // var entrada = string;
    /* console.log(string);
    if (!string) return;
    if(string.split("").reverse().join("") === string) {
        
        saida.innerHTML = `${string} é um palíndormo.`;
    } else {
        saida.innerHTML = `${string} não é um palíndormo.`;
    }; */



     for (let i = 0; i < entrada.length; i++) {
        // console.log(entrada[i]);
        
        str.push(entrada[i]);
        console.log(str);
        
    } 
    

     for (let j = 0; j < str.length; j++) {
        if (str[0] === str[str.length - 1]) {
            str.pop();
            str.shift();
            saida.innerHTML = `${entrada} é um palíndormo.`;
            // console.log("Palindromo");
        } else {
            saida.innerHTML = `${entrada} não é um palíndormo.`;
            // console.log("Não Palidromo");
        }
    }

    

    str = []; 
    
}