
var titles = $('main nav li');
var cons = $('main .content>ul>li');


function Tabs(title, con) {
  this.title = title;
  this.con = con;
}
Tabs.prototype.init = function (i) {
  this.i = i < this.title.length ? i : 0;
  this.title[this.i].classList.add('active');
  this.con[this.i].classList.add('active');
  this.title.forEach((item, index) => {
    item.onclick = () => {
      if (this.i === index) return;
      this.title[this.i].classList.remove('active');
      item.classList.add('active');
      this.con[this.i].classList.remove('active');
      this.con[index].classList.add('active');
      this.i = index;
    }
  })
}

function $(type) {
  return document.querySelectorAll(type);
}

new Tabs(titles, cons).init(0);
