"use strict";

export default class Popup {
  constructor(){
    this.parent = "#popup";
    this.showing = false;
    this.childrenData = [
      { id: 0, attributes: { top: "-50px", right: "auto", left: "-50px", bottom: "auto" } },
      { id: 1, attributes: { top: "-50px", right: "auto", left: "0px", bottom: "auto" } },
      { id: 2, attributes: { top: "-50px", right: "auto", left: "50px", bottom: "auto" } },
      { id: 3, attributes: { top: "-50px", right: "auto", left: "100px", bottom: "auto" } }
    ]
  }

  get wrapper () { return `${this.parent} .wrapper`; }
  get children () { return `${this.wrapper} > .popup`; }
  get button () { return `${this.parent} button`; }

  idChild (id) {
    return `${this.parent.substr(1)}${id}`
  }

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
      scale: [1, 0] // forcefeeding prevents initial animation from working, http://velocityjs.org/#forcefeeding
    },{
      easing: [100, 10],
      duration: 400,
      display: 'block'
    });
  }

  hideChildren () {
    $(this.children).velocity({
      scale: [0, 1] // forcefeeding prevents initial animation from working, http://velocityjs.org/#forcefeeding
    },{
      easing: [0.92,0.11,0.87,0.66],
      duration: 300,
      display: 'none'
    });
  }

  addChildren () {
    let self = this;
    for (let child of self.childrenData) {
      $(self.wrapper).append(
        `
        <div id="${self.idChild(child.id)}" class="popup red-back" style="display: none;"></div>
        `
      );
      $(`#${self.idChild(child.id)}`).css(child.attributes);
    }
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
