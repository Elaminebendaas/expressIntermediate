var express = require('express');
var router = express.Router();

let messages = [
  {
    name: "El-Amine",
    message: "Hey guys this is the first post and I'm at a zoo right now and as you can see there is an elephant behind me isnt he cute!",
    added: new Date()
  }
]


router.get('/', function(req, res, next) {
  res.render('index', {messages: messages});
});


router.get('/new', (req, res) => {
  res.render('newmessage');
})
router.post('/new', (req, res) => {
  const {name, message} = req.body;

  messages.push({
    name: name,
    message: message,
    added: new Date()
  });
  res.redirect('/');
  

});

router.get('/:id', (req, res ) => {
  const message = req.params.id;
  res.render('message', {
                          name: messages[message].name, 
                          message: messages[message].message, 
                          date: messages[message].added
                        })

});

module.exports = router;
