(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75],{800:function(e,t,n){Promise.resolve().then(n.bind(n,2081))},2081:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return page_Home}});var a=n(7437),r=n(4666),s=n(5981),o=n(2265);function Home(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("p",{children:"Now Loading..."})})}function PreGame_Home(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"人狼パーティ"}),(0,a.jsx)("p",{children:"ようこそ"}),(0,a.jsx)("p",{children:"Please Waiting..."})]})}function PlayerJoiningEnded_Home(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"WOLLFICE"}),(0,a.jsx)("p",{children:"ゲームマスターがゲームの設定を行っています。"}),(0,a.jsx)("p",{children:"しばらくお待ちください..."})]})}function PlayerListDisplay_Home(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"プレイヤー発表"}),(0,a.jsx)("p",{children:(0,a.jsx)("strong",{children:"モニターに注目！"})})]})}var i=n(9823),l=n(2861);function RoleAssignment_Home(){let[e,t]=(0,o.useState)(!1);async function sendRoleChecked(){let e=l.O.getToAPIData(),n=await i.t.postSelfRoleChecked(e);void 0!=n&&n&&t(!0)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{children:[(0,a.jsx)("h1",{children:"役職発表"}),(0,a.jsx)("p",{children:"あなたは..."}),(0,a.jsx)("p",{children:"〇〇"}),(0,a.jsx)("p",{children:"です。"})]}),(0,a.jsx)("section",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(()=>e?(0,a.jsx)("li",{children:"ほかのプレイヤーを待っています..."}):(0,a.jsx)("li",{onClick:sendRoleChecked,children:"OK !!"}),{})})})]})}function DayPhaseStart_Home(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"昼のフェーズ開始"}),(0,a.jsx)("p",{children:"昼の時間になりました"}),(0,a.jsx)("p",{children:"話し合いを開始してください。"})]})}function DayPhase_Home(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"昼のフェーズ"}),(0,a.jsx)("p",{children:"残り時間.."}),(0,a.jsx)("p",{children:60})]})}function DayPhaseEnd_Home(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"昼のフェーズ終了"}),(0,a.jsx)("p",{children:"話し合いを終了してください。"})]})}function NightPhase_Home(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"夜のフェーズ"}),(0,a.jsx)("p",{children:"夜になりました"})]})}var c=n(7499),u=n(4033);function page_Home(){let e=(0,u.useRouter)(),[t,n]=(0,o.useState)(void 0),[d,h]=(0,o.useState)(void 0),[m,P]=(0,o.useState)(!1),y=(0,o.useRef)(!1),[p,f]=(0,o.useState)("");function movePage(e){f(e),y.current=!0}if((0,o.useEffect)(()=>{(async()=>{let e=l.O.getToAPIData(),[t,a]=await Promise.all([i.t.postExistsDeviceId(e),i.t.postCheckPlayerAlive(e)]);if(void 0!=t&&void 0!=a){if(!t){movePage("/pl/error/");return}if(!a){movePage("/pl/gameover/");return}n(new s.r(c.t.PlayerSite,P,h))}})()},[]),(0,o.useEffect)(()=>{void 0!=t&&m&&t.getCurrentGameState()},[t,m]),(0,o.useEffect)(()=>{""!==p&&e.push(p)},[p,e]),y.current)return console.log("pageChange is true"),(0,a.jsx)(Home,{});if(void 0==d)return console.log("wsRcvData == undefined"),(0,a.jsx)(Home,{});if(void 0==t)return console.log("wsService == undefined"),(0,a.jsx)(Home,{});let g=d.actionParameter01;switch(g){case r.D.Empty:break;case r.D.PreGame:return(0,a.jsx)(PreGame_Home,{});case r.D.PlayerJoining:return movePage("/pl/"),(0,a.jsx)(Home,{});case r.D.PlayerJoiningEnded:return(0,a.jsx)(PlayerJoiningEnded_Home,{});case r.D.PlayerListDisplay:return(0,a.jsx)(PlayerListDisplay_Home,{});case r.D.RoleAssignment:return(0,a.jsx)(RoleAssignment_Home,{});case r.D.DayPhaseStart:return(0,a.jsx)(DayPhaseStart_Home,{});case r.D.DayPhase:return(0,a.jsx)(DayPhase_Home,{});case r.D.DayPhaseEnd:return(0,a.jsx)(DayPhaseEnd_Home,{});case r.D.Voting:case r.D.VotingEnd:case r.D.VoteResult:case r.D.ExileAnnouncement:case r.D.FinalExileAnnouncement:case r.D.NightPhaseStart:break;case r.D.NightPhase:return(0,a.jsx)(NightPhase_Home,{});case r.D.NightPhaseEnd:case r.D.MorningPhaseStart:case r.D.NightActionResult:case r.D.GameEnd:case r.D.FinalResult:case r.D.RoleReveal:}return console.warn("nextState is other"),(0,a.jsx)(Home,{})}},9823:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});var a,r=n(9080);let TypedFormData=class TypedFormData extends FormData{stringifyValue(e){return String(e)}constructor(e){for(let t in super(),e)e.hasOwnProperty(t)&&this.append(t,this.stringifyValue(e[t]))}};!function(e){function makeAPIEndpointURL(e){let t="http://localhost:8080";return void 0==t?"":"".concat(t).concat(e)}async function getGetGameState(){let e=makeAPIEndpointURL(r.Y.Point.GetGetGameState);if(""===e)return;let t=await fetch(e),n=await t.json();return n.gameState}async function postExistsDeviceId(e){let t=makeAPIEndpointURL(r.Y.Point.PostExistsDeviceId);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),s=await a.json();return s.exists}async function postCheckPlayerAlive(e){let t=makeAPIEndpointURL(r.Y.Point.PostCheckPlayerAlive);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),s=await a.json();return s.aliveStatus}async function postSaveNewGame(e){let t=makeAPIEndpointURL(r.Y.Point.PostSaveNewGame);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),s=await a.json();return s.result}async function postExistsEntryDeviceId(e){let t=makeAPIEndpointURL(r.Y.Point.PostExistsEntryDeviceId);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),s=await a.json();return s.exists}async function postCheckDuplEntryPlayerName(e){let t=makeAPIEndpointURL(r.Y.Point.PostCheckDuplEntryPlayerName);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n});console.log(a);let s=await a.json();return console.log(s),console.log(s.existsDuplicate),s.existsDuplicate}async function postPlayerTempRegist(e){let t=makeAPIEndpointURL(r.Y.Point.PostPlayerTempRegist);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),s=await a.json();return s.result}async function postPlayerRegist(e){let t=makeAPIEndpointURL(r.Y.Point.PostPlayerRegist);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),s=await a.json();return s.result}async function postPlayerRegistRemove(e){let t=makeAPIEndpointURL(r.Y.Point.PostPlayerRegistRemove);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),s=await a.json();return s.result}async function getExecAllPlayerRemove(){let e=makeAPIEndpointURL(r.Y.Point.GetExecAllPlayerRemove);if(""===e)return;let t=await fetch(e),n=await t.json();return n.result}async function getExecAllEntryRemove(){let e=makeAPIEndpointURL(r.Y.Point.GetExecAllEntryRemove);if(""===e)return;let t=await fetch(e),n=await t.json();return n.result}async function getExecEntryRegist(){let e=makeAPIEndpointURL(r.Y.Point.GetExecEntryRegist);if(""===e)return;let t=await fetch(e),n=await t.json();return n.result}async function postChangeGameState(e){let t=makeAPIEndpointURL(r.Y.Point.PostChangeGameState);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),s=await a.json();return s.result}async function getFetchAllPlayerInfo(){let e=makeAPIEndpointURL(r.Y.Point.GetFetchAllPlayerInfo);if(""===e)return;let t=await fetch(e),n=await t.json();return n.apiAllPlayerInfo}async function postSelfRoleChecked(e){let t=makeAPIEndpointURL(r.Y.Point.PostSelfRoleChecked);if(""===t)return;let n=new TypedFormData(e),a=await fetch(t,{method:"POST",body:n}),s=await a.json();return s.result}e.getGetGameState=getGetGameState,e.postExistsDeviceId=postExistsDeviceId,e.postCheckPlayerAlive=postCheckPlayerAlive,e.postSaveNewGame=postSaveNewGame,e.postExistsEntryDeviceId=postExistsEntryDeviceId,e.postCheckDuplEntryPlayerName=postCheckDuplEntryPlayerName,e.postPlayerTempRegist=postPlayerTempRegist,e.postPlayerRegist=postPlayerRegist,e.postPlayerRegistRemove=postPlayerRegistRemove,e.getExecAllPlayerRemove=getExecAllPlayerRemove,e.getExecAllEntryRemove=getExecAllEntryRemove,e.getExecEntryRegist=getExecEntryRegist,e.postChangeGameState=postChangeGameState,e.getFetchAllPlayerInfo=getFetchAllPlayerInfo,e.postSelfRoleChecked=postSelfRoleChecked}(a||(a={}))},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=n(2265),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var a,s={},c=null,u=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,a)&&!l.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)},4033:function(e,t,n){e.exports=n(290)}},function(e){e.O(0,[395,981,971,864,744],function(){return e(e.s=800)}),_N_E=e.O()}]);