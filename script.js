// Données des projets
const projectsData = {
    aura: {
        title: "🎉 AURA - Planification d'évènements",
        fullDesc: "Application web complète de gestion d'événements permettant aux particuliers et professionnels d'organiser et piloter leurs projets événementiels.\n\n• Gestion d'événements : création et configuration complète d'événements (lieu, date, durée, dress code, nourriture, décoration), système d'invitations avec intégration du carnet d'adresses, calendrier centralisé pour visualiser tous les événements.\n• Gestion budgétaire : constitution et suivi de budgets par événement avec catégorisation des dépenses (nourriture, décoration, sécurité, transport), tableau de bord statistique pour analyser l'évolution des dépenses dans le temps.\n• Outils de productivité : carnet d'adresses intégré, carnet de notes personnel, liens d'accès rapides personnalisables depuis l'accueil, tableau de bord centralisé.\n• Gestion multi-utilisateurs : système d'authentification, personnalisation du profil, invitation de contacts externes au réseau.\n\nMon rôle : Développement full-stack avec Django, conception UI/UX complète (Figma), implémentation du système de gestion budgétaire avec analytics, développement du calendrier et des outils de productivité, et documentation technique.\n\nTechnologies : Django, Python, HTML/CSS, Figma, GitHub\nStatut : Application fonctionnelle",
        banner: "projects/AURA_evenement/baniere_aura.webp",
        image: "projects/AURA_evenement/aura.webp"
    },
    keyper: {
        title: "🗝️ KEYPER - gestion de foyer : get things done, together",
        fullDesc: "Application web collaborative permettant aux familles et colocations de centraliser la gestion de leur quotidien.\n\nOrganisation domestique : création et gestion de plusieurs foyers, plans interactifs du logement avec attribution de tâches par pièce, listes de courses intelligentes (items cochés automatiquement transférés vers l'inventaire cuisine), système de rappels avec notifications personnalisées.\n\nCollaboration & partage : chat intégré en temps réel par foyer, feuilles de notes collaboratives, partage et enregistrement de recettes de cuisine.\n\nGamification : système complet de récompenses, classements entre membres du foyer, collection de trophées et statistiques de contribution pour motiver l'accomplissement des tâches. Gestion multi-utilisateurs : système de permissions granulaires (administrateur, membre, observateur, invité) et personnalisation complète des profils et avatars.\n\nMon rôle : Développement full-stack avec Django, conception UI/UX complète (Figma), implémentation de l'architecture multi-foyers avec système de rôles, développement des fonctionnalités temps réel (chat, notifications), déploiement en ligne (PythonAnywhere), et pilotage projet en méthode SCRUM (gestion sprints, backlogs, coordination équipe).\n\nTechnologies : Django, Python, HTML/CSS, PythonAnywhere, Figma, GitHub\nStatut : Application déployée en ligne et fonctionnelle",
        banner: "projects/KEYPER_gestion_de_foyer/baniere_keyper.webp",
        image: "projects/KEYPER_gestion_de_foyer/keyper.webp"
    },
    smartycat: {
        title: "📚 SMARTYCAT - l'app qui te rend plus intelligent",
        fullDesc: "Plateforme web d'apprentissage ludique permettant aux utilisateurs de tester et développer leurs connaissances sur diverses thématiques (histoire, musique, sport, cuisine, etc.).\n\n• Contenu éducatif modulaire : séries de quiz et questions classées par thème et niveau, sessions chronométrées et modes d'entraînement.\n• Profils personnalisés : comptes utilisateurs avec avatars, suivi des scores, tableau de progression et historique des performances.\n• Quiz interactifs et adaptatifs : feedback instantané, explications détaillées et suggestions de révision basées sur les réponses.\n• Suivi & motivation : badges, récompenses et statistiques pour encourager la progression continue.\n\nMon rôle : Développement frontend (HTML/CSS), conception de la base de données cryptée (JSON), gestion backend (PHP/Apache via XAMPP), et création de l'identité visuelle complète (UI/UX sur Figma, design graphique sur Canva).\n\nTechnologies : HTML/CSS, PHP, JSON, XAMPP/Apache, Figma, Canva, GitHub\nStatut : Application web fonctionnelle en local.",
        banner: "projects/SMARTYCAT_culture_generale/baniere_smartycat.webp",
        image: "projects/SMARTYCAT_culture_generale/smartycat.webp"
    },
    compareme: {
        title: "🪞 COMPARE ME - COMPARAISON ET RECONNAISSANCE FACIALE",
        fullDesc: "Application desktop de détection de sosies utilisant une base de données constituée de plusieurs centaines de photos pour comparer le visage d'un utilisateur à une base de données de célébrités. L'utilisateur peut capturer une photo via webcam ou importer un fichier, puis l'algorithme analyse et identifie le sosie le plus proche avec un pourcentage de correspondance. L'application génère également un certificat de sosie personnalisé au format PDF.\n\nMon rôle : Développement de l'interface graphique (Tkinter), implémentation de l'algorithme de reconnaissance faciale (DeepFace, OpenCV), gestion de la base de données d'images (Kaggle), calculs de similarité (Numpy), et création de l'expérience utilisateur complète (barre de progression, affichage résultats, export PDF).\n\nTechnologies : Python, DeepFace, OpenCV, Numpy, Tkinter, Threading, FPDF, Kaggle\nStatut : Application desktop fonctionnelle en local",
        banner: "projects/COMPAREME_reconnaissance_faciale/baniere_compareme.webp",
        image: "projects/COMPAREME_reconnaissance_faciale/compareme.webp"
    },
    lacasa: {
        title: "📝 LACASA - chat crypté",
        fullDesc: "Application de messagerie instantanée sécurisée permettant la communication multi-utilisateurs en temps réel avec chiffrement des conversations. Communication & recherche : chat temps réel multi-utilisateurs, fonction de recherche dans l'historique des messages, support d'émojis pour enrichir les conversations.\n\nIntelligence artificielle : assistant IA intégré (Ollama) directement interpellable au sein du chat pour assistance contextuelle. Personnalisation complète : création de comptes utilisateurs, customisation totale de l'interface (fonds d'écran, polices, palettes de couleurs) pour une expérience utilisateur unique. Sécurité : chiffrement des messages pour garantir la confidentialité des échanges.\n\nMon rôle : Développement backend Python pour la logique de messagerie et le chiffrement, implémentation de l'interface utilisateur (HTML/CSS), intégration de l'IA conversationnelle (Ollama), gestion de la personnalisation et des préférences utilisateurs, et documentation technique complète.\n\nTechnologies : Python, HTML/CSS, Ollama (IA), GitHub\nStatut : Application fonctionnelle avec IA intégrée",
        banner: "projects/LACASA_chat_crypte/baniere_lacasa.webp",
        image: "projects/LACASA_chat_crypte/lacasa.webp"
    },
    blender: {
        title: "🧊 BLENDER - Modélisation 3D",
        fullDesc: "Projet personnel de modélisation 3D réalisé avec le logiciel Blender, que je découvre depuis peu en parallèle de mes études.\n\n• Water cake : une part de gâteau dont le cœur est un aquarium miniature (eau translucide, raies, étoiles de mer, galets et algues).\n\nTechnologies : Blender\nStatut : Projet personnel en cours",
        banner: "projects/BLENDER_modelisation_3d/blender_baniere.webp",
        image: "projects/BLENDER_modelisation_3d/water_cake.webp",
        imageMaxWidth: "500px"
    }
};

// Extrait de description affiché sur les cartes projets (350 caractères)
function generateSnippet(fullDesc, length = 350) {
    let snippet = fullDesc.substring(0, length);
    if (fullDesc.length > length) {
        snippet = snippet.substring(0, snippet.lastIndexOf(' ')) + '...';
    }
    return snippet;
}

// Agrandit une image en plein écran ; fermeture au clic à côté de l'image ou avec Échap
function openLightbox(src, alt) {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    const lightboxImg = document.createElement('img');
    lightboxImg.className = 'lightbox-image';
    lightboxImg.src = src;
    lightboxImg.alt = alt;

    overlay.appendChild(lightboxImg);
    document.body.appendChild(overlay);

    function close() {
        overlay.remove();
        document.removeEventListener('keydown', onKey);
    }

    function onKey(e) {
        if (e.key === 'Escape') close();
    }

    // empêcher le clic sur l'image de fermer
    lightboxImg.addEventListener('click', function (ev) { ev.stopPropagation(); });
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', onKey);
}

function openProject(id) {
    const project = projectsData[id];
    if (!project) return;

    const modalTitle = document.getElementById('modal-title');
    modalTitle.innerText = project.title;

    // Bannière entre le titre et la description (remplace celle du projet ouvert précédemment)
    const previousBanner = document.querySelector('#project-modal .modal-banner');
    if (previousBanner) previousBanner.remove();

    const bannerImg = document.createElement('img');
    bannerImg.className = 'modal-banner';
    bannerImg.src = project.banner;
    bannerImg.alt = `Bannière ${project.title}`;
    modalTitle.insertAdjacentElement('afterend', bannerImg);

    document.getElementById('modal-desc').innerText = project.fullDesc;

    // Image principale du projet, sous la description, agrandissable au clic
    const imgContainer = document.getElementById('modal-images');
    imgContainer.innerHTML = '';

    const mainImg = document.createElement('img');
    mainImg.className = 'modal-main-image';
    mainImg.src = project.image;
    mainImg.alt = project.title;

    // Largeur réduite pour les images moins panoramiques que les autres (ex. rendu Blender)
    if (project.imageMaxWidth) {
        mainImg.style.maxWidth = project.imageMaxWidth;
        mainImg.style.justifySelf = 'center';
    }

    mainImg.addEventListener('click', function () {
        openLightbox(mainImg.src, mainImg.alt || 'Image du projet');
    });
    imgContainer.appendChild(mainImg);

    document.getElementById('project-modal').classList.add('show');
}

function closeProject() {
    document.getElementById('project-modal').classList.remove('show');
}

function openLetter() {
    document.getElementById('letter-modal').classList.add('show');
}

function closeLetter() {
    document.getElementById('letter-modal').classList.remove('show');
}

// Fermer la lettre de recommandation avec Échap
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLetter();
});

document.addEventListener('DOMContentLoaded', function () {
    // --- Animation des points de « Chargement du portfolio... » ---
    const dotsEl = document.getElementById('loading-dots');
    if (dotsEl) {
        const frames = ['.', '..', '...'];
        let i = 0;
        const dotsInterval = window.setInterval(() => {
            dotsEl.textContent = frames[i % frames.length];
            i += 1;
        }, 450);
        window.addEventListener('load', () => window.clearInterval(dotsInterval));
    }

    // --- Extraits des cartes projets, générés à partir des descriptions complètes ---
    for (const [projectId, project] of Object.entries(projectsData)) {
        const snippetElement = document.querySelector(`[data-project="${projectId}"] .project-snippet`);
        if (snippetElement) {
            snippetElement.textContent = generateSnippet(project.fullDesc, 350);
        }
    }

    // Rendre visibles les URLs au survol via l'attribut title (sauf pour les liens vers les sections de la page)
    document.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (!a.getAttribute('title') && !href.startsWith('#')) a.setAttribute('title', href);
    });

    // --- Lightbox pour agrandir les images de certifications ---
    document.querySelectorAll('.certification-item').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function () {
            openLightbox(img.src, img.alt || 'Certification');
        });
    });

    // --- Galerie photographie ---
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
        photos.forEach(photoName => {
            const polaroid = document.createElement('div');
            polaroid.className = 'photo-polaroid';

            const img = document.createElement('img');
            img.className = 'photo-item';
            img.src = `photographie/${encodeURI(photoName)}`;
            img.alt = photoName;
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', function () {
                openLightbox(img.src, img.alt || 'Photo');
            });

            polaroid.appendChild(img);
            photoGallery.appendChild(polaroid);
        });
    }

    // --- Logos des compétences ---
    const skillsCloud = document.getElementById('skills-cloud');
    if (skillsCloud) {
        const logos = [
            'C.webp',
            'mysql.webp',
            'java.webp',
            'python.webp',
            'sas.webp',
            'php.webp',
            'html.webp',
            'css.webp',
            'javascript.webp',
            'suiteoffice.webp',
            'vscode.webp',
            'figma.webp',
            'github.webp',
            'notion.webp',
            'canva.webp',
            'pinterest.webp',
            'cosmos.webp',
            'latex.webp'
        ];
        logos.forEach(name => {
            const img = document.createElement('img');
            img.src = encodeURI('competences_logos/' + name);
            img.alt = name.replace(/\.[^/.]+$/, '');
            img.loading = 'lazy';
            img.title = img.alt;
            skillsCloud.appendChild(img);
        });
    }

    // --- Banderole : version compacte au défilement, dossier de la section en cours « ouvert » ---
    const header = document.getElementById('site-header');
    if (header) {
        const root = document.documentElement;
        const folders = [...header.querySelectorAll('.folder')];
        const targets = folders.map(folder => document.querySelector(folder.getAttribute('href')));

        // Mesure les hauteurs complète et compacte de la banderole (sans animation) :
        // elles décalent le contenu (--header-full) et l'arrivée des ancres (--header-compact)
        function measureHeader() {
            const wasCompact = header.classList.contains('is-compact');
            header.classList.add('is-measuring');
            header.classList.remove('is-compact');
            root.style.setProperty('--header-full', header.offsetHeight + 'px');
            header.classList.add('is-compact');
            root.style.setProperty('--header-compact', header.offsetHeight + 'px');
            header.classList.toggle('is-compact', wasCompact);
            void header.offsetHeight; // applique l'état avant de réactiver les animations
            header.classList.remove('is-measuring');
        }

        function updateHeader() {
            header.classList.toggle('is-compact', window.scrollY > 40);

            // Section en cours : le dernier titre passé sous la banderole (la dernière section en bas de page)
            const limit = header.offsetHeight + 40;
            let active = 0;
            targets.forEach((target, i) => {
                if (target && target.getBoundingClientRect().top <= limit) active = i;
            });
            if (window.innerHeight + window.scrollY >= root.scrollHeight - 2) active = targets.length - 1;

            folders.forEach((folder, i) => {
                folder.classList.toggle('is-active', i === active);
                if (i === active) folder.setAttribute('aria-current', 'location');
                else folder.removeAttribute('aria-current');
            });
        }

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                ticking = false;
                updateHeader();
            });
        }, { passive: true });
        window.addEventListener('resize', () => {
            measureHeader();
            updateHeader();
        });
        window.addEventListener('load', () => {
            measureHeader();
            updateHeader();
        });
        measureHeader();
        updateHeader();
    }
});

// Fin du chargement : retirer l'écran de chargement et le flou
window.addEventListener('load', function () {
    document.body.classList.add('is-loaded');

    const overlay = document.getElementById('loading-overlay');
    if (overlay) overlay.remove();
});
