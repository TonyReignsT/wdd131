const yearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();
yearElement.innerHTML = `<span class="highlight">${currentYear}</span>`;

lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;



yearElement.innerHTML = `<span class="highlight">${currentYear}</span>`;

lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

// Wind Chill Calculation (Metric: °C, km/h)
function calculateWindChill(tempC, windKmh) {
  // Wind chill formula for Celsius and km/h
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

// Static values matching your weather section
const temperature = 25; // °C
const windSpeed = 15; // km/h

const windChillElement = document.getElementById("windChill");

// Only calculate wind chill if temp <= 10°C and wind > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(
    temperature,
    windSpeed
  )} °C`;
} else {
  windChillElement.textContent = " N/A";
}