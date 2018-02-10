$(document).ready(function(){
  $('#btnClear').click(function(){				
    if(confirm("Want to clear?")){
      /*Clear all input type="text" box*/
      $('#form1 input[type="text"]').val('');
      $('#form1 #sel1').val('');
    }					
  });
});
