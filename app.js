var express = require( "express" );
    
var app = express.createServer(express.logger());
var db_uri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "kiitollisuuspurkki";
var db = require( "mongojs" ).connect( db_uri, [ "thanks" ] );

app.get("/", function(request, response) {
  response.send(db.thanks.find())
});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});