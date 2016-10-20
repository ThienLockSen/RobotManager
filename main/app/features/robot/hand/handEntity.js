'use strict';

angular.module('robot.manager').factory('Hand', [function () {
    function Hand(previousStep){

        this.thumb=previousStep ? previousStep.hand.thumber : 180 ;
        this.ringfinger=previousStep ? previousStep.hand.ringfinger : 180 ;
        this.auricular=previousStep ? previousStep.hand.auricular : 180 ;
        this.index=previousStep ? previousStep.hand.index : 180 ;
        this.major=previousStep ? previousStep.hand.major : 180 ;
    }

    Hand.build = function (previousStep) {
        return new Hand(previousStep);
    };

    return function (previousStep) {
        return new Hand(previousStep);
    }
}]);