const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = 8000;

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
  console.log(req);
  res.send('Hello World!');
});

router.post('/', (request, response) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  console.log(request.query);
  console.log(request.params);
  console.log(JSON.stringify(request.body));
});

// add router in the Express app.
app.use('/', router);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
