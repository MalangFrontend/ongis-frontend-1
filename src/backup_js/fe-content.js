var FrontContent = Object.create(HTMLElement.prototype);

FrontContent.createdCallback = function() {
  this.innerHTML = "<p>ini content</p>";
};

var FeContent = document.registerElement('fe-content', {prototype: FrontContent});