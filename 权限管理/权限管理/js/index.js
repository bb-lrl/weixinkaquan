 $(function(){
  // 全选代码
        $('.checkbox_a').click(function(){
          $(this).parents('.la').siblings('.bid_c').find('input').prop('checked',$(this).is(':checked'));
      });
        
        // 三个li共有
        $('.erji span').click(function(event) {
            var myindex=$(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $(this).parent().siblings('.bid_c').children().eq(myindex).show().siblings().hide();
        });
// 展开代码
        $('.main_titler').click(function(event) {
            $(this).parent('.main_title').siblings().toggleClass('db');
            $(this).parent('.main_title').toggleClass('now');
            $(this).toggleClass('tesu');
        });
        // 状态开关
          
            $('.ipt1').click(function(event) {
              var mylengthall=$(this).parents('.bid_c ').find("input:checked").length;
              var alllength=$(this).parents('.bid_c ').find("input").length; 
                  if(mylengthall>0&&mylengthall<alllength){
                      $(this).parents('.bid_c').siblings('.main_title').find('.qiehuan').children().animate({'left':34},0).css('background','#178A0A');
                      $(this).parents('.bid_c').siblings('.la').find('input').prop('checked',false)
                  }else if(mylengthall==alllength){
                    $(this).parents('.bid_c').siblings('.main_title').find('.qiehuan').children().animate({'left':34},0).css('background','#178A0A');
                    $(this).parents('.bid_c').siblings('.la').find('input').prop('checked',true)
                      
                  }else{
                    $(this).parents('.bid_c').siblings('.main_title').find('.qiehuan').children().animate({'left':0},0).css('background','#bfbfbf');
                    $(this).parents('.bid_c').siblings('.la').find('input').prop('checked',false)
                  }
            });
            
            $('.checkbox_a').click(function(){
              var inp_l=$(this).parents('.la').siblings('.bid_c').find('input').length;
              var inp_r=$(this).parents('.la').siblings('.bid_c').find('input:checked').length;
                if($(this).is(':checked')){

                  $(this).parents('.la').siblings('.main_title').find('.qiehuan').children().animate({'left':34},0).css('background','#178A0A')
                }else if(inp_r>0){
                  $(this).parents('.la').siblings('.main_title').find('.qiehuan').children().animate({'left':34},0).css('background','#178A0A')
                  
                }else{
                  $(this).parents('.la').siblings('.main_title').find('.qiehuan').children().animate({'left':0},0).css('background','#bfbfbf')
                }              
            });
            
      });