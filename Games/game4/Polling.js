
const options = document.querySelectorAll('.option');
const resultsList = document.getElementById('resultsList');

let votes = {
    JavaScript: 0,
    Python: 0,
    Java: 0,
    'C++': 0
};

options.forEach(option => {
    option.addEventListener('click', () => {
        const selectedOption = option.getAttribute('data-value');
        votes[selectedOption]++;
        updateResults();
    });
});

function updateResults() {
    resultsList.innerHTML = '';
    for (const [option, count] of Object.entries(votes)) {
        const li = document.createElement('li');
        li.textContent = `${option}: ${count} votes`;
        resultsList.appendChild(li);
    }
}


updateResults();