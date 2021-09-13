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
            var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $('email').after('<span> Enter a valid Email</span>');
            }
        }

        if (phn.length <= 10) {
            $('#phn').after('<span class="error">Phone is required</span>');
        } else {
            var regEx = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
            var validphn = regEx.test(phn);
            if (!validphn) {
                $('phn').after('<span> Enter a valid Phone Number</span>');
            }
        }


    });
});
