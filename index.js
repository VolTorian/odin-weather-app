const api = "CRPB2EX2LBDSGYUZNHK3LM27N";

console.log(document.querySelector("h1").textContent);

async function getWeather() {
    let city = prompt("Enter the name of a city:");
    city = city.replace(/ /g, "%20");

    let data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${api}&contentType=json`);
    console.log(await data.json());
}