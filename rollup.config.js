import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import del from 'rollup-plugin-delete'
import progress from 'rollup-plugin-progress'

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/rainComponent.min.js',
        format: 'umd',
        name: 'rainComponent',
        sourcemap: true
    },
    plugins: [
        nodeResolve({
            extensions: ['.ts', '.js'],
            modulesOnly: true
        }),
        commonjs(),
        postcss({
            extensions: ['.scss', '.css'],
            extract: true,
            modules: true,
            sourceMap: true,
            minimize: true
        }),
        babel({
            babelHelpers: 'runtime',
            include: 'src/**/*',
            exclude: 'node_modules/**/*',
            extensions: ['.ts', '.js']
        }),
        terser({
            ie8: true
        }),
        del({
            targets: 'dist/*'
        }),
        progress()
    ]
}