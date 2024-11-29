// Variables globales
let scene, camera, renderer, carModel;

// Initialisation de la scène
export function initScene() {
    // Création de la scène
    scene = new window.THREE.Scene(); // Utilisation de THREE à partir de window
    scene.background = new window.THREE.Color(0xeeeeee);

    // Création de la caméra
    camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 5);

    // Création du renderer
    renderer = new window.THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    // Ajout de lumières
    const directionalLight = new window.THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    const ambientLight = new window.THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Chargement du modèle de base
    loadModel('./assets/models/classic.glb', (model) => {
        carModel = model;
        scene.add(carModel);
    });

    // Lancer l'animation
    animate();
}

// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Fonction pour charger un modèle
function loadModel(path, callback) {
    const loader = new window.THREE.GLTFLoader(); // Utilisation de GLTFLoader depuis window
    loader.load(
        path,
        (gltf) => {
            const model = gltf.scene;
            callback(model);
        },
        undefined,
        (error) => {
            console.error('Erreur lors du chargement du modèle :', error);
        }
    );
}

// Ajustement de la taille au redimensionnement
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
