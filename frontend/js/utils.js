// Fonction pour charger un modèle 3D
export function loadModel(path, callback) {
    const loader = new THREE.GLTFLoader(); // Utilisation de GLTFLoader depuis THREE.js
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

// Fonction pour changer la couleur d'une pièce
export function changeColor(object, color) {
    if (object && object.material) {
        object.material.color.set(color);
    }
}
