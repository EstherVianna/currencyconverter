function Convert() {
    const coins = [
      "EUR-BRL",
      "USD-BRL",
      "BTC-BRL",
      "ARS-BRL",
      "GBP-BRL"
    ];
    const url = "https://economia.awesomeapi.com.br/json/last/";
    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      }
  
    fetch(url + coins)
      .then(function(response) {
        if (!response.ok) {
          throw new Error("Erro ao obter dados da API: " + response.statusText);
        }
        return response.json();
      })
      .then(function(data) {
        const value = parseFloat(document.querySelector("#valor").value);

        if(value > 0 ){
        let pesoReal = data.ARSBRL;
        const currency = pesoReal.ask;
        const elementoPai = document.querySelector(".container");
        const elementoFilho = document.createElement("input");
        const resposta = `${value} pesos argentinos é igual a ${formatCurrency(value * currency)} reais`;

        elementoFilho.id = "resultado";
  
        elementoFilho.setAttribute("disabled", null);
  
        elementoPai.appendChild(elementoFilho);
  
        elementoFilho.value = resposta;
        
        const paragraph = document.createElement("p");
        paragraph.id = "date"
        const date =  new Date (pesoReal.create_date);

        const LastUpdate = paragraph.innerHTML =
                         `Última atualização ${date.toLocaleString()}`;

        elementoPai.appendChild(paragraph);

        return resposta, LastUpdate;
      
      }
      else{
        alert(`Insira um valor válido`)}
    })
      .catch(function(error) {
        console.error(error.message);
      });

      setTimeout(() => {
        document.querySelector("#resultado").remove();
        document.querySelector("#date").remove();
        document.querySelector("#valor").value = "";
      }, 30000);
}