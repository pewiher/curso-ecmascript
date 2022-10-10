const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'
console.log(mensaje.replace("JavaScript", "Python"))


console.log(mensaje.replaceAll("JavaScript", "Python"))
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

console.log(mensaje.replaceAll(/a/g, "*"))