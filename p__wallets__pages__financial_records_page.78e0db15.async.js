(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[850],{94708:function(g,o,n){"use strict";n.r(o);var d=n(20310),t=n(47416),c=n(67329),m=n(93874),i=n(67294),v=n(83832),e=n(85893),_,p,b=t.ZP.div(_||(_=(0,d.Z)([`
  .cell {
    display: flex;
    border-bottom: 1px solid #e6ebf5;

    p {
      padding: 15px 0;
      box-sizing: border-box;
      flex: 1;
      text-align: center;
      color: #000;
      font-weight: 500;
      margin-bottom: 0;
    }
  }

  .top {
    background: #f8f9fc;
    border-bottom: none;

    p {
      color: #666d7f;
    }
  }
`]))),f=["\u5BA1\u6838\u4E2D","\u5B8C\u6210","\u5931\u8D25"],h=["#333333","#0483E0","#EC404D"],s=function(){var u=(0,c.f)(m.w.ccp_transactionLog),l=u.request,E=u.data,P=u.status;return(0,i.useEffect)(function(){l(0)},[]),P==c.o.wait?(0,e.jsx)(v.Z,{}):(0,e.jsxs)(b,{children:[(0,e.jsxs)("div",{className:"top cell",children:[(0,e.jsx)("p",{children:"Time"}),(0,e.jsx)("p",{children:"Amount"}),(0,e.jsx)("p",{children:"Currency type"}),(0,e.jsx)("p",{children:"Arrival account"}),(0,e.jsx)("p",{children:"Status"})]}),E==null?(0,e.jsx)("div",{}):E.map(function(r,j){return(0,e.jsxs)("div",{className:"cell",children:[(0,e.jsx)("p",{children:r.time}),(0,e.jsx)("p",{children:parseFloat(r.amount).toFixed(2)}),(0,e.jsx)("p",{children:r.trans_type}),(0,e.jsx)("p",{children:r.remarks}),(0,e.jsx)("p",{style:{color:h[r.state]},children:f[r.state]})]},r.id)})]})},D=t.ZP.div(p||(p=(0,d.Z)([`
  padding: 20px;
  box-sizing: border-box;
`])));o.default=function(){return(0,e.jsx)(D,{children:(0,e.jsx)(s,{})})}},67329:function(g,o,n){"use strict";n.d(o,{f:function(){return v},o:function(){return e}});var d=n(3182),t=n(2824),c=n(94043),m=n.n(c),i=n(67294),v=function(p){var b=(0,i.useState)(e.start),f=(0,t.Z)(b,2),h=f[0],s=f[1],D=(0,i.useState)(),O=(0,t.Z)(D,2),u=O[0],l=O[1],E=(0,i.useCallback)(function(){var P=(0,d.Z)(m().mark(function r(j){var x,M;return m().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s(e.wait),a.next=4,p(j);case 4:x=a.sent,l(x),s(e.success),a.next=14;break;case 9:a.prev=9,a.t0=a.catch(0),M={err:a.t0},l(M),s(e.failure);case 14:case"end":return a.stop()}},r,null,[[0,9]])}));return function(r){return P.apply(this,arguments)}}(),[s,l]);return{status:h,request:E,data:u}},e;(function(_){_[_.start=0]="start",_[_.wait=1]="wait",_[_.success=2]="success",_[_.failure=3]="failure"})(e||(e={}))}}]);
