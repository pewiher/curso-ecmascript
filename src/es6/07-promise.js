const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('JHEHE')
        }
    });
}

anotherFunction()
    .then((response) => { console.log("tofo ok", response) })
    .catch((e) => { console.log("error") })