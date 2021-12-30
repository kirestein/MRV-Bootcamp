

var botaoCalcular = document.querySelector("#botao");

botaoCalcular.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Fui clicado");
    
    calcular();
});
function calcular() {
    var a = parseInt(document.querySelector("#a").value);
    var b = parseInt(document.querySelector("#b").value);
    var resultado = a + b;
    console.log(resultado);
    console.log(typeof(a));
    console.log(b);
    var saida = document.querySelector("#saida");
    if (a === b) {
        if ((a + b) < 10 && (a + b) < 20) {
            saida.innerHTML = `Os valores ${a} e ${b} são iguais, sua soma é ${resultado}, que é menor que 10 e menor que 20`;
        } else if ((a + b) > 10 && (a + b) > 20) {
            saida.innerHTML = `Os valores ${a} e ${b} são iguais, sua soma é ${resultado}, que é maior que 10 e maior que 20`;
        } else if ((a + b) > 10 && (a + b) < 20) {
            saida.innerHTML = `Os valores ${a} e ${b} são iguais, sua soma é ${resultado}, que é maior que 10 e menor que 20`;
        } else if ((a + b) === 10) {
            saida.innerHTML = `Os valores ${a} e ${b} são iguais, sua soma é ${resultado}, que é igual a 10`;
        } else if ((a + b) === 20) {
            saida.innerHTML = `Os valores ${a} e ${b} são iguais, sua soma é ${resultado}, que é igual a 20`;
        }
        
    } else {
        if ((a + b) < 10 && (a + b) < 20) {
            saida.innerHTML = `Os valores ${a} e ${b} não são iguais, sua soma é ${resultado}, que é menor que 10 e menor que 20`;
        } else if ((a + b) > 10 && (a + b) > 20) {
            saida.innerHTML = `Os valores ${a} e ${b} não são iguais, sua soma é ${resultado}, que é maior que 10 e maior que 20`;
        } else if ((a + b) > 10 && (a + b) < 20) {
            saida.innerHTML = `Os valores ${a} e ${b} não são iguais, sua soma é ${resultado}, que é maior que 10 e menor que 20`;
        } else if ((a + b) === 10) {
            saida.innerHTML = `Os valores ${a} e ${b} não são iguais, sua soma é ${resultado}, que é igual a 10`;
        } else if ((a + b) === 20) {
            saida.innerHTML = `Os valores ${a} e ${b} não são iguais, sua soma é ${resultado}, que é igual a 20`;
        }
    }

}

// 