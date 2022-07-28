const path = require('path');

module.exports = {
  entry: "./index.ts",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
