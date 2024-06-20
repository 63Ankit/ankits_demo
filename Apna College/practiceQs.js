let para=document.createElement("p");
para.innerText=("hey i am red");
let body=document.querySelector("body");
body.append(para);
para.style.color="red";

let h3=document.createElement("h3");
h3.innerText=("Iam a blue h3!");
body.append(h3);
h3.style.color=("blue");
let div=document.createElement("div");
body.append(div);
div.style.border="pink";