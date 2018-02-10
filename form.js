$(function() {
  $('form input[type=submit]').click(function(e) {
      const form = $('form')[0];
      if (!form.checkValidity()) {
          return alert( 'Success!' );
      }
      e.preventDefault();
      $.ajax({
          url: "https://formspree.io/gntnaizer@gmail.com",
          method: "POST",
          data: { 
              name: $('#name').val(),
              email: $('#email').val(),
              sel1: $('#sel1').val()},
          dataType: "json"
      });
  });

});