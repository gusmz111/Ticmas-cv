const urlApi = ('https://randomuser.me/api/');

fetch  (urlApi)
.then (Response => Response.json())
.then (data => {
     console.log(data.results[0])
     
document.getElementById("logo").innerHTML = `<a>${data.results[0].name.first}</a>`

document.getElementById("imagen").setAttribute('src', `${data.results[0].picture.medium}`)

document.getElementById("usuario").innerHTML = `<h1>${data.results[0].name.title}
${" "}${data.results[0].name.first}${" "}
${data.results[0].name.last}</h1>`

document.getElementById("cumple").innerHTML = `<li>${data.results[0].dob.date}`
document.getElementById("tel").innerHTML = `<li>${data.results[0].cell}`
document.getElementById("email").innerHTML = `<li>${data.results[0].email}`
})    



    











/*====== MENU ACCION / ABRIR ========*/ 


const navMenu = document.getElementById(`nav-menu`),
      navNavegador = document.getElementById(`nav-navegador`),
      navCerrar = document.getElementById(`nav-cerrar`)


if(navNavegador) {
     navNavegador.addEventListener(`click` , () =>{
     navMenu.classList.add( `menu-accion` )
})
} 

/*======= MENU ACCION / CERRAR ========*/ 

if(navCerrar){
     navCerrar.addEventListener(`click`, () =>{
          navMenu.classList.remove(`menu-accion`)
     })

}

/*===== REMOVER MENU ======*/

const navLink = document.querySelectorAll(` .nav__link`) 

function linkAction(){
     const navMenu = document.getElementById(`nav-menu`)

     navMenu.classList.remove(`menu-accion`)
}

navLink.forEach(n => n.addEventListener(`click`, linkAction))   