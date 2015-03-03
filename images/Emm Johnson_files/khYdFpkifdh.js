/*!CK:1790187686!*//*1424661906,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Nt87L"]); }

__d("FbtLoggerImpl",["BanzaiLogger"],function(a,b,c,d,e,f,g){var h={logImpression:function(i){g.log('FbtImpressionsLoggerConfig',{hash:i,sample_rate:100});}};e.exports=h;},null);
__d("IntlEnglishNumberType",["IntlVariations"],function(a,b,c,d,e,f,g){var h={getNumberVariationType:function(i){return i===1?g.NUMBER_SINGULAR:g.NUMBER_PLURAL;}};e.exports=h;},null);
__d("PluginRoadblock",["DOMEvent","DOMEventListener","PlatformDialogClient","PluginReturn","PlatformWidgetEndpoint"],function(a,b,c,d,e,f,g,h,i,j,k){var l={start:function(m,n){j.auto();var o=k.plugins(m)+'?ret=roadblock',p={plugin_reload:o};i.popup('roadblock',n,{},p);},listen:function(m,n,o){h.add(o,'click',g.killThenCall(l.start.bind(null,m,n)));}};e.exports=l;},null);