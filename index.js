function currencyPage(){
    const options = document.querySelector(".options");

    if(options.value == "btc"){
        window.location.assign("Bitcoin/bitcoin.html");
    }
    else if(options.value == "dolar"){
        window.location.assign("Dolar/dolar.html");
    }
    else if(options.value == "euro"){
        window.location.assign("Euro/euro.html");
    }
    else if(options.value == "libra"){
        window.location.assign("Libra/libra.html");
    }
    else if(options.value == "peso"){
        window.location.assign("Peso/peso.html");
    }
   

}