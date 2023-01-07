import{S as re,aF as ie,U as B,aq as ue,at as de,au as me,av as fe,aw as he,t as te,r as F,aG as ve,f as ee,I as ae,P as le,Q as ce,W as ne,d as _e,ap as ge,l as pe,c as w,y as O,m as Y,h as s,a as v,z as b,F as X,o as p,H as we,A as Z,g as Ne,aH as $,n as xe,q as oe,i as W,D as Ce,_ as ye}from"./app-91088905.js";import{a as ke,_ as be}from"./option-6503c0e2.js";import{R as Me,A as Se}from"./records-d3985fa2.js";function Oe(a){return re(ie(["mine-sweeper-records",a]),async()=>a.value?(await B.from("mine-sweeper-records").select("*, user: user_id (user_name, avatar_url)").eq("mode_id",a.value).order("score",{ascending:!0}).limit(100)).data:null,ie({enabled:!!a,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchOnMount:!1,staleTime:ue,retry:!1}))}function Fe(){const a=de(),{data:_}=me();return fe(async({modeId:l,score:n})=>{if(!_.value)return null;const{data:c}=await B.from("mine-sweeper-records").select("*").eq("user_id",_.value.id).eq("mode_id",l).order("score",{ascending:!0});if(!c)return null;switch(c.length<=10){case!0:return(await B.from("mine-sweeper-records").insert({mode_id:l,score:n,user_id:_.value.id}).single()).data;case!1:{const g=c[c.length-1];return g.score<n?null:(await B.from("mine-sweeper-records").update({id:g.id,score:n}).single()).data}}},{onSuccess:l=>{if(!_.value)return;const{user_name:n=_.value.email,avatar_url:c=""}=_.value.user_metadata;if(!l)return;const g=a.getQueryData(["mine-sweeper-records",l.mode_id]);g&&a.setQueryData(["mine-sweeper-records",l.mode_id],()=>[...g,{...l,user:{user_name:n,avatar_url:c}}].sort((f,t)=>f.score-t.score))}})}function Re(a){class _{constructor(e){this.isExploded=!1,this.isQuestion=!1,this.isFlagged=!1,this.isVeiled=!0,this.isMine=!1,this.hint=0,this.rowNum=e.rowNum,this.colNum=e.colNum}increaseHint(){this.hint+=1}around(e){var i,u,y,o,k,V,q,L,A,D,j,G,H,T,z,U;(u=(i=t.value[this.rowNum-1])==null?void 0:i[this.colNum])==null||u[e](),(o=(y=t.value[this.rowNum-1])==null?void 0:y[this.colNum+1])==null||o[e](),(V=(k=t.value[this.rowNum])==null?void 0:k[this.colNum+1])==null||V[e](),(L=(q=t.value[this.rowNum+1])==null?void 0:q[this.colNum+1])==null||L[e](),(D=(A=t.value[this.rowNum+1])==null?void 0:A[this.colNum])==null||D[e](),(G=(j=t.value[this.rowNum+1])==null?void 0:j[this.colNum-1])==null||G[e](),(T=(H=t.value[this.rowNum])==null?void 0:H[this.colNum-1])==null||T[e](),(U=(z=t.value[this.rowNum-1])==null?void 0:z[this.colNum-1])==null||U[e]()}countAround(e){var u,y,o,k,V,q,L,A,D,j,G,H,T,z,U,se;let i=0;return(y=(u=t.value[this.rowNum-1])==null?void 0:u[this.colNum])!=null&&y[e]&&i++,(k=(o=t.value[this.rowNum-1])==null?void 0:o[this.colNum+1])!=null&&k[e]&&i++,(q=(V=t.value[this.rowNum])==null?void 0:V[this.colNum+1])!=null&&q[e]&&i++,(A=(L=t.value[this.rowNum+1])==null?void 0:L[this.colNum+1])!=null&&A[e]&&i++,(j=(D=t.value[this.rowNum+1])==null?void 0:D[this.colNum])!=null&&j[e]&&i++,(H=(G=t.value[this.rowNum+1])==null?void 0:G[this.colNum-1])!=null&&H[e]&&i++,(z=(T=t.value[this.rowNum])==null?void 0:T[this.colNum-1])!=null&&z[e]&&i++,(se=(U=t.value[this.rowNum-1])==null?void 0:U[this.colNum-1])!=null&&se[e]&&i++,i}unveil(){if(this.isVeiled&&!this.isFlagged){if(this.isMine){E({isSuccess:!1});return}this.isVeiled=!1,this.hint===0&&this.around("unveil")}}onLeftClick(){this.isFlagged||this.isQuestion||this.unveil()}onDoubleClick(){this.isVeiled||this.countAround("isFlagged")!==this.hint||this.around("unveil")}onRightClick(){if(this.isVeiled){if(this.isFlagged){d.value-=1,this.isFlagged=!1,this.isQuestion=!0;return}if(this.isQuestion){this.isFlagged=!1,this.isQuestion=!1;return}d.value+=1,this.isFlagged=!0,this.isQuestion=!1}}}const l=1e3*999,n={surfaceLight:"#c6c6c6",surfaceDark:"#C0C0C0",shadow:"#808080"},c=Fe(),{openIssueModal:g}=he(),{t:f}=te(),t=F([]),d=F(0),x=F(!1),R=F(!1),N=F(null),{timestamp:C,pause:I,resume:Q}=ve({immediate:!1,controls:!0}),M=ee(()=>N.value?C.value-N.value:0);ae(M,()=>{M.value<l||E({isSuccess:!1})});const h=ee(()=>a.value===3?{totalMines:99,rows:16,cols:30}:a.value===2?{totalMines:40,rows:16,cols:16}:a.value===1?{totalMines:10,rows:9,cols:9}:{totalMines:0,rows:0,cols:0});ae(()=>a.value,()=>P(),{immediate:!0});function P(){I(),N.value=null,x.value=!1,R.value=!1,d.value=0,t.value=[];for(let e=0;e<h.value.rows;e++){const i=[];for(let u=0;u<h.value.cols;u++)i.push(new _({rowNum:e,colNum:u}));t.value.push(i)}let r=0;for(;r<h.value.totalMines;){const e=Math.round(Math.random()*(h.value.rows-1)),i=Math.round(Math.random()*(h.value.cols-1));t.value[e][i].isMine||(t.value[e][i].isMine=!0,t.value[e][i].around("increaseHint"),r++)}}function J(){N.value=new Date().getTime(),Q()}function E(r){if(I(),x.value=!0,R.value=r.isSuccess,!r.isSuccess)return S();a.value&&c.mutate({modeId:a.value,score:M.value},{onSuccess:()=>{const e=f("congratulations")+"!";window.alert(e)},onError:()=>g({title:f("record_mutation_failed.title"),content:f("record_mutation_failed.content")})})}function m(r){x.value||(N.value||J(),r(),h.value.totalMines===d.value&&K()&&E({isSuccess:!0}))}function S(){t.value.forEach(r=>{r.forEach(e=>{e.isFlagged||e.isMine&&(e.isExploded=!0)})})}function K(){for(let r=0;r<t.value.length;r++)for(let e=0;e<t.value[r].length;e++){const i=t.value[r][e];if(!(i.isMine&&i.isFlagged)&&i.isVeiled)return!1}return!0}return{withController:m,initialize:P,isGameOver:x,flagCount:d,isSuccess:R,COLORS:n,game:t,meta:h,time:M}}function Qe(a){return re([a],async()=>(await B.from(a).select("id, mode")).data,{refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchOnMount:!1,staleTime:ue,retry:!1})}function Ee(){const{t:a}=te(),{data:_}=Qe("mine-sweeper-modes"),l=le(),n=ce(),c=ee(()=>{var f;return(f=_.value)==null?void 0:f.map(({id:t,mode:d})=>({id:t,mode:a(d==="expert"?"expert":d==="intermediate"?"intermediate":"beginner")}))}),g=F(n.query.mode?Number(n.query.mode):1);return ne(()=>{if(!c.value)return;const f=n.query.mode?Number(n.query.mode):1;if(!c.value.find(({id:d})=>d===f))return l.replace({path:n.path});g.value=f}),ne(()=>Array.isArray(n.query.mode)&&l.replace({path:n.path})),{selectedMode:g,modes:c}}const Ve={class:"mt-20 min-h-screen grid place-items-center text-dark-500 dark:text-light-500"},qe={class:"text-3xl md:text-5xl"},Le={class:"mt-10 flex justify-center"},Ae={class:"p-2 grid grid-cols-3 intaglio"},De={class:"flex"},je={class:"counter"},Ge={class:"flex items-center justify-center"},He=["data-isGameOver"],Te={class:"flex justify-end"},ze={class:"counter"},Ue={class:"rows-container intaglio"},We=["data-isExploded","onContextmenu","onDblclick","onClick"],Be={key:1},Ie={key:2},Pe={key:3},Xe=_e({__name:"index",setup(a){ge(m=>({"7f1da576-meta.rows":s(C).rows,"7f1da576-COLORS.shadow":s(t).shadow,"7f1da576-meta.cols":s(C).cols,"7f1da576-COLORS.surfaceLight":s(t).surfaceLight}));const _=le(),l=ce(),{selectedMode:n,modes:c}=Ee(),{data:g,isLoading:f}=Oe(n),{COLORS:t,isGameOver:d,isSuccess:x,flagCount:R,initialize:N,meta:C,game:I,withController:Q,time:M}=Re(n),{t:h}=te();function P(m){return m===1?"text-blue-700":m===2?"text-green-700":m===3?"text-red-700":m===4?"text-purple-700":m===5?"text-fuchsia-700":m===6?"text-cyan-600":"text-black"}function J(m){_.push({path:l.path,query:{mode:m}})}function E(m){return(m/1e3).toFixed(2)+" "+h("abbr.seconds")}return(m,S)=>{const K=be,r=ke,e=pe("client-only"),i=Ce;return p(),w(X,null,[O(s(we),null,{default:Y(()=>[v("title",null,b(s(h)("minesweeper"))+" | "+b(s(h)("jon_ganebskis_blog")),1)]),_:1}),v("div",Ve,[v("h1",qe,b(s(h)("minesweeper")),1),v("div",Le,[O(r,{"model-value":s(n),"option-label-key":"mode",label:s(h)("mode"),class:"w-72","onUpdate:modelValue":J},{default:Y(()=>[(p(!0),w(X,null,Z(s(c),u=>(p(),Ne(K,{key:u.id,value:u.id,label:u.mode},null,8,["value","label"]))),128))]),_:1},8,["model-value","label"])]),O(e,null,{default:Y(()=>[0<s(C).rows&&0<s(C).cols?(p(),w("div",{key:0,class:"mt-20 flex flex-col items-center justify-center game",onContextmenu:S[1]||(S[1]=$(()=>{},["prevent"]))},[v("div",{class:"p-2 relief",style:xe({backgroundColor:s(t).surfaceDark})},[v("div",Ae,[v("div",De,[v("span",je,b((s(C).totalMines-s(R)).toString().padStart(3,"0")),1)]),v("div",Ge,[v("button",{class:"node-btn relief player w-10 h-10","data-isGameOver":s(d),"aria-label":"Click to restart the game",onClick:S[0]||(S[0]=(...u)=>s(N)&&s(N)(...u))},b(s(d)&&s(x)?"😎":s(d)&&!s(x)?"💀":""),9,He)]),v("div",Te,[v("span",ze,b(Math.round(s(M)/1e3).toString().padStart(3,"0")),1)])]),v("div",Ue,[(p(!0),w(X,null,Z(s(I),(u,y)=>(p(),w("div",{key:y,class:"row"},[(p(!0),w(X,null,Z(u,(o,k)=>(p(),w("button",{key:k,class:oe(["node-btn",[o.isVeiled&&"relief"]]),"data-isExploded":o.isExploded,onContextmenu:$(()=>s(Q)(()=>o.onRightClick()),["prevent"]),onDblclick:$(()=>s(Q)(()=>o.onDoubleClick()),["prevent"]),onClick:$(()=>s(Q)(()=>o.onLeftClick()),["prevent"])},[o.isVeiled?W("v-if",!0):(p(),w("span",{key:0,class:oe(["font-extrabold",[P(o.hint)]])},b(o.hint===0?"":o.hint),3)),o.isExploded?(p(),w("span",Be,"💣")):W("v-if",!0),o.isFlagged?(p(),w("span",Ie,"🚩")):W("v-if",!0),o.isQuestion?(p(),w("span",Pe,"❓")):W("v-if",!0)],42,We))),128))]))),128))])],4),O(Se,{class:"mt-2"})],32)):W("v-if",!0)]),_:1}),O(Me,{"is-loading":s(f),data:s(g),formatter:E},null,8,["is-loading","data"]),O(i)])],64)}}});const Ye=ye(Xe,[["__scopeId","data-v-7f1da576"],["__file","/Users/jinseok.bang/Documents/github.me/jonganebski.github.io/src/pages/games/mine-sweeper/index.vue"]]);export{Ye as default};
