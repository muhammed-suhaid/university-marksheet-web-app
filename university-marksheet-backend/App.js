const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/mark", (request, response) => {
    const getname = (request.body.name)
    const getroll = parseFloat(request.body.rollNo)
    const getsem = parseInt(request.body.sem)
    const gettotal = parseInt(request.body.totalMark)
    const getm1 = parseInt(request.body.mark1)
    const getm2 = parseInt(request.body.mark2)
    const getm3 = parseInt(request.body.mark3)
    const getm4 = parseInt(request.body.mark4)
    const getsgpa = ((getm1 + getm2 + getm3 + getm4) / (gettotal * 4)) * 100

    response.json({
        "status": "Success",
        "result": {
            "name": getname,
            "roll_no": getroll,
            "semester": getsem,
            "out_of": gettotal,
            "mark1": getm1,
            "mark2": getm2,
            "mark3": getm3,
            "mark4": getm4,
            "SGPA": getsgpa
        }
    })
})

app.listen(4000, () => {
    console.log("Server is Running <3")
})