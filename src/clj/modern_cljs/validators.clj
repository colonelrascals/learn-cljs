(ns modern-cljs.validators
  (:require [valip.core :refer [validate]]
            [valip.predicates :refer [present? matches email-address?]]))
(def ^:dynamic *re-password* #^"(?=.*\d).{4,8}$")

(defn user-credential-errors [email password]
  (validate {:email email :password password}
            [:email present? "Email can't be empty."]
            [:email email-address? "The provided email is not valid."]
            [:password present? "Please enter your password"]
            [:password (matches *re-password*) "The provided password is invalid"]))
