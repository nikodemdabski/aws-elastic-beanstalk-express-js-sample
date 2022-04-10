const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Going through the CI/CD tutorial - manual approve from CodePipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
