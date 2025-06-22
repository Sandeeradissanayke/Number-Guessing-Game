// /*console.log("Hello");

// let x=10;
// let y=20;
// let z=x+y;


// console.log(typeof z);*/

// let student = {
//     name:"Saman",
//     age:20,
//     address:"Panadura", 
// };


// let studentlist=[
//     {
//     name:"Saman",
//     age:20,
//     address:"wattala",
//     },
//     {
//     name:"kasun",
//     age:20,
//     address:"Panadura",
//     },
//     {
//     name:"nimal",
//     age:20,
//     address:"colombo",
//     },
//     {
//     name:"Samantha",
//     age:20,
//     address:"kaluthara",
//     }
// ]

// console.log(studentlist);
// console.log(studentlist.length);
// console.log(typeof studentlist);

let randomnum=(Math.floor(Math.random()*5));


function clickAction(){
    console.log("Click");
    
    let lbl1 = document.getElementById("label1")
    let text=document.getElementById("inputText").value;
    //debugger;

    //Math.floor(Math.random()*5==text.value;

    if(randomnum==text){
        document.getElementById("imgBox").innerHTML= '<img width="300" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2k1dXR1dXllZXpkc2o4dnllc2s5emRyNmtyeDdvNjAwZmQ0MXYyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/etKSrsbbKbqwW6vzOg/giphy.gif" alt="">'        
        alert("you won the game!!!")
        //console.log("you won the game!!!");
        lbl1.innerText="you won the game!!"
    }
    else if(randomnum>text){

        alert("your number is low !!!")
        lbl1.innerText="you loss the game!!"
        
    }

    else if(randomnum<text){

        alert("your number is High !!!")
        lbl1.innerText="you loss the game!!"
        
    }
   
    
}
 //console.log(text.value);
    
    console.log(randomnum);
   

