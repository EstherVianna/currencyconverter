function Converter(){
    const valorElemento = document.querySelector("#valor")
    let valor = valorElemento.value

    let conversao = (valor * 0,036).toFixed(1)

    valor = parseFloat(valor)
    conversao = parseFloat(conversao)

    if(valor> 0 ){
        const elementoPai = document.querySelector(".container");
        let elementoFilho = document.createElement("input");
        const  resposta = `${valor} euros é igual a ${conversao} reais`;
        elementoFilho.id = "valor";
        elementoFilho.setAttribute("disabled", null);
        elementoPai.appendChild(elementoFilho);
        elementoFilho.value = resposta;
     
        resposta;
        
    setTimeout(()=>{
         let counter = 0;
         window.location.reload()
         window.open(`A tela irá reiniciar em ${ counter++ }`)}, 20000); 
    }
     else{
         alert(`Insira um valor válido`)
     }
}