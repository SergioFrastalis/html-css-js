let input1 = 10

// Callback hell
func1(input1, function(res1) {
    func2(res1, function(res2) {
        func3(res2, function(res3) {
            console.log(res3)
        })
    })
})


function func1(input1, callback1) {
    let result = inpu1 + 20 //long running task
    callback1(result)
}