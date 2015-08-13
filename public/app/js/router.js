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
            $urlRouterProvider.otherwise('/app/menu');

            $stateProvider
                .state('app', {
                    abstract: true, // abstract抽象模板永远不能直接激活，但是可以设置被激活的子节点
                    url: '/app',
                    templateUrl: 'tpls/app.html'
                })
                .state('app.menu', {       // 控制台
                    url : '/menu',
                    templateUrl: 'tpls/menu.html',
                    controller : 'menuCtrl'
                })
        });
});