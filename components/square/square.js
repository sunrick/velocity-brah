$(document).ready(function(){

  var Square = (function () {
    var parentId = '#square';

    var config = {
      square: parentId,
      button: parentId + ' button',
      circles: parentId + ' > .circle',
      time: 0,
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

        config.time = 0;
        down();
      });
    }

    var down = function(){
      if(config.time === config.times){
        return 0;
      }else{
        $(config.circles).eq(config.time).velocity({
            backgroundColor: "#0C77F8",
            marginTop:'20px'
        }, {
            duration: 400,
            easing: "spring",
            complete: function(){
              up()
              config.time += 1;
              down();
            }
        });
      }
    }

    var up = function() {
      $(config.circles).eq(config.time).velocity({
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
        '<h2> SQUARES BRAH </h1>' +
        '<div class="button-wrapper">' +
          '<button> CLICK ME BRAH </button>' +
        '</div>'
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
