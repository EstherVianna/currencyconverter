function Converter(){
    const valorElemento = document.querySelector("#valor")
    let valor = valorElemento.value

    let conversao = (valor * 5.16).toFixed(2)

    valor = parseFloat(valor)
    conversao = parseFloat(conversao)


   const elementoPai = document.body 
   const elementoFilho = document.createElement("p")
   const  resposta = document.createTextNode(valor + " reais é igual a " + conversao + " dolár(es).")

   elementoFilho.appendChild(resposta)
   elementoPai.appendChild(elementoFilho);

   return resposta
}