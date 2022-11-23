const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors')

//const routeAppareil = require("./backend/routes/appareils.route");

const app = express();

// pour formater les données post en format json
app.use(express.json());

app.use(cors());

// connection vers mongoDB Atlas (service cloud)
mongoose
  .connect(
    "mongodb+srv://myiset:myiset@cluster0.gqcy9a3.mongodb.net/myiset?retryWrites=true&w=majority
      )
  .then(() => {
    console.log("Database connected !!!");
  })
  .catch(() => {
    console.log("Problème de connection !");
  });

// app.get("/listAppareils", (req, res) => {
//   // const Appareil = mongoose.model("Appareil", { name: String, status: String });
//   Appareil.find().then((listAppareils) => {
//     console.log(listAppareils);
//     res.status(200).json(listAppareils)
//   });
// });

/*
const Appareil = mongoose.model('Appareil', { name: String, status: String });

const app1 = new Appareil({ name: 'TV', status: 'éteint' });
app1.save().then(() => console.log('Insertion effectué avec success !!!'));
*/

//app.use("/appareilsAPI", routeAppareil);

// chargement d'un site web static
//app.use(express.static(path.join(__dirname, "backend/www")));

// lancer le server sur le port 3000
app.listen(3000, () => {
  console.log("server is running on port 3000...");
});

//-------
// version avec nodejs
/*
const http = require('http')

const server = http.createServer((req, res) => {
  res.write('<h1>Un premier Bonjour </h1>')
  res.end('<p>Bonjour Master !</p>')
})

server.listen(3000, '127.0.0.1', () => {
  console.log('server is running...............')
})
*/


