const wordInput = document.getElementById("word-input");
const searchButton = document.getElementById("search-button");
const resultText = document.getElementById("result");

async function dictionaryFetch (word) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    return data;
}

function showDefinition (data) {
    resultText.textContent = data[0].meanings[0].definitions[0].definition;
}

async function searchClick () {
    const data = await dictionaryFetch("chair");
    showDefinition(data);
}

searchButton.addEventListener("click", searchClick);