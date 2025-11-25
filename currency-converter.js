const axios = require("axios");

// 1st function: getExchangeRate
const getExchangeRate = async (fromCurrency, toCurrency) => {
  const response = await axios.get(
    "http://data.fixer.io/api/latest?access_key=dd6cd3228c36c26e036050c6f547eec4&format=1"
  );

  const rate = response.data.rates;
//   console.log(rate);
  const fromCurrencyRate = 1 / rate[fromCurrency.toUpperCase()];
//   console.log(fromCurrencyRate);

  const exchangeCurrencyRate = fromCurrencyRate * rate[toCurrency.toUpperCase()];
//   console.log(exchangeCurrencyRate);

  if (isNaN(exchangeCurrencyRate)) {
    throw new Error(`Unable to get currency ${fromCurrency} and ${toCurrency}`);
  }
  return exchangeCurrencyRate;
};

// getExchangeRate('USD','INR');

//  2nd function: getCountries
const getCountries = async (toCurrency) => {
  try {
    const response = await axios.get("https://www.apicountries.com/countries/");

    const countries = response.data;

    const filtered = countries
      .filter(
        (country) =>
          country.currencies &&
          country.currencies.some(
            (curr) => curr.code === toCurrency.toUpperCase()
          )
      )
      .map((country) => country.name);
    // console.log(filtered);
    return filtered;
  } catch (error) {
    throw new Error(`Unable to get countries that use : ${toCurrency}`);
  }
};

// getCountries("USD");

// 3rd function: convertCurrency
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    const countries = await getCountries(toCurrency);
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return `${amount} ${fromCurrency.toUpperCase()} is worth ${convertedAmount} ${toCurrency.toUpperCase()}. You can spend these in the following countries: ${countries.join(', ')}`;
}

// Call the convertCurrency function

convertCurrency('Pkr', 'INR', 10)
.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error.message);
});