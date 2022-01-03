const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var LoremIpsum = require('lorem-ipsum').LoremIpsum;

var lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

app.get('/', (req, res) => res.send(lorem.generateParagraphs(7)))

var ingredients = [{
    "id": "234kjw",
    "text": "Eggs"
  },
  {
    "id": "as82w",
    "text": "Milk"
  },
  {
    "id": "234sk1",
    "text": "Bacon"
  },
  {
    "id": "ppo3j3",
    "text": "Frog Legs"
  }
];


app.get('/ingredients', function (req, res) {
  console.log("GET From SERVER");
  res.send(ingredients);
});

app.post('/ingredients', function (req, res) {
  var ingredient = req.body;
  console.log(req.body);
  ingredients.push(ingredient);
  res.status(200).send("Successfully posted ingredient");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
