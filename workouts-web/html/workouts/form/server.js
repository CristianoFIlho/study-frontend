const express = require("express");
const app = express();
const badyParser = require("body-parser");
const bodyParser = require("body-parser");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.post('/users', (req, resp) => {

    console.log(req.body)
    resp.send("<h1>Congratulations!</h1>")
})

app.listen(3003);