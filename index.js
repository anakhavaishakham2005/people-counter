let countEl=document.getElementById("count-el");
let count=0;
countEl.innerHTML=count;

function increment() {
    count+=1;
    countEl.innerHTML=count;
}

let 