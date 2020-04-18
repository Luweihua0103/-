$(function(){
	$('#head').load('headerAll.html');
	$('#footer').load('footerAll.html');
	magnify();
	main();
	getTime('1',80000);//倒计时
	
})

//小效果
function main(){
	$('#subt').click(function(){
		if($('#Amount').val()>1){
			$('#Amount').val(parseInt($('#Amount').val())-1);
		}
	});
	$('#add').click(function(){
		$('#Amount').val(parseInt($('#Amount').val())+1);
	});
	$('#buyA').click(function(){
		var $change = window.confirm('确定添加到购物车？');
		if($change){
			$('#jia').css('display','block');
			$('#jia').animate({'left':'1100px','top':'200px'},700,function(){
				$('#jia').css('display','none');
				$('#jia').animate({'left':'600px','top':'500px'},0);
			});
			
			addShopCar($('.tr').html());//传入参数
		}
	});
	
	function addShopCar(id){
		var proImg = $('.jq_img').attr('src');
		var proPrice = $('#SGoodsPrice').html();
		var proNum = $("#Amount").val();
		var proFont = $('.goodsName > h1').html();
		var proBefore = $('#GoodsMallPrice').html();
		var str =  proPrice+","+proNum + ','+proBefore + ','+proImg + ',' + proFont;
		var food='food'+id;
		addCookie(food,str,7);
//		alert(str);
//		addCookie("xixi","haha",7);
	}
}

//放大镜
function magnify(){
	
	$('#spec-n1').hover(function(){
		$('.jqZoomPup').css('visibility','visible');
		$('.zoomdiv').css('display','block');
	},function(){
		$('.jqZoomPup').css('visibility','hidden');
		$('.zoomdiv').css('display','none');
	});
	//放大镜
	$(document).mousemove(function(event){
		var scrollT = $(window).scrollTop();
		var l = event.pageX - $('#spec-n1').offset().left - $('.jqZoomPup').width()/2;
		var t = event.pageY - $('#spec-n1').offset().top - $('.jqZoomPup').height()/2;
		if(l<0){l=0}
		else if(l> $('.mark').width() - $('.jqZoomPup').width()){
			l= $('.mark').width() - $('.jqZoomPup').width();
		}
		if(t<0){t=0}
		else if(t>$('.mark').height() - $('.jqZoomPup').height()){
			t=$('.mark').height() - $('.jqZoomPup').height();
		}
		$('.jqZoomPup').css('left',l +'px');
		$('.jqZoomPup').css('top',t +'px');
		$('.bigimg').css('left',-(2*l)+'px');
		$('.bigimg').css('top',-(2*t)+'px');
	});
	
	//tab切换
	var $arr = ['img/details/50.jpg','img/details/52.jpg'];
	$('.list-h > li').each(function(index){
			$(this).mouseover(function(){
			$('.jq_img').attr('src',$arr[index]);
			$('.bigimg').attr('src',$arr[index]);
//			alert(index)
			$(this).siblings().find('img').removeClass('imgHover');
			$(this).find('img').addClass('imgHover');
			
		})
	})
	
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
		
		
		time--;
		}, 1000);
}