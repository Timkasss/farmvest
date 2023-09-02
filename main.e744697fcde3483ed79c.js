/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/es6 */ "./node_modules/core-js/es6/index.js");

__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");

__webpack_require__(/*! core-js/fn/array/flat-map */ "./node_modules/core-js/fn/array/flat-map.js");

__webpack_require__(/*! core-js/fn/string/pad-start */ "./node_modules/core-js/fn/string/pad-start.js");

__webpack_require__(/*! core-js/fn/string/pad-end */ "./node_modules/core-js/fn/string/pad-end.js");

__webpack_require__(/*! core-js/fn/string/trim-start */ "./node_modules/core-js/fn/string/trim-start.js");

__webpack_require__(/*! core-js/fn/string/trim-end */ "./node_modules/core-js/fn/string/trim-end.js");

__webpack_require__(/*! core-js/fn/symbol/async-iterator */ "./node_modules/core-js/fn/symbol/async-iterator.js");

__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ "./node_modules/core-js/fn/object/get-own-property-descriptors.js");

__webpack_require__(/*! core-js/fn/object/values */ "./node_modules/core-js/fn/object/values.js");

__webpack_require__(/*! core-js/fn/object/entries */ "./node_modules/core-js/fn/object/entries.js");

__webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");

__webpack_require__(/*! core-js/web */ "./node_modules/core-js/web/index.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ (() => {

function openMenu() {
  let burger = document.querySelector('.header_burger');
  let bodyburger = document.querySelector('.body_burger');
  burger.addEventListener('click', () => {
    bodyburger.classList.toggle('open');
    if (bodyburger.classList.contains('open')) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
}
openMenu();
function tema() {
  let light = document.querySelector('.light');
  let body = document.querySelector('.wrapper');
  let form = document.querySelectorAll('.form');
  let svg = document.querySelectorAll('svg *');
  const links = document.querySelectorAll('a');
  let bool = false;
  light.addEventListener('click', () => {
    if (!bool) {
      body.style.backgroundColor = '#263238';
      body.style.color = '#FFFFFF';
      form.forEach(link => {
        link.style.background = '#FFFFFF';
      });
      links.forEach(link => {
        link.style.color = '#FFFFFF';
      });
      svg.forEach(element => {
        // Выполните необходимые действия с каждым элементом
        element.style.fill = '#FFFFFF';
      });
      const randomParam = new Date().getTime();
      light.style.color = '#FFFFFF';
      bool = true;
    } else {
      body.style.backgroundColor = '#FFFFFF';
      body.style.color = '#263238';
      form.forEach(link => {
        link.style.background = 'rgba(38, 50, 56, 0.1)';
      });
      links.forEach(link => {
        link.style.color = '#263238';
      });
      svg.forEach(element => {
        // Выполните необходимые действия с каждым элементом
        element.style.fill = '#263238';
      });
      light.style.color = '#263238';
      bool = false;
    }
  });
}
tema();
function openlink() {
  //let block = document.querySelectorAll('your_content_block_link');
  let item = document.querySelectorAll('.your_content_block_item');
  item.forEach(el => {
    el.addEventListener('click', event => {
      let found = event.target.closest('.your_content_block_link');
      if (!found) return;
      let open = found.nextElementSibling;
      console.log(open);
      if (open.dataset.orderState == "close") {
        found.dataset.orderLin = "open";
        open.dataset.orderState = "open";
      } else {
        found.dataset.orderLin = "close";
        open.dataset.orderState = "close";
      }
    });
  });
}
;
openlink();
function animetion() {
  const aminItems = document.querySelectorAll('._anim-items');
  if (aminItems.length > 0) {
    window.addEventListener('scroll', animOnScrioll);
    function animOnScrioll() {
      for (let index = 0; index < aminItems.length; index++) {
        const animItem = aminItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - animItemHeight / animStart;
        }
        if (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeight) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    }
    setTimeout(() => {
      animOnScrioll();
    }, 300);
  }
  ;
  const words = document.querySelectorAll('span');
  if (words.length > 0) {
    window.addEventListener('scroll', animOnScrioll);
    function animOnScrioll() {
      for (let index = 0; index < words.length; index++) {
        const span = words[index];
        const spanItemHeight = span.offsetHeight;
        const spanItemOffset = offset(span).top;
        const spanStart = 4;
        let spanItemPoint = window.innerHeight - spanItemHeight / spanStart;
        if (spanItemHeight > window.innerHeight) {
          spanItemPoint = window.innerHeight - spanItemHeight / spanStart;
        }
        if (scrollY > spanItemOffset - spanItemPoint && scrollY < spanItemOffset + spanItemHeight) {
          span.classList.add('bounce-top');
        } else {
          span.classList.remove('bounce-top');
        }
      }
    }
  }
}
animetion();
function viewMore() {
  const button = document.querySelector('.what_content_button');
  const blocks = document.querySelectorAll('.what_content_block');
  blocks.forEach(element => {
    element.style.display = "none";
  });
  blocks[0].style.display = "flex";
  blocks[1].style.display = "flex";
  button.addEventListener('click', () => {
    blocks.forEach(element => {
      element.style.display = "flex";
    });
  });
}
viewMore();
function headeTeleport() {
  let home = document.querySelector('.header_container-big');
  let buttons = document.querySelector('.header_buttons');
  let end = document.querySelector('.body_burger');
  window.addEventListener('resize', function () {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 940) {
      end.insertBefore(buttons, end.children[1]);
    } else {
      home.insertBefore(buttons, home.children[2]);
    }
  });
}
headeTeleport();

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
__webpack_require__(/*! ../modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");
__webpack_require__(/*! ../modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");
__webpack_require__(/*! ../modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");
__webpack_require__(/*! ../modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
__webpack_require__(/*! ../modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");
__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");
__webpack_require__(/*! ../modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");
__webpack_require__(/*! ../modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");
__webpack_require__(/*! ../modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
__webpack_require__(/*! ../modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");
__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
__webpack_require__(/*! ../modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
__webpack_require__(/*! ../modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");
__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");
__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
__webpack_require__(/*! ../modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");
__webpack_require__(/*! ../modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");
__webpack_require__(/*! ../modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");
__webpack_require__(/*! ../modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");
__webpack_require__(/*! ../modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");
__webpack_require__(/*! ../modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");
__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");
__webpack_require__(/*! ../modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");
__webpack_require__(/*! ../modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");
__webpack_require__(/*! ../modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");
__webpack_require__(/*! ../modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");
__webpack_require__(/*! ../modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");
__webpack_require__(/*! ../modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");
__webpack_require__(/*! ../modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");
__webpack_require__(/*! ../modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");
__webpack_require__(/*! ../modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");
__webpack_require__(/*! ../modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");
__webpack_require__(/*! ../modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");
__webpack_require__(/*! ../modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");
__webpack_require__(/*! ../modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");
__webpack_require__(/*! ../modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");
__webpack_require__(/*! ../modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");
__webpack_require__(/*! ../modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");
__webpack_require__(/*! ../modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");
__webpack_require__(/*! ../modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");
__webpack_require__(/*! ../modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");
__webpack_require__(/*! ../modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");
__webpack_require__(/*! ../modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");
__webpack_require__(/*! ../modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");
__webpack_require__(/*! ../modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");
__webpack_require__(/*! ../modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
__webpack_require__(/*! ../modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
__webpack_require__(/*! ../modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
__webpack_require__(/*! ../modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
__webpack_require__(/*! ../modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");
__webpack_require__(/*! ../modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");
__webpack_require__(/*! ../modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");
__webpack_require__(/*! ../modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");
__webpack_require__(/*! ../modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");
__webpack_require__(/*! ../modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");
__webpack_require__(/*! ../modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");
__webpack_require__(/*! ../modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");
__webpack_require__(/*! ../modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");
__webpack_require__(/*! ../modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");
__webpack_require__(/*! ../modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");
__webpack_require__(/*! ../modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");
__webpack_require__(/*! ../modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");
__webpack_require__(/*! ../modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");
__webpack_require__(/*! ../modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");
__webpack_require__(/*! ../modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
__webpack_require__(/*! ../modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");
__webpack_require__(/*! ../modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");
__webpack_require__(/*! ../modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
__webpack_require__(/*! ../modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");
__webpack_require__(/*! ../modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");
__webpack_require__(/*! ../modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");
__webpack_require__(/*! ../modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
__webpack_require__(/*! ../modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
__webpack_require__(/*! ../modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
__webpack_require__(/*! ../modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
__webpack_require__(/*! ../modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");
__webpack_require__(/*! ../modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");
__webpack_require__(/*! ../modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");
__webpack_require__(/*! ../modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");
__webpack_require__(/*! ../modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
__webpack_require__(/*! ../modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");
__webpack_require__(/*! ../modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");
__webpack_require__(/*! ../modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");
__webpack_require__(/*! ../modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
__webpack_require__(/*! ../modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
__webpack_require__(/*! ../modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");
__webpack_require__(/*! ../modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
__webpack_require__(/*! ../modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
__webpack_require__(/*! ../modules/es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
__webpack_require__(/*! ../modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
__webpack_require__(/*! ../modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
__webpack_require__(/*! ../modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
__webpack_require__(/*! ../modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
__webpack_require__(/*! ../modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
__webpack_require__(/*! ../modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");
__webpack_require__(/*! ../modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");
__webpack_require__(/*! ../modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");
__webpack_require__(/*! ../modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");
__webpack_require__(/*! ../modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");
__webpack_require__(/*! ../modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");
__webpack_require__(/*! ../modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");
__webpack_require__(/*! ../modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");
__webpack_require__(/*! ../modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");
__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/core-js/fn/array/flat-map.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/flat-map.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.flatMap;


/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.includes;


/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ../../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise["finally"];


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padEnd;


/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padStart;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-end.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-end.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimRight;


/***/ }),

/***/ "./node_modules/core-js/fn/string/trim-start.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/fn/string/trim-start.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.trimLeft;


/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
module.exports = (__webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js").f)('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/fn/global.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/library/fn/global.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es7.global */ "./node_modules/core-js/library/modules/es7.global.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").global;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.global.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.global.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.G, { global: __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey);
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IS_CONCAT_SPREADABLE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set);
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/***/ ((module) => {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/***/ ((module) => {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f);
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseFloat = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
  var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");
  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");
  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = (__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', { fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js") });

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));


/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', { sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var $trim = (__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim);
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var _isFinite = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite);

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', { defineProperty: (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return (__webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f);
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze);

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: (__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set) });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = ((__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect) || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = (__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f);
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");
var dP = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var gOPN = (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f);
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f)(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var sameValue = __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = (__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY);
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");
var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var ArrayBuffer = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer);
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.G + $export.W + $export.F * !(__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV), {
  DataView: (__webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView)
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var NATIVE_WEAK_MAP = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var flattenIntoArray = __webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var arraySpeciesCreate = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/LeagueSpartan-Light.ttf */ "./src/fonts/LeagueSpartan-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/LeagueSpartan-Regular.ttf */ "./src/fonts/LeagueSpartan-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/LeagueSpartan-Medium.ttf */ "./src/fonts/LeagueSpartan-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! fonts/LeagueSpartan-SemiBold.ttf */ "./src/fonts/LeagueSpartan-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! fonts/LeagueSpartan-Bold.ttf */ "./src/fonts/LeagueSpartan-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Lato-Light.ttf */ "./src/fonts/Lato-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Lato-Regular.ttf */ "./src/fonts/Lato-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! img/down.svg */ "./src/img/down.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! img/close.svg */ "./src/img/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"League Spartan\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 300;\n}\n@font-face {\n  font-family: \"League Spartan\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"League Spartan\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"League Spartan\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"League Spartan\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\");\n  font-weight: 300;\n}\n@font-face {\n  font-family: \"Lato\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\");\n  font-weight: 400;\n}\na,\na:visited {\n  text-decoration: none;\n  color: #263238;\n}\n\nul li {\n  list-style: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  border: none;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  line-height: 1;\n  background: #FFFFFF;\n  font-size: 16px;\n  color: #263238;\n}\n\nsvg * {\n  fill: currentColor;\n  color: #263238;\n  fill-opacity: 1;\n}\n\n/*--------------------------------------*/\n#root {\n  height: 100%;\n  line-height: 1;\n}\n\n.wrapper {\n  overflow: clip;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n/*--------------------------------------*/\n.main {\n  flex: 1 1 auto;\n}\n\n[class*=_container-big] {\n  max-width: 1650px;\n  margin: 0px auto;\n  padding: 0px 15px;\n}\n\n[class*=__container] {\n  max-width: 1420px;\n  margin: 0px auto;\n  padding: 0px 15px;\n}\n\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form .footer_header_form_button, .main .main__container .what_block_wrapper .what_content .what_content_button, .main .main__container .why_block_wrapper .why_content .why_content_button, .main .main__container .home_block_wrapper .home_form_wrapper .home_form .home_button, .header .header_container-big .header_buttons #get, .header .header_container-big .header_buttons #sign {\n  background-color: #008000;\n  color: #FFFFFF;\n  font-family: \"Lato\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.1;\n  border-radius: 10px;\n  white-space: nowrap;\n}\n\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form .footer_header_form_button:hover, .main .main__container .what_block_wrapper .what_content .what_content_button:hover, .main .main__container .why_block_wrapper .why_content .why_content_button:hover, .main .main__container .home_block_wrapper .home_form_wrapper .home_form .home_button:hover, .header .header_container-big .header_buttons #get:hover, .header .header_container-big .header_buttons #sign:hover {\n  background-color: #6c836c;\n}\n\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_wrapper_text, .footer .footer_container-big .footer_header .footer_header_logo .footer_header_logo_text, .main .main__container .what_block_wrapper .what_content .what_content_blocks .what_content_block .what_content_block_content .what_content_block_text, .main .main__container .what_block_wrapper .what_content .what_content_text, .main .main__container .why_block_wrapper .why_content .why_content_text, .main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_text, .main .main__container .your_block_wrapper .your_content .your_content_text, .main .main__container .how_block_wrapper .how_content .how_content_text {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: calc(16px + 2 * ((100vw - 320px) / 1600));\n  line-height: 1.77;\n}\n\n.bounce-top {\n  animation: bounce-top 0.9s both;\n  display: inline-block;\n}\n@keyframes bounce-top {\n  0% {\n    transform: translateY(-45px);\n    animation-timing-function: ease-in;\n    opacity: 1;\n  }\n  24% {\n    opacity: 1;\n  }\n  40% {\n    transform: translateY(-24px);\n    animation-timing-function: ease-in;\n  }\n  65% {\n    transform: translateY(-12px);\n    animation-timing-function: ease-in;\n  }\n  82% {\n    transform: translateY(-6px);\n    animation-timing-function: ease-in;\n  }\n  93% {\n    transform: translateY(-4px);\n    animation-timing-function: ease-in;\n  }\n  25%, 55%, 75%, 87% {\n    transform: translateY(0px);\n    animation-timing-function: ease-out;\n  }\n  100% {\n    transform: translateY(0px);\n    animation-timing-function: ease-out;\n    opacity: 1;\n  }\n}\n.header {\n  position: relative;\n  padding-top: calc(30px + 30 * ((100vw - 320px) / 1600));\n}\n.header .header_container-big {\n  display: flex;\n  align-items: center;\n}\n.header .header_container-big .header_logo {\n  position: relative;\n  z-index: 7;\n  margin-right: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 36px;\n  line-height: 43px;\n}\n.header .header_container-big .header_menu {\n  flex: 1 1 auto;\n  display: flex;\n  justify-content: center;\n}\n.header .header_container-big .header_menu .header_menu_list {\n  display: flex;\n  gap: 44px;\n  flex-wrap: wrap;\n  row-gap: 5px;\n}\n.header .header_container-big .header_menu .header_menu_list .header_menu_item .menu_link {\n  white-space: nowrap;\n  font-family: \"Lato\", sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n}\n.header .header_container-big .header_menu .header_menu_list .header_menu_item .menu_link:hover {\n  text-decoration: underline;\n}\n@media (max-width: 940px) {\n  .header .header_container-big .header_menu .body_burger {\n    position: fixed;\n    z-index: 6;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #756868;\n    display: none;\n    overflow: auto;\n  }\n  .header .header_container-big .header_menu .body_burger .header_menu_list {\n    flex-direction: column;\n    align-items: center;\n    padding-top: 150px;\n    row-gap: 44px;\n  }\n  .header .header_container-big .header_menu .body_burger .header_menu_list .header_menu_item .menu_link {\n    font-size: 44px;\n    color: white;\n  }\n  .header .header_container-big .header_menu .body_burger .header_buttons {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    padding-top: 100px;\n  }\n}\n.header .header_container-big .header_menu .open {\n  display: block;\n}\n.header .header_container-big .header_buttons {\n  display: flex;\n  gap: 16px;\n}\n.header .header_container-big .header_buttons .light {\n  margin-left: 10px;\n  color: #263238;\n}\n.header .header_container-big .header_buttons #sign {\n  padding: 21px 44px;\n  border: 1px solid #263238;\n  background-color: #fff;\n  color: #263238;\n}\n.header .header_container-big .header_buttons #sign:hover {\n  background-color: #e7dbdb;\n}\n.header .header_container-big .header_buttons #get {\n  padding: 21px 25px;\n}\n.header .header_container-big .header_buttons #get:hover {\n  background-color: #036103;\n}\n@media (max-width: 554px) {\n  .header .header_container-big .header_buttons #sign {\n    padding: 17px 35px;\n  }\n  .header .header_container-big .header_buttons #get {\n    padding: 17px 20px;\n  }\n}\n@media (max-width: 319.99px) {\n  .header .header_container-big .header_buttons #sign {\n    padding: 10px 20px;\n  }\n  .header .header_container-big .header_buttons #get {\n    padding: 10px 10px;\n  }\n}\n.header .header_container-big .header_buttons i {\n  align-self: center;\n}\n@media (max-width: 940px) {\n  .header .header_container-big .header_buttons {\n    display: none;\n  }\n}\n.header .header_container-big .header_burger {\n  display: none;\n  flex: 0 0 40px;\n  height: 18px;\n  position: relative;\n  z-index: 7;\n  cursor: pointer;\n  margin-left: 20px;\n}\n.header .header_container-big .header_burger span, .header .header_container-big .header_burger::before, .header .header_container-big .header_burger::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  width: 100%;\n  height: 4px;\n  background-color: #c99393;\n}\n.header .header_container-big .header_burger::before {\n  top: 0;\n}\n.header .header_container-big .header_burger::after {\n  bottom: 0;\n}\n.header .header_container-big .header_burger span {\n  top: calc(50% - 2px);\n}\n@media (max-width: 940px) {\n  .header .header_container-big .header_burger {\n    display: block;\n  }\n}\n.header::before, .header::after {\n  content: \"\";\n  border: 1px solid #008000;\n  width: calc(385px + 200 * ((100vw - 320px) / 1600));\n  height: calc(385px + 200 * ((100vw - 320px) / 1600));\n  border-radius: 50%;\n  position: absolute;\n  top: -206px;\n  left: -171px;\n}\n.header::before {\n  top: -261px;\n  left: -116px;\n}\n\n/*Home block------------------------------------------*/\n.main .main__container {\n  /*Slide block------------------------------------------*/\n  /*How block------------------------------------------*/\n  /*Your block------------------------------------------*/\n  /*WHY block------------------------------------------*/\n  /*What block------------------------------------------*/\n  /*Download block------------------------------------------*/\n}\n.main .main__container .home_block_wrapper {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 127px;\n  padding-bottom: 200px;\n}\n@media (max-width: 1420px) {\n  .main .main__container .home_block_wrapper {\n    padding-top: calc(47px + 80 * ((100vw - 320px) / 1100));\n  }\n}\n@media (max-width: 1420px) {\n  .main .main__container .home_block_wrapper {\n    padding-bottom: calc(70px + 130 * ((100vw - 320px) / 1100));\n  }\n}\n.main .main__container .home_block_wrapper .home_block_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  text-align: center;\n  line-height: 1.1;\n  padding-bottom: 69px;\n  font-size: 70px;\n}\n.main .main__container .home_block_wrapper .home_block_title span {\n  color: #008000;\n}\n@media (max-width: 1420px) {\n  .main .main__container .home_block_wrapper .home_block_title {\n    font-size: 70px;\n    line-height: 70px;\n  }\n}\n@media (max-width: 1420px) and (max-width: 1420px) {\n  .main .main__container .home_block_wrapper .home_block_title {\n    font-size: calc(45px + 25 * ((100vw - 320px) / 1100));\n  }\n}\n@media (max-width: 1420px) and (max-width: 1420px) {\n  .main .main__container .home_block_wrapper .home_block_title {\n    line-height: calc(45px + 25 * ((100vw - 320px) / 1100));\n  }\n}\n@media (min-width: 798.98px) {\n  .main .main__container .home_block_wrapper .home_block_title {\n    max-width: 823px;\n  }\n}\n.main .main__container .home_block_wrapper .home_block_text {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  text-align: center;\n  line-height: 1.8;\n  padding-bottom: 48px;\n}\n@media (min-width: 798.98px) {\n  .main .main__container .home_block_wrapper .home_block_text {\n    max-width: 580px;\n  }\n}\n.main .main__container .home_block_wrapper .home_form_wrapper {\n  max-width: 533px;\n  width: 100%;\n}\n.main .main__container .home_block_wrapper .home_form_wrapper .home_form {\n  background: rgba(38, 50, 56, 0.1);\n  position: relative;\n  padding: 6px;\n  border-radius: 10px;\n  display: flex;\n  gap: 5px;\n}\n.main .main__container .home_block_wrapper .home_form_wrapper .home_form .home_input {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  background: transparent;\n  padding: 0 25px;\n  flex: 1 1 auto;\n  height: 64px;\n}\n.main .main__container .home_block_wrapper .home_form_wrapper .home_form .home_button {\n  padding: 22px 25px;\n}\n@media (max-width: 430px) {\n  .main .main__container .home_block_wrapper .home_form_wrapper .home_form {\n    flex-direction: column;\n    width: 100%;\n  }\n  .main .main__container .home_block_wrapper .home_form_wrapper .home_form .home_input {\n    width: 100%;\n  }\n  .main .main__container .home_block_wrapper .home_form_wrapper .home_form .home_button {\n    width: 100%;\n  }\n}\n.main .main__container .home_ikon {\n  position: absolute;\n}\n.main .main__container .home_ikon .svgHome * {\n  fill: currentColor;\n  fill-opacity: 1;\n  color: rgba(42, 38, 56, 0.4);\n}\n.main .main__container .i1 {\n  top: 66.9811320755%;\n  left: 0.9259259259%;\n}\n@media (max-width: 612px) {\n  .main .main__container .i1 {\n    top: 55.1886792453%;\n  }\n}\n.main .main__container .i2 {\n  top: 31.25%;\n  left: 14.6296296296%;\n}\n.main .main__container .i3 {\n  top: 75.8254716981%;\n  left: 24.8765432099%;\n}\n.main .main__container .i3 .svgHome3 * {\n  fill: currentColor;\n  border: 1px solid #263238;\n  fill-opacity: 1;\n  color: rgba(247, 255, 253, 0.979);\n}\n@media (max-width: 612px) {\n  .main .main__container .i3 {\n    top: 94.3396226415%;\n  }\n}\n.main .main__container .i4 {\n  top: 2.358490566%;\n  right: 26.1111111111%;\n}\n.main .main__container .i5 {\n  top: 35.9669811321%;\n  right: 17.2222222222%;\n}\n.main .main__container .i6 {\n  top: 29.8349056604%;\n  right: 0%;\n}\n.main .main__container .i6 .svgHome6 * {\n  fill: currentColor;\n  border: 1px solid #263238;\n  fill-opacity: 1;\n  color: rgba(247, 255, 253, 0.979);\n}\n.main .main__container .i7 {\n  top: 76.8867924528%;\n  right: 15.987654321%;\n}\n.main .main__container .i7 .svgHome7 * {\n  fill: currentColor;\n  border: 1px solid #263238;\n  fill-opacity: 1;\n  color: rgba(247, 255, 253, 0.979);\n}\n@media (max-width: 750px) {\n  .main .main__container .i7 {\n    top: 58.9622641509%;\n  }\n}\n@media (max-width: 640px) {\n  .main .main__container .home_ikon {\n    opacity: 0.3;\n  }\n}\n.main .main__container .slide_block_wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.main .main__container .slide_block_wrapper .slide_block .svg4:not(image) svg {\n  fill: currentColor;\n}\n.main .main__container .slide_block_wrapper .slide_block .svg4:not(image) svg g path {\n  fill: rgba(0, 0, 0, 0.8901960784);\n}\n@media (max-width: 1100px) {\n  .main .main__container .slide_block_wrapper {\n    justify-content: center;\n  }\n}\n.main .main__container .how_block_wrapper {\n  padding-top: calc(50px + 138 * ((100vw - 320px) / 1600));\n  display: flex;\n  gap: calc(40px + 56 * ((100vw - 320px) / 1600));\n}\n.main .main__container .how_block_wrapper .how_content {\n  flex: 0 1 45%;\n}\n.main .main__container .how_block_wrapper .how_content .how_content_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: calc(44px + 20 * ((100vw - 320px) / 1600));\n  line-height: 1.12;\n}\n.main .main__container .how_block_wrapper .how_content .how_content_title span {\n  color: #008000;\n}\n@media (min-width: 859.99px) {\n  .main .main__container .how_block_wrapper .how_content .how_content_title {\n    max-width: 450px;\n  }\n}\n.main .main__container .how_block_wrapper .how_content .how_content_title:not(:last-child) {\n  padding-bottom: calc(15px + 17 * ((100vw - 320px) / 1600));\n}\n@media (min-width: 859.99px) {\n  .main .main__container .how_block_wrapper .how_content .how_content_text {\n    max-width: 450px;\n  }\n}\n.main .main__container .how_block_wrapper .how_content .how_content_text:not(:last-child) {\n  padding-bottom: calc(30px + 18 * ((100vw - 320px) / 1600));\n}\n.main .main__container .how_block_wrapper .how_content .how_content_blocks {\n  display: flex;\n  flex-direction: column;\n  gap: calc(20px + 28 * ((100vw - 320px) / 1600));\n  max-width: 490px;\n}\n.main .main__container .how_block_wrapper .how_content .how_content_blocks .how_content_block {\n  display: flex;\n  gap: calc(20px + 12 * ((100vw - 320px) / 1600));\n}\n.main .main__container .how_block_wrapper .how_content .how_content_blocks .how_content_block .how_content_block_circle {\n  padding: calc(15px + 12 * ((100vw - 320px) / 1600));\n  border-radius: 50%;\n  background: rgba(0, 128, 0, 0.1);\n  align-self: center;\n}\n.main .main__container .how_block_wrapper .how_content .how_content_blocks .how_content_block .how_content_block_content {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.main .main__container .how_block_wrapper .how_content .how_content_blocks .how_content_block .how_content_block_content .how_content_block_content_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: calc(18px + 2 * ((100vw - 320px) / 1600));\n  line-height: 1.1;\n}\n.main .main__container .how_block_wrapper .how_content .how_content_blocks .how_content_block .how_content_block_content .how_content_block_content_text {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: calc(15px + 3 * ((100vw - 320px) / 1600));\n  line-height: 1.8;\n  max-width: 270px;\n}\n@media (max-width: 859.99px) {\n  .main .main__container .how_block_wrapper .how_content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.main .main__container .how_block_wrapper .how_image {\n  flex: 0 1 55%;\n  padding-top: calc(30px + 136 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(30px + 136 * ((100vw - 320px) / 1600));\n  padding-left: calc(30px + 15 * ((100vw - 320px) / 1600));\n  padding-right: calc(30px + 15 * ((100vw - 320px) / 1600));\n  background: rgba(0, 128, 0, 0.05);\n  border-radius: 20px;\n  position: relative;\n  overflow: hidden;\n  align-self: start;\n}\n.main .main__container .how_block_wrapper .how_image img {\n  max-width: 100%;\n  border-radius: 20px;\n  position: relative;\n  z-index: 2;\n}\n.main .main__container .how_block_wrapper .how_image::before, .main .main__container .how_block_wrapper .how_image::after {\n  content: \"\";\n  border: 1px solid #008000;\n  width: calc(385px + 200 * ((100vw - 320px) / 1600));\n  height: calc(385px + 200 * ((100vw - 320px) / 1600));\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translate(70%, -5%);\n  z-index: 1;\n}\n.main .main__container .how_block_wrapper .how_image::before {\n  top: 0;\n  left: 0;\n  transform: translate(70%, -20%);\n}\n@media (max-width: 1249.99px) {\n  .main .main__container .how_block_wrapper .how_image {\n    align-self: center;\n  }\n}\n@media (max-width: 859.99px) {\n  .main .main__container .how_block_wrapper .how_image {\n    align-self: center;\n  }\n}\n@media (max-width: 859.99px) {\n  .main .main__container .how_block_wrapper {\n    flex-direction: column;\n  }\n}\n.main .main__container .your_block_wrapper {\n  padding-top: calc(50px + 138 * ((100vw - 320px) / 1600));\n  display: flex;\n  gap: calc(60px + 66 * ((100vw - 320px) / 1600));\n}\n.main .main__container .your_block_wrapper .your_image {\n  flex: 0 1 55%;\n  padding-top: calc(50px + 49 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(50px + 49 * ((100vw - 320px) / 1600));\n  padding-right: calc(20px + 20 * ((100vw - 320px) / 1600));\n  padding-left: calc(20px + 20 * ((100vw - 320px) / 1600));\n  background: rgba(0, 128, 0, 0.05);\n  border-radius: 20px;\n  position: relative;\n  overflow: hidden;\n}\n.main .main__container .your_block_wrapper .your_image img {\n  max-width: 100%;\n  border-radius: 20px;\n  position: relative;\n  z-index: 2;\n}\n.main .main__container .your_block_wrapper .your_image::before, .main .main__container .your_block_wrapper .your_image::after {\n  content: \"\";\n  border: 1px solid #008000;\n  width: calc(385px + 200 * ((100vw - 320px) / 1600));\n  height: calc(385px + 200 * ((100vw - 320px) / 1600));\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-100%, -28%);\n  z-index: 1;\n}\n.main .main__container .your_block_wrapper .your_image::before {\n  top: 50%;\n  left: 50%;\n  transform: translate(-100%, -15%);\n}\n@media (max-width: 1250px) {\n  .main .main__container .your_block_wrapper .your_image {\n    align-self: center;\n  }\n}\n.main .main__container .your_block_wrapper .your_content {\n  flex: 0 1 45%;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: calc(50px + 20 * ((100vw - 320px) / 1600));\n  line-height: 1.11;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_title span {\n  color: #008000;\n}\n@media (min-width: 859.99px) {\n  .main .main__container .your_block_wrapper .your_content .your_content_title {\n    max-width: 450px;\n  }\n}\n.main .main__container .your_block_wrapper .your_content .your_content_title:not(:last-child) {\n  padding-bottom: calc(15px + 17 * ((100vw - 320px) / 1600));\n}\n@media (min-width: 859.99px) {\n  .main .main__container .your_block_wrapper .your_content .your_content_text {\n    max-width: 430px;\n  }\n}\n.main .main__container .your_block_wrapper .your_content .your_content_text:not(:last-child) {\n  padding-bottom: calc(30px + 18 * ((100vw - 320px) / 1600));\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item {\n  background: rgba(0, 128, 0, 0.05);\n  border-radius: 10px;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_link {\n  padding: 24px 30px;\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: calc(17px + 7 * ((100vw - 320px) / 1600));\n  line-height: 1.77;\n  cursor: pointer;\n  position: relative;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_link[data-order-lin=close]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  width: 24px;\n  height: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_link[data-order-lin=open]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  width: 24px;\n  height: 24px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n  background-repeat: no-repeat;\n  transform: translateY(-50%) scaleY(-1);\n  transition: all 0.5s ease;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_text {\n  transition: transform 0.9s ease 0s;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_text[data-order-state=close] {\n  max-height: 0;\n  overflow: hidden;\n  transition: all 0.5s ease;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_text[data-order-state=open] {\n  max-height: auto;\n  padding: 24px 30px;\n  transition: all 0.8s ease;\n}\n@media (max-width: 859.99px) {\n  .main .main__container .your_block_wrapper {\n    flex-direction: column-reverse;\n  }\n}\n.main .main__container .why_block_wrapper {\n  padding-top: calc(50px + 138 * ((100vw - 320px) / 1600));\n  display: flex;\n  gap: calc(107px + 70 * ((100vw - 320px) / 1600));\n}\n.main .main__container .why_block_wrapper .why_content {\n  flex: 0 1 45%;\n}\n.main .main__container .why_block_wrapper .why_content .why_content_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: calc(44px + 20 * ((100vw - 320px) / 1600));\n  line-height: 1.12;\n}\n.main .main__container .why_block_wrapper .why_content .why_content_title span {\n  color: #008000;\n}\n@media (min-width: 859.99px) {\n  .main .main__container .why_block_wrapper .why_content .why_content_title {\n    max-width: 450px;\n  }\n}\n.main .main__container .why_block_wrapper .why_content .why_content_title:not(:last-child) {\n  padding-bottom: calc(15px + 17 * ((100vw - 320px) / 1600));\n}\n@media (min-width: 859.99px) {\n  .main .main__container .why_block_wrapper .why_content .why_content_text {\n    max-width: 450px;\n  }\n}\n.main .main__container .why_block_wrapper .why_content .why_content_text:not(:last-child) {\n  padding-bottom: calc(30px + 18 * ((100vw - 320px) / 1600));\n}\n.main .main__container .why_block_wrapper .why_content .why_content_blocks {\n  display: flex;\n  flex-direction: column;\n  gap: calc(20px + 28 * ((100vw - 320px) / 1600));\n  max-width: 490px;\n  overflow: hidden;\n}\n.main .main__container .why_block_wrapper .why_content .why_content_blocks .why_content_block {\n  display: flex;\n  gap: calc(20px + 30 * ((100vw - 320px) / 1600));\n  align-items: center;\n  transform: translate(100%, 0);\n  opacity: 0;\n  transition: all 0.5s ease 0s;\n}\n.main .main__container .why_block_wrapper .why_content .why_content_blocks .why_content_block .why_content_block_circle {\n  display: flex;\n  width: calc(32px + 32 * ((100vw - 320px) / 1600));\n  height: calc(32px + 32 * ((100vw - 320px) / 1600));\n  border-radius: 50%;\n  background: rgba(0, 128, 0, 0.1);\n  align-items: center;\n  justify-content: center;\n}\n.main .main__container .why_block_wrapper .why_content .why_content_blocks .why_content_block .why_content_block_content_text {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: calc(15px + 3 * ((100vw - 320px) / 1600));\n  line-height: 1.8;\n  max-width: 270px;\n}\n.main .main__container .why_block_wrapper .why_content ._active .why_content_block {\n  opacity: 1;\n  transform: translate(0px, 0px);\n}\n.main .main__container .why_block_wrapper .why_content ._active .why_content_block:nth-child(1) {\n  transition: all 0.8s ease 0s;\n}\n.main .main__container .why_block_wrapper .why_content ._active .why_content_block:nth-child(2) {\n  transition: all 0.8s ease 0.2s;\n}\n.main .main__container .why_block_wrapper .why_content ._active .why_content_block:nth-child(3) {\n  transition: all 0.8s ease 0.4s;\n}\n.main .main__container .why_block_wrapper .why_content ._active .why_content_block:nth-child(4) {\n  transition: all 0.8s ease 0.6s;\n}\n.main .main__container .why_block_wrapper .why_content .why_content_blocks:not(:last-child) {\n  padding-bottom: calc(24px + 24 * ((100vw - 320px) / 1600));\n}\n.main .main__container .why_block_wrapper .why_content .why_content_button {\n  padding: 22px 55px;\n}\n.main .main__container .why_block_wrapper .why_image {\n  flex: 0 1 55%;\n  border-radius: 20px;\n}\n.main .main__container .why_block_wrapper .why_image img {\n  max-width: 100%;\n  border-radius: 20px;\n}\n@media (max-width: 1249.99px) {\n  .main .main__container .why_block_wrapper .why_image {\n    align-self: center;\n  }\n}\n@media (max-width: 859.99px) {\n  .main .main__container .why_block_wrapper {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.main .main__container .what_block_wrapper {\n  padding-top: calc(50px + 138 * ((100vw - 320px) / 1600));\n  gap: calc(107px + 70 * ((100vw - 320px) / 1600));\n}\n.main .main__container .what_block_wrapper .what_content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: calc(44px + 20 * ((100vw - 320px) / 1600));\n  line-height: 1.12;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_title span {\n  color: #008000;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_title:not(:last-child) {\n  padding-bottom: calc(15px + 17 * ((100vw - 320px) / 1600));\n}\n@media (min-width: 859.99px) {\n  .main .main__container .what_block_wrapper .what_content .what_content_text {\n    max-width: 450px;\n  }\n}\n.main .main__container .what_block_wrapper .what_content .what_content_text:not(:last-child) {\n  padding-bottom: calc(30px + 18 * ((100vw - 320px) / 1600));\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: calc(20px + 28 * ((100vw - 320px) / 1600));\n  gap: calc(20px + 28 * ((100vw - 320px) / 1600));\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks .what_content_block {\n  display: flex;\n  background: rgba(0, 128, 0, 0.05);\n  border-radius: 20px;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks .what_content_block .what_content_block_img {\n  flex: 0 1 40%;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks .what_content_block .what_content_block_img img {\n  max-width: 100%;\n  border-radius: 20px;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks .what_content_block .what_content_block_content {\n  flex: 0 1 60%;\n  padding: calc(16px + 16 * ((100vw - 320px) / 1600));\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks .what_content_block .what_content_block_content .what_content_block_name {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.7;\n}\n@media (max-width: 859.99px) {\n  .main .main__container .what_block_wrapper .what_content .what_content_blocks {\n    grid-template-columns: 1fr;\n  }\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks:not(:last-child) {\n  padding-bottom: calc(24px + 24 * ((100vw - 320px) / 1600));\n}\n.main .main__container .what_block_wrapper .what_content .what_content_button {\n  padding: 22px 70px;\n  cursor: pointer;\n}\n.main .main__container .download_block_wrapper {\n  background: rgba(0, 128, 0, 0.05);\n  border-radius: 20px;\n  margin-top: calc(90px + 110 * ((100vw - 320px) / 1600));\n  margin-bottom: calc(90px + 110 * ((100vw - 320px) / 1600));\n  position: relative;\n  overflow: hidden;\n}\n.main .main__container .download_block_wrapper .download_content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 64px 0;\n}\n.main .main__container .download_block_wrapper .download_content .download_content_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: calc(36px + 20 * ((100vw - 320px) / 1600));\n  line-height: 1.12;\n  text-align: center;\n  max-width: 700px;\n}\n.main .main__container .download_block_wrapper .download_content .download_content_title span {\n  color: #008000;\n}\n.main .main__container .download_block_wrapper .download_content .download_content_title:not(:last-child) {\n  padding-bottom: 48px;\n}\n.main .main__container .download_block_wrapper .download_content .download_content_stores {\n  display: flex;\n  gap: 24px;\n}\n.main .main__container .download_block_wrapper .download_content .download_content_stores .download_content_stores_store {\n  align-self: center;\n}\n.main .main__container .download_block_wrapper .download_content .download_content_stores .download_content_stores_store .download_content_link img {\n  max-width: 100%;\n}\n.main .main__container .download_block_wrapper::before, .main .main__container .download_block_wrapper::after {\n  content: \"\";\n  border: 1px solid rgba(0, 128, 0, 0.34);\n  width: calc(385px + 200 * ((100vw - 320px) / 1600));\n  height: calc(385px + 200 * ((100vw - 320px) / 1600));\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -55%);\n  z-index: -1;\n}\n.main .main__container .download_block_wrapper::before {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -40%);\n}\n\n.footer .footer_container-big .footer_header {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  padding-top: calc(20px + 48 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(40px + 60 * ((100vw - 320px) / 1600));\n}\n.footer .footer_container-big .footer_header .footer_header_logo svg {\n  margin-bottom: 24px;\n}\n.footer .footer_container-big .footer_header .footer_header_logo .footer_header_logo_text {\n  max-width: 292px;\n}\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_wrapper_text {\n  max-width: 338px;\n}\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_wrapper_text:not(:last-child) {\n  padding-bottom: 24px;\n}\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block {\n  background: rgba(55, 56, 38, 0.1);\n  border-radius: 10px;\n  padding: 6px;\n}\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form {\n  display: flex;\n  max-width: 533px;\n}\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form .footer_header_form_input {\n  padding: 22px 25px;\n  background: transparent;\n  width: 100%;\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.1;\n  flex: 1 1 auto;\n}\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form .footer_header_form_button {\n  color: #FFFFFF;\n  font-weight: 500;\n  padding: 22px 25px;\n}\n@media (max-width: 520px) {\n  .footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form .footer_header_form_button {\n    width: 100%;\n  }\n}\n@media (max-width: 1088px) {\n  .footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form {\n    flex-direction: column;\n  }\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone {\n  display: flex;\n  gap: calc(7px + 41 * ((100vw - 320px) / 1600));\n  justify-content: flex-end;\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone .footer_header_social .footer_header_social_title:not(:last-child) {\n  padding-bottom: 24px;\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone .footer_header_social .footer_header_social_icons {\n  display: flex;\n  gap: calc(10px + 6 * ((100vw - 320px) / 1600));\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone .footer_header_social .footer_header_social_icons .svgfooter {\n  width: 48px;\n  height: 48px;\n  background: #008000;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone .footer_header_phone .footer_header_phone_title:not(:last-child) {\n  padding-bottom: 24px;\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone .footer_header_phone a:hover {\n  text-decoration: underline;\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone .footer_header_phone .footer_header_phone_number {\n  font-family: \"Lato\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 19px;\n}\n@media (max-width: 1059.99px) {\n  .footer .footer_container-big .footer_header .footer_header_social_phone {\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: space-between;\n  }\n}\n@media (max-width: 840px) {\n  .footer .footer_container-big .footer_header .footer_header_social_phone {\n    flex-direction: row;\n    align-items: flex-start;\n    padding-top: 20px;\n  }\n}\n@media (max-width: 840px) {\n  .footer .footer_container-big .footer_header {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-row-gap: 0px;\n  }\n}\n@media (max-width: 700px) {\n  .footer .footer_container-big .footer_header {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr auto;\n    justify-items: center;\n  }\n}\n.footer .footer_container-big .footer_bottom {\n  border-top: 1px solid rgba(38, 50, 56, 0.31);\n  display: flex;\n  justify-content: space-between;\n}\n.footer .footer_container-big .footer_bottom .footer_bottom_date {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 13px;\n  display: flex;\n  align-items: center;\n}\n.footer .footer_container-big .footer_bottom .footer_bottom_menu {\n  height: 128px;\n  display: flex;\n  align-items: center;\n}\n.footer .footer_container-big .footer_bottom .footer_bottom_menu .footer_bottom_list {\n  display: flex;\n  gap: calc(20px + 20 * ((100vw - 320px) / 1600));\n}\n.footer .footer_container-big .footer_bottom .footer_bottom_menu .footer_bottom_list .footer_bottom_item .footer_bottom_link {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n  white-space: nowrap;\n}\n.footer .footer_container-big .footer_bottom .footer_bottom_menu .footer_bottom_list .footer_bottom_item .footer_bottom_link:hover {\n  text-decoration: underline;\n}\n@media (max-width: 620px) {\n  .footer .footer_container-big .footer_bottom .footer_bottom_menu .footer_bottom_list {\n    flex-wrap: wrap;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/fonts.scss","webpack://./src/style.scss","webpack://./src/style/_static.scss","webpack://./src/style/style.scss","webpack://./src/style/header.scss","webpack://./src/style/main.scss","webpack://./src/style/footer.scss"],"names":[],"mappings":"AAAA;EACC,6BAAA;EACA,+DAAA;EACA,gBAAA;ACCD;ADEA;EACC,6BAAA;EACA,+DAAA;EACA,gBAAA;ACAD;ADGA;EACC,6BAAA;EACA,+DAAA;EACA,gBAAA;ACDD;ADIA;EACC,6BAAA;EACA,+DAAA;EACA,gBAAA;ACFD;ADKA;EACC,6BAAA;EACA,+DAAA;EACA,gBAAA;ACHD;ADMA;EACC,mBAAA;EACA,+DAAA;EACA,gBAAA;ACJD;ADOA;EACC,mBAAA;EACA,+DAAA;EACA,gBAAA;ACLD;ACFA;;EAEC,qBAAA;EACA,cAAA;ADID;;ACDA;EACC,gBAAA;ADID;;ACDA;EACC,eAAA;ADID;;ACDA;;;EAGC,UAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,2BAAA;EACA,8BAAA;ADID;;ACDA;;EAEC,YAAA;EACA,cAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;ADID;;ACAC;EACC,kBAAA;EACA,cAAA;EACA,eAAA;ADGF;;ACEA,yCAAA;AACA;EACC,YAAA;EACA,cAAA;ADCD;;ACEA;EACC,cAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;ADCD;;ACEA,yCAAA;AACA;EACC,cAAA;ADCD;;ACEA;EACC,iBAAA;EACA,gBAAA;EACA,iBAAA;ADCD;;ACEA;EACC,iBAAA;EACA,gBAAA;EACA,iBAAA;ADCD;;AElGA;EACC,yBAAA;EACA,cAAA;EACA,+BANW;EAOX,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;AFqGD;;AElGA;EACC,yBAAA;AFqGD;;AElGA;EACC,yCAnBc;EAoBd,kBAAA;EACA,gBAAA;EDGC,oDAAA;ECDD,iBAAA;AFqGD;;AElGA;EAEC,+BAAA;EACA,qBAAA;AFqGD;AErCA;EACC;IAEC,4BAAA;IAEA,kCAAA;IACA,UAAA;EFyFA;EEtFD;IACC,UAAA;EFwFA;EErFD;IAEC,4BAAA;IAEA,kCAAA;EFuFA;EEpFD;IAEC,4BAAA;IAEA,kCAAA;EFsFA;EEnFD;IAEC,2BAAA;IAEA,kCAAA;EFqFA;EElFD;IAEC,2BAAA;IAEA,kCAAA;EFoFA;EEjFD;IAKC,0BAAA;IAEA,mCAAA;EFgFA;EE7ED;IAEC,0BAAA;IAEA,mCAAA;IACA,UAAA;EF+EA;AACF;AGxOA;EACC,kBAAA;EF0BC,uDAAA;ADiNF;AGxOC;EACC,aAAA;EACA,mBAAA;AH0OF;AGxOE;EACC,kBAAA;EACA,UAAA;EACA,iBAAA;EACA,+BDVS;ECWT,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AH0OH;AGvOE;EACC,cAAA;EACA,aAAA;EACA,uBAAA;AHyOH;AGvOG;EACC,aAAA;EACA,SAAA;EACA,eAAA;EACA,YAAA;AHyOJ;AGrOK;EACC,mBAAA;EACA,+BDhCM;ECiCN,kBAAA;EACA,gBAAA;EACA,eAAA;AHuON;AGnOK;EACC,0BAAA;AHqON;AGhOG;EACC;IACC,eAAA;IACA,UAAA;IACA,OAAA;IACA,MAAA;IACA,WAAA;IACA,YAAA;IACA,yBAAA;IACA,aAAA;IACA,cAAA;EHkOH;EGhOG;IACC,sBAAA;IACA,mBAAA;IACA,kBAAA;IACA,aAAA;EHkOJ;EG/NK;IACC,eAAA;IACA,YAAA;EHiON;EG5NG;IACC,aAAA;IACA,qCAAA;IACA,kBAAA;EH8NJ;AACF;AGvNG;EACC,cAAA;AHyNJ;AGhNE;EACC,aAAA;EACA,SAAA;AHkNH;AGhNG;EACC,iBAAA;EACA,cAAA;AHkNJ;AG/MG;EAEC,kBAAA;EACA,yBAAA;EACA,sBAAA;EACA,cAAA;AHgNJ;AG7MG;EACC,yBAAA;AH+MJ;AG5MG;EAEC,kBAAA;AH6MJ;AG1MG;EACC,yBAAA;AH4MJ;AGzMG;EACC;IACC,kBAAA;EH2MH;EGxME;IACC,kBAAA;EH0MH;AACF;AGvMG;EACC;IACC,kBAAA;EHyMH;EGtME;IACC,kBAAA;EHwMH;AACF;AGrMG;EACC,kBAAA;AHuMJ;AGnME;EACC;IACC,aAAA;EHqMF;AACF;AGjME;EACC,aAAA;EACA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;AHmMH;AGjMG;EAGC,WAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,WAAA;EACA,yBAAA;AHiMJ;AG9LG;EACC,MAAA;AHgMJ;AG7LG;EACC,SAAA;AH+LJ;AG5LG;EACC,oBAAA;AH8LJ;AG1LE;EACC;IACC,cAAA;EH4LF;AACF;AGxKC;EAEC,WAAA;EACA,yBAAA;EF5LA,mDAAA;EAAA,oDAAA;EE+LA,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;AHyKF;AGtKC;EACC,WAAA;EACA,YAAA;AHwKF;;AI1YA,uDAAA;AAIC;EAsMC,wDAAA;EAiCA,sDAAA;EA+JA,uDAAA;EAkLA,sDAAA;EA8JA,uDAAA;EAgHA,2DAAA;AJtbF;AI/YE;EACC,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EHAD,kBAAA;EAAA,qBAAA;ADmZF;ACjZE;EGNA;IHOC,uDAAA;EDoZD;AACF;ACtZE;EGNA;IHOC,2DAAA;EDyZD;AACF;AIzZG;EACC,yCFXW;EEYX,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,eAAA;AJ2ZJ;AIzZI;EACC,cAAA;AJ2ZL;AIvZG;EACC;IHnBF,eAAA;IAAA,iBAAA;ED8aA;AACF;AC7aE;EGiBE;IHhBD,qDAAA;EDgbD;AACF;AClbE;EGiBE;IHhBD,uDAAA;EDqbD;AACF;AIhaG;EACC;IACC,gBAAA;EJkaH;AACF;AI/ZG;EACC,yCFtCW;EEuCX,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;AJiaJ;AI9ZG;EACC;IACC,gBAAA;EJgaH;AACF;AI7ZG;EACC,gBAAA;EACA,WAAA;AJ+ZJ;AI7ZI;EACC,iCAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;EACA,QAAA;AJ+ZL;AI7ZK;EACC,yCFlES;EEmET,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,uBAAA;EACA,eAAA;EACA,cAAA;EACA,YAAA;AJ+ZN;AI5ZK;EAEC,kBAAA;AJ6ZN;AIzZI;EACC;IACC,sBAAA;IACA,WAAA;EJ2ZJ;EIzZI;IACC,WAAA;EJ2ZL;EIxZI;IACC,WAAA;EJ0ZL;AACF;AIpZE;EACC,kBAAA;AJsZH;AInZI;EACC,kBAAA;EACA,eAAA;EACA,4BAAA;AJqZL;AIhZE;EACC,mBAAA;EACA,mBAAA;AJkZH;AI/YE;EACC;IACC,mBAAA;EJiZF;AACF;AI9YE;EACC,WAAA;EACA,oBAAA;AJgZH;AI7YE;EACC,mBAAA;EACA,oBAAA;AJ+YH;AI5YI;EACC,kBAAA;EACA,yBAAA;EACA,eAAA;EACA,iCAAA;AJ8YL;AIzYE;EACC;IACC,mBAAA;EJ2YF;AACF;AIxYE;EACC,iBAAA;EACA,qBAAA;AJ0YH;AIvYE;EACC,mBAAA;EACA,qBAAA;AJyYH;AItYE;EACC,mBAAA;EACA,SAAA;AJwYH;AIrYI;EACC,kBAAA;EACA,yBAAA;EACA,eAAA;EACA,iCAAA;AJuYL;AIlYE;EACC,mBAAA;EACA,oBAAA;AJoYH;AIjYI;EACC,kBAAA;EACA,yBAAA;EACA,eAAA;EACA,iCAAA;AJmYL;AI9XE;EACC;IACC,mBAAA;EJgYF;AACF;AI5XE;EACC;IACC,YAAA;EJ8XF;AACF;AIzXE;EACC,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;EACA,SAAA;EACA,eAAA;AJ2XH;AItXK;EACC,kBAAA;AJwXN;AIrXO;EACC,iCAAA;AJuXR;AI7WE;EACC;IACC,uBAAA;EJ+WF;AACF;AI3WE;EHjNA,wDAAA;EGmNC,aAAA;EHnND,+CAAA;ADikBF;AI3WG;EACC,aAAA;AJ6WJ;AI3WI;EACC,yCFlPU;EEmPV,kBAAA;EACA,gBAAA;EH5NH,qDAAA;EG8NG,iBAAA;AJ6WL;AI3WK;EACC,cAAA;AJ6WN;AIzWI;EACC;IACC,gBAAA;EJ2WJ;AACF;AIxWI;EH3OF,0DAAA;ADslBF;AIlWI;EACC;IACC,gBAAA;EJoWJ;AACF;AIjWI;EH1PF,0DAAA;AD8lBF;AIhWI;EACC,aAAA;EACA,sBAAA;EHhQH,+CAAA;EGkQG,gBAAA;AJkWL;AIhWK;EACC,aAAA;EHrQJ,+CAAA;ADwmBF;AIhWM;EHxQJ,mDAAA;EG0QK,kBAAA;EACA,gCAAA;EACA,kBAAA;AJkWP;AI/VM;EACC,aAAA;EACA,sBAAA;EACA,SAAA;AJiWP;AI/VO;EACC,yCF7SO;EE8SP,kBAAA;EACA,gBAAA;EHvRN,oDAAA;EGyRM,gBAAA;AJiWR;AI7VO;EACC,yCFtTO;EEuTP,kBAAA;EACA,gBAAA;EHhSN,oDAAA;EGkSM,gBAAA;EAEA,gBAAA;AJ8VR;AIvVG;EACC;IACC,aAAA;IACA,sBAAA;IACA,mBAAA;EJyVH;AACF;AItVG;EACC,aAAA;EHpTF,wDAAA;EAAA,2DAAA;EAAA,wDAAA;EAAA,yDAAA;EG0TE,iCAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AJuVJ;AIrVI;EACC,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;AJuVL;AIpVI;EAEC,WAAA;EACA,yBAAA;EH1UH,mDAAA;EAAA,oDAAA;EG6UG,kBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,8BAAA;EACA,UAAA;AJqVL;AIlVI;EACC,MAAA;EACA,OAAA;EACA,+BAAA;AJoVL;AIhVG;EACC;IACC,kBAAA;EJkVH;AACF;AI/UG;EACC;IACC,kBAAA;EJiVH;AACF;AI7UE;EACC;IACC,sBAAA;EJ+UF;AACF;AI3UE;EHhXA,wDAAA;EGkXC,aAAA;EHlXD,+CAAA;ADgsBF;AI3UG;EACC,aAAA;EHtXF,uDAAA;EAAA,0DAAA;EAAA,yDAAA;EAAA,wDAAA;EG2XE,iCAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AJ6UJ;AI3UI;EACC,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;AJ6UL;AI1UI;EAEC,WAAA;EACA,yBAAA;EH1YH,mDAAA;EAAA,oDAAA;EG6YG,kBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,iCAAA;EACA,UAAA;AJ2UL;AIxUI;EACC,QAAA;EACA,SAAA;EACA,iCAAA;AJ0UL;AIrUG;EACC;IACC,kBAAA;EJuUH;AACF;AIpUG;EACC,aAAA;AJsUJ;AIpUI;EACC,yCF/bU;EEgcV,kBAAA;EACA,gBAAA;EHzaH,qDAAA;EG2aG,iBAAA;AJsUL;AInUK;EACC,cAAA;AJqUN;AIjUI;EACC;IACC,gBAAA;EJmUJ;AACF;AIhUI;EHzbF,0DAAA;AD4vBF;AI1TI;EACC;IACC,gBAAA;EJ4TJ;AACF;AIzTI;EHxcF,0DAAA;ADowBF;AIxTI;EACC,aAAA;EACA,sBAAA;EACA,SAAA;AJ0TL;AIxTK;EACC,iCAAA;EACA,mBAAA;AJ0TN;AIvTM;EACC,kBAAA;EACA,yCFhfQ;EEifR,kBAAA;EACA,gBAAA;EH1dL,oDAAA;EG4dK,iBAAA;EACA,eAAA;EACA,kBAAA;AJyTP;AIrTM;EACC,WAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,2BAAA;EACA,WAAA;EACA,YAAA;EACA,yDAAA;AJuTP;AIpTM;EACC,WAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,2BAAA;EACA,WAAA;EACA,YAAA;EACA,yDAAA;EACA,4BAAA;EACA,sCAAA;EACA,yBAAA;AJsTP;AIlTM;EAEC,kCAAA;AJmTP;AIhTM;EACC,aAAA;EACA,gBAAA;EACA,yBAAA;AJkTP;AI7SM;EACC,gBAAA;EACA,kBAAA;EACA,yBAAA;AJ+SP;AIhSE;EACC;IACC,8BAAA;EJkSF;AACF;AI9RE;EHliBA,wDAAA;EGoiBC,aAAA;EHpiBD,gDAAA;ADq0BF;AI9RG;EACC,aAAA;AJgSJ;AI9RI;EACC,yCFnkBU;EEokBV,kBAAA;EACA,gBAAA;EH7iBH,qDAAA;EG+iBG,iBAAA;AJgSL;AI9RK;EACC,cAAA;AJgSN;AI5RI;EACC;IACC,gBAAA;EJ8RJ;AACF;AI3RI;EH5jBF,0DAAA;AD01BF;AIrRI;EACC;IACC,gBAAA;EJuRJ;AACF;AIpRI;EH3kBF,0DAAA;ADk2BF;AInRI;EACC,aAAA;EACA,sBAAA;EHjlBH,+CAAA;EGmlBG,gBAAA;EACA,gBAAA;AJqRL;AInRK;EACC,aAAA;EHvlBJ,+CAAA;EGylBI,mBAAA;EACA,6BAAA;EACA,UAAA;EACA,4BAAA;AJqRN;AInRM;EACC,aAAA;EH/lBL,iDAAA;EAAA,kDAAA;EGkmBK,kBAAA;EACA,gCAAA;EACA,mBAAA;EACA,uBAAA;AJqRP;AIlRM;EACC,yCFjoBQ;EEkoBR,kBAAA;EACA,gBAAA;EH3mBL,oDAAA;EG6mBK,gBAAA;EACA,gBAAA;AJoRP;AItQK;EACC,UAAA;EACA,8BAAA;AJwQN;AIrQK;EACC,4BAAA;AJuQN;AIpQK;EACC,8BAAA;AJsQN;AInQK;EACC,8BAAA;AJqQN;AIlQK;EACC,8BAAA;AJoQN;AIvPI;EH3pBF,0DAAA;ADq5BF;AItPI;EAEC,kBAAA;AJuPL;AIlPG;EACC,aAAA;EACA,mBAAA;AJoPJ;AIlPI;EACC,eAAA;EACA,mBAAA;AJoPL;AIhPG;EACC;IACC,kBAAA;EJkPH;AACF;AI7OE;EACC;IACC,sBAAA;IACA,mBAAA;EJ+OF;AACF;AI3OE;EHhsBA,wDAAA;EAAA,gDAAA;AD+6BF;AI3OG;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;AJ6OJ;AI3OI;EACC,yCFluBU;EEmuBV,kBAAA;EACA,gBAAA;EH5sBH,qDAAA;EG8sBG,iBAAA;AJ6OL;AI3OK;EACC,cAAA;AJ6ON;AIxOI;EHttBF,0DAAA;ADi8BF;AIlOI;EACC;IACC,gBAAA;EJoOJ;AACF;AIjOI;EHruBF,0DAAA;ADy8BF;AIhOI;EACC,aAAA;EACA,8BAAA;EH3uBH,oDAAA;EAAA,+CAAA;AD88BF;AI7NK;EACC,aAAA;EACA,iCAAA;EACA,mBAAA;AJ+NN;AI7NM;EACC,aAAA;AJ+NP;AI5NO;EACC,eAAA;EACA,mBAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;AJ8NR;AI1NM;EACC,aAAA;EHnwBL,mDAAA;EGqwBK,aAAA;EACA,sBAAA;EACA,8BAAA;AJ4NP;AItNO;EACC,yCFtyBO;EEuyBP,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;AJwNR;AI/MI;EACC;IACC,0BAAA;EJiNJ;AACF;AI9MI;EHjyBF,0DAAA;ADk/BF;AI7MI;EAEC,kBAAA;EACA,eAAA;AJ8ML;AIrME;EACC,iCAAA;EACA,mBAAA;EHnzBD,uDAAA;EAAA,0DAAA;EGszBC,kBAAA;EACA,gBAAA;AJuMH;AIrMG;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;AJuMJ;AIrMI;EACC,yCFx1BU;EEy1BV,kBAAA;EACA,gBAAA;EHl0BH,qDAAA;EGo0BG,iBAAA;EACA,kBAAA;EACA,gBAAA;AJuML;AIrMK;EACC,cAAA;AJuMN;AInMI;EACC,oBAAA;AJqML;AIlMI;EACC,aAAA;EACA,SAAA;AJoML;AIlMK;EACC,kBAAA;AJoMN;AIjMO;EACC,eAAA;AJmMR;AI5LG;EAEC,WAAA;EACA,uCAAA;EHp2BF,mDAAA;EAAA,oDAAA;EGu2BE,kBAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,WAAA;AJ6LJ;AI1LG;EACC,QAAA;EACA,SAAA;EACA,gCAAA;AJ4LJ;;AKrkCE;EACC,aAAA;EACA,qCAAA;EJqBD,uDAAA;EAAA,0DAAA;ADqjCF;AKnkCI;EACC,mBAAA;ALqkCL;AKlkCI;EAEC,gBAAA;ALmkCL;AK7jCI;EAEC,gBAAA;AL8jCL;AK3jCI;EACC,oBAAA;AL6jCL;AK1jCI;EACC,iCAAA;EACA,mBAAA;EACA,YAAA;AL4jCL;AKxjCK;EACC,aAAA;EACA,gBAAA;AL0jCN;AKxjCM;EACC,kBAAA;EACA,uBAAA;EACA,WAAA;EACA,yCH9CQ;EG+CR,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AL0jCP;AKrjCM;EAEC,cAAA;EACA,gBAAA;EACA,kBAAA;ALsjCP;AKljCM;EACC;IACC,WAAA;ELojCN;AACF;AKhjCK;EACC;IACC,sBAAA;ELkjCL;AACF;AK5iCG;EACC,aAAA;EJzDF,8CAAA;EI2DE,yBAAA;AL8iCJ;AKziCK;EACC,oBAAA;AL2iCN;AKxiCK;EACC,aAAA;EJrEJ,8CAAA;ADgnCF;AKxiCM;EACC,WAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AL0iCP;AKhiCK;EACC,oBAAA;ALkiCN;AK5hCK;EACC,0BAAA;AL8hCN;AK3hCK;EACC,+BH/HM;EGgIN,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AL6hCN;AKthCG;EACC;IACC,sBAAA;IACA,qBAAA;IACA,8BAAA;ELwhCH;AACF;AKphCG;EACC;IACC,mBAAA;IACA,uBAAA;IACA,iBAAA;ELshCH;AACF;AKjhCE;EACC;IACC,8BAAA;IACA,2BAAA;IACA,iBAAA;ELmhCF;AACF;AKhhCE;EACC;IACC,0BAAA;IACA,gCAAA;IACA,qBAAA;ELkhCF;AACF;AK7gCE;EACC,4CAAA;EACA,aAAA;EACA,8BAAA;AL+gCH;AK7gCG;EACC,yCHpLW;EGqLX,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;AL+gCJ;AKzgCG;EACC,aAAA;EACA,aAAA;EACA,mBAAA;AL2gCJ;AKzgCI;EACC,aAAA;EJ9KH,+CAAA;AD0rCF;AKxgCM;EACC,yCH3MQ;EG4MR,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EAEA,mBAAA;ALygCP;AKtgCM;EACC,0BAAA;ALwgCP;AKngCI;EACC;IACC,eAAA;ELqgCJ;AACF","sourcesContent":["@font-face {\r\n\tfont-family: 'League Spartan';\r\n\tsrc: url('fonts/LeagueSpartan-Light.ttf') format('truetype');\r\n\tfont-weight: 300;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'League Spartan';\r\n\tsrc: url('fonts/LeagueSpartan-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'League Spartan';\r\n\tsrc: url('fonts/LeagueSpartan-Medium.ttf') format('truetype');\r\n\tfont-weight: 500;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'League Spartan';\r\n\tsrc: url('fonts/LeagueSpartan-SemiBold.ttf') format('truetype');\r\n\tfont-weight: 600;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'League Spartan';\r\n\tsrc: url('fonts/LeagueSpartan-Bold.ttf') format('truetype');\r\n\tfont-weight: 700;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Lato';\r\n\tsrc: url('fonts/Lato-Light.ttf') format('truetype');\r\n\tfont-weight: 300;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'Lato';\r\n\tsrc: url('fonts/Lato-Regular.ttf') format('truetype');\r\n\tfont-weight: 400;\r\n}","@font-face {\n  font-family: \"League Spartan\";\n  src: url(\"fonts/LeagueSpartan-Light.ttf\") format(\"truetype\");\n  font-weight: 300;\n}\n@font-face {\n  font-family: \"League Spartan\";\n  src: url(\"fonts/LeagueSpartan-Regular.ttf\") format(\"truetype\");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"League Spartan\";\n  src: url(\"fonts/LeagueSpartan-Medium.ttf\") format(\"truetype\");\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"League Spartan\";\n  src: url(\"fonts/LeagueSpartan-SemiBold.ttf\") format(\"truetype\");\n  font-weight: 600;\n}\n@font-face {\n  font-family: \"League Spartan\";\n  src: url(\"fonts/LeagueSpartan-Bold.ttf\") format(\"truetype\");\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Lato\";\n  src: url(\"fonts/Lato-Light.ttf\") format(\"truetype\");\n  font-weight: 300;\n}\n@font-face {\n  font-family: \"Lato\";\n  src: url(\"fonts/Lato-Regular.ttf\") format(\"truetype\");\n  font-weight: 400;\n}\na,\na:visited {\n  text-decoration: none;\n  color: #263238;\n}\n\nul li {\n  list-style: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  border: none;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n  line-height: 1;\n  background: #FFFFFF;\n  font-size: 16px;\n  color: #263238;\n}\n\nsvg * {\n  fill: currentColor;\n  color: #263238;\n  fill-opacity: 1;\n}\n\n/*--------------------------------------*/\n#root {\n  height: 100%;\n  line-height: 1;\n}\n\n.wrapper {\n  overflow: clip;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n/*--------------------------------------*/\n.main {\n  flex: 1 1 auto;\n}\n\n[class*=_container-big] {\n  max-width: 1650px;\n  margin: 0px auto;\n  padding: 0px 15px;\n}\n\n[class*=__container] {\n  max-width: 1420px;\n  margin: 0px auto;\n  padding: 0px 15px;\n}\n\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form .footer_header_form_button, .main .main__container .what_block_wrapper .what_content .what_content_button, .main .main__container .why_block_wrapper .why_content .why_content_button, .main .main__container .home_block_wrapper .home_form_wrapper .home_form .home_button, .header .header_container-big .header_buttons #get, .header .header_container-big .header_buttons #sign {\n  background-color: #008000;\n  color: #FFFFFF;\n  font-family: \"Lato\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.1;\n  border-radius: 10px;\n  white-space: nowrap;\n}\n\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form .footer_header_form_button:hover, .main .main__container .what_block_wrapper .what_content .what_content_button:hover, .main .main__container .why_block_wrapper .why_content .why_content_button:hover, .main .main__container .home_block_wrapper .home_form_wrapper .home_form .home_button:hover, .header .header_container-big .header_buttons #get:hover, .header .header_container-big .header_buttons #sign:hover {\n  background-color: #6c836c;\n}\n\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_wrapper_text, .footer .footer_container-big .footer_header .footer_header_logo .footer_header_logo_text, .main .main__container .what_block_wrapper .what_content .what_content_blocks .what_content_block .what_content_block_content .what_content_block_text, .main .main__container .what_block_wrapper .what_content .what_content_text, .main .main__container .why_block_wrapper .why_content .why_content_text, .main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_text, .main .main__container .your_block_wrapper .your_content .your_content_text, .main .main__container .how_block_wrapper .how_content .how_content_text {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: calc(16px + 2 * ((100vw - 320px) / 1600));\n  line-height: 1.77;\n}\n\n.bounce-top {\n  -webkit-animation: bounce-top 0.9s both;\n  animation: bounce-top 0.9s both;\n  display: inline-block;\n}\n\n@-webkit-keyframes bounce-top {\n  0% {\n    -webkit-transform: translateY(-45px);\n    transform: translateY(-45px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 1;\n  }\n  24% {\n    opacity: 1;\n  }\n  40% {\n    -webkit-transform: translateY(-24px);\n    transform: translateY(-24px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  65% {\n    -webkit-transform: translateY(-12px);\n    transform: translateY(-12px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  82% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  93% {\n    -webkit-transform: translateY(-4px);\n    transform: translateY(-4px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  25%, 55%, 75%, 87% {\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n    opacity: 1;\n  }\n}\n@keyframes bounce-top {\n  0% {\n    -webkit-transform: translateY(-45px);\n    transform: translateY(-45px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 1;\n  }\n  24% {\n    opacity: 1;\n  }\n  40% {\n    -webkit-transform: translateY(-24px);\n    transform: translateY(-24px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  65% {\n    -webkit-transform: translateY(-12px);\n    transform: translateY(-12px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  82% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  93% {\n    -webkit-transform: translateY(-4px);\n    transform: translateY(-4px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  25%, 55%, 75%, 87% {\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n    opacity: 1;\n  }\n}\n.header {\n  position: relative;\n  padding-top: calc(30px + 30 * ((100vw - 320px) / 1600));\n}\n.header .header_container-big {\n  display: flex;\n  align-items: center;\n}\n.header .header_container-big .header_logo {\n  position: relative;\n  z-index: 7;\n  margin-right: 5px;\n  font-family: \"Lato\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 36px;\n  line-height: 43px;\n}\n.header .header_container-big .header_menu {\n  flex: 1 1 auto;\n  display: flex;\n  justify-content: center;\n}\n.header .header_container-big .header_menu .header_menu_list {\n  display: flex;\n  gap: 44px;\n  flex-wrap: wrap;\n  row-gap: 5px;\n}\n.header .header_container-big .header_menu .header_menu_list .header_menu_item .menu_link {\n  white-space: nowrap;\n  font-family: \"Lato\", sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n}\n.header .header_container-big .header_menu .header_menu_list .header_menu_item .menu_link:hover {\n  text-decoration: underline;\n}\n@media (max-width: 940px) {\n  .header .header_container-big .header_menu .body_burger {\n    position: fixed;\n    z-index: 6;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #756868;\n    display: none;\n    overflow: auto;\n  }\n  .header .header_container-big .header_menu .body_burger .header_menu_list {\n    flex-direction: column;\n    align-items: center;\n    padding-top: 150px;\n    row-gap: 44px;\n  }\n  .header .header_container-big .header_menu .body_burger .header_menu_list .header_menu_item .menu_link {\n    font-size: 44px;\n    color: white;\n  }\n  .header .header_container-big .header_menu .body_burger .header_buttons {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    padding-top: 100px;\n  }\n}\n.header .header_container-big .header_menu .open {\n  display: block;\n}\n.header .header_container-big .header_buttons {\n  display: flex;\n  gap: 16px;\n}\n.header .header_container-big .header_buttons .light {\n  margin-left: 10px;\n  color: #263238;\n}\n.header .header_container-big .header_buttons #sign {\n  padding: 21px 44px;\n  border: 1px solid #263238;\n  background-color: #fff;\n  color: #263238;\n}\n.header .header_container-big .header_buttons #sign:hover {\n  background-color: #e7dbdb;\n}\n.header .header_container-big .header_buttons #get {\n  padding: 21px 25px;\n}\n.header .header_container-big .header_buttons #get:hover {\n  background-color: #036103;\n}\n@media (max-width: 554px) {\n  .header .header_container-big .header_buttons #sign {\n    padding: 17px 35px;\n  }\n  .header .header_container-big .header_buttons #get {\n    padding: 17px 20px;\n  }\n}\n@media (max-width: 319.99px) {\n  .header .header_container-big .header_buttons #sign {\n    padding: 10px 20px;\n  }\n  .header .header_container-big .header_buttons #get {\n    padding: 10px 10px;\n  }\n}\n.header .header_container-big .header_buttons i {\n  align-self: center;\n}\n@media (max-width: 940px) {\n  .header .header_container-big .header_buttons {\n    display: none;\n  }\n}\n.header .header_container-big .header_burger {\n  display: none;\n  flex: 0 0 40px;\n  height: 18px;\n  position: relative;\n  z-index: 7;\n  cursor: pointer;\n  margin-left: 20px;\n}\n.header .header_container-big .header_burger span, .header .header_container-big .header_burger::before, .header .header_container-big .header_burger::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  width: 100%;\n  height: 4px;\n  background-color: #c99393;\n}\n.header .header_container-big .header_burger::before {\n  top: 0;\n}\n.header .header_container-big .header_burger::after {\n  bottom: 0;\n}\n.header .header_container-big .header_burger span {\n  top: calc(50% - 2px);\n}\n@media (max-width: 940px) {\n  .header .header_container-big .header_burger {\n    display: block;\n  }\n}\n.header::before, .header::after {\n  content: \"\";\n  border: 1px solid #008000;\n  width: calc(385px + 200 * ((100vw - 320px) / 1600));\n  height: calc(385px + 200 * ((100vw - 320px) / 1600));\n  border-radius: 50%;\n  position: absolute;\n  top: -206px;\n  left: -171px;\n}\n.header::before {\n  top: -261px;\n  left: -116px;\n}\n\n/*Home block------------------------------------------*/\n.main .main__container {\n  /*Slide block------------------------------------------*/\n  /*How block------------------------------------------*/\n  /*Your block------------------------------------------*/\n  /*WHY block------------------------------------------*/\n  /*What block------------------------------------------*/\n  /*Download block------------------------------------------*/\n}\n.main .main__container .home_block_wrapper {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 127px;\n  padding-bottom: 200px;\n}\n@media (max-width: 1420px) {\n  .main .main__container .home_block_wrapper {\n    padding-top: calc(47px + 80 * ((100vw - 320px) / 1100));\n  }\n}\n@media (max-width: 1420px) {\n  .main .main__container .home_block_wrapper {\n    padding-bottom: calc(70px + 130 * ((100vw - 320px) / 1100));\n  }\n}\n.main .main__container .home_block_wrapper .home_block_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  text-align: center;\n  line-height: 1.1;\n  padding-bottom: 69px;\n  font-size: 70px;\n}\n.main .main__container .home_block_wrapper .home_block_title span {\n  color: #008000;\n}\n@media (max-width: 1420px) {\n  .main .main__container .home_block_wrapper .home_block_title {\n    font-size: 70px;\n    line-height: 70px;\n  }\n}\n@media (max-width: 1420px) and (max-width: 1420px) {\n  .main .main__container .home_block_wrapper .home_block_title {\n    font-size: calc(45px + 25 * ((100vw - 320px) / 1100));\n  }\n}\n@media (max-width: 1420px) and (max-width: 1420px) {\n  .main .main__container .home_block_wrapper .home_block_title {\n    line-height: calc(45px + 25 * ((100vw - 320px) / 1100));\n  }\n}\n@media (min-width: 798.98px) {\n  .main .main__container .home_block_wrapper .home_block_title {\n    max-width: 823px;\n  }\n}\n.main .main__container .home_block_wrapper .home_block_text {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  text-align: center;\n  line-height: 1.8;\n  padding-bottom: 48px;\n}\n@media (min-width: 798.98px) {\n  .main .main__container .home_block_wrapper .home_block_text {\n    max-width: 580px;\n  }\n}\n.main .main__container .home_block_wrapper .home_form_wrapper {\n  max-width: 533px;\n  width: 100%;\n}\n.main .main__container .home_block_wrapper .home_form_wrapper .home_form {\n  background: rgba(38, 50, 56, 0.1);\n  position: relative;\n  padding: 6px;\n  border-radius: 10px;\n  display: flex;\n  gap: 5px;\n}\n.main .main__container .home_block_wrapper .home_form_wrapper .home_form .home_input {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  background: transparent;\n  padding: 0 25px;\n  flex: 1 1 auto;\n  height: 64px;\n}\n.main .main__container .home_block_wrapper .home_form_wrapper .home_form .home_button {\n  padding: 22px 25px;\n}\n@media (max-width: 430px) {\n  .main .main__container .home_block_wrapper .home_form_wrapper .home_form {\n    flex-direction: column;\n    width: 100%;\n  }\n  .main .main__container .home_block_wrapper .home_form_wrapper .home_form .home_input {\n    width: 100%;\n  }\n  .main .main__container .home_block_wrapper .home_form_wrapper .home_form .home_button {\n    width: 100%;\n  }\n}\n.main .main__container .home_ikon {\n  position: absolute;\n}\n.main .main__container .home_ikon .svgHome * {\n  fill: currentColor;\n  fill-opacity: 1;\n  color: rgba(42, 38, 56, 0.4);\n}\n.main .main__container .i1 {\n  top: 66.9811320755%;\n  left: 0.9259259259%;\n}\n@media (max-width: 612px) {\n  .main .main__container .i1 {\n    top: 55.1886792453%;\n  }\n}\n.main .main__container .i2 {\n  top: 31.25%;\n  left: 14.6296296296%;\n}\n.main .main__container .i3 {\n  top: 75.8254716981%;\n  left: 24.8765432099%;\n}\n.main .main__container .i3 .svgHome3 * {\n  fill: currentColor;\n  border: 1px solid #263238;\n  fill-opacity: 1;\n  color: rgba(247, 255, 253, 0.979);\n}\n@media (max-width: 612px) {\n  .main .main__container .i3 {\n    top: 94.3396226415%;\n  }\n}\n.main .main__container .i4 {\n  top: 2.358490566%;\n  right: 26.1111111111%;\n}\n.main .main__container .i5 {\n  top: 35.9669811321%;\n  right: 17.2222222222%;\n}\n.main .main__container .i6 {\n  top: 29.8349056604%;\n  right: 0%;\n}\n.main .main__container .i6 .svgHome6 * {\n  fill: currentColor;\n  border: 1px solid #263238;\n  fill-opacity: 1;\n  color: rgba(247, 255, 253, 0.979);\n}\n.main .main__container .i7 {\n  top: 76.8867924528%;\n  right: 15.987654321%;\n}\n.main .main__container .i7 .svgHome7 * {\n  fill: currentColor;\n  border: 1px solid #263238;\n  fill-opacity: 1;\n  color: rgba(247, 255, 253, 0.979);\n}\n@media (max-width: 750px) {\n  .main .main__container .i7 {\n    top: 58.9622641509%;\n  }\n}\n@media (max-width: 640px) {\n  .main .main__container .home_ikon {\n    opacity: 0.3;\n  }\n}\n.main .main__container .slide_block_wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.main .main__container .slide_block_wrapper .slide_block .svg4:not(image) svg {\n  fill: currentColor;\n}\n.main .main__container .slide_block_wrapper .slide_block .svg4:not(image) svg g path {\n  fill: rgba(0, 0, 0, 0.8901960784);\n}\n@media (max-width: 1100px) {\n  .main .main__container .slide_block_wrapper {\n    justify-content: center;\n  }\n}\n.main .main__container .how_block_wrapper {\n  padding-top: calc(50px + 138 * ((100vw - 320px) / 1600));\n  display: flex;\n  gap: calc(40px + 56 * ((100vw - 320px) / 1600));\n}\n.main .main__container .how_block_wrapper .how_content {\n  flex: 0 1 45%;\n}\n.main .main__container .how_block_wrapper .how_content .how_content_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: calc(44px + 20 * ((100vw - 320px) / 1600));\n  line-height: 1.12;\n}\n.main .main__container .how_block_wrapper .how_content .how_content_title span {\n  color: #008000;\n}\n@media (min-width: 859.99px) {\n  .main .main__container .how_block_wrapper .how_content .how_content_title {\n    max-width: 450px;\n  }\n}\n.main .main__container .how_block_wrapper .how_content .how_content_title:not(:last-child) {\n  padding-bottom: calc(15px + 17 * ((100vw - 320px) / 1600));\n}\n@media (min-width: 859.99px) {\n  .main .main__container .how_block_wrapper .how_content .how_content_text {\n    max-width: 450px;\n  }\n}\n.main .main__container .how_block_wrapper .how_content .how_content_text:not(:last-child) {\n  padding-bottom: calc(30px + 18 * ((100vw - 320px) / 1600));\n}\n.main .main__container .how_block_wrapper .how_content .how_content_blocks {\n  display: flex;\n  flex-direction: column;\n  gap: calc(20px + 28 * ((100vw - 320px) / 1600));\n  max-width: 490px;\n}\n.main .main__container .how_block_wrapper .how_content .how_content_blocks .how_content_block {\n  display: flex;\n  gap: calc(20px + 12 * ((100vw - 320px) / 1600));\n}\n.main .main__container .how_block_wrapper .how_content .how_content_blocks .how_content_block .how_content_block_circle {\n  padding: calc(15px + 12 * ((100vw - 320px) / 1600));\n  border-radius: 50%;\n  background: rgba(0, 128, 0, 0.1);\n  align-self: center;\n}\n.main .main__container .how_block_wrapper .how_content .how_content_blocks .how_content_block .how_content_block_content {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.main .main__container .how_block_wrapper .how_content .how_content_blocks .how_content_block .how_content_block_content .how_content_block_content_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: calc(18px + 2 * ((100vw - 320px) / 1600));\n  line-height: 1.1;\n}\n.main .main__container .how_block_wrapper .how_content .how_content_blocks .how_content_block .how_content_block_content .how_content_block_content_text {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: calc(15px + 3 * ((100vw - 320px) / 1600));\n  line-height: 1.8;\n  max-width: 270px;\n}\n@media (max-width: 859.99px) {\n  .main .main__container .how_block_wrapper .how_content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.main .main__container .how_block_wrapper .how_image {\n  flex: 0 1 55%;\n  padding-top: calc(30px + 136 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(30px + 136 * ((100vw - 320px) / 1600));\n  padding-left: calc(30px + 15 * ((100vw - 320px) / 1600));\n  padding-right: calc(30px + 15 * ((100vw - 320px) / 1600));\n  background: rgba(0, 128, 0, 0.05);\n  border-radius: 20px;\n  position: relative;\n  overflow: hidden;\n  align-self: start;\n}\n.main .main__container .how_block_wrapper .how_image img {\n  max-width: 100%;\n  border-radius: 20px;\n  position: relative;\n  z-index: 2;\n}\n.main .main__container .how_block_wrapper .how_image::before, .main .main__container .how_block_wrapper .how_image::after {\n  content: \"\";\n  border: 1px solid #008000;\n  width: calc(385px + 200 * ((100vw - 320px) / 1600));\n  height: calc(385px + 200 * ((100vw - 320px) / 1600));\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translate(70%, -5%);\n  z-index: 1;\n}\n.main .main__container .how_block_wrapper .how_image::before {\n  top: 0;\n  left: 0;\n  transform: translate(70%, -20%);\n}\n@media (max-width: 1249.99px) {\n  .main .main__container .how_block_wrapper .how_image {\n    align-self: center;\n  }\n}\n@media (max-width: 859.99px) {\n  .main .main__container .how_block_wrapper .how_image {\n    align-self: center;\n  }\n}\n@media (max-width: 859.99px) {\n  .main .main__container .how_block_wrapper {\n    flex-direction: column;\n  }\n}\n.main .main__container .your_block_wrapper {\n  padding-top: calc(50px + 138 * ((100vw - 320px) / 1600));\n  display: flex;\n  gap: calc(60px + 66 * ((100vw - 320px) / 1600));\n}\n.main .main__container .your_block_wrapper .your_image {\n  flex: 0 1 55%;\n  padding-top: calc(50px + 49 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(50px + 49 * ((100vw - 320px) / 1600));\n  padding-right: calc(20px + 20 * ((100vw - 320px) / 1600));\n  padding-left: calc(20px + 20 * ((100vw - 320px) / 1600));\n  background: rgba(0, 128, 0, 0.05);\n  border-radius: 20px;\n  position: relative;\n  overflow: hidden;\n}\n.main .main__container .your_block_wrapper .your_image img {\n  max-width: 100%;\n  border-radius: 20px;\n  position: relative;\n  z-index: 2;\n}\n.main .main__container .your_block_wrapper .your_image::before, .main .main__container .your_block_wrapper .your_image::after {\n  content: \"\";\n  border: 1px solid #008000;\n  width: calc(385px + 200 * ((100vw - 320px) / 1600));\n  height: calc(385px + 200 * ((100vw - 320px) / 1600));\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-100%, -28%);\n  z-index: 1;\n}\n.main .main__container .your_block_wrapper .your_image::before {\n  top: 50%;\n  left: 50%;\n  transform: translate(-100%, -15%);\n}\n@media (max-width: 1250px) {\n  .main .main__container .your_block_wrapper .your_image {\n    align-self: center;\n  }\n}\n.main .main__container .your_block_wrapper .your_content {\n  flex: 0 1 45%;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: calc(50px + 20 * ((100vw - 320px) / 1600));\n  line-height: 1.11;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_title span {\n  color: #008000;\n}\n@media (min-width: 859.99px) {\n  .main .main__container .your_block_wrapper .your_content .your_content_title {\n    max-width: 450px;\n  }\n}\n.main .main__container .your_block_wrapper .your_content .your_content_title:not(:last-child) {\n  padding-bottom: calc(15px + 17 * ((100vw - 320px) / 1600));\n}\n@media (min-width: 859.99px) {\n  .main .main__container .your_block_wrapper .your_content .your_content_text {\n    max-width: 430px;\n  }\n}\n.main .main__container .your_block_wrapper .your_content .your_content_text:not(:last-child) {\n  padding-bottom: calc(30px + 18 * ((100vw - 320px) / 1600));\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item {\n  background: rgba(0, 128, 0, 0.05);\n  border-radius: 10px;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_link {\n  padding: 24px 30px;\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: calc(17px + 7 * ((100vw - 320px) / 1600));\n  line-height: 1.77;\n  cursor: pointer;\n  position: relative;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_link[data-order-lin=close]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  width: 24px;\n  height: 24px;\n  background-image: url(\"img/down.svg\");\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_link[data-order-lin=open]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  width: 24px;\n  height: 24px;\n  background-image: url(\"img/close.svg\");\n  background-repeat: no-repeat;\n  transform: translateY(-50%) scaleY(-1);\n  transition: all 0.5s ease;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_text {\n  transition: transform 0.9s ease 0s;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_text[data-order-state=close] {\n  max-height: 0;\n  overflow: hidden;\n  transition: all 0.5s ease;\n}\n.main .main__container .your_block_wrapper .your_content .your_content_blocks .your_content_block_item .your_content_block_text[data-order-state=open] {\n  max-height: auto;\n  padding: 24px 30px;\n  transition: all 0.8s ease;\n}\n@media (max-width: 859.99px) {\n  .main .main__container .your_block_wrapper {\n    flex-direction: column-reverse;\n  }\n}\n.main .main__container .why_block_wrapper {\n  padding-top: calc(50px + 138 * ((100vw - 320px) / 1600));\n  display: flex;\n  gap: calc(107px + 70 * ((100vw - 320px) / 1600));\n}\n.main .main__container .why_block_wrapper .why_content {\n  flex: 0 1 45%;\n}\n.main .main__container .why_block_wrapper .why_content .why_content_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: calc(44px + 20 * ((100vw - 320px) / 1600));\n  line-height: 1.12;\n}\n.main .main__container .why_block_wrapper .why_content .why_content_title span {\n  color: #008000;\n}\n@media (min-width: 859.99px) {\n  .main .main__container .why_block_wrapper .why_content .why_content_title {\n    max-width: 450px;\n  }\n}\n.main .main__container .why_block_wrapper .why_content .why_content_title:not(:last-child) {\n  padding-bottom: calc(15px + 17 * ((100vw - 320px) / 1600));\n}\n@media (min-width: 859.99px) {\n  .main .main__container .why_block_wrapper .why_content .why_content_text {\n    max-width: 450px;\n  }\n}\n.main .main__container .why_block_wrapper .why_content .why_content_text:not(:last-child) {\n  padding-bottom: calc(30px + 18 * ((100vw - 320px) / 1600));\n}\n.main .main__container .why_block_wrapper .why_content .why_content_blocks {\n  display: flex;\n  flex-direction: column;\n  gap: calc(20px + 28 * ((100vw - 320px) / 1600));\n  max-width: 490px;\n  overflow: hidden;\n}\n.main .main__container .why_block_wrapper .why_content .why_content_blocks .why_content_block {\n  display: flex;\n  gap: calc(20px + 30 * ((100vw - 320px) / 1600));\n  align-items: center;\n  transform: translate(100%, 0);\n  opacity: 0;\n  transition: all 0.5s ease 0s;\n}\n.main .main__container .why_block_wrapper .why_content .why_content_blocks .why_content_block .why_content_block_circle {\n  display: flex;\n  width: calc(32px + 32 * ((100vw - 320px) / 1600));\n  height: calc(32px + 32 * ((100vw - 320px) / 1600));\n  border-radius: 50%;\n  background: rgba(0, 128, 0, 0.1);\n  align-items: center;\n  justify-content: center;\n}\n.main .main__container .why_block_wrapper .why_content .why_content_blocks .why_content_block .why_content_block_content_text {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: calc(15px + 3 * ((100vw - 320px) / 1600));\n  line-height: 1.8;\n  max-width: 270px;\n}\n.main .main__container .why_block_wrapper .why_content ._active .why_content_block {\n  opacity: 1;\n  transform: translate(0px, 0px);\n}\n.main .main__container .why_block_wrapper .why_content ._active .why_content_block:nth-child(1) {\n  transition: all 0.8s ease 0s;\n}\n.main .main__container .why_block_wrapper .why_content ._active .why_content_block:nth-child(2) {\n  transition: all 0.8s ease 0.2s;\n}\n.main .main__container .why_block_wrapper .why_content ._active .why_content_block:nth-child(3) {\n  transition: all 0.8s ease 0.4s;\n}\n.main .main__container .why_block_wrapper .why_content ._active .why_content_block:nth-child(4) {\n  transition: all 0.8s ease 0.6s;\n}\n.main .main__container .why_block_wrapper .why_content .why_content_blocks:not(:last-child) {\n  padding-bottom: calc(24px + 24 * ((100vw - 320px) / 1600));\n}\n.main .main__container .why_block_wrapper .why_content .why_content_button {\n  padding: 22px 55px;\n}\n.main .main__container .why_block_wrapper .why_image {\n  flex: 0 1 55%;\n  border-radius: 20px;\n}\n.main .main__container .why_block_wrapper .why_image img {\n  max-width: 100%;\n  border-radius: 20px;\n}\n@media (max-width: 1249.99px) {\n  .main .main__container .why_block_wrapper .why_image {\n    align-self: center;\n  }\n}\n@media (max-width: 859.99px) {\n  .main .main__container .why_block_wrapper {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.main .main__container .what_block_wrapper {\n  padding-top: calc(50px + 138 * ((100vw - 320px) / 1600));\n  gap: calc(107px + 70 * ((100vw - 320px) / 1600));\n}\n.main .main__container .what_block_wrapper .what_content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: calc(44px + 20 * ((100vw - 320px) / 1600));\n  line-height: 1.12;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_title span {\n  color: #008000;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_title:not(:last-child) {\n  padding-bottom: calc(15px + 17 * ((100vw - 320px) / 1600));\n}\n@media (min-width: 859.99px) {\n  .main .main__container .what_block_wrapper .what_content .what_content_text {\n    max-width: 450px;\n  }\n}\n.main .main__container .what_block_wrapper .what_content .what_content_text:not(:last-child) {\n  padding-bottom: calc(30px + 18 * ((100vw - 320px) / 1600));\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: calc(20px + 28 * ((100vw - 320px) / 1600));\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks .what_content_block {\n  display: flex;\n  background: rgba(0, 128, 0, 0.05);\n  border-radius: 20px;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks .what_content_block .what_content_block_img {\n  flex: 0 1 40%;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks .what_content_block .what_content_block_img img {\n  max-width: 100%;\n  border-radius: 20px;\n  height: 100%;\n  object-fit: cover;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks .what_content_block .what_content_block_content {\n  flex: 0 1 60%;\n  padding: calc(16px + 16 * ((100vw - 320px) / 1600));\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks .what_content_block .what_content_block_content .what_content_block_name {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.7;\n}\n@media (max-width: 859.99px) {\n  .main .main__container .what_block_wrapper .what_content .what_content_blocks {\n    grid-template-columns: 1fr;\n  }\n}\n.main .main__container .what_block_wrapper .what_content .what_content_blocks:not(:last-child) {\n  padding-bottom: calc(24px + 24 * ((100vw - 320px) / 1600));\n}\n.main .main__container .what_block_wrapper .what_content .what_content_button {\n  padding: 22px 70px;\n  cursor: pointer;\n}\n.main .main__container .download_block_wrapper {\n  background: rgba(0, 128, 0, 0.05);\n  border-radius: 20px;\n  margin-top: calc(90px + 110 * ((100vw - 320px) / 1600));\n  margin-bottom: calc(90px + 110 * ((100vw - 320px) / 1600));\n  position: relative;\n  overflow: hidden;\n}\n.main .main__container .download_block_wrapper .download_content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 64px 0;\n}\n.main .main__container .download_block_wrapper .download_content .download_content_title {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: calc(36px + 20 * ((100vw - 320px) / 1600));\n  line-height: 1.12;\n  text-align: center;\n  max-width: 700px;\n}\n.main .main__container .download_block_wrapper .download_content .download_content_title span {\n  color: #008000;\n}\n.main .main__container .download_block_wrapper .download_content .download_content_title:not(:last-child) {\n  padding-bottom: 48px;\n}\n.main .main__container .download_block_wrapper .download_content .download_content_stores {\n  display: flex;\n  gap: 24px;\n}\n.main .main__container .download_block_wrapper .download_content .download_content_stores .download_content_stores_store {\n  align-self: center;\n}\n.main .main__container .download_block_wrapper .download_content .download_content_stores .download_content_stores_store .download_content_link img {\n  max-width: 100%;\n}\n.main .main__container .download_block_wrapper::before, .main .main__container .download_block_wrapper::after {\n  content: \"\";\n  border: 1px solid rgba(0, 128, 0, 0.34);\n  width: calc(385px + 200 * ((100vw - 320px) / 1600));\n  height: calc(385px + 200 * ((100vw - 320px) / 1600));\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -55%);\n  z-index: -1;\n}\n.main .main__container .download_block_wrapper::before {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -40%);\n}\n\n.footer .footer_container-big .footer_header {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  padding-top: calc(20px + 48 * ((100vw - 320px) / 1600));\n  padding-bottom: calc(40px + 60 * ((100vw - 320px) / 1600));\n}\n.footer .footer_container-big .footer_header .footer_header_logo svg {\n  margin-bottom: 24px;\n}\n.footer .footer_container-big .footer_header .footer_header_logo .footer_header_logo_text {\n  max-width: 292px;\n}\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_wrapper_text {\n  max-width: 338px;\n}\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_wrapper_text:not(:last-child) {\n  padding-bottom: 24px;\n}\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block {\n  background: rgba(55, 56, 38, 0.1);\n  border-radius: 10px;\n  padding: 6px;\n}\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form {\n  display: flex;\n  max-width: 533px;\n}\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form .footer_header_form_input {\n  padding: 22px 25px;\n  background: transparent;\n  width: 100%;\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.1;\n  flex: 1 1 auto;\n}\n.footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form .footer_header_form_button {\n  color: #FFFFFF;\n  font-weight: 500;\n  padding: 22px 25px;\n}\n@media (max-width: 520px) {\n  .footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form .footer_header_form_button {\n    width: 100%;\n  }\n}\n@media (max-width: 1088px) {\n  .footer .footer_container-big .footer_header .footer_header_form_wrapper .footer_header_form_block .footer_header_form {\n    flex-direction: column;\n  }\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone {\n  display: flex;\n  gap: calc(7px + 41 * ((100vw - 320px) / 1600));\n  justify-content: flex-end;\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone .footer_header_social .footer_header_social_title:not(:last-child) {\n  padding-bottom: 24px;\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone .footer_header_social .footer_header_social_icons {\n  display: flex;\n  gap: calc(10px + 6 * ((100vw - 320px) / 1600));\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone .footer_header_social .footer_header_social_icons .svgfooter {\n  width: 48px;\n  height: 48px;\n  background: #008000;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone .footer_header_phone .footer_header_phone_title:not(:last-child) {\n  padding-bottom: 24px;\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone .footer_header_phone a:hover {\n  text-decoration: underline;\n}\n.footer .footer_container-big .footer_header .footer_header_social_phone .footer_header_phone .footer_header_phone_number {\n  font-family: \"Lato\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 19px;\n}\n@media (max-width: 1059.99px) {\n  .footer .footer_container-big .footer_header .footer_header_social_phone {\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: space-between;\n  }\n}\n@media (max-width: 840px) {\n  .footer .footer_container-big .footer_header .footer_header_social_phone {\n    flex-direction: row;\n    align-items: flex-start;\n    padding-top: 20px;\n  }\n}\n@media (max-width: 840px) {\n  .footer .footer_container-big .footer_header {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-row-gap: 0px;\n  }\n}\n@media (max-width: 700px) {\n  .footer .footer_container-big .footer_header {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr auto;\n    justify-items: center;\n  }\n}\n.footer .footer_container-big .footer_bottom {\n  border-top: 1px solid rgba(38, 50, 56, 0.31);\n  display: flex;\n  justify-content: space-between;\n}\n.footer .footer_container-big .footer_bottom .footer_bottom_date {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 13px;\n  display: flex;\n  align-items: center;\n}\n.footer .footer_container-big .footer_bottom .footer_bottom_menu {\n  height: 128px;\n  display: flex;\n  align-items: center;\n}\n.footer .footer_container-big .footer_bottom .footer_bottom_menu .footer_bottom_list {\n  display: flex;\n  gap: calc(20px + 20 * ((100vw - 320px) / 1600));\n}\n.footer .footer_container-big .footer_bottom .footer_bottom_menu .footer_bottom_list .footer_bottom_item .footer_bottom_link {\n  font-family: \"League Spartan\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16px;\n  white-space: nowrap;\n}\n.footer .footer_container-big .footer_bottom .footer_bottom_menu .footer_bottom_list .footer_bottom_item .footer_bottom_link:hover {\n  text-decoration: underline;\n}\n@media (max-width: 620px) {\n  .footer .footer_container-big .footer_bottom .footer_bottom_menu .footer_bottom_list {\n    flex-wrap: wrap;\n  }\n}","//Адаптивное свойство\r\n$maxWidth: 1920;\r\n$maxWidthContainer: 1420;\r\n\r\n@mixin adaptiv-value($property, $startSize, $minSize, $type) {\r\n\t$addSize: $startSize - $minSize;\r\n\r\n\t@if $type==1 {\r\n\t\t//Только если меньше контейнера\r\n\t\t#{$property}: $startSize + px;\r\n\r\n\t\t@media (max-width: #{$maxWidthContainer + px}) {\r\n\t\t\t#{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidthContainer - 320}));\r\n\t\t}\r\n\t}\r\n\r\n\t@else if $type==2 {\r\n\t\t//Только если больше контейнера\r\n\t\t#{$property}: $startSize + px;\r\n\r\n\t\t@media (min-width: #{$maxWidthContainer + px}) {\r\n\t\t\t#{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320}));\r\n\t\t}\r\n\t}\r\n\r\n\t@else {\r\n\t\t//Всегда\r\n\t\t#{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{$maxWidth - 320}));\r\n\t}\r\n}\r\n\r\n\r\na,\r\na:visited {\r\n\ttext-decoration: none;\r\n\tcolor: #263238;\r\n}\r\n\r\nul li {\r\n\tlist-style: none;\r\n}\r\n\r\nbutton {\r\n\tcursor: pointer;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tborder: none;\r\n\tbox-sizing: border-box;\r\n\t-moz-box-sizing: border-box;\r\n\t-webkit-box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tline-height: 1;\r\n\tbackground: #FFFFFF;\r\n\tfont-size: 16px;\r\n\tcolor: #263238;\r\n}\r\n\r\nsvg {\r\n\t* {\r\n\t\tfill: currentColor;\r\n\t\tcolor: #263238;\r\n\t\tfill-opacity: 1;\r\n\t}\r\n}\r\n\r\n\r\n/*--------------------------------------*/\r\n#root {\r\n\theight: 100%;\r\n\tline-height: 1;\r\n}\r\n\r\n.wrapper {\r\n\toverflow: clip;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmin-height: 100%;\r\n}\r\n\r\n/*--------------------------------------*/\r\n.main {\r\n\tflex: 1 1 auto;\r\n}\r\n\r\n[class*=\"_container-big\"] {\r\n\tmax-width: 1650px;\r\n\tmargin: 0px auto;\r\n\tpadding: 0px 15px;\r\n}\r\n\r\n[class*=\"__container\"] {\r\n\tmax-width: 1420px;\r\n\tmargin: 0px auto;\r\n\tpadding: 0px 15px;\r\n}","//$adaptValue: calc(20px + (50 - 20)*((100vw - 320px)/(1420 - 320)));\r\n\r\n$font-lato: 'Lato', sans-serif;\r\n$font-spartan: 'League Spartan', sans-serif;\r\n\r\n%button {\r\n\tbackground-color: #008000;\r\n\tcolor: #FFFFFF;\r\n\tfont-family: $font-lato;\r\n\tfont-style: normal;\r\n\tfont-weight: 400;\r\n\tfont-size: 18px;\r\n\tline-height: 1.1;\r\n\tborder-radius: 10px;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n%button:hover {\r\n\tbackground-color: #6c836c;\r\n}\r\n\r\n%block-text {\r\n\tfont-family: $font-spartan;\r\n\tfont-style: normal;\r\n\tfont-weight: 400;\r\n\t@include adaptiv-value(\"font-size\", 18, 16, 0);\r\n\tline-height: 1.77;\r\n}\r\n\r\n.bounce-top {\r\n\t-webkit-animation: bounce-top 0.9s both;\r\n\tanimation: bounce-top 0.9s both;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n\r\n@-webkit-keyframes bounce-top {\r\n\t0% {\r\n\t\t-webkit-transform: translateY(-45px);\r\n\t\ttransform: translateY(-45px);\r\n\t\t-webkit-animation-timing-function: ease-in;\r\n\t\tanimation-timing-function: ease-in;\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t24% {\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t40% {\r\n\t\t-webkit-transform: translateY(-24px);\r\n\t\ttransform: translateY(-24px);\r\n\t\t-webkit-animation-timing-function: ease-in;\r\n\t\tanimation-timing-function: ease-in;\r\n\t}\r\n\r\n\t65% {\r\n\t\t-webkit-transform: translateY(-12px);\r\n\t\ttransform: translateY(-12px);\r\n\t\t-webkit-animation-timing-function: ease-in;\r\n\t\tanimation-timing-function: ease-in;\r\n\t}\r\n\r\n\t82% {\r\n\t\t-webkit-transform: translateY(-6px);\r\n\t\ttransform: translateY(-6px);\r\n\t\t-webkit-animation-timing-function: ease-in;\r\n\t\tanimation-timing-function: ease-in;\r\n\t}\r\n\r\n\t93% {\r\n\t\t-webkit-transform: translateY(-4px);\r\n\t\ttransform: translateY(-4px);\r\n\t\t-webkit-animation-timing-function: ease-in;\r\n\t\tanimation-timing-function: ease-in;\r\n\t}\r\n\r\n\t25%,\r\n\t55%,\r\n\t75%,\r\n\t87% {\r\n\t\t-webkit-transform: translateY(0px);\r\n\t\ttransform: translateY(0px);\r\n\t\t-webkit-animation-timing-function: ease-out;\r\n\t\tanimation-timing-function: ease-out;\r\n\t}\r\n\r\n\t100% {\r\n\t\t-webkit-transform: translateY(0px);\r\n\t\ttransform: translateY(0px);\r\n\t\t-webkit-animation-timing-function: ease-out;\r\n\t\tanimation-timing-function: ease-out;\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n@keyframes bounce-top {\r\n\t0% {\r\n\t\t-webkit-transform: translateY(-45px);\r\n\t\ttransform: translateY(-45px);\r\n\t\t-webkit-animation-timing-function: ease-in;\r\n\t\tanimation-timing-function: ease-in;\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t24% {\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t40% {\r\n\t\t-webkit-transform: translateY(-24px);\r\n\t\ttransform: translateY(-24px);\r\n\t\t-webkit-animation-timing-function: ease-in;\r\n\t\tanimation-timing-function: ease-in;\r\n\t}\r\n\r\n\t65% {\r\n\t\t-webkit-transform: translateY(-12px);\r\n\t\ttransform: translateY(-12px);\r\n\t\t-webkit-animation-timing-function: ease-in;\r\n\t\tanimation-timing-function: ease-in;\r\n\t}\r\n\r\n\t82% {\r\n\t\t-webkit-transform: translateY(-6px);\r\n\t\ttransform: translateY(-6px);\r\n\t\t-webkit-animation-timing-function: ease-in;\r\n\t\tanimation-timing-function: ease-in;\r\n\t}\r\n\r\n\t93% {\r\n\t\t-webkit-transform: translateY(-4px);\r\n\t\ttransform: translateY(-4px);\r\n\t\t-webkit-animation-timing-function: ease-in;\r\n\t\tanimation-timing-function: ease-in;\r\n\t}\r\n\r\n\t25%,\r\n\t55%,\r\n\t75%,\r\n\t87% {\r\n\t\t-webkit-transform: translateY(0px);\r\n\t\ttransform: translateY(0px);\r\n\t\t-webkit-animation-timing-function: ease-out;\r\n\t\tanimation-timing-function: ease-out;\r\n\t}\r\n\r\n\t100% {\r\n\t\t-webkit-transform: translateY(0px);\r\n\t\ttransform: translateY(0px);\r\n\t\t-webkit-animation-timing-function: ease-out;\r\n\t\tanimation-timing-function: ease-out;\r\n\t\topacity: 1;\r\n\t}\r\n}",".header {\r\n\tposition: relative;\r\n\t@include adaptiv-value(\"padding-top\", 60, 30, 0);\r\n\r\n\t.header_container-big {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\r\n\t\t.header_logo {\r\n\t\t\tposition: relative;\r\n\t\t\tz-index: 7;\r\n\t\t\tmargin-right: 5px;\r\n\t\t\tfont-family: $font-lato;\r\n\t\t\tfont-style: normal;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tfont-size: 36px;\r\n\t\t\tline-height: 43px;\r\n\t\t}\r\n\r\n\t\t.header_menu {\r\n\t\t\tflex: 1 1 auto;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: center;\r\n\r\n\t\t\t.header_menu_list {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tgap: 44px;\r\n\t\t\t\tflex-wrap: wrap;\r\n\t\t\t\trow-gap: 5px;\r\n\r\n\t\t\t\t.header_menu_item {\r\n\r\n\t\t\t\t\t.menu_link {\r\n\t\t\t\t\t\twhite-space: nowrap;\r\n\t\t\t\t\t\tfont-family: $font-lato;\r\n\t\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\tfont-size: 18px;\r\n\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.menu_link:hover {\r\n\t\t\t\t\t\ttext-decoration: underline;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t@media (max-width: 940px) {\r\n\t\t\t\t.body_burger {\r\n\t\t\t\t\tposition: fixed;\r\n\t\t\t\t\tz-index: 6;\r\n\t\t\t\t\tleft: 0;\r\n\t\t\t\t\ttop: 0;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\theight: 100%;\r\n\t\t\t\t\tbackground-color: #756868;\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t\toverflow: auto;\r\n\r\n\t\t\t\t\t.header_menu_list {\r\n\t\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\t\talign-items: center;\r\n\t\t\t\t\t\tpadding-top: 150px;\r\n\t\t\t\t\t\trow-gap: 44px;\r\n\r\n\t\t\t\t\t\t.header_menu_item {\r\n\t\t\t\t\t\t\t.menu_link {\r\n\t\t\t\t\t\t\t\tfont-size: 44px;\r\n\t\t\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.header_buttons {\r\n\t\t\t\t\t\tdisplay: grid;\r\n\t\t\t\t\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t\t\t\t\t\tpadding-top: 100px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n\r\n\r\n\r\n\t\t\t.open {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\r\n\r\n\r\n\r\n\t\t.header_buttons {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 16px;\r\n\r\n\t\t\t.light {\r\n\t\t\t\tmargin-left: 10px;\r\n\t\t\t\tcolor: #263238;\r\n\t\t\t}\r\n\r\n\t\t\t#sign {\r\n\t\t\t\t@extend %button;\r\n\t\t\t\tpadding: 21px 44px;\r\n\t\t\t\tborder: 1px solid #263238;\r\n\t\t\t\tbackground-color: #fff;\r\n\t\t\t\tcolor: #263238;\r\n\t\t\t}\r\n\r\n\t\t\t#sign:hover {\r\n\t\t\t\tbackground-color: #e7dbdb;\r\n\t\t\t}\r\n\r\n\t\t\t#get {\r\n\t\t\t\t@extend %button;\r\n\t\t\t\tpadding: 21px 25px;\r\n\t\t\t}\r\n\r\n\t\t\t#get:hover {\r\n\t\t\t\tbackground-color: #036103;\r\n\t\t\t}\r\n\r\n\t\t\t@media (max-width: 554px) {\r\n\t\t\t\t#sign {\r\n\t\t\t\t\tpadding: 17px 35px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#get {\r\n\t\t\t\t\tpadding: 17px 20px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t@media (max-width: 319.99px) {\r\n\t\t\t\t#sign {\r\n\t\t\t\t\tpadding: 10px 20px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t#get {\r\n\t\t\t\t\tpadding: 10px 10px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\ti {\r\n\t\t\t\talign-self: center;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t@media (max-width:940px) {\r\n\t\t\t.header_buttons {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\r\n\t\t.header_burger {\r\n\t\t\tdisplay: none;\r\n\t\t\tflex: 0 0 40px;\r\n\t\t\theight: 18px;\r\n\t\t\tposition: relative;\r\n\t\t\tz-index: 7;\r\n\t\t\tcursor: pointer;\r\n\t\t\tmargin-left: 20px;\r\n\r\n\t\t\tspan,\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\tcontent: '';\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tright: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 4px;\r\n\t\t\t\tbackground-color: #c99393;\r\n\t\t\t}\r\n\r\n\t\t\t&::before {\r\n\t\t\t\ttop: 0;\r\n\t\t\t}\r\n\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: 0;\r\n\t\t\t}\r\n\r\n\t\t\tspan {\r\n\t\t\t\ttop: calc(50% - 2px);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t@media (max-width: 940px) {\r\n\t\t\t.header_burger {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t}\r\n\r\n\t\t\t// #get {\r\n\t\t\t// \tdisplay: none;\r\n\t\t\t// }\r\n\t\t}\r\n\t}\r\n\r\n\t// .header_container-big::before {\r\n\t// \tcontent: '';\r\n\t// \tposition: absolute;\r\n\t// \tz-index: 7;\r\n\t// \tleft: 0;\r\n\t// \ttop: 0;\r\n\t// \theight: 100%;\r\n\t// \twidth: 100%;\r\n\t// \tbackground-color: #fff;\r\n\t// }\r\n\r\n\r\n\t&::before,\r\n\t&::after {\r\n\t\tcontent: '';\r\n\t\tborder: 1px solid #008000;\r\n\t\t@include adaptiv-value(\"width\", 585, 385, 0);\r\n\t\t@include adaptiv-value(\"height\", 585, 385, 0);\r\n\t\tborder-radius: 50%;\r\n\t\tposition: absolute;\r\n\t\ttop: -206px;\r\n\t\tleft: -171px;\r\n\t}\r\n\r\n\t&::before {\r\n\t\ttop: -261px;\r\n\t\tleft: -116px;\r\n\t}\r\n\r\n\r\n}","/*Home block------------------------------------------*/\r\n\r\n.main {\r\n\r\n\t.main__container {\r\n\t\t.home_block_wrapper {\r\n\t\t\tposition: relative;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t\t@include adaptiv-value(\"padding-top\", 127, 47, 1);\r\n\t\t\t@include adaptiv-value(\"padding-bottom\", 200, 70, 1);\r\n\r\n\t\t\t.home_block_title {\r\n\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\tfont-style: normal;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t\tline-height: 1.1;\r\n\t\t\t\tpadding-bottom: 69px;\r\n\t\t\t\tfont-size: 70px;\r\n\r\n\t\t\t\tspan {\r\n\t\t\t\t\tcolor: #008000;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t@media (max-width: 1420px) {\r\n\t\t\t\t.home_block_title {\r\n\t\t\t\t\t@include adaptiv-value(\"font-size\", 70, 45, 1);\r\n\t\t\t\t\t@include adaptiv-value(\"line-height\", 70, 45, 1);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t@media (min-width: 798.98px) {\r\n\t\t\t\t.home_block_title {\r\n\t\t\t\t\tmax-width: 823px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.home_block_text {\r\n\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\tfont-style: normal;\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tfont-size: 18px;\r\n\t\t\t\ttext-align: center;\r\n\t\t\t\tline-height: 1.8;\r\n\t\t\t\tpadding-bottom: 48px;\r\n\t\t\t}\r\n\r\n\t\t\t@media (min-width: 798.98px) {\r\n\t\t\t\t.home_block_text {\r\n\t\t\t\t\tmax-width: 580px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.home_form_wrapper {\r\n\t\t\t\tmax-width: 533px;\r\n\t\t\t\twidth: 100%;\r\n\r\n\t\t\t\t.home_form {\r\n\t\t\t\t\tbackground: rgba(38, 50, 56, 0.1);\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\tpadding: 6px;\r\n\t\t\t\t\tborder-radius: 10px;\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tgap: 5px;\r\n\r\n\t\t\t\t\t.home_input {\r\n\t\t\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\t\tfont-weight: 500;\r\n\t\t\t\t\t\tfont-size: 18px;\r\n\t\t\t\t\t\tbackground: transparent;\r\n\t\t\t\t\t\tpadding: 0 25px;\r\n\t\t\t\t\t\tflex: 1 1 auto;\r\n\t\t\t\t\t\theight: 64px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.home_button {\r\n\t\t\t\t\t\t@extend %button;\r\n\t\t\t\t\t\tpadding: 22px 25px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (max-width:430px) {\r\n\t\t\t\t\t.home_form {\r\n\t\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\t\twidth: 100%;\r\n\r\n\t\t\t\t\t\t.home_input {\r\n\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.home_button {\r\n\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.home_ikon {\r\n\t\t\tposition: absolute;\r\n\r\n\t\t\t.svgHome {\r\n\t\t\t\t* {\r\n\t\t\t\t\tfill: currentColor;\r\n\t\t\t\t\tfill-opacity: 1;\r\n\t\t\t\t\tcolor: rgba(42, 38, 56, 0.4);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.i1 {\r\n\t\t\ttop: calc(568px / 848px) * 100%;\r\n\t\t\tleft: calc(15px / 1620px) * 100%;\r\n\t\t}\r\n\r\n\t\t@media (max-width:612px) {\r\n\t\t\t.i1 {\r\n\t\t\t\ttop: calc(468px / 848px) * 100%;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.i2 {\r\n\t\t\ttop: calc(265px / 848px) * 100%;\r\n\t\t\tleft: calc(237px / 1620px) * 100%;\r\n\t\t}\r\n\r\n\t\t.i3 {\r\n\t\t\ttop: calc(643px / 848px) * 100%;\r\n\t\t\tleft: calc(403px / 1620px) * 100%;\r\n\r\n\t\t\t.svgHome3 {\r\n\t\t\t\t* {\r\n\t\t\t\t\tfill: currentColor;\r\n\t\t\t\t\tborder: 1px solid #263238;\r\n\t\t\t\t\tfill-opacity: 1;\r\n\t\t\t\t\tcolor: rgba(247, 255, 253, 0.979);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t@media (max-width:612px) {\r\n\t\t\t.i3 {\r\n\t\t\t\ttop: calc(800px / 848px) * 100%;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.i4 {\r\n\t\t\ttop: calc(20px / 848px) * 100%;\r\n\t\t\tright: calc(423px / 1620px) * 100%;\r\n\t\t}\r\n\r\n\t\t.i5 {\r\n\t\t\ttop: calc(305px / 848px) * 100%;\r\n\t\t\tright: calc(279px / 1620px) * 100%;\r\n\t\t}\r\n\r\n\t\t.i6 {\r\n\t\t\ttop: calc(253px / 848px) * 100%;\r\n\t\t\tright: calc(0px / 1620px) * 100%;\r\n\r\n\t\t\t.svgHome6 {\r\n\t\t\t\t* {\r\n\t\t\t\t\tfill: currentColor;\r\n\t\t\t\t\tborder: 1px solid #263238;\r\n\t\t\t\t\tfill-opacity: 1;\r\n\t\t\t\t\tcolor: rgba(247, 255, 253, 0.979);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.i7 {\r\n\t\t\ttop: calc(652px / 848px) * 100%;\r\n\t\t\tright: calc(259px / 1620px) * 100%;\r\n\r\n\t\t\t.svgHome7 {\r\n\t\t\t\t* {\r\n\t\t\t\t\tfill: currentColor;\r\n\t\t\t\t\tborder: 1px solid #263238;\r\n\t\t\t\t\tfill-opacity: 1;\r\n\t\t\t\t\tcolor: rgba(247, 255, 253, 0.979);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t@media (max-width:750px) {\r\n\t\t\t.i7 {\r\n\t\t\t\ttop: calc(500px / 848px) * 100%;\r\n\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t@media (max-width:640px) {\r\n\t\t\t.home_ikon {\r\n\t\t\t\topacity: 0.3;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\t/*Slide block------------------------------------------*/\r\n\t\t.slide_block_wrapper {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\talign-items: center;\r\n\t\t\tpadding: 8px 0;\r\n\t\t\tgap: 20px;\r\n\t\t\tflex-wrap: wrap;\r\n\r\n\t\t\t.slide_block {\r\n\r\n\t\t\t\t.svg4:not(image) {\r\n\t\t\t\t\tsvg {\r\n\t\t\t\t\t\tfill: currentColor;\r\n\r\n\t\t\t\t\t\tg {\r\n\t\t\t\t\t\t\tpath {\r\n\t\t\t\t\t\t\t\tfill: #000000e3;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\r\n\t\t}\r\n\r\n\t\t@media (max-width: 1100px) {\r\n\t\t\t.slide_block_wrapper {\r\n\t\t\t\tjustify-content: center\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t/*How block------------------------------------------*/\r\n\t\t.how_block_wrapper {\r\n\t\t\t@include adaptiv-value(\"padding-top\", 188, 50, 0);\r\n\t\t\tdisplay: flex;\r\n\t\t\t@include adaptiv-value(\"gap\", 96, 40, 0);\r\n\r\n\t\t\t.how_content {\r\n\t\t\t\tflex: 0 1 45%;\r\n\r\n\t\t\t\t.how_content_title {\r\n\t\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t@include adaptiv-value(\"font-size\", 64, 44, 0);\r\n\t\t\t\t\tline-height: 1.12;\r\n\r\n\t\t\t\t\tspan {\r\n\t\t\t\t\t\tcolor: #008000;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width:859.99px) {\r\n\t\t\t\t\t.how_content_title {\r\n\t\t\t\t\t\tmax-width: 450px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.how_content_title:not(:last-child) {\r\n\r\n\t\t\t\t\t@include adaptiv-value(\"padding-bottom\", 32, 15, 0);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.how_content_text {\r\n\t\t\t\t\t@extend %block-text;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width:859.99px) {\r\n\t\t\t\t\t.how_content_text {\r\n\t\t\t\t\t\tmax-width: 450px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.how_content_text:not(:last-child) {\r\n\t\t\t\t\t@include adaptiv-value(\"padding-bottom\", 48, 30, 0);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.how_content_blocks {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\t@include adaptiv-value(\"gap\", 48, 20, 0);\r\n\t\t\t\t\tmax-width: 490px;\r\n\r\n\t\t\t\t\t.how_content_block {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t@include adaptiv-value(\"gap\", 32, 20, 0);\r\n\r\n\t\t\t\t\t\t.how_content_block_circle {\r\n\t\t\t\t\t\t\t@include adaptiv-value(\"padding\", 27, 15, 0);\r\n\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\tbackground: rgba(0, 128, 0, 0.1);\r\n\t\t\t\t\t\t\talign-self: center;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.how_content_block_content {\r\n\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\t\t\tgap: 16px;\r\n\r\n\t\t\t\t\t\t\t.how_content_block_content_title {\r\n\t\t\t\t\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\t\t@include adaptiv-value(\"font-size\", 20, 18, 0);\r\n\t\t\t\t\t\t\t\tline-height: 1.1;\r\n\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t.how_content_block_content_text {\r\n\t\t\t\t\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\t\t\t\tfont-weight: 400;\r\n\t\t\t\t\t\t\t\t@include adaptiv-value(\"font-size\", 18, 15, 0);\r\n\t\t\t\t\t\t\t\tline-height: 1.8;\r\n\r\n\t\t\t\t\t\t\t\tmax-width: 270px;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t@media (max-width:859.99px) {\r\n\t\t\t\t.how_content {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.how_image {\r\n\t\t\t\tflex: 0 1 55%;\r\n\t\t\t\t@include adaptiv-value(\"padding-top\", 166, 30, 0);\r\n\t\t\t\t@include adaptiv-value(\"padding-bottom\", 166, 30, 0);\r\n\t\t\t\t@include adaptiv-value(\"padding-left\", 45, 30, 0);\r\n\t\t\t\t@include adaptiv-value(\"padding-right\", 45, 30, 0);\r\n\r\n\t\t\t\tbackground: rgba(0, 128, 0, 0.05);\r\n\t\t\t\tborder-radius: 20px;\r\n\t\t\t\tposition: relative;\r\n\t\t\t\toverflow: hidden;\r\n\t\t\t\talign-self: start;\r\n\r\n\t\t\t\timg {\r\n\t\t\t\t\tmax-width: 100%;\r\n\t\t\t\t\tborder-radius: 20px;\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\tz-index: 2;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t&::before,\r\n\t\t\t\t&::after {\r\n\t\t\t\t\tcontent: '';\r\n\t\t\t\t\tborder: 1px solid #008000;\r\n\t\t\t\t\t@include adaptiv-value(\"width\", 585, 385, 0);\r\n\t\t\t\t\t@include adaptiv-value(\"height\", 585, 385, 0);\r\n\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\ttop: 0;\r\n\t\t\t\t\tleft: 0;\r\n\t\t\t\t\ttransform: translate(70%, -5%);\r\n\t\t\t\t\tz-index: 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t&::before {\r\n\t\t\t\t\ttop: 0;\r\n\t\t\t\t\tleft: 0;\r\n\t\t\t\t\ttransform: translate(70%, -20%);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t@media (max-width:1249.99px) {\r\n\t\t\t\t.how_image {\r\n\t\t\t\t\talign-self: center;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t@media (max-width:859.99px) {\r\n\t\t\t\t.how_image {\r\n\t\t\t\t\talign-self: center;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t@media (max-width:859.99px) {\r\n\t\t\t.how_block_wrapper {\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t/*Your block------------------------------------------*/\r\n\t\t.your_block_wrapper {\r\n\t\t\t@include adaptiv-value(\"padding-top\", 188, 50, 0);\r\n\t\t\tdisplay: flex;\r\n\t\t\t@include adaptiv-value(\"gap\", 126, 60, 0);\r\n\r\n\t\t\t.your_image {\r\n\t\t\t\tflex: 0 1 55%;\r\n\t\t\t\t@include adaptiv-value(\"padding-top\", 99, 50, 0);\r\n\t\t\t\t@include adaptiv-value(\"padding-bottom\", 99, 50, 0);\r\n\t\t\t\t@include adaptiv-value(\"padding-right\", 40, 20, 0);\r\n\t\t\t\t@include adaptiv-value(\"padding-left\", 40, 20, 0);\r\n\t\t\t\tbackground: rgba(0, 128, 0, 0.05);\r\n\t\t\t\tborder-radius: 20px;\r\n\t\t\t\tposition: relative;\r\n\t\t\t\toverflow: hidden;\r\n\r\n\t\t\t\timg {\r\n\t\t\t\t\tmax-width: 100%;\r\n\t\t\t\t\tborder-radius: 20px;\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\tz-index: 2;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t&::before,\r\n\t\t\t\t&::after {\r\n\t\t\t\t\tcontent: '';\r\n\t\t\t\t\tborder: 1px solid #008000;\r\n\t\t\t\t\t@include adaptiv-value(\"width\", 585, 385, 0);\r\n\t\t\t\t\t@include adaptiv-value(\"height\", 585, 385, 0);\r\n\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\ttop: 50%;\r\n\t\t\t\t\tleft: 50%;\r\n\t\t\t\t\ttransform: translate(-100%, -28%);\r\n\t\t\t\t\tz-index: 1;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t&::before {\r\n\t\t\t\t\ttop: 50%;\r\n\t\t\t\t\tleft: 50%;\r\n\t\t\t\t\ttransform: translate(-100%, -15%);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\r\n\t\t\t@media (max-width:1250px) {\r\n\t\t\t\t.your_image {\r\n\t\t\t\t\talign-self: center;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.your_content {\r\n\t\t\t\tflex: 0 1 45%;\r\n\r\n\t\t\t\t.your_content_title {\r\n\t\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t@include adaptiv-value(\"font-size\", 70, 50, 0);\r\n\t\t\t\t\tline-height: 1.11;\r\n\r\n\r\n\t\t\t\t\tspan {\r\n\t\t\t\t\t\tcolor: #008000;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width:859.99px) {\r\n\t\t\t\t\t.your_content_title {\r\n\t\t\t\t\t\tmax-width: 450px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.your_content_title:not(:last-child) {\r\n\t\t\t\t\t@include adaptiv-value(\"padding-bottom\", 32, 15, 0);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.your_content_text {\r\n\t\t\t\t\t@extend %block-text;\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width:859.99px) {\r\n\t\t\t\t\t.your_content_text {\r\n\t\t\t\t\t\tmax-width: 430px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.your_content_text:not(:last-child) {\r\n\t\t\t\t\t@include adaptiv-value(\"padding-bottom\", 48, 30, 0);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.your_content_blocks {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\tgap: 24px;\r\n\r\n\t\t\t\t\t.your_content_block_item {\r\n\t\t\t\t\t\tbackground: rgba(0, 128, 0, 0.05);\r\n\t\t\t\t\t\tborder-radius: 10px;\r\n\r\n\r\n\t\t\t\t\t\t.your_content_block_link {\r\n\t\t\t\t\t\t\tpadding: 24px 30px;\r\n\t\t\t\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\t\t\tfont-weight: 400;\r\n\t\t\t\t\t\t\t@include adaptiv-value(\"font-size\", 24, 17, 0);\r\n\t\t\t\t\t\t\tline-height: 1.77;\r\n\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\tposition: relative;\r\n\t\t\t\t\t\t}\r\n\r\n\r\n\t\t\t\t\t\t.your_content_block_link[data-order-lin=\"close\"]::after {\r\n\t\t\t\t\t\t\tcontent: '';\r\n\t\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\t\ttop: 50%;\r\n\t\t\t\t\t\t\tright: 20px;\r\n\t\t\t\t\t\t\ttransform: translateY(-50%);\r\n\t\t\t\t\t\t\twidth: 24px;\r\n\t\t\t\t\t\t\theight: 24px;\r\n\t\t\t\t\t\t\tbackground-image: url('img/down.svg');\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.your_content_block_link[data-order-lin=\"open\"]::after {\r\n\t\t\t\t\t\t\tcontent: '';\r\n\t\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\t\ttop: 50%;\r\n\t\t\t\t\t\t\tright: 20px;\r\n\t\t\t\t\t\t\ttransform: translateY(-50%);\r\n\t\t\t\t\t\t\twidth: 24px;\r\n\t\t\t\t\t\t\theight: 24px;\r\n\t\t\t\t\t\t\tbackground-image: url('img/close.svg');\r\n\t\t\t\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t\t\t\t\ttransform: translateY(-50%) scaleY(-1);\r\n\t\t\t\t\t\t\ttransition: all 0.5s ease;\r\n\t\t\t\t\t\t}\r\n\r\n\r\n\t\t\t\t\t\t.your_content_block_text {\r\n\t\t\t\t\t\t\t@extend %block-text;\r\n\t\t\t\t\t\t\ttransition: transform 0.9s ease 0s;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.your_content_block_text[data-order-state=\"close\"] {\r\n\t\t\t\t\t\t\tmax-height: 0;\r\n\t\t\t\t\t\t\toverflow: hidden;\r\n\t\t\t\t\t\t\ttransition: all 0.5s ease;\r\n\t\t\t\t\t\t}\r\n\r\n\r\n\r\n\t\t\t\t\t\t.your_content_block_text[data-order-state=\"open\"] {\r\n\t\t\t\t\t\t\tmax-height: auto;\r\n\t\t\t\t\t\t\tpadding: 24px 30px;\r\n\t\t\t\t\t\t\ttransition: all 0.8s ease;\r\n\t\t\t\t\t\t}\r\n\r\n\r\n\r\n\t\t\t\t\t}\r\n\r\n\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\r\n\r\n\t\t}\r\n\r\n\t\t@media (max-width:859.99px) {\r\n\t\t\t.your_block_wrapper {\r\n\t\t\t\tflex-direction: column-reverse;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t/*WHY block------------------------------------------*/\r\n\t\t.why_block_wrapper {\r\n\t\t\t@include adaptiv-value(\"padding-top\", 188, 50, 0);\r\n\t\t\tdisplay: flex;\r\n\t\t\t@include adaptiv-value(\"gap\", 177, 107, 0);\r\n\r\n\t\t\t.why_content {\r\n\t\t\t\tflex: 0 1 45%;\r\n\r\n\t\t\t\t.why_content_title {\r\n\t\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t@include adaptiv-value(\"font-size\", 64, 44, 0);\r\n\t\t\t\t\tline-height: 1.12;\r\n\r\n\t\t\t\t\tspan {\r\n\t\t\t\t\t\tcolor: #008000;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width:859.99px) {\r\n\t\t\t\t\t.why_content_title {\r\n\t\t\t\t\t\tmax-width: 450px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.why_content_title:not(:last-child) {\r\n\r\n\t\t\t\t\t@include adaptiv-value(\"padding-bottom\", 32, 15, 0);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.why_content_text {\r\n\t\t\t\t\t@extend %block-text;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width:859.99px) {\r\n\t\t\t\t\t.why_content_text {\r\n\t\t\t\t\t\tmax-width: 450px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.why_content_text:not(:last-child) {\r\n\t\t\t\t\t@include adaptiv-value(\"padding-bottom\", 48, 30, 0);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.why_content_blocks {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\t@include adaptiv-value(\"gap\", 48, 20, 0);\r\n\t\t\t\t\tmax-width: 490px;\r\n\t\t\t\t\toverflow: hidden;\r\n\r\n\t\t\t\t\t.why_content_block {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t@include adaptiv-value(\"gap\", 50, 20, 0);\r\n\t\t\t\t\t\talign-items: center;\r\n\t\t\t\t\t\ttransform: translate(100%, 0);\r\n\t\t\t\t\t\topacity: 0;\r\n\t\t\t\t\t\ttransition: all 0.5s ease 0s;\r\n\r\n\t\t\t\t\t\t.why_content_block_circle {\r\n\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\t@include adaptiv-value(\"width\", 64, 32, 0);\r\n\t\t\t\t\t\t\t@include adaptiv-value(\"height\", 64, 32, 0);\r\n\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\tbackground: rgba(0, 128, 0, 0.1);\r\n\t\t\t\t\t\t\talign-items: center;\r\n\t\t\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.why_content_block_content_text {\r\n\t\t\t\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\t\t\tfont-weight: 400;\r\n\t\t\t\t\t\t\t@include adaptiv-value(\"font-size\", 18, 15, 0);\r\n\t\t\t\t\t\t\tline-height: 1.8;\r\n\t\t\t\t\t\t\tmax-width: 270px;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t// ._anim-show {\r\n\t\t\t\t\t// \ttransform: translate(100%, 0);\r\n\t\t\t\t\t// \topacity: 0;\r\n\t\t\t\t\t// \ttransition: all 0.5s ease 0s;\r\n\t\t\t\t\t// }\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t._active {\r\n\t\t\t\t\t.why_content_block {\r\n\t\t\t\t\t\topacity: 1;\r\n\t\t\t\t\t\ttransform: translate(0px, 0px);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.why_content_block:nth-child(1) {\r\n\t\t\t\t\t\ttransition: all 0.8s ease 0s;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.why_content_block:nth-child(2) {\r\n\t\t\t\t\t\ttransition: all 0.8s ease 0.2s;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.why_content_block:nth-child(3) {\r\n\t\t\t\t\t\ttransition: all 0.8s ease 0.4s;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.why_content_block:nth-child(4) {\r\n\t\t\t\t\t\ttransition: all 0.8s ease 0.6s;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t// ._active {\r\n\t\t\t\t// \t._anim-show {\r\n\t\t\t\t// \t\topacity: 1;\r\n\t\t\t\t// \t\ttransform: translate(0px, 0px);\r\n\t\t\t\t// \t}\r\n\t\t\t\t// }\r\n\r\n\r\n\r\n\t\t\t\t.why_content_blocks:not(:last-child) {\r\n\t\t\t\t\t@include adaptiv-value(\"padding-bottom\", 48, 24, 0);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.why_content_button {\r\n\t\t\t\t\t@extend %button;\r\n\t\t\t\t\tpadding: 22px 55px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\r\n\t\t\t.why_image {\r\n\t\t\t\tflex: 0 1 55%;\r\n\t\t\t\tborder-radius: 20px;\r\n\r\n\t\t\t\timg {\r\n\t\t\t\t\tmax-width: 100%;\r\n\t\t\t\t\tborder-radius: 20px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t@media (max-width:1249.99px) {\r\n\t\t\t\t.why_image {\r\n\t\t\t\t\talign-self: center;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\t@media (max-width:859.99px) {\r\n\t\t\t.why_block_wrapper {\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t/*What block------------------------------------------*/\r\n\t\t.what_block_wrapper {\r\n\t\t\t@include adaptiv-value(\"padding-top\", 188, 50, 0);\r\n\t\t\t@include adaptiv-value(\"gap\", 177, 107, 0);\r\n\r\n\t\t\t.what_content {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: center;\r\n\r\n\t\t\t\t.what_content_title {\r\n\t\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t@include adaptiv-value(\"font-size\", 64, 44, 0);\r\n\t\t\t\t\tline-height: 1.12;\r\n\r\n\t\t\t\t\tspan {\r\n\t\t\t\t\t\tcolor: #008000;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\r\n\t\t\t\t.what_content_title:not(:last-child) {\r\n\r\n\t\t\t\t\t@include adaptiv-value(\"padding-bottom\", 32, 15, 0);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.what_content_text {\r\n\t\t\t\t\t@extend %block-text;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (min-width:859.99px) {\r\n\t\t\t\t\t.what_content_text {\r\n\t\t\t\t\t\tmax-width: 450px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.what_content_text:not(:last-child) {\r\n\t\t\t\t\t@include adaptiv-value(\"padding-bottom\", 48, 30, 0);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.what_content_blocks {\r\n\t\t\t\t\tdisplay: grid;\r\n\t\t\t\t\tgrid-template-columns: 1fr 1fr;\r\n\t\t\t\t\t//display: flex;\r\n\t\t\t\t\t//justify-content: space-between;\r\n\t\t\t\t\t@include adaptiv-value(\"gap\", 48, 20, 0);\r\n\t\t\t\t\t//flex-wrap: wrap;\r\n\r\n\t\t\t\t\t.what_content_block {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\tbackground: rgba(0, 128, 0, 0.05);\r\n\t\t\t\t\t\tborder-radius: 20px;\r\n\r\n\t\t\t\t\t\t.what_content_block_img {\r\n\t\t\t\t\t\t\tflex: 0 1 40%;\r\n\r\n\r\n\t\t\t\t\t\t\timg {\r\n\t\t\t\t\t\t\t\tmax-width: 100%;\r\n\t\t\t\t\t\t\t\tborder-radius: 20px;\r\n\t\t\t\t\t\t\t\theight: 100%;\r\n\t\t\t\t\t\t\t\tobject-fit: cover;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.what_content_block_content {\r\n\t\t\t\t\t\t\tflex: 0 1 60%;\r\n\t\t\t\t\t\t\t@include adaptiv-value(\"padding\", 32, 16, 0);\r\n\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\t\t\tjustify-content: space-between;\r\n\r\n\t\t\t\t\t\t\t.what_content_block_text {\r\n\t\t\t\t\t\t\t\t@extend %block-text;\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t.what_content_block_name {\r\n\t\t\t\t\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\t\t\t\tfont-weight: 600;\r\n\t\t\t\t\t\t\t\tfont-size: 18px;\r\n\t\t\t\t\t\t\t\tline-height: 1.7;\r\n\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (max-width:859.99px) {\r\n\t\t\t\t\t.what_content_blocks {\r\n\t\t\t\t\t\tgrid-template-columns: 1fr;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.what_content_blocks:not(:last-child) {\r\n\t\t\t\t\t@include adaptiv-value(\"padding-bottom\", 48, 24, 0);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.what_content_button {\r\n\t\t\t\t\t@extend %button;\r\n\t\t\t\t\tpadding: 22px 70px;\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\r\n\t\t}\r\n\r\n\t\t/*Download block------------------------------------------*/\r\n\r\n\t\t.download_block_wrapper {\r\n\t\t\tbackground: rgba(0, 128, 0, 0.05);\r\n\t\t\tborder-radius: 20px;\r\n\t\t\t@include adaptiv-value(\"margin-top\", 200, 90, 0);\r\n\t\t\t@include adaptiv-value(\"margin-bottom\", 200, 90, 0);\r\n\t\t\tposition: relative;\r\n\t\t\toverflow: hidden;\r\n\r\n\t\t\t.download_content {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tpadding: 64px 0;\r\n\r\n\t\t\t\t.download_content_title {\r\n\t\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t@include adaptiv-value(\"font-size\", 56, 36, 0);\r\n\t\t\t\t\tline-height: 1.12;\r\n\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\tmax-width: 700px;\r\n\r\n\t\t\t\t\tspan {\r\n\t\t\t\t\t\tcolor: #008000;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.download_content_title:not(:last-child) {\r\n\t\t\t\t\tpadding-bottom: 48px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.download_content_stores {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tgap: 24px;\r\n\r\n\t\t\t\t\t.download_content_stores_store {\r\n\t\t\t\t\t\talign-self: center;\r\n\r\n\t\t\t\t\t\t.download_content_link {\r\n\t\t\t\t\t\t\timg {\r\n\t\t\t\t\t\t\t\tmax-width: 100%;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t\tcontent: '';\r\n\t\t\t\tborder: 1px solid rgba(0, 128, 0, 0.34);\r\n\t\t\t\t@include adaptiv-value(\"width\", 585, 385, 0);\r\n\t\t\t\t@include adaptiv-value(\"height\", 585, 385, 0);\r\n\t\t\t\tborder-radius: 50%;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttransform: translate(-50%, -55%);\r\n\t\t\t\tz-index: -1;\r\n\t\t\t}\r\n\r\n\t\t\t&::before {\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttransform: translate(-50%, -40%);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\r\n\t}\r\n\r\n\r\n}",".footer {\r\n\r\n\r\n\t.footer_container-big {\r\n\t\t.footer_header {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid-template-columns: repeat(3, 1fr);\r\n\t\t\t//@include adaptiv-value(\"gap\", 186, 20, 0);\r\n\t\t\t@include adaptiv-value(\"padding-top\", 68, 20, 0);\r\n\t\t\t@include adaptiv-value(\"padding-bottom\", 100, 40, 0);\r\n\r\n\t\t\t.footer_header_logo {\r\n\r\n\t\t\t\tsvg {\r\n\t\t\t\t\tmargin-bottom: 24px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.footer_header_logo_text {\r\n\t\t\t\t\t@extend %block-text;\r\n\t\t\t\t\tmax-width: 292px;\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n\r\n\t\t\t.footer_header_form_wrapper {\r\n\t\t\t\t.footer_header_form_wrapper_text {\r\n\t\t\t\t\t@extend %block-text;\r\n\t\t\t\t\tmax-width: 338px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.footer_header_form_wrapper_text:not(:last-child) {\r\n\t\t\t\t\tpadding-bottom: 24px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.footer_header_form_block {\r\n\t\t\t\t\tbackground: rgba(55, 56, 38, 0.1);\r\n\t\t\t\t\tborder-radius: 10px;\r\n\t\t\t\t\tpadding: 6px;\r\n\r\n\r\n\r\n\t\t\t\t\t.footer_header_form {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\tmax-width: 533px;\r\n\r\n\t\t\t\t\t\t.footer_header_form_input {\r\n\t\t\t\t\t\t\tpadding: 22px 25px;\r\n\t\t\t\t\t\t\tbackground: transparent;\r\n\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\t\t\tfont-weight: 500;\r\n\t\t\t\t\t\t\tfont-size: 18px;\r\n\t\t\t\t\t\t\tline-height: 1.1;\r\n\t\t\t\t\t\t\tflex: 1 1 auto;\r\n\t\t\t\t\t\t}\r\n\r\n\r\n\r\n\t\t\t\t\t\t.footer_header_form_button {\r\n\t\t\t\t\t\t\t@extend %button;\r\n\t\t\t\t\t\t\tcolor: #FFFFFF;\r\n\t\t\t\t\t\t\tfont-weight: 500;\r\n\t\t\t\t\t\t\tpadding: 22px 25px;\r\n\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t@media (max-width:520px) {\r\n\t\t\t\t\t\t\t.footer_header_form_button {\r\n\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t@media (max-width:1088px) {\r\n\t\t\t\t\t\t.footer_header_form {\r\n\t\t\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\r\n\t\t\t.footer_header_social_phone {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t@include adaptiv-value(\"gap\", 48, 7, 0);\r\n\t\t\t\tjustify-content: flex-end;\r\n\r\n\t\t\t\t.footer_header_social {\r\n\t\t\t\t\t.footer_header_social_title {}\r\n\r\n\t\t\t\t\t.footer_header_social_title:not(:last-child) {\r\n\t\t\t\t\t\tpadding-bottom: 24px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.footer_header_social_icons {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t@include adaptiv-value(\"gap\", 16, 10, 0);\r\n\r\n\t\t\t\t\t\t.svgfooter {\r\n\t\t\t\t\t\t\twidth: 48px;\r\n\t\t\t\t\t\t\theight: 48px;\r\n\t\t\t\t\t\t\tbackground: #008000;\r\n\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\talign-items: center;\r\n\t\t\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\r\n\t\t\t\t.footer_header_phone {\r\n\t\t\t\t\t.footer_header_phone_title {}\r\n\r\n\t\t\t\t\t.footer_header_phone_title:not(:last-child) {\r\n\t\t\t\t\t\tpadding-bottom: 24px;\r\n\t\t\t\t\t}\r\n\r\n\r\n\t\t\t\t\ta {}\r\n\r\n\t\t\t\t\ta:hover {\r\n\t\t\t\t\t\ttext-decoration: underline;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.footer_header_phone_number {\r\n\t\t\t\t\t\tfont-family: $font-lato;\r\n\t\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\t\tfont-weight: 400;\r\n\t\t\t\t\t\tfont-size: 16px;\r\n\t\t\t\t\t\tline-height: 19px;\r\n\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n\r\n\t\t\t@media (max-width:1059.99px) {\r\n\t\t\t\t.footer_header_social_phone {\r\n\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\talign-items: flex-end;\r\n\t\t\t\t\tjustify-content: space-between;\r\n\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t@media (max-width:840px) {\r\n\t\t\t\t.footer_header_social_phone {\r\n\t\t\t\t\tflex-direction: row;\r\n\t\t\t\t\talign-items: flex-start;\r\n\t\t\t\t\tpadding-top: 20px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\t@media (max-width: 840px) {\r\n\t\t\t.footer_header {\r\n\t\t\t\tgrid-template-columns: 1fr 1fr;\r\n\t\t\t\tgrid-template-rows: 1fr 1fr;\r\n\t\t\t\tgrid-row-gap: 0px;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t@media (max-width: 700px) {\r\n\t\t\t.footer_header {\r\n\t\t\t\tgrid-template-columns: 1fr;\r\n\t\t\t\tgrid-template-rows: 1fr 1fr auto;\r\n\t\t\t\tjustify-items: center;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\r\n\r\n\t\t.footer_bottom {\r\n\t\t\tborder-top: 1px solid rgba(38, 50, 56, 0.31);\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\r\n\t\t\t.footer_bottom_date {\r\n\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\tfont-style: normal;\r\n\t\t\t\tfont-weight: 300;\r\n\t\t\t\tfont-size: 12px;\r\n\t\t\t\tline-height: 13px;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\r\n\r\n\r\n\t\t\t}\r\n\r\n\t\t\t.footer_bottom_menu {\r\n\t\t\t\theight: 128px;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\r\n\t\t\t\t.footer_bottom_list {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t@include adaptiv-value(\"gap\", 40, 20, 0);\r\n\r\n\t\t\t\t\t.footer_bottom_item {\r\n\t\t\t\t\t\t.footer_bottom_link {\r\n\t\t\t\t\t\t\tfont-family: $font-spartan;\r\n\t\t\t\t\t\t\tfont-style: normal;\r\n\t\t\t\t\t\t\tfont-weight: 400;\r\n\t\t\t\t\t\t\tfont-size: 14px;\r\n\t\t\t\t\t\t\tline-height: 16px;\r\n\r\n\t\t\t\t\t\t\twhite-space: nowrap;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.footer_bottom_link:hover {\r\n\t\t\t\t\t\t\ttext-decoration: underline;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@media (max-width:620px) {\r\n\t\t\t\t\t.footer_bottom_list {\r\n\t\t\t\t\t\tflex-wrap: wrap;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Fidelity.svg */ "./src/img/Fidelity.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/WIRED.svg */ "./src/img/WIRED.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/How1.svg */ "./src/img/How1.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/How2.svg */ "./src/img/How2.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/How3.svg */ "./src/img/How3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/How4.svg */ "./src/img/How4.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/person.jpg */ "./src/img/person.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/person2.jpg */ "./src/img/person2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/1.svg */ "./src/img/1.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/2.svg */ "./src/img/2.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/3.svg */ "./src/img/3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/4.svg */ "./src/img/4.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/person3.jpg */ "./src/img/person3.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Tonia.jpg */ "./src/img/Tonia.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Obi.jpg */ "./src/img/Obi.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/appstore.png */ "./src/img/appstore.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Goolstore.png */ "./src/img/Goolstore.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n\r\n<head>\r\n\t<meta charset=\"UTF-8\">\r\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\t<" + "script src=\"https://kit.fontawesome.com/f923d58a44.js\" crossorigin=\"anonymous\"><" + "/script>\r\n\t<title>Document</title>\r\n</head>\r\n\r\n<body>\r\n\t<div class=\"wrapper\">\r\n\t\t<header class=\"header\">\r\n\t\t\t<div class=\"header_container-big\">\r\n\t\t\t\t<a href=\"#\" class=\"header_logo\">\r\n\t\t\t\t\tFarmVest\r\n\t\t\t\t</a>\r\n\t\t\t\t<nav class=\"header_menu\">\r\n\t\t\t\t\t<div class=\"body_burger\">\r\n\t\t\t\t\t\t<ul class=\"header_menu_list\">\r\n\t\t\t\t\t\t\t<li class=\"header_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"menu_link\">Home</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"header_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"menu_link\">About</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"header_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"menu_link\">Features</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"header_menu_item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"menu_link\">How it works</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</nav>\r\n\r\n\t\t\t\t<div class=\"header_buttons\">\r\n\r\n\t\t\t\t\t<i class=\"fa-solid fa-moon fa-3x light\"></i>\r\n\r\n\t\t\t\t\t<button id=\"sign\">Sign in</button>\r\n\t\t\t\t\t<button id=\"get\">Get Started</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"header_burger\">\r\n\t\t\t\t\t<span></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<main class=\"main\">\r\n\t\t\t<div class=\"main__container\">\r\n\t\t\t\t<div class=\"home_block_wrapper\">\r\n\t\t\t\t\t<div class=\"home_icon_wrapper\">\r\n\t\t\t\t\t\t<div class=\"home_ikon i1\">\r\n\t\t\t\t\t\t\t<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M23 20.515C23 15.9 19.22 15.374 16.183 14.952C12.873 14.492 11 14.092 11 11.242C11 8.85 13.507 8 15.654 8C16.724 7.96544 17.7868 8.18569 18.7549 8.64262C19.723 9.09954 20.5686 9.78004 21.222 10.628L22.778 9.372C22.0783 8.47217 21.2076 7.71952 20.216 7.1573C19.2244 6.59509 18.1315 6.23441 17 6.096V3H15V6.022C11.385 6.242 9.00005 8.282 9.00005 11.242C9.00005 15.972 12.83 16.505 15.907 16.932C19.16 17.385 21 17.774 21 20.515C21 23.547 17.867 24 16 24C12.57 24 11.122 23.036 9.77805 21.372L8.22205 22.628C9.01481 23.6727 10.0402 24.5182 11.2167 25.0975C12.3933 25.6767 13.6887 25.9737 15 25.965V29H17V25.955C20.726 25.651 23 23.628 23 20.515Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" fill-opacity=\"0.4\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"home_ikon i2\">\r\n\t\t\t\t\t\t\t<svg width=\"40\" height=\"37\" viewBox=\"0 0 40 37\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M20 0L24.4903 13.8197H39.0211L27.2654 22.3607L31.7557 36.1803L20 27.6393L8.2443 36.1803L12.7346 22.3607L0.97887 13.8197H15.5097L20 0Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" fill-opacity=\"0.4\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"home_ikon i3\">\r\n\t\t\t\t\t\t\t<svg width=\"17\" height=\"17\" viewBox=\"0 0 17 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t\t<circle cx=\"8.5\" cy=\"8.5\" r=\"8\" stroke=\"#263238\" stroke-opacity=\"0.4\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"home_ikon i4\">\r\n\t\t\t\t\t\t\t<svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M8.22752 40.3245C8.94908 40.3245 9.53402 39.9256 9.53402 39.4335C9.53402 38.9414 8.94908 38.5425 8.22752 38.5425C7.50596 38.5425 6.92102 38.9414 6.92102 39.4335C6.92102 39.9256 7.50596 40.3245 8.22752 40.3245Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" fill-opacity=\"0.4\" />\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M46.5 35.0017L46.0095 34.7137C45.972 34.692 42.2243 32.4683 41.2927 29.7698L41.085 29.172L40.701 29.6737C40.689 29.6895 40.1565 30.348 38.6663 31.1205C37.563 24.8407 33.81 17.3438 28.878 14.1473C30.288 14.2613 31.7025 14.1442 33.0675 13.6478C33.8895 13.3493 33.5347 12.0097 32.7052 12.3127C31.5862 12.72 30.465 12.831 29.346 12.774C32.0932 10.2562 34.2503 6.3975 34.2503 3.576C34.2503 2.898 34.2502 1.63575 33.2453 1.63575C32.8417 1.63575 32.5155 1.88775 32.0647 2.23575C31.3732 2.769 30.3293 3.576 28.7955 3.576C28.2113 3.576 27.1418 2.9595 26.2822 2.4645C25.2435 1.86675 24.5798 1.5 24.0217 1.5C23.0977 1.5 21.7395 2.247 20.541 2.90625C20.0535 3.174 19.3868 3.5415 19.2488 3.57675C17.5118 3.57675 16.503 2.77575 15.834 2.2455C15.444 1.935 15.1613 1.71 14.784 1.71C13.7955 1.71 13.7955 2.89575 13.7955 4.269C13.7955 6.9195 15.8145 10.4182 18.4583 12.7695C16.7925 12.8887 15.15 13.392 13.9957 14.5103C13.3582 15.1267 14.3242 16.1047 14.9595 15.4897C15.9187 14.5597 17.1765 14.1615 18.522 14.0842C18.5602 14.2215 18.6068 14.3565 18.6637 14.4893C13.0268 18.54 9.0225 28.1587 9.0225 34.6522C9.0225 35.2927 9.072 35.8725 9.1485 36.4185C7.695 35.7728 7.16475 35.2065 7.15425 35.1937L6.76725 34.7475L6.57675 35.31C5.7345 37.788 2.073 39.9375 2.03625 39.9593L1.5 40.2705L2.04525 40.5653C2.2365 40.6688 2.42625 40.7595 2.6175 40.8577L2.2725 41.097L2.45475 43.377L16.7445 46.5L22.1625 43.0343C22.7092 43.0373 23.2628 43.0387 23.826 43.0387L30.159 46.5L44.4757 42V39.5933L44.097 39.366C44.286 39.246 44.475 39.1238 44.6632 38.9977L45.165 38.6625L45.0548 38.6085L45.693 38.4338L45.801 35.9318L45.432 35.67C45.6285 35.5522 45.8242 35.4323 46.0208 35.3078L46.5 35.0017ZM15.1597 4.269C15.1597 3.936 15.1643 3.6765 15.171 3.47475C15.2858 3.56475 15.4193 3.663 15.5618 3.76425C15.999 4.81125 16.8263 6.31875 18.2288 7.26825C19.9328 8.42325 19.7062 7.09575 20.6152 5.88375C21.5243 4.6725 22.1392 4.038 23.6618 7.1535C24.3255 8.51175 25.4318 4.716 26.4832 4.16175C26.7615 4.31325 27.039 4.45425 27.3113 4.57425C29.1968 7.64025 30.0705 6.684 31.7453 4.1355C32.2057 3.8655 32.5837 3.576 32.8845 3.34425C32.886 3.414 32.8875 3.49125 32.8875 3.5775C32.8875 5.985 30.9202 9.438 28.5112 11.6903C28.3975 11.4012 28.2346 11.134 28.0298 10.9005C27.057 9.79875 25.5368 11.0205 24.816 11.8222C23.5373 11.4113 21.4538 10.2795 20.0963 10.9275C19.7582 11.0843 19.4477 11.2948 19.1768 11.5507C16.9567 9.52725 15.1597 6.606 15.1597 4.269ZM27.3127 12.4995C26.9765 12.4282 26.6421 12.3482 26.31 12.2595C26.7285 11.8988 27.1125 11.7728 27.2738 12.309C27.291 12.3675 27.3015 12.4342 27.3127 12.4995ZM21.6127 12.9653C21.3645 12.918 21.1095 12.8752 20.847 12.8415C20.648 12.7167 20.4531 12.5854 20.2628 12.4478C20.9482 11.988 22.1303 12.2325 23.2598 12.6157C22.7025 12.672 22.1528 12.7935 21.6127 12.9653ZM21.9533 14.9452C21.5333 15.0503 21.0758 15.0083 20.6805 14.8507C20.841 14.766 21.003 14.6925 21.165 14.6182C21.4275 14.745 21.69 14.8507 21.9533 14.9452ZM8.0805 42.2843C6.29166 41.7662 4.55591 41.0799 2.8965 40.2345C3.91425 39.5655 6.13125 37.9478 7.03275 36.0037C7.65075 36.489 9.07725 37.374 11.8553 38.0535C11.808 38.13 11.7502 38.2118 11.6947 38.292C9.32325 37.671 7.97475 36.8857 7.953 36.8722L7.626 36.6772L7.46925 37.0275C7.263 37.4865 6.77925 37.5555 6.51 37.5555C6.435 37.5555 6.38475 37.5503 6.378 37.5495L6.11025 37.5105L6.01275 37.767C5.81325 38.2905 4.99425 38.9745 4.69425 39.1942L4.19325 39.5618L4.76625 39.7965C4.97925 39.8835 5.037 39.9637 5.04 39.9847C5.0475 40.0365 4.95675 40.173 4.86 40.2517L4.4235 40.6035L4.93125 40.8382C5.9715 41.3182 7.14975 41.7157 8.328 42.0435C8.23425 42.1357 8.15325 42.2145 8.0805 42.2843ZM14.1285 39.4897C15.177 39.6367 16.3387 39.7298 17.6077 39.7298H17.6085C17.8725 39.7298 18.1403 39.7253 18.4132 39.717C18.4314 39.7736 18.4574 39.8274 18.4905 39.8767C18.5572 39.978 18.6472 40.062 18.7612 40.1273L16.8472 41.763C16.8108 41.7614 16.7743 41.7607 16.7377 41.7607C15.885 41.7607 15.249 42.0742 14.9437 42.6322C13.7872 42.4847 12.6361 42.2979 11.4923 42.072C12.4117 41.2538 13.2915 40.3921 14.1285 39.4897ZM5.61675 40.3875C5.69175 40.2458 5.7405 40.074 5.71425 39.8865C5.68932 39.7173 5.60822 39.5615 5.484 39.444C5.82075 39.1553 6.285 38.7098 6.54 38.2485C7.11975 38.2402 7.59825 38.0205 7.89975 37.632C8.4075 37.8975 9.55125 38.4338 11.241 38.8988C10.5503 39.765 9.6195 40.7475 8.89575 41.478C7.76775 41.1795 6.6315 40.8195 5.61675 40.3875ZM16.305 43.5443L16.1512 43.545C15.5055 43.545 13.3658 43.4925 10.539 42.9038C10.638 42.8198 10.7408 42.7335 10.836 42.651C13.1295 43.1302 14.979 43.3357 15.1178 43.3515L15.3923 43.3807L15.477 43.1145C15.6622 42.54 16.3455 42.4552 16.737 42.4552C16.8442 42.4552 16.9155 42.462 16.9237 42.4627L17.0693 42.4785L20.394 39.6375L19.5052 39.6082C19.2083 39.5978 19.083 39.531 19.0522 39.4852L19.2405 38.9925L18.72 39.0143C18.3405 39.0308 17.97 39.039 17.6077 39.039H17.607C16.56 39.039 15.5887 38.97 14.691 38.8612L14.8995 38.6152C16.7115 38.8575 18.8812 39.0068 21.501 38.988C20.8755 39.8655 19.3155 41.7307 16.305 43.5443ZM23.823 40.2855V41.6543C23.3962 41.6543 22.9808 41.6528 22.5743 41.6497L22.452 40.1092L21.4365 40.1917C22.1205 39.3833 22.4122 38.844 22.4385 38.7952L22.7137 38.2747L22.1325 38.2853C16.569 38.3872 12.9405 37.7243 10.65 36.9878C10.4827 36.3113 10.386 35.5462 10.386 34.653C10.386 28.5607 14.2792 19.3522 19.4482 15.6202C20.364 16.506 21.753 16.8937 23.073 16.032C23.3625 15.843 23.6145 15.5955 23.8507 15.3323C23.907 15.3338 23.9648 15.3465 24.0217 15.3465C24.2107 15.3465 24.4028 15.3308 24.594 15.3068C24.8363 15.4035 25.0732 15.501 25.293 15.5978C26.3452 16.0613 27.2438 15.7733 27.8573 15.1343C32.592 17.9993 36.3855 25.578 37.3838 31.704C35.2192 32.5695 31.7857 33.414 26.5163 33.5625C27.5557 32.9685 28.3358 31.9695 28.0553 30.657C27.7605 29.2695 26.601 28.8795 25.4002 28.8158C25.3973 28.164 25.3972 27.5138 25.4017 26.862C25.77 27.0248 26.1232 27.2122 26.4442 27.4125C27.0112 27.7687 27.5243 26.8455 26.961 26.4893C26.4726 26.1822 25.9514 25.9309 25.407 25.74C25.4145 24.9855 25.4182 24.2325 25.4182 23.4795C25.419 22.7895 24.3938 22.7895 24.3938 23.4795C24.3938 24.1418 24.3893 24.8032 24.3833 25.464C23.8375 25.3689 23.2803 25.3595 22.7318 25.4363C22.6426 24.9398 22.5345 24.447 22.4078 23.9587C22.2383 23.2943 21.2482 23.5755 21.42 24.2423C21.546 24.7215 21.6488 25.1985 21.7335 25.6823C21.69 25.6987 21.6427 25.707 21.6 25.7265C20.211 26.2762 19.3635 27.678 20.3797 28.9852C20.853 29.5942 21.4718 29.8403 22.149 29.922C22.1857 30.8242 22.209 31.7273 22.2352 32.6287C21.7815 32.334 21.3682 31.956 20.994 31.5563C20.5305 31.0673 19.8067 31.8225 20.2695 32.3108C20.8987 32.9805 21.5595 33.4868 22.2757 33.8108C22.308 34.581 22.3538 35.3535 22.4288 36.12C22.4948 36.8003 23.5208 36.804 23.454 36.12C23.3908 35.457 23.344 34.7926 23.3137 34.1273C23.7037 34.1947 24.1132 34.212 24.5482 34.1707C24.597 34.8802 24.654 35.5897 24.735 36.2992C24.7815 36.7057 25.17 36.8655 25.4565 36.783L25.3927 38.256C24.9412 38.2965 24.4807 38.334 24.0007 38.3655L23.4293 38.403L23.7337 38.895C23.7645 38.9445 24.1102 39.4912 24.882 40.287H23.823V40.2855ZM42.489 35.349C41.5462 35.7923 40.3538 36.1987 39.1388 36.5535C38.3918 35.7817 37.4362 34.752 36.723 33.8385C38.3123 33.357 39.2018 32.8605 39.603 32.5928C39.9202 32.8725 40.3403 33.018 40.8375 33.0173C41.0025 33.0173 41.1488 33.0015 41.2612 32.9835C41.6213 33.45 42.2017 33.9885 42.5648 34.3102C42.393 34.4865 42.3097 34.6815 42.3165 34.8923C42.3225 35.0723 42.3945 35.2253 42.489 35.349ZM37.1227 37.8135C37.2758 37.9485 37.434 38.0865 37.5952 38.226C34.5547 39.0322 32.292 39.12 31.7992 39.1283C28.6507 37.2075 27.0188 35.175 26.3895 34.26C29.0243 34.194 31.2023 33.9555 33.0188 33.627C33.0926 33.7177 33.1674 33.8077 33.243 33.897C31.783 34.1244 30.3115 34.2704 28.8352 34.3343L28.23 34.3597L28.563 34.869C28.5623 34.8698 28.4947 34.9958 28.0477 35.0827L27.321 35.2245L30.894 38.1173L31.0605 38.0723C31.0643 38.0715 31.3792 37.9867 31.7603 37.9867C32.31 37.9867 32.6858 38.154 32.8748 38.481L32.9948 38.688L33.228 38.6468C34.5344 38.4086 35.8333 38.1307 37.1227 37.8135ZM26.55 35.6092L25.6965 35.5628C25.6568 35.1367 25.617 34.7108 25.587 34.2848C25.737 34.5338 26.0445 35.0018 26.55 35.6092ZM25.494 32.8635C25.4448 31.8539 25.415 30.8435 25.4048 29.8328C25.5278 29.8372 25.6493 29.8485 25.7648 29.865C27.0907 30.066 27.4373 31.5405 26.4022 32.37C26.1322 32.5837 25.821 32.7405 25.494 32.8635ZM33.3232 37.9275C32.9872 37.5127 32.4525 37.2952 31.761 37.2952C31.4722 37.2952 31.218 37.3342 31.0575 37.3657L28.8113 35.5455C28.998 35.4383 29.124 35.3025 29.193 35.136C29.21 35.0946 29.223 35.0516 29.232 35.0077C31.0125 34.9102 32.5125 34.7325 33.7808 34.515C34.3958 35.2013 35.2995 36.1478 36.498 37.248C35.0257 37.5983 33.798 37.8382 33.3232 37.9275ZM24.3787 29.8597C24.393 30.9465 24.42 32.0362 24.4778 33.1222C24.381 33.1372 24.2858 33.156 24.1905 33.1658C23.868 33.2025 23.562 33.1755 23.271 33.102C23.2342 32.052 23.2102 30.9998 23.1705 29.949C23.574 29.9303 23.9827 29.8905 24.3787 29.8597ZM23.1188 28.911C23.0719 28.0869 22.9943 27.2648 22.8862 26.4465C23.3834 26.3782 23.8889 26.4039 24.3765 26.5222C24.3711 27.289 24.3699 28.0557 24.3728 28.8225C24.0435 28.8405 23.7308 28.872 23.4555 28.8967C23.3435 28.9055 23.2311 28.9102 23.1188 28.911ZM22.0897 28.7798C22.026 28.7625 21.963 28.749 21.8978 28.7273C21.5977 28.6255 21.326 28.4541 21.105 28.227C20.4645 27.6293 21.3435 27.0428 21.8978 26.7645C21.9848 27.432 22.0448 28.1055 22.0897 28.7798ZM30.3675 43.3792C27.1118 41.7158 25.365 39.867 24.6712 39.0105C25.17 38.973 25.6418 38.928 26.109 38.8807L31.4475 42.3457L43.155 39.1297C37.1175 42.7687 31.1528 43.323 30.3675 43.3792ZM40.0365 37.4618C39.9405 37.3657 39.8257 37.2518 39.69 37.1145C41.022 36.711 42.3105 36.243 43.2712 35.7285L43.8555 35.4143L43.263 35.1128C43.1302 35.0445 43.0005 34.9193 42.9983 34.872C42.9998 34.854 43.0522 34.758 43.2795 34.6275L43.713 34.3785L43.3275 34.0575C43.3155 34.0477 42.1133 33.0495 41.691 32.4067L41.5515 32.1968L41.3122 32.2665C41.31 32.2665 41.1045 32.3258 40.8375 32.3258C40.425 32.3265 40.116 32.1915 39.918 31.926L39.699 31.6357L39.4245 31.872C39.4103 31.884 38.5605 32.5807 36.2812 33.2393C36.2062 33.1311 36.1339 33.0211 36.0645 32.9093C38.8282 32.0715 40.2405 31.0575 40.8525 30.5025C41.835 32.628 44.1742 34.3402 45.1898 35.0115C43.5584 35.9987 41.8319 36.8196 40.0365 37.4618Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" fill-opacity=\"0.4\" />\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M33.285 35.3378C32.5372 35.1346 31.6935 35.2733 31.398 35.6446C31.1047 36.0173 31.4752 36.4868 32.2223 36.6916C32.9708 36.8948 33.8137 36.7553 34.1092 36.3833C34.4025 36.0106 34.0335 35.5426 33.285 35.3378Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" fill-opacity=\"0.4\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"home_ikon i5\">\r\n\t\t\t\t\t\t\t<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t\t<circle cx=\"8\" cy=\"8\" r=\"8\" fill=\"#263238\" fill-opacity=\"0.4\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"home_ikon i6\">\r\n\t\t\t\t\t\t\t<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M9.33331 24V9.40267C9.33322 9.09243 9.43617 8.79095 9.62601 8.54558C9.81584 8.30021 10.0818 8.12483 10.3821 8.04701C10.6824 7.96918 11.0001 7.99331 11.2852 8.11561C11.5703 8.2379 11.8067 8.45143 11.9573 8.72267L20.0426 23.2773C20.1932 23.5486 20.4297 23.7621 20.7148 23.8844C20.9999 24.0067 21.3175 24.0308 21.6179 23.953C21.9182 23.8752 22.1841 23.6998 22.374 23.4544C22.5638 23.209 22.6667 22.9076 22.6666 22.5973V8\"\r\n\t\t\t\t\t\t\t\t\tstroke=\"#263238\" stroke-opacity=\"0.4\" stroke-width=\"2\" stroke-linecap=\"round\"\r\n\t\t\t\t\t\t\t\t\tstroke-linejoin=\"round\" />\r\n\t\t\t\t\t\t\t\t<path d=\"M6.66666 13.3333H25.3333\" stroke=\"#263238\" stroke-opacity=\"0.4\" stroke-width=\"2\"\r\n\t\t\t\t\t\t\t\t\tstroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n\t\t\t\t\t\t\t\t<path d=\"M6.66666 18.6667H25.3333\" stroke=\"#263238\" stroke-opacity=\"0.4\" stroke-width=\"2\"\r\n\t\t\t\t\t\t\t\t\tstroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"home_ikon i7\">\r\n\t\t\t\t\t\t\t<svg width=\"40\" height=\"37\" viewBox=\"0 0 40 37\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M20 1.61804L24.0148 13.9742L24.127 14.3197H24.4903H37.4823L26.9715 21.9562L26.6776 22.1697L26.7899 22.5152L30.8046 34.8713L20.2939 27.2348L20 27.0213L19.7061 27.2348L9.19535 34.8713L13.2101 22.5152L13.3224 22.1697L13.0285 21.9562L2.51771 14.3197H15.5097H15.873L15.9852 13.9742L20 1.61804Z\"\r\n\t\t\t\t\t\t\t\t\tstroke=\"#263238\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h1 class=\"home_block_title\">The easiest and fastest way to <span class=\"bounce-top\">Invest</span> in\r\n\t\t\t\t\t\tAgriculture\r\n\t\t\t\t\t</h1>\r\n\t\t\t\t\t<div class=\"home_block_text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis\r\n\t\t\t\t\t\taenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit\r\n\t\t\t\t\t\tamet, consectetur </div>\r\n\t\t\t\t\t<div class=\"home_form_wrapper\">\r\n\t\t\t\t\t\t<form action=\"#\" class=\"home_form form\">\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter your email\" class=\"home_input\" />\r\n\t\t\t\t\t\t\t<button class=\"home_button\">Get started</button>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"slide_block_wrapper\">\r\n\t\t\t\t\t<div class=\"slide_block\">\r\n\t\t\t\t\t\t<svg width=\"202\" height=\"29\" viewBox=\"0 0 202 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t<g clip-path=\"url(#clip0_1_912)\">\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M48.9134 12.1266L48.5659 13.8383H48.479C48.0446 12.8809 46.8283 11.5464 44.1349 11.5464C39.7908 11.5464 35.3599 14.9117 34.3752 20.2208C33.5354 24.8626 35.7653 28.9532 40.9203 28.9532C42.8027 28.9532 44.9748 28.2279 46.1042 26.6323H46.1911L45.8726 28.373H50.68L53.6919 12.1266H48.9134ZM47.3496 20.2208C47.031 21.8164 45.525 24.3984 42.5131 24.3984C39.5592 24.3984 38.951 21.7874 39.2116 20.2788C39.5592 18.4221 41.2099 16.1012 44.0191 16.1012C46.7703 16.1302 47.6971 18.306 47.3496 20.2208Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" />\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M56.4157 12.1266H60.9335L60.615 13.8383H60.7019C61.2811 13.055 62.4105 11.5464 65.1907 11.5464L64.293 16.4783C62.0051 16.5073 60.3543 16.9715 59.9199 19.4665L58.2692 28.373H53.4038L56.4157 12.1266Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" />\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M68.4628 5.77319H73.3282L71.0403 18.016H71.1272L76.7456 12.1267H82.4508L75.0369 19.2635L79.2941 28.373H73.7916L70.6638 20.54H70.577L69.1579 28.373H64.2635L68.4628 5.77319Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" />\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M90.2408 11.5464C85.3175 11.5464 80.9444 15.782 80.1335 20.3078C79.2357 25.1237 82.4793 28.9242 87.142 28.9242C88.7927 28.9242 90.5014 28.431 92.0074 27.4446C93.5423 26.5162 94.9613 25.1237 96.0618 23.296H91.1096C90.2987 24.1373 89.3719 24.8046 87.866 24.8046C85.9836 24.8046 84.5645 23.6731 84.6514 21.7294H96.8148C96.9596 21.3522 97.0465 21.0621 97.1623 20.4529C98.0891 15.4919 95.193 11.5464 90.2408 11.5464ZM85.3175 18.4511C85.694 17.4937 87.0261 15.666 89.5457 15.666C92.0653 15.666 92.6734 17.4937 92.6734 18.4511H85.3175Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" />\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M27.947 5.77319L19.3746 18.6542H19.3167V5.77319H15.1753L0 28.373H5.879L14.3934 15.492H14.4803V28.373H18.6506L27.165 15.492H27.2519V28.373H32.1173V5.77319H27.947Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" />\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M109.471 12.1267H106.401L107.299 7.31079H103.042L102.694 9.16752C102.318 11.2853 100.986 11.9236 99.2189 12.1267H99.19L98.4659 15.8111H100.87L98.5528 28.373H103.389L105.706 15.8111H108.805L109.471 12.1267Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" />\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M184.537 22.2227C182.944 25.9071 179.15 28.9243 174.777 28.9243C169.854 28.9243 166.813 25.0368 167.682 20.1919C168.58 15.434 172.982 11.5465 177.847 11.5465C182.133 11.5465 185.087 14.4186 185.174 18.3932H180.251C179.932 17.2618 179.208 16.1013 177.152 16.1013C174.864 15.9853 172.982 17.871 172.547 20.2209C172.113 22.5998 173.329 24.3695 175.646 24.3695C177.644 24.3695 178.861 23.2091 179.556 22.1937H184.537V22.2227ZM144.34 0L134.899 5.77326H137.563L129.02 18.6543H128.933V5.77326H124.762L116.219 18.6543H116.132V5.77326H111.267V28.3731H115.495L124.038 15.4921H124.125V28.3731H128.296L143.413 5.77326H145.817L144.34 0ZM153.549 28.3731H148.742L149.06 26.6324H148.974C147.844 28.2281 145.672 28.9533 143.79 28.9533C138.635 28.9533 136.405 24.8917 137.244 20.2209C138.2 14.9118 142.66 11.5465 147.004 11.5465C149.669 11.5465 150.914 12.852 151.348 13.8384H151.435L151.783 12.1267H156.59L153.549 28.3731ZM145.382 24.4276C148.394 24.4276 149.9 21.8165 150.219 20.2499C150.566 18.3062 149.64 16.1303 146.888 16.1303C144.108 16.1303 142.428 18.4512 142.081 20.3079C141.82 21.8165 142.428 24.4276 145.382 24.4276ZM168.696 12.1267H165.655L166.553 7.31086H162.295L161.948 9.16759C161.571 11.2854 160.239 11.9237 158.473 12.1267H158.415L157.72 15.8112H160.123L157.806 28.3731H162.643L164.96 15.8112H168.059L168.696 12.1267ZM189.113 5.77326H193.949L192.472 13.8384H192.559C193.602 12.3298 194.992 11.5465 197.135 11.5465C198.67 11.5465 200.436 12.1267 201.247 13.3742C202.29 14.9699 202.174 16.3914 201.624 19.2926L199.973 28.3731H195.137L196.758 19.5246C196.903 18.7413 197.367 16.1013 194.789 16.1013C192.067 16.1013 191.603 18.5383 191.459 19.3506L189.808 28.3441H184.972L189.113 5.77326Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" />\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t\t<defs>\r\n\t\t\t\t\t\t\t\t<clipPath id=\"clip0_1_912\">\r\n\t\t\t\t\t\t\t\t\t<rect width=\"202\" height=\"28.9533\" fill=\"white\" />\r\n\t\t\t\t\t\t\t\t</clipPath>\r\n\t\t\t\t\t\t\t</defs>\r\n\t\t\t\t\t\t</svg>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"slide_block\">\r\n\t\t\t\t\t\t<svg width=\"175\" height=\"48\" viewBox=\"0 0 175 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\td=\"M99.1375 15.925C99.1375 10.85 99.225 6.125 99.4875 1.75L86.1 4.2875V5.5125L87.4125 5.6875C88.375 5.775 88.9875 6.125 89.3375 6.65C89.6875 7.2625 89.95 8.1375 90.125 9.45C90.3 11.9875 90.475 17.7625 90.3875 26.8625C90.3875 35.875 90.3 41.5625 90.125 43.75C94.9375 44.8 98.7 45.2375 101.5 45.2375C106.75 45.2375 110.863 43.75 113.838 40.6875C116.813 37.7125 118.388 33.5125 118.388 28.35C118.388 24.2375 117.25 20.825 114.975 18.1125C112.7 15.4 109.812 14.0875 106.4 14.0875C104.125 14.0875 101.763 14.7 99.1375 15.925ZM99.4 42.875C99.225 40.075 99.05 31.675 99.05 17.9375C99.8375 17.675 100.888 17.5 102.2 17.5C104.3 17.5 105.963 18.55 107.188 20.7375C108.412 22.925 109.025 25.55 109.025 28.875C109.025 32.9875 108.325 36.3125 106.925 39.1125C105.525 41.825 103.775 43.225 101.588 43.225C100.887 43.05 100.188 42.9625 99.4 42.875ZM35.875 2.625H0.875V4.375L2.7125 4.55C4.1125 4.8125 5.075 5.3375 5.6875 6.125C6.3 7 6.65 8.4 6.7375 10.325C7.4375 19.775 7.4375 28.6125 6.7375 36.75C6.5625 38.675 6.2125 40.075 5.6875 40.95C5.075 41.825 4.1125 42.35 2.7125 42.525L0.875 42.7875V44.5375H23.45V42.7875L21.0875 42.6125C19.6875 42.4375 18.725 41.825 18.1125 41.0375C17.5 40.1625 17.15 38.7625 17.0625 36.8375C16.8 33.3375 16.625 29.3125 16.625 24.85L21.35 24.9375C23.8875 25.025 25.6375 26.95 26.5125 30.8H28.2625V16.5375H26.5125C25.6375 20.3 23.975 22.225 21.35 22.3125L16.625 22.4C16.625 14.525 16.8 8.925 17.0625 5.5125H23.975C28.875 5.5125 32.2 8.6625 34.125 14.9625L36.225 14.35L35.875 2.625ZM31.7625 29.575C31.7625 34.125 33.075 37.8875 35.6125 40.8625C38.15 43.8375 41.9125 45.2375 46.6375 45.2375C51.3625 45.2375 55.2125 43.75 58.0125 40.6875C60.8125 37.7125 62.125 33.95 62.125 29.4C62.125 24.85 60.8125 21.0875 58.275 18.1125C55.7375 15.1375 51.975 13.7375 47.25 13.7375C42.525 13.7375 38.675 15.225 35.875 18.2875C33.075 21.2625 31.7625 25.025 31.7625 29.575ZM51.275 19.6C52.325 22.1375 52.7625 25.4625 52.7625 29.4875C52.7625 38.7625 50.8375 43.3125 47.075 43.3125C45.15 43.3125 43.6625 42 42.6125 39.375C41.5625 36.75 41.125 33.425 41.125 29.4875C41.125 20.3 43.05 15.75 46.8125 15.75C48.7375 15.6625 50.225 16.975 51.275 19.6ZM125.213 40.8625C128.1 43.75 131.775 45.2375 136.15 45.2375C138.863 45.2375 141.225 44.7125 143.325 43.575C145.425 42.525 147.087 41.2125 148.225 39.6375L147.35 38.5875C145.425 40.075 143.238 40.775 140.7 40.775C137.2 40.775 134.488 39.6375 132.65 37.275C130.725 34.9125 129.85 31.9375 130.025 28.0875H148.75C148.75 23.8875 147.7 20.475 145.512 17.7625C143.325 15.1375 140.262 13.825 136.325 13.825C131.425 13.825 127.663 15.4 124.95 18.4625C122.238 21.525 120.925 25.2875 120.925 29.75C120.925 34.3 122.325 37.975 125.213 40.8625ZM131.688 18.9C132.65 16.8 133.875 15.75 135.537 15.75C138.162 15.75 139.475 19.075 139.475 25.8125L130.2 25.9875C130.288 23.3625 130.725 21 131.688 18.9ZM172.287 15.4C169.925 14.35 166.95 13.7375 163.363 13.7375C159.688 13.7375 156.8 14.7 154.613 16.5375C152.425 18.375 151.287 20.65 151.287 23.3625C151.287 25.725 151.988 27.5625 153.3 28.875C154.613 30.1875 156.712 31.325 159.425 32.2875C161.875 33.1625 163.625 34.0375 164.5 34.825C165.375 35.7 165.9 36.6625 165.9 37.975C165.9 39.2 165.462 40.3375 164.5 41.2125C163.625 42.175 162.4 42.6125 160.825 42.6125C156.975 42.6125 154.088 39.8125 152.075 34.2125L150.588 34.65L150.938 43.4C154.087 44.625 157.587 45.2375 161.438 45.2375C165.462 45.2375 168.525 44.3625 170.8 42.525C173.075 40.775 174.213 38.2375 174.213 35.0875C174.213 32.9875 173.688 31.2375 172.55 29.925C171.412 28.6125 169.575 27.475 166.95 26.425C164.062 25.375 162.05 24.4125 161 23.5375C159.95 22.6625 159.425 21.6125 159.425 20.3C159.425 18.9875 159.775 17.9375 160.562 17.0625C161.35 16.1875 162.312 15.8375 163.537 15.8375C167.037 15.8375 169.575 18.375 171.15 23.3625L172.637 22.925L172.287 15.4ZM88.1125 14.6125C86.8875 14 85.575 13.7375 84.0875 13.7375C82.6 13.7375 81.1125 14.35 79.45 15.575C77.7875 16.8 76.5625 18.4625 75.6 20.7375L75.6875 13.7375L62.3875 16.3625V17.5875L63.7 17.675C65.3625 17.85 66.325 19.1625 66.5 21.525C67.025 26.95 67.025 32.725 66.5 38.85C66.325 41.2125 65.3625 42.4375 63.7 42.7L62.3875 42.875V44.5375H80.9375V42.875L78.575 42.7C76.9125 42.525 75.95 41.2125 75.775 38.85C75.25 33.775 75.1625 28.35 75.6 22.75C76.125 21.875 77.2625 21.35 79.0125 21.175C80.7625 21 82.775 21.525 84.875 22.75L88.1125 14.6125Z\"\r\n\t\t\t\t\t\t\t\tfill=\"#263238\" />\r\n\t\t\t\t\t\t</svg>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"slide_block\">\r\n\t\t\t\t\t\t<svg width=\"175\" height=\"55\" viewBox=\"0 0 175 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t<g clip-path=\"url(#clip0_1_909)\">\r\n\t\t\t\t\t\t\t\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n\t\t\t\t\t\t\t\t\td=\"M13.565 54.3689H17.6359V32.6214H13.565V54.3689ZM28.4876 54.0427H32.1337V40.3214L47.4811 54.3689V32.9476H43.8451V46.4345L28.4876 32.6214V54.0427ZM55.8046 48.7757C57.7891 50.3218 60.1711 51.2155 62.7248 51.2155C65.2121 51.2155 66.957 50.3592 66.957 48.4682C66.957 46.8201 65.8442 46.1745 63.8954 45.4524L60.7403 44.3566C57.8316 43.3235 55.6194 41.8148 55.6194 38.3471C55.6194 34.6381 58.9682 32.6214 62.9728 32.6214C65.4262 32.6214 67.6621 33.2381 69.4087 34.3306V38.009C67.5925 36.6667 65.6046 35.7425 63.051 35.7425C60.8524 35.7425 59.2095 36.5631 59.2095 38.274C59.2095 39.8201 60.2408 40.4386 62.057 41.0604L65.5723 42.2939C68.9789 43.4917 70.542 45.3488 70.542 48.4036C70.542 52.2468 67.1609 54.3689 62.7248 54.3689C59.8092 54.3689 57.3303 53.5534 55.8046 52.5238V48.7757ZM80.0396 54.3689H84.1087V32.6214H80.0396V54.3689ZM103.199 51.0779C107.786 51.0779 110.238 48.1352 110.238 43.49C110.238 38.8109 107.785 35.8784 103.199 35.8784H98.6626V51.0779H103.199ZM94.9587 32.6214H103.335C109.783 32.6214 113.952 36.8689 113.952 43.49C113.952 50.1163 109.783 54.3689 103.335 54.3689H94.9587V32.6214ZM134.303 32.6214V35.8784H124.454V41.1114H133.287V44.3311H124.452V51.0779H134.303V54.3689H120.736V32.6214H134.303ZM148.748 42.4689H152.787C155.177 42.4689 156.525 41.1573 156.525 39.1405C156.525 37.1238 155.177 35.8104 152.787 35.8104H148.748V42.4706V42.4689ZM148.748 45.5442V54.3689H145.155V32.6214H152.855C157.245 32.6214 160.086 34.8828 160.086 39.1405C160.086 42.7816 158.509 44.8731 155.15 45.41L162.791 54.3689H158.703L151.305 45.5459H148.75L148.748 45.5442ZM12.143 11.1966C13.735 10.6138 14.9752 8.86553 14.9752 6.46141C14.9752 2.4551 12.143 0.378883 7.61165 0.378883H0V22.7432H8.31845C12.8498 22.7432 15.682 20.5209 15.682 16.3328C15.682 13.9643 14.1954 11.8881 12.143 11.1966ZM3.57476 9.77621V3.65801H7.57767C10.0922 3.65801 11.4362 4.56869 11.4362 6.68058C11.4362 8.79248 10.0905 9.77621 7.57767 9.77621H3.57476ZM3.57476 12.9092H8.24709C10.7277 12.9092 12.0716 14.1461 12.0716 16.1867C12.0716 18.1898 10.726 19.4658 8.24879 19.4658H3.57646V12.9075L3.57476 12.9092ZM32.29 23.1068C37.4942 23.1068 40.9993 19.9738 40.9993 13.8556V0.378883H37.3175V13.4172C37.3175 17.7158 35.5471 19.7206 32.29 19.7206C29.033 19.7206 27.2643 17.7158 27.2643 13.4172V0.378883H23.5825V13.8182C23.5825 19.9738 27.1216 23.1068 32.29 23.1068ZM49.6677 21.1393C51.19 22.2335 53.6689 23.1068 56.5709 23.1068C60.9968 23.1068 64.3592 20.8471 64.3592 16.7694C64.3592 13.5277 62.8029 11.5602 59.4032 10.2859L55.8998 8.97427C54.0937 8.32015 53.0675 7.66432 53.0675 6.02476C53.0675 4.2034 54.6951 3.3301 56.8903 3.3301C59.4388 3.3301 61.4216 4.31214 63.2277 5.73422V1.83495C61.493 0.671117 59.2621 0.0152913 56.8189 0.0152913C52.8194 0.0152913 49.491 2.16456 49.491 6.09782C49.491 9.77621 51.6862 11.3784 54.5881 12.4709L57.7398 13.6364C59.6869 14.401 60.7845 15.0942 60.7845 16.8425C60.7845 18.8456 59.0498 19.7563 56.5709 19.7563C54.0223 19.7563 51.6505 18.8083 49.6677 17.1704V21.1393ZM77.5148 0.378883H73.8347V22.7415H77.5148V0.378883ZM88.0182 22.7143H91.5658V8.16553L106.497 23.0609V0.344903H102.959V14.6456L88.0182 0V22.7143ZM129.503 0.383981V3.73277H119.945V9.11529H128.516V12.4267H119.945V19.3638H129.503V22.7483H116.336V0.383981H129.503ZM138.075 21.124C139.597 22.2182 142.075 23.0915 144.978 23.0915C149.402 23.0915 152.767 20.8335 152.767 16.7541C152.767 13.5124 151.208 11.5466 147.81 10.2706L144.305 8.96068C142.499 8.30485 141.473 7.64903 141.473 6.00947C141.473 4.18811 143.101 3.31481 145.296 3.31481C147.844 3.31481 149.827 4.29854 151.633 5.71893V1.82136C149.899 0.655825 147.668 0 145.225 0C141.225 0 137.897 2.14927 137.897 6.08252C137.897 9.76092 140.092 11.3631 142.994 12.4556L146.145 13.6211C148.092 14.3857 149.19 15.0789 149.19 16.8272C149.19 18.8303 147.457 19.741 144.976 19.741C142.428 19.741 140.056 18.7947 138.075 17.1551V21.124ZM160.308 21.124C161.831 22.2182 164.31 23.0915 167.212 23.0915C171.638 23.0915 175 20.8335 175 16.7541C175 13.5124 173.442 11.5466 170.044 10.2706L166.539 8.96068C164.734 8.30485 163.707 7.64903 163.707 6.00947C163.707 4.18811 165.336 3.31481 167.529 3.31481C170.078 3.31481 172.062 4.29854 173.867 5.71893V1.82136C172.134 0.655825 169.903 0 167.46 0C163.458 0 160.132 2.14927 160.132 6.08252C160.132 9.76092 162.327 11.3631 165.229 12.4556L168.381 13.6211C170.328 14.3857 171.425 15.0789 171.425 16.8272C171.425 18.8303 169.691 19.741 167.212 19.741C164.663 19.741 162.291 18.7947 160.308 17.1551V21.124Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" />\r\n\t\t\t\t\t\t\t</g>\r\n\t\t\t\t\t\t\t<defs>\r\n\t\t\t\t\t\t\t\t<clipPath id=\"clip0_1_909\">\r\n\t\t\t\t\t\t\t\t\t<rect width=\"175\" height=\"54.3689\" fill=\"white\" />\r\n\t\t\t\t\t\t\t\t</clipPath>\r\n\t\t\t\t\t\t\t</defs>\r\n\t\t\t\t\t\t</svg>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"slide_block\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"icon\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"slide_block\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"icon\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"how_block_wrapper\">\r\n\t\t\t\t\t<section class=\"how_content\">\r\n\t\t\t\t\t\t<h1 class=\"how_content_title\">How <span class=\"bounce-top\">FarmVest</span> Works</h1>\r\n\t\t\t\t\t\t<div class=\"how_content_text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,\r\n\t\t\t\t\t\t\tmollis\r\n\t\t\t\t\t\t\taenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor\r\n\t\t\t\t\t\t\tsit\r\n\t\t\t\t\t\t\tamet, consectetur </div>\r\n\t\t\t\t\t\t<div class=\"how_content_blocks\">\r\n\t\t\t\t\t\t\t<div class=\"how_content_block\">\r\n\t\t\t\t\t\t\t\t<div class=\"how_content_block_circle\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"icon\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<section class=\"how_content_block_content\">\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"how_content_block_content_title\">Download FarmVest</h2>\r\n\t\t\t\t\t\t\t\t\t<div class=\"how_content_block_content_text\">Start by downloading FarmVest app\r\n\t\t\t\t\t\t\t\t\t\ton your Android or IOS</div>\r\n\t\t\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"how_content_block\">\r\n\t\t\t\t\t\t\t\t<div class=\"how_content_block_circle\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"icon\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<section class=\"how_content_block_content\">\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"how_content_block_content_title\">Create account</h2>\r\n\t\t\t\t\t\t\t\t\t<div class=\"how_content_block_content_text\">Start by downloading FarmVest app\r\n\t\t\t\t\t\t\t\t\t\ton your Android or IOS</div>\r\n\t\t\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"how_content_block\">\r\n\t\t\t\t\t\t\t\t<div class=\"how_content_block_circle\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"icon\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<section class=\"how_content_block_content\">\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"how_content_block_content_title\">Link your bank account</h2>\r\n\t\t\t\t\t\t\t\t\t<div class=\"how_content_block_content_text\">Start by downloading FarmVest app\r\n\t\t\t\t\t\t\t\t\t\ton your Android or IOS</div>\r\n\t\t\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"how_content_block\">\r\n\t\t\t\t\t\t\t\t<div class=\"how_content_block_circle\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"icon\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<section class=\"how_content_block_content\">\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"how_content_block_content_title\">Start Investing</h2>\r\n\t\t\t\t\t\t\t\t\t<div class=\"how_content_block_content_text\">Start by downloading FarmVest app\r\n\t\t\t\t\t\t\t\t\t\ton your Android or IOS</div>\r\n\t\t\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"how_image\">\r\n\t\t\t\t\t\t<img src='" + ___HTML_LOADER_REPLACEMENT_6___ + "' alt=\"men\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"your_block_wrapper\">\r\n\t\t\t\t\t<div class=\"your_image\">\r\n\t\t\t\t\t\t<img src='" + ___HTML_LOADER_REPLACEMENT_7___ + "' alt=\"men\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<section class=\"your_content\">\r\n\t\t\t\t\t\t<h1 class=\"your_content_title\">Your <span>pathway</span> to Future Investment</h1>\r\n\t\t\t\t\t\t<div class=\"your_content_text\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,\r\n\t\t\t\t\t\t\tmollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum\r\n\t\t\t\t\t\t\tdolor sit amet, consectetur </div>\r\n\t\t\t\t\t\t<div class=\"your_content_blocks\">\r\n\t\t\t\t\t\t\t<div class=\"your_content_block_item\">\r\n\t\t\t\t\t\t\t\t<h1 class=\"your_content_block_link\" data-order-lin=\"close\">What is FarmVest?\r\n\t\t\t\t\t\t\t\t</h1>\r\n\t\t\t\t\t\t\t\t<div class=\"your_content_block_text OpenBlockOne\" data-order-state=\"close\">\r\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum\r\n\t\t\t\t\t\t\t\t\ttincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet,\r\n\t\t\t\t\t\t\t\t\tconsectetur\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"your_content_block_item\">\r\n\t\t\t\t\t\t\t\t<h1 class=\"your_content_block_link\" data-order-lin=\"close\">How safe is\r\n\t\t\t\t\t\t\t\t\tFarmVest</h1>\r\n\t\t\t\t\t\t\t\t<div class=\"your_content_block_text OpenBlockTwo\" data-order-state=\"close\">\r\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum\r\n\t\t\t\t\t\t\t\t\ttincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet,\r\n\t\t\t\t\t\t\t\t\tconsectetur\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"your_content_block_item\">\r\n\t\t\t\t\t\t\t\t<h1 class=\"your_content_block_link\" data-order-lin=\"close\">What do I gain\r\n\t\t\t\t\t\t\t\t\tfrom using FarmVest?</h1>\r\n\t\t\t\t\t\t\t\t<div class=\"your_content_block_text OpenBlockThree\" data-order-state=\"close\">\r\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum\r\n\t\t\t\t\t\t\t\t\ttincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet,\r\n\t\t\t\t\t\t\t\t\tconsectetur\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</section>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"why_block_wrapper\">\r\n\t\t\t\t\t<section class=\"why_content\">\r\n\t\t\t\t\t\t<h1 class=\"why_content_title\">Why choose <span>FarmVest</span> </h1>\r\n\t\t\t\t\t\t<div class=\"why_content_text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,\r\n\t\t\t\t\t\t\tmollis\r\n\t\t\t\t\t\t\taenean sit dictum tincidunt. Ut arcu, suscipit ac </div>\r\n\t\t\t\t\t\t<div class=\"why_content_blocks _anim-items\">\r\n\t\t\t\t\t\t\t<div class=\"why_content_block _anim-show\">\r\n\t\t\t\t\t\t\t\t<div class=\"why_content_block_circle\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"icon\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"why_content_block_content_text\">Real-time Checkup</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"why_content_block _anim-show\">\r\n\t\t\t\t\t\t\t\t<div class=\"why_content_block_circle\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"icon\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"why_content_block_content_text\">Flexibility in Investment</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"why_content_block _anim-show\">\r\n\t\t\t\t\t\t\t\t<div class=\"why_content_block_circle\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"icon\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"why_content_block_content_text\">Encrypted and Secured</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"why_content_block _anim-show\">\r\n\t\t\t\t\t\t\t\t<div class=\"why_content_block_circle\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"icon\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"why_content_block_content_text\">Withdraw Anytime</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<button class=\"why_content_button\">Learn More</button>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"why_image\">\r\n\t\t\t\t\t\t<img src='" + ___HTML_LOADER_REPLACEMENT_12___ + "' alt=\"woman\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"what_block_wrapper\">\r\n\t\t\t\t\t<section class=\"what_content\">\r\n\t\t\t\t\t\t<h1 class=\"what_content_title\">What <span>Customers</span> have to say </h1>\r\n\t\t\t\t\t\t<div class=\"what_content_text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,\r\n\t\t\t\t\t\t\tmollis\r\n\t\t\t\t\t\t\taenean sit dictum tincidunt. Ut arcu, suscipit ac </div>\r\n\t\t\t\t\t\t<div class=\"what_content_blocks\">\r\n\t\t\t\t\t\t\t<div class=\"what_content_block\">\r\n\t\t\t\t\t\t\t\t<div class=\"what_content_block_img\">\r\n\t\t\t\t\t\t\t\t\t<img src='" + ___HTML_LOADER_REPLACEMENT_13___ + "' alt=\"icon\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"what_content_block_content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"what_content_block_text\">Lorem ipsum dolor sit amet, consectetur adipiscing\r\n\t\t\t\t\t\t\t\t\t\telit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac</div>\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"what_content_block_name\">Tonia Smart</h2>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"what_content_block\">\r\n\t\t\t\t\t\t\t\t<div class=\"what_content_block_img\">\r\n\t\t\t\t\t\t\t\t\t<img src='" + ___HTML_LOADER_REPLACEMENT_14___ + "' alt=\"icon\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"what_content_block_content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"what_content_block_text\">Lorem ipsum dolor sit amet, consectetur adipiscing\r\n\t\t\t\t\t\t\t\t\t\telit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac</div>\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"what_content_block_name\">Grace Obi</h2>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"what_content_block\">\r\n\t\t\t\t\t\t\t\t<div class=\"what_content_block_img\">\r\n\t\t\t\t\t\t\t\t\t<img src='" + ___HTML_LOADER_REPLACEMENT_14___ + "' alt=\"icon\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"what_content_block_content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"what_content_block_text\">Lorem ipsum dolor sit amet, consectetur adipiscing\r\n\t\t\t\t\t\t\t\t\t\telit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac</div>\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"what_content_block_name\">Grace Obi</h2>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"what_content_block\">\r\n\t\t\t\t\t\t\t\t<div class=\"what_content_block_img\">\r\n\t\t\t\t\t\t\t\t\t<img src='" + ___HTML_LOADER_REPLACEMENT_14___ + "' alt=\"icon\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"what_content_block_content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"what_content_block_text\">Lorem ipsum dolor sit amet, consectetur adipiscing\r\n\t\t\t\t\t\t\t\t\t\telit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac</div>\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"what_content_block_name\">Grace Obi</h2>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<a class=\"what_content_button\">View All</a>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"download_block_wrapper\">\r\n\t\t\t\t\t<div class=\"download_content\">\r\n\t\t\t\t\t\t<h1 class=\"download_content_title\">Download <span>FarmVest app </span>\r\n\t\t\t\t\t\t\tand invest in your future</h1>\r\n\t\t\t\t\t\t<div class=\"download_content_stores\">\r\n\t\t\t\t\t\t\t<div class=\"download_content_stores_store StoreOne\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"download_content_link\">\r\n\t\t\t\t\t\t\t\t\t<img src='" + ___HTML_LOADER_REPLACEMENT_15___ + "' alt=\"app\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"download_content_stores_store StoreTwo\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"download_content_link\">\r\n\t\t\t\t\t\t\t\t\t<img src='" + ___HTML_LOADER_REPLACEMENT_16___ + "' alt=\"googl\" />\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</main>\r\n\t\t<footer class=\"footer\">\r\n\t\t\t<div class=\"footer_container-big\">\r\n\t\t\t\t<div class=\"footer_header\">\r\n\r\n\t\t\t\t\t<div class=\"footer_header_logo\">\r\n\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<svg width=\"143\" height=\"25\" viewBox=\"0 0 143 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t\t<line x1=\"2\" y1=\"4.5\" x2=\"2\" y2=\"20.5\" stroke=\"#263238\" stroke-width=\"4\"\r\n\t\t\t\t\t\t\t\t\tstroke-linecap=\"round\" />\r\n\t\t\t\t\t\t\t\t<line x1=\"12\" y1=\"6.5\" x2=\"12\" y2=\"18.5\" stroke=\"#263238\" stroke-width=\"4\"\r\n\t\t\t\t\t\t\t\t\tstroke-linecap=\"round\" />\r\n\t\t\t\t\t\t\t\t<line x1=\"22\" y1=\"8.5\" x2=\"22\" y2=\"16.5\" stroke=\"#263238\" stroke-width=\"4\"\r\n\t\t\t\t\t\t\t\t\tstroke-linecap=\"round\" />\r\n\t\t\t\t\t\t\t\t<path\r\n\t\t\t\t\t\t\t\t\td=\"M32.816 19V0.849999H42.298V2.819H34.334L35.049 2.236V9.914L34.334 8.924H41.803V10.882H34.334L35.049 9.892V19H32.816ZM50.027 19.352C48.9784 19.352 48.0287 19.0953 47.178 18.582C46.3347 18.0613 45.6637 17.35 45.165 16.448C44.6737 15.546 44.428 14.5157 44.428 13.357C44.428 12.213 44.67 11.1937 45.154 10.299C45.638 9.397 46.3017 8.68567 47.145 8.165C47.9884 7.64433 48.949 7.384 50.027 7.384C50.9804 7.384 51.8494 7.59667 52.634 8.022C53.426 8.44733 54.0384 9.03767 54.471 9.793V7.736H56.605V19H54.471V16.888C53.9797 17.6653 53.349 18.2703 52.579 18.703C51.809 19.1357 50.9584 19.352 50.027 19.352ZM50.599 17.515C51.369 17.515 52.0474 17.339 52.634 16.987C53.228 16.6277 53.6937 16.1363 54.031 15.513C54.3684 14.8897 54.537 14.1747 54.537 13.368C54.537 12.5613 54.3684 11.8463 54.031 11.223C53.6937 10.5997 53.228 10.112 52.634 9.76C52.0474 9.40067 51.369 9.221 50.599 9.221C49.8364 9.221 49.158 9.40067 48.564 9.76C47.97 10.112 47.5007 10.5997 47.156 11.223C46.8187 11.8463 46.65 12.5613 46.65 13.368C46.65 14.1673 46.8187 14.8823 47.156 15.513C47.5007 16.1363 47.97 16.6277 48.564 16.987C49.158 17.339 49.8364 17.515 50.599 17.515ZM61.1085 19V7.736H63.2425V9.386C63.6165 8.73333 64.0932 8.23833 64.6725 7.901C65.2518 7.55633 65.9082 7.384 66.6415 7.384C66.9935 7.384 67.3492 7.428 67.7085 7.516C68.0752 7.59667 68.3905 7.70667 68.6545 7.846L67.7745 9.65C67.5472 9.52533 67.2832 9.42633 66.9825 9.353C66.6818 9.27967 66.3995 9.243 66.1355 9.243C65.6442 9.243 65.1748 9.37133 64.7275 9.628C64.2875 9.87733 63.9282 10.2037 63.6495 10.607C63.3782 11.0103 63.2425 11.443 63.2425 11.905V19H61.1085ZM71.2921 19V7.736H73.4261V9.188C73.9028 8.58667 74.4418 8.13567 75.0431 7.835C75.6444 7.53433 76.3118 7.384 77.0451 7.384C77.9544 7.384 78.7538 7.593 79.4431 8.011C80.1324 8.42167 80.6128 8.98267 80.8841 9.694C81.3534 8.97533 81.9181 8.41067 82.5781 8C83.2381 7.58933 84.0118 7.384 84.8991 7.384C85.7058 7.384 86.4208 7.549 87.0441 7.879C87.6674 8.209 88.1588 8.68567 88.5181 9.309C88.8774 9.93233 89.0571 10.6877 89.0571 11.575V19H86.9231V12.169C86.9231 11.2303 86.6774 10.486 86.1861 9.936C85.6948 9.386 85.0421 9.111 84.2281 9.111C83.6634 9.111 83.1538 9.23567 82.6991 9.485C82.2518 9.727 81.8961 10.046 81.6321 10.442C81.3754 10.8307 81.2471 11.2413 81.2471 11.674V19H79.1131V12.026C79.1131 11.1387 78.8711 10.431 78.3871 9.903C77.9031 9.375 77.2578 9.111 76.4511 9.111C75.8864 9.111 75.3731 9.232 74.9111 9.474C74.4564 9.70867 74.0934 10.0167 73.8221 10.398C73.5581 10.7793 73.4261 11.179 73.4261 11.597V19H71.2921ZM99.615 19L92.003 0.849999H94.533L100.495 15.634L106.457 0.849999H108.976L101.364 19H99.615ZM115.879 19.352C114.698 19.352 113.638 19.0917 112.7 18.571C111.761 18.0503 111.02 17.3427 110.478 16.448C109.935 15.546 109.664 14.5303 109.664 13.401C109.664 12.565 109.818 11.784 110.126 11.058C110.434 10.332 110.863 9.694 111.413 9.144C111.963 8.58667 112.601 8.154 113.327 7.846C114.053 7.538 114.83 7.384 115.659 7.384C116.832 7.384 117.859 7.626 118.739 8.11C119.626 8.594 120.315 9.26867 120.807 10.134C121.305 10.9993 121.555 12.004 121.555 13.148C121.555 13.2433 121.551 13.3203 121.544 13.379C121.536 13.4377 121.522 13.5147 121.5 13.61H111.82C111.82 14.3947 111.996 15.0877 112.348 15.689C112.707 16.2903 113.198 16.7633 113.822 17.108C114.452 17.4453 115.175 17.614 115.989 17.614C116.759 17.614 117.448 17.4563 118.057 17.141C118.665 16.8257 119.193 16.3563 119.641 15.733L121.203 16.547C120.667 17.4343 119.93 18.1237 118.992 18.615C118.06 19.1063 117.023 19.352 115.879 19.352ZM111.93 12.037H119.41C119.307 11.4577 119.08 10.9517 118.728 10.519C118.383 10.079 117.947 9.738 117.419 9.496C116.898 9.24667 116.322 9.122 115.692 9.122C115.032 9.122 114.434 9.243 113.899 9.485C113.371 9.71967 112.934 10.057 112.59 10.497C112.252 10.9297 112.032 11.443 111.93 12.037ZM128.028 19.352C127.089 19.352 126.257 19.1503 125.531 18.747C124.812 18.3363 124.24 17.7533 123.815 16.998L124.838 15.678C125.226 16.3307 125.696 16.8367 126.246 17.196C126.796 17.5553 127.386 17.735 128.017 17.735C128.427 17.735 128.798 17.6543 129.128 17.493C129.465 17.3317 129.733 17.1007 129.931 16.8C130.129 16.492 130.228 16.129 130.228 15.711C130.228 15.3077 130.125 14.9923 129.92 14.765C129.722 14.5303 129.425 14.325 129.029 14.149C128.64 13.973 128.152 13.7713 127.566 13.544C127.096 13.3533 126.642 13.137 126.202 12.895C125.762 12.653 125.399 12.3487 125.113 11.982C124.834 11.608 124.695 11.135 124.695 10.563C124.695 9.947 124.86 9.40067 125.19 8.924C125.527 8.44733 125.989 8.07333 126.576 7.802C127.162 7.53067 127.83 7.395 128.578 7.395C129.186 7.395 129.777 7.516 130.349 7.758C130.921 8 131.463 8.34833 131.977 8.803L131.119 10.101C130.356 9.29433 129.513 8.891 128.589 8.891C128.031 8.891 127.58 9.034 127.236 9.32C126.891 9.59867 126.719 9.96167 126.719 10.409C126.719 10.7537 126.843 11.0433 127.093 11.278C127.342 11.5053 127.661 11.7033 128.05 11.872C128.438 12.0407 128.842 12.2057 129.26 12.367C129.89 12.6017 130.44 12.8437 130.91 13.093C131.386 13.3423 131.757 13.665 132.021 14.061C132.285 14.4497 132.417 14.974 132.417 15.634C132.417 16.404 132.233 17.0677 131.867 17.625C131.507 18.1823 130.998 18.6113 130.338 18.912C129.678 19.2053 128.908 19.352 128.028 19.352ZM138.977 19.352C138.053 19.352 137.334 19.0477 136.821 18.439C136.307 17.823 136.051 16.9613 136.051 15.854V9.353H134.797V7.736H136.051V3.523H138.185V7.736H140.891V9.353H138.185V15.722C138.185 16.2793 138.295 16.7083 138.515 17.009C138.735 17.3097 139.05 17.46 139.461 17.46C139.871 17.46 140.238 17.339 140.561 17.097L141.1 18.802C140.814 18.9707 140.48 19.1027 140.099 19.198C139.725 19.3007 139.351 19.352 138.977 19.352Z\"\r\n\t\t\t\t\t\t\t\t\tfill=\"#263238\" />\r\n\t\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<div class=\"footer_header_logo_text\">High level experience in web design and development\r\n\t\t\t\t\t\t\tknowledge,\r\n\t\t\t\t\t\t\tproducing quality work.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"footer_header_form_wrapper\">\r\n\t\t\t\t\t\t<div class=\"footer_header_form_wrapper_text\">Subscribe to stay tuned for new web design and latest\r\n\t\t\t\t\t\t\tupdates. Let's do it!</div>\r\n\t\t\t\t\t\t<div class=\"footer_header_form_block form\">\r\n\t\t\t\t\t\t\t<form action=\"#\" class=\"footer_header_form\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"footer_header_form_input\" placeholder=\"Enter your email\" />\r\n\t\t\t\t\t\t\t\t<button class=\"footer_header_form_button\">Subscribe</button>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"footer_header_social_phone\">\r\n\t\t\t\t\t\t<div class=\"footer_header_social\">\r\n\t\t\t\t\t\t\t<h4 class=\"footer_header_social_title\">Follow us</h4>\r\n\t\t\t\t\t\t\t<div class=\"footer_header_social_icons\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"svgfooter\"><i class=\"fa-brands fa-facebook fa-2xl\"></i></div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"svgfooter\"><i class=\"fa-brands fa-twitter fa-2xl\"></i></div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"svgfooter\"><i class=\"fa-brands fa-instagram fa-2xl\"></i></div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"footer_header_phone\">\r\n\t\t\t\t\t\t\t<h4 class=\"footer_header_phone_title\">Call us</h4>\r\n\t\t\t\t\t\t\t<a href=\"tel:+2349123456789\">\r\n\t\t\t\t\t\t\t\t<div class=\"footer_header_phone_number\">+2349123456789</div>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"footer_bottom\">\r\n\t\t\t\t\t<h6 class=\"footer_bottom_date\">© 2021 All Rights Reserved</h6>\r\n\t\t\t\t\t<nav class=\"footer_bottom_menu\">\r\n\t\t\t\t\t\t<ul class=\"footer_bottom_list\">\r\n\t\t\t\t\t\t\t<li class=\"footer_bottom_item\"><a href=\"#\" class=\"footer_bottom_link\">Privacy Policy</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"footer_bottom_item\"><a href=\"#\" class=\"footer_bottom_link\">Terms of Use</a></li>\r\n\t\t\t\t\t\t\t<li class=\"footer_bottom_item\"><a href=\"#\" class=\"footer_bottom_link\">Sales and Refunds</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"footer_bottom_item\"><a href=\"#\" class=\"footer_bottom_link\">Legal</a></li>\r\n\t\t\t\t\t\t\t<li class=\"footer_bottom_item\"><a href=\"#\" class=\"footer_bottom_link\">Site Map</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</nav>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</footer>\r\n\t</div>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/1.svg":
/*!***********************!*\
  !*** ./src/img/1.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4f67f1f4150703ca94af.svg";

/***/ }),

/***/ "./src/img/2.svg":
/*!***********************!*\
  !*** ./src/img/2.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/eca60578ef5c1ad6ae82.svg";

/***/ }),

/***/ "./src/img/3.svg":
/*!***********************!*\
  !*** ./src/img/3.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/15655bf1ac68e876e5db.svg";

/***/ }),

/***/ "./src/img/4.svg":
/*!***********************!*\
  !*** ./src/img/4.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2685c813e5d1982ab765.svg";

/***/ }),

/***/ "./src/img/Fidelity.svg":
/*!******************************!*\
  !*** ./src/img/Fidelity.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b2cde21574b8832335eb.svg";

/***/ }),

/***/ "./src/img/Goolstore.png":
/*!*******************************!*\
  !*** ./src/img/Goolstore.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cfae286317615929cf30.png";

/***/ }),

/***/ "./src/img/How1.svg":
/*!**************************!*\
  !*** ./src/img/How1.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a24a30ccbac81ea87c58.svg";

/***/ }),

/***/ "./src/img/How2.svg":
/*!**************************!*\
  !*** ./src/img/How2.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9a2ca50e342172572108.svg";

/***/ }),

/***/ "./src/img/How3.svg":
/*!**************************!*\
  !*** ./src/img/How3.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/45e67c97b90243e2f411.svg";

/***/ }),

/***/ "./src/img/How4.svg":
/*!**************************!*\
  !*** ./src/img/How4.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/45db4c710468998ff6c7.svg";

/***/ }),

/***/ "./src/img/Obi.jpg":
/*!*************************!*\
  !*** ./src/img/Obi.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/46e8c46f9ab2b6286503.jpg";

/***/ }),

/***/ "./src/img/Tonia.jpg":
/*!***************************!*\
  !*** ./src/img/Tonia.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c581ab5b1606f4a238b0.jpg";

/***/ }),

/***/ "./src/img/WIRED.svg":
/*!***************************!*\
  !*** ./src/img/WIRED.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/16fbd7b375c17ad941f1.svg";

/***/ }),

/***/ "./src/img/appstore.png":
/*!******************************!*\
  !*** ./src/img/appstore.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8efe3230c7b11663495c.png";

/***/ }),

/***/ "./src/img/close.svg":
/*!***************************!*\
  !*** ./src/img/close.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/7c28ba4bedb5cae2344e.svg";

/***/ }),

/***/ "./src/img/down.svg":
/*!**************************!*\
  !*** ./src/img/down.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/28734f8dc24408b5e864.svg";

/***/ }),

/***/ "./src/img/person.jpg":
/*!****************************!*\
  !*** ./src/img/person.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/13fdabd7738215984ade.jpg";

/***/ }),

/***/ "./src/img/person2.jpg":
/*!*****************************!*\
  !*** ./src/img/person2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8e14733b89ce68d96886.jpg";

/***/ }),

/***/ "./src/img/person3.jpg":
/*!*****************************!*\
  !*** ./src/img/person3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1889a6a8db540ae8e627.jpg";

/***/ }),

/***/ "./src/fonts/Lato-Light.ttf":
/*!**********************************!*\
  !*** ./src/fonts/Lato-Light.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Lato-Light.ttf";

/***/ }),

/***/ "./src/fonts/Lato-Regular.ttf":
/*!************************************!*\
  !*** ./src/fonts/Lato-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Lato-Regular.ttf";

/***/ }),

/***/ "./src/fonts/LeagueSpartan-Bold.ttf":
/*!******************************************!*\
  !*** ./src/fonts/LeagueSpartan-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/LeagueSpartan-Bold.ttf";

/***/ }),

/***/ "./src/fonts/LeagueSpartan-Light.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/LeagueSpartan-Light.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/LeagueSpartan-Light.ttf";

/***/ }),

/***/ "./src/fonts/LeagueSpartan-Medium.ttf":
/*!********************************************!*\
  !*** ./src/fonts/LeagueSpartan-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/LeagueSpartan-Medium.ttf";

/***/ }),

/***/ "./src/fonts/LeagueSpartan-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/LeagueSpartan-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/LeagueSpartan-Regular.ttf";

/***/ }),

/***/ "./src/fonts/LeagueSpartan-SemiBold.ttf":
/*!**********************************************!*\
  !*** ./src/fonts/LeagueSpartan-SemiBold.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/LeagueSpartan-SemiBold.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/


__webpack_require__(/*! ./noConflict */ "./node_modules/@babel/polyfill/lib/noConflict.js");

var _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ "./node_modules/core-js/library/fn/global.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/index */ "./src/modules/index.js");
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_index__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=main.e744697fcde3483ed79c.js.map