//Promises --> to complete or reject the asynchronous operations
//it has 3 states -> fulfilled, reject, pendin g
let promise = new Promise((resolve, reject)=>{
    let error = true;
    if(!error){
        resolve("great!!!")
    }else{
        reject("nooooo")
    }

}).then((data)=>{
    console.log(data)
}).catch((error)=>{
console.log(error)
})