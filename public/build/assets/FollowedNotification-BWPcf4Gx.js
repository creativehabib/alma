import{_ as m}from"./Link-BxabHujp.js";import{i as p,o as l,c as h,w,e as x,g as r,a as t,b as g,u as c,t as s,f as _,N as k}from"./app-DKvfoN-y.js";import{C as b}from"./alarm-linear-B0PzHQQx.js";const v={class:"flex items-start justify-center gap-x-4"},y=["src"],N={class:"flex flex-col pr-4"},C={class:"text-muted-foreground text-xs flex items-center gap-x-1"},B={class:"line-clamp-1"},j={class:"font-semibold"},V={class:"ml-1"},F={key:0,class:"flex absolute h-2 w-2 top-1/2 right-1"},I={__name:"FollowedNotification",props:{notification:Object},setup(e){const n=e,f=p(()=>n.notification.data.user.name?n.notification.data.user.name:"@"+n.notification.data.user.nickname),u=a=>{k.post(route("notifications.marked-follower",a))};return(a,o)=>{var i;const d=m;return((i=e.notification.data)==null?void 0:i.type)==="new_follow"?(l(),h(d,{key:0,href:a.route("user.show",e.notification.data.user.nickname),onClick:o[0]||(o[0]=x($=>u(e.notification.id),["prevent"])),class:"relative group p-4 text-sm flex items-center rounded-xl gap-x-2 justify-between hover:bg-accent"},{default:w(()=>[t("div",v,[t("img",{src:e.notification.data.user.avatar,class:"h-8 w-8 rounded-full bg-background",alt:"avatar"},null,8,y),t("div",N,[t("span",C,[g(c(b),{class:"h-3 w-3"}),t("span",null,s(e.notification.created_at.human),1)]),t("div",B,[t("span",j,s(c(f)),1),t("span",V,s(a.__("is now following you")),1)])])]),e.notification.read_at===null?(l(),_("div",F,o[1]||(o[1]=[t("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50"},null,-1),t("span",{class:"relative inline-flex rounded-full h-2 w-2 bg-primary/90"},null,-1)]))):r("",!0)]),_:1},8,["href"])):r("",!0)}}};export{I as default};