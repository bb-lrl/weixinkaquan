

$(document).ready(function(){
// 查看详情开关按钮
    $(".card_details").hide()
    $(".watch_btn").click(function(e) {
        //alert()       
        $(".card_details").slideToggle()
        // 开关按钮切换文字       
        if( $(".watch_btn").html()=="查看详情" ){
            $(".watch_btn").html("收起详情")
        }else{
            $(".watch_btn").html("查看详情")
        }       
    });

    // 点击核销按钮
    $(".hexiao_btn").click(function(event) {
        $(this).css({"background":"#a6a6a6"})
        $(this).html("已核销")
    });



  // 点击首页的查找按钮
   $(".search_btn").click(function(event) {
        var content=$("#search_ipt").val();
        if (content!=null&&content!=""&&content!=undefined) {
            $(".cancel_mainBox").show();
            $(".Introduces").hide();
             $(".error_box").hide();
        }else{
            $(".Introduces").hide();
            $(".cancel_mainBox").hide(); 
            $(".error_box").show();
        }
    });

   // 核销记录模态窗口选择类型
   $(".layer li").click(function(event) {
       $(".layer li").children('span').removeClass('current');
       $(this).children('span').addClass('current');

   });
   // 点击全部类型弹出模态窗口
    $(".all_type").click(function(event) {
       $(".layer,.layer_bg").show();
   });


   // 点击模态窗口的完成按钮
   $(".layer_ok_btn").click(function(event) {
       $(".layer,.layer_bg").hide();
   });

});