$(document).ready(function(){

  var Header = (function () {
    var parentId = "#header"

    var config = {
      parent: parentId
    }

    var template = function(){
      $(config.parent).append(
        '<h1 class="black-back title"> VELOCITY BRAH </h1>'
      );
    }

    var init = function(){
      template();
    }

    init();

    return {};

  })();

});
