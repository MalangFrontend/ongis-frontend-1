var FrontHead = Object.create(HTMLElement.prototype);

FrontHead.createdCallback = function() {
  this.innerHTML = "<p>ini header</p>";
};

var FeHead = document.registerElement('fe-head', {prototype: FrontHead});