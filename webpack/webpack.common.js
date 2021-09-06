
const paths = require('./paths')

module.exports = {
  entry: paths.appIndex,
  output: {
    filename: '[name]'
  }
}
