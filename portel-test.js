
const assert = require( "assert" );
const portel = require( "./portel.js" );

assert.equal( typeof portel( 12345 ), "object", "should have value 'object'" );

assert.equal( typeof portel( "hello world" ), "object", "should have value 'object'" );

assert.equal( typeof portel( false ), "object", "should have value 'object'" );

console.log( "ok" );
