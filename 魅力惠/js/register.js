$(function(){
	$('#bottom').load('footer.html');
	
	telTest();//手机验证
	pswTest();//密码
	passwordTow();//密码验证
	yan();
	logo();
	
	
});
	var a=2;
	var b=2;
	var c=2;
	var d=2;
function pswTest(){
			var re = /^[a-z0-9_-]{6,18}$/;
			
			$('#password').blur(function(){
				if(re.test($('#password').val())){
					$('#password').siblings().html('可以使用');
					$('#password').siblings().css('color','yellowgreen');
					a=1;
				}else if($('#password').val() == ''){
					$('#password').siblings().html('密码不能为空 ');
					$('#password').siblings().css('color','#ff6b52');
					a=2;
				}else{
					$('#password').siblings().html('您输入的密码格式错误，请重新输入! ');
					$('#password').siblings().css('color','#ff6b52');
					a=2;
				}
			});
}
function telTest(){
	var re = /^1[3|5|8|7][0-9]{9}$/;
			$('#tel').blur(function(){
				if(re.test($('#tel').val())){
					$('#tel').siblings().html('可以使用');
					$('#tel').siblings().css('color','yellowgreen');
					b=1;
				}else if($('#tel').val() == ''){
					$('#tel').siblings().html('请输入手机号 ');
					$('#tel').siblings().css('color','#ff6b52');
					b=2;
				}else{
					$('#tel').siblings().html('您输入的手机号码格式错误，请重新输入! ');
					$('#tel').siblings().css('color','#ff6b52');
					b=2;
				}
			});	
}
function passwordTow(){
	$('#passwordTow').blur(function(){
		if($('#passwordTow').val() == $('#password').val()){
			$('#passwordTow').siblings().html('密码正确');
			$('#passwordTow').siblings().css('color','yellowgreen');
			c=1;
		}else if($('#tel').val() == ''){
			$('#passwordTow').siblings().html('请再次输入密码 ');
			$('#passwordTow').siblings().css('color','#ff6b52');
			c=2;
		}else{
			$('#passwordTow').siblings().html('您输入的密码两次不一致，请重新输入! ');
			$('#passwordTow').siblings().css('color','#ff6b52');
			c=2;
		}
	});
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

//提交验证
	function logo(){
		if(a==1&&b==1&&c==1&&d==1){
			var $username = $('#tel').val();
			addCookie('username',$username ,7);
			var $psw = $('#password').val();
			addCookie('psw',$psw,7);
			return true;
		}else{
			return false;
		}
		
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























	