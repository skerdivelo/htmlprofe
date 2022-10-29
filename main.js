// Riferimenti agli oggetti html
// 1. Alla pressione del bottone btnAdd inserire un nuovo <li>
// con data,ora e il testo della nota
// 2. Alla pressione del bottone btnClear cancellare la lista
// chiedendo conferma all'utente mediante la funzione 'confirm'
// 3. In apertura della finestra cancellare la lista predefinita
let edtNota = document.getElementById("edtNota")
const ulTag = document.getElementById("listaTask");
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear")
const bodyTask = document.getElementById("bodyTask")
// Funzioni
function ClearList(){
    let liTags = document.querySelectorAll("ul>li");
    for(let i = 0; i < liTags.length; i++){
        ulTag.removeChild(liTags[i]);
    }
}
/*
function AddToList(text, append = true){
    let elementToAdd = document.createElement("li");
    elementToAdd.innerHTML = text;
    if(append){
        ulTag.appendChild(elementToAdd);
    }else{
        ulTag.prepend(elementToAdd);
    }
}
*/

function AddToListEx(id, giorno, ora, text){
    let rowToAdd = document.createElement("tr"); //creo elemento riga
    bodyTask.appendChild(rowToAdd);     // Inserisco riga nel body
    let hToAdd = document.createElement("th");  // creo elemento intestazione di riga (prima colonna)
    hToAdd.innerHTML = id
    rowToAdd.appendChild(hToAdd)    // Inserisco elemento di colonna nella riga
    let dToAdd = document.createElement("td");
    dToAdd.innerHTML = giorno
    rowToAdd.appendChild(dToAdd)
    console.log(bodyTask)
    }

// Eventi
btnAdd.onclick = function() {
    const data = new Date();
    const giorno = data.toLocaleDateString();
    const ora = data.toLocaleTimeString();
    const testo = edtNota.value
    if (testo!=""){
        //AddToList(giorno + " " + ora + " " + testo);
        AddToListEx("1", giorno, ora, testo)

        edtNota.value = ""  // Pulisco testo
        edtNota.focus()       // Riposiziono cursore
        localStorage.setItem("Lista", ulTag.innerHTML)
        }
}
btnClear.onclick = function(){
    if (confirm("ATTENZIONE: Cancellazione lista.") == true)
    {
        ClearList()
        localStorage.clear()

    }
        
}
// Codice del main all'avvio
ClearList()
ulTag.innerHTML = localStorage.getItem("Lista")
