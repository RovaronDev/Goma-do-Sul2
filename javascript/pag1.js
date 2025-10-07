//constantes dos botões
const btncultura = document.getElementById('cultura')
const btnsociedade = document.getElementById('sociedade')
const btncapital = document.getElementById('capital')
const btneconomia = document.getElementById('economia')
const seta = document.getElementById('seta')
const icone = document.getElementById('icone')
let setaa = false
let modulo1 = 1
mudar()
btnm1()

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
function btnm1(){
    
    modulo1=1
    mudar()
    document.getElementById("btn1").classList.add("at");
    document.getElementById("btn2").classList.remove("at");
    document.getElementById("btn3").classList.remove("at");
    document.getElementById("btn4").classList.remove("at");
}
function btnm2(){
    modulo1=2
    mudar()
    document.getElementById("btn1").classList.remove("at");
    document.getElementById("btn2").classList.add("at");
    document.getElementById("btn3").classList.remove("at");
    document.getElementById("btn4").classList.remove("at");
}
function btnm3(){
    modulo1=3
    mudar()
    document.getElementById("btn1").classList.remove("at");
    document.getElementById("btn2").classList.remove("at");
    document.getElementById("btn3").classList.add("at");
    document.getElementById("btn4").classList.remove("at");
}
function btnm4(){
    modulo1=4
    mudar()
    document.getElementById("btn1").classList.remove("at");
    document.getElementById("btn2").classList.remove("at");
    document.getElementById("btn3").classList.remove("at");
    document.getElementById("btn4").classList.add("at");
}
function mudar(){
    if(modulo1==1){
        document.getElementById("imagem-cidade").src = "../imagens/curitiba.jpeg"
        document.getElementById("conteudo-principal-descricao").innerHTML = `<h2>Curitiba</h2>
        <p>Curitiba, a capital do estado, surgiu como um pequeno povoado no século XVII, estabelecido por bandeirantes paulistas que percorriam a região em busca de ouro e para atividades de tropeirismo. Com o tempo, tornou-se um centro urbano importante, especialmente a partir do século XIX, quando recebeu uma significativa imigração europeia, principalmente de alemães, italianos, poloneses e ucranianos. Hoje, Curitiba é conhecida por seu planejamento urbano inovador e sustentável, e sua economia é diversificada, baseada nos setores industrial, de comércio, serviços e tecnologia.</p>`;
    }
    else if(modulo1==2){
        document.getElementById("imagem-cidade").src = "../imagens/londrina.webp"
        document.getElementById("conteudo-principal-descricao").innerHTML = `<h2>Londrina</h2>
        <p>Londrina, localizada no norte do estado, teve sua origem ligada à colonização inglesa, por meio da Companhia de Terras Norte do Paraná, na década de 1930. O nome da cidade é uma homenagem a Londres, capital da Inglaterra. Seu crescimento foi impulsionado pela produção de café, que atraiu migrantes de várias regiões do Brasil, sobretudo do interior de São Paulo e Minas Gerais, além de imigrantes japoneses, italianos e alemães. Atualmente, Londrina possui uma economia forte nos setores agrícola, industrial e de serviços, sendo um dos polos universitários e comerciais do Paraná.</p>`;
    }
else if(modulo1==3){
        document.getElementById("imagem-cidade").src = "../imagens/maringa.jpg"
        document.getElementById("conteudo-principal-descricao").innerHTML = `<h2>Maringá</h2>
        <p>Maringá, próxima a Londrina, foi planejada pela mesma companhia colonizadora e fundada oficialmente em 1947. Sua história está diretamente ligada à expansão da agricultura no norte do Paraná, especialmente o cultivo de café. Assim como Londrina, atraiu muitos migrantes brasileiros e imigrantes europeus e japoneses. Hoje, Maringá é conhecida por sua qualidade de vida, áreas verdes e organização urbana. A economia é baseada no agronegócio, indústria alimentícia, construção civil, comércio e tecnologia da informação.</p>`;
    }
else if(modulo1==4){
        document.getElementById("imagem-cidade").src = "../imagens/ponta-grossa.jpeg"
        document.getElementById("conteudo-principal-descricao").innerHTML = `<h2>Ponta Grossa</h2>
        <p>Ponta Grossa, localizada nos Campos Gerais, tem origem mais antiga, remontando ao século XVIII como um importante ponto de passagem de tropeiros que faziam comércio entre o Sul e o Sudeste do Brasil. Seu desenvolvimento se intensificou com a chegada da ferrovia no final do século XIX. A população da cidade é formada por descendentes de indígenas, portugueses, alemães, poloneses e outros europeus. Atualmente, Ponta Grossa se destaca como polo industrial e logístico, com forte presença nos setores de agronegócio, alimentos, papel e celulose, e transporte.</p>`;
    } }