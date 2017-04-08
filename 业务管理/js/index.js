$(function(){
    // 弹出层1的代码
    $('.checkbox').click(function(){
          $("input[name='checkbox1']").prop('checked',$(this).is(':checked'));
        });
        $("input[name='checkbox1']").click(function() {
          var j=($("input[name='checkbox1']:checked").length);
          var checked = j==$("input[name='checkbox1']").length
          $('.checkbox').prop('checked',checked);
          if($(this).is(':checked')){
            $(this).parents('li').css('background','#9ccc39');
            // var mytext=$(this).siblings('span').text();
            // $('.low_work_l ').text(mytext);
        }else{
            $(this).parents('li').css('background','none')
        }
          
        });
        $('.close_one').click(function(event) {
            $('.layer_one,.layer-bgone').hide();
        });
        $('.buttonn_one').click(function(event) {
             $('.layer_one,.layer-bgone').hide();
             $('.first_box').show();
             $('.second_box').hide();
                });

    // ==========弹出层代码2=============
    $('.close').click(function(event) {
        $('.layer,.layer-bg').hide();
    });
    $('.buttonn').click(function(event) {
         $('.layer,.layer-bg').hide();
         $('.first_box').hide();
         $('.second_box').show();
    });
    $('.big_tit span').click(function(event) {
         var myindex=$(this).index();
         $('.big_choose').eq(myindex).show().siblings('.big_choose').hide();
         $(this).addClass('choose_on').siblings().removeClass('choose_on');
    });
    // 选择VIP的盒子
    $('.show_box').click(function(event) {
        
            $('.hide_box').show();
    });
     $('.hi_box').click(function(event) {
        $('.hide_box').hide();
    });
     // 全选代码
      $('.checkbox_a').click(function(){
          $("input[name='checkbox_a']").prop('checked',$(this).is(':checked'));
        });
        $("input[name='checkbox_a']").click(function() {
          var j=($("input[name='checkbox_a']:checked").length);
          var checked = j==$("input[name='checkbox_a']").length
          $('.checkbox_a').prop('checked',checked);
        });
        
    // =========主页面代码===========
    $('.clc,.add_er').click(function(event) {
         $('.layer,.layer-bg').show();
    });
    $('.clc_one,.add_ll').click(function(event) {
         $('.layer_one,.layer-bgone').show();
    });
    $('.del').click(function(event) {
        $(this).parents('.li2').hide();
    });
    $('.leave_box a,.leave_box1 a').click(function(event) {
         $(this).addClass('noww').siblings().removeClass('noww')
    });
})