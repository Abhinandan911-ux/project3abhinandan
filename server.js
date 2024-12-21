const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongooes = require('mongooes');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = 5000;
const DB_URI = 'mongodb://localhost:27017/project4';

app.use(cors());
app.use(bodyparser.json());

mongooes.connect(DB_URI).then(()=>  {
    consolelog('connected to mongoDB');
}).catch((err) => {
    console.error('Failed to connect to mondoDB',err);

});
app.use('/',authRoutes);
app.listen(PORT,()=> console.log('server running on http://localhost:${POTT})'));

