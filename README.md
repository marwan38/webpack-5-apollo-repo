# Reproduction steps

1. `npm i`
2. `npm run webpack`

## Issue:

Look at the output under ./dist/main.js. There are 2 references to `require('react-dom/server)` that are not resolved by webpack. I do not expect to see any references to the external module as it has NOT been marked as external.
