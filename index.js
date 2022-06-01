
var compression = require('compression')
const express = require("express");
const port = process.env.PORT || 3000;

const app = express();
app.use(compression())


app.listen(port, () => {
  console.log("Application started and Listening on" + port);
});



// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname +  "/index.html");
});






