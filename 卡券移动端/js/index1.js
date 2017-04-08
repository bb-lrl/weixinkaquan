$(function(){
    // 点击头部的查找按钮事件
    $('.search_look').click(function(event) {
        var content=$('.search_ipt').val();
        if(content!==null&&content!==''&&content!==undefined){
            $('.step').hide();
            $('.record_btn').hide();
            $('.box_message').show();
        }else{
            $('.step').show();
            $('.record_btn').show();
            $('.box_message').hide();
        }
    });
    // 查看详情的切换事件
    $('.details_box').hide();
    $('.details_look').click(function(event) {
        $('.details_box').slideToggle();
        if($('.details_look').html()=='查看详情'){
            $('.details_look').html('收起详情')
        }else{
            $('.details_look').html('查看详情')
        }
    });
    // 确认核销的点击事件
    $('.countersign_btn').click(function(event) {
        $(this).css({'background':'#999'})
    });
    // rccord1的居中事件
    var my_height=$('.verifier_box').height();
    $('.verifier_people').height(my_height);
    $('.verifier_people').css('line-height',''+my_height+'px');
})