'use strict';

// Code goes here
angular.module('robot.manager')
    .service('RobotPlayerService', ['ApplicationService', '$http', function(ApplicationService, $http){


        function _error(){

        }

        function _playHand(hand){
            console.log(hand);
            $http({
                method:'GET',
                url: ApplicationService.load().API.URL + '/fingers',
                params:hand
            }).then(function(){
                console.log('O K')
            }, function(){
                console.log('K O')
            });
        }

        return {
            playHand : _playHand
        }

    }])