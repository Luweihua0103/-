
//事件绑定函数
function bindEvent() {
    $('.menu-list').on('click', 'dd', function () {
        $('.active').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('for');
        $('.right-content > div').fadeOut();
        $('#' + id).fadeIn();
    })


    //新增学生
    $('#add-student-btn').click(function (e) {
        //阻止form表单自带的刷新页面
        e.preventDefault();
        //选中并获取form表单数据
        var data = $('#student-add-form').serializeArray();
        // console.log(data)
        data = formateData(data);
        if (!data) {
            alert('数据填写不完整，请检查');
            return false;
        } else {
            $.ajax({
                url: 'https://open.duyiedu.com/api/student/addStudent',
                type: 'get',
                data: $extend({
                    appkey:
            }, data),
                // dataType: 代表的是希望拿到的数据类型
                dataType: 'json',
                success: function (res) {
                    if (res.status == 'success') {
                        alert('添加成功');
                        // 表单清空   但jq没有重置表单的方法 需要用原生的方法重置
                        $('#student-add-form')[0].reset();
                        //切换到主页面
                        $('.menu-list > dd[for=student-list]').click();
                    } else {
                        alert(res.msg);
                    }
                }
            })
        }

    })







}






// 用来将数组结构的表单数据转化成对象结构的数据

// 校验数据是否填写完全  如果没有填写完全则返回false  如果填写全了返回数据对象

function formatData(data) {
    var resultObj = {};
    //数据是否填写全
    var flag = true;
    data.forEach(function (item) {
        if (!item.value) {
            flag = false;
        }
        resultObj[item.name] = item.value;
    });
    return flag ? resultObj : false;
}


bindEvent();
