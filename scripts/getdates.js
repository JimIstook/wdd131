const currentYearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
const lastModifiedElement = document.getElementById("lastmodified");

if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}