let itensRemovidos = {};

document.getElementById("itemInput").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarItem();
    }
});

const adicionarItem = (item = null) => {
    const input = document.getElementById("itemInput");
    const select = document.getElementById("itemSelect");
    const tabela = document.getElementById("tabelaItens");
    
    let valor = item ? item : input.value.trim();
    if (valor === "") return;
    
    let option = document.createElement("option");
    option.text = valor;
    option.value = valor;
    select.appendChild(option);
    
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.textContent = valor;
    row.appendChild(cell);
    tabela.appendChild(row);
    
    input.value = "";
};

const marcarItem = () => {
    let select = document.getElementById("itemSelect");
    let tabela = document.getElementById("tabelaItens").getElementsByTagName("tr");
    
    for (let row of tabela) {
        if (row.cells[0].textContent === select.value) {
            row.classList.add("marcado");
        }
    }
};

const desmarcarItem = () => {
    let select = document.getElementById("itemSelect");
    let tabela = document.getElementById("tabelaItens").getElementsByTagName("tr");
    let encontrado = false;
    
    for (let row of tabela) {
        if (row.cells[0].textContent === select.value) {
            encontrado = true;
            if (!row.classList.contains("marcado")) {
                alert("O item já está desmarcado!");
                return;
            }
            row.classList.remove("marcado");
        }
    }
    if (!encontrado) {
        alert("O item selecionado não foi encontrado na tabela!");
    }
};

const removerItem = () => {
    let select = document.getElementById("itemSelect");
    let tabela = document.getElementById("tabelaItens").getElementsByTagName("tr");
    let encontrado = false;
    
    for (let i = 0; i < tabela.length; i++) {
        if (tabela[i].cells[0].textContent === select.value) {
            itensRemovidos[select.value] = select.value; // Guarda no histórico
            tabela[i].remove();
            select.remove(select.selectedIndex);
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        alert("O item selecionado não foi encontrado na tabela!");
    }
};

const recuperarItem = () => {
    let select = document.getElementById("itemSelect");
    let tabela = document.getElementById("tabelaItens");
    let valores = Object.keys(itensRemovidos);
    
    if (valores.length === 0) {
        alert("Nenhum item para recuperar!");
        return;
    }
    
    let itemRecuperado = valores[0]; // Recupera o primeiro item salvo
    delete itensRemovidos[itemRecuperado]; // Remove do histórico
    adicionarItem(itemRecuperado);
};


const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

document.querySelector("body").appendChild(buttonContainer);

const btnRecuperar = document.createElement("button");
btnRecuperar.textContent = "Recuperar";
btnRecuperar.classList.add("btn");
btnRecuperar.addEventListener("click", recuperarItem);
buttonContainer.appendChild(btnRecuperar);


const style = document.createElement("style");
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 20px;
    }
    .button-container {
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }
    .btn {
        background-color: #007BFF;
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        border-radius: 5px;
    }
    .btn:hover {
        background-color: #0056b3;
    }
    table {
        width: 50%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }
    .marcado {
        background-color: yellow !important;
    }
`;
document.head.appendChild(style);
