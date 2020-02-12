const axios = require('axios');

axios.get("https://viacep.com.br/ws/12444011/json/")
.then(function(res) {


    const cep = res.data ; 
    if(cep.logradouro){

    
        console.log(`CEP`)
        console.log(`CEP : ${cep.cep}`);
        console.log(`Logradouro : ${cep.logradouro}`);
        console.log(`Bairro : ${cep.bairro}`);
        console.log(`Localidade: ${cep.localidade}`);
        console.log(`Complemento : ${cep.complemento || "Não possui"}`) // o || faz mostrar o texto nao possui caso o endereço nao tenha complemento
        console.log(`Uf : ${cep.uf}`);
        console.log(`Unidade: ${cep.unidade || "Não informado"}`);
        console.log(`IBGE : ${cep.ibge}`);
        console.log(`Gia : ${cep.gia}`)
        console.log( "-------");
    } 
    else {
        console.log(cep.cep);
        console.log(cep.localidade);
        console.log(cep.uf);
    }

}); 
