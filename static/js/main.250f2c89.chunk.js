(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),r=n(6),o=n.n(r),s=(n(14),n(1)),c=n(7),u=n(8),h=n(2),l=n(3),d=n(4);n(15),n(17);function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,i=Object(h.a)(t);if(e){var a=Object(h.a)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Object(u.a)(this,n)}}var f=function(){function t(e,n){Object(l.a)(this,t),this.x=e,this.y=n}return Object(d.a)(t,null,[{key:"distance",value:function(t,e){var n=t.x-e.x,i=t.y-e.y;return Math.sqrt(n*n+i*i)}}]),t}(),m=function(t){Object(c.a)(n,t);var e=v(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).state={pixelSize:10,height:500,width:150,screenWidth:0,screenHeight:0,mouseX:-9999,mouseY:-9999,mouseEvent:0,effectMod:2,strength:40,strengthCur:0,mouseOver:!1,points:[],pointCount:10},i.drawing=!1,i.ctx=null,i.updateWindowDimensions=i.updateWindowDimensions.bind(Object(s.a)(i)),i.startts=i.getTS(),i}return Object(d.a)(n,[{key:"getPoints",value:function(t,e,n){for(var i=new Array(n),a=0;a<n;a++){var r=t*Math.random(),o=e*Math.random();i[a]=new f(r,o)}return i}},{key:"componentDidMount",value:function(){var t=this,e=this.refs.canvas;this.canvas=e,this.ctx=e.getContext("2d"),this.rAF=requestAnimationFrame(function(){return t.updateAnimationState()}),this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){var t=this.canvas.getBoundingClientRect(),e=window,n=e.innerWidth,i=e.innerHeight,a=t.width,r=t.height,o=Math.min(a,n),s=Math.min(r,i),c=this.state.pointCount,u=s/4,h=o/4,l=this.getPoints(h,u,c);this.setState({width:h,height:u,points:l,screenHeight:s,screenWidth:o}),this.nextFrame()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.rAF),window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateAnimationState",value:function(){this.ts=this.getTS(),this.clearFrame(),this.drawDots()}},{key:"nextFrame",value:function(){var t=this;this.rAF=requestAnimationFrame(function(){return t.updateAnimationState()})}},{key:"clearFrame",value:function(){var t=this.state,e=t.width,n=t.height;this.ctx.clearRect(0,0,e,n)}},{key:"getTS",value:function(){return(new Date).getTime()}},{key:"convertRange",value:function(t,e,n){return(t-e[0])*(n[1]-n[0])/(e[1]-e[0])+n[0]}},{key:"distance",value:function(t,e,n,i){var a=t-n,r=e-i;return Math.sqrt(a*a+r*r)}},{key:"scale",value:function(t,e,n){return(t-e[0])*(n[1]-n[0])/(e[1]-e[0])+n[0]}},{key:"drawDots",value:function(){for(var t=this.state,e=t.width,n=t.height,i=t.points,a=(t.pixelSize,this.ctx),r=(this.getTS(),0);r<e;r++)for(var o=0;o<n;o++){for(var s=[],c=new f(r,o),u=0;u<i.length;u++)s.push(f.distance(i[u],c));var h=s.sort(function(t,e){return t-e});a.beginPath(),a.rect(r,o,1,1);var l=this.convertRange(h[0],[0,h[h.length-1]/10],[255,0]);a.fillStyle="rgb(".concat(l,", ").concat(l,", ").concat(l,")"),a.fill()}}},{key:"getCursorPosition",value:function(t,e){var n=t.getBoundingClientRect(),i=e.clientX-n.left,a=e.clientY-n.top;console.log("x: "+i+" y: "+a)}},{key:"addPoint",value:function(t){var e=this.state,n=e.points,i=e.width,a=e.height,r=e.screenHeight,o=e.screenWidth,s=this.convertRange(t.clientX,[0,o],[0,i]),c=this.convertRange(t.clientY,[0,r],[0,a]);n.push(new f(s,c)),this.setState({points:n}),this.nextFrame()}},{key:"render",value:function(){var t=this,e=this.state,n=e.width,i=e.height;return a.a.createElement("div",{className:"grid"},a.a.createElement("div",{className:"dots"},a.a.createElement("canvas",{ref:"canvas",width:n,height:i,onClick:function(e){return t.addPoint(e)}})))}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.250f2c89.chunk.js.map