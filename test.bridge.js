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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("portel", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`portel( 'hello' )`", function () {
		it("should return Data instance", function () {
			//: @ignore:
   			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof portel( "hello" ); } ).value, "object" );
   			//: @end-ignore
		});
	});

	describe("`portel( 123 )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof portel( 123 );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "object");

		});
	});

	describe("`portel( true )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof portel( true );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "object");
		});
	});

	describe("`portel( { 'name': 'simple' } )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof portel( { "name": "simple" } );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "object");
		});
	});

	describe("`portel( Symbol.for( 'hello' ) )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof portel( Symbol.for( "hello" ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "object");
		});
	});

	describe("`portel( function hello( ){ } )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof portel( function hello( ){ } );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "object");
		});
	});

	describe("`portel( ( ) => { } )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof portel( ( ) => { } );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "object");
		});
	});

	describe("`portel with class`", function () {
		it("should return object type", function () {
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
			assert.equal(result, "object");

		});
	});

	describe("`portel( null )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof portel( null );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "object");
		});
	});

	describe("`portel( undefined )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof portel( undefined );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "object");
		});
	});

	describe("`portel( NaN )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof portel( NaN );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "object");
		});
	});

	describe("`portel( Error )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return typeof portel( Error );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, "object");
		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTs7QUFFQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLHFCQUFWLEVBQWlDLFlBQU87QUFDdkNJLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6QztBQUNIOzs7QUFHQTtBQUNHLEdBTkQ7QUFPQSxFQVJEOztBQVVBSixVQUFVLGlCQUFWLEVBQTZCLFlBQU87QUFDbkNJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsUUFBdEI7O0FBRUEsR0FkRDtBQWVBLEVBaEJEOztBQWtCQU4sVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3BDSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLFFBQXRCO0FBQ0EsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBTixVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsUUFBdEI7QUFDQSxHQWJEO0FBY0EsRUFmRDs7QUFpQkFOLFVBQVUsbUNBQVYsRUFBK0MsWUFBTztBQUNyREksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixRQUF0QjtBQUNBLEdBYkQ7QUFjQSxFQWZEOztBQWlCQU4sVUFBVSxrQ0FBVixFQUE4QyxZQUFPO0FBQ3BESSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLFFBQXRCO0FBQ0EsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBTixVQUFVLHdCQUFWLEVBQW9DLFlBQU87QUFDMUNJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsUUFBdEI7QUFDQSxHQWJEO0FBY0EsRUFmRDs7QUFpQkFOLFVBQVUscUJBQVYsRUFBaUMsWUFBTztBQUN2Q0ksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixRQUF0Qjs7QUFFQSxHQXJDRDtBQXNDQSxFQXZDRDs7QUF5Q0FOLFVBQVUsa0JBQVYsRUFBOEIsWUFBTztBQUNwQ0ksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixRQUF0QjtBQUNBLEdBYkQ7QUFjQSxFQWZEOztBQWlCQU4sVUFBVSx1QkFBVixFQUFtQyxZQUFPO0FBQ3pDSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLFFBQXRCO0FBQ0EsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBTixVQUFVLGlCQUFWLEVBQTZCLFlBQU87QUFDbkNJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsUUFBdEI7QUFDQSxHQWJEO0FBY0EsRUFmRDs7QUFpQkFOLFVBQVUsbUJBQVYsRUFBK0IsWUFBTztBQUNyQ0ksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixRQUF0QjtBQUNBLEdBYkQ7QUFjQSxFQWZEOztBQWlCQSxDQWxPRDs7QUFvT0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInBvcnRlbFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicG9ydGVsL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9wb3J0ZWwuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcInBvcnRlbFwiOiBcInBvcnRlbFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcInBvcnRlbFwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCAnaGVsbG8nIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBEYXRhIGluc3RhbmNlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCBmdW5jdGlvbiggKXsgcmV0dXJuIHR5cGVvZiBwb3J0ZWwoIFwiaGVsbG9cIiApOyB9ICkudmFsdWUsIFwib2JqZWN0XCIgKTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCAxMjMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBwb3J0ZWwoIDEyMyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJvYmplY3RcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHBvcnRlbCggdHJ1ZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIHsgJ25hbWUnOiAnc2ltcGxlJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgcG9ydGVsKCB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBwb3J0ZWwoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggZnVuY3Rpb24gaGVsbG8oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBwb3J0ZWwoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggKCApID0+IHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHBvcnRlbCggKCApID0+IHsgfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwgd2l0aCBjbGFzc2BcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRjbGFzcyBPcmFuZ2Uge1xuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY29sb3IgPSBcIm9yYW5nZVwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Z2V0Q29sb3IoICl7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBcIm9yYW5nZVwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNsYXNzIEFwcGxlIGV4dGVuZHMgT3JhbmdlIHtcblx0XHRcdFx0XHRcdGNvbnN0cnVjdG9yKCApe1xuXHRcdFx0XHRcdFx0XHRzdXBlciggKTtcblxuXHRcdFx0XHRcdFx0XHR0aGlzLmNvbG9yID0gXCJyZWRcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGdldENvbG9yKCApe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jb2xvcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgYXBwbGUgPSBuZXcgQXBwbGUoICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHBvcnRlbCggYXBwbGUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwib2JqZWN0XCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIG51bGwgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBwb3J0ZWwoIG51bGwgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBwb3J0ZWwoIHVuZGVmaW5lZCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIE5hTiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHBvcnRlbCggTmFOICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggRXJyb3IgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBwb3J0ZWwoIEVycm9yICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtYnJpZGdlXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
