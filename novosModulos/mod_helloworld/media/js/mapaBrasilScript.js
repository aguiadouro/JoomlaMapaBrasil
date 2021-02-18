document.addEventListener
('DOMContentLoaded', (event) => 
	{
		(function ()
		 	{

				//ativa dropdown no twitter bootstrap
				jQuery('.dropdown-toggle').dropdown();
	
				//só chama essa parte quando todo o documento foi devidamente carregado
				
				var states = document.getElementsByClassName("estado");
				for (var i = 0; i < states.length; i++) {

					states[i].onclick = function () {
						let codigoEstado = this.getAttribute('code');
						let nomeEstado = this.getAttribute('name');

						abreModal(nomeEstado, codigoEstado);
					}
				}

			}
		)();

	    function abreModal(nomeEstado, codigoEstado) 
		{
	    	
			let strInstituicoes ="<h3>";
			for (var i = 0; i < instituicoesJSON.length; i++)
			{
				var instituicao = instituicoesJSON[i];
				if(instituicao.codEstado==codigoEstado)
				{
					strInstituicoes+=instituicao.nome+
					" <a href = 'mailto:"+
					instituicao.email+
					"'>"+instituicao.email+"</a><br/>";
				}
			}
			strInstituicoes=strInstituicoes+"</h3>"

			if(strInstituicoes=="<h3></h3>")
			{
				strInstituicoes="<h4>Não existem instituições nesse estado</h4>"
			}



			var tituloModal = document.getElementById("tituloModal");
			tituloModal.innerHTML=nomeEstado;

			var bodyModal = document.getElementById("bodyModal");
			bodyModal.innerHTML=strInstituicoes;
	
			jQuery("#myModal").modal("show");
			//alert(nomeEstado + " " + codigoEstado+"\n\n"+strInstituicoes);
		
	    }

	    var instituicoesJSON = [
	      { "nome": 'CEFET-MG', "codEstado": '31', "site": "", "email":"profept.cefetmg@gmail.com" },
	      { "nome": 'CP II', "codEstado": '33', "site": "","email":"secretariapos@cp2.g12.br" },
	      { "nome": 'IFAC', "codEstado": '12', "site": "","email":"profeptifac@ifac.edu.br" },
	      { "nome": 'IFAL', "codEstado": '27', "site": "","email":"profept@ifal.edu.br"},
	      { "nome": 'IFAM', "codEstado": '13', "site": "","email":"profeptifam@ifam.edu.br" },
	      { "nome": 'IFAP', "codEstado": '16', "site": "","email":"profeptifap@ifap.edu.br" },
	      { "nome": 'IFB', "codEstado": '53', "site": "","email":"profept@ifb.edu.br" },
	      { "nome": 'IFBA', "codEstado": '29', "site": "","email":"profeptifba@ifba.edu.br" },
	      { "nome": 'IF Baiano', "codEstado": '29', "site": "","email":"profept@catu.ifbaiano.edu.br" },
	      { "nome": 'IFC', "codEstado": '42', "site": "","email":"profeptifc@ifc.edu.br" },
	      { "nome": 'IFCE', "codEstado": '23', "site": "","email":"profeptifce@gmail.com" },
	      { "nome": 'IFES', "codEstado": '32', "site": "","email":"profept.ifes@gmail.com" },
	      { "nome": 'IFFAR', "codEstado": '43', "site": "","email":"profeptifce@ifce.edu.br" },
	      { "nome": 'IFFluminense', "codEstado": '33', "site": "","email":"profeptiff@iff.edu.br" },
	      { "nome": 'IFG', "codEstado": '52', "site": "","email":"profeptifg@ifg.edu.br" },
	      { "nome": 'IFGoiano', "codEstado": '52', "site": "","email":"profeptifgoaino@ifgoiano.edu.br" },
	      { "nome": 'IFMA', "codEstado": '21', "site": "","email":"profeptifma@ifma.edu.br" },
	      { "nome": 'IFMG', "codEstado": '31', "site": "","email":"profept.ifmg@ifmg.edu.br" },
	      { "nome": 'IFMS', "codEstado": '50', "site": "https://www.ifms.edu.br","email":"" },
	      { "nome": 'IFMT', "codEstado": '51', "site": "","email":"profept@cba.ifmt.edu.br" },
	      { "nome": 'IFNMG', "codEstado": '31', "site": "","email":"profept.ifnmg@gmail.com" },
	      { "nome": 'IFPA', "codEstado": '15', "site": "","email":"profept.ifpa@ifpa.edu.br" },
	      { "nome": 'IFPB', "codEstado": '25', "site": "https://www.ifpb.edu.br/","email":"profeptifpb@ifpb.edu.br" },
	      { "nome": 'IFPE', "codEstado": '26', "site": "https://portal.ifpe.edu.br/","email":"profept.mestrado@olinda.ifpe.edu.br" },
	      { "nome": 'IFPI', "codEstado": '22', "site": "","email":"profept.ifpi@ifpi.edu.br" },
	      { "nome": 'IFPR', "codEstado": '41', "site": "","email":"profept.curitiba@ifpr.edu.br" },
	      { "nome": 'IFRJ', "codEstado": '33', "site": "https://portal.ifrj.edu.br/","email":"profept.cmesq@ifrj.edu.br" },
	      { "nome": 'IFRN', "codEstado": '24', "site": "https://portal.ifrn.edu.br/","email":"profeptifrn@ifrn.edu.br" },
	      { "nome": 'IFRO', "codEstado": '11', "site": "https://portal.ifro.edu.br/","email":"profept.ifro@ifro.edu.br" },
	      { "nome": 'IFRR', "codEstado": '14', "site": "","email":"profept@ifrr.edu.br" },
	      { "nome": 'IFRS', "codEstado": '43', "site": "https://ifrs.edu.br","email":"profeptifrs@ifrs.edu.br" },
	      { "nome": 'IFS', "codEstado": '28', "site": "","email":"profetpifs@ifs.edu.br" },
	      { "nome": 'IFSC', "codEstado": '42', "site": "https://www.ifsc.edu.br/","email":"profeptifsc@ifsc.edu.br" },
	      { "nome": 'IF Sertão-PE', "codEstado": '26', "site": "","email":"profeptifsertaope@ifsertao-pe.edu.br" },
	      { "nome": 'IFSP', "codEstado": '35', "site": "https://prp.ifsp.edu.br/","email":"profeptifsp@ifsp.edu.br" },
	      { "nome": 'IF SUDESTE MG', "codEstado": '31', "site": "","email":"profept@ifsudestemg.edu.br" },
	      { "nome": 'IFSUL', "codEstado": '43', "site": "","email":"profeptifsul@charquedas.ifsul.edu.br" },
	      { "nome": 'IFSULDEMINAS', "codEstado": '31', "site": "","email":"profept@ifsuldeminas.edu.br" },
	      { "nome": 'IFTM', "codEstado": '31', "site": "","email":"profeptiftm@iftm.edu.br" },
	      { "nome": 'IFTO', "codEstado": '17', "site": "","email":"profeptifto@ifto.edu.br" }
		]
		
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

