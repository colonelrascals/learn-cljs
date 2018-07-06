// Compiled by ClojureScript 1.9.473 {}
goog.provide('modern_cljs.login');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('domina.events');
goog.require('hiccups.runtime');
goog.require('modern_cljs.login.validators');
modern_cljs.login.validate_email = (function modern_cljs$login$validate_email(email){
domina.core.destroy_BANG_.call(null,domina.core.by_class.call(null,"email"));

var temp__4655__auto__ = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(modern_cljs.login.validators.user_credential_errors.call(null,domina.core.value.call(null,email),null));
if(cljs.core.truth_(temp__4655__auto__)){
var errors = temp__4655__auto__;
domina.core.prepend_BANG_.call(null,domina.core.by_id.call(null,"loginForm"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs9746 = cljs.core.first.call(null,errors);
if(cljs.core.map_QMARK_.call(null,attrs9746)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"help email"], null),attrs9746))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div class=\"help email\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs9746)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
})())].join(''));

return false;
} else {
return true;
}
});
modern_cljs.login.validate_password = (function modern_cljs$login$validate_password(password){
domina.core.destroy_BANG_.call(null,domina.core.by_class.call(null,"password"));

var temp__4655__auto__ = new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(modern_cljs.login.validators.user_credential_errors.call(null,null,domina.core.value.call(null,password)));
if(cljs.core.truth_(temp__4655__auto__)){
var errors = temp__4655__auto__;
domina.core.append_BANG_.call(null,domina.core.by_id.call(null,"loginForm"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs9748 = cljs.core.first.call(null,errors);
if(cljs.core.map_QMARK_.call(null,attrs9748)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"help password"], null),attrs9748))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div class=\"help password\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,attrs9748)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
})())].join(''));

return false;
} else {
return true;
}
});
modern_cljs.login.validate_form = (function modern_cljs$login$validate_form(evt,email,password){
var temp__4655__auto__ = modern_cljs.login.validators.user_credential_errors.call(null,domina.core.value.call(null,email),domina.core.value.call(null,password));
if(cljs.core.truth_(temp__4655__auto__)){
var map__9753 = temp__4655__auto__;
var map__9753__$1 = ((((!((map__9753 == null)))?((((map__9753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9753):map__9753);
var e_errs = cljs.core.get.call(null,map__9753__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var p_errs = cljs.core.get.call(null,map__9753__$1,new cljs.core.Keyword(null,"password","password",417022471));
if(cljs.core.truth_((function (){var or__7113__auto__ = e_errs;
if(cljs.core.truth_(or__7113__auto__)){
return or__7113__auto__;
} else {
return p_errs;
}
})())){
domina.core.destroy_BANG_.call(null,domina.core.by_class.call(null,"help"));

domina.events.prevent_default.call(null,evt);

return domina.core.append_BANG_.call(null,domina.core.by_id.call(null,"loginForm"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div class=\"help\">Please complete the form.</div>")].join(''));
} else {
return domina.events.prevent_default.call(null,evt);
}
} else {
return true;
}
});
modern_cljs.login.init = (function modern_cljs$login$init(){
if(cljs.core.truth_((function (){var and__7101__auto__ = document;
if(cljs.core.truth_(and__7101__auto__)){
return (document["getElementById"]);
} else {
return and__7101__auto__;
}
})())){
var email = domina.core.by_id.call(null,"email");
var password = domina.core.by_id.call(null,"password");
domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"submit"),new cljs.core.Keyword(null,"click","click",1912301393),((function (email,password){
return (function (evt){
return modern_cljs.login.validate_form.call(null,evt,email,password);
});})(email,password))
);

domina.events.listen_BANG_.call(null,email,new cljs.core.Keyword(null,"blur","blur",-453500461),((function (email,password){
return (function (evt){
return modern_cljs.login.validate_email.call(null,email);
});})(email,password))
);

return domina.events.listen_BANG_.call(null,password,new cljs.core.Keyword(null,"blur","blur",-453500461),((function (email,password){
return (function (evt){
return modern_cljs.login.validate_password.call(null,password);
});})(email,password))
);
} else {
return null;
}
});
goog.exportSymbol('modern_cljs.login.init', modern_cljs.login.init);

//# sourceMappingURL=login.js.map