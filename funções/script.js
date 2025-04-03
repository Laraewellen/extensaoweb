document.getElementById("itemInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarItem();
    }
});

function adicionarItem() {
    const input = document.getElementById("itemInput");
    const select = document.getElementById("itemSelect");
    const tabela = document.getElementById("tabelaItens");
    
    if (input.value.trim() === "") return;
    
    let option = document.createElement("option");
    option.text = input.value;
    select.add(option);
    
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.textContent = input.value;
    row.appendChild(cell);
    tabela.appendChild(row);
    
    input.value = "";
}

function marcarItem() {
    let select = document.getElementById("itemSelect");
    let tabela = document.getElementById("tabelaItens");
    
    for (let row of tabela.rows) {
        if (row.cells[0].textContent === select.value) {
            row.classList.add("marcado");
        }
    }
}

function desmarcarItem() {
    let select = document.getElementById("itemSelect");
    let tabela = document.getElementById("tabelaItens");
    let encontrado = false;
    
    for (let row of tabela.rows) {
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
}

function removerItem() {
    let select = document.getElementById("itemSelect");
    let tabela = document.getElementById("tabelaItens");
    let encontrado = false;
    
    for (let row of tabela.rows) {
        if (row.cells[0].textContent === select.value) {
            tabela.removeChild(row);
            select.remove(select.selectedIndex);
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        alert("O item selecionado não foi encontrado na tabela!");
    }
}