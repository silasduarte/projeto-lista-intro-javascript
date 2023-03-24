// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const largura = prompt("Digite a largura")
const altura = prompt("Digite a altura")
const area = largura * altura
return console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoDenascimento = prompt("Digite sua idade")
  const anoAtual = prompt("Digite ano atual")
  const idade = anoDenascimento - anoAtual
  return console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso / (altura * altura)
return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Qual e seu nome?")
const idade = prompt("Qual sua idade?")
const email = prompt("Qual e seu email?")
console.log("Meu nome é "+ nome +", tenho " + idade + " anos, e o meu email é " + email+".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Qual sua cor favorita 1?")
const cor2 = prompt("Qual sua cor favorita 2?")
const cor3 = prompt("Qual sua cor favorita 3?")
const cores = [cor1,cor2,cor3]
console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const calculo = custo / valorIngresso
return calculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const valor1 = array [0]
const valor2 = array[array.length -1]
array [0] = valor2
array[array.length -1] = valor1
return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 return string1.toLowerCase() === string2.toLowerCase()
 
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = parseInt(prompt("Digite o ano atual"))
  const anoDeNascimento = parseInt(prompt("Digite o ano de nascimento"))
  const anoDeCartEmi = parseInt(prompt("Digite o ano que sua carteira de identidade foi emitida"))

  const difEmissaoAnoAtual = anoAtual - anoDeCartEmi
  const idade = anoAtual - anoDeNascimento
  const calculo1 = idade <= 20 && difEmissaoAnoAtual >= 5
  const calculo2 = idade > 20 && idade <= 50 && difEmissaoAnoAtual >= 10
  const calculo3 = idade >= 50 && difEmissaoAnoAtual >= 15

  const resultado = calculo1 || calculo2 || calculo3
  return console.log(resultado)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const divisivel400 = ano % 400 == 0
  const divisivel4 = ano % 4 == 0
  const naoDivisivel100 = ano % 100 != 0
  ano = divisivel400 || (divisivel4  && naoDivisivel100)
  return ano
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("tem mais de 18?")
  const escolaridade = prompt("tem ensino médio completo?")
  const dispHorario = prompt("tem disponibilidade horários ?")

 const verificar = idade === "sim"
 const verificar2 = escolaridade === "sim"
 const verificar3 = dispHorario === "sim"

const resultado = verificar && verificar2 && verificar3
return console.log(resultado)
}