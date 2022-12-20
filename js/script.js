var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value;
  
    // Dividir o texto em um array de strings com 18 caracteres cada
    var resultCripto = texto.match(/.{1,18}/g);
  
    // Juntar as strings com o caractere de quebra de linha
    resultCripto = resultCripto.join("\n");
  
    // Substituir as letras 'a', 'b', 'c' e 'e' pelos respectivos caracteres
    resultCripto = resultCripto.replace(/a/g, "@").replace(/b/g , "&").replace(/c/g , "¢").replace(/e/g , "#");
  
    // Atualizar o conteúdo da textarea com o resultado da criptografia
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
  }
  
  function descriptografar() {
    // O processo para a função descriptografar é o mesmo, basta substituir os caracteres pelas letras originais
    var texto = textInput.value;
    var resultDescripto = texto.match(/.{1,18}/g);
    resultDescripto = resultDescripto.join("\n");
    resultDescripto = resultDescripto.replace(/@/g, "a").replace(/&/g , "b").replace(/¢/g , "c").replace(/#/g , "e");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
  }
  
function copiar(){
    var textoCop = document.getElementById("input-texto");

    textoCop.select();
    document.execCommand('Copy');
    alert("Texto Copiado");
}
