// Compiled by ClojureScript 1.9.473 {}
goog.provide('domina.support');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
var div_8581 = document.createElement("div");
var test_html_8582 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
div_8581.innerHTML = test_html_8582;

domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null,div_8581.firstChild.nodeType,(3));

domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null,div_8581.getElementsByTagName("tbody").length,(0));

domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null,div_8581.getElementsByTagName("link").length,(0));

//# sourceMappingURL=support.js.map