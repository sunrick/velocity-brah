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

	// If you were using some type of module loader this would work.

	var _square = __webpack_require__(1);

	var _square2 = _interopRequireDefault(_square);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_square2.default);

	var square = new _square2.default();
	square.init();

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
	      $(this.parent).append('\n        <h2 class="blue-back"> SQUARES BRAH </h1>\n        <div class="button-wrapper">\n          <button class="blue-back"> CLICK ME BRAH </button>\n        </div>\n        <div class="circle-wrapper"></div>\n      ');
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
	      return this.parent + ' .circle-wrapper';
	    }
	  }, {
	    key: 'children',
	    get: function get() {
	      return this.wrapper + ' > .circle';
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

/***/ }
/******/ ]);