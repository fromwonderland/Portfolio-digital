// --- TEST D'ESTHÉTIQUES APPLE (branche test-esthetique-apple) ---
// Applique l'esthétique choisie (mémorisée dans le navigateur) avant l'affichage de la page,
// puis ajoute un widget horloge façon macOS avec une pastille par esthétique.
// Pour abandonner le test : retirer themes.js et themes.css de index.html.
(function () {
    const THEMES = [
        { id: 'clair', label: 'Apple clair' },
        { id: 'fond', label: "Fond d'écran macOS" },
        { id: 'sombre', label: 'Apple sombre' },
        { id: 'original', label: 'Original (fond noir)' }
    ];
    const STORAGE_KEY = 'portfolio-theme';
    const root = document.documentElement;

    function applyTheme(id) {
        root.setAttribute('data-theme', id);
        // data-mac active les fenêtres façon macOS (toutes les esthétiques sauf l'originale)
        if (id === 'original') root.removeAttribute('data-mac');
        else root.setAttribute('data-mac', '');

        try { localStorage.setItem(STORAGE_KEY, id); } catch (e) { /* navigation privée */ }

        document.querySelectorAll('.theme-swatch').forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.theme === id));
        });
        // La banderole mesure sa hauteur au redimensionnement : la police peut changer d'un thème à l'autre
        window.dispatchEvent(new Event('resize'));
    }

    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* navigation privée */ }
    applyTheme(THEMES.some(t => t.id === saved) ? saved : 'clair');

    document.addEventListener('DOMContentLoaded', function () {
        const widget = document.createElement('div');
        widget.className = 'theme-widget';
        widget.setAttribute('role', 'group');
        widget.setAttribute('aria-label', "Choisir l'esthétique du portfolio");

        const clock = document.createElement('div');
        clock.className = 'theme-clock';
        clock.setAttribute('aria-hidden', 'true');
        widget.appendChild(clock);

        const swatches = document.createElement('div');
        swatches.className = 'theme-swatches';
        THEMES.forEach(theme => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'theme-swatch theme-swatch--' + theme.id;
            button.dataset.theme = theme.id;
            button.title = theme.label;
            button.setAttribute('aria-label', 'Esthétique : ' + theme.label);
            button.setAttribute('aria-pressed', String(root.getAttribute('data-theme') === theme.id));
            button.addEventListener('click', () => applyTheme(theme.id));
            swatches.appendChild(button);
        });
        widget.appendChild(swatches);
        document.body.appendChild(widget);

        // Horloge du widget (heure locale de l'appareil), mise à jour toutes les 10 secondes
        function tick() {
            clock.textContent = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        }
        tick();
        setInterval(tick, 10000);
    });
})();
