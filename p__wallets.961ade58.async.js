(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{99219:function(B,C,a){"use strict";a.d(C,{e:function(){return o}});var V=a(2824),c=a(20310),g=a(67294),s=a(17857),l=a(47416),E=a(85893),t,h=l.ZP.div(t||(t=(0,c.Z)([`
  padding: `,`;
`])),function(p){return p.padding||"0"}),o=function(v){var _=v.value,m=_===void 0?"":_,d=v.decimals,x=v.padding,D=(0,g.useState)(0),O=(0,V.Z)(D,2),j=O[0],b=O[1],i=(0,g.useState)(0),e=(0,V.Z)(i,2),n=e[0],r=e[1];return(0,g.useEffect)(function(){typeof m=="number"&&(b(n),r(m))},[m]),(0,E.jsx)(h,{padding:x,children:typeof m=="string"?m:(0,E.jsx)(s.ZP,{start:j,end:n,decimals:d!==void 0?d:0,duration:1,separator:","})})}},64731:function(B,C,a){"use strict";a.d(C,{b:function(){return D}});var V=a(58024),c=a(39144),g=a(20310),s=a(67294),l=a(47416),E=a(16924),t=a(46677),h=a.n(t),o=a(85893),p,v,_,m=l.ZP.div(p||(p=(0,g.Z)([`
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
`]))),d=l.ZP.div(v||(v=(0,g.Z)([`
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
`]))),x=(0,l.ZP)(c.Z)(_||(_=(0,g.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;

  }
`]))),D=function(j){var b=j.props,i=j.path,e=i===void 0?"market":i;return(0,o.jsx)(E.Link,{to:{pathname:"".concat(e,"/").concat(b.id),search:"id=".concat(b.id,"&name=").concat(b.dog_name,"&path=").concat(e)},children:(0,o.jsx)(x,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,o.jsxs)(m,{children:[(0,o.jsx)("div",{className:"images",children:(0,o.jsx)("img",{alt:"example",src:b.img_url})}),(0,o.jsx)("div",{className:"bottom",children:(0,o.jsx)("h4",{children:b.dog_name})}),(0,o.jsx)("div",{className:"price",children:"600x"})]}),children:(0,o.jsxs)(d,{children:[(0,o.jsx)("span",{children:"\u51FA\u552E\u50F9\u683C"}),(0,o.jsxs)("p",{children:[(0,o.jsx)("img",{src:h(),alt:"",className:"icon"}),parseInt(b.market_price).toFixed(2)]})]})})})}},14164:function(B,C,a){"use strict";a.r(C),a.d(C,{default:function(){return r}});var V=a(13062),c=a(71230),g=a(89032),s=a(15746),l=a(20310),E=a(47416),t=a(64731),h=a(67294),o=a(67329),p=a(93874),v=a(53776),_=a(83832),m=a(99219),d=a(85893),x,D,O=E.ZP.div(x||(x=(0,l.Z)([`
  h3{
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
  }
  p{
    font-size: 16px;
    color: hsla(0,0%,100%,.8);
    margin-bottom: 0;
  }
`]))),j=function(u){var F=u.text,A=u.value;return(0,d.jsxs)(O,{children:[(0,d.jsxs)("h3",{children:[" ",(0,d.jsx)(m.e,{value:A!=null?A:0})]}),(0,d.jsx)("p",{children:F})]})},b=E.ZP.div(D||(D=(0,l.Z)([`
  border-radius: 100px;
  background: linear-gradient(270deg, #89d143, #75db8d);
  padding: 30px 15px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
`]))),i=function(){return _jsx(b,{children:_jsxs(_Row,{gutter:20,children:[_jsx(_Col,{xs:24,sm:12,children:_jsx(j,{text:"CCP",value:0})}),_jsx(_Col,{xs:24,sm:12,children:_jsx(j,{text:"USDT",value:0})})]})})},e,n=E.ZP.div(e||(e=(0,l.Z)([`

  padding: 20px;
  box-sizing: border-box;

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
`]))),r=function(){var f,u,F=(0,v.t)("@@initialState"),A=F.initialState,P=(0,o.f)(p.w.nftPacket),y=P.data,U=P.request,R=P.status;return(0,h.useEffect)(function(){U("")},[]),(0,d.jsxs)(n,{children:[(0,d.jsx)(b,{children:(0,d.jsxs)(c.Z,{gutter:20,children:[(0,d.jsx)(s.Z,{xs:12,sm:12,children:(0,d.jsx)(j,{text:"CCP",value:A==null||(f=A.currentUser)===null||f===void 0?void 0:f.ccp_dog_coin})}),(0,d.jsx)(s.Z,{xs:12,sm:12,children:(0,d.jsx)(j,{text:"USDT",value:A==null||(u=A.currentUser)===null||u===void 0?void 0:u.usdt_coin})})]})}),(0,d.jsx)(c.Z,{className:"balances",gutter:48}),(0,d.jsx)("div",{style:{padding:"20px"},children:R==o.o.wait?(0,d.jsx)(_.Z,{}):(0,d.jsx)(c.Z,{gutter:48,children:y==null?void 0:y.goods.data.map(function(M){return(0,d.jsx)(s.Z,{span:6,xs:24,sm:12,md:12,lg:6,children:(0,d.jsx)(t.b,{props:M,path:"wallets"})},M.id)})})})]})}},67329:function(B,C,a){"use strict";a.d(C,{f:function(){return E},o:function(){return t}});var V=a(3182),c=a(2824),g=a(94043),s=a.n(g),l=a(67294),E=function(o){var p=(0,l.useState)(t.start),v=(0,c.Z)(p,2),_=v[0],m=v[1],d=(0,l.useState)(),x=(0,c.Z)(d,2),D=x[0],O=x[1],j=(0,l.useCallback)(function(){var b=(0,V.Z)(s().mark(function i(e){var n,r;return s().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,m(t.wait),u.next=4,o(e);case 4:n=u.sent,O(n),m(t.success),u.next=14;break;case 9:u.prev=9,u.t0=u.catch(0),r={err:u.t0},O(r),m(t.failure);case 14:case"end":return u.stop()}},i,null,[[0,9]])}));return function(i){return b.apply(this,arguments)}}(),[m,O]);return{status:_,request:j,data:D}},t;(function(h){h[h.start=0]="start",h[h.wait=1]="wait",h[h.success=2]="success",h[h.failure=3]="failure"})(t||(t={}))},46677:function(B){B.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},8273:function(B,C,a){"use strict";a.r(C),a.d(C,{CountUp:function(){return c}});var V=function(){return(V=Object.assign||function(g){for(var s,l=1,E=arguments.length;l<E;l++)for(var t in s=arguments[l])Object.prototype.hasOwnProperty.call(s,t)&&(g[t]=s[t]);return g}).apply(this,arguments)},c=function(){function g(s,l,E){var t=this;this.target=s,this.endVal=l,this.options=E,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(h){t.startTime||(t.startTime=h);var o=h-t.startTime;t.remaining=t.duration-o,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(o,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(o,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(o/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(o/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),o<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(h){var o,p,v,_,m=h<0?"-":"";o=Math.abs(h).toFixed(t.options.decimalPlaces);var d=(o+="").split(".");if(p=d[0],v=d.length>1?t.options.decimal+d[1]:"",t.options.useGrouping){_="";for(var x=0,D=p.length;x<D;++x)x!==0&&x%3==0&&(_=t.options.separator+_),_=p[D-x-1]+_;p=_}return t.options.numerals&&t.options.numerals.length&&(p=p.replace(/[0-9]/g,function(O){return t.options.numerals[+O]}),v=v.replace(/[0-9]/g,function(O){return t.options.numerals[+O]})),m+t.options.prefix+p+v+t.options.suffix},this.easeOutExpo=function(h,o,p,v){return p*(1-Math.pow(2,-10*h/v))*1024/1023+o},this.options=V(V({},this.defaults),E),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(l),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof s=="string"?document.getElementById(s):s,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return g.prototype.determineDirectionAndSmartEasing=function(){var s=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>s;var l=s-this.startVal;if(Math.abs(l)>this.options.smartEasingThreshold){this.finalEndVal=s;var E=this.countDown?1:-1;this.endVal=s+E*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=s,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},g.prototype.start=function(s){this.error||(this.callback=s,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},g.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},g.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},g.prototype.update=function(s){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(s),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},g.prototype.printValue=function(s){var l=this.formattingFn(s);this.el.tagName==="INPUT"?this.el.value=l:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=l:this.el.innerHTML=l},g.prototype.ensureNumber=function(s){return typeof s=="number"&&!isNaN(s)},g.prototype.validateValue=function(s){var l=Number(s);return this.ensureNumber(l)?l:(this.error="[CountUp] invalid start or end value: "+s,null)},g.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},g}()},17857:function(B,C,a){"use strict";var V;V={value:!0};var c=a(67294),g=a(8273);function s(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var l=s(c);function E(i,e){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(f){return Object.getOwnPropertyDescriptor(i,f).enumerable})),n.push.apply(n,r)}return n}function t(i){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?E(Object(n),!0).forEach(function(r){h(i,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(n,r))})}return i}function h(i,e,n){return e in i?Object.defineProperty(i,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[e]=n,i}function o(){return o=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=n[r])}return i},o.apply(this,arguments)}function p(i,e){if(i==null)return{};var n={},r=Object.keys(i),f,u;for(u=0;u<r.length;u++)f=r[u],!(e.indexOf(f)>=0)&&(n[f]=i[f]);return n}function v(i,e){if(i==null)return{};var n=p(i,e),r,f;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(f=0;f<u.length;f++)r=u[f],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,r)||(n[r]=i[r]))}return n}var _=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?c.useLayoutEffect:c.useEffect;function m(i){var e=c.useRef(i);return _(function(){e.current=i}),c.useCallback(function(){for(var n=arguments.length,r=new Array(n),f=0;f<n;f++)r[f]=arguments[f];return e.current.apply(void 0,r)},[])}var d=function(e,n){var r=n.decimal,f=n.decimals,u=n.duration,F=n.easingFn,A=n.end,P=n.formattingFn,y=n.numerals,U=n.prefix,R=n.separator,M=n.start,S=n.suffix,W=n.useEasing;return new g.CountUp(e,A,{startVal:M,duration:u,decimal:r,decimalPlaces:f,easingFn:F,formattingFn:P,numerals:y,separator:R,prefix:U,suffix:S,useEasing:W,useGrouping:!!R})},x=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],D={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},O=function(e){var n=c.useMemo(function(){return t(t({},D),e)},[e]),r=n.ref,f=n.startOnMount,u=n.enableReinitialize,F=n.delay,A=n.onEnd,P=n.onStart,y=n.onPauseResume,U=n.onReset,R=n.onUpdate,M=v(n,x),S=c.useRef(),W=c.useRef(),w=c.useRef(!1),Z=m(function(){return d(typeof r=="string"?r:r.current,M)}),T=m(function(N){var Y=S.current;if(Y&&!N)return Y;var k=Z();return S.current=k,k}),Q=m(function(){var N=function(){return T(!0).start(function(){A==null||A({pauseResume:L,reset:I,start:K,update:z})})};F&&F>0?W.current=setTimeout(N,F*1e3):N(),P==null||P({pauseResume:L,reset:I,update:z})}),L=m(function(){T().pauseResume(),y==null||y({reset:I,start:K,update:z})}),I=m(function(){W.current&&clearTimeout(W.current),T().reset(),U==null||U({pauseResume:L,start:K,update:z})}),z=m(function(N){T().update(N),R==null||R({pauseResume:L,reset:I,start:K})}),K=m(function(){I(),Q()}),G=m(function(N){f&&(N&&I(),Q())});return c.useEffect(function(){w.current?u&&G(!0):(w.current=!0,G())},[u,w,G,F,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),c.useEffect(function(){return function(){I()}},[I]),{start:K,pauseResume:L,reset:I,update:z,getCountUp:T}},j=["className","redraw","containerProps","children","style"],b=function(e){var n=e.className,r=e.redraw,f=e.containerProps,u=e.children,F=e.style,A=v(e,j),P=l.default.useRef(null),y=l.default.useRef(!1),U=O(t(t({},A),{},{ref:P,startOnMount:typeof u!="function"||e.delay===0,enableReinitialize:!1})),R=U.start,M=U.reset,S=U.update,W=U.pauseResume,w=U.getCountUp,Z=m(function(){R()}),T=m(function(I){e.preserveValue||M(),S(I)}),Q=m(function(){if(typeof e.children=="function"&&!(P.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}w()});c.useEffect(function(){Q()},[Q]),c.useEffect(function(){y.current&&T(e.end)},[e.end,T]);var L=r&&e;return c.useEffect(function(){r&&y.current&&Z()},[Z,r,L]),c.useEffect(function(){!r&&y.current&&Z()},[Z,r,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),c.useEffect(function(){y.current=!0},[]),typeof u=="function"?u({countUpRef:P,start:R,reset:M,update:S,pauseResume:W,getCountUp:w}):l.default.createElement("span",o({className:n,ref:P,style:F},f),e.start?w().formattingFn(e.start):"")};C.ZP=b,V=O}}]);
