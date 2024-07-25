const convertButton = document.querySelector(".converter-button")   // CAPTURA DO BOTÃO
const selectCurrency = document.querySelector(".select-currency-converted")     // CAPTURA DE SELECT
const convertedValue = document.querySelector(".converted-value")

// FUNÇÃO CLICK
function clickOnTheConvertButton() {
    const valueToConvert = document.querySelector(".converter-value")   // CAPTURA DO PARÁGRAFO A SER SUBSTITUIDO
    const convertInput = document.querySelector(".input-label").value    // CAPTURA DO VALOR DO INPUT

    const dolarToday = 5.65 // VALOR DO DOLAR HOJE
    const euroToday = 6.13 // VALOR DO EURO
    const bitcoinToday = 363107.75  // VALOR DO BICOIN

    
// VALOR DIGITADO NO INPUT APARECE NA MOEDA CORRETA - JÁ FORMATADO
    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(convertInput)

    // VALOR DIGITADO NO INPUT CONVERTIDO PARA UMA DETERMINADA MOEDA
    if (selectCurrency.value == "dolar") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertInput / dolarToday)
    }

    if (selectCurrency.value == "euro") {
        convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertInput / euroToday)
    }

    if (selectCurrency.value == "bitcoin") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "BTC"
        }).format(convertInput / bitcoinToday)
    }


}
    // FUNÇÃO CHANGE
function changeCurrency() {
    const convertedCurrencyName = document.querySelector(".converted-name")
    const convertedImage = document.querySelector (".converted-image")

    if(selectCurrency.value == "dolar"){
        convertedCurrencyName.innerHTML = "Dólar Americano"
        convertedImage.src ="./assets/dolar.webp" 


    }

    if(selectCurrency.value == "euro"){
        convertedCurrencyName.innerHTML = "Euro"
        convertedImage.src ="./assets/euro.gif" 

    }

    if(selectCurrency.value == "bitcoin"){
        convertedCurrencyName.innerHTML = "BitCoin"
        convertedImage.src ="./assets/bitcoin.gif" 

    }

    clickOnTheConvertButton()   // FUNÇÃO CLICK
    
}

convertButton.addEventListener("click", clickOnTheConvertButton) // CLIQUE NO BOTÃO
selectCurrency.addEventListener("change", changeCurrency)        // ESCOLHA DA MOEDA CONVERTIDA


