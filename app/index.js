const express = require('express'),
app = express();

const server = require('http').createServer(app);

/* config express port */
	app.listen(3000, function(){
		console.log('Server Started On Port 3000');
	});

	//Any request of type get, will get a send
  app.get('/*', function(req, res){
    res.send('Ok!');
  });
/* end config express port */
