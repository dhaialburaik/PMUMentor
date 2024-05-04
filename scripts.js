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
$(document).ready(function() {
    $('#check-availability').on('click', function() {
        var mentor = $('#mentor').val();
        var date = $('#date').val();

        if (!mentor || !date) {
            alert('Please select a mentor and date first.');
            return;
        }

        // Simulate an AJAX call to check availability
        console.log("Checking availability for", mentor, "on", date);
        // Dummy success response after a delay
        setTimeout(function() {
            var isAvailable = Math.random() > 0.5; // Random availability
            if (isAvailable) {
                alert('The mentor is available on your chosen date!');
                $('#booking-form button[type="submit"]').prop('disabled', false);
            } else {
                alert('Sorry, the mentor is not available on that date.');
                $('#booking-form button[type="submit"]').prop('disabled', true);
            }
        }, 1000);
    });
$('#booking-form').on('submit', function(event) {
    event.preventDefault();
    var mentor = $('#mentor').val();
    var date = $('#date').val();
    var time = $('#time').val();

    if (mentor && date && time) {
        alert('Booking your session...');
        // Here would be an AJAX call to book the session
    } else {
        alert('Please fill in all fields.');
    }
    });
});