import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/less2c', (req, res) => {
//  res.json({
//    hello: 'JS World',
const names = req.query.username;
console.log(names);
var re = new RegExp ('@?(https?:)?(\/\/)?(([a-zA-Z0-9.-])[^\/]*\/)?([a-zA-Z0-9.@\_]*)', 'i');
const user = names.match(re)[5];
const chk = user.substr(0,1);
if (chk==='@'){res.send(user)} else {res.send('@'+user)}
;
  //});
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

//vk|telegram|vkontakte|github
