import{_ as i}from"./UserMenu-CYBj6A2r.js";import{_ as c}from"./AppLayout-CDEtE47D.js";import{o as l,c as n,w as d,a as e,b as u,f as r,t}from"./app-DKvfoN-y.js";import"./moon-stars-linear-DuqhdEj6.js";import"./index-T_RycVZ9.js";import"./useThemeConfig-CMn459mP.js";import"./DialogTrigger.vue_vue_type_script_setup_true_lang-DcDK8ukt.js";import"./Button.vue_vue_type_script_setup_true_lang-DLbVc8FY.js";import"./GTextarea-BoCYYrbh.js";import"./flag-2-linear-_iuNYGiW.js";import"./AlertDialogTitle.vue_vue_type_script_setup_true_lang-DN79s5No.js";import"./forbidden-circle-linear-CL_YQccO.js";import"./InputError-BbPAIupT.js";import"./Input.vue_vue_type_script_setup_true_lang-BYzMHQE9.js";import"./Label.vue_vue_type_script_setup_true_lang-BI4_AY6J.js";import"./Link-BxabHujp.js";import"./facebook-BuDmhaaR.js";import"./Switch.vue_vue_type_script_setup_true_lang-C7ZMvNjL.js";import"./ButtonLink.vue_vue_type_script_setup_true_lang-CgLFBnw-.js";import"./alarm-linear-B0PzHQQx.js";import"./Logo-dKRd1DwS.js";const m={class:"bg-background mb-5 sm:rounded-xl"},f={class:"group relative h-52"},_=["src","alt"],h={class:"px-4 sm:px-6 mt-4"},x={class:"flex flex-wrap items-start justify-between"},p={class:"group relative -mt-16 h-28 w-28 rounded-full border-2 border-muted dark:border-deeper"},g=["src","alt"],b={class:"group ml-auto flex max-w-[calc(100%-114px)] flex-wrap items-end gap-x-3"},k={class:"my-2 flex w-full max-w-full items-center"},v={class:"relative flex flex-col"},w={key:0,class:"flex flex-col"},y={class:"text-lg sm:text-xl font-semibold tracking-wider"},$={class:"text-muted-foreground"},j={key:1,class:"flex items-center text-lg font-semibold tracking-wider sm:text-xl"},B={key:0,class:"block"},z={class:"flex flex-col w-full items-center justify-center gap-3 p-6"},Y={class:"text-2xl font-semibold"},N={class:"text-muted-foreground"},V={key:1,class:"block"},C={class:"flex flex-col w-full items-center justify-center gap-3 p-6"},D={class:"text-2xl font-semibold"},E={class:"text-muted-foreground"},te={__name:"Blocked",props:{user:Object},setup(s){return(o,M)=>{const a=i;return l(),n(c,null,{default:d(()=>[e("header",m,[e("div",f,[e("img",{src:s.user.cover_url,alt:s.user.username,class:"z-10 h-full w-full object-cover sm:rounded-t-xl",loading:"lazy"},null,8,_)]),e("div",h,[e("div",x,[e("div",p,[e("img",{src:s.user.avatar_url,alt:s.user.username,class:"h-full w-full rounded-full bg-background dark:bg-deeper",loading:"lazy"},null,8,g)]),e("div",b,[u(a,{user:s.user},null,8,["user"])])]),e("div",k,[e("div",v,[s.user.display_name?(l(),r("div",w,[e("span",y,t(s.user.display_name),1),e("span",$,t("@"+s.user.username),1)])):(l(),r("div",j,[e("span",null,t("@"+s.user.username),1)]))])]),s.user.is_blocked?(l(),r("div",B,[e("div",z,[e("h1",Y,t(o.__("You blocked")+` @${s.user.username}`),1),e("p",N,t(o.__("You can not follow or see")+` @${s.user.username} `+o.__("posts")),1)])])):(l(),r("div",V,[e("div",C,[e("h1",D,t(`@${s.user.username} `+o.__("has blocked you")),1),e("p",E,t(o.__("You can not follow or see")+` @${s.user.username} `+o.__("posts")),1)])]))])])]),_:1})}}};export{te as default};