function Converter(){
    const valorElemento = document.querySelector("#valor")
    let valor = valorElemento.value

    let conversao = (valor * 0,036).toFixed(1)

    valor = parseFloat(valor)
    conversao = parseFloat(conversao)


   const elementoPai = document.body 
   const elementoFilho = document.createElement("p")
   const  resposta = document.createTextNode(valor + " reais é igual a " + conversao + " pesos argentinos.")

   elementoFilho.appendChild(resposta)
   elementoPai.appendChild(elementoFilho);

   return resposta
}