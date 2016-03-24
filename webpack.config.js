module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './js',
    filename: 'main.js'
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-react'),
            require.resolve('babel-preset-stage-0'),
          ]
        }
      }
    ]
  }
};
