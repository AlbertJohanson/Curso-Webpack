const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

module.exports = {
    entry: {
        home: path.resolve(__dirname, './src/js/index.js'),
    },
    mode: 'development',
   output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Plugins'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}