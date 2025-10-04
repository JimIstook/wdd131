const currentYearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
const lastModifiedElement = document.getElementById("lastmodified");

if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}

const temperatureC = 7;
const windSpeedKmh = 8;

document.getElementById("temperature").textContent = temperatureC;
document.getElementById("wind-speed").textContent = windSpeedKmh;

const calculateWindChill = (t, v) => 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);

let wc = "N/A";
if (temperatureC <= 10 && windSpeedKmh > 4.8) wc = `${Math.round(calculateWindChill(temperatureC, windSpeedKmh))} °C`;
document.getElementById("windchill").textContent = wc;