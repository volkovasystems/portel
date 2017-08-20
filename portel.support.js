"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "portel",
              			"path": "portel/portel.js",
              			"file": "portel.js",
              			"module": "portel",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/portel.git",
              			"test": "portel-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Transform non-object entity to object entity.
              	@end-module-documentation
              
              	@include:
              		{
              			"blon": "blon",
              			"fno": "fno",
              			"glyo": "glyo",
              			"ndfo": "ndfo",
              			"nol": "nol",
              			"numo": "numo",
              			"objo": "objo",
              			"protype": "protype",
              			"stro": "stro"
              		}
              	@end-include
              */

var blon = require("blon");
var fno = require("fno");
var glyo = require("glyo");
var ndfo = require("ndfo");
var nol = require("nol");
var numo = require("numo");
var objo = require("objo");
var protype = require("protype");
var stro = require("stro");

var portel = function portel(entity) {
	/*;
                                      	@meta-configuration:
                                      		{
                                      			"entity:required": "*"
                                      		}
                                      	@end-meta-configuration
                                      */

	switch (protype(entity).type) {
		case BOOLEAN:
			return blon(entity);

		case FUNCTION:
			return fno(entity);

		case NUMBER:
			return numo(entity);

		case OBJECT:
			if (entity === null) {
				return nol(entity);
			}

			return objo(entity);

		case STRING:
			return stro(entity);

		case SYMBOL:
			return glyo(entity);

		case UNDEFINED:
			return ndfo(entity);

		default:
			throw new Error("cannot transform to object type");}

};

module.exports = portel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRlbC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImJsb24iLCJyZXF1aXJlIiwiZm5vIiwiZ2x5byIsIm5kZm8iLCJub2wiLCJudW1vIiwib2JqbyIsInByb3R5cGUiLCJzdHJvIiwicG9ydGVsIiwiZW50aXR5IiwidHlwZSIsIkJPT0xFQU4iLCJGVU5DVElPTiIsIk5VTUJFUiIsIk9CSkVDVCIsIlNUUklORyIsIlNZTUJPTCIsIlVOREVGSU5FRCIsIkVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxNQUFNRCxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSSxNQUFNSixRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1LLE9BQU9MLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTU0sT0FBT04sUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTyxVQUFVUCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNUSxPQUFPUixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNUyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ3ZDOzs7Ozs7OztBQVFBLFNBQVFILFFBQVNHLE1BQVQsRUFBa0JDLElBQTFCO0FBQ0MsT0FBS0MsT0FBTDtBQUNDLFVBQU9iLEtBQU1XLE1BQU4sQ0FBUDs7QUFFRCxPQUFLRyxRQUFMO0FBQ0MsVUFBT1osSUFBS1MsTUFBTCxDQUFQOztBQUVELE9BQUtJLE1BQUw7QUFDQyxVQUFPVCxLQUFNSyxNQUFOLENBQVA7O0FBRUQsT0FBS0ssTUFBTDtBQUNDLE9BQUlMLFdBQVcsSUFBZixFQUFxQjtBQUNwQixXQUFPTixJQUFLTSxNQUFMLENBQVA7QUFDQTs7QUFFRCxVQUFPSixLQUFNSSxNQUFOLENBQVA7O0FBRUQsT0FBS00sTUFBTDtBQUNDLFVBQU9SLEtBQU1FLE1BQU4sQ0FBUDs7QUFFRCxPQUFLTyxNQUFMO0FBQ0MsVUFBT2YsS0FBTVEsTUFBTixDQUFQOztBQUVELE9BQUtRLFNBQUw7QUFDQyxVQUFPZixLQUFNTyxNQUFOLENBQVA7O0FBRUQ7QUFDQyxTQUFNLElBQUlTLEtBQUosQ0FBVyxpQ0FBWCxDQUFOLENBM0JGOztBQTZCQSxDQXRDRDs7QUF3Q0FDLE9BQU9DLE9BQVAsR0FBaUJaLE1BQWpCIiwiZmlsZSI6InBvcnRlbC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInBvcnRlbFwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJwb3J0ZWwvcG9ydGVsLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInBvcnRlbC5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInBvcnRlbFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9wb3J0ZWwuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcInBvcnRlbC10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdFRyYW5zZm9ybSBub24tb2JqZWN0IGVudGl0eSB0byBvYmplY3QgZW50aXR5LlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYmxvblwiOiBcImJsb25cIixcclxuXHRcdFx0XCJmbm9cIjogXCJmbm9cIixcclxuXHRcdFx0XCJnbHlvXCI6IFwiZ2x5b1wiLFxyXG5cdFx0XHRcIm5kZm9cIjogXCJuZGZvXCIsXHJcblx0XHRcdFwibm9sXCI6IFwibm9sXCIsXHJcblx0XHRcdFwibnVtb1wiOiBcIm51bW9cIixcclxuXHRcdFx0XCJvYmpvXCI6IFwib2Jqb1wiLFxyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXHJcblx0XHRcdFwic3Ryb1wiOiBcInN0cm9cIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYmxvbiA9IHJlcXVpcmUoIFwiYmxvblwiICk7XHJcbmNvbnN0IGZubyA9IHJlcXVpcmUoIFwiZm5vXCIgKTtcclxuY29uc3QgZ2x5byA9IHJlcXVpcmUoIFwiZ2x5b1wiICk7XHJcbmNvbnN0IG5kZm8gPSByZXF1aXJlKCBcIm5kZm9cIiApO1xyXG5jb25zdCBub2wgPSByZXF1aXJlKCBcIm5vbFwiICk7XHJcbmNvbnN0IG51bW8gPSByZXF1aXJlKCBcIm51bW9cIiApO1xyXG5jb25zdCBvYmpvID0gcmVxdWlyZSggXCJvYmpvXCIgKTtcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcbmNvbnN0IHN0cm8gPSByZXF1aXJlKCBcInN0cm9cIiApO1xyXG5cclxuY29uc3QgcG9ydGVsID0gZnVuY3Rpb24gcG9ydGVsKCBlbnRpdHkgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBcIipcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdHN3aXRjaCggcHJvdHlwZSggZW50aXR5ICkudHlwZSApe1xyXG5cdFx0Y2FzZSBCT09MRUFOOlxyXG5cdFx0XHRyZXR1cm4gYmxvbiggZW50aXR5ICk7XHJcblxyXG5cdFx0Y2FzZSBGVU5DVElPTjpcclxuXHRcdFx0cmV0dXJuIGZubyggZW50aXR5ICk7XHJcblxyXG5cdFx0Y2FzZSBOVU1CRVI6XHJcblx0XHRcdHJldHVybiBudW1vKCBlbnRpdHkgKTtcclxuXHJcblx0XHRjYXNlIE9CSkVDVDpcclxuXHRcdFx0aWYoIGVudGl0eSA9PT0gbnVsbCApe1xyXG5cdFx0XHRcdHJldHVybiBub2woIGVudGl0eSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gb2JqbyggZW50aXR5ICk7XHJcblxyXG5cdFx0Y2FzZSBTVFJJTkc6XHJcblx0XHRcdHJldHVybiBzdHJvKCBlbnRpdHkgKTtcclxuXHJcblx0XHRjYXNlIFNZTUJPTDpcclxuXHRcdFx0cmV0dXJuIGdseW8oIGVudGl0eSApO1xyXG5cclxuXHRcdGNhc2UgVU5ERUZJTkVEOlxyXG5cdFx0XHRyZXR1cm4gbmRmbyggZW50aXR5ICk7XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCB0cmFuc2Zvcm0gdG8gb2JqZWN0IHR5cGVcIiApO1xyXG5cdH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcG9ydGVsO1xyXG4iXX0=
//# sourceMappingURL=portel.support.js.map
