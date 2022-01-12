(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[310],{81262:function(){},16993:function(M,x,e){"use strict";e.d(x,{b:function(){return Y}});var c=e(57663),B=e(71577),I=e(20310),l=e(67294),U=e(47416),N=e(85893),p,d=(0,U.ZP)(B.Z)(p||(p=(0,I.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
`]))),Y=function(E){var T=E.text,D=E.block,A=D===void 0?!0:D,F=E.onClick;return(0,N.jsx)(d,{type:"default",shape:"round",onClick:function(){return F&&F()},size:"large",block:A,children:T})}},62210:function(M,x,e){"use strict";e.r(x),e.d(x,{default:function(){return sn}});var c=e(13062),B=e(71230),I=e(89032),l=e(15746),U=e(36017),N=e(35247),p=e(20310),d=e(47416),Y=e(16924),m=e(67294),E=e(16993),T=e(39916),D=e(34792),A=e(55026),F=e(3182),V=e(94043),_=e.n(V),en=e(53776),P=e(67329),Z=e(93874),k=e(83832),S=e(10210),n=e(85893),$,h=d.ZP.div($||($=(0,p.Z)([`
  .top {
    margin-bottom: 30px;

    h2 {
      position: relative;
      padding: 0 48px;
      color: #2f2e41;
      font-weight: 700;
      font-size: 20px;
      text-align: center;
      word-break: break-word;
    }
  }

  .switch {
    display: flex;
    background: #e0ffed;
    border-radius: 100px;
    cursor: pointer;

    p {
      position: relative;
      flex: 1;
      height: 48px;
      margin-bottom: 0;
      color: #505f79;
      line-height: 48px;
      white-space: nowrap;
      text-align: center;
      border-radius: 100px;
      transition: color 0.2s ease;

      &.ac {
        color: #fff;
        font-weight: 600;
        background: linear-gradient(270deg, #89d143, #75db8d);
      }
    }
  }

  .price {
    margin-top: 24px;
    padding: 15px 10px 24px;
    text-align: center;
    background: rgba(224, 255, 237, 0.32);
    border-radius: 16px;

    h3 {
      margin-bottom: 0;
      color: #2f2e41;
      font-weight: 700;
      font-size: 36px;
    }

    h4 {
      display: flex;
      justify-content: center;
      margin-bottom: 0;
      color: #909090;
      font-size: 14px;

      span {
        display: block;
        margin-left: 8px;
        color: #7cd770;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    a {
    }
  }
`]))),an=function(C){var o,y,a=C.card,v=(0,en.t)("@@initialState"),b=v.initialState,W=(0,m.useContext)(T.tC),Q=W.onDismiss,rn=(0,P.f)(Z.w.nftCancelSell),tn=rn.request,on=rn.status,j=(0,P.f)(Z.w.nftBuy),fn=j.request,pn=j.status,gn=(0,m.useCallback)((0,F.Z)(_().mark(function ln(){return _().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.prev=0,O.next=3,tn(a.id);case 3:Q(),A.default.success("\u64CD\u4F5C\u6210\u529F"),O.next=10;break;case 7:O.prev=7,O.t0=O.catch(0),A.default.error(O.t0);case 10:case"end":return O.stop()}},ln,null,[[0,7]])})),[]),mn=(0,m.useCallback)((0,F.Z)(_().mark(function ln(){var un,O,cn;return _().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.next=3,S.e.tronLink.request({method:"tron_requestAccounts"});case 3:return un=f.sent,console.log(un),f.next=7,S.e.tronWeb.transactionBuilder.sendTrx("TD76Z3CsqeamGBGMthJYL4BBQV9kLGLGFh",parseInt(a.market_price)*1e6);case 7:return O=f.sent,f.next=10,S.e.tronWeb.trx.sign(O);case 10:return cn=f.sent,console.log(cn),f.next=14,tn(a.id);case 14:Q(),A.default.success("\u64CD\u4F5C\u6210\u529F"),f.next=21;break;case 18:f.prev=18,f.t0=f.catch(0),A.default.error(f.t0);case 21:case"end":return f.stop()}},ln,null,[[0,18]])})),[]),dn=parseFloat(a.market_price);return(0,n.jsxs)(h,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:"\u786E\u8BA4\u8D2D\u4E70"})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)("h3",{children:dn}),(0,n.jsxs)("h4",{children:["\u50F9\u683C (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",dn*1.5]})]})]}),on==P.o.wait||pn==P.o.wait?(0,n.jsx)(k.Z,{}):(0,n.jsx)("div",{className:"button",children:(b==null||(o=b.currentUser)===null||o===void 0?void 0:o.id)!=a.u_id?(0,n.jsx)(E.b,{text:"\u64A4\u9500\u51FA\u552E",onClick:gn}):(0,n.jsx)(E.b,{text:"\u8D2D\u4E70",onClick:mn})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("a",{href:"",children:"\u8D2D\u4E70CCP"}),(0,n.jsxs)("p",{children:["\u4F59\u989D\uFF1A ",b==null||(y=b.currentUser)===null||y===void 0?void 0:y.ccp_coin," CCP"]})]})]})},s=(0,m.createContext)({props:{addtime:"",block_address:"",daughters_json:"",dog_attr:[],dog_breed:0,dog_name:"",dog_sex:0,dog_skill:[],father_id:0,id:0,img_url:"",is_selling:0,market_price:"",mother_id:0,reproduce_count:0,sons_json:"",u_id:0,updatetime:""}}),t=e(47673),u=e(1011),r=e(46677),i=e.n(r),g,H=d.ZP.div(g||(g=(0,p.Z)([`
  .top {
    margin-bottom: 30px;

    h2 {
      position: relative;
      padding: 0 48px;
      color: #2f2e41;
      font-weight: 700;
      font-size: 20px;
      text-align: center;
      word-break: break-word;
    }
  }

  .price {
    margin-top: 24px;
    padding: 15px 10px 24px;
    text-align: center;
    background: rgba(224, 255, 237, 0.32);
    border-radius: 16px;

    h3 {
      margin-bottom: 0;
      color: #2f2e41;
      font-weight: 700;
      font-size: 36px;
    }

    h4 {
      display: flex;
      justify-content: center;
      margin-bottom: 0;
      color: #909090;
      font-size: 14px;

      span {
        display: block;
        margin-left: 8px;
        color: #7cd770;
      }
    }
  }

  .logo {
    display: block;
    width: 20px;
  }
`]))),w=function(C){var o=C.card,y=parseFloat(o.market_price),a=(0,m.useContext)(T.tC),v=a.onDismiss,b=(0,P.f)(Z.w.nftSell),W=b.request,Q=b.status,rn=(0,m.useCallback)((0,F.Z)(_().mark(function tn(){return _().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.prev=0,j.next=3,W(o.id);case 3:v(),A.default.success("\u51FA\u552E\u6210\u529F"),j.next=10;break;case 7:j.prev=7,j.t0=j.catch(0),A.default.error(j.t0);case 10:case"end":return j.stop()}},tn,null,[[0,7]])})),[]);return(0,n.jsxs)(H,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:"\u786E\u8BA4\u51FA\u552E"})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)(u.Z,{prefix:(0,n.jsx)("img",{className:"logo",src:i(),alt:""}),suffix:"CCP",style:{width:"60%",borderRadius:"10px",height:"45px",margin:"20px"}}),(0,n.jsxs)("h4",{children:["\u50F9\u683C (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",y*1.5]})]})]}),(0,n.jsx)("div",{className:"button",children:Q==P.o.wait?(0,n.jsx)(k.Z,{}):(0,n.jsx)(E.b,{text:"\u51FA\u552E",onClick:rn})})]})},L,J=d.ZP.div(L||(L=(0,p.Z)([`
  padding: 20px;
  box-sizing: border-box;
  background: #f5fff9;
  border-radius: 32px;

  .title {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    color: #2f2e41;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.2;

    .images {
      display: flex;
    }

    a {
      display: block;
      box-sizing: border-box;
      width: 32px;
      height: 32px;
      margin-left: 12px;
      padding: 5px;
      background: linear-gradient(270deg, #89d143, #75db8d);
      border-radius: 100%;
    }

    img {
      display: block;
      width: 100%;
    }
  }

  .center {
    display: flex;
    margin: 20px 0;

    div {
      flex: 1;

      h3 {
        display: flex;
        color: #505f79;
        font-size: 16px;

        span {
          color: #7cd770;
        }
      }

      h4 {
        font-weight: 600;
        font-size: 30px;
      }
    }

    div:first-child {
      h4 {
        //color: #7cd770;
      }
    }
  }

  .button {
    > button {
      height: 50px;
    }
  }
`]))),X=function(){var C=(0,m.useContext)(T.tC),o=C.onPresent,y=(0,m.useContext)(s),a=y.props;return a?(0,n.jsxs)(J,{children:[(0,n.jsxs)("h3",{className:"title",children:[a.dog_name,(0,n.jsxs)("div",{className:"images",children:[(0,n.jsx)("a",{href:"",children:(0,n.jsx)("img",{src:"https://yooshi.io/img/icon-share.a52e5237.svg",alt:""})}),(0,n.jsx)("a",{href:"",children:(0,n.jsx)("img",{src:"https://yooshi.io/img/icon-info.1fdf5ee4.svg",alt:""})})]})]}),(0,n.jsx)("div",{className:"center",children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{children:["\u51FA\u552E\u50F9\u683C (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",parseFloat(a.market_price)*1.5]})]}),(0,n.jsx)("h4",{children:parseFloat(a.market_price).toFixed(2)})]})}),a.is_selling==1?(0,n.jsx)("div",{className:"button",onClick:function(){return o((0,n.jsx)(an,{card:a}),390)},children:(0,n.jsx)(E.b,{text:"\u786E\u8BA4\u8D2D\u4E70"})}):(0,n.jsx)("div",{className:"button",onClick:function(){return o((0,n.jsx)(w,{card:a}),390)},children:(0,n.jsx)(E.b,{text:"\u786E\u8BA4\u51FA\u552E"})})]}):(0,n.jsx)(k.Z,{})},R,G=d.ZP.div(R||(R=(0,p.Z)([`
  padding: 20px;
  box-sizing: border-box;
  background: #f5fff9;
  border-radius: 32px;

  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    span {
      color: #505f79;
      font-size: 14px;
    }
  }
`]))),z=function(){var C=(0,m.useContext)(s),o=C.props;return o?(0,n.jsxs)(G,{children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"\u64C1\u6709\u8005"}),(0,n.jsx)("span",{children:o.u_id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"}),(0,n.jsx)("span",{children:o.block_address})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"Token ID"}),(0,n.jsx)("span",{children:o.id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"\u8CC7\u7522\u5354\u8B70"}),(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"\u8CC7\u7522\u516C\u93C8"}),(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"})]})]}):(0,n.jsx)(k.Z,{})},q,nn=d.ZP.div(q||(q=(0,p.Z)([`
  padding: 20px;
  box-sizing: border-box;

  .top {
    width: 100%;
    margin-top: 20px;
    padding: 32px;
    background: rgb(224, 255, 237);
    border-radius: 32px;

    .left {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 20px;
      background-color: rgb(245, 255, 249);
      border-radius: 24px;
      box-shadow: rgba(117, 219, 141, 0.24) 0px 8px 30px 0px;
      -webkit-box-flex: 1;
      -webkit-box-align: center;
      -webkit-box-pack: center;

      .tis {
        position: absolute;
        top: 26px;
        right: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        color: #fff;
        font-weight: 600;
        font-size: 13px;
        background: linear-gradient(270deg, #89d143, #75db8d);
        border-radius: 100%;
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .bottom {
    margin-top: 40px;
    padding: 28px 32px;
    background: #fff;
    border-radius: 32px;
    box-shadow: 0 4px 15px 0 rgb(117 219 141 / 24%);

    .title {
      margin-bottom: 16px;
      padding-bottom: 14px;
      color: #333;
      font: 16px/1.4 Noto Sans, sans-serif;
      font-weight: bold;
      font-size: 20px;
      border-bottom: 1px solid #f5f8fb;
    }

    p {
      margin: 5px 0;
      color: #505f79;
      font: 16px/1.4 Noto Sans, sans-ser;
      font-size: 14px;
      line-height: 1.2;
    }
  }
`]))),sn=function(K){var C=K.location.query,o=C.name,y=C.id,a=C.path;a||(a="Market");var v=(0,P.f)(Z.w.nftDetail),b=v.request,W=v.status,Q=v.data;return(0,m.useEffect)(function(){b(y)},[y]),(0,n.jsxs)(nn,{children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s.Provider,{value:{props:Q},children:[(0,n.jsxs)(N.Z,{children:[(0,n.jsx)(N.Z.Item,{children:(0,n.jsx)(Y.Link,{style:{textTransform:"capitalize"},to:"/"+a,children:a})}),(0,n.jsx)(N.Z.Item,{children:(0,n.jsx)("a",{href:"",children:o})})]}),(0,n.jsx)("div",{className:"top",children:W===P.o.wait?(0,n.jsx)(k.Z,{}):(0,n.jsxs)(B.Z,{gutter:24,children:[(0,n.jsx)(l.Z,{md:12,sm:12,lg:12,children:(0,n.jsxs)("div",{className:"left",children:[(0,n.jsx)("img",{src:Q==null?void 0:Q.img_url,alt:""}),(0,n.jsx)("span",{className:"tis",children:"100x"})]})}),(0,n.jsx)(l.Z,{md:12,sm:12,lg:12,children:(0,n.jsxs)("div",{className:"right",children:[(0,n.jsx)(X,{}),(0,n.jsx)("div",{style:{height:"20px"}}),(0,n.jsx)(z,{})]})})]})})]})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("h3",{className:"title",children:"\u5E02\u5834\u898F\u5247"}),(0,n.jsx)("p",{children:"1\u3001\u652F\u6301YOOSHI\u53CABNB\u8CFC\u8CB7\uFF0CBNB\u51FA\u50F9\u7684\u5E63\u7A2E\uFF0C\u5C07\u6309\u6700\u4F4E\u6536\u5230\u7684\u5E63\u7A2E\u6578\u91CF\u9032\u884CSwap\u652F\u4ED8\uFF0C\u591A\u51FA\u7684Token\u5C07\u9000\u56DE\u81F3\u9322\u5305\uFF1B"}),(0,n.jsx)("p",{children:"2\u3001NFT\u5728\u51FA\u552E\u639B\u55AE\u904E\u7A0B\u4E2D\uFF0C\u4E0D\u6539\u8B8A\u7528\u6236\u7684\u6240\u6709\u6B0A\uFF0C\u5982\u679C\u8A72NFT\u767C\u751F\u8F49\u79FB\u3001\u767C\u5E03\u62CD\u8CE3\u3001\u8CEA\u62BC\u6316\u7926\uFF0C\u5C07\u53D6\u6D88NFT\u7684\u51FA\u552E\uFF1B"}),(0,n.jsx)("p",{children:"3\u3001\u624B\u7E8C\u8CBB\u70BA\u4EA4\u6613\u91D1\u984D\u76843%\uFF0C\u5176\u4E2D50%\u5C07\u92B7\u6BC0\uFF0C40%\u9032\u5165\u7926\u6C60\uFF0C10%\u734E\u52F5\u958B\u767C\u8005"})]})]})}},67329:function(M,x,e){"use strict";e.d(x,{f:function(){return N},o:function(){return p}});var c=e(3182),B=e(2824),I=e(94043),l=e.n(I),U=e(67294),N=function(Y){var m=(0,U.useState)(p.start),E=(0,B.Z)(m,2),T=E[0],D=E[1],A=(0,U.useState)(),F=(0,B.Z)(A,2),V=F[0],_=F[1],en=(0,U.useCallback)(function(){var P=(0,c.Z)(l().mark(function Z(k){var S,n;return l().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.prev=0,D(p.wait),h.next=4,Y(k);case 4:S=h.sent,_(S),D(p.success),h.next=14;break;case 9:h.prev=9,h.t0=h.catch(0),n={err:h.t0},_(n),D(p.failure);case 14:case"end":return h.stop()}},Z,null,[[0,9]])}));return function(Z){return P.apply(this,arguments)}}(),[D,_]);return{status:T,request:en,data:V}},p;(function(d){d[d.start=0]="start",d[d.wait=1]="wait",d[d.success=2]="success",d[d.failure=3]="failure"})(p||(p={}))},46677:function(M){M.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},35247:function(M,x,e){"use strict";e.d(x,{Z:function(){return an}});var c=e(22122),B=e(96156),I=e(85061),l=e(67294),U=e(94184),N=e.n(U),p=e(50344),d=e(57254),Y=e(81555),m=e(86032),E=function(s,t){var u={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&t.indexOf(r)<0&&(u[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(s);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(s,r[i])&&(u[r[i]]=s[r[i]]);return u},T=function(t){var u=t.prefixCls,r=t.separator,i=r===void 0?"/":r,g=t.children,H=t.overlay,w=t.dropdownProps,L=E(t,["prefixCls","separator","children","overlay","dropdownProps"]),J=l.useContext(m.E_),X=J.getPrefixCls,R=X("breadcrumb",u),G=function(nn){return H?l.createElement(Y.Z,(0,c.Z)({overlay:H,placement:"bottomCenter"},w),l.createElement("span",{className:"".concat(R,"-overlay-link")},nn,l.createElement(d.Z,null))):nn},z;return"href"in L?z=l.createElement("a",(0,c.Z)({className:"".concat(R,"-link")},L),g):z=l.createElement("span",(0,c.Z)({className:"".concat(R,"-link")},L),g),z=G(z),g?l.createElement("span",null,z,i&&l.createElement("span",{className:"".concat(R,"-separator")},i)):null};T.__ANT_BREADCRUMB_ITEM=!0;var D=T,A=function(t){var u=t.children,r=l.useContext(m.E_),i=r.getPrefixCls,g=i("breadcrumb");return l.createElement("span",{className:"".concat(g,"-separator")},u||"/")};A.__ANT_BREADCRUMB_SEPARATOR=!0;var F=A,V=e(5404),_=e(21687),en=e(96159),P=function(s,t){var u={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&t.indexOf(r)<0&&(u[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(s);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(s,r[i])&&(u[r[i]]=s[r[i]]);return u};function Z(s,t){if(!s.breadcrumbName)return null;var u=Object.keys(t).join("|"),r=s.breadcrumbName.replace(new RegExp(":(".concat(u,")"),"g"),function(i,g){return t[g]||i});return r}function k(s,t,u,r){var i=u.indexOf(s)===u.length-1,g=Z(s,t);return i?l.createElement("span",null,g):l.createElement("a",{href:"#/".concat(r.join("/"))},g)}var S=function(t,u){return t=(t||"").replace(/^\//,""),Object.keys(u).forEach(function(r){t=t.replace(":".concat(r),u[r])}),t},n=function(t){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=(0,I.Z)(t),g=S(u,r);return g&&i.push(g),i},$=function(t){var u=t.prefixCls,r=t.separator,i=r===void 0?"/":r,g=t.style,H=t.className,w=t.routes,L=t.children,J=t.itemRender,X=J===void 0?k:J,R=t.params,G=R===void 0?{}:R,z=P(t,["prefixCls","separator","style","className","routes","children","itemRender","params"]),q=l.useContext(m.E_),nn=q.getPrefixCls,sn=q.direction,K,C=nn("breadcrumb",u);if(w&&w.length>0){var o=[];K=w.map(function(a){var v=S(a.path,G);v&&o.push(v);var b;return a.children&&a.children.length&&(b=l.createElement(V.Z,null,a.children.map(function(W){return l.createElement(V.Z.Item,{key:W.path||W.breadcrumbName},X(W,G,w,n(o,W.path,G)))}))),l.createElement(D,{overlay:b,separator:i,key:v||a.breadcrumbName},X(a,G,w,o))})}else L&&(K=(0,p.Z)(L).map(function(a,v){return a&&((0,_.Z)(a.type&&(a.type.__ANT_BREADCRUMB_ITEM===!0||a.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,en.Tm)(a,{separator:i,key:v}))}));var y=N()(C,(0,B.Z)({},"".concat(C,"-rtl"),sn==="rtl"),H);return l.createElement("div",(0,c.Z)({className:y,style:g},z),K)};$.Item=D,$.Separator=F;var h=$,an=h},36017:function(M,x,e){"use strict";var c=e(65056),B=e.n(c),I=e(81262),l=e.n(I),U=e(30887),N=e(59250)},15746:function(M,x,e){"use strict";var c=e(21584);x.Z=c.Z},89032:function(M,x,e){"use strict";var c=e(65056),B=e.n(c),I=e(6999)},71230:function(M,x,e){"use strict";var c=e(92820);x.Z=c.Z},13062:function(M,x,e){"use strict";var c=e(65056),B=e.n(c),I=e(6999)}}]);
