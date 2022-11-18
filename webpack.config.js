module.exports = {
            entry: "./src/main/js/src/App.js",
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/main.js'
    },
            module: {
                rules: [
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader",
                        },
                    },
                    {
                        test: /\.css$/i,
                        use: ["style-loader", "css-loader"],
                    },
                ],
            },
            optimization: {
                minimize: true,
            },

            performance: {
                hints: false,
                maxEntrypointSize: 512000,
                maxAssetSize: 512000
            },
            resolve: {
                modules: ['node_modules'],
                extensions: ['', '.js', '.jsx', '.css'],
            },
        };