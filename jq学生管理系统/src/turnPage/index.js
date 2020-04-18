(function ($) {

    function TurnPage(options) {
        // 添加翻页的页面元素
        this.wrap = options.wrap;
        // 总的数据条数
        this.allPageSize = options.allPageSize;
        // 当前页
        this.nowPage = options.nowPage;
        // 每页展示的数据数量
        this.pageSize = options.pageSize;
        // 翻页的时候回调函数
        this.changePageCb = options.changePageCb;
        // 100 / 15  总页数
        this.allPage = Math.ceil(this.allPageSize / this.pageSize);
        // 如果当前页 大于了总页数  则报错不渲染翻页
        if (this.nowPage > this.allPage) {
            alert('页码错误');
            return false;
        }
        //渲染页面
        this.fillHTML();
        //绑定事件
        this.bindEvent();
    }
    //页面渲染
    TurnPage.prototype.fillHTML = function () {
        //清空页面区间
        $(this.wrap).empty();
        //添加每页条数元素
        var oDiv = $('<div class="page-size"><span>每页条数</span></div>');
        //添加每页条数的输入框
        var oInp = $('<input class="size" type="number" min=1 max=50 value="' + this.pageSize + '"></input>');
        //插入到页面中去
        oDiv.append(oInp).appendTo(this.wrap);
        //翻页部分
        var oUl = $('<ul class="turn-page"></ul>');
        //添加上一页
        if (this.nowPage > 1) {
            $('<li class="prev-page">上一页</li>').appendTo(oUl);
        }
        //添加第一页
        if (this.nowPage > 3) {
            $('<li class="num">1</li>').appendTo(oUl);
        }
        // 添加前面的省略号
        if (this.nowPage > 4) {
            $('<span>...</span>').appendTo(oUl);
        }
        //中间五页
        for (var i = this.nowPage - 2; i <= this.nowPage + 2; i++) {
            if (i == this.nowPage) {
                $('<li class="num active">' + i + '</li>').appendTo(oUl);
            } else if (i > 0 && i <= this.allPage) {
                $('<li class="num">' + i + '</li>').appendTo(oUl);
            }
        }
        //添加后面的省略号
        if (this.nowPage + 2 < this.allPage - 1) {
            $('<span>...</span>').appendTo(oUl).appendTo(oUl);
        }
        //添加最后一页
        if (this.nowPage + 2 < this.allPage) {
            $('<li class="num">' + this.allPage + '</li>').appendTo(oUl);
        }
        //添加下一页按钮
        if (this.nowPage < this.allPage) {
            $('<li class="next-page">下一页</>').appendTo(oUl);
        }
        //插入到页面
        $(this.wrap).append(oUl);
    }

    //事件绑定
    TurnPage.prototype.bindEvent = function () {
        var self = this;
        // 每页的点击事件 点击页码进行翻页
        $('.num', this.wrap).click(function () {
            var page = parseInt($(this).text());
            self.changePage(page);
        });
        // 上一页点击事件
        $('.prev-page', this.wrap).click(function () {
            if (self.nowPage > 1) {
                self.changePage(self.nowPage - 1);
            }
        });
        // 下一页点击事件
        $('.next-page', this.wrap).click(function () {
            if (self.nowPage < self.allPage) {
                self.changePage(self.nowPage + 1);
            }
        });
        // 每页条数修改事件
        $('.size', this.wrap).change(function () {
            // 修改条数， 总页数也跟着变化  当前页应当初始化为1
            self.pageSize = parseInt($(this).val());
            self.allPage = Math.ceil(self.allPageSize / self.pageSize);
            self.changePage(1);
        }); 
    }
    // 切换页码
    TurnPage.prototype.changePage = function (page) {
        this.nowPage = page;
        // 重新渲染翻页
        this.fillHTML();
        // 重新绑定事件
        this.bindEvent();
        // 执行翻页的回调函数  将一些数据返回给用户  用于页面数据修改   
        this.changePageCb && this.changePageCb({
            nowPage: this.nowPage,
            pageSize: this.pageSize,
        });
    }


    //切换页码
    TurnPage.prototype.changePage = function (page) {
        this.nowPage = page;
        // 重新渲染翻页
        this.fillHTML();
        // 重新绑定事件
        this.bindEvent();
        // 执行翻页的回调函数  将一些数据返回给用户  用于页面数据修改   
        this.changePageCb && this.changePageCb({
            nowPage: this.nowPage,
            pageSize: this.pageSize,
        });
    }


    $.fn.extend({
        page: function (options) {
            options.wrap = this;
            new TurnPage(options);
            // pageObj.init();
            return this;
        }
    })

}(jQuery))