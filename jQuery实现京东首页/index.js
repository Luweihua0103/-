/* 下拉列表需要的参数
*  width: 下拉列表的宽度
*  data: [{  dl标签下面的所有数据 
    title: '', 当前块里面的标题,
    width: '', 当前块的宽度
    items: [{name: '', href: '#'}, {}], 代表当前块显示的dd元素 
}],
colWidth: 每列的宽度，
direction:  多块内容的排列方式  y代表从上到下的排列, x 代表从左到右的排列
*/
$('#my-JD').dropdown({
    width: 280,
    colWidth: 126,
    list: [{
        title: '',
        items: [{
            href: '#',
            name: '待处理订单'
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '降价商品'
        }, {
            href: '#',
            name: '消息'
        }, {
            href: '#',
            name: '我的问答'
        }, {
            href: '#',
            name: '我的关注'
        }]
    }, {
        title: '',
        // col: 2,
        items: [{
            href: '#',
            name: '我的京豆'
        }, {
            href: '#',
            name: '我的优惠券'
        }, {
            href: '#',
            name: '我的白条'
        }, {
            href: '#',
            name: '我的理财'
        }]
    }]
})

$('#company').dropdown({
    width: 152,
    colWidth: 56,
    list: [{
        title: '',
        items: [{
            href: '#',
            name: '企业购'
        }, {
            href: '#',
            name: '商用场景观',
        }, {
            href: '#',
            name: '工业品'
        }, {
            href: '#',
            name: '礼品卡'
        }]
    }]
})

$('#service').dropdown({
    width: 170,
    colWidth: 70,
    list: [{
        title: '客户',
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name: '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name: '金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name: '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name: '金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }]
})
$('#app').dropdown({
    width: 1188,
    colWidth: 85,
    direction: 'x',
    list: [{
        title: '特色主题',
        // col: 4,
        width: 340,
        items: [{
            href: '#',
            name: '新品首发'
        }, {
            href: '#',
            name: '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name: '金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }, {
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name: '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name: '金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name: '金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }, {
        title: '行业频道',
        // col: 3,
        width: 255,
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name: '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name: '金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }, {
        title: '生活服务',
        // col: 3,
        width: 255,
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name: '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name: '金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }]
});


/*
接口文档包括：
    每一个接口的地址：\menu-list
    每一个接口的请求方式：GET (一般读取数据) POST（一般用来存数据的）
    每一个接口的请求参数：用来过滤参数（查找数据）
    每一个就接口返回的数据格式：
    [{
            titles: [{
                name: '家用电器',
                href: '#'
            }],
            content: {
                tabs: [{
                    name: '家电馆',
                    href: '#',
                }, {
                    name: '家电专卖店',
                    href: '#'
                }],
                subs: [{
                    title: {
                        name: '',
                        href: ''
                    },
                    items: [{href: '', name: ''}]
                }]
            }
        }, {
            titles: [{
                name: '手机',
                href: '#'
            }, {
                name: '运营商',
                href: '#'
            },{
                name: '数码',
                href: '#'
            },]
        }]

*/

//左侧菜单栏数据

var menuList = [{
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['电脑','办公'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}];


//渲染右侧菜单栏

function renderMenuList (data,menuDom){
    data.forEach(function(menuData){
        var oLi = $('<li></li>');
        menuData.title.forEach(function(title,index,arr){
            $('<a href="#">' + title + '</a>').appendTo(oLi);
            if(index != arr.length - 1){
                $('<span>/</span>').appendTo(oLi);
            }
        })
        menuDom.append(oLi);
    })
}
renderMenuList(menuList,$('.menu'));

//渲染菜单栏对应的内容

function renderMenuContent(data,contentDom){
    var tabsDom = $('<ul class="tabs"></ul>');
    data.tabs.forEach(function(tab){
        $('<li><a href="#">' + tab + '<span>/</span></a></li>').appendTo(tabsDom);
    });
    var subsDom = $('<div class="subs"></div>');
    data.subs.forEach(function (sub) {
        var oDl = $('<dl></dl>');
        var oDD = $('<dd></dd>');
        sub.items.forEach(function(item){
            $('<a href="#"> '+ item+' </a>').appendTo(oDD);
        });
        oDl.append($('<dt>'+ sub.title+'<span>\</span></dt>'))
            .append(oDD)
            .appendTo(subsDom);
    });
    contentDom.empty().append(tabsDom)
        .append(subsDom);
}

//鼠标事件
function  bindMenuEvent(){
    var timer = null;
    $('.menu').on('mouseenter','li',function(){
        clearTimeout(timer);
        var index = $(this).index();
        renderMenuContent(menuList[index].content,$('.menu-content'));
        $('.menu-content').show();
    }).on('mouseleave','li',function(){
        timer = setTimeout(function(){
            $('.menu-content').hide();
        },500)
    })

    $('.menu-content').on('mouseenter',function(){
        clearTimeout(timer);
    }).on('mouseleave',function(){
        $('.menu-content').hide();
    })
}
bindMenuEvent();

//引入轮播图插件
$('#swiper-1').swiper({
    // 轮播的动画类型  animate 代表从左到右轮播  fade  淡入淡出
    animateType: 'fade',
    // 是否展示左右按钮  true 展示 false 不展示
    showChangeBtn: true,
    // 轮播图片集合
    imgList: [
        "https://img12.360buyimg.com/pop/s1180x940_jfs/t1/48737/36/14677/76942/5dbac782E4404bca3/c41ca0b5a2657288.jpg.webp",
        "https://img30.360buyimg.com/da/s1180x940_jfs/t1/61439/22/15210/94885/5dc7d1e3E73c9f127/8ff0e5ac10eceb22.jpg.webp",
        "https://img11.360buyimg.com/pop/s1180x940_jfs/t1/106593/31/1981/93988/5dc8d5baEe00c6486/fe02ffc48dd9e56a.jpg.webp",
        "https://imgcps.jd.com/ling/100005224262/5bmz5p2_55S16KeG5beo5YiS566X/5L2g5YC85b6X5YWl5omL/p-5bd8253082acdd181d02fa6d/08f91e01/590x470.jpg"
    ],
    // 轮播的时间  ms
    autoChangeTime: 3000,
    // 是否展示小圆点
    showSpotBtn: true,
    // 是否自动轮播
    isAuto: true,
})

// 引入轮播图
$('#swiper-2').swiper({
    // 轮播的动画类型  animate 代表从左到右轮播  fade  淡入淡出
    animateType: 'fade',
    // 是否展示左右按钮  true 展示 false 不展示
    showChangeBtn: false,
    // 轮播图片集合
    imgList: [
        "https://img30.360buyimg.com/babel/s380x300_jfs/t1/82022/20/14589/76750/5dc4cafdE3c51a4b5/2e7749004b652c66.jpg.webp",
        "https://img10.360buyimg.com/pop/s380x300_jfs/t1/63525/26/14576/44307/5dc290beE136c201c/7cc71fcbe8a08930.png.webp",
        "https://img11.360buyimg.com/babel/s380x300_jfs/t1/91441/37/1082/78391/5db931d6Ec6b3c424/dc89bb902a1ca7b1.jpg.webp",
        "https://img12.360buyimg.com/babel/s380x300_jfs/t1/100225/11/1665/88635/5dc3ffa6E0db9b956/d2f0a06b9a0b9edd.jpg.webp"
    ],
    // 轮播的时间  ms
    autoChangeTime: 3000,
    // 是否展示小圆点
    showSpotBtn: false,
    // 是否自动轮播
    isAuto: true,
})

$('.service_frame').on('mouseenter', function () {
    $(this).parents('.J_service').addClass('service_expand');
    $(this).addClass('style-red');
    console.log($(this).index());
    if ($(this).index()  == 3) {
        $(this).parents('.J_service').addClass('service_expand2');
    }
}).on('mouseleave', function () {
    $(this).removeClass('style-red');
})

$('.close').click(function () {
    $(this).parents('.J_service').removeClass('service_expand')
                        .removeClass('service_expand2')
});


///搜索框事件
var timer = null;
var showTimer= null;

$('#search-inp').on('input',function(){
    var val = $(this).val();
    clearTimeout(timer);
    clearTimeout(showTimer);
    timer = setTimeout(function(){
        searchHelper(val);
    },500);
}).on('mouseleave',function(){
    showTimer = setTimeout(function () {
        $('#search-helper').hide()
    }, 500)
})
$('#search-helper').on('mouseenter', function () {
    clearTimeout(showTimer);
}).on('mouseleave', function () {
    showTimer = setTimeout(function () {
        $('#search-helper').hide()
    }, 500)
})

function searchHelper(val) {
    $.ajax({
        url: 'https://suggest.taobao.com/sug',
        type: 'GET',
        data: {
            // callback=jQuery33102749170246912416_1571406177829&code=utf-8&q=sdf%20&callback=dealData&_=1571406177830
            callback: 'dealData',
            code: 'utf-8',
            q: val,
        },
        dataType: 'jsonp'
    })
}
function dealData(data) {
    var oUl = $('<ul></ul>')
    data.result.forEach(function (item) {
        $('<li><a href="#">' + item[0] + '</a></li>').appendTo(oUl);
    });
    $('#search-helper').empty().append(oUl).show();
}