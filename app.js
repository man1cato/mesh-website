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
    pageTitle: 'Approach'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Us'
  });
});

app.get('/business-consulting', (req, res) => {
  res.render('business-consulting.hbs', {
    pageTitle: 'Business Consulting',
    active1: 'active'
  });
});

app.get('/brand-identity', (req, res) => {
  res.render('brand-identity.hbs', {
    pageTitle: 'Brand Identity',
    active2: 'active'
  });
});

app.get('/product-development', (req, res) => {
  res.render('product-development.hbs', {
    pageTitle: 'Product Development',
    active3: 'active'
  });
});

app.listen(port, () => {
  console.log('Server is up on port', port);
})
