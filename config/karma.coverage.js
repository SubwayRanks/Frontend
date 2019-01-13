var parseArgs = require('minimist')
var webpackConfig = require('./webpack.config.coverage')

var args = parseArgs(process.argv.slice(2), {
  string: ['env'],
  default: {
    'env': 'mocha'
  }
})

var reporters = ['mocha', 'coverage']
var browsers = ['Chrome'];

if (args.env === 'tc') {
  reporters = ['teamcity', 'coverage', 'progress'];
  browsers = ['HeadlessChrome'];
  process.env.CHROME_BIN = require('puppeteer').executablePath();
}

if (args.env === 'jk') {
  reporters = ['junit', 'coverage', 'progress'];
  browsers = ['HeadlessChrome'];
  process.env.CHROME_BIN = require('puppeteer').executablePath();
}

module.exports = function (config) {
  config.set({
    basePath: '..',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'node_modules/es6-promise/dist/es6-promise.auto.js',
      '**/*.spec.ts'
    ],
    reporters: reporters,
    preprocessors: {
      '**/*.spec.ts': ['webpack']
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    junitReporter: {
      outputDir: 'reports/'
    },
    coverageReporter: {
      reporters: [{
        type: 'json',
        dir: 'coverage/json',
        subdir: '.'
      }]
    },
    proxies: {
      '/api': 'http://localhost:3000',
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    browsers,
    customLaunchers: {
      HeadlessChrome: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    mime: {
      'text/x-typescript': ['ts']
    },
    singleRun: true,
    concurrency: Infinity
  })
}
