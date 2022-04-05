
const path = require('path');


module.exports={
    entry:'./src/js/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/app.js'
    },
    plugins:[],
    mode:'development',
    module:{
        rules:[
            {
                test:/\.js$/i,
                include:path.resolve(__dirname,'src'),
                use:[
                   {
                       loader:'babel-loader',
                       options:{}
                   }
                ]
            },
            {
                test:/\.(sa|sc|c)ss$/i,
                include:path.resolve(__dirname,'src'),
                use:[
                   {
                       loader:'style-loader',
                       options:{}
                   },
                   {
                       loader:'css-loader',
                       options:{}
                   },
                   {
                       loader:'postcss-loader',
                       options:{}
                   }
                ]
            }
        ]
    },
    // devServer:{
    //     static: path.resolve(__dirname, 'dist'),
    //     port: 8080,
    //     open: true,
    //     hot: true
    // }
    watch:true
}