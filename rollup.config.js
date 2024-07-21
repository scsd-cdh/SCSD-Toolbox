import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
// import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts', // Entry point
  output: [
    {
      file: 'dist/bundle.esm.js', // ESM format
      format: 'esm',
    },
    {
      file: 'dist/bundle.umd.js', // UMD format
      format: 'umd',
      name: 'scsd-toolbox',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    vue(),
  ],
};