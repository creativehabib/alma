import{C as p}from"./app-DKvfoN-y.js";function f(i,c){for(var e=0;e<c.length;e++){const t=c[e];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in i)){const r=Object.getOwnPropertyDescriptor(t,o);r&&Object.defineProperty(i,o,r.get?r:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var d={exports:{}};(function(i,c){ace.define("ace/mode/gcode_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,o){var r=e("../lib/oop"),g=e("./text_highlight_rules").TextHighlightRules,a=function(){var n="IF|DO|WHILE|ENDWHILE|CALL|ENDIF|SUB|ENDSUB|GOTO|REPEAT|ENDREPEAT|CALL",l="PI",u="ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN",h=this.createKeywordMapper({"support.function":u,keyword:n,"constant.language":l},"identifier",!0);this.$rules={start:[{token:"comment",regex:"\\(.*\\)"},{token:"comment",regex:"([N])([0-9]+)"},{token:"string",regex:"([G])([0-9]+\\.?[0-9]?)"},{token:"string",regex:"([M])([0-9]+\\.?[0-9]?)"},{token:"constant.numeric",regex:"([-+]?([0-9]*\\.?[0-9]+\\.?))|(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"},{token:h,regex:"[A-Z]"},{token:"keyword.operator",regex:"EQ|LT|GT|NE|GE|LE|OR|XOR"},{token:"paren.lparen",regex:"[\\[]"},{token:"paren.rparen",regex:"[\\]]"},{token:"text",regex:"\\s+"}]}};r.inherits(a,g),t.GcodeHighlightRules=a}),ace.define("ace/mode/gcode",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/gcode_highlight_rules","ace/range"],function(e,t,o){var r=e("../lib/oop"),g=e("./text").Mode,a=e("./gcode_highlight_rules").GcodeHighlightRules;e("../range").Range;var n=function(){this.HighlightRules=a,this.$behaviour=this.$defaultBehaviour};r.inherits(n,g),(function(){this.$id="ace/mode/gcode"}).call(n.prototype),t.Mode=n}),function(){ace.require(["ace/mode/gcode"],function(e){i&&(i.exports=e)})}()})(d);var s=d.exports;const x=p(s),E=f({__proto__:null,default:x},[s]);export{E as m};
