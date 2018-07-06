// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11715){
var map__11740 = p__11715;
var map__11740__$1 = ((((!((map__11740 == null)))?((((map__11740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11740):map__11740);
var m = map__11740__$1;
var n = cljs.core.get.call(null,map__11740__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11740__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__11742_11764 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11743_11765 = null;
var count__11744_11766 = (0);
var i__11745_11767 = (0);
while(true){
if((i__11745_11767 < count__11744_11766)){
var f_11768 = cljs.core._nth.call(null,chunk__11743_11765,i__11745_11767);
cljs.core.println.call(null,"  ",f_11768);

var G__11769 = seq__11742_11764;
var G__11770 = chunk__11743_11765;
var G__11771 = count__11744_11766;
var G__11772 = (i__11745_11767 + (1));
seq__11742_11764 = G__11769;
chunk__11743_11765 = G__11770;
count__11744_11766 = G__11771;
i__11745_11767 = G__11772;
continue;
} else {
var temp__4657__auto___11773 = cljs.core.seq.call(null,seq__11742_11764);
if(temp__4657__auto___11773){
var seq__11742_11774__$1 = temp__4657__auto___11773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11742_11774__$1)){
var c__7932__auto___11775 = cljs.core.chunk_first.call(null,seq__11742_11774__$1);
var G__11776 = cljs.core.chunk_rest.call(null,seq__11742_11774__$1);
var G__11777 = c__7932__auto___11775;
var G__11778 = cljs.core.count.call(null,c__7932__auto___11775);
var G__11779 = (0);
seq__11742_11764 = G__11776;
chunk__11743_11765 = G__11777;
count__11744_11766 = G__11778;
i__11745_11767 = G__11779;
continue;
} else {
var f_11780 = cljs.core.first.call(null,seq__11742_11774__$1);
cljs.core.println.call(null,"  ",f_11780);

var G__11781 = cljs.core.next.call(null,seq__11742_11774__$1);
var G__11782 = null;
var G__11783 = (0);
var G__11784 = (0);
seq__11742_11764 = G__11781;
chunk__11743_11765 = G__11782;
count__11744_11766 = G__11783;
i__11745_11767 = G__11784;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11785 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7113__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11785);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11785)))?cljs.core.second.call(null,arglists_11785):arglists_11785));
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
var seq__11746_11786 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11747_11787 = null;
var count__11748_11788 = (0);
var i__11749_11789 = (0);
while(true){
if((i__11749_11789 < count__11748_11788)){
var vec__11750_11790 = cljs.core._nth.call(null,chunk__11747_11787,i__11749_11789);
var name_11791 = cljs.core.nth.call(null,vec__11750_11790,(0),null);
var map__11753_11792 = cljs.core.nth.call(null,vec__11750_11790,(1),null);
var map__11753_11793__$1 = ((((!((map__11753_11792 == null)))?((((map__11753_11792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11753_11792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11753_11792):map__11753_11792);
var doc_11794 = cljs.core.get.call(null,map__11753_11793__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11795 = cljs.core.get.call(null,map__11753_11793__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11791);

cljs.core.println.call(null," ",arglists_11795);

if(cljs.core.truth_(doc_11794)){
cljs.core.println.call(null," ",doc_11794);
} else {
}

var G__11796 = seq__11746_11786;
var G__11797 = chunk__11747_11787;
var G__11798 = count__11748_11788;
var G__11799 = (i__11749_11789 + (1));
seq__11746_11786 = G__11796;
chunk__11747_11787 = G__11797;
count__11748_11788 = G__11798;
i__11749_11789 = G__11799;
continue;
} else {
var temp__4657__auto___11800 = cljs.core.seq.call(null,seq__11746_11786);
if(temp__4657__auto___11800){
var seq__11746_11801__$1 = temp__4657__auto___11800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11746_11801__$1)){
var c__7932__auto___11802 = cljs.core.chunk_first.call(null,seq__11746_11801__$1);
var G__11803 = cljs.core.chunk_rest.call(null,seq__11746_11801__$1);
var G__11804 = c__7932__auto___11802;
var G__11805 = cljs.core.count.call(null,c__7932__auto___11802);
var G__11806 = (0);
seq__11746_11786 = G__11803;
chunk__11747_11787 = G__11804;
count__11748_11788 = G__11805;
i__11749_11789 = G__11806;
continue;
} else {
var vec__11755_11807 = cljs.core.first.call(null,seq__11746_11801__$1);
var name_11808 = cljs.core.nth.call(null,vec__11755_11807,(0),null);
var map__11758_11809 = cljs.core.nth.call(null,vec__11755_11807,(1),null);
var map__11758_11810__$1 = ((((!((map__11758_11809 == null)))?((((map__11758_11809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11758_11809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11758_11809):map__11758_11809);
var doc_11811 = cljs.core.get.call(null,map__11758_11810__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11812 = cljs.core.get.call(null,map__11758_11810__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11808);

cljs.core.println.call(null," ",arglists_11812);

if(cljs.core.truth_(doc_11811)){
cljs.core.println.call(null," ",doc_11811);
} else {
}

var G__11813 = cljs.core.next.call(null,seq__11746_11801__$1);
var G__11814 = null;
var G__11815 = (0);
var G__11816 = (0);
seq__11746_11786 = G__11813;
chunk__11747_11787 = G__11814;
count__11748_11788 = G__11815;
i__11749_11789 = G__11816;
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

var seq__11760 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11761 = null;
var count__11762 = (0);
var i__11763 = (0);
while(true){
if((i__11763 < count__11762)){
var role = cljs.core._nth.call(null,chunk__11761,i__11763);
var temp__4657__auto___11817__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11817__$1)){
var spec_11818 = temp__4657__auto___11817__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_11818));
} else {
}

var G__11819 = seq__11760;
var G__11820 = chunk__11761;
var G__11821 = count__11762;
var G__11822 = (i__11763 + (1));
seq__11760 = G__11819;
chunk__11761 = G__11820;
count__11762 = G__11821;
i__11763 = G__11822;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__11760);
if(temp__4657__auto____$1){
var seq__11760__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11760__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__11760__$1);
var G__11823 = cljs.core.chunk_rest.call(null,seq__11760__$1);
var G__11824 = c__7932__auto__;
var G__11825 = cljs.core.count.call(null,c__7932__auto__);
var G__11826 = (0);
seq__11760 = G__11823;
chunk__11761 = G__11824;
count__11762 = G__11825;
i__11763 = G__11826;
continue;
} else {
var role = cljs.core.first.call(null,seq__11760__$1);
var temp__4657__auto___11827__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11827__$2)){
var spec_11828 = temp__4657__auto___11827__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_11828));
} else {
}

var G__11829 = cljs.core.next.call(null,seq__11760__$1);
var G__11830 = null;
var G__11831 = (0);
var G__11832 = (0);
seq__11760 = G__11829;
chunk__11761 = G__11830;
count__11762 = G__11831;
i__11763 = G__11832;
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