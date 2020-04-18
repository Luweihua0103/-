$(function(){
	$('#head').load('header.html');
	$('#footer').load('footerAll.html');
	pswTest();
//	test();
	
	var $psw = getCookie('psw');
//	alert($psw)
	$('#Passwordold').blur(function(){
			if($('#Passwordold').val()!=$psw){
				$('#PasswordoldTip').html('密码错误');
			}else{
				$('#PasswordoldTip').html('');
			}
	});
	$('#Passwordold').blur(function(){
			if($('#Passwordold').val()!=$psw){
				$('#PasswordoldTip').html('密码错误');
			}else{
				$('#PasswordoldTip').html('');
			}
	});
	
});

var a=2;
var b=2;
	
	function pswTest(){
		var re = /^[a-z0-9_-]{6,18}$/;
		$('#MUserInfo_LogonPwd').blur(function(){
			if(re.test($('#MUserInfo_LogonPwd').val())){
				$('#MUserInfo_LogonPwdTip').html('');
				a=1;
			}else if($('#password').val() == ''){
				$('#MUserInfo_LogonPwdTip').html('密码不能为空 ');
				a=2;
			}else{
				$('#MUserInfo_LogonPwdTip').html('您输入的密码格式错误，请重新输入! ');
				a=2;
			}
		});
		$('#pwd2').blur(function(){
			
			if($('#pwd2').val()!=$('#MUserInfo_LogonPwd').val()){
				$('#pwd2Tip').html('您输入的密码两次不一样');
				b=2;
			}else{
				
				b=1;
				$('#pwd2Tip').html('');
			}
			
		});
		
	}
	function test(){
		if(a==1&&b==1){
			updateCookie('psw',$('#MUserInfo_LogonPwd').val(),7);
			return true;
			
		}else{
			return false;
		}
	}
