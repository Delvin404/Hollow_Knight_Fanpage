/* ==================================================================
   EDIT THIS BLOCK to set your models and how they behave.
   Sizes are set here only. Everything else on the page can stay as it is.
   ================================================================== */
window.SITE_CONFIG = {
  // ---- Hornet model (top of the page) ----
  modelUrl: 'models/hollow_knight1.glb',

  // Size. 1 = default fit, 1.3 = 30% bigger, 0.8 = 20% smaller.
  modelScale: 1,

  // Nudge the model in the window (small numbers, e.g. y: -0.2 moves it down).
  modelOffset: { x: 0, y: 0, z: 0 },

  // Starting turn in degrees, to choose which way she faces the camera.
  modelRotationY: 0,

  // Optional separate texture images. role: color, normal, roughness, metalness, ao, emissive
  textures: [],
  flipTextures: false,

  // ---- Spin feel (both model windows) ----
  idleSpeed: 14,
  dragSensitivity: 0.009,
  slowDownSeconds: 1.4,

  // ---- Second model (the round window at the bottom of the page) ----
  showSecondModel: true,
  secondModel: {
    url: 'models/hollow_knight2.glb',          // <-- FIXED: full path + .glb extension
    title: 'Hollow Knight',                     // heading shown next to the window
    role: 'Second model',
    description: 'A second model in the round window. Replace models/hollow_knight2.glb or set secondModel.url in config.js.',
    scale: 1,
    offset: { x: 0, y: 0, z: 0 },
    rotationY: 0,
    textures: [],
    flipTextures: false
  },

  // ---- Background model (moves as you scroll) ----
  backgroundModel: {
    url: '',
    scale: 1
  }
};