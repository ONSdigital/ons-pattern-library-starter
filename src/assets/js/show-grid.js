$(function() {
    $('.js-show-grid').click(function() {
        var $this = $(this),
            $example = $this.siblings('.pl-example__rendered');

        function gridVisible() {
            if ($example.hasClass('pl-example__rendered--grid')) {
                return true;
            }
        }

        if (gridVisible()) {
            $example.removeClass('pl-example__rendered--grid')
            $this.text('Show grid');
        } else {
            $example.addClass('pl-example__rendered--grid');
            $this.text('Hide grid');
        }

    });
});
