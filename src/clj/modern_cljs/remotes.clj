(ns modern-cljs.remotes
  (:require [compojure.handler :refer [site]]
            [shoreleave.middleware.rpc :refer [defremote wrap-rpc]]
            [modern-cljs.login.validators :as v]))

(defremote calculate [quantity price tax discount]
  (-> (* (read-string quantity) (read-string price))
      (* (+ 1 (/ (read-string tax) 100)))
      (- (read-string discount))))

(def app (-> (var handler)
             (wrap-rpc)
             (site)))

