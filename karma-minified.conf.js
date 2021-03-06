module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'requirejs'],
        files: [
            'ziggy/test/test-main.js',

            {pattern: 'output/ziggy.min.js', included: false},
            {pattern: 'ziggy/test/**/*.js', included: false},
            {pattern: 'node_modules/squirejs/src/*.js', included: false}
        ],
        colors: true,
        reporters: ['dots']
    });
};