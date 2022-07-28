# Reproduction steps

1. `npm i`
2. `npm run webpack`

## Issue:

Look at the output under ./dist/main.js. There are 2 references to `require('react-dom/server)` that are not resolved by webpack.
