# threejs_template
A basic, dev-mode template for Threejs with Webpack and a webpack-web-server. Makes it simple to start playing with a basic ThreeJS
setup including Omni controls without having to trudge through webpack or Threejs setup.

## Usage
1. `degit nikokozak/threejs_template <target_dir>`
2. `cd <target_dir>`
3. `npm install`
4. `git init`
5. `npm run dev`

## Details
For ease of use, the following assumptions are made:
1. "Development" mode is hardcoded into `webpack.config.js`.
2. No html webpack plugin is provided. Instead, a base html file is included in `dist/index.html`.
3. Threejs is bundled in with anything in `src`. Make sure to separate vendor files in production.
4. Only two `npm run` commands are provided: `dev` and `build`. Both run in dev mode, alter to your heart's content.
5. Threejs template is full-window, and includes omnidirectional controls.
