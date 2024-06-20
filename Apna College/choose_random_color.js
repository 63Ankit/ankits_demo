let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomcolor=getrandomColor();
    h3.innerText=randomcolor;
    h3.style.color=randomcolor;

    let div=document.querySelector("div");
    div.style.backgroundColor=randomcolor;
    console.log("color is updated");
});
function getrandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
let c1=`rgb(${red},${green},${blue})`;
return c1;
}
let p=document.querySelector("p");
p.addEventListener("click",function(){
    console.log("para is clicked");
    p.style.color="red";
});
let box=document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("Mouse inside the box");
    alert("mouse inside the please remove it");
});
// this in the eventListener
let h1=document.querySelector("h1");
h1.addEventListener("dblclick",function(){
    console.log(this);  //In the event listener if we used the this then they talk about that h1 object .
    this.style.backgroundColor="red";
});
let h2=document.querySelector("h2");
let h4=document.querySelector("h4");
let pa=document.querySelector(".a");
function chancolor(){
    this.style.color="red";
}
h2.addEventListener("click",chancolor);
h4.addEventListener("click",chancolor);
pa.addEventListener("click",chancolor);
let b1=document.querySelector(".b1");
let inp=document.querySelector("input");
//
//
inp.addEventListener("keydown",function(event){
    console.log("key was pressed");
console.log("key==",event.key);
console.log("code==",event.code);
}
);
//
//
let c1=document.querySelector(".c1");
let b2=document.querySelector(".b2");
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("form submitted");    // here action is perform rapidaly so we are use the event.preventDefault();
    console.log(c1.value);       //here the .value is used to print those part which are pass as input

});
c1.addEventListener("change",function(){
    console.log("change event");
    console.log("final value==",this.value);

});

c1.addEventListener("input",function(){
    console.log(" input event");
    console.log("all value input value==",this.value);

});
let c2=document.querySelector(".c2");
let p5=document.querySelector(".p5");
c2.addEventListener("input",function(){
console.log(c2.value);
p5.innerText=c2.value;
});
