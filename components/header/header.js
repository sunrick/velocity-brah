$(document).ready(function(){

  var Header = (function () {
    var parentId = "#header"

    var config = {
      parent: parentId,
      child: parentId + " .line",
      parentWidth: function(){ return $(this.parent).width(); },
      parentHeight: function() { return $(this.parent).height(); },
      childWidth: function() { return $(this.child).width(); },
      childHeight: function() { return $(this.child).height(); }
    }

    var animation = function(){
      $(config.child).css({
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "red"
      });
      $(config.child).velocity({ width: "10px", height: "10px" },{ easing: "linear", duration: 100 })
      .velocity({
        left: function(){ return config.parentWidth() - config.childHeight(); }
      },{
        easing: "linear",
        duration: 2000
      })
      .velocity({
        top: function() { return config.parentHeight() - config.childHeight() }
      },{
        easing: "linear",
        duration: 1000
      })
      .velocity({
        left: 0
      },{
        easing: "linear",
        duration: 2000
      })
      .velocity({
        top: 0
      },{
        easing: "linear",
        duration: 1000
      })
    }

    var template = function(){
      $(config.parent).append(
        '<h1 class="black-back title"> VELOCITY BRAH </h1>' +
        '<div class="line"></div>'
      );
    }

    var init = function(){
      template();
      animation();
    }

    init();

    return {};

  })();

});
