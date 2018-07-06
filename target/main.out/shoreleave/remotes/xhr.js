// Compiled by ClojureScript 1.9.473 {}
goog.provide('shoreleave.remotes.xhr');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('shoreleave.remotes.common');
shoreleave.remotes.xhr.xhr = (function shoreleave$remotes$xhr$xhr(var_args){
var args__8233__auto__ = [];
var len__8226__auto___12002 = arguments.length;
var i__8227__auto___12003 = (0);
while(true){
if((i__8227__auto___12003 < len__8226__auto___12002)){
args__8233__auto__.push((arguments[i__8227__auto___12003]));

var G__12004 = (i__8227__auto___12003 + (1));
i__8227__auto___12003 = G__12004;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((1) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((1)),(0),null)):null);
return shoreleave.remotes.xhr.xhr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8234__auto__);
});

shoreleave.remotes.xhr.xhr.cljs$core$IFn$_invoke$arity$variadic = (function (route,opts){
var req = (new goog.net.XhrIo());
var vec__11997 = shoreleave.remotes.common.parse_route.call(null,route);
var method = cljs.core.nth.call(null,vec__11997,(0),null);
var uri = cljs.core.nth.call(null,vec__11997,(1),null);
var map__12000 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__12000__$1 = ((((!((map__12000 == null)))?((((map__12000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12000):map__12000);
var on_success = cljs.core.get.call(null,map__12000__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__12000__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var content = cljs.core.get.call(null,map__12000__$1,new cljs.core.Keyword(null,"content","content",15833224));
var headers = cljs.core.get.call(null,map__12000__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var content__$1 = shoreleave.remotes.common.csrf_protected.call(null,content,method);
var data = shoreleave.remotes.common.__GT_data_str.call(null,content__$1);
var suc_callback = shoreleave.remotes.common.__GT_simple_callback.call(null,on_success);
var err_callback = shoreleave.remotes.common.__GT_simple_callback.call(null,(function (){var or__7113__auto__ = on_error;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return ((function (or__7113__auto__,req,vec__11997,method,uri,map__12000,map__12000__$1,on_success,on_error,content,headers,content__$1,data,suc_callback){
return (function (p1__11994_SHARP_){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("XHR ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11994_SHARP_)].join(''));
});
;})(or__7113__auto__,req,vec__11997,method,uri,map__12000,map__12000__$1,on_success,on_error,content,headers,content__$1,data,suc_callback))
}
})());
if(cljs.core.truth_(suc_callback)){
goog.events.listen(req,shoreleave.remotes.common.event_types.call(null,new cljs.core.Keyword(null,"on-success","on-success",1786904109)),((function (req,vec__11997,method,uri,map__12000,map__12000__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback){
return (function (){
return suc_callback.call(null,req);
});})(req,vec__11997,method,uri,map__12000,map__12000__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback))
);

goog.events.listen(req,shoreleave.remotes.common.event_types.call(null,new cljs.core.Keyword(null,"on-error","on-error",1728533530)),((function (req,vec__11997,method,uri,map__12000,map__12000__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback){
return (function (){
return err_callback.call(null,req);
});})(req,vec__11997,method,uri,map__12000,map__12000__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback))
);
} else {
}

return req.send(uri,method,data,(cljs.core.truth_(headers)?cljs.core.clj__GT_js.call(null,headers):null));
});

shoreleave.remotes.xhr.xhr.cljs$lang$maxFixedArity = (1);

shoreleave.remotes.xhr.xhr.cljs$lang$applyTo = (function (seq11995){
var G__11996 = cljs.core.first.call(null,seq11995);
var seq11995__$1 = cljs.core.next.call(null,seq11995);
return shoreleave.remotes.xhr.xhr.cljs$core$IFn$_invoke$arity$variadic(G__11996,seq11995__$1);
});


//# sourceMappingURL=xhr.js.map