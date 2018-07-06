// Compiled by ClojureScript 1.9.473 {}
goog.provide('shoreleave.remotes.http_rpc');
goog.require('cljs.core');
goog.require('shoreleave.remotes.xhr');
goog.require('cljs.reader');
shoreleave.remotes.http_rpc._STAR_remote_uri_STAR_ = "/_shoreleave";
/**
 * Call a remote-callback on the server.
 *   Arguments:
 *  remote - a string, the name of the remote on the server (eg. specified with a defremote)
 *  params - a vector, the parameters to pass to the remote function
 *  callback - a map or a function.  The map specifies {:on-success some-f, :on-error another-f}
 *              otherwise, just a single function that will be called with on-complete is triggered
 *  extra-content - varlist of key-value pairs, extra-content to merge into the payload/content map.
 */
shoreleave.remotes.http_rpc.remote_callback = (function shoreleave$remotes$http_rpc$remote_callback(var_args){
var args__8233__auto__ = [];
var len__8226__auto___12013 = arguments.length;
var i__8227__auto___12014 = (0);
while(true){
if((i__8227__auto___12014 < len__8226__auto___12013)){
args__8233__auto__.push((arguments[i__8227__auto___12014]));

var G__12015 = (i__8227__auto___12014 + (1));
i__8227__auto___12014 = G__12015;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((3) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((3)),(0),null)):null);
return shoreleave.remotes.http_rpc.remote_callback.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8234__auto__);
});

shoreleave.remotes.http_rpc.remote_callback.cljs$core$IFn$_invoke$arity$variadic = (function (remote,params,callback,extra_content){
if(cljs.core.map_QMARK_.call(null,callback)){
var map__12011 = callback;
var map__12011__$1 = ((((!((map__12011 == null)))?((((map__12011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12011):map__12011);
var on_success = cljs.core.get.call(null,map__12011__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__12011__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
return shoreleave.remotes.xhr.xhr.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post","post",269697687),shoreleave.remotes.http_rpc._STAR_remote_uri_STAR_], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.pr_str.call(null,params)], null),cljs.core.apply.call(null,cljs.core.hash_map,extra_content)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(cljs.core.truth_(on_success)?((function (map__12011,map__12011__$1,on_success,on_error){
return (function (data){
var data__$1 = ((cljs.core._EQ_.call(null,data,""))?"nil":data);
return on_success.call(null,cljs.reader.read_string.call(null,data__$1));
});})(map__12011,map__12011__$1,on_success,on_error))
:null),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(cljs.core.truth_(on_error)?((function (map__12011,map__12011__$1,on_success,on_error){
return (function (data){
var data__$1 = ((cljs.core._EQ_.call(null,data,""))?"nil":data);
return on_error.call(null,cljs.reader.read_string.call(null,data__$1));
});})(map__12011,map__12011__$1,on_success,on_error))
:null));
} else {
return shoreleave.remotes.xhr.xhr.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post","post",269697687),shoreleave.remotes.http_rpc._STAR_remote_uri_STAR_], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.pr_str.call(null,params)], null),cljs.core.apply.call(null,cljs.core.hash_map,extra_content)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(cljs.core.truth_(callback)?(function (data){
var data__$1 = ((cljs.core._EQ_.call(null,data,""))?"nil":data);
return callback.call(null,cljs.reader.read_string.call(null,data__$1));
}):null));
}
});

shoreleave.remotes.http_rpc.remote_callback.cljs$lang$maxFixedArity = (3);

shoreleave.remotes.http_rpc.remote_callback.cljs$lang$applyTo = (function (seq12007){
var G__12008 = cljs.core.first.call(null,seq12007);
var seq12007__$1 = cljs.core.next.call(null,seq12007);
var G__12009 = cljs.core.first.call(null,seq12007__$1);
var seq12007__$2 = cljs.core.next.call(null,seq12007__$1);
var G__12010 = cljs.core.first.call(null,seq12007__$2);
var seq12007__$3 = cljs.core.next.call(null,seq12007__$2);
return shoreleave.remotes.http_rpc.remote_callback.cljs$core$IFn$_invoke$arity$variadic(G__12008,G__12009,G__12010,seq12007__$3);
});


//# sourceMappingURL=http_rpc.js.map