/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _square = __webpack_require__(1);

	var _square2 = _interopRequireDefault(_square);

	var _popup = __webpack_require__(2);

	var _popup2 = _interopRequireDefault(_popup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var square = new _square2.default();
	square.init();

	var popup = new _popup2.default();
	popup.init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Square = function () {
	  function Square() {
	    _classCallCheck(this, Square);

	    this.parent = '#square';
	    this.primaryColor = '#0C77F8';
	    this.secondaryColor = '#e62249';
	    this.animationDuration = 400;
	    this.items = 20;
	    this.currentItem = 0;
	  }

	  _createClass(Square, [{
	    key: 'template',
	    value: function template() {
	      $(this.parent).append('\n        <h2 class="blue-font"> SQUARES BRAH </h1>\n        <div class="content">\n          <div class="button-wrapper">\n            <button class="blue-back"> CLICK ME BRAH </button>\n          </div>\n          <div class="wrapper"></div>\n        </div>\n      ');
	    }
	  }, {
	    key: 'setWrapperHeight',
	    value: function setWrapperHeight() {
	      $(this.wrapper).height(this.childrenWidth);
	    }
	  }, {
	    key: 'addChildren',
	    value: function addChildren() {
	      for (var item = 0; item < this.items; item++) {
	        $(this.wrapper).append('<div class="circle"></div>');
	        $(this.children).css({ backgroundColor: this.primaryColor });
	        this.sizeChildren(item);
	      }
	    }
	  }, {
	    key: 'sizeChildren',
	    value: function sizeChildren(item) {
	      $(this.children).eq(item).css({
	        width: 100 / this.items + "%",
	        top: 0
	      });
	      var width = $(this.children).eq(item).width();
	      $(this.children).eq(item).css({
	        height: width,
	        left: width * item
	      });
	    }
	  }, {
	    key: 'buttonClick',
	    value: function buttonClick() {
	      // need to figure this out, work around
	      var that = this;
	      $(this.button).on('click', function () {
	        that.disableButton();
	        that.run();
	      });
	    }
	  }, {
	    key: 'disableButton',
	    value: function disableButton() {
	      $(this.button).prop('disabled', true);
	      $(this.button).text("DON'T CLICK ME BRAH");
	    }
	  }, {
	    key: 'enableButton',
	    value: function enableButton() {
	      $(this.button).velocity({ opacity: 1 }, { duration: 100, easing: "linear" });
	      $(this.button).prop('disabled', false);
	      $(this.button).text("CLICK ME BRAH");
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      // need to figure this out, work around
	      var that = this;
	      $(window).resize(function () {
	        for (var item = 0; item < that.items; item++) {
	          that.sizeChildren(item);
	        }
	      });
	    }
	  }, {
	    key: 'down',
	    value: function down() {
	      // need to figure this out, work around
	      var that = this;
	      if (this.currentItem === this.items) {
	        return 0;
	      } else {
	        $(this.children).eq(this.currentItem).velocity({
	          backgroundColor: that.secondaryColor,
	          marginTop: '20px'
	        }, {
	          duration: that.animationDuration,
	          easing: "spring",
	          complete: function complete() {
	            that.up(that.currentItem);
	            that.currentItem += 1;
	            // DO YOU EVEN KNOW RECURSION BRAH?
	            that.down();
	          }
	        });
	      }
	    }
	  }, {
	    key: 'up',
	    value: function up(item) {
	      // need to figure this out, work around
	      var that = this;
	      $(this.children).eq(item).velocity({
	        backgroundColor: that.primaryColor,
	        marginTop: '0px'
	      }, {
	        duration: that.animationDuration,
	        easing: "easeInQuad"
	      }).velocity({
	        borderTopLeftRadius: '0px',
	        borderBottomLeftRadius: '0px'
	      }, {
	        duration: that.animationDuration,
	        easing: "easeInQuad"
	      }).velocity({
	        borderTopRightRadius: '0px',
	        borderBottomRightRadius: '0px'
	      }, {
	        duration: that.animationDuration,
	        easing: "easeInQuad",
	        complete: function complete() {
	          if (item === that.items - 1) {
	            that.enableButton();
	          } // zero indexing brah
	        }
	      });
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      this.template();
	      this.setWrapperHeight();
	      this.addChildren();
	      this.buttonClick();
	      this.resize();
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	      // need to figure this out, work around
	      var that = this;
	      $(this.children).velocity({
	        backgroundColor: that.primaryColor,
	        borderRadius: "50%"
	      }, {
	        duration: that.animationDuration,
	        easing: "linear"
	      });
	      this.currentItem = 0;
	      this.down();
	    }
	  }, {
	    key: 'wrapper',
	    get: function get() {
	      return this.parent + ' .wrapper';
	    }
	  }, {
	    key: 'children',
	    get: function get() {
	      return this.wrapper + ' .circle';
	    }
	  }, {
	    key: 'button',
	    get: function get() {
	      return this.parent + ' button';
	    }

	    // could have been written in constructor like this: this.parentWidth = () => { return $(this.parent).width(); }
	    // advantage of this way is the lack of () when called. still is dynamic

	  }, {
	    key: 'parentWidth',
	    get: function get() {
	      return $(this.parent).width();
	    }
	  }, {
	    key: 'wrapperWidth',
	    get: function get() {
	      return $(this.wrapper).width();
	    }
	  }, {
	    key: 'childrenWidth',
	    get: function get() {
	      return this.wrapperWidth / this.items;
	    }
	  }]);

	  return Square;
	}();

	exports.default = Square;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Popup = function () {
	  function Popup() {
	    _classCallCheck(this, Popup);

	    this.parent = "#popup";
	    this.showing = false;
	    this.distance = -35;
	    this.width = 25;
	  }

	  _createClass(Popup, [{
	    key: "idChild",
	    value: function idChild(id) {
	      return "" + this.parent.substr(1) + id;
	    }
	  }, {
	    key: "buttonClick",
	    value: function buttonClick() {
	      var self = this;
	      $(this.button).on('click', function () {
	        if (self.showing) {
	          self.hideChildren();
	        } else {
	          self.showChildren();
	        }
	        self.showing = !self.showing; // can't be put outside of event handler
	      });
	    }
	  }, {
	    key: "showChildren",
	    value: function showChildren() {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.childrenData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var child = _step.value;

	          $("#" + this.idChild(child.id)).velocity({
	            scale: [1, 0] // forcefeeding prevents initial animation from working, http://velocityjs.org/#forcefeeding
	          }, {
	            delay: child.inDelay,
	            easing: [100, 10],
	            duration: 400,
	            display: 'block'
	          });
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: "hideChildren",
	    value: function hideChildren() {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = this.childrenData.reverse()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var child = _step2.value;

	          $("#" + this.idChild(child.id)).velocity({
	            scale: [0, 1] // forcefeeding prevents initial animation from working, http://velocityjs.org/#forcefeeding
	          }, {
	            delay: child.outDelay,
	            easing: [0.92, 0.11, 0.87, 0.66],
	            duration: 300,
	            display: 'none'
	          });
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	  }, {
	    key: "addChildren",
	    value: function addChildren() {
	      var self = this;
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = self.childrenData[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var child = _step3.value;

	          $(self.wrapper).append("\n        <div id=\"" + self.idChild(child.id) + "\" class=\"popup red-back\" style=\"display: none;\"></div>\n        ");
	          $("#" + self.idChild(child.id)).css(Object.assign({ height: self.width, width: self.width }, child.attributes));
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	    }
	  }, {
	    key: "template",
	    value: function template() {
	      $(this.parent).append("\n      <h2 class=\"red-font\"> POPUP BRAH </h1>\n      <div class=\"content\">\n        <h3 class=\"red-font\"> Click the red circle brah </h3>\n        <div class=\"wrapper\">\n          <button class=\"circle red-back\"> </button>\n        </div>\n      </div>\n      ");
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      this.template();
	      this.addChildren();
	      this.buttonClick();
	    }
	  }, {
	    key: "wrapper",
	    get: function get() {
	      return this.parent + " .wrapper";
	    }
	  }, {
	    key: "children",
	    get: function get() {
	      return this.wrapper + " > .popup";
	    }
	  }, {
	    key: "button",
	    get: function get() {
	      return this.parent + " button";
	    }

	    // centering helpers

	  }, {
	    key: "distancePx",
	    get: function get() {
	      return this.distance + "px";
	    }
	  }, {
	    key: "centerPx",
	    get: function get() {
	      return "-" + this.width / 2 + "px";
	    }
	  }, {
	    key: "childrenData",
	    get: function get() {
	      return [{ id: "-top",
	        attributes: {
	          top: this.distancePx,
	          right: "auto",
	          left: "50%",
	          bottom: "auto",
	          marginLeft: this.centerPx
	        },
	        inDelay: 0,
	        outDelay: 300
	      }, { id: "-right",
	        attributes: {
	          top: "50%",
	          right: this.distancePx,
	          left: "auto",
	          bottom: "auto",
	          marginTop: this.centerPx
	        },
	        inDelay: 50,
	        outDelay: 200
	      }, { id: "-bottom",
	        attributes: {
	          top: "auto",
	          right: "auto",
	          left: "50%",
	          bottom: this.distancePx,
	          marginLeft: this.centerPx
	        },
	        inDelay: 100,
	        outDelay: 100
	      }, { id: "-left",
	        attributes: {
	          top: "50%",
	          right: "auto",
	          left: this.distancePx,
	          bottom: "auto",
	          marginTop: this.centerPx
	        },
	        inDelay: 150,
	        outDelay: 0
	      }];
	    }
	  }]);

	  return Popup;
	}();

	exports.default = Popup;

/***/ }
/******/ ]);