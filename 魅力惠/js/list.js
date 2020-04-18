$(function(){
	sortShow();
	mainShow();
});


function mainShow(){
	$('#divGoodsList > ul > li').each(function(index){
		$(this).hover(function(){
			$('.btn').eq(index).css('display','block');
		},function(){
			$('.btn').eq(index).css('display','none');
		});
	});
	$('.sClik').each(function(index){
		$(this).on('click',function(){
			if($('.navBox').eq(index).css('display') == 'none'){
				$('.navBox').eq(index).css('display','block');
//				alert($(this).css('background'))
				$('.sClik').eq(index).css('background-position', '0px 0px');
			}else{
				$('.navBox').eq(index).css('display','none');
				$('.sClik').eq(index).css('background-position', '0px -16px');
			}
		});
	});
	
	
	//轮播
	var $span = 0;
	$('.arrowLeft').on('click',function(){
		$span--;
		if($span<0){
			$span=3;
			$('.goodsBox > ul').css('left',-(4*900)+'px');
			$('.goodsBox > ul').stop().animate({'left':-($span*900)+'px'},500);
		}
		$('.goodsBox > ul').stop().animate({'left':-($span*900)+'px'},500);
	});
	$('.arrowRight').on('click',function(){
		$span++;
		if($span>=4){
			$span=1;
			$('.goodsBox > ul').css('left','0px');
		}
		$('.goodsBox > ul').stop().animate({'left':-($span*900)+'px'},500);
	});
}


function sortShow(){
	var arr = [];
	var oBtn = document.getElementById('small');
	var oBtn1 = document.getElementById('big');
	var oMatter = document.getElementById('divGoodsList');
	var oM = oMatter.getElementsByTagName('ul')[0];
	var aDl = oM.getElementsByTagName('li');
	var aClass = document.getElementsByClassName('btn');
//	alert(aDl[11].children[2].children[0].innerHTML);
	oBtn.onclick = function(){
		arr = [];
		//把Dl遍历并放进arr数组
		for(var i=0; i<aDl.length; i++){
			arr.push(aDl[i]);
		}
		//对数组进行排序
		sortX();
		sortM();
//		alert(arr)
	};
	oBtn1.onclick = function(){
		arr = [];
		//把Dl遍历并放进arr数组
		for(var i=0; i<aDl.length; i++){
			arr.push(aDl[i]);
		}
		//对数组进行排序
		sortD();
		sortM();
	};
	
//从大到小排序
	function sortD(){
		arr.sort(function(num1,num2){
			return parseInt(num2.children[2].children[0].innerHTML)-parseInt(num1.children[2].children[0].innerHTML)
		});
	}
	//从小到大排序
	function sortX(){
		arr.sort(function(num1,num2){
			return parseInt(num1.children[2].children[0].innerHTML)-parseInt(num2.children[2].children[0].innerHTML)
		});
	}
	//删除添加元素
	function sortM(){
		//设定长度，遍历按照0下标进行删除
		var l = aDl.length;
		for(var j=0; j<l; j++){
			oM.removeChild(aDl[0]);
		}
//		alert(arr[1].children[0].innerHTML)
		//创建对象放进Dl
		for(var n=0; n<l; n++){
			var oDl = document.createElement('li');
			
			var oDa = document.createElement('a');
				oDa.innerHTML = arr[n].children[0].innerHTML;
				oDa.className = 'pica';
				oDl.appendChild(oDa);
			var oDp = document.createElement('p');
				oDp.innerHTML = arr[n].children[1].innerHTML;
				oDl.appendChild(oDp);
			var oDs = document.createElement('strong');
				oDs.innerHTML = arr[n].children[2].innerHTML;
				oDl.appendChild(oDs);
			var oDs2 = document.createElement('span');
				oDs2.innerHTML = arr[n].children[3].innerHTML;
				oDl.appendChild(oDs2);
			var oDd = document.createElement('div');
				oDd.innerHTML = arr[n].children[4].innerHTML;
				oDd.className='ass';
				oDl.appendChild(oDd);
			var oDd2 = document.createElement('div');
				oDd2.className = 'btn';
				oDd2.innerHTML = arr[n].children[5].innerHTML;
				oDl.appendChild(oDd2);
			
			oM.appendChild(oDl);
		$('#divGoodsList > ul > li').each(function(index){
		$(this).hover(function(){
			$('.btn').eq(index).css('display','block');
		},function(){
			$('.btn').eq(index).css('display','none');
		});
		});
//			for(var i=0;i<aDl.length;i++){
//				aDl[i].index = i;
//				aClass[i].index = i;
//				aDl[i].onmouseover = function(){
//					aClass[this.index].style.display = 'block';
//				}
//				aDl[i].onmouseout = function(){
//					aClass[this.index].style.display = 'none';
//				}
//			}
		}
	}
}
