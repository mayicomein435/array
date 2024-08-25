// Get all the countries from Asia continent /region using Filter method
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const asianCountries = data.filter(country => country.region === 'Asia');
    console.log('Countries in Asia:', asianCountries);
  })
  .catch(error => console.error('Error:', error));

// Get all the countries with a population of less than 2 lakhs using Filter method
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);
  })
  .catch(error => console.error('Error:', error));

// Print the following details name, capital, flag, using forEach method
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital?.[0] || 'N/A'}, Flag: ${country.flags?.png || 'N/A'}`);
    });
  })
  .catch(error => console.error('Error:', error));

// Print the total population of countries using reduce method
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((sum, country) => sum + country.population, 0);
    console.log('Total Population:', totalPopulation);
  })
  .catch(error => console.error('Error:', error));

// Print the country that uses US dollars as currency.
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const usdCountries = data.filter(country => country.currencies && country.currencies.USD);
    console.log('Countries using USD as currency:', usdCountries);
  })
  .catch(error => console.error('Error:', error));

