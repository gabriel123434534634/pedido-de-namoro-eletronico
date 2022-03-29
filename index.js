function sendEmail(message) {
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "heroku881@gmail.com",
		Password : "1C4D4833A82304A63A22C5F867F049043E90",
		To : 'fiuzagabri@gmail.com',
		From : "heroku881@gmail.com",
		Subject : "PEDIDO DE NAMORO RECEBIDO PELO PNE",
		Body : message
	})
}

function onClickCadastro(){
	div = document.getElementById("cadastroDiv")
	div2 = document.getElementById("consultaDiv")
	if(div2.style.display == "block"){
		div2.style.display = "none"
	}
	if (div.style.display == "block"){
		div.style.display = "none"
	}else{
		div.style.display = "block"
	}
}

function onClickConsulta(){
	div = document.getElementById("cadastroDiv")
	div2 = document.getElementById("consultaDiv")
	if(div.style.display == "block"){
		div.style.display = "none"
	}
	if (div2.style.display == "block"){
		div2.style.display = "none"
	}else{
		div2.style.display = "block"
	}
}

function enviarCadastro(){
	nome = document.getElementById("nome").value
	email = document.getElementById("email").value
	número = document.getElementById("número").value
	message = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Pedido de namoro recebido pelo PNE (Pedido de Namoro Eletrônico)</b> <br> <b>Nome:></b> ${nome} <br> <b>Email:</b> ${email} <br> <b>Número:</b> ${número}`
	sendEmail(message)
	body = document.body
	body.innerHTML = "<h1 style='color: #fc0fc0;'>Pedido de namoro enviado, o número do seu pedido será enviado para o seu email e whatsapp :) <br> Atualize a página caso queira consultar o número do pedido. <br> <br>O Gab agradece o seu pedido <3</h1>"
}

function gerarLinkDeConsulta(){
	numeroPedido = document.getElementById("númeroPedido").value
	a = document.getElementById("linkDeConsulta")
	a.href = `pedidos\\${numeroPedido}\\home.html`
	
	a.innerText = "Clique aqui para acessar o seu pedido!"
	document.getElementById("close").style.display = "none"
	document.getElementById("open").style.display = "block"
}