// let btn=document.querySelector("button");
let btns=document.querySelectorAll("button");
console.dir(btns);
// btn.onclick=function(){
//     console.log("button was clicked");
// };
function getvalue(){
    console.log("button was clicked");
    alert("hello World")
    
}
function sendvalue(){
    alert("button clicked");
}
function rendvalue(){
    prompt("take some input here");
}
// for(btn of btns){
//     btn.onclick=getvalue;
// };
// btn.onclick=getvalue;
// for(btn of btns){
//     btn.onmouseenter=getvalue;
// }
for (btn of btns){
btn.addEventListener("dblclick",rendvalue);
// btn.addEventListener("click",getvalue);
// btn.addEventListener("click",sendvalue);


}
