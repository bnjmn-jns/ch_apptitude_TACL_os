// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

var path = require('path');
var root = process.cwd();
var src = path.resolve(root, 'src');
var config = path.resolve(src, 'config.js');
var nodeModulesSrc = path.resolve(root, 'node_modules');
var buildSrc = path.resolve(root, 'build');
var clientSrc = path.resolve(src, 'client');
var serverSrc = path.resolve(src, 'server');
var universalSrc = path.resolve(src, 'universal');
var taclSrc = path.resolve(universalSrc, 'features/common_ui');

var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
var instanceOfHardSourceWebpackPlugin = new HardSourceWebpackPlugin();

module.exports = (storybookBaseConfig, configType) => {
  // console.log('storybookBaseConfig', JSON.stringify(storybookBaseConfig, null, 4));
  storybookBaseConfig.resolve.modules.push(universalSrc);
  storybookBaseConfig.resolve.alias = {
    tacl: taclSrc,
  };
  storybookBaseConfig.module.rules.push({
    test: /\.(eot|svg|ttf|woff|woff2|ico)$/,
    loader: 'file-loader?limit=10000',
  });
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader', // creates style nodes from JS strings
      },
      {
        loader: 'css-loader', // translates CSS into CommonJS
      },
    ],
    include: nodeModulesSrc,
  });
  storybookBaseConfig.plugins.push(instanceOfHardSourceWebpackPlugin);
  return storybookBaseConfig;
};
