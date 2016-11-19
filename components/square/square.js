$(document).ready(function(){

  var Square = (function () {
    var parentId = '#square';

    var config = {
      square: parentId,
      button: parentId + ' button',
      circles: parentId = ' .circle',
      time: 1,
      times: 10
    }

    var addElements = function(){
      for(var i=0; i < config.times; i++){
        $(config.square).append('<div class="circle"></div>');
      }
    }

    var buttonClick =  function(){
      $(config.button).on('click', function(){
        // hardcoding like a champ brah
        $(config.button).velocity({ opacity: 0 }, {duration: 100, easing: "linear"});
        setTimeout(function(){
          $(config.button).velocity({ opacity: 1 }, {duration: 100, easing: "linear"});
        }, 6000);

        $(config.circles).velocity({
          backgroundColor: "#20BF55",
          borderRadius: "50%"
        },{
          duration: 400,
          easing: "linear"
        });

        config.time = 1;
        down();
      });
    }

    var down = function(){
      var cssSelector = config.circles + ":nth-of-type(" + config.time + ")"

      if(config.time - 1 === config.times){
        return 0;
      }else{
        $(cssSelector).velocity({
            backgroundColor: "#0C77F8",
            marginTop:'20px'
        }, {
            duration: 400,
            easing: "spring",

            complete: function(){
              config.time += 1;
              up(cssSelector)
              down();
            }
        });

      }
    }

    var up = function(cssSelector) {
      $(cssSelector).velocity({
          backgroundColor: "#20BF55",
          marginTop:'0px',
      }, {
          duration: 400,
          easing: "easeInQuad",
      }).velocity({
        borderTopLeftRadius:'0px',
        borderBottomLeftRadius:'0px',
      }, {
        duration: 400,
        easing: "easeInQuad",
      }).velocity({
        borderTopRightRadius:'0px',
        borderBottomRightRadius:'0px',
      }, {
        duration: 400,
        easing: "easeInQuad"
      });
    }

    var template = function(){
      $(config.square).append(
        "<h2> SQUARES BRAH </h1>" +
        "<button> CLICK ME BRAH </button>"
      );
    }

    var init = function() {
      template();
      addElements();
      buttonClick();
    }

    init()

    return {}

  } )();

});
