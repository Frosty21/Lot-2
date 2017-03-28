const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const configs = {
    mobile: './client_mobile/webpack.config',
    screen: './client_screen/webpack.config'
};

const config = require(configs[process.argv[2]] || configs.screen);

new WebpackDevServer(webpack(config), {
    proxy: {
        "*": 'http://localhost:3001'
    },
    contentBase: config.output.path,
    publicPath: config.output.publicPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
})
.listen(3000, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://localhost:3000');
});
