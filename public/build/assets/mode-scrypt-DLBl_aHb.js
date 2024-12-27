import{C as x}from"./app-DKvfoN-y.js";function S(P,m){for(var o=0;o<m.length;o++){const n=m[o];if(typeof n!="string"&&!Array.isArray(n)){for(const _ in n)if(_!=="default"&&!(_ in P)){const g=Object.getOwnPropertyDescriptor(n,_);g&&Object.defineProperty(P,_,g.get?g:{enumerable:!0,get:()=>n[_]})}}}return Object.freeze(Object.defineProperty(P,Symbol.toStringTag,{value:"Module"}))}var f={exports:{}};(function(P,m){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(o,n,_){var g=o("../lib/oop"),u=o("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},s.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};g.inherits(s,u),s.getTagRule=function(l){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},s.getStartRule=function(l){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:l}},s.getEndRule=function(l){return{token:"comment.doc",regex:"\\*\\/",next:l}},n.DocCommentHighlightRules=s}),ace.define("ace/mode/scrypt_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(o,n,_){var g=o("../lib/oop"),u=o("./doc_comment_highlight_rules").DocCommentHighlightRules,s=o("./text_highlight_rules").TextHighlightRules,l=function(){var e="contract|library|loop|new|private|public|if|else|struct|type|require|static|const|import|exit|return|asm",t="true|false",r="function|auto|constructor|bytes|int|bool|SigHashPreimage|PrivKey|PubKey|Sig|Ripemd160|Sha1|Sha256|SigHashType|SigHashPreimage|OpCodeType",a=this.createKeywordMapper({"variable.language":"this",keyword:e,"constant.language":t,"support.function":r},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},u.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:/0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/},{token:"constant.numeric",regex:/[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:["support.function.math.scrypt","text","text"],regex:/\b(abs|min|max|within|ripemd160|sha1|sha256|hash160|hash256|checkSig|checkMultiSig|num2bin|pack|unpack|len|reverseBytes|repeat)(\s*)(\()/},{token:["entity.name.type.scrypt","text","text","text","variable.object.property.scrypt"],regex:/\b(SigHash)(\s*)(\.)(\s*)(ANYONECANPAY|ALL|FORKID|NONE|SINGLE)\b/},{token:["entity.name.type.scrypt","text","text","text","variable.object.property.scrypt"],regex:/\b(OpCode)(\s*)(\.)(\s*)(OP_PUSHDATA1|OP_PUSHDATA2|OP_PUSHDATA4|OP_0|OP_FALSE|OP_1NEGATE|OP_1|OP_TRUE|OP_2|OP_3|OP_4|OP_5|OP_6|OP_7|OP_8|OP_9|OP_10|OP_11|OP_12|OP_13|OP_14|OP_15|OP_16|OP_1ADD|OP_1SUB|OP_NEGATE|OP_ABS|OP_NOT|OP_0NOTEQUAL|OP_ADD|OP_SUB|OP_MUL|OP_DIV|OP_MOD|OP_LSHIFT|OP_RSHIFT|OP_BOOLAND|OP_BOOLOR|OP_NUMEQUAL|OP_NUMEQUALVERIFY|OP_NUMNOTEQUAL|OP_LESSTHAN|OP_GREATERTHAN|OP_LESSTHANOREQUAL|OP_GREATERTHANOREQUAL|OP_MIN|OP_MAX|OP_WITHIN|OP_CAT|OP_SPLIT|OP_BIN2NUM|OP_NUM2BIN|OP_SIZE|OP_NOP|OP_IF|OP_NOTIF|OP_ELSE|OP_ENDIF|OP_VERIFY|OP_RETURN|OP_TOALTSTACK|OP_FROMALTSTACK|OP_IFDUP|OP_DEPTH|OP_DROP|OP_DUP|OP_NIP|OP_OVER|OP_PICK|OP_ROLL|OP_ROT|OP_SWAP|OP_TUCK|OP_2DROP|OP_2DUP|OP_3DUP|OP_2OVER|OP_2ROT|OP_2SWAP|OP_RIPEMD160|OP_SHA1|OP_SHA256|OP_HASH160|OP_HASH256|OP_CODESEPARATOR|OP_CHECKSIG|OP_CHECKSIGVERIFY|OP_CHECKMULTISIG|OP_CHECKMULTISIGVERIFY|OP_INVERT|OP_AND|OP_OR|OP_XOR|OP_EQUAL|OP_EQUALVERIFY)\b/},{token:"entity.name.type.scrypt",regex:/\b(?:P2PKH|P2PK|Tx|HashPuzzleRipemd160|HashPuzzleSha1|HashPuzzleSha256|HashPuzzleHash160|OpCode|SigHash)\b/},{token:["punctuation.separator.period.scrypt","text","entity.name.function.scrypt","text","punctuation.definition.parameters.begin.bracket.round.scrypt"],regex:/(\.)([^\S$\r]*)([\w][\w\d]*)(\s*)(\()/,push:[{token:"punctuation.definition.parameters.end.bracket.round.scrypt",regex:/\)/,next:"pop"},{defaultToken:"start"}]},{token:a,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\||\\^|\\*|\\/|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<>|<|>|!|&&|\\|\\||\\?|\\:|\\*=|\\/=|%=|\\+=|\\-=|&=|\\|=|\\^="},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]},this.embedRules(u,"doc-",[u.getEndRule("start")]),this.normalizeRules()};g.inherits(l,s),n.scryptHighlightRules=l}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(o,n,_){var g=o("../../lib/oop"),u=o("../../range").Range,s=o("./fold_mode").FoldMode,l=n.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};g.inherits(l,s),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,r){var a=e.getLine(r);if(this.singleLineBlockCommentRe.test(a)&&!this.startRegionRe.test(a)&&!this.tripleStarBlockCommentRe.test(a))return"";var c=this._getFoldWidgetBase(e,t,r);return!c&&this.startRegionRe.test(a)?"start":c},this.getFoldWidgetRange=function(e,t,r,a){var c=e.getLine(r);if(this.startRegionRe.test(c))return this.getCommentRegionBlock(e,c,r);var i=c.match(this.foldingStartMarker);if(i){var O=i.index;if(i[1])return this.openingBracketBlock(e,i[1],r,O);var h=e.getCommentFoldRange(r,O+i[0].length,1);return h&&!h.isMultiLine()&&(a?h=this.getSectionRange(e,r):t!="all"&&(h=null)),h}if(t!=="markbegin"){var i=c.match(this.foldingStopMarker);if(i){var O=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],r,O):e.getCommentFoldRange(r,O,-1)}}},this.getSectionRange=function(e,t){var r=e.getLine(t),a=r.search(/\S/),c=t,O=r.length;t=t+1;for(var h=t,i=e.getLength();++t<i;){r=e.getLine(t);var p=r.search(/\S/);if(p!==-1){if(a>p)break;var d=this.getFoldWidgetRange(e,"all",t);if(d){if(d.start.row<=c)break;if(d.isMultiLine())t=d.end.row;else if(a==p)break}h=t}}return new u(c,O,h,e.getLine(h).length)},this.getCommentRegionBlock=function(e,t,r){for(var a=t.search(/\s*$/),c=e.getLength(),O=r,h=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,i=1;++r<c;){t=e.getLine(r);var p=h.exec(t);if(p&&(p[1]?i--:i++,!i))break}var d=r;if(d>O)return new u(O,a,d,t.length)}}).call(l.prototype)}),ace.define("ace/mode/scrypt",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/scrypt_highlight_rules","ace/mode/folding/cstyle"],function(o,n,_){var g=o("../lib/oop"),u=o("./text").Mode,s=o("./scrypt_highlight_rules").scryptHighlightRules,l=o("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=s,this.foldingRules=new l,this.$behaviour=this.$defaultBehaviour};g.inherits(e,u),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$quotes={'"':'"',"'":"'"},this.createWorker=function(t){return null},this.$id="ace/mode/scrypt"}).call(e.prototype),n.Mode=e}),function(){ace.require(["ace/mode/scrypt"],function(o){P&&(P.exports=o)})}()})(f);var R=f.exports;const k=x(R),v=S({__proto__:null,default:k},[R]);export{v as m};
