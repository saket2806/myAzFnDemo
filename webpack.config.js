const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
 
module.exports = {
 target:"node",
 entry: {
  'patient-add/index':'./patient-add/src/index.ts',
  'patient-delete/index':'./patient-delete/src/index.ts',
  'patient-get/index':'./patient-get/src/index.ts',
  'patient-update/index':'./patient-update/src/index.ts',
  'patient-get/spec':'./patient-get/src/spec.js',
  },  
  devtool:'source-map',
  module :{
    rules :[{
      test:/\.tsx?$/,
      use:'ts-loader',
      exclude:/node_modules/
    },],
    loaders: [
      {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
      {loader: 'style-loader!css-loader', test: /\.css$/},
      {loader: 'url-loader', test: /\.gif$/},
      {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
    ],
  },  
  resolve:{
    alias: {
      config$: './configs/app-config.js',
      react: './vendor/react-master',
    },
    extensions:['.tsx','.ts','.js'],
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
    ],
  },  

 output: {filename: '[name].js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs'
  },
  plugins:[
    new CopyPlugin({
      patterns:[
        {from:"./patient-add/function.json",to:"patient-add"},
        {from:"./patient-delete/function.json",to:"patient-delete"},
        {from:"./patient-get/function.json",to:"patient-get"},
        {from:"./patient-update/function.json",to:"patient-update"},
      ],
    })
  ]
}; 