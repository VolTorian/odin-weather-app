const api = "CRPB2EX2LBDSGYUZNHK3LM27N";

const cityInput = document.getElementById("city-form");
const form = document.querySelector("form");
const responseTime = document.getElementById("response-time");
const interpretedLocation = document.getElementById("location");
const today = document.getElementById("today");
const days = document.getElementById("days");
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
        interpretedLocation.textContent = `Interpreted location: ${data.resolvedAddress}`

        today.textContent = "";
        days.textContent = "";
        const todayTemperature = document.createElement("div");
        todayTemperature.textContent = `Current temperature: ${data.currentConditions.temp}`
        today.appendChild(todayTemperature);

        buildDays(data);
    }
    catch (e) {
        console.log(e)
    }
}

function buildDays(data) {
    for (let i = 1; i < 7; i++) {
        const day = document.createElement("div");
        const date = document.createElement("div");
        date.textContent = `Date: ${data.days[i].datetime}`
        const dayTemperature = document.createElement("div");
        dayTemperature.textContent = `Temperature range: ${data.days[i].tempmin} - ${data.days[i].tempmax}`

        day.append(date, dayTemperature);
        days.append(day);
    }
}