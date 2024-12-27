import{C as F}from"./app-DKvfoN-y.js";function C(x,k){for(var i=0;i<k.length;i++){const s=k[i];if(typeof s!="string"&&!Array.isArray(s)){for(const m in s)if(m!=="default"&&!(m in x)){const c=Object.getOwnPropertyDescriptor(s,m);c&&Object.defineProperty(x,m,c.get?c:{enumerable:!0,get:()=>s[m]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var S={exports:{}};(function(x,k){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(i,s,m){var c=i("../lib/oop"),p=i("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},a.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};c.inherits(a,p),a.getTagRule=function(d){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},a.getStartRule=function(d){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:d}},a.getEndRule=function(d){return{token:"comment.doc",regex:"\\*\\/",next:d}},s.DocCommentHighlightRules=a}),ace.define("ace/mode/swift_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(i,s,m){var c=i("../lib/oop"),p=i("../lib/lang"),a=i("./doc_comment_highlight_rules").DocCommentHighlightRules,d=i("./text_highlight_rules").TextHighlightRules,e=function(){var r=this.createKeywordMapper({"variable.language":"",keyword:"__COLUMN__|__FILE__|__FUNCTION__|__LINE__|as|associativity|break|case|class|continue|default|deinit|didSet|do|dynamicType|else|enum|extension|fallthrough|for|func|get|if|import|in|infix|init|inout|is|left|let|let|mutating|new|none|nonmutating|operator|override|postfix|precedence|prefix|protocol|return|right|safe|Self|self|set|struct|subscript|switch|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|convenience|dynamic|final|infix|lazy|mutating|nonmutating|optional|override|postfix|prefix|required|static|guard|defer","storage.type":"bool|double|Double|extension|float|Float|int|Int|open|internal|fileprivate|private|public|string|String","constant.language":"false|Infinity|NaN|nil|no|null|null|off|on|super|this|true|undefined|yes","support.function":""},"identifier");function n(l,t){var g=t.nestable||t.interpolation,o=t.interpolation&&t.interpolation.nextState||"start",f={regex:l+(t.multiline?"":"(?=.)"),token:"string.start"},h=[t.escape&&{regex:t.escape,token:"character.escape"},t.interpolation&&{token:"paren.quasi.start",regex:p.escapeRegExp(t.interpolation.lead+t.interpolation.open),push:o},t.error&&{regex:t.error,token:"error.invalid"},{regex:l+(t.multiline?"":"|$"),token:"string.end",next:g?"pop":"start"},{defaultToken:"string"}].filter(Boolean);if(g?f.push=h:f.next=h,!t.interpolation)return f;var _=t.interpolation.open,b=t.interpolation.close,M={regex:"["+p.escapeRegExp(_+b)+"]",onMatch:function(R,w,v){return this.next=R==_?this.nextState:"",R==_&&v.length?(v.unshift("start",w),"paren"):R==b&&v.length&&(v.shift(),this.next=v.shift(),this.next.indexOf("string")!=-1)?"paren.quasi.end":R==_?"paren.lparen":"paren.rparen"},nextState:o};return[M,f]}function u(){return[{token:"comment",regex:/\/\//,next:[a.getTagRule(),{token:"comment",regex:"$|^",next:"start"},{defaultToken:"comment",caseInsensitive:!0}]},a.getStartRule("doc-start"),{token:"comment.start",regex:/\/\*/,stateName:"nested_comment",push:[a.getTagRule(),{token:"comment.start",regex:/\/\*/,push:"nested_comment"},{token:"comment.end",regex:"\\*\\/",next:"pop"},{defaultToken:"comment",caseInsensitive:!0}]}]}this.$rules={start:[n('"""',{escape:/\\(?:[0\\tnr"']|u{[a-fA-F1-9]{0,8}})/,interpolation:{lead:"\\",open:"(",close:")"},error:/\\./,multiline:!0}),n('"',{escape:/\\(?:[0\\tnr"']|u{[a-fA-F1-9]{0,8}})/,interpolation:{lead:"\\",open:"(",close:")"},error:/\\./,multiline:!1}),u(),{regex:/@[a-zA-Z_$][a-zA-Z_$\d\u0080-\ufffe]*/,token:"variable.parameter"},{regex:/[a-zA-Z_$][a-zA-Z_$\d\u0080-\ufffe]*/,token:r},{token:"constant.numeric",regex:/[+-]?(?:0(?:b[01]+|o[0-7]+|x[\da-fA-F])|\d+(?:(?:\.\d*)?(?:[PpEe][+-]?\d+)?)\b)/},{token:"keyword.operator",regex:/--|\+\+|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/}]},this.embedRules(a,"doc-",[a.getEndRule("start")]),this.normalizeRules()};c.inherits(e,d),s.HighlightRules=e,s.SwiftHighlightRules=e}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(i,s,m){var c=i("../../lib/oop"),p=i("../../range").Range,a=i("./fold_mode").FoldMode,d=s.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};c.inherits(d,a),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,r,n){var u=e.getLine(n);if(this.singleLineBlockCommentRe.test(u)&&!this.startRegionRe.test(u)&&!this.tripleStarBlockCommentRe.test(u))return"";var l=this._getFoldWidgetBase(e,r,n);return!l&&this.startRegionRe.test(u)?"start":l},this.getFoldWidgetRange=function(e,r,n,u){var l=e.getLine(n);if(this.startRegionRe.test(l))return this.getCommentRegionBlock(e,l,n);var o=l.match(this.foldingStartMarker);if(o){var t=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,t);var g=e.getCommentFoldRange(n,t+o[0].length,1);return g&&!g.isMultiLine()&&(u?g=this.getSectionRange(e,n):r!="all"&&(g=null)),g}if(r!=="markbegin"){var o=l.match(this.foldingStopMarker);if(o){var t=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],n,t):e.getCommentFoldRange(n,t,-1)}}},this.getSectionRange=function(e,r){var n=e.getLine(r),u=n.search(/\S/),l=r,t=n.length;r=r+1;for(var g=r,o=e.getLength();++r<o;){n=e.getLine(r);var f=n.search(/\S/);if(f!==-1){if(u>f)break;var h=this.getFoldWidgetRange(e,"all",r);if(h){if(h.start.row<=l)break;if(h.isMultiLine())r=h.end.row;else if(u==f)break}g=r}}return new p(l,t,g,e.getLine(g).length)},this.getCommentRegionBlock=function(e,r,n){for(var u=r.search(/\s*$/),l=e.getLength(),t=n,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,o=1;++n<l;){r=e.getLine(n);var f=g.exec(r);if(f&&(f[1]?o--:o++,!o))break}var h=n;if(h>t)return new p(t,u,h,r.length)}}).call(d.prototype)}),ace.define("ace/mode/swift",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/swift_highlight_rules","ace/mode/folding/cstyle"],function(i,s,m){var c=i("../lib/oop"),p=i("./text").Mode,a=i("./swift_highlight_rules").HighlightRules,d=i("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=a,this.foldingRules=new d,this.$behaviour=this.$defaultBehaviour};c.inherits(e,p),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/",nestable:!0},this.$id="ace/mode/swift"}).call(e.prototype),s.Mode=e}),function(){ace.require(["ace/mode/swift"],function(i){x&&(x.exports=i)})}()})(S);var y=S.exports;const $=F(y),B=C({__proto__:null,default:$},[y]);export{B as m};
