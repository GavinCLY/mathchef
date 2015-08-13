/**
 * Created by GavinCLY on 7/17/15.
 */
define(['controllers/controllers'], function(controllers) {

    controllers.controller('prodCtrl', function ($rootScope
        , $scope
        , prodService
        ) {

        prodService.query().success(function(data) {
            $scope.prods = data.prods;
        });

    });

    controllers.controller('prodDetailCtrl', function ($rootScope
        , $scope
        , $state
        , prodService
        ) {

        var _id = $state.params.id;

        $scope.isBack = true;

        prodService.query({ _id : _id }).success(function(data) {
            $scope.prod = data.prods[0];
            $scope.amount = $scope.prod.amount;

        });



    });
});