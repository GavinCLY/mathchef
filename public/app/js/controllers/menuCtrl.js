/**
 * Created by GavinCLY on 7/17/15.
 */
define(['controllers/controllers', '_'], function(controllers) {

    controllers.controller('menuCtrl', function ($rootScope
        , $scope
        , prodService
        , semiProdService
        , materialService
        ) {

        function refreshList(type, callback) {
            switch (type) {
                case 'prod' :
                    prodService.query().success(function(data) {
                        $scope.prods = data.prods;
                        callback && callback();
                    });
                    break;
                case 'semiProd' :
                    semiProdService.query().success(function(data) {
                        $scope.semiProds = data.semiProds;
                        callback && callback();
                    });
                    break;
                case 'material' :
                    materialService.query({ sort: { _id : -1 } }).success(function(data) {
                        $scope.materials = data.materials;
                        callback && callback();
                    });
                    break;
            }
        }
        refreshList('prod');
        refreshList('semiProd');
        refreshList('material');


        // 选择菜单
        $scope.selectProd = function(prod) {

            if($scope.currProd && $scope.currProd._id) {
                _.each($scope.prods, function(p, index) {
                    if(p._id == $scope.currProd._id) {
                        $scope.prods.splice(index, 1, angular.extend({}, $scope.currProd));
                        return false;
                    }
                });
            }

            if(typeof prod == 'string') {
                $scope.currProd = _.where($scope.prods, { _id : prod });
            } else {
                $scope.currProd = prod;
            }
        };

        //新建 菜谱
        $scope.addProd = function(){
            var prod = {
                name: '新的菜谱'
            };
            $scope.prods.push(prod);
            $scope.currProd = prod;
        };

        // 保存新建的菜单
        $scope.saveProd = function(prod) {
            if(!$scope.currProd._id) {
                prodService
                    .save(prod)
                    .success(function(id) {
                        //TODO 看能不能少一次请求
                        refreshList('prod', function() {
                            $scope.selectProd(id);
                        });
                    });
            } else {
                prodService
                    .update($scope.currProd._id, prod)
                    .success(function(data) {

                    });
            }

        };

        // 主操作区change后改触发的事件
        $scope.nestableChange = function(e, el) {
            if(!el) return;
            var $el = $(el), id = $el.data('id').split('_'), tmp = {};
            switch (id[0]) {
                case 'semi' :
                    angular.copy( _.findWhere($scope.semiProds, { _id : id[1] }), tmp)
                    $scope.currProd.semiProds.unshift(tmp);
                    break;
                case 'm' :
                    var parent = $el.parent().closest('.dd-item');
                    if(!parent.length) {
                        alert('原材料需要拖拽至半成品下');
                        break;
                    }
                    var semi = _.findWhere($scope.currProd.semiProds,
                        { _id : $el.parent().closest('.dd-item').data('id').split('_')[1]}
                    );
                    angular.copy(_.findWhere($scope.materials, { _id : id[1]}), tmp);
                    semi.materials.push(tmp);
                    semi.edited = true;
                    break;
            }
            $el.remove();
            $scope.$apply();

        };

        // 保存新半成品
        $scope.newSemiProd = ' ';
        $scope.createSemiProd = function(data) {
            semiProdService
                .save({ name : data.trim(), unit : 'g' })
                .success(function() {
                    $scope.newSemiProd = ' ';
                    refreshList('semiProd');
                });
        };
        // 保存新材料
        $scope.newMaterial = ' ';
        $scope.createMaterial = function(data) {
            materialService
                .save({ name : data.trim(), unit : 'g' })
                .success(function() {
                    data = ' ';
                    $scope.newMaterial = ' ';
                    refreshList('material');
                });
        };

        // 保存新菜单
        function updateProd(id, prod, callback) {
            prodService
                .update(id, prod)
                .success(function(data) {
                    // 对比semiProd
                    _.each(prod.semiProds, function(semiProd) {
//                        var compared = pick(_.findWhere($scope.semiProds, { _id : semiProd._id}), ['id'];
//                        if(!_.isEqual(compared, semiProd)) {        // 是否更新修改过的semiProd
                        if(semiProd.edited) {
                            if (window.confirm('您修改了' + semiProd.name + '的配方，是否保留？')) {
                                semiProdService.update(semiProd._id, semiProd).success(function (data) {
                                    console.log(data);
                                });
                                delete semiProd.edited;
                            }
                        }
//                        }
                    });
                });
        }
        $scope.updateProd = updateProd;

        function updateSemiProd(id, semiProd, callback) {
            semiProdService
                .update(id, semiProd)
                .success(function(data) {
                    callback(data);
                });
        }
        $scope.updateSemiProd = updateSemiProd;

        // 删除
        $scope.removeSemiProd = function(id) {
            $scope.currProd.semiProds.splice(_.findIndex($scope.currProd.semiProds, { _id : id }), 1);
        }

        $scope.removeMaterial = function(sid, mid) {
            var target = _.findWhere($scope.currProd.semiProds, { _id : sid });
            target.materials.splice(_.findIndex(target, { _id : mid }));
            target.edited = true;
        }

    });
});