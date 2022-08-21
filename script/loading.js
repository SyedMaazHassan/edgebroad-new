

     $(document).ready(function () {
        $('#all_bodyContent').hide();
        setInterval(() => {
            $('.spinner-container').hide();
            $('#all_bodyContent').show()
        }, 1500);
    })