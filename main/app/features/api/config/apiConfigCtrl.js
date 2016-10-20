'use strict';

angular.module('robot.manager')

    .controller('ApiConfigCtrl', ['$scope', 'ITLocalStorage', 'ApplicationService','Hand',
        function($scope, ITLocalStorage, ApplicationService, Hand){

            var hand = new Hand();
            console.log(hand);
            $scope.itlocalStorage = ITLocalStorage;
            $scope.applicationService = ApplicationService;
            console.log("too");
        }]);




