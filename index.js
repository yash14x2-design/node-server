
var compression = require('compression')
const express = require("express");

const app = express();
app.use(compression())


app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});



// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname +  "/index.html");
});






