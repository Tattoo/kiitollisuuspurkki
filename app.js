var express = require( "express" ),
    mongo = require( "mongodb" );



var app = express.createServer(express.logger());
var mongo_uri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/db"

app.get("/", function(request, response) {
  mongo.Db.connect( mongo_uri, function( err, db ){
    if ( err ) {
      res.send( "Can't connect to db" );
      return false;
    }
    
    var c = db.thanks.find();
    var s = "";
    while ( c.hasNext() ){
      s += printjson( c.next() );
      
    }
    
    res.send( s );
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});