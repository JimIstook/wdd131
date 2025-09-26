const currentYearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
const lastModifiedElement = document.getElementById("lastmodified");

if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}

const menuButton = document.getElementById("menu");
const nav = document.getElementById("primary-nav");

function toggleMenu() {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuButton.textContent = isOpen ? "✕" : "☰";
}

menuButton.addEventListener("click", toggleMenu);