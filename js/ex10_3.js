// obter os elementos da página HTML
const frm = document.querySelector("form");
const itensTabela = document.getElementById("itensTabela");

let i = 1;
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do formulário vazio
    const titulo = frm.inTitulo.value;
    const genero = frm.inGenero.value;

    tr = document.createElement("tr");

    const td1 = document.createElement("td");
    const textoTitulo = document.createTextNode(titulo);
    td1.appendChild(textoTitulo); // define que textoTitulo será filho de td1
    tr.appendChild(td1); // define que td será filho de tr

    const td2 = document.createElement("td");
    const textoGenero = document.createTextNode(genero);
    td2.appendChild(textoGenero); // define que textoGenero será filho de td2
    tr.appendChild(td2); // define que td será filho de tr

    const td3 = document.createElement("td");
    let btn = document.createElement("input");
    btn.type = "button";
    btn.id = "btRetirar";
    btn.value = "✗";
    btn.onclick = function () {
        if (confirm(`Confirma a exclusão do filme "${titulo}"?`)) {
            btn.parentElement.parentElement.remove(); 
            // remove o pai do pai do botão (X), ou seja, o tr que contém o título, o gênero e a ação que foi clicada
        }
    }
    td3.appendChild(btn);
    tr.appendChild(td3);

    // adiciona a linha inteira do filme já com seus respectivos dados preenchidos
    itensTabela.appendChild(tr);

    // reseta o formulário
    frm.inTitulo.value = "";
    frm.inGenero.value = "";
    frm.inTitulo.focus();
});