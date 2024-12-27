import{C as m}from"./app-DKvfoN-y.js";function k(a,c){for(var e=0;e<c.length;e++){const t=c[e];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in a)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(a,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var l={exports:{}};(function(a,c){ace.define("ace/mode/flix_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,r){var o=e("../lib/oop"),s=e("./text_highlight_rules").TextHighlightRules,i=function(){var n="use|checked_cast|checked_ecast|unchecked_cast|masked_cast|as|discard|from|into|inject|project|solve|query|where|select|force|import|region|red|deref",x="choose|debug|do|for|forA|forM|foreach|yield|if|else|case|match|typematch|try|catch|resume|spawn|par|branch|jumpto",h="not|and|or|fix",p="eff|def|law|enum|case|type|alias|class|instance|mod|let",d="with|without|opaque|lazy|lawful|pub|override|sealed|static",u="Unit|Bool|Char|Float32|Float64|Int8|Int16|Int32|Int64|BigInt|String",f=this.createKeywordMapper({keyword:n,"keyword.control":x,"keyword.operator":h,"storage.type":p,"storage.modifier":d,"support.type":u},"identifier");this.$rules={start:[{token:"comment.line",regex:"\\/\\/.*$"},{token:"comment.block",regex:"\\/\\*",next:"comment"},{token:"string",regex:'"',next:"string"},{token:"string.regexp",regex:'regex"',next:"regex"},{token:"constant.character",regex:"'",next:"char"},{token:"constant.numeric",regex:"0x[a-fA-F0-9](_*[a-fA-F0-9])*(i8|i16|i32|i64|ii)?\\b"},{token:"constant.numeric",regex:"[0-9](_*[0-9])*\\.[0-9](_*[0-9])*(f32|f64)?\\b"},{token:"constant.numeric",regex:"[0-9](_*[0-9])*(i8|i16|i32|i64|ii)?\\b"},{token:"constant.language.boolean",regex:"(true|false)\\b"},{token:"constant.language",regex:"null\\b"},{token:"keyword.operator",regex:"\\->|~>|<\\-|=>"},{token:"storage.modifier",regex:"@(Deprecated|Experimental|Internal|ParallelWhenPure|Parallel|LazyWhenPure|Lazy|Skip|Test)\\b"},{token:"keyword",regex:"(\\?\\?\\?|\\?[a-zA-Z0-9]+)"},{token:f,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment.block",regex:"\\*\\/",next:"start"},{defaultToken:"comment.block"}],string:[{token:"constant.character.escape",regex:"\\\\(u[0-9a-fA-F]{4})"},{token:"constant.character.escape",regex:"\\\\."},{token:"string",regex:'"',next:"start"},{token:"string",regex:'[^"\\\\]+'}],regex:[{token:"constant.character.escape",regex:"\\\\(u[0-9a-fA-F]{4})"},{token:"constant.character.escape",regex:"\\\\."},{token:"string.regexp",regex:'"',next:"start"},{token:"string.regexp",regex:'[^"\\\\]+'}],char:[{token:"constant.character.escape",regex:"\\\\(u[0-9a-fA-F]{4})"},{token:"constant.character.escape",regex:"\\\\."},{token:"constant.character",regex:"'",next:"start"},{token:"constant.character",regex:"[^'\\\\]+"}]}};o.inherits(i,s),t.FlixHighlightRules=i}),ace.define("ace/mode/flix",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/flix_highlight_rules"],function(e,t,r){var o=e("../lib/oop"),s=e("./text").Mode,i=e("./flix_highlight_rules").FlixHighlightRules,n=function(){this.HighlightRules=i};o.inherits(n,s),(function(){this.$id="ace/mode/flix"}).call(n.prototype),t.Mode=n}),function(){ace.require(["ace/mode/flix"],function(e){a&&(a.exports=e)})}()})(l);var g=l.exports;const y=m(g),b=k({__proto__:null,default:y},[g]);export{b as m};
