import{_ as n}from"./ButtonLink.vue_vue_type_script_setup_true_lang-CgLFBnw-.js";import{_ as i}from"./AppLayout-CDEtE47D.js";import{j as d,o as l,f as a,a as e,c as u,w as r,t as o,b as m,d as f,u as _}from"./app-DKvfoN-y.js";import"./useThemeConfig-CMn459mP.js";import"./Button.vue_vue_type_script_setup_true_lang-DLbVc8FY.js";import"./index-T_RycVZ9.js";import"./moon-stars-linear-DuqhdEj6.js";import"./Link-BxabHujp.js";import"./facebook-BuDmhaaR.js";import"./Switch.vue_vue_type_script_setup_true_lang-C7ZMvNjL.js";import"./alarm-linear-B0PzHQQx.js";import"./Logo-dKRd1DwS.js";const h={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function x(t,s){return l(),a("svg",h,s[0]||(s[0]=[e("path",{fill:"currentColor",d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.587-1.112l-3.826 1.067a1.25 1.25 0 0 1-1.54-1.54l1.068-3.823A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m0 1.5A8.5 8.5 0 0 0 3.5 12c0 1.47.373 2.883 1.073 4.137l.15.27l-1.112 3.984l3.987-1.112l.27.15A8.5 8.5 0 1 0 12 3.5m0 12a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-8.75a2.75 2.75 0 0 1 2.75 2.75c0 1.01-.297 1.574-1.051 2.359l-.169.171c-.622.622-.78.886-.78 1.47a.75.75 0 0 1-1.5 0c0-1.01.297-1.574 1.051-2.359l.169-.171c.622-.622.78-.886.78-1.47a1.25 1.25 0 0 0-2.493-.128l-.007.128a.75.75 0 0 1-1.5 0A2.75 2.75 0 0 1 12 6.75"},null,-1)]))}const p=d({name:"fluent-chat-help-24-regular",render:x}),g={class:"bg-background mb-5 sm:rounded-xl"},v={class:"group relative h-52"},w=["src","alt"],b={class:"px-4 sm:px-6 mt-4"},k={class:"flex flex-wrap items-start justify-between"},y={class:"group relative -mt-16 h-28 w-28 rounded-full border-2 border-muted dark:border-deeper"},B=["src","alt"],j={class:"my-2 flex w-full max-w-full items-center"},A={class:"relative flex flex-col"},C={key:0,class:"flex flex-col"},z={class:"text-lg sm:text-xl font-semibold tracking-wider"},N={class:"text-muted-foreground"},S={key:1,class:"flex items-center text-lg font-semibold tracking-wider sm:text-xl"},V={class:"block"},$={class:"flex flex-col w-full items-center justify-center gap-3 p-6"},D={class:"text-2xl font-semibold"},I={class:"text-muted-foreground text-center"},Q={__name:"Deleted",props:{user:Object},setup(t){return(s,T)=>{const c=n;return l(),u(i,null,{default:r(()=>[e("header",g,[e("div",v,[e("img",{src:t.user.cover_url,alt:t.user.username,class:"z-10 h-full w-full object-cover sm:rounded-t-xl",loading:"lazy"},null,8,w)]),e("div",b,[e("div",k,[e("div",y,[e("img",{src:t.user.avatar_url,alt:t.user.username,class:"h-full w-full rounded-full bg-background dark:bg-deeper",loading:"lazy"},null,8,B)])]),e("div",j,[e("div",A,[t.user.display_name?(l(),a("div",C,[e("span",z,o(t.user.display_name),1),e("span",N,o("@"+t.user.username),1)])):(l(),a("div",S,[e("span",null,o("@"+t.user.username),1)]))])]),e("div",V,[e("div",$,[e("h1",D,o(s.__("The account was deleted")),1),e("p",I,o(s.__("If this account is yours and you want to restore it, please contact to administrations")),1),m(c,{href:s.route("contact.show"),"left-icon":_(p)},{default:r(()=>[f(o(s.__("Support")),1)]),_:1},8,["href","left-icon"])])])])])]),_:1})}}};export{Q as default};