let myPromise = new Promise((resolve, reject) => {
    const result = Math.floor(math.random()*10) //long-running task
    if(result !== 0) {
        resolve(result)
    } else reject(new Error('Errpr in random'))
})

// myPromise.then(response => {
//     console.log(response)

// }, error => console.log(error.message, error.stack))

myPromise
.then(response => response += 20)
.then(res => console.log(res))
.catch(error => console.log(error.message, error.stack))