const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const FaviconsWebpackPlugin = require('refavicons-webpack-plugin')
const autoprefixer = require('autoprefixer')
const webpackConfig = require('./webpack.config.base')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const env = require('../environment/prod.env')


webpackConfig.module.rules = [...webpackConfig.module.rules,
  {
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: false,
          importLoaders: 2
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixer],
          sourceMap: false
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: false
        }
      },
    ],
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: false,
          importLoaders: 2
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixer],
          sourceMap: false
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: false
        }
      },
    ],
  },
  {
    test: /\.(jpg|png|gif)$/,
    loader: 'file-loader',
    options: {
      regExp: /(img\/.*)/,
      name: '[name].[ext]',
      publicPath: '../',
      outputPath: 'assets/img/'
    }
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader',
    options: {
      regExp: /(fonts\/.*)/,
      name: '[name].[ext]',
      publicPath: '../fonts/',
      outputPath: 'fonts/'
    }
  }
]
webpackConfig.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      test: /\.js$/
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardUnused: false,
        discardComments: { removeAll: true }
      },
      canPrint: true
    })
  ]
}

// ensure ts lint fails the build
webpackConfig.module.rules[0].options = {
  failOnHint: true
}

webpackConfig.plugins = [...webpackConfig.plugins,
  new HtmlWebpackPlugin({
    inject: true,
    template: 'src/index.html',
    favicon: 'src/favicon.ico',
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      html5: false,
      minifyCSS: true,
      removeComments: true,
      removeEmptyAttributes: true,
    }
  }),
  new CompressionPlugin({
    filename: '[path].gz[query]',
    test: /\.js$/
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  }),
  new DefinePlugin({
    'process.env': env
  }),
  new FaviconsWebpackPlugin('./src/icon.png')
]

webpackConfig.mode = 'production';

module.exports = webpackConfig
