function chamarPergunta(){
    nome = prompt('Digite o seu nome:');
    console.log(nome)

    var alterarP = document.getElementById('resposta').innerHTML = '<p>olá</p>' + nome;
}

function limparP(){
    var limpar = document.getElementById('resposta').innerHTML = '<p>aqui vai aparecer a sua resposta</p>'
}

//Calculadora




function somar(){
    const numero1 = Number.parseFloat(document.getElementById('num1').value)
    const numero2 = Number.parseFloat(document.getElementById('num2').value)
    const soma = numero1 + numero2
    mostrar = document.getElementById('resultado').innerHTML = soma
}

function subtrair(){
    const numero1 = Number.parseFloat(document.getElementById('num1').value)
    const numero2 = Number.parseFloat(document.getElementById('num2').value)
    const subtrair = numero1 - numero2
    mostrar = document.getElementById('resultado').innerHTML = subtrair
}

function multiplicar(){
    const numero1 = Number.parseFloat(document.getElementById('num1').value)
    const numero2 = Number.parseFloat(document.getElementById('num2').value)
    const multiplicar = numero1 * numero2
    mostrar = document.getElementById('resultado').innerHTML = multiplicar
}

function dividir(){
    const numero1 = Number.parseFloat(document.getElementById('num1').value)
    const numero2 = Number.parseFloat(document.getElementById('num2').value)
    const dividir = numero1 / numero2
    mostrar = document.getElementById('resultado').innerHTML = dividir
}


