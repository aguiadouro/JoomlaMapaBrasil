var codigoEstadosIBGE = {
							"Acre":"12",
							"Alagoas":"27",
							"Amapá":"16",
							"Amazonas":"13",
							"Bahia":"29",
							"Ceará":"23",
							"Distrito Federal":"53",
							"Espírito Santo":"32",
							"Goiás":"52",
							"Maranhão":"21",
							"Mato Grosso":"51",
							"Mato Grosso do Sul":"50",
							"Minas Gerais":"31",
							"Pará":"15",
							"Paraíba":"25",
							"Paraná":"41",
							"Pernambuco":"26",
							"Piauí":"22",
							"Rio Grande do Norte":"24",
							"Rio Grande do Sul":"43",
							"Rio de Janeiro":"33",
							"Rondônia":"11",
							"Roraima":"14",
							"Santa Catarina":"42",
							"São Paulo":"35",
							"Sergipe":"28",
							"Tocantins":"17"
						};

var instituicoesJSON = [
	{ "nome": 'CEFET-MG',"descr":"Campus Divinópolis","coordenador":"Maria Adélia da Costa","vagas":"Servidores: 9 vagas<br/>Ampla concorrência: 9 vagas<br/>Total: 18 vagas","endereco":"Centro Federal de Educação Tecnológica de Minas Gerais – Campus Divinópolis</br>Endereço: Rua Álvares de Azevedo, 400 Bairro: Bela Vista – CEP35503-822 - Divinópolis/MG", "codEstado": '31', "site": "", "email":"profept.cefetmg@gmail.com" },
	{ "nome": 'CP II',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '33', "site": "","email":"secretariapos@cp2.g12.br" },
	{ "nome": 'IFAC',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '12', "site": "","email":"profeptifac@ifac.edu.br" },
	{ "nome": 'IFAL',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '27', "site": "","email":"profept@ifal.edu.br"},
	{ "nome": 'IFAM',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '13', "site": "","email":"profeptifam@ifam.edu.br" },
	{ "nome": 'IFAP',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '16', "site": "","email":"profeptifap@ifap.edu.br" },
	{ "nome": 'IFB',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '53', "site": "","email":"profept@ifb.edu.br" },
	{ "nome": 'IFBA',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '29', "site": "","email":"profeptifba@ifba.edu.br" },
	{ "nome": 'IF Baiano',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '29', "site": "","email":"profept@catu.ifbaiano.edu.br" },
	{ "nome": 'IFC',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '42', "site": "","email":"profeptifc@ifc.edu.br" },
	{ "nome": 'IFCE',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '23', "site": "","email":"profeptifce@gmail.com" },
	{ "nome": 'IFES',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '32', "site": "","email":"profept.ifes@gmail.com" },
	{ "nome": 'IFFAR',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '43', "site": "","email":"profeptifce@ifce.edu.br" },
	{ "nome": 'IFFluminense',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '33', "site": "","email":"profeptiff@iff.edu.br" },
	{ "nome": 'IFG',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '52', "site": "","email":"profeptifg@ifg.edu.br" },
	{ "nome": 'IFGoiano',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '52', "site": "","email":"profeptifgoaino@ifgoiano.edu.br" },
	{ "nome": 'IFMA',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '21', "site": "","email":"profeptifma@ifma.edu.br" },
	{ "nome": 'IFMG',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '31', "site": "","email":"profept.ifmg@ifmg.edu.br" },
	{ "nome": 'IFMS',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '50', "site": "https://www.ifms.edu.br","email":"" },
	{ "nome": 'IFMT',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '51', "site": "","email":"profept@cba.ifmt.edu.br" },
	{ "nome": 'IFNMG',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '31', "site": "","email":"profept.ifnmg@gmail.com" },
	{ "nome": 'IFPA',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '15', "site": "","email":"profept.ifpa@ifpa.edu.br" },
	{ "nome": 'IFPB',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '25', "site": "https://www.ifpb.edu.br/","email":"profeptifpb@ifpb.edu.br" },
	{ "nome": 'IFPE',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '26', "site": "https://portal.ifpe.edu.br/","email":"profept.mestrado@olinda.ifpe.edu.br" },
	{ "nome": 'IFPI',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '22', "site": "","email":"profept.ifpi@ifpi.edu.br" },
	{ "nome": 'IFPR',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '41', "site": "","email":"profept.curitiba@ifpr.edu.br" },
	{ "nome": 'IFRJ',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '33', "site": "https://portal.ifrj.edu.br/","email":"profept.cmesq@ifrj.edu.br" },
	{ "nome": 'IFRN',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '24', "site": "https://portal.ifrn.edu.br/","email":"profeptifrn@ifrn.edu.br" },
	{ "nome": 'IFRO',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '11', "site": "https://portal.ifro.edu.br/","email":"profept.ifro@ifro.edu.br" },
	{ "nome": 'IFRR',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '14', "site": "","email":"profept@ifrr.edu.br" },
	{ "nome": 'IFRS',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '43', "site": "https://ifrs.edu.br","email":"profeptifrs@ifrs.edu.br" },
	{ "nome": 'IFS',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '28', "site": "","email":"profetpifs@ifs.edu.br" },
	{ "nome": 'IFSC',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '42', "site": "https://www.ifsc.edu.br/","email":"profeptifsc@ifsc.edu.br" },
	{ "nome": 'IF Sertão-PE',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '26', "site": "","email":"profeptifsertaope@ifsertao-pe.edu.br" },
	{ "nome": 'IFSP',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '35', "site": "https://prp.ifsp.edu.br/","email":"profeptifsp@ifsp.edu.br" },
	{ "nome": 'IF SUDESTE MG',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '31', "site": "","email":"profept@ifsudestemg.edu.br" },
	{ "nome": 'IFSUL',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '43', "site": "","email":"profeptifsul@charquedas.ifsul.edu.br" },
	{ "nome": 'IFSULDEMINAS',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '31', "site": "","email":"profept@ifsuldeminas.edu.br" },
	{ "nome": 'IFTM',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '31', "site": "","email":"profeptiftm@iftm.edu.br" },
	{ "nome": 'IFTO',"descr":"","coordenador":"","vagas":"","endereco":"", "codEstado": '17', "site": "","email":"profeptifto@ifto.edu.br" }
  ]


document.addEventListener
('DOMContentLoaded', (event) => 
	{
		//só chama essa parte quando todo o documento foi devidamente carregado
		(function ()
		 	{
				 

				//ativa dropdown no twitter bootstrap
				jQuery('.dropdown-toggle').dropdown();

				
	
				
				
				//ações do mapa
				var states = document.getElementsByClassName("estado");
				for (let i = 0; i < states.length; i++) {

					states[i].onclick = function () {
						let codigoEstado = this.getAttribute('code');
						let instituicao = this.getAttribute('name');

						abreModal(codigoEstado);
					}
				}


				//acoes do menu
				alert(Object.keys(codigoEstadosIBGE).length)
				for (let i = 0; i < Object.keys(codigoEstadosIBGE).length; i++)
				{
					var ul = document.getElementById("menuDropDown");
					var li = document.createElement("li");
					var a = document.createElement("a");
					nomeEstado=Object.keys(codigoEstadosIBGE)[i];
					
					a.innerText=nomeEstado;
					a.setAttribute("href", "#"); 
					li.appendChild(a);
					ul.appendChild(li);

					a.onclick = function () {
						//let codigoEstado = this.getAttribute('code');
						//let nomeEstado = this.getAttribute('name');
						abreModal(Object.values(codigoEstadosIBGE)[i]);
					}
				}
			}


		)();

	    function abreModal(codEstado) 
		{
	    	
			var myAccordion = document.getElementById("my-accordion");
			myAccordion.innerHTML="";


			
         
			

			for (let i = 0; i < instituicoesJSON.length; i++)
			{
			
				

				var instituicao = instituicoesJSON[i];
				if(instituicao.codEstado==codEstado)
				{			
					
					var tagLiContainer = document.createElement("li");
					var tagDivTitulo = document.createElement("div");
					var tagDivConteudo = document.createElement("div");

					var tagDivWell = document.createElement("div");
					tagDivWell.setAttribute("class", "well");
					
				

					var spanNome = document.createElement("span");
					spanNome.innerHTML=	instituicoesJSON[i].nome;

					var spanDescricao = document.createElement("span");
					spanDescricao.innerHTML =instituicoesJSON[i].descr;
					
					var spanCoordenador = document.createElement("span");
					spanCoordenador.innerHTML =instituicoesJSON[i].coordenador;
					
					var spanVagas = document.createElement("span");
					spanVagas.innerHTML =instituicoesJSON[i].vagas;

					var spanEndereco = document.createElement("span");
					spanEndereco.innerHTML =instituicoesJSON[i].endereco;

					var spanSite = document.createElement("span");
					spanSite.innerHTML =instituicoesJSON[i].site;

					var spanEmail = document.createElement("span");
					spanEmail.innerHTML =instituicoesJSON[i].email;	
					

					myAccordion.appendChild(tagLiContainer);

					
					tagLiContainer.appendChild(tagDivTitulo);
					tagLiContainer.appendChild(tagDivConteudo);


					tagDivTitulo.appendChild(spanNome);

					tagDivConteudo.appendChild(tagDivWell);

					tagDivWell.appendChild(spanDescricao);
					tagDivWell.appendChild(spanCoordenador);
					tagDivWell.appendChild(spanVagas);
					tagDivWell.appendChild(spanEndereco);
					tagDivWell.appendChild(spanSite);
					tagDivWell.appendChild(spanEmail);

				}
			}

			jQuery("#my-accordion").accordionjs({activeIndex : false});

	
			jQuery("#myModal").modal("show");
			//alert(nomeEstado + " " + codigoEstado+"\n\n"+strInstituicoes);
		
	    }

	    
		
		//popover bootstrap
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
		var tooltipList = tooltipTriggerList.map(
			function (tooltipTriggerEl)
			{
				return new bootstrap.Tooltip(tooltipTriggerEl)
			}
		)

		//end popover bootstrap

	}
)

