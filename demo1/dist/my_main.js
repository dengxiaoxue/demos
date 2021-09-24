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
        // console.log('index module');
        // const a = _webpack_require('./src/a.js');
        // console.log(a);
        // const b = _webpack_require('./src/a.js');
        //使用eval是为了触发浏览器调试时，显示路径为./src/index.js,方便调试-----> //# sourceURL=webpack://demo3/./src/index.js?
        eval("console.log(\'index module\')\nconst a = _webpack_require(\'./src/a.js\')\nconsole.log(a)\nconst b = _webpack_require(\'./src/a.js\')//# sourceURL=webpack://demo1/./src/index.js?")
    },
    './src/a.js': function(module, exports) {
        // console.log('module a');
        // module.exports = 'a';
        eval("console.log(\'module a\')\nmodule.exports = \'a\'//# sourceURL=webpack://demo1/./src/a.js?")
    }
})