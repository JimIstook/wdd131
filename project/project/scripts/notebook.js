const pForm = document.getElementById("poetry-form");
const notebookGrid = document.getElementById("notebook-grid");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const poemInput = document.getElementById("poem-input");

let poems = JSON.parse(localStorage.getItem("poems")) || [];

function makeCard(p) {
    const card = document.createElement("div");
    card.className = "poem-card";

    const title = document.createElement("h3");
    title.className = "poem-title";
    title.textContent = p.poemTitle;

    const author = document.createElement("p");
    author.className = "poem-author";
    author.textContent = `by ${p.poemAuthor}`;

    const poem = document.createElement("p");
    poem.className = "note-poem";
    poem.textContent = p.poemContent;

    card.append(title, author, poem);
    return card;
}

pForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const newPoem = {
        poemTitle: titleInput.value.trim(),
        poemAuthor: authorInput.value.trim(),
        poemContent: poemInput.value.trim()
    };

    poems.push(newPoem);
    localStorage.setItem("poems", JSON.stringify(poems));

    const card = makeCard(newPoem);
    notebookGrid.appendChild(card);

    pForm.reset();
});

window.addEventListener("DOMContentLoaded", () => {
    poems = JSON.parse(localStorage.getItem("poems")) || [];
    poems.forEach(p => {
        const card = makeCard(p);
        notebookGrid.appendChild(card);
    });
});