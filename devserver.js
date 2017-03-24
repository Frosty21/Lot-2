var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var configs = {
    mobile: './client_mobile/webpack.config',
    screen: './client_screen/webpack.config'
};

var config = require(configs[process.argv[2]] || configs.screen);

new WebpackDevServer(webpack(config), {
    contentBase: config.output.path,
    publicPath: config.output.publicPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
})
.listen(3000, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://0.0.0.0:3000');
});
