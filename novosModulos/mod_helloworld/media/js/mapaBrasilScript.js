document.addEventListener('DOMContentLoaded', (event) => {
(function () {
      var states = document.getElementsByClassName("estado");
      for (var i = 0; i < states.length; i++) {

        states[i].onclick = function () {
          let codigoEstado = this.getAttribute('code');
          let nomeEstado = this.getAttribute('name');

          abreModal(nomeEstado, codigoEstado);
        }
      }

    })();

    function abreModal(nomeEstado, codigoEstado) {
      {
        let strInstituicoes ="";
        for (var i = 0; i < instituicoesJSON.length; i++) {
          var instituicao = instituicoesJSON[i];
          if(instituicao.codEstado==codigoEstado){
            strInstituicoes+=instituicao.nome+"\n";
          }
        }

        if(strInstituicoes==""){
          strInstituicoes="não existem instituições nesse estado"
        }
        alert(nomeEstado + " " + codigoEstado+"\n\n"+strInstituicoes);
      }
    }

    var instituicoesJSON = [
      { "nome": 'ifes', "codEstado": '32', "site": "www.ifes.br" },
      { "nome": 'ifus', "codEstado": '32', "site": "www.ifus.br" },
      { "nome": 'ifmg', "codEstado": '31', "site": "www.ifesmg.br" },
      { "nome": 'ifba', "codEstado": '29', "site": "www.ifesba.br" }
    ]

})


 


