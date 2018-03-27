const express = require('express');
const hbs = require('express-handlebars');
const sass = require('node-sass');
const port = process.env.PORT || 3000;
const path = require('path');

var app = express();

//VIEW ENGINE SETUP
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/',
  helpers: {
    currentYear: () => { return new Date().getFullYear(); }
  }
}));
app.set('view engine', 'hbs');

//MIDDLEWARE
app.use(express.static(__dirname + '/public'));



//ENDPOINTS
app.get('/', (req, res) => {
  // res.send('Hello World');
  res.render('home.hbs',{
    pageTitle: 'Mesh'
  });
});

app.get('/approach', (req, res) => {
  res.render('approach.hbs', {
    pageTitle: 'Mesh | Approach'
  });
});

app.get('/business-consulting', (req, res) => {
  res.render('business-consulting.hbs', {
    pageTitle: 'Mesh | Business Consulting',
    active1: 'active'
  });
});

app.get('/brand-identity', (req, res) => {
  res.render('brand-identity.hbs', {
    pageTitle: 'Mesh | Brand Identity',
    active2: 'active'
  });
});

app.get('/product-development', (req, res) => {
  res.render('product-development.hbs', {
    pageTitle: 'Mesh | Product Development',
    active3: 'active'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'Mesh | About Us'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact.hbs', {
    pageTitle: "Mesh | Contact Us"
  });
});

app.listen(port, () => {
  console.log('Server is up on port', port);
})
