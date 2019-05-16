import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import postcss from 'rollup-plugin-postcss';

import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';

const config = {
  input: 'src/index.js',
  external: ['react', 'react-dom'],
  output: {
    format: 'umd',
    name: 'react-override-ui',
    globals: {
      'react': "React",
      'react-dom': 'ReactDOM'
    }
  },
  plugins: [
    postcss({
      modules: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonJS(),
    minify()
  ]
};

export default config;