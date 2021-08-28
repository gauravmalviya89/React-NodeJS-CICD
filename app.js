const express = require ('express') // Importing Express
const app = express(); // Initialize Express

app.get('/names', (req, res) => {
    res.send("Gaurav");
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})