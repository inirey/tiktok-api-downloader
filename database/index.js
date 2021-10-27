var Nedb = require('nedb')

DB = new Nedb({ filename: process.cwd() + '/database/db.json' })

DB.loadDatabase(e => e ? console.log(e) : console.log('[√] success db loaded') )

module.exports = DB
