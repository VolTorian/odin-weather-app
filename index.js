const api = "CRPB2EX2LBDSGYUZNHK3LM27N";

const cityInput = document.getElementById("city-form");
const form = document.querySelector("form");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
form.onsubmit = getWeather;

async function getWeather() {
    let city = cityInput.value;
    city = city.replace(/ /g, "%20");

    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${api}&contentType=json`);
    let data = await response.json();
    console.log(data.currentConditions.temp);
    console.log(data.description);
    temperature.textContent = `Temperature: ${data.currentConditions.temp} Fahrenheit`;
    description.textContent = data.description;
}