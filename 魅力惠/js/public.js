


//广告效果
function close(){
	$('.top_adv > span').click(function(){
		$('.top_adv').css('display','none');
	})
}
//顶部效果
function topShow(){
	$('.my_mai').hover(function(){
		$(this).find('ul').stop().slideDown(200);
		$(this).find('i').addClass('m_hover');
	},function(){
		$(this).find('ul').stop().slideUp(200);
		$(this).find('i').removeClass('m_hover');
	});
	$('.phone_mai').hover(function(){
		$(this).find('img').stop().slideDown(200);
	},function(){
		$(this).find('img').stop().slideUp(200);
	});
}
//输入框点击内容消失加吸顶
function indexShow(){
	$('.search').hover(function(){
		$(this).css('border-color','#666');
	},function(){
		$(this).css('border-color','#CB1E00');
	})
	$('.search').focus(function(){
		if($(this).val() == '圣诞节送礼物咯~'){
			$(this).val('');
		}
	});
	$('.search').blur(function(){
		if($(this).val() == ''){
			$(this).val('圣诞节送礼物咯~');
		}
	});
	//输入框点击内容消失
	$('.search2').hover(function(){
		$(this).css('border-color','#666');
	},function(){
		$(this).css('border-color','#CB1E00');
	})
	$('.search2').focus(function(){
		if($(this).val() == '请输入商品名称,支持拼音搜索'){
			$(this).val('');
		}
	});
	$('.search2').blur(function(){
		if($(this).val() == ''){
			$(this).val('请输入商品名称,支持拼音搜索');
		}
	});
	//吸顶
	$(window).scroll(function(){
		var $top = $(this).scrollTop();
		if($top<1000){
				$('.ridge_k').slideUp(100);
			}else if($top>1000){
				$('.ridge_k').slideDown(100);
			}
	})
	
}
//二级菜单
function navTow(){
	$('#one').hover(function(){
		$('.tow').slideDown(200);
	},function(){
		$('.tow').slideUp(200);
	})
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