import express from 'express';
import cors from 'cors';

function NameCutter (namein) {
var namesplit = namein.split(' ');


if (namesplit.length > 3) {return ("Invalid fullname")}
  else {
      const name0 = namesplit[0];
      const name1 = namesplit[1];
      const name2 = namesplit[2];
      var nm1;
      var nm2;
      var nameout;
        if (typeof namesplit[2] ==='undefined') {
            if (typeof namesplit[1] ==='undefined') {nameout = name0} else {nameout = name1 + " " + name0.substr(0,1) +"."};
            } else {nameout = name2 + " " + name0.substr(0,1)+". " + name1.substr(0,1) +"."};
        };
return nameout
};

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/lesson2b', (req, res) => {
const names = req.query.fullname;
var re1 = new RegExp (/_|\d|\/|\f|\r|\n|\v|\t/);
if (re1.test(names)) {res.send("Invalid fullname")} else {if (names === '') {res.send("Invalid fullname")} else {res.send(NameCutter(names))};};
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
