(function () {

    // 下拉列表构造函数
    function DropDown(options, wrap) {
        this.wrap = wrap || $('body');
        this.width = options.width || wrap.width();
        this.colWidth = options.colWidth || Math.floor(this.width / 2);
        this.list = options.list || [];
        this.direction = options.direction || 'y';
        this.init = function () {
            this.createDom();
            this.initStyle();
        }
    }

    DropDown.prototype.createDom = function () {
        var dropDownWrapper = $('<div class="my-dropdown"></div>');
        this.list.forEach(function (dlData, index) {
            var oDl = $('<dl></dl>');
            if (dlData.title) {
                $('<dt>' + dlData.title+ '</dt>').appendTo(oDl);
            }
            dlData.items.forEach(function (item) {
                $('<dd><a href="' +　item.href +'">' +　item.name +'</a></dd>').appendTo(oDl);
            });
            oDl.appendTo(dropDownWrapper).css({
                width: dlData.width
            })
        });
        $(this.wrap).append(dropDownWrapper);
    }
    DropDown.prototype.initStyle = function () {
        $('.my-dropdown', this.wrap).css({
            width: this.width
        }).find('dd').css({
            width: this.colWidth
        });
        if (this.direction == 'x') {
            $('.my-dropdown', this.wrap).css({
                right: -84,
                left: 'auto',
                padding: '15px 0'
            }).find('dl').css({
                float: 'left',
                borderRight: '1px solid #eee',
                borderBottom: 'none',
                padding: '0 0 0 20px'
            })
        }
    }

    $.fn.extend({
        dropdown: function (options) {
            var obj = new DropDown(options, this);
            obj.init()
        }
    })
} ())