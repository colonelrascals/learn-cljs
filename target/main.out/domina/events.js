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
if(typeof domina.events.t_domina$events11500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events11500 = (function (f,evt,meta11501){
this.f = f;
this.evt = evt;
this.meta11501 = meta11501;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events11500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11502,meta11501__$1){
var self__ = this;
var _11502__$1 = this;
return (new domina.events.t_domina$events11500(self__.f,self__.evt,meta11501__$1));
});

domina.events.t_domina$events11500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11502){
var self__ = this;
var _11502__$1 = this;
return self__.meta11501;
});

domina.events.t_domina$events11500.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL;

domina.events.t_domina$events11500.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events11500.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events11500.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events11500.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events11500.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events11500.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events11500.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events11500.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__7113__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events11500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta11501","meta11501",827728626,null)], null);
});

domina.events.t_domina$events11500.cljs$lang$type = true;

domina.events.t_domina$events11500.cljs$lang$ctorStr = "domina.events/t_domina$events11500";

domina.events.t_domina$events11500.cljs$lang$ctorPrWriter = (function (this__7724__auto__,writer__7725__auto__,opt__7726__auto__){
return cljs.core._write.call(null,writer__7725__auto__,"domina.events/t_domina$events11500");
});

domina.events.__GT_t_domina$events11500 = (function domina$events$create_listener_function_$___GT_t_domina$events11500(f__$1,evt__$1,meta11501){
return (new domina.events.t_domina$events11500(f__$1,evt__$1,meta11501));
});

}

return (new domina.events.t_domina$events11500(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__7901__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__11507(s__11508){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__11508__$1 = s__11508;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11508__$1);
if(temp__4657__auto__){
var s__11508__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11508__$2)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,s__11508__$2);
var size__7900__auto__ = cljs.core.count.call(null,c__7899__auto__);
var b__11510 = cljs.core.chunk_buffer.call(null,size__7900__auto__);
if((function (){var i__11509 = (0);
while(true){
if((i__11509 < size__7900__auto__)){
var node = cljs.core._nth.call(null,c__7899__auto__,i__11509);
cljs.core.chunk_append.call(null,b__11510,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__11511 = (i__11509 + (1));
i__11509 = G__11511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11510),domina$events$listen_internal_BANG__$_iter__11507.call(null,cljs.core.chunk_rest.call(null,s__11508__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11510),null);
}
} else {
var node = cljs.core.first.call(null,s__11508__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__11507.call(null,cljs.core.rest.call(null,s__11508__$2)));
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
var args11512 = [];
var len__8226__auto___11515 = arguments.length;
var i__8227__auto___11516 = (0);
while(true){
if((i__8227__auto___11516 < len__8226__auto___11515)){
args11512.push((arguments[i__8227__auto___11516]));

var G__11517 = (i__8227__auto___11516 + (1));
i__8227__auto___11516 = G__11517;
continue;
} else {
}
break;
}

var G__11514 = args11512.length;
switch (G__11514) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11512.length)].join('')));

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
var args11519 = [];
var len__8226__auto___11522 = arguments.length;
var i__8227__auto___11523 = (0);
while(true){
if((i__8227__auto___11523 < len__8226__auto___11522)){
args11519.push((arguments[i__8227__auto___11523]));

var G__11524 = (i__8227__auto___11523 + (1));
i__8227__auto___11523 = G__11524;
continue;
} else {
}
break;
}

var G__11521 = args11519.length;
switch (G__11521) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11519.length)].join('')));

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
var args11526 = [];
var len__8226__auto___11529 = arguments.length;
var i__8227__auto___11530 = (0);
while(true){
if((i__8227__auto___11530 < len__8226__auto___11529)){
args11526.push((arguments[i__8227__auto___11530]));

var G__11531 = (i__8227__auto___11530 + (1));
i__8227__auto___11530 = G__11531;
continue;
} else {
}
break;
}

var G__11528 = args11526.length;
switch (G__11528) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11526.length)].join('')));

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
var args11533 = [];
var len__8226__auto___11536 = arguments.length;
var i__8227__auto___11537 = (0);
while(true){
if((i__8227__auto___11537 < len__8226__auto___11536)){
args11533.push((arguments[i__8227__auto___11537]));

var G__11538 = (i__8227__auto___11537 + (1));
i__8227__auto___11537 = G__11538;
continue;
} else {
}
break;
}

var G__11535 = args11533.length;
switch (G__11535) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11533.length)].join('')));

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
var args11540 = [];
var len__8226__auto___11551 = arguments.length;
var i__8227__auto___11552 = (0);
while(true){
if((i__8227__auto___11552 < len__8226__auto___11551)){
args11540.push((arguments[i__8227__auto___11552]));

var G__11553 = (i__8227__auto___11552 + (1));
i__8227__auto___11552 = G__11553;
continue;
} else {
}
break;
}

var G__11542 = args11540.length;
switch (G__11542) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11540.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__11543 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11544 = null;
var count__11545 = (0);
var i__11546 = (0);
while(true){
if((i__11546 < count__11545)){
var node = cljs.core._nth.call(null,chunk__11544,i__11546);
goog.events.removeAll(node);

var G__11555 = seq__11543;
var G__11556 = chunk__11544;
var G__11557 = count__11545;
var G__11558 = (i__11546 + (1));
seq__11543 = G__11555;
chunk__11544 = G__11556;
count__11545 = G__11557;
i__11546 = G__11558;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11543);
if(temp__4657__auto__){
var seq__11543__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11543__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__11543__$1);
var G__11559 = cljs.core.chunk_rest.call(null,seq__11543__$1);
var G__11560 = c__7932__auto__;
var G__11561 = cljs.core.count.call(null,c__7932__auto__);
var G__11562 = (0);
seq__11543 = G__11559;
chunk__11544 = G__11560;
count__11545 = G__11561;
i__11546 = G__11562;
continue;
} else {
var node = cljs.core.first.call(null,seq__11543__$1);
goog.events.removeAll(node);

var G__11563 = cljs.core.next.call(null,seq__11543__$1);
var G__11564 = null;
var G__11565 = (0);
var G__11566 = (0);
seq__11543 = G__11563;
chunk__11544 = G__11564;
count__11545 = G__11565;
i__11546 = G__11566;
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
var seq__11547 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__11548 = null;
var count__11549 = (0);
var i__11550 = (0);
while(true){
if((i__11550 < count__11549)){
var node = cljs.core._nth.call(null,chunk__11548,i__11550);
goog.events.removeAll(node,type__$1);

var G__11567 = seq__11547;
var G__11568 = chunk__11548;
var G__11569 = count__11549;
var G__11570 = (i__11550 + (1));
seq__11547 = G__11567;
chunk__11548 = G__11568;
count__11549 = G__11569;
i__11550 = G__11570;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11547);
if(temp__4657__auto__){
var seq__11547__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11547__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__11547__$1);
var G__11571 = cljs.core.chunk_rest.call(null,seq__11547__$1);
var G__11572 = c__7932__auto__;
var G__11573 = cljs.core.count.call(null,c__7932__auto__);
var G__11574 = (0);
seq__11547 = G__11571;
chunk__11548 = G__11572;
count__11549 = G__11573;
i__11550 = G__11574;
continue;
} else {
var node = cljs.core.first.call(null,seq__11547__$1);
goog.events.removeAll(node,type__$1);

var G__11575 = cljs.core.next.call(null,seq__11547__$1);
var G__11576 = null;
var G__11577 = (0);
var G__11578 = (0);
seq__11547 = G__11575;
chunk__11548 = G__11576;
count__11549 = G__11577;
i__11550 = G__11578;
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
var args11579 = [];
var len__8226__auto___11582 = arguments.length;
var i__8227__auto___11583 = (0);
while(true){
if((i__8227__auto___11583 < len__8226__auto___11582)){
args11579.push((arguments[i__8227__auto___11583]));

var G__11584 = (i__8227__auto___11583 + (1));
i__8227__auto___11583 = G__11584;
continue;
} else {
}
break;
}

var G__11581 = args11579.length;
switch (G__11581) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11579.length)].join('')));

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
var G__11586 = parent;
var G__11587 = cljs.core.cons.call(null,parent,so_far);
n = G__11586;
so_far = G__11587;
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
var seq__11596_11604 = cljs.core.seq.call(null,ancestors);
var chunk__11597_11605 = null;
var count__11598_11606 = (0);
var i__11599_11607 = (0);
while(true){
if((i__11599_11607 < count__11598_11606)){
var n_11608 = cljs.core._nth.call(null,chunk__11597_11605,i__11599_11607);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_11608;

goog.events.fireListeners(n_11608,evt.type,true,evt);
}

var G__11609 = seq__11596_11604;
var G__11610 = chunk__11597_11605;
var G__11611 = count__11598_11606;
var G__11612 = (i__11599_11607 + (1));
seq__11596_11604 = G__11609;
chunk__11597_11605 = G__11610;
count__11598_11606 = G__11611;
i__11599_11607 = G__11612;
continue;
} else {
var temp__4657__auto___11613 = cljs.core.seq.call(null,seq__11596_11604);
if(temp__4657__auto___11613){
var seq__11596_11614__$1 = temp__4657__auto___11613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11596_11614__$1)){
var c__7932__auto___11615 = cljs.core.chunk_first.call(null,seq__11596_11614__$1);
var G__11616 = cljs.core.chunk_rest.call(null,seq__11596_11614__$1);
var G__11617 = c__7932__auto___11615;
var G__11618 = cljs.core.count.call(null,c__7932__auto___11615);
var G__11619 = (0);
seq__11596_11604 = G__11616;
chunk__11597_11605 = G__11617;
count__11598_11606 = G__11618;
i__11599_11607 = G__11619;
continue;
} else {
var n_11620 = cljs.core.first.call(null,seq__11596_11614__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_11620;

goog.events.fireListeners(n_11620,evt.type,true,evt);
}

var G__11621 = cljs.core.next.call(null,seq__11596_11614__$1);
var G__11622 = null;
var G__11623 = (0);
var G__11624 = (0);
seq__11596_11604 = G__11621;
chunk__11597_11605 = G__11622;
count__11598_11606 = G__11623;
i__11599_11607 = G__11624;
continue;
}
} else {
}
}
break;
}

var seq__11600_11625 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__11601_11626 = null;
var count__11602_11627 = (0);
var i__11603_11628 = (0);
while(true){
if((i__11603_11628 < count__11602_11627)){
var n_11629 = cljs.core._nth.call(null,chunk__11601_11626,i__11603_11628);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_11629;

goog.events.fireListeners(n_11629,evt.type,false,evt);
}

var G__11630 = seq__11600_11625;
var G__11631 = chunk__11601_11626;
var G__11632 = count__11602_11627;
var G__11633 = (i__11603_11628 + (1));
seq__11600_11625 = G__11630;
chunk__11601_11626 = G__11631;
count__11602_11627 = G__11632;
i__11603_11628 = G__11633;
continue;
} else {
var temp__4657__auto___11634 = cljs.core.seq.call(null,seq__11600_11625);
if(temp__4657__auto___11634){
var seq__11600_11635__$1 = temp__4657__auto___11634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11600_11635__$1)){
var c__7932__auto___11636 = cljs.core.chunk_first.call(null,seq__11600_11635__$1);
var G__11637 = cljs.core.chunk_rest.call(null,seq__11600_11635__$1);
var G__11638 = c__7932__auto___11636;
var G__11639 = cljs.core.count.call(null,c__7932__auto___11636);
var G__11640 = (0);
seq__11600_11625 = G__11637;
chunk__11601_11626 = G__11638;
count__11602_11627 = G__11639;
i__11603_11628 = G__11640;
continue;
} else {
var n_11641 = cljs.core.first.call(null,seq__11600_11635__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_11641;

goog.events.fireListeners(n_11641,evt.type,false,evt);
}

var G__11642 = cljs.core.next.call(null,seq__11600_11635__$1);
var G__11643 = null;
var G__11644 = (0);
var G__11645 = (0);
seq__11600_11625 = G__11642;
chunk__11601_11626 = G__11643;
count__11602_11627 = G__11644;
i__11603_11628 = G__11645;
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
var args11646 = [];
var len__8226__auto___11659 = arguments.length;
var i__8227__auto___11660 = (0);
while(true){
if((i__8227__auto___11660 < len__8226__auto___11659)){
args11646.push((arguments[i__8227__auto___11660]));

var G__11661 = (i__8227__auto___11660 + (1));
i__8227__auto___11660 = G__11661;
continue;
} else {
}
break;
}

var G__11648 = args11646.length;
switch (G__11648) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11646.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__11649_11663 = cljs.core.seq.call(null,evt_map);
var chunk__11650_11664 = null;
var count__11651_11665 = (0);
var i__11652_11666 = (0);
while(true){
if((i__11652_11666 < count__11651_11665)){
var vec__11653_11667 = cljs.core._nth.call(null,chunk__11650_11664,i__11652_11666);
var k_11668 = cljs.core.nth.call(null,vec__11653_11667,(0),null);
var v_11669 = cljs.core.nth.call(null,vec__11653_11667,(1),null);
(evt[k_11668] = v_11669);

var G__11670 = seq__11649_11663;
var G__11671 = chunk__11650_11664;
var G__11672 = count__11651_11665;
var G__11673 = (i__11652_11666 + (1));
seq__11649_11663 = G__11670;
chunk__11650_11664 = G__11671;
count__11651_11665 = G__11672;
i__11652_11666 = G__11673;
continue;
} else {
var temp__4657__auto___11674 = cljs.core.seq.call(null,seq__11649_11663);
if(temp__4657__auto___11674){
var seq__11649_11675__$1 = temp__4657__auto___11674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11649_11675__$1)){
var c__7932__auto___11676 = cljs.core.chunk_first.call(null,seq__11649_11675__$1);
var G__11677 = cljs.core.chunk_rest.call(null,seq__11649_11675__$1);
var G__11678 = c__7932__auto___11676;
var G__11679 = cljs.core.count.call(null,c__7932__auto___11676);
var G__11680 = (0);
seq__11649_11663 = G__11677;
chunk__11650_11664 = G__11678;
count__11651_11665 = G__11679;
i__11652_11666 = G__11680;
continue;
} else {
var vec__11656_11681 = cljs.core.first.call(null,seq__11649_11675__$1);
var k_11682 = cljs.core.nth.call(null,vec__11656_11681,(0),null);
var v_11683 = cljs.core.nth.call(null,vec__11656_11681,(1),null);
(evt[k_11682] = v_11683);

var G__11684 = cljs.core.next.call(null,seq__11649_11675__$1);
var G__11685 = null;
var G__11686 = (0);
var G__11687 = (0);
seq__11649_11663 = G__11684;
chunk__11650_11664 = G__11685;
count__11651_11665 = G__11686;
i__11652_11666 = G__11687;
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
return (function (p1__11688_SHARP_){
return goog.events.getListeners(p1__11688_SHARP_,type__$1,false);
});})(type__$1))
,domina.core.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map