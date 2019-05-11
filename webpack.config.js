module.exports = {
    entry: [
        './src/App.js'
    ],
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        loader: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }]
    }
};