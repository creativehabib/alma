import{C as w}from"./app-DKvfoN-y.js";function z(b,x){for(var s=0;s<x.length;s++){const u=x[s];if(typeof u!="string"&&!Array.isArray(u)){for(const f in u)if(f!=="default"&&!(f in b)){const p=Object.getOwnPropertyDescriptor(u,f);p&&Object.defineProperty(b,f,p.get?p:{enumerable:!0,get:()=>u[f]})}}}return Object.freeze(Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}))}var v={exports:{}};(function(b,x){ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(s,u,f){var p=s("../lib/oop");s("../lib/lang");var m=s("./text_highlight_rules").TextHighlightRules,c=u.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",d=u.supportFunction="rgb|rgba|url|attr|counter|counters",t=u.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",i=u.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",e=u.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",r=u.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",o=u.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",n=u.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",l=function(){var a=this.createKeywordMapper({"support.function":d,"support.constant":t,"support.type":c,"support.constant.color":i,"support.constant.fonts":e},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:r},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+r+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:r},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:o},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:n},{include:"url"},{token:a,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{token:"paren.lparen",regex:"\\{"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules()};p.inherits(l,m),u.CssHighlightRules=l}),ace.define("ace/mode/scss_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules","ace/mode/css_highlight_rules"],function(s,u,f){var p=s("../lib/oop"),m=s("../lib/lang"),c=s("./text_highlight_rules").TextHighlightRules,d=s("./css_highlight_rules"),t=function(){var i=m.arrayToMap(d.supportType.split("|")),e=m.arrayToMap("hsl|hsla|rgb|rgba|url|attr|counter|counters|abs|adjust_color|adjust_hue|alpha|join|blue|ceil|change_color|comparable|complement|darken|desaturate|floor|grayscale|green|hue|if|invert|join|length|lighten|lightness|mix|nth|opacify|opacity|percentage|quote|red|round|saturate|saturation|scale_color|transparentize|type_of|unit|unitless|unquote".split("|")),r=m.arrayToMap(d.supportConstant.split("|")),o=m.arrayToMap(d.supportConstantColor.split("|")),n=m.arrayToMap("@mixin|@extend|@include|@import|@media|@debug|@warn|@if|@for|@each|@while|@else|@font-face|@-webkit-keyframes|if|and|!default|module|def|end|declare".split("|")),l=m.arrayToMap("a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|keygen|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|u|ul|var|video|wbr|xmp".split("|")),a="\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:'["].*\\\\$',next:"qqstring"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"string",regex:"['].*\\\\$",next:"qstring"},{token:"constant.numeric",regex:a+"(?:ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:"constant.numeric",regex:a},{token:["support.function","string","support.function"],regex:"(url\\()(.*)(\\))"},{token:function(g){return i.hasOwnProperty(g.toLowerCase())?"support.type":n.hasOwnProperty(g)?"keyword":r.hasOwnProperty(g)?"constant.language":e.hasOwnProperty(g)?"support.function":o.hasOwnProperty(g.toLowerCase())?"support.constant.color":l.hasOwnProperty(g.toLowerCase())?"variable.language":"text"},regex:"\\-?[@a-z_][@a-z0-9_\\-]*"},{token:"variable",regex:"[a-z_\\-$][a-z0-9_\\-$]*\\b"},{token:"variable.language",regex:"#[a-z0-9-_]+"},{token:"variable.language",regex:"\\.[a-z0-9-_]+"},{token:"variable.language",regex:":[a-z0-9-_]+"},{token:"constant",regex:"[a-z0-9-_]+"},{token:"keyword.operator",regex:"<|>|<=|>=|==|!=|-|%|#|\\+|\\$|\\+|\\*"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"},{caseInsensitive:!0}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",regex:".+"}]}};p.inherits(t,c),u.ScssHighlightRules=t}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(s,u,f){var p=s("../range").Range,m=function(){};(function(){this.checkOutdent=function(c,d){return/^\s+$/.test(c)?/^\s*\}/.test(d):!1},this.autoOutdent=function(c,d){var t=c.getLine(d),i=t.match(/^(\s*\})/);if(!i)return 0;var e=i[1].length,r=c.findMatchingBracket({row:d,column:e});if(!r||r.row==d)return 0;var o=this.$getIndent(c.getLine(r.row));c.replace(new p(d,0,d,e-1),o)},this.$getIndent=function(c){return c.match(/^\s*/)[0]}}).call(m.prototype),u.MatchingBraceOutdent=m}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(s,u,f){var p=s("../../lib/oop");s("../behaviour").Behaviour;var m=s("./cstyle").CstyleBehaviour,c=s("../../token_iterator").TokenIterator,d=function(){this.inherit(m),this.add("colon","insertion",function(t,i,e,r,o){if(o===":"&&e.selection.isEmpty()){var n=e.getCursorPosition(),l=new c(r,n.row,n.column),a=l.getCurrentToken();if(a&&a.value.match(/\s+/)&&(a=l.stepBackward()),a&&a.type==="support.type"){var g=r.doc.getLine(n.row),h=g.substring(n.column,n.column+1);if(h===":")return{text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(g.substring(n.column)))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(t,i,e,r,o){var n=r.doc.getTextRange(o);if(!o.isMultiLine()&&n===":"){var l=e.getCursorPosition(),a=new c(r,l.row,l.column),g=a.getCurrentToken();if(g&&g.value.match(/\s+/)&&(g=a.stepBackward()),g&&g.type==="support.type"){var h=r.doc.getLine(o.start.row),y=h.substring(o.end.column,o.end.column+1);if(y===";")return o.end.column++,o}}}),this.add("semicolon","insertion",function(t,i,e,r,o){if(o===";"&&e.selection.isEmpty()){var n=e.getCursorPosition(),l=r.doc.getLine(n.row),a=l.substring(n.column,n.column+1);if(a===";")return{text:"",selection:[1,1]}}}),this.add("!important","insertion",function(t,i,e,r,o){if(o==="!"&&e.selection.isEmpty()){var n=e.getCursorPosition(),l=r.doc.getLine(n.row);if(/^\s*(;|}|$)/.test(l.substring(n.column)))return{text:"!important",selection:[10,10]}}})};p.inherits(d,m),u.CssBehaviour=d}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(s,u,f){var p=s("../../lib/oop"),m=s("../../range").Range,c=s("./fold_mode").FoldMode,d=u.FoldMode=function(t){t&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+t.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+t.end)))};p.inherits(d,c),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(t,i,e){var r=t.getLine(e);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var o=this._getFoldWidgetBase(t,i,e);return!o&&this.startRegionRe.test(r)?"start":o},this.getFoldWidgetRange=function(t,i,e,r){var o=t.getLine(e);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(t,o,e);var a=o.match(this.foldingStartMarker);if(a){var n=a.index;if(a[1])return this.openingBracketBlock(t,a[1],e,n);var l=t.getCommentFoldRange(e,n+a[0].length,1);return l&&!l.isMultiLine()&&(r?l=this.getSectionRange(t,e):i!="all"&&(l=null)),l}if(i!=="markbegin"){var a=o.match(this.foldingStopMarker);if(a){var n=a.index+a[0].length;return a[1]?this.closingBracketBlock(t,a[1],e,n):t.getCommentFoldRange(e,n,-1)}}},this.getSectionRange=function(t,i){var e=t.getLine(i),r=e.search(/\S/),o=i,n=e.length;i=i+1;for(var l=i,a=t.getLength();++i<a;){e=t.getLine(i);var g=e.search(/\S/);if(g!==-1){if(r>g)break;var h=this.getFoldWidgetRange(t,"all",i);if(h){if(h.start.row<=o)break;if(h.isMultiLine())i=h.end.row;else if(r==g)break}l=i}}return new m(o,n,l,t.getLine(l).length)},this.getCommentRegionBlock=function(t,i,e){for(var r=i.search(/\s*$/),o=t.getLength(),n=e,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++e<o;){i=t.getLine(e);var g=l.exec(i);if(g&&(g[1]?a--:a++,!a))break}var h=e;if(h>n)return new m(n,r,h,i.length)}}).call(d.prototype)}),ace.define("ace/mode/css_completions",["require","exports","module"],function(s,u,f){var p={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,double:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{default:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},float:{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,static:1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},m=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var c=document.createElement("c").style;for(var d in c)if(typeof c[d]=="string"){var t=d.replace(/[A-Z]/g,function(i){return"-"+i.toLowerCase()});p.hasOwnProperty(t)||(p[t]=1)}}this.completionsDefined=!0},this.getCompletions=function(c,d,t,i){if(this.completionsDefined||this.defineCompletions(),c==="ruleset"||d.$mode.$id=="ace/mode/scss"){var e=d.getLine(t.row).substr(0,t.column),r=/\([^)]*$/.test(e);return r&&(e=e.substr(e.lastIndexOf("(")+1)),/:[^;]+$/.test(e)?this.getPropertyValueCompletions(c,d,t,i):this.getPropertyCompletions(c,d,t,i,r)}return[]},this.getPropertyCompletions=function(c,d,t,i,e){e=e||!1;var r=Object.keys(p);return r.map(function(o){return{caption:o,snippet:o+": $0"+(e?"":";"),meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(c,d,t,i){var e=d.getLine(t.row).substr(0,t.column),r=(/([\w\-]+):[^:]*$/.exec(e)||{})[1];if(!r)return[];var o=[];return r in p&&typeof p[r]=="object"&&(o=Object.keys(p[r])),o.map(function(n){return{caption:n,snippet:n,meta:"property value",score:1e6}})}}).call(m.prototype),u.CssCompletions=m}),ace.define("ace/mode/scss",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/scss_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/css","ace/mode/folding/cstyle","ace/mode/css_completions"],function(s,u,f){var p=s("../lib/oop"),m=s("./text").Mode,c=s("./scss_highlight_rules").ScssHighlightRules,d=s("./matching_brace_outdent").MatchingBraceOutdent,t=s("./behaviour/css").CssBehaviour,i=s("./folding/cstyle").FoldMode,e=s("./css_completions").CssCompletions,r=function(){this.HighlightRules=c,this.$outdent=new d,this.$behaviour=new t,this.$completer=new e,this.foldingRules=new i};p.inherits(r,m),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(o,n,l){var a=this.$getIndent(n),g=this.getTokenizer().getLineTokens(n,o).tokens;if(g.length&&g[g.length-1].type=="comment")return a;var h=n.match(/^.*\{\s*$/);return h&&(a+=l),a},this.checkOutdent=function(o,n,l){return this.$outdent.checkOutdent(n,l)},this.autoOutdent=function(o,n,l){this.$outdent.autoOutdent(n,l)},this.getCompletions=function(o,n,l,a){return this.$completer.getCompletions(o,n,l,a)},this.$id="ace/mode/scss"}).call(r.prototype),u.Mode=r}),function(){ace.require(["ace/mode/scss"],function(s){b&&(b.exports=s)})}()})(v);var k=v.exports;const C=w(k),$=z({__proto__:null,default:C},[k]);export{$ as m};
