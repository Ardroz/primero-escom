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

  while ( i > 0 ){
    a[i] = a[i-2] - ( a[i-1] * k[i-1]);
    b[i] = b[i-2] - ( b[i-1] * k[i-1]);
    d[i] = division( false, d[i-2], d[i-1] );
    k[i] = division( true, d[i-1], d[i]);
    if(d[i] <= 0){
      break;
    }
    i++;
  }

  lol = {
    "one": a,
    "two": b,
    "three": d,
    "four": k
  }

  return lol;
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

      if( residue > 0 ){
        quotient++;
      } else {
        residue = dividend - ( divider * (quotient -1) );
        break;
      }
    }
  }

  return flag ? quotient: residue;
}

gcfEuclidsAlgorithm(6,10);