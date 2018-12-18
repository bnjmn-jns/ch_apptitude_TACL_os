const express = require( 'express' )
const compression = require( 'compression' )
const path = require( 'path' )

const root = process.cwd( );

const app = express( );
app.use(express.static(path.resolve( root, '.storybookBuild' )));

const server = app.listen('5055', ( err ) => {
  if ( err ) {
    return console.error( err );
  }
  return console.log( 'Listening at http://%s:%s' ); // eslint-disable-line no-console
});
