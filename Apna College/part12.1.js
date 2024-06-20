// let JsonData='{"fact":"Neutering a cat extends its life span by two or three years.","length":60}'
// let realJson=JSON.parse(JsonData);
// console.log(realJson.length);
// let randomdog='{"message":"https:\/\/images.dog.ceo\/breeds\/cotondetulear\/IMG_20160830_202631573.jpg","status":"success"}'
// let realJsondog=JSON.parse(randomdog);
// console.log(realJsondog.message);
let url="https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
    console.log(response);
    // console.log(response.json());
    response.json()
    .then((rew)=>{
        console.log(rew.fact);
        return fetch(url);
    })
    .then((response)=>{
        return response.json();
    })
    .then((data2)=>{
        console.log(data2.fact);
    })

})
.catch((err)=>{
    console.log(err);
});
console.log("I Am Happy")
///////////////////////////////////////////////////////////////////////////////////
let url2='https://dog.ceo/api/breeds/image/random';
fetch(url2)

.then((resp)=>{
    
    console.log("here url2 respone == ",resp);
     resp.json()
     .then((resp2)=>{
        console.log("resp.json call a object ==",resp2);
        console.log("here are perfect message is print:==",
        resp2.message);
    
    });

})
.catch((err33)=>{
    console.log("Error Finding",err33);
});
////////////////////////////////////////using fetch with async await/////////////////
let url3='https://catfact.ninja/fact';
async function getFacts(){
    try{
    let res=await fetch(url3);
    let Data=await res.json();
    console.log("data of url3==",Data.fact);
}
catch(e){
    console.log("errr==",e);
}
console.log("Bye........");
}
getFacts();




