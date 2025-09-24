//constantes dos botões
const btncultura = document.getElementById('cultura')
const btnsociedade = document.getElementById('sociedade')
const btncapital = document.getElementById('capital')
const btneconomia = document.getElementById('economia')
const seta = document.getElementById('seta')
const icone = document.getElementById('icone')
let setaa = false

//variáveis de para onde será escrolado dependendo do botão
let culturposi = 0;
let sociedadeposi = 100;
let capitalposi = 200;
let economiaposi = 300;
seta.style.top = `5000px`
//eventlistener botões top-bar
btncultura.addEventListener('click',()=>{
    window.scrollTo({ top: culturposi, behavior: 'smooth' })
})
btnsociedade.addEventListener('click',()=>{
    window.scrollTo({ top: sociedadeposi, behavior: 'smooth' })
})
btncapital.addEventListener('click',()=>{
    window.scrollTo({ top: capitalposi, behavior: 'smooth' })
})
btneconomia.addEventListener('click',()=>{
    window.scrollTo({ top: economiaposi, behavior: 'smooth' })
})
seta.addEventListener('click',()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
    seta.style.top = `200vh`;
    setaa = true

})
document.addEventListener('scroll',()=>{
    if(window.scrollY > 400){
        console.log(window.scrollY)
        if(setaa == false) seta.style.top = `86vh`; 
        setaa = true
    }
    else{
        seta.style.top = `200vh`;
    setaa = false
}
})

icone.addEventListener('click',()=>{
    window.location.href = '/html/pag1.html' 
})