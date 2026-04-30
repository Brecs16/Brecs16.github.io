const characters = [
    {
        name: "Ada Lovelace",
        years: "1815-1852",
        gender: "F",
        field: "Matematica/Informatica",
        century: 19,
        alive: false,
        nobel: false,
        nationality: "Britannica",
        description: "Matematica britannica considerata la prima programmatrice della storia. Scrisse il primo algoritmo destinato a essere processato da una macchina."
    },
    {
        name: "Alan Turing",
        years: "1912-1954",
        gender: "M",
        field: "Matematica/Informatica",
        century: 20,
        alive: false,
        nobel: false,
        nationality: "Britannico",
        description: "Matematico e scienziato della computazione britannico, padre dell'informatica moderna. Creò la Macchina di Turing e decifrò il codice Enigma."
    },
    {
        name: "Albert Einstein",
        years: "1879-1955",
        gender: "M",
        field: "Fisica",
        century: 20,
        alive: false,
        nobel: true,
        nationality: "Tedesco",
        description: "Fisico teorico tedesco, autore della teoria della relatività. Premio Nobel per la Fisica nel 1921."
    },
    {
        name: "Bill Gates",
        years: "1955-presente",
        gender: "M",
        field: "Informatica",
        century: 20,
        alive: true,
        nobel: false,
        nationality: "Statunitense",
        description: "Cofondatore di Microsoft, pioniere nello sviluppo di software personale. Attualmente dedito alla filantropia."
    },
    {
        name: "Charles Darwin",
        years: "1809-1882",
        gender: "M",
        field: "Biologia",
        century: 19,
        alive: false,
        nobel: false,
        nationality: "Britannico",
        description: "Naturalista britannico che sviluppò la teoria dell'evoluzione per selezione naturale."
    },
    {
        name: "Elon Musk",
        years: "1971-presente",
        gender: "M",
        field: "Ingegneria/Tecnologia",
        century: 20,
        alive: true,
        nobel: false,
        nationality: "Sudafricano-Statunitense",
        description: "Imprenditore e ingegnere. Fondatore di SpaceX, Tesla, Neuralink. Promotore dell'esplorazione spaziale e dei veicoli elettrici."
    },
    {
        name: "Galileo Galilei",
        years: "1564-1642",
        gender: "M",
        field: "Astronomia/Fisica",
        century: 17,
        alive: false,
        nobel: false,
        nationality: "Italiano",
        description: "Astronomo, fisico e matematico italiano. Padre della scienza moderna, migliorò il telescopio e difese l'eliocentrismo."
    },
    {
        name: "Grace Hopper",
        years: "1906-1992",
        gender: "F",
        field: "Informatica",
        century: 20,
        alive: false,
        nobel: false,
        nationality: "Statunitense",
        description: "Scienziata della computazione e ammiraglio della Marina. Pioniera nella programmazione, sviluppò il primo compilatore e contribuì al linguaggio COBOL."
    },
    {
        name: "Hedy Lamarr",
        years: "1914-2000",
        gender: "F",
        field: "Tecnologia/Ingegneria",
        century: 20,
        alive: false,
        nobel: false,
        nationality: "Austriaca-Statunitense",
        description: "Attrice e inventrice. Co-sviluppò un sistema di comunicazione a salto di frequenza, tecnologia precursore del WiFi e Bluetooth."
    },
    {
        name: "Isaac Newton",
        years: "1643-1727",
        gender: "M",
        field: "Fisica/Matematica",
        century: 17,
        alive: false,
        nobel: false,
        nationality: "Inglese",
        description: "Fisico e matematico inglese. Formulò le leggi del moto e della gravitazione universale, sviluppò il calcolo matematico."
    },
    {
        name: "Katherine Johnson",
        years: "1918-2020",
        gender: "F",
        field: "Matematica",
        century: 20,
        alive: false,
        nobel: false,
        nationality: "Statunitense",
        description: "Matematica afroamericana della NASA il cui lavoro fu cruciale per i primi voli spaziali statunitensi, incluso il programma Apollo."
    },
    {
        name: "Leonardo da Vinci",
        years: "1452-1519",
        gender: "M",
        field: "Arte/Scienza",
        century: 15,
        alive: false,
        nobel: false,
        nationality: "Italiano",
        description: "Poliedrico del Rinascimento italiano: pittore, inventore, scienziato, architetto. Creatore della Monna Lisa e dell'Uomo Vitruviano."
    },
    {
        name: "Lise Meitner",
        years: "1878-1968",
        gender: "F",
        field: "Fisica",
        century: 20,
        alive: false,
        nobel: false,
        nationality: "Austriaca",
        description: "Fisica austriaca che contribuì significativamente alla scoperta della fissione nucleare, anche se il Nobel fu assegnato solo al suo collega Otto Hahn."
    },
    {
        name: "Marie Curie",
        years: "1867-1934",
        gender: "F",
        field: "Fisica/Chimica",
        century: 19,
        alive: false,
        nobel: true,
        nationality: "Polacca-Francese",
        description: "Fisica e chimica. Prima donna a vincere un Premio Nobel e unica persona a vincerlo in due scienze diverse (Fisica e Chimica). Pioniera nella radioattività."
    },
    {
        name: "Mark Zuckerberg",
        years: "1984-presente",
        gender: "M",
        field: "Informatica",
        century: 20,
        alive: true,
        nobel: false,
        nationality: "Statunitense",
        description: "Programmatore e imprenditore statunitense, cofondatore e CEO di Meta (Facebook). Rivoluzionò i social network e la comunicazione digitale."
    },
    {
        name: "Maryam Mirzakhani",
        years: "1977-2017",
        gender: "F",
        field: "Matematica",
        century: 20,
        alive: false,
        nobel: false,
        nationality: "Iraniana",
        description: "Matematica iraniana, prima donna a ricevere la Medaglia Fields (il 'Nobel della matematica') per il suo lavoro in geometria e sistemi dinamici."
    },
    {
        name: "Nikola Tesla",
        years: "1856-1943",
        gender: "M",
        field: "Ingegneria/Fisica",
        century: 19,
        alive: false,
        nobel: false,
        nationality: "Serbo-Statunitense",
        description: "Inventore e ingegnere. Pioniere nella corrente alternata, elettromagnetismo e tecnologie wireless. Visionario in anticipo sui tempi."
    },
    {
        name: "Rita Levi-Montalcini",
        years: "1909-2012",
        gender: "F",
        field: "Biologia/Medicina",
        century: 20,
        alive: false,
        nobel: true,
        nationality: "Italiana",
        description: "Neurobiologa italiana. Premio Nobel per la Medicina per aver scoperto il fattore di crescita nervoso (NGF)."
    },
    {
        name: "Rosalind Franklin",
        years: "1920-1958",
        gender: "F",
        field: "Chimica/Biologia",
        century: 20,
        alive: false,
        nobel: false,
        nationality: "Britannica",
        description: "Chimica e cristallografa britannica le cui immagini ai raggi X furono cruciali per scoprire la struttura del DNA."
    },
    {
        name: "Tim Berners-Lee",
        years: "1955-presente",
        gender: "M",
        field: "Informatica",
        century: 20,
        alive: true,
        nobel: false,
        nationality: "Britannico",
        description: "Scienziato della computazione britannico, inventore del World Wide Web (WWW). Creò il primo browser web, il primo server web e i protocolli HTTP e HTML."
    }
];
 
let possibleCharacters = [...characters];
let questionCount = 0;
 
const fixedQuestions = [
    {
        text: "Il personaggio è una donna?",
        filter: (char) => char.gender === "F",
        key: "gender_female"
    },
    {
        text: "Il personaggio è ancora vivo?",
        filter: (char) => char.alive === true,
        key: "alive"
    },
    {
        text: "Il personaggio ha vinto un Premio Nobel?",
        filter: (char) => char.nobel === true,
        key: "nobel"
    },
    {
        text: "Il personaggio lavora principalmente nel campo dell'informatica?",
        filter: (char) => char.field.includes("Informatica"),
        key: "computer_science"
    },
    {
        text: "Il personaggio lavora principalmente nel campo della fisica?",
        filter: (char) => char.field.includes("Fisica"),
        key: "physics"
    },
    {
        text: "Il personaggio lavora principalmente nel campo della matematica?",
        filter: (char) => char.field.includes("Matematica"),
        key: "mathematics"
    },
    {
        text: "Il personaggio lavora principalmente nel campo della biologia o medicina?",
        filter: (char) => char.field.includes("Biologia") || char.field.includes("Medicina") || char.field.includes("Chimica"),
        key: "biology"
    },
    {
        // FIX: century < 20 already covers all centuries before the 20th (1–19),
        // so the original "|| char.century === 19" was redundant and misleading.
        // A person born in the 19th century (1800s) has century === 19, which is < 20. Correct.
        text: "Il personaggio è nato prima del 1900?",
        filter: (char) => char.century < 20,
        key: "before_1900"
    },
    {
        text: "Il personaggio è di nazionalità statunitense (anche parzialmente)?",
        filter: (char) => char.nationality.includes("Statunitense"),
        key: "american"
    },
    {
        text: "Il personaggio è di nazionalità britannica o inglese?",
        filter: (char) => char.nationality.includes("Britannic") || char.nationality.includes("Inglese"),
        key: "british"
    },
    {
        text: "Il personaggio è di nazionalità italiana?",
        filter: (char) => char.nationality.includes("Italian"),
        key: "italian"
    }
];
 
let currentQuestion = null;
 
function showCharacterSelection() {
    const list = document.getElementById('characterList');
    list.innerHTML = characters.map((char, index) => `
        <div class="character-item">
            <div class="character-item-header">
                <strong>${index + 1}. ${char.name}</strong>
                <span class="character-item-meta">${char.years} &bull; ${char.field}</span>
            </div>
            <small>${char.description}</small>
        </div>
    `).join('');
 
    showScreen('selectionScreen');
}
 
function startGame() {
    possibleCharacters = [...characters];
    questionCount = 0;
    hideError();
    showScreen('questionScreen');
    askNextQuestion();
}
 
function askNextQuestion() {
    if (possibleCharacters.length === 1) {
        showResult(possibleCharacters[0]);
        return;
    }
 
    if (possibleCharacters.length === 0) {
        showError('Nessun personaggio corrisponde alle risposte. Riprova!');
        setTimeout(resetGame, 2500);
        return;
    }
 
    if (questionCount < fixedQuestions.length) {
        currentQuestion = fixedQuestions[questionCount];
    } else {
        const char = possibleCharacters[0];
        currentQuestion = {
            text: `Il personaggio è ${char.name}?`,
            filter: (c) => c.name === char.name,
            key: `specific_${char.name}`
        };
    }
 
    document.getElementById('questionText').textContent = currentQuestion.text;
    document.getElementById('questionCounter').textContent = `Domanda ${questionCount + 1}`;
}
 
function answerQuestion(answer) {
    questionCount++;
 
    if (answer) {
        possibleCharacters = possibleCharacters.filter(currentQuestion.filter);
    } else {
        possibleCharacters = possibleCharacters.filter(char => !currentQuestion.filter(char));
    }
 
    askNextQuestion();
}
 
function showResult(character) {
    document.getElementById('resultName').textContent = character.name;
    document.getElementById('resultInfo').innerHTML = `
        <p><strong>Anni:</strong> ${character.years}</p>
        <p><strong>Campo:</strong> ${character.field}</p>
        <p><strong>Nazionalità:</strong> ${character.nationality}</p>
        <p style="margin-top: 15px;">${character.description}</p>
    `;
    showScreen('resultScreen');
}
 
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}
 
function showError(msg) {
    const el = document.getElementById('errorMessage');
    el.textContent = msg;
    el.style.display = 'block';
}
 
function hideError() {
    const el = document.getElementById('errorMessage');
    if (el) el.style.display = 'none';
}
 
function resetGame() {
    hideError();
    showScreen('startScreen');
}