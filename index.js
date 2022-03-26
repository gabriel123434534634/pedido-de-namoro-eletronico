function sendEmail(message) {
	payload = {
		'content': message
	}
	headers = {
		'content-type': 'application/json',
		"authorization" : 'OTU3MzQyODIxNTQxNjI1ODg2.Yj-JDA.-z2aTohLkkIzemcomAOAVAur5gw'
	} 
	postPost = function(url, data) {
	  return fetch(url, {method: "POST", headers: headers, body: JSON.stringify(data)});
	}
	url = 'https://discord.com/api/v9/channels/957343242477776966/messages'
	postPost(url, payload)
	console.log("sent")
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
	message = `>          **Pedido de namoro recebido pelo PNE (Pedido de Namoro Eletrônico)** \n> **Nome:** ${nome}\n> **Email:** ${email}\n> **Número:** ${número}`
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