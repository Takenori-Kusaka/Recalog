module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Recalog/'   //任意
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
