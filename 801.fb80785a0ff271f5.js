"use strict";(self.webpackChunkbrainbank=self.webpackChunkbrainbank||[]).push([[801],{7999:(D,A,_)=>{_.d(A,{w:()=>x});var o=_(8256),b=_(7825);let x=(()=>{class y{constructor(g){this.route=g}ngOnInit(){}goToPage(g){this.route.navigate(["/"+g])}}return y.\u0275fac=function(g){return new(g||y)(o.Y36(b.F0))},y.\u0275cmp=o.Xpm({type:y,selectors:[["app-userdetails"]],decls:91,vars:0,consts:[[1,"row"],[1,"whitecard"],[1,"center-div"],[1,"user-details-section"],[1,"myprofile-info"],[1,"profile-circle"],["src","assets/images/icons/user2.png","alt","user-img"],["src","assets/images/svg/notification.svg","alt","notification-icon"],[1,"button"],[1,"bottom-footer1"],[1,"btn-div"],["onclick","window.location.href='#'",1,"ux-button","primary","sm-mob"],["src","assets/images/svg/email2.svg","alt","message-icon"],["onclick","window.location.href='#'",1,"ux-button","blue-mid","sm-mob"],["src","assets/images/svg/setting.svg","alt","setting-icon"],[1,"row","mb-2"],[1,"slide-text"],[1,"marquee-list"],["src","assets/images/svg/go-up1.svg","alt","icon"],["src","assets/images/svg/go-down.svg","alt","icon"],[1,"col-12","col-md-12"],[1,"language-bar"],[1,"lang-dropdown"],["href","javascript:;",1,"btn-selectlang"],[1,"language-list",2,"display","none"],[1,"lst-languages"],[3,"click"],[1,"language-selected"],[1,"list-nh"],["href","javascript:;"],[1,"dropdown-sub"],["href","#"]],template:function(g,h){1&g&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),o._UZ(6,"img",6),o.qZA(),o.TgZ(7,"h1"),o._uU(8,"Welcome back, Brian! "),o.qZA(),o.TgZ(9,"em"),o._UZ(10,"img",7),o._uU(11," You have 2 new messages and 15 new tasks"),o.qZA()(),o.TgZ(12,"div",8)(13,"ul",9)(14,"li")(15,"div",10)(16,"button",11),o._UZ(17,"img",12),o._uU(18," Messages "),o.qZA()(),o.TgZ(19,"div",10)(20,"button",13),o._UZ(21,"img",14),o._uU(22," Settings "),o.qZA()()()()()()(),o.TgZ(23,"div",15)(24,"div",16)(25,"marquee")(26,"div",0)(27,"ul",17)(28,"li")(29,"em"),o._uU(30,"Top Payee App"),o.qZA()(),o.TgZ(31,"li")(32,"em"),o._uU(33,"Google Pay 29.66 % "),o._UZ(34,"img",18),o.qZA()(),o.TgZ(35,"li")(36,"em"),o._uU(37,"BHIM YES Pay 39.72 % "),o._UZ(38,"img",19),o.qZA()(),o.TgZ(39,"li")(40,"em"),o._uU(41,"Other Payee Apps 45.22 % "),o._UZ(42,"img",19),o.qZA()()()()()()(),o.TgZ(43,"div",2)(44,"div",0)(45,"div",20)(46,"div",21)(47,"div",22)(48,"a",23)(49,"em"),o._uU(50,"Channel Analytics"),o.qZA(),o._UZ(51,"i"),o.qZA(),o.TgZ(52,"div",24)(53,"ul",25)(54,"li",26),o.NdJ("click",function(){return h.goToPage("dashboard")}),o.TgZ(55,"a",27),o._uU(56,"Channel Analytics"),o.qZA()(),o.TgZ(57,"li",26),o.NdJ("click",function(){return h.goToPage("digitalpayment")}),o.TgZ(58,"a"),o._uU(59,"Digital Payments"),o.qZA()(),o.TgZ(60,"li",28)(61,"a",29),o._uU(62,"ATM "),o._UZ(63,"i"),o.qZA(),o.TgZ(64,"ul",30)(65,"li",26),o.NdJ("click",function(){return h.goToPage("atm")}),o.TgZ(66,"a"),o._uU(67,"Main Menu"),o.qZA()(),o.TgZ(68,"li")(69,"a",31),o._uU(70,"ATM Profile"),o.qZA()(),o.TgZ(71,"li")(72,"a",31),o._uU(73,"ATM Placement"),o.qZA()(),o.TgZ(74,"li")(75,"a",31),o._uU(76,"ATM Transaction Analysis"),o.qZA()()()(),o.TgZ(77,"li",28)(78,"a",29),o._uU(79,"POS "),o._UZ(80,"i"),o.qZA(),o.TgZ(81,"ul",30)(82,"li")(83,"a",31),o._uU(84,"Main Menu"),o.qZA()(),o.TgZ(85,"li")(86,"a",31),o._uU(87,"Card Usage"),o.qZA()(),o.TgZ(88,"li")(89,"a",31),o._uU(90,"Merchant Analysis"),o.qZA()()()()()()()()()()()()())}}),y})()},8524:(D,A,_)=>{_.d(A,{v:()=>g});var o=_(6895),b=_(7825),x=_(8256);const y=[];let k=(()=>{class h{}return h.\u0275fac=function(T){return new(T||h)},h.\u0275mod=x.oAB({type:h}),h.\u0275inj=x.cJS({imports:[b.Bz.forChild(y),b.Bz]}),h})(),g=(()=>{class h{}return h.\u0275fac=function(T){return new(T||h)},h.\u0275mod=x.oAB({type:h}),h.\u0275inj=x.cJS({imports:[o.ez,k]}),h})()},7154:(D,A,_)=>{_.d(A,{Z:()=>ce});var o=_(4035),b=_(5311),x=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var e=window.screen;if(e)return(e.deviceXDPI||1)/(e.logicalXDPI||1)}return 1}(),y_textSize=function(e,t,r){var l,a=[].concat(t),i=a.length,n=e.font,s=0;for(e.font=r.string,l=0;l<i;++l)s=Math.max(e.measureText(a[l]).width,s);return e.font=n,{height:i*r.lineHeight,width:s}};function k(e,t){var r=t.x,a=t.y;if(null===r)return{x:0,y:-1};if(null===a)return{x:1,y:0};var i=e.x-r,n=e.y-a,s=Math.sqrt(i*i+n*n);return{x:s?i/s:0,y:s?n/s:-1}}function P(e,t,r){var a=0;return e<r.left?a|=1:e>r.right&&(a|=2),t<r.top?a|=8:t>r.bottom&&(a|=4),a}function S(e,t){var i,n,r=t.anchor,a=e;return t.clamp&&(a=function V(e,t){for(var u,d,v,r=e.x0,a=e.y0,i=e.x1,n=e.y1,s=P(r,a,t),l=P(i,n,t);s|l&&!(s&l);)8&(u=s||l)?(d=r+(i-r)*(t.top-a)/(n-a),v=t.top):4&u?(d=r+(i-r)*(t.bottom-a)/(n-a),v=t.bottom):2&u?(v=a+(n-a)*(t.right-r)/(i-r),d=t.right):1&u&&(v=a+(n-a)*(t.left-r)/(i-r),d=t.left),u===s?s=P(r=d,a=v,t):l=P(i=d,n=v,t);return{x0:r,x1:i,y0:a,y1:n}}(a,t.area)),"start"===r?(i=a.x0,n=a.y0):"end"===r?(i=a.x1,n=a.y1):(i=(a.x0+a.x1)/2,n=(a.y0+a.y1)/2),function g(e,t,r,a,i){switch(i){case"center":r=a=0;break;case"bottom":r=0,a=1;break;case"right":r=1,a=0;break;case"left":r=-1,a=0;break;case"top":r=0,a=-1;break;case"start":r=-r,a=-a;break;case"end":break;default:i*=Math.PI/180,r=Math.cos(i),a=Math.sin(i)}return{x:e,y:t,vx:r,vy:a}}(i,n,e.vx,e.vy,t.align)}var E={arc:function(e,t){var r=(e.startAngle+e.endAngle)/2,a=Math.cos(r),i=Math.sin(r),n=e.innerRadius,s=e.outerRadius;return S({x0:e.x+a*n,y0:e.y+i*n,x1:e.x+a*s,y1:e.y+i*s,vx:a,vy:i},t)},point:function(e,t){var r=k(e,t.origin),a=r.x*e.options.radius,i=r.y*e.options.radius;return S({x0:e.x-a,y0:e.y-i,x1:e.x+a,y1:e.y+i,vx:r.x,vy:r.y},t)},bar:function(e,t){var r=k(e,t.origin),a=e.x,i=e.y,n=0,s=0;return e.horizontal?(a=Math.min(e.x,e.base),n=Math.abs(e.base-e.x)):(i=Math.min(e.y,e.base),s=Math.abs(e.base-e.y)),S({x0:a,y0:i+s,x1:a+n,y1:i,vx:r.x,vy:r.y},t)},fallback:function(e,t){var r=k(e,t.origin);return S({x0:e.x,y0:e.y,x1:e.x+(e.width||0),y1:e.y+(e.height||0),vx:r.x,vy:r.y},t)}},w=function(e){return Math.round(e*x)/x};function K(e,t){var r=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!r)return null;if(void 0!==r.xCenter&&void 0!==r.yCenter)return{x:r.xCenter,y:r.yCenter};var a=r.getBasePixel();return e.horizontal?{x:a,y:null}:{x:null,y:a}}function Y(e){return e instanceof b.qi?E.arc:e instanceof b.od?E.point:e instanceof b.ZL?E.bar:E.fallback}function ae(e,t,r){var a=e.shadowBlur,i=r.stroked,n=w(r.x),s=w(r.y),l=w(r.w);i&&e.strokeText(t,n,s,l),r.filled&&(a&&i&&(e.shadowBlur=0),e.fillText(t,n,s,l),a&&i&&(e.shadowBlur=a))}var z=function(e,t,r,a){var i=this;i._config=e,i._index=a,i._model=null,i._rects=null,i._ctx=t,i._el=r};(0,o.V)(z.prototype,{_modelize:function(e,t,r,a){var i=this,n=i._index,s=(0,o.O)((0,o.a)([r.font,{}],a,n)),l=(0,o.a)([r.color,b.ce.color],a,n);return{align:(0,o.a)([r.align,"center"],a,n),anchor:(0,o.a)([r.anchor,"center"],a,n),area:a.chart.chartArea,backgroundColor:(0,o.a)([r.backgroundColor,null],a,n),borderColor:(0,o.a)([r.borderColor,null],a,n),borderRadius:(0,o.a)([r.borderRadius,0],a,n),borderWidth:(0,o.a)([r.borderWidth,0],a,n),clamp:(0,o.a)([r.clamp,!1],a,n),clip:(0,o.a)([r.clip,!1],a,n),color:l,display:e,font:s,lines:t,offset:(0,o.a)([r.offset,4],a,n),opacity:(0,o.a)([r.opacity,1],a,n),origin:K(i._el,a),padding:(0,o.K)((0,o.a)([r.padding,4],a,n)),positioner:Y(i._el),rotation:(0,o.a)([r.rotation,0],a,n)*(Math.PI/180),size:y_textSize(i._ctx,t,s),textAlign:(0,o.a)([r.textAlign,"start"],a,n),textShadowBlur:(0,o.a)([r.textShadowBlur,0],a,n),textShadowColor:(0,o.a)([r.textShadowColor,l],a,n),textStrokeColor:(0,o.a)([r.textStrokeColor,l],a,n),textStrokeWidth:(0,o.a)([r.textStrokeWidth,0],a,n)}},update:function(e){var s,l,u,t=this,r=null,a=null,i=t._index,n=t._config,d=(0,o.a)([n.display,!0],e,i);d&&(l=(0,o.v)((0,o.C)(n.formatter,[s=e.dataset.data[i],e]),s),(u=(0,o.k)(l)?[]:function(e){var r,t=[];for(e=[].concat(e);e.length;)"string"==typeof(r=e.pop())?t.unshift.apply(t,r.split("\n")):Array.isArray(r)?e.push.apply(e,r):(0,o.k)(e)||t.unshift(""+r);return t}(l)).length&&(a=function X(e){var t=e.borderWidth||0,r=e.padding,a=e.size.height,i=e.size.width,n=-i/2,s=-a/2;return{frame:{x:n-r.left-t,y:s-r.top-t,w:i+r.width+2*t,h:a+r.height+2*t},text:{x:n,y:s,w:i,h:a}}}(r=t._modelize(d,u,n,e)))),t._model=r,t._rects=a},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(e,t){var s,a=e.ctx,i=this._model,n=this._rects;!this.visible()||(a.save(),i.clip&&(s=i.area,a.beginPath(),a.rect(s.left,s.top,s.right-s.left,s.bottom-s.top),a.clip()),a.globalAlpha=function(e,t,r){return Math.max(e,Math.min(t,r))}(0,i.opacity,1),a.translate(w(t.x),w(t.y)),a.rotate(i.rotation),function ee(e,t,r){var a=r.backgroundColor,i=r.borderColor,n=r.borderWidth;!a&&(!i||!n)||(e.beginPath(),function Q(e,t,r,a,i,n){var s=Math.PI/2;if(n){var l=Math.min(n,i/2,a/2),u=t+l,d=r+l,v=t+a-l,f=r+i-l;e.moveTo(t,d),u<v&&d<f?(e.arc(u,d,l,-Math.PI,-s),e.arc(v,d,l,-s,0),e.arc(v,f,l,0,s),e.arc(u,f,l,s,Math.PI)):u<v?(e.moveTo(u,r),e.arc(v,d,l,-s,s),e.arc(u,d,l,s,Math.PI+s)):d<f?(e.arc(u,d,l,-Math.PI,0),e.arc(u,f,l,0,Math.PI)):e.arc(u,d,l,-Math.PI,Math.PI),e.closePath(),e.moveTo(t,r)}else e.rect(t,r,a,i)}(e,w(t.x)+n/2,w(t.y)+n/2,w(t.w)-n,w(t.h)-n,r.borderRadius),e.closePath(),a&&(e.fillStyle=a,e.fill()),i&&n&&(e.strokeStyle=i,e.lineWidth=n,e.lineJoin="miter",e.stroke()))}(a,n.frame,i),function te(e,t,r,a){var m,i=a.textAlign,n=a.color,s=!!n,l=a.font,u=t.length,d=a.textStrokeColor,v=a.textStrokeWidth,f=d&&v;if(u&&(s||f))for(r=function re(e,t,r){var a=r.lineHeight,i=e.w,n=e.x;return"center"===t?n+=i/2:("end"===t||"right"===t)&&(n+=i),{h:a,w:i,x:n,y:e.y+a/2}}(r,i,l),e.font=l.string,e.textAlign=i,e.textBaseline="middle",e.shadowBlur=a.textShadowBlur,e.shadowColor=a.textShadowColor,s&&(e.fillStyle=n),f&&(e.lineJoin="round",e.lineWidth=v,e.strokeStyle=d),m=0,u=t.length;m<u;++m)ae(e,t[m],{stroked:f,filled:s,w:r.w,x:r.x,y:r.y+r.h*m})}(a,i.lines,n.text,i),a.restore())}});var ie=Number.MIN_SAFE_INTEGER||-9007199254740991,ne=Number.MAX_SAFE_INTEGER||9007199254740991;function U(e,t,r){var a=Math.cos(r),i=Math.sin(r),n=t.x,s=t.y;return{x:n+a*(e.x-n)-i*(e.y-s),y:s+i*(e.x-n)+a*(e.y-s)}}function O(e,t){var n,s,d,r=ne,a=ie,i=t.origin;for(n=0;n<e.length;++n)d=t.vx*((s=e[n]).x-i.x)+t.vy*(s.y-i.y),r=Math.min(r,d),a=Math.max(a,d);return{min:r,max:a}}function I(e,t){var r=t.x-e.x,a=t.y-e.y,i=Math.sqrt(r*r+a*a);return{vx:(t.x-e.x)/i,vy:(t.y-e.y)/i,origin:e,ln:i}}var N=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function F(e,t,r){var a=t.positioner(e,t),i=a.vx,n=a.vy;if(!i&&!n)return{x:a.x,y:a.y};var s=r.w,l=r.h,u=t.rotation,d=Math.abs(s/2*Math.cos(u))+Math.abs(l/2*Math.sin(u)),v=Math.abs(s/2*Math.sin(u))+Math.abs(l/2*Math.cos(u)),f=1/Math.max(Math.abs(i),Math.abs(n));return d*=i*f,v*=n*f,{x:a.x+(d+=t.offset*i),y:a.y+(v+=t.offset*n)}}(0,o.V)(N.prototype,{center:function(){var e=this._rect;return{x:e.x+e.w/2,y:e.y+e.h/2}},update:function(e,t,r){this._rotation=r,this._rect={x:t.x+e.x,y:t.y+e.y,w:t.w,h:t.h}},contains:function(e){var t=this,a=t._rect;return!((e=U(e,t.center(),-t._rotation)).x<a.x-1||e.y<a.y-1||e.x>a.x+a.w+2||e.y>a.y+a.h+2)},intersects:function(e){var i,n,s,t=this._points(),r=e._points(),a=[I(t[0],t[1]),I(t[0],t[3])];for(this._rotation!==e._rotation&&a.push(I(r[0],r[1]),I(r[0],r[3])),i=0;i<a.length;++i)if(n=O(t,a[i]),s=O(r,a[i]),n.max<s.min||s.max<n.min)return!1;return!0},_points:function(){var e=this,t=e._rect,r=e._rotation,a=e.center();return[U({x:t.x,y:t.y},a,r),U({x:t.x+t.w,y:t.y},a,r),U({x:t.x+t.w,y:t.y+t.h},a,r),U({x:t.x,y:t.y+t.h},a,r)]}});var C={prepare:function(e){var r,a,i,n,s,t=[];for(r=0,i=e.length;r<i;++r)for(a=0,n=e[r].length;a<n;++a)t.push(s=e[r][a]),s.$layout={_box:new N,_hidable:!1,_visible:!0,_set:r,_idx:s._index};return t.sort(function(l,u){var d=l.$layout,v=u.$layout;return d._idx===v._idx?v._set-d._set:v._idx-d._idx}),this.update(t),t},update:function(e){var r,a,i,n,s,t=!1;for(r=0,a=e.length;r<a;++r)n=(i=e[r]).model(),(s=i.$layout)._hidable=n&&"auto"===n.display,s._visible=i.visible(),t|=s._hidable;t&&function se(e){var t,r,a,i,n,s,l;for(t=0,r=e.length;t<r;++t)(i=(a=e[t]).$layout)._visible&&(l=new Proxy(a._el,{get:(u,d)=>u.getProps([d],!0)[d]}),n=a.geometry(),s=F(l,a.model(),n),i._box.update(s,n,a.rotation()));(function oe(e,t){var r,a,i,n;for(r=e.length-1;r>=0;--r)for(i=e[r].$layout,a=r-1;a>=0&&i._visible;--a)(n=e[a].$layout)._visible&&i._box.intersects(n._box)&&t(i,n)})(e,function(u,d){var v=u._hidable,f=d._hidable;v&&f||f?d._visible=!1:v&&(u._visible=!1)})}(e)},lookup:function(e,t){var r,a;for(r=e.length-1;r>=0;--r)if((a=e[r].$layout)&&a._visible&&a._box.contains(t))return e[r];return null},draw:function(e,t){var r,a,i,n,s,l;for(r=0,a=t.length;r<a;++r)(n=(i=t[r]).$layout)._visible&&(s=i.geometry(),l=F(i._el,i.model(),s),n._box.update(l,s,i.rotation()),i.draw(e,l))}},c="$datalabels",L="$default";function q(e,t,r,a){if(t){var s,i=r.$context,n=r.$groups;!t[n._set]||(s=t[n._set][n._key])&&!0===(0,o.C)(s,[i,a])&&(e[c]._dirty=!0,r.update(i))}}var ce={id:"datalabels",defaults:{align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(e){if((0,o.k)(e))return null;var r,a,i,t=e;if((0,o.i)(e))if((0,o.k)(e.label))if((0,o.k)(e.r))for(t="",i=0,a=(r=Object.keys(e)).length;i<a;++i)t+=(0!==i?", ":"")+r[i]+": "+e[r[i]];else t=e.r;else t=e.label;return""+t},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},beforeInit:function(e){e[c]={_actives:[]}},beforeUpdate:function(e){var t=e[c];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(e,t,r){var f,m,G,H,B,J,Z,M,a=t.index,i=e[c],n=i._datasets[a]=[],s=e.isDatasetVisible(a),l=e.data.datasets[a],u=function de(e,t){var n,s,r=e.datalabels,a={},i=[];return!1===r?null:(!0===r&&(r={}),t=(0,o.V)({},[t,r]),n=t.labels||{},s=Object.keys(n),delete t.labels,s.length?s.forEach(function(l){n[l]&&i.push((0,o.V)({},[t,n[l],{_key:l}]))}):i.push(t),a=i.reduce(function(l,u){return(0,o.Q)(u.listeners||{},function(d,v){l[v]=l[v]||{},l[v][u._key||L]=d}),delete u.listeners,l},{}),{labels:i,listeners:a})}(l,r),d=t.meta.data||[],v=e.ctx;for(v.save(),f=0,G=d.length;f<G;++f)if((Z=d[f])[c]=[],s&&Z&&e.getDataVisibility(f)&&!Z.skip)for(m=0,H=u.labels.length;m<H;++m)J=(B=u.labels[m])._key,(M=new z(B,v,Z,f)).$groups={_set:a,_key:J||L},M.$context={active:!1,chart:e,dataIndex:f,dataset:l,datasetIndex:a},M.update(M.$context),Z[c].push(M),n.push(M);v.restore(),(0,o.V)(i._listeners,u.listeners,{merger:function(R,$,ye){$[R]=$[R]||{},$[R][t.index]=ye[R],i._listened=!0}})},afterUpdate:function(e){e[c]._labels=C.prepare(e[c]._datasets)},afterDatasetsDraw:function(e){C.draw(e,e[c]._labels)},beforeEvent:function(e,t){if(e[c]._listened){var r=t.event;switch(r.type){case"mousemove":case"mouseout":!function fe(e,t){var i,n,r=e[c],a=r._listeners;if(a.enter||a.leave){if("mousemove"===t.type)n=C.lookup(r._labels,t);else if("mouseout"!==t.type)return;i=r._hovered,r._hovered=n,function ve(e,t,r,a,i){var n,s;!r&&!a||(r?a?r!==a&&(s=n=!0):s=!0:n=!0,s&&q(e,t.leave,r,i),n&&q(e,t.enter,a,i))}(e,a,i,n,t)}}(e,r);break;case"click":!function he(e,t){var r=e[c],a=r._listeners.click,i=a&&C.lookup(r._labels,t);i&&q(e,a,i,t)}(e,r)}}},afterEvent:function(e){var n,s,l,u,d,v,f,t=e[c],i=function(e,t){var i,n,s,l,r=e.slice(),a=[];for(i=0,s=t.length;i<s;++i)-1===(n=r.indexOf(l=t[i]))?a.push([l,1]):r.splice(n,1);for(i=0,s=r.length;i<s;++i)a.push([r[i],-1]);return a}(t._actives,t._actives=e.getActiveElements());for(n=0,s=i.length;n<s;++n)if((d=i[n])[1])for(l=0,u=(f=d[0].element[c]||[]).length;l<u;++l)(v=f[l]).$context.active=1===d[1],v.update(v.$context);(t._dirty||i.length)&&(C.update(t._labels),e.render()),delete t._dirty}}}}]);