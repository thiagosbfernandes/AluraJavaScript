

			var titulo =  document.querySelector("#titulo");


			titulo.textContent = "Aparecida Nutricionista";	


			var pacientes = document.querySelectorAll(".paciente");


			for (var i = 0; i <= pacientes.length ; i++ ) {
				var trPaciente = pacientes[i];
				var tdPeso = trPaciente.querySelector(".info-peso");
				var peso = tdPeso.textContent;

				var tdAltura = trPaciente.querySelector(".info-altura");
				var altura = tdAltura.textContent;

				var tdImc = trPaciente.querySelector(".info-imc");

				var pesoEhValido = true;
				var alturaEhValido = true;

				if (peso <= 0 || peso >= 1000) {
					pesoEhValido = false;
					tdImc.textContent = 'Peso Invalida';
					trPaciente.classList.add("paciente-invalido");
					paciente-invalido
					console.log("Peso Invalido");
				}

				if (altura <= 0 || altura >= 3.00) {
					alturaEhValido = false;
					tdImc.textContent = 'Altura Invalida';
					trPaciente.style.backgroundColor = 'lightcoral';
					console.log("Altura Invalido");
				}

				if(pesoEhValido && alturaEhValido) {
					var imc = peso / (altura * altura);
					tdImc.textContent = imc.toFixed(2);
				}

			}







