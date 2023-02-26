function start () {
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', handButtonClick);




}

function calculateImc(weight, height) {
    return weight / (height * height);






}


function handButtonClick() {
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');

    var imcData = document.querySelector('#imc-data');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(weight, height);

    imcData.innerHTML=''
    if (imc < 18.5) {
        imcData.innerHTML="Você está abaixo do peso"
     
        
    } else if (imc < 25) { 
    imcData.innerHTML="Você está com o peso normal"
    

    } else if (imc < 30) { 
        imcData.innerHTML="Você está em excesso de peso"
    

    } else if (imc < 35) {
        imcData.innerHTML="Você está na clase obesidade I"
        
        
    } else if (imc < 40) {
        imcData.innerHTML="Você está na clase obesidade II (severa)"
        
        
    } else if (imc < 60) {
        imcData.innerHTML="Você está na clase obesidade III (morbida)"
    
    } else if (imc < 90) {
        imcData.innerHTML="Tá tudo bem?"

    }else if (imc < 150) {
        imcData.innerHTML="bruh"

    }else if (imc < 350) {
        imcData.innerHTML="Serio? Você tem a mais absoluta certeza que esses são seus dados? Tipo, você jura pela vagabunda da sua mãe que você é esse fenômeno abismal? Tudo bem então."
        
    } else if (imc > 350) {
        imcData.innerHTML= "Chega, sem mais Easter Eggs pra você!"  
    }



    var formattedImc = imc.toFixed(2).replace('.', ',');


    imcResult.textContent = formattedImc;
    
}

start();