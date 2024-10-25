const speakers = [
    { name: "Dr. Sara Khan", bio: "AI Ethics specialist at PIAIC with over 15 years in tech innovation.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo37rorafuk23c2hCzIDsbO3YJopgTouWbQg&s" },
    { name: "Ahmed Ali", bio: "Leading data scientist focusing on machine learning applications for PIAIC.", image: "https://media.licdn.com/dms/image/v2/D4D03AQHy2LNAH39XVQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724268925879?e=2147483647&v=beta&t=oELunZCW2cTbCdNk8qu_v4s4GKqrXu76Hqt-urIsoV4" },
    { name: "Zara Farooq", bio: "PIAIC instructor known for advancements in natural language processing.", image: "https://i.pinimg.com/originals/33/b2/d3/33b2d352cb03c6eca8df67af49cd5678.jpg" },
    { name: "Kamran Shahid", bio: "Cybersecurity expert ensuring secure AI infrastructure for PIAIC.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIretOXeqfP6ejOMkWnDloqc6YeBg-sYqtQQ&s" },
    { name: "Nida Rahim", bio: "Researcher specializing in computer vision applications within PIAIC.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kmBZENMwmNM7xcC-2p00hWZFWnm3jFMPSw&s" },
    { name: "Usman Qureshi", bio: "Developer and AI solutions architect contributing to PIAIC's smart systems.", image: "https://qph.cf2.quoracdn.net/main-qimg-713479e4e2c6036c23c0dcce34449e7d-lq" }
];

// function createSpeakerCards() {
//     const container = document.getElementById('speakers-container');

//     speakers.forEach(speaker => {
//         const colDiv = document.createElement('div');
//         colDiv.className = 'col-sm-6 mb-3 mb-sm-0 block';

//         const img = document.createElement('img');
//         img.src = speaker.image;
//         img.alt = speaker.name;
//         img.className = 'left_block';

//         const cardDiv = document.createElement('div');
//         cardDiv.className = 'card right_block';

//         const cardBody = document.createElement('div');
//         cardBody.className = 'card-body';

//         const cardTitle = document.createElement('h5');
//         cardTitle.className = 'card-title';
//         cardTitle.textContent = speaker.name;

//         const cardText = document.createElement('p');
//         cardText.className = 'card-text';
//         cardText.textContent = speaker.bio;

//         // Assemble the card
//         cardBody.appendChild(cardTitle);
//         cardBody.appendChild(cardText);
//         cardDiv.appendChild(cardBody);
//         colDiv.appendChild(img);
//         colDiv.appendChild(cardDiv);
//         container.appendChild(colDiv);
//     });
// }

// // Load speaker cards on page load
// window.onload = createSpeakerCards;
let displayedSpeakers = 2; // Initially showing 2 speakers
let isShowingAll = false; // Track whether all speakers are shown

function createSpeakerCard(speaker) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-sm-6 mb-3 mb-sm-0 block';

    const img = document.createElement('img');
    img.src = speaker.image;
    img.alt = speaker.name;
    img.className = 'left_block';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card right_block';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = speaker.name;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = speaker.bio;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardDiv.appendChild(cardBody);
    colDiv.appendChild(img);
    colDiv.appendChild(cardDiv);

    return colDiv;
}

function displaySpeakers(count) {
    const container = document.getElementById('speakers-container');
    container.innerHTML = ''; // Clear container before adding new elements

    speakers.slice(0, count).forEach(speaker => {
        container.appendChild(createSpeakerCard(speaker));
    });
}

function toggleSpeakers() {
    const viewMoreBtn = document.getElementById('view-more-btn');
    
    if (isShowingAll) {
        displayedSpeakers = 2;
        viewMoreBtn.textContent = "View More";
    } else {
        displayedSpeakers = speakers.length;
        viewMoreBtn.textContent = "Show Less";
    }

    displaySpeakers(displayedSpeakers);
    isShowingAll = !isShowingAll; // Toggle the state
}

// Load initial 2 speakers on page load
window.onload = () => displaySpeakers(displayedSpeakers);
