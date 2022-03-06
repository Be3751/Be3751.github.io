module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/mypage/'
  //   : '/',

  // 独自ドメイン用
  publicPath: '/',
  
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },

  transpileDependencies: [
    'vuetify'
  ]
}
