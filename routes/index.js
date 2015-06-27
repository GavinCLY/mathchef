var prod = require('./prod');
var material = require('./material');
var semiProd = require('./semiProd');

module.exports = function (app) {

    app.get('/', prod.list);    // 首页

    app.get('/edit', function(req, res) {
        res.render('edit');
    });     // 进入编辑页

    app.post('/prod', prod.create);         // 创建 成品 数据

    app.post('/prod/:id', prod.update);     // 更新 成品数据

    app.get('/prod/:id', prod.find);        // 获取 成品 （包括其中的半成品、原材料 ）

    app.post('/prod/comb', prod.createComb);        // 创建 成品和半成品 关系

    app.delete('/prod/comb/:id', prod.removeComb);   // 删除 成品和半成品 关系

    app.post('/semiProd', semiProd.create);      // 创建 半成品 数据

    app.get('/semiProds', semiProd.list);       // 获取 半成品 列表

    app.post('/semiProd/comb', semiProd.createComb);    // 创建 半成品 -- 原材料 数据

    app.post('/semiProd/comb/:id', semiProd.removeComb);    // 创建 半成品 -- 原材料 数据

    app.post('/material', material.create);     //创建原材料

};
