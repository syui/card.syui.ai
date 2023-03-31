module.exports = {
	devServer: {
		proxy: {
			"^/api*": {
				target: "https://api.syui.ai",
				pathRewrite: { "^/api": "" },
			}
		}
	},
	publicPath: "/",
	configureWebpack: {
		output: {
			filename: '[name].js',
			chunkFilename: '[name].js'
		}
	},
	css: {
		extract: {
			filename: '[name].css',
			chunkFilename: '[name].css'
		},
	},
}
