import{_ as v}from"./EmptyState.vue_vue_type_script_setup_true_lang-BEJEefhk.js";import{_ as x,a as b}from"./AppLayout-CDEtE47D.js";import{_ as w}from"./FeedCard-DrvwWvFG.js";import{a as B}from"./useThemeConfig-CMn459mP.js";import{I as $}from"./card-ui-24-regular-CNjZB9mb.js";import{q as m,o as t,c as n,w as d,a as s,f as p,t as C,F as _,s as E,b as f,u}from"./app-DKvfoN-y.js";import"./Button.vue_vue_type_script_setup_true_lang-DLbVc8FY.js";import"./index-T_RycVZ9.js";import"./moon-stars-linear-DuqhdEj6.js";import"./Link-BxabHujp.js";import"./facebook-BuDmhaaR.js";import"./Switch.vue_vue_type_script_setup_true_lang-C7ZMvNjL.js";import"./ButtonLink.vue_vue_type_script_setup_true_lang-CgLFBnw-.js";import"./alarm-linear-B0PzHQQx.js";import"./Logo-dKRd1DwS.js";import"./eye-linear-CH3le6Xu.js";import"./heart-fill-up0978Eg.js";import"./CheckIcon-BQfYEZkr.js";import"./AlertDialogTitle.vue_vue_type_script_setup_true_lang-DN79s5No.js";import"./AlertDialogAction.vue_vue_type_script_setup_true_lang-bWlvk4rB.js";import"./DialogTrigger.vue_vue_type_script_setup_true_lang-DcDK8ukt.js";import"./GTextarea-BoCYYrbh.js";import"./InputError-BbPAIupT.js";import"./flag-2-linear-_iuNYGiW.js";const F={class:"space-y-3"},I={class:"block"},L={class:"card-navbar"},O={class:"card-content-list"},et={__name:"Show",props:{tag:Object,stories:Object},setup(e){const a=e,c=m(null),i=m(!1),{stop:h}=B(c,([{isIntersecting:r}])=>{r&&a.stories.links.next!==null&&(i.value=!0,axios.get(a.stories.links.next).then(o=>{a.stories.data.push(...o.data.data),a.stories.links=o.data.links,o.data.links.next||(i.value=!1,h())}))});return(r,o)=>{const k=w,g=b,y=v;return t(),n(x,null,{default:d(()=>[s("div",F,[e.stories.data.length?(t(),p(_,{key:0},[s("div",I,[s("div",L,C("#"+e.tag.name),1),s("div",O,[(t(!0),p(_,null,E(e.stories.data,l=>(t(),n(k,{key:l.id,story:l},null,8,["story"]))),128))])]),f(g,{"is-loading":u(i)},null,8,["is-loading"]),s("div",{ref_key:"last",ref:c,class:"-translate-y-32"},null,512)],64)):(t(),n(y,{key:1,title:r.__("There is nothing here yet")},{icon:d(()=>[f(u($),{class:"w-16 h-16 text-muted-foreground"})]),_:1},8,["title"]))])]),_:1})}}};export{et as default};
