//constantes dos botões da top-bar
const btncultura = document.getElementById('cultura')
const btnsociedade = document.getElementById('sociedade')
const btncapital = document.getElementById('capital')
const btneconomia = document.getElementById('economia')

//variáveis de para onde será escrolado dependendo do botão
let culturposi = 0;
let sociedadeposi = 100;
let capitalposi = 200;
let economiaposi = 300;

//eventlistener botões top-bar
btncultura.addEventListener('click',()=>{
    window.scrollTo({ top: culturposi, behavior: 'smooth' })
})
btnsociedade.addEventListener('click',()=>{
    window.scrollTo({ top: 500, behavior: 'smooth' })
})
btncapital.addEventListener('click',()=>{
    window.scrollTo({ top: capitalposi, behavior: 'smooth' })
})
btneconomia.addEventListener('click',()=>{
    window.scrollTo({ top: economiaposi, behavior: 'smooth' })
})