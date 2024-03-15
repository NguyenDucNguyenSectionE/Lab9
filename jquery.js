$(document).ready(function() {
    $('.filter-button').click(function() {
        const filter = $(this).data('filter');
        
        if (filter === 'all') {
            $('.photo').fadeIn();
        } else {
            $('.photo').fadeOut();
            $('.photo.' + filter).fadeIn();
        }
    });
});