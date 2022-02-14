(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{99219:function(f,m,t){"use strict";t.d(m,{e:function(){return F}});var Z=t(2824),O=t(20310),p=t(67294),y=t(17857),v=t(47416),D=t(85893),r,s=v.ZP.div(r||(r=(0,O.Z)([`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  padding: `,`;
`])),function(o){return o.padding||"0"}),F=function(_){var M=_.value,i=M===void 0?"":M,a=_.decimals,l=_.padding,I=(0,p.useState)(0),g=(0,Z.Z)(I,2),x=g[0],E=g[1],j=(0,p.useState)(0),c=(0,Z.Z)(j,2),b=c[0],W=c[1];return(0,p.useEffect)(function(){typeof i=="number"&&(E(b),W(i))},[i]),(0,D.jsx)(s,{padding:l,children:typeof i=="string"?i:(0,D.jsx)(y.ZP,{start:x,end:b,decimals:a!==void 0?a:0,duration:1,separator:","})})}},57289:function(f,m,t){"use strict";t.r(m),t.d(m,{default:function(){return dn}});var Z=t(54421),O=t(38272),p=t(14781),y=t(40308),v=t(20228),D=t(11382),r=t(13062),s=t(71230),F=t(89032),o=t(15746),_=t(3182),M=t(2824),i=t(57663),a=t(71577),l=t(20310),I=t(94043),g=t.n(I),x=t(67294),E=t(47416),j=t(99219),c=t(67329),b=t(93874),W=t(28219),n=t(85893),R,S,Y=E.ZP.div(R||(R=(0,l.Z)([`
  h3 {
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;

    span {
      font-size: 38px;
    }
  }

  p {
    font-size: 16px;
    color: hsla(0, 0%, 100%, .8);
    margin-bottom: 0;
  }
`]))),Q=function(d){var A=d.text,e=d.value,B=d.coun,h=B===void 0?"$":B;return(0,n.jsxs)(Y,{children:[(0,n.jsxs)("h3",{children:[h," ",e?(0,n.jsx)(j.e,{value:e}):"--"]}),(0,n.jsx)("p",{children:A})]})},en=E.ZP.div(S||(S=(0,l.Z)([`
  border-radius: 15px;
  background: linear-gradient(270deg, #89d143, #75db8d);
  padding: 30px 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;

  @media (max-width: 576px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`]))),k=function(){var d=(0,c.f)(b.w.nftHome),A=d.request,e=d.data,B=d.status,h=(0,W.YB)();return(0,x.useEffect)(function(){A("")},[]),(0,n.jsx)(en,{children:(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(o.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(Q,{text:h.formatMessage({id:"pages.market.new_price"}),value:e==null?void 0:e.data.last_price})}),(0,n.jsx)(o.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(Q,{coun:"",text:h.formatMessage({id:"pages.market.total_sale"}),value:e==null?void 0:e.data.total_transaction_times})}),(0,n.jsx)(o.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(Q,{text:h.formatMessage({id:"pages.market.total_volume"}),value:e==null?void 0:e.data.total_auction_commission})})]})})},z=t(64731),sn=t(77624),H,w,X=E.ZP.div(H||(H=(0,l.Z)([`
  margin-bottom: 20px;

  button {
    margin-top: 10px;
    margin-right: 30px;
    color: rgb(124, 215, 112);
    font-weight: bold;
    font-size: 14px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(68, 223, 132);

    &.ac {
      color: rgb(255, 255, 255);
      background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
    }
  }
`]))),J=function(d){var A=d.text,e=d.name,B=d.onClick;return(0,n.jsx)(a.Z,{className:e===A?"ac":"",onClick:function(){return B(A)},type:"default",shape:"round",size:"large",children:A})},rn=E.ZP.div(w||(w=(0,l.Z)([`
  padding: 20px;
  box-sizing: border-box;


  .bottom_pagination {
    padding-bottom: 20px;
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

  .products {
    padding: 20px;
  }

  a {
    display: block;
    width: 100%;
  }


  @media (max-width: 576px) {
    padding: 0;

    .products {
      padding: 10px;
    }

    .ant-card-cover {
      img {
        width: 100%;
        //min-width: 278px;
        //min-height: 278px;
      }
    }
  }
`]))),on=function(){var N=[{text:"All NFT"},{text:"\u516C",value:1},{text:"\u6BCD",value:0}],d=(0,x.useState)(N[0]),A=(0,M.Z)(d,2),e=A[0],B=A[1],h=(0,c.f)(b.w.market),G=h.request,ln=h.status,P=h.data,$=(0,x.useRef)(null),q=window.screen.width>500,gn=function(C){var T=C.pageSize,vn=C.offset;return new Promise(function(){var _n=(0,_.Z)(g().mark(function an(xn){var V;return g().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,G((vn/5+1).toFixed(),e.value);case 2:V=L.sent,xn({total:V.data.count,data:V.data.data});case 4:case"end":return L.stop()}},an)}));return function(an){return _n.apply(this,arguments)}}())},U=(0,sn.BR)(gn,{ref:$,initPageSize:5,incrementSize:5}),K=U.data,nn=U.loading,tn=U.loadingMore,cn=U.reload,un=U.loadMore,En=U.total,mn=U.noMore,pn=function(){return(0,n.jsx)(n.Fragment,{children:!mn&&(0,n.jsx)(a.Z,{onClick:un,loading:tn,children:tn?"Loading more":"Click to load more"})})};return(0,x.useEffect)(function(){q?G(1,e.value):cn()},[e]),(0,n.jsx)(rn,{style:{},children:q?(0,n.jsxs)("div",{className:"pc",children:[(0,n.jsx)(k,{}),(0,n.jsx)(X,{children:N.map(function(u){return(0,n.jsx)(J,{onClick:function(T){return B(u)},name:e.text,text:u.text})})}),(0,n.jsx)("div",{className:"products",children:(0,n.jsx)(s.Z,{gutter:28,children:P==null?void 0:P.data.data.map(function(u){return(0,n.jsx)(o.Z,{span:6,xs:24,sm:12,md:12,style:{marginBottom:"20px"},lg:6,children:(0,n.jsx)(z.b,{props:u})},u.id)})})}),(0,n.jsx)("div",{className:"loading",children:ln==c.o.wait&&(0,n.jsx)(D.Z,{size:"large"})}),(0,n.jsx)("div",{className:"bottom_pagination",children:(P==null?void 0:P.data.count)&&(0,n.jsx)(y.Z,{defaultCurrent:1,onChange:function(C){G(C)},total:P==null?void 0:P.data.count})})]}):(0,n.jsx)("div",{ref:$,style:{height:"90vh",overflowY:"auto"},children:(0,n.jsx)(O.ZP,{header:(0,n.jsxs)("div",{children:[(0,n.jsx)(k,{}),(0,n.jsx)(X,{children:N.map(function(u){return(0,n.jsx)(J,{onClick:function(T){return B(u)},name:e.text,text:u.text})})})]}),footer:!nn&&pn(),loading:nn,bordered:!0,dataSource:K,renderItem:function(C,T){return(0,n.jsx)(O.ZP.Item,{style:{padding:T%2==0?12:0},children:T%2==0?(0,n.jsxs)(s.Z,{gutter:12,children:[(0,n.jsx)(o.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(z.b,{props:K[T]})},C.id),K[T+1]&&(0,n.jsx)(o.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(z.b,{props:K[T+1]})},C.id+1)]}):(0,n.jsx)("div",{})})}})})})},dn=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(on,{})})}},64731:function(f,m,t){"use strict";t.d(m,{b:function(){return c}});var Z=t(58024),O=t(39144),p=t(20310),y=t(67294),v=t(47416),D=t(16924),r=t(46677),s=t.n(r),F=t(28219),o=t(92908),_=t.n(o),M=t(37372),i=t.n(M),a=t(85893),l,I,g,x=v.ZP.div(l||(l=(0,p.Z)([`
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
`]))),E=v.ZP.div(I||(I=(0,p.Z)([`
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
`]))),j=(0,v.ZP)(O.Z)(g||(g=(0,p.Z)([`
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
`]))),c=function(W){var n=W.props,R=W.path,S=R===void 0?"market":R;return(0,a.jsx)(D.Link,{to:{pathname:"".concat(S,"/").concat(n.id),search:"id=".concat(n.id,"&name=").concat(n.dog_name,"&path=").concat(S)},children:(0,a.jsx)(j,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,a.jsxs)(x,{children:[(0,a.jsx)("div",{className:"images",children:(0,a.jsx)("img",{src:n.img_url})}),(0,a.jsx)("div",{className:"bottom",children:(0,a.jsx)("h4",{children:n.dog_name})}),(0,a.jsx)("div",{className:"price",children:(0,a.jsx)("img",{src:n.dog_sex==1?_():i(),alt:""})})]}),children:n.is_selling==1&&(0,a.jsxs)(E,{children:[(0,a.jsxs)("span",{children:[" ",(0,a.jsx)(F._H,{id:"component.nft_car.sell_price"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{src:s(),alt:"",className:"icon"}),parseInt(n.market_price).toFixed(2)]})]})})})}},67329:function(f,m,t){"use strict";t.d(m,{f:function(){return D},o:function(){return r}});var Z=t(3182),O=t(2824),p=t(94043),y=t.n(p),v=t(67294),D=function(F){var o=(0,v.useState)(r.start),_=(0,O.Z)(o,2),M=_[0],i=_[1],a=(0,v.useState)(),l=(0,O.Z)(a,2),I=l[0],g=l[1],x=(0,v.useCallback)((0,Z.Z)(y().mark(function E(){var j,c,b=arguments;return y().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i(r.wait),n.next=4,F.apply(void 0,b);case 4:return j=n.sent,g(j),i(r.success),n.abrupt("return",j);case 10:return n.prev=10,n.t0=n.catch(0),c={err:n.t0.info},g(c),i(r.failure),n.abrupt("return",c);case 16:case"end":return n.stop()}},E,null,[[0,10]])})),[i,g]);return{status:M,request:x,data:I}},r;(function(s){s[s.start=0]="start",s[s.wait=1]="wait",s[s.success=2]="success",s[s.failure=3]="failure"})(r||(r={}))},92908:function(f,m,t){f.exports=t.p+"static/gong.d3c6c27d.png"},46677:function(f){f.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},37372:function(f,m,t){f.exports=t.p+"static/mo.30ad1e1e.png"}}]);
