const path = require('path');
const entryPath = './src/app.js';
const publicDirPath = path.join(__dirname, 'public');

module.exports = {
    entry: entryPath,
    output: {
        path: publicDirPath,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: "cheap-module-eval-source-map", //help us to idenitify the errors.
    devServer: {
        contentBase: publicDirPath,
        port: 3000,
        historyApiFallback: true
    }
}