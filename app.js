
const express = require('express')
const app = express();



app.use(express.static('public'));
app.set('view engine','ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

app.get('/',(req,res)=>{
    //res.send('<p>Hello dunya</p>');
    res.render('index',{title:'Home',messages:messages});
});
app.get('/new',(req,res)=>{
    // res.send('<p>Hello dunya</p>');
    res.render('new',{title:'New'});
});
app.post('/new', (req, res) => {
  console.log(req.body); 
  const {messageText,messageUser} = req.body;

  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/")
});
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
