import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import postcss from 'rollup-plugin-postcss';

const config = {
  input: 'src/index.js',
  external: ['react', 'react-dom'],
  output: {
    format: 'umd',
    name: 'react-bare-bones-ui',
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
    minify()
  ]
}
export default config