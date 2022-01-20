const button = document.getElementById('convert-button')
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000042

const convertValues = () => {
    const inputReais = document.getElementById('input-reaL').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValuesText = document.getElementById('currency-value-text')


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if(select.value === "US$ Dólar americano") {
        currencyValuesText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputReais / dolar)
    }

    if(select.value === "€ Euro") {
        currencyValuesText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }
    ).format(inputReais / euro)
    }

    if(select.value === "Bitcoin"){
        currencyValuesText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'BTC' }
    ).format(inputReais / bitcoin)
    }
    
}


chanceCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/eua.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()
}


button.addEventListener("click", convertValues)
select.addEventListener("change", chanceCurrency)

