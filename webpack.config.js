const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/main1.js',
    output: {
        filename: 'main1.js',
        path: path.resolve(__dirname, 'dist'),
    },
};