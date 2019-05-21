var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


var env = config.build.env

var webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash].js')
  },
  optimization: {
    minimize: true, // 是否开启最小化压缩
    runtimeChunk: true,
    removeEmptyChunks: true,
    splitChunks: {
      chunks: 'all', //代码切分
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          minSize: 30000,
          minChunks: 1,
          chunks: 'initial',
          priority: 1 // 该配置项是设置处理的优先级，数值越大越优先处理
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [ //自定js优化配置，会覆盖默认的配置，结合UglifyJsPlugin插件使用，
      // 对js文件进行压缩
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        parallel: true, // 开启并行压缩，充分利用cpu
        extractComments: false, // 移除注释
        uglifyOptions: {
          sourceMap: true,
          mangle: false //
        }
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css\.*(?!.*map)/g,  //注意不要写成 /\.css$/g
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            discardComments: { removeAll: true },
            // 避免 cssnano 重新计算 z-index
            safe: true,
            // cssnano 集成了autoprefixer的功能
            // 会使用到autoprefixer进行无关前缀的清理
            // 关闭autoprefixer功能
            // 使用postcss的autoprefixer功能
            autoprefixer: false
        },
        canPrint: true
    }),
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new MiniCssExtractPlugin({
      filename:'static/css/[name].[hash].css', // 直接打包到static/css文件夹里面
      chunkFilename:'static/css/[id].[hash].css',
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
