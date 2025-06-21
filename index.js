let saveEl= document.getElementById("save-el");
let countEl=document.getElementById("count-el");
let count=0;

function increment() {
    count+=1;
    countEl.textContent=count;
}

function save(){
    let prev=count + " - ";
    saveEl.textContent +=prev;
    count=0;
    countEl.textContent=0;
}

function reset() {
    count=0;
    countEl.textContent=0;
    saveEl.textContent = "";
}