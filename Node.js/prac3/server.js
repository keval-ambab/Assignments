const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/models')

db.sequelize.sync({force:true}).then(() => {
    console.log("Drop the table and resync the database!!!");
});
// db.sequelize.sync()
const app = express();

var corsOptions = { origin: 'http://localhost:8081'};
app.use(cors(corsOptions));

//bodyparser is parsing the request in content-type json & x-www-form-urlencoded

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//routing
// app.get('/', (req,res) => {
//     res.json({msg : 'welcome to the express@!'})
// });

require('./app/routes/book.routes')(app);
require('./app/routes/author.routes')(app);
require('./app/routes/genre.routes')(app);

//set the port
const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



