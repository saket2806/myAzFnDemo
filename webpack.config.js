const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
 
module.exports = {
 target:"node",
 entry: {
  'patient-add/index':'./patient-add/src/index.ts',
  'patient-delete/index':'./patient-delete/src/index.ts',
  'patient-get/index':'./patient-get/src/index.ts',
  'patient-update/index':'./patient-update/src/index.ts'
  },  
  devtool:'source-map',
  module :{
    rules :[{
      test:/\.tsx?$/,
      use:'ts-loader',
      exclude:/node_modules/
    },],
  },  
  resolve:{
    extensions:['.tsx','.ts','.js']
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