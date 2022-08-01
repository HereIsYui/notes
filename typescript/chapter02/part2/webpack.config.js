// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// webpage 中所有的配置信息都应该卸载module.exports中
module.exports = {
//    指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'disc'),
        filename: 'bundle.js',
        environment:{
            arrowFunction:false
        }
    },
    // 指定webpack打包时要用的模块
    module: {
        // 指定要加载的规则
        rules: [{
            // test 指定的是规则生效的文件
            test: /\.ts$/,
            // 要是用的loader
            use: 'ts-loader',
            // 要排除的文件
            exclude: /node_modules/
        },{
            test:/\.less$/,
            use:[
                "style-loader",
                "css-loader",
                "less-loader"
            ]
        }]
    },
//    配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}