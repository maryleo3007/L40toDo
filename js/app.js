'use strict';
var render =  (root) => {
  root.empty();
  var wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Todo());
  root.append(wrapper);
}

var state = {
  todos : []
};

$( _ => {
  const root = $('.root');
  render(root);
});
