module.exports = {
  entry: './src/App.js',
  output: {
    path: __dirname,
    filename: "main.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ["es2015", "react"]
      }
    }]
  }
};
