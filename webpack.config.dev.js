const path = require("path");

module.exports = {
  entry: "./docs/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/docs/static/"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
      'slate': path.resolve(__dirname, 'node_modules', 'slate')
    }
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel',
        exclude: path.resolve(__dirname, "node_modules")
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ]
  }
};
