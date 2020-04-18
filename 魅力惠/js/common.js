/*检测是否有cookie存在*/
function checkCookie(){
	var c = document.cookie.indexOf(nameOfCookie);
	console.log(c)
	if(c!=-1){
		 return true;
	}else{
		return false;
	}
}
/*添加一条cookie数据*/
function addCookie(name,value,time){
	/*escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。*/
	var str = name+"="+escape(value);
	if(time>0){//time为0时不设定过期事件，浏览器关闭时cookie自动消失
		/*指定了coolie的生存期，默认情况下coolie是暂时存在的，
		 * 他们存储的值只在浏览器会话期间存在，
		 * 当用户推出浏览器后这些值也会丢失，
		 * 如果想让cookie存在一段时间，
		 * 就要为expires属性设置为未来的一个过期日期。
		 * 现在已经被max-age属性所取代，
		 * max-age用秒来设置cookie的生存期。*/
		var date = new Date();
		var ms = time*3600*1000;
		date.setTime(date.getTime()+ms);
		str += ";expires="+date.toGMTString(); 
		document.cookie = str;
	}
}
/*删除一条数据*/
function deleteCookie(name){
	alert("lalalal")
	//为了删除指定名称的cookie，
	//可以将其过期时间设定为一个过去的时间
	var date = new Date();
	date.setTime(date.getTime()-100000);
	document.cookie = name+"=;expires="+date.toGMTString();
}
/*更新一条数据*/
function updateCookie(name,value){
	//为了删除指定名称的cookie，
	//可以将其过期时间设定为一个过去的时间
	var date = new Date();
	var ms = time*3600*1000;
	date.setTime(date.getTime()+ms);
	document.cookie = name+"="+value;
}

/*查询所有cookie数据*/
function queryAllCookie(){
	var str = document.cookie;
   if(str == ""){
    str = "没有保存任何cookie";
   }
   alert(str);
}
