import * as THREE from 'three'
import { params } from './params'
import { 
    resize, 
    makeRenderer, 
    makeScene, 
    makePerspectiveCamera, 
    makeOrbitControls 
} from './utils'

// -------------- SETUP ---------------- //

// Canvas
const canvas = document.getElementById('three');

// Scene
const scene = makeScene();

// Camera
const camera = makePerspectiveCamera(75, 1, 100);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = makeRenderer(canvas);

// Resize Handling
window.addEventListener('resize', resize(params, camera, renderer));

// Orbit Controls
const controls = makeOrbitControls(camera, canvas);

// -------------- TEXTURES, OBJECTS, ETC. ---------------- //

// Textures
// const textureLoader = new THREE.TextureLoader();

// BASE CUBE
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial()
)
scene.add(cube);

// -------------- REFRESH & UPDATE CYCLE ---------------- //

// const clock = new THREE.Clock();

const tick = () => 
{
    // const elapsedTime = clock.getElapsedTime();

    controls.update();

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
}

tick();
