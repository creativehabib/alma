import{_ as b}from"./EmptyState.vue_vue_type_script_setup_true_lang-BEJEefhk.js";import{_ as v,a as I}from"./AppLayout-CDEtE47D.js";import{_ as $,a as B}from"./CommunityFeedPageNavbar-BqfPAO6J.js";import{I as C}from"./card-ui-24-regular-CNjZB9mb.js";import{a as F}from"./useThemeConfig-CMn459mP.js";import{q as l,o as t,c as i,w as u,b as m,a as d,f as p,F as _,s as w,u as f}from"./app-DKvfoN-y.js";import"./Button.vue_vue_type_script_setup_true_lang-DLbVc8FY.js";import"./index-T_RycVZ9.js";import"./moon-stars-linear-DuqhdEj6.js";import"./Link-BxabHujp.js";import"./facebook-BuDmhaaR.js";import"./Switch.vue_vue_type_script_setup_true_lang-C7ZMvNjL.js";import"./ButtonLink.vue_vue_type_script_setup_true_lang-CgLFBnw-.js";import"./alarm-linear-B0PzHQQx.js";import"./Logo-dKRd1DwS.js";import"./CommunityFollow-B4_zeSN5.js";const E={class:"space-y-5 px-2 md:px-4 py-4 bg-background sm:rounded-lg mb-2"},M={__name:"Index",props:{communities:Object},setup(n){const e=n,r=l(null),o=l(!1),{stop:y}=F(r,([{isIntersecting:s}])=>{s&&e.communities.links.next!==null&&(o.value=!0,axios.get(e.communities.links.next).then(a=>{e.communities.data.push(...a.data.data),e.communities.links=a.data.links,a.data.links.next||(o.value=!1,y())}))});return(s,a)=>{const k=$,g=B,h=I,x=b;return t(),i(v,null,{default:u(()=>[m(k),d("div",E,[n.communities.data.length?(t(),p(_,{key:0},[(t(!0),p(_,null,w(n.communities.data,c=>(t(),i(g,{key:c.id,community:c},null,8,["community"]))),128)),m(h,{"is-loading":f(o),onlyIcon:!0},null,8,["is-loading"]),d("div",{ref_key:"last",ref:r,class:"-translate-y-32"},null,512)],64)):(t(),i(x,{key:1,title:s.__("There is nothing here yet")},{icon:u(()=>[m(f(C),{class:"w-16 h-16 text-muted-foreground"})]),_:1},8,["title"]))])]),_:1})}}};export{M as default};