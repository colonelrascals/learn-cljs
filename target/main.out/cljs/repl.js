// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11293){
var map__11318 = p__11293;
var map__11318__$1 = ((((!((map__11318 == null)))?((((map__11318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11318):map__11318);
var m = map__11318__$1;
var n = cljs.core.get.call(null,map__11318__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11318__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__11320_11342 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11321_11343 = null;
var count__11322_11344 = (0);
var i__11323_11345 = (0);
while(true){
if((i__11323_11345 < count__11322_11344)){
var f_11346 = cljs.core._nth.call(null,chunk__11321_11343,i__11323_11345);
cljs.core.println.call(null,"  ",f_11346);

var G__11347 = seq__11320_11342;
var G__11348 = chunk__11321_11343;
var G__11349 = count__11322_11344;
var G__11350 = (i__11323_11345 + (1));
seq__11320_11342 = G__11347;
chunk__11321_11343 = G__11348;
count__11322_11344 = G__11349;
i__11323_11345 = G__11350;
continue;
} else {
var temp__4657__auto___11351 = cljs.core.seq.call(null,seq__11320_11342);
if(temp__4657__auto___11351){
var seq__11320_11352__$1 = temp__4657__auto___11351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11320_11352__$1)){
var c__7932__auto___11353 = cljs.core.chunk_first.call(null,seq__11320_11352__$1);
var G__11354 = cljs.core.chunk_rest.call(null,seq__11320_11352__$1);
var G__11355 = c__7932__auto___11353;
var G__11356 = cljs.core.count.call(null,c__7932__auto___11353);
var G__11357 = (0);
seq__11320_11342 = G__11354;
chunk__11321_11343 = G__11355;
count__11322_11344 = G__11356;
i__11323_11345 = G__11357;
continue;
} else {
var f_11358 = cljs.core.first.call(null,seq__11320_11352__$1);
cljs.core.println.call(null,"  ",f_11358);

var G__11359 = cljs.core.next.call(null,seq__11320_11352__$1);
var G__11360 = null;
var G__11361 = (0);
var G__11362 = (0);
seq__11320_11342 = G__11359;
chunk__11321_11343 = G__11360;
count__11322_11344 = G__11361;
i__11323_11345 = G__11362;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11363 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7113__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11363);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11363)))?cljs.core.second.call(null,arglists_11363):arglists_11363));
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
var seq__11324_11364 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11325_11365 = null;
var count__11326_11366 = (0);
var i__11327_11367 = (0);
while(true){
if((i__11327_11367 < count__11326_11366)){
var vec__11328_11368 = cljs.core._nth.call(null,chunk__11325_11365,i__11327_11367);
var name_11369 = cljs.core.nth.call(null,vec__11328_11368,(0),null);
var map__11331_11370 = cljs.core.nth.call(null,vec__11328_11368,(1),null);
var map__11331_11371__$1 = ((((!((map__11331_11370 == null)))?((((map__11331_11370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11331_11370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11331_11370):map__11331_11370);
var doc_11372 = cljs.core.get.call(null,map__11331_11371__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11373 = cljs.core.get.call(null,map__11331_11371__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11369);

cljs.core.println.call(null," ",arglists_11373);

if(cljs.core.truth_(doc_11372)){
cljs.core.println.call(null," ",doc_11372);
} else {
}

var G__11374 = seq__11324_11364;
var G__11375 = chunk__11325_11365;
var G__11376 = count__11326_11366;
var G__11377 = (i__11327_11367 + (1));
seq__11324_11364 = G__11374;
chunk__11325_11365 = G__11375;
count__11326_11366 = G__11376;
i__11327_11367 = G__11377;
continue;
} else {
var temp__4657__auto___11378 = cljs.core.seq.call(null,seq__11324_11364);
if(temp__4657__auto___11378){
var seq__11324_11379__$1 = temp__4657__auto___11378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11324_11379__$1)){
var c__7932__auto___11380 = cljs.core.chunk_first.call(null,seq__11324_11379__$1);
var G__11381 = cljs.core.chunk_rest.call(null,seq__11324_11379__$1);
var G__11382 = c__7932__auto___11380;
var G__11383 = cljs.core.count.call(null,c__7932__auto___11380);
var G__11384 = (0);
seq__11324_11364 = G__11381;
chunk__11325_11365 = G__11382;
count__11326_11366 = G__11383;
i__11327_11367 = G__11384;
continue;
} else {
var vec__11333_11385 = cljs.core.first.call(null,seq__11324_11379__$1);
var name_11386 = cljs.core.nth.call(null,vec__11333_11385,(0),null);
var map__11336_11387 = cljs.core.nth.call(null,vec__11333_11385,(1),null);
var map__11336_11388__$1 = ((((!((map__11336_11387 == null)))?((((map__11336_11387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11336_11387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11336_11387):map__11336_11387);
var doc_11389 = cljs.core.get.call(null,map__11336_11388__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11390 = cljs.core.get.call(null,map__11336_11388__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11386);

cljs.core.println.call(null," ",arglists_11390);

if(cljs.core.truth_(doc_11389)){
cljs.core.println.call(null," ",doc_11389);
} else {
}

var G__11391 = cljs.core.next.call(null,seq__11324_11379__$1);
var G__11392 = null;
var G__11393 = (0);
var G__11394 = (0);
seq__11324_11364 = G__11391;
chunk__11325_11365 = G__11392;
count__11326_11366 = G__11393;
i__11327_11367 = G__11394;
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

var seq__11338 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11339 = null;
var count__11340 = (0);
var i__11341 = (0);
while(true){
if((i__11341 < count__11340)){
var role = cljs.core._nth.call(null,chunk__11339,i__11341);
var temp__4657__auto___11395__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11395__$1)){
var spec_11396 = temp__4657__auto___11395__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_11396));
} else {
}

var G__11397 = seq__11338;
var G__11398 = chunk__11339;
var G__11399 = count__11340;
var G__11400 = (i__11341 + (1));
seq__11338 = G__11397;
chunk__11339 = G__11398;
count__11340 = G__11399;
i__11341 = G__11400;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__11338);
if(temp__4657__auto____$1){
var seq__11338__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11338__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__11338__$1);
var G__11401 = cljs.core.chunk_rest.call(null,seq__11338__$1);
var G__11402 = c__7932__auto__;
var G__11403 = cljs.core.count.call(null,c__7932__auto__);
var G__11404 = (0);
seq__11338 = G__11401;
chunk__11339 = G__11402;
count__11340 = G__11403;
i__11341 = G__11404;
continue;
} else {
var role = cljs.core.first.call(null,seq__11338__$1);
var temp__4657__auto___11405__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___11405__$2)){
var spec_11406 = temp__4657__auto___11405__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_11406));
} else {
}

var G__11407 = cljs.core.next.call(null,seq__11338__$1);
var G__11408 = null;
var G__11409 = (0);
var G__11410 = (0);
seq__11338 = G__11407;
chunk__11339 = G__11408;
count__11340 = G__11409;
i__11341 = G__11410;
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