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
    url: 'models/hollow_knight2.glb',          
    title: 'Hollow Knight',                    
    role: 'The Vessel',
    description: 'A creation of the Pale King, raised to contain the Radiance. Sealed within the Black Egg, this fallen knight waits in silence. Discover the tragic truth of Hallownests greatest sacrifice.',
    scale: 1,
    offset: { x: 0, y: 0, z: 0 },
    rotationY: 0,
    textures: [],
    flipTextures: false
  },

  backgroundModel: {
    url: '',
    scale: 1
  }
};
