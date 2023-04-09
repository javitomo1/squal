

/* CONSTRUCCIÓN DEL HTML en JS*/




/* BODY y MAIN */

//Seleccióno la etiqueta body para incrustar todo por js
const cuerpo = document.getElementById('body')
//Creo una etiqueta main y le agrego la class 'contenedor'
const contenedor = document.createElement('main')
contenedor.classList.add('contenedor')
//main CSS - agrego estilos css al main
const sCont = contenedor.style //diminutivo, s de Style + Cont
sCont.maxWidth = '1200px'
sCont.margin = '20px auto'
sCont.backgroundColor = '#e3e3e3'
sCont.borderRadius = "10px"
//Añado main al body
cuerpo.appendChild(contenedor) //se puede usar append()




/* HEADER */

//Etiqueta header que contiene h1
//Creo header
const cabecera = document.createElement('header')
//Header CSS - agrego estilos css al header
cabecera.style.borderBottom = '1px solid rgb(158, 162, 23)'
//Añado header al main
contenedor.appendChild(cabecera)

//Creo h1
const titulo = document.createElement('h1')
//h1 CSS - agrego estilos css al h1
const sH1 = titulo.style  //diminutivo
sH1.textAlign = 'center'
sH1.fontSize = '3em'
sH1.color = 'rgb(158, 162, 23)'
sH1.padding = "20px 0"
titulo.innerText = 'Rick and Morty'
//Añado h1 al header
cabecera.append(titulo)




/* CONTENEDOR DE BOTONES Y DE PÁGINA ACTUAL */

// Creo contenedor extraDivContainer que será el padre de otros div, actualmente solo es de btnDiv
const extraDivContainer = document.createElement('div')

// Div "nº1" en extraDivContainer
//Creo div para botones de pasar página y una etiqueta p que muestra la página actual
const btnDiv1 = document.createElement('div')
//btnDiv CSS, no uso diminutivo ._.
btnDiv1.style.margin = '10px'
btnDiv1.style.display = 'flex'
btnDiv1.style.justifyContent = 'center'
btnDiv1.style.gap = '10px'
btnDiv1.style.position = 'sticky'
btnDiv1.style.top = 0
btnDiv1.style.backgroundColor = "#e3e3e3"
btnDiv1.style.padding = "5px"

//Declaro variable página, cuando carga la página por defecto es uno, varía al pulsar los botones de pasar página
let pagina = 1

//Creo boton página atras, el css se lo doy por documento css
const paginaAtras = document.createElement('button')
paginaAtras.innerText = "<<"
paginaAtras.classList.add('navBtn')
//Agrego evento de clic, que le resta numero a la variable página, si página es menor que 1, se establece en la última página
paginaAtras.addEventListener('click', function() {
  pagina --
  if (pagina < 1) {
    pagina = 42
  }
  paginaActual.innerHTML = `Página ${pagina}/42`  //Mostramos variable a tiempo real en la página actual
  mostrarPagina(pagina)
  display.innerHTML = ""  //Limpia el main para que se puedan mostrar 20 personajes, de lo contrario, se sumarian 20 personajes a la página por cada clic
})

//Creo botón paginaSiguiente
const paginaSiguiente = document.createElement('button')
paginaSiguiente.innerText = ">>"
paginaSiguiente.classList.add('navBtn')

paginaSiguiente.addEventListener('click', function() {
  pagina ++
  if (pagina > 42) {
    pagina = 1
  }
  paginaActual.innerHTML = `Página ${pagina}/42`
  mostrarPagina(pagina)
  display.innerHTML = ""
})

//Creo etiqueta 'p' para mostrar la página actual
const paginaActual = document.createElement('p')
paginaActual.innerHTML = `Página ${pagina}/42`

//Añado botones y p al contenedor y este a su vez a su respectivo contenedor extra, finalmente agrego extraContainer al main.
btnDiv1.append(paginaAtras, paginaActual, paginaSiguiente)
extraDivContainer.append(btnDiv1)
contenedor.append(extraDivContainer)




/* SECTION */

//La etiqueta section será nuestro display que mostrara los personajes de cada página
//Creo etiqueta section
const display = document.createElement('section')
display.classList.add('display')
//Añadimos section al main
contenedor.append(display)



/* CPU */  // (broma para squal) // :)

function mostrarPagina(id) {
  fetch(`https://rickandmortyapi.com/api/character?page=${id}`)
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    mostrarPersonajes(data)
  })
}
function mostrarPersonajes(personajes) {
  personajes.results.forEach(personaje => {
    //console.log(personaje)
    const tarjeta = document.createElement('article')
    const nombre = document.createElement('h3')
    nombre.textContent = personaje.name
    const imgContainer = document.createElement('div')
    const imagen = document.createElement('img')
    imagen.src = personaje.image
    const status = document.createElement('span')
    status.textContent = `Estado: ${personaje.status}`
    const species = document.createElement('span')
    species.textContent =  `Especie: ${personaje.species}`
    const type = document.createElement('span')
    type.textContent = `Tipo: ${personaje.type}`
    const gender = document.createElement('span')
    gender.textContent = `Genero: ${personaje.gender}`
    const id = document.createElement('span')
    id.textContent = `ID: ${personaje.id}`
    const created = document.createElement('span')
    created.textContent = `Creado: ${personaje.created}`
    const location = document.createElement('span')
    location.textContent = `Localización: ${personaje.location.name}`
    const origin = document.createElement('span')
    origin.textContent = `Origen: ${personaje.origin.name}`

    imgContainer.append(imagen)
    tarjeta.append(nombre, imgContainer, status, species, type, gender, id, created, location, origin)
    display.append(tarjeta)
  })
}
mostrarPagina(pagina) // Sin esta línea no arranca XD, esta es la llamada de la función.



/* 

Al principio me parecia un coñazo hacer el html y css por js, pero al final me ha acabado gustando, supongo que cada metodo tiene su utilidad.

*/


// 7 min para añadir esto ultimo

// START: 18:33 8-abril-2023 --- END: 4:50 9-abril-2023
const pieDePagina = document.createElement('footer')
const tiempoProyecto = document.createElement('p')
tiempoProyecto.innerHTML = "START: 18:33 8-abril-2023 --- END: 4:57 9-abril-2023"
pieDePagina.append(tiempoProyecto)
contenedor.append(pieDePagina)
