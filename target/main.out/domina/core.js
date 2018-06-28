// Compiled by ClojureScript 1.9.473 {}
goog.provide('domina.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.support');
domina.core.re_html = /<|&#?\w+;/;
domina.core.re_leading_whitespace = /^\s+/;
domina.core.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.core.re_tag_name = /<([\w:]+)/;
domina.core.re_no_inner_html = /<(?:script|style)/i;
domina.core.re_tbody = /<tbody/i;
var opt_wrapper_8600 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_8601 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_8602 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_8602,opt_wrapper_8600,table_section_wrapper_8601,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_8600,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_8601,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_8601,cell_wrapper_8602,table_section_wrapper_8601,table_section_wrapper_8601]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__7101__auto__ = div.firstChild;
if(cljs.core.truth_(and__7101__auto__)){
return div.firstChild.childNodes;
} else {
return and__7101__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__8607 = cljs.core.seq.call(null,tbody);
var chunk__8608 = null;
var count__8609 = (0);
var i__8610 = (0);
while(true){
if((i__8610 < count__8609)){
var child = cljs.core._nth.call(null,chunk__8608,i__8610);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__8611 = seq__8607;
var G__8612 = chunk__8608;
var G__8613 = count__8609;
var G__8614 = (i__8610 + (1));
seq__8607 = G__8611;
chunk__8608 = G__8612;
count__8609 = G__8613;
i__8610 = G__8614;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8607);
if(temp__4657__auto__){
var seq__8607__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8607__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__8607__$1);
var G__8615 = cljs.core.chunk_rest.call(null,seq__8607__$1);
var G__8616 = c__7932__auto__;
var G__8617 = cljs.core.count.call(null,c__7932__auto__);
var G__8618 = (0);
seq__8607 = G__8615;
chunk__8608 = G__8616;
count__8609 = G__8617;
i__8610 = G__8618;
continue;
} else {
var child = cljs.core.first.call(null,seq__8607__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__8619 = cljs.core.next.call(null,seq__8607__$1);
var G__8620 = null;
var G__8621 = (0);
var G__8622 = (0);
seq__8607 = G__8619;
chunk__8608 = G__8620;
count__8609 = G__8621;
i__8610 = G__8622;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.core.restore_leading_whitespace_BANG_ = (function domina$core$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.core.html_to_dom = (function domina$core$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.core.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.core.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__8626 = cljs.core.get.call(null,domina.core.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.call(null,vec__8626,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__8626,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__8626,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__8629 = wrapper.lastChild;
var G__8630 = (level - (1));
wrapper = G__8629;
level = G__8630;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.core.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__7101__auto__ = !(domina.support.leading_whitespace_QMARK_);
if(and__7101__auto__){
return cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html__$1);
} else {
return and__7101__auto__;
}
})())){
domina.core.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.core.string_to_dom = (function domina$core$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.core.re_html,s))){
return domina.core.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.core.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.core.nodes = (function domina$core$nodes(content){
if((!((content == null))) && (!((content.domina$core$DomContent$nodes$arity$1 == null)))){
return content.domina$core$DomContent$nodes$arity$1(content);
} else {
var x__7781__auto__ = (((content == null))?null:content);
var m__7782__auto__ = (domina.core.nodes[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,content);
} else {
var m__7782__auto____$1 = (domina.core.nodes["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.core.single_node = (function domina$core$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$core$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$core$DomContent$single_node$arity$1(nodeseq);
} else {
var x__7781__auto__ = (((nodeseq == null))?null:nodeseq);
var m__7782__auto__ = (domina.core.single_node[goog.typeOf(x__7781__auto__)]);
if(!((m__7782__auto__ == null))){
return m__7782__auto__.call(null,nodeseq);
} else {
var m__7782__auto____$1 = (domina.core.single_node["_"]);
if(!((m__7782__auto____$1 == null))){
return m__7782__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina.core._STAR_debug_STAR_ = true;
domina.core.log_debug = (function domina$core$log_debug(var_args){
var args__8233__auto__ = [];
var len__8226__auto___8632 = arguments.length;
var i__8227__auto___8633 = (0);
while(true){
if((i__8227__auto___8633 < len__8226__auto___8632)){
args__8233__auto__.push((arguments[i__8227__auto___8633]));

var G__8634 = (i__8227__auto___8633 + (1));
i__8227__auto___8633 = G__8634;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if((domina.core._STAR_debug_STAR_) && (!(cljs.core._EQ_.call(null,window.console,undefined)))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log_debug.cljs$lang$maxFixedArity = (0);

domina.core.log_debug.cljs$lang$applyTo = (function (seq8631){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8631));
});

domina.core.log = (function domina$core$log(var_args){
var args__8233__auto__ = [];
var len__8226__auto___8636 = arguments.length;
var i__8227__auto___8637 = (0);
while(true){
if((i__8227__auto___8637 < len__8226__auto___8636)){
args__8233__auto__.push((arguments[i__8227__auto___8637]));

var G__8638 = (i__8227__auto___8637 + (1));
i__8227__auto___8637 = G__8638;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

domina.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log.cljs$lang$maxFixedArity = (0);

domina.core.log.cljs$lang$applyTo = (function (seq8635){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8635));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.core.by_id = (function domina$core$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.core.by_class = (function domina$core$by_class(class_name){
return domina.core.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.core.children = (function domina$core$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.core.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.core.common_ancestor = (function domina$core$common_ancestor(var_args){
var args__8233__auto__ = [];
var len__8226__auto___8640 = arguments.length;
var i__8227__auto___8641 = (0);
while(true){
if((i__8227__auto___8641 < len__8226__auto___8640)){
args__8233__auto__.push((arguments[i__8227__auto___8641]));

var G__8642 = (i__8227__auto___8641 + (1));
i__8227__auto___8641 = G__8642;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((0) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((0)),(0),null)):null);
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__8234__auto__);
});

domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.core.single_node,contents));
});

domina.core.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq8639){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8639));
});

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.core.ancestor_QMARK_ = (function domina$core$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.core.common_ancestor.call(null,ancestor_content,descendant_content),domina.core.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.core.clone = (function domina$core$clone(content){
return cljs.core.map.call(null,(function (p1__8643_SHARP_){
return p1__8643_SHARP_.cloneNode(true);
}),domina.core.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.append_BANG_ = (function domina$core$append_BANG_(parent_content,child_content){
domina.core.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.insert_BANG_ = (function domina$core$insert_BANG_(parent_content,child_content,idx){
domina.core.apply_with_cloning.call(null,(function (p1__8644_SHARP_,p2__8645_SHARP_){
return goog.dom.insertChildAt(p1__8644_SHARP_,p2__8645_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.prepend_BANG_ = (function domina$core$prepend_BANG_(parent_content,child_content){
domina.core.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_before_BANG_ = (function domina$core$insert_before_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__8647_SHARP_,p2__8646_SHARP_){
return goog.dom.insertSiblingBefore(p2__8646_SHARP_,p1__8647_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__8649_SHARP_,p2__8648_SHARP_){
return goog.dom.insertSiblingAfter(p2__8648_SHARP_,p1__8649_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__8651_SHARP_,p2__8650_SHARP_){
return goog.dom.replaceNode(p2__8650_SHARP_,p1__8651_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.core.detach_BANG_ = (function domina$core$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.core.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.core.destroy_BANG_ = (function domina$core$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.core.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.core.destroy_children_BANG_ = (function domina$core$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.core.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.core.style = (function domina$core$style(content,name){
var s = goog.style.getStyle(domina.core.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.core.attr = (function domina$core$attr(content,name){
return domina.core.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_style_BANG_ = (function domina$core$set_style_BANG_(var_args){
var args__8233__auto__ = [];
var len__8226__auto___8659 = arguments.length;
var i__8227__auto___8660 = (0);
while(true){
if((i__8227__auto___8660 < len__8226__auto___8659)){
args__8233__auto__.push((arguments[i__8227__auto___8660]));

var G__8661 = (i__8227__auto___8660 + (1));
i__8227__auto___8660 = G__8661;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((2) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((2)),(0),null)):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8234__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__8655_8662 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8656_8663 = null;
var count__8657_8664 = (0);
var i__8658_8665 = (0);
while(true){
if((i__8658_8665 < count__8657_8664)){
var n_8666 = cljs.core._nth.call(null,chunk__8656_8663,i__8658_8665);
goog.style.setStyle(n_8666,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8667 = seq__8655_8662;
var G__8668 = chunk__8656_8663;
var G__8669 = count__8657_8664;
var G__8670 = (i__8658_8665 + (1));
seq__8655_8662 = G__8667;
chunk__8656_8663 = G__8668;
count__8657_8664 = G__8669;
i__8658_8665 = G__8670;
continue;
} else {
var temp__4657__auto___8671 = cljs.core.seq.call(null,seq__8655_8662);
if(temp__4657__auto___8671){
var seq__8655_8672__$1 = temp__4657__auto___8671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8655_8672__$1)){
var c__7932__auto___8673 = cljs.core.chunk_first.call(null,seq__8655_8672__$1);
var G__8674 = cljs.core.chunk_rest.call(null,seq__8655_8672__$1);
var G__8675 = c__7932__auto___8673;
var G__8676 = cljs.core.count.call(null,c__7932__auto___8673);
var G__8677 = (0);
seq__8655_8662 = G__8674;
chunk__8656_8663 = G__8675;
count__8657_8664 = G__8676;
i__8658_8665 = G__8677;
continue;
} else {
var n_8678 = cljs.core.first.call(null,seq__8655_8672__$1);
goog.style.setStyle(n_8678,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8679 = cljs.core.next.call(null,seq__8655_8672__$1);
var G__8680 = null;
var G__8681 = (0);
var G__8682 = (0);
seq__8655_8662 = G__8679;
chunk__8656_8663 = G__8680;
count__8657_8664 = G__8681;
i__8658_8665 = G__8682;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.core.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq8652){
var G__8653 = cljs.core.first.call(null,seq8652);
var seq8652__$1 = cljs.core.next.call(null,seq8652);
var G__8654 = cljs.core.first.call(null,seq8652__$1);
var seq8652__$2 = cljs.core.next.call(null,seq8652__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8653,G__8654,seq8652__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__8233__auto__ = [];
var len__8226__auto___8690 = arguments.length;
var i__8227__auto___8691 = (0);
while(true){
if((i__8227__auto___8691 < len__8226__auto___8690)){
args__8233__auto__.push((arguments[i__8227__auto___8691]));

var G__8692 = (i__8227__auto___8691 + (1));
i__8227__auto___8691 = G__8692;
continue;
} else {
}
break;
}

var argseq__8234__auto__ = ((((2) < args__8233__auto__.length))?(new cljs.core.IndexedSeq(args__8233__auto__.slice((2)),(0),null)):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8234__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__8686_8693 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8687_8694 = null;
var count__8688_8695 = (0);
var i__8689_8696 = (0);
while(true){
if((i__8689_8696 < count__8688_8695)){
var n_8697 = cljs.core._nth.call(null,chunk__8687_8694,i__8689_8696);
n_8697.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8698 = seq__8686_8693;
var G__8699 = chunk__8687_8694;
var G__8700 = count__8688_8695;
var G__8701 = (i__8689_8696 + (1));
seq__8686_8693 = G__8698;
chunk__8687_8694 = G__8699;
count__8688_8695 = G__8700;
i__8689_8696 = G__8701;
continue;
} else {
var temp__4657__auto___8702 = cljs.core.seq.call(null,seq__8686_8693);
if(temp__4657__auto___8702){
var seq__8686_8703__$1 = temp__4657__auto___8702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8686_8703__$1)){
var c__7932__auto___8704 = cljs.core.chunk_first.call(null,seq__8686_8703__$1);
var G__8705 = cljs.core.chunk_rest.call(null,seq__8686_8703__$1);
var G__8706 = c__7932__auto___8704;
var G__8707 = cljs.core.count.call(null,c__7932__auto___8704);
var G__8708 = (0);
seq__8686_8693 = G__8705;
chunk__8687_8694 = G__8706;
count__8688_8695 = G__8707;
i__8689_8696 = G__8708;
continue;
} else {
var n_8709 = cljs.core.first.call(null,seq__8686_8703__$1);
n_8709.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8710 = cljs.core.next.call(null,seq__8686_8703__$1);
var G__8711 = null;
var G__8712 = (0);
var G__8713 = (0);
seq__8686_8693 = G__8710;
chunk__8687_8694 = G__8711;
count__8688_8695 = G__8712;
i__8689_8696 = G__8713;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.core.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq8683){
var G__8684 = cljs.core.first.call(null,seq8683);
var seq8683__$1 = cljs.core.next.call(null,seq8683);
var G__8685 = cljs.core.first.call(null,seq8683__$1);
var seq8683__$2 = cljs.core.next.call(null,seq8683__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8684,G__8685,seq8683__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__8718_8722 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8719_8723 = null;
var count__8720_8724 = (0);
var i__8721_8725 = (0);
while(true){
if((i__8721_8725 < count__8720_8724)){
var n_8726 = cljs.core._nth.call(null,chunk__8719_8723,i__8721_8725);
n_8726.removeAttribute(cljs.core.name.call(null,name));

var G__8727 = seq__8718_8722;
var G__8728 = chunk__8719_8723;
var G__8729 = count__8720_8724;
var G__8730 = (i__8721_8725 + (1));
seq__8718_8722 = G__8727;
chunk__8719_8723 = G__8728;
count__8720_8724 = G__8729;
i__8721_8725 = G__8730;
continue;
} else {
var temp__4657__auto___8731 = cljs.core.seq.call(null,seq__8718_8722);
if(temp__4657__auto___8731){
var seq__8718_8732__$1 = temp__4657__auto___8731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8718_8732__$1)){
var c__7932__auto___8733 = cljs.core.chunk_first.call(null,seq__8718_8732__$1);
var G__8734 = cljs.core.chunk_rest.call(null,seq__8718_8732__$1);
var G__8735 = c__7932__auto___8733;
var G__8736 = cljs.core.count.call(null,c__7932__auto___8733);
var G__8737 = (0);
seq__8718_8722 = G__8734;
chunk__8719_8723 = G__8735;
count__8720_8724 = G__8736;
i__8721_8725 = G__8737;
continue;
} else {
var n_8738 = cljs.core.first.call(null,seq__8718_8732__$1);
n_8738.removeAttribute(cljs.core.name.call(null,name));

var G__8739 = cljs.core.next.call(null,seq__8718_8732__$1);
var G__8740 = null;
var G__8741 = (0);
var G__8742 = (0);
seq__8718_8722 = G__8739;
chunk__8719_8723 = G__8740;
count__8720_8724 = G__8741;
i__8721_8725 = G__8742;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.core.parse_style_attributes = (function domina$core$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__8746 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__8746,(0),null);
var v = cljs.core.nth.call(null,vec__8746,(1),null);
if(cljs.core.truth_((function (){var and__7101__auto__ = k;
if(cljs.core.truth_(and__7101__auto__)){
return v;
} else {
return and__7101__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.core.styles = (function domina$core$styles(content){
var style = domina.core.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.core.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.core.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.core.attrs = (function domina$core$attrs(content){
var node = domina.core.single_node.call(null,content);
var attrs = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs){
return (function (p1__8749_SHARP_){
var attr = attrs.item(p1__8749_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
});})(node,attrs))
,cljs.core.range.call(null,attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.core.set_styles_BANG_ = (function domina$core$set_styles_BANG_(content,styles){
var seq__8760_8770 = cljs.core.seq.call(null,styles);
var chunk__8761_8771 = null;
var count__8762_8772 = (0);
var i__8763_8773 = (0);
while(true){
if((i__8763_8773 < count__8762_8772)){
var vec__8764_8774 = cljs.core._nth.call(null,chunk__8761_8771,i__8763_8773);
var name_8775 = cljs.core.nth.call(null,vec__8764_8774,(0),null);
var value_8776 = cljs.core.nth.call(null,vec__8764_8774,(1),null);
domina.core.set_style_BANG_.call(null,content,name_8775,value_8776);

var G__8777 = seq__8760_8770;
var G__8778 = chunk__8761_8771;
var G__8779 = count__8762_8772;
var G__8780 = (i__8763_8773 + (1));
seq__8760_8770 = G__8777;
chunk__8761_8771 = G__8778;
count__8762_8772 = G__8779;
i__8763_8773 = G__8780;
continue;
} else {
var temp__4657__auto___8781 = cljs.core.seq.call(null,seq__8760_8770);
if(temp__4657__auto___8781){
var seq__8760_8782__$1 = temp__4657__auto___8781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8760_8782__$1)){
var c__7932__auto___8783 = cljs.core.chunk_first.call(null,seq__8760_8782__$1);
var G__8784 = cljs.core.chunk_rest.call(null,seq__8760_8782__$1);
var G__8785 = c__7932__auto___8783;
var G__8786 = cljs.core.count.call(null,c__7932__auto___8783);
var G__8787 = (0);
seq__8760_8770 = G__8784;
chunk__8761_8771 = G__8785;
count__8762_8772 = G__8786;
i__8763_8773 = G__8787;
continue;
} else {
var vec__8767_8788 = cljs.core.first.call(null,seq__8760_8782__$1);
var name_8789 = cljs.core.nth.call(null,vec__8767_8788,(0),null);
var value_8790 = cljs.core.nth.call(null,vec__8767_8788,(1),null);
domina.core.set_style_BANG_.call(null,content,name_8789,value_8790);

var G__8791 = cljs.core.next.call(null,seq__8760_8782__$1);
var G__8792 = null;
var G__8793 = (0);
var G__8794 = (0);
seq__8760_8770 = G__8791;
chunk__8761_8771 = G__8792;
count__8762_8772 = G__8793;
i__8763_8773 = G__8794;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attrs_BANG_ = (function domina$core$set_attrs_BANG_(content,attrs){
var seq__8805_8815 = cljs.core.seq.call(null,attrs);
var chunk__8806_8816 = null;
var count__8807_8817 = (0);
var i__8808_8818 = (0);
while(true){
if((i__8808_8818 < count__8807_8817)){
var vec__8809_8819 = cljs.core._nth.call(null,chunk__8806_8816,i__8808_8818);
var name_8820 = cljs.core.nth.call(null,vec__8809_8819,(0),null);
var value_8821 = cljs.core.nth.call(null,vec__8809_8819,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_8820,value_8821);

var G__8822 = seq__8805_8815;
var G__8823 = chunk__8806_8816;
var G__8824 = count__8807_8817;
var G__8825 = (i__8808_8818 + (1));
seq__8805_8815 = G__8822;
chunk__8806_8816 = G__8823;
count__8807_8817 = G__8824;
i__8808_8818 = G__8825;
continue;
} else {
var temp__4657__auto___8826 = cljs.core.seq.call(null,seq__8805_8815);
if(temp__4657__auto___8826){
var seq__8805_8827__$1 = temp__4657__auto___8826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8805_8827__$1)){
var c__7932__auto___8828 = cljs.core.chunk_first.call(null,seq__8805_8827__$1);
var G__8829 = cljs.core.chunk_rest.call(null,seq__8805_8827__$1);
var G__8830 = c__7932__auto___8828;
var G__8831 = cljs.core.count.call(null,c__7932__auto___8828);
var G__8832 = (0);
seq__8805_8815 = G__8829;
chunk__8806_8816 = G__8830;
count__8807_8817 = G__8831;
i__8808_8818 = G__8832;
continue;
} else {
var vec__8812_8833 = cljs.core.first.call(null,seq__8805_8827__$1);
var name_8834 = cljs.core.nth.call(null,vec__8812_8833,(0),null);
var value_8835 = cljs.core.nth.call(null,vec__8812_8833,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_8834,value_8835);

var G__8836 = cljs.core.next.call(null,seq__8805_8827__$1);
var G__8837 = null;
var G__8838 = (0);
var G__8839 = (0);
seq__8805_8815 = G__8836;
chunk__8806_8816 = G__8837;
count__8807_8817 = G__8838;
i__8808_8818 = G__8839;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.core.has_class_QMARK_ = (function domina$core$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.core.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.core.add_class_BANG_ = (function domina$core$add_class_BANG_(content,class$){
var seq__8844_8848 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8845_8849 = null;
var count__8846_8850 = (0);
var i__8847_8851 = (0);
while(true){
if((i__8847_8851 < count__8846_8850)){
var node_8852 = cljs.core._nth.call(null,chunk__8845_8849,i__8847_8851);
goog.dom.classes.add(node_8852,class$);

var G__8853 = seq__8844_8848;
var G__8854 = chunk__8845_8849;
var G__8855 = count__8846_8850;
var G__8856 = (i__8847_8851 + (1));
seq__8844_8848 = G__8853;
chunk__8845_8849 = G__8854;
count__8846_8850 = G__8855;
i__8847_8851 = G__8856;
continue;
} else {
var temp__4657__auto___8857 = cljs.core.seq.call(null,seq__8844_8848);
if(temp__4657__auto___8857){
var seq__8844_8858__$1 = temp__4657__auto___8857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8844_8858__$1)){
var c__7932__auto___8859 = cljs.core.chunk_first.call(null,seq__8844_8858__$1);
var G__8860 = cljs.core.chunk_rest.call(null,seq__8844_8858__$1);
var G__8861 = c__7932__auto___8859;
var G__8862 = cljs.core.count.call(null,c__7932__auto___8859);
var G__8863 = (0);
seq__8844_8848 = G__8860;
chunk__8845_8849 = G__8861;
count__8846_8850 = G__8862;
i__8847_8851 = G__8863;
continue;
} else {
var node_8864 = cljs.core.first.call(null,seq__8844_8858__$1);
goog.dom.classes.add(node_8864,class$);

var G__8865 = cljs.core.next.call(null,seq__8844_8858__$1);
var G__8866 = null;
var G__8867 = (0);
var G__8868 = (0);
seq__8844_8848 = G__8865;
chunk__8845_8849 = G__8866;
count__8846_8850 = G__8867;
i__8847_8851 = G__8868;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.core.remove_class_BANG_ = (function domina$core$remove_class_BANG_(content,class$){
var seq__8873_8877 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8874_8878 = null;
var count__8875_8879 = (0);
var i__8876_8880 = (0);
while(true){
if((i__8876_8880 < count__8875_8879)){
var node_8881 = cljs.core._nth.call(null,chunk__8874_8878,i__8876_8880);
goog.dom.classes.remove(node_8881,class$);

var G__8882 = seq__8873_8877;
var G__8883 = chunk__8874_8878;
var G__8884 = count__8875_8879;
var G__8885 = (i__8876_8880 + (1));
seq__8873_8877 = G__8882;
chunk__8874_8878 = G__8883;
count__8875_8879 = G__8884;
i__8876_8880 = G__8885;
continue;
} else {
var temp__4657__auto___8886 = cljs.core.seq.call(null,seq__8873_8877);
if(temp__4657__auto___8886){
var seq__8873_8887__$1 = temp__4657__auto___8886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8873_8887__$1)){
var c__7932__auto___8888 = cljs.core.chunk_first.call(null,seq__8873_8887__$1);
var G__8889 = cljs.core.chunk_rest.call(null,seq__8873_8887__$1);
var G__8890 = c__7932__auto___8888;
var G__8891 = cljs.core.count.call(null,c__7932__auto___8888);
var G__8892 = (0);
seq__8873_8877 = G__8889;
chunk__8874_8878 = G__8890;
count__8875_8879 = G__8891;
i__8876_8880 = G__8892;
continue;
} else {
var node_8893 = cljs.core.first.call(null,seq__8873_8887__$1);
goog.dom.classes.remove(node_8893,class$);

var G__8894 = cljs.core.next.call(null,seq__8873_8887__$1);
var G__8895 = null;
var G__8896 = (0);
var G__8897 = (0);
seq__8873_8877 = G__8894;
chunk__8874_8878 = G__8895;
count__8875_8879 = G__8896;
i__8876_8880 = G__8897;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.core.toggle_class_BANG_ = (function domina$core$toggle_class_BANG_(content,class$){
var seq__8902_8906 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8903_8907 = null;
var count__8904_8908 = (0);
var i__8905_8909 = (0);
while(true){
if((i__8905_8909 < count__8904_8908)){
var node_8910 = cljs.core._nth.call(null,chunk__8903_8907,i__8905_8909);
goog.dom.classes.toggle(node_8910,class$);

var G__8911 = seq__8902_8906;
var G__8912 = chunk__8903_8907;
var G__8913 = count__8904_8908;
var G__8914 = (i__8905_8909 + (1));
seq__8902_8906 = G__8911;
chunk__8903_8907 = G__8912;
count__8904_8908 = G__8913;
i__8905_8909 = G__8914;
continue;
} else {
var temp__4657__auto___8915 = cljs.core.seq.call(null,seq__8902_8906);
if(temp__4657__auto___8915){
var seq__8902_8916__$1 = temp__4657__auto___8915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8902_8916__$1)){
var c__7932__auto___8917 = cljs.core.chunk_first.call(null,seq__8902_8916__$1);
var G__8918 = cljs.core.chunk_rest.call(null,seq__8902_8916__$1);
var G__8919 = c__7932__auto___8917;
var G__8920 = cljs.core.count.call(null,c__7932__auto___8917);
var G__8921 = (0);
seq__8902_8906 = G__8918;
chunk__8903_8907 = G__8919;
count__8904_8908 = G__8920;
i__8905_8909 = G__8921;
continue;
} else {
var node_8922 = cljs.core.first.call(null,seq__8902_8916__$1);
goog.dom.classes.toggle(node_8922,class$);

var G__8923 = cljs.core.next.call(null,seq__8902_8916__$1);
var G__8924 = null;
var G__8925 = (0);
var G__8926 = (0);
seq__8902_8906 = G__8923;
chunk__8903_8907 = G__8924;
count__8904_8908 = G__8925;
i__8905_8909 = G__8926;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.core.classes = (function domina$core$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.core.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.core.set_classes_BANG_ = (function domina$core$set_classes_BANG_(content,classes){
var classes_8935__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__8931_8936 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8932_8937 = null;
var count__8933_8938 = (0);
var i__8934_8939 = (0);
while(true){
if((i__8934_8939 < count__8933_8938)){
var node_8940 = cljs.core._nth.call(null,chunk__8932_8937,i__8934_8939);
goog.dom.classes.set(node_8940,classes_8935__$1);

var G__8941 = seq__8931_8936;
var G__8942 = chunk__8932_8937;
var G__8943 = count__8933_8938;
var G__8944 = (i__8934_8939 + (1));
seq__8931_8936 = G__8941;
chunk__8932_8937 = G__8942;
count__8933_8938 = G__8943;
i__8934_8939 = G__8944;
continue;
} else {
var temp__4657__auto___8945 = cljs.core.seq.call(null,seq__8931_8936);
if(temp__4657__auto___8945){
var seq__8931_8946__$1 = temp__4657__auto___8945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8931_8946__$1)){
var c__7932__auto___8947 = cljs.core.chunk_first.call(null,seq__8931_8946__$1);
var G__8948 = cljs.core.chunk_rest.call(null,seq__8931_8946__$1);
var G__8949 = c__7932__auto___8947;
var G__8950 = cljs.core.count.call(null,c__7932__auto___8947);
var G__8951 = (0);
seq__8931_8936 = G__8948;
chunk__8932_8937 = G__8949;
count__8933_8938 = G__8950;
i__8934_8939 = G__8951;
continue;
} else {
var node_8952 = cljs.core.first.call(null,seq__8931_8946__$1);
goog.dom.classes.set(node_8952,classes_8935__$1);

var G__8953 = cljs.core.next.call(null,seq__8931_8946__$1);
var G__8954 = null;
var G__8955 = (0);
var G__8956 = (0);
seq__8931_8936 = G__8953;
chunk__8932_8937 = G__8954;
count__8933_8938 = G__8955;
i__8934_8939 = G__8956;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.core.text = (function domina$core$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.core.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.core.set_text_BANG_ = (function domina$core$set_text_BANG_(content,value){
var seq__8961_8965 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8962_8966 = null;
var count__8963_8967 = (0);
var i__8964_8968 = (0);
while(true){
if((i__8964_8968 < count__8963_8967)){
var node_8969 = cljs.core._nth.call(null,chunk__8962_8966,i__8964_8968);
goog.dom.setTextContent(node_8969,value);

var G__8970 = seq__8961_8965;
var G__8971 = chunk__8962_8966;
var G__8972 = count__8963_8967;
var G__8973 = (i__8964_8968 + (1));
seq__8961_8965 = G__8970;
chunk__8962_8966 = G__8971;
count__8963_8967 = G__8972;
i__8964_8968 = G__8973;
continue;
} else {
var temp__4657__auto___8974 = cljs.core.seq.call(null,seq__8961_8965);
if(temp__4657__auto___8974){
var seq__8961_8975__$1 = temp__4657__auto___8974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8961_8975__$1)){
var c__7932__auto___8976 = cljs.core.chunk_first.call(null,seq__8961_8975__$1);
var G__8977 = cljs.core.chunk_rest.call(null,seq__8961_8975__$1);
var G__8978 = c__7932__auto___8976;
var G__8979 = cljs.core.count.call(null,c__7932__auto___8976);
var G__8980 = (0);
seq__8961_8965 = G__8977;
chunk__8962_8966 = G__8978;
count__8963_8967 = G__8979;
i__8964_8968 = G__8980;
continue;
} else {
var node_8981 = cljs.core.first.call(null,seq__8961_8975__$1);
goog.dom.setTextContent(node_8981,value);

var G__8982 = cljs.core.next.call(null,seq__8961_8975__$1);
var G__8983 = null;
var G__8984 = (0);
var G__8985 = (0);
seq__8961_8965 = G__8982;
chunk__8962_8966 = G__8983;
count__8963_8967 = G__8984;
i__8964_8968 = G__8985;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.core.value = (function domina$core$value(content){
return goog.dom.forms.getValue(domina.core.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.core.set_value_BANG_ = (function domina$core$set_value_BANG_(content,value){
var seq__8990_8994 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8991_8995 = null;
var count__8992_8996 = (0);
var i__8993_8997 = (0);
while(true){
if((i__8993_8997 < count__8992_8996)){
var node_8998 = cljs.core._nth.call(null,chunk__8991_8995,i__8993_8997);
goog.dom.forms.setValue(node_8998,value);

var G__8999 = seq__8990_8994;
var G__9000 = chunk__8991_8995;
var G__9001 = count__8992_8996;
var G__9002 = (i__8993_8997 + (1));
seq__8990_8994 = G__8999;
chunk__8991_8995 = G__9000;
count__8992_8996 = G__9001;
i__8993_8997 = G__9002;
continue;
} else {
var temp__4657__auto___9003 = cljs.core.seq.call(null,seq__8990_8994);
if(temp__4657__auto___9003){
var seq__8990_9004__$1 = temp__4657__auto___9003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8990_9004__$1)){
var c__7932__auto___9005 = cljs.core.chunk_first.call(null,seq__8990_9004__$1);
var G__9006 = cljs.core.chunk_rest.call(null,seq__8990_9004__$1);
var G__9007 = c__7932__auto___9005;
var G__9008 = cljs.core.count.call(null,c__7932__auto___9005);
var G__9009 = (0);
seq__8990_8994 = G__9006;
chunk__8991_8995 = G__9007;
count__8992_8996 = G__9008;
i__8993_8997 = G__9009;
continue;
} else {
var node_9010 = cljs.core.first.call(null,seq__8990_9004__$1);
goog.dom.forms.setValue(node_9010,value);

var G__9011 = cljs.core.next.call(null,seq__8990_9004__$1);
var G__9012 = null;
var G__9013 = (0);
var G__9014 = (0);
seq__8990_8994 = G__9011;
chunk__8991_8995 = G__9012;
count__8992_8996 = G__9013;
i__8993_8997 = G__9014;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.core.html = (function domina$core$html(content){
return domina.core.single_node.call(null,content).innerHTML;
});
domina.core.replace_children_BANG_ = (function domina$core$replace_children_BANG_(content,inner_content){
return domina.core.append_BANG_.call(null,domina.core.destroy_children_BANG_.call(null,content),inner_content);
});
domina.core.set_inner_html_BANG_ = (function domina$core$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.core.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.core.wrap_map,tag_name);
if((allows_inner_html_QMARK_) && ((domina.support.leading_whitespace_QMARK_) || (cljs.core.not.call(null,leading_whitespace_QMARK_))) && (!(special_tag_QMARK_))){
var value_9025 = clojure.string.replace.call(null,html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__9021_9026 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9022_9027 = null;
var count__9023_9028 = (0);
var i__9024_9029 = (0);
while(true){
if((i__9024_9029 < count__9023_9028)){
var node_9030 = cljs.core._nth.call(null,chunk__9022_9027,i__9024_9029);
node_9030.innerHTML = value_9025;

var G__9031 = seq__9021_9026;
var G__9032 = chunk__9022_9027;
var G__9033 = count__9023_9028;
var G__9034 = (i__9024_9029 + (1));
seq__9021_9026 = G__9031;
chunk__9022_9027 = G__9032;
count__9023_9028 = G__9033;
i__9024_9029 = G__9034;
continue;
} else {
var temp__4657__auto___9035 = cljs.core.seq.call(null,seq__9021_9026);
if(temp__4657__auto___9035){
var seq__9021_9036__$1 = temp__4657__auto___9035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9021_9036__$1)){
var c__7932__auto___9037 = cljs.core.chunk_first.call(null,seq__9021_9036__$1);
var G__9038 = cljs.core.chunk_rest.call(null,seq__9021_9036__$1);
var G__9039 = c__7932__auto___9037;
var G__9040 = cljs.core.count.call(null,c__7932__auto___9037);
var G__9041 = (0);
seq__9021_9026 = G__9038;
chunk__9022_9027 = G__9039;
count__9023_9028 = G__9040;
i__9024_9029 = G__9041;
continue;
} else {
var node_9042 = cljs.core.first.call(null,seq__9021_9036__$1);
node_9042.innerHTML = value_9025;

var G__9043 = cljs.core.next.call(null,seq__9021_9036__$1);
var G__9044 = null;
var G__9045 = (0);
var G__9046 = (0);
seq__9021_9026 = G__9043;
chunk__9022_9027 = G__9044;
count__9023_9028 = G__9045;
i__9024_9029 = G__9046;
continue;
}
} else {
}
}
break;
}
}catch (e9020){if((e9020 instanceof Error)){
var e_9047 = e9020;
domina.core.replace_children_BANG_.call(null,content,value_9025);
} else {
throw e9020;

}
}} else {
domina.core.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.core.set_html_BANG_ = (function domina$core$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.core.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.core.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.core.get_data = (function domina$core$get_data(var_args){
var args9048 = [];
var len__8226__auto___9051 = arguments.length;
var i__8227__auto___9052 = (0);
while(true){
if((i__8227__auto___9052 < len__8226__auto___9051)){
args9048.push((arguments[i__8227__auto___9052]));

var G__9053 = (i__8227__auto___9052 + (1));
i__8227__auto___9052 = G__9053;
continue;
} else {
}
break;
}

var G__9050 = args9048.length;
switch (G__9050) {
case 2:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9048.length)].join('')));

}
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.core.get_data.call(null,node,key,false);
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.core.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__7101__auto__ = bubble;
if(cljs.core.truth_(and__7101__auto__)){
return (value == null);
} else {
return and__7101__auto__;
}
})())){
var temp__4657__auto__ = domina.core.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
return domina.core.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.core.get_data.cljs$lang$maxFixedArity = 3;

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.core.set_data_BANG_ = (function domina$core$set_data_BANG_(node,key,value){
var m = (function (){var or__7113__auto__ = domina.core.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.core.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.core.apply_with_cloning = (function domina$core$apply_with_cloning(f,parent_content,child_content){
var parents = domina.core.nodes.call(null,parent_content);
var children = domina.core.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__9061_9065 = cljs.core.seq.call(null,children);
var chunk__9062_9066 = null;
var count__9063_9067 = (0);
var i__9064_9068 = (0);
while(true){
if((i__9064_9068 < count__9063_9067)){
var child_9069 = cljs.core._nth.call(null,chunk__9062_9066,i__9064_9068);
frag.appendChild(child_9069);

var G__9070 = seq__9061_9065;
var G__9071 = chunk__9062_9066;
var G__9072 = count__9063_9067;
var G__9073 = (i__9064_9068 + (1));
seq__9061_9065 = G__9070;
chunk__9062_9066 = G__9071;
count__9063_9067 = G__9072;
i__9064_9068 = G__9073;
continue;
} else {
var temp__4657__auto___9074 = cljs.core.seq.call(null,seq__9061_9065);
if(temp__4657__auto___9074){
var seq__9061_9075__$1 = temp__4657__auto___9074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9061_9075__$1)){
var c__7932__auto___9076 = cljs.core.chunk_first.call(null,seq__9061_9075__$1);
var G__9077 = cljs.core.chunk_rest.call(null,seq__9061_9075__$1);
var G__9078 = c__7932__auto___9076;
var G__9079 = cljs.core.count.call(null,c__7932__auto___9076);
var G__9080 = (0);
seq__9061_9065 = G__9077;
chunk__9062_9066 = G__9078;
count__9063_9067 = G__9079;
i__9064_9068 = G__9080;
continue;
} else {
var child_9081 = cljs.core.first.call(null,seq__9061_9075__$1);
frag.appendChild(child_9081);

var G__9082 = cljs.core.next.call(null,seq__9061_9075__$1);
var G__9083 = null;
var G__9084 = (0);
var G__9085 = (0);
seq__9061_9065 = G__9082;
chunk__9062_9066 = G__9083;
count__9063_9067 = G__9084;
i__9064_9068 = G__9085;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__9055_SHARP_,p2__9056_SHARP_){
return f.call(null,p1__9055_SHARP_,p2__9056_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var args9086 = [];
var len__8226__auto___9089 = arguments.length;
var i__8227__auto___9090 = (0);
while(true){
if((i__8227__auto___9090 < len__8226__auto___9089)){
args9086.push((arguments[i__8227__auto___9090]));

var G__9091 = (i__8227__auto___9090 + (1));
i__8227__auto___9090 = G__9091;
continue;
} else {
}
break;
}

var G__9088 = args9086.length;
switch (G__9088) {
case 1:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9086.length)].join('')));

}
});

domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.core.lazy_nl_via_item.call(null,nl,(0));
});

domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.core.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.core.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;

domina.core.lazy_nl_via_array_ref = (function domina$core$lazy_nl_via_array_ref(var_args){
var args9093 = [];
var len__8226__auto___9096 = arguments.length;
var i__8227__auto___9097 = (0);
while(true){
if((i__8227__auto___9097 < len__8226__auto___9096)){
args9093.push((arguments[i__8227__auto___9097]));

var G__9098 = (i__8227__auto___9097 + (1));
i__8227__auto___9097 = G__9098;
continue;
} else {
}
break;
}

var G__9095 = args9093.length;
switch (G__9095) {
case 1:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9093.length)].join('')));

}
});

domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.core.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.core.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.core.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.core.lazy_nodelist = (function domina$core$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.core.lazy_nl_via_item.call(null,nl);
} else {
return domina.core.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.core.array_like_QMARK_ = (function domina$core$array_like_QMARK_(obj){
var and__7101__auto__ = obj;
if(cljs.core.truth_(and__7101__auto__)){
var and__7101__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__7101__auto____$1){
return obj.length;
} else {
return and__7101__auto____$1;
}
} else {
return and__7101__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.core.normalize_seq = (function domina$core$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$)))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,list_thing))){
return domina.core.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.core.DomContent["string"] = true);

(domina.core.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.core.nodes.call(null,domina.core.string_to_dom.call(null,s)));
}));

(domina.core.single_node["string"] = (function (s){
return domina.core.single_node.call(null,domina.core.string_to_dom.call(null,s));
}));

(domina.core.DomContent["_"] = true);

(domina.core.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,content))){
return domina.core.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.core.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.core.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.core.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.core.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=core.js.map