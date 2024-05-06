const rubInput = document.querySelector('#rub')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')
const cnyInput = document.querySelector('#cny')
const startBtn = document.querySelector('#start')
const rubVal = document.querySelector('#rub_value')
const usdVal = document.querySelector('#usd_value')
const eurVal = document.querySelector('#eur_value')
const cnyVal = document.querySelector('#cny_value')

const getData = async(url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}`)
    } else {
        return await response.json()
    }
}

startBtn.addEventListener('click', () => {
    getData('https://www.cbr-xml-daily.ru/latest.js')
        .then((courses) => {
            rubVal.textContent = `RUB: ${(rubInput.value)} ₽`
            usdVal.textContent = `USD: ${(rubInput.value * courses.rates.USD).toFixed(2)} $`
            eurVal.textContent = `EUR: ${(rubInput.value * courses.rates.EUR).toFixed(2)} €`
            cnyVal.textContent = `CNY: ${(rubInput.value * courses.rates.CNY).toFixed(2)} ¥`

            rubVal.textContent = `RUB: ${(usdInput.value / courses.rates.USD).toFixed(2)} ₽`
            usdVal.textContent = `USD: ${usdInput.value} $`
            eurVal.textContent = `EUR: ${(usdInput.value * courses.rates.EUR).toFixed(2)} €`
            cnyVal.textContent = `CNY: ${(usdInput.value * courses.rates.CNY).toFixed(2)} ¥`

            rubVal.textContent = `RUB: ${(eurInput.value / courses.rates.EUR).toFixed(2)} ₽`
            usdVal.textContent = `USD: ${(eurInput.value * courses.rates.USD).toFixed(2)} $`
            eurVal.textContent = `EUR: ${eurInput.value} €`
            cnyVal.textContent = `CNY: ${(eurInput.value * courses.rates.CNY).toFixed(2)} ¥`

            rubVal.textContent = `RUB: ${(cnyInput.value / courses.rates.CNY).toFixed(2)} ₽`
            usdVal.textContent = `USD: ${(cnyInput.value * courses.rates.USD).toFixed(2)} $`
            eurVal.textContent = `EUR: ${(cnyInput.value * courses.rates.EUR).toFixed(2)} €`
            cnyVal.textContent = `CNY: ${cnyInput.value} ¥`
        })
})