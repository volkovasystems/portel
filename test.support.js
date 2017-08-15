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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var portel = require("./portel.support.js");
//: @end-client







//: @client:

describe("portel", function () {

	describe("`portel( 'hello' )`", function () {
		it("should return object type", function () {
			assert.equal((0, _typeof3.default)(portel("hello")), "object");
		});
	});

	describe("`portel( 123 )`", function () {
		it("should return object type", function () {
			assert.equal((0, _typeof3.default)(portel(123)), "object");
		});
	});

	describe("`portel( true )`", function () {
		it("should return object type", function () {
			assert.equal((0, _typeof3.default)(portel(true)), "object");
		});
	});

	describe("`portel( { 'name': 'simple' } )`", function () {
		it("should return object type", function () {
			assert.equal((0, _typeof3.default)(portel({ "name": "simple" })), "object");
		});
	});

	describe("`portel( Symbol.for( 'hello' ) )`", function () {
		it("should return object type", function () {
			assert.equal((0, _typeof3.default)(portel((0, _for2.default)("hello"))), "object");
		});
	});

	describe("`portel( function hello( ){ } )`", function () {
		it("should return object type", function () {
			assert.equal((0, _typeof3.default)(portel(function hello() {})), "object");
		});
	});

	describe("`portel( null )`", function () {
		it("should return object type", function () {
			assert.equal((0, _typeof3.default)(portel(null)), "object");
		});
	});

	describe("`portel( undefined )`", function () {
		it("should return object type", function () {
			assert.equal((0, _typeof3.default)(portel(undefined)), "object");
		});
	});

	describe("`portel( NaN )`", function () {
		it("should return object type", function () {
			assert.equal((0, _typeof3.default)(portel(NaN)), "object");
		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicG9ydGVsIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiaGVsbG8iLCJ1bmRlZmluZWQiLCJOYU4iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFNBQVNELFFBQVMscUJBQVQsQ0FBZjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUJBLFVBQVUscUJBQVYsRUFBaUMsWUFBTztBQUN2Q0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUSxPQUFSLENBQXJCLEdBQXdDLFFBQXhDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsaUJBQVYsRUFBNkIsWUFBTztBQUNuQ0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUSxHQUFSLENBQXJCLEdBQW9DLFFBQXBDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsa0JBQVYsRUFBOEIsWUFBTztBQUNwQ0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUSxJQUFSLENBQXJCLEdBQXFDLFFBQXJDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsa0NBQVYsRUFBOEMsWUFBTztBQUNwREMsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUSxFQUFFLFFBQVEsUUFBVixFQUFSLENBQXJCLEdBQXFELFFBQXJEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsbUNBQVYsRUFBK0MsWUFBTztBQUNyREMsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUSxtQkFBWSxPQUFaLENBQVIsQ0FBckIsR0FBc0QsUUFBdEQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxrQ0FBVixFQUE4QyxZQUFPO0FBQ3BEQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRLFNBQVNJLEtBQVQsR0FBaUIsQ0FBRyxDQUE1QixDQUFyQixHQUFxRCxRQUFyRDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BSCxVQUFVLGtCQUFWLEVBQThCLFlBQU87QUFDcENDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2Q0osVUFBT0ssS0FBUCx1QkFBcUJILE9BQVEsSUFBUixDQUFyQixHQUFxQyxRQUFyQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2Q0osVUFBT0ssS0FBUCx1QkFBcUJILE9BQVFLLFNBQVIsQ0FBckIsR0FBMEMsUUFBMUM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUosVUFBVSxpQkFBVixFQUE2QixZQUFPO0FBQ25DQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRTSxHQUFSLENBQXJCLEdBQW9DLFFBQXBDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUEsQ0F4REQ7O0FBMERBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicG9ydGVsXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwb3J0ZWwvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3BvcnRlbC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwicG9ydGVsXCI6IFwicG9ydGVsXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBwb3J0ZWwgPSByZXF1aXJlKCBcIi4vcG9ydGVsLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJwb3J0ZWxcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCAnaGVsbG8nIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcG9ydGVsKCBcImhlbGxvXCIgKSwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIDEyMyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggMTIzICksIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcG9ydGVsKCB0cnVlICksIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCB7ICduYW1lJzogJ3NpbXBsZScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9ICksIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICksIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggZnVuY3Rpb24gaGVsbG8oICl7IH0gKSwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIG51bGwgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIG51bGwgKSwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIHVuZGVmaW5lZCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggdW5kZWZpbmVkICksIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCBOYU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIE5hTiApLCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuXG4iXX0=
//# sourceMappingURL=test.support.js.map
