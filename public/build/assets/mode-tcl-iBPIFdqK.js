import{C as _}from"./app-DKvfoN-y.js";function $(p,k){for(var i=0;i<k.length;i++){const g=k[i];if(typeof g!="string"&&!Array.isArray(g)){for(const u in g)if(u!=="default"&&!(u in p)){const h=Object.getOwnPropertyDescriptor(g,u);h&&Object.defineProperty(p,u,h.get?h:{enumerable:!0,get:()=>g[u]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var v={exports:{}};(function(p,k){ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(i,g,u){var h=i("../../lib/oop"),m=i("../../range").Range,l=i("./fold_mode").FoldMode,d=g.FoldMode=function(t){t&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+t.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+t.end)))};h.inherits(d,l),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(t,n,e){var r=t.getLine(e);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var a=this._getFoldWidgetBase(t,n,e);return!a&&this.startRegionRe.test(r)?"start":a},this.getFoldWidgetRange=function(t,n,e,r){var a=t.getLine(e);if(this.startRegionRe.test(a))return this.getCommentRegionBlock(t,a,e);var o=a.match(this.foldingStartMarker);if(o){var c=o.index;if(o[1])return this.openingBracketBlock(t,o[1],e,c);var s=t.getCommentFoldRange(e,c+o[0].length,1);return s&&!s.isMultiLine()&&(r?s=this.getSectionRange(t,e):n!="all"&&(s=null)),s}if(n!=="markbegin"){var o=a.match(this.foldingStopMarker);if(o){var c=o.index+o[0].length;return o[1]?this.closingBracketBlock(t,o[1],e,c):t.getCommentFoldRange(e,c,-1)}}},this.getSectionRange=function(t,n){var e=t.getLine(n),r=e.search(/\S/),a=n,c=e.length;n=n+1;for(var s=n,o=t.getLength();++n<o;){e=t.getLine(n);var f=e.search(/\S/);if(f!==-1){if(r>f)break;var x=this.getFoldWidgetRange(t,"all",n);if(x){if(x.start.row<=a)break;if(x.isMultiLine())n=x.end.row;else if(r==f)break}s=n}}return new m(a,c,s,t.getLine(s).length)},this.getCommentRegionBlock=function(t,n,e){for(var r=n.search(/\s*$/),a=t.getLength(),c=e,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,o=1;++e<a;){n=t.getLine(e);var f=s.exec(n);if(f&&(f[1]?o--:o++,!o))break}var x=e;if(x>c)return new m(c,r,x,n.length)}}).call(d.prototype)}),ace.define("ace/mode/tcl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(i,g,u){var h=i("../lib/oop"),m=i("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"comment",regex:"#.*\\\\$",next:"commentfollow"},{token:"comment",regex:"#.*$"},{token:"support.function",regex:"[\\\\]$",next:"splitlineStart"},{token:"text",regex:/\\(?:["{}\[\]$\\])/},{token:"text",regex:"^|[^{][;][^}]|[/\r/]",next:"commandItem"},{token:"string",regex:'[ ]*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:'[ ]*["]',next:"qqstring"},{token:"variable.instance",regex:"[$]",next:"variable"},{token:"support.function",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|{\\*}|;|::"},{token:"identifier",regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"paren.lparen",regex:"[[{]",next:"commandItem"},{token:"paren.lparen",regex:"[(]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],commandItem:[{token:"comment",regex:"#.*\\\\$",next:"commentfollow"},{token:"comment",regex:"#.*$",next:"start"},{token:"string",regex:'[ ]*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"variable.instance",regex:"[$]",next:"variable"},{token:"support.function",regex:"(?:[:][:])[a-zA-Z0-9_/]+(?:[:][:])",next:"commandItem"},{token:"support.function",regex:"[a-zA-Z0-9_/]+(?:[:][:])",next:"commandItem"},{token:"support.function",regex:"(?:[:][:])",next:"commandItem"},{token:"paren.rparen",regex:"[\\])}]"},{token:"paren.lparen",regex:"[[({]"},{token:"support.function",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|{\\*}|;|::"},{token:"keyword",regex:"[a-zA-Z0-9_/]+",next:"start"}],commentfollow:[{token:"comment",regex:".*\\\\$",next:"commentfollow"},{token:"comment",regex:".+",next:"start"}],splitlineStart:[{token:"text",regex:"^.",next:"start"}],variable:[{token:"variable.instance",regex:"[a-zA-Z_\\d]+(?:[(][a-zA-Z_\\d]+[)])?",next:"start"},{token:"variable.instance",regex:"{?[a-zA-Z_\\d]+}?",next:"start"}],qqstring:[{token:"string",regex:'(?:[^\\\\]|\\\\.)*?["]',next:"start"},{token:"string",regex:".+"}]}};h.inherits(l,m),g.TclHighlightRules=l}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(i,g,u){var h=i("../range").Range,m=function(){};(function(){this.checkOutdent=function(l,d){return/^\s+$/.test(l)?/^\s*\}/.test(d):!1},this.autoOutdent=function(l,d){var t=l.getLine(d),n=t.match(/^(\s*\})/);if(!n)return 0;var e=n[1].length,r=l.findMatchingBracket({row:d,column:e});if(!r||r.row==d)return 0;var a=this.$getIndent(l.getLine(r.row));l.replace(new h(d,0,d,e-1),a)},this.$getIndent=function(l){return l.match(/^\s*/)[0]}}).call(m.prototype),g.MatchingBraceOutdent=m}),ace.define("ace/mode/tcl",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/folding/cstyle","ace/mode/tcl_highlight_rules","ace/mode/matching_brace_outdent","ace/range"],function(i,g,u){var h=i("../lib/oop"),m=i("./text").Mode,l=i("./folding/cstyle").FoldMode,d=i("./tcl_highlight_rules").TclHighlightRules,t=i("./matching_brace_outdent").MatchingBraceOutdent;i("../range").Range;var n=function(){this.HighlightRules=d,this.$outdent=new t,this.foldingRules=new l,this.$behaviour=this.$defaultBehaviour};h.inherits(n,m),(function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,r,a){var c=this.$getIndent(r),s=this.getTokenizer().getLineTokens(r,e),o=s.tokens;if(o.length&&o[o.length-1].type=="comment")return c;if(e=="start"){var f=r.match(/^.*[\{\(\[]\s*$/);f&&(c+=a)}return c},this.checkOutdent=function(e,r,a){return this.$outdent.checkOutdent(r,a)},this.autoOutdent=function(e,r,a){this.$outdent.autoOutdent(r,a)},this.$id="ace/mode/tcl",this.snippetFileId="ace/snippets/tcl"}).call(n.prototype),g.Mode=n}),function(){ace.require(["ace/mode/tcl"],function(i){p&&(p.exports=i)})}()})(v);var R=v.exports;const b=_(R),B=$({__proto__:null,default:b},[R]);export{B as m};
