const express = require('express');
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(require('./routes/index'));
mongoose.connect("mongodb+srv://WetFlame:280804Aa@cluster0.cwgcurf.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))
  
  app.listen(3000, () => {
    console.log('Сервер запущен успешно')
  })