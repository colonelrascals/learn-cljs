// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10768){
var map__10793 = p__10768;
var map__10793__$1 = ((((!((map__10793 == null)))?((((map__10793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10793):map__10793);
var m = map__10793__$1;
var n = cljs.core.get.call(null,map__10793__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10793__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__10795_10817 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10796_10818 = null;
var count__10797_10819 = (0);
var i__10798_10820 = (0);
while(true){
if((i__10798_10820 < count__10797_10819)){
var f_10821 = cljs.core._nth.call(null,chunk__10796_10818,i__10798_10820);
cljs.core.println.call(null,"  ",f_10821);

var G__10822 = seq__10795_10817;
var G__10823 = chunk__10796_10818;
var G__10824 = count__10797_10819;
var G__10825 = (i__10798_10820 + (1));
seq__10795_10817 = G__10822;
chunk__10796_10818 = G__10823;
count__10797_10819 = G__10824;
i__10798_10820 = G__10825;
continue;
} else {
var temp__4657__auto___10826 = cljs.core.seq.call(null,seq__10795_10817);
if(temp__4657__auto___10826){
var seq__10795_10827__$1 = temp__4657__auto___10826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10795_10827__$1)){
var c__7932__auto___10828 = cljs.core.chunk_first.call(null,seq__10795_10827__$1);
var G__10829 = cljs.core.chunk_rest.call(null,seq__10795_10827__$1);
var G__10830 = c__7932__auto___10828;
var G__10831 = cljs.core.count.call(null,c__7932__auto___10828);
var G__10832 = (0);
seq__10795_10817 = G__10829;
chunk__10796_10818 = G__10830;
count__10797_10819 = G__10831;
i__10798_10820 = G__10832;
continue;
} else {
var f_10833 = cljs.core.first.call(null,seq__10795_10827__$1);
cljs.core.println.call(null,"  ",f_10833);

var G__10834 = cljs.core.next.call(null,seq__10795_10827__$1);
var G__10835 = null;
var G__10836 = (0);
var G__10837 = (0);
seq__10795_10817 = G__10834;
chunk__10796_10818 = G__10835;
count__10797_10819 = G__10836;
i__10798_10820 = G__10837;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10838 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7113__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10838);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10838)))?cljs.core.second.call(null,arglists_10838):arglists_10838));
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
var seq__10799_10839 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10800_10840 = null;
var count__10801_10841 = (0);
var i__10802_10842 = (0);
while(true){
if((i__10802_10842 < count__10801_10841)){
var vec__10803_10843 = cljs.core._nth.call(null,chunk__10800_10840,i__10802_10842);
var name_10844 = cljs.core.nth.call(null,vec__10803_10843,(0),null);
var map__10806_10845 = cljs.core.nth.call(null,vec__10803_10843,(1),null);
var map__10806_10846__$1 = ((((!((map__10806_10845 == null)))?((((map__10806_10845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10806_10845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10806_10845):map__10806_10845);
var doc_10847 = cljs.core.get.call(null,map__10806_10846__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10848 = cljs.core.get.call(null,map__10806_10846__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10844);

cljs.core.println.call(null," ",arglists_10848);

if(cljs.core.truth_(doc_10847)){
cljs.core.println.call(null," ",doc_10847);
} else {
}

var G__10849 = seq__10799_10839;
var G__10850 = chunk__10800_10840;
var G__10851 = count__10801_10841;
var G__10852 = (i__10802_10842 + (1));
seq__10799_10839 = G__10849;
chunk__10800_10840 = G__10850;
count__10801_10841 = G__10851;
i__10802_10842 = G__10852;
continue;
} else {
var temp__4657__auto___10853 = cljs.core.seq.call(null,seq__10799_10839);
if(temp__4657__auto___10853){
var seq__10799_10854__$1 = temp__4657__auto___10853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10799_10854__$1)){
var c__7932__auto___10855 = cljs.core.chunk_first.call(null,seq__10799_10854__$1);
var G__10856 = cljs.core.chunk_rest.call(null,seq__10799_10854__$1);
var G__10857 = c__7932__auto___10855;
var G__10858 = cljs.core.count.call(null,c__7932__auto___10855);
var G__10859 = (0);
seq__10799_10839 = G__10856;
chunk__10800_10840 = G__10857;
count__10801_10841 = G__10858;
i__10802_10842 = G__10859;
continue;
} else {
var vec__10808_10860 = cljs.core.first.call(null,seq__10799_10854__$1);
var name_10861 = cljs.core.nth.call(null,vec__10808_10860,(0),null);
var map__10811_10862 = cljs.core.nth.call(null,vec__10808_10860,(1),null);
var map__10811_10863__$1 = ((((!((map__10811_10862 == null)))?((((map__10811_10862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10811_10862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10811_10862):map__10811_10862);
var doc_10864 = cljs.core.get.call(null,map__10811_10863__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10865 = cljs.core.get.call(null,map__10811_10863__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10861);

cljs.core.println.call(null," ",arglists_10865);

if(cljs.core.truth_(doc_10864)){
cljs.core.println.call(null," ",doc_10864);
} else {
}

var G__10866 = cljs.core.next.call(null,seq__10799_10854__$1);
var G__10867 = null;
var G__10868 = (0);
var G__10869 = (0);
seq__10799_10839 = G__10866;
chunk__10800_10840 = G__10867;
count__10801_10841 = G__10868;
i__10802_10842 = G__10869;
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

var seq__10813 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10814 = null;
var count__10815 = (0);
var i__10816 = (0);
while(true){
if((i__10816 < count__10815)){
var role = cljs.core._nth.call(null,chunk__10814,i__10816);
var temp__4657__auto___10870__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10870__$1)){
var spec_10871 = temp__4657__auto___10870__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_10871));
} else {
}

var G__10872 = seq__10813;
var G__10873 = chunk__10814;
var G__10874 = count__10815;
var G__10875 = (i__10816 + (1));
seq__10813 = G__10872;
chunk__10814 = G__10873;
count__10815 = G__10874;
i__10816 = G__10875;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__10813);
if(temp__4657__auto____$1){
var seq__10813__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10813__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__10813__$1);
var G__10876 = cljs.core.chunk_rest.call(null,seq__10813__$1);
var G__10877 = c__7932__auto__;
var G__10878 = cljs.core.count.call(null,c__7932__auto__);
var G__10879 = (0);
seq__10813 = G__10876;
chunk__10814 = G__10877;
count__10815 = G__10878;
i__10816 = G__10879;
continue;
} else {
var role = cljs.core.first.call(null,seq__10813__$1);
var temp__4657__auto___10880__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10880__$2)){
var spec_10881 = temp__4657__auto___10880__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_10881));
} else {
}

var G__10882 = cljs.core.next.call(null,seq__10813__$1);
var G__10883 = null;
var G__10884 = (0);
var G__10885 = (0);
seq__10813 = G__10882;
chunk__10814 = G__10883;
count__10815 = G__10884;
i__10816 = G__10885;
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