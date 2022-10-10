const fnAsync = () => new Promise((resolve, reject) => {
    (true)
        ? setTimeout(() => resolve("async"), 2000)
        : reject(new Error("Error"))
})

const anotherfN = async () => {
    const somethings = await fnAsync();
    console.log(somethings)
    console.log('hello')
}

console.log('BEFORE')
anotherfN()
console.log('AFTER')

