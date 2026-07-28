// console.log("hy")

// function sum(a,b){
//     return a+b;
// }

// function root(a,b){
//     return Math.sqrt(a)+Math.sqrt(b);
// }

// console.log(root(9,16))

// (() =>{
//     console.log("heyyy....using IIFE")
// })

let a = 56;
// console.log(typeof(a));


if(a>40){
    let a = 55;
    console.log(a);
}
console.log(a);

function login(error,msg){
    if(error){
        console.log(error);
    }
    else{
        console.log(msg);
    }
}

function loginhandler(username,password,clbk){
    if(username=="shivam" && password=="12345"){
        clbk(null,"login success")
    }
    else{
        clbk("username or password is incorrect",null)
    }
}

loginhandler("shivm","12345",login);

