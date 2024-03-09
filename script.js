function chamarPergunta(){
    nome = prompt('Digite o seu nome:');
    console.log(nome)

    var alterarP = document.getElementById('resposta').innerHTML = '<p>olá</p>' + nome;
}

function limparP(){
    var limpar = document.getElementById('resposta').innerHTML = '<p>aqui vai aparecer a sua resposta</p>'
}

