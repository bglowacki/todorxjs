const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, './src'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './js'),
    inline: true,
    hot: true,
    historyApiFallback: true,
    host: "0.0.0.0",
    port: "8888"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2
    }),
    new HtmlWebpackPlugin({
      title: 'RightHello App',
      filename: 'index.html',
      template: 'index.ejs'
      
    }),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.(jpe?g|png|gif|svg|eot|woff|woff2|ttf)$/i, use:[{loader: 'url-loader?limit=10000?name=[path][name].[ext]'}] },
      { test: /\.(js$|jsx$)/, exclude: [/node_modules/], use: [{loader: 'babel-loader'}] },
      { test: /\.(sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  }
};


if (process.env.ENV == 'production') {
  webpackConf.plugins.push(new UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
  
  webpackConf.plugins.push(new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  );
  
  webpackConf.output.filename = "[name].[chunkhash].js";
}

