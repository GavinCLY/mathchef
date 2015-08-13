define([
     // angular插件
    'angular',
    'angular-ui-router',
    'mobile-angular-ui',

    // 业务逻辑
    'controllers/index',
    'directives/index',
    'filters/index',
    'services/index'
], function(angular) {

    return angular.module('app', [
        'ui.router'
        , 'mobile-angular-ui'
        , 'controllers'
        , 'services'
//        , 'directives'
    ]);

});

