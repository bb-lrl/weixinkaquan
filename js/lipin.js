/* 
* @Author: Marte
* @Date:   2016-01-11 14:15:59
* @Last Modified by:   Marte
* @Last Modified time: 2016-01-11 14:26:28
*/

$(document).ready(function(){
    $('#input3').keyup(function(){
        var length=$('#input3').val().length;
    $('#span').html(length);
    })
    $('#input6').keyup(function(){
        var length=$('#input6').val().length;
        $('#span5').html(length);
    })
    //改变标题内容
    $(".chief_tilte").keyup(function(){
        $(".box1_p1").html($(this).val());
    });
    //改变副标题内容
    $(".vice_tilte").keyup(function(){
        $(".box1_p2").html($(this).val());
    });
    //操作提示输入
     $(".op_tips").keyup(function(){
        $(".card_box2").find("p").eq(1).html($(this).val());
     });
     //修改客户电话
     $(".kefu_phone").keyup(function(event) {
        $(".card_box2").find("p").eq(0).html($(this).val());
     });
});