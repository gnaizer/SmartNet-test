// Clear button
$(document).ready(function() {
  $('#btnClear').click(function() {
    if (confirm("Want to clear?")) {
      $('#form1 input[type="text"]').val('');
      $('#form1 #sel1').val('');
    }
  });
});


// Set image
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#background')
        .attr('src', e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}


// Disable submit
$(function() {
  $('#name, #email, sel1').keyup(function() {
    if ($(this).val() == '') {
      $('.enableOnInput').prop('disabled', true);
    } else {
      $('.enableOnInput').prop('disabled', false);
    }
  });
});


// Refresh after submit
// function refresh() {
//   setTimeout(function () {
//       location.reload()
//   }, 100);
// }
// alert ( 'Congratulation! Form allready sended');
