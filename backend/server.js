
const express = require('express')  
const randNumRoutes = require("./routes/randNum")

//Express app
const app = express()

app.listen(4000, () => console.log("listening on port 4000"))

app.get("/", (req, res) => {
    res.json({mssg: "Hola"})
})

//Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routes
app.use("/api/randNum", randNumRoutes)
