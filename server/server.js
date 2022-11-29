const express = require("express");

const app = express();
const port = 5001;

app.use(express.static("server/public"));

app.listen(port, () => {
  console.log("listening on port, ", port); 
});

// app.get("/quotes", function (req, res) {
//   console.log("request for /quotes was made");
//   res.send(quoteList);
// });

//Create - post Read - get Update put Delete delete
