(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[173],{9857:function(e,n,t){Promise.resolve().then(t.bind(t,719))},719:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Home}});var r=t(7437),s=t(4666),i=t(5981),o=t(2265),c=t(7499),l=t(6349),a=t(810);function Home(){let[e,n]=(0,o.useState)(void 0),[t,u]=(0,o.useState)(!1),[d,f]=(0,o.useState)(void 0),h={destinationType:l.X.MonitorSite,destinationDeviceId:"",senderType:c.t.Server,senderDeviceId:"",requestAction:a.g.GameScreenChange,actionParameter01:s.D.NightPhase,actionParameter02:"",actionParameter03:""},p=JSON.stringify(h,null,"	"),[_,x]=(0,o.useState)(p);if((0,o.useEffect)(()=>{f(new i.r(c.t.Debug,u,n))},[]),void 0==d)return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("p",{children:"Now Loading..."})});console.log(e);let j=JSON.stringify(e,null,"	");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"WebSocket TEST"}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"操作"}),(0,r.jsx)("form",{action:"",children:(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"送信・受信"}),(0,r.jsx)("p",{children:(0,r.jsx)("textarea",{name:"send-msg",id:"send-msg",onInput:function(e){x(e.target.value)},value:_,cols:80,rows:12,placeholder:"メッセージを入力"})}),(0,r.jsx)("p",{children:(0,r.jsx)("input",{type:"button",defaultValue:"送信",onClick:function(){let e=JSON.parse(_);null==d||d.send(e)}})})]})})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"受信メッセージ"}),(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:j})})]})]})}},622:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(2265),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,t){var r,i={},a=null,u=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(u=n.ref),n)o.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:u,props:i,_owner:c.current}}n.Fragment=i,n.jsx=q,n.jsxs=q},7437:function(e,n,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[395,981,971,864,744],function(){return e(e.s=9857)}),_N_E=e.O()}]);