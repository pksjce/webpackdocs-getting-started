module.exports = {
    entry: './index.js',
    devtool: 'eval',
    output: {
	path: './dist',
	filename: 'bundle.js'
    },
    module:{
	rules: [{
	    test: /.js$/,
	    loader: 'babel-loader',
	    options: {
		    presets: ['es2015', 'react']
		}
	}]
    }
}