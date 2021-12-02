

function enviar (){

    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById ('mensagem').value;

    if(nome != '' && telefone != '' && email != '' && mensagem != ''){
        let dados = `Seus dados:\nNome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${mensagem}\n\nDados enviados!`
        //document.getElementById('teste').innerHTML = dados;
        alert(dados);
    }
    else{
        alert("Preencha os campos!!!");
    }


   
}

function cancelar(){
    document.getElementById('nome').value = '' ;
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
}

function validacao (){

}