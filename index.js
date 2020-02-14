import express from 'express';

const app = express();
const port = process.env.port || 3000;

app.use(express.static('public'));

app.get('/numericode/:code', (request, response) => {
  const inputValue = request.params.code;
  const outputValue = [];

  inputValue.split(' ').map(eachNumber => {
    const intNumber = parseInt(eachNumber);
    intNumber
      ? null
      : response.status(400).send({
          code: 'Error, please check your input value is in the correct format'
        });
    if (intNumber > 26) {
      const dividedNumber = checkValue(intNumber);
      dividedNumber ? outputValue.push(dividedNumber) : outputValue.push(' ');
    } else {
      outputValue.push(String.fromCharCode(64 + intNumber));
    }
  });

  response.status(200).send({ code: outputValue });
});

app.listen(port, () =>
  console.log(`Express server running on port http://localhost:${port}/`)
);

const checkValue = value => {
  if (value < 27) {
    return String.fromCharCode(64 + value);
  } else if (value > 26 && value % 27 === 0) {
    return checkValue(value / 27);
  } else {
    return false;
  }
};

module.exports = app;
