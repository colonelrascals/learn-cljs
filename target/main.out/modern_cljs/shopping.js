// Compiled by ClojureScript 1.9.473 {}
goog.provide('modern_cljs.shopping');
goog.require('cljs.core');
goog.require('domina.core');
modern_cljs.shopping.calculate = (function modern_cljs$shopping$calculate(){
var quantity = domina.core.value.call(null,domina.core.by_id.call(null,"quantity"));
var price = domina.core.value.call(null,domina.core.by_id.call(null,"price"));
var tax = domina.core.value.call(null,domina.core.by_id.call(null,"tax"));
var discount = domina.core.value.call(null,domina.core.by_id.call(null,"discount"));
domina.core.set_value_BANG_.call(null,domina.core.by_id.call(null,"total"),(((quantity * price) * ((1) + (tax / (100)))) - discount).toFixed((2)));

return false;
});
modern_cljs.shopping.init = (function modern_cljs$shopping$init(){
if(cljs.core.truth_((function (){var and__7101__auto__ = document;
if(cljs.core.truth_(and__7101__auto__)){
return document.getElementById();
} else {
return and__7101__auto__;
}
})())){
var the_form = domina.core.by_id.call(null,"shoppingForm");
return the_form.onsubmit = modern_cljs.shopping.calculate;
} else {
return null;
}
});
modern_cljs.shopping.init = (function modern_cljs$shopping$init(){
if(cljs.core.truth_((function (){var and__7101__auto__ = document;
if(cljs.core.truth_(and__7101__auto__)){
return document.getElementById;
} else {
return and__7101__auto__;
}
})())){
var the_form = domina.core.by_id.call(null,"shoppingForm");
return the_form.onsubmit = modern_cljs.shopping.calculate;
} else {
return null;
}
});
goog.exportSymbol('modern_cljs.shopping.init', modern_cljs.shopping.init);

//# sourceMappingURL=shopping.js.map