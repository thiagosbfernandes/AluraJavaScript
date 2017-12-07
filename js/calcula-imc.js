

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

		var pesoEhValido = true;
		var alturaEhValido = true;

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









