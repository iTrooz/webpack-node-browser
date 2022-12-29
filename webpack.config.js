const path = require('path');

module.exports = [
  {
    mode: 'production',
    entry:{
      'packageapi': './src/index.js',
    },
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'packageapi',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
  }
]
  