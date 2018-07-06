// Compiled by ClojureScript 1.9.473 {}
goog.provide('shoreleave.remotes.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
shoreleave.remotes.protocols.ITransportData = function(){};

shoreleave.remotes.protocols._data_str = (function shoreleave$remotes$protocols$_data_str(t){
if((!((t == null))) && (!((t.shoreleave$remotes$protocols$ITransportData$_data_str$arity$1 == null)))){
return t.shoreleave$remotes$protocols$ITransportData$_data_str$arity$1(t);
} else {
var x__7781__auto__ = (((t == null))?null:t);
var m__7782__auto__ = (shoreleave.remotes.protocols._data_str[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,t);
} else {
var m__7782__auto____$1 = (shoreleave.remotes.protocols._data_str["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,t);
} else {
throw cljs.core.missing_protocol.call(null,"ITransportData.-data-str",t);
}
}
}
});


//# sourceMappingURL=protocols.js.map