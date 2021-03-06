const webpack = require('webpack');
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
    const plugins = [
        new CopyWebpackPlugin([
            { from: 'src/static', to: 'static' },
            { from: 'src/favicon', to: '' },
            { from: 'src/styles/preload.css', to: 'preload.css' },
            { from: 'src/manifest.json', to: 'manifest.json' },
            { from: 'src/browserconfig.xml', to: 'browserconfig.xml' },
            { from: 'src/CNAME', to: '' },
            { from: 'README.md', to: 'README.md' },
        ])
    ];

    if (env && env.prod) {
        plugins.push(
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
        );
    }

    return {
        entry: {
            app: './src/index.js',
            vendor: ['react', 'react-dom']
        },
        output: {
            path: path.join(__dirname, './dist'),
            filename: '[name].bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: [
                        path.resolve(__dirname, "src"),
                    ],
                    use: [
                        'babel-loader'
                    ]
                },
                {
                    test: /\.(html)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'file-loader',
                        query: {
                            name: '[name].[ext]'
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader'
                    ],
                    include: [
                        path.resolve(__dirname, "src"),
                        path.resolve(__dirname, "node_modules/normalize.css")
                    ]
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]',
                          outputPath: 'fonts/'
                        }
                      }
                    ]
                }
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: [
                path.resolve(__dirname, 'node_modules'),
                path.join(__dirname, './src')
            ]
        },
        plugins
    };
};
