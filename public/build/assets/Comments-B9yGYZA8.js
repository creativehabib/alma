import{_ as x}from"./EmptyStateTimeline.vue_vue_type_script_setup_true_lang-CzqLXGHD.js";import{_ as w,a as C}from"./AppLayout-CDEtE47D.js";import{_ as $}from"./FeedCommentCard-C8fZ_gQB.js";import{_ as j}from"./Link-BxabHujp.js";import"./card-ui-24-regular-CNjZB9mb.js";import{a as B}from"./useThemeConfig-CMn459mP.js";import{q as d,o as t,c as m,w as i,a as r,f,b as c,t as _,n as k,F as y,s as L,u as F}from"./app-DKvfoN-y.js";import"./Button.vue_vue_type_script_setup_true_lang-DLbVc8FY.js";import"./index-T_RycVZ9.js";import"./moon-stars-linear-DuqhdEj6.js";import"./facebook-BuDmhaaR.js";import"./Switch.vue_vue_type_script_setup_true_lang-C7ZMvNjL.js";import"./ButtonLink.vue_vue_type_script_setup_true_lang-CgLFBnw-.js";import"./alarm-linear-B0PzHQQx.js";import"./Logo-dKRd1DwS.js";import"./CommentBody-DrfReGmQ.js";import"./heart-fill-up0978Eg.js";import"./CheckIcon-BQfYEZkr.js";import"./DialogTrigger.vue_vue_type_script_setup_true_lang-DcDK8ukt.js";import"./GTextarea-BoCYYrbh.js";import"./InputError-BbPAIupT.js";import"./flag-2-linear-_iuNYGiW.js";const S={class:"space-y-3"},E={class:"items-center justify-center sm:rounded-lg bg-background p-1 text-muted-foreground grid w-full grid-cols-2"},N={class:"truncate"},O={class:"truncate"},re={__name:"Comments",props:{comments:Object},setup(a){const s=a,l=d(null),n=d(!1),{stop:g}=B(l,([{isIntersecting:e}])=>{e&&s.comments.links.next!==null&&(n.value=!0,axios.get(s.comments.links.next).then(o=>{s.comments.data.push(...o.data.data),s.comments.links=o.data.links,o.data.links.next||(n.value=!1,g())}))});return(e,o)=>{const p=j,h=$,b=C,v=x;return t(),m(w,null,{default:i(()=>[r("div",S,[a.comments.data.length?(t(),f(y,{key:0},[r("div",E,[c(p,{href:e.route("user.bookmarks.stories"),class:k(["inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1 text-sm font-medium",e.route().current("user.bookmarks.stories")?"text-primary border-primary dark:text-primary bg-primary/10":"bg-transparent border-transparent hover:text-primary"]),active:e.route().current("user.bookmarks.stories")},{default:i(()=>[r("span",N,_(e.__("Stories")),1)]),_:1},8,["href","active","class"]),c(p,{href:e.route("user.bookmarks.comments"),class:k(["inline-flex items-center justify-center whitespace-nowrap rounded-lg px-3 py-1 text-sm font-medium",e.route().current("user.bookmarks.comments")?"text-primary border-primary dark:text-primary bg-primary/10":"bg-transparent border-transparent hover:text-primary"]),active:e.route().current("user.bookmarks.comments")},{default:i(()=>[r("span",O,_(e.__("Comments")),1)]),_:1},8,["href","active","class"])]),(t(!0),f(y,null,L(a.comments.data,u=>(t(),m(h,{key:u.id,comment:u},null,8,["comment"]))),128)),c(b,{"is-loading":F(n)},null,8,["is-loading"]),r("div",{ref_key:"last",ref:l,class:"-translate-y-32"},null,512)],64)):(t(),m(v,{key:1,title:e.__("There is nothing here yet")},null,8,["title"]))])]),_:1})}}};export{re as default};
