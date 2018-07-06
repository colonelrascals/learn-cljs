// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9810 = arguments.length;
var i__8227__auto___9811 = (0);
while(true){
if((i__8227__auto___9811 < len__8226__auto___9810)){
args__8233__auto__.push((arguments[i__8227__auto___9811]));

var G__9812 = (i__8227__auto___9811 + (1));
i__8227__auto___9811 = G__9812;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq9809){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9809));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9814 = arguments.length;
var i__8227__auto___9815 = (0);
while(true){
if((i__8227__auto___9815 < len__8226__auto___9814)){
args__8233__auto__.push((arguments[i__8227__auto___9815]));

var G__9816 = (i__8227__auto___9815 + (1));
i__8227__auto___9815 = G__9816;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq9813){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9813));
});

var g_QMARK__9817 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_9818 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__9817){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__9817))
,null));
var mkg_9819 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__9817,g_9818){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__9817,g_9818))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__9817,g_9818,mkg_9819){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__9817).call(null,x);
});})(g_QMARK__9817,g_9818,mkg_9819))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__9817,g_9818,mkg_9819){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_9819).call(null,gfn);
});})(g_QMARK__9817,g_9818,mkg_9819))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__9817,g_9818,mkg_9819){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_9818).call(null,generator);
});})(g_QMARK__9817,g_9818,mkg_9819))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9781__auto___9839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__9781__auto___9839){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9840 = arguments.length;
var i__8227__auto___9841 = (0);
while(true){
if((i__8227__auto___9841 < len__8226__auto___9840)){
args__8233__auto__.push((arguments[i__8227__auto___9841]));

var G__9842 = (i__8227__auto___9841 + (1));
i__8227__auto___9841 = G__9842;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9839))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9839),args);
});})(g__9781__auto___9839))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__9781__auto___9839){
return (function (seq9820){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9820));
});})(g__9781__auto___9839))
;


var g__9781__auto___9843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__9781__auto___9843){
return (function cljs$spec$impl$gen$list(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9844 = arguments.length;
var i__8227__auto___9845 = (0);
while(true){
if((i__8227__auto___9845 < len__8226__auto___9844)){
args__8233__auto__.push((arguments[i__8227__auto___9845]));

var G__9846 = (i__8227__auto___9845 + (1));
i__8227__auto___9845 = G__9846;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9843))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9843),args);
});})(g__9781__auto___9843))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__9781__auto___9843){
return (function (seq9821){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9821));
});})(g__9781__auto___9843))
;


var g__9781__auto___9847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__9781__auto___9847){
return (function cljs$spec$impl$gen$map(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9848 = arguments.length;
var i__8227__auto___9849 = (0);
while(true){
if((i__8227__auto___9849 < len__8226__auto___9848)){
args__8233__auto__.push((arguments[i__8227__auto___9849]));

var G__9850 = (i__8227__auto___9849 + (1));
i__8227__auto___9849 = G__9850;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9847))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9847),args);
});})(g__9781__auto___9847))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__9781__auto___9847){
return (function (seq9822){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9822));
});})(g__9781__auto___9847))
;


var g__9781__auto___9851 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__9781__auto___9851){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9852 = arguments.length;
var i__8227__auto___9853 = (0);
while(true){
if((i__8227__auto___9853 < len__8226__auto___9852)){
args__8233__auto__.push((arguments[i__8227__auto___9853]));

var G__9854 = (i__8227__auto___9853 + (1));
i__8227__auto___9853 = G__9854;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9851))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9851),args);
});})(g__9781__auto___9851))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__9781__auto___9851){
return (function (seq9823){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9823));
});})(g__9781__auto___9851))
;


var g__9781__auto___9855 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__9781__auto___9855){
return (function cljs$spec$impl$gen$set(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9856 = arguments.length;
var i__8227__auto___9857 = (0);
while(true){
if((i__8227__auto___9857 < len__8226__auto___9856)){
args__8233__auto__.push((arguments[i__8227__auto___9857]));

var G__9858 = (i__8227__auto___9857 + (1));
i__8227__auto___9857 = G__9858;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9855))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9855),args);
});})(g__9781__auto___9855))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__9781__auto___9855){
return (function (seq9824){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9824));
});})(g__9781__auto___9855))
;


var g__9781__auto___9859 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__9781__auto___9859){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9860 = arguments.length;
var i__8227__auto___9861 = (0);
while(true){
if((i__8227__auto___9861 < len__8226__auto___9860)){
args__8233__auto__.push((arguments[i__8227__auto___9861]));

var G__9862 = (i__8227__auto___9861 + (1));
i__8227__auto___9861 = G__9862;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9859))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9859),args);
});})(g__9781__auto___9859))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__9781__auto___9859){
return (function (seq9825){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9825));
});})(g__9781__auto___9859))
;


var g__9781__auto___9863 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__9781__auto___9863){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9864 = arguments.length;
var i__8227__auto___9865 = (0);
while(true){
if((i__8227__auto___9865 < len__8226__auto___9864)){
args__8233__auto__.push((arguments[i__8227__auto___9865]));

var G__9866 = (i__8227__auto___9865 + (1));
i__8227__auto___9865 = G__9866;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9863))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9863),args);
});})(g__9781__auto___9863))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__9781__auto___9863){
return (function (seq9826){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9826));
});})(g__9781__auto___9863))
;


var g__9781__auto___9867 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__9781__auto___9867){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9868 = arguments.length;
var i__8227__auto___9869 = (0);
while(true){
if((i__8227__auto___9869 < len__8226__auto___9868)){
args__8233__auto__.push((arguments[i__8227__auto___9869]));

var G__9870 = (i__8227__auto___9869 + (1));
i__8227__auto___9869 = G__9870;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9867))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9867),args);
});})(g__9781__auto___9867))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__9781__auto___9867){
return (function (seq9827){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9827));
});})(g__9781__auto___9867))
;


var g__9781__auto___9871 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__9781__auto___9871){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9872 = arguments.length;
var i__8227__auto___9873 = (0);
while(true){
if((i__8227__auto___9873 < len__8226__auto___9872)){
args__8233__auto__.push((arguments[i__8227__auto___9873]));

var G__9874 = (i__8227__auto___9873 + (1));
i__8227__auto___9873 = G__9874;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9871))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9871),args);
});})(g__9781__auto___9871))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__9781__auto___9871){
return (function (seq9828){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9828));
});})(g__9781__auto___9871))
;


var g__9781__auto___9875 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__9781__auto___9875){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9876 = arguments.length;
var i__8227__auto___9877 = (0);
while(true){
if((i__8227__auto___9877 < len__8226__auto___9876)){
args__8233__auto__.push((arguments[i__8227__auto___9877]));

var G__9878 = (i__8227__auto___9877 + (1));
i__8227__auto___9877 = G__9878;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9875))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9875),args);
});})(g__9781__auto___9875))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__9781__auto___9875){
return (function (seq9829){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9829));
});})(g__9781__auto___9875))
;


var g__9781__auto___9879 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__9781__auto___9879){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9880 = arguments.length;
var i__8227__auto___9881 = (0);
while(true){
if((i__8227__auto___9881 < len__8226__auto___9880)){
args__8233__auto__.push((arguments[i__8227__auto___9881]));

var G__9882 = (i__8227__auto___9881 + (1));
i__8227__auto___9881 = G__9882;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9879))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9879),args);
});})(g__9781__auto___9879))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__9781__auto___9879){
return (function (seq9830){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9830));
});})(g__9781__auto___9879))
;


var g__9781__auto___9883 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__9781__auto___9883){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9884 = arguments.length;
var i__8227__auto___9885 = (0);
while(true){
if((i__8227__auto___9885 < len__8226__auto___9884)){
args__8233__auto__.push((arguments[i__8227__auto___9885]));

var G__9886 = (i__8227__auto___9885 + (1));
i__8227__auto___9885 = G__9886;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9883))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9883),args);
});})(g__9781__auto___9883))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__9781__auto___9883){
return (function (seq9831){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9831));
});})(g__9781__auto___9883))
;


var g__9781__auto___9887 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__9781__auto___9887){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9888 = arguments.length;
var i__8227__auto___9889 = (0);
while(true){
if((i__8227__auto___9889 < len__8226__auto___9888)){
args__8233__auto__.push((arguments[i__8227__auto___9889]));

var G__9890 = (i__8227__auto___9889 + (1));
i__8227__auto___9889 = G__9890;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9887))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9887),args);
});})(g__9781__auto___9887))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__9781__auto___9887){
return (function (seq9832){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9832));
});})(g__9781__auto___9887))
;


var g__9781__auto___9891 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__9781__auto___9891){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9892 = arguments.length;
var i__8227__auto___9893 = (0);
while(true){
if((i__8227__auto___9893 < len__8226__auto___9892)){
args__8233__auto__.push((arguments[i__8227__auto___9893]));

var G__9894 = (i__8227__auto___9893 + (1));
i__8227__auto___9893 = G__9894;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9891))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9891),args);
});})(g__9781__auto___9891))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__9781__auto___9891){
return (function (seq9833){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9833));
});})(g__9781__auto___9891))
;


var g__9781__auto___9895 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__9781__auto___9895){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9896 = arguments.length;
var i__8227__auto___9897 = (0);
while(true){
if((i__8227__auto___9897 < len__8226__auto___9896)){
args__8233__auto__.push((arguments[i__8227__auto___9897]));

var G__9898 = (i__8227__auto___9897 + (1));
i__8227__auto___9897 = G__9898;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9895))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9895){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9895),args);
});})(g__9781__auto___9895))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__9781__auto___9895){
return (function (seq9834){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9834));
});})(g__9781__auto___9895))
;


var g__9781__auto___9899 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__9781__auto___9899){
return (function cljs$spec$impl$gen$return(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9900 = arguments.length;
var i__8227__auto___9901 = (0);
while(true){
if((i__8227__auto___9901 < len__8226__auto___9900)){
args__8233__auto__.push((arguments[i__8227__auto___9901]));

var G__9902 = (i__8227__auto___9901 + (1));
i__8227__auto___9901 = G__9902;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9899))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9899){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9899),args);
});})(g__9781__auto___9899))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__9781__auto___9899){
return (function (seq9835){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9835));
});})(g__9781__auto___9899))
;


var g__9781__auto___9903 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__9781__auto___9903){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9904 = arguments.length;
var i__8227__auto___9905 = (0);
while(true){
if((i__8227__auto___9905 < len__8226__auto___9904)){
args__8233__auto__.push((arguments[i__8227__auto___9905]));

var G__9906 = (i__8227__auto___9905 + (1));
i__8227__auto___9905 = G__9906;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9903))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9903){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9903),args);
});})(g__9781__auto___9903))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9781__auto___9903){
return (function (seq9836){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9836));
});})(g__9781__auto___9903))
;


var g__9781__auto___9907 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__9781__auto___9907){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9908 = arguments.length;
var i__8227__auto___9909 = (0);
while(true){
if((i__8227__auto___9909 < len__8226__auto___9908)){
args__8233__auto__.push((arguments[i__8227__auto___9909]));

var G__9910 = (i__8227__auto___9909 + (1));
i__8227__auto___9909 = G__9910;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9907))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9907){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9907),args);
});})(g__9781__auto___9907))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__9781__auto___9907){
return (function (seq9837){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9837));
});})(g__9781__auto___9907))
;


var g__9781__auto___9911 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__9781__auto___9911){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9912 = arguments.length;
var i__8227__auto___9913 = (0);
while(true){
if((i__8227__auto___9913 < len__8226__auto___9912)){
args__8233__auto__.push((arguments[i__8227__auto___9913]));

var G__9914 = (i__8227__auto___9913 + (1));
i__8227__auto___9913 = G__9914;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9781__auto___9911))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9781__auto___9911){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9781__auto___9911),args);
});})(g__9781__auto___9911))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__9781__auto___9911){
return (function (seq9838){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9838));
});})(g__9781__auto___9911))
;

var g__9794__auto___9936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__9794__auto___9936){
return (function cljs$spec$impl$gen$any(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9937 = arguments.length;
var i__8227__auto___9938 = (0);
while(true){
if((i__8227__auto___9938 < len__8226__auto___9937)){
args__8233__auto__.push((arguments[i__8227__auto___9938]));

var G__9939 = (i__8227__auto___9938 + (1));
i__8227__auto___9938 = G__9939;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9936))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9936){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9936);
});})(g__9794__auto___9936))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__9794__auto___9936){
return (function (seq9915){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9915));
});})(g__9794__auto___9936))
;


var g__9794__auto___9940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__9794__auto___9940){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9941 = arguments.length;
var i__8227__auto___9942 = (0);
while(true){
if((i__8227__auto___9942 < len__8226__auto___9941)){
args__8233__auto__.push((arguments[i__8227__auto___9942]));

var G__9943 = (i__8227__auto___9942 + (1));
i__8227__auto___9942 = G__9943;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9940))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9940){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9940);
});})(g__9794__auto___9940))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__9794__auto___9940){
return (function (seq9916){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9916));
});})(g__9794__auto___9940))
;


var g__9794__auto___9944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__9794__auto___9944){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9945 = arguments.length;
var i__8227__auto___9946 = (0);
while(true){
if((i__8227__auto___9946 < len__8226__auto___9945)){
args__8233__auto__.push((arguments[i__8227__auto___9946]));

var G__9947 = (i__8227__auto___9946 + (1));
i__8227__auto___9946 = G__9947;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9944))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9944){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9944);
});})(g__9794__auto___9944))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__9794__auto___9944){
return (function (seq9917){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9917));
});})(g__9794__auto___9944))
;


var g__9794__auto___9948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__9794__auto___9948){
return (function cljs$spec$impl$gen$char(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9949 = arguments.length;
var i__8227__auto___9950 = (0);
while(true){
if((i__8227__auto___9950 < len__8226__auto___9949)){
args__8233__auto__.push((arguments[i__8227__auto___9950]));

var G__9951 = (i__8227__auto___9950 + (1));
i__8227__auto___9950 = G__9951;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9948))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9948){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9948);
});})(g__9794__auto___9948))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__9794__auto___9948){
return (function (seq9918){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9918));
});})(g__9794__auto___9948))
;


var g__9794__auto___9952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__9794__auto___9952){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9953 = arguments.length;
var i__8227__auto___9954 = (0);
while(true){
if((i__8227__auto___9954 < len__8226__auto___9953)){
args__8233__auto__.push((arguments[i__8227__auto___9954]));

var G__9955 = (i__8227__auto___9954 + (1));
i__8227__auto___9954 = G__9955;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9952))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9952){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9952);
});})(g__9794__auto___9952))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__9794__auto___9952){
return (function (seq9919){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9919));
});})(g__9794__auto___9952))
;


var g__9794__auto___9956 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__9794__auto___9956){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9957 = arguments.length;
var i__8227__auto___9958 = (0);
while(true){
if((i__8227__auto___9958 < len__8226__auto___9957)){
args__8233__auto__.push((arguments[i__8227__auto___9958]));

var G__9959 = (i__8227__auto___9958 + (1));
i__8227__auto___9958 = G__9959;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9956))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9956){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9956);
});})(g__9794__auto___9956))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__9794__auto___9956){
return (function (seq9920){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9920));
});})(g__9794__auto___9956))
;


var g__9794__auto___9960 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__9794__auto___9960){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9961 = arguments.length;
var i__8227__auto___9962 = (0);
while(true){
if((i__8227__auto___9962 < len__8226__auto___9961)){
args__8233__auto__.push((arguments[i__8227__auto___9962]));

var G__9963 = (i__8227__auto___9962 + (1));
i__8227__auto___9962 = G__9963;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9960))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9960){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9960);
});})(g__9794__auto___9960))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__9794__auto___9960){
return (function (seq9921){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9921));
});})(g__9794__auto___9960))
;


var g__9794__auto___9964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__9794__auto___9964){
return (function cljs$spec$impl$gen$double(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9965 = arguments.length;
var i__8227__auto___9966 = (0);
while(true){
if((i__8227__auto___9966 < len__8226__auto___9965)){
args__8233__auto__.push((arguments[i__8227__auto___9966]));

var G__9967 = (i__8227__auto___9966 + (1));
i__8227__auto___9966 = G__9967;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9964))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9964){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9964);
});})(g__9794__auto___9964))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__9794__auto___9964){
return (function (seq9922){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9922));
});})(g__9794__auto___9964))
;


var g__9794__auto___9968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__9794__auto___9968){
return (function cljs$spec$impl$gen$int(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9969 = arguments.length;
var i__8227__auto___9970 = (0);
while(true){
if((i__8227__auto___9970 < len__8226__auto___9969)){
args__8233__auto__.push((arguments[i__8227__auto___9970]));

var G__9971 = (i__8227__auto___9970 + (1));
i__8227__auto___9970 = G__9971;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9968))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9968){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9968);
});})(g__9794__auto___9968))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__9794__auto___9968){
return (function (seq9923){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9923));
});})(g__9794__auto___9968))
;


var g__9794__auto___9972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__9794__auto___9972){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9973 = arguments.length;
var i__8227__auto___9974 = (0);
while(true){
if((i__8227__auto___9974 < len__8226__auto___9973)){
args__8233__auto__.push((arguments[i__8227__auto___9974]));

var G__9975 = (i__8227__auto___9974 + (1));
i__8227__auto___9974 = G__9975;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9972))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9972){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9972);
});})(g__9794__auto___9972))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__9794__auto___9972){
return (function (seq9924){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9924));
});})(g__9794__auto___9972))
;


var g__9794__auto___9976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__9794__auto___9976){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9977 = arguments.length;
var i__8227__auto___9978 = (0);
while(true){
if((i__8227__auto___9978 < len__8226__auto___9977)){
args__8233__auto__.push((arguments[i__8227__auto___9978]));

var G__9979 = (i__8227__auto___9978 + (1));
i__8227__auto___9978 = G__9979;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9976))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9976){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9976);
});})(g__9794__auto___9976))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__9794__auto___9976){
return (function (seq9925){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9925));
});})(g__9794__auto___9976))
;


var g__9794__auto___9980 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__9794__auto___9980){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9981 = arguments.length;
var i__8227__auto___9982 = (0);
while(true){
if((i__8227__auto___9982 < len__8226__auto___9981)){
args__8233__auto__.push((arguments[i__8227__auto___9982]));

var G__9983 = (i__8227__auto___9982 + (1));
i__8227__auto___9982 = G__9983;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9980))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9980){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9980);
});})(g__9794__auto___9980))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__9794__auto___9980){
return (function (seq9926){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9926));
});})(g__9794__auto___9980))
;


var g__9794__auto___9984 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__9794__auto___9984){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9985 = arguments.length;
var i__8227__auto___9986 = (0);
while(true){
if((i__8227__auto___9986 < len__8226__auto___9985)){
args__8233__auto__.push((arguments[i__8227__auto___9986]));

var G__9987 = (i__8227__auto___9986 + (1));
i__8227__auto___9986 = G__9987;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9984))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9984){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9984);
});})(g__9794__auto___9984))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__9794__auto___9984){
return (function (seq9927){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9927));
});})(g__9794__auto___9984))
;


var g__9794__auto___9988 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__9794__auto___9988){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9989 = arguments.length;
var i__8227__auto___9990 = (0);
while(true){
if((i__8227__auto___9990 < len__8226__auto___9989)){
args__8233__auto__.push((arguments[i__8227__auto___9990]));

var G__9991 = (i__8227__auto___9990 + (1));
i__8227__auto___9990 = G__9991;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9988))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9988){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9988);
});})(g__9794__auto___9988))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__9794__auto___9988){
return (function (seq9928){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9928));
});})(g__9794__auto___9988))
;


var g__9794__auto___9992 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__9794__auto___9992){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9993 = arguments.length;
var i__8227__auto___9994 = (0);
while(true){
if((i__8227__auto___9994 < len__8226__auto___9993)){
args__8233__auto__.push((arguments[i__8227__auto___9994]));

var G__9995 = (i__8227__auto___9994 + (1));
i__8227__auto___9994 = G__9995;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9992))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9992){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9992);
});})(g__9794__auto___9992))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__9794__auto___9992){
return (function (seq9929){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9929));
});})(g__9794__auto___9992))
;


var g__9794__auto___9996 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__9794__auto___9996){
return (function cljs$spec$impl$gen$string(var_args){
var args__8233__auto__ = [];
var len__8226__auto___9997 = arguments.length;
var i__8227__auto___9998 = (0);
while(true){
if((i__8227__auto___9998 < len__8226__auto___9997)){
args__8233__auto__.push((arguments[i__8227__auto___9998]));

var G__9999 = (i__8227__auto___9998 + (1));
i__8227__auto___9998 = G__9999;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___9996))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___9996){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___9996);
});})(g__9794__auto___9996))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__9794__auto___9996){
return (function (seq9930){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9930));
});})(g__9794__auto___9996))
;


var g__9794__auto___10000 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__9794__auto___10000){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8233__auto__ = [];
var len__8226__auto___10001 = arguments.length;
var i__8227__auto___10002 = (0);
while(true){
if((i__8227__auto___10002 < len__8226__auto___10001)){
args__8233__auto__.push((arguments[i__8227__auto___10002]));

var G__10003 = (i__8227__auto___10002 + (1));
i__8227__auto___10002 = G__10003;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___10000))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___10000){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___10000);
});})(g__9794__auto___10000))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__9794__auto___10000){
return (function (seq9931){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9931));
});})(g__9794__auto___10000))
;


var g__9794__auto___10004 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__9794__auto___10004){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8233__auto__ = [];
var len__8226__auto___10005 = arguments.length;
var i__8227__auto___10006 = (0);
while(true){
if((i__8227__auto___10006 < len__8226__auto___10005)){
args__8233__auto__.push((arguments[i__8227__auto___10006]));

var G__10007 = (i__8227__auto___10006 + (1));
i__8227__auto___10006 = G__10007;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___10004))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___10004){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___10004);
});})(g__9794__auto___10004))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__9794__auto___10004){
return (function (seq9932){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9932));
});})(g__9794__auto___10004))
;


var g__9794__auto___10008 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__9794__auto___10008){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8233__auto__ = [];
var len__8226__auto___10009 = arguments.length;
var i__8227__auto___10010 = (0);
while(true){
if((i__8227__auto___10010 < len__8226__auto___10009)){
args__8233__auto__.push((arguments[i__8227__auto___10010]));

var G__10011 = (i__8227__auto___10010 + (1));
i__8227__auto___10010 = G__10011;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___10008))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___10008){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___10008);
});})(g__9794__auto___10008))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__9794__auto___10008){
return (function (seq9933){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9933));
});})(g__9794__auto___10008))
;


var g__9794__auto___10012 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__9794__auto___10012){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8233__auto__ = [];
var len__8226__auto___10013 = arguments.length;
var i__8227__auto___10014 = (0);
while(true){
if((i__8227__auto___10014 < len__8226__auto___10013)){
args__8233__auto__.push((arguments[i__8227__auto___10014]));

var G__10015 = (i__8227__auto___10014 + (1));
i__8227__auto___10014 = G__10015;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___10012))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___10012){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___10012);
});})(g__9794__auto___10012))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__9794__auto___10012){
return (function (seq9934){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9934));
});})(g__9794__auto___10012))
;


var g__9794__auto___10016 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__9794__auto___10016){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8233__auto__ = [];
var len__8226__auto___10017 = arguments.length;
var i__8227__auto___10018 = (0);
while(true){
if((i__8227__auto___10018 < len__8226__auto___10017)){
args__8233__auto__.push((arguments[i__8227__auto___10018]));

var G__10019 = (i__8227__auto___10018 + (1));
i__8227__auto___10018 = G__10019;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});})(g__9794__auto___10016))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9794__auto___10016){
return (function (args){
return cljs.core.deref.call(null,g__9794__auto___10016);
});})(g__9794__auto___10016))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__9794__auto___10016){
return (function (seq9935){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9935));
});})(g__9794__auto___10016))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8233__auto__ = [];
var len__8226__auto___10022 = arguments.length;
var i__8227__auto___10023 = (0);
while(true){
if((i__8227__auto___10023 < len__8226__auto___10022)){
args__8233__auto__.push((arguments[i__8227__auto___10023]));

var G__10024 = (i__8227__auto___10023 + (1));
i__8227__auto___10023 = G__10024;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__10020_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__10020_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq10021){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10021));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__10025_SHARP_){
return (new Date(p1__10025_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map