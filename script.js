let numQuadrados = 6;
let coresQuadrados = sortearCores(numQuadrados);

let quadrados = document.querySelectorAll(".quadrado");
let corSelecionada = selecionarCor();
let corSpan = document.querySelector("#rgb");
let visorEl = document.querySelector('#visor');
let h1El = document.querySelector("h1");
let mudarBtn = document.getElementById("reset");
let easyBtn = document.getElementById("easy");
let hardBtn = document.getElementById("hard");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numQuadrados = 3;
    coresQuadrados = sortearCores(numQuadrados);
    corSelecionada = selecionarCor();
    corSpan.textContent = corSelecionada;
    for (let i = 0; i < quadrados.length; i++) {
        if(coresQuadrados[i]){
            quadrados[i].style.backgroundColor = coresQuadrados[i];
        }
        else {
            quadrados[i].style.display = "none";
        }
        
    }




});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");    
    easyBtn.classList.remove("selected");
    numQuadrados = 6;
    coresQuadrados = sortearCores(numQuadrados);
    corSelecionada = selecionarCor();
    corSpan.textContent = corSelecionada;
    for (let i = 0; i < quadrados.length; i++) {
        if(coresQuadrados[i]){
            quadrados[i].style.backgroundColor = coresQuadrados[i];
            quadrados[i].style.display = "block";
        }
        
    }

});

corSpan.textContent = corSelecionada;

for (let i = 0; i < coresQuadrados.length; i++) {
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
            quadrados[i].style.backgroundColor = "black";
            visorEl.textContent = "Errado";
        }
    });
}

mudarBtn.addEventListener("click", function(){
    coresQuadrados = sortearCores(numQuadrados);
    corSelecionada = selecionarCor();
    corSpan.textContent = corSelecionada;
    visorEl.textContent = "";
    h1El.style.backgroundColor = "steelblue";
    mudarBtn.textContent = "New Colors"; 
    for (let i = 0; i < coresQuadrados.length; i++) {
        quadrados[i].style.backgroundColor = coresQuadrados[i];
    }    
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

