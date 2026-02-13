// Données des projets (à personnaliser)
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

    // Animation au défilement
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            } else {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            }
        }

        const mainText = document.getElementById('main-text');
        if (mainText) {
            if (window.scrollY > 30) {
                mainText.classList.add('is-hidden');
            } else {
                mainText.classList.remove('is-hidden');
            }
        }
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
});
