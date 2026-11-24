// --- Mode clair / mode sombre façon Apple ---
// Le mode clair est celui par défaut (data-theme="clair" dans index.html), même si l'appareil
// est réglé en sombre. Le bouton en bas à droite bascule d'un mode à l'autre ; le choix est
// mémorisé dans le navigateur. Ce script est chargé dans <head> pour éviter un flash du mauvais mode.
(function () {
    const STORAGE_KEY = 'portfolio-mode';
    const root = document.documentElement;
    // Couleur de la barre du navigateur sur téléphone, accordée au fond de chaque mode
    const BROWSER_BAR_COLORS = { clair: '#6cc6e0', sombre: '#000000' };

    const MOON_ICON = '<svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
    const SUN_ICON = '<svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/>'
        + '<path d="M12 1.5v2.5M12 20v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M1.5 12H4M20 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" '
        + 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

    function applyMode(mode) {
        root.setAttribute('data-theme', mode);

        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', BROWSER_BAR_COLORS[mode]);

        const button = document.querySelector('.mode-toggle');
        if (button) {
            const label = mode === 'sombre' ? 'Passer en mode clair' : 'Passer en mode sombre';
            button.setAttribute('aria-pressed', String(mode === 'sombre'));
            button.setAttribute('aria-label', label);
            button.title = label;
        }
    }

    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* navigation privée */ }
    applyMode(saved === 'sombre' ? 'sombre' : 'clair');

    document.addEventListener('DOMContentLoaded', function () {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'mode-toggle';
        button.innerHTML = MOON_ICON + SUN_ICON;
        button.addEventListener('click', function () {
            const next = root.getAttribute('data-theme') === 'sombre' ? 'clair' : 'sombre';
            applyMode(next);
            try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* navigation privée */ }
        });
        document.body.appendChild(button);
        applyMode(root.getAttribute('data-theme'));
    });
})();
