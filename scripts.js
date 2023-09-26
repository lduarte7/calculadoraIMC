let formulario = document.querySelector('form')

let boxNome = document.querySelector('#nome')
let boxIdade = document.querySelector('#idade')
let boxPeso = document.querySelector('#peso')
let boxAltura = document.querySelector('#altura')
let boxImc = document.querySelector('#resultadoImc')

let boxAviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

/* Para pegar os dados que estão dentro das caixas, usar a propriedade .VALUE
Mas, antes é necessario determinar um evento como referencia para pegar esses dados */ 

btnEnviar.addEventListener('click', function(e) {
  // pegar valores dos inputs
  let nome = boxNome.value
  let idade = boxIdade.value
  let peso = boxPeso.value
  let altura = boxAltura.value
  let imc = (peso / (altura * altura)).toFixed(1)

  console.log(nome)
  console.log(idade)
  console.log(peso)
  console.log(altura)
  console.log(imc)

  boxImc.value = imc
  let sit = situacaoPeso(imc)
  boxAviso.textContent = sit


  let pessoa = {
    nome: nome,
    idade: idade,
    peso: peso,
    altura: altura,
    imc: imc,
    sit: sit,
  }

  console.log(pessoa)
  dados[1].textContent = pessoa.nome
  dados[2].textContent = pessoa.idade + " Anos"  
  dados[3].textContent = pessoa.peso + "KG"
  dados[4].textContent = pessoa.altura + "m"
  dados[5].textContent = pessoa.imc + " " + 
  pessoa.sit

  // prevenir o comportamento padrão
  e.preventDefault()
})

function situacaoPeso(imc) {
  let situacao = ''
  if (imc < 18.5) {
      situacao = 'Baixo peso'	
  } else if (imc >= 18.5 && imc <= 24.9) {
      situacao = 'Peso normal'
  } else if (imc >= 25 && imc <= 29.9) {
      situacao = 'Sobrepeso'
  } else if (imc >= 30 && imc <= 34.9) {
      situacao = 'Obesidade I'
  } else if (imc >= 35 && imc <= 39.9) {
      situacao = 'Obesidade II'
  } else if (imc >= 40) {
      situacao = 'Obesidade III'
  } else {
      situacao = 'Informe seu peso corretamente'
  }
  return situacao
}



btnLimpar.addEventListener('click', function() {
  let nome = document.querySelector('.pessoa#nome')
  let idade = document.querySelector('.pessoa#idade')
  let peso = document.querySelector('.pessoa#peso')
  let altura = document.querySelector('.pessoa#altura')
  let imc = document.querySelector('.pessoa#imc')
  let situacao = document.querySelector("#aviso")
    

  nome.textContent = ""
  idade.textContent = ""
  peso.textContent = ""
  altura.textContent = ""
  imc.textContent = ""
  situacao.textContent = ""
  
})