(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[850],{94708:function(M,o,n){"use strict";n.r(o);var d=n(20310),t=n(47416),c=n(67329),m=n(93874),i=n(67294),v=n(83832),e=n(85893),s,f,x=t.ZP.div(s||(s=(0,d.Z)([`
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
`]))),p=["\u5BA1\u6838\u4E2D","\u5B8C\u6210","\u5931\u8D25"],b=["#333333","#0483E0","#EC404D"],a=function(){var u=(0,c.f)(m.w.ccp_transactionLog),l=u.request,E=u.data,O=u.status;return(0,i.useEffect)(function(){l(0)},[]),O==c.o.wait?(0,e.jsx)(v.Z,{}):(0,e.jsxs)(x,{children:[(0,e.jsxs)("div",{className:"top cell",children:[(0,e.jsx)("p",{children:"Time"}),(0,e.jsx)("p",{children:"Amount"}),(0,e.jsx)("p",{children:"Currency type"}),(0,e.jsx)("p",{children:"Arrival account"}),(0,e.jsx)("p",{children:"Status"})]}),E==null?(0,e.jsx)("div",{}):E.map(function(r,P){return(0,e.jsxs)("div",{className:"cell",children:[(0,e.jsx)("p",{children:r.time}),(0,e.jsx)("p",{children:parseFloat(r.amount).toFixed(2)}),(0,e.jsx)("p",{children:r.trans_type}),(0,e.jsx)("p",{children:r.remarks}),(0,e.jsx)("p",{style:{color:b[r.state]},children:p[r.state]})]},r.id)})]})},h=t.ZP.div(f||(f=(0,d.Z)([`
  padding: 20px;
  box-sizing: border-box;
`])));o.default=function(){return(0,e.jsx)(h,{children:(0,e.jsx)(a,{})})}},67329:function(M,o,n){"use strict";n.d(o,{f:function(){return v},o:function(){return e}});var d=n(3182),t=n(2824),c=n(94043),m=n.n(c),i=n(67294),v=function(f){var x=(0,i.useState)(e.start),p=(0,t.Z)(x,2),b=p[0],a=p[1],h=(0,i.useState)(),D=(0,t.Z)(h,2),u=D[0],l=D[1],E=(0,i.useCallback)(function(){var O=(0,d.Z)(m().mark(function r(P){var g,j;return m().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.prev=0,a(e.wait),_.next=4,f(P);case 4:g=_.sent,l(g),a(e.success),_.next=14;break;case 9:_.prev=9,_.t0=_.catch(0),j={err:_.t0},l(j),a(e.failure);case 14:case"end":return _.stop()}},r,null,[[0,9]])}));return function(r){return O.apply(this,arguments)}}(),[a,l]);return{status:b,request:E,data:u}},e;(function(s){s[s.start=0]="start",s[s.wait=1]="wait",s[s.success=2]="success",s[s.failure=3]="failure"})(e||(e={}))}}]);
