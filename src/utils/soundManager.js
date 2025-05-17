class SoundManager {
  constructor() {
    this.sounds = {};
    this.isMuted = false;
  }

  preloadSounds() {
    const soundFiles = {
      start: '/sounds/start.mp3',
      progress: '/sounds/progress.mp3',
      correct: '/sounds/correct.mp3',
      incorrect: '/sounds/incorrect.mp3',
      celebration: '/sounds/celebration.mp3',
      click: '/sounds/click.mp3',
      hover: '/sounds/hover.mp3'
    };

    Object.entries(soundFiles).forEach(([name, path]) => {
      this.sounds[name] = new Audio(path);
      this.sounds[name].load(); // Preload the sound
    });
  }

  play(soundName, volume = 0.5) {
    if (this.isMuted || !this.sounds[soundName]) return;

    // Create a new Audio instance for each play to allow overlapping sounds
    const sound = this.sounds[soundName].cloneNode();
    sound.volume = volume;
    
    sound.play().catch(error => {
      console.log('Sound play failed:', error);
    });
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

// Create a singleton instance
const soundManager = new SoundManager();

// Preload sounds when the module is imported
if (typeof window !== 'undefined') {
  soundManager.preloadSounds();
}

export default soundManager;