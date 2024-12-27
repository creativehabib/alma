import{o as t,f as l,a as _,h as u,r as i,n as d,u as c,p as $,c as m,w as a,b as n,t as f,d as b,g as v}from"./app-DKvfoN-y.js";import{c as p}from"./useThemeConfig-CMn459mP.js";import{O as w}from"./index-T_RycVZ9.js";import{_ as C}from"./Link-BxabHujp.js";import"./arrow-left-linear-CzdGo5D7.js";function L(e,s){return t(),l("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[_("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",fill:"currentColor"})])}const S=u({__name:"Breadcrumb",props:{class:{}},setup(e){const s=e;return(r,o)=>(t(),l("nav",{"aria-label":"breadcrumb",class:d(s.class)},[i(r.$slots,"default")],2))}}),N=u({__name:"BreadcrumbList",props:{class:{}},setup(e){const s=e;return(r,o)=>(t(),l("ol",{class:d(c(p)("flex items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",s.class))},[i(r.$slots,"default")],2))}}),V=u({__name:"BreadcrumbPage",props:{class:{}},setup(e){const s=e;return(r,o)=>(t(),l("span",{role:"link","aria-disabled":"true","aria-current":"page",class:d(c(p)("font-normal text-foreground",s.class))},[i(r.$slots,"default")],2))}}),j=u({__name:"BreadcrumbLink",props:{asChild:{type:Boolean},as:{default:$},class:{}},setup(e){const s=e;return(r,o)=>(t(),m(c(w),{as:r.as,"as-child":r.asChild,class:d(c(p)("transition-colors hover:text-foreground",s.class))},{default:a(()=>[i(r.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),z=u({__name:"BreadcrumbSeparator",props:{class:{}},setup(e){const s=e;return(r,o)=>(t(),l("li",{role:"presentation","aria-hidden":"true",class:d(c(p)("[&>svg]:size-3.5",s.class))},[i(r.$slots,"default",{},()=>[n(c(L))])],2))}}),I=u({__name:"BreadcrumbItem",props:{class:{}},setup(e){const s=e;return(r,o)=>(t(),l("li",{class:d(c(p)("inline-flex items-center gap-1.5",s.class))},[i(r.$slots,"default")],2))}}),O={class:"relative h-14 flex items-center gap-2 px-4 py-2 border-b border-border"},P={class:"relative h-14 flex items-center border-b border-border"},D=["src","alt"],E={class:"hidden md:flex font-medium text-foreground group-hover:text-primary"},A={__name:"SettingsHeader",props:{user:Object,title:String},setup(e){return(s,r)=>{const o=C,h=I,g=z,x=j,B=V,k=N,y=S;return t(),l("div",O,[n(y,null,{default:a(()=>[n(k,null,{default:a(()=>[n(h,null,{default:a(()=>[_("div",P,[n(o,{href:s.route("user.show",e.user),class:"flex gap-1 items-center p-1 md:px-2 md:py-1 justify-center group bg-muted hover:bg-primary/10 dark:bg-accent dark:hover:bg-primary/10 rounded-full base-transition"},{default:a(()=>[_("img",{src:e.user.avatar_url,alt:e.user.username,class:"w-8 h-8 rounded-full"},null,8,D),_("span",E,f(e.user.display_name?e.user.display_name:"@"+e.user.username),1)]),_:1},8,["href"])])]),_:1}),n(g),n(h,null,{default:a(()=>[e.title?(t(),m(x,{key:0,href:s.route("user.settings.show",e.user)},{default:a(()=>[b(f(s.__("Settings")),1)]),_:1},8,["href"])):(t(),m(B,{key:1,class:"line-clamp-1"},{default:a(()=>[b(f(s.__("Settings")),1)]),_:1}))]),_:1}),e.title?(t(),m(g,{key:0})):v("",!0),e.title?(t(),m(h,{key:1},{default:a(()=>[n(B,{class:"line-clamp-1"},{default:a(()=>[b(f(e.title),1)]),_:1})]),_:1})):v("",!0)]),_:1})]),_:1})])}}};export{A as _};
