/*!CK:613999978!*//*1421169008,*/

(self.TimeSlice ? self.TimeSlice.guard : function(f) { return f; })(function() {if (self.CavalryLogger) { CavalryLogger.start_js(["+LqFA"]); }

__d("AppUseTrackerLogger",["AsyncRequest","PageTransitions","Run","copyProperties","isInIframe"],function(a,b,c,d,e,f,g,h,i,j,k){function l(){if(!l.instance)l.instance=this;return l.instance;}j(l,{setup:function(m,n,o,p,q,r){(new l()).init(m,n,o,p,q,r);}});j(l.prototype,{instance:null,endpoint:'/ajax/apps/usage_update.php',heartbeat_endpoint:'/ajax/apps/heartbeat.php',INITIAL_PING:0,ONGOING_PING:1,DISCOVERY_PING:2,ENDING_PING:3,_application_id:0,_is_game:0,_createRequest:function(m){return new g().setURI(this.endpoint).setMethod('POST').setData({app:this._application_id,is_game:this._is_game,type:m,condition:this._signal_on_page_transition});},_createHeartbeatRequest:function(){return new g().setURI(this.heartbeat_endpoint).setMethod('POST').setData({app:this._application_id});},init:function(m,n,o,p,q,r){if(k())return;this.cleanup();h.registerHandler(this.catchPageTransition.bind(this));this._application_id=m;this._is_game=n;if(r){var s=this._createHeartbeatRequest();this._timers.push(setInterval(s.send.bind(s),r));}this._timers.push(setTimeout(function(){this._createRequest(this.INITIAL_PING).send();var t=this._createRequest(this.ONGOING_PING);this._timers.push(setInterval(t.send.bind(t),p));}.bind(this),o));if(q)this._timers.push(setTimeout(function(){this._createRequest(this.DISCOVERY_PING).send();}.bind(this),q));i.onBeforeUnload(this.onBeforeUnload.bind(this));},catchPageTransition:function(m){this._createRequest(this.ENDING_PING).send();this.cleanup();},onBeforeUnload:function(){this._createRequest(this.ENDING_PING).setOption('asynchronous',false).send();this.cleanup();},cleanup:function(){if(this._timers)for(var m=0;m<this._timers.length;m++)clearInterval(this._timers[m]);this._timers=[];}});e.exports=l;},null);
__d("DetectBrokenProxyCache",["AsyncSignal","Cookie","URI"],function(a,b,c,d,e,f,g,h,i){function j(k,l){var m=h.get(l);if((m!=k)&&(m!=null)&&(k!='0')){var n={c:'si_detect_broken_proxy_cache',m:l+' '+k+' '+m},o=new i('/common/scribe_endpoint.php').getQualifiedURI().toString();new g(o,n).send();}}e.exports={run:j};},null);
__d("DimensionLogging",["BanzaiNectar","DOMDimensions"],function(a,b,c,d,e,f,g,h){var i=h.getViewportDimensions();g.log('browser_dimension','homeload',{x:i.width,y:i.height,sw:window.screen.width,sh:window.screen.height,aw:window.screen.availWidth,ah:window.screen.availHeight,at:window.screen.availTop,al:window.screen.availLeft});},null);
__d("DimensionTracking",["Cookie","DOMDimensions","Event","debounce","isInIframe"],function(a,b,c,d,e,f,g,h,i,j,k){function l(){var m=h.getViewportDimensions();g.set('wd',m.width+'x'+m.height);}if(!k()){setTimeout(l,100);i.listen(window,'resize',j(l,250));i.listen(window,'focus',l);}},null);
__d("HighContrastMode",["AccessibilityLogger","CSS","CurrentUser","DOM","Style","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={init:function(n){if(window.top!==window.self)return;var o=j.create('div');j.appendContent(document.body,o);o.style.cssText='border: 1px solid;'+'border-color: red green;'+'position: fixed;'+'height: 5px;'+'top: -999px;'+'background-image: url('+n.spacerImage+');';var p=k.get(o,'background-image'),q=k.get(o,'border-top-color'),r=k.get(o,'border-right-color'),s=q==r&&(p&&(p=='none'||p=='url(invalid-url:)'));if(s){h.conditionClass(document.documentElement,'highContrast',s);if(i.getID())g.logHCM();}j.remove(o);m.init=l;}};e.exports=m;},null);
__d("Live",["Arbiter","AsyncDOM","AsyncSignal","ChannelConstants","DataStore","DOM","ServerJS","createArrayFromMixed","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(r,s){s=JSON.parse(JSON.stringify(s));new m().setRelativeTo(r).handle(s);}var q={logAll:false,startup:function(r){q.logAll=r;q.startup=o;g.subscribe(j.getArbiterType('live'),q.handleMessage.bind(q));},lookupLiveNode:function(r,s){var t=l.scry(document.body,'.live_'+r+'_'+s);t.forEach(function(u){if(k.get(u,'seqnum')===(void 0)){var v=JSON.parse(u.getAttribute('data-live'));k.set(u,'seqnum',v.seq);}});return t;},handleMessage:function(r,s){var t=s.obj,u=t.fbid,v=t.assoc,w=this.lookupLiveNode(u,v);if(!w)return false;w.forEach(function(x){h.invoke(t.updates,x);if(t.js)p(x,t.js);});},log:function(){if(q.logAll){var r=n(arguments).join(':');new i('/common/scribe_endpoint.php',{c:'live_sequence',m:r}).send();}}};e.exports=q;},null);
__d("QuickSandHeader",["sha256","Int64"],function(a,b,c,d,e,f,g,h){function i(j,k){"use strict";this.$QuickSandHeader0=1<<k;this.$QuickSandHeader1=this.$QuickSandHeader0/2;this.$QuickSandHeader2=h.fromInt(this.$QuickSandHeader1-1);this.$QuickSandHeader3=[];this.$QuickSandHeader4=0;this.$QuickSandHeader5=0;this.$QuickSandHeader6=0;this.$QuickSandHeader7=0;var l=g(j),m=this.$QuickSandHeader8(this.$QuickSandHeader9(l)),n=this.$QuickSandHeader8(this.$QuickSandHeader9(l).slice(8));this.$QuickSandHeader3.push(m.xor(h.fromString('736f6d6570736575',16)));this.$QuickSandHeader3.push(n.xor(h.fromString('646f72616e646f6d',16)));this.$QuickSandHeader3.push(m.xor(h.fromString('6c7967656e657261',16)));this.$QuickSandHeader3.push(n.xor(h.fromString('7465646279746573',16)));}i.prototype.sipEdge=function(j){"use strict";return [this.sipNode(j,0),this.sipNode(j,1)];};i.prototype.sipNode=function(j,k){"use strict";return this.$QuickSandHeadera(2*j+k).and(this.$QuickSandHeader2).toInt();};i.prototype.getSize=function(){"use strict";return this.$QuickSandHeader0;};i.prototype.getHalfSize=function(){"use strict";return this.$QuickSandHeader1;};i.prototype.$QuickSandHeaderb=function(j,k){"use strict";return j.shiftLeft(k).or(j.shiftRightUnsigned(64-k));};i.prototype.$QuickSandHeader8=function(j){"use strict";var k=new h.fromInt(j[0]),l=h.fromInt(j[1]).shiftLeft(8),m=h.fromInt(j[2]).shiftLeft(16),n=h.fromInt(j[3]).shiftLeft(24),o=h.fromInt(j[4]).shiftLeft(32),p=h.fromInt(j[5]).shiftLeft(40),q=h.fromInt(j[6]).shiftLeft(48),r=h.fromInt(j[7]).shiftLeft(56);return k.or(l).or(m).or(n).or(o).or(p).or(q).or(r);};i.prototype.$QuickSandHeaderc=function(){"use strict";this.$QuickSandHeader4=this.$QuickSandHeader4.add(this.$QuickSandHeader5);this.$QuickSandHeader6=this.$QuickSandHeader6.add(this.$QuickSandHeader7);this.$QuickSandHeader5=this.$QuickSandHeaderb(this.$QuickSandHeader5,13);this.$QuickSandHeader7=this.$QuickSandHeaderb(this.$QuickSandHeader7,16);this.$QuickSandHeader5=this.$QuickSandHeader5.xor(this.$QuickSandHeader4);this.$QuickSandHeader7=this.$QuickSandHeader7.xor(this.$QuickSandHeader6);this.$QuickSandHeader4=this.$QuickSandHeaderb(this.$QuickSandHeader4,32);this.$QuickSandHeader6=this.$QuickSandHeader6.add(this.$QuickSandHeader5);this.$QuickSandHeader4=this.$QuickSandHeader4.add(this.$QuickSandHeader7);this.$QuickSandHeader5=this.$QuickSandHeaderb(this.$QuickSandHeader5,17);this.$QuickSandHeader7=this.$QuickSandHeaderb(this.$QuickSandHeader7,21);this.$QuickSandHeader5=this.$QuickSandHeader5.xor(this.$QuickSandHeader6);this.$QuickSandHeader7=this.$QuickSandHeader7.xor(this.$QuickSandHeader4);this.$QuickSandHeader6=this.$QuickSandHeaderb(this.$QuickSandHeader6,32);};i.prototype.$QuickSandHeader9=function(j){"use strict";for(var k=[],l=0;l<j.length;l+=2)k.push(parseInt(j.substr(l,2),16));return k;};i.prototype.$QuickSandHeadera=function(j){"use strict";var k=h.fromInt(j);this.$QuickSandHeader4=this.$QuickSandHeader3[0];this.$QuickSandHeader5=this.$QuickSandHeader3[1];this.$QuickSandHeader6=this.$QuickSandHeader3[2];this.$QuickSandHeader7=this.$QuickSandHeader3[3].xor(k);for(var l=0;l<2;l++)this.$QuickSandHeaderc();this.$QuickSandHeader4=this.$QuickSandHeader4.xor(k);this.$QuickSandHeader6=this.$QuickSandHeader6.xor(h.fromString('ff',16));for(l=0;l<4;l++)this.$QuickSandHeaderc();return this.$QuickSandHeader4.xor(this.$QuickSandHeader5).xor(this.$QuickSandHeader6).xor(this.$QuickSandHeader7);};e.exports=i;},null);
__d("QuickSandSolver",["Base64","Form","QuickSandHeader","sha256"],function(a,b,c,d,e,f,g,h,i,j){var k={solveAndUpdateForm:function(l,m,n,o,p,q,r){var s=JSON.stringify([this.solve(l,m,n,o,p),r]),t=document.getElementById(q);h.createHiddenInputs({qsstamp:g.encode(s)},t);},solve:function(l,m,n,o,p){var q=[],r=m;for(var s=0;s<l;s++){q.push(k.solveOneIteration(r,n,o,p));r=k.hashList(q[s]);}return q;},solveOneIteration:function(l,m,n,o){var p=8192,q=new i(l,m),r=o*q.getSize()/100,s=[],t=[],u=[];for(var v=0;v<r;v++){var w=q.sipEdge(v),x=w[0],y=w[1];x+=1;y+=1+q.getHalfSize();var z=s[x],aa=s[y];if(z==y||aa==x)continue;t[0]=x;u[0]=y;var ba=k.path(z,t,s,p),ca=k.path(aa,u,s,p);if(t[ba]==u[ca]){var da=Math.min(ba,ca);for(ba-=da,ca-=da;t[ba]!=u[ca];ba++,ca++);var ea=ba+ca+1;if(ea==n)return k.recoverSolution(ba,ca,t,u,q,n,r);continue;}if(ba<ca){while(ba--)s[t[ba+1]]=t[ba];s[x]=y;}else{while(ca--)s[u[ca+1]]=u[ca];s[y]=x;}}return [];},path:function(l,m,n,o){var p=0;for(p=0;l;l=n[l]){if(++p>=o){while(p--&&m[p]!=l);if(p<0){throw "Maximum path length was exceeded";}else throw "Illegal cycle has occured";}m[p]=l;}return p;},recoverSolution:function(l,m,n,o,p,q,r){var s=function(){};s.prototype.add=function(y){this[y]=true;};s.prototype.remove=function(y){delete this[y];};var t=[],u=new s();u.add([n[0],o[0]]);while(l--)u.add([n[(l+1)&~1],n[(l|1)]]);while(m--)u.add([o[m|1],o[(m+1)&~1]]);var v=0;for(var w=0;w<r;w++){var x=[1+p.sipNode(w,0),1+p.getHalfSize()+p.sipNode(w,1)];if(x in u){t[v++]=w;u.remove(x);}}return t;},hashList:function(l){var m=l.join('-');return j(m);}};e.exports=k;},null);
__d("UFITracking",["Bootloader"],function(a,b,c,d,e,f,g){function h(j){g.loadModules(["DOM","collectDataAttributes"],function(k,l){j.forEach(function(m){var n=k.scry(document.body,m);if(!n||n.link_data)return;var o=l(n,['ft']).ft;if(Object.keys(o).length){var p=k.create('input',{type:'hidden',name:'link_data',value:JSON.stringify(o)});n.appendChild(p);}});});}var i={addAllLinkData:function(){h(['form.commentable_item']);},addAllLinkDataForQuestion:function(){h(['form.fbEigenpollForm','form.fbQuestionPollForm']);}};e.exports=i;},null);

}, 'remote script ')();