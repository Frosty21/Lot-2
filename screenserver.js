const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const configs = {
    screen: './client_screen/webpack.config'
};

const config = require(configs[process.argv[2]] || configs.screen);

new WebpackDevServer(webpack(config), {
    proxy: {
        "*": 'http://localhost:3002'
    },
    contentBase: config.output.path,
    publicPath: config.output.publicPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
})
.listen(80, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('[*SCREEN*] Running at http://localhost:80');
});
