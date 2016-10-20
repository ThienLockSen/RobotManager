'use strict';

angular.module('robot.manager')

    .controller('HandCtrl', ['ITLocalStorage', 'Step', '$scope', 'RobotPlayerService',
        function(ITLocalStorage, Step, $scope, RobotPlayerService, ApplicationService){

            $scope.currentStep = new Step();
            $scope.robotPlayerService = RobotPlayerService;
            $scope.applicationService = ApplicationService;

            $scope.$watch('currentStep.hand', function(){
                RobotPlayerService.playHand($scope.currentStep.hand)
            }, true)


}]);








