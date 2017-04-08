
$(function(){

         var ipts = document.getElementsByClassName('checkbox');
ipts[0].onclick = function(){

            for(var i=0;i<ipts.length;i++){
                if(ipts[0].checked==true){
                    ipts[i].checked=true;
                }else{
                    ipts[i].checked = false;
                }
            }
        };
        $('.checkbox').click(function(){
          $("input[name='checkbox1']").prop('checked',$(this).is(':checked'));
          $('.chooseNum').html($("input[name='checkbox1']:checked").length);
        });
        $("input[name='checkbox1']").click(function() {
          var j=($("input[name='checkbox1']:checked").length);
          $('.chooseNum').html(j);

          var checked = j==$("input[name='checkbox1']").length
          $('.checkbox').prop('checked',checked);
        });
        
      });