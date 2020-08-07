module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/CordelesMX/'
    : '/',
    devServer: {
      host: "0.0.0.0",
    }
  
}
