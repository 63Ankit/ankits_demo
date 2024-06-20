// function savetoDb(data){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         console.log("Your data was saved",data, internetSpeed);
//     }
//     else{
//         console.log("your data was not saved",internetSpeed);
//     }
// }
// savetoDb("Ankit");
// ////////////////////////////////////////////////////////////////
// function savetoDbs(data,sucess,failure){
//     let internetSpeeds=Math.floor(Math.random()*10)+1;
//     if(internetSpeeds>4){
//       sucess();
//     }
//     else{
//         failure();
//     }
// }
// savetoDbs("Ankits",()=>{
//     console.log(" Sucess Ankits Your data was saved");
//     savetoDbs("Ajay",()=>{
//         console.log(" Sucess ajay Your data was saved");
//     },()=>{
//         console.log(" Failure Ajay your data was not saved because speed is slow");
//     });
// },()=>{
//     console.log(" Failure your data was not saved because speed is");
// });
////////// The Above code is the called callback hell
/////////// Promises helps us to protect the hellback situation
// function savetodbms(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeedss=Math.floor(Math.random()*10)+1;
//         if(internetSpeedss>4){
//             resolve("sucess data was saved");
//         }
//         else{
//         reject("failure weak connection");
//         }
//     });

// }
// let request=savetodbms("Ankit");

// request
// .then(()=>{
//     console.log("your request is fullfiled");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("your request is rejected");
//     console.log(request);
// })

/////////Promise chaining////////

// function savetodbms(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeedss=Math.floor(Math.random()*10)+1;
//         if(internetSpeedss>4){
//             resolve("sucess data was saved");
//         }
//         else{
//         reject("failure weak connection");
//         }
//     });

// }
// savetodbms("Ankit")
// .then(()=>{
//     console.log("your data1 request is fullfiled");
//     savetodbms("Ravi")
//     .then(()=>{
//         console.log("your data2 request was fullfilled");
//     })
// }
// )
// .catch(()=>{
//     console.log("your request is rejected");
// })
///////////  improved version of  promise.......
// function savetodbms(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeedss=Math.floor(Math.random()*10)+1;
//         if(internetSpeedss>4){
//             resolve("sucess data was saved");
//         }
//         else{
//         reject("failure weak connection");
//         }
//     });

// }
// savetodbms("Ankit")
// .then(()=>{
//     console.log("your data1 request is fullfiled");
//     return savetodbms("Ravi")

// })
// .then(()=>{
//     console.log("your data2 request was fullfilled");}
// )
// .catch(()=>{
//     console.log("your request is rejected");
// })
//////Result and Errors in promises//////
function savetodbms(data){
    return new Promise((resolve,reject)=>{
        let internetSpeedss=Math.floor(Math.random()*10)+1;
        if(internetSpeedss>4){
            resolve("sucess data was saved");
        }
        else{
        reject("failure weak connection");
        }
    });

}
savetodbms("Ankit")
.then((result)=>{
    console.log("your data1 request is fullfiled");
    console.log("Result of promises",result);
    return savetodbms("Ravi")

})
.then((result)=>{
    console.log("your data2 request was fullfilled");
    console.log("Result of promises",result);
}
)
.catch((error)=>{
    console.log("your request is rejected");
    console.log("error of promises",error);
})
