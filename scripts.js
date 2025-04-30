function showTab(tabId) {
    // Cacher tous les contenus
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Afficher le contenu sélectionné
    document.getElementById(tabId).classList.add('active');
}