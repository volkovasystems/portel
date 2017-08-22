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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicG9ydGVsIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiaGVsbG8iLCJPcmFuZ2UiLCJjb2xvciIsIkFwcGxlIiwiYXBwbGUiLCJ1bmRlZmluZWQiLCJOYU4iLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSxxQkFBVixFQUFpQyxZQUFPO0FBQ3ZDQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRLE9BQVIsQ0FBckIsR0FBd0MsUUFBeEM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxpQkFBVixFQUE2QixZQUFPO0FBQ25DQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRLEdBQVIsQ0FBckIsR0FBb0MsUUFBcEM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxrQkFBVixFQUE4QixZQUFPO0FBQ3BDQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRLElBQVIsQ0FBckIsR0FBcUMsUUFBckM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxrQ0FBVixFQUE4QyxZQUFPO0FBQ3BEQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRLEVBQUUsUUFBUSxRQUFWLEVBQVIsQ0FBckIsR0FBcUQsUUFBckQ7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxtQ0FBVixFQUErQyxZQUFPO0FBQ3JEQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRLG1CQUFZLE9BQVosQ0FBUixDQUFyQixHQUFzRCxRQUF0RDtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2Q0osVUFBT0ssS0FBUCx1QkFBcUJILE9BQVEsU0FBU0ksS0FBVCxHQUFpQixDQUFHLENBQTVCLENBQXJCLEdBQXFELFFBQXJEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFILFVBQVUsd0JBQVYsRUFBb0MsWUFBTztBQUMxQ0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUSxZQUFPLENBQUcsQ0FBbEIsQ0FBckIsR0FBMkMsUUFBM0M7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxxQkFBVixFQUFpQyxZQUFPO0FBQ3ZDQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87O0FBRWpDRyxTQUZpQztBQUd0QyxzQkFBYztBQUNiLFVBQUtDLEtBQUwsR0FBYSxRQUFiO0FBQ0EsS0FMcUM7QUFNM0I7QUFDVixhQUFPLFFBQVA7QUFDQSxNQVJxQzs7O0FBV2pDQyxRQVhpQztBQVl0QyxxQkFBYzs7O0FBR2IsV0FBS0QsS0FBTCxHQUFhLEtBQWIsQ0FIYTtBQUliLEtBaEJxQztBQWlCM0I7QUFDVixhQUFPLEtBQUtBLEtBQVo7QUFDQSxNQW5CcUMsb0JBV25CRCxNQVhtQjs7O0FBc0J2QyxPQUFJRyxRQUFRLElBQUlELEtBQUosRUFBWjs7QUFFQVQsVUFBT0ssS0FBUCx1QkFBcUJILE9BQVFRLEtBQVIsQ0FBckIsR0FBc0MsUUFBdEM7O0FBRUEsR0ExQkQ7QUEyQkEsRUE1QkQ7O0FBOEJBUCxVQUFVLGtCQUFWLEVBQThCLFlBQU87QUFDcENDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2Q0osVUFBT0ssS0FBUCx1QkFBcUJILE9BQVEsSUFBUixDQUFyQixHQUFxQyxRQUFyQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLHVCQUFWLEVBQW1DLFlBQU87QUFDekNDLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2Q0osVUFBT0ssS0FBUCx1QkFBcUJILE9BQVFTLFNBQVIsQ0FBckIsR0FBMEMsUUFBMUM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQVIsVUFBVSxpQkFBVixFQUE2QixZQUFPO0FBQ25DQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkNKLFVBQU9LLEtBQVAsdUJBQXFCSCxPQUFRVSxHQUFSLENBQXJCLEdBQW9DLFFBQXBDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFULFVBQVUsbUJBQVYsRUFBK0IsWUFBTztBQUNyQ0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPSyxLQUFQLHVCQUFxQkgsT0FBUVcsS0FBUixDQUFyQixHQUFzQyxRQUF0QztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BLENBbEdEOztBQW9HQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInBvcnRlbFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicG9ydGVsL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9wb3J0ZWwuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcInBvcnRlbFwiOiBcInBvcnRlbFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgcG9ydGVsID0gcmVxdWlyZSggXCIuL3BvcnRlbC5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwicG9ydGVsXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggJ2hlbGxvJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggXCJoZWxsb1wiICksIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCAxMjMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIDEyMyApLCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggdHJ1ZSApLCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggeyAnbmFtZSc6ICdzaW1wbGUnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIHsgXCJuYW1lXCI6IFwic2ltcGxlXCIgfSApLCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggU3ltYm9sLmZvciggJ2hlbGxvJyApIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcG9ydGVsKCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApLCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggZnVuY3Rpb24gaGVsbG8oICl7IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICksIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCAoICkgPT4geyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcG9ydGVsKCAoICkgPT4geyB9ICksIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsIHdpdGggY2xhc3NgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRjbGFzcyBPcmFuZ2Uge1xuXHRcdFx0XHRjb25zdHJ1Y3RvciggKXtcblx0XHRcdFx0XHR0aGlzLmNvbG9yID0gXCJvcmFuZ2VcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRnZXRDb2xvciggKXtcblx0XHRcdFx0XHRyZXR1cm4gXCJvcmFuZ2VcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjbGFzcyBBcHBsZSBleHRlbmRzIE9yYW5nZSB7XG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApe1xuXHRcdFx0XHRcdHN1cGVyKCApO1xuXG5cdFx0XHRcdFx0dGhpcy5jb2xvciA9IFwicmVkXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Z2V0Q29sb3IoICl7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuY29sb3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bGV0IGFwcGxlID0gbmV3IEFwcGxlKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIGFwcGxlICksIFwib2JqZWN0XCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIG51bGwgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIG51bGwgKSwgXCJvYmplY3RcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBwb3J0ZWwoIHVuZGVmaW5lZCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHBvcnRlbCggdW5kZWZpbmVkICksIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcG9ydGVsKCBOYU4gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIE5hTiApLCBcIm9iamVjdFwiICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHBvcnRlbCggRXJyb3IgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBwb3J0ZWwoIEVycm9yICksIFwib2JqZWN0XCIgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
