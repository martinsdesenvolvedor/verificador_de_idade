var anoNascimento = document.querySelector('#ano_nascimento')
var radsex = document.getElementsByName('radsex')
var botao = document.querySelector('.verificador')
var paragrafo = document.querySelector('.paragrafo')
var imagem = document.querySelector('.imagem')
imagem.style.backgroundSize = '100% 100%'
imagem.style.backgroundRepeat = 'no-repeat'
imagem.style.backgroundPosition = 'center'
var imagemHomem1 = 'https://tse3.mm.bing.net/th?id=OIP.vXJ0DI8CxZ9eRCPeEgGBuQHaEK&pid=Api&P=0&h=180'
var imagemHomem2 = 'https://th.bing.com/th?id=OIP.JPLCr9kjqF5VvHJ4VWHbewHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
var imagemHomem3 = 'https://www.ninhosdobrasil.com.br/sites/default/files/2021-07/7-anos.png'
var imagemHomem4 = 'https://th.bing.com/th/id/OIP.UCB2glAEzHGbHWtULBnVUAHaJL?w=137&h=180&c=7&r=0&o=5&pid=1.7'
var imagemHomem5 = 'https://i.pinimg.com/736x/cc/89/10/cc8910dad3723f855ed541c58b2af4d5.jpg'
var imagemHomem6 = 'https://th.bing.com/th/id/R.5aef32e41229211a1a89c5ceacdd304d?rik=4ne1Ql8DpiZKEQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-AU8nOQ7ZZfs%2fTV1jYLhnCtI%2fAAAAAAAAAxA%2fYKqD75ecyOg%2fs640%2f95804811.jpg&ehk=ITTv3C8wghc%2fW%2f32P%2fYdeCbHNmwmZlmTmtgyiHJ02a4%3d&risl=&pid=ImgRaw&r=0'
var imagemHomem7 = 'https://blog.beard.com.br/wp-content/uploads/2017/12/662x348xPresentes-para-homens-de-40-anos-e1512485971273.jpg.pagespeed.ic.QuRkw6hbSE.jpg'
var imagemHomem8 = 'https://th.bing.com/th/id/R.31dd28a204ce04de635eb44d7164574e?rik=EZ1JaCbaXpAy3w&pid=ImgRaw&r=0'
var imagemHomem9 = 'https://dress-fr.techinfus.com/images/article/orig/2019/03/chto-podarit-muzhchine-na-60-let-47.jpg'
var imagemHomem10 = 'https://th.bing.com/th/id/R.3b8df01148f538c06d60145d89dfd989?rik=vtGMOuLkqIGA8A&riu=http%3a%2f%2fcontent.9news.com%2fphoto%2f2017%2f06%2f06%2fStill0606_00010_1496806250290_9679352_ver1.0.jpg&ehk=rZXVE%2biR8bVjHOF3uj2BOa4yaC%2fp8dHSLULbEWyDExE%3d&risl=&pid=ImgRaw&r=0' 
var imagemMulher1 = 'https://th.bing.com/th/id/OIP.H41qs3-KXwZN7090CPZsaAHaDt?pid=ImgDet&rs=1'
var imagemMulher2 = 'https://th.bing.com/th/id/OIP.T5BDPIF7S-grwTeO4Bli-AHaFq?w=236&h=180&c=7&r=0&o=5&pid=1.7'
var imagemMulher3 = 'https://th.bing.com/th/id/OIP.jsVZ9vcgKn3BYY8meIolKgHaFN?w=246&h=180&c=7&r=0&o=5&pid=1.7'
var imagemMulher4 = 'https://th.bing.com/th/id/OIP.ncO0xDfWjoGSXSkhPEAsSgHaJQ?w=172&h=215&c=7&r=0&o=5&pid=1.7'
var imagemMulher5 = 'https://th.bing.com/th/id/OIP.ElLSuaiwVnDTnWaIzNCirQHaE7?w=285&h=189&c=7&r=0&o=5&pid=1.7'
var imagemMulher6 = 'https://th.bing.com/th/id/OIP.2nQjKJ2s8Lw4wN4NaiNFmwAAAA?w=123&h=180&c=7&r=0&o=5&pid=1.7'
var imagemMulher7 = 'https://th.bing.com/th/id/OIP.PNvzH9rMrUlvaVgz3rzOfwHaE7?w=226&h=180&c=7&r=0&o=5&pid=1.7'
var imagemMulher8 = 'https://th.bing.com/th/id/OIP.ikTrvrbTk4Tmg8Uo3G059AHaHL?pid=ImgDet&rs=1'
var imagemMulher9 = 'https://thumbs.dreamstime.com/b/seniorportrait-mulher-atrativa-de-70-anos-20898932.jpg'
var imagemMulher10 = 'https://mf.b37mrtl.ru/files/2016.10/article/58148873c361884f188b4587.jpg'

botao.addEventListener('click', function verificadorIdade() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoDeNascimento = Number(anoNascimento.value)
    var idade = anoAtual - anoDeNascimento
    var genero = ''
    
    if (anoDeNascimento == 0 || anoDeNascimento > anoAtual) {
        alert('Verfique os dados e tente novamente')

    } else {
        if (radsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 2 && genero == 'homem') {
                imagem.style.backgroundImage = `url(${imagemHomem1})`
                } else if (idade > 2 && idade <= 7 && genero == 'homem') {
                    imagem.style.backgroundImage = `url(${imagemHomem2})`
                } else if (idade > 7 && idade <= 12 && genero == 'homem') {
                    imagem.style.backgroundImage = `url(${imagemHomem3})`
                } else if (idade > 12 && idade <= 17 && genero == 'homem') {
                    imagem.style.backgroundImage = `url(${imagemHomem4})`    
                } else if (idade > 17 && idade <= 20 && genero == 'homem') {
                    imagem.style.backgroundImage = `url(${imagemHomem5})`
                } else if (idade > 20 && idade <= 30 && genero == 'homem') {
                    imagem.style.backgroundImage = `url(${imagemHomem6})`
                } else if (idade > 30 && idade <= 40 && genero == 'homem') {
                    imagem.style.backgroundImage = `url(${imagemHomem7})`
                } else if (idade > 40 && idade <= 50 && genero == 'homem') {
                    imagem.style.backgroundImage = `url(${imagemHomem8})`
                } else if (idade > 50 && idade <= 70 && genero == 'homem') {
                    imagem.style.backgroundImage = `url(${imagemHomem9})`
                } else if (idade > 70 && genero == 'homem') {
                    imagem.style.backgroundImage = `url(${imagemHomem10})`
                } 

            } else if (radsex[1].checked) {
                genero = 'mulher'
                if (idade >= 0 && idade <= 2 && genero == 'mulher') {
                    imagem.style.backgroundImage = `url(${imagemMulher1})`
                    } else if (idade > 2 && idade <= 7 && genero == 'mulher') {
                        imagem.style.backgroundImage = `url(${imagemMulher2})`
                    } else if (idade > 7 && idade <= 12 && genero == 'mulher') {
                        imagem.style.backgroundImage = `url(${imagemMulher3})`
                    } else if (idade > 12 && idade <= 17 && genero == 'mulher') {
                        imagem.style.backgroundImage = `url(${imagemMulher4})`    
                    } else if (idade > 17 && idade <= 20 && genero == 'mulher') {
                        imagem.style.backgroundImage = `url(${imagemMulher5})`
                    } else if (idade > 20 && idade <= 30 && genero == 'mulher') {
                        imagem.style.backgroundImage = `url(${imagemMulher6})`
                    } else if (idade > 30 && idade <= 40 && genero == 'mulher') {
                        imagem.style.backgroundImage = `url(${imagemMulher7})`
                    } else if (idade > 40 && idade <= 50 && genero == 'mulher') {
                        imagem.style.backgroundImage = `url(${imagemMulher8})`
                    } else if (idade > 50 && idade <= 70 && genero == 'mulher') {
                        imagem.style.backgroundImage = `url(${imagemMulher9})`
                    } else if (idade > 70 && genero == 'mulher') {
                        imagem.style.backgroundImage = `url(${imagemMulher10})`
                    } 
            }

        paragrafo.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        }   
})

    