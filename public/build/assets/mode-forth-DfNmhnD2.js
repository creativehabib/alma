import{C as p}from"./app-DKvfoN-y.js";function v(m,k){for(var n=0;n<k.length;n++){const a=k[n];if(typeof a!="string"&&!Array.isArray(a)){for(const g in a)if(g!=="default"&&!(g in m)){const h=Object.getOwnPropertyDescriptor(a,g);h&&Object.defineProperty(m,g,h.get?h:{enumerable:!0,get:()=>a[g]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}var I={exports:{}};(function(m,k){ace.define("ace/mode/forth_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,a,g){var h=n("../lib/oop"),u=n("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{include:"#forth"}],"#comment":[{token:"comment.line.double-dash.forth",regex:"(?:^|\\s)--\\s.*$",comment:"line comments for iForth"},{token:"comment.line.backslash.forth",regex:"(?:^|\\s)\\\\[\\s\\S]*$",comment:"ANSI line comment"},{token:"comment.line.backslash-g.forth",regex:"(?:^|\\s)\\\\[Gg] .*$",comment:"gForth line comment"},{token:"comment.block.forth",regex:"(?:^|\\s)\\(\\*(?=\\s|$)",push:[{token:"comment.block.forth",regex:"(?:^|\\s)\\*\\)(?=\\s|$)",next:"pop"},{defaultToken:"comment.block.forth"}],comment:"multiline comments for iForth"},{token:"comment.block.documentation.forth",regex:"\\bDOC\\b",caseInsensitive:!0,push:[{token:"comment.block.documentation.forth",regex:"\\bENDDOC\\b",caseInsensitive:!0,next:"pop"},{defaultToken:"comment.block.documentation.forth"}],comment:"documentation comments for iForth"},{token:"comment.line.parentheses.forth",regex:"(?:^|\\s)\\.?\\( [^)]*\\)",comment:"ANSI line comment"}],"#constant":[{token:"constant.language.forth",regex:"(?:^|\\s)(?:TRUE|FALSE|BL|PI|CELL|C/L|R/O|W/O|R/W)(?=\\s|$)",caseInsensitive:!0},{token:"constant.numeric.forth",regex:"(?:^|\\s)[$#%]?[-+]?[0-9]+(?:\\.[0-9]*e-?[0-9]+|\\.?[0-9a-fA-F]*)(?=\\s|$)"},{token:"constant.character.forth",regex:`(?:^|\\s)(?:[&^]\\S|(?:"|')\\S(?:"|'))(?=\\s|$)`}],"#forth":[{include:"#constant"},{include:"#comment"},{include:"#string"},{include:"#word"},{include:"#variable"},{include:"#storage"},{include:"#word-def"}],"#storage":[{token:"storage.type.forth",regex:"(?:^|\\s)(?:2CONSTANT|2VARIABLE|ALIAS|CONSTANT|CREATE-INTERPRET/COMPILE[:]?|CREATE|DEFER|FCONSTANT|FIELD|FVARIABLE|USER|VALUE|VARIABLE|VOCABULARY)(?=\\s|$)",caseInsensitive:!0}],"#string":[{token:"string.quoted.double.forth",regex:'(ABORT" |BREAK" |\\." |C" |0"|S\\\\?" )([^"]+")',caseInsensitive:!0},{token:"string.unquoted.forth",regex:"(?:INCLUDE|NEEDS|REQUIRE|USE)[ ]\\S+(?=\\s|$)",caseInsensitive:!0}],"#variable":[{token:"variable.language.forth",regex:"\\b(?:I|J)\\b",caseInsensitive:!0}],"#word":[{token:"keyword.control.immediate.forth",regex:"(?:^|\\s)\\[(?:\\?DO|\\+LOOP|AGAIN|BEGIN|DEFINED|DO|ELSE|ENDIF|FOR|IF|IFDEF|IFUNDEF|LOOP|NEXT|REPEAT|THEN|UNTIL|WHILE)\\](?=\\s|$)",caseInsensitive:!0},{token:"keyword.other.immediate.forth",regex:"(?:^|\\s)(?:COMPILE-ONLY|IMMEDIATE|IS|RESTRICT|TO|WHAT'S|])(?=\\s|$)",caseInsensitive:!0},{token:"keyword.control.compile-only.forth",regex:'(?:^|\\s)(?:-DO|\\-LOOP|\\?DO|\\?LEAVE|\\+DO|\\+LOOP|ABORT\\"|AGAIN|AHEAD|BEGIN|CASE|DO|ELSE|ENDCASE|ENDIF|ENDOF|ENDTRY\\-IFERROR|ENDTRY|FOR|IF|IFERROR|LEAVE|LOOP|NEXT|RECOVER|REPEAT|RESTORE|THEN|TRY|U\\-DO|U\\+DO|UNTIL|WHILE)(?=\\s|$)',caseInsensitive:!0},{token:"keyword.other.compile-only.forth",regex:"(?:^|\\s)(?:\\?DUP-0=-IF|\\?DUP-IF|\\)|\\[|\\['\\]|\\[CHAR\\]|\\[COMPILE\\]|\\[IS\\]|\\[TO\\]|<COMPILATION|<INTERPRETATION|ASSERT\\(|ASSERT0\\(|ASSERT1\\(|ASSERT2\\(|ASSERT3\\(|COMPILATION>|DEFERS|DOES>|INTERPRETATION>|OF|POSTPONE)(?=\\s|$)",caseInsensitive:!0},{token:"keyword.other.non-immediate.forth",regex:"(?:^|\\s)(?:'|<IS>|<TO>|CHAR|END-STRUCT|INCLUDE[D]?|LOAD|NEEDS|REQUIRE[D]?|REVISION|SEE|STRUCT|THRU|USE)(?=\\s|$)",caseInsensitive:!0},{token:"keyword.other.warning.forth",regex:'(?:^|\\s)(?:~~|BREAK:|BREAK"|DBG)(?=\\s|$)',caseInsensitive:!0}],"#word-def":[{token:["keyword.other.compile-only.forth","keyword.other.compile-only.forth","meta.block.forth","entity.name.function.forth"],regex:"(:NONAME)|(^:|\\s:)(\\s)(\\S+)(?=\\s|$)",caseInsensitive:!0,push:[{token:"keyword.other.compile-only.forth",regex:";(?:CODE)?",caseInsensitive:!0,next:"pop"},{include:"#constant"},{include:"#comment"},{include:"#string"},{include:"#word"},{include:"#variable"},{include:"#storage"},{defaultToken:"meta.block.forth"}]}]},this.normalizeRules()};d.metaData={fileTypes:["frt","fs","ldr","fth","4th"],foldingStartMarker:"/\\*\\*|\\{\\s*$",foldingStopMarker:"\\*\\*/|^\\s*\\}",keyEquivalent:"^~F",name:"Forth",scopeName:"source.forth"},h.inherits(d,u),a.ForthHighlightRules=d}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,a,g){var h=n("../../lib/oop"),u=n("../../range").Range,d=n("./fold_mode").FoldMode,R=a.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};h.inherits(R,d),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,o){var s=e.getLine(o);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var i=this._getFoldWidgetBase(e,t,o);return!i&&this.startRegionRe.test(s)?"start":i},this.getFoldWidgetRange=function(e,t,o,s){var i=e.getLine(o);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,o);var r=i.match(this.foldingStartMarker);if(r){var c=r.index;if(r[1])return this.openingBracketBlock(e,r[1],o,c);var l=e.getCommentFoldRange(o,c+r[0].length,1);return l&&!l.isMultiLine()&&(s?l=this.getSectionRange(e,o):t!="all"&&(l=null)),l}if(t!=="markbegin"){var r=i.match(this.foldingStopMarker);if(r){var c=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],o,c):e.getCommentFoldRange(o,c,-1)}}},this.getSectionRange=function(e,t){var o=e.getLine(t),s=o.search(/\S/),i=t,c=o.length;t=t+1;for(var l=t,r=e.getLength();++t<r;){o=e.getLine(t);var E=o.search(/\S/);if(E!==-1){if(s>E)break;var f=this.getFoldWidgetRange(e,"all",t);if(f){if(f.start.row<=i)break;if(f.isMultiLine())t=f.end.row;else if(s==E)break}l=t}}return new u(i,c,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,o){for(var s=t.search(/\s*$/),i=e.getLength(),c=o,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,r=1;++o<i;){t=e.getLine(o);var E=l.exec(t);if(E&&(E[1]?r--:r++,!r))break}var f=o;if(f>c)return new u(c,s,f,t.length)}}).call(R.prototype)}),ace.define("ace/mode/forth",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/forth_highlight_rules","ace/mode/folding/cstyle"],function(n,a,g){var h=n("../lib/oop"),u=n("./text").Mode,d=n("./forth_highlight_rules").ForthHighlightRules,R=n("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=d,this.foldingRules=new R,this.$behaviour=this.$defaultBehaviour};h.inherits(e,u),(function(){this.lineCommentStart="--",this.blockComment=null,this.$id="ace/mode/forth"}).call(e.prototype),a.Mode=e}),function(){ace.require(["ace/mode/forth"],function(n){m&&(m.exports=n)})}()})(I);var S=I.exports;const O=p(S),A=v({__proto__:null,default:O},[S]);export{A as m};
