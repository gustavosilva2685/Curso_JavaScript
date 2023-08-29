function carregar(){

    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");

    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora < 12){
        img.src="imagens/manha.png";
        document.body.style.background = '#EDE566';       

    }
    else if(hora <18){
        img.src="imagens/tarde.png";
        document.body.style.background = '#F7C36A';
    }
    else{
        img.src="imagens/noite.png";
        document.body.style.background = '#2C479E';
    }

}
