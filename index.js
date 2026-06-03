const express = require( 'express' );
const app = express();
const cors = require( 'cors' );
app.use( cors() );
app.use( express.json() );
const port = process.env.PORT || 3000;
const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' }
];
app.get( '/users', ( req, res ) =>
{
    res.json( users );
} );
app.post( '/users', ( req, res ) =>
{
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push( newUser );
    res.status( 201 ).json( newUser );
} );
app.get( '/', ( req, res ) =>
{
    res.send( 'User Server Management available' );
} );
app.listen( port, () =>
{
    console.log( `User server started on port: ${ port }` );
} );