import babel from 'rollup-plugin-babel';
// import minify from 'rollup-plugin-babel-minify';
import postcss from 'rollup-plugin-postcss';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external'

const config = {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'react-override-ui',
    globals: {
      'react': "React",
      'react-dom': 'ReactDOM'
    }
  },
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    resolve(),
    commonjs()
  ]
};

export default config;