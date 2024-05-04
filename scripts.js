$(document).ready(function() {
    // Smooth scroll for navigation links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
$(document).ready(function() {
    $('#booking-form').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Simple validation check
        var mentor = $('#mentor').val();
        var date = $('#date').val();
        var time = $('#time').val();

        if (mentor && date && time) {
            alert('Session booked successfully!');
            
        } else {
            alert('Please fill in all fields.');
        }
    });
});