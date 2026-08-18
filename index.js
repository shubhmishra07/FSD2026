// // console.log("hy")

// // function sum(a,b){
// //     return a+b;
// // }

// // function root(a,b){
// //     return Math.sqrt(a)+Math.sqrt(b);
// // }

// // console.log(root(9,16))

// // (() =>{
// //     console.log("heyyy....using IIFE")
// // })

// let a = 56;
// // console.log(typeof(a));


// if(a>40){
//     let a = 55;
//     console.log(a);
// }
// console.log(a);

// function login(error,msg){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(msg);
//     }
// }

// function loginhandler(username,password,clbk){
//     if(username=="shivam" && password=="12345"){
//         clbk(null,"login success")
//     }
//     else{
//         clbk("username or password is incorrect",null)
//     }
// }

// loginhandler("shivm","12345",login);

const container = document.getElementById('container');
const button = document.getElementById('btn');
h1.innerText = 'ABES Engineering College';
// console.log(button)
// console.log(container)

 function ping(){
    try{
    // alert('server ping')
    container.innerHTML = '<h2>Welcome to DOM</h2>'
    container.appendChild(h1);
}catch(e){
    loader.innerHTML=<h2 style=color:red>Error in loading data</h2>
}
 }

 button.addEventListener('click',ping);