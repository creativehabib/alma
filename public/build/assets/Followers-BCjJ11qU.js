import{_ as y}from"./EmptyStateTimeline.vue_vue_type_script_setup_true_lang-CzqLXGHD.js";import{_ as w,a as j}from"./AppLayout-CDEtE47D.js";import{_ as $}from"./Link-BxabHujp.js";import{_ as B}from"./UserProfileHeader-DG6uJdRR.js";import{a as L}from"./useThemeConfig-CMn459mP.js";import{q as h,o as t,c as d,w as l,b as p,a as r,f as o,F as f,s as N,u as V,t as m,d as g,g as F}from"./app-DKvfoN-y.js";import"./card-ui-24-regular-CNjZB9mb.js";import"./Button.vue_vue_type_script_setup_true_lang-DLbVc8FY.js";import"./index-T_RycVZ9.js";import"./moon-stars-linear-DuqhdEj6.js";import"./facebook-BuDmhaaR.js";import"./Switch.vue_vue_type_script_setup_true_lang-C7ZMvNjL.js";import"./ButtonLink.vue_vue_type_script_setup_true_lang-CgLFBnw-.js";import"./alarm-linear-B0PzHQQx.js";import"./Logo-dKRd1DwS.js";import"./AlertDialogTitle.vue_vue_type_script_setup_true_lang-DN79s5No.js";import"./UserMenu-CYBj6A2r.js";import"./DialogTrigger.vue_vue_type_script_setup_true_lang-DcDK8ukt.js";import"./GTextarea-BoCYYrbh.js";import"./flag-2-linear-_iuNYGiW.js";import"./forbidden-circle-linear-CL_YQccO.js";import"./InputError-BbPAIupT.js";import"./Input.vue_vue_type_script_setup_true_lang-BYzMHQE9.js";import"./Label.vue_vue_type_script_setup_true_lang-BI4_AY6J.js";import"./UserFollow-DU-bCASc.js";import"./style-ClfuqKnK.js";import"./AlertDialogAction.vue_vue_type_script_setup_true_lang-bWlvk4rB.js";const O={class:"space-y-3"},T={class:"relative block bg-background sm:rounded-lg"},C={key:0,class:"flex items-center justify-between gap-4 p-4"},D={class:"flex items-center gap-3"},E={class:"flex items-center gap-2"},S={class:"text-sm font-medium text-endpoint"},q={key:1,class:"flex items-center justify-between gap-4 p-4"},A={class:"flex items-center gap-3"},H=["src"],I={class:"flex items-center gap-2"},P=["title"],_e={__name:"Followers",props:{user:Object,followers:Object},setup(i){const n=i,_=h(null),c=h(!1),{stop:k}=L(_,([{isIntersecting:s}])=>{s&&n.followers.links.next!==null&&(c.value=!0,axios.get(n.followers.links.next).then(a=>{n.followers.data.push(...a.data.data),n.followers.links=a.data.links,a.data.links.next||(c.value=!1,k())}))});return(s,a)=>{const v=B,u=$,b=j,x=y;return t(),d(w,null,{default:l(()=>[p(v,{user:i.user},null,8,["user"]),r("div",O,[i.followers.data.length?(t(),o(f,{key:0},[r("div",T,[(t(!0),o(f,null,N(i.followers.data,e=>(t(),o(f,{key:e.id},[e.isDeleted?(t(),o("div",C,[r("div",D,[a[0]||(a[0]=r("img",{src:"/images/default-avatar.png",class:"h-9 bg-muted border border-transparent hover:border-border dark:hover:border-primary base-transition shrink-0 rounded-full",alt:"avatar"},null,-1)),r("div",E,[r("div",S,m(s.__("Account deleted")),1)])])])):(t(),o("div",q,[r("div",A,[p(u,{href:s.route("user.show",e),class:"shrink-0"},{default:l(()=>[r("img",{src:e.avatar_url,class:"h-10 w-10 bg-muted dark:bg-deeper border border-transparent hover:border-border dark:hover:border-primary transition duration-150 ease-linear rounded-full",alt:"avatar"},null,8,H)]),_:2},1032,["href"]),r("div",I,[e.display_name?(t(),d(u,{key:0,href:s.route("user.show",e),class:"text-sm font-medium hover:text-muted-foreground dark:hover:text-foreground/90 dark:text-foreground"},{default:l(()=>[g(m(e.display_name),1)]),_:2},1032,["href"])):(t(),d(u,{key:1,href:s.route("user.show",e),class:"text-sm font-medium hover:text-muted-foreground dark:hover:text-foreground/90 dark:text-foreground"},{default:l(()=>[g(m(e.username),1)]),_:2},1032,["href"]))])]),e.rating>0?(t(),o("div",{key:0,class:"flex items-center justify-center px-2 py-0.5 text-xs font-semibold bg-positive/10 rounded text-positive",title:s.__("Rating")},m(e.rating),9,P)):F("",!0)]))],64))),128))]),p(b,{"is-loading":V(c)},null,8,["is-loading"]),r("div",{ref_key:"last",ref:_,class:"-translate-y-32"},null,512)],64)):(t(),d(x,{key:1,title:s.__("There is nothing here yet")},null,8,["title"]))])]),_:1})}}};export{_e as default};
