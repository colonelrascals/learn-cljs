// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11762){
var map__11787 = p__11762;
var map__11787__$1 = ((((!((map__11787 == null)))?((((map__11787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11787):map__11787);
var m = map__11787__$1;
var n = cljs.core.get.call(null,map__11787__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11787__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11789_11811 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11790_11812 = null;
var count__11791_11813 = (0);
var i__11792_11814 = (0);
while(true){
if((i__11792_11814 < count__11791_11813)){
var f_11815 = cljs.core._nth.call(null,chunk__11790_11812,i__11792_11814);
cljs.core.println.call(null,"  ",f_11815);

var G__11816 = seq__11789_11811;
var G__11817 = chunk__11790_11812;
var G__11818 = count__11791_11813;
var G__11819 = (i__11792_11814 + (1));
seq__11789_11811 = G__11816;
chunk__11790_11812 = G__11817;
count__11791_11813 = G__11818;
i__11792_11814 = G__11819;
continue;
} else {
var temp__4657__auto___11820 = cljs.core.seq.call(null,seq__11789_11811);
if(temp__4657__auto___11820){
var seq__11789_11821__$1 = temp__4657__auto___11820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11789_11821__$1)){
var c__7932__auto___11822 = cljs.core.chunk_first.call(null,seq__11789_11821__$1);
var G__11823 = cljs.core.chunk_rest.call(null,seq__11789_11821__$1);
var G__11824 = c__7932__auto___11822;
var G__11825 = cljs.core.count.call(null,c__7932__auto___11822);
var G__11826 = (0);
seq__11789_11811 = G__11823;
chunk__11790_11812 = G__11824;
count__11791_11813 = G__11825;
i__11792_11814 = G__11826;
continue;
} else {
var f_11827 = cljs.core.first.call(null,seq__11789_11821__$1);
cljs.core.println.call(null,"  ",f_11827);

var G__11828 = cljs.core.next.call(null,seq__11789_11821__$1);
var G__11829 = null;
var G__11830 = (0);
var G__11831 = (0);
seq__11789_11811 = G__11828;
chunk__11790_11812 = G__11829;
count__11791_11813 = G__11830;
i__11792_11814 = G__11831;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11832 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7113__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11832);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11832)))?cljs.core.second.call(null,arglists_11832):arglists_11832));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11793_11833 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11794_11834 = null;
var count__11795_11835 = (0);
var i__11796_11836 = (0);
while(true){
if((i__11796_11836 < count__11795_11835)){
var vec__11797_11837 = cljs.core._nth.call(null,chunk__11794_11834,i__11796_11836);
var name_11838 = cljs.core.nth.call(null,vec__11797_11837,(0),null);
var map__11800_11839 = cljs.core.nth.call(null,vec__11797_11837,(1),null);
var map__11800_11840__$1 = ((((!((map__11800_11839 == null)))?((((map__11800_11839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11800_11839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11800_11839):map__11800_11839);
var doc_11841 = cljs.core.get.call(null,map__11800_11840__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11842 = cljs.core.get.call(null,map__11800_11840__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11838);

cljs.core.println.call(null," ",arglists_11842);

if(cljs.core.truth_(doc_11841)){
cljs.core.println.call(null," ",doc_11841);
} else {
}

var G__11843 = seq__11793_11833;
var G__11844 = chunk__11794_11834;
var G__11845 = count__11795_11835;
var G__11846 = (i__11796_11836 + (1));
seq__11793_11833 = G__11843;
chunk__11794_11834 = G__11844;
count__11795_11835 = G__11845;
i__11796_11836 = G__11846;
continue;
} else {
var temp__4657__auto___11847 = cljs.core.seq.call(null,seq__11793_11833);
if(temp__4657__auto___11847){
var seq__11793_11848__$1 = temp__4657__auto___11847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11793_11848__$1)){
var c__7932__auto___11849 = cljs.core.chunk_first.call(null,seq__11793_11848__$1);
var G__11850 = cljs.core.chunk_rest.call(null,seq__11793_11848__$1);
var G__11851 = c__7932__auto___11849;
var G__11852 = cljs.core.count.call(null,c__7932__auto___11849);
var G__11853 = (0);
seq__11793_11833 = G__11850;
chunk__11794_11834 = G__11851;
count__11795_11835 = G__11852;
i__11796_11836 = G__11853;
continue;
} else {
var vec__11802_11854 = cljs.core.first.call(null,seq__11793_11848__$1);
var name_11855 = cljs.core.nth.call(null,vec__11802_11854,(0),null);
var map__11805_11856 = cljs.core.nth.call(null,vec__11802_11854,(1),null);
var map__11805_11857__$1 = ((((!((map__11805_11856 == null)))?((((map__11805_11856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11805_11856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11805_11856):map__11805_11856);
var doc_11858 = cljs.core.get.call(null,map__11805_11857__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11859 = cljs.core.get.call(null,map__11805_11857__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11855);

cljs.core.println.call(null," ",arglists_11859);

if(cljs.core.truth_(doc_11858)){
cljs.core.println.call(null," ",doc_11858);
} else {
}

var G__11860 = cljs.core.next.call(null,seq__11793_11848__$1);
var G__11861 = null;
var G__11862 = (0);
var G__11863 = (0);
seq__11793_11833 = G__11860;
chunk__11794_11834 = G__11861;
count__11795_11835 = G__11862;
i__11796_11836 = G__11863;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__11807 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11808 = null;
var count__11809 = (0);
var i__11810 = (0);
while(true){
if((i__11810 < count__11809)){
var role = cljs.core._nth.call(null,chunk__11808,i__11810);
var temp__4657__auto___11864__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11864__$1)){
var spec_11865 = temp__4657__auto___11864__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_11865));
} else {
}

var G__11866 = seq__11807;
var G__11867 = chunk__11808;
var G__11868 = count__11809;
var G__11869 = (i__11810 + (1));
seq__11807 = G__11866;
chunk__11808 = G__11867;
count__11809 = G__11868;
i__11810 = G__11869;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__11807);
if(temp__4657__auto____$1){
var seq__11807__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11807__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__11807__$1);
var G__11870 = cljs.core.chunk_rest.call(null,seq__11807__$1);
var G__11871 = c__7932__auto__;
var G__11872 = cljs.core.count.call(null,c__7932__auto__);
var G__11873 = (0);
seq__11807 = G__11870;
chunk__11808 = G__11871;
count__11809 = G__11872;
i__11810 = G__11873;
continue;
} else {
var role = cljs.core.first.call(null,seq__11807__$1);
var temp__4657__auto___11874__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11874__$2)){
var spec_11875 = temp__4657__auto___11874__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_11875));
} else {
}

var G__11876 = cljs.core.next.call(null,seq__11807__$1);
var G__11877 = null;
var G__11878 = (0);
var G__11879 = (0);
seq__11807 = G__11876;
chunk__11808 = G__11877;
count__11809 = G__11878;
i__11810 = G__11879;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map