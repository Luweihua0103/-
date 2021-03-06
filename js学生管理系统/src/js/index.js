//切换导航功能
//新增学生
//学生列表渲染
//编辑   删除
//编辑弹框： 展示  数据回填 点击遮罩层消失  编辑学生信息提交
// 左侧导航中的学生列表dom元素
var studentListDom = document.getElementsByClassName('menu-list')[0].getElementsByTagName('dd')[0];
// 保存表格数据
var tableData = [];
//编辑弹框
var modal = document.getElementsByClassName('modal')[0];
// 当前页码
var currentPage = 1;
// 每一页展示的 条数
var pageSize = 3;
// 总页数
var allPage = 1;
//绑定页面所有点击事件
function bindEvent() {
    var menuList = document.getElementsByClassName('menu-list')[0];
    menuList.addEventListener('click', function (e) {
        //切换导航样式
        var tagName = e.target.tagName;
        if (tagName == 'DD') {
            //切换导航样式
            var oDD = menuList.getElementsByTagName('dd');
            initStyle(oDD, 'active', e.target);
            //获取导航对应的右侧内容区展示的div的id
            var id = e.target.getAttribute('for');
            var rightContent = document.getElementById(id);
            //切换右侧内容区
            var contentActive = document.getElementsByClassName('content-active');
            initStyle(contentActive, 'content-active', rightContent);
            if (id == 'student-list') {
                getTableData();
            }
        }
    }, false);

    // 新增学生
    var addStudentBtn = document.getElementById('add-student-btn');
    addStudentBtn.addEventListener('click', function (e) {
        //取消form表单的默认刷新
        e.preventDefault();
        //校验表单
        var studentAddForm = document.getElementById('student-add-form');
        var resultData = formatForm(studentAddForm);
        //如果msg存在就弹框提醒 不存在就提交数据
        if (resultData.msg) {
            alert(resultData.msg);
            return false;
        } else {
            // 把学生数据提交给服务器
            transferData('/api/student/addStudent', resultData.data, function () {
                alert('添加成功');
                var studentAddForm = document.getElementById('student-add-form');
                studentAddForm.reset();
                studentListDom.click()
            });
        }
    }, false);

    // 编辑按钮点击事件
    var tableBody = document.getElementById('table-body');
    tableBody.addEventListener('click', function (e) {
        var tagName = e.target.tagName;
        if (tagName == 'BUTTON') {
            // 获取当前元素class类名  判断类名中是否存在edit类名  indexOf() 如果存在返回索引值  如果不存在返回-1 
            // isEdit 是一个布尔值  如果是编辑按钮则为true  如果不是则为false    e.target.classList获取的是类数组
            var isEdit = [].slice.call(e.target.classList, 0).indexOf('edit') > -1;
            if (isEdit) {
                // 编辑
                modal.style.display = 'block';
                // 当前点击的编辑按钮是第几个学生的 
                var index = e.target.getAttribute('data-index');
                // 渲染编辑表单数据
                renderEditForm(tableData[index]);
            } else {
                // 删除
                var index = e.target.getAttribute('data-index');
                transferData('/api/student/delBySno', {
                    sNo: tableData[index].sNo
                }, function () {
                    alert('已删除学生数据');
                    getTableData();
                });

            }

        }
    }, false);

    //编辑表单
    var editStudentBtn = document.getElementById('edit-student-btn');
    editStudentBtn.onclick = function (e) {
        e.preventDefault();
        // 校验编辑表单数据
        var editForm = document.getElementById('edit-form');
        var resultData = formatForm(editForm);
        if (resultData.msg) {
            alert(resultData.msg);
            return false;
        } else {
            //  把学生数据提交给服务器
            transferData('/api/student/updateStudent', resultData.data, function () {
                alert('修改成功');
                modal.style.display = 'none';
                getTableData();
            })
        }
    }
    var mask = document.getElementsByClassName('mask')[0];
    mask.onclick = function (e) {
        modal.style.display = 'none';
    }
//翻页按钮点击事件
    var prevBtn = document.getElementsByClassName('prev')[0];
    var nextBtn = document.getElementsByClassName('next')[0];
    prevBtn.onclick = function () {
        currentPage--;
        getTableData();
    }
    nextBtn.onclick = function () {
        currentPage++;
        getTableData();
    }


}
//修改导航和右侧内容区样式
function initStyle(listDom, className, targetDom) {
    for (var i = 0; i < listDom.length; i++) {
        listDom[i].classList.remove(className);
    }
    targetDom.classList.add(className);
}

//校验表单的函数 formateForm   检验数据是否填写 返回一个对象 全部填写则返回数据{data:{},msg{''}}
//如果没有全部填写或者不符合规范，返回{msg:{数据未填写完整·，请检查}}
function formatForm(form) {
    var result = {
        data: {},
        msg: '',
    };
    //获取form表单
    // var studentAddForm = document.getElementById('student-add-form');
    // console.log(studentAddForm.name.value);
    //获取input框数据
    var sNo = form.sNo.value;
    var name = form.name.value;
    var sex = form.sex.value;
    var email = form.email.value;
    var birth = form.birth.value;
    var phone = form.phone.value;
    var address = form.address.value;

    if (!name || !sex || !email || !sNo || !birth || !phone || !address) {
        result.msg = '数据没有写全，请检查数据';
    }
    else {
        result.data = {
            name: name,
            sex: sex,
            email: email,
            sNo: sNo,
            birth: birth,
            phone: phone,
            address: address
        }
    }
    return result;
}
// formateForm();

bindEvent();

//获取学生列表数据
function getTableData() {
    transferData('/api/student/findByPage', {
        page: currentPage,
        size: pageSize
    }, function (response) {
        var data = response.data.findByPage;
        renderTable(data);
        tableData = data;
        allPage = Math.ceil(response.data.cont / pageSize);
        renderPage();
    });
}
//渲染学生列表的函数
function renderTable(data) {
    var tBody = document.getElementById('table-body');
    var str = '';
    data.forEach(function (item, index) {
        str += ' <tr>\
        <td>' + item.sNo + '</td>\
        <td>' + item.name + '</td>\
        <td>' + (item.sex == 0 ? '男' : '女') + '</td>\
        <td>' + item.email + '</td>\
        <td>' + (new Date().getFullYear() - item.birth) + '</td>\
        <td>' + item.phone + '</td>\
        <td>' + item.address + '</td>\
        <td>\
          <button class="btn edit" data-index=' + index + '>编辑</button>\
          <button class="btn delete" data-index=' + index + '>删除</button>\
        </td>\
      </tr>';
    });
    tBody.innerHTML = str;
}

//渲染翻页

function renderPage() {
    //是否总是展示下一页
    var nextPage = document.getElementsByClassName('next')[0];
    if (currentPage >= allPage) {
        nextPage.style.display = 'none';
    } else {
        nextPage.style.display = 'inline-block';
    }
    //上一页按钮展示
    var prevPage = document.getElementsByClassName('prev')[0];
    if (currentPage > 1) {
        prevPage.style.display = 'inline-block';
    } else {
        prevPage.style.display = 'none';
    }
}


getTableData();

//编辑表单的数据回填
function renderEditForm(data) {
    var editForm = document.getElementById('edit-form');
    for (var prop in data) {
        if (editForm[prop]) {
            editForm[prop].value = data[prop];
        }
    }
    // // 学号不是input元素所以不能填充
    // var number = document.getElementById('number');
    // number.value = data.sNo;
}

//封装数据处理函数  减少代码冗余，对数据交互进行处理
function transferData(url, data, success) {
    var response = saveData('https://open.duyiedu.com' + url, Object.assign({
        appkey: 'luweihua_1571882657924',
    }, data));
    if (response.status == 'success') {
        success(response)
    } else {
        alert(response.msg);
    }
}

// 数据交互  
function saveData(url, param) {
    var result = null;
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (typeof param == 'string') {
        xhr.open('GET', url + '?' + param, false);
    } else if (typeof param == 'object') {
        var str = "";
        for (var prop in param) {
            str += prop + '=' + param[prop] + '&';
        }
        xhr.open('GET', url + '?' + str, false);
    } else {
        xhr.open('GET', url + '?' + param.toString(), false);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.responseText);
            }
        }
    }
    xhr.send();
    return result;
}