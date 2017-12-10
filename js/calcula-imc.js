

var titulo =  document.querySelector("#titulo");


titulo.textContent = "Aparecida Nutricionista";	


var pacientes = document.querySelectorAll(".paciente");


	for (var i = 0; i < pacientes.length ; i++ ) {
		var paciente = pacientes[i];

		var tdPeso = paciente.querySelector(".info-peso");
		var peso = tdPeso.textContent;

		var tdAltura = paciente.querySelector(".info-altura");
		var altura = tdAltura.textContent;

		var tdImc = paciente.querySelector(".info-imc");

		var pesoEhValido = validaPeso(peso);
		var alturaEhValido = validaAltura(altura);

		if (peso <= 0 || peso >= 1000) {
			pesoEhValido = false;
			tdImc.textContent = 'Peso Invalida';
			paciente.classList.add("paciente-invalido");
			
			console.log("Peso Invalido");
		}

		if (altura <= 0 || altura >= 3.00) {
			alturaEhValido = false;
			tdImc.textContent = 'Altura Invalida';
			paciente.style.backgroundColor = 'lightcoral';
			console.log("Altura Invalido");
		}

		if(pesoEhValido && alturaEhValido) {
			
			tdImc.textContent = calculaImc(peso, altura);
		}

	}


function calculaImc(peso, altura) {

	var imc = 0 ;
	imc = peso / (altura * altura);
	return imc.toFixed(2);


}

function validaPeso(peso){
	if (peso > 0 && peso < 1000) {
		return true;
	}else{
		return false;
	}

}

function validaAltura(altura){
		if (altura > 0 && altura  < 3.00) {
			return true;
		}else{
			return false;
		}

}


function validaPaciente(paciente) {
	
	var erros = [];

	if(paciente.nome.length == 0){
		erros.push("Nome não pode ser estar em branco");
	}

	if(!validaPeso(paciente.peso) ){
		erros.push("Peso é inválido");
	}

	if(!validaAltura(paciente.altura)){
		erros.push("Altura é Invalida");
	}
	


	if(paciente.gordura.length == 0){
		erros.push("Gordura não pode ser estar em branco");
	}	
		

	return erros;
}









