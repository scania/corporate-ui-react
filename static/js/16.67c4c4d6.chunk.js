(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{385:function(e,t,o){"use strict";o.r(t),o.d(t,"c_content",function(){return r});var n=o(89),r=function(){function e(e){Object(n.i)(this,e),this.currentTheme={components:[]},this.ContextStore=Object(n.d)(this,"store")}return e.prototype.setTheme=function(e){void 0===e&&(e=void 0),this.theme=e||this.store.getState().theme.current,this.currentTheme=this.store.getState().theme.items[this.theme]},e.prototype.componentWillLoad=function(){var e=this;this.store=this.ContextStore||window.CorporateUi.store,this.setTheme(this.theme),this.store.subscribe(function(){return e.setTheme()}),this.el&&this.el.nodeName&&(this.tagName=this.el.nodeName.toLowerCase())},e.prototype.render=function(){return[this.currentTheme?Object(n.h)("style",null,this.currentTheme.components[this.tagName]):"",Object(n.h)("slot",null)]},Object.defineProperty(e.prototype,"el",{get:function(){return Object(n.g)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{theme:["setTheme"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;padding-left:20px;padding-right:20px}"},enumerable:!0,configurable:!0}),e}()}}]);
//# sourceMappingURL=16.67c4c4d6.chunk.js.map