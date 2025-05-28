const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send(`
    <h1>My Basic Details</h1>
    <p><strong>Name:</strong>Jayaprakash</p>
    <p><strong>Email:</strong>jayaprakash4260@gmail.com</p>
    <p><strong>Profession:</strong>Full Stack Developer</p>
  `)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
