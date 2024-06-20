let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    // console.log("button was click")
    let fact=await getfacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText=fact;
});
let url="https://catfact.ninja/fact";
async function getfacts(){
    try{
    let res= await axios.get(url);
     return res.data.fact;
    }
    catch(e){
        console.log("error find",e);
        return "no fact found";
    }
}
getfacts();
////////////////////////////////////////////////////////////////////////////
let btn1=document.querySelector(".name2");
btn1.addEventListener("click",async()=>{
    // console.log("button was click")
    let fact=await letfacts();
    console.log(fact);
    let img=document.querySelector("img");
    img.setAttribute("src",fact);
});
let url2="https://dog.ceo/api/breeds/image/random";
async function letfacts(){
    try{
    let res= await axios.get(url2);
     return res.data.message;
    }
    catch(e){
        console.log("error find",e);
        return "no fact found";
    }
}
letfacts();
//////////////////////sending headers with the API request /////////////////////////////////
const url3='https://icanhazdadjoke.com/';
async function getjock(){
    try{
        const config={headers:{accept:"application/json"}};
        let res=await axios.get(url3,config);
        console.log(res.data);
    }
    catch(err){
        console.log(err);
    }
}