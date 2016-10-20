'use strict';

// Code goes here
angular.module('localStorage.services', []);

angular.module('localStorage.services')
    .provider('ITLocalStorage', [function(){



        this.defaultKey = "IT_KEY";
        var self = this;

        this.$get = function(){

            function _save(obj){
                if(obj){
                    localStorage.setItem(self.defaultKey, angular.toJson(obj));
                }
            }

            function _load(){
                var obj = localStorage.getItem(self.defaultKey);
                if(obj){
                    return angular.fromJson(obj);
                }
                return obj;
            }

            return {
                save : _save,
                load : _load
            }
        }

    }])