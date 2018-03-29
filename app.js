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
  res.render('home.hbs',{
    pageTitle: 'Mesh',
    panels: [{
        style: 'panel__left',
        link: 'business-consulting',
        title: 'Business Consulting'
      },{
        style: 'panel__center',
        link: 'brand-identity',
        title: 'Brand Identity'
      },{
        style: 'panel__right',
        link: 'product-development',
        title: 'Product Development'
      }]

  });
});

app.get('/approach', (req, res) => {
  res.render('approach.hbs', {
    pageTitle: 'Mesh | Approach',
    headerId: "approach",
    headerTitle: "Our Approach",
    headerSubtitle: "How the magic happens.",
    banners: [{
      style: "banner__1",
      image: "speech-bubbles.png",
      title: "Phase I: Understand",
      body: "Our first task with any client is understanding as much as possible about their business and their offerings, as well as how and why they operate in the way they do. In addition, we identify and become familiar with the roles of the various stakeholders associated with the business (employees, clients, partners, etc.)."
    },{
      style: "banner__2",
      image: "magnifying-glass.png",
      title: "Phase II: Uncover",
      body: "Next, we uncover all the factors that contribute to the issue at hand through the use of research methods that focus on the stakeholders identified in Phase I. We want to make sure that any solutions that are developed take into account the needs and wants of these individuals."
    },{
      style: "banner__3",
      image: "thought-bubble.png",
      title: "Phase III: Conceptualize",
      body: "After the problem areas are uncovered, we then identify and conceptualize solutions for those problems. These solutions are then tested and vetted until the best solutions are identified, after which, a final plan of implementation is developed."
    },{
      style: "banner__4",
      image: "gear.png",
      title: "Phase IV: Realize",
      body: "In the final phase, we work together with the client to implement the developed plan / design / product / service, and ensure a smooth transition through employee training and the development of standards and practices if necessary."
    }]
  });
});

app.get('/business-consulting', (req, res) => {
  res.render('business-consulting.hbs', {
    pageTitle: "Mesh | Business Consulting",
    active1: "active",
    headerId: "business",
    headerTitle: "Business Consulting",
    headerSubtitle: "Time is money. Gain more of both.",
    banners: [{
      style: "banner__1",
      title: "Strategy",
      subtitle: "You can't grow without a guiding light.",
      body: "Having a clear vision and knowing how to execute on it will make the difference between a company that just gets by, and one that is able to grow and prosper. If you feel like you've lost your way, or perhaps it was never really clear where you were headed, we can help you get on the right path.",
      offerings: "Vision & Mission - Goals & Metrics - Roadmapping",
      image: "gear-tree-square.png"
    },{
      style: "banner__2",
      title: "Organization Design",
      subtitle: "Discover how culture impacts everything.",
      body: "Most employees leave their jobs after only two years. This is usually due to companies not attending to their employees' needs. Learn the strategies and practices that can ensure that you have a happy and productive workforce.",
      offerings: "Values Codification - Agile Methodologies - Organizational Structure",
      image: "network-square.png"
    },{
      style: "banner__3",
      title: "Digital Transformation",
      subtitle: "Never deal with paperwork again.",
      body: "You already have enough on your hands. Let us take the stress out of running your business by digitizing and automating your operations so that you can focus on what is truly meaningful: realizing your vision.",
      offerings: "Process Optimization - Data Management - Software Integration",
      image: "webpage-square.png"
    }]
  });
});

app.get('/brand-identity', (req, res) => {
  res.render('brand-identity.hbs', {
    pageTitle: 'Mesh | Brand Identity',
    active2: 'active',
    headerId: "brand",
    headerTitle: "Brand Identity",
    headerSubtitle: "Stand out from the crowd.",
    cards: [{
      image: "DPL-Logo.png",
      title: "Deep Point Laboratories",
      body: "Cybersecurity firm and community where experts and academics can come together to share knowledge within the industry. The design is meant to evoke feelings of intrigue, curiosity, contemplation, and knowledge.",
      link: "https://drive.google.com/file/d/10tW2Mx9bVS_v570wI25om0kTzIoSTxb_/view"
    },{
      image: "BTB-Logo.png",
      title: "Beyond The Book",
      body: "An educational company focused on providing test prep materials to medical professionals in the orthotics and prosthetics industry. The logo suggests both a hand and an open book - representing the trade as well as the services provided.",
      link: "https://drive.google.com/file/d/0B3bHUpUC0RGzU0pfUkNrempEeUk/view"
    },{
      image: "FlexNut-Logo.png",
      title: "Flexible Nutrition",
      body: "Utilizing a visual pun, the design attempts to communicate the services offered - nutritional coaching focused on flexible dieting."
    },{
      image: "Hygeia-Logo.png",
      title: "Hygeia Health",
      body: "Medical kiosk that provides telehealth services and vitals tracking. The logo references the bowl of Hygeia, the Greek and Roman goddess of hygiene."
    },{
      image: "YAPA-Logo.png",
      title: "YAPA",
      body: "Hand-made all-natural pet treats crafted by adults with disabilities. The design attempts to evoke feelings of comfort, care, and fun."
    },{
      image: "CCG-Logo.png",
      title: "Camacho Consulting Group",
      body: "Simple and clean logo for a business consultant. Intended to evoke professionalism and a sense of forward progress."
    }]
  });
});

app.get('/product-development', (req, res) => {
  res.render('product-development.hbs', {
    pageTitle: 'Mesh | Product Development',
    active3: 'active',
    headerId: "product",
    headerTitle: "Product Development",
    headerSubtitle: "Ideas are a dime a dozen. The magic is in the execution.",
    banners: [{
      style: "banner__1",
      title: "Research",
      subtitle: "Dig deep.",
      body: "Have a problem, but not a solution? The first step is to understand as much as you can about the problem. Who are the people suffering from this problem? What is their biggest pain point? What factors are constributing to the problem? Is there anyone already trying to solve this problem? If so, how are they approaching it? Through guided research, we can uncover the answers to these questions and more.",
      offerings: "Academic Research - Trend Analysis - Market Research - Competitive Analysis",
      image: "market-research.png"
    },{
      style: "banner__2",
      title: "Ideation & Refinement",
      subtitle: "Make a match.",
      body: "You won't get it right on the first try. The key is to learn, iterate, and adapt. By adopting lean and agile methodologies, we can guide you through the process of ideation, wireframing, feedback, and refinement, until you land on the solution that you can feel confident is worth building.",
      offerings: "Lean Development - Agile Methodology - Design Thinking - Wireframing",
      image: "refinement.png"
    },{
      style: "banner__3",
      title: "MVP Development",
      subtitle: "Make it real.",
      body: "Once you have a solid concept for a product or service, the next step is to build a Minimum Viable Product. That concept will be developed, tested, and refined until we have something that a customer is willing to pay for.",
      offerings: "Prototyping - Full-Stack Development - CAD Design",
      image: "bicycle.png"
    }]
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'Mesh | About Us',
    headerId: "about",
    headerTitle: "About Us",
    headerSubtitle: "What we stand for.",
    values: [{
      title: "Pursue Purpose",
      body: "Do work that has a positive impact on the world. Avoid work that only has profit as a motive."
    },{
      title: "Be Fair & Honest",
      body: "Always do right by the client. Work together to ensure that all sides are treated fairly."
    },{
      title: "Keep Learning",
      body: "Every challenge is an opportunity for growth. Embrace failure and learn from it."
    },{
      title: "Embrace Change",
      body: "Challenge the status quo. Learn and adapt. Don't do something just because everyone else does it; do it because it makes sense."
    }]
  });
});

app.get('/contact', (req, res) => {
  res.render('contact.hbs', {
    pageTitle: "Mesh | Contact Us",
    headerId: "contact",
    headerTitle: "Contact Us",
    headerSubtitle: "Let's mesh.",
  });
});

app.listen(port, () => {
  console.log('Server is up on port', port);
})
