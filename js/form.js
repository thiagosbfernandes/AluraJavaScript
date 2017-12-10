	var botaoAdicionar = document.querySelector("#adicionar-paciente");

	botaoAdicionar.addEventListener("click", function(event){
		event.preventDefault();
	
		var form = document.querySelector("#form-adiciona");

		//extraindo dados do form

		var paciente = otendoDadosDoFormulario(form);

		var erros = validaPaciente(paciente);

		//valida formulario
		if(erros.length > 0){

			exibeMensagensDeErro(erros);

			return;
		}

		var pacienteTr = montarTr(paciente);


		var tabela = document.querySelector("#tabela-pacientes");
		tabela.appendChild(pacienteTr);

		var mensagensErro = document.querySelector("#mensagens-erro");
		mensagensErro.innerHTML = "";

		form.reset();



	});

	function otendoDadosDoFormulario(form){

		var paciente = {
			nome: form.nome.value,
			peso: form.peso.value,
			altura: form.altura.value,
			gordura: form.gordura.value,
			imc : calculaImc(form.peso.value , form.altura.value)
		}
		
		return paciente;
	}

	function montarTr(paciente) {

		var pacienteTr = document.createElement("tr");
		pacienteTr.classList.add("paciente");

		pacienteTr.appendChild(montarTd(paciente.nome,"info-nome"));
		pacienteTr.appendChild(montarTd(paciente.peso,"info-peso"));
		pacienteTr.appendChild(montarTd(paciente.altura,"info-altura"));
		pacienteTr.appendChild(montarTd(paciente.gordura,"info-gordura"));
		pacienteTr.appendChild(montarTd(paciente.imc,"info-imc"));


		return pacienteTr;

	}


	function montarTd (dado,classe) {

		var td = document.createElement("td");
		td.classList.add(classe);
		td.textContent = dado;

		return td;
		
	}

	function exibeMensagensDeErro (erros){
		var ul = document.querySelector("#mensagens-erro");
		ul.innerHTML = "";

		erros.forEach(function(erro){
			var li = document.createElement("li");
			li.textContent = erro;
			ul.appendChild(li);
		});



	}