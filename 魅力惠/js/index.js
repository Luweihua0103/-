$(function(){
	close();//关闭广告
	topShow();//顶部效果
	indexShow();//搜索框效果
	navShow();//三级菜单
	banShow();//banner图
	pointShow();//整点抢
	
//	var $date = getNowDate();
	getTime('1',getNowDate());//倒计时
	getTime('2',80000);//倒计时
	bargain();//特价图片
	fShow();//楼梯轮播
	danShow();//晒单区
	loutiShow();//楼梯效果
	carNavShow();
	manyShow();
	addCookie('judge',0);
	
	
	
})


//小效果
function manyShow(){
	var $username = getCookie('username');
	var $str1 = getCookie('username').substr(0,3);
	var $str2 = getCookie('username').substr(7,10);
	
	if(getCookie('judge') == 1){
		$('.t_login').html('<i>'+$str1+'****'+$str2+'</i><em id="exit" >退出</em>');
		$('.t_login').attr('href','###');
	}else{
		$('.t_login').html('<i>请登录</i>');
	}
	
	$("#exit").on("click",function(){
		updateCookie("judge",0);
		window.location.reload();//刷新当前页面.
	});
	
}


//侧边栏
function carNavShow(){
	$('.aCar').not('.payto_a').hover(function(){
		$(this).find('a').css('display','block');
		$(this).find('a').stop().animate({'width':'100px'},200);
	},function(){
		$(this).find('a').stop().animate({'width':'0px'},200);
		$(this).find('a').css('display','none');
	});
	$('.payto_a').hover(function(){
		$(this).find('a').css('display','block');
		$(this).find('a').stop().animate({'width':'240px'},200);
	},function(){
		$(this).find('a').stop().animate({'width':'0px'},200);
		$(this).find('a').css('display','none');
	});
}

//截取页面当前小时
function getNowDate(){
	var oDate = new Date();
//	alert($('.point_nav_time > .p_n_active + li > h2').html())
	var $str = 0;
	if(oDate.getHours()>=12&&oDate.getHours()<14){
		$str = 14;
	}else{
		$str = $('.point_nav_time > .p_n_active + li > h2').html().substr(0,2);
	}
	
//	alert($str);
	oDate.getHours();
	return (Math.abs(($str-oDate.getHours())*60)-(oDate.getMinutes()))*60-oDate.getSeconds();
}
//banner图
function banShow(){
	var $bOff = 1;
	var $span = 0;
	function show(){
		$bOff = 2;
		$span++;
		if($span == $('.ban > img').size()){
			$span = 0;
		}
		$('.ban > img').eq($span).stop().animate({'display':'block','top':'0px','left':'0px','width':'810px','height':'490px'},1000,function(){
			$('.ban > img').eq($span).siblings().stop().animate({ 'display':'none','top':'-20px','left':'-20px','width':'850px','height':'530px'},0);
			$bOff = 1;
		});
		$('.ban > img').eq($span).siblings().not('.index').stop().fadeOut(500);
		$('.index > a').eq($span).siblings().stop().animate({'bottom':'0px'},100);
		$('.index > a').eq($span).stop().animate({'bottom':'10px'},500);
		$('.ban_display > div').eq($span).stop().fadeIn(500);
		$('.ban_display > div').eq($span).siblings().stop().fadeOut(500);
	}
	var $timer = setInterval(show,3000);
	//划过显示
	$('.index > a').each(function(index){
		$(this).mouseover(function(){
			
			if($bOff == 1){
				clearInterval($timer);
				$span = index-1;
				show();
				$timer = setInterval(show,3000);
			}
			
		})
	})
	//划过停止滚动
//	$('.ban').hover(
//		function(){
//			clearInterval($timer);
//	},
//		function(){
//			$timer = setInterval(show,3000);
//		
//	})
}
//三级菜单
function navShow(){
	$('.nav2 > li').each(function(){
		$(this).mouseover(function(){
			$(this).find('a').addClass('n_active');
			$(this).siblings().find('a').removeClass('n_active');
		});
	});
	$('.tow > li').each(function(index){
		$(this).hover(
			function(){
				$('.three').eq(index).fadeIn(0);
				$(this).find('a').stop().animate({'paddingLeft':'16px'},200);
			},
			function(){
				$('.three').eq(index).fadeOut(0);
				$(this).find('a').stop().animate({'paddingLeft':'10px'},200);
			}
		)
		$('.three').eq(index).hover(
			function(){
				$('.three').eq(index).fadeIn(0);
			},
			function(){
				$('.three').eq(index).fadeOut(0);
			}
		)
	});
}


//整点抢
function pointShow(){
	var $index = null;
	var oDate = new Date();
//	alert(oDate)
	var oHours = oDate.getHours();
	if(oHours >= 14 && oHours < 16){
		$('.point_nav_time > li').eq(0).siblings().removeClass('p_n_active');
		$('.point_nav_time > li').eq(0).addClass('p_n_active');
		$('.point_goods_ul').eq(0).css('display','block');
		$('.point_goods_ul').eq(0).siblings().css('display','none');
	}else if(oHours >= 16 && oHours < 18){
		$('.point_nav_time > li').eq(1).siblings().removeClass('p_n_active');
		$('.point_nav_time > li').eq(1).addClass('p_n_active');
		$('.point_nav_time > li > em').eq(1).text('抢购进行中');
		$('.point_nav_time > li').eq(1).siblings().find('em').text('即将开抢');
		$('.point_goods_ul').eq(1).css('display','block');
		$('.point_goods_ul').eq(1).siblings().css('display','none');
	}else if(oHours >= 18 && oHours < 20){
		$('.point_nav_time > li').eq(2).siblings().removeClass('p_n_active');
		$('.point_nav_time > li').eq(2).addClass('p_n_active');
		$('.point_nav_time > li > em').eq(2).text('抢购进行中');
		$('.point_nav_time > li').eq(2).siblings().find('em').text('即将开抢');
		$('.point_goods_ul').eq(2).css('display','block');
		$('.point_goods_ul').eq(2).siblings().css('display','none');
	}
	else if(oHours >= 20 && oHours < 22){
		$('.point_nav_time > li').eq(3).siblings().removeClass('p_n_active');
		$('.point_nav_time > li').eq(3).addClass('p_n_active');
		$('.point_nav_time > li > em').eq(3).text('抢购进行中');
		$('.point_nav_time > li').eq(3).siblings().find('em').text('即将开抢');
		$('.point_goods_ul').eq(3).css('display','block');
		$('.point_goods_ul').eq(3).siblings().css('display','none');
	}
	else if(oHours >= 22 && oHours < 24){
		$('.point_nav_time > li').eq(4).siblings().removeClass('p_n_active');
		$('.point_nav_time > li').eq(4).addClass('p_n_active');
		$('.point_nav_time > li > em').eq(4).text('抢购进行中');
		$('.point_nav_time > li').eq(4).siblings().find('em').text('即将开抢');
		$('.point_goods_ul').eq(4).css('display','block');
		$('.point_goods_ul').eq(4).siblings().css('display','none');
	}else if(oHours >= 0 && oHours < 8){
		$('.point_nav_time > li').eq(5).siblings().removeClass('p_n_active');
		$('.point_nav_time > li').eq(5).addClass('p_n_active');
		$('.point_nav_time > li > em').eq(5).text('抢购进行中');
		$('.point_nav_time > li').eq(5).siblings().find('em').text('即将开抢');
		$('.point_goods_ul').eq(5).css('display','block');
		$('.point_goods_ul').eq(5).siblings().css('display','none');
	}else if(oHours >= 8 && oHours < 10){
		$('.point_nav_time > li').eq(6).siblings().removeClass('p_n_active');
		$('.point_nav_time > li').eq(6).addClass('p_n_active');
		$('.point_nav_time > li > em').eq(6).text('抢购进行中');
		$('.point_nav_time > li').eq(6).siblings().find('em').text('即将开抢');
		$('.point_goods_ul').eq(6).css('display','block');
		$('.point_goods_ul').eq(6).siblings().css('display','none');
	}else if(oHours >= 10 && oHours < 12){
		$('.point_nav_time > li').eq(7).siblings().removeClass('p_n_active');
		$('.point_nav_time > li').eq(7).addClass('p_n_active');
		$('.point_nav_time > li > em').eq(7).text('抢购进行中');
		$('.point_nav_time > li').eq(7).siblings().find('em').text('即将开抢');
		$('.point_goods_ul').eq(7).css('display','block');
		$('.point_goods_ul').eq(7).siblings().css('display','none');
	}else if(oHours >= 12 && oHours < 14){
		$('.point_nav_time > li').eq(8).siblings().removeClass('p_n_active');
		$('.point_nav_time > li').eq(8).addClass('p_n_active');
		$('.point_nav_time > li > em').eq(8).text('抢购进行中');
		$('.point_nav_time > li').eq(8).siblings().find('em').text('即将开抢');
		$('.point_goods_ul').eq(8).css('display','block');
		$('.point_goods_ul').eq(8).siblings().css('display','none');
	}
	
	$('.point_nav_time > li').each(function(index){
		$(this).click(function(){
			$index = index;
			$(this).siblings().removeClass('p_n_active');
			$(this).addClass('p_n_active');
			$('.point_goods_ul').eq(index).css('display','block');
			$('.point_goods_ul').eq(index).siblings().css('display','none');
		});
	});
	var $num = 0;
	$('#point_left').click(function(){
		$num--;
		if($num<0){
			$num = 1;
		}
		$('.point_goods_ul').eq($index).css('left',-($num*1190)+'px');
	});
	$('#point_right').click(function(){
		$num++;
		if($num>1){
			$num = 0;
		}
		$('.point_goods_ul').eq($index).css('left',-($num*1190)+'px');
	});
	
}
//倒计时
function getTime(id,time){
		window.setInterval(function(){
		var day=0,
			hour=0,
			minute=0,
			second=0,//时间默认值	
			mill = 0,
			span = 0;
		if(time > 0){
			day = Math.floor(time / (60 * 60 * 24));
			hour = Math.floor(time / (60 * 60)) - (day * 24);
			minute = Math.floor(time / 60) - (day * 24 * 60) - (hour * 60);
			second = Math.floor(time) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
		}
		
		if (hour <= 9) hour = '0' + hour;
		if (minute <= 9) minute = '0' + minute;
		if (second <= 9) second = '0' + second;
		$('.day'+id).html(day+'天');
		$('.day'+id).html(hour+'时');
		$('.hour'+id).html(minute+'分');
		$('.second'+id).html(second+'秒');
		if(id == 1){
			var hour1 = hour.substr(0,1);
			var hour2 = hour.substr(1,2);
			var min = minute.toString();
			var minute1 = min.substr(0,1);
			var minute2 = min.substr(1,2);
			var sec = second.toString();
			var second1 = sec.substr(0,1);
			var second2 = sec.substr(1,2);
			$('.hour'+id).html(hour1);
			$('.hour2'+id).html(hour2);
			$('.minute'+id).html(minute1);
			$('.minute2'+id).html(minute2);
			$('.second'+id).html(second1);
			$('.second2'+id).html(second2);
			$('.bargain_limit > h3'+'id')
		}
		
		time--;
		}, 1000);
}

//天天特价
function bargain(){
	$('.bargain_goods > li').each(function(index){
		$(this).hover(function(){
			$(this).find('img').stop().animate({'width':'310px','height':'250px','top':'-10px','left':'-10px'},500);
		},function(){
			$(this).find('img').stop().animate({'width':'290px','height':'230px','top':'0px','left':'0px'},500);
		});
	});
}

//F楼梯轮播图
function fShow(){
	var $span = -1;
	var $timer = setInterval(show,3000);
	function show(){
		$span++;
		if($span >= 3){
			$('.milk_div > ul').css('left','0');
			$span = 1;
		}
		$('.milk_div > ul').stop().animate({'left':(-90*$span)+'px'});
	};
	$('.milk_prev').click(function(){
		clearInterval($timer);
		$span--;
		if($span < 0){
			$('.milk_div > ul').css('left','-180px');
			$span = 1;
		}
		$('.milk_div > ul').stop().animate({'left':(-90*$span)+'px'});
		$timer = setInterval(show,3000);
	});
	$('.milk_next').click(function(){
		clearInterval($timer);
		show();
		$timer = setInterval(show,3000);
	});
}
//晒单区
function danShow(){
	var $span = -1;
	var $timer = setInterval(show,3000);
	function show(){
		$span++;
		if($span >= 3){
			$('.recom_div > ul').css('left','0');
			$span = 1;
		}
		$('.recom_div > ul').stop().animate({'left':(-230*$span)+'px'});
	};
	$('.recom_prev').click(function(){
		clearInterval($timer);
		$span--;
		if($span < 0){
			$('.recom_div > ul').css('left','-460px');
			$span = 1;
		}
		$('.recom_div > ul').stop().animate({'left':(-230*$span)+'px'});
		$timer = setInterval(show,3000);
	});
	$('.recom_next').click(function(){
		clearInterval($timer);
		show();
		$timer = setInterval(show,3000);
	});
}

//楼梯效果
function loutiShow(){
	var $mark = 1;
	$('.stair > li').not('.s_last').each(function(index){
		$(this).click(function(){
			$mark = 2;
			$(this).find('span').addClass('s_active');
			$(this).siblings().find('span').removeClass('s_active');
			//计算距离
			$l = $('.milk').eq(index).offset().top;
			$('body,html').stop().animate({'scrollTop':$l},500,function(){
				$mark = 1;
			});
		});
	});
	//鼠标滚动
	$(window).scroll(function(){
		
		if($mark == 1){
			//1.获取滚动条的值scrollTop
			$top = $(this).scrollTop();
//			console.log($top);
			//显示、隐藏
			if($top<$('.milk').eq(0).offset().top){
				$('.stair').fadeOut(100);
			}else if($top>$('.milk').eq(0).offset().top){
				$('.stair').fadeIn(100);
			}
			//滚动变样式
			$('.milk').each(function(index){
				if($top < $(this).offset().top + $(this).height()){
					$('.stair > li > span').removeClass('s_active');
					$('.stair > li > span').eq(index).addClass('s_active');
					return false;
				}
			})
		}
	});
	//回到顶部
			$('.backTop').click(function(){
				$mark = 2;
				$('html,body').animate({'scrollTop':'0'},500,function(){
					$mark = 1;
				})
			})
}






















