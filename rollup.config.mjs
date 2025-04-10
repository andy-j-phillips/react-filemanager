import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import svg from 'rollup-plugin-svg';
import packageJson from './package.json' with { type: 'json' };

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({
      modules: true,
      extract: isProduction ? 'styles.css' : false,
      use: ['sass'],
    }),
    svg(),
    isProduction && terser(),
  ].filter(Boolean),
};
