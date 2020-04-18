$(function(){
	$('#bottom').load('footer.html');
//	alert(loginShow());
	var d=0;
	yan();
	
});

function loginShow(){
		
		var $username = getCookie('username');
		var $psw = getCookie('psw');
		if($('#user').val() == $username&& $('#psw').val() == $psw && $('.code_yan').val() == $('.code_bg').html()){
			$('#user').siblings().not('.lo_user').html('');
			updateCookie('judge',1);
			return true;
		}else{
			$('#user').siblings().not('.lo_user').html('您输入的帐号或密码有误，请重新输入! ');
			$('#user').siblings().not('.lo_user').css('color','#ff6b52');
			updateCookie('judge',0);
			return false;
		}
		
	}

function yan(){
	$('.code_change').click(function(){
		$('.code_bg').html(getCode(4));
	});
	$('.code_yan').blur(function(){
		if($('.code_yan').val() == $('.code_bg').html()){
			$('.code_txt').html('验证码正确');
			$('.code_txt').css('color','yellowgreen');
			d=1;
		}else if($('#tel').val() == ''){
			$('.code_txt').html('验证码不能为空 ');
			$('.code_txt').css('color','#ff6b52');
			d=2;
		}else{
			$('.code_txt').html('您输入的验证码有误，请重新输入! ');
			$('.code_txt').css('color','#ff6b52');
			d=2;
		}
	});
}
//获取验证码
			function getCode(n){
					var arr = ['a','b','c','d','e','1','2','3','4','5','6'];
					var str = '';
					for(var i=0; i<n; i++){
						var math1 = parseInt(Math.random()*100);
						while(math1>10){
							math1 = parseInt(Math.random()*100);
						}
						str+=arr[math1];
					}
					return str;
			}

