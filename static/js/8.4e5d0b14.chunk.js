(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"CContent",function(){return u});var r=n(24),o=n(89),i=Object.freeze({scania:":host {\n  display: flex;\n  flex-direction: column;\n  background-color: #fff; }\n\n::slotted(section) {\n  padding-top: 4rem;\n  padding-bottom: 4rem; }\n",scania_ie:"c-content.sc-c-content-h {\n  display: flex;\n  flex-direction: column;\n  background-color: #fff; }\n\n.sc-c-content-s.sc-c-content section {\n  padding-top: 4rem;\n  padding-bottom: 4rem; }\n"}),u=function(){function e(){this.currentTheme=this.theme||o.a.getState().theme.name}return e.prototype.updateTheme=function(e){this.currentTheme=e},e.prototype.componentWillLoad=function(){var e=this;o.a.subscribe(function(){return e.currentTheme=o.a.getState().theme.name})},e.prototype.render=function(){return document.head.attachShadow||(this.currentTheme+="_ie"),[this.currentTheme?Object(r.b)("style",null,i[this.currentTheme]):"",Object(r.b)("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"c-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{currentTheme:{state:!0},router:{type:Boolean,attr:"router"},theme:{type:String,attr:"theme",watchCallbacks:["updateTheme"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-c-content-h{display:block;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;padding-left:20px;padding-right:20px}"},enumerable:!0,configurable:!0}),e}()},89:function(e,t,n){"use strict";(function(e,r){n.d(t,"a",function(){return s}),n.d(t,"b",function(){return a});var o=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:r),i=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}var a={SET_THEME:"SET_THEME",TOGGLE_NAVIGATION:"TOGGLE_NAVIGATION",TOGGLE_SUB_NAVIGATION:"TOGGLE_SUB_NAVIGATION"};var s=function e(t,n,r){var i;if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var c=t,a=n,s=[],f=s,d=!1;function l(){f===s&&(f=s.slice())}function p(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return a}function h(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return l(),f.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,l();var n=f.indexOf(e);f.splice(n,1)}}}function b(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,a=c(a,e)}finally{d=!1}for(var t=s=f,n=0;n<t.length;n++)(0,t[n])();return e}return b({type:u.INIT}),(i={dispatch:b,subscribe:h,getState:p,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,b({type:u.REPLACE})}})[o]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(p())}return n(),{unsubscribe:t(n)}}})[o]=function(){return this},e},i}(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];"function"==typeof e[o]&&(n[o]=e[o])}var i,a=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:u.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:u.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+u.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var r=!1,o={},u=0;u<a.length;u++){var s=a[u],f=e[s],d=(0,n[s])(f,t);if(void 0===d){var l=c(s,t);throw new Error(l)}o[s]=d,r=r||d!==f}return r?o:e}}({theme:function(e,t){switch(void 0===e&&(e={name:""}),t.type){case a.SET_THEME:return Object.assign({},e,{name:t.name});default:return e}},navigation:function(e,t){switch(void 0===e&&(e={open:!0,expanded:""}),t.type){case a.TOGGLE_NAVIGATION:return Object.assign({},e,{open:t.open});case a.TOGGLE_SUB_NAVIGATION:return Object.assign({},e,{expanded:t.expanded});default:return e}}}))}).call(this,n(19),n(90)(e))},90:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}}]);
//# sourceMappingURL=8.4e5d0b14.chunk.js.map