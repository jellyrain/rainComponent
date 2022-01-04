const postcssPresetEnv = require('postcss-preset-env')
const atImport = require("postcss-import")

module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        atImport(),
        postcssPresetEnv({
            stage: 0,
            autoprefixer: { grid: true },
            browsers: [
                'ie >= 8',
                'ios >= 6',
                'android >= 4.0',
                'firefox >= 8',
                'chrome >= 24',
                'safari >= 10',
                'edge >= 17',
                'opera >= 10'
            ]
        })
    ]
}