var FrontFooter = Object.create(HTMLElement.prototype);

FrontFooter.createdCallback = function() {
  this.innerHTML = "<p>ini footer</p>";
};

var FeFoot = document.registerElement('fe-footer', {prototype: FrontFooter});