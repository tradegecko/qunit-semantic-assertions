const path = require('path');
const babel = require('rollup-plugin-babel');
const Rollup = require('broccoli-rollup');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const concat = require('broccoli-concat');

const semanticDomSelectors = new Funnel(path.dirname('./node_modules/semantic-dom-selectors/dist/semantic-dom-selectors.js'), {
  include: ['semantic-dom-selectors.js']
});

const rollup = new Rollup('.', {
  rollup: {
    input: 'index.js',

    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ],

    output: {
      file: 'dist/qunit-semantic-assertions.js',
      format: 'amd',
      amd: {
        id: 'qunit-semantic-assertions'
      },
      // sourcemap: true,
    },
  }
});

module.exports = concat(new MergeTrees([rollup, semanticDomSelectors]), {
  outputFile: '/qunit-semantic-assertions.js'
});
