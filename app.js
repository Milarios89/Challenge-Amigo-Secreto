let amigos = []; 

function adicionarAmigo() {  
    let inputNome = document.getElementById("amigo");
    let nomeAmigo = inputNome.value;
    
    if(inputNome === "") {
        alert("Por favor, insira um nome");
        return;
    } 
    amigos.push(nomeAmigo);
    inputNome.value = "";
    inputNome.focus();
    listaDeAmigos();   
}


        
function listaDeAmigos() {  
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}
    
function sortearAmigo() {  
    if(amigos.length === 0){
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultadoSorteio(amigoSorteado);
        
        function resultadoSorteio(amigoSorteado) {   
            let listaResultado = document.getElementById("resultado");
            listaResultado.innerHTML = "";

            var li = document.createElement("li");
            li.textContent = `O seu amigo(a) oculto é ${amigoSorteado}`;
            listaResultado.appendChild(li);
            
        
        }
    }

}
    



    






