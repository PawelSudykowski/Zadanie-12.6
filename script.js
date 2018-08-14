//  TEN ADRES JEST WADLIWY - ZWRACA BŁĄD 404
var url = 'https://restcountries.eu/rest/v2/name/';

var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

// funkcja wyszukująca kraje
function searchCountries() 
{
    var countryName = document.getElementById('country-name').value;

    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
    .then(function(resp) 
    {
        return resp.json();
    })
    .then(showCountriesList);
}
// wyświetlanie listy państw
function showCountriesList(resp) 
{
    // czyści listę
    countriesList.innerHTML = '';

    resp.forEach(function(item)
    {
        // wyświetl kolejne Państwo
        var liEl = document.createElement('li');
        liEl.innerText = item.name;
        countriesList.appendChild(liEl);
    });
}

