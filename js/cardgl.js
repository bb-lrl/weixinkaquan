

$(document).ready(function(){
   $('.add_card').click(function(event) {
        $('.layer').fadeIn(100);        
        $('.layer-bg').fadeTo(100,0.5)  // 半透明
    });

    // 点击关闭按钮，关闭窗口，     点击背景也关闭  
    $('.close,.layer-bg,.layer_ft_no').click(function(event) {
        $('.layer,.layer-bg').hide();      
    });
        //回复笔输入默认行为
    // $(document).on("click",".inventory",function(){
    //     $(this).find(".house_storage").removeAttr("value");
    // });
    // $(".inventory").find(".house_storage").blur(function(){
    //     $(this).attr("value","80000");
    // });
    // 选择卡券类型跳转事件
    var flag=1;
       $('.layer_ft_yes').click(function(){
            flag=0;
            
            if( $('input:radio:checked').val()=='折扣券' && flag==0){
                
                flag=1;
            }else{
                $('.tanchu1,.tanchukuang1').css('display','none');
                $('.tanchu,.tanchukuang').css('display','block');
                flag=0;
            }
            });
// 点击黑笔弹出的效果
$('.pen').click(function(event) {
    $('body .num_box').hide();
    $(this).parent().siblings('.num_box').show();
});
$('.cancel').click(function(event) {
    $('.num_box').hide();
    
});

});