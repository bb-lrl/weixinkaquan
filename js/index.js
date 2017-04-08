/* 
* @Author: Marte
* @Date:   2016-01-08 10:50:06
* @Last Modified by:   Marte
* @Last Modified time: 2016-01-27 14:58:36
*/

$(document).ready(function(){
    $(document).on("click",".first_manage_btn",function(){
        $(".first_page").hide();
        $(".cardgl_box").show();
    })
    //卡卷管理添加页面js
   $('.cardgl_add_card').click(function(event) {
        $('.cardgl_layer').fadeIn(100);        
        $('.cardgl_layer-bg').fadeTo(100,0.5)  // 半透明
    });
//点击返回微信卡卷
    $(".wx_kajuan").click(function(){
        $(".first_page").show();
        $(".cardgl_box").hide();
    });

    // 点击关闭按钮，关闭窗口，     点击背景也关闭  
    // 用了并集选择器
    $('.cardgl_close,.cardgl_layer-bg').click(function(event) {
        $('.cardgl_layer,.cardgl_layer-bg').hide();      
    });
    //回复笔输入默认行为
    $(document).on("click",".cardgl_inventory",function(){
        $(this).find(".cardgl_house_storage").removeAttr("value");
    });
    $(".cardgl_inventory").find(".cardgl_house_storage").blur(function(){
        $(this).attr("value","80000");
    });
    //卡券投放弹出框
    $('.dl2').click(function(){
        $('.tanchu,.tanchukuang').css('display','block')
    })
    //点击门店的跳转
 
       var flag=1;
       $('.queding').click(function(){
            flag=0;
            
            if( $('input:radio:checked').val()=='门店' && flag==0){
                $('.tanchu1,.tanchukuang1').css('display','block');
                $('.tanchu,.tanchukuang').css('display','none');
                flag=1;
            }else{
                $('.tanchu1,.tanchukuang1').css('display','none');
                $('.tanchu,.tanchukuang').css('display','block');
                flag=0;
            }
            });

           
    //点击x
    $('.tanchukuang .wronger,.tanchukuang .quxiao').click(function(){
        $(this).parent().parent().hide();
        $(this).parent().parent().siblings().hide();

    });
    
    $('.tanchukuang1 .wronger,.tanchukuang1 .quxiao').click(function(){
        $(this).parent().parent().hide();
        $(this).parent().parent().siblings().hide();
        $('.tanchu,.tanchukuang').css('display','block')
    });
    
        
   
});
