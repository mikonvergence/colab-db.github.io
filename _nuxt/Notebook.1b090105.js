import C from"./ContentRenderer.6c9c8882.js";import L from"./client-only.9ce4cc84.js";import N from"./Comments.1f8d13c9.js";import{o as e,J as t,O as s,W as i,S as l,Y as _,Z as m,X as c,a0 as d,c as g,u as f,M as B}from"./entry.313ac2a6.js";import{I as h}from"./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.b214f46e.js";import"./ContentRendererMarkdown.cc4a898e.js";import"./_commonjsHelpers.fed2a411.js";import"./_plugin-vue_export-helper.a1a6add7.js";const R=""+globalThis.__publicAssetsURL("binder.svg"),U=""+globalThis.__publicAssetsURL("colab.svg"),$={class:"lg:pt-20 pt-10 relative flex flex-wrap lg:flex-nowrap items-start lg:space-x-10 px-[5%] lg:px-[10%] w-full"},j={class:"w-full"},I=s("p",null,"No content found.",-1),T={class:"w-full lg:w-2/3"},V={key:0},A=s("span",{class:"relative px-5 py-2.5 transition-all text-center ease-in duration-75 w-full text-white dark:bg-gray-900 rounded-md"}," Launch ",-1),E={key:1,class:"flex justify-end space-x-2"},O={class:"flex"},S={class:"relative px-4 py-2.5 bg-white transition-all text-center ease-in duration-75 w-full text-gray-800 dark:bg-gray-900 rounded-md flex items-center space-x-2 hover:bg-opacity-25 hover:text-white"},D=s("span",null,"Launch ",-1),F={key:0,src:R,alt:"Binder",class:"h-8 w-8"},J={key:1,src:U,alt:"Colab",class:"h-8 w-8"},M=["src","alt"],W={class:"w-full px-4 py-4 rounded-lg border-2"},X={class:"text-xl mb-2"},Y=s("h4",{class:"text-lg font-semibold"},"Creators",-1),Z={class:"flex flex-col space-y-2"},q={class:"text-base text-gray-600"},z=s("h4",{class:"text-lg font-semibold mt-3"},"Tags",-1),G={class:"flex items-center space-x-2"},H=s("h4",{class:"text-lg font-semibold mt-3"},"Used software",-1),K={class:"flex items-center space-x-2"},P=s("h4",{class:"text-lg font-semibold mt-3"},"License",-1),Q={key:0,class:"flex items-center space-x-2"},ee={key:1},te=s("h4",{class:"text-lg font-semibold mt-3"},"Code repository",-1),se={key:2,class:"flex items-center space-x-2"},oe={class:"text-sm"},ne={key:3},_e={__name:"Notebook",props:["post"],setup(y){const o=y;function x(r){return r==null||r==null?!1:!(r.length<=1)}function b(r){let p=new URL(r);return p.hostname.includes("colab")?"colab":p.hostname.includes("binder")?"binder":p.hostname}return(r,p)=>{const w=C,k=L,v=N,a=B;return e(),t("article",$,[s("div",j,[i(k,null,{default:l(()=>[i(w,{class:"prose lg:prose-base prose-sm prose-slate blog-link pr-7 w-full",value:o.post},{empty:l(()=>[I]),_:1},8,["value"])]),_:1}),i(v)]),s("div",T,[typeof o.post.url=="string"?(e(),t("div",V,[i(a,{to:o.post.url,class:"relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group w-full bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 my-3"},{default:l(()=>[A]),_:1},8,["to"])])):(e(),t("div",E,[(e(!0),t(_,null,m(o.post.url,n=>(e(),t("div",O,[i(a,{to:n,class:"relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 my-1"},{default:l(()=>[s("span",S,[D,b(n)=="binder"?(e(),t("img",F)):c("",!0),b(n)=="colab"?(e(),t("img",J)):c("",!0)])]),_:2},1032,["to"])]))),256))])),o.post.image!=null?(e(),t("img",{key:2,src:o.post.image,alt:o.post.title,class:"max-h-48 mx-auto"},null,8,M)):c("",!0),s("div",W,[s("h2",X,d(o.post.title),1),Y,s("div",Z,[(e(!0),t(_,null,m(o.post.creator,(n,u)=>(e(),t("div",{key:`creator-${u}`,class:"flex space-x-2 items-center"},[s("span",q,d(n.name),1),x(n.github)?(e(),g(a,{key:0,to:"https://github.com/"+n.github},{default:l(()=>[i(f(h),{icon:"ant-design:github-filled",class:"text-gray-500 w-5 h-5"})]),_:2},1032,["to"])):c("",!0),x(n.twitter)?(e(),g(a,{key:1,to:"https://twitter.com/"+n.twitter},{default:l(()=>[i(f(h),{icon:"ant-design:twitter",class:"text-blue-500 w-5 h-5"})]),_:2},1032,["to"])):c("",!0),x(n.orcid)?(e(),g(a,{key:2,to:"https://orcid.org/"+n.orcid},{default:l(()=>[i(f(h),{icon:"academicons:orcid",class:"text-green-500 w-5 h-5"})]),_:2},1032,["to"])):c("",!0)]))),128))]),z,s("div",G,[(e(!0),t(_,null,m(o.post.tags,(n,u)=>(e(),t("span",{key:`creator-${u}`,class:"bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 m-1 rounded dark:bg-blue-200 dark:text-blue-800 whitespace-nowrap"},d(n),1))),128))]),H,s("div",K,[(e(!0),t(_,null,m(o.post.used_software,(n,u)=>(e(),t("span",{key:`software-${u}`,class:"bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 m-1 rounded dark:bg-blue-200 dark:text-blue-800 whitespace-nowrap"},d(n),1))),128))]),P,o.post.license!=null?(e(),t("div",Q,d(o.post.license),1)):(e(),t("div",ee,"Not specified")),te,o.post.git!=null?(e(),t("div",se,[i(a,{to:"https://github.com/"+o.post.git,class:"p-0.5 flex items-center space-x-2"},{default:l(()=>[i(f(h),{icon:"ant-design:github-filled",class:"text-gray-500 w-7 h-7"}),s("span",oe,d(o.post.git),1)]),_:1},8,["to"])])):(e(),t("div",ne,"Not specified"))])])])}}};export{_e as default};
