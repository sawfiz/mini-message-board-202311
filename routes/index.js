const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

// GET form
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New Message' });
});

// POST form
router.post('/new', function (req, res, next) {
  const {user, text} = req.body;

  messages.push({
    user,
    text,
    added: new Date()
  })
  
  res.redirect('/');
});

module.exports = router;
