define([
    'jQuery',
     // angular插件
    'angular',
    'angular-ui-router',
    'angular-animate',
    'ui-bootstrap-tpls',
    'angular-xeditable',

    // 业务逻辑
    'controllers/index',
    'directives/index',
    'filters/index',
    'services/index'
], function($, angular) {

    return angular.module('app', [
        'ui.router', 'ui.bootstrap'
        , 'xeditable'

        , 'controllers'
        , 'services'
        , 'directives'
    ]);

});

