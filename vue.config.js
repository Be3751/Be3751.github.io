module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mypage/'
    : '/',

  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },

  transpileDependencies: [
    'vuetify'
  ]
}
