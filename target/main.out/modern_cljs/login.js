// Compiled by ClojureScript 1.9.473 {}
goog.provide('modern_cljs.login');
goog.require('cljs.core');
goog.require('domina.core');
modern_cljs.login.validate_form = (function modern_cljs$login$validate_form(){

if(((cljs.core.count.call(null,domina.core.value.call(null,domina.core.by_id.call(null,"email"))) > (0))) && ((cljs.core.count.call(null,domina.core.value.call(null,domina.core.by_id.call(null,"password"))) > (0)))){
return true;
} else {
alert("Yo, complete the form!");

return false;
}
});
modern_cljs.login.init = (function modern_cljs$login$init(){
if(cljs.core.truth_((function (){var and__7101__auto__ = document;
if(cljs.core.truth_(and__7101__auto__)){
return document.getElementById();
} else {
return and__7101__auto__;
}
})())){
var login_form = domina.core.by_id.call(null,"loginForm");
return login_form.onsubmit = modern_cljs.login.validate_form;
} else {
return null;
}
});
goog.exportSymbol('modern_cljs.login.init', modern_cljs.login.init);

//# sourceMappingURL=login.js.map