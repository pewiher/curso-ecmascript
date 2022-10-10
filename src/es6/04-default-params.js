function newUser(name, age, country) {
    var name = name || "oscar"
    var age = age || 20
    var country = country || "Ecuador"
    console.log(name, age, country)
}

newUser()
newUser("Peter", 31)

function newAdmin(name = "Oscar", age = 21, country = "EC") {
    console.log(name, age, country)
}

newAdmin()
newAdmin("Peter Herrera", 31)