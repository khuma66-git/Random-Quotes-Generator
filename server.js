const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static("public"));

async function getQuotes() {
    let q = await fetch("https://type.fit/api/quotes")
    let res = await q.json();
    console.log(res);
        return res;
}
// the app.get("/") route automatically serving my index.html via public dir

// API ROUTE
app.get('/quotes', async (req, res) => {
    let quotes = await getQuotes();
    res.json(quotes);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


