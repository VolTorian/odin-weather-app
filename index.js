const api = "CRPB2EX2LBDSGYUZNHK3LM27N";

const cityInput = document.getElementById("city-form");
const form = document.querySelector("form");
const responseTime = document.getElementById("response-time");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
form.onsubmit = getWeather;

async function getWeather() {
    let city = cityInput.value;
    city = city.replace(/ /g, "%20");

    try {

        let time = Date.now();
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${api}&contentType=json`);
        time = Date.now() - time;
        let data = await response.json();
        console.log(data);
        responseTime.textContent = `Response time: ${time} ms`;
        temperature.textContent = `Temperature: ${data.currentConditions.temp} Fahrenheit`;
        description.textContent = data.description;
    }
    catch {
        console.log("invalid location")
        description.textContent = "Invalid location";
    }
}