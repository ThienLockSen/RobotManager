'use strict'
angular.module('robot.manager').service('ApplicationService', ['ITLocalStorage', 'Application',
function(ITLocalStorage, Application){


    function _load(){
       var application = ITLocalStorage.load();
        return application ? application : new Application();
    }


    function _save(obj){
 console.log("a");
         var new_application = new Application();
        new_application.API.URL=obj;
        if(obj){
            ITLocalStorage.save(new_application);
        }
    }

    function _add(obj){
        console.log("b");
        var new_application = new Application();
        new_application.currentStep=obj;
        if(obj){
            ITLocalStorage.add(new_application);
        }
    }


    return {
        load :_load,
        save : _save,
        add : _add
    }
}]);