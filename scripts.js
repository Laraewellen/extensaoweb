let contador = 0;
document.getElementById("increment").addEventListener("click", () => {
    contador++;
    document.getElementById("contador").textContent = contador;
    document.getElementById("erro").textContent = "";
});

document.getElementById("decrement").addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        document.getElementById("contador").textContent = contador;
    } else {
        document.getElementById("erro").textContent = "Erro: O contador já está em zero!";
    }
});

document.getElementById("texto").addEventListener("input", (e) => {
    let textoSemEspacos = e.target.value.replace(/\s/g, "");
    document.getElementById("contadorCaracteres").textContent = "Caracteres: " + textoSemEspacos.length;
});

document.getElementById("texto").addEventListener("keypress", (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
        let p = document.createElement("p");
        p.textContent = e.target.value;
        document.getElementById("mensagens").appendChild(p);
        e.target.value = "";
        document.getElementById("contadorCaracteres").textContent = "Caracteres: 0";
    }
});

document.getElementById("adicionarItem").addEventListener("click", () => {
    let tipoLista = document.getElementById("tipoLista").value;
    let novoItemTexto = document.getElementById("novoItem").value.trim();
    if (novoItemTexto === "") {
        document.getElementById("erro").textContent = "Erro: Digite um item válido.";
        return;
    }
    document.getElementById("erro").textContent = "";
    
    let lista = document.getElementById("listas").querySelector(tipoLista) || document.createElement(tipoLista);
    let item = document.createElement("li");
    item.textContent = novoItemTexto;
    lista.appendChild(item);
    document.getElementById("listas").appendChild(lista);
    document.getElementById("novoItem").value = "";
});

document.getElementById("reset").addEventListener("click", () => {
    contador = 0;
    document.getElementById("contador").textContent = contador;
    document.getElementById("erro").textContent = "";
    document.getElementById("mensagens").innerHTML = "";
    document.getElementById("listas").innerHTML = "";
    document.getElementById("texto").value = "";
    document.getElementById("contadorCaracteres").textContent = "Caracteres: 0";
});
