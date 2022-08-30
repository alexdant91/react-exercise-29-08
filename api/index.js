const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { body } = req;

  if (body.password !== "1234") return res.status(403).json({ message: "L'utente non esiste..." })

  delete body.password;

  return res.status(200).json({
    id: 1,
    username: 'Mario Rossi',
    ...body
  })
});

app.listen(4000, () => {
  console.log("Server up and running...");
})
