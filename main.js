function tocaSom(seletorAudio){

    const elemento = document.querySelector(seletorAudio);// vai ter acesso ao botão que está com essa classe. 

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play(); 
    }else{
        alert('Elemento não encontrado ou seletor invalido!'); 

    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 

let contador  = 0; 

//------------------- for -----------------------

for (let i =0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i]; 
    const instrumento = tecla.classList[1]; 

    const idAudio = `#som_${instrumento}`; 

    tecla.onclick = function(){
        tocaSom(idAudio); 

    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Enter' ||evento.code === 'Space'){
            tecla.classList.add('ativa'); 
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa'); 
    }
}


