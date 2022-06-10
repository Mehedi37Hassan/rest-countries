const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
const displayCountries = (countries) => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');


}
//-------------Destructing-------
// destructuring in parameter
const getCountryHTML = ({ flags, name, capital }) => {
    return `
        <div class="country">
            <img src="${flags.png}">
            <h2>Name: ${name.common}</h2>
            <h3>Capital: ${capital}</h3>      
                       
        </div>

    `
}

// Option 1
// const getCountryHTML = country => {
//     const { flags, name, capital } = country;
//     return `
//         <div class="country">
//             <img src="${flags.png}">
//             <h2>Name: ${name.common}</h2>
//             <h3>Capital: ${capital}</h3>      

//         </div>

//     `
// }
// Orginal 

// const getCountryHTML = country => {
//     return `
//         <div class="country">
//             <img src="${country.flags.png}">
//             <h2>Name: ${country.name.common}</h2>
//             <h3>Capital: ${country.capital}</h3>      

//         </div>

//     `
// }


loadCountries();

