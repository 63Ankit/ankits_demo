let input=document.querySelector("input");
let button=document.querySelector("button");
let ul=document.querySelector("ul");
button.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);


    ul.appendChild(item);
    input.value="";
});
// let delBtns = document.querySelectorAll(".delete");
// for(delbtn of delBtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listIteam=event.target.parentElement;
        listIteam.remove();
        console.log("deleted");
    }

});
