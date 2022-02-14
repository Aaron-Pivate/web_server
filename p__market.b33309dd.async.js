(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{99219:function(f,m,t){"use strict";t.d(m,{e:function(){return F}});var y=t(2824),h=t(20310),p=t(67294),b=t(17857),v=t(47416),C=t(85893),o,s=v.ZP.div(o||(o=(0,h.Z)([`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  padding: `,`;
`])),function(i){return i.padding||"0"}),F=function(_){var D=_.value,d=D===void 0?"":D,a=_.decimals,l=_.padding,M=(0,p.useState)(0),g=(0,y.Z)(M,2),E=g[0],x=g[1],O=(0,p.useState)(0),c=(0,y.Z)(O,2),I=c[0],T=c[1];return(0,p.useEffect)(function(){typeof d=="number"&&(x(I),T(d))},[d]),(0,C.jsx)(s,{padding:l,children:typeof d=="string"?d:(0,C.jsx)(b.ZP,{start:E,end:I,decimals:a!==void 0?a:0,duration:1,separator:","})})}},57289:function(f,m,t){"use strict";t.r(m),t.d(m,{default:function(){return dn}});var y=t(54421),h=t(38272),p=t(14781),b=t(40308),v=t(20228),C=t(11382),o=t(13062),s=t(71230),F=t(89032),i=t(15746),_=t(3182),D=t(2824),d=t(57663),a=t(71577),l=t(20310),M=t(94043),g=t.n(M),E=t(67294),x=t(47416),O=t(99219),c=t(67329),I=t(93874),T=t(28219),n=t(85893),Z,R,Y=x.ZP.div(Z||(Z=(0,l.Z)([`
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
`]))),z=function(r){var u=r.text,e=r.value,j=r.coun,A=j===void 0?"$":j;return(0,n.jsxs)(Y,{children:[(0,n.jsxs)("h3",{children:[A," ",e?(0,n.jsx)(O.e,{value:e}):"--"]}),(0,n.jsx)("p",{children:u})]})},en=x.ZP.div(R||(R=(0,l.Z)([`
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
`]))),H=function(){var r=(0,c.f)(I.w.nftHome),u=r.request,e=r.data,j=r.status,A=(0,T.YB)();return(0,E.useEffect)(function(){u("")},[]),(0,n.jsx)(en,{children:(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(i.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(z,{text:A.formatMessage({id:"pages.market.new_price"}),value:e==null?void 0:e.data.last_price})}),(0,n.jsx)(i.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(z,{coun:"",text:A.formatMessage({id:"pages.market.total_sale"}),value:e==null?void 0:e.data.total_transaction_times})}),(0,n.jsx)(i.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(z,{text:A.formatMessage({id:"pages.market.total_volume"}),value:e==null?void 0:e.data.total_auction_commission})})]})})},G=t(64731),sn=t(77624),k,w,X=x.ZP.div(k||(k=(0,l.Z)([`
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
`]))),S=function(r){var u=r.text,e=r.name,j=r.onClick;return(0,n.jsx)(a.Z,{className:e===u?"ac":"",onClick:function(){return j(u)},type:"default",shape:"round",size:"large",children:u})},rn=x.ZP.div(w||(w=(0,l.Z)([`
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
`]))),on=function(){var K=(0,E.useState)("All NFT"),r=(0,D.Z)(K,2),u=r[0],e=r[1],j=(0,c.f)(I.w.market),A=j.request,ln=j.status,P=j.data,J=(0,E.useRef)(null),$=window.screen.width>500;(0,E.useEffect)(function(){$&&A(1)},[]);var gn=function(W){var N=W.pageSize,tn=W.offset;return new Promise(function(){var pn=(0,_.Z)(g().mark(function an(vn){var V;return g().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,A((tn/5+1).toFixed());case 2:V=L.sent,console.log("------",tn),vn({total:V.data.count,data:V.data.data});case 5:case"end":return L.stop()}},an)}));return function(an){return pn.apply(this,arguments)}}())},B=(0,sn.BR)(gn,{ref:J,initPageSize:5,incrementSize:5}),Q=B.data,q=B.loading,nn=B.loadingMore,_n=B.reload,cn=B.loadMore,En=B.total,un=B.noMore,mn=function(){return(0,n.jsx)(n.Fragment,{children:!un&&(0,n.jsx)(a.Z,{onClick:cn,loading:nn,children:nn?"Loading more":"Click to load more"})})};return(0,n.jsx)(rn,{style:{},children:$?(0,n.jsxs)("div",{className:"pc",children:[(0,n.jsx)(H,{}),(0,n.jsxs)(X,{children:[(0,n.jsx)(S,{onClick:e,name:u,text:"All NFT"}),(0,n.jsx)(S,{onClick:e,name:u,text:"CCP NFT DOG"})]}),(0,n.jsx)("div",{className:"products",children:(0,n.jsx)(s.Z,{gutter:28,children:P==null?void 0:P.data.data.map(function(U){return(0,n.jsx)(i.Z,{span:6,xs:24,sm:12,md:12,style:{marginBottom:"20px"},lg:6,children:(0,n.jsx)(G.b,{props:U})},U.id)})})}),(0,n.jsx)("div",{className:"loading",children:ln==c.o.wait&&(0,n.jsx)(C.Z,{size:"large"})}),(0,n.jsx)("div",{className:"bottom_pagination",children:(P==null?void 0:P.data.count)&&(0,n.jsx)(b.Z,{defaultCurrent:1,onChange:function(W){A(W)},total:P==null?void 0:P.data.count})})]}):(0,n.jsx)("div",{ref:J,style:{height:"90vh",overflowY:"auto"},children:(0,n.jsx)(h.ZP,{header:(0,n.jsxs)("div",{children:[(0,n.jsx)(H,{}),(0,n.jsxs)(X,{children:[(0,n.jsx)(S,{onClick:e,name:u,text:"All NFT"}),(0,n.jsx)(S,{onClick:e,name:u,text:"CCP NFT DOG"})]})]}),footer:!q&&mn(),loading:q,bordered:!0,dataSource:Q,renderItem:function(W,N){return(0,n.jsx)(h.ZP.Item,{style:{padding:N%2==0?12:0},children:N%2==0?(0,n.jsxs)(s.Z,{gutter:12,children:[(0,n.jsx)(i.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(G.b,{props:Q[N]})},W.id),Q[N+1]&&(0,n.jsx)(i.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(G.b,{props:Q[N+1]})},W.id+1)]}):(0,n.jsx)("div",{})})}})})})},dn=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(on,{})})}},64731:function(f,m,t){"use strict";t.d(m,{b:function(){return c}});var y=t(58024),h=t(39144),p=t(20310),b=t(67294),v=t(47416),C=t(16924),o=t(46677),s=t.n(o),F=t(28219),i=t(92908),_=t.n(i),D=t(37372),d=t.n(D),a=t(85893),l,M,g,E=v.ZP.div(l||(l=(0,p.Z)([`
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
`]))),x=v.ZP.div(M||(M=(0,p.Z)([`
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
`]))),O=(0,v.ZP)(h.Z)(g||(g=(0,p.Z)([`
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
`]))),c=function(T){var n=T.props,Z=T.path,R=Z===void 0?"market":Z;return(0,a.jsx)(C.Link,{to:{pathname:"".concat(R,"/").concat(n.id),search:"id=".concat(n.id,"&name=").concat(n.dog_name,"&path=").concat(R)},children:(0,a.jsx)(O,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,a.jsxs)(E,{children:[(0,a.jsx)("div",{className:"images",children:(0,a.jsx)("img",{src:n.img_url})}),(0,a.jsx)("div",{className:"bottom",children:(0,a.jsx)("h4",{children:n.dog_name})}),(0,a.jsx)("div",{className:"price",children:(0,a.jsx)("img",{src:n.dog_sex==1?_():d(),alt:""})})]}),children:n.is_selling==1&&(0,a.jsxs)(x,{children:[(0,a.jsxs)("span",{children:[" ",(0,a.jsx)(F._H,{id:"component.nft_car.sell_price"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{src:s(),alt:"",className:"icon"}),parseInt(n.market_price).toFixed(2)]})]})})})}},67329:function(f,m,t){"use strict";t.d(m,{f:function(){return C},o:function(){return o}});var y=t(3182),h=t(2824),p=t(94043),b=t.n(p),v=t(67294),C=function(F){var i=(0,v.useState)(o.start),_=(0,h.Z)(i,2),D=_[0],d=_[1],a=(0,v.useState)(),l=(0,h.Z)(a,2),M=l[0],g=l[1],E=(0,v.useCallback)((0,y.Z)(b().mark(function x(){var O,c,I=arguments;return b().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(o.wait),n.next=4,F.apply(void 0,I);case 4:return O=n.sent,g(O),d(o.success),n.abrupt("return",O);case 10:return n.prev=10,n.t0=n.catch(0),c={err:n.t0.info},g(c),d(o.failure),n.abrupt("return",c);case 16:case"end":return n.stop()}},x,null,[[0,10]])})),[d,g]);return{status:D,request:E,data:M}},o;(function(s){s[s.start=0]="start",s[s.wait=1]="wait",s[s.success=2]="success",s[s.failure=3]="failure"})(o||(o={}))},92908:function(f,m,t){f.exports=t.p+"static/gong.d3c6c27d.png"},46677:function(f){f.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},37372:function(f,m,t){f.exports=t.p+"static/mo.30ad1e1e.png"}}]);
