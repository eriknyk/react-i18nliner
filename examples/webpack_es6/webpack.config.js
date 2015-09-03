module.exports = {
  entry: [
    "./i18nliner-glue.js",
    "./src/index.js"
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: "babel-loader!react-i18nliner/webpack-loader" },
      { test: /\.json$/, loader: "json-loader" }
    ]
  }
};
