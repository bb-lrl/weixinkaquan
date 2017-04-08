$(function(){
      
      $('.delete').click(function(){
        $(this).parent().parent().hide();
      });
      $('.door_add').click(function(event) {
          $('.layer_bg,.layer').show();
      });
      $('.close_btn').click(function(event) {
          $('.layer_bg,.layer').hide();
      });
      // 单选按钮的点击事件
      $('.click_btn1').click(function(event) {
          $('.door_add').show();
      });
      $('.click_btn2').click(function(event) {
          $('.door_add').hide();
      });

})