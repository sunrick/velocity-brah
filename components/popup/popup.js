"use strict";

class Popup {
  constructor(){
    this.parent = "#popup";
    this.showing = false;
  }

  get wrapper () { return `${this.parent} .wrapper`; }
  get children () { return `${this.wrapper} > .popup`; }
  get button () { return `${this.parent} button`; }


  buttonClick () {
    let self = this;
    $(this.button).on('click', function(){
      if (self.showing) {
        self.hideChildren();
      } else {
        self.showChildren();
      }
       self.showing = !self.showing; // can't be put outside of event handler
    });
  }

  showChildren () {
    $(this.children).velocity({
      scale: 1
    },{
      easing: [100, 10],
      duration: 400,
      display: 'block'
    });
  }

  hideChildren () {
    $(this.children).velocity({
      scale: 0
    },{
      easing: [0.92,0.11,0.87,0.66],
      duration: 300,
      display: 'none'
    });
  }

  addChildren () {
    $(this.wrapper).append(
      `
      <div class="popup"></div>
      `
    );
    $(this.children).css({
      top: "-75px",
      borderRadius: "50%"
    });
  }

  template () {
    $(this.parent).append(
      `
      <h2 class="red-back"> POPUP BRAH </h1>
      <div class="wrapper">
        <button class="red-back"> Click me brah </button>
      </div>
      `
    );
  }

  init () {
    this.template();
    this.addChildren();
    this.buttonClick();
  }

}
