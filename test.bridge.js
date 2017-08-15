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

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTs7QUFFQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLHFCQUFWLEVBQWlDLFlBQU87QUFDdkNJLEtBQUksNkJBQUosRUFBbUMsWUFBTztBQUN6QztBQUNIOzs7QUFHQTtBQUNHLEdBTkQ7QUFPQSxFQVJEOztBQVVBSixVQUFVLGlCQUFWLEVBQTZCLFlBQU87QUFDbkNJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsUUFBdEI7O0FBRUEsR0FkRDtBQWVBLEVBaEJEOztBQWtCQU4sVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3BDSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLFFBQXRCO0FBQ0EsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBTixVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsUUFBdEI7QUFDQSxHQWJEO0FBY0EsRUFmRDs7QUFpQkFOLFVBQVUsbUNBQVYsRUFBK0MsWUFBTztBQUNyREksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixRQUF0QjtBQUNBLEdBYkQ7QUFjQSxFQWZEOztBQWlCQU4sVUFBVSxrQ0FBVixFQUE4QyxZQUFPO0FBQ3BESSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLFFBQXRCO0FBQ0EsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBTixVQUFVLGtCQUFWLEVBQThCLFlBQU87QUFDcENJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7QUFTQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsUUFBdEI7QUFDQSxHQWJEO0FBY0EsRUFmRDs7QUFpQkFOLFVBQVUsdUJBQVYsRUFBbUMsWUFBTztBQUN6Q0ksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7OztBQVNBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixRQUF0QjtBQUNBLEdBYkQ7QUFjQSxFQWZEOztBQWlCQU4sVUFBVSxpQkFBVixFQUE2QixZQUFPO0FBQ25DSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7O0FBU0E7QUFDR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLFFBQXRCO0FBQ0EsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBLENBdkpEOztBQXlKQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicG9ydGVsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwb3J0ZWwvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3BvcnRlbC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwicG9ydGVsXCI6IFwicG9ydGVsXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcblxuZGVzY3JpYmUoIFwicG9ydGVsXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIERhdGEgaW5zdGFuY2VcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoIGZ1bmN0aW9uKCApeyByZXR1cm4gdHlwZW9mIHBvcnRlbCggXCJoZWxsb1wiICk7IH0gKS52YWx1ZSwgXCJvYmplY3RcIiApO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIDEyMyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHBvcnRlbCggMTIzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm9iamVjdFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgcG9ydGVsKCB0cnVlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggeyAnbmFtZSc6ICdzaW1wbGUnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBwb3J0ZWwoIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHBvcnRlbCggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZW9mIHBvcnRlbCggZnVuY3Rpb24gaGVsbG8oICl7IH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCBudWxsIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgcG9ydGVsKCBudWxsICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggdW5kZWZpbmVkIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiB0eXBlb2YgcG9ydGVsKCB1bmRlZmluZWQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCBOYU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIHR5cGVvZiBwb3J0ZWwoIE5hTiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
