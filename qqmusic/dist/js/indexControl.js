(function ($, root) {
    function Control(len) {
        //this ----> Control
        this.index = 0;
        this.len = len;
    }
    Control.prototype = {
        prev: function () {
            return this.getIndex(-1);
        },
        next: function () {
            return this.getIndex(1);
        },
        //计算改变后的索引
        getIndex: function (val) {
            //当前对应索引
            var index = this.index;
            //数据总长度
            var len = this.len;
            //if判断
            var curIndex = (index + val + len) % len;
            this.index = curIndex;
            //改变后的索引
            return curIndex;
        }
    }
    //向外暴露一个构造函数,方便传入参数(len)
    root.controlIndex = Control;
})(window.Zepto, window.player || (window.player = {}));