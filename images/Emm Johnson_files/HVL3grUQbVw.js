/*!CK:2361721171!*//*1424750683,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["jBF6R"]); }

__d("CalendarUI",["Event","Arbiter","AsyncRequest","CSS","DOM","DOMQuery","DOMScroll","Hovercard","Parent","Run","ScrollAwareDOM","Style","UIPagelet","Vector","ViewportBounds","$","copyProperties","ge","goURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){function z(){}w(z,{EVENT_ACTION:'EVENT_ACTION',_todayButton:null,_todayElement:null,_upPager:null,_months:[],_timestamp:null,_registeredReminders:false,init:function(){h.subscribe(this.EVENT_ACTION,function(ba,ca){s.loadFromEndpoint('CalendarHeaderPagelet','pagelet_calendar_header',JSON.parse(ca.actioncontext));});var aa=u.addTop(function(){var ba=x('pagelet_calendar_header');if(ba&&r.isFixed(ba.firstChild)){var ca=ba.firstChild.getBoundingClientRect();return ca.bottom;}return 0;});p.onLeave(function(){aa.remove();});},initGridItem:function(aa,ba){g.listen(aa,'click',function(event){if(o.byTag(event.getTarget(),'a'))return;i.bootstrap(ba,aa);return;});},pageUp:function(){j.removeClass(this._upPager.parentNode,'fbCalendarNoPadding');j.addClass(this._upPager.parentNode,'pvl');if(this._upPager)this._upPager.click();},getScrollFunction:function(aa){var ba=this;return function(event){var ca=o.byClass(event.getTarget(),'fbCalendarBox'),da=ba._months.indexOf(ca);if(aa&&da===0){ba.pageUp();}else ba.scrollTo(ba._months[da+(aa?-1:1)],true);};},registerArrowHandlers:function(aa,ba){g.listen(aa,'click',this.getScrollFunction(true));g.listen(ba,'click',this.getScrollFunction(false));},initScrollItem:function(aa,ba){g.listen(aa,'click',this.scrollTo.bind(this,ba));},scrollTo:function(aa,ba){aa=l.isNode(aa)?aa:x(aa);var ca=0,da=40;if(aa){var ea=t.getElementPosition(v('fbCalendarWrapper')).y,fa;if(document.getElementById('headerArea')){fa=t.getElementDimensions(v('headerArea')).y;}else{fa=0;da=12;}var ga=t.getElementPosition(aa).y;ca=ga-ea-fa+da;}else ca=t.getElementPosition(v('bottomContent')).y;m.scrollTo(new t(0,ca,'document'),ba!==false);},initUnhide:function(aa,ba){g.listen(aa,'click',function(event){var ca=o.byClass(ba,'fbCalendarItem');k.remove(ba);j.removeClass(k.find(ca,'.fbHiddenCalendarItem'),'fbHiddenCalendarItem');});},registerMonth:function(aa,ba){if(!this._timestamp||ba>this._timestamp){this._months.push(aa);}else this._months.unshift(aa);this._timestamp=ba;},registerHomepageReminders:function(){if(!this._registeredReminders){h.subscribe(this.EVENT_ACTION,function(aa,ba){if(x('pagelet_reminders'))s.loadFromEndpoint('RemindersPagelet','pagelet_reminders');});this._registeredReminders=true;}},registerTodayClickHandler:function(){this._todayButton.onclick=null;g.listen(this._todayButton,'click',this.scrollTo.bind(this,this._todayElement));},registerUpPagerButton:function(aa){var ba=l.isNode(aa)?aa:x(aa);j.removeClass(ba,'pvl');j.removeClass(ba,'hidden_elem');j.addClass(ba,'fbCalendarNoPadding');if(ba){this._upPager=v(ba.getElementsByTagName('a')[0]);}else this._upPager=null;},registerTodayElement:function(aa){this._todayElement=l.isNode(aa)?aa:x(aa);this._todayButton&&this.registerTodayClickHandler();},registerTodayButton:function(aa){this._todayButton=aa;this._todayElement&&this.registerTodayClickHandler();},registerEventLink:function(aa,ba){h.subscribe(this.EVENT_ACTION,function(ca,da){if(da.eid===ba)switch(da.action){case 'GOING':j.removeClass(aa.parentNode,"hidden_elem");j.addClass(aa,"fbCalendarEventGoing");break;case 'MAYBE':j.removeClass(aa.parentNode,"hidden_elem");j.removeClass(aa,"fbCalendarEventGoing");break;case 'DECLINED':case 'HIDDEN':n.hide(true);j.addClass(aa.parentNode,"hidden_elem");break;case 'EDITED':if(da.name)k.setContent(aa,da.name);if(da.day){var ea=x("pagelet_calendar_day_"+da.day);if(ea){var fa=l.find(ea,".fbCalendarGridEventList");if(l.scry(fa,"li").length>=4){j.addClass(aa.parentNode,"hidden_elem");s.loadFromEndpoint("CalendarDayPagelet","pagelet_calendar_day_"+da.day,{day:da.timestamp});}else k.prependContent(fa,aa.parentNode);}else j.addClass(aa.parentNode,"hidden_elem");}break;}});},informEventGoing:function(aa,ba){h.inform(this.EVENT_ACTION,{eid:aa,action:'GOING',actioncontext:ba});},informEventMaybe:function(aa,ba){h.inform(this.EVENT_ACTION,{eid:aa,action:'MAYBE',actioncontext:ba});},informEventDeclined:function(aa,ba){h.inform(this.EVENT_ACTION,{eid:aa,action:'DECLINED',actioncontext:ba});},informEventHidden:function(aa,ba){h.inform(this.EVENT_ACTION,{eid:aa,action:'HIDDEN',actioncontext:ba});},informEventEdited:function(aa,ba,ca,da){h.inform(this.EVENT_ACTION,{eid:aa,action:'EDITED',name:ba,day:ca,timestamp:da});},removeCalendarListHeader:function(aa){var ba=k.scry(aa,"^.fbCalendarOverlay .fbCalendarItem"),ca=k.find(aa,"^.fbCalendarItem");if(ba.length==1)ca=k.find(aa,"^.fbCalendarOverlay");k.remove(ca);},reloadPage:function(){y(window.location);},unhide:function(aa){setTimeout(function(){q.monitor(aa.nextSibling,j.show.bind(null,aa));},0);}});e.exports=z;},null);
__d("XEventReminderImpressionLoggerAsyncController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/events\/ajax\/reminder\/impression\/",{acontext:{type:"StringToStringMap",required:true},data:{type:"StringToStringMap"}});},null);
__d("EventReminderController",["Arbiter","AsyncRequest","DOM","DOMQuery","Event","ScrollableArea","XEventReminderImpressionLoggerAsyncController"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={registerReminder:function(o,p){this._firstOpen=true;var q=o.getDialog(),r=l.getInstance(j.scry(q.getRoot(),'.uiScrollableArea')[0]),s=null;if(r){s=i.find(r.getElement(),'div.uiScrollableAreaWrap');r.subscribe('scroll',function(){return g.inform('EventReminderDialog/scroll',{rect:s.getBoundingClientRect(),scrollTop:s.scrollTop});});}k.listen(o.getRoot(),'click',function(event){event.preventDefault();});q.subscribe('show',function(){var t=m.getURIBuilder().setStringToStringMap('acontext',p).setStringToStringMap('data',{first_open:this._firstOpen}).getURI();new h(t).send();this._firstOpen=false;var u={};if(s)u={rect:s.getBoundingClientRect()};g.inform('EventReminderDialog/show',u);}.bind(this));q.subscribe('hide',function(){return g.inform('EventReminderDialog/hide');});}};e.exports=n;},null);
__d("RequestListController",["Arbiter","ChannelConstants","CSS","DOM"],function(a,b,c,d,e,f,g,h,i,j){function k(l){"use strict";this.$RequestListController0=l;this.$RequestListController1=0;this.$RequestListController2={};g.subscribe(h.getArbiterType('jewel_requests_remove_old'),this.$RequestListController3.bind(this));this.fromDom();}k.prototype.$RequestListController4=function(l){"use strict";var m=l.match(/^(\d+)_(\d+)/);return (m)?{requester:m[1],type:m[2]}:(void 0);};k.prototype.$RequestListController5=function(l){"use strict";var m=l?this.$RequestListController4(l):(void 0),n;if(m&&m.requester){n=parseInt(m.requester,10);if(isNaN(n))n=(void 0);}var o;if(m&&m.type){o=parseInt(m.type,10);if(isNaN(o))o=(void 0);}return {requester:n,type:o};};k.prototype.fromDom=function(){"use strict";j.scry(this.$RequestListController0,'.fbRequestList li.objectListItem').forEach(function(l){var m=l.getAttribute('id');if(m){var n=this.$RequestListController5(m);if(n.requester)this.$RequestListController2[n.requester]={id:m,item:l};++this.$RequestListController1;}}.bind(this));this.$RequestListController6();};k.prototype.$RequestListController3=function(l,m){"use strict";var n=this.$RequestListController2[m.obj.from];if(n){j.remove(n.item);delete this.$RequestListController2[m.obj.from];--this.$RequestListController1;this.$RequestListController6();}};k.prototype.$RequestListController6=function(){"use strict";j.scry(this.$RequestListController0,'li.empty').forEach(function(l){i.conditionShow(l,this.$RequestListController1<=0);}.bind(this));};e.exports=k;},null);
__d("AppRequestReminders",["AsyncRequest","CSS","DOM","ge"],function(a,b,c,d,e,f,g,h,i,j){var k=0,l={},m=1,n=j('OtherAppReqReminder'),o=function(u,v,w){l[v]={node:u,seq:m++,reqCount:w};},p=function(u){k=u;},q=function(u){return u.id.split('_')[1];},r=function(u){var v=j(u),w=v.nextSibling;if(w!==n){h.show(w);k-=l[q(w)].reqCount;}s(k);},s=function(u){new g().setURI('/ajax/reminders/update_count.php').setData({new_count:u}).setMethod('POST').send();},t=function(u,v){if(n&&v&&u>0){i.setContent(j('OtherAppReqLabel'),v);}else if(n){h.hide(n);}else h.hide(j('OtherAppReqReminder'));};f.initNode=o;f.handleRemove=r;f.updateCount=t;f.setTotalOtherCount=p;},null);
__d("FlexibleScrollableArea",["DataStore","DOM","DOMDimensions","Event","Parent","Run","Style","Vector","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=30,q=100;function r(s,t,u,v,w){"use strict";this._element=s;this._tight=t;this._measureFrom=u;this._minHeight=v;this._margin=w;g.set(this._element,'FlexibleScrollableArea',this);l.onLeave(this.cleanup.bind(this));this._listener=j.listen(window,'resize',o(this.poke,q,this));this.poke();}r.prototype.poke=function(){"use strict";var s=h.find(this._element,'.uiScrollableAreaBody'),t=n.getElementDimensions(s).y+i.measureElementBox(s,'height',true,true,true),u;if(this._tight){var v=this.getMaxHeight();if(t<v+p)v+=p;u=Math.max(Math.min(t,v),this._minHeight);}else u=Math.max(this.getMaxHeight(),this._minHeight);m.set(this._element,'height',u+'px');};r.prototype.getMaxHeight=function(){"use strict";if(this._measureFrom==='bottom'){var s=n.getViewportDimensions().y,t=n.getElementPosition(this._element,'viewport').y,u=s-t;return u-this._margin;}var v=n.getElementPosition(this._element,'viewport').y+n.getElementDimensions(this._element).y;return v-this._margin;};r.prototype.cleanup=function(){"use strict";this._listener&&this._listener.remove();};r.getInstance=function(s){"use strict";var t=k.byClass(s,'flexibleScrollableArea');return t?g.get(t,'FlexibleScrollableArea'):null;};e.exports=r;},null);
__d("LoadRecommendations",["Event","AsyncRequest"],function(a,b,c,d,e,f,g,h){var i={loadOnClick:function(j){g.listen(j,'click',function(){new h().setURI('/ajax/pages/reminder/recommendations').send();});}};e.exports=i;},null);
__d("PubContentTrendingUnitTruncation",["DOM","LitestandEllipsis","Style","csx"],function(a,b,c,d,e,f,g,h,i,j){var k,l={truncate:function(m){var n=g.scry(m,"._5v9v")[0];if(n){if(typeof k==='undefined'){var o=g.find(m,"._uhk");k=i.getFloat(o,'maxHeight');}var p=g.find(m,"._5r--");h.add(n,k,p);}}};e.exports=l;},null);
__d("XPubcontentTrendingSeeMoreController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/pubcontent\/trending\/see_more\/",{topic_ids:{type:"IntVector",defaultValue:[]},position:{type:"Int",required:true}});},null);
__d("NewPubcontentTrendingUnitToggle",["AsyncRequest","CSS","DOM","Event","PubContentTrendingUnitTruncation","XPubcontentTrendingSeeMoreController","Run","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=false,q=[],r,s;function t(){if(r){r.remove();r=null;}if(s){s.remove();s=null;}}var u={listenForToggle:function(v,w,x,y,z,aa){function ba(){t();p=true;if(y)h.addClass(y,"_24gw");if(w)h.hide(w);if(x)h.show(x);z.forEach(function(da){q.push(da);});var ca=(l.getURIBuilder()).setIntVector('topic_ids',q).setInt('position',aa).getURI();new g().setURI(ca).setHandler(function(){if(x)h.hide(x);i.scry(v,"._5my1").forEach(function(da){k.truncate(da);});}).send();}if(y)r=j.listen(y,'click',ba);if(w)s=j.listen(w,'click',ba);m.onLeave(t);},isToggled:function(){return p;},setIsToggled:function(v){j.fire(v,'click');},addTopicID:function(v){q.push(v);}};e.exports=u;},null);
__d("PubcontentTrendingUnitToggle",["CSS","DOM","Event","PubContentTrendingUnitTruncation","Run","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=false,o,p;function q(){if(o){o.remove();o=null;}if(p){p.remove();p=null;}}var r={listenForToggle:function(s,t,u){function v(){q();n=true;if(u)g.addClass(u,"_24gw");if(t)g.hide(t);h.scry(s,"._5my1").forEach(function(w){g.show(w);j.truncate(w);});}if(u)o=i.listen(u,'click',v);if(t)p=i.listen(t,'click',v);k.onLeave(q);},isToggled:function(){return n;}};e.exports=r;},null);
__d("XPubcontentTrendingReplaceTrendsController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/pubcontent\/trending\/trending_unit\/",{is_expanded:{type:"Bool",defaultValue:false}});},null);
__d("PubcontentTrendingUnitRefresh",["AsyncRequest","PubcontentTrendingUnitToggle","XPubcontentTrendingReplaceTrendsController"],function(a,b,c,d,e,f,g,h,i){var j={refreshTrendingUnitWithDelay:function(k){var l=k*1000;setTimeout(function(){var m=h.isToggled(),n=(i.getURIBuilder()).setBool('is_expanded',m).getURI();new g().setURI(n).send();},l);}};e.exports=j;},null);
__d("TrendingRHCLogger",["AsyncSignal","CSS","Event","Parent","Run","BanzaiScuba","TrendingRHCConfig","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w=3,x=false,y=false;function z(ea,fa,ga,ha){var ia=new l('trending_rhc',null,{sampleRate:m.sample_rate});ia.addNormal('country',s);ia.addNormal('post_search_trending_feeds',m.post_search_trending_feeds);ia.addNormal('event',fa);ia.addNormal('position',ea);ia.addNormal('qe_group',p);if(x){var ja=ea<=w?q:v;ia.addNormal('source',ja);}else ia.addNormal('source',q);ia.addNormVector('categories',ga);ia.addNormal('topic_id',ha);ia.post();}function aa(ea,fa){var ga=ea.getAttribute('data-position');if(!ga)return;var ha=ea.getAttribute('data-categories'),ia=ha?JSON.parse(ha):null,ja=ea.getAttribute('data-topicid');z(ga,fa,ia,ja);}function ba(event){var ea=null,fa=event.getTarget(),ga=j.byClass(event.getTarget(),"_2w2e");if(ga){fa=ga;}else if(!h.hasClass(fa,"_5my2")){ea=j.byClass(fa,"_4_nl");fa=j.byClass(fa,"_5my2");}if(!fa||ea||h.hasClass(event.getTarget(),"_19_3")||h.hasClass(event.getTarget(),"_1k6k"))return;aa(fa,'click');var ha=fa.getAttribute('data-position');if(ha==='seemore'||ha==='trendingheader')if(x){y=true;}else ca();}function ca(){if(!o)return;if(x){new g('/ajax/pubcontent/trending_rhc/log_hidden',{keys:JSON.stringify(o),source:v,scores:JSON.stringify(t),query_id:u}).send();}else new g('/ajax/pubcontent/trending_rhc/log_hidden',{keys:JSON.stringify(o),source:q,scores:JSON.stringify(t),query_id:r}).send();o=null;}var da={init:function(ea,fa){q=fa.source;p=fa.qe_group;s=fa.country;o=fa.hidden_keys;r=fa.query_id;t=fa.hidden_scores;if(fa.has_litestand==='gk')x=true;var ga=i.listen(ea,'click',ba);k.onLeave(function(){ga.remove();});},initSeeMore:function(ea,fa,ga,ha,ia){o=fa;t=ga;u=ha;v=ia;var ja=i.listen(ea,'click',ba);if(y){ca();}else y=false;k.onLeave(function(){ja.remove();});},logHovercardArticleClick:function(ea,fa){z(ea,'hover_article_click',null,fa);},logHovercardFeedClick:function(ea,fa){z(ea,'hover_feed_click',null,fa);},logImpression:function(ea){aa(ea,'imp');},getSource:function(){return q;},getQueryID:function(){return r;},getSeeMoreSource:function(){return v;},getSeeMoreQueryID:function(){return u;}};e.exports=da;},null);
__d("XPubcontentTrendingHideConfirmController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/pubcontent\/trending\/hide_confirm\/",{hidden_topic_id:{type:"Int",required:true},position:{type:"Int",defaultValue:0},reason:{type:"Int",required:true},source:{type:"String"},trqid:{type:"Int",defaultValue:-1}});},null);
__d("XPubcontentTrendingInsertItemController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/pubcontent\/trending\/hide_options\/",{num_removed_topics:{type:"Int",defaultValue:0},trending_topic_id:{type:"Int",required:true},topic_ids:{type:"IntVector",defaultValue:[]}});},null);
__d("TrendingRHCHideForDeferredSeemore",["AsyncRequest","CSS","DOM","DOMQuery","Event","PubContentTrendingUnitTruncation","TrendingRHCLogger","URI","XPubcontentTrendingHideConfirmController","XPubcontentTrendingInsertItemController","cx","csx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t,u,v=false,w=['webkitAnimationEnd','animationend','mozAnimationEnd','oAnimationEnd','MSAnimationEnd'];function x(da){h.removeClass(da,"_4_ni");}function y(da){da.sort(function(ea,fa){var ga=Number(ea.getAttribute('data-position')),ha=Number(fa.getAttribute('data-position'));if(ga&&ha)return ga<ha?-1:1;return 0;});return da;}function z(da,ea){var fa=j.scry(da,"._5my2"),ga=fa.filter(function(ia){var ja=Number(ia.getAttribute('data-position'));return ja>=ea;}),ha=[];ga.forEach(function(ia){var ja=Number(ia.getAttribute('data-position'));ia.setAttribute('data-position',ja-1);var ka=j.scry(ia,"._7ge");ka.forEach(function(la){var ma=n(la.getAttribute('href')).addQueryData('position',ja-1);ha.push({link:la,uri:ma.toString()});});});ha.forEach(function(ia){var ja=ia.link;ja.setAttribute('href',ia.uri);});u++;}function aa(da,ea){var fa=da[0],ga=da.filter(function(ha){return !h.hasClass(ha,"_5my1");});if(ga&&ga[0])h.addClass(ga[0],"_5my1");h.addClass(fa,"_4_ni");h.show(fa);m.logImpression(fa);w.forEach(function(event){fa.addEventListener(event,function(){l.truncate(fa);});});}function ba(da,ea){var fa=j.find(da,"^._5mym"),ga=j.scry(fa,"._5my2.hidden_elem");ga=y(ga);var ha=j.find(da,"^._5my2"),ia=i.create('div',{className:"_4_nj"});if(ga.length>=1)aa(ga,ha);var ja=Number(ha.getAttribute('data-position'));z(fa,ja);i.replace(ha,ia);var ka=(o.getURIBuilder()).setInt('reason',da.firstChild.value).setInt('hidden_topic_id',ea).setInt('position',ja);if(m.getSource())ka.setString('source',m.getSource());if(m.getQueryID())ka.setInt('trqid',m.getQueryID());var la=ka.getURI();new g().setURI(la).setRelativeTo(da).send();}var ca={initializeTrendingTopics:function(da){t=da;u=0;},addTopicID:function(da){if(t)t.push(da);},addTopicIDs:function(da){if(t)da.forEach(function(ea){t.push(ea);});},confirmHide:function(da,ea){var fa=false;s(k.listen(da,'click',function(){setTimeout(function(){if(fa)return;fa=true;ba(da,ea);},100);}));},listenForHide:function(da,ea){s(k.listen(da,'click',function(){var fa=j.find(da,"^._5my2");x(fa);var ga=j.find(fa,"._4_nl"),ha=j.find(fa,"._4_nm");h.hide(ha);h.show(ga);if(!v){v=true;var ia=(p.getURIBuilder()).setInt('trending_topic_id',ea).setIntVector('topic_ids',t).setInt('num_removed_topics',u).getURI();new g().setURI(ia).setRelativeTo(da).setHandler(function(){v=false;}).send();}}));},listenForUndo:function(da){var ea=j.find(da,"._4_nn");s(k.listen(ea,'click',function(){var fa=j.find(da,"^._5my2 ._4_nm");h.hide(da);h.show(fa);var ga=j.scry(fa,"^._5myl ._4loq");i.remove(ga[ga.length-1]);t.pop();}));},hideSeeMoreLink:function(){var da=j.scry(document,"a._5my9");if(da&&da.length>0&&!h.hasClass(da[0],'hidden_elem'))h.addClass(da[0],"_4_nk");}};e.exports=ca;},null);
__d("ReminderStory",["AsyncRequest","Arbiter","DOMQuery","Event","FlexibleScrollableArea","LayerAutoFocus","ScrollableArea","SubscriptionsHandler","UIPagelet","getActiveElement"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(r,s,t,u,v){"use strict";this.$ReminderStory0=false;this.$ReminderStory1=s;this.$ReminderStory2=r;j.listen(r,'click',function(event){if(t&&i.contains(t,event.target))return;s.show();if(u)new g('/growth/reminder/logging.php').setData({context_data:u,first_click:!this.$ReminderStory0}).send();this.$ReminderStory0=true;}.bind(this));if(v)s.subscribeOnce('show',function(){o.loadFromEndpoint(v,s.getContent());});s.disableBehavior(l);s.subscribe('aftershow',function(){var w=s.getRoot(),x=i.scry(w,'#SuggestBelowInvite')[0];if(x)new g('/ajax/pages/reminder/recommendations').send();var y=s.hide.bind(s);this.$ReminderStory3=new n();this.$ReminderStory3.addSubscriptions(j.listen(window,'resize',y),j.listen(window,'scroll',y));var z=i.scry(w,'.inlineReplyTextArea');z[0]&&z[0].focus();var aa=i.scry(w,'.jewelItemNew'),ba=[];aa.forEach(function(fa){var ga=aa[fa].getAttribute('id');if(ga&&ga.endsWith('_1_req'))ba=ba.concat(ga.replace('_1_req',''));});if(ba.length>0)new g('/friends/requests/log_impressions').setData({ids:ba.join(','),ref:'reminder_box'}).send();var ca=m.getInstance(i.scry(s.getRoot(),'.uiScrollableArea')[0]),da=k.getInstance(i.scry(s.getRoot(),'.flexibleScrollableArea')[0]),ea=function(){if(da)da.poke();if(ca){ca.poke();j.fire(i.scry(s.getRoot(),'.scrollable')[0],'scroll');}};ea();h.subscribe('reflow',function(){var fa=i.scry(w,'.fbRemindersBirthdayList');if(z&&fa)for(var ga=0;ga<z.length;++ga)if(z[ga]==p()&&i.contains(fa[0],z[ga]))ea();});}.bind(this));s.subscribe('beforehide',function(){if(this.$ReminderStory3){this.$ReminderStory3.release();this.$ReminderStory3=null;}}.bind(this));}q.prototype.getDialog=function(){"use strict";return this.$ReminderStory1;};q.prototype.getRoot=function(){"use strict";return this.$ReminderStory2;};e.exports=q;},null);
__d("ReminderStoryUtils",["CSS","Event"],function(a,b,c,d,e,f,g,h){var i={hideOnClick:function(j,k){h.listen(k,'click',function(){g.hide(j);});}};e.exports=i;},null);
__d("XBirthdayRemindersCameraPreviewController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/birthday\/reminder\/camera\/preview\/",{photo_fbid:{type:"Int",required:true},target_id:{type:"Int",required:true}});},null);
__d("BirthdayModal",["AsyncRequest","BirthdayRemindersCounter","BirthdayRemindersCounterEvent","Button","CSS","DataStore","DOM","Event","FileInputUploader","Focus","Layer","Parent","XBirthdayRemindersCameraPreviewController","csx","cx","goURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var w=null,x={},y,z,aa={init:function(ba,ca){y=ca;n.listen(ba,'click',function(){h.logEvent(i.OPEN_MODAL);ca.show();});},addComposers:function(ba,ca){if(!ca||(ca!==w))x={};w=ca;for(var da in ba)if(ba.hasOwnProperty(da))this._addComposer(m.find(ba[da],"._5j0b"),da);},_showInput:function(ba){var ca=m.scry(ba,"._4ovw").pop();if(!ca)return;var da=m.find(ba,"._4ovy"),ea=m.find(da,'.inlineReplyTextArea');k.hide(ca);k.show(da);p.set(ea);},_addComposer:function(ba,ca){x[ca]=ba;var da=m.scry(ba,"._4ovw").pop();if(!da)return;var ea=this;['click','focus'].forEach(function(ga){n.listen(da,ga,function(event){var ha=event.getTarget();if(r.byClass(ha,"_260q"))return;ea._showInput(ba);});});var fa=m.find(ba,"._4ow2");this._addRemoveButton(fa,ca);return true;},addUpcomingBirthdays:function(ba,ca){n.listen(ca.firstChild,'click',function(event){k.show(ba);k.hide(ca);});},attachPhoto:function(ba,ca,da){var ea=x[da];if(!ea)return;var fa=m.find(ea,"._4ovz");k.removeClass(fa,"._4ow0");var ga=m.find(ea,"._4ow1");ga.appendChild(ca);m.appendContent(fa,ba);var ha=m.find(ea,"._4ow2");k.show(ha);this._showInput(ea);var ia=m.find(ea,"._30e4");j.setEnabled(ia,true);},initUploader:function(ba,ca,da,ea){var fa=ba.getInput();ba.subscribe('change',this._uploadPhoto.bind(this,fa,ea,da));},_uploadPhoto:function(ba,ca,da){var ea=x[da];if(!ea)return;h.logEvent(i.ADD_UPLOADED);this._showInput(ea);var fa=m.find(ea,"._4ow3"),ga=m.find(ea,"._4ow4");k.show(fa);k.hide(ga);var ha=new o(ba);ha.setURI(ca.uploadURI).setData(ca.uploadData).setAllowCrossOrigin(true).setUploadInParallel(true).setFiles(ba.files).send();var ia=m.find(ea,"._30e4");j.setEnabled(ia,false);var ja=q.getTopmostLayer();if(ja)ja.hide();},getCameraPreview:function(ba,ca){var da=x[ca];if(!da)return;h.logEvent(i.ADD_SELFIE);this._showInput(da);var ea=m.find(da,"._4ow3"),fa=m.find(da,"._4ow4");k.show(ea);k.hide(fa);var ga=s.getURIBuilder().setInt('target_id',ca).setInt('photo_fbid',ba).getURI();new g(ga).send();var ha=m.find(da,"._30e4");j.setEnabled(ha,false);},showPhotoPicker:function(ba){ba.subscribeOnce(['show'],function(){k.addClass(y.getContentRoot(),"_30e3");}.bind(this));ba.subscribeOnce(['hide'],function(){y.show();k.removeClass(y.getContentRoot(),"_30e3");}.bind(this));},addPhotoItem:function(ba,ca,da,ea,fa){var ga=x[ea];if(!ga)return;n.listen(ba,'click',function(){h.logEvent(fa);var ha=m.find(ga,"._4ow3"),ia=m.find(ga,"._4ovz"),ja=m.find(ga,"._4ow4");k.show(ha);k.hide(ja);k.removeClass(ia,"._4ow0");var ka=m.find(ga,"._4ow1");ka.appendChild(da);m.appendContent(ia,ca);var la=m.find(ga,"._4ow2");k.show(la);this._showInput(ga);var ma=q.getTopmostLayer();if(ma)ma.hide();}.bind(this));},_addRemoveButton:function(ba,ca){var da=x[ca];if(!da)return;n.listen(ba,'click',function(ea){ea.kill();k.hide(ba);var fa=m.find(da,"._4ow3"),ga=m.find(da,"._4ovz"),ha=m.find(da,"._4ow4");k.hide(fa);k.show(ha);k.addClass(ga,"._4ow0");if(ga.firstChild)m.remove(ga.firstChild);m.scry(da,"._4ow5").forEach(function(ia){m.remove(ia);});}.bind(this));},_resetComposer:function(ba){var ca=m.find(ba,"._4ow2");ca.click();var da=m.find(ba,".uiMentionsInput");l.get(da,'MentionsInput').reset();},finishPosting:function(ba,ca,da,ea){if(da)return v(window.location.href,true);var fa=x[ca];if(!fa)return;if(!ea){var ga=m.find(fa,"._4ovy");m.replace(ga,ba);return;}this._resetComposer(fa);k.addClass(fa,"_4dgh");},cancelScheduled:function(ba,ca){if(ca)return v(window.location.href,true);var da=x[ba];if(!da)return;k.removeClass(da,"_4dgh");},setPhotoAlbumView:function(ba){z=ba;},setPhotoView:function(ba){if(!z)return;var ca=m.find(z,"._5r32");if(ca){k.hide(ca);}else return;var da=m.find(z,"._375u");da.appendChild(ba);var ea=m.find(ba,"._375v");n.listen(ea,'click',function(){k.show(ca);var fa=m.find(z,"._375w");m.remove(fa);}.bind(this));},attachFlyout:function(ba){var ca=ba.getContext(),da=m.find(ba.getContentRoot(),"._21xo"),ea=m.scry(ba.getContentRoot(),"._15p7").pop(),fa=function(){k.conditionClass(ca,"_21xn",ba.isShown());};fa();ba.subscribe(['show','hide'],fa);n.listen(ca,'click',function(ga){ba.conditionShow(!ba.isShown());ga.kill();});n.listen(da,'click',function(){ba.hide();});if(ea)n.listen(ea,'click',function(){ba.hide();});}};e.exports=aa;},null);