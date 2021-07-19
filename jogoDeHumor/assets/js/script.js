const elementoNome = document.querySelector('#nome');
const elementoHumor = document.querySelector('#humor');
const elementoImgRiley = document.querySelector('#imagemDaRiley');
const elementoImgHumor = document.querySelector('#imagemDoHumor');
let elementoBtn = document.querySelector('#alterarHumor')

elementoBtn.addEventListener('click', () => {
    if (elementoBtn.value == 'primeiroHumor') {
        elementoImgHumor.src = './assets/images/tristeza.png'
        elementoImgRiley.src = './assets/images/riley_triste.png'
        elementoNome.innerText = 'Riley tristinha'
        elementoHumor.innerText = 'Oh mds, ta chorando tadinha'
        elementoBtn.value = 'segundoHumor'
    } else if (elementoBtn.value == 'segundoHumor') {
        elementoImgHumor.src = './assets/images/raiva.png'
        elementoImgRiley.src = './assets/images/riley_raiva.png'
        elementoNome.innerText = 'Riley boladona'
        elementoHumor.innerText = 'Maluco, sai de baixo'
        elementoBtn.value = 'terceiroHumor'
    } else {
        elementoImgHumor.src = './assets/images/alegria.png'
        elementoImgRiley.src = './assets/images/riley_feliz.png'
        elementoNome.innerText = 'Riley de boa'
        elementoHumor.innerText = 'Ta toda boba, alá'
        elementoBtn.value = 'primeiroHumor'
    }

})