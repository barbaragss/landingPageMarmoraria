

function formulario (){
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value
    let email = document.getElementById('email').value

    let teste = `nome ${nome} \n telefone ${telefone} \n email ${email}`
    document.getElementById('teste').innerHTML = teste;
}


