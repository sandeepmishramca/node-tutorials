const express = require('express');
const app = express();
app.set('view engine', 'ejs'); //set view engine to ejs and now uou nee
app.get('/', (req, res) =>
    res.render('dashboard')); //rendering url to dashboard.ejs
app.listen(3000, () => //setting port number
    console.log(`App listening at http://localhost:3000`));

app.get('/excel-download', (request, response) => {

    response.download("C://23-03-2020.xlsx");


});