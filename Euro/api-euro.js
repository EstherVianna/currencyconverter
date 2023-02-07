const request = require("request");
const moeda = "EUR-BRL";

const options = {
    url:`https://economia.awesomeapi.com.br/json/last/${moeda}`,
    method:"GET",
    headers:{
        accept: "application/json",
        acceptCharset: "utf-8"
    }
}

const callback = (erro, response, body) => {
    let json = JSON.parse(body);
    console.log(json);
}

request(options, callback)