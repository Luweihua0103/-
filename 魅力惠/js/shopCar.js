$(function(){
	$('#head').load('headerSmall.html');
	$('#footer').load('footerAll.html');
	if(getCookie('judge')==0){
		var t = window.confirm('请登录');
		if(t){
			window.location='login.html';
		}else{
			window.location='index.html';
		}
	}else{
		getFoods();
	}
	
	
	
	$('#zong').html(parseInt($("#red"+0).html().substr(1,6))+parseInt($("#red"+1).html().substr(1,6)));
	$('#shopNum > em').html($("#red1").html());
	
	if($('.shopGoods').size()==0){
		$('.settleMain').css('display','none');
		$('.shopNone').css('display','block');
		$('.carEgDiv').css('display','none');
	}else{
		$('.settleMain').css('display','block');
		$('.shopNone').css('display','none');
		$('.carEgDiv').css('display','block');
	}
	
	$('#Submit1').click(function(){
		var $clear = window.confirm('确定要清空购物车？');
		if($clear){
			$('tbody > tr').remove();
			$('.settleMain').css('display','none');
			$('.shopNone').css('display','block');
			deleteCookie('foods1');
			deleteCookie('foods2');
		}
	});
	$('#clearCar0').click(function(){
		var $clear = window.confirm('确定放弃购买该商品？');
		if($clear){
			deleteCookie('food0');
//			$('.Goods'+0).remove();
			window.location.reload();
		}
		
	});
	$('#clearCar1').click(function(){
		var $clear = window.confirm('确定放弃购买该商品？');
		if($clear){
			deleteCookie('food1');
//			$('.Goods'+1).remove();
			window.location.reload();
		}
		
	});
	
	//全选
	$('#selectAall').click(function(){
		$(":checkbox").each(function() { this.checked = true; });
		if($('#selectAall').attr('checked')){
			$(":checkbox").attr("checked",false);
		}else{
			$(":checkbox").attr("checked",true);
		}
//   $("input[name='chk_list']").attr("checked",this.attr("checked"));
	});
//	$("#chk_all").click(function(){
//      $("input[name='chk_list']").attr("checked",$(this).attr("checked"));
//       
//      $("input[name='chk_list']").each(function() {
//          window.alert(this.value);
//      });
//  });
})
//添加购物车
function getFoods(){
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
				//document.write(getCookie("myp"+i)+"<br>")
//				}
//				alert(proStr[0]+"-<img src="+proStr[1]+" style='height:80px' />-"+
//				proStr[2]+"-"+proStr[3]+"-"+proStr[4]+"-"+proStr[5]+
//				"-<button onclick='add(0,"+i+","+proStr[5]+")'>-</button>"+
//				"<span id='proNum"+i+"'>"+proStr[6]+"</span>"+
//				"<button onclick='add(1,"+i+","+proStr[5]+")'>+</button><button onclick='deletePro("+i+")'>删除</button><br>")
				
			}

	}
	for(var i = 0;i<$proNUm;i++){
		var pro = getCookie("food"+i);
		var proStr = pro.split(",");
		var $tr = $('.shopGoods').html();
		var $str = document.createElement('tr');
		$str.className = 'shopGoods Goods'+i;
		$str.innerHTML = '<td><div class="divGoods"><input name="chk_list" checked="checked" type="checkbox"></div><div class="divGoods"><p><a  href="###"><img src="'+proStr[3]+'"></a></p></div><div class="divGoods"><p class="p1 car"><a  href="###"><font color="red"></font>'+proStr[4]+'</a></p><p class="p2">规格：盒</p></div></td><td class="tag" valign="middle" align="center"><i>特卖</i><span>￥'+proStr[0]+'</span><span class="gray">'+proStr[2]+'</span></td><td valign="middle" align="center"><a class="sum subt'+i+'" href="###" title="减一" onclick="add(0,'+i+')">-</a><input class="sum" id="proNum'+i+'" maxlength="4" style="width:30px" value="'+proStr[1]+'" type="text"><a class="sum add'+i+'" href="###" title="加一"onclick="add(1,'+i+')">+</a></td><td valign="middle" align="center"><span class="red" id="red'+i+'">￥'+parseFloat(proStr[0]*proStr[1])+'.00'+'</span></td><td valign="middle" align="center"><a id="clearCar'+i+'" href="###" >删除</a></td>';
//					alert($str.innerHTML)
		$('tbody').append($str);
	}
}
//type表示加减，id表示第几个产品，price表示该产品的价格
		function add (type,id) {
			var proNumber = $("#proNum"+id).val();
			var proSum = $("#red"+id).html();
			var pro = getCookie("food"+id);
			var proStr = pro.split(",");
			
			addCookie('sum'+id,$('#red'+id).html(),7);
//			addCookie('proNum0',$('#proNum0').html(),7);
			addCookie('sum'+id,$('#red'+id).html(),7);
//			addCookie('proNum0',$('#proNum1').html(),7);
//			alert(typeof proStr[0])
			//var proNumber = parseInt($("#proNum"+id).html());
			//alert("第"+id+"个的数量是"+proNumber+"数据类型为："+typeof proNumber);
			switch (type){
				case 0:
					if(proNumber>1){
						proNumber = proNumber - 1;
						$("#red"+id).html('￥'+parseInt(proStr[0])*proNumber+'.00');
						updateCookie('sum'+id,$("#red"+id).html(),7);//更新每个商品的总金额
						updateCookie('proNum'+id,proNumber,7);//更新每个商品的数量
//						for(var i=0; i<=id; i++){
//							$('#zong').html(parseInt($("#red1").html())+229);
//						}
						
						$('#zong').html(parseInt($("#red"+0).html().substr(1,6))+parseInt($("#red"+1).html().substr(1,6)));
						//alert("第"+id+"个可以减啦")
					}
					break;
				case 1:
					proNumber = proNumber - (-1);
					$("#red"+id).html('￥'+parseInt(proStr[0])*proNumber+'.00');
					updateCookie('sum'+id,$("#red"+id).html(),7);//更新每个商品的总金额
					updateCookie('proNum'+id,proNumber,7);//更新每个商品的数量
//					alert(getCookie('sum'))
					$('#zong').html(parseInt($("#red"+0).html().substr(1,6))+parseInt($("#red"+1).html().substr(1,6)));//总金额
					//alert("第"+id+"个可以加啦");
					break;
				default:
					break;
			}
			$("#proNum"+id).val(proNumber);
		}




