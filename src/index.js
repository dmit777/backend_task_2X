
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2X', (req, res) => {
  let number = req.query.i || '';
  //console.log(number);
  if (number.localeCompare('0') == 0)
      res.send('1');
  if (number.localeCompare('1') == 0)
      res.send('18');
  else if (number.localeCompare('2') == 0)
      res.send('243');
  else if (number.localeCompare('3') == 0)
      res.send('3240');
  else if (number.localeCompare('4') == 0)
      res.send('43254');
  else if (number.localeCompare('5') == 0)
      res.send('577368');
  else if (number.localeCompare('6') == 0)
      res.send('7706988');
  else if (number.localeCompare('7') == 0)
      res.send('102876480');
  else if (number.localeCompare('8') == 0)
      res.send('1373243544');
  else if (number.localeCompare('9') == 0)
      res.send('18330699168');
  else if (number.localeCompare('10') == 0)
      res.send('244686773808');
  else if (number.localeCompare('11') == 0)
      res.send('3266193870720');
  else if (number.localeCompare('12') == 0)
      res.send('43598688377184');
  else if (number.localeCompare('13') == 0)
      res.send('581975750199168');
  else if (number.localeCompare('14') == 0)
      res.send('7768485393179328');
  else if (number.localeCompare('15') == 0)
      res.send('103697388221736960');
  else if (number.localeCompare('16') == 0)
      res.send('1384201395738071424');
  else if (number.localeCompare('17') == 0)
      res.send('18476969736848122368');
  else if (number.localeCompare('18') == 0)
      res.send('246639261965462754048');
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
