// Calculo do IMC
var pacientes = document.querySelectorAll('.paciente')
for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i]


  var peso = paciente.querySelector('.info-peso')
  peso = peso.textContent
  

  var altura = paciente.querySelector('.info-altura')
  altura = altura.textContent
  
  var resposta = paciente.querySelector('.info-imc')


  var pesoEhValido = validaPeso(peso)
  var alturaEhValido = validaAltura(altura)

  if (!pesoEhValido) {
    pesoEhValido = false
    resposta.textContent = "Dados invalidos"
    paciente.classList.add("paciente-invalido")
    
  }

  if (!alturaEhValido) {
    alturaEhValido = false
    resposta.textContent = "Dados invalidos"
    paciente.classList.add("paciente-invalido")
  }
  if (pesoEhValido && alturaEhValido) {
    var imc = calculaImc(peso,altura)
    resposta.textContent = imc
    
  }


}
function validaPeso(peso){
  if (peso>=0 && peso<1000){
    return true
  }else{
    return false
  }

}

function validaAltura(altura){
  if (altura>= 0 && altura <=3.0){
    return true

  }else{
    return false
  }
  

}

function calculaImc(peso,altura){ 
   imc = peso / (altura * altura)
   return imc.toFixed(2)
}
 
