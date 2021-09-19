module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // vant is designed based on 375px
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*'] // config the css attributes that need to transfer to rem
    }
  }
}