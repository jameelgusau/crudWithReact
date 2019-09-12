

const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()
const nodeExternals = require('webpack-node-externals')


const config = {    
    mode: "production",    
    entry: [        
        path.join(CURRENT_WORKING_DIR, 'client/main.js')    
    ],
    output: {        
        path: path.join(CURRENT_WORKING_DIR , '/dist'),        
        filename: 'bundle.js',        
        publicPath: "/dist/"    
    },
    module: {        
        rules: [            
            {                
                test: /\.jsx?$/,                
                exclude: /node_modules/,                
                use: [                    
                    'babel-loader'                
                ]
                          
            },
            // {
            //     test: /\.js$/,
            //     include: /node_modules\/react-dom/,
            //     use: ['react-hot-loader/webpack']
            // },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,       
                use: 'file-loader'
            }        
        ]    
    }
}
module.exports = config