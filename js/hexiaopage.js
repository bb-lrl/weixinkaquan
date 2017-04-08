/* 
* @Author: Marte
* @Date:   2016-01-12 10:22:33
* @Last Modified by:   Marte
* @Last Modified time: 2016-01-28 16:29:15
*/

$(document).ready(function(){
    $(document).on("click",".posi_loadin",function(){
        $(this).find(".posi_input").removeAttr("value");
    });
    $(".posi_loadin").find(".posi_input").blur(function(){
        $(this).attr("value","盛戈移软总舵");
    });
    //添加核销员页面1
    $(document).on("click",".wrap_add",function(){
        $(".hx_tanchu1").show();
        $(".hx_wrapwin").show();
    });
    $(document).on("click",".hx_wrapwin,.close",function(){
        $(".hx_tanchu1").hide();
        $(".hx_wrapwin").hide();
    });
    //点击打开搜索人物
    $(document).on("click",".search_bg",function(){
        if($(".tc1_input_sea").val()==""){
            return;
        }else{
            $(".pic").show();
        }
    });
    //时刻判断是否有输入从而判断人物是否显示
    $(".tc1_input_sea").keyup(function(){
        if($(this).val()==""){
            $(".pic").hide();
        }
    });
    // 点击右边页面
    $(document).on("click",".tc1_con_right,.queding",function(){
        $(".right_ract").css("background","#fff");
        $(".tc1_con_left").css("background","#fff");
        $(".tc1_con_right").css("background","#e24b04");
        $(".tc1_wrap_left").hide();
        $(".tc1_wrap_right").show();
         $('.right_foot ').show();

       
    });

    // 点击左边页面
    $(document).on("click",".tc1_con_left,.right_pre",function(){
        $(".right_ract").css("background","#e24b04");
        $(".tc1_con_left").css("background","#e24b04");
        $(".tc1_con_right").css("background","#fff");
        $(".tc1_wrap_right").hide();
        $(".tc1_wrap_left").show();
        $('.right_foot').hide();
       
    });
    //复选框的取值
    var ipts = document.getElementsByClassName('radio');
    var checkbox = document.getElementsByClassName('checkbox');
     checkbox[0].onclick = function(){
            for(var i=0;i<ipts.length;i++){
                ipts[i].checked = false;
            };
        }
        ipts[0].onclick = function(){
            for(var i=0;i<checkbox.length;i++){
                checkbox[i].checked = false;
            };
        }
        ipts[1].onclick = function(){
            for(var i=0;i<checkbox.length;i++){
                checkbox[i].checked = false;
            };
        };
         //选择门店的铅笔点击事件
    var ipts_md = document.getElementsByClassName('radio_md');
    var checkbox_md = document.getElementsByClassName('chose_btn');
     checkbox_md[0].onclick = function(){
            for(var i=0;i<ipts_md.length;i++){
                ipts_md[i].checked = false;
            };
        }
        ipts_md[0].onclick = function(){
            for(var i=0;i<checkbox_md.length;i++){
                checkbox_md[i].checked = false;
            };
        }
        ipts_md[1].onclick = function(){
            for(var i=0;i<checkbox_md.length;i++){
                checkbox_md[i].checked = false;
            };
        };
        // 点击黑笔出现的状态
        $('.hx_loadin').click(function(event) {
            $('.layer_bg,.layer').show();
        }); 
        // 点击x会关掉页面
        $('.close_btn').click(function(event) {
             $('.layer_bg,.layer').hide();
        });
        // 点击取消权限出现的事件
        $('.cancel_right').click(function(event) {

            $(this).parent().remove();
        });
    
 
});