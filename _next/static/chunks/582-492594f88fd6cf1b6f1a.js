(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[582],{7616:function(t,e,r){"use strict";r.d(e,{dF:function(){return _}});var n=r(3286),o=r(711),i=r(8794),a=r(2593);const s=new o.Yd(i.i),l={},u=a.O$.from(0),f=a.O$.from(-1);function c(t,e,r,n){const i={fault:e,operation:r};return void 0!==n&&(i.value=n),s.throwError(t,o.Yd.errors.NUMERIC_FAULT,i)}let m="0";for(;m.length<256;)m+=m;function d(t){if("number"!==typeof t)try{t=a.O$.from(t).toNumber()}catch(e){}return"number"===typeof t&&t>=0&&t<=256&&!(t%1)?"1"+m.substring(0,t):s.throwArgumentError("invalid decimal size","decimals",t)}function h(t,e){null==e&&(e=0);const r=d(e),n=(t=a.O$.from(t)).lt(u);n&&(t=t.mul(f));let o=t.mod(r).toString();for(;o.length<r.length-1;)o="0"+o;o=o.match(/^([0-9]*[1-9]|0)(0*)/)[1];const i=t.div(r).toString();return t=1===r.length?i:i+"."+o,n&&(t="-"+t),t}function g(t,e){null==e&&(e=0);const r=d(e);"string"===typeof t&&t.match(/^-?[0-9.,]+$/)||s.throwArgumentError("invalid decimal value","value",t);const n="-"===t.substring(0,1);n&&(t=t.substring(1)),"."===t&&s.throwArgumentError("missing value","value",t);const o=t.split(".");o.length>2&&s.throwArgumentError("too many decimal points","value",t);let i=o[0],l=o[1];for(i||(i="0"),l||(l="0");"0"===l[l.length-1];)l=l.substring(0,l.length-1);for(l.length>r.length-1&&c("fractional component exceeds decimals","underflow","parseFixed"),""===l&&(l="0");l.length<r.length-1;)l+="0";const u=a.O$.from(i),m=a.O$.from(l);let h=u.mul(r).add(m);return n&&(h=h.mul(f)),h}class v{constructor(t,e,r,n){t!==l&&s.throwError("cannot use FixedFormat constructor; use FixedFormat.from",o.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=e,this.width=r,this.decimals=n,this.name=(e?"":"u")+"fixed"+String(r)+"x"+String(n),this._multiplier=d(n),Object.freeze(this)}static from(t){if(t instanceof v)return t;"number"===typeof t&&(t=`fixed128x${t}`);let e=!0,r=128,n=18;if("string"===typeof t)if("fixed"===t);else if("ufixed"===t)e=!1;else{const o=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);o||s.throwArgumentError("invalid fixed format","format",t),e="u"!==o[1],r=parseInt(o[2]),n=parseInt(o[3])}else if(t){const o=(e,r,n)=>null==t[e]?n:(typeof t[e]!==r&&s.throwArgumentError("invalid fixed format ("+e+" not "+r+")","format."+e,t[e]),t[e]);e=o("signed","boolean",e),r=o("width","number",r),n=o("decimals","number",n)}return r%8&&s.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",r),n>80&&s.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",n),new v(l,e,r,n)}}class p{constructor(t,e,r,n){s.checkNew(new.target,p),t!==l&&s.throwError("cannot use FixedNumber constructor; use FixedNumber.from",o.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=n,this._hex=e,this._value=r,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&s.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);const e=g(this._value,this.format.decimals),r=g(t._value,t.format.decimals);return p.fromValue(e.add(r),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);const e=g(this._value,this.format.decimals),r=g(t._value,t.format.decimals);return p.fromValue(e.sub(r),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);const e=g(this._value,this.format.decimals),r=g(t._value,t.format.decimals);return p.fromValue(e.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);const e=g(this._value,this.format.decimals),r=g(t._value,t.format.decimals);return p.fromValue(e.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){const t=this.toString().split(".");1===t.length&&t.push("0");let e=p.from(t[0],this.format);const r=!t[1].match(/^(0*)$/);return this.isNegative()&&r&&(e=e.subUnsafe(w.toFormat(e.format))),e}ceiling(){const t=this.toString().split(".");1===t.length&&t.push("0");let e=p.from(t[0],this.format);const r=!t[1].match(/^(0*)$/);return!this.isNegative()&&r&&(e=e.addUnsafe(w.toFormat(e.format))),e}round(t){null==t&&(t=0);const e=this.toString().split(".");if(1===e.length&&e.push("0"),(t<0||t>80||t%1)&&s.throwArgumentError("invalid decimal count","decimals",t),e[1].length<=t)return this;const r=p.from("1"+m.substring(0,t),this.format),n=b.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(t){if(null==t)return this._hex;t%8&&s.throwArgumentError("invalid byte width","width",t);const e=a.O$.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return(0,n.$m)(e,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return p.fromString(this._value,t)}static fromValue(t,e,r){return null!=r||null==e||(0,a.Zm)(e)||(r=e,e=null),null==e&&(e=0),null==r&&(r="fixed"),p.fromString(h(t,e),v.from(r))}static fromString(t,e){null==e&&(e="fixed");const r=v.from(e),o=g(t,r.decimals);!r.signed&&o.lt(u)&&c("unsigned value cannot be negative","overflow","value",t);let i=null;r.signed?i=o.toTwos(r.width).toHexString():(i=o.toHexString(),i=(0,n.$m)(i,r.width/8));const a=h(o,r.decimals);return new p(l,i,a,r)}static fromBytes(t,e){null==e&&(e="fixed");const r=v.from(e);if((0,n.lE)(t).length>r.width/8)throw new Error("overflow");let o=a.O$.from(t);r.signed&&(o=o.fromTwos(r.width));const i=o.toTwos((r.signed?0:1)+r.width).toHexString(),s=h(o,r.decimals);return new p(l,i,s,r)}static from(t,e){if("string"===typeof t)return p.fromString(t,e);if((0,n._t)(t))return p.fromBytes(t,e);try{return p.fromValue(t,0,e)}catch(r){if(r.code!==o.Yd.errors.INVALID_ARGUMENT)throw r}return s.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!(!t||!t._isFixedNumber)}}const w=p.from(1),b=p.from("0.5"),x=(new o.Yd("units/5.4.0"),["wei","kwei","mwei","gwei","szabo","finney","ether"]);function _(t){return function(t,e){if("string"===typeof e){const t=x.indexOf(e);-1!==t&&(e=3*t)}return h(t,null!=e?e:18)}(t,18)}},2167:function(t,e,r){"use strict";var n=r(3848);e.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},a=r(1063),s=r(4651),l=r(7426);var u={};function f(t,e,r,n){if(t&&a.isLocalURL(e)){t.prefetch(e,r,n).catch((function(t){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:t&&t.locale;u[e+"%"+r+(o?"%"+o:"")]=!0}}var c=function(t){var e,r=!1!==t.prefetch,o=s.useRouter(),c=i.default.useMemo((function(){var e=a.resolveHref(o,t.href,!0),r=n(e,2),i=r[0],s=r[1];return{href:i,as:t.as?a.resolveHref(o,t.as):s||i}}),[o,t.href,t.as]),m=c.href,d=c.as,h=t.children,g=t.replace,v=t.shallow,p=t.scroll,w=t.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(e=i.default.Children.only(h))&&"object"===typeof e&&e.ref,x=l.useIntersection({rootMargin:"200px"}),_=n(x,2),E=_[0],y=_[1],F=i.default.useCallback((function(t){E(t),b&&("function"===typeof b?b(t):"object"===typeof b&&(b.current=t))}),[b,E]);i.default.useEffect((function(){var t=y&&r&&a.isLocalURL(m),e="undefined"!==typeof w?w:o&&o.locale,n=u[m+"%"+d+(e?"%"+e:"")];t&&!n&&f(o,m,d,{locale:e})}),[d,m,y,w,r,o]);var N={ref:F,onClick:function(t){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(t),t.defaultPrevented||function(t,e,r,n,o,i,s,l){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&a.isLocalURL(r))&&(t.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),e[o?"replace":"push"](r,n,{shallow:i,locale:l,scroll:s}))}(t,o,m,d,g,v,p,w)},onMouseEnter:function(t){a.isLocalURL(m)&&(e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(t),f(o,m,d,{priority:!0}))}};if(t.passHref||"a"===e.type&&!("href"in e.props)){var O="undefined"!==typeof w?w:o&&o.locale,S=o&&o.isLocaleDomain&&a.getDomainLocale(d,O,o&&o.locales,o&&o.domainLocales);N.href=S||a.addBasePath(a.addLocale(d,O,o&&o.defaultLocale))}return i.default.cloneElement(e,N)};e.default=c},7426:function(t,e,r){"use strict";var n=r(3848);Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootMargin,r=t.disabled||!a,l=o.useRef(),u=o.useState(!1),f=n(u,2),c=f[0],m=f[1],d=o.useCallback((function(t){l.current&&(l.current(),l.current=void 0),r||c||t&&t.tagName&&(l.current=function(t,e,r){var n=function(t){var e=t.rootMargin||"",r=s.get(e);if(r)return r;var n=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=n.get(t.target),r=t.isIntersecting||t.intersectionRatio>0;e&&r&&e(r)}))}),t);return s.set(e,r={id:e,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,a=n.elements;return a.set(t,e),i.observe(t),function(){a.delete(t),i.unobserve(t),0===a.size&&(i.disconnect(),s.delete(o))}}(t,(function(t){return t&&m(t)}),{rootMargin:e}))}),[r,e,c]);return o.useEffect((function(){if(!a&&!c){var t=i.requestIdleCallback((function(){return m(!0)}));return function(){return i.cancelIdleCallback(t)}}}),[c]),[d,c]};var o=r(7294),i=r(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},9008:function(t,e,r){t.exports=r(639)},1664:function(t,e,r){t.exports=r(2167)},1163:function(t,e,r){t.exports=r(4651)}}]);