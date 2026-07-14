/* ==========================================================================
   JavaScript Interactions: Buildings of Kolkata
   ========================================================================== */

// 1. Buildings Database
const buildingsData = [
    {
        id: "victoria-memorial",
        name: "Victoria Memorial",
        style: "indosaracenic",
        styleLabel: "Indo-Saracenic",
        year: 1921,
        built: "1906–1921",
        architect: "William Emerson",
        location: "Queens Way, Maidan, Kolkata",
        image: "assets/hero.jpg",
        description: "The Victoria Memorial is a massive white marble monument built between 1906 and 1921 in memory of Queen Victoria. It stands as a pinnacle of British imperial architecture in India, yet its design represents a majestic hybrid. Its architect, William Emerson, combined British and Classical European designs with Mughal, Deccani, Islamic, and Hindu architectural features. Built using Makrana marble (from the same quarries as the Taj Mahal), it is surrounded by 64 acres of lush gardens and reflective pools.",
        highlights: [
            "Centred around a massive 184-foot dome topped with a rotating 16-foot bronze Angel of Victory.",
            "Features striking corner domes, chhatris (domed pavilions), and elegant minaret-style towers.",
            "Houses a royal gallery containing valuable oil paintings of Queen Victoria, Prince Albert, and historical events.",
            "Architectural accents include Mughal-style archways and neoclassical sculptures on the outer facade."
        ]
    },
    {
        id: "marble-palace",
        name: "Marble Palace",
        style: "neoclassical",
        styleLabel: "Neoclassical",
        year: 1835,
        built: "1835",
        architect: "Raja Rajendra Mullick",
        location: "Muktaram Babu Street, Jorasanko",
        image: "assets/marble_palace.jpg",
        description: "The Marble Palace is a beautiful nineteenth-century palatial mansion in North Kolkata. Built by Raja Rajendra Mullick, a wealthy merchant and art connoisseur, it remains one of the best-preserved private family homes of the nineteenth-century Bengali aristocracy. The mansion is famous for its intricate marble floors, neoclassical columns, courtyards, and a vast collection of European art, including original paintings by Rubens, Titian, and Sir Joshua Reynolds.",
        highlights: [
            "Constructed using ninety-six different varieties of marble imported from Italy and other European countries.",
            "Adorned with tall neoclassical Corinthian pillars and detailed stucco reliefs on the ceilings.",
            "A courtyard decorated with marble fountains and classical Greek/Roman statues.",
            "Features a grand ballroom with gigantic crystal chandeliers, gold-leaf mirrors, and antique clocks."
        ]
    },
    {
        id: "writers-building",
        name: "Writers' Building",
        style: "renaissance",
        styleLabel: "Renaissance",
        year: 1777,
        built: "1777 (Renovated 1889)",
        architect: "Thomas Lyon / Walter B. Granville",
        location: "B.B.D. Bagh (Dalhousie Square)",
        image: "assets/writers_building.jpg",
        description: "Originally constructed in 1777 by Thomas Lyon as a simple, barrack-like building to house the junior clerks ('writers') of the British East India Company, the Writers' Building underwent a series of dramatic expansions. In 1889, architect Walter B. Granville designed its iconic Greco-Roman, French Renaissance red-brick facade. Serving as the secretariat of West Bengal for decades, it is a key landmark in Kolkata's central business district, embodying colonial administration and history.",
        highlights: [
            "Features a grand French Renaissance facade made of deep red bricks with classical arches.",
            "The top pediments support spectacular statues of Greek gods representing Science, Agriculture, Commerce, and Justice.",
            "Corinthian porticos on the upper levels add depth and neoclassical structure to the massive facade.",
            "A landmark structure spanning the entire northern face of the historic Dalhousie Square water tank."
        ]
    },
    {
        id: "st-pauls",
        name: "St. Paul's Cathedral",
        style: "gothic",
        styleLabel: "Gothic Revival",
        year: 1847,
        built: "1839–1847",
        architect: "William Nairn Forbes",
        location: "Cathedral Road, Maidan, Kolkata",
        image: "assets/st_pauls_cathedral.jpg",
        description: "St. Paul's Cathedral is the seat of the Diocese of Calcutta. Completed in 1847, it was the first cathedral built in the overseas territory of the British Empire. Architect William Nairn Forbes designed the cathedral in the Gothic Revival style, adapting it for India's tropical climate (Indo-Gothic). The cathedral is famous for its towering white spires, huge arched windows with stained glass, and tranquil green lawns in the heart of the city.",
        highlights: [
            "Stunning stained-glass windows, including a west window designed by pre-Raphaelite master Sir Edward Burne-Jones.",
            "Florentine Renaissance frescoes decorating the altar walls, depicting the life of St. Paul.",
            "A towering central spire modeled after the tower of Canterbury Cathedral, reconstructed after the 1934 earthquake.",
            "An expansive column-free assembly hall designed to maximize air circulation in Bengal's warm climate."
        ]
    },
    {
        id: "gpo",
        name: "General Post Office (GPO)",
        style: "neoclassical",
        styleLabel: "Neoclassical",
        year: 1868,
        built: "1864–1868",
        architect: "Walter B. Granville",
        location: "B.B.D. Bagh (Dalhousie Square)",
        image: "assets/gpo.jpg",
        description: "The General Post Office (GPO) is the central post office of Kolkata and one of the city's most majestic civic structures. Designed by Walter B. Granville, GPO stands on the historical site of the first Fort William, which was the scene of the famous 1756 Battle of Calcutta. Known for its grand neoclassical dome and Corinthian columns, GPO serves as an operational post office and houses a postal museum detailing communication history.",
        highlights: [
            "A dramatic 220-foot tall, high-ceilinged dome which forms a major feature of Dalhousie Square's skyline.",
            "A grand curved corner facade supported by towering Corinthian columns forming a sweeping colonnade.",
            "Features a brass plate on the floor marking the boundary of the original Fort William.",
            "Houses a rare collection of ancient stamps, postmarks, and postal artifacts in the adjacent museum."
        ]
    },
    {
        id: "metcalfe-hall",
        name: "Metcalfe Hall",
        style: "neoclassical",
        styleLabel: "Neoclassical",
        year: 1844,
        built: "1840–1844",
        architect: "C.K. Robinson",
        location: "Strand Road, B.B.D. Bagh, Kolkata",
        image: "assets/metcalfe_hall.jpg",
        description: "Metcalfe Hall is a historic heritage building facing the Hooghly River. Built between 1840 and 1844 to honor Lord Metcalfe, the Governor-General of India who liberated the Indian press, it was designed by C.K. Robinson. Its design is directly inspired by the ancient Greek Temple of the Winds in Athens, showing a highly pure neoclassical layout. It initially housed the Calcutta Public Library, which later grew into the National Library of India.",
        highlights: [
            "Flanked by 30 massive, double-story Corinthian columns (each 36 feet tall) lining the east and west sides.",
            "Built on a raised platform to resemble ancient Athenian temples.",
            "A grand internal wooden staircase leading to the high-ceilinged library galleries.",
            "Fully restored and currently hosting visual exhibitions on the culture and history of Kolkata."
        ]
    }
];

// 2. Quiz Database (Questions, Options, and Matching Styles)
const quizQuestions = [
    {
        question: "Which building in Kolkata was constructed entirely out of white Makrana marble and dedicated to a British monarch?",
        options: [
            { text: "Writers' Building", style: "renaissance", isCorrect: false },
            { text: "Victoria Memorial", style: "indosaracenic", isCorrect: true },
            { text: "Marble Palace", style: "neoclassical", isCorrect: false },
            { text: "St. Paul's Cathedral", style: "gothic", isCorrect: false }
        ]
    },
    {
        question: "What architectural style is St. Paul's Cathedral designed in?",
        options: [
            { text: "Gothic Revival (Indo-Gothic)", style: "gothic", isCorrect: true },
            { text: "Classical Greek Corinthian", style: "neoclassical", isCorrect: false },
            { text: "French Renaissance Red-Brick", style: "renaissance", isCorrect: false },
            { text: "Indo-Saracenic Hybrid", style: "indosaracenic", isCorrect: false }
        ]
    },
    {
        question: "Writers' Building was originally designed in the 1700s to serve as what?",
        options: [
            { text: "A residential palace for Bengali zamindars", style: "neoclassical", isCorrect: false },
            { text: "A military fortress for colonial defense", style: "indosaracenic", isCorrect: false },
            { text: "Simple office quarters for junior clerks", style: "renaissance", isCorrect: true },
            { text: "A cathedral cathedral choir sanctuary", style: "gothic", isCorrect: false }
        ]
    },
    {
        question: "Which building's massive Corinthian pillars are directly inspired by the 'Temple of the Winds' in Athens?",
        options: [
            { text: "Metcalfe Hall", style: "neoclassical", isCorrect: true },
            { text: "General Post Office (GPO)", style: "neoclassical", isCorrect: false },
            { text: "Marble Palace", style: "neoclassical", isCorrect: false },
            { text: "Victoria Memorial", style: "indosaracenic", isCorrect: false }
        ]
    },
    {
        question: "If you were designing your dream mansion, what aesthetic features would you prioritize?",
        options: [
            { text: "A grand white dome surrounded by reflecting pools at sunset", style: "indosaracenic", isCorrect: null },
            { text: "Ornate stained-glass windows throwing colorful light into tall vaults", style: "gothic", isCorrect: null },
            { text: "Symmetrical facades with rows of tall white pillars and classical statues", style: "neoclassical", isCorrect: null },
            { text: "Majestic red-brick arches, decorative pediments, and structured halls", style: "renaissance", isCorrect: null }
        ]
    }
];

// Persona matching details
const personalityPersonas = {
    indosaracenic: {
        title: "The Regal Visionary (Indo-Saracenic)",
        desc: "You love grand, dramatic concepts and blending different cultures. You value prestige, history, and aren't afraid of standing out with beautiful marble domes. Your design soul matches the Victoria Memorial!"
    },
    gothic: {
        title: "The Spiritual Romantic (Gothic Revival)",
        desc: "You appreciate intricate details, soaring heights, and mood-setting lighting. Stained-glass windows and lofty spires resonate with your deep, introspective nature. Your design soul matches St. Paul's Cathedral!"
    },
    neoclassical: {
        title: "The Classical Purist (Neoclassical)",
        desc: "You admire order, proportion, and timeless dignity. Symmetrical facades, massive columns, and ancient Greek structures inspire your search for harmony. Your design soul matches Metcalfe Hall and the GPO!"
    },
    renaissance: {
        title: "The Organized Pragmatist (European Renaissance)",
        desc: "You prefer structure, organizational logic, and classic craftsmanship. You appreciate beautiful brickwork, symmetry, and functional design with a touch of elegance. Your design soul matches the Writers' Building!"
    }
};

// State Variables
let currentQuestionIndex = 0;
let quizScore = 0;
let selectedStyles = [];

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
    // Icons initialization
    lucide.createIcons();

    // Theme Toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    themeToggleBtn.addEventListener("click", toggleTheme);

    // Sticky Navbar header background trigger
    const mainHeader = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add("scrolled");
        } else {
            mainHeader.classList.remove("scrolled");
        }
        highlightActiveNavLink();
    });

    // Mobile Navigation Drawer Menu
    const mobileMenuBtn = document.querySelector(".mobile-nav-toggle");
    const closeDrawerBtn = document.querySelector(".close-drawer");
    const mobileDrawer = document.querySelector(".mobile-drawer");
    const drawerLinks = document.querySelectorAll(".drawer-link");

    mobileMenuBtn.addEventListener("click", () => {
        mobileDrawer.classList.add("open");
    });

    closeDrawerBtn.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
    });

    drawerLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileDrawer.classList.remove("open");
        });
    });

    // Active Navigation Highlighting on scroll
    const navLinks = document.querySelectorAll(".nav-link");
    function highlightActiveNavLink() {
        const sections = document.querySelectorAll("section");
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    }

    // Render Buildings Cards
    renderBuildings("all");

    // Filter Buttons logic
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            e.currentTarget.classList.add("active");
            const filterValue = e.currentTarget.getAttribute("data-filter");
            renderBuildings(filterValue);
        });
    });

    // Modal Events
    const modal = document.getElementById("details-modal");
    const modalClose = document.querySelector(".modal-close");
    const modalBackdrop = document.querySelector(".modal-backdrop");

    modalClose.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", closeModal);
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    // Quiz Buttons Setup
    const startQuizBtn = document.getElementById("start-quiz-btn");
    const restartQuizBtn = document.getElementById("restart-quiz-btn");

    startQuizBtn.addEventListener("click", startQuiz);
    restartQuizBtn.addEventListener("click", restartQuiz);
});

// Render Buildings Grid
function renderBuildings(filter) {
    const grid = document.getElementById("buildings-grid");
    grid.innerHTML = "";

    const filteredData = filter === "all" 
        ? buildingsData 
        : buildingsData.filter(b => b.style === filter);

    filteredData.forEach(building => {
        const card = document.createElement("div");
        card.className = "building-card animate-up";
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${building.image}" alt="${building.name}">
                <span class="card-tag">${building.styleLabel}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${building.name}</h3>
                <div class="card-year">
                    <i data-lucide="calendar"></i>
                    <span>Completed: ${building.year}</span>
                </div>
                <p class="card-desc">${building.description.substring(0, 115)}...</p>
                <div class="card-footer">
                    <span class="location-info">
                        <i data-lucide="map-pin"></i>
                        <span>${building.location.split(",")[0]}</span>
                    </span>
                    <button class="learn-more-btn" onclick="openDetailsModal('${building.id}')">
                        Learn More <i data-lucide="arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Re-initialize newly rendered icons
    lucide.createIcons();
}

// Open Building Details Modal
function openDetailsModal(id) {
    const building = buildingsData.find(b => b.id === id);
    if (!building) return;

    const modal = document.getElementById("details-modal");
    
    // Fill details
    document.getElementById("modal-image").src = building.image;
    document.getElementById("modal-image").alt = building.name;
    document.getElementById("modal-style").textContent = building.styleLabel;
    document.getElementById("modal-title").textContent = building.name;
    document.getElementById("modal-built").textContent = building.built;
    document.getElementById("modal-architect").textContent = building.architect;
    document.getElementById("modal-location").textContent = building.location;
    document.getElementById("modal-desc").textContent = building.description;

    const highlightsList = document.getElementById("modal-highlights");
    highlightsList.innerHTML = "";
    building.highlights.forEach(highlight => {
        const li = document.createElement("li");
        li.textContent = highlight;
        highlightsList.appendChild(li);
    });

    modal.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent body scroll
    lucide.createIcons();
}

// Close Modal
function closeModal() {
    const modal = document.getElementById("details-modal");
    modal.classList.remove("open");
    document.body.style.overflow = ""; // Enable body scroll
}

// Toggle Theme Dark / Light
function toggleTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlElement.setAttribute("data-theme", newTheme);
}

// Quiz Functions
function startQuiz() {
    currentQuestionIndex = 0;
    quizScore = 0;
    selectedStyles = [];
    
    document.getElementById("quiz-intro").classList.remove("active");
    document.getElementById("quiz-question-container").classList.add("active");
    document.getElementById("quiz-result").classList.remove("active");
    
    showQuestion();
}

function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    
    // Set progress bar
    const progressPercent = ((currentQuestionIndex) / quizQuestions.length) * 100;
    document.getElementById("progress-bar").style.width = `${progressPercent}%`;

    // Question header text
    document.getElementById("question-number").textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    document.getElementById("question-text").textContent = question.question;

    // Render Options
    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = "";

    question.options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = option.text;
        btn.addEventListener("click", () => selectOption(option));
        optionsContainer.appendChild(btn);
    });
}

function selectOption(option) {
    // Record Style selection for personality matching
    selectedStyles.push(option.style);

    // Record Score if correct
    if (option.isCorrect === true) {
        quizScore++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("progress-bar").style.width = "100%";
    document.getElementById("quiz-question-container").classList.remove("active");
    document.getElementById("quiz-result").classList.add("active");

    // Display score
    const correctCount = quizQuestions.filter(q => q.options.some(o => o.isCorrect === true)).length;
    document.getElementById("score-text").textContent = `${quizScore} / ${correctCount}`;

    // Calculate personality
    const styleCounts = {};
    let dominantStyle = "neoclassical"; // default fallback
    let maxCount = 0;

    selectedStyles.forEach(style => {
        styleCounts[style] = (styleCounts[style] || 0) + 1;
        if (styleCounts[style] > maxCount) {
            maxCount = styleCounts[style];
            dominantStyle = style;
        }
    });

    const persona = personalityPersonas[dominantStyle];
    document.getElementById("personality-style").textContent = persona.title;
    document.getElementById("personality-desc").textContent = persona.desc;
}

function restartQuiz() {
    startQuiz();
}
