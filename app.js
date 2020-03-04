const express = require("express");

const app = express();

const port = 9000;

app.get("/", (req, res) => {
  res.send(
    `<h1> Good Morning!</h1> <p>hello</p><h3>Bye</h3><img src="img/p17.jpg"/>`
  );
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
