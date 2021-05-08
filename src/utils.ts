import { WebGLRenderer, Scene, PerspectiveCamera } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { params } from './params'

/**
 * Factory: returns a function that can be added to an EventListener in order
 * to properly handle window resizing.
 */
export const resize = (
    size: {width: number, height: number},
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer ) => {
    return () => { 
        size.width = window.innerWidth;
        size.height = window.innerHeight;

        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();

        renderer.setSize(size.width, size.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
}

/**
 * Returns a new THREE.Renderer, appended to a given HTML element as a child.
 */
export const makeRenderer = (container: HTMLElement) => {
    const renderer = new WebGLRenderer();
    renderer.setSize(params.width, params.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    return renderer;
}

/**
 * Returns a new THREE.Scene
 */
export const makeScene = () => {
    return new Scene();
}

/**
 * Returns a new THREE.PerspectiveCamera
 */
export const makePerspectiveCamera = (viewAngle: number, near: number, far: number) => {
    return new PerspectiveCamera(viewAngle, params.width / params.height, near, far);
}

/**
 * Activates Orbit Controls for this camera.
 */
export const makeOrbitControls = (camera: THREE.PerspectiveCamera, container: HTMLElement) => {
    const orbitControls = new OrbitControls(camera, container);    
    orbitControls.enableDamping = true;
    return orbitControls;
}
