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
num=1
// Funzioni
function ClearList(){
    /*
    let liTags = document.querySelectorAll("ul>li");
    for(let i = 0; i < liTags.length; i++){
        ulTag.removeChild(liTags[i]);
    }
    */
    bodyTask.innerHTML = ""
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

    let idToadd=document.createElement("th");
    idToadd.innerHTML=id
    rowToAdd.appendChild(idToadd)

    let dToAdd = document.createElement("tid");  // creo elemento intestazione di riga (prima colonna)
    dToAdd.innerHTML = giorno
    rowToAdd.appendChild(dToAdd)    // Inserisco elemento di colonna nella riga

    let hToAdd = document.createElement("td");
    hToAdd.innerHTML = ora
    rowToAdd.appendChild(hToAdd)
    
    let tToadd=document.createElement("tt");
    tToadd.innerHTML=text
    rowToAdd.appendChild(tToadd)

    
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
        AddToListEx(num, giorno, ora, testo)
        num++
        
        edtNota.value = ""  // Pulisco testo
        edtNota.focus()       // Riposiziono cursore
        localStorage.setItem("Lista", bodyTask.innerHTML)
        
    }else{
        alert("Inserisci qualcosa...")
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
bodyTask.innerHTML = localStorage.getItem("Lista")
