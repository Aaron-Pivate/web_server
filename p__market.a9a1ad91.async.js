(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{99219:function(Z,y,a){"use strict";a.d(y,{e:function(){return u}});var D=a(2824),f=a(20310),g=a(67294),o=a(17857),d=a(47416),O=a(85893),t,m=d.ZP.div(t||(t=(0,f.Z)([`
  padding: `,`;
`])),function(E){return E.padding||"0"}),u=function(_){var A=_.value,c=A===void 0?"":A,C=_.decimals,s=_.padding,F=(0,g.useState)(0),b=(0,D.Z)(F,2),M=b[0],P=b[1],r=(0,g.useState)(0),e=(0,D.Z)(r,2),n=e[0],i=e[1];return(0,g.useEffect)(function(){typeof c=="number"&&(P(n),i(c))},[c]),(0,O.jsx)(m,{padding:s,children:typeof c=="string"?c:(0,O.jsx)(o.ZP,{start:M,end:n,decimals:C!==void 0?C:0,duration:1,separator:","})})}},57289:function(Z,y,a){"use strict";a.r(y),a.d(y,{default:function(){return I}});var D=a(13062),f=a(71230),g=a(89032),o=a(15746),d=a(2824),O=a(57663),t=a(71577),m=a(20310),u=a(67294),E=a(47416),_=a(99219),A=a(67329),c=a(93874),C=a(83832),s=a(85893),F,b,M=E.ZP.div(F||(F=(0,m.Z)([`
  h3 {
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 16px;
    color: hsla(0, 0%, 100%, .8);
    margin-bottom: 0;
  }
`]))),P=function(v){var x=v.text,h=v.value;return(0,s.jsxs)(M,{children:[(0,s.jsxs)("h3",{children:["$ ",(0,s.jsx)(_.e,{value:h!=null?h:0})]}),(0,s.jsx)("p",{children:x})]})},r=E.ZP.div(b||(b=(0,m.Z)([`
  border-radius: 15px;
  background: linear-gradient(270deg, #89d143, #75db8d);
  padding: 30px 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
`]))),e=function(){var v=(0,A.f)(c.w.nftHome),x=v.request,h=v.data,V=v.status;return(0,u.useEffect)(function(){x("")},[]),V==A.o.wait?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(C.Z,{})}):(0,s.jsx)(r,{children:(0,s.jsxs)(f.Z,{children:[(0,s.jsx)(o.Z,{xs:24,sm:12,lg:8,children:(0,s.jsx)(P,{text:"\u603B\u4EA4\u6613\u989D",value:h==null?void 0:h.total_turnover})}),(0,s.jsx)(o.Z,{xs:24,sm:12,lg:8,children:(0,s.jsx)(P,{text:"\u603B\u62CD\u5356\u6B21\u6570",value:h==null?void 0:h.total_transaction_times})}),(0,s.jsx)(o.Z,{xs:24,sm:12,lg:8,children:(0,s.jsx)(P,{text:"\u603B\u62CD\u5356\u8FD4\u4F63",value:h==null?void 0:h.total_auction_commission})})]})})},n=a(64731),i,p=E.ZP.div(i||(i=(0,m.Z)([`
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
`]))),l=function(v){var x=v.text,h=v.name,V=v.onClick;return(0,s.jsx)(t.Z,{className:h===x?"ac":"",onClick:function(){return V(x)},type:"default",shape:"round",size:"large",children:x})},B=[{id:689072,u_id:0,dog_name:"CCP Big Dog(129)",dog_sex:1,dog_breed:8,dog_attr:[{attr:1,grade:852,name:"\u901F\u5EA6"},{attr:2,grade:550,name:"\u8010\u529B"},{attr:3,grade:361,name:"\u7206\u53D1"},{attr:4,grade:254,name:"\u5E73\u8861"}],dog_skill:[{skill:4,grade:5,name:"Lucky \u5E78\u8FD0\u7684"},{skill:14,grade:8,name:"Faith Sprint \u4FE1\u4EF0\u51B2\u523A"},{skill:4,grade:1,name:"Lucky \u5E78\u8FD0\u7684"},{skill:10,grade:4,name:"Phantom Transcendence \u5E7B\u5F71\u8D85\u8D8A"}],father_id:0,mother_id:0,sons_json:"",daughters_json:"",reproduce_count:0,block_address:"",market_price:"599.00000000000000000000",is_selling:1,img_url:"https://ccp.dog/img/dogs/dog.jpeg",addtime:"2021-12-30 21:05:09",updatetime:"2021-12-30 21:05:09"}],W=function(){var j=(0,u.useState)("All NFT"),v=(0,d.Z)(j,2),x=v[0],h=v[1],V=(0,A.f)(c.w.market),T=V.request,S=V.status,N=V.data;return(0,u.useEffect)(function(){T("")},[]),(0,s.jsxs)("div",{style:{padding:"20px",boxSizing:"border-box"},children:[(0,s.jsx)(e,{}),(0,s.jsxs)(p,{children:[(0,s.jsx)(l,{onClick:h,name:x,text:"All NFT"}),(0,s.jsx)(l,{onClick:h,name:x,text:"Dragon egg"}),(0,s.jsx)(l,{onClick:h,name:x,text:"Dragon"})]}),(0,s.jsx)("div",{style:{padding:"20px"},children:S==A.o.wait?(0,s.jsx)(C.Z,{}):(0,s.jsx)(f.Z,{gutter:28,children:N==null?void 0:N.data.map(function(R){return(0,s.jsx)(o.Z,{span:6,xs:24,sm:12,md:12,style:{marginBottom:"20px"},lg:6,children:(0,s.jsx)(n.b,{props:R})},R.id)})})})]})},I=function(){return(0,s.jsx)("div",{children:(0,s.jsx)(W,{})})}},64731:function(Z,y,a){"use strict";a.d(y,{b:function(){return F}});var D=a(58024),f=a(39144),g=a(20310),o=a(67294),d=a(47416),O=a(16924),t=a(46677),m=a.n(t),u=a(85893),E,_,A,c=d.ZP.div(E||(E=(0,g.Z)([`
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
`]))),C=d.ZP.div(_||(_=(0,g.Z)([`
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
`]))),s=(0,d.ZP)(f.Z)(A||(A=(0,g.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;

  }
`]))),F=function(M){var P=M.props,r=M.path,e=r===void 0?"market":r;return(0,u.jsx)(O.Link,{to:{pathname:"".concat(e,"/").concat(P.id),search:"id=".concat(P.id,"&name=").concat(P.dog_name,"&path=").concat(e)},children:(0,u.jsx)(s,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,u.jsxs)(c,{children:[(0,u.jsx)("div",{className:"images",children:(0,u.jsx)("img",{alt:"example",src:P.img_url})}),(0,u.jsx)("div",{className:"bottom",children:(0,u.jsx)("h4",{children:P.dog_name})}),(0,u.jsx)("div",{className:"price",children:"600x"})]}),children:(0,u.jsxs)(C,{children:[(0,u.jsx)("span",{children:"\u51FA\u552E\u50F9\u683C"}),(0,u.jsxs)("p",{children:[(0,u.jsx)("img",{src:m(),alt:"",className:"icon"}),parseInt(P.market_price).toFixed(2)]})]})})})}},67329:function(Z,y,a){"use strict";a.d(y,{f:function(){return O},o:function(){return t}});var D=a(3182),f=a(2824),g=a(94043),o=a.n(g),d=a(67294),O=function(u){var E=(0,d.useState)(t.start),_=(0,f.Z)(E,2),A=_[0],c=_[1],C=(0,d.useState)(),s=(0,f.Z)(C,2),F=s[0],b=s[1],M=(0,d.useCallback)(function(){var P=(0,D.Z)(o().mark(function r(e){var n,i;return o().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,c(t.wait),l.next=4,u(e);case 4:n=l.sent,b(n),c(t.success),l.next=14;break;case 9:l.prev=9,l.t0=l.catch(0),i={err:l.t0},b(i),c(t.failure);case 14:case"end":return l.stop()}},r,null,[[0,9]])}));return function(r){return P.apply(this,arguments)}}(),[c,b]);return{status:A,request:M,data:F}},t;(function(m){m[m.start=0]="start",m[m.wait=1]="wait",m[m.success=2]="success",m[m.failure=3]="failure"})(t||(t={}))},46677:function(Z){Z.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},8273:function(Z,y,a){"use strict";a.r(y),a.d(y,{CountUp:function(){return f}});var D=function(){return(D=Object.assign||function(g){for(var o,d=1,O=arguments.length;d<O;d++)for(var t in o=arguments[d])Object.prototype.hasOwnProperty.call(o,t)&&(g[t]=o[t]);return g}).apply(this,arguments)},f=function(){function g(o,d,O){var t=this;this.target=o,this.endVal=d,this.options=O,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(m){t.startTime||(t.startTime=m);var u=m-t.startTime;t.remaining=t.duration-u,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(u,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(u,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(u/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(u/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),u<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(m){var u,E,_,A,c=m<0?"-":"";u=Math.abs(m).toFixed(t.options.decimalPlaces);var C=(u+="").split(".");if(E=C[0],_=C.length>1?t.options.decimal+C[1]:"",t.options.useGrouping){A="";for(var s=0,F=E.length;s<F;++s)s!==0&&s%3==0&&(A=t.options.separator+A),A=E[F-s-1]+A;E=A}return t.options.numerals&&t.options.numerals.length&&(E=E.replace(/[0-9]/g,function(b){return t.options.numerals[+b]}),_=_.replace(/[0-9]/g,function(b){return t.options.numerals[+b]})),c+t.options.prefix+E+_+t.options.suffix},this.easeOutExpo=function(m,u,E,_){return E*(1-Math.pow(2,-10*m/_))*1024/1023+u},this.options=D(D({},this.defaults),O),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(d),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof o=="string"?document.getElementById(o):o,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return g.prototype.determineDirectionAndSmartEasing=function(){var o=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>o;var d=o-this.startVal;if(Math.abs(d)>this.options.smartEasingThreshold){this.finalEndVal=o;var O=this.countDown?1:-1;this.endVal=o+O*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=o,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},g.prototype.start=function(o){this.error||(this.callback=o,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},g.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},g.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},g.prototype.update=function(o){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(o),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},g.prototype.printValue=function(o){var d=this.formattingFn(o);this.el.tagName==="INPUT"?this.el.value=d:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=d:this.el.innerHTML=d},g.prototype.ensureNumber=function(o){return typeof o=="number"&&!isNaN(o)},g.prototype.validateValue=function(o){var d=Number(o);return this.ensureNumber(d)?d:(this.error="[CountUp] invalid start or end value: "+o,null)},g.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},g}()},17857:function(Z,y,a){"use strict";var D;D={value:!0};var f=a(67294),g=a(8273);function o(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var d=o(f);function O(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(p){return Object.getOwnPropertyDescriptor(r,p).enumerable})),n.push.apply(n,i)}return n}function t(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?O(Object(n),!0).forEach(function(i){m(r,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(n,i))})}return r}function m(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function u(){return u=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])}return r},u.apply(this,arguments)}function E(r,e){if(r==null)return{};var n={},i=Object.keys(r),p,l;for(l=0;l<i.length;l++)p=i[l],!(e.indexOf(p)>=0)&&(n[p]=r[p]);return n}function _(r,e){if(r==null)return{};var n=E(r,e),i,p;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(p=0;p<l.length;p++)i=l[p],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,i)||(n[i]=r[i]))}return n}var A=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?f.useLayoutEffect:f.useEffect;function c(r){var e=f.useRef(r);return A(function(){e.current=r}),f.useCallback(function(){for(var n=arguments.length,i=new Array(n),p=0;p<n;p++)i[p]=arguments[p];return e.current.apply(void 0,i)},[])}var C=function(e,n){var i=n.decimal,p=n.decimals,l=n.duration,B=n.easingFn,W=n.end,I=n.formattingFn,j=n.numerals,v=n.prefix,x=n.separator,h=n.start,V=n.suffix,T=n.useEasing;return new g.CountUp(e,W,{startVal:h,duration:l,decimal:i,decimalPlaces:p,easingFn:B,formattingFn:I,numerals:j,separator:x,prefix:v,suffix:V,useEasing:T,useGrouping:!!x})},s=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],F={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},b=function(e){var n=f.useMemo(function(){return t(t({},F),e)},[e]),i=n.ref,p=n.startOnMount,l=n.enableReinitialize,B=n.delay,W=n.onEnd,I=n.onStart,j=n.onPauseResume,v=n.onReset,x=n.onUpdate,h=_(n,s),V=f.useRef(),T=f.useRef(),S=f.useRef(!1),N=c(function(){return C(typeof i=="string"?i:i.current,h)}),R=c(function(L){var k=V.current;if(k&&!L)return k;var Y=N();return V.current=Y,Y}),Q=c(function(){var L=function(){return R(!0).start(function(){W==null||W({pauseResume:w,reset:U,start:K,update:z})})};B&&B>0?T.current=setTimeout(L,B*1e3):L(),I==null||I({pauseResume:w,reset:U,update:z})}),w=c(function(){R().pauseResume(),j==null||j({reset:U,start:K,update:z})}),U=c(function(){T.current&&clearTimeout(T.current),R().reset(),v==null||v({pauseResume:w,start:K,update:z})}),z=c(function(L){R().update(L),x==null||x({pauseResume:w,reset:U,start:K})}),K=c(function(){U(),Q()}),G=c(function(L){p&&(L&&U(),Q())});return f.useEffect(function(){S.current?l&&G(!0):(S.current=!0,G())},[l,S,G,B,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),f.useEffect(function(){return function(){U()}},[U]),{start:K,pauseResume:w,reset:U,update:z,getCountUp:R}},M=["className","redraw","containerProps","children","style"],P=function(e){var n=e.className,i=e.redraw,p=e.containerProps,l=e.children,B=e.style,W=_(e,M),I=d.default.useRef(null),j=d.default.useRef(!1),v=b(t(t({},W),{},{ref:I,startOnMount:typeof l!="function"||e.delay===0,enableReinitialize:!1})),x=v.start,h=v.reset,V=v.update,T=v.pauseResume,S=v.getCountUp,N=c(function(){x()}),R=c(function(U){e.preserveValue||h(),V(U)}),Q=c(function(){if(typeof e.children=="function"&&!(I.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}S()});f.useEffect(function(){Q()},[Q]),f.useEffect(function(){j.current&&R(e.end)},[e.end,R]);var w=i&&e;return f.useEffect(function(){i&&j.current&&N()},[N,i,w]),f.useEffect(function(){!i&&j.current&&N()},[N,i,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),f.useEffect(function(){j.current=!0},[]),typeof l=="function"?l({countUpRef:I,start:x,reset:h,update:V,pauseResume:T,getCountUp:S}):d.default.createElement("span",u({className:n,ref:I,style:B},p),e.start?S().formattingFn(e.start):"")};y.ZP=P,D=b}}]);
