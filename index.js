const  express = require('express');
require('dotenv').config();
const cors=require('cors');


const {dbConection}=require('./database/config');
const app = express();
app.use(cors());

app.use(express.json());


dbConection();
const port = process.env.PORT;


app.use('/sistemaencuestas',require('./routes/encuesta'));

app.listen(port, () => console.log(`Servidor en Linea`));