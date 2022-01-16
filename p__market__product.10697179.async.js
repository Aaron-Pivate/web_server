(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[310],{81262:function(){},16993:function(M,v,e){"use strict";e.d(v,{b:function(){return K}});var g=e(57663),B=e(71577),I=e(20310),i=e(67294),U=e(47416),N=e(85893),m,c=(0,U.ZP)(B.Z)(m||(m=(0,I.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
`]))),K=function(b){var T=b.text,D=b.block,_=D===void 0?!0:D,F=b.onClick;return(0,N.jsx)(c,{type:"default",shape:"round",onClick:function(){return F&&F()},size:"large",block:_,children:T})}},62210:function(M,v,e){"use strict";e.r(v),e.d(v,{default:function(){return J}});var g=e(13062),B=e(71230),I=e(89032),i=e(15746),U=e(36017),N=e(35247),m=e(20310),c=e(47416),K=e(16924),f=e(67294),b=e(16993),T=e(39916),D=e(34792),_=e(55026),F=e(3182),Q=e(94043),P=e.n(Q),q=e(53776),y=e(67329),Z=e(93874),k=e(83832),n=e(85893),G,$=c.ZP.div(G||(G=(0,m.Z)([`
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
`]))),E=function(C){var p,A,o=C.card,u=(0,q.t)("@@initialState"),h=u.initialState,z=(0,f.useContext)(T.tC),j=z.onDismiss,rn=(0,y.f)(Z.w.nftCancelSell),tn=rn.request,sn=rn.status,O=(0,y.f)(Z.w.nftBuy),un=O.request,on=O.status,dn=(0,f.useCallback)((0,F.Z)(P().mark(function an(){return P().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=3,tn(o.id);case 3:j(),_.default.success("\u64CD\u4F5C\u6210\u529F"),d.next=10;break;case 7:d.prev=7,d.t0=d.catch(0),_.default.error(d.t0);case 10:case"end":return d.stop()}},an,null,[[0,7]])})),[]),cn=(0,f.useCallback)((0,F.Z)(P().mark(function an(){return P().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=3,un(o.id);case 3:j(),_.default.success("\u64CD\u4F5C\u6210\u529F"),d.next=10;break;case 7:d.prev=7,d.t0=d.catch(0),_.default.error(d.t0);case 10:case"end":return d.stop()}},an,null,[[0,7]])})),[]),ln=parseFloat(o.market_price);return(0,n.jsxs)($,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:"\u786E\u8BA4\u8D2D\u4E70"})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)("h3",{children:ln}),(0,n.jsxs)("h4",{children:["\u50F9\u683C (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",ln*1.5]})]})]}),sn==y.o.wait||on==y.o.wait?(0,n.jsx)(k.Z,{}):(0,n.jsx)("div",{className:"button",children:(h==null||(p=h.currentUser)===null||p===void 0?void 0:p.id)!=o.u_id?(0,n.jsx)(b.b,{text:"\u64A4\u9500\u51FA\u552E",onClick:dn}):(0,n.jsx)(b.b,{text:"\u8D2D\u4E70",onClick:cn})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("a",{href:"",children:"\u8D2D\u4E70CCP"}),(0,n.jsxs)("p",{children:["\u4F59\u989D\uFF1A ",h==null||(A=h.currentUser)===null||A===void 0?void 0:A.ccp_coin," CCP"]})]})]})},nn=(0,f.createContext)({props:{addtime:"",block_address:"",daughters_json:"",dog_attr:[],dog_breed:0,dog_name:"",dog_sex:0,dog_skill:[],father_id:0,id:0,img_url:"",is_selling:0,market_price:"",mother_id:0,reproduce_count:0,sons_json:"",u_id:0,updatetime:""}}),s=e(47673),t=e(1011),l=e(46677),r=e.n(l),a,x=c.ZP.div(a||(a=(0,m.Z)([`
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
`]))),H=function(C){var p=C.card,A=parseFloat(p.market_price),o=(0,f.useContext)(T.tC),u=o.onDismiss,h=(0,y.f)(Z.w.nftSell),z=h.request,j=h.status,rn=(0,f.useCallback)((0,F.Z)(P().mark(function tn(){return P().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.prev=0,O.next=3,z(p.id);case 3:u(),_.default.success("\u51FA\u552E\u6210\u529F"),O.next=10;break;case 7:O.prev=7,O.t0=O.catch(0),_.default.error(O.t0);case 10:case"end":return O.stop()}},tn,null,[[0,7]])})),[]);return(0,n.jsxs)(x,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:"\u786E\u8BA4\u51FA\u552E"})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)(t.Z,{prefix:(0,n.jsx)("img",{className:"logo",src:r(),alt:""}),suffix:"CCP",style:{width:"60%",borderRadius:"10px",height:"45px",margin:"20px"}}),(0,n.jsxs)("h4",{children:["\u50F9\u683C (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",A*1.5]})]})]}),(0,n.jsx)("div",{className:"button",children:j==y.o.wait?(0,n.jsx)(k.Z,{}):(0,n.jsx)(b.b,{text:"\u51FA\u552E",onClick:rn})})]})},R,S=c.ZP.div(R||(R=(0,m.Z)([`
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
`]))),X=function(){var C=(0,f.useContext)(T.tC),p=C.onPresent,A=(0,f.useContext)(nn),o=A.props;return o?(0,n.jsxs)(S,{children:[(0,n.jsxs)("h3",{className:"title",children:[o.dog_name,(0,n.jsxs)("div",{className:"images",children:[(0,n.jsx)("a",{href:"",children:(0,n.jsx)("img",{src:"https://yooshi.io/img/icon-share.a52e5237.svg",alt:""})}),(0,n.jsx)("a",{href:"",children:(0,n.jsx)("img",{src:"https://yooshi.io/img/icon-info.1fdf5ee4.svg",alt:""})})]})]}),(0,n.jsx)("div",{className:"center",children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{children:["\u51FA\u552E\u50F9\u683C (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",parseFloat(o.market_price)*1.5]})]}),(0,n.jsx)("h4",{children:parseFloat(o.market_price).toFixed(2)})]})}),o.is_selling==1?(0,n.jsx)("div",{className:"button",onClick:function(){return p((0,n.jsx)(E,{card:o}),390)},children:(0,n.jsx)(b.b,{text:"\u786E\u8BA4\u8D2D\u4E70"})}):(0,n.jsx)("div",{className:"button",onClick:function(){return p((0,n.jsx)(H,{card:o}),390)},children:(0,n.jsx)(b.b,{text:"\u786E\u8BA4\u51FA\u552E"})})]}):(0,n.jsx)(k.Z,{})},Y,w=c.ZP.div(Y||(Y=(0,m.Z)([`
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
`]))),L=function(){var C=(0,f.useContext)(nn),p=C.props;return p?(0,n.jsxs)(w,{children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"\u64C1\u6709\u8005"}),(0,n.jsx)("span",{children:p.u_id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"}),(0,n.jsx)("span",{children:p.block_address})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"Token ID"}),(0,n.jsx)("span",{children:p.id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"\u8CC7\u7522\u5354\u8B70"}),(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"\u8CC7\u7522\u516C\u93C8"}),(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"})]})]}):(0,n.jsx)(k.Z,{})},W,en=c.ZP.div(W||(W=(0,m.Z)([`
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
`]))),J=function(V){var C=V.location.query,p=C.name,A=C.id,o=C.path;o||(o="Market");var u=(0,y.f)(Z.w.nftDetail),h=u.request,z=u.status,j=u.data;return(0,f.useEffect)(function(){h(A)},[A]),(0,n.jsxs)(en,{children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(nn.Provider,{value:{props:j},children:[(0,n.jsxs)(N.Z,{children:[(0,n.jsx)(N.Z.Item,{children:(0,n.jsx)(K.Link,{style:{textTransform:"capitalize"},to:"/"+o,children:o})}),(0,n.jsx)(N.Z.Item,{children:(0,n.jsx)("a",{href:"",children:p})})]}),(0,n.jsx)("div",{className:"top",children:z===y.o.wait?(0,n.jsx)(k.Z,{}):(0,n.jsxs)(B.Z,{gutter:24,children:[(0,n.jsx)(i.Z,{md:12,sm:12,lg:12,children:(0,n.jsxs)("div",{className:"left",children:[(0,n.jsx)("img",{src:j==null?void 0:j.img_url,alt:""}),(0,n.jsx)("span",{className:"tis",children:"100x"})]})}),(0,n.jsx)(i.Z,{md:12,sm:12,lg:12,children:(0,n.jsxs)("div",{className:"right",children:[(0,n.jsx)(X,{}),(0,n.jsx)("div",{style:{height:"20px"}}),(0,n.jsx)(L,{})]})})]})})]})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("h3",{className:"title",children:"\u5E02\u5834\u898F\u5247"}),(0,n.jsx)("p",{children:"1\u3001\u652F\u6301YOOSHI\u53CABNB\u8CFC\u8CB7\uFF0CBNB\u51FA\u50F9\u7684\u5E63\u7A2E\uFF0C\u5C07\u6309\u6700\u4F4E\u6536\u5230\u7684\u5E63\u7A2E\u6578\u91CF\u9032\u884CSwap\u652F\u4ED8\uFF0C\u591A\u51FA\u7684Token\u5C07\u9000\u56DE\u81F3\u9322\u5305\uFF1B"}),(0,n.jsx)("p",{children:"2\u3001NFT\u5728\u51FA\u552E\u639B\u55AE\u904E\u7A0B\u4E2D\uFF0C\u4E0D\u6539\u8B8A\u7528\u6236\u7684\u6240\u6709\u6B0A\uFF0C\u5982\u679C\u8A72NFT\u767C\u751F\u8F49\u79FB\u3001\u767C\u5E03\u62CD\u8CE3\u3001\u8CEA\u62BC\u6316\u7926\uFF0C\u5C07\u53D6\u6D88NFT\u7684\u51FA\u552E\uFF1B"}),(0,n.jsx)("p",{children:"3\u3001\u624B\u7E8C\u8CBB\u70BA\u4EA4\u6613\u91D1\u984D\u76843%\uFF0C\u5176\u4E2D50%\u5C07\u92B7\u6BC0\uFF0C40%\u9032\u5165\u7926\u6C60\uFF0C10%\u734E\u52F5\u958B\u767C\u8005"})]})]})}},67329:function(M,v,e){"use strict";e.d(v,{f:function(){return N},o:function(){return m}});var g=e(3182),B=e(2824),I=e(94043),i=e.n(I),U=e(67294),N=function(K){var f=(0,U.useState)(m.start),b=(0,B.Z)(f,2),T=b[0],D=b[1],_=(0,U.useState)(),F=(0,B.Z)(_,2),Q=F[0],P=F[1],q=(0,U.useCallback)(function(){var y=(0,g.Z)(i().mark(function Z(k){var n,G;return i().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.prev=0,D(m.wait),E.next=4,K(k);case 4:n=E.sent,P(n),D(m.success),E.next=14;break;case 9:E.prev=9,E.t0=E.catch(0),G={err:E.t0},P(G),D(m.failure);case 14:case"end":return E.stop()}},Z,null,[[0,9]])}));return function(Z){return y.apply(this,arguments)}}(),[D,P]);return{status:T,request:q,data:Q}},m;(function(c){c[c.start=0]="start",c[c.wait=1]="wait",c[c.success=2]="success",c[c.failure=3]="failure"})(m||(m={}))},46677:function(M){M.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},35247:function(M,v,e){"use strict";e.d(v,{Z:function(){return nn}});var g=e(22122),B=e(96156),I=e(85061),i=e(67294),U=e(94184),N=e.n(U),m=e(50344),c=e(57254),K=e(81555),f=e(86032),b=function(s,t){var l={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&t.indexOf(r)<0&&(l[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(s);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(s,r[a])&&(l[r[a]]=s[r[a]]);return l},T=function(t){var l=t.prefixCls,r=t.separator,a=r===void 0?"/":r,x=t.children,H=t.overlay,R=t.dropdownProps,S=b(t,["prefixCls","separator","children","overlay","dropdownProps"]),X=i.useContext(f.E_),Y=X.getPrefixCls,w=Y("breadcrumb",l),L=function(J){return H?i.createElement(K.Z,(0,g.Z)({overlay:H,placement:"bottomCenter"},R),i.createElement("span",{className:"".concat(w,"-overlay-link")},J,i.createElement(c.Z,null))):J},W;return"href"in S?W=i.createElement("a",(0,g.Z)({className:"".concat(w,"-link")},S),x):W=i.createElement("span",(0,g.Z)({className:"".concat(w,"-link")},S),x),W=L(W),x?i.createElement("span",null,W,a&&i.createElement("span",{className:"".concat(w,"-separator")},a)):null};T.__ANT_BREADCRUMB_ITEM=!0;var D=T,_=function(t){var l=t.children,r=i.useContext(f.E_),a=r.getPrefixCls,x=a("breadcrumb");return i.createElement("span",{className:"".concat(x,"-separator")},l||"/")};_.__ANT_BREADCRUMB_SEPARATOR=!0;var F=_,Q=e(5404),P=e(21687),q=e(96159),y=function(s,t){var l={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&t.indexOf(r)<0&&(l[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(s);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(s,r[a])&&(l[r[a]]=s[r[a]]);return l};function Z(s,t){if(!s.breadcrumbName)return null;var l=Object.keys(t).join("|"),r=s.breadcrumbName.replace(new RegExp(":(".concat(l,")"),"g"),function(a,x){return t[x]||a});return r}function k(s,t,l,r){var a=l.indexOf(s)===l.length-1,x=Z(s,t);return a?i.createElement("span",null,x):i.createElement("a",{href:"#/".concat(r.join("/"))},x)}var n=function(t,l){return t=(t||"").replace(/^\//,""),Object.keys(l).forEach(function(r){t=t.replace(":".concat(r),l[r])}),t},G=function(t){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,a=(0,I.Z)(t),x=n(l,r);return x&&a.push(x),a},$=function(t){var l=t.prefixCls,r=t.separator,a=r===void 0?"/":r,x=t.style,H=t.className,R=t.routes,S=t.children,X=t.itemRender,Y=X===void 0?k:X,w=t.params,L=w===void 0?{}:w,W=y(t,["prefixCls","separator","style","className","routes","children","itemRender","params"]),en=i.useContext(f.E_),J=en.getPrefixCls,V=en.direction,C,p=J("breadcrumb",l);if(R&&R.length>0){var A=[];C=R.map(function(u){var h=n(u.path,L);h&&A.push(h);var z;return u.children&&u.children.length&&(z=i.createElement(Q.Z,null,u.children.map(function(j){return i.createElement(Q.Z.Item,{key:j.path||j.breadcrumbName},Y(j,L,R,G(A,j.path,L)))}))),i.createElement(D,{overlay:z,separator:a,key:h||u.breadcrumbName},Y(u,L,R,A))})}else S&&(C=(0,m.Z)(S).map(function(u,h){return u&&((0,P.Z)(u.type&&(u.type.__ANT_BREADCRUMB_ITEM===!0||u.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,q.Tm)(u,{separator:a,key:h}))}));var o=N()(p,(0,B.Z)({},"".concat(p,"-rtl"),V==="rtl"),H);return i.createElement("div",(0,g.Z)({className:o,style:x},W),C)};$.Item=D,$.Separator=F;var E=$,nn=E},36017:function(M,v,e){"use strict";var g=e(65056),B=e.n(g),I=e(81262),i=e.n(I),U=e(30887),N=e(59250)},15746:function(M,v,e){"use strict";var g=e(21584);v.Z=g.Z},89032:function(M,v,e){"use strict";var g=e(65056),B=e.n(g),I=e(6999)},71230:function(M,v,e){"use strict";var g=e(92820);v.Z=g.Z},13062:function(M,v,e){"use strict";var g=e(65056),B=e.n(g),I=e(6999)}}]);
