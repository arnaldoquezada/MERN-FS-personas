// const express = require('express');
// const app = express();
// app.listen(8000, () => {
//     console.log("Listening at Port 8000")
// });

const express = require('express');
const cors = require('cors') // This is new
const app = express();

require('./server/config/mongoose.config')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('./server/routes/person.routes')(app); // This is new
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})