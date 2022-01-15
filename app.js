const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("src"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/home.html");
});

app.listen(PORT, () => {
  console.log(`
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃   Server listening on port: ${PORT}    ┃
  ┃     http://localhost:${PORT}/          ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  `);
});
