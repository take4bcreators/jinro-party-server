(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[737],{2901:function(e,t,n){Promise.resolve().then(n.bind(n,9897))},9897:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var a=n(7437),r=n(2265),o=n(9823),i=n(4033),s=n(4666),l=n(2861),c=n(5981),u=n(7499),d=n(810),y=n(1396),P=n.n(y);function Home(){let e=(0,i.useRouter)(),t=(0,r.useRef)(!1),[n,y]=(0,r.useState)(void 0),[p,m]=(0,r.useState)(void 0),[f,h]=(0,r.useState)(!1),[E,g]=(0,r.useState)(void 0);(0,r.useEffect)(()=>{l.O.registerIfNotExists(),o.t.getGetGameState().then(e=>{void 0!=e&&y(e)})},[]),(0,r.useEffect)(()=>{void 0==n||n===s.D.PreGame||n===s.D.PlayerJoining||t.current||(e.push("/pl/continue/"),t.current=!0)},[n,e]),(0,r.useEffect)(()=>{void 0==n||n!==s.D.PreGame&&n!==s.D.PlayerJoining||t.current||g(new c.r(u.t.PlayerSite,h,m))},[n]),(0,r.useEffect)(()=>{void 0!=E&&f&&E.getCurrentGameState()},[E,f]);let R=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"人狼パーティ"}),(0,a.jsx)("p",{children:"ロード中..."})]}),w=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"募集画面"}),(0,a.jsx)("p",{children:"エラーが発生しました"})]});if(void 0==n||t.current||void 0==p||void 0==E)return R;if(p.requestAction!==d.g.GameScreenChange)return w;switch(p.actionParameter01){case s.D.PreGame:return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"人狼パーティ"}),(0,a.jsx)("p",{children:"募集前です..."}),(0,a.jsx)("p",{children:"しばらくお待ちください"})]});case s.D.PlayerJoining:let v=l.O.getToAPIData();return o.t.postExistsEntryDeviceId(v).then(n=>{void 0!=n&&n&&(e.push("/pl/entry/join/"),t.current=!0)}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"人狼パーティ"}),(0,a.jsx)("p",{children:(0,a.jsx)(P(),{href:"/pl/entry/input/",children:"参加する"})})]})}return R}},9823:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});var a,r=n(9080);let TypedFormData=class TypedFormData extends FormData{stringifyValue(e){return String(e)}constructor(e){for(let t in super(),e)e.hasOwnProperty(t)&&this.append(t,this.stringifyValue(e[t]))}};!function(e){function makeAPIEndpointURL(e){let t="http://localhost:8080";return void 0==t?"":"".concat(t).concat(e)}async function getGetGameState(){let e=makeAPIEndpointURL(r.Y.Point.GetGetGameState);if(""===e)return;let t=await fetch(e),n=await t.json();return n.gameState}async function postExistsDeviceId(e){let t=makeAPIEndpointURL(r.Y.Point.PostExistsDeviceId);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),o=await a.json();return o.exists}async function postCheckPlayerAlive(e){let t=makeAPIEndpointURL(r.Y.Point.PostCheckPlayerAlive);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),o=await a.json();return o.aliveStatus}async function postSaveNewGame(e){let t=makeAPIEndpointURL(r.Y.Point.PostSaveNewGame);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),o=await a.json();return o.result}async function postExistsEntryDeviceId(e){let t=makeAPIEndpointURL(r.Y.Point.PostExistsEntryDeviceId);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),o=await a.json();return o.exists}async function postCheckDuplEntryPlayerName(e){let t=makeAPIEndpointURL(r.Y.Point.PostCheckDuplEntryPlayerName);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n});console.log(a);let o=await a.json();return console.log(o),console.log(o.existsDuplicate),o.existsDuplicate}async function postPlayerTempRegist(e){let t=makeAPIEndpointURL(r.Y.Point.PostPlayerTempRegist);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),o=await a.json();return o.result}async function postPlayerRegist(e){let t=makeAPIEndpointURL(r.Y.Point.PostPlayerRegist);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),o=await a.json();return o.result}async function postPlayerRegistRemove(e){let t=makeAPIEndpointURL(r.Y.Point.PostPlayerRegistRemove);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),o=await a.json();return o.result}async function getExecAllPlayerRemove(){let e=makeAPIEndpointURL(r.Y.Point.GetExecAllPlayerRemove);if(""===e)return;let t=await fetch(e),n=await t.json();return n.result}async function getExecAllEntryRemove(){let e=makeAPIEndpointURL(r.Y.Point.GetExecAllEntryRemove);if(""===e)return;let t=await fetch(e),n=await t.json();return n.result}async function getExecEntryRegist(){let e=makeAPIEndpointURL(r.Y.Point.GetExecEntryRegist);if(""===e)return;let t=await fetch(e),n=await t.json();return n.result}async function postChangeGameState(e){let t=makeAPIEndpointURL(r.Y.Point.PostChangeGameState);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),o=await a.json();return o.result}async function getFetchAllPlayerInfo(){let e=makeAPIEndpointURL(r.Y.Point.GetFetchAllPlayerInfo);if(""===e)return;let t=await fetch(e),n=await t.json();return n.apiAllPlayerInfo}async function postSelfRoleChecked(e){let t=makeAPIEndpointURL(r.Y.Point.PostSelfRoleChecked);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),o=await a.json();return o.result}e.getGetGameState=getGetGameState,e.postExistsDeviceId=postExistsDeviceId,e.postCheckPlayerAlive=postCheckPlayerAlive,e.postSaveNewGame=postSaveNewGame,e.postExistsEntryDeviceId=postExistsEntryDeviceId,e.postCheckDuplEntryPlayerName=postCheckDuplEntryPlayerName,e.postPlayerTempRegist=postPlayerTempRegist,e.postPlayerRegist=postPlayerRegist,e.postPlayerRegistRemove=postPlayerRegistRemove,e.getExecAllPlayerRemove=getExecAllPlayerRemove,e.getExecAllEntryRemove=getExecAllEntryRemove,e.getExecEntryRegist=getExecEntryRegist,e.postChangeGameState=postChangeGameState,e.getFetchAllPlayerInfo=getFetchAllPlayerInfo,e.postSelfRoleChecked=postSelfRoleChecked}(a||(a={}))},4033:function(e,t,n){e.exports=n(290)}},function(e){e.O(0,[176,395,981,971,864,744],function(){return e(e.s=2901)}),_N_E=e.O()}]);