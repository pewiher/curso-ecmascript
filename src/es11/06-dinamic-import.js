const boton = document.getElementById("btn")

boton.addEventListener("click", async function () {
    const modulo = await import('./module.js')
    modulo.other()
})