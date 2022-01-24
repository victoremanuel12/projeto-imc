var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
 
  event.preventDefault()
  

  //Extraindo informações do form
  var form = document.querySelector("#form-adiciona")

  var paciente = infoForm(form)

  var erros = validaPaciente(paciente)
 
  if(erros.length > 0){
    exibeMensagemDeErro(erros)
  
    return
    
  }

    //Criando a tr e td do paciente e Adicionando o paciente na tabela
    adicionaPacienteNaTabela(paciente)

   

    

    var mensagensDeErro = document.querySelector("#mensagens-erro")
    mensagensDeErro.innerHTML=""

    form.reset()
})
function adicionaPacienteNaTabela(paciente){
  var pacientetr = montaTr(paciente)
  var tabela = document.querySelector("#tabela-pacientes")
  tabela.appendChild(pacientetr)
}


function infoForm(form){
  var paciente = {
    nome:form.nome.value,
    peso:form.peso.value,
    altura: form.altura.value,
    gordura: form. gordura.value,
    imc:calculaImc(form.peso.value,form.altura.value)
  }
  return paciente
}
 
 
function montaTr(paciente){
  var pacientetr= document.createElement("tr")
  pacientetr.classList.add("paciente")
 
  pacientetr.appendChild(montaTd(paciente.nome,"info-nome"))
  pacientetr.appendChild(montaTd(paciente.peso,"info-peso"))
  pacientetr.appendChild(montaTd(paciente.altura,"info-altura"))
  pacientetr.appendChild(montaTd(paciente.gordura,"info-gordura"))
  pacientetr.appendChild(montaTd(paciente.imc,"info-imc"))

  return pacientetr

}

function montaTd(dado,classe){
  var td = document.createElement("td")
  td.textContent=dado
  td.classList.add(classe)

  return td
}

function validaPaciente (paciente){
  var erros = []
  
  if (paciente.nome.length == 0){
    erros.push("O nome não pode ser em branco")
  }
  if (paciente.gordura.length == 0){
    erros.push("A gordurura não pode está em branco")
  }
  if(paciente.peso.length==0){
    erros.push("O peso não pode ser em branco")
  }
  if(paciente.altura.length==0){
    erros.push("O altura não pode ser em branco")
  }
 
  

   if (!validaPeso(paciente.peso)) {
      erros.push("Peso  invalido")
   } 
 
  if(!validaAltura(paciente.altura)){
      erros.push("Altura invalida")
    }

    
     return erros
  }
  function exibeMensagemDeErro(erros){

    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML= ''

    erros.forEach(function(erro) {
     var li = document.createElement("li") 
     li.textContent = erro
     ul.appendChild(li)
    });
  }
