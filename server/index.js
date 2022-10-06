require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Cards = require("./dbCards");
const cors = require("cors");

// App config
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
// DB config
const uri = process.env.MONGODB_URL;
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

// API Endpoints
app.get("/", (req, res) => {
  res.json({ msg: "Wenn Mark Recopelacion" });
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

// 1.56
