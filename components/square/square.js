"use strict";

class Square {
  constructor () {
    this.parent = '#square';
    this.primaryColor = '#0C77F8';
    this.secondaryColor = '#e62249';
    this.animationDuration = 400;
    this.items = 20;
    this.currentItem = 0;
  }

  get wrapper () { return `${this.parent} .circle-wrapper`; }
  get children () { return `${this.wrapper} > .circle`; }
  get button () { return `${this.parent} button`; }

  // could have been written in constructor like this: this.parentWidth = () => { return $(this.parent).width(); }
  // advantage of this way is the lack of () when called. still is dynamic
  get parentWidth () { return $(this.parent).width(); }
  get wrapperWidth () { return $(this.wrapper).width(); }
  get childrenWidth () { return this.wrapperWidth / this.items; }

  template () {
    $(this.parent).append(
      `
        <h2 class="blue-back"> SQUARES BRAH </h1>
        <div class="button-wrapper">
          <button class="blue-back"> CLICK ME BRAH </button>
        </div>
        <div class="circle-wrapper"></div>
      `
    );
  }

  setWrapperHeight () {
    $(this.wrapper).height(this.childrenWidth);
  }

  addChildren () {
    for(let item=0; item < this.items; item++){
      $(this.wrapper).append('<div class="circle"></div>');
      $(this.children).css({ backgroundColor: this.primaryColor });
      this.sizeChildren(item);
    }
  }

  sizeChildren (item) {
    $(this.children).eq(item).css({
      width: (100 / this.items) + "%",
      top: 0
    });
    let width = $(this.children).eq(item).width();
    $(this.children).eq(item).css({
      height: width,
      left: width * item
    });
  }

  buttonClick () {
    // need to figure this out, work around
    let that = this;
    $(this.button).on('click', function(){
      that.disableButton();
      that.run();
    });
  }

  disableButton () {
    $(this.button).prop('disabled', true);
    $(this.button).text("DON'T CLICK ME BRAH");
  }

  enableButton () {
    $(this.button).velocity({ opacity: 1 }, {duration: 100, easing: "linear"});
    $(this.button).prop('disabled', false);
    $(this.button).text("CLICK ME BRAH");
  }

  resize () {
    // need to figure this out, work around
    let that = this;
    $(window).resize(function(){
      for(let item=0; item < that.items; item++){
        that.sizeChildren(item);
      }
    });
  }

  down () {
    // need to figure this out, work around
    let that = this;
    if(this.currentItem === this.items){
      return 0;
    }else{
      $(this.children).eq(this.currentItem).velocity({
        backgroundColor: that.secondaryColor,
        marginTop:'20px'
      },{
        duration: that.animationDuration,
        easing: "spring",
        complete: function(){
          that.up(that.currentItem);
          that.currentItem += 1;
          // DO YOU EVEN KNOW RECURSION BRAH?
          that.down();
        }
      });
    }
  }

  up (item) {
    // need to figure this out, work around
    let that = this;
    $(this.children).eq(item).velocity({
      backgroundColor: that.primaryColor,
      marginTop:'0px',
    },{
      duration: that.animationDuration,
      easing: "easeInQuad",
    }).velocity({
      borderTopLeftRadius:'0px',
      borderBottomLeftRadius:'0px',
    },{
      duration: that.animationDuration,
      easing: "easeInQuad",
    }).velocity({
      borderTopRightRadius:'0px',
      borderBottomRightRadius:'0px',
    },{
      duration: that.animationDuration,
      easing: "easeInQuad",
      complete: function(){
        if(item === that.items - 1){ that.enableButton(); } // zero indexing brah
      }
    });
  }

  init () {
    this.template();
    this.setWrapperHeight();
    this.addChildren();
    this.buttonClick();
    this.resize();
  }

  run () {
    // need to figure this out, work around
    let that = this;
    $(this.circles).velocity({
      backgroundColor: that.primaryColor,
      borderRadius: "50%"
    },{
      duration: that.animationDuration,
      easing: "linear"
    });
    this.currentItem = 0;
    this.down();
  }

}

// let square = new Square();
// square.init();

// If we were using some kind of module loader this would work.
// export { Square };
