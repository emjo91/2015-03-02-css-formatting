/*!CK:1816038391!*//*1423957374,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["pDOre"]); }

__d("TimelineLogging",["TimelineComponentKeys","TimelineController","reportData"],function(a,b,c,d,e,f,g,h,i){var j=false,k=0,l=null,m=null,n={init:function(o){if(j)return;k=o;h.register(g.LOGGING,this);},reset:function(){j=false;k=0;l=null;},log:function(o,p){p.profile_id=k;i(o,{gt:p});},logSectionChange:function(o,p){var q={timeline_section_change:1,key:o};if(l&&o==l){q.timeline_scrubber=1;l=null;}if(m&&o==m){q.sticky_header_nav=1;m=null;}n.log('timeline',q);},logScrubberClick:function(o){l=o;},logStickyHeaderNavClick:function(o){m=o;}};e.exports=n;},null);