/**
 * 在网络请求中，请求分为两大类：简单请求、非简单请求
 * 简单请求：
 *  1、请求方式只能是：GET POST HEAD
 *                  get:一般是用来获取数据的。特点：数据会拼接在url地址里
 *                  post：一般是用来存储数据的，特点:数据会保存在请求体当中，而不会拼接在地址中
 *                  head：一般用来预查数据（判断请求是否正确）特点：不传递数据
 *  2、HTTP的请求头信息内容不能超出以下几个字段：
 *          content-Type的值只能用：application/x-www-form-urlcoded,multipart/form-data,text/plain
 *          Accent-language
 *             Accept
 *             Content-language
 * 非简单请求：不是简单请求的请求
 *              content-type:application/json
 * 
 * 
 * 
 * 我要发送信息给B这个人
 * 请求当中所需要保存的信息：
 *  1. 要发出去的信息   （请求数据） 
 *      2. 发给谁（B）      （请求地址）
 *      3. 当前信息如何发出去  是放在信封里  还是直接发  （请求方式）
 *      4. 保存响应的状态 状态码   （响应的状态码）
 *      5. B给我的回复信息   （相应数据）
 *      XMLHTTPRequest 
 *  报文： 就是一种传递的格式 
 *      请求报文： 传递的是发出请求一方的所有信息
 *      响应报文： 传递的是响应一方传递的所有信息
 * 
 * 
 * 
 * @param {*} method 请求方式
 * @param {*} url 请求地址
 * @param {*} data 请求数据
 * @param {*} cb 成功拿到响应数据的回调函数
 */
function ajax(method,url,data,cb){
    //存储一次请求中的所有信息，包括请求信息和响应信息
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest;
    }else{ 
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //监听响应事件
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                cb(JSON.parse(xhr.responseText));
            }else{
                console.log('error');
            }
        }
    }

    if(method == 'GET'){
        //建立连接
        xhr.open(method,url + '?' + data,true)
        //发送信息
        xhr.send();
    }else{ ///post
        xhr.open(method,data,true);
        //在数据传递过程中，编码格式为：key = value&key1 = vall;
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        //发送信息
        xhr.send(data);
    }

}