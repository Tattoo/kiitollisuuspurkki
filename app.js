var express = require( "express" ),
    mongojs = require( "mongojs" );
    
var app = express.createServer( express.logger() ),
    db_uri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "kiitollisuuspurkki",
    db = mongojs.connect( db_uri, [ "thanks" ] );

app.set( "views", __dirname + "/public" );
app.set( "view options", { "layout": false} );

app.use(express.static( __dirname + '/public' ));

app.get( "/", function(req, res) {
  res.render( "index.jade" );
});

app.post( "/create", function( req, res){
  res.send( 404 );
});

var port = process.env.PORT || 8000;
app.listen( port, function() {
  console.log( "Listening on " + port );
});