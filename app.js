const express = require("express");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs'); 
app.use(express.static("public"));                // link public folder


app.get("/", (req, res) => {
    res.render("home"); 
});



app.listen(process.env.PORT || 3000, () => {
    console.log("listining on port 3000");
})