'use strict';

const Header = () => {
  const header = $("<header></header>");
  const container = $("<div class='container'></div>");
  const h1 = $("<h1>To Do App</h1>");

  header.append(container);
  container.append(h1);

  return header;
}
