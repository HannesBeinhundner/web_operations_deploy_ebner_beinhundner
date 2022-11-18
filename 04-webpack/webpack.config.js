const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i, //Update Test
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    "sass-loader", //SASS to CSS
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    devServer: {
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html", // or src/index.html
        }),
    ],
};
