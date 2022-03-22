const express = require('express')
const request = require('request')
const fetch = require('node-fetch')
const app = express()
const port = 3000

require('dotenv').config({path: '.env-dev'})

const {
  API_KEY
} = process.env

// Link the templating engine to the express app
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
app.use(express.static('static'));

// Create a home route
app.get('/', (req, res) => {
  fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}`)
    .then(async response => {
      const artWorks = await response.json()
      res.render('index', {
        title: 'Art Museum',
        data: artWorks.artObjects,
      });
    })
    .catch(err => res.send(err))
  })

app.get('/art/:id', function(req, res) {
  request(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}`, {json: true}, function (err, requestRes, json){
    if (err) {
      // We got an error
      res.send(err);
    } else {
      // Render the page using the 'post' view and our body data
      res.render('detail', {
        pageTitle: `Post ${req.params.id}`,
        data: json.artObjects
      });
    }
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})