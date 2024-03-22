import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import external from "rollup-plugin-peer-deps-external";
// import swc from "@rollup/plugin-swc";
// import dts from "rollup-plugin-dts";

export default {
  input: "src/web-component.tsx",
  output: {
    file: "bundle.js",
    format: "cjs",
  },

  plugins: [
    postcss(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
  ],
};
