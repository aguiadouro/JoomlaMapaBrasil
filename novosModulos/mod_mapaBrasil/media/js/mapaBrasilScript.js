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
	{ "sigla": 'CEFET-MG',"campus":"Campus Divinópolis","coordenador":"Maria Adélia da Costa","endereco":"Centro Federal de Educação Tecnológica de Minas Gerais – Campus Divinópolis</br>Endereço: Rua Álvares de Azevedo, 400 Bairro: Bela Vista – CEP35503-822 - Divinópolis/MG", "codEstado": '31', "site": "", "email":"profept.cefetmg@gmail.com" },
	{ "sigla": 'CP II',"campus":"Campus São Cristóvão","coordenador":"Leonardo Leonidas de Brito ","endereco":" Campo de São Cristóvão, 177 - CEP 20921-440 - Rio de Janeiro/RJ", "codEstado": '33', "site": "","email":"secretariapos@cp2.g12.br" },
	{ "sigla": 'IFAC',"campus":"Campus Rio Branco","coordenador":"Josina Maria Pontes Ribeiro","endereco":"Av. Brasil, n° 920 - Bairro Xavier Maia – CEP 69.903-068 – Rio Branco/AC", "codEstado": '12', "site": "","email":"profeptifac@ifac.edu.br" },
	{ "sigla": 'IFAL',"campus":"Campus Benedito Bentes","coordenador":"Ricardo Jorge de Sousa Cavalcanti","endereco":"Av. Benedito Bentes, s/n – Bairro Benedito Bentes - CEP 57084 651– Maceió/AL", "codEstado": '27', "site": "","email":"profept@ifal.edu.br"},
	{ "sigla": 'IFAM',"campus":"Campus Manaus Centro","coordenador":"Deuzilene Marques Salazar","endereco":"Av. Sete de Setembro, nº 1975, CDI - 2º andar - CEP: 69.020.120 – Manaus/AM", "codEstado": '13', "site": "","email":"profeptifam@ifam.edu.br" },
	{ "sigla": 'IFAP',"campus":"Campus Santana","coordenador":"Cleber Macedo de Oliveira","endereco":"Rodovia Duca Serra, 1133 – Bairro Fonte Nova – CEP 68928-280 – Santana/AP", "codEstado": '16', "site": "","email":"profeptifap@ifap.edu.br" },
	{ "sigla": 'IFB',"campus":"Campus Brasília","coordenador":"Débora Leite Silvano","endereco":"Via L2 Norte, SGAN 610 (610 Norte), Módulo D, E, F e G. CEP: 70830-450 – Brasília/DF", "codEstado": '53', "site": "","email":"profept@ifb.edu.br" },
	{ "sigla": 'IFBA',"campus":"Campus Salvador","coordenador":"","endereco":"Rua Emídio dos Santos, s/n Bairro: Barbalho - CEP: 40301-015 - Salvador/Bahia", "codEstado": '29', "site": "","email":"profeptifba@ifba.edu.br" },
	{ "sigla": 'IF Baiano',"campus":"Campus Catu","coordenador":"Davi Silva da Costa","endereco":"Rua Barão de Camaçari, 118 Bairro: Centro – CEP 48110-000 – Catu/BA", "codEstado": '29', "site": "","email":"profept@catu.ifbaiano.edu.br" },
	{ "sigla": 'IFC',"campus":"Campus Blumenau","coordenador":"Inge Renate Fröse Suhr","endereco":" Rua Bernardino José de Oliveira, 81 Bairro: Badenfurt – CEP 89070-270 – Blumenau/SC", "codEstado": '42', "site": "","email":"profeptifc@ifc.edu.br" },
	{ "sigla": 'IFCE',"campus":"Campus Fortaleza","coordenador":"Solonildo Almeida Da Silva","endereco":"Av. Treze de Maio, 2081 Bairro: Benfica - CEP 60040-531 - Fortaleza/CE", "codEstado": '23', "site": "","email":"profeptifce@gmail.com" },
	{ "sigla": 'IFES',"campus":"Campus Vitória","coordenador":"Antônio Henrique Pinto","endereco":"Av. Vitória, 1729 Bairro: Jucutuquara - CEP: 29.040-780 - Vitória/ES", "codEstado": '32', "site": "","email":"profept.ifes@gmail.com" },
	{ "sigla": 'IFFAR',"campus":"Campus Jaguari","coordenador":"Taniamara Vizzotto Chaves","endereco":"BR 287, KM 360, Estrada do Chapadão, S/N - CEP 97760-000 - Jaguari /RS", "codEstado": '43', "site": "","email":"profeptifce@ifce.edu.br" },
	{ "sigla": 'IFFluminense',"campus":"Centro de Referência","coordenador":"Leonardo Salvalaio Muline","endereco":"Local das Aulas – Rua Coronel Walter Kramer, 357, Pq. Santo Antônio, Campo dos Goytacazes/RJ; Secretaria Acadêmica – Rodovia Amaral Peixoto, km 164, Imboassica, Macaé/RJ. CEP: 27932-050", "codEstado": '33', "site": "","email":"profeptiff@iff.edu.br" },
	{ "sigla": 'IFG',"campus":"Campus Anápolis ","coordenador":"Wanderley Azevedo de Brito","endereco":"Endereço: Av. Pedro Ludovico, s/n Bairro: Reny Cury - CEP: 75131-457 - Anápolis/GO", "codEstado": '52', "site": "","email":"profeptifg@ifg.edu.br" },
	{ "sigla": 'IFGoiano',"campus":" Campus Ceres","coordenador":"Matias Noll","endereco":"Rodovia GO 154, km 03, Zona Rural - CEP: 76.3000-000 - Ceres/GO", "codEstado": '52', "site": "","email":"profeptifgoaino@ifgoiano.edu.br" },
	{ "sigla": 'IFMA',"campus":"Campus São Luís Monte Castelo","coordenador":"Paula Francineti de Araujo Tavares","endereco":"Avenida Getúlio Vargas, 04 Bairro: Monte Castelo – CEP: 65030-005 – São Luís/MA", "codEstado": '21', "site": "","email":"profeptifma@ifma.edu.br" },
	{ "sigla": 'IFMG',"campus":"Campus Ouro Branco","coordenador":"Pablo Menezes e Oliveira","endereco":"Rua Afonso Sardinha, 90 Bairro: Pioneiros - CEP 36420-000 - Ouro Branco/MG", "codEstado": '31', "site": "","email":"profept.ifmg@ifmg.edu.br" },
	{ "sigla": 'IFMS',"campus":"Campus Campo Grande","coordenador":"Dante Alighieri Alves de Mello","endereco":"Rua Taquari, 831 Bairro: Santo Antônio – CEP 79100-510 – Campo Grande/MS", "codEstado": '50', "site": "https://www.ifms.edu.br","email":"" },
	{ "sigla": 'IFMT',"campus":"Campus Cuiabá Cel. Octayde Jorge da Silva","coordenador":"Geison Jader Mello","endereco":"Rua Profa. Zulmira Canavarros, 95 Bairro: Centro – CEP: 78005-200 – Cuiabá/MT", "codEstado": '51', "site": "","email":"profept@cba.ifmt.edu.br" },
	{ "sigla": 'IFNMG',"campus":"Campus Montes Claros","coordenador":"Admilson Eustáquio Prates","endereco":"Rua Dois, 300 Bairro: Village do Lago I – CEP: 39404-058 – Montes Claros/MG", "codEstado": '31', "site": "","email":"profept.ifnmg@gmail.com" },
	{ "sigla": 'IFPA',"campus":"Campus Belém","coordenador":"Tiago Veloso dos Santos","endereco":" Avenida Almirante Barroso, 1155 Bairro: Marco – CEP: 66093-020 – Belém/PA", "codEstado": '15', "site": "","email":"profept.ifpa@ifpa.edu.br" },
	{ "sigla": 'IFPB',"campus":"Campus João Pessoa","coordenador":"Rafael José Alves do Rego Barros","endereco":"Avenida Primeiro de Maio, 720 Bairro:Jaguaribe – CEP: 58015-435 – João Pessoa/PB", "codEstado": '25', "site": "https://www.ifpb.edu.br/","email":"profeptifpb@ifpb.edu.br" },
	{ "sigla": 'IFPE',"campus":"Campus Olinda","coordenador":"Edlamar Oliveira dos Santos","endereco":"Av. Fagundes Varela, 375, Jardim Atlântico – CEP 53140-080 - Olinda/PE", "codEstado": '26', "site": "https://portal.ifpe.edu.br/","email":"profept.mestrado@olinda.ifpe.edu.br" },
	{ "sigla": 'IFPI',"campus":"Campus Parnaíba","coordenador":"Jeferson Luís Marinho de Carvalho","endereco":"Av. Monsenhor Antônio Sampaio, s.n. Bairro: Dirceu Arcoverde – CEP: 64211-145 – Parnaíba/PI ", "codEstado": '22', "site": "","email":"profept.ifpi@ifpi.edu.br" },
	{ "sigla": 'IFPR',"campus":"Campus Curitiba","coordenador":"Wilson Lemos Junior","endereco":"Avenida Senador Salgado Filho, 1200 - Bairro: Guabirotuba - CEP: 81510-000 -Curitiba/PR", "codEstado": '41', "site": "","email":"profept.curitiba@ifpr.edu.br" },
	{ "sigla": 'IFRJ',"campus":"Campus Mesquita","coordenador":"Marta Ferreira Abdala Mendes","endereco":"Rua Paulo I, s/no Bairro: Centro – CEP:26582-000 – Mesquita/RJ", "codEstado": '33', "site": "https://portal.ifrj.edu.br/","email":"profept.cmesq@ifrj.edu.br" },
	{ "sigla": 'IFRN',"campus":"Campus Mossoró","coordenador":"Diôgo Pereira Bezerra","endereco":"Rua Raimundo Firmino de Oliveira, 40 - Ulrich Graf - CEP: 59628-330 - Mossoró/RN", "codEstado": '24', "site": "https://portal.ifrn.edu.br/","email":"profeptifrn@ifrn.edu.br" },
	{ "sigla": 'IFRO',"campus":"Campus Porto Velho Calama","coordenador":"Antonio dos Santos Junior","endereco":"Av. Calama, 4985 – CEP: 76.820-441 - Porto Velho/RO", "codEstado": '11', "site": "https://portal.ifro.edu.br/","email":"profept.ifro@ifro.edu.br" },
	{ "sigla": 'IFRR',"campus":"Campus Boa Vista","coordenador":"Danieli Lazarini de Barros","endereco":"Av. Glaycon de Paiva, 2496 Bairro: Pricumã – CEP: 69303-340 – Boa Vista/RR", "codEstado": '14', "site": "","email":"profept@ifrr.edu.br" },
	{ "sigla": 'IFRS',"campus":"Campus Porto Alegre","coordenador":"Clarice Monteiro Escott","endereco":"Rua Cel. Vicente, 281 – Bairro Centro Histórico – CEP 90.030.041 – Porto Alegre/RS", "codEstado": '43', "site": "https://ifrs.edu.br","email":"profeptifrs@ifrs.edu.br" },
	{ "sigla": 'IFS',"campus":"– Campus Aracaju","coordenador":"Maria Silene da Silva","endereco":" Rua Francisco Portugal, 150 - Bairro: Salgado Filho - CEP: 49020-390 - Aracaju/SE", "codEstado": '28', "site": "","email":"profetpifs@ifs.edu.br" },
	{ "sigla": 'IFSC',"campus":"Centro de Referência em Formação e EAD","coordenador":"Roberta Pasqualli","endereco":"Rua Duarte Schutel, 99 Bairro: Centro – CEP: 88015-640 – Florianópolis/SC", "codEstado": '42', "site": "https://www.ifsc.edu.br/","email":"profeptifsc@ifsc.edu.br" },
	{ "sigla": 'IF Sertão-PE',"campus":"Campus Salgueiro","coordenador":"Cristiane Ayala de Oliveira","endereco":"BR 232, Km 508 s/n, Zona Rural – CEP 56.000-000 – Salgueiro/PE", "codEstado": '26', "site": "","email":"profeptifsertaope@ifsertao-pe.edu.br" },
	{ "sigla": 'IFSP',"campus":"Campus Sertãozinho","coordenador":"Paulo Sérgio Calefi","endereco":"Rua Américo Ambrósio, 269 Bairro: Jardim Canaã - CEP: 14169-263 – Sertãozinho/SP", "codEstado": '35', "site": "https://prp.ifsp.edu.br/","email":"profeptifsp@ifsp.edu.br" },
	{ "sigla": 'IF SUDESTE MG',"campus":"Campus Rio Pomba","coordenador":"Paula Reis de Miranda","endereco":"Avenida Doutor José Sebastião da Paixão, s/n Bairro: Lindo Vale – CEP: 36180-000 – Rio Pomba/ MG", "codEstado": '31', "site": "","email":"profept@ifsudestemg.edu.br" },
	{ "sigla": 'IFSUL',"campus":"Campus Charqueadas","coordenador":"Luciana Neves Loponte","endereco":"Rua Gen. Balbão, 81 - CEP 99745-000 – Charqueadas/RS", "codEstado": '43', "site": "","email":"profeptifsul@charquedas.ifsul.edu.br" },
	{ "sigla": 'IFSULDEMINAS',"campus":"Campus Poços de Caldas","coordenador":"Lorena Temponi Boechat","endereco":"Avenida Dirce Pereira Rosa, 300 Bairro:Jardim Esperança - CEP 37713-100 - Poços de Caldas", "codEstado": '31', "site": "","email":"profept@ifsuldeminas.edu.br" },
	{ "sigla": 'IFTM',"campus":"Campus Avançado Uberaba Parque Tecnológico","coordenador":"Paula Nakamoto","endereco":"Av. Doutor Florestan Fernandes, 131 - Bairro: Universidade - CEP: 38064-190 – Uberaba/MG", "codEstado": '31', "site": "","email":"profeptiftm@iftm.edu.br" },
	{ "sigla": 'IFTO',"campus":"Campus Palmas","coordenador":"Jair José Maldaner","endereco":"Quadra 310 Sul, Avenida LO 05, s/n, Plano Diretor Sul – CEP: 77.021-090 - Palmas/TO", "codEstado": '17', "site": "","email":"profeptifto@ifto.edu.br" }
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
			// RESET
			var myAccordion = document.getElementById("containerBodyModal");
			myAccordion.innerHTML="";

			//CTRL+C
			let  template = document.getElementById("accordionTemplate").cloneNode(true);
			template.id=template.id+"1";
			template.style.display = "block";
			//CTRL+V
			document.getElementById("containerBodyModal").appendChild(template);


			


			let cont = 0;
			for (let i = 0; i < instituicoesJSON.length; i++)
			{
				var instituicao = instituicoesJSON[i];
				if(instituicao.codEstado==codEstado)
				{
					cont++;

					//CTRL+C
					let  templateLi = document.getElementById("elementAccordeon").cloneNode(true);
					templateLi.style.display = "block";
					//CTRL+V
					document.getElementById("accordionTemplate1").appendChild(templateLi);


					let sigla = templateLi.getElementsByClassName("sigla")[0];
					sigla.innerHTML = instituicoesJSON[i].sigla;

					let campus = templateLi.getElementsByClassName("campus")[0];
					campus.innerHTML =instituicoesJSON[i].campus;

					
					let coordenador = templateLi.getElementsByClassName("coordenador")[0];
					coordenador.innerHTML = instituicoesJSON[i].coordenador;
					
					let endereco = templateLi.getElementsByClassName("endereco")[0];
					endereco.innerHTML = instituicoesJSON[i].endereco;
					
					let email = templateLi.getElementsByClassName("email")[0];
					email.innerHTML = instituicoesJSON[i].email;
				
				}
			}
			
			if(cont==1){
				jQuery("#accordionTemplate1").accordionjs({activeIndex : 1});
			}else{
				jQuery("#accordionTemplate1").accordionjs({activeIndex : false});
			}

	
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

