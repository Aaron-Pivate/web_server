(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{99219:function(g,c,t){"use strict";t.d(c,{e:function(){return W}});var Z=t(2824),f=t(20310),p=t(67294),I=t(17857),u=t(47416),P=t(85893),o,e=u.ZP.div(o||(o=(0,f.Z)([`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  padding: `,`;
`])),function(s){return s.padding||"0"}),W=function(E){var C=E.value,d=C===void 0?"":C,a=E.decimals,A=E.padding,j=(0,p.useState)(0),i=(0,Z.Z)(j,2),b=i[0],D=i[1],x=(0,p.useState)(0),m=(0,Z.Z)(x,2),T=m[0],U=m[1];return(0,p.useEffect)(function(){typeof d=="number"&&(D(T),U(d))},[d]),(0,P.jsx)(e,{padding:A,children:typeof d=="string"?d:(0,P.jsx)(I.ZP,{start:b,end:T,decimals:a!==void 0?a:0,duration:1,separator:","})})}},64731:function(g,c,t){"use strict";t.d(c,{b:function(){return m}});var Z=t(58024),f=t(39144),p=t(20310),I=t(67294),u=t(47416),P=t(16924),o=t(46677),e=t.n(o),W=t(28219),s=t(92908),E=t.n(s),C=t(37372),d=t.n(C),a=t(85893),A,j,i,b=u.ZP.div(A||(A=(0,p.Z)([`
  .images {
    padding: 20px;

    img {
      display: block;
      width: 100%;
    }
  }

  background: linear-gradient(rgb(237, 237, 255) 0%, rgb(215, 215, 255) 100%);
  border-radius: 0 0 20px 20px;
  position: relative;

  .bottom {
    border-radius: 0 0 20px 20px;
    padding: 5px;

    h4 {
      color: rgb(47, 46, 65);
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0;
    }
  }

  .price {
    position: absolute;
    left: 10px;
    top: 10px;

    img {
      display: block;
      width: 24px !important;
    }
  }

  @media (max-width: 576px) {
    .images {

      img {
        display: block;
        height: 137px;
        width: 137px;
        //width: 100%;
      }
    }

  }
`]))),D=u.ZP.div(j||(j=(0,p.Z)([`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #505f79;
    font-size: 14px;
  }

  p {
    color: #2f2e41;
    font: 16px/1.4 Noto Sans, sans-serif;
    margin-bottom: 0;
    font-weight: 700;
    align-items: center;
    display: flex;

    .icon {
      display: block;
      width: 18px;
      height: 18px;
      margin-right: 6px;
    }
  }

  @media (max-width: 576px) {
    font-size: 12px;

  }
`]))),x=(0,u.ZP)(f.Z)(i||(i=(0,p.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;
  }

  @media (max-width: 576px) {
    .ant-card-body {
      padding: 10px;
    }
  }
`]))),m=function(U){var n=U.props,R=U.path,N=R===void 0?"market":R;return(0,a.jsx)(P.Link,{to:{pathname:"".concat(N,"/").concat(n.id),search:"id=".concat(n.id,"&name=").concat(n.dog_name,"&path=").concat(N)},children:(0,a.jsx)(x,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,a.jsxs)(b,{children:[(0,a.jsx)("div",{className:"images",children:(0,a.jsx)("img",{src:n.img_url})}),(0,a.jsx)("div",{className:"bottom",children:(0,a.jsx)("h4",{children:n.dog_name})}),(0,a.jsx)("div",{className:"price",children:(0,a.jsx)("img",{src:n.dog_sex==1?E():d(),alt:""})})]}),children:n.is_selling==1&&(0,a.jsxs)(D,{children:[(0,a.jsxs)("span",{children:[" ",(0,a.jsx)(W._H,{id:"component.nft_car.sell_price"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{src:e(),alt:"",className:"icon"}),parseInt(n.market_price).toFixed(2)]})]})})})}},45377:function(g,c,t){"use strict";t.r(c),t.d(c,{default:function(){return fn}});var Z=t(54421),f=t(38272),p=t(14781),I=t(40308),u=t(20228),P=t(11382),o=t(13062),e=t(71230),W=t(89032),s=t(15746),E=t(57663),C=t(71577),d=t(3182),a=t(20310),A=t(94043),j=t.n(A),i=t(47416),b=t(64731),D=t(67294),x=t(67329),m=t(93874),T=t(53776),U=t(99219),n=t(85893),R,N,X=i.ZP.div(R||(R=(0,a.Z)([`
  h3 {
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;

    div {
      font-size: 24px;
      span{
        font-size: 24px;
        font-weight: 700;
        color: #fff;
      }
    }
  }

  p {
    font-size: 16px;
    color: hsla(0, 0%, 100%, .8);
    margin-bottom: 0;
  }
`]))),v=function(O){var h=O.text,_=O.value;return(0,n.jsxs)(X,{children:[(0,n.jsx)("h3",{children:(0,n.jsx)(U.e,{value:_!=null?_:0})}),(0,n.jsx)("p",{children:h})]})},Q=i.ZP.div(N||(N=(0,a.Z)([`
  border-radius: 100px;
  background: linear-gradient(270deg, #89d143, #75db8d);
  padding: 30px 15px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;

  @media (max-width: 576px) {
    margin-top: 15px;
    border-radius: 20px;
    margin-bottom: 15px;
    .ant-list-header {
      padding: 0;
    }

    .ant-list-bordered .ant-list-header {
      padding: 0;
    }
  }
`]))),yn=function(){return _jsx(Q,{children:_jsxs(_Row,{gutter:20,children:[_jsx(_Col,{xs:24,sm:12,children:_jsx(v,{text:"CCP",value:0})}),_jsx(_Col,{xs:24,sm:12,children:_jsx(v,{text:"USDT",value:0})})]})})},ln=t(77624),In=t(58024),gn=t(39144),cn=t(16924),pn=t(27254),un=t.n(pn),J,k,q,xn=i.ZP.div(J||(J=(0,a.Z)([`
  .images {
    padding: 20px;

    img {
      display: block;
      width: 100%;
    }
  }

  background: linear-gradient(rgb(237, 237, 255) 0%, rgb(215, 215, 255) 100%);
  border-radius: 0 0 20px 20px;
  position: relative;

  .bottom {
    border-radius: 0 0 20px 20px;
    padding: 5px;

    h4 {
      color: rgb(47, 46, 65);
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0;
    }
  }

  .price {
    position: absolute;
    right: 10px;
    top: 10px;
    background: linear-gradient(270deg, #89d143, #75db8d);
    width: 36px;
    height: 36px;
    border-radius: 32px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    line-height: 36px;
  }
`]))),Tn=i.ZP.div(k||(k=(0,a.Z)([`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #505f79;
    font-size: 14px;
  }

  p {
    color: #2f2e41;
    font: 16px/1.4 Noto Sans, sans-serif;
    margin-bottom: 0;
    font-weight: 700;
    align-items: center;
    display: flex;

    .icon {
      display: block;
      width: 18px;
      height: 18px;
      margin-right: 6px;
    }
  }

  @media (max-width: 576px) {
    font-size: 12px;

  }
`]))),mn=(0,i.ZP)(gn.Z)(q||(q=(0,a.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;
  }
  @media (max-width: 576px) {
    .ant-card-body {
      padding: 10px;
    }
  }
`]))),vn=function(O){var h=O.props,_=O.path,F=_===void 0?"market":_;return(0,n.jsx)(cn.Link,{to:{pathname:"".concat(F,"/").concat(h.id),search:"id=".concat(h.id,"&name=").concat(h.dog_name,"&path=").concat(F)},children:(0,n.jsx)(mn,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,n.jsxs)(xn,{children:[(0,n.jsx)("div",{className:"images",children:(0,n.jsx)("img",{src:un()})}),(0,n.jsx)("div",{className:"bottom",children:(0,n.jsx)("h4",{children:h.dog_name})})]})})})},hn=t(43581),nn,_n=i.ZP.div(nn||(nn=(0,a.Z)([`

  padding: 20px;
  box-sizing: border-box;


  .bottom_pagination {
    display: flex;
    justify-content: center;

    .ant-pagination-options {
      display: none;
    }

    .ant-pagination-item {


      a {
        display: inline-block;
      }
    }
  }

  .loading {
    display: flex;
    margin: 10px 0;
    height: 40px;
    justify-content: center;
  }

  .ant-list-split .ant-list-header {
    border: none;
  }

  .ant-list-split .ant-list-item {
    border: none;
  }

  .ant-list-bordered {
    border: none;
  }

  .balances {
    > div {
      margin-bottom: 30px;


      > div {
        padding: 10px 0;
        box-sizing: border-box;
        display: flex;
        align-items: end;
      }

      div {

        font-size: 18px;


        img {
          display: block;
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
    }
  }

  @media (max-width: 576px) {
    padding: 10px;
    .ant-list-bordered .ant-list-header {
      padding: 0 10px;
    }

    .ant-card-cover {
      img {
        width: 100%;
      }
    }
  }
`]))),fn=function(){var S,O,h,_,F,K,G,w,En=(0,T.t)("@@initialState"),r=En.initialState,V=(0,x.f)(m.w.nftPacket),l=V.data,Y=V.request,An=V.status,tn=(0,D.useRef)(null),an=(0,hn.YB)(),en=window.screen.width>500;(0,D.useEffect)(function(){en&&Y(1)},[]);var jn=function(y){var L=y.pageSize,Cn=y.offset;return new Promise(function(){var Dn=(0,d.Z)(j().mark(function on(Mn){var $;return j().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,Y(Cn/5+1);case 2:$=z.sent,Mn({total:$.data.goods.count,data:$.data.goods.data});case 4:case"end":return z.stop()}},on)}));return function(on){return Dn.apply(this,arguments)}}())},B=(0,ln.BR)(jn,{ref:tn,initPageSize:5,incrementSize:5}),H=B.data,sn=B.loading,rn=B.loadingMore,Un=B.reload,bn=B.loadMore,dn=B.total,On=B.noMore,Pn=function(){return(0,n.jsx)(n.Fragment,{children:!On&&(0,n.jsx)(C.Z,{onClick:bn,loading:rn,children:rn?"Loading more":"Click to load more"})})};return(0,n.jsx)(_n,{children:en?(0,n.jsxs)("div",{children:[(0,n.jsx)(Q,{children:(0,n.jsxs)(e.Z,{gutter:20,children:[(0,n.jsx)(s.Z,{xs:12,sm:6,children:(0,n.jsx)(v,{text:"CCP.Dog",value:r==null||(S=r.currentUser)===null||S===void 0?void 0:S.ccp_dog_coin})}),(0,n.jsx)(s.Z,{xs:12,sm:6,children:(0,n.jsx)(v,{text:"USDT",value:r==null||(O=r.currentUser)===null||O===void 0?void 0:O.usdt_coin})}),(0,n.jsx)(s.Z,{xs:12,sm:6,children:(0,n.jsx)(v,{text:"GUT",value:r==null||(h=r.currentUser)===null||h===void 0?void 0:h.gut_coin})}),(0,n.jsx)(s.Z,{xs:12,sm:6,children:(0,n.jsx)(v,{text:an.formatMessage({id:"pages.myaccount.own_an_nft"}),value:dn})})]})}),(0,n.jsxs)("div",{style:{padding:"20px"},children:[(0,n.jsx)(e.Z,{gutter:48,children:(l==null||(_=l.data)===null||_===void 0?void 0:_.goods.data.length)>0?l==null||(F=l.data)===null||F===void 0?void 0:F.goods.data.map(function(M){return(0,n.jsx)(s.Z,{span:6,xs:24,sm:12,md:12,lg:6,children:M.state==0?(0,n.jsx)(b.b,{props:M,path:"wallets"}):(0,n.jsx)(vn,{props:M,path:"wallets"})},M.id)}):(0,n.jsx)("div",{style:{textAlign:"center"}})}),(0,n.jsx)("div",{className:"loading",children:An==x.o.wait&&(0,n.jsx)(P.Z,{size:"large"})}),(0,n.jsx)("div",{className:"bottom_pagination",children:(l==null?void 0:l.data.count)&&(0,n.jsx)(I.Z,{defaultCurrent:1,onChange:function(y){Y(y)},total:l==null?void 0:l.data.count})})]})]}):(0,n.jsx)("div",{ref:tn,style:{height:"90vh",overflowY:"auto"},children:(0,n.jsx)(f.ZP,{header:(0,n.jsx)("div",{children:(0,n.jsx)(Q,{children:(0,n.jsxs)(e.Z,{gutter:20,children:[(0,n.jsx)(s.Z,{xs:6,sm:6,children:(0,n.jsx)(v,{text:"CCP.Dog",value:r==null||(K=r.currentUser)===null||K===void 0?void 0:K.ccp_dog_coin})}),(0,n.jsx)(s.Z,{xs:6,sm:6,children:(0,n.jsx)(v,{text:"USDT",value:r==null||(G=r.currentUser)===null||G===void 0?void 0:G.usdt_coin})}),(0,n.jsx)(s.Z,{xs:6,sm:6,children:(0,n.jsx)(v,{text:"GUT",value:r==null||(w=r.currentUser)===null||w===void 0?void 0:w.gut_coin})}),(0,n.jsx)(s.Z,{xs:6,sm:6,children:(0,n.jsx)(v,{text:an.formatMessage({id:"pages.myaccount.own_an_nft"}),value:dn})})]})})}),footer:!sn&&Pn(),loading:sn,bordered:!0,dataSource:H,renderItem:function(y,L){return(0,n.jsx)(f.ZP.Item,{style:{padding:L%2==0?12:0},children:L%2==0?(0,n.jsxs)(e.Z,{gutter:12,children:[(0,n.jsx)(s.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(b.b,{path:"wallets",props:y})},y.id),H[L+1]&&(0,n.jsx)(s.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(b.b,{path:"wallets",props:H[L+1]})},y.id+1)]}):(0,n.jsx)("div",{})})}})})})}},67329:function(g,c,t){"use strict";t.d(c,{f:function(){return P},o:function(){return o}});var Z=t(3182),f=t(2824),p=t(94043),I=t.n(p),u=t(67294),P=function(W){var s=(0,u.useState)(o.start),E=(0,f.Z)(s,2),C=E[0],d=E[1],a=(0,u.useState)(),A=(0,f.Z)(a,2),j=A[0],i=A[1],b=(0,u.useCallback)((0,Z.Z)(I().mark(function D(){var x,m,T=arguments;return I().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(o.wait),n.next=4,W.apply(void 0,T);case 4:return x=n.sent,i(x),d(o.success),n.abrupt("return",x);case 10:return n.prev=10,n.t0=n.catch(0),m={err:n.t0.info},i(m),d(o.failure),n.abrupt("return",m);case 16:case"end":return n.stop()}},D,null,[[0,10]])})),[d,i]);return{status:C,request:b,data:j}},o;(function(e){e[e.start=0]="start",e[e.wait=1]="wait",e[e.success=2]="success",e[e.failure=3]="failure"})(o||(o={}))},27254:function(g,c,t){g.exports=t.p+"static/baby_dog.1fd8dbc6.jpg"},92908:function(g,c,t){g.exports=t.p+"static/gong.d3c6c27d.png"},46677:function(g){g.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},37372:function(g,c,t){g.exports=t.p+"static/mo.30ad1e1e.png"}}]);
