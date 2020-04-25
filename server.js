const express = require('express');
const app = express();

// Serve static files....
app.use(express.static('./dist/covid19-backend-analytics'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/covid19-backend-analytics'});
});

// default Heroku PORT
app.listen(process.env.PORT || 8080, () => {
  console.log("Server is listening on port 3000"); 
});
