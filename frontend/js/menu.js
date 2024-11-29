// Fonction pour créer un élément de menu
function createMenuItem(name, imagePath, modelPath) {
    const menu = document.getElementById('parts-list');

    // Crée un conteneur pour l'élément
    const item = document.createElement('div');
    item.className = 'menu-item';

    // Ajoute une image de prévisualisation
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = name;

    // Ajoute le nom de la pièce
    const label = document.createElement('p');
    label.textContent = name;

    // Ajoute un bouton pour appliquer la pièce
    const button = document.createElement('button');
    button.textContent = 'Ajouter';
    button.onclick = () => {
        window.addPart(modelPath);
    };

    // Assemble l'élément
    item.appendChild(img);
    item.appendChild(label);
    item.appendChild(button);
    menu.appendChild(item);
}

// Initialisation du menu avec des exemples
function initMenu() {
    createMenuItem('Aileron', './assets/icons/spoiler.png', './assets/models/spoiler.glb');
    createMenuItem('Jantes', './assets/icons/rim.png', './assets/models/rim.glb');
    createMenuItem('Kit Widebody', './assets/icons/body.png', './assets/models/body.glb');
    createMenuItem('Peinture', './assets/icons/paint.png', './assets/models/paint.glb');

}

// Initialise le menu au chargement
document.addEventListener('DOMContentLoaded', initMenu);
