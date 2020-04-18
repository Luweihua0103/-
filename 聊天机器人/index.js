$("#submit").click(function(){
    var val = $('#inp').val();
    if(val){
        renderDom('mine',val)
        $('#inp').val('');
        $.ajax({
            type:'get',
            url:'http://temp.duyiedu.com/api/chat',
            data:{
                text:val
            },
            dataType:'json',
            success:function(res){
                console.log(res.text)
                renderDom('robot',res.text)
            }
        })
    }
})

$('#inp').on('keydown',function(e){
    if(e.keyCode == 13){
        $('#submit').trigger('click');
    }
})

function renderDom(who,msg){
    var str = '<div><div class="avitor"></div><div class="text">' + msg + '</div></div>';
    $(str).addClass(who).appendTo($('.content-box'));
    var contentHeight = $('.content-box')[0].scrollHeight;
    var viewHeight = $('.content-box')[0].clientHeight;
    $('.content-box').scrollTop(contentHeight - viewHeight);
}