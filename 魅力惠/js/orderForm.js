$(function(){
	$('#head').load('headerSmall.html');
	$('#footer').load('footerAll.html');
	
	
	shopMain();
	
	small();
	
	
	
})

function small(){
	$('.scratchBtn').click(function(){
		$('.dizhi_k').css('display','block');
		
	});
	$('#btntext').click(function(){
		$('.dizhi_k').css('display','none');
	});
	$('#btnval').click(function(){
		
		var $username = getCookie('username');
		var $str1 = getCookie('username').substr(0,3);
		var $str2 = getCookie('username').substr(7,10);
		if($('#loc_province').val() == 1992 && $('#loc_city').val() == 2136 && $('#loc_town').val()){
			addCookie('sheng','山东省',7);
			addCookie('shi','济宁市',7);
			addCookie('xian','金乡县',7);
			$('#consigneeName > span').html($str1+'****'+$str2);
			$('#consigneeAddress').html(getCookie('sheng')+getCookie('shi')+getCookie('xian'));
			$('#consigneeConfirm > span').eq(1).html(getCookie('sheng')+getCookie('shi')+getCookie('xian'));
			addCookie('site',$('#consigneeName > span').html());
			
			$('.dizhi_k').css('display','none');
		}else{
			alert('亲~你家填茬了');
		}
//		alert($('#loc_province').val() + ' - ' + $('#loc_city').val() + ' - ' +  $('#loc_town').val()) ;
		showLocation();
//		window.location.reload();//刷新当前页面.
	});
}

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
			$str.innerHTML = '<td><div class="divGoods"><input name="chk_list" checked="checked" type="checkbox"></div><div class="divGoods"><p><a  href="###"><img src="'+proStr2[3]+'"></a></p></div><div class="divGoods"><p class="p1 car"><a  href="###"><font color="red"></font>'+proStr2[4]+'</a></p><p class="p2">规格：盒</p></div></td><td class="tag" valign="middle" align="center"><i>特卖</i><span>'+proStr2[0]+'</span><span class="gray">'+proStr2[2]+'</span></td><td valign="middle" align="center">'+proStr2[1]+'</td><td valign="middle" align="center"><span class="red" id="red'+i+'">￥'+parseFloat(proStr2[0]*proStr2[1])+'.00'+'</span></td>';
	//					alert($str.innerHTML)
			$('#tabListSettle0').append($str);
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
