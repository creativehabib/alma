import{c as r,d as u}from"./useThemeConfig-CMn459mP.js";import{h as n,o,f as l,r as c,n as i,u as a}from"./app-DKvfoN-y.js";const g=n({__name:"AlertTitle",props:{class:{}},setup(e){const s=e;return(t,d)=>(o(),l("h5",{class:i(a(r)("mb-1 font-medium leading-none tracking-tight",s.class))},[c(t.$slots,"default")],2))}}),v=u("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),m=n({__name:"Alert",props:{class:{},variant:{}},setup(e){const s=e;return(t,d)=>(o(),l("div",{class:i(a(r)(a(v)({variant:t.variant}),s.class)),role:"alert"},[c(t.$slots,"default")],2))}});export{g as _,m as a};