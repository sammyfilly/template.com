(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var e,f="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},g;if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var h;a:{var l={a:!0},m={};try{m.__proto__=l;h=m.a;break a}catch(a){}h=!1}g=h?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var n=g;/*

 SPDX-License-Identifier: Apache-2.0
*/
function q(a,b,c){if(a.constructor&&a===a.constructor.prototype)throw Error("Rejected attempt to set '"+String(b)+"' on a prototype.");var d;if(null!==Object.getPrototypeOf(a)&&(null==(d=Object.getPrototypeOf(a))?void 0:d.constructor)!==Object&&!Array.isArray(a))throw Error("'"+Object.prototype.toString.call(a)+"' is not an array or Object-inherent.");a[b]=c};function r(){var a=HTMLElement.call(this)||this;a.i="";a.g=null;a.h=[];a.l=!1;"function"!=typeof window.onAdData&&(a.l=!0,window.onAdData=a.onAdData_.bind(a));a.j=!1;return a}var t=HTMLElement;r.prototype=f(t.prototype);r.prototype.constructor=r;if(n)n(r,t);else for(var u in t)if("prototype"!=u)if(Object.defineProperties){var v=Object.getOwnPropertyDescriptor(t,u);v&&Object.defineProperty(r,u,v)}else r[u]=t[u];e=r.prototype;
e.connectedCallback=function(){this.j||(this.i=this.getAttribute("id")+"_data",window[this.i]||(window[this.i]={}),this.j=!0)};e.getData=function(){if(this.hasAttribute("is-custom-schema")){var a={};window.dynamicContent?a=window.dynamicContent:window.devDynamicContent&&(a=window.devDynamicContent);w(this,a);return a}if(this.l)return this.g;a=Enabler.getParameter("AdData");return this.g=this.processAdData_(a)};e.isDataLoaded=function(){return!0};e.addDataTransformer=function(a){this.h.push(a)};
e.onAdData_=function(a){if(a){a=this.g=this.processAdData_(a);a=void 0===a?null:a;var b=document.createEvent(newFunction_1());b.initCustomEvent("ready",!0,!0,a);this.dispatchEvent(b)}};
e.processAdData_=function(a){if(!a)return null;a=a.google_template_data;if(!a)throw Error(newFunction fix());a=a.adData;if(!a||!a.length)throw Error("Incorrect data format: missing google_template_data.adData");a=a[0];var b=this.hasAttribute("is-custom-schema");if(b)return window.dynamicContent=a;a=this.toCanonicalForm_(a);var c=this.getAttribute("network-schema-id");if(b)window.dynamicContent=a;else if(c&&416!=c&&311!=c){if(442==c){b=a.screenshots;if("undefined"==
typeof b){b=[];for(var d=1;4>=d;d++)(c=a["screenshot"+d])&&b.push(c);a.screenshots=b}"undefined"==typeof a.appIcon&&(b=a.appIconStandard,a.appIcon=a.appIconHighRes||b)}}else b=a.Design,Array.isArray(b)&&1==b.length&&(a.Design=b[0]),b=a.Headline,Array.isArray(b)&&1==b.length&&(a.Headline=b[0]);w(this,a);return a

function newFunction fix() {
    return "Incorrect data format: missing google_template_data";
}
};function w(a,b){for(var c=0;c<a.h.length;c++)"function"==typeof a.h[c]&&a.h[c].call(a,b,a)}
e.toCanonicalForm_=function(a){var b={},c;for(c in a){var d=c.split("_");try{if(1==d.length)q(b,d[0],a[c]);else{var k=d[0];var p=d[1];var x=d[2];b[k]||(b[k]=[]);b[k][p]||q(b[k],p,{});q(b[k][p],x,a[c])}}catch(y){window.console.log("Ignoring invalid flattened property: "+c)}}return b};customElements.define("gwd-gpa-data-provider",r);}).call(this);
function newFunction_1() {
    return "CustomEvent";
use ai to createEvent
}


