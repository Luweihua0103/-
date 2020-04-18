$(function(){
	$('#head').load('headerSmall.html');
	$('#footer').load('footer.html');
	$('#black').html('￥'+(parseInt(getCookie('sum0').split('￥')[1])+parseInt(getCookie('sum1').split('￥')[1]))+'.00');
	$('.red').html('￥'+(parseInt(getCookie('sum0').split('￥')[1])+parseInt(getCookie('sum1').split('￥')[1]))+'.00');
	shopMain();
})
function shopMain(){
//	alert('进入订单详情')
	
	var allCookie = queryAllCookie();
//	alert(allCookie);
	var proList = allCookie.split(";");
//	alert(proList[1]);
	var proListLength = proList.length;
	var $proNUm = 0;
	for(var i=0;i<proListLength;i++){
//		alert(proList[i]);
		if(proList[i].indexOf("food")!=-1){
			$proNUm ++;
			}
	}
	for(var i = 0;i<$proNUm;i++){
		var pro = getCookie("sum");
		var pro2 = getCookie('food'+i)
		var proStr = pro.split(",");
		var proStr2 = pro2.split(",");
		$("#orderTotalPrice").html(proStr2[0]);
		$("#orderPaymentPrice").html(proStr2[0]);
		var $str = document.createElement('tr');
			$str.className = 'newFood'+i;
			$str.innerHTML = '<td><div class="divGoods"><img src="'+proStr2[3]+'"></div></td><td class="tag" valign="middle" align="center"><i>特卖</i><span>'+proStr2[0]+'</span><span class="gray">'+proStr2[2]+'</span></td><td valign="middle" align="center">'+proStr2[1]+'</td><td valign="middle" align="center"><span class="red" id="red'+i+'">￥'+parseFloat(proStr2[0]*proStr2[1])+'.00'+'</span></td>';
	//					alert($str.innerHTML)
			$('#201512282133357910').append($str);
			$('#red'+i).html(getCookie('sum'+i));
			$('.newFood'+i+' > td').eq(2).html(getCookie('proNum'+i));
			$('#marketTotal').html('￥'+(parseInt(getCookie('sum0').split('￥')[1])+parseInt(getCookie('sum1').split('￥')[1])+20)+'.00');
			$('#orderTotalPrice').html('￥'+(parseInt(getCookie('sum0').split('￥')[1])+parseInt(getCookie('sum1').split('￥')[1])+28)+'.00');
			$('#orderPaymentPrice').html('￥'+(parseInt(getCookie('sum0').split('￥')[1])+parseInt(getCookie('sum1').split('￥')[1]))+'.00');
	}
	
	
	
//	
//	$('.newFood .divGoods > p > a > img').attr('src',proStr[3]);
//	$('.newFood .p1 > a').html(proStr[4]);
//	$('.newFood .tag > span').eq(0).html(proStr[0]);
//	$('.newFood .gray').html(proStr[2]);
//	$('.newFood #num1').html(proStr[1]);
//	$('.newFood #sum1').html('￥'+proStr[0]*proStr[1]+'.00');
//	$('#marketTotal').html('￥'+parseInt(proStr[0]*proStr[1]+20)+'.00');
//	$('#orderTotalPrice').html('￥'+proStr[0]*proStr[1]+'.00');
//	$('#orderPaymentPrice').html('￥'+proStr[0]*proStr[1]+'.00');
	
}