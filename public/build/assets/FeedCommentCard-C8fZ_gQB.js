import{M as $,_ as C,m as M,a as B,b as D}from"./moon-stars-linear-DuqhdEj6.js";import{c as N}from"./AppLayout-CDEtE47D.js";import{_ as V,a as j,b as I,c as L,d as O}from"./CommentBody-DrfReGmQ.js";import{_ as T}from"./Link-BxabHujp.js";import{Q as z,o as n,f as l,a as t,d,t as a,b as o,w as m,c,g as i,u}from"./app-DKvfoN-y.js";const E={class:"relative block bg-background sm:rounded-lg"},F={class:"flex flex-col"},G={class:"block px-2 sm:px-6 py-3"},Q={class:"text-sm mb-3 line-clamp-1 text-foreground"},R={class:"line-clamp-1"},S={class:"flex items-center justify-between w-full mb-2"},U={class:"flex items-start w-full gap-2"},Z={class:"relative h-10"},q=["src"],A={class:"flex flex-col min-w-0"},H={class:"flex items-center gap-1"},J=["src","alt","title"],K=["time"],P={key:0},W={key:1,class:"w-full max-w-80 max-h-96 rounded-xl",controls:"",muted:"",playsinline:""},X=["src"],Y={class:"flex items-center gap-3 pt-2 sm:gap-4"},ee={class:"w-6 h-6 flex items-center justify-center group-hover:bg-muted dark:group-hover:bg-muted rounded-full"},ce={__name:"FeedCommentCard",props:{comment:Object},setup(e){const f=z().props.auth.user;return(s,te)=>{const r=T,_=V,h=j,g=I,x=C,b=L,y=O,k=M,v=N,w=B,p=D;return n(),l("div",E,[t("div",F,[t("div",G,[t("header",Q,[t("p",R,[d(a(s.__("Commented on"))+" ",1),o(r,{href:s.route("story.show",e.comment.story),class:"font-medium hover:text-primary dark:hover:text-primary"},{default:m(()=>[d(a(e.comment.story.title),1)]),_:1},8,["href"])])]),t("div",S,[t("div",U,[t("div",Z,[o(r,{href:s.route("user.show",e.comment.user),class:"shrink-0"},{default:m(()=>[t("img",{src:e.comment.user.avatar_url,class:"h-9 bg-background dark:bg-deeper border border-transparent hover:border-border dark:hover:border-primary transition duration-150 ease-linear rounded-full",alt:"avatar"},null,8,q)]),_:1},8,["href"])]),t("div",A,[t("div",H,[e.comment.user.display_name?(n(),c(r,{key:0,href:s.route("user.show",e.comment.user),class:"text-sm font-medium text-foreground hover:text-muted-foreground/90"},{default:m(()=>[d(a(e.comment.user.display_name),1)]),_:1},8,["href"])):(n(),c(r,{key:1,href:s.route("user.show",e.comment.user),class:"text-sm font-medium text-foreground hover:text-muted-foreground/90"},{default:m(()=>[d(a(e.comment.user.username),1)]),_:1},8,["href"])),e.comment.user.primary_badge?(n(),l("img",{key:2,src:e.comment.user.primary_badge.image,alt:e.comment.user.primary_badge.name,title:e.comment.user.primary_badge.name,class:"h-4 w-4 shrink-0",loading:"lazy"},null,8,J)):i("",!0)]),t("span",{class:"text-xs text-endpoint",time:e.comment.created_at.datetime},a(e.comment.created_at.human),9,K)])])]),o(_,{comment:e.comment},null,8,["comment"]),e.comment.media_url?(n(),l("div",P,[e.comment.media_type==="image"?(n(),c(h,{key:0,src:e.comment.media_url,options:{background:"rgba(0, 1, 2, .8)",margin:24,scrollOffset:0},class:"w-full max-w-80 rounded-xl",alt:"media"},null,8,["src"])):(n(),l("video",W,[t("source",{src:e.comment.media_url},null,8,X)]))])):i("",!0),t("div",Y,[o(g,{comment:e.comment},null,8,["comment"]),u(f)?(n(),c(p,{key:0,modal:!1},{default:m(()=>[o(x,{class:"group flex items-center"},{default:m(()=>[t("div",ee,[o(u($),{class:"h-4 w-4 text-foreground"})])]),_:1}),o(w,{class:"min-w-40",align:"start"},{default:m(()=>[o(v,null,{default:m(()=>[u(f).id!==e.comment.user.id?(n(),c(b,{key:0,comment:e.comment},null,8,["comment"])):i("",!0),o(k,null,{default:m(()=>[o(y,{comment:e.comment},null,8,["comment"])]),_:1})]),_:1})]),_:1})]),_:1})):i("",!0)])])])])}}};export{ce as _};