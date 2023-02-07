function Converter(){
    const valorElemento = document.querySelector("#valor")
    let valor = valorElemento.value

    let conversao = (valor * 0.0000092).toFixed(8)

    valor = parseFloat(valor)
    conversao = parseFloat(conversao)


   const elementoPai = document.body 
   const elementoFilho = document.createElement("p")
   const  resposta = document.createTextNode(valor + " reais é igual a " + conversao + " bitcoin(s).")

   elementoFilho.appendChild(resposta)
   elementoPai.appendChild(elementoFilho);

   return resposta
}