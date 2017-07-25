
const assert = require( "assert" );
const portel = require( "./portel.js" );

assert.equal( typeof portel( 12345 ), "object", "should return 'object'" );

assert.equal( typeof portel( "hello world" ), "object", "should return 'object'" );

assert.equal( typeof portel( false ), "object", "should return 'object'" );

console.log( "ok" );
