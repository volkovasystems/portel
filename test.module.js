"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "portel",
			"path": "portel/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/portel.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"portel": "portel"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const portel = require( "./portel.js" );
//: @end-server

//: @client:
const portel = require( "./portel.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "portel", ( ) => {

	describe( "`portel( 'hello' )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( "hello" ), "object" );
		} );
	} );

	describe( "`portel( 123 )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( 123 ), "object" );
		} );
	} );

	describe( "`portel( true )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( true ), "object" );
		} );
	} );

	describe( "`portel( { 'name': 'simple' } )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( { "name": "simple" } ), "object" );
		} );
	} );

	describe( "`portel( Symbol.for( 'hello' ) )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( Symbol.for( "hello" ) ), "object" );
		} );
	} );

	describe( "`portel( function hello( ){ } )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( function hello( ){ } ), "object" );
		} );
	} );

	describe( "`portel( ( ) => { } )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( ( ) => { } ), "object" );
		} );
	} );

	describe( "`portel with class`", ( ) => {
		it( "should return object type", ( ) => {

			class Orange {
				constructor( ){
					this.color = "orange";
				}
				getColor( ){
					return "orange";
				}
			}

			class Apple extends Orange {
				constructor( ){
					super( );

					this.color = "red";
				}
				getColor( ){
					return this.color;
				}
			}

			let apple = new Apple( );

			assert.equal( typeof portel( apple ), "object" );

		} );
	} );

	describe( "`portel( null )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( null ), "object" );
		} );
	} );

	describe( "`portel( undefined )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( undefined ), "object" );
		} );
	} );

	describe( "`portel( NaN )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( NaN ), "object" );
		} );
	} );

	describe( "`portel( Error )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( Error ), "object" );
		} );
	} );

} );

//: @end-server


//: @client:

describe( "portel", ( ) => {

	describe( "`portel( 'hello' )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( "hello" ), "object" );
		} );
	} );

	describe( "`portel( 123 )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( 123 ), "object" );
		} );
	} );

	describe( "`portel( true )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( true ), "object" );
		} );
	} );

	describe( "`portel( { 'name': 'simple' } )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( { "name": "simple" } ), "object" );
		} );
	} );

	describe( "`portel( Symbol.for( 'hello' ) )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( Symbol.for( "hello" ) ), "object" );
		} );
	} );

	describe( "`portel( function hello( ){ } )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( function hello( ){ } ), "object" );
		} );
	} );

	describe( "`portel( ( ) => { } )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( ( ) => { } ), "object" );
		} );
	} );

	describe( "`portel with class`", ( ) => {
		it( "should return object type", ( ) => {

			class Orange {
				constructor( ){
					this.color = "orange";
				}
				getColor( ){
					return "orange";
				}
			}

			class Apple extends Orange {
				constructor( ){
					super( );

					this.color = "red";
				}
				getColor( ){
					return this.color;
				}
			}

			let apple = new Apple( );

			assert.equal( typeof portel( apple ), "object" );

		} );
	} );

	describe( "`portel( null )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( null ), "object" );
		} );
	} );

	describe( "`portel( undefined )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( undefined ), "object" );
		} );
	} );

	describe( "`portel( NaN )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( NaN ), "object" );
		} );
	} );

	describe( "`portel( Error )`", ( ) => {
		it( "should return object type", ( ) => {
			assert.equal( typeof portel( Error ), "object" );
		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "portel", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`portel( 'hello' )`", ( ) => {
		it( "should return Data instance", ( ) => {
			//: @ignore:
			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof portel( "hello" ); } ).value, "object" );
			//: @end-ignore
		} );
	} );

	describe( "`portel( 123 )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof portel( 123 );
				}

			).value;
			//: @end-ignore
			assert.equal( result, "object" );

		} );
	} );

	describe( "`portel( true )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof portel( true );
				}

			).value;
			//: @end-ignore
			assert.equal( result, "object" );
		} );
	} );

	describe( "`portel( { 'name': 'simple' } )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof portel( { "name": "simple" } );
				}

			).value;
			//: @end-ignore
			assert.equal( result, "object" );
		} );
	} );

	describe( "`portel( Symbol.for( 'hello' ) )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof portel( Symbol.for( "hello" ) );
				}

			).value;
			//: @end-ignore
			assert.equal( result, "object" );
		} );
	} );

	describe( "`portel( function hello( ){ } )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof portel( function hello( ){ } );
				}

			).value;
			//: @end-ignore
			assert.equal( result, "object" );
		} );
	} );

	describe( "`portel( ( ) => { } )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof portel( ( ) => { } );
				}

			).value;
			//: @end-ignore
			assert.equal( result, "object" );
		} );
	} );

	describe( "`portel with class`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					class Orange {
						constructor( ){
							this.color = "orange";
						}
						getColor( ){
							return "orange";
						}
					}

					class Apple extends Orange {
						constructor( ){
							super( );

							this.color = "red";
						}
						getColor( ){
							return this.color;
						}
					}

					let apple = new Apple( );

					return typeof portel( apple );
				}

			).value;
			//: @end-ignore
			assert.equal( result, "object" );

		} );
	} );

	describe( "`portel( null )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof portel( null );
				}

			).value;
			//: @end-ignore
			assert.equal( result, "object" );
		} );
	} );

	describe( "`portel( undefined )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof portel( undefined );
				}

			).value;
			//: @end-ignore
			assert.equal( result, "object" );
		} );
	} );

	describe( "`portel( NaN )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof portel( NaN );
				}

			).value;
			//: @end-ignore
			assert.equal( result, "object" );
		} );
	} );

	describe( "`portel( Error )`", ( ) => {
		it( "should return object type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return typeof portel( Error );
				}

			).value;
			//: @end-ignore
			assert.equal( result, "object" );
		} );
	} );

} );

//: @end-bridge
