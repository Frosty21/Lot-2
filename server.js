const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const configs = {
    mobile: './client_mobile/webpack.config',
};

const config = require(configs[process.argv[2]] || configs.screen);

new WebpackDevServer(webpack(config), {
    contentBase: config.output.path,
    publicPath: config.output.publicPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
})
.listen(3001, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('[*CLIENT*] Running at http://localhost:3001');
});
