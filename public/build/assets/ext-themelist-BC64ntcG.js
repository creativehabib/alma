import{C as s}from"./app-DKvfoN-y.js";function h(e,d){for(var t=0;t<d.length;t++){const r=d[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var k={exports:{}};(function(e,d){ace.define("ace/ext/themelist",["require","exports","module"],function(t,r,o){var a=[["Chrome"],["Clouds"],["Crimson Editor"],["Dawn"],["Dreamweaver"],["Eclipse"],["GitHub Light Default"],["GitHub (Legacy)","github","light"],["IPlastic"],["Solarized Light"],["TextMate"],["Tomorrow"],["XCode"],["Kuroir"],["KatzenMilch"],["SQL Server","sqlserver","light"],["CloudEditor","cloud_editor","light"],["Ambiance","ambiance","dark"],["Chaos","chaos","dark"],["Clouds Midnight","clouds_midnight","dark"],["Dracula","","dark"],["Cobalt","cobalt","dark"],["Gruvbox","gruvbox","dark"],["Green on Black","gob","dark"],["idle Fingers","idle_fingers","dark"],["krTheme","kr_theme","dark"],["Merbivore","merbivore","dark"],["Merbivore Soft","merbivore_soft","dark"],["Mono Industrial","mono_industrial","dark"],["Monokai","monokai","dark"],["Nord Dark","nord_dark","dark"],["One Dark","one_dark","dark"],["Pastel on dark","pastel_on_dark","dark"],["Solarized Dark","solarized_dark","dark"],["Terminal","terminal","dark"],["Tomorrow Night","tomorrow_night","dark"],["Tomorrow Night Blue","tomorrow_night_blue","dark"],["Tomorrow Night Bright","tomorrow_night_bright","dark"],["Tomorrow Night 80s","tomorrow_night_eighties","dark"],["Twilight","twilight","dark"],["Vibrant Ink","vibrant_ink","dark"],["GitHub Dark","github_dark","dark"],["CloudEditor Dark","cloud_editor_dark","dark"]];r.themesByName={},r.themes=a.map(function(i){var n=i[1]||i[0].replace(/ /g,"_").toLowerCase(),l={caption:i[0],theme:"ace/theme/"+n,isDark:i[2]=="dark",name:n};return r.themesByName[n]=l,l})}),function(){ace.require(["ace/ext/themelist"],function(t){e&&(e.exports=t)})}()})(k);var m=k.exports;const u=s(m),g=h({__proto__:null,default:u},[m]);export{g as e};
