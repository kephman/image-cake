const presets = [
    [
        '@babel/env',
        {
            modules: 'commonjs',
            targets: '> 0.25%, not dead',
        },
    ],
    [
        '@babel/preset-react',
    ],
];

module.exports = { presets };
