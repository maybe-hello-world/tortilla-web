!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(b){b.ui=b.ui||{};var l,x,T,e,n,f,s,h,i;b.ui.version="1.12.1";function L(t,i,o){return[parseFloat(t[0])*(h.test(t[0])?i/100:1),parseFloat(t[1])*(h.test(t[1])?o/100:1)]}function P(t,i){return parseInt(b.css(t,i),10)||0}x=Math.max,T=Math.abs,e=/left|center|right/,n=/top|center|bottom/,f=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,h=/%$/,i=b.fn.position,b.position={scrollbarWidth:function(){if(void 0!==l)return l;var t,i,o=b("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),e=o.children()[0];return b("body").append(o),t=e.offsetWidth,o.css("overflow","scroll"),t===(i=e.offsetWidth)&&(i=o[0].clientWidth),o.remove(),l=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),o=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth;return{width:"scroll"===o||"auto"===o&&t.height<t.element[0].scrollHeight?b.position.scrollbarWidth():0,height:e?b.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=b(t||window),o=b.isWindow(i[0]),e=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:o,isDocument:e,offset:o||e?{left:0,top:0}:b(t).offset(),scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},b.fn.position=function(c){if(!c||!c.of)return i.apply(this,arguments);c=b.extend({},c);var a,d,g,u,m,t,w=b(c.of),W=b.position.getWithinInfo(c.within),v=b.position.getScrollInfo(W),y=(c.collision||"flip").split(" "),H={};return t=function(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:b.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}(w),w[0].preventDefault&&(c.at="left top"),d=t.width,g=t.height,u=t.offset,m=b.extend({},u),b.each(["my","at"],function(){var t,i,o=(c[this]||"").split(" ");1===o.length&&(o=e.test(o[0])?o.concat(["center"]):n.test(o[0])?["center"].concat(o):["center","center"]),o[0]=e.test(o[0])?o[0]:"center",o[1]=n.test(o[1])?o[1]:"center",t=f.exec(o[0]),i=f.exec(o[1]),H[this]=[t?t[0]:0,i?i[0]:0],c[this]=[s.exec(o[0])[0],s.exec(o[1])[0]]}),1===y.length&&(y[1]=y[0]),"right"===c.at[0]?m.left+=d:"center"===c.at[0]&&(m.left+=d/2),"bottom"===c.at[1]?m.top+=g:"center"===c.at[1]&&(m.top+=g/2),a=L(H.at,d,g),m.left+=a[0],m.top+=a[1],this.each(function(){var o,t,f=b(this),s=f.outerWidth(),h=f.outerHeight(),i=P(this,"marginLeft"),e=P(this,"marginTop"),l=s+i+P(this,"marginRight")+v.width,n=h+e+P(this,"marginBottom")+v.height,r=b.extend({},m),p=L(H.my,f.outerWidth(),f.outerHeight());"right"===c.my[0]?r.left-=s:"center"===c.my[0]&&(r.left-=s/2),"bottom"===c.my[1]?r.top-=h:"center"===c.my[1]&&(r.top-=h/2),r.left+=p[0],r.top+=p[1],o={marginLeft:i,marginTop:e},b.each(["left","top"],function(t,i){b.ui.position[y[t]]&&b.ui.position[y[t]][i](r,{targetWidth:d,targetHeight:g,elemWidth:s,elemHeight:h,collisionPosition:o,collisionWidth:l,collisionHeight:n,offset:[a[0]+p[0],a[1]+p[1]],my:c.my,at:c.at,within:W,elem:f})}),c.using&&(t=function(t){var i=u.left-r.left,o=i+d-s,e=u.top-r.top,l=e+g-h,n={target:{element:w,left:u.left,top:u.top,width:d,height:g},element:{element:f,left:r.left,top:r.top,width:s,height:h},horizontal:o<0?"left":0<i?"right":"center",vertical:l<0?"top":0<e?"bottom":"middle"};d<s&&T(i+o)<d&&(n.horizontal="center"),g<h&&T(e+l)<g&&(n.vertical="middle"),x(T(i),T(o))>x(T(e),T(l))?n.important="horizontal":n.important="vertical",c.using.call(this,t,n)}),f.offset(b.extend(r,{using:t}))})},b.ui.position={fit:{left:function(t,i){var o,e=i.within,l=e.isWindow?e.scrollLeft:e.offset.left,n=e.width,f=t.left-i.collisionPosition.marginLeft,s=l-f,h=f+i.collisionWidth-n-l;i.collisionWidth>n?0<s&&h<=0?(o=t.left+s+i.collisionWidth-n-l,t.left+=s-o):t.left=0<h&&s<=0?l:h<s?l+n-i.collisionWidth:l:0<s?t.left+=s:0<h?t.left-=h:t.left=x(t.left-f,t.left)},top:function(t,i){var o,e=i.within,l=e.isWindow?e.scrollTop:e.offset.top,n=i.within.height,f=t.top-i.collisionPosition.marginTop,s=l-f,h=f+i.collisionHeight-n-l;i.collisionHeight>n?0<s&&h<=0?(o=t.top+s+i.collisionHeight-n-l,t.top+=s-o):t.top=0<h&&s<=0?l:h<s?l+n-i.collisionHeight:l:0<s?t.top+=s:0<h?t.top-=h:t.top=x(t.top-f,t.top)}},flip:{left:function(t,i){var o,e,l=i.within,n=l.offset.left+l.scrollLeft,f=l.width,s=l.isWindow?l.scrollLeft:l.offset.left,h=t.left-i.collisionPosition.marginLeft,r=h-s,p=h+i.collisionWidth-f-s,c="left"===i.my[0]?-i.elemWidth:"right"===i.my[0]?i.elemWidth:0,a="left"===i.at[0]?i.targetWidth:"right"===i.at[0]?-i.targetWidth:0,d=-2*i.offset[0];r<0?((o=t.left+c+a+d+i.collisionWidth-f-n)<0||o<T(r))&&(t.left+=c+a+d):0<p&&(0<(e=t.left-i.collisionPosition.marginLeft+c+a+d-s)||T(e)<p)&&(t.left+=c+a+d)},top:function(t,i){var o,e,l=i.within,n=l.offset.top+l.scrollTop,f=l.height,s=l.isWindow?l.scrollTop:l.offset.top,h=t.top-i.collisionPosition.marginTop,r=h-s,p=h+i.collisionHeight-f-s,c="top"===i.my[1]?-i.elemHeight:"bottom"===i.my[1]?i.elemHeight:0,a="top"===i.at[1]?i.targetHeight:"bottom"===i.at[1]?-i.targetHeight:0,d=-2*i.offset[1];r<0?((e=t.top+c+a+d+i.collisionHeight-f-n)<0||e<T(r))&&(t.top+=c+a+d):0<p&&(0<(o=t.top-i.collisionPosition.marginTop+c+a+d-s)||T(o)<p)&&(t.top+=c+a+d)}},flipfit:{left:function(){b.ui.position.flip.left.apply(this,arguments),b.ui.position.fit.left.apply(this,arguments)},top:function(){b.ui.position.flip.top.apply(this,arguments),b.ui.position.fit.top.apply(this,arguments)}}};b.ui.position});