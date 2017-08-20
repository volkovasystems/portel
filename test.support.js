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
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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

	describe("`portel with class`", function () {
		it("should return object type", function () {var

			Orange = function () {
				function Orange() {(0, _classCallCheck3.default)(this, Orange);
					this.color = "orange";
				}(0, _createClass3.default)(Orange, [{ key: "getColor", value: function getColor()
					{
						return "orange";
					} }]);return Orange;}();var


			Apple = function (_Orange) {(0, _inherits3.default)(Apple, _Orange);
				function Apple() {(0, _classCallCheck3.default)(this, Apple);var _this = (0, _possibleConstructorReturn3.default)(this, (Apple.__proto__ || (0, _getPrototypeOf2.default)(Apple)).call(this));


					_this.color = "red";return _this;
				}(0, _createClass3.default)(Apple, [{ key: "getColor", value: function getColor()
					{
						return this.color;
					} }]);return Apple;}(Orange);


			var apple = new Apple();

			assert.equal((0, _typeof3.default)(portel(apple)), "object");

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

	describe("`portel( Error )`", function () {
		it("should return object type", function () {
			assert.equal((0, _typeof3.default)(portel(Error)), "object");
		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicG9ydGVsIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiaGVsbG8iLCJPcmFuZ2UiLCJjb2xvciIsIkFwcGxlIiwiYXBwbGUiLCJ1bmRlZmluZWQiLCJOYU4iLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSxxQkFBVixFQUFpQyxZQUFPO0FBQ3ZDQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRLE9BQVIsQ0FBckIsR0FBd0MsUUFBeEM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxpQkFBVixFQUE2QixZQUFPO0FBQ25DQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRLEdBQVIsQ0FBckIsR0FBb0MsUUFBcEM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3BDQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRLElBQVIsQ0FBckIsR0FBcUMsUUFBckM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxrQ0FBVixFQUE4QyxZQUFPO0FBQ3BEQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRLEVBQUUsUUFBUSxRQUFWLEVBQVIsQ0FBckIsR0FBcUQsUUFBckQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxtQ0FBVixFQUErQyxZQUFPO0FBQ3JEQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRLG1CQUFZLE9BQVosQ0FBUixDQUFyQixHQUFzRCxRQUF0RDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2Q0osVUFBT0ssS0FBUCx1QkFBcUJILE9BQVEsU0FBU0ksS0FBVCxHQUFpQixDQUFHLENBQTVCLENBQXJCLEdBQXFELFFBQXJEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFILFVBQVUsd0JBQVYsRUFBb0MsWUFBTztBQUMxQ0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUSxZQUFPLENBQUcsQ0FBbEIsQ0FBckIsR0FBMkMsUUFBM0M7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxxQkFBVixFQUFpQyxZQUFPO0FBQ3ZDQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87O0FBRWpDRyxTQUZpQztBQUd0QyxzQkFBYztBQUNiLFVBQUtDLEtBQUwsR0FBYSxRQUFiO0FBQ0EsS0FMcUM7QUFNM0I7QUFDVixhQUFPLFFBQVA7QUFDQSxNQVJxQzs7O0FBV2pDQyxRQVhpQztBQVl0QyxxQkFBYzs7O0FBR2IsV0FBS0QsS0FBTCxHQUFhLEtBQWIsQ0FIYTtBQUliLEtBaEJxQztBQWlCM0I7QUFDVixhQUFPLEtBQUtBLEtBQVo7QUFDQSxNQW5CcUMsb0JBV25CRCxNQVhtQjs7O0FBc0J2QyxPQUFJRyxRQUFRLElBQUlELEtBQUosRUFBWjs7QUFFQVQsVUFBT0ssS0FBUCx1QkFBcUJILE9BQVFRLEtBQVIsQ0FBckIsR0FBc0MsUUFBdEM7O0FBRUEsR0ExQkQ7QUEyQkEsRUE1QkQ7O0FBOEJBUCxVQUFVLGtCQUFWLEVBQThCLFlBQU87QUFDcENDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2Q0osVUFBT0ssS0FBUCx1QkFBcUJILE9BQVEsSUFBUixDQUFyQixHQUFxQyxRQUFyQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2Q0osVUFBT0ssS0FBUCx1QkFBcUJILE9BQVFTLFNBQVIsQ0FBckIsR0FBMEMsUUFBMUM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQVIsVUFBVSxpQkFBVixFQUE2QixZQUFPO0FBQ25DQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRVSxHQUFSLENBQXJCLEdBQW9DLFFBQXBDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFULFVBQVUsbUJBQVYsRUFBK0IsWUFBTztBQUNyQ0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUVcsS0FBUixDQUFyQixHQUFzQyxRQUF0QztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BLENBbEdEOztBQW9HQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwicG9ydGVsXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInBvcnRlbC90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3BvcnRlbC5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcInBvcnRlbFwiOiBcInBvcnRlbFwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCBwb3J0ZWwgPSByZXF1aXJlKCBcIi4vcG9ydGVsLnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5cclxuZGVzY3JpYmUoIFwicG9ydGVsXCIsICggKSA9PiB7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoICdoZWxsbycgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcG9ydGVsKCBcImhlbGxvXCIgKSwgXCJvYmplY3RcIiApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggMTIzIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggMTIzICksIFwib2JqZWN0XCIgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIHRydWUgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcG9ydGVsKCB0cnVlICksIFwib2JqZWN0XCIgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIHsgJ25hbWUnOiAnc2ltcGxlJyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9ICksIFwib2JqZWN0XCIgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIFN5bWJvbC5mb3IoICdoZWxsbycgKSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICksIFwib2JqZWN0XCIgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIGZ1bmN0aW9uIGhlbGxvKCApeyB9IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggZnVuY3Rpb24gaGVsbG8oICl7IH0gKSwgXCJvYmplY3RcIiApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggKCApID0+IHsgfSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoICggKSA9PiB7IH0gKSwgXCJvYmplY3RcIiApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCB3aXRoIGNsYXNzYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0Y2xhc3MgT3JhbmdlIHtcclxuXHRcdFx0XHRjb25zdHJ1Y3RvciggKXtcclxuXHRcdFx0XHRcdHRoaXMuY29sb3IgPSBcIm9yYW5nZVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRnZXRDb2xvciggKXtcclxuXHRcdFx0XHRcdHJldHVybiBcIm9yYW5nZVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y2xhc3MgQXBwbGUgZXh0ZW5kcyBPcmFuZ2Uge1xyXG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApe1xyXG5cdFx0XHRcdFx0c3VwZXIoICk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5jb2xvciA9IFwicmVkXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGdldENvbG9yKCApe1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY29sb3I7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsZXQgYXBwbGUgPSBuZXcgQXBwbGUoICk7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIGFwcGxlICksIFwib2JqZWN0XCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCBudWxsIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggbnVsbCApLCBcIm9iamVjdFwiICk7XHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCB1bmRlZmluZWQgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcG9ydGVsKCB1bmRlZmluZWQgKSwgXCJvYmplY3RcIiApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggTmFOIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggTmFOICksIFwib2JqZWN0XCIgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIEVycm9yIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggRXJyb3IgKSwgXCJvYmplY3RcIiApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcbn0gKTtcclxuXHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG4iXX0=
//# sourceMappingURL=test.support.js.map
