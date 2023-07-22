import path from 'path';
import url from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = url.fileURLToPath(import.meta.url),
    __dirname = path.dirname(__filename);

export default {
    devtool: 'source-map',
    entry: './src/index.mts',
    experiments: {
        outputModule: true
    },
    mode: 'production',
    module: {
        rules: [{ test: /\.mts$/, use: 'ts-loader' }]
    },
    resolve: {
        extensions: ['.mts', '.mjs', '.js', '.ts', '.json']
    },
    output: {
        clean: true,
        library: {
            type: 'module'
        },
        module: true,
        filename: 'index.mjs',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tile Engine',
            scriptLoading: 'module'
        })
    ]
};