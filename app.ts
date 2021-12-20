const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/dist`));

app.get('*', (req: typeof express.Request, res: typeof express.Response) => {
  res.sendFile(path.join(__dirname, '/dist/', 'index.html'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server has started on ${PORT} port!`);
});
