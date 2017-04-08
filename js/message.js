
/*var num_input=["一","二","三","四","五","六","七"];*/
var u1;
var u2;
var u3;
$(document).ready(function(){
    // ======模态窗口==================
   $('.model').click(function(event) {
        $('.layer').show();        
        $('.layer-bg').show() ; // 半透明
    });
    // 点击关闭按钮，关闭窗口，     点击背景也关闭  
    // 用了并集选择器
    $('.layer .close,.layer-bg').click(function(event) {
        $('.layer,.layer-bg').hide()      
        // fadeOut淡出最终 display:none
    });
     // 点击颜色，改变
    $('.layer dt').click(function(){
        var bgcolor=$(this).css('background');
        
         $('.layer,.layer-bg').hide();
         $('.pic_color').css('background',bgcolor);
         $('.card_box1').css('background',bgcolor)
    })

    // 盒子的显示隐藏
    // $(".card_bd>div").click(function(event) {
    //     var index = $(this).index()
    //     $(".bigbox").hide();
    //     $(".card_bd>div").children('.mainbox_dot').hide()
    //     $(".card_bd>div").eq(index).children('.mainbox_dot').show();
    //     $(".bigbox").eq(index).show();
        
    // });
    //核销选项增加节点内容
     $('.card_bd>div').click(function(){
         var index=$(this).index();
         $('.bigbox').eq(index).addClass('on').siblings().removeClass('on');
         $(".card_bd>div").eq(index).children('.mainbox_dot').show().parent().siblings().children('.mainbox_dot').hide();
     })
     var num_input=["一","二","三","四","五","六","七"];
     $(document).on("click",".mainbox7 em",function(){
        var del_index=$(this).parent().parent().index();         //获得当前标签index    
        var input_all=$(".warp7 .num3").size();                  //获得含标题在内的全部标签
        $(this).parent().parent().remove();
         for(del_index;del_index<input_all;del_index++){
            $(".warp7 .num3 ").eq(del_index).find($(".left_name.fl")).html("项目"+num_input[del_index-1]);
        }
     });
     $('.mainbox7 .add_btn').click(function(){
        if($(".warp7 .num3").size()>7){
            $(this).attr("disabled",true);
        }else{
        var iuput_num=$(".warp7 .num3").size()-1;                  //获得当前增加项目index
        $(".warp7").append("<div class='num3 clearfix num4'><p class='left_name fl'>选项"+num_input[iuput_num]+":</p><div class='right_txt fl'><input type='text' placeholder='' /><em>删除选项</em></div></div>");
        }
     });
     //代金卷主标题输入
     $(document).on("keyup",".djj_chief_title",function(){
        if($(this).val()==""){
            $(".box1_p1").html($(this).attr("placeholder"));
        }else{
        $(".box1_p1").html($(this).val());
        // $(".box1_p1").css("fontSize","22px");
        }
     });
     //代金卷副标题输入
     $(document).on("keyup",".djj_vice_title",function(){
        if($(this).val()==""){
            $(".box1_p2").html($(this).attr("placeholder"));
        }else{
        $(".box1_p2").html($(this).val());
        // $(".box1_p1").css("fontSize","22px");
        }
     });

     //操作提示输入
     $(".op_tips").keyup(function(){
        $(".card_box2").find("p").eq(1).html($(this).val());
     });
     //修改客户电话
     $(".kefu_phone").keyup(function(event) {
        $(".card_box2").find("p").eq(0).html($(this).val());
     });


    //改变标题内容
    $(".lipin_chief_tilte").keyup(function(){
        $(".box1_p1").html($(this).val());
    });
    //改变副标题内容
    $(".lipin_vice_tilte").keyup(function(){
        $(".box1_p2").html($(this).val());
    });
    //店铺名称的改变
    var fit=$('.mainbox1 .num1 .right_named').html()
      $('.card_box1 .card_logo .logo_name').html(fit);
    //logo图片的改变
  $('.logo_pic').css('background','url(images/right_logo.png) no-repeat');
  $('.logo_pic').css('background-size',' 100% auto');
  

// 右边第一个盒子

    $('.adapt').keyup(function(){
        var length=$('.adapt').val().length;
        $('.adapt_num').html(length);
    });
    // 券面信息
     $('.adaptt').keyup(function(){
        var length=$('.adaptt').val().length;
        $('.adaptt_num').html(length);
    });
    $('.adapttt').keyup(function(){
        var length=$('.adapttt').val().length;
        $('.adapttt_num').html(length);
    });
// 消券方式
$('.rad_first').click(function(event) {
    $('.ewm').attr('src','images/tiao.jpg')
});
$('.rad_second').click(function(event) {
    $('.ewm').attr('src','images/emd.png')
});
$('.rad_three').click(function(event) {
    $('.ewm').attr('src','images/number.jpg')
});
// 点击指定门店效果
$(document).on('click','#rad11',function(){
 
              $('.shopper_add').show();  
});
$(document).on('click','#rad22',function(){
 
              $('.shopper_add').hide();  
})
// 右边盒子4
$('.wronger,.quxiao').click(function(){
    $('.display_no').hide();
});


$(document).on( 'click','.shopper_add',function(){
    $('.display_no').show();
})
//优惠说明的对应事件
$('.preferential').keyup(function(){
        var length=$('.preferential').val().length;
        $('.preferential_num').html(length);
});  
// 使用须知的对应事件
$('.preferential_t').keyup(function(){
        var length=$('.preferential_t').val().length;
        $('.preferential_numt').html(length);
    });


$("#hide_box").hide();
$(".add_box").show();
u1=$("#hide_box ul:eq(0)")[0];
u2=$("#hide_box ul:eq(1)")[0];
u3=$("#hide_box ul:eq(2)")[0];
});
$(document).on('click','.queding',function(event) {
    
    $(".add_box").empty();
    
    /*alert($(u1).text());
    alert($(u2).text());
    alert($(u3).text());*/
    var count="";
    if ($("#c1").prop("checked")==true) {
        count+="c1";
    };
    
    if ($("#c2").prop("checked")==true) {
        count+="c2";
    };
    /*alert(count);*/
    if (count=='c1') {
        $(".add_box").append(u1);
        $(".add_box").append(u2);
        $('.display_no').hide();
    }else if (count=='c2') {
         $(".add_box").append(u1);
         $(".add_box").append(u3);
        $('.display_no').hide();
    }else if (count=='c1c2') {
         $(".add_box").append(u1);
         $(".add_box").append(u2);
         $(".add_box").append(u3);
        $('.display_no').hide();
    }else{
        $('.display_no').hide();
    }
    
});

// 右边盒子4的点击删除事件
$(document).on('click','.delete_btn',function(event) {
   var a= $(".add_box ul").length;
  /* alert(a);*/
   if (a==2) {
       $(".add_box").empty();
        return;
   };
    $(this).parent(".add_box ul").remove();
});



