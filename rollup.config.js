import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',

  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
  ],
  external: ['qunit', 'semantic-dom-selectors'],

  output: {
    file: 'dist/qunit-dom.js',
    format: 'amd',
    amd: {
      id: 'qunit-semantic-assertions'
    },
    sourcemap: true,
  },
};
