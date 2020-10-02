require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');
const {CONNECTION_STRING, SERVER_PORT} = process.env;

const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('database is all good')
    app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))
})

app.get('/api/inventory', ctrl.getProduct)
app.post('/api/product', ctrl.addProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)