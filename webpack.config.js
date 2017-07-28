var webpack =require("webpack");
module.exports = {
    devtool:"source-map",
    entry: {
        index:[
            'webpack-dev-server/client?http://localhost:5000',
            'webpack/hot/only-dev-server',
            __dirname + "/src/index.js"
        ]
    }, //入口文件
    output: {
        path: __dirname + "/dist", //打包后的文件存放的地方
        filename: "[name].bundle.js",//打包后输出文件的文件名
        publicPath:"/dist/"   //webpack output is served from

    },

    devServer: {
        inline:true,
        contentBase: "./",  //content not from webpack is serverd
        port: '5000',

        historyApiFallback: true,

            //配置服务器
        proxy:{
           '/v4/api/*': {
                  target: 'http://m.maizuo.com',
                  host: 'm.maizuo.com',
                  changeOrigin:true
              }
        }
    },
    module:{
        loaders:[  
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'//
            },

            {
                test:/\.js$/, 
                exclude: /node_modules/, //排除一个
                loader:'babel-loader',
                query:{
                    presets:['es2015','react']
                }
                
            },

            {
                test: /\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },

            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[ext]?[hash]' //目标文件夹
                }
            }, 
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[ext]'
                }

            }
            
        ]
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
      
    ]    
}
