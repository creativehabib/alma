import{C as m}from"./app-DKvfoN-y.js";function p(o,l){for(var e=0;e<l.length;e++){const t=l[e];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in o)){const r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(o,n,r.get?r:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var g={exports:{}};(function(o,l){ace.define("ace/mode/verilog_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){var r=e("../lib/oop"),s=e("./text_highlight_rules").TextHighlightRules,a=function(){var i="always|and|assign|automatic|begin|buf|bufif0|bufif1|case|casex|casez|cell|cmos|config|deassign|default|defparam|design|disable|edge|else|end|endcase|endconfig|endfunction|endgenerate|endmodule|endprimitive|endspecify|endtable|endtask|event|for|force|forever|fork|function|generate|genvar|highz0|highz1|if|ifnone|incdir|include|initial|inout|input|instance|integer|join|large|liblist|library|localparam|macromodule|medium|module|nand|negedge|nmos|nor|noshowcancelled|not|notif0|notif1|or|output|parameter|pmos|posedge|primitive|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|rcmos|real|realtime|reg|release|repeat|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|showcancelled|signed|small|specify|specparam|strong0|strong1|supply0|supply1|table|task|time|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|unsigned|use|vectored|wait|wand|weak0|weak1|while|wire|wor|xnor|xorbegin|bufif0|bufif1|case|casex|casez|config|else|end|endcase|endconfig|endfunction|endgenerate|endmodule|endprimitive|endspecify|endtable|endtask|for|forever|function|generate|if|ifnone|macromodule|module|primitive|repeat|specify|table|task|while",c="true|false|null",u="count|min|max|avg|sum|rank|now|coalesce|main",f=this.createKeywordMapper({"support.function":u,keyword:i,"constant.language":c},"identifier",!0);this.$rules={start:[{token:"comment",regex:"//.*$"},{token:"comment.start",regex:"/\\*",next:[{token:"comment.end",regex:"\\*/",next:"start"},{defaultToken:"comment"}]},{token:"string.start",regex:'"',next:[{token:"constant.language.escape",regex:/\\(?:[ntvfa\\"]|[0-7]{1,3}|\x[a-fA-F\d]{1,2}|)/,consumeLineEnd:!0},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"string",regex:"'^[']'"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:f,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]},this.normalizeRules()};r.inherits(a,s),t.VerilogHighlightRules=a}),ace.define("ace/mode/verilog",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/verilog_highlight_rules","ace/range"],function(e,t,n){var r=e("../lib/oop"),s=e("./text").Mode,a=e("./verilog_highlight_rules").VerilogHighlightRules;e("../range").Range;var i=function(){this.HighlightRules=a,this.$behaviour=this.$defaultBehaviour};r.inherits(i,s),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"'},this.$id="ace/mode/verilog"}).call(i.prototype),t.Mode=i}),function(){ace.require(["ace/mode/verilog"],function(e){o&&(o.exports=e)})}()})(g);var d=g.exports;const h=m(d),v=p({__proto__:null,default:h},[d]);export{v as m};
