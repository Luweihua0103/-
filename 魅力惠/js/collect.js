$(function(){
	$('#head').load('header.html');
	$('#footer').load('footerAll.html');
	
	
	$('.scList').hover(function(){
		$('.scBtnDiv').css('display','block');
	},function(){
		$('.scBtnDiv').css('display','none');
	});
	$('.scList > div > .close1').each(function(index){
		$(this).click(function(){
		var $if = window.confirm('确定要删除本收藏品吗?');
		if($if){
			$('.scBox').eq(index).find('.scList').remove();
		}
	});
	});
	
})