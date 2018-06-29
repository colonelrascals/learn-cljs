(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:62006" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})