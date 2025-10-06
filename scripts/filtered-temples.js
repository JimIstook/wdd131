const temples = [
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, USA",
        dedicated: 1893,
        area: 382207,
        imgSource: "images/filtered-temples/salt-lake-temple.webp"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, USA",
        dedicated: 1846,
        area: 54000,
        imgSource: "images/filtered-temples/nauvoo-utah.webp"
    },
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: 2005,
        area: 11500,
        imgSource: "images/filtered-temples/aba-nigeria.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: 1888,
        area: 74792,
        imgSource: "images/filtered-temples/manti-utah.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: 2015,
        area: 96630,
        imgSource: "images/filtered-temples/payson-utah.webp"
    },
    {
        templeName: "Portland Oregon Temple",
        location: "Portland, Oregon, USA",
        dedicated: 1989,
        area: 80500,
        imgSource: "images/filtered-temples/portland-oregon-temple.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: 1974,
        area: 156558,
        imgSource: "images/filtered-temples/dc-temple.webp"
    },
    {
        templeName: "Grand Rapids",
        location: "Grand Rapids, Michigan, USA",
        dedicated: 2024,
        area: 20123,
        imgSource: "images/filtered-temples/grand-rapids-michigan.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: 1983,
        area: 116642,
        imgSource: "images/filtered-temples/mexico-city.webp"
    }
];

const galleryEl = document.getElementById("gallery");
const titleEl = document.getElementById("main-title");

function makeCard(t) {
    const fig = document.createElement("figure");
    fig.className = "card";

    const img = document.createElement("img");
    img.loading = "lazy";
    img.width = 600;
    img.height = 400;
    img.src = t.imgSource;
    img.alt = `${t.templeName} Temple - ${t.location}`;
    img.classList.add("fade");

    const cap = document.createElement("figcaption");
    cap.innerHTML = `
    <strong>${t.templeName}</strong>
    <span class="card-description">${t.location}</span>
    <span class="card-description">Dedicated: ${t.dedicated} | Area: ${t.area.toLocaleString()} ft²</span>
    `;

    fig.append(img, cap);
    return fig;
}

function render(list, label = "Home") {
    galleryEl.innerHTML = "";
    titleEl.textContent = label;
    list.forEach(t => galleryEl.appendChild(makeCard(t)));

    observeImages();
}

const filters = {
    home: () => temples,
    old: () => temples.filter(t => t.dedicated < 1900),
    new: () => temples.filter(t => t.dedicated > 2000),
    large: () => temples.filter(t => t.area >= 90000),
    small: () => temples.filter(t => t.area < 10000)
};

document.getElementById("primary-nav").addEventListener("click", (e) => {
    const link = e.target.closest("a[data-filter]");
    if (!link) return;
    e.preventDefault();

    document.querySelectorAll("#primary-nav a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    const key = link.dataset.filter;
    render(filters[key](), link.textContent.trim());
});

const menuBtn = document.getElementById("menu");
const nav = document.getElementById("primary-nav");

function toggleMenu() {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuBtn.textContent = isOpen ? "✕" : "☰";
}

menuBtn.addEventListener("click", toggleMenu);

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;

function observeImages() {
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll(".gallery img").forEach(img => {
        observer.observe(img);
    });
}

render(temples, "Home");