var ve=Object.defineProperty,pe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var ae=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var ne=(s,a,n)=>a in s?ve(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,oe=(s,a)=>{for(var n in a||(a={}))we.call(a,n)&&ne(s,n,a[n]);if(ae)for(var n of ae(a))xe.call(a,n)&&ne(s,n,a[n]);return s},re=(s,a)=>pe(s,ge(a));import{h as f,c as x,g as c,y as me,z as ue,A as Z,O as he,B as Ne,C as Ce,D as ye,E as Me,u as se,r as E,G as be,p as te,I as le,a as fe,J as _e,K as ce,_ as ke,d as Fe,e as R,w as X,f as i,H as Se,t as F,F as W,j as Oe,k as Re,i as P,s as ee,L as Y,n as Ee,M as de,N as z,l as Qe}from"./app.d893be77.js";import{_ as Ve,a as Ae}from"./option.136a3f6d.js";import{_ as $e,a as qe}from"./records.63f36a52.js";const He={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Le=c("path",{fill:"currentColor",d:"M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"},null,-1),De=c("circle",{cx:"16",cy:"23.5",r:"1.5",fill:"currentColor"},null,-1),Be=c("path",{fill:"currentColor",d:"M17 8h-1.5a4.49 4.49 0 0 0-4.5 4.5v.5h2v-.5a2.5 2.5 0 0 1 2.5-2.5H17a2.5 2.5 0 0 1 0 5h-2v4.5h2V17a4.5 4.5 0 0 0 0-9Z"},null,-1),Ge=[Le,De,Be];function Te(s,a){return f(),x("svg",He,Ge)}var je={name:"carbon-help",render:Te};const ze={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Ze=c("path",{fill:"currentColor",d:"M6 30H4V2h24l-5.8 9l5.8 9H6Zm0-12h18.33l-4.53-7l4.53-7H6Z"},null,-1),Ie=[Ze];function Ue(s,a){return f(),x("svg",ze,Ie)}var We={name:"carbon-flag",render:Ue};function Ye(s){return me(ue(["mine-sweeper-records",s]),async()=>s.value?(await Z.from("mine-sweeper-records").select("*, user: user_id (user_name, avatar_url)").eq("mode_id",s.value).order("score",{ascending:!0}).limit(100)).data:null,ue({enabled:!!s,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchOnMount:!1,staleTime:he,retry:!1}))}function Je(){const s=Ce(),{data:a}=ye();return Ne(async({modeId:n,score:r})=>{if(!a.value)return null;const{data:m}=await Z.from("mine-sweeper-records").select("*").eq("user_id",a.value.id).eq("mode_id",n).order("score",{ascending:!0});if(!m)return null;switch(m.length<=10){case!0:return(await Z.from("mine-sweeper-records").insert({mode_id:n,score:r,user_id:a.value.id}).single()).data;case!1:{const g=m[m.length-1];return g.score<r?null:(await Z.from("mine-sweeper-records").update({id:g.id,score:r}).single()).data}}},{onSuccess:n=>{if(!a.value)return;const{user_name:r=a.value.email,avatar_url:m=""}=a.value.user_metadata;if(!n)return;const g=s.getQueryData(["mine-sweeper-records",n.mode_id]);!g||s.setQueryData(["mine-sweeper-records",n.mode_id],()=>[...g,re(oe({},n),{user:{user_name:r,avatar_url:m}})].sort((_,t)=>_.score-t.score))}})}function Ke(s){class a{constructor(e){this.isExploded=!1,this.isQuestion=!1,this.isFlagged=!1,this.isVeiled=!0,this.isMine=!1,this.hint=0,this.rowNum=e.rowNum,this.colNum=e.colNum}increaseHint(){this.hint+=1}around(e){var o,w,M,p,b,u,k,$,q,H,L,D,B,G,T,j;(w=(o=t.value[this.rowNum-1])==null?void 0:o[this.colNum])==null||w[e](),(p=(M=t.value[this.rowNum-1])==null?void 0:M[this.colNum+1])==null||p[e](),(u=(b=t.value[this.rowNum])==null?void 0:b[this.colNum+1])==null||u[e](),($=(k=t.value[this.rowNum+1])==null?void 0:k[this.colNum+1])==null||$[e](),(H=(q=t.value[this.rowNum+1])==null?void 0:q[this.colNum])==null||H[e](),(D=(L=t.value[this.rowNum+1])==null?void 0:L[this.colNum-1])==null||D[e](),(G=(B=t.value[this.rowNum])==null?void 0:B[this.colNum-1])==null||G[e](),(j=(T=t.value[this.rowNum-1])==null?void 0:T[this.colNum-1])==null||j[e]()}countAround(e){var w,M,p,b,u,k,$,q,H,L,D,B,G,T,j,ie;let o=0;return(M=(w=t.value[this.rowNum-1])==null?void 0:w[this.colNum])!=null&&M[e]&&o++,(b=(p=t.value[this.rowNum-1])==null?void 0:p[this.colNum+1])!=null&&b[e]&&o++,(k=(u=t.value[this.rowNum])==null?void 0:u[this.colNum+1])!=null&&k[e]&&o++,(q=($=t.value[this.rowNum+1])==null?void 0:$[this.colNum+1])!=null&&q[e]&&o++,(L=(H=t.value[this.rowNum+1])==null?void 0:H[this.colNum])!=null&&L[e]&&o++,(B=(D=t.value[this.rowNum+1])==null?void 0:D[this.colNum-1])!=null&&B[e]&&o++,(T=(G=t.value[this.rowNum])==null?void 0:G[this.colNum-1])!=null&&T[e]&&o++,(ie=(j=t.value[this.rowNum-1])==null?void 0:j[this.colNum-1])!=null&&ie[e]&&o++,o}unveil(){if(!!this.isVeiled&&!this.isFlagged){if(this.isMine){A({isSuccess:!1});return}this.isVeiled=!1,this.hint===0&&this.around("unveil")}}onLeftClick(){this.isFlagged||this.isQuestion||this.unveil()}onDoubleClick(){this.isVeiled||this.countAround("isFlagged")!==this.hint||this.around("unveil")}onRightClick(){if(!!this.isVeiled){if(this.isFlagged){d.value-=1,this.isFlagged=!1,this.isQuestion=!0;return}if(this.isQuestion){d.value-=1,this.isFlagged=!1,this.isQuestion=!1;return}d.value+=1,this.isFlagged=!0,this.isQuestion=!1}}}const n=1e3*999,r={surfaceLight:"#c6c6c6",surfaceDark:"#C0C0C0",shadow:"#808080"},m=Je(),{openIssueModal:g}=Me(),{t:_}=se(),t=E([]),d=E(0),C=E(!1),Q=E(!1),N=E(null),{timestamp:y,pause:I,resume:V}=be({immediate:!1,controls:!0}),S=te(()=>N.value?y.value-N.value:0);le(S,()=>{S.value<n||A({isSuccess:!1})});const v=te(()=>s.value===3?{totalMines:99,rows:16,cols:30}:s.value===2?{totalMines:40,rows:16,cols:16}:s.value===1?{totalMines:10,rows:9,cols:9}:{totalMines:0,rows:0,cols:0});le(()=>s.value,()=>U(),{immediate:!0});function U(){I(),N.value=null,C.value=!1,Q.value=!1,d.value=0,t.value=[];for(let e=0;e<v.value.rows;e++){const o=[];for(let w=0;w<v.value.cols;w++)o.push(new a({rowNum:e,colNum:w}));t.value.push(o)}let l=0;for(;l<v.value.totalMines;){const e=Math.round(Math.random()*(v.value.rows-1)),o=Math.round(Math.random()*(v.value.cols-1));t.value[e][o].isMine||(t.value[e][o].isMine=!0,t.value[e][o].around("increaseHint"),l++)}}function J(){N.value=new Date().getTime(),V()}function A(l){if(I(),C.value=!0,Q.value=l.isSuccess,!l.isSuccess)return O();!s.value||m.mutate({modeId:s.value,score:S.value},{onSuccess:()=>{const e=_("congratulations")+"!";window.alert(e)},onError:()=>g({title:_("record_mutation_failed.title"),content:_("record_mutation_failed.content")})})}function h(l){C.value||(N.value||J(),l(),v.value.totalMines===d.value&&K()&&A({isSuccess:!0}))}function O(){t.value.forEach(l=>{l.forEach(e=>{e.isFlagged||!e.isMine||(e.isExploded=!0)})})}function K(){for(let l=0;l<t.value.length;l++)for(let e=0;e<t.value[l].length;e++){const o=t.value[l][e];if(!(o.isMine&&o.isFlagged)&&!!o.isVeiled)return!1}return!0}return{withController:h,initialize:U,isGameOver:C,flagCount:d,isSuccess:Q,COLORS:r,game:t,meta:v,time:S}}function Xe(s){return me([s],async()=>(await Z.from(s).select("id, mode")).data,{refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchOnMount:!1,staleTime:he,retry:!1})}function Pe(){const{t:s}=se(),{data:a}=Xe("mine-sweeper-modes"),n=fe(),r=_e(),m=te(()=>{var _;return(_=a.value)==null?void 0:_.map(({id:t,mode:d})=>({id:t,mode:s(d==="expert"?"expert":d==="intermediate"?"intermediate":"beginner")}))}),g=E(r.query.mode?Number(r.query.mode):1);return ce(()=>{if(!m.value)return;const _=r.query.mode?Number(r.query.mode):1;if(!m.value.find(({id:d})=>d===_))return n.replace({path:r.path});g.value=_}),ce(()=>Array.isArray(r.query.mode)&&n.replace({path:r.path})),{selectedMode:g,modes:m}}const et={class:"mt-20 min-h-screen grid place-items-center text-dark-500 dark:text-light-500"},tt={class:"text-3xl md:text-5xl"},st={class:"mt-10 flex justify-center"},it={class:"p-2 grid grid-cols-3 intaglio"},at={class:"flex"},nt={class:"counter"},ot={class:"flex items-center justify-center"},rt=["data-isGameOver"],ut={class:"flex justify-end"},lt={class:"counter"},ct={class:"rows-container intaglio"},dt=["data-isExploded","onContextmenu","onDblclick","onClick"],mt={key:1},ht=Fe({setup(s){Oe(h=>({"526295dc":i(y).rows,"4b660c4e":i(t).shadow,"52703ba8":i(y).cols,"61463517":i(t).surfaceLight}));const a=fe(),n=_e(),{selectedMode:r,modes:m}=Pe(),{data:g,isLoading:_}=Ye(r),{COLORS:t,isGameOver:d,isSuccess:C,flagCount:Q,initialize:N,meta:y,game:I,withController:V,time:S}=Ke(r),{t:v}=se();function U(h){return h===1?"text-blue-700":h===2?"text-green-700":h===3?"text-red-700":h===4?"text-purple-700":h===5?"text-fuchsia-700":h===6?"text-cyan-600":"text-black"}function J(h){a.push({path:n.path,query:{mode:h}})}function A(h){return(h/1e3).toFixed(2)+" "+v("abbr.seconds")}return(h,O)=>{const K=Ae,l=Ve,e=We,o=je,w=Re("client-only"),M=Qe;return f(),x(W,null,[R(i(Se),null,{default:X(()=>[c("title",null,F(i(v)("minesweeper"))+" | "+F(i(v)("jon_ganebskis_blog")),1)]),_:1}),c("div",et,[c("h1",tt,F(i(v)("minesweeper")),1),c("div",st,[R(l,{"model-value":i(r),"option-label-key":"mode",label:i(v)("mode"),class:"w-72","onUpdate:modelValue":J},{default:X(()=>[(f(!0),x(W,null,P(i(m),p=>(f(),ee(K,{key:p.id,value:p.id,label:p.mode},null,8,["value","label"]))),128))]),_:1},8,["model-value","label"])]),R(w,null,{default:X(()=>[0<i(y).rows&&0<i(y).cols?(f(),x("div",{key:0,class:"mt-20 flex flex-col items-center justify-center game",onContextmenu:O[1]||(O[1]=Y(()=>{},["prevent"]))},[c("div",{class:"p-2 relief",style:Ee({backgroundColor:i(t).surfaceDark})},[c("div",it,[c("div",at,[c("span",nt,F((i(y).totalMines-i(Q)).toString().padStart(3,"0")),1)]),c("div",ot,[c("button",{class:"node-btn relief player w-10 h-10","data-isGameOver":i(d),"aria-label":"Click to restart the game",onClick:O[0]||(O[0]=(...p)=>i(N)&&i(N)(...p))},F(i(d)&&i(C)?"\u{1F60E}":i(d)&&!i(C)?"\u{1F480}":""),9,rt)]),c("div",ut,[c("span",lt,F(Math.round(i(S)/1e3).toString().padStart(3,"0")),1)])]),c("div",ct,[(f(!0),x(W,null,P(i(I),(p,b)=>(f(),x("div",{key:b,class:"row"},[(f(!0),x(W,null,P(p,(u,k)=>(f(),x("button",{key:k,class:de(["node-btn",[u.isVeiled&&"relief"]]),"data-isExploded":u.isExploded,onContextmenu:Y(()=>i(V)(()=>u.onRightClick()),["prevent"]),onDblclick:Y(()=>i(V)(()=>u.onDoubleClick()),["prevent"]),onClick:Y(()=>i(V)(()=>u.onLeftClick()),["prevent"])},[u.isVeiled?z("",!0):(f(),x("span",{key:0,class:de(["font-extrabold",[U(u.hint)]])},F(u.hint===0?"":u.hint),3)),u.isExploded?(f(),x("span",mt,"\u{1F4A3}")):z("",!0),u.isFlagged?(f(),ee(e,{key:2})):z("",!0),u.isQuestion?(f(),ee(o,{key:3})):z("",!0)],42,dt))),128))]))),128))])],4),R(qe,{class:"mt-2"})],32)):z("",!0)]),_:1}),R($e,{"is-loading":i(_),data:i(g),formatter:A},null,8,["is-loading","data"]),R(M)])],64)}}});var gt=ke(ht,[["__scopeId","data-v-e33a5102"]]);export{gt as default};
