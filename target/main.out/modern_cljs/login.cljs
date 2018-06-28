(ns modern-cljs.login
  (:require [domina.core :refer [by-id value set-value!]]))

(defn validate-form []
  "Using Domina"
  (if (and (> (count (value (by-id "email"))) 0)
           (> (count (value (by-id "password"))) 0))
    true
    (do (js/alert "Yo, complete the form!")
        false)))

(defn init []
  "No Domina"
  (if (and js/document
           (.getElementById js/document))
    (let [login-form (.getElementById js/document "loginForm")]
      (set! (.-onsubmit login-form) validate-form))))

(defn ^:export init []
  (if (and js/document
           (.getElementById js/document))
    (let [login-form (by-id "loginForm")]
      (set! (.-onsubmit login-form) validate-form))))
