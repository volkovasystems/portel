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

	describe("`portel( ( ) => { } )`", function () {
		it("should return object type", function () {
			assert.equal((0, _typeof3.default)(portel(function () {})), "object");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicG9ydGVsIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiaGVsbG8iLCJ1bmRlZmluZWQiLCJOYU4iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFNBQVNELFFBQVMscUJBQVQsQ0FBZjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUJBLFVBQVUscUJBQVYsRUFBaUMsWUFBTztBQUN2Q0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUSxPQUFSLENBQXJCLEdBQXdDLFFBQXhDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsaUJBQVYsRUFBNkIsWUFBTztBQUNuQ0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUSxHQUFSLENBQXJCLEdBQW9DLFFBQXBDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsa0JBQVYsRUFBOEIsWUFBTztBQUNwQ0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUSxJQUFSLENBQXJCLEdBQXFDLFFBQXJDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsa0NBQVYsRUFBOEMsWUFBTztBQUNwREMsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUSxFQUFFLFFBQVEsUUFBVixFQUFSLENBQXJCLEdBQXFELFFBQXJEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsbUNBQVYsRUFBK0MsWUFBTztBQUNyREMsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUSxtQkFBWSxPQUFaLENBQVIsQ0FBckIsR0FBc0QsUUFBdEQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxrQ0FBVixFQUE4QyxZQUFPO0FBQ3BEQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRLFNBQVNJLEtBQVQsR0FBaUIsQ0FBRyxDQUE1QixDQUFyQixHQUFxRCxRQUFyRDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BSCxVQUFVLHdCQUFWLEVBQW9DLFlBQU87QUFDMUNDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2Q0osVUFBT0ssS0FBUCx1QkFBcUJILE9BQVEsWUFBTyxDQUFHLENBQWxCLENBQXJCLEdBQTJDLFFBQTNDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsa0JBQVYsRUFBOEIsWUFBTztBQUNwQ0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUSxJQUFSLENBQXJCLEdBQXFDLFFBQXJDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsdUJBQVYsRUFBbUMsWUFBTztBQUN6Q0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUUssU0FBUixDQUFyQixHQUEwQyxRQUExQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BSixVQUFVLGlCQUFWLEVBQTZCLFlBQU87QUFDbkNDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2Q0osVUFBT0ssS0FBUCx1QkFBcUJILE9BQVFNLEdBQVIsQ0FBckIsR0FBb0MsUUFBcEM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQSxDQTlERDs7QUFnRUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJwb3J0ZWxcIixcblx0XHRcdFwicGF0aFwiOiBcInBvcnRlbC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcG9ydGVsLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJwb3J0ZWxcIjogXCJwb3J0ZWxcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IHBvcnRlbCA9IHJlcXVpcmUoIFwiLi9wb3J0ZWwuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcInBvcnRlbFwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIFwiaGVsbG9cIiApLCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggMTIzIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcG9ydGVsKCAxMjMgKSwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIHRydWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIHRydWUgKSwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIHsgJ25hbWUnOiAnc2ltcGxlJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcG9ydGVsKCB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0gKSwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggU3ltYm9sLmZvciggXCJoZWxsb1wiICkgKSwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIGZ1bmN0aW9uIGhlbGxvKCApeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcG9ydGVsKCBmdW5jdGlvbiBoZWxsbyggKXsgfSApLCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggKCApID0+IHsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggKCApID0+IHsgfSApLCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggbnVsbCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggbnVsbCApLCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggdW5kZWZpbmVkIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcG9ydGVsKCB1bmRlZmluZWQgKSwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIE5hTiApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggTmFOICksIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
