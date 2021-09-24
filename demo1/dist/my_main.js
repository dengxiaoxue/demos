(function(modules){
    //用于缓存模块的导出结果
    var cache = {};
    
    //moduleId就是模块的路径
    function _webpack_require(moduleId){
        //检查是否有缓存
        console.log(cache[moduleId]);
 		if (cache[moduleId]) {
			return cache[moduleId];
		}
        const module = {
            exports: {}
        }
        //运行模块
        modules[moduleId](module, module.exports, _webpack_require);
        var result = module.exports;
        cache[moduleId] = result;
        return result;
    }
    //执行入口函数
    return _webpack_require('./src/index.js');
})({
    './src/index.js': function(module, exports, _webpack_require) {
        console.log('index module');
        const a = _webpack_require('./src/a.js');
        console.log(a);
        const b = _webpack_require('./src/a.js');
    },
    './src/a.js': function(module, exports) {
        console.log('module a');
        module.exports = 'a';
    }
})