

var nowPage = 1;
var pageSize = 1;
var allPageSize = 10;
var allPage = 3;
var tableData = [];
//事件绑定函数
function bindEvent() {
    //列表切换
    $('.menu-list').on('click', 'dd', function () {
        $('.active').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('for');
        $('.right-content > div').fadeOut();
        $('#' + id).fadeIn();
        if(id == 'student-list'){
            getTableData();
        }
    });

    //新增学生
    $('#add-student-btn').click(function (e) {
        //阻止form表单自带的刷新页面
        e.preventDefault();
        //选中并获取form表单数据
        var data = $('#student-add-form').serializeArray();
        data = formatData(data);
        if (!data) {
            alert('数据填写不完整，请检查');
            return false;
        } else {
            transferData('/api/student/addStudent',data,function(data){
                alert('添加成功');
                // 表单清空   但jq没有重置表单的方法 需要用原生的方法重置
                $('#student-add-form')[0].reset();
                //切换到主页面
                $('.menu-list > dd[for=student-list]').click();
            })
        }
    })

    //编辑按钮事件
    $('#table-body').on('click','.edit',function(e){
        $('.modal').slideDown();
        var index = $(this).parents('tr').index();
        // console.log(tableData[index]);
        renderEditForm(tableData[index]);
    }).on('click','.delete',function(e){
        var isDel = confirm('确认删除?');
        var index = $(this).parents('tr').index();
        if(isDel){
            transferData('/api/student/delBySno',{
                sNo: tableData[index].sNo
            },function(data){
                alert('删除成功');
                getTableData();
            })
        }
    });
    //点击遮罩层弹框消失
    $('.mask').click(function(){
        $('.modal').slideUp();
    });

    //数据修改编辑
    $('#edit-student-btn').click(function (e) {
        e.preventDefault();
        var data = $('#edit-form').serializeArray();
        data = formatData(data);
        console.log(data)
        if(!data) {
            alert('数据填写不完全，请检查后提交');
            return false;
        } else {
            transferData('/api/student/updateStudent',data,function(data){
                alert('修改成功');
                $('.modal').slideUp();
                getTableData()
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

//获取学生数据
function getTableData(){
    transferData('/api/student/findByPage',{
        page:nowPage,
        size:pageSize,
    },function(data){
        allPage = Math.ceil(data.cont / pageSize);
        tableData = data.findByPage;
        renderTable(data.findByPage);
    })
}

//表格数据渲染
function renderTable(data){
    var str = '';
    data.forEach(function(item,index){
        //模板字符串拼接  生成html结构
        str += `<tr>
        <td>${item.sNo}</td>
        <td>${item.name}</td>
        <td>${item.sex == 0 ? '男': '女'}</td>
        <td>${new Date().getFullYear() - item.birth}</td>
        <td>${item.email}</td>
        <td>${item.phone}</td>
        <td>${item.address}</td>
        <td>
        <button class="btn edit">编辑</button>
        <button class="btn delete">删除</button>
        </td>
    </tr>`;
    });
    $('#table-body').html(str);
    //添加翻页
    $('#turn-page').page({
        allPageSize: allPageSize,
        nowPage: nowPage,
        pageSize: pageSize,
        //回调函数  用户返回的数据      
        changePageCb: function (page) {
            // 改变页码和每页条数的时候 要更新数据  
            nowPage = page.nowPage;
            pageSize = page.pageSize;
            getTableData();
            // 判断数据是取过滤数据还是取所有同学的翻页数据
            // var val = $('#search-word').val();
            // if (val) {
            //     filterData(val);
            // } else {
            //     getTableData();
            // }
        }
    })
}

//编辑表单数据回填
function renderEditForm(data){
    var form = $('#edit-form')[0];
    for(var prop in data){
        if(form[prop]){
            form[prop].value = data[prop];
        }
    }
}

//数据交互函数
function transferData (url,data,successCb){
    $.ajax({
        url:'https://open.duyiedu.com' + url,
        type:'get',
        data:$.extend({
            appkey:'luweihua_1571882657924',
        },data),
        dataType:'json',
        success:function(res){
            if(res.status == 'success'){
                successCb(res.data);
            }else{
                alert(res.msg);
            }
        }
    })
}
// // 搜索过滤数据
// function filterData(val) {
//     transferData('/api/student/searchStudent', {
//         sex: -1,
//         page: nowPage,
//         size: pageSize,
//         search: val,
//     }, function (res) {
//         console.log(res);
//         allPageSize = res.data.cont;
//         renderTable(res.data.searchList);
//     });
// }

bindEvent();
getTableData();