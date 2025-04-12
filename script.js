const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value

    const imc = (peso / (altura * altura)).toFixed(2)

    const valor = document.getElementById('valor')
    let descricao = ''

    valor.classList.add('atencao')

    document.getElementById('infos').classList.remove('esconder')

    if (altura > 3) {
        window.alert("Atenção! Parece que você digitou a altura em centímetros. Por favor, insira a altura em metros (ex: 1.70).");
    return
    }
    if (imc < 18.5){
        descricao = `Cuidado! Você está abaixo do peso!`
    }else if (imc >= 18.5 && imc < 25){
        descricao = `Você está no seu peso ideal!`
        valor.classList.remove('atencao')
        valor.classList.add('normal')
    }else if (imc >= 25 && imc < 30){
        descricao = `Cuidado! Você está com sobrepeso!`
        valor.classList.remove('atencao')
        valor.classList.add('medio')
    }else if (imc >= 30 && imc < 35){
        descricao = `Cuidado! Você está com obesidade moderada!`
    }else if (imc >= 35 && imc < 40){
        descricao = `Cuidado! Você está com obesidade severa!`
    }else {
        descricao = `Cuidado! Você está com obesidade morbida!`
    }

    valor.textContent = imc
    document.getElementById('descricao').textContent = descricao
})