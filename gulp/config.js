module.exports = {
  files: {
    scss: {
      base: './scss/*.scss',
      buildFolder: './css',
      watchPath: './scss/**/*.scss'
    },
    js: {
      name: 'main.js',
      base: './src/**/*',
      buildFolder: './js',
      watchPath: './src/**/*'
    }
  }
};