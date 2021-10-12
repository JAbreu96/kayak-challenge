const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "..")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.get('/airlines', (req, res) => {
  axios.get("http://kayak.com/h/mobileapis/directory/airlines/homework?jsonp=results").then(data => res.send(data.data))
    .catch(err => console.log(err));
})

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
