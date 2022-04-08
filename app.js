const express = require('express')
const fetch = require('node-fetch')
const app = express()
const compression = require('compression')
const port = process.env.PORT || 3000

require('dotenv').config({path: '.env-dev'})

const {
  API_KEY
} = process.env

// Link the templating engine to the express app
app.set('view engine', 'ejs')

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views')

app.use(/.*-[0-9a-f]{10}\..*/, (req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=365000000, immutable')
  next()
})

// Tell express to use a 'static' folder
app.use(express.static('static'))
app.use(compression())

// Create a home route
app.get('/', (req, res) => {
  fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&ps=6`)
    .then(async response => {
      const artWorks = await response.json()
      res.render('index', {
        title: 'Art Museum',
        data: artWorks.artObjects,
      })
    })
    .catch(err => res.send(err))
})

// Detail page
app.get('/art/:id', function(req, res) {
  fetch(`https://www.rijksmuseum.nl/api/nl/collection/${req.params.id}?key=${API_KEY}`)
    .then(async response => {
      const artWorks = await response.json()

      res.render('detail', {
        title: 'Art Museum' + req.params.id,
        data: artWorks.artObject,
      });
    })
    .catch(err => res.send(err))
})

// Search action
app.get('/search', (req, res) => {
  fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&q=${req.query.query}&imgonly=true`)
    .then(async response => {
      const artWorks = await response.json()

      res.render('index', {
        title: 'Art Museum',
        data: artWorks.artObjects,
      });
    })
    .catch(err => res.send(err))
})

// Offline page
app.get('/offline', (req, res) => {
  res.render("offline", {
    title: "You are Offline"
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
