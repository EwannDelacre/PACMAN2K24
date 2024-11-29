import { loadModel } from './utils.js';

let scene, camera, renderer, carModel;

// Initialisation de la scène 3D
function initScene() {
    // Crée la scène
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);

    // Ajoute une caméra
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 2, 5);

    // Crée le renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Ajoute une lumière directionnelle
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7.5);
    scene.add(light);

    // Ajoute une lumière ambiante
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Charge le modèle de base
    loadModel('./assets/models/classic.glb', (model) => {
        carModel = model;
        scene.add(carModel);
    });

    // Lance l'animation
    animate();
}

// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Fonction pour ajouter une pièce au modèle
function addPart(modelPath) {
    loadModel(modelPath, (part) => {
        if (carModel) {
            carModel.add(part);
        }
    });
}

// Ajuste la taille de la scène au redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Expose certaines fonctions globalement
window.addPart = addPart;

// Initialise la scène au chargement
initScene();
