/**
 * Created by GavinCLY on 7/17/15.
 */
/**
 * Created by GavinCLY on 5/28/15.
 */
define([
    'services/services',
    '_'
], function(services) {

    /**
     *  材料 接口
     */
    services.factory('materialService', function($http, $rootScope) {
        var serviceName = '/materials';
        var service = {
            query : function(params) {
                return $http.get(serviceName, {
                    params : params
                });
            },
            save : function(obj) {
                return $http.post(serviceName, obj);
            }
        };
        return service;
    });

});