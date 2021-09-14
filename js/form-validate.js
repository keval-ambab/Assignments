// $(function () {
//     $("form[name='registration']").validate({
//         rules: {
//             fname: "required",
//             lname: "required",
//             email: {
//                 required: true,
//                 email: true
//             },
//             phone: {
//                 required: true,
//                 minlength: 10,
//                 maxlength: 10
//             }
//         },
//         messages: {
//             firstname: "Please enter your firstname",
//             lastname: "Please enter your lastname",
//             password: {
//                 required: "Please provide a password",
//                 minlength: "Your password must be at least 5 characters long"
//             },
//             email: "Please enter a valid email address"
//         },
//         submitHandler: function (form) {
//             form.submit();
//         }
//     });
// });

$('#message_div').hide();


$(document).ready(function () {

    $('#registration').submit(function (e) {
        e.preventDefault();
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var phn = $('#phn').val();

        $(".error").remove();


        if (fname.length < 3) {
            $('#fname').after('<span class="error">First Name is required</span>');
        }

        if (lname.length < 3) {
            $('#lname').after('<span class="error">Last Name is required</span>');
        }
        
        if (email.length < 3) {
            $('#email').after('<span class="error">Email is required</span>');
        } else {
            var emailregEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
            var validEmail = emailregEx.test(email);
            if (!validEmail) {
                $('#email').after('<span class="error"> Enter a valid Email</span>');
            }
        }

        if (phn.length < 10) {
            $('#phn').after('<span class="error">Contact is required</span>');
        } 
 $('#submit').bind('click', function(){
     $('#message_div').show();
});
          
    });

   
        
});

// $('#reset').click(function(){
//     // $('#registration)'[0].reset();
//     $('#registration').trigger("reset");
// });
