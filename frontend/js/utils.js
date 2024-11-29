// Fonction pour charger un modèle 3D
export function loadModel(path, callback) {
    const loader = new THREE.GLTFLoader();
    loader.load(
        path,
        (gltf) => {
            const model = gltf.scene;
            callback(model);
        },
        (xhr) => {
            console.log(`Chargement du modèle : ${((xhr.loaded / xhr.total) * 100).toFixed(2)}%`);
        },
        (error) => {
            console.error(`Erreur lors du chargement du modèle : ${error}`);
        }
    );
}

// Fonction pour changer la couleur d'une pièce
export function changeColor(object, color) {
    if (object && object.material) {
        object.material.color.set(color);
    }
}
