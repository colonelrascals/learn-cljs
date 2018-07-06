// Compiled by ClojureScript 1.9.473 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('goog.object');
goog.require('goog.events');

/**
 * @interface
 */
domina.events.Event = function(){};

/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$prevent_default$arity$1 == null)))){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__7781__auto__ = (((evt == null))?null:evt);
var m__7782__auto__ = (domina.events.prevent_default[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,evt);
} else {
var m__7782__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
}
});

/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$stop_propagation$arity$1 == null)))){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__7781__auto__ = (((evt == null))?null:evt);
var m__7782__auto__ = (domina.events.stop_propagation[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,evt);
} else {
var m__7782__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
}
});

/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$target$arity$1 == null)))){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__7781__auto__ = (((evt == null))?null:evt);
var m__7782__auto__ = (domina.events.target[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,evt);
} else {
var m__7782__auto____$1 = (domina.events.target["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
}
});

/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$current_target$arity$1 == null)))){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__7781__auto__ = (((evt == null))?null:evt);
var m__7782__auto__ = (domina.events.current_target[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,evt);
} else {
var m__7782__auto____$1 = (domina.events.current_target["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
}
});

/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$event_type$arity$1 == null)))){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__7781__auto__ = (((evt == null))?null:evt);
var m__7782__auto__ = (domina.events.event_type[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,evt);
} else {
var m__7782__auto____$1 = (domina.events.event_type["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
}
});

/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$raw_event$arity$1 == null)))){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__7781__auto__ = (((evt == null))?null:evt);
var m__7782__auto__ = (domina.events.raw_event[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,evt);
} else {
var m__7782__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if(typeof domina.events.t_domina$events9321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events9321 = (function (f,evt,meta9322){
this.f = f;
this.evt = evt;
this.meta9322 = meta9322;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events9321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9323,meta9322__$1){
var self__ = this;
var _9323__$1 = this;
return (new domina.events.t_domina$events9321(self__.f,self__.evt,meta9322__$1));
});

domina.events.t_domina$events9321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9323){
var self__ = this;
var _9323__$1 = this;
return self__.meta9322;
});

domina.events.t_domina$events9321.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL;

domina.events.t_domina$events9321.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events9321.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events9321.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events9321.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events9321.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events9321.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events9321.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4655__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4655__auto__)){
var val = temp__4655__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t_domina$events9321.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__7113__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events9321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta9322","meta9322",436883919,null)], null);
});

domina.events.t_domina$events9321.cljs$lang$type = true;

domina.events.t_domina$events9321.cljs$lang$ctorStr = "domina.events/t_domina$events9321";

domina.events.t_domina$events9321.cljs$lang$ctorPrWriter = (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"domina.events/t_domina$events9321");
});

domina.events.__GT_t_domina$events9321 = (function domina$events$create_listener_function_$___GT_t_domina$events9321(f__$1,evt__$1,meta9322){
return (new domina.events.t_domina$events9321(f__$1,evt__$1,meta9322));
});

}

return (new domina.events.t_domina$events9321(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__7901__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__9328(s__9329){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__9329__$1 = s__9329;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9329__$1);
if(temp__4657__auto__){
var s__9329__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9329__$2)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,s__9329__$2);
var size__7900__auto__ = cljs.core.count.call(null,c__7899__auto__);
var b__9331 = cljs.core.chunk_buffer.call(null,size__7900__auto__);
if((function (){var i__9330 = (0);
while(true){
if((i__9330 < size__7900__auto__)){
var node = cljs.core._nth.call(null,c__7899__auto__,i__9330);
cljs.core.chunk_append.call(null,b__9331,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__9332 = (i__9330 + (1));
i__9330 = G__9332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9331),domina$events$listen_internal_BANG__$_iter__9328.call(null,cljs.core.chunk_rest.call(null,s__9329__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9331),null);
}
} else {
var node = cljs.core.first.call(null,s__9329__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__9328.call(null,cljs.core.rest.call(null,s__9329__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__7901__auto__.call(null,domina.core.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var args9333 = [];
var len__8226__auto___9336 = arguments.length;
var i__8227__auto___9337 = (0);
while(true){
if((i__8227__auto___9337 < len__8226__auto___9336)){
args9333.push((arguments[i__8227__auto___9337]));

var G__9338 = (i__8227__auto___9337 + (1));
i__8227__auto___9337 = G__9338;
continue;
} else {
}
break;
}

var G__9335 = args9333.length;
switch (G__9335) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9333.length)].join('')));

}
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});

domina.events.listen_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function domina$events$capture_BANG_(var_args){
var args9340 = [];
var len__8226__auto___9343 = arguments.length;
var i__8227__auto___9344 = (0);
while(true){
if((i__8227__auto___9344 < len__8226__auto___9343)){
args9340.push((arguments[i__8227__auto___9344]));

var G__9345 = (i__8227__auto___9344 + (1));
i__8227__auto___9344 = G__9345;
continue;
} else {
}
break;
}

var G__9342 = args9340.length;
switch (G__9342) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9340.length)].join('')));

}
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});

domina.events.capture_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function domina$events$listen_once_BANG_(var_args){
var args9347 = [];
var len__8226__auto___9350 = arguments.length;
var i__8227__auto___9351 = (0);
while(true){
if((i__8227__auto___9351 < len__8226__auto___9350)){
args9347.push((arguments[i__8227__auto___9351]));

var G__9352 = (i__8227__auto___9351 + (1));
i__8227__auto___9351 = G__9352;
continue;
} else {
}
break;
}

var G__9349 = args9347.length;
switch (G__9349) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9347.length)].join('')));

}
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});

domina.events.listen_once_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function domina$events$capture_once_BANG_(var_args){
var args9354 = [];
var len__8226__auto___9357 = arguments.length;
var i__8227__auto___9358 = (0);
while(true){
if((i__8227__auto___9358 < len__8226__auto___9357)){
args9354.push((arguments[i__8227__auto___9358]));

var G__9359 = (i__8227__auto___9358 + (1));
i__8227__auto___9358 = G__9359;
continue;
} else {
}
break;
}

var G__9356 = args9354.length;
switch (G__9356) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9354.length)].join('')));

}
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});

domina.events.capture_once_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function domina$events$unlisten_BANG_(var_args){
var args9361 = [];
var len__8226__auto___9372 = arguments.length;
var i__8227__auto___9373 = (0);
while(true){
if((i__8227__auto___9373 < len__8226__auto___9372)){
args9361.push((arguments[i__8227__auto___9373]));

var G__9374 = (i__8227__auto___9373 + (1));
i__8227__auto___9373 = G__9374;
continue;
} else {
}
break;
}

var G__9363 = args9361.length;
switch (G__9363) {
case 0:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9361.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__9364 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9365 = null;
var count__9366 = (0);
var i__9367 = (0);
while(true){
if((i__9367 < count__9366)){
var node = cljs.core._nth.call(null,chunk__9365,i__9367);
goog.events.removeAll(node);

var G__9376 = seq__9364;
var G__9377 = chunk__9365;
var G__9378 = count__9366;
var G__9379 = (i__9367 + (1));
seq__9364 = G__9376;
chunk__9365 = G__9377;
count__9366 = G__9378;
i__9367 = G__9379;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9364);
if(temp__4657__auto__){
var seq__9364__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9364__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__9364__$1);
var G__9380 = cljs.core.chunk_rest.call(null,seq__9364__$1);
var G__9381 = c__7932__auto__;
var G__9382 = cljs.core.count.call(null,c__7932__auto__);
var G__9383 = (0);
seq__9364 = G__9380;
chunk__9365 = G__9381;
count__9366 = G__9382;
i__9367 = G__9383;
continue;
} else {
var node = cljs.core.first.call(null,seq__9364__$1);
goog.events.removeAll(node);

var G__9384 = cljs.core.next.call(null,seq__9364__$1);
var G__9385 = null;
var G__9386 = (0);
var G__9387 = (0);
seq__9364 = G__9384;
chunk__9365 = G__9385;
count__9366 = G__9386;
i__9367 = G__9387;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__9368 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9369 = null;
var count__9370 = (0);
var i__9371 = (0);
while(true){
if((i__9371 < count__9370)){
var node = cljs.core._nth.call(null,chunk__9369,i__9371);
goog.events.removeAll(node,type__$1);

var G__9388 = seq__9368;
var G__9389 = chunk__9369;
var G__9390 = count__9370;
var G__9391 = (i__9371 + (1));
seq__9368 = G__9388;
chunk__9369 = G__9389;
count__9370 = G__9390;
i__9371 = G__9391;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9368);
if(temp__4657__auto__){
var seq__9368__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9368__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__9368__$1);
var G__9392 = cljs.core.chunk_rest.call(null,seq__9368__$1);
var G__9393 = c__7932__auto__;
var G__9394 = cljs.core.count.call(null,c__7932__auto__);
var G__9395 = (0);
seq__9368 = G__9392;
chunk__9369 = G__9393;
count__9370 = G__9394;
i__9371 = G__9395;
continue;
} else {
var node = cljs.core.first.call(null,seq__9368__$1);
goog.events.removeAll(node,type__$1);

var G__9396 = cljs.core.next.call(null,seq__9368__$1);
var G__9397 = null;
var G__9398 = (0);
var G__9399 = (0);
seq__9368 = G__9396;
chunk__9369 = G__9397;
count__9370 = G__9398;
i__9371 = G__9399;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function domina$events$ancestor_nodes(var_args){
var args9400 = [];
var len__8226__auto___9403 = arguments.length;
var i__8227__auto___9404 = (0);
while(true){
if((i__8227__auto___9404 < len__8226__auto___9403)){
args9400.push((arguments[i__8227__auto___9404]));

var G__9405 = (i__8227__auto___9404 + (1));
i__8227__auto___9404 = G__9405;
continue;
} else {
}
break;
}

var G__9402 = args9400.length;
switch (G__9402) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9400.length)].join('')));

}
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return domina.events.ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = (function (n,so_far){
while(true){
var temp__4655__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4655__auto__)){
var parent = temp__4655__auto__;
var G__9407 = parent;
var G__9408 = cljs.core.cons.call(null,parent,so_far);
n = G__9407;
so_far = G__9408;
continue;
} else {
return so_far;
}
break;
}
});

domina.events.ancestor_nodes.cljs$lang$maxFixedArity = 2;

/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
var ancestors = domina.events.ancestor_nodes.call(null,domina.core.single_node.call(null,source));
var seq__9417_9425 = cljs.core.seq.call(null,ancestors);
var chunk__9418_9426 = null;
var count__9419_9427 = (0);
var i__9420_9428 = (0);
while(true){
if((i__9420_9428 < count__9419_9427)){
var n_9429 = cljs.core._nth.call(null,chunk__9418_9426,i__9420_9428);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_9429;

goog.events.fireListeners(n_9429,evt.type,true,evt);
}

var G__9430 = seq__9417_9425;
var G__9431 = chunk__9418_9426;
var G__9432 = count__9419_9427;
var G__9433 = (i__9420_9428 + (1));
seq__9417_9425 = G__9430;
chunk__9418_9426 = G__9431;
count__9419_9427 = G__9432;
i__9420_9428 = G__9433;
continue;
} else {
var temp__4657__auto___9434 = cljs.core.seq.call(null,seq__9417_9425);
if(temp__4657__auto___9434){
var seq__9417_9435__$1 = temp__4657__auto___9434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9417_9435__$1)){
var c__7932__auto___9436 = cljs.core.chunk_first.call(null,seq__9417_9435__$1);
var G__9437 = cljs.core.chunk_rest.call(null,seq__9417_9435__$1);
var G__9438 = c__7932__auto___9436;
var G__9439 = cljs.core.count.call(null,c__7932__auto___9436);
var G__9440 = (0);
seq__9417_9425 = G__9437;
chunk__9418_9426 = G__9438;
count__9419_9427 = G__9439;
i__9420_9428 = G__9440;
continue;
} else {
var n_9441 = cljs.core.first.call(null,seq__9417_9435__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_9441;

goog.events.fireListeners(n_9441,evt.type,true,evt);
}

var G__9442 = cljs.core.next.call(null,seq__9417_9435__$1);
var G__9443 = null;
var G__9444 = (0);
var G__9445 = (0);
seq__9417_9425 = G__9442;
chunk__9418_9426 = G__9443;
count__9419_9427 = G__9444;
i__9420_9428 = G__9445;
continue;
}
} else {
}
}
break;
}

var seq__9421_9446 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__9422_9447 = null;
var count__9423_9448 = (0);
var i__9424_9449 = (0);
while(true){
if((i__9424_9449 < count__9423_9448)){
var n_9450 = cljs.core._nth.call(null,chunk__9422_9447,i__9424_9449);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_9450;

goog.events.fireListeners(n_9450,evt.type,false,evt);
}

var G__9451 = seq__9421_9446;
var G__9452 = chunk__9422_9447;
var G__9453 = count__9423_9448;
var G__9454 = (i__9424_9449 + (1));
seq__9421_9446 = G__9451;
chunk__9422_9447 = G__9452;
count__9423_9448 = G__9453;
i__9424_9449 = G__9454;
continue;
} else {
var temp__4657__auto___9455 = cljs.core.seq.call(null,seq__9421_9446);
if(temp__4657__auto___9455){
var seq__9421_9456__$1 = temp__4657__auto___9455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9421_9456__$1)){
var c__7932__auto___9457 = cljs.core.chunk_first.call(null,seq__9421_9456__$1);
var G__9458 = cljs.core.chunk_rest.call(null,seq__9421_9456__$1);
var G__9459 = c__7932__auto___9457;
var G__9460 = cljs.core.count.call(null,c__7932__auto___9457);
var G__9461 = (0);
seq__9421_9446 = G__9458;
chunk__9422_9447 = G__9459;
count__9423_9448 = G__9460;
i__9424_9449 = G__9461;
continue;
} else {
var n_9462 = cljs.core.first.call(null,seq__9421_9456__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_9462;

goog.events.fireListeners(n_9462,evt.type,false,evt);
}

var G__9463 = cljs.core.next.call(null,seq__9421_9456__$1);
var G__9464 = null;
var G__9465 = (0);
var G__9466 = (0);
seq__9421_9446 = G__9463;
chunk__9422_9447 = G__9464;
count__9423_9448 = G__9465;
i__9424_9449 = G__9466;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__7101__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__7101__auto__)){
return o.dispatchEvent;
} else {
return and__7101__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var args9467 = [];
var len__8226__auto___9480 = arguments.length;
var i__8227__auto___9481 = (0);
while(true){
if((i__8227__auto___9481 < len__8226__auto___9480)){
args9467.push((arguments[i__8227__auto___9481]));

var G__9482 = (i__8227__auto___9481 + (1));
i__8227__auto___9481 = G__9482;
continue;
} else {
}
break;
}

var G__9469 = args9467.length;
switch (G__9469) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9467.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__9470_9484 = cljs.core.seq.call(null,evt_map);
var chunk__9471_9485 = null;
var count__9472_9486 = (0);
var i__9473_9487 = (0);
while(true){
if((i__9473_9487 < count__9472_9486)){
var vec__9474_9488 = cljs.core._nth.call(null,chunk__9471_9485,i__9473_9487);
var k_9489 = cljs.core.nth.call(null,vec__9474_9488,(0),null);
var v_9490 = cljs.core.nth.call(null,vec__9474_9488,(1),null);
(evt[k_9489] = v_9490);

var G__9491 = seq__9470_9484;
var G__9492 = chunk__9471_9485;
var G__9493 = count__9472_9486;
var G__9494 = (i__9473_9487 + (1));
seq__9470_9484 = G__9491;
chunk__9471_9485 = G__9492;
count__9472_9486 = G__9493;
i__9473_9487 = G__9494;
continue;
} else {
var temp__4657__auto___9495 = cljs.core.seq.call(null,seq__9470_9484);
if(temp__4657__auto___9495){
var seq__9470_9496__$1 = temp__4657__auto___9495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9470_9496__$1)){
var c__7932__auto___9497 = cljs.core.chunk_first.call(null,seq__9470_9496__$1);
var G__9498 = cljs.core.chunk_rest.call(null,seq__9470_9496__$1);
var G__9499 = c__7932__auto___9497;
var G__9500 = cljs.core.count.call(null,c__7932__auto___9497);
var G__9501 = (0);
seq__9470_9484 = G__9498;
chunk__9471_9485 = G__9499;
count__9472_9486 = G__9500;
i__9473_9487 = G__9501;
continue;
} else {
var vec__9477_9502 = cljs.core.first.call(null,seq__9470_9496__$1);
var k_9503 = cljs.core.nth.call(null,vec__9477_9502,(0),null);
var v_9504 = cljs.core.nth.call(null,vec__9477_9502,(1),null);
(evt[k_9503] = v_9504);

var G__9505 = cljs.core.next.call(null,seq__9470_9496__$1);
var G__9506 = null;
var G__9507 = (0);
var G__9508 = (0);
seq__9470_9484 = G__9505;
chunk__9471_9485 = G__9506;
count__9472_9486 = G__9507;
i__9473_9487 = G__9508;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});

domina.events.dispatch_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__9509_SHARP_){
return goog.events.getListeners(p1__9509_SHARP_,type__$1,false);
});})(type__$1))
,domina.core.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map