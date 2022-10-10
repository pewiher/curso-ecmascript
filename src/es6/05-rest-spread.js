let fruits = ['apple', 'banana']
let [a, b] = fruits
console.log(a, b, fruits[1])

let user = { username: 'Peter', age: 25 }
let { username, age } = user
console.log(username, age)

//spread operator
let person = { name: 'Peter', age: 25 }
let country = 'EC'
let data = { ...person, country }
console.log(data)

//rest

function sum(num, ...values) {
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}


sum(1, 1, 2, 3)