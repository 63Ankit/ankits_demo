function hello(){
    console.log("hello function calling here");
    console.log("CCSU LIBRARY");
}
function demo(){
    console.log("demo function calling");
    hello();
}
console.log("calling demo function starting here");
demo();
console.log("all function are complete executed");
////////////////////////////////////////////////////////
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    return one()+two();
}
console.log(three());
//////////////////////////////////////////////////////////
let h1=document.querySelector("h1");
setTimeout(()=>{
    h1.style.color="red";
},1000);
setTimeout(()=>{
    h1.style.color="yellow";
},2000);
setTimeout(()=>{
    h1.style.color="green";
},3000);
///////////////////////////////////////
let h2=document.querySelector("h2");
function changeColor(color,delay){
    setTimeout(()=>{
       h2.style.color=color;
    },delay)
}
changeColor("red",1000);
changeColor("green",2000);
changeColor("blue",3000);
/////////////////////////////
let h3=document.querySelector("h3");
function changeColors(color,delay,nextColor){
    setTimeout(()=>{
        h3.style.color=color;
        if(nextColor)nextColor();
    },delay)
 
}
changeColors("pink",1000,()=>{
    changeColors("green",1000,()=>{
        changeColors("red",1000,()=>{
            changeColors("blue",1000,()=>{
            changeColors("gray",1000,
              );
        });
     });
    });
});
///////////////////////////////////
let h4=document.querySelector(".a1");
function changeColorss(color,delay){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        h4.style.color=color;
        resolve("Color Changed");
    },delay);

    });
    }
    changeColorss("green",1000)
    .then(()=>{
        console.log("green color was completed");
        return changeColorss("red",1000);
    })
    .then(()=>{
        console.log("red color was completed");
        return changeColorss("pink",1000);
    })
    .then(()=>{
        console.log("pink color was completed");
        return changeColorss("blue",1000);
    })
    .then(()=>{
        console.log("blue color was completed");
    })
// changeColorss("pink",1000,()=>{
//     changeColorss("green",1000,()=>{
//         changeColorss("red",1000,()=>{
//             changeColorss("blue",1000,()=>{
//             changeColorss("gray",1000,
//               );
//         });
//      });
//     });
// });
////////////////////// NOW WE ARE STUDY ABOUT THE ASYNC FUNCTION ///////////////
async function Ankit(){
    throw "404 page not found";
    console.log("Hello");
}
Ankit()
.then((result)=>{
    console.log("promise is sucessfull");
    console.log("result was",result);

})
.catch((err)=>{
    console.log("promise was not fullfilled");
    console.log("Error was",err)
});
///////////////////////////////  using await keyword into the async function  ///////
function getnum(){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);

    });
}
async function demou(){
   await getnum();
   await getnum();
   await getnum();
  await getnum();
    getnum();
}
demou();
////////////////////////////////////////////////////
let h5=document.querySelector(".a2");
function changeColorsss(color,delay){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            if(num>3){
                reject("promise is rejected");
            }
        h5.style.color=color;
        console.log(`color changed to ${color}!`);
        resolve("Color Changed");
    },delay);

    });
    }
    async function demoo(){
        try{
     await changeColorsss("yellow",1000);
     await changeColorsss("blue",1000);
     await changeColorsss("red",1000);
     await changeColorsss("cyan",1000);
     await changeColorsss("pink",1000);
     await changeColorsss("aqua",1000);
     await changeColorsss("white",1000);
        }
        catch(err){
            console.log("error caught");
            console.log(err);
    }
    let a=5;
    console.log(a);
    console.log("new number = ",a+3);
    }
    
    // changeColorsss("green",1000)
    // .then(()=>{
    //     console.log("green color was completed");
    //     return changeColorsss("red",1000);
    // })
    // .then(()=>{
    //     console.log("red color was completed");
    //     return changeColorsss("pink",1000);
    // })
    // .then(()=>{
    //     console.log("pink color was completed");
    //     return changeColorsss("blue",1000);
    // })
    // .then(()=>{
    //     console.log("blue color was completed");
    // })