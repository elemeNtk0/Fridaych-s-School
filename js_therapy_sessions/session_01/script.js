'use strict';

function Query(selector) {}

Query.prototype.list = [];
Query.prototype.query = function (selector) {
  this.list = Array.from(document.querySelectorAll(selector));
  this.length = this.list.length;

  return this;
};
Query.prototype.addClass = function (className) {
  for (let i = 0; i < this.list.length; i++) {
    this.list[i].classList.add(className);
  }

  return this;
};

Query.prototype.removeClass = function (className) {
  for (let i = 0; i < this.list.length; i++) {
    this.list[i].classList.remove(className);
  }

  return this;
};

Query.prototype.filter = function (selector) {
  this.list = this.list.filter((e) => e.matches(selector));

  return this;
};

const obj = new Query();
const j = obj.query.bind(obj);

console.log(j('.list'));

j('.list').addClass('pidr');
j('.list__item').filter('.list__item_lol').addClass('newclass').removeClass('list__item_lol');

// hahahah
