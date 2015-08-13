/**
 * Created by GavinCLY on 8/5/15.
 */
/**
 * Created by GavinCLY on 7/17/15.
 */
define(['directives/directives', 'nestable'], function(directives) {

    directives.directive('nestable', function () {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {
                $(el).nestable({
                    target : attrs.target
                }).bind('change', scope[attrs.change]);
            }
        }
    });
});