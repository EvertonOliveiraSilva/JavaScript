function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') // maneira antiga
    var res = document.getElementById('res') // maneira moderna
    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex =  document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Bebê
                img.setAttribute('src', 'bebe-h.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-h.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-h.png')
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Bebê
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        res.style.textAlign = 'center' // normalmente se faz no CSS
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}