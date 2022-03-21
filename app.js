const http = require("http")
const express = require("express")
const request = require('request');
const app = express()
const port = 3000


// Link the templating engine to the express app
app.set('view engine', 'ejs');

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', 'views');

// Tell express to use a 'static' folder
app.use(express.static('static'));

// Create a home route
app.get('/', (req, res) => {
  // Send a plain string using res.send();
  request('https://www.rijksmuseum.nl/api/nl/collection?key=tn2lRhSP', {json: true}, (err, requestRes, json) => {
    if (err) {
      // We got an error
      res.send(err);
    } else {
      // console.log(json)
      // Render the page using the 'posts' view and our body data
      res.render('index', {
        pageTitle: 'Art Museum', // We use this for the page title, see views/partials/head.ejs
        data: json.artObjects
      });
    }
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

