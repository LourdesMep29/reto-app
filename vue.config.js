module.exports = {
    publicPath: '',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/reto-app/'
      : '/'
  }