const express = require('express');
const app = express();

const PORT = 3000

app.get('/', (req, res, nest) => {
    res.send('Hello, World')
})



app.listen(PORT, () => {
    console.log('server is woring');
})
