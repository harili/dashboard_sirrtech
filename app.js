// Données des secteurs
const secteursData = {
    gros: {
        sport: [
            {nom: "Decathlon", fondateur: "Michel Leclercq", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Nike", fondateur: "Phil Knight", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Intersport", fondateur: "Andreas Rudolf", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "JD Sports", fondateur: "John Wardle", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Go Sport", fondateur: "Henri Seydoux", reseaux: ["linkedin", "instagram", "facebook"]}
        ],
        beaute: [
            {nom: "Sephora", fondateur: "Christopher de Lapuente", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Nocibé", fondateur: "Stéphan Durand", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Yves Rocher", fondateur: "Bris Rocher", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Nuxe", fondateur: "Aliza Jabès", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Beauty Success", fondateur: "Jean-Paul Agon", reseaux: ["linkedin", "instagram", "facebook"]}
        ],
        vetements: [
            {nom: "Kiabi", fondateur: "Patrick Mulliez", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "H&M", fondateur: "Erling Persson", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Zara", fondateur: "Amancio Ortega", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Vinted", fondateur: "Milda Mitkute", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Zalando", fondateur: "Robert Gentz", reseaux: ["linkedin", "instagram", "facebook"]}
        ],
        chaussures: [
            {nom: "Spartoo", fondateur: "Boris Saragaglia", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Sarenza", fondateur: "Francis Lelong", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "JB Martin", fondateur: "Jean-Baptiste Martin", reseaux: ["linkedin", "instagram", "facebook"]}
        ],
        automobile: [
            {nom: "Oscaro", fondateur: "Pierre-Noël Luiggi", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Feu Vert", fondateur: "Jacques Stern", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Norauto", fondateur: "Jean-Claude Bourrelier", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Carter Cash", fondateur: "Michel Carter", reseaux: ["linkedin", "instagram", "facebook"]}
        ],
        audiovisuel: [
            {nom: "Boulanger", fondateur: "Bernard Boulanger", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "FNAC", fondateur: "André Essel", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Darty", fondateur: "Nathan Darty", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Amazon", fondateur: "Jeff Bezos", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Cdiscount", fondateur: "Hervé Hamel", reseaux: ["linkedin", "instagram", "facebook"]}
        ]
    },
    petits: {
        sport: [
            {nom: "Le Coq Sportif", fondateur: "Émile Camuset", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Patagonia France", fondateur: "Yvon Chouinard", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Salomon Store", fondateur: "François Salomon", reseaux: ["linkedin", "instagram", "facebook"]}
        ],
        beaute: [
            {nom: "Oh My Cream", fondateur: "Juliette Lévy", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Avril Cosmétiques", fondateur: "Mathieu Escot", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Le Colibri Frenchy", fondateur: "Nicolas Valentin", reseaux: ["linkedin", "instagram", "facebook"]}
        ],
        vetements: [
            {nom: "Le Slip Français", fondateur: "Guillaume Gibault", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Bobbies", fondateur: "Antoine Bolze", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Maison Standards", fondateur: "Pierre Calmard", reseaux: ["linkedin", "instagram", "facebook"]}
        ],
        chaussures: [
            {nom: "TBS", fondateur: "Thierry Boinet", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Veja", fondateur: "Sébastien Kopp", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Paraboot", fondateur: "Rémy Paraboot", reseaux: ["linkedin", "instagram", "facebook"]}
        ],
        automobile: [
            {nom: "Pièces Auto24", fondateur: "Marc Durand", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Euro4x4parts", fondateur: "Christian Petit", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Autodoc", fondateur: "Alex Rudolph", reseaux: ["linkedin", "instagram", "facebook"]}
        ],
        audiovisuel: [
            {nom: "Son-Vidéo.com", fondateur: "Laurent Dubois", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "Cobra", fondateur: "Michel Cobra", reseaux: ["linkedin", "instagram", "facebook"]},
            {nom: "LDLC", fondateur: "Laurent de la Clergerie", reseaux: ["linkedin", "instagram", "facebook"]}
        ]
    }
};

// Données des problématiques
const problematiquesList = [
    {
        id: 1,
        titre: "Optimisation Gestion Retours",
        categorie: "Service Client",
        interet: "82%",
        impact: 4,
        importance: 5,
        problematique: "Les e-commerçants perdent du temps à traiter manuellement les retours et échanges, ce qui génère des erreurs et retarde le remboursement client.",
        solution: "Déploiement d'un workflow n8n orchestrant l'identification des demandes de retour via un chatbot IA, la génération automatique des étiquettes, la mise à jour du stock et la notification des équipes."
    },
    {
        id: 2,
        titre: "Agent Support Facturation IA",
        categorie: "Service Client", 
        interet: "78%",
        impact: 4,
        importance: 4,
        problematique: "40% des demandes SAV concernent la facturation. Le traitement manuel coûte 22€/dossier et génère 15% d'erreurs.",
        solution: "Agent IA connecté aux systèmes de paiement via API, capable d'analyser les factures et de résoudre 92% des requêtes courantes avec escalade intelligente."
    },
    {
        id: 3,
        titre: "Relance Panier Intelligente",
        categorie: "Marketing",
        interet: "85%", 
        impact: 5,
        importance: 5,
        problematique: "68% des paniers abandonnés ne font l'objet d'aucune relance personnalisée. Les emails génériques obtiennent moins de 5% de récupération.",
        solution: "Workflow n8n avec deux niveaux : Premium (vidéo personnalisée du fondateur) et Cheap (email dynamique) selon la valeur LTV du client."
    },
    {
        id: 4,
        titre: "Analyse intelligente avis clients",
        categorie: "Analytics",
        interet: "76%",
        impact: 4,
        importance: 4,
        problematique: "L'analyse manuelle des milliers d'avis clients est chronophage et subjective. Les e-commerçants peinent à identifier rapidement les tendances.",
        solution: "IA d'analyse sémantique des avis clients avec dashboard temps réel. Classification automatique par sentiment, détection des problèmes récurrents."
    },
    {
        id: 5,
        titre: "Détection intelligente fraudes",
        categorie: "Sécurité",
        interet: "77%",
        impact: 5,
        importance: 5,
        problematique: "Les fraudes e-commerce évoluent rapidement et les systèmes de détection traditionnels génèrent trop de faux positifs.",
        solution: "IA de détection fraude en temps réel avec machine learning adaptatif. Analyse comportementale multi-critères, scoring de risque dynamique."
    },
    {
        id: 6,
        titre: "Surveillance automatisée de la conformité RGPD",
        categorie: "Sécurité",
        interet: "90%",
        impact: 5,
        importance: 5,
        problematique: "Respect RGPD complexe et sources de risques juridiques.",
        solution: "Agent IA surveillant conformité et automatisant les réponses."
    },
    {
        id: 7,
        titre: "Personnalisation dynamique des recommandations produits",
        categorie: "Marketing",
        interet: "90%",
        impact: 5,
        importance: 5,
        problematique: "Recommandations génériques peu adaptées au client.",
        solution: "Workflow IA analysant comportement pour recommandations personnalisées."
    },
    {
        id: 8,
        titre: "Analyse intelligente avis clients",
        categorie: "Analytics",
        interet: "85%",
        impact: 4,
        importance: 4,
        problematique: "Difficultés clients passent inaperçues (abandon panier, bugs)",
        solution: "Système croisant analytics et messagerie + assistance proactive."
    }
];

// Données métriques
const metriquesData = {
    petits: {
        cout_manuel: "35€/heure",
        temps_economise: "20h/mois",
        economies: "700€",
        roi: "180%",
        taux_erreur_avant: 20,
        taux_erreur_apres: 3,
        satisfaction_avant: 65,
        satisfaction_apres: 92
    },
    grands: {
        cout_manuel: "50€/heure",
        temps_economise: "80h/mois",
        economies: "4000€",
        roi: "420%",
        taux_erreur_avant: 12,
        taux_erreur_apres: 1,
        satisfaction_avant: 78,
        satisfaction_apres: 96
    }
};

// Données études de cas réelles
const etudesCasData = {
    petits: [
        {
            nom: "BIOMARIS",
            secteur: "Cosmétiques",
            profil: "Marque cosmétiques allemande, 120+ produits",
            plateforme: "Shopware",
            probleme: "Workflows promotionnels complexes, classification clients manuelle",
            solution: "Rule and Flow Builder automation, tagging automatique clients, workflows ciblés",
            resultats: ["+30% conversion mobile", "+10% conversion desktop", "Augmentation significative commandes"],
            source: "Shopware Success Story 2024"
        },
        {
            nom: "LadiesGym",
            secteur: "Fitness",
            profil: "Réseau salles de sport, gestion multi-sites",
            plateforme: "Migration Zapier/Make vers n8n",
            probleme: "Coûts élevés automation (20-40k$ budget), limitations API",
            solution: "Migration de centaines de workflows vers n8n on-premise, développement Python custom",
            resultats: ["Réduction coûts significative", "Élimination limitations API", "Scalabilité améliorée"],
            source: "Cosmonauts.dev Case Study Q1 2025"
        },
        {
            nom: "Beauté Privée",
            secteur: "E-commerce Beauté",
            profil: "Vente privée cosmétiques en France",
            plateforme: "Site e-commerce propriétaire",
            probleme: "Recommandations produits génériques, personnalisation limitée",
            solution: "Moteur IA de recommandations personnalisées, analyse comportementale",
            resultats: ["Amélioration engagement client", "Augmentation panier moyen", "Fidélisation renforcée"],
            source: "Étude PME françaises IA 2024"
        }
    ],
    grands: [
        {
            nom: "Cdiscount",
            secteur: "E-commerce Généraliste",
            profil: "Leader français, 20M offres, 19M visiteurs uniques/mois",
            plateforme: "Site propriétaire + iAdvize IA générative",
            probleme: "Service client saturé, disponibilité limitée aux heures ouvrées",
            solution: "Chatbot IA générative 24/7, traitement autonome 2/3 des cas, escalade intelligente",
            resultats: ["520,000 conversations/an", "Satisfaction +10 points (80%)", "+30% conversion fiches produits"],
            source: "Republik Retail 2025 + iAdvize Case Study"
        },
        {
            nom: "Intersport",
            secteur: "Sport",
            profil: "Leader équipement sportif, 100M visites annuelles",
            plateforme: "iAdvize Copilot sur site e-commerce",
            probleme: "Volume énorme, conseil produit complexe, expertise requise",
            solution: "Chatbot IA générative connecté données produits, conseil personnalisé",
            resultats: ["Taux conversion x7 avec chatbot", "74% conversations automatisées", "Nouveau standard expérience"],
            source: "La Revue du Digital Juin 2024"
        },
        {
            nom: "La Redoute",
            secteur: "Mode",
            profil: "E-commerçant mode français historique", 
            plateforme: "Application mobile propriétaire",
            probleme: "Recherche produits difficile, conversion mobile faible",
            solution: "Recherche visuelle IA + suggestions produits complémentaires via Visenze",
            resultats: ["+22% conversion mobile", "Amélioration parcours utilisateur", "Réduction friction achat"],
            source: "E-Marketing 2018 + LinkedIn 2025"
        }
    ]
};

// Variables globales
let currentSecteurType = 'gros';
let currentMetricsSize = 'petits';
let currentEtudesSize = 'petits';

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSecteurs();
    initProblematiques();
    initMetrics();
    initProgressBars();
    initEtudesCas();
});

// Navigation smooth
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Gestion des secteurs
function initSecteurs() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentSecteurType = this.dataset.type;
            renderSecteurs();
        });
    });
    
    renderSecteurs();
}

function renderSecteurs() {
    const grid = document.getElementById('secteursGrid');
    const data = secteursData[currentSecteurType];
    
    grid.innerHTML = '';
    
    Object.keys(data).forEach(secteur => {
        const secteurCard = createSecteurCard(secteur, data[secteur]);
        grid.appendChild(secteurCard);
    });
}

function createSecteurCard(secteurName, marques) {
    const card = document.createElement('div');
    card.className = 'secteur-card';
    
    const secteurTitles = {
        sport: 'Sport',
        beaute: 'Beauté',
        vetements: 'Vêtements',
        chaussures: 'Chaussures',
        automobile: 'Automobile',
        audiovisuel: 'Audiovisuel'
    };
    
    card.innerHTML = `
        <h3>${secteurTitles[secteurName]}</h3>
        ${marques.map(marque => `
            <div class="marque-item">
                <div class="marque-info">
                    <h4>${marque.nom}</h4>
                    <div class="fondateur">Fondateur: ${marque.fondateur}</div>
                </div>
                <div class="social-links">
                    ${marque.reseaux.map(reseau => `
                        <a class="social-link social-link--${reseau}" target="_blank">
                            ${getSocialIcon(reseau)}
                        </a>
                    `).join('')}
                </div>
            </div>
        `).join('')}
    `;
    
    return card;
}

function getSocialIcon(reseau) {
    const icons = {
        linkedin: 'in',
        instagram: 'ig',
        facebook: 'fb'
    };
    return icons[reseau] || '';
}

// Gestion des problématiques
function initProblematiques() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            filterProblematiques(filter);
        });
    });
    
    renderProblematiques();
}

function renderProblematiques() {
    const container = document.getElementById('problematiquesList');
    container.innerHTML = '';
    
    problematiquesList.forEach(problematique => {
        const card = createProblematiqueCard(problematique);
        container.appendChild(card);
    });
}

function createProblematiqueCard(problematique) {
    const card = document.createElement('div');
    card.className = 'problematique-card';
    card.dataset.category = problematique.categorie;
    
    card.innerHTML = `
        <div class="problematique-header">
            <div class="problematique-title">
                <h3>${problematique.titre}</h3>
                <div class="problematique-category">${problematique.categorie}</div>
            </div>
            <div class="problematique-metrics">
                <div class="metric">
                    <span>📊 ${problematique.interet} intérêt</span>
                </div>
                <div class="metric">
                    <span>Impact: </span>
                    <span class="stars">${'★'.repeat(problematique.impact)}${'☆'.repeat(5-problematique.impact)}</span>
                </div>
                <div class="metric">
                    <span>Importance: </span>
                    <span class="stars">${'★'.repeat(problematique.importance)}${'☆'.repeat(5-problematique.importance)}</span>
                </div>
            </div>
        </div>
        <div class="problematique-content">
            <div class="probleme-block">
                <h4>PROBLÉMATIQUE</h4>
                <p>${problematique.problematique}</p>
            </div>
            <div class="solution-block">
                <h4>SOLUTION SIRRTECH</h4>
                <p>${problematique.solution}</p>
            </div>
        </div>
    `;
    
    return card;
}

function filterProblematiques(filter) {
    const cards = document.querySelectorAll('.problematique-card');
    
    cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Gestion des métriques
function initMetrics() {
    const toggleButtons = document.querySelectorAll('.metrics-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentMetricsSize = this.dataset.size;
            renderMetrics();
            updateProgressBars();
        });
    });
    
    renderMetrics();
}

function renderMetrics() {
    const grid = document.getElementById('metricsGrid');
    const data = metriquesData[currentMetricsSize];
    
    grid.innerHTML = `
        <div class="metric-card">
            <div class="metric-value">${data.cout_manuel}</div>
            <div class="metric-label">Coût Manuel</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${data.temps_economise}</div>
            <div class="metric-label">Temps Économisé</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${data.economies}</div>
            <div class="metric-label">Économies Mensuelles</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${data.roi}</div>
            <div class="metric-label">ROI 12 mois</div>
        </div>
    `;
}

// Barres de progression
function initProgressBars() {
    const container = document.getElementById('progressBars');
    
    container.innerHTML = `
        <div class="progress-item">
            <div class="progress-label">Taux d'erreur</div>
            <div class="progress-bar-container">
                <div class="progress-bar">
                    <div class="progress-fill progress-fill--before" data-progress="0"></div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill progress-fill--after" data-progress="0"></div>
                </div>
                <div class="progress-values">
                    <span class="value-before">Avant: <span class="error-before">0</span>%</span>
                    <span class="value-after">Après: <span class="error-after">0</span>%</span>
                </div>
            </div>
        </div>
        <div class="progress-item">
            <div class="progress-label">Satisfaction</div>
            <div class="progress-bar-container">
                <div class="progress-bar">
                    <div class="progress-fill progress-fill--before" data-progress="0"></div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill progress-fill--after" data-progress="0"></div>
                </div>
                <div class="progress-values">
                    <span class="value-before">Avant: <span class="satisfaction-before">0</span>%</span>
                    <span class="value-after">Après: <span class="satisfaction-after">0</span>%</span>
                </div>
            </div>
        </div>
    `;
    
    // Observer pour animer les barres quand elles deviennent visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(container);
}

function updateProgressBars() {
    const data = metriquesData[currentMetricsSize];
    
    // Mise à jour des valeurs textuelles
    document.querySelector('.error-before').textContent = data.taux_erreur_avant;
    document.querySelector('.error-after').textContent = data.taux_erreur_apres;
    document.querySelector('.satisfaction-before').textContent = data.satisfaction_avant;
    document.querySelector('.satisfaction-after').textContent = data.satisfaction_apres;
    
    // Animation des barres de progression
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars[0].style.width = `${data.taux_erreur_avant}%`;
        progressBars[1].style.width = `${data.taux_erreur_apres}%`;
        progressBars[2].style.width = `${data.satisfaction_avant}%`;
        progressBars[3].style.width = `${data.satisfaction_apres}%`;
    }, 100);
}

// Gestion des études de cas
function initEtudesCas() {
    const toggleButtons = document.querySelectorAll('.etudes-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentEtudesSize = this.dataset.size;
            renderEtudesCas();
        });
    });
    
    renderEtudesCas();
}

function renderEtudesCas() {
    const grid = document.getElementById('etudesGrid');
    const data = etudesCasData[currentEtudesSize];
    
    grid.innerHTML = '';
    
    data.forEach(etude => {
        const card = createEtudeCard(etude);
        grid.appendChild(card);
    });
}

function createEtudeCard(etude) {
    const card = document.createElement('div');
    card.className = 'etude-card';
    
    card.innerHTML = `
        <div class="etude-header">
            <h3>${etude.nom}</h3>
            <div class="etude-secteur">${etude.secteur}</div>
        </div>
        
        <div class="etude-profil">${etude.profil}</div>
        
        <div class="etude-section etude-section--probleme">
            <h4>🎯 Problème Initial</h4>
            <p>${etude.probleme}</p>
        </div>
        
        <div class="etude-section etude-section--solution">
            <h4>⚙️ Solution Déployée</h4>
            <p><strong>Plateforme:</strong> ${etude.plateforme}</p>
            <p>${etude.solution}</p>
        </div>
        
        <div class="etude-section etude-section--resultats">
            <h4>🚀 Résultats Obtenus</h4>
            <ul class="resultats-list">
                ${etude.resultats.map(resultat => `<li>${resultat}</li>`).join('')}
            </ul>
        </div>
        
        <div class="etude-source">
            Source: ${etude.source}
        </div>
    `;
    
    return card;
}