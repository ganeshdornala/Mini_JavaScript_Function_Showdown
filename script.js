let count=0;
const cd=document.getElementById("counter");
const ib=document.getElementById("increment");
const db=document.getElementById("decrement");
const rb=document.getElementById("reset");
ib.addEventListener("click",()=>{
    count++;
    cd.textContent=count;
});
db.addEventListener("click",()=>{
    if(count>0){
        count--;
        cd.textContent=count;
    }
});
rb.addEventListener("click",()=>{
    count=0;
    cd.textContent=count;
})