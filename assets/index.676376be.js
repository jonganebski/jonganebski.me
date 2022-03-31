var oe=Object.defineProperty,re=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var J=(r,t,n)=>t in r?oe(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,I=(r,t)=>{for(var n in t||(t={}))ue.call(t,n)&&J(r,n,t[n]);if(W)for(var n of W(t))ce.call(t,n)&&J(r,n,t[n]);return r},ee=(r,t)=>re(r,ie(t));import{_ as ae,e as H,s as Q,c as _e,f as de,g as te,u as ne,r as pe,a as me}from"./app.f79ab110.js";import{_ as he,a as ve,b as fe}from"./list-numbered.82946fbe.js";import{d as O,h as d,j as p,m as o,v as h,Q as ge,s as M,y as R,t as e,S as K,N as ye,p as B,w as S,F as L,U as D,r as T,$ as $e,a0 as be,al as ke,o as xe,ad as we,am as Ce,L as ze,q as Se,an as Ne,x as G,R as se,n as F}from"./vendor.d9c22db7.js";const Ee={class:"mt-2 text-sm"},Ue={class:"pl-2 font-bold"},Re={display:"mt-1 grid"},Te=O({props:{categoryName:null},setup(r){const t=r;return(n,s)=>(d(),p("div",Ee,[o("span",Ue,h(t.categoryName),1),o("div",Re,[ge(n.$slots,"default")])]))}});const je={class:"mt-4 px-2 text-center"},Fe={key:0,class:"text-sm text-gray-700 dark:text-gray-300"},Le=K(" Photo by "),Me=["href"],Be={key:1,class:"text-sm text-gray-700 dark:text-gray-300"},Ve=K(" on "),Ze=["href"],De={class:"text-xs text-gray-500"},He=O({props:{selectedImage:null},setup(r){const t=r,{t:n}=H();return(s,m)=>{var f,v,c,b,y,$,w,k,z,i;return d(),p("div",je,[((f=t.selectedImage)==null?void 0:f.creator)?(d(),p("span",Fe,[Le,o("a",{class:M([((v=t.selectedImage)==null?void 0:v.creator.url)?"link__active":"link__inactive"]),href:(c=t.selectedImage)==null?void 0:c.creator.url,target:"_blank",rel:"noopener"},h((y=(b=t.selectedImage)==null?void 0:b.creator)==null?void 0:y.name),11,Me)])):R("",!0),(($=t.selectedImage)==null?void 0:$.provider)?(d(),p("span",Be,[Ve,o("a",{class:M([((w=t.selectedImage)==null?void 0:w.provider.url)?"link__active":"link__inactive"]),href:(k=t.selectedImage)==null?void 0:k.provider.url,target:"_blank",rel:"noopener"},h((i=(z=t.selectedImage)==null?void 0:z.provider)==null?void 0:i.name),11,Ze)])):R("",!0),o("p",De,h(e(n)("all_rights_of_the_image_belong_to_the_creator")),1)])}}});var Oe=ae(He,[["__scopeId","data-v-176f9680"]]);const Ye={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Ae=o("circle",{cx:"9.5",cy:"9.5",r:"2.5",fill:"currentColor"},null,-1),Pe=o("circle",{cx:"9.5",cy:"22.5",r:"2.5",fill:"currentColor"},null,-1),Qe=o("circle",{cx:"22.5",cy:"22.5",r:"2.5",fill:"currentColor"},null,-1),Xe=o("path",{d:"M28 2H4a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2h24a2.002 2.002 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2zm0 13H17V4h11zM15 4v11H4V4zM4 17h11v11H4zm13 11V17h11v11z",fill:"currentColor"},null,-1),qe=[Ae,Pe,Qe,Xe];function Ge(r,t){return d(),p("svg",Ye,qe)}var Ke={name:"carbon-scatter-matrix",render:Ge};const We=1e3*60*60;function Je(){return ye("sliding-puzzle-records",async()=>(await Q.from("sliding-puzzle-records").select("*, user: user_id (user_name, avatar_url)").order("score",{ascending:!0}).limit(100)).data,{refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchOnMount:!1,staleTime:We,retry:!1})}const Ie={class:"mt-30 p-4 mx-auto max-w-xl rounded shadow-lg"},et={class:"mx-auto w-full text-sm table-fixed"},tt={class:"pb-5"},st={class:"pb-5 w-[80%]"},at={class:"pb-5"},nt={class:"w-full"},lt={key:0},ot=o("td",{colspan:"3",class:"py-10 text-center"},"Loading...",-1),rt=[ot],it={key:1},ut=o("td",{colspan:"3",class:"py-10 text-center"},"No Data",-1),ct=[ut],_t={class:"py-2"},dt={class:"py-2 px-4"},pt={class:"w-full flex items-center justify-start gap-3"},mt={class:"relative"},ht={class:"absolute top-0 right-0 text-xl pointer-events-none"},vt={class:"overflow-ellipsis overflow-hidden whitespace-nowrap"},ft={class:"py-2 text-right"},gt=O({setup(r){const{t}=H(),{isLoading:n,data:s}=Je(),m=B(f);function f(){var c;const v=[];if(!s.value)return v;for(let b=0;b<((c=s.value)==null?void 0:c.length);b++){const{score:y}=s.value[b];if(v.length===0){v.push(y);continue}if(v[v.length-1]!==y&&(v.push(y),v.length===3))break}return v}return(v,c)=>{const b=he,y=_e,$=Ke,w=de;return d(),p("div",Ie,[o("table",et,[o("thead",null,[o("tr",null,[o("th",tt,[S(b)]),o("th",st,[S(y,{class:"mx-auto"})]),o("th",at,[S($,{class:"ml-auto"})])])]),o("tbody",nt,[e(n)?(d(),p("tr",lt,rt)):!e(s)||e(s).length===0?(d(),p("tr",it,ct)):(d(!0),p(L,{key:2},D(e(s),(k,z)=>(d(),p("tr",{key:k.id,class:"w-full"},[o("td",_t,h(z+1),1),o("td",dt,[o("div",pt,[o("div",mt,[S(w,{src:k.user.avatar_url,width:40,height:40,alt:e(t)("the_avatar_of",{user_name:k.user.user_name})},null,8,["src","alt"]),o("span",ht,h(k.score===e(m)[0]?"\u{1F947}":k.score===e(m)[1]?"\u{1F948}":k.score===e(m)[2]?"\u{1F949}":""),1)]),o("span",vt,h(k.user.user_name),1)])]),o("td",ft,h(k.score),1)]))),128))])])])}}}),yt={class:"text-sm"},$t={key:0,class:""},bt={key:0},kt={key:1},xt={key:2},wt={key:1},Ct=O({props:{clicksCount:null,shuffleCount:null,score:null,time:null},setup(r){const t=r,{t:n}=H(),s=B(()=>{if(!t.time)return null;const m=Math.floor(t.time/(1e3*60)),f=Math.floor((t.time-m*1e3*60)/1e3),v=t.time-m*1e3*60-f*1e3;return{minutes:m,seconds:f,milliseconds:v}});return(m,f)=>(d(),p("div",yt,[o("span",null,[K(h(e(n)("move",2))+": ",1),o("span",{class:M([t.clicksCount<=t.shuffleCount?"text-green-500":t.clicksCount<t.shuffleCount*2?"text-yellow-500":"text-red-500"])},h(t.clicksCount),3)]),e(s)?(d(),p("p",$t,[o("span",null,h(e(n)("time"))+": ",1),e(s).minutes?(d(),p("span",bt,h(e(s).minutes)+" "+h(e(n)("minutes").toLowerCase())+" "+h(" "),1)):R("",!0),e(s).seconds?(d(),p("span",kt,h(e(s).seconds)+" "+h(e(n)("seconds").toLowerCase())+" "+h(" "),1)):R("",!0),e(s).milliseconds?(d(),p("span",xt,h(e(s).milliseconds)+" "+h(e(n)("milliseconds").toLowerCase()),1)):R("",!0)])):R("",!0),r.score?(d(),p("p",wt,h(e(n)("score"))+": "+h(r.score),1)):R("",!0)]))}}),E="https://ijivzwfsihdcvwrntdpe.supabase.co/storage/v1/object/public/sliding-puzzle-images",U="utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";function zt(){const{t:r}=H(),t=T(!1),n=T(0),s=B(()=>t.value?[{categoryName:r("fate_series"),options:[{label:r("jean_alter"),url:`${E}/jean-alter.jpg`},{label:r("rider_5th"),url:`${E}/rider-5th.jpg`}]},{categoryName:r("eighty_six"),options:[{label:r("vladilena_milize"),url:`${E}/vladilena-milize.jpg`}]},{categoryName:r("attack_on_titan"),options:[{label:r("eren_yeager"),url:`${E}/eren-yeager.jpg`}]}]:[{categoryName:r("nature"),options:[{label:"Kamran Ch",url:`${E}/mountain.jpg`,provider:{name:"Unsplash",url:`https://unsplash.com/t/act-for-nature?${U}`},creator:{name:"Kamran Ch",url:`https://unsplash.com/@kamranch?${U}`}},{label:"David Scanlon",url:`${E}/gorilla.jpg`,provider:{name:"Unsplash",url:`https://unsplash.com/t/nature?${U}`},creator:{name:"David Scanlon",url:`https://unsplash.com/@dsartwork?${U}`}}]},{categoryName:r("cat",2),options:[{label:"Pacto Visual",url:`${E}/cat_pacto-visual.jpg`,provider:{name:"Unsplash",url:`https://unsplash.com/s/photos/cat?${U}`},creator:{name:"Pacto Visual",url:`https://unsplash.com/@pactovisual?${U}`}},{label:"Georgi Benev",url:`${E}/cat_georgi-benev.jpg`,provider:{name:"Unsplash",url:`https://unsplash.com/s/photos/cat-box?${U}`},creator:{name:"georgi benev",url:`https://unsplash.com/@georgibenev97?${U}`}}]}]),m=T(f());function f(){const y=te(0,s.value.length-1),$=te(0,s.value[y].options.length-1);return s.value[y].options[$].url}let v;function c(){n.value+=1,clearTimeout(v),v=setTimeout(()=>n.value=0,200),n.value===10&&(t.value=!t.value,m.value=f())}function b(y){for(let $=0;$<s.value.length;$++)for(let w=0;w<s.value[$].options.length;w++)if(s.value[$].options[w].url===y)return s.value[$].options[w]}return{selectedImageUrl:m,images:s,findImageByUrl:b,worship:c}}function St(){const r=be(),{data:t}=ne();return $e(async({score:n})=>{if(!t.value)return null;const{data:s}=await Q.from("sliding-puzzle-records").select("*").eq("user_id",t.value.id).order("score",{ascending:!0});if(!s)return null;switch(s.length<=10){case!0:return(await Q.from("sliding-puzzle-records").insert({score:n,user_id:t.value.id}).single()).data;case!1:{const m=s[s.length-1];return m.score<n?null:(await Q.from("sliding-puzzle-records").update({id:m.id,score:n}).single()).data}}},{onSuccess:n=>{if(!t.value)return;const{user_name:s=t.value.email,avatar_url:m=""}=t.value.user_metadata;if(!n)return;const f=r.getQueryData("sliding-puzzle-records");!f||r.setQueryData("sliding-puzzle-records",()=>(f.push(ee(I({},n),{user:{user_name:s,avatar_url:m}})),f.sort((v,c)=>v.score-c.score)))}})}function Nt(){const s=T("shuffle"),m=ke(Ce),f=m.greater("sm"),v=m.greater("lg"),c=B(()=>v.value?140:f.value?100:60),b=St(),y=T(0),$=T(null),w=T(null),k=B(()=>!$.value||!w.value?null:w.value-$.value),z=B(()=>k.value?y.value+Math.floor(k.value/1e3):null),i=T([[0,0,0,0,0,0,0],[0,1,2,3,4,5,0],[0,6,7,8,9,10,0],[0,11,12,13,14,15,0],[0,16,17,18,19,20,0],[0,21,22,23,24,25,0],[0,0,0,0,0,-1,0],[0,0,0,0,0,0,0]]);xe(async()=>Y());function N(_,a,l){let u=[];const g=i.value[_-1][a],x=i.value[_+1][a],C=i.value[_][a+1],Z=i.value[_][a-1];return 0<g&&g!==l&&u.push(g),0<x&&x!==l&&u.push(x),0<C&&C!==l&&u.push(C),0<Z&&Z!==l&&u.push(Z),l&&(u=u.filter(le=>le!==25)),pe(1,u)[0]}async function Y(){$.value=null,w.value=null,i.value=[[0,0,0,0,0,0,0],[0,1,2,3,4,5,0],[0,6,7,8,9,10,0],[0,11,12,13,14,15,0],[0,16,17,18,19,20,0],[0,21,22,23,24,25,0],[0,0,0,0,0,-1,0],[0,0,0,0,0,0,0]],await we(),y.value=0,s.value="shuffle";let _;for(let a=0;a<50;a++){const l=document.getElementById("void");if(!l)return;const u=Number(l.dataset.rowidx),g=Number(l.dataset.colidx),x=N(u,g,_),C=document.getElementById(x.toString());if(!C)return;await P(C,Number(C.dataset.rowidx),Number(C.dataset.colidx),!1),_=x}s.value="ready"}function A(){let a=0;for(let l=0;l<i.value.length;l++)for(let u=0;u<i.value[l].length;u++){const g=i.value[l][u];if(g!==0){if(a===25&&g===-1)return!0;if(a+1!==g)return!1;a++}}return!0}async function P(_,a,l,u=!0){const g=j(a,l);return u&&(_.style.transition="transform linear 0.1s"),g==="top"&&(u&&(_.style.transform=`translateY(-${c.value}px)`,await V(100)),[i.value[a][l],i.value[a-1][l]]=[i.value[a-1][l],i.value[a][l]]),g==="bottom"&&(u&&(_.style.transform=`translateY(${c.value}px)`,await V(100)),[i.value[a][l],i.value[a+1][l]]=[i.value[a+1][l],i.value[a][l]]),g==="right"&&(u&&(_.style.transform=`translateX(${c.value}px)`,await V(100)),[i.value[a][l],i.value[a][l+1]]=[i.value[a][l+1],i.value[a][l]]),g==="left"&&(u&&(_.style.transform=`translateX(-${c.value}px)`,await V(100)),[i.value[a][l],i.value[a][l-1]]=[i.value[a][l-1],i.value[a][l]]),u&&(_.style.transition=""),!!g}async function V(_){await new Promise(a=>setTimeout(()=>a(!0),_))}function j(_,a){return i.value[_-1][a]===-1?"top":i.value[_+1][a]===-1?"bottom":i.value[_][a+1]===-1?"right":i.value[_][a-1]===-1?"left":null}async function X(_,a,l){if(s.value==="shuffle"||s.value==="done")return;const u=_.currentTarget;!u||!await P(u,a,l)||($.value||($.value=new Date().getTime()),y.value+=1,s.value==="ready"&&(s.value="playing"),!!A()&&(s.value="done",w.value=new Date().getTime(),!!z.value&&(console.log(z.value),b.mutate({score:z.value}))))}function q(_){const a=(_-1)%5*c.value*-1,l=Math.floor((_-1)/5)*c.value*-1;return`${a}px ${l}px`}return{SHUFFLE_COUNT:50,nodeSize:c,SIZE_X:5,SIZE_Y:5,clicksCount:y,status:s,nodes:i,score:z,time:k,computeBgPosition:q,onClickNode:X,initialize:Y}}const Et={class:"my-4 grid gap-12 place-items-center"},Ut={class:"w-52"},Rt={class:"min-h-20"},Tt={key:0,class:"w-0 h-0"},jt=["data-rowIdx","data-colIdx"],Ft=["id","data-rowIdx","data-colIdx","onClick"],Lt={class:"absolute inset-0 bg-black bg-opacity-50 grid place-items-center"},Mt={key:0,class:"mt-2 text-center text-rose-500 text-sm"},Bt=O({setup(r){const{data:t}=ne(),{t:n}=H(),{SHUFFLE_COUNT:s,SIZE_X:m,SIZE_Y:f,clicksCount:v,nodeSize:c,status:b,nodes:y,score:$,time:w,computeBgPosition:k,onClickNode:z,initialize:i}=Nt(),{selectedImageUrl:N,findImageByUrl:Y,worship:A,images:P}=zt();return ze(()=>N.value,()=>i()),(V,j)=>{const X=fe,q=Te,_=ve,a=Se("client-only"),l=me;return d(),p(L,null,[o("div",Et,[o("h1",{class:"text-3xl md:text-5xl",onClick:j[0]||(j[0]=(...u)=>e(A)&&e(A)(...u))},h(e(n)("sliding_puzzle")),1),o("div",Ut,[S(_,{modelValue:e(N),"onUpdate:modelValue":j[1]||(j[1]=u=>Ne(N)?N.value=u:null),label:e(n)("image"),class:"w-56"},{default:G(()=>[(d(!0),p(L,null,D(e(P),({categoryName:u,options:g})=>(d(),se(q,{key:u,"category-name":u},{default:G(()=>[(d(!0),p(L,null,D(g,x=>(d(),se(X,{key:x.url,value:x.url,label:x.label},null,8,["value","label"]))),128))]),_:2},1032,["category-name"]))),128))]),_:1},8,["modelValue","label"])]),o("div",Rt,[S(Ct,{"shuffle-count":e(s),"clicks-count":e(v),time:e(w),score:e($)},null,8,["shuffle-count","clicks-count","time","score"])])]),S(a,null,{default:G(()=>[o("div",{class:"relative grid gap-px transition-all duration-1000 ease-linear",style:F({gridTemplateRows:`auto repeat(${e(f)}, ${e(c)}px) auto`})},[o("div",{class:M(["absolute top-0 left-1/2 transform -translate-x-1/2 z-1 pointer-events-none",[e(b)==="done"?"shadow-2xl":"shadow"]]),style:F({width:`${e(m)*e(c)+e(m)}px`,height:`${e(f)*e(c)+e(f)}px`})},[o("div",{class:M(["absolute top-0 left-0 z-1 w-full h-full bg-white opacity-0",{"done__anim-mask":e(b)==="done"}])},null,2),o("div",{class:M(["w-full h-full bg-cover",[e(b)==="done"?"done__anim-image opacity-100":"opacity-0"]]),style:F({backgroundImage:`url(${e(N)})`})},null,6)],6),(d(!0),p(L,null,D(e(y),(u,g)=>(d(),p("div",{key:g,class:"grid gap-px transition-all duration-1000 ease-linear",style:F({gridTemplateColumns:`auto repeat(${e(m)}, ${e(c)}px) auto`})},[(d(!0),p(L,null,D(u,(x,C)=>(d(),p("div",{key:x},[x===0?(d(),p("div",Tt)):x===-1?(d(),p("div",{key:1,id:"void","data-rowIdx":g,"data-colIdx":C,style:F({width:`${e(c)}px`,height:`${e(c)}px`})},null,12,jt)):(d(),p("button",{key:2,id:x.toString(),"data-rowIdx":g,"data-colIdx":C,class:"text-white",style:F({width:`${e(c)}px`,height:`${e(c)}px`,backgroundImage:`url(${e(N)})`,backgroundSize:`${e(c)*e(m)}px ${e(c)*e(f)}px`,backgroundPosition:e(k)(x),transform:"translate(0px)"}),onClick:Z=>e(z)(Z,g,C)},[o("div",Lt,h(e(b)==="done"?"":x),1)],12,Ft))]))),128))],4))),128))],4)]),_:1}),e(t)?R("",!0):(d(),p("div",Mt,h(e(n)("games_auth_warning")),1)),S(Oe,{"selected-image":e(Y)(e(N))},null,8,["selected-image"]),S(gt),S(l)],64)}}});var Ot=ae(Bt,[["__scopeId","data-v-2d5c40a8"]]);export{Ot as default};
