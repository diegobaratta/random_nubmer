const con = require('../databaseConnection')

const saveRandNum = (req, res) => {
    const {num} = req.body        
    
    con.query(`INSERT INTO random_number VALUE (${num})`, (error, results, fields) => {
        if (error) 
            res.status(400).json({error: results})
        else
            res.status(200).json({sucess: true})    
    })    
}

module.exports = {
    saveRandNum
}