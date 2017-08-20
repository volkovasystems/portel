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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTs7QUFFQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLHFCQUFWLEVBQWlDLFlBQU87QUFDdkNJLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6QztBQUNIOzs7QUFHQTtBQUNHLEdBTkQ7QUFPQSxFQVJEOztBQVVBSixVQUFVLGlCQUFWLEVBQTZCLFlBQU87QUFDbkNJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsUUFBdEI7O0FBRUEsR0FkRDtBQWVBLEVBaEJEOztBQWtCQU4sVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3BDSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLFFBQXRCO0FBQ0EsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBTixVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsUUFBdEI7QUFDQSxHQWJEO0FBY0EsRUFmRDs7QUFpQkFOLFVBQVUsbUNBQVYsRUFBK0MsWUFBTztBQUNyREksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixRQUF0QjtBQUNBLEdBYkQ7QUFjQSxFQWZEOztBQWlCQU4sVUFBVSxrQ0FBVixFQUE4QyxZQUFPO0FBQ3BESSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLFFBQXRCO0FBQ0EsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBTixVQUFVLHdCQUFWLEVBQW9DLFlBQU87QUFDMUNJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsUUFBdEI7QUFDQSxHQWJEO0FBY0EsRUFmRDs7QUFpQkFOLFVBQVUscUJBQVYsRUFBaUMsWUFBTztBQUN2Q0ksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixRQUF0Qjs7QUFFQSxHQXJDRDtBQXNDQSxFQXZDRDs7QUF5Q0FOLFVBQVUsa0JBQVYsRUFBOEIsWUFBTztBQUNwQ0ksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixRQUF0QjtBQUNBLEdBYkQ7QUFjQSxFQWZEOztBQWlCQU4sVUFBVSx1QkFBVixFQUFtQyxZQUFPO0FBQ3pDSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLFFBQXRCO0FBQ0EsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBTixVQUFVLGlCQUFWLEVBQTZCLFlBQU87QUFDbkNJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsUUFBdEI7QUFDQSxHQWJEO0FBY0EsRUFmRDs7QUFpQkFOLFVBQVUsbUJBQVYsRUFBK0IsWUFBTztBQUNyQ0ksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixRQUF0QjtBQUNBLEdBYkQ7QUFjQSxFQWZEOztBQWlCQSxDQWxPRDs7QUFvT0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwicG9ydGVsXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInBvcnRlbC90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3BvcnRlbC5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcInBvcnRlbFwiOiBcInBvcnRlbFwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xyXG4vLzogQGVuZC1icmlkZ2VcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuXHJcbmRlc2NyaWJlKCBcInBvcnRlbFwiLCAoICkgPT4ge1xyXG5cclxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoICdoZWxsbycgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gRGF0YSBpbnN0YW5jZVwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoIGZ1bmN0aW9uKCApeyByZXR1cm4gdHlwZW9mIHBvcnRlbCggXCJoZWxsb1wiICk7IH0gKS52YWx1ZSwgXCJvYmplY3RcIiApO1xyXG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCAxMjMgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcclxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBwb3J0ZWwoIDEyMyApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwib2JqZWN0XCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCB0cnVlIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XHJcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgcG9ydGVsKCB0cnVlICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJvYmplY3RcIiApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggeyAnbmFtZSc6ICdzaW1wbGUnIH0gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcclxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxyXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBwb3J0ZWwoIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwib2JqZWN0XCIgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHBvcnRlbCggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm9iamVjdFwiICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHBvcnRlbCggZnVuY3Rpb24gaGVsbG8oICl7IH0gKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm9iamVjdFwiICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCAoICkgPT4geyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XHJcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgcG9ydGVsKCAoICkgPT4geyB9ICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJvYmplY3RcIiApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCB3aXRoIGNsYXNzYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblxyXG5cdFx0XHRcdFx0Y2xhc3MgT3JhbmdlIHtcclxuXHRcdFx0XHRcdFx0Y29uc3RydWN0b3IoICl7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jb2xvciA9IFwib3JhbmdlXCI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Z2V0Q29sb3IoICl7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFwib3JhbmdlXCI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRjbGFzcyBBcHBsZSBleHRlbmRzIE9yYW5nZSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0cnVjdG9yKCApe1xyXG5cdFx0XHRcdFx0XHRcdHN1cGVyKCApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNvbG9yID0gXCJyZWRcIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRnZXRDb2xvciggKXtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5jb2xvcjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGxldCBhcHBsZSA9IG5ldyBBcHBsZSggKTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHBvcnRlbCggYXBwbGUgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm9iamVjdFwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggbnVsbCApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHBvcnRlbCggbnVsbCApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdCkudmFsdWU7XHJcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwib2JqZWN0XCIgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIHVuZGVmaW5lZCApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHBvcnRlbCggdW5kZWZpbmVkICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJvYmplY3RcIiApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggTmFOIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XHJcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcclxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxyXG5cclxuXHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgcG9ydGVsKCBOYU4gKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm9iamVjdFwiICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCBFcnJvciApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHBvcnRlbCggRXJyb3IgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQpLnZhbHVlO1xyXG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXHJcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm9iamVjdFwiICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtYnJpZGdlXHJcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
