var prod = require('./prod');
var material = require('./material');
var semiProd = require('./semiProd');

module.exports = function (app) {

//    app.get('/', prod.list);    // 首页

    app.get('/edit', function(req, res) {
        res.render('edit');
    });     // 进入编辑页

    // 成品
    app.post('/prods', prod.create);         // 创建 成品 数据

    app.put('/prods/:id', prod.update);     // 更新 成品数据

//    app.get('/prods/:id', prod.query);        // 获取 成品 （包括其中的半成品、原材料 ）

    app.get('/prods', prod.query);

//    app.put('/prods/entity/:id', prod.updateEntity);

    // 成品与半成品关系
//    app.post('/prods/combs', prod.createComb);        // 创建 成品和半成品 关系

//    app.delete('/prods/combs/:id', prod.removeComb);   // 删除 成品和半成品 关系


    // 半成品
    app.post('/semiProds', semiProd.create);      // 创建 半成品 数据

//    app.post('/semiProds/combs', semiProd.createComb);    // 创建 半成品 -- 原材料 数据

//    app.post('/semiProds/combs/:id', semiProd.removeComb);    // 创建 半成品 -- 原材料 数据

    app.get('/semiProds', semiProd.query);

    app.put('/semiProds/:id', semiProd.update);


    // 原材料

    app.post('/materials', material.create);     //创建原材料

    app.get('/materials', material.query);


    // 查询



};
