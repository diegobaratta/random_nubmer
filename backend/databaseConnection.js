var mysql = require ("mysql") 

var config = {
    host: 'sql10.freesqldatabase.com',
    database: 'sql10526118',
    user: 'sql10526118',
    password: 'CcJAumkzCW',
}

var con = mysql.createConnection(config)

con.connect(error => {
    if(error)
        throw error
    else        
        console.log('Connected to DB')        
})

module.exports = con