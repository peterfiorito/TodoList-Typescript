'use strict'
const packageJSON = require('../package.json')

module.exports = {
  NODE_ENV: '"production"',
  BUILD: '"'+(packageJSON.build)+'"',
  VERSION: '"'+(packageJSON.version)+'"',
}
