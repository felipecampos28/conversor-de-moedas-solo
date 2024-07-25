const convertButton = document.querySelector(".converter-button")   // CAPTURA DO BOTÃO
const selectCurrency = document.querySelector(".select-currency-converted")     // CAPTURA DE SELECT

function clickOnTheConvertButton() {
    const valueToConvert = document.querySelector(".converter-value")   // CAPTURA DO PARÁGRAFO A SER SUBSTITUIDO
    const convertInput = document.querySelector(".input-label").value    // CAPTURA DO VALOR DO INPUT

    const dolarToday = 5.65 // VALOR DO DOLAR HOJE
    const euroToday = 6.13 // VALOR DO EURO
    const bitcoinToday = 363107.75  // VALOR DO BICOIN

    const convertedValue = document.querySelector(".converted-value")

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(convertInput)

    if (selectCurrency == "dolar") {

        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertInput / dolarToday)
    }
}

convertButton.addEventListener("click", clickOnTheConvertButton)


