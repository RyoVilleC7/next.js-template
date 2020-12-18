const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  distDir: "build"
}