let numQuadrados = 6;
let coresQuadrados = [];
let corSelecionada;

let quadrados = document.querySelectorAll(".quadrado");
let corSpan = document.querySelector("#rgb");
let visorEl = document.querySelector('#visor');
let h1El = document.querySelector("h1");
let mudarBtn = document.getElementById("reset");
let modeBtn = document.querySelectorAll(".mode");


init();


function init(){
    for (let i = 0; i < quadrados.length; i++) {
        quadrados[i].style.backgroundColor = coresQuadrados[i];
    
        quadrados[i].addEventListener("click", function(){
            let corClicada = this.style.backgroundColor;
    
            if(corClicada === corSelecionada){
               visorEl.textContent = "Correto!";
               mudarCorTodosQuadrados(corSelecionada);
               h1El.style.backgroundColor = corSelecionada;
               mudarBtn.textContent = "Play again?";
            }
            else {
                quadrados[i].style.backgroundColor = "#232323";
                visorEl.textContent = "Errado";
            }
        });
    }

    for (let i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function() {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Hard" ? numQuadrados = 6: numQuadrados = 3;
            coresQuadrados = sortearCores(numQuadrados);
    
            reset();
        });
        
        
    }

    reset();

}
function reset(){
    coresQuadrados = sortearCores(numQuadrados);
    corSelecionada = selecionarCor();
    corSpan.textContent = corSelecionada;
    visorEl.textContent = "";
    h1El.style.backgroundColor = "steelblue";
    mudarBtn.textContent = "New Colors"; 
    for (let i = 0; i < quadrados.length; i++) {
        if(coresQuadrados[i]){
            quadrados[i].style.display = "block";
            quadrados[i].style.backgroundColor = coresQuadrados[i];

        }
        else {
            quadrados[i].style.display = "none";
        }
    }  

}


mudarBtn.addEventListener("click", function(){
    reset();
});
   

function mudarCorTodosQuadrados(cor){

    for (let i = 0; i < quadrados.length; i++) {
        quadrados[i].style.backgroundColor = cor;
        
    }
}

function selecionarCor(){
    let random = Math.floor(Math.random() * coresQuadrados.length);
    return coresQuadrados[random];
}

function sortearCores(num){

    let array = [];
    for (let i = 0; i <  num; i++) {
        array.push(randomColor());
        
    }
    return array;
}

function randomColor(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    return "rgb(" + x + ", " + y + ", " + z + ")";
}

