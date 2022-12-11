const botaoInverter = document.querySelector("#inverter")
const botaoVogais = document.querySelector("#vogais")
const botaoContaPalavras = document.querySelector("#contarPalavras")
const botaoPalavraMaiorOcorrencia = document.querySelector("#maisPalavra")
const botaoModoBusca = document.querySelector("#modoBusca")
const botaoBuscarSubstituir = document.querySelector("#buscarESubstituir")
const botaoCalculaDiasDeVida = document.querySelector("#dataParaDiasDeVida")
const botaoLerData = document.querySelector("#lerData")
const botaoLerSemanas = document.querySelector("#lerSemanas")
const buscarAtt = document.querySelector("#digitedSearch")
const botaoModoData = document.querySelector("#modoDatas")
const textoSenha = document.querySelector("#textoSenha")
const botaoMostraSenha = document.querySelector("#mostrarSenha")
const botaoTenisPolar = document.querySelector("#tenisPolar")
var estaModoBusca = 0
var estaModoDatas = 0
var estaVendoSenha = 0


let inverterArray = array =>{
  let aux
  for(let i = 0; i<(array.length/2); i++){
    aux = array[i]
    array[i] = array[((array.length - i))-1]
    array[((array.length - i))-1] = aux 
  }
}

let imprimirArrayCaracteres = (div,array) =>{
  for(let i = 0; i<array.length; i++){
    div.innerHTML += array[i]
  }
}

let imprimirArray = (div, array) =>{
  for(let i = 0; i<array.length; i++){
    if(i != 0)
      div.innerHTML += ` ${array[i]}`
    else div.innerHTML += `${array[i]}`
  } 
  
}

let verificarVogal = array =>{
  for(let i = 0; i<array.length; i++){
    if("aeiou".indexOf(array[i].toLowerCase()) != -1){
      array[i] = `<strong>${array[i]}</strong>`
    }
  }
}

let imprimiTabela = (palavra, qnt, tabela) =>{
  if(palavra != ''){
  tabela.innerHTML += 
  `<tr>
  <td>${palavra}</td>
  <td>${qnt}</td>
  </tr>`
  }
}

let contarPalavra = (palavra, array) =>{
  let contador = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] == palavra){
      contador++
    } 
  }
  return contador
}

let eDiferente = (palavra, arrayDePalavras) =>{
  if(arrayDePalavras.indexOf(palavra) == -1){
    arrayDePalavras.push(palavra)
    return true
  } 
  return false
}

let maiorDelas = array =>{
  let palavras = []
  let maiorOcorrencia = 0
  let palavra
  for(let i = 0; i < array.length; i++){
    if (eDiferente(array[i],palavras) && contarPalavra(array[i],array) > maiorOcorrencia){
      palavra = array[i]
      maiorOcorrencia = contarPalavra(array[i],array)
    }
  }
  return palavra
}

let PalavrasPorOcorrencia = (array,tabela) =>{
  let palavras = []

  for(let i = 0; i < array.length; i++){
    if(eDiferente(array[i], palavras)){
      imprimiTabela(array[i],contarPalavra(array[i], array),tabela)
    }
  }
}

let buscaEMarca = (string, palavraBuscada) =>{
  return string.replaceAll(palavraBuscada,`<span>${palavraBuscada}</span>`)
}

let trocarPalavras = (palavraBuscada, palavraSubstituir, array) =>{
  for(let i = 0; i < array.length; i++){
    if(array[i] == palavraBuscada){
      array[i] = palavraSubstituir
    }
  }
}

let contarDias2 = (deDia,deMes,deAno,ateDia,ateMes,ateAno) =>{

  let primeiraData = new Date(Number(deAno),Number(deMes),Number(deDia))

  let segundaData = new Date(Number(ateAno),Number(ateMes),Number(ateDia))

  let dias = Math.floor((segundaData - primeiraData) / 86400000)
  return dias

}

let calcularSemanas = dias =>{
  console.log(dias)
  return Math.floor(dias / 7)
}
/*
let contarDias = () => {

  var currentdate = new Date();

  const dataNascimento = document.getElementById("digitedText").value

  let dataArray = dataNascimento.split("/")

  let birthDate = new Date(dataArray[2], dataArray[1], dataArray[0]);

  let hoje = new Date(currentdate.getFullYear(), (currentdate.getMonth() + 1), currentdate.getDate())

  let days = Math.floor((hoje - birthDate) / 86400000);

  document.getElementById("content").innerHTML = days

}
*/
let retornarMes = mes =>{
  switch(Number(mes)){
    case 1:
      return `janeiro`
    case 2:
      return `fevereiro`
    case 3:
      return `março`
    case 4:
      return `abril`
    case 5:
      return `maio`
    case 6:
      return `junho`
    case 7:
      return `julho`
    case 8:
      return `agosto`
    case 9:
      return `setembro`
    case 10:
      return `outubro`
    case 11:
      return `novembro`
    case 12:
      return `dezembro`
  }
}

/*
Date.prototype.today = function () {

  return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();

}
*/

let desligaModoDatas= ()=>{
  const textoDigitado = document.querySelector("#digitedText")
  const textoPrimeiraData = document.querySelector("#primeiraData")
  const textoSegundaData = document.querySelector("#segundaData")
  const botaoCalculaSemana = document.querySelector("#lerSemanas")

  textoDigitado.style.display = "inline"
  textoPrimeiraData.style.display = "none"
  textoSegundaData.style.display = "none"
  botaoCalculaSemana.style.display = "none"
  botaoModoData.innerHTML = "Modo datas"

  estaModoDatas = 0
}

let ligaModoDatas = () =>{
  const textoDigitado = document.querySelector("#digitedText")
  const textoPrimeiraData = document.querySelector("#primeiraData")
  const textoSegundaData = document.querySelector("#segundaData")
  const botaoCalculaSemana = document.querySelector("#lerSemanas")

  textoDigitado.style.display = "none"
  textoPrimeiraData.style.display = "inline"
  textoSegundaData.style.display = "inline"
  botaoCalculaSemana.style.display = "inline"
  botaoModoData.innerHTML = "Voltar"

  estaModoDatas = 1
}


let ligaModoBusca = () =>{
  const busca = document.getElementById("digitedSearch")
  const substituir = document.getElementById("digitedReplace")

  botaoModoBusca.innerHTML = `Voltar`
  busca.style.display = "inline"
  substituir.style.display = "inline"
  botaoBuscarSubstituir.style.display = "inline"

  estaModoBusca = 1
}

let desligaModoBusca = () =>{
  const busca = document.getElementById("digitedSearch")
  const substituir = document.getElementById("digitedReplace")

  botaoModoBusca.innerHTML = `Modo Busca`
  busca.style.display = "none"
  substituir.style.display = "none"
  botaoBuscarSubstituir.style.display = "none"

  estaModoBusca = 0
}

let verificarQualidadeNumero = string =>{
  let possuiNumero = false
  for(let i = 0; i<string.length; i++){
    if("0123456789".indexOf(string[i].toLowerCase()) != -1){
      possuiNumero = true
    }
  }
  return possuiNumero
}

let verificarQualidadeCaracEsp = string =>{
  let possuiCaractere = false
  for(let i = 0; i<string.length; i++){
    if("@#!$%&*()-+.,=".indexOf(string[i].toLowerCase()) != -1){
      possuiCaractere = true
    }
  }
  return possuiCaractere
}

let verificarQualidadeMaiuMinu = string =>{
  let possuiMaiusculo = false
  let possuiMinusculo = false
  for(let i = 0; i<string.length; i++){
    if((verificarQualidadeNumero(string[i]) || verificarQualidadeCaracEsp(string[i])) == false){
      if(string[i] == string[i].toUpperCase()){
        possuiMaiusculo = true
      }
      if(string[i] == string[i].toLowerCase()){
        possuiMinusculo = true
      }
    }
  }
  return (possuiMaiusculo && possuiMinusculo)
}

let retornaPolar = posicao =>{
  const polar = ["p","o","l","a","r",]
  return polar[posicao]
}

let retornaTenis = posicao =>{
  const tenis = ["t","e","n","i","s",]
  return tenis[posicao]
}

let trocarTenisPolar = array =>{
  for(let i = 0; i < array.length; i++){
    if("tenis".indexOf(array[i].toLowerCase()) != -1){
      if(array[i] == array[i].toLowerCase()){
        array[i] = retornaPolar("tenis".indexOf(array[i].toLowerCase()))
      }else array[i] = retornaPolar("tenis".indexOf(array[i].toLowerCase())).toUpperCase()
      continue
    }
    if("polar".indexOf(array[i].toLowerCase()) != -1){
      if(array[i] == array[i].toLowerCase()){
        array[i] = retornaTenis("polar".indexOf(array[i].toLowerCase()))
      }else array[i] = retornaTenis("polar".indexOf(array[i].toLowerCase())).toUpperCase()
      continue
    }
  }   
}


//questao 1
botaoInverter.addEventListener("click", function(){
  const textoDigitado = document.querySelector("#digitedText").value
  let tabela = document.querySelector("#tabela")
  tabela.innerHTML = ``
  let contentDiv = document.querySelector("#content")
  contentDiv.innerHTML = ``

  let bagOfLetters = textoDigitado.split("")

  console.log(bagOfLetters)
  inverterArray(bagOfLetters)
  imprimirArrayCaracteres(contentDiv,bagOfLetters)
  console.log(bagOfLetters)
})

//questao 2
botaoVogais.addEventListener("click", function() {
  const textoDigitado = document.querySelector("#digitedText").value
  let tabela = document.querySelector("#tabela")
  tabela.innerHTML = ``
  let contentDiv = document.querySelector("#content")
  contentDiv.innerHTML = ``

  let bagOfLetters = textoDigitado.split("")
  console.log(bagOfLetters)
  verificarVogal(bagOfLetters)
  imprimirArrayCaracteres(contentDiv,bagOfLetters)
})

//questao 3
botaoContaPalavras.addEventListener("click", function(){
  const textoDigitado = document.querySelector("#digitedText").value
  let tabela = document.querySelector("#tabela")
  tabela.innerHTML = ``
  let contentDiv = document.querySelector("#content")
  contentDiv.innerHTML = ``

  let bagOfWords = textoDigitado.split(" ")
  PalavrasPorOcorrencia(bagOfWords,tabela)
})

//questao 4
botaoPalavraMaiorOcorrencia.addEventListener("click", function(){
  const textoDigitado = document.querySelector("#digitedText").value
  let tabela = document.querySelector("#tabela")
  tabela.innerHTML = ``
  let contentDiv = document.querySelector("#content")
  contentDiv.innerHTML = ``

  let bagOfWords = textoDigitado.split(" ")
  const palavraMaisOcorrida = maiorDelas(bagOfWords)
  imprimiTabela(palavraMaisOcorrida, contarPalavra(palavraMaisOcorrida, bagOfWords), tabela)
})

//questao 5

botaoModoBusca.addEventListener("click", function() {
  

  if(estaModoBusca == 0){
    ligaModoBusca()
    desligaModoDatas()
  }else{
    desligaModoBusca()
  }
}) //botao modo busca

buscarAtt.addEventListener("keyup", function(){
  const busca = document.getElementById("digitedSearch").value
  const textoDigitado = document.querySelector("#digitedText").value
  let contentDiv = document.querySelector("#content")
  contentDiv.innerHTML = ``

  let stringDigitada = textoDigitado
  
  contentDiv.innerHTML = buscaEMarca(stringDigitada, busca)
}) //busca por caractere

botaoBuscarSubstituir.addEventListener("click", function(){
  const busca = document.getElementById("digitedSearch").value
  const textoDigitado = document.querySelector("#digitedText").value
  const substituir = document.getElementById("digitedReplace").value
  let tabela = document.querySelector("#tabela")
  tabela.innerHTML = ``
  let contentDiv = document.querySelector("#content")
  contentDiv.innerHTML = ``

  let bagOfWords = textoDigitado.split(" ")

  trocarPalavras(busca, substituir, bagOfWords)

  imprimirArray(contentDiv, bagOfWords)

}) //faz a substituição

//questao 6
botaoCalculaDiasDeVida.addEventListener("click",function(){
   
  //eese e o certo
  const textoDigitado = document.querySelector("#digitedText").value
  let tabela = document.querySelector("#tabela")
  tabela.innerHTML = ``
  let contentDiv = document.querySelector("#content")
  contentDiv.innerHTML = ``

  let dataAtual = new Date()
  let dataNascimento = textoDigitado.split("/")
  let diasDeVida = contarDias2(dataNascimento[0],dataNascimento[1],dataNascimento[2],dataAtual.getDate(),(dataAtual.getMonth() + 1),dataAtual.getFullYear())
  contentDiv.innerHTML = `${diasDeVida} dias de vida`
  

  /*
  const textoDigitado = document.querySelector("#digitedText").value
  let tabela = document.querySelector("#tabela")
  tabela.innerHTML = ``
  let contentDiv = document.querySelector("#content")
  contentDiv.innerHTML = ``

  let DiaMesAno = textoDigitado.split("/")
  contentDiv.innerHTML = `${diaPorDia(DiaMesAno[0],DiaMesAno[1],DiaMesAno[2])} Dias de vida`
  */
})

//questao 7
botaoLerData.addEventListener("click", function(){
  const textoDigitado = document.querySelector("#digitedText").value
  let tabela = document.querySelector("#tabela")
  tabela.innerHTML = ``
  let contentDiv = document.querySelector("#content")
  contentDiv.innerHTML = ``

  let diaMesAno = textoDigitado.split("/")

  contentDiv.innerHTML = `${diaMesAno[0]} de ${retornarMes(diaMesAno[1])} de ${diaMesAno[2]}`
})

//questao 8
botaoModoData.addEventListener("click", function(){
  

  if(estaModoDatas == 0){
    ligaModoDatas()
    desligaModoBusca()
  }else{
    desligaModoDatas()
  }
})

botaoLerSemanas.addEventListener("click", function(){
  const textoPrimeiraData = document.querySelector("#primeiraData").value
  const textoSegundaData = document.querySelector("#segundaData").value
  let tabela = document.querySelector("#tabela")
  tabela.innerHTML = ``
  let contentDiv = document.querySelector("#content")
  contentDiv.innerHTML = ``

  let primeriaData = textoPrimeiraData.split("/")
  let segundaData  = textoSegundaData.split("/")

  let qntDias = contarDias2(primeriaData[0],primeriaData[1],primeriaData[2],segundaData[0],segundaData[1],segundaData[2])
  contentDiv.innerHTML = `${calcularSemanas(qntDias)} semanas`
})

//questao 9
textoSenha.addEventListener("keyup", function(){
  const divSenha = document.querySelector("#divSenha")

  if(verificarQualidadeCaracEsp(textoSenha.value) && verificarQualidadeNumero(textoSenha.value) && verificarQualidadeMaiuMinu(textoSenha.value)){
    divSenha.style.backgroundColor = "Green"
  }else if(verificarQualidadeMaiuMinu(textoSenha.value) && verificarQualidadeNumero(textoSenha.value)){
    divSenha.style.backgroundColor = "Orange"
  }else divSenha.style.backgroundColor = "Red"
  
})

botaoMostraSenha.addEventListener("click", function(){
  if(estaVendoSenha == 0){
    textoSenha.type = "text"
    botaoMostraSenha.innerHTML = "Esconder senha"

    estaVendoSenha = 1
  }else{
    textoSenha.type = "password"
    botaoMostraSenha.innerHTML = "Ver senha"
    estaVendoSenha = 0
  }

})

//questao 10

botaoTenisPolar.addEventListener("click", function(){
  const textoDigitado = document.querySelector("#digitedText").value
  let tabela = document.querySelector("#tabela")
  tabela.innerHTML = ``
  let contentDiv = document.querySelector("#content")
  contentDiv.innerHTML = ``

  let bagOfLetters = textoDigitado.split("")
  trocarTenisPolar(bagOfLetters)
  imprimirArrayCaracteres(contentDiv,bagOfLetters)
})