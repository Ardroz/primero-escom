

/*
  The flag is to know it they want the result or the residue, 
  return result if flag is true
  return residue if flag is false
*/
function division ( flag, dividend, divider ) {
  var result = 0, 
      residue = 1;

  if ( divider > 0 ) {
    while ( true ) {
      residue = dividend - ( divider * result );

      if( residue > 0 ){
        result++;
      } else {
        break;
      }
    }
  }

  return flag ? result: residue;
}