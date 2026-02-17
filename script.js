// Données des projets
const projectsData = {
  aura: {
    title: "🎉 AURA - Planification d'évènements",
    fullDesc: "Application web complète de gestion d'événements permettant aux particuliers et professionnels d'organiser et piloter leurs projets événementiels.\n\n• Gestion d'événements : création et configuration complète d'événements (lieu, date, durée, dress code, nourriture, décoration), système d'invitations avec intégration du carnet d'adresses, calendrier centralisé pour visualiser tous les événements.\n• Gestion budgétaire : constitution et suivi de budgets par événement avec catégorisation des dépenses (nourriture, décoration, sécurité, transport), tableau de bord statistique pour analyser l'évolution des dépenses dans le temps.\n• Outils de productivité : carnet d'adresses intégré, carnet de notes personnel, liens d'accès rapides personnalisables depuis l'accueil, tableau de bord centralisé.\n• Gestion multi-utilisateurs : système d'authentification, personnalisation du profil, invitation de contacts externes au réseau.\n\nMon rôle : Développement full-stack avec Django, conception UI/UX complète (Figma), implémentation du système de gestion budgétaire avec analytics, développement du calendrier et des outils de productivité, et documentation technique.\n\nTechnologies : Django, Python, HTML/CSS, Figma, GitHub\nStatut : Application fonctionnelle",
    folder: "projects/aura"
  },
  keyper: {
    title: "🗝️ KEYPER - gestion de foyer : get things done, together",
    fullDesc: "Application web collaborative permettant aux familles et colocations de centraliser la gestion de leur quotidien.\n\nOrganisation domestique : création et gestion de plusieurs foyers, plans interactifs du logement avec attribution de tâches par pièce, listes de courses intelligentes (items cochés automatiquement transférés vers l'inventaire cuisine), système de rappels avec notifications personnalisées.\n\nCollaboration & partage : chat intégré en temps réel par foyer, feuilles de notes collaboratives, partage et enregistrement de recettes de cuisine.\n\nGamification : système complet de récompenses, classements entre membres du foyer, collection de trophées et statistiques de contribution pour motiver l'accomplissement des tâches. Gestion multi-utilisateurs : système de permissions granulaires (administrateur, membre, observateur, invité) et personnalisation complète des profils et avatars.\n\nMon rôle : Développement full-stack avec Django, conception UI/UX complète (Figma), implémentation de l'architecture multi-foyers avec système de rôles, développement des fonctionnalités temps réel (chat, notifications), déploiement en ligne (PythonAnywhere), et pilotage projet en méthode SCRUM (gestion sprints, backlogs, coordination équipe).\n\nTechnologies : Django, Python, HTML/CSS, PythonAnywhere, Figma, GitHub\nStatut : Application déployée en ligne et fonctionnelle",
    folder: "projects/keyper"
  },
  smartycat: {
    title: "📚 SMARTYCAT - l'app qui te rend plus intelligent",
    fullDesc: "Plateforme web d'apprentissage ludique permettant aux utilisateurs de tester et développer leurs connaissances sur diverses thématiques (histoire, musique, sport, cuisine, etc.).\n\n• Contenu éducatif modulaire : séries de quiz et questions classées par thème et niveau, sessions chronométrées et modes d'entraînement.\n• Profils personnalisés : comptes utilisateurs avec avatars, suivi des scores, tableau de progression et historique des performances.\n• Quiz interactifs et adaptatifs : feedback instantané, explications détaillées et suggestions de révision basées sur les réponses.\n• Suivi & motivation : badges, récompenses et statistiques pour encourager la progression continue.\n\nMon rôle : Développement frontend (HTML/CSS), conception de la base de données cryptée (JSON), gestion backend (PHP/Apache via XAMPP), et création de l'identité visuelle complète (UI/UX sur Figma, design graphique sur Canva).\n\nTechnologies : HTML/CSS, PHP, JSON, XAMPP/Apache, Figma, Canva, GitHub\nStatut : Application web fonctionnelle en local.",
    folder: "projects/smartycat"
  },
  compareme: {
    title: "🪞 COMPARE ME - COMPARAISON ET RECONNAISSANCE FACIALE",
    fullDesc: "Application desktop de détection de sosies utilisant une base de donnée constituée de plusieurs centaines de photos pour comparer le visage d'un utilisateur à une base de données de célébrités. L'utilisateur peut capturer une photo via webcam ou importer un fichier, puis l'algorithme analyse et identifie le sosie le plus proche avec un pourcentage de correspondance. L'application génère également un certificat de sosie personnalisé au format PDF.\n\nMon rôle : Développement de l'interface graphique (Tkinter), implémentation de l'algorithme de reconnaissance faciale (DeepFace, OpenCV), gestion de la base de données d'images (Kaggle), calculs de similarité (Numpy), et création de l'expérience utilisateur complète (barre de progression, affichage résultats, export PDF).\n\nTechnologies : Python, DeepFace, OpenCV, Numpy, Tkinter, Threading, FPDF, Kaggle\nStatut : Application desktop fonctionnelle en local",
    folder: "projects/compareme"
  },
  lacasa: {
    title: "📝 LACASA - chat crypté",
    fullDesc: "Application de messagerie instantanée sécurisée permettant la communication multi-utilisateurs en temps réel avec chiffrement des conversations. Communication & recherche : chat temps réel multi-utilisateurs, fonction de recherche dans l'historique des messages, support d'émojis pour enrichir les conversations.\n\nIntelligence artificielle : assistant IA intégré (Ollama) directement interpellable au sein du chat pour assistance contextuelle. Personnalisation complète : création de comptes utilisateurs, customisation totale de l'interface (fonds d'écran, polices, palettes de couleurs) pour une expérience utilisateur unique. Sécurité : chiffrement des messages pour garantir la confidentialité des échanges.\n\nMon rôle : Développement backend Python pour la logique de messagerie et le chiffrement, implémentation de l'interface utilisateur (HTML/CSS), intégration de l'IA conversationnelle (Ollama), gestion de la personnalisation et des préférences utilisateurs, et documentation technique complète.\n\nTechnologies : Python, HTML/CSS, Ollama (IA), GitHub\nStatut : Application fonctionnelle avec IA intégrée",
    folder: "projects/lacasa"
  }
};

// Fonction pour générer le chemin des images du dossier projet (désactivée)
async function loadProjectImages(projectId, folder) {
  // Retourner un tableau vide pour éviter les erreurs 404
  // Nous utilisons maintenant les images spécifiques définies dans openProject
  return [];
}

// Fonction pour afficher un extrait de description (350 caractères)
function generateSnippet(fullDesc, length = 350) {
  let snippet = fullDesc.substring(0, length);
  if (fullDesc.length > length) {
    snippet = snippet.substring(0, snippet.lastIndexOf(' ')) + '...';
  }
  return snippet;
}

// Initialiser les snippets pour les 4 premières images
async function initializeProjects() {
  for (const [projectId, project] of Object.entries(projectsData)) {
    // Charger les images du projet
    const images = await loadProjectImages(projectId, project.folder);
    project.allImages = images;
    
    // Générer l'extrait de description (350 caractères)
    const snippetElement = document.querySelector(`[data-project="${projectId}"] .project-snippet`);
    if (snippetElement) {
      snippetElement.textContent = generateSnippet(project.fullDesc, 350);
    }
    
    // Charger les 4 premières images en éventail
    const fanImagesContainer = document.querySelector(`[data-project="${projectId}"] .fan-images`);
    if (fanImagesContainer && images.length > 0) {
      fanImagesContainer.innerHTML = ''; // Vider les images existantes
      
      for (let i = 0; i < Math.min(4, images.length); i++) {
        const img = document.createElement('img');
        img.src = images[i];
        img.alt = `${project.title} Preview ${i + 1}`;
        img.className = 'fan-img';
        fanImagesContainer.appendChild(img);
      }
    }
  }
}

// Appeler l'initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', initializeProjects);

function openProject(id) {
  const project = projectsData[id];
  if (!project) return;

  document.getElementById('modal-title').innerText = project.title;
  
  // Vider le contenu du modal pour éviter l'accumulation des bannières
  const modalContent = document.querySelector('.modal-content');
  const existingBanner = modalContent.querySelector('img[alt^="Bannière"]');
  if (existingBanner) {
    existingBanner.remove();
  }
  
  // Ajouter l'image bannière entre le titre et la description
  const bannerImageMap = {
    'aura': 'projects/AURA_evenement/baniere_aura.webp',
    'keyper': 'projects/KEYPER_gestion_de_foyer/baniere_keyper.webp',
    'smartycat': 'projects/SMARTYCAT_culture_generale/baniere_smartycat.webp',
    'compareme': 'projects/COMPAREME_reconnaissance_faciale/baniere_compareme.webp',
    'lacasa': 'projects/LACASA_chat_crypte/baniere_lacasa.webp'
  };
  
  // Créer et insérer l'image bannière
  const bannerImg = document.createElement('img');
  bannerImg.src = bannerImageMap[id] || '';
  bannerImg.alt = `Bannière ${project.title}`;
  bannerImg.style.width = '50%';
  bannerImg.style.height = 'auto';
  bannerImg.style.maxHeight = '100px';
  bannerImg.style.objectFit = 'cover';
  bannerImg.style.borderRadius = '8px';
  bannerImg.style.marginBottom = '20px';
  bannerImg.style.display = 'block';
  bannerImg.style.marginLeft = 'auto';
  bannerImg.style.marginRight = 'auto';
  
  // Insérer l'image bannière après le titre
  const modalTitle = document.getElementById('modal-title');
  modalTitle.insertAdjacentElement('afterend', bannerImg);
  
  document.getElementById('modal-desc').innerText = project.fullDesc;
  
  const imgContainer = document.getElementById('modal-images');
  imgContainer.innerHTML = '';
  
  // Ajouter l'image principale du projet en dessous de la description
  const projectImageMap = {
    'aura': 'projects/AURA_evenement/aura.webp',
    'keyper': 'projects/KEYPER_gestion_de_foyer/keyper.webp',
    'smartycat': 'projects/SMARTYCAT_culture_generale/smartycat.webp',
    'compareme': 'projects/COMPAREME_reconnaissance_faciale/compareme.webp',
    'lacasa': 'projects/LACASA_chat_crypte/lacasa.webp'
  };
  
  const mainImg = document.createElement('img');
  mainImg.src = projectImageMap[id] || '';
  mainImg.alt = project.title;
  mainImg.style.maxWidth = '100%';
  mainImg.style.height = 'auto';
  mainImg.style.borderRadius = '8px';
  mainImg.style.marginTop = '20px';
  mainImg.style.cursor = 'zoom-in';
  
  // Ajouter l'effet lightbox pour l'image principale
  mainImg.addEventListener('click', function () {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    const lightboxImg = document.createElement('img');
    lightboxImg.className = 'lightbox-image';
    lightboxImg.src = mainImg.src;
    lightboxImg.alt = mainImg.alt || 'Image du projet';

    overlay.appendChild(lightboxImg);
    document.body.appendChild(overlay);

    // Fermer au clic
    lightboxImg.addEventListener('click', function (ev) { ev.stopPropagation(); });
    overlay.addEventListener('click', function () { overlay.remove(); });

    function onKey(e) {
      if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', onKey); }
    }
    document.addEventListener('keydown', onKey);
  });
  
  imgContainer.appendChild(mainImg);
  
  // Afficher toutes les images du projet
  const images = project.allImages || [];
  if (images.length === 0) {
    // Fallback : charger les images prédéfinies si pas d'images dynamiques
    const fallbackImages = project.images || [];
    fallbackImages.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = project.title;
      imgContainer.appendChild(img);
    });
  } else {
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = project.title;
      imgContainer.appendChild(img);
    });
  }

  document.getElementById('project-modal').classList.add('show');
}

function closeProject() {
  document.getElementById('project-modal').classList.remove('show');
}

// Données des projets originales (legacy)
const projets = [
    {
        titre: "Projet 1",
        description: "Description du premier projet",
        image: "https://via.placeholder.com/300x200",
        lien: "#"
    },
    {
        titre: "Projet 2",
        description: "Description du deuxième projet",
        image: "https://via.placeholder.com/300x200",
        lien: "#"
    },
    {
        titre: "Projet 3",
        description: "Description du troisième projet",
        image: "https://via.placeholder.com/300x200",
        lien: "#"
    }
];

// Fonction pour charger les projets
document.addEventListener('DOMContentLoaded', function() {
    const dotsEl = document.getElementById('loading-dots');
    let dotsInterval = null;

    if (dotsEl) {
        const frames = ['.', '..', '...'];
        let i = 0;
        dotsInterval = window.setInterval(() => {
            dotsEl.textContent = frames[i % frames.length];
            i += 1;
        }, 450);
    }

    window.addEventListener('load', function() {
        if (dotsInterval) {
            window.clearInterval(dotsInterval);
        }
    });

    const projetsGrid = document.querySelector('.projets-grid');
    
    // Ajouter les projets au DOM
    if (projetsGrid) {
        projets.forEach(projet => {
            const projetElement = document.createElement('div');
            projetElement.className = 'projet-card';
            projetElement.innerHTML = `
            <img src="${projet.image}" alt="${projet.titre}">
            <h3>${projet.titre}</h3>
            <p>${projet.description}</p>
            <a href="${projet.lien}" class="btn">Voir le projet</a>
        `;
            projetsGrid.appendChild(projetElement);
        });
    }

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre message ! Je vous recontacterai bientôt.');
            contactForm.reset();
        });
    }

    // Animation au défilement — uniquement effets sur header si présent
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            } else {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            }
        }
        // NOTE: ne plus cacher le bandeau `#main-text` au scroll — il reste fixé en haut
    });

    // Ajout de styles pour les cartes de projet
    const style = document.createElement('style');
    style.textContent = `
        .projet-card {
            background: #1a1a1a;
            border-radius: 8px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin: 1rem;
        }
        
        .projet-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(76, 175, 80, 0.2);
        }
        
        .projet-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .projet-card h3 {
            margin: 1rem 0;
            color: #4CAF50;
        }
        
        .projet-card p {
            padding: 0 1rem 1rem;
            color: #ccc;
        }
        
        .btn {
            display: inline-block;
            padding: 0.5rem 1rem;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            margin: 1rem 0;
            transition: background-color 0.3s ease;
        }
        
        .btn:hover {
            background-color: #45a049;
        }
    `;
    document.head.appendChild(style);

    // Rendre visibles les URLs au survol via l'attribut title (utile pour voir le lien au niveau de la souris)
    document.querySelectorAll('a[href]').forEach(a => {
        try {
            if (!a.getAttribute('title')) a.setAttribute('title', a.getAttribute('href'));
        } catch (e) { /* ignore */ }
    });

    // --- Lightbox pour agrandir l'image CV ---
    const cvImage = document.querySelector('.cv-image');
    if (cvImage) {
        cvImage.style.cursor = 'zoom-in';
        cvImage.addEventListener('click', function () {
            const overlay = document.createElement('div');
            overlay.className = 'lightbox-overlay';

            const img = document.createElement('img');
            img.className = 'lightbox-image';
            img.src = cvImage.src;
            img.alt = cvImage.alt || 'CV';

            overlay.appendChild(img);
            document.body.appendChild(overlay);

            // empêcher le clic sur l'image de fermer
            img.addEventListener('click', function (ev) { ev.stopPropagation(); });

            // fermer au clic hors de l'image
            overlay.addEventListener('click', function () { overlay.remove(); });

            // fermer avec Échap
            function onKey(e) {
                if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', onKey); }
            }
            document.addEventListener('keydown', onKey);
        });
    }

    // --- Lightbox pour agrandir les images de certifications ---
    document.querySelectorAll('.certification-item').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function () {
            const overlay = document.createElement('div');
            overlay.className = 'lightbox-overlay';

            const lightboxImg = document.createElement('img');
            lightboxImg.className = 'lightbox-image';
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || 'Certification';

            overlay.appendChild(lightboxImg);
            document.body.appendChild(overlay);

            // empêcher le clic sur l'image de fermer
            lightboxImg.addEventListener('click', function (ev) { ev.stopPropagation(); });

            // fermer au clic hors de l'image
            overlay.addEventListener('click', function () { overlay.remove(); });

            // fermer avec Échap
            function onKey(e) {
                if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', onKey); }
            }
            document.addEventListener('keydown', onKey);
        });
    });

    // --- Charger les photos du dossier photographie ---
    const photoGallery = document.getElementById('photography-gallery');
    if (photoGallery) {
        const photos = [
            'IMG_0100.webp',
            'IMG_0263.webp',
            'IMG_0273.webp',
            'IMG_0275.webp',
            'IMG_1356.webp',
            'IMG_1417.webp',
            'IMG_1437.webp',
            'IMG_5371.webp',
            'IMG_5383.webp',
            'IMG_6568.webp',
            'IMG_7662.webp',
            'IMG_7699.webp',
            'IMG_7717.webp',
            'IMG_7768.webp',
            'IMG_7827.webp',
            'IMG_7957.webp',
            'IMG_9908.webp',
            'IMG_7231.webp',
            'lights.webp',
            'boat.webp'
        ];
        photos.forEach((photoName, index) => {
            const polaroid = document.createElement('div');
            polaroid.className = 'photo-polaroid';
            
            const img = document.createElement('img');
            img.className = 'photo-item';
            img.src = `photographie/${encodeURI(photoName)}`;
            img.alt = photoName;
            img.style.cursor = 'zoom-in';
            
            polaroid.appendChild(img);
            
            // Lightbox pour les photos
            img.addEventListener('click', function () {
                const overlay = document.createElement('div');
                overlay.className = 'lightbox-overlay';

                const lightboxImg = document.createElement('img');
                lightboxImg.className = 'lightbox-image';
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || 'Photo';

                overlay.appendChild(lightboxImg);
                document.body.appendChild(overlay);

                lightboxImg.addEventListener('click', function (ev) { ev.stopPropagation(); });
                overlay.addEventListener('click', function () { overlay.remove(); });

                function onKey(e) {
                    if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', onKey); }
                }
                document.addEventListener('keydown', onKey);
            });
            
            photoGallery.appendChild(polaroid);
        });
    }

    // --- Shortcuts (menu mobile) ---
    const shortcutsToggle = document.getElementById('shortcuts-toggle');
    const shortcutsMenu = document.getElementById('shortcuts-menu');
    const iconsContainer = document.querySelector('.icons-container');
    if (shortcutsMenu && iconsContainer) {
        // cloner les liens d'icônes dans le menu shortcuts
        iconsContainer.querySelectorAll('.icon-link').forEach(link => {
            const clone = link.cloneNode(true);
            // retirer styles qui peuvent gêner et s'assurer d'une bonne structure
            clone.classList.add('shortcut-item');
            shortcutsMenu.appendChild(clone);
        });

        function closeShortcuts() {
            shortcutsMenu.classList.remove('open');
            shortcutsMenu.setAttribute('aria-hidden', 'true');
            if (shortcutsToggle) shortcutsToggle.setAttribute('aria-expanded', 'false');
        }

        function openShortcuts() {
            shortcutsMenu.classList.add('open');
            shortcutsMenu.setAttribute('aria-hidden', 'false');
            if (shortcutsToggle) shortcutsToggle.setAttribute('aria-expanded', 'true');
        }

        if (shortcutsToggle) {
            shortcutsToggle.addEventListener('click', function (e) {
                e.stopPropagation();
                if (shortcutsMenu.classList.contains('open')) closeShortcuts(); else openShortcuts();
            });
            shortcutsToggle.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); shortcutsToggle.click(); } });
        }

      // --- Liste alignée de logos (compétences) ---
      (function initSkillsGrid(){
        const logos = [
          'C.webp',  
          'mysql.webp', 
          'python.webp',
          'sas.webp',
          'suiteoffice.webp',
          'vscode.webp',
          'figma.webp',          
          'github.webp',
          'php.webp',
          'html.webp',
          'css.webp',          
          'javascript.webp',
          'notion.webp',
          'canva.webp',
          'pinterest.webp',
          'latex.webp',
          'overleaf.webp'
          
        ];

        function renderGrid(){
            const cloud = document.getElementById('skills-cloud');
            if (!cloud) return;
            cloud.innerHTML = '';

            logos.forEach(name => {
                const img = document.createElement('img');
                img.src = encodeURI('competences_logos/' + name);
                img.alt = name.replace(/\.[^/.]+$/, '');
                img.loading = 'lazy';
                img.title = img.alt;
                cloud.appendChild(img);
            });
        }

        window.addEventListener('DOMContentLoaded', renderGrid);
        window.addEventListener('load', renderGrid);
        window.addEventListener('resize', () => { clearTimeout(window._skillsGridTimer); window._skillsGridTimer = setTimeout(renderGrid, 120); });
      })();

        // fermer le menu si on clique en dehors
        document.addEventListener('click', function (e) {
            if (!shortcutsMenu.classList.contains('open')) return;
            if (!shortcutsMenu.contains(e.target) && !shortcutsToggle.contains(e.target)) closeShortcuts();
        });
    }
});

window.addEventListener('load', function() {
    document.body.classList.add('is-loaded');

    const overlay = document.getElementById('loading-overlay');
    if (overlay) overlay.remove();

    // Afficher la date de dernière mise à jour
    const updateDateElement = document.getElementById('update-date');
    if (updateDateElement) {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        updateDateElement.textContent = `${day}/${month}/${year}`;
    }

    // Menu mobile hamburger
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isHidden = mobileMenu.style.display === 'none' || !mobileMenu.style.display;
            mobileMenu.style.display = isHidden ? 'block' : 'none';
            
            // Animation du hamburger
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (isHidden) {
                    span.style.transform = 'rotate(45deg)';
                    if (index === 1) span.style.opacity = '0';
                } else {
                    span.style.transform = 'rotate(0deg)';
                    if (index === 1) span.style.opacity = '1';
                }
            });
        });

        // Fermer le menu en cliquant à l'extérieur
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenu.style.display = 'none';
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans.forEach((span, index) => {
                    span.style.transform = 'rotate(0deg)';
                    if (index === 1) span.style.opacity = '1';
                });
            }
        });
    }
});
