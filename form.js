$(function() {
  $('form input[type=submit]').click(function(e) {
    const form = $('form')[0];
    if (!form.checkValidity()) {
      return
    }
    e.preventDefault();
    $.ajax({
      url: "https://formspree.io/gntnaizer@gmail.com",
      method: "POST",
      data: {
        Fullname: $('#name').val(),
        Email: $('#email').val(),
        Issues: $('#sel1').val()
      },
      dataType: "json"
    });
    alert('Congratulation! Form allready sended');
  });
});

