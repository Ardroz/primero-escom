
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.locals.pretty = true;
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/matematicas_discretas/teoria_de_conjuntos', routes.teoria_de_conjuntos);
app.get('/matematicas_discretas/maximo_comun_divisor', routes.maximo_comun_divisor);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

function gcfEuclidsAlgorithm ( number1, number2 ) {
  var a = new Array(),
      b = new Array(),
      d = new Array(),
      k = new Array();

  var i;

  a[0] = 1;
  b[0] = 0;
  d[0] = number1;
  k[0] = 0;

  a[1] = 0;
  b[1] = 1;
  d[1] = number2;
  k[1] = division( true, d[0], d[1]);

  i = 2;

  while ( true ){
    a[i] = a[(i-2)] - ( a[(i-1)] * k[(i-1)]);
    b[i] = b[i-2] - ( b[i-1] * k[i-1]);
    d[i] = division( false, d[i-2], d[i-1] );
    k[i] = division( true, d[i-1], d[i]);
    if(d[i] <= 0){
      break;
    }
    i++;
  }

  result = {
    "x": a[i-1],
    "y": b[i-1],
    "gfc": d[i-1]
  }

  return result;
}

/*
  The flag is to know if you want the quotient or the residue, 
  return quotient if flag is true
  return residue if flag is false
*/
function division ( flag, dividend, divider ) {
  var quotient = 0,
      residue = 1;

  if ( divider > 0 ) {
    while ( true ) {
      residue = dividend - ( divider * quotient );

      if( residue >= 0 ){
        quotient++;
      } else {
        residue = dividend - ( divider * (quotient -1) );
        quotient--;
        break;
      }
    }
  }

  return flag ? quotient: residue;
}