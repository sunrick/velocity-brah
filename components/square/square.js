$(document).ready(function(){

  var Square = (function () {
    var parentId = '#square';
    var circleWrapper = parentId + ' .circle-wrapper';

    var config = {
      square: parentId,
      circleWrapper: circleWrapper,
      button: parentId + ' button',
      circles: circleWrapper + ' > .circle',
      primaryColor: '#0C77F8',
      secondaryColor: '#e62249',
      animationDuration: 200,
      squareWidth: function(){ return $(parentId).width(); },
      circleWrapperWidth: function() { return this.squareWidth(); },
      circleWidth: function(){ return this.circleWrapperWidth() / this.times; },
      time: 0,
      times: 20
    }

    var initalizeCircleWrapper = function() {
      $(config.circleWrapper).height(config.circleWidth())
    }

    var addCircles = function(){
      for(var i=0; i < config.times; i++){
        $(config.circleWrapper).append('<div class="circle"></div>');
        $(config.circles).css({ backgroundColor: config.primaryColor })
        sizeCircles(i);
      }
    }

    var sizeCircles = function(i){
      $(config.circles).eq(i).css({
        width: (100 / config.times) + "%",
        top: 0
      });
      var width = $(config.circles).eq(i).width();
      $(config.circles).eq(i).css({
        height: width,
        left: width * i
      });
    }

    var buttonClick =  function(){
      $(config.button).on('click', function(){
        $(config.button).prop('disabled', true);
        $(config.button).text("DON'T CLICK ME BRAH");
        run()
      });
    }

    var down = function(){
      if(config.time === config.times){
        return 0;
      }else{
        $(config.circles).eq(config.time).velocity({
          backgroundColor: config.secondaryColor,
          marginTop:'20px'
        },{
          duration: config.animationDuration,
          easing: "spring",
          complete: function(){
            up(config.time);
            config.time += 1;
            // DO YOU EVEN KNOW RECURSION BRAH?
            down();
          }
        });
      }
    }

    var up = function(time) {
      $(config.circles).eq(time).velocity({
        backgroundColor: config.primaryColor,
        marginTop:'0px',
      },{
        duration: config.animationDuration,
        easing: "easeInQuad",
      }).velocity({
        borderTopLeftRadius:'0px',
        borderBottomLeftRadius:'0px',
      },{
        duration: config.animationDuration,
        easing: "easeInQuad",
      }).velocity({
        borderTopRightRadius:'0px',
        borderBottomRightRadius:'0px',
      },{
        duration: config.animationDuration,
        easing: "easeInQuad",
        complete: function(){
          if(time === config.times - 1){ // zero indexing brah
            $(config.button).velocity({ opacity: 1 }, {duration: 100, easing: "linear"});
            $(config.button).prop('disabled', false);
            $(config.button).text("CLICK ME BRAH");
          }
        }
      });
    }

    var resize = function() {
      $(window).resize(function(){
        for(var i=0; i < config.times; i++){
          sizeCircles(i)
        }
      });
    }

    var template = function(){
      $(config.square).append(
        '<h2 class="blue-back"> SQUARES BRAH </h1>' +
        '<div class="button-wrapper">' +
          '<button class="blue-back"> CLICK ME BRAH </button>' +
        '</div>' +
        '<div class="circle-wrapper"></div>'
      );
    }

    var init = function() {
      template();
      initalizeCircleWrapper();
      addCircles();
      buttonClick();
      resize();
    }

    var run = function() {
      $(config.circles).velocity({
        backgroundColor: config.primaryColor,
        borderRadius: "50%"
      },{
        duration: config.animationDuration,
        easing: "linear"
      });
      config.time = 0;
      down();
    }

    init()

    return {}

  } )();

});
