import{C as k}from"./app-DKvfoN-y.js";function b(f,m){for(var t=0;t<m.length;t++){const i=m[t];if(typeof i!="string"&&!Array.isArray(i)){for(const d in i)if(d!=="default"&&!(d in f)){const n=Object.getOwnPropertyDescriptor(i,d);n&&Object.defineProperty(f,d,n.get?n:{enumerable:!0,get:()=>i[d]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var _={exports:{}};(function(f,m){ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(t,i,d){var n=t("../../lib/oop"),h=t("./fold_mode").FoldMode,u=t("../../range").Range,p=i.FoldMode=function(){};n.inherits(p,h),(function(){this.commentBlock=function(e,c){var o=/\S/,r=e.getLine(c),a=r.search(o);if(!(a==-1||r[a]!="#")){for(var s=r.length,v=e.getLength(),l=c,g=c;++c<v;){r=e.getLine(c);var x=r.search(o);if(x!=-1){if(r[x]!="#")break;g=c}}if(g>l){var S=e.getLine(g).length;return new u(l,s,g,S)}}},this.getFoldWidgetRange=function(e,c,o){var r=this.indentationBlock(e,o);if(r||(r=this.commentBlock(e,o),r))return r},this.getFoldWidget=function(e,c,o){var r=e.getLine(o),a=r.search(/\S/),s=e.getLine(o+1),v=e.getLine(o-1),l=v.search(/\S/),g=s.search(/\S/);if(a==-1)return e.foldWidgets[o-1]=l!=-1&&l<g?"start":"","";if(l==-1){if(a==g&&r[a]=="#"&&s[a]=="#")return e.foldWidgets[o-1]="",e.foldWidgets[o+1]="","start"}else if(l==a&&r[a]=="#"&&v[a]=="#"&&e.getLine(o-2).search(/\S/)==-1)return e.foldWidgets[o-1]="start",e.foldWidgets[o+1]="","";return l!=-1&&l<a?e.foldWidgets[o-1]="start":e.foldWidgets[o-1]="",a<g?"start":""}}).call(p.prototype)}),ace.define("ace/mode/space_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,i,d){var n=t("../lib/oop"),h=t("./text_highlight_rules").TextHighlightRules,u=function(){this.$rules={start:[{token:"empty_line",regex:/ */,next:"key"},{token:"empty_line",regex:/$/,next:"key"}],key:[{token:"variable",regex:/\S+/},{token:"empty_line",regex:/$/,next:"start"},{token:"keyword.operator",regex:/ /,next:"value"}],value:[{token:"keyword.operator",regex:/$/,next:"start"},{token:"string",regex:/[^$]/}]}};n.inherits(u,h),i.SpaceHighlightRules=u}),ace.define("ace/mode/space",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/folding/coffee","ace/mode/space_highlight_rules"],function(t,i,d){var n=t("../lib/oop"),h=t("./text").Mode,u=t("./folding/coffee").FoldMode,p=t("./space_highlight_rules").SpaceHighlightRules,e=function(){this.HighlightRules=p,this.foldingRules=new u,this.$behaviour=this.$defaultBehaviour};n.inherits(e,h),(function(){this.$id="ace/mode/space"}).call(e.prototype),i.Mode=e}),function(){ace.require(["ace/mode/space"],function(t){f&&(f.exports=t)})}()})(_);var y=_.exports;const R=k(y),$=b({__proto__:null,default:R},[y]);export{$ as m};
