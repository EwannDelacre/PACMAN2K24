let scene, camera, renderer, car;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.6);
    document.getElementById('viewer').appendChild(renderer.domElement);

    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    const loader = new THREE.GLTFLoader();
    loader.load('assets/models/car.glb', (gltf) => {
        car = gltf.scene;
        scene.add(car);
    });

    camera.position.z = 5;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function changeColor(color) {
    if (car) car.traverse((child) => {
        if (child.isMesh) {
            child.material.color.set(color);
        }
    });
}

function addPart(part) {
    console.log(`Adding part: ${part}`);
    // Future functionality for adding parts
}

init();
