console.log("hellow worlds");
let arr1=[1,2,3,4,5,6,7];
function print(el){
    console.log(el);
}
arr1.forEach(print);        // here we are also input the defination of function 

let arr=["hi","hello","jai","krishna"];
arr.forEach((el)=>{
    console.log(el);});
    //Now We are generally use the array in object literalls
    let arr2=[
        {name:"Ankit",
         Roll:3040411},
         {name:"Ajay",
        roll:3040412},
         {name:"Arun",
        roll:2389183}
    ];
    console.log(arr2);
    console.log(arr2[0]);
    arr2.forEach((jai)=>{
        console.log(jai.name);
    });
    //Now we use of Map function
    let arr3=[1,2,3,4,5,6,5,4,3,2,1];
    let newarr=arr3.map((student)=>{
        return student*4;
    });
    console.log(arr3);
    console.log(newarr);
    //Now we are use the filter array method
    let arr4=[2,4,5,1,13,41,6,26,46,26,13,15,17];
    let newarr2=arr4.filter((f1)=>(f1%2==0));
    console.log(arr4);
    console.log(newarr2);
  //  now we are using the every function
  let arr5=[2,4,6,8,5];
  arr5.every((r1)=>(r1%2==0));
  //now we are using the reduce function
  let arr6=[6,4,8,9,14];
  let newarr3=arr5.reduce((ac,el)=>(ac+el));
  console.log(`after the reduce of arr5 into  ==  ${newarr3}`);
  //finding maximum in array using reduce key
   let arrr1=[6,7,4,5,9];
   let newarr4=arrr1.reduce((max,el1)=>{
    if(el1>max){
        console.log("maximum value is");
        return el1;
    }
    else{
        return max;
    }

   });
   console.log(newarr4);
   //now we are solving a practice question
   // check if all number in our array are multiple of 10 or not (every function is used)
    let arrr2=[10,20,30,40,50];
    arrr2.every((el3)=>(el3%10==0)); //output is true
    // using spread
    //the basic context of spread is (...arr) && (..."any string")

    // conversion of an array into an object
    let as=[1,2,3,4,5,6,7];
    let obs={...as};
    console.log(obs);
    //using rest function into an like argument
    function f1(...args){
        console.log(args);
       return args.reduce((ec,ec1)=>ec+ec1
        );
    } 
    let l1=f1(1,2,3,4,5,6);
    console.log(l1);
                  //Destructureing concept
    let arrr3=["ankit","Ashish","Naresh","Rijvaan","maresh"];
    // let [chh2,chh3]=arrr3;
    // console.log(chh2);
    // console.log(chh3);
    let [chh1,chh4,...chh5]=arrr3;
    console.log(chh1);
    console.log(chh4);
    console.log(chh5);
    //Destructuring the object
    const student={
        name:"Ankit",
        Age:19,
        college:"CCSU",
        subject:"information technology",
        username:"Ankit3344",
        Pass:12345,
    }
    console.log(student);
    const{username,college}=student;
    console.log(username);
    console.log(college);
    console.log(student.username);
    const{Age:year,Pass:Secure}=student;
    console.log(year);
    console.log(Secure);


    




    



