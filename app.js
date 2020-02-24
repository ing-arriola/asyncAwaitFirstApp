const getUsers= async() => {
    //Simulate an API consuming
    const users=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Data has been obtained')
        }, 3000);
    })
    let error=false
    //We could call the promise here and set then and catch but instead of it
    //we only call the promise and wait until this is acomplished
    if (!error) {
        let answer=await users
        //if you don't write the await.. then the: "hello helloooo!" will be printed
        //witout wait for the promise... but i you write the await then the "hello helloooo!"
        //Will be printed until the promise has been completed :)
        console.log('hello, helloooo!')    
        return answer
    } else {
        //Also we need to define what the function will send if there is an error
        return reject="There is an error, please try later"
    }
    
}
//Call function and show the results of success or fail
getUsers()
    .then(message=>document.getElementById("app").innerHTML+=`<br> i'm the first promise but i need 3 seconds to be acomplished, and my result is: ${message}`)
    .catch(error=>document.getElementById("app").innerHTML=error)

//Another example
const getRemoteData = async ()=>{
    //Get remote data
    //Add the await to resolve the promise
    let connnection=await fetch('https://jsonplaceholder.typicode.com/users')
    //The connection must have another await in order to resolve its promise
    let ans= await connnection.json()
    return ans
        
    
}

getRemoteData()
    .then(ans=>{
        ans.forEach(element => {
            let user=document.createElement('li')
            user.innerHTML=element.username
            document.getElementById('app').appendChild(user)
        })
    }    
    )
    .catch( error => document.getElementById('app').innerHTML=error)