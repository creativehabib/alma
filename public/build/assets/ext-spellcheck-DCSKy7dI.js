import{C as y}from"./app-DKvfoN-y.js";function E(i,p){for(var n=0;n<p.length;n++){const r=p[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in i)){const c=Object.getOwnPropertyDescriptor(r,s);c&&Object.defineProperty(i,s,c.get?c:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var h={exports:{}};(function(i,p){ace.define("ace/ext/spellcheck",["require","exports","module","ace/lib/event","ace/editor","ace/config"],function(n,r,s){var c=n("../lib/event");r.contextMenuHandler=function(f){var e=f.target,o=e.textInput.getElement();if(e.selection.isEmpty()){var d=e.getCursorPosition(),g=e.session.getWordRange(d.row,d.column),u=e.session.getTextRange(g);if(e.session.tokenRe.lastIndex=0,!!e.session.tokenRe.test(u)){var x="",l=u+" "+x;o.value=l,o.setSelectionRange(u.length,u.length+1),o.setSelectionRange(0,0),o.setSelectionRange(0,u.length);var v=!1;c.addListener(o,"keydown",function t(){c.removeListener(o,"keydown",t),v=!0}),e.textInput.setInputHandler(function(t){if(t==l)return"";if(t.lastIndexOf(l,0)===0)return t.slice(l.length);if(t.substr(o.selectionEnd)==l)return t.slice(0,-l.length);if(t.slice(-2)==x){var a=t.slice(0,-2);if(a.slice(-1)==" ")return v?a.substring(0,o.selectionEnd):(a=a.slice(0,-1),e.session.replace(g,a),"")}return t})}}};var k=n("../editor").Editor;n("../config").defineOptions(k.prototype,"editor",{spellcheck:{set:function(f){var e=this.textInput.getElement();e.spellcheck=!!f,f?this.on("nativecontextmenu",r.contextMenuHandler):this.removeListener("nativecontextmenu",r.contextMenuHandler)},value:!0}})}),function(){ace.require(["ace/ext/spellcheck"],function(n){i&&(i.exports=n)})}()})(h);var m=h.exports;const b=y(m),O=E({__proto__:null,default:b},[m]);export{O as e};
