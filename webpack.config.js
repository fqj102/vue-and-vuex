const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        chrome: '58',
                                        ie: '9'
                                    }
                                }
                            ]
                        ],
                    }
                }
            },
            {
                test: /\.css$/,
                //loader: 'css-loader',
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },

    resolve: {
        alias: {
            'vue$':'vue/dist/vue.esm.js'
        }
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        }),
    ]
}
