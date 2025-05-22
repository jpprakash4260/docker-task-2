const express = require("express")
const app = express()
const port = 5000

app.set("view engine", "ejs")
app.set("views", __dirname + "index.html")

app.get("/", (req, res) => {
  res.render("index", {
    name: "Jayaprakash",
    email: "jayaprakash4260@gmail.com",
    profession: "Full Stack Developer"
  })
})

app.listen(port, "0.0.0.0", () => {
  console.log(`App running on http://localhost:${port}`)
})