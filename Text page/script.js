$(document).ready(function () {
    $('#text-form').on("submit", function (event) {
        event.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            url: 'process.php', // Ensure this points to your PHP file
            type: "POST",
            data: formData,
            dataType: 'json',
            success: function (response) {
                if (response.status === 'success') {
                    $("#responseMessage").html('<p style="color:green;">' + response.message + '</p>');
                    //$('#text-form')[0].reset(); // Clear the form
                } else {
                    $('#responseMessage').html('<p style="color: red;">' + response.message + '</p>');
                }
            },
            error: function () {
                $('#responseMessage').html('<p style="color: red;">An error occurred. Please try again.</p>');
            }
        });
    });
});