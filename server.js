const express = require('express');
const app = express();

app.use('/components', express.static('components'));
app.use('/css', express.static('css'));
app.use('/services', express.static('services'));
app.use('/main', express.static('main'));
app.use('/data', express.static('data'));
app.use('/templates', express.static('templates'));

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('Listening on port 3000!'));