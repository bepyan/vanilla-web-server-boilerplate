const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.json({ message: "hello vanilla web serv" });
});

app.listen(PORT, () => {
  console.log(`
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃   Server listening on port: ${PORT}    ┃
  ┃     http://localhost:${PORT}/          ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  `);
});
