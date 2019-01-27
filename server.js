const express = require('express');
const app = express();
const path = require('path');

//Serves up the built React files
app.use(express.static(path.join(__dirname, '../Nuve-UI/build')));

app.listen(8080, () => {
	console.log("Listening on 8080");
});
