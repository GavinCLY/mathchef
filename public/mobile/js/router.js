/**
 * Created by GavinCLY on 5/28/15.
 */
define([
    './app'
], function(auditApp, config){

    return auditApp.run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

    })
    .config(function($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider) {
            $urlRouterProvider.otherwise('/app/prod');

            $stateProvider
                .state('app', {
                    abstract: true, // abstract抽象模板永远不能直接激活，但是可以设置被激活的子节点
                    url: '/app',
                    templateUrl: 'tpls/app.html'
                })
                .state('app.prod', {       // 控制台
                    url : '/prod',
                    templateUrl: 'tpls/prod.html',
                    controller : 'prodCtrl'
                })
                .state('app.prodDetail', {       // 控制台
                    url : '/prod/:id',
                    templateUrl: 'tpls/prod_detail.html',
                    controller : 'prodDetailCtrl'
                })
        });
});