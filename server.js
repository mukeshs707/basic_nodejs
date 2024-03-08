const express = require('express');
const Route = express();
const admin = ('./src/route/admin')
const ApiKey = "8cR94jSJvOOMoPDOAuvixcL0GztDV53R"
const axios = require('axios')

Route.get('/save', async (req, res) => {
    try {



        return res.status(200).send({
            data: "Done!",
            error: "",
            message: "Allowance Status",
            status: 200,
        });
    } catch (error) {
        return res.status(400).send({
            data: null,
            error: err.message ? err.message : err,
            message: "",
            status: 400,
        });
    }
})


// listen on port 3000
Route.listen(8000, () => {
    console.log('Express app listening on port 8000');
});