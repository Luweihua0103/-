$(function(){
	$('#head').load('header.html');
	$('#footer').load('footerAll.html');
	$('.sBox').each(function(index){
		$(this).click(function(){
			
			$(this).addClass('hover');
			$(this).siblings().removeClass('hover');
		})
	})
})
