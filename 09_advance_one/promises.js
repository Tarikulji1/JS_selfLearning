const promisesOne = new Promise(function(resolve, reject){
    // Async Task
    // DB calls
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    }, 1000)
});

promisesOne.then(function(){
    console.log("Promises resolved");
    
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2 is complete");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolved");
});


const promisesThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "tarikul", email: "tarikul@gmail.com"})
    }, 1000)
});

promisesThree.then(function(user){
    console.log(user.email);
});

const promisesFour = new Promise(function(resolve, reject){
    setTimeout(function (){
        let error = true
        if(!error){
            resolve({username: "islam", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
});

promisesFour.then((user) => {
    console.log(user);
    return user.username
}).then((myuser) => {
    console.log(myuser);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is resolved or rejected") )

