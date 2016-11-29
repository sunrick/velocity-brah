"use strict";

export default class Popup {
  constructor(){
    this.parent = "#popup";
    this.showing = false;
    this.distance = -35;
    this.width = 25;
  }

  get wrapper () { return `${this.parent} .wrapper`; }
  get children () { return `${this.wrapper} > .popup`; }
  get button () { return `${this.parent} button`; }

  // centering helpers
  get distancePx () { return `${this.distance}px`; }
  get centerPx () { return `-${this.width/2}px`; }

  get childrenData () {
    return [
      { id: "-top",
        attributes: {
          top: this.distancePx,
          right: "auto",
          left: "50%",
          bottom: "auto",
          marginLeft: this.centerPx
        },
        inDelay: 0,
        outDelay: 300,
        icon: 'fa-bomb',
        class: 'purple-back'
      },
      { id: "-right",
        attributes: {
          top: "50%",
          right: this.distancePx,
          left: "auto",
          bottom: "auto",
          marginTop: this.centerPx
        },
        inDelay: 50,
        outDelay: 200,
        icon: 'fa-database',
        class: 'blue-back'
      },
      { id: "-bottom",
        attributes: {
          top: "auto",
          right: "auto",
          left: "50%",
          bottom: this.distancePx,
          marginLeft: this.centerPx
        },
        inDelay: 100,
        outDelay: 100,
        icon: 'fa-repeat',
        class: 'green-back'
      },
      { id: "-left",
        attributes: {
          top: "50%",
          right: "auto",
          left: this.distancePx,
          bottom: "auto",
          marginTop: this.centerPx
        },
        inDelay: 150,
        outDelay: 0,
        icon: 'fa-gbp',
        class: 'yellow-back'
      }
    ]
  }

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
    for(let child of this.childrenData){
      $(`#${this.idChild(child.id)}`).velocity({
        scale: [1, 0] // forcefeeding prevents initial animation from working, http://velocityjs.org/#forcefeeding
      },{
        delay: child.inDelay,
        easing: [100, 10],
        duration: 400,
        display: 'block'
      });
    }
  }

  hideChildren () {
    for(let child of this.childrenData.reverse()){
      $(`#${this.idChild(child.id)}`).velocity({
        scale: [0, 1] // forcefeeding prevents initial animation from working, http://velocityjs.org/#forcefeeding
      },{
        delay: child.outDelay,
        easing: [0.92,0.11,0.87,0.66],
        duration: 300,
        display: 'none'
      });
    }
  }

  addChildren () {
    let self = this;
    for (let child of self.childrenData) {
      $(self.wrapper).append(
        `
        <div id="${self.idChild(child.id)}" class="popup ${child.class}" style="display: none;">
          <i class="fa ${child.icon} override"></i>
        </div>
        `
      );
      $(`#${self.idChild(child.id)}`).css(Object.assign({ height: self.width, width: self.width}, child.attributes));
    }
  }

  template () {
    $(this.parent).append(
      `
      <h2 class="red-font"> POPUP BRAH </h1>
      <div class="content">
        <h3 class="red-font"> Click the red circle brah </h3>
        <div class="wrapper">
          <button class="circle red-back"><i class="fa fa-cog override"></i></button>
        </div>
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
