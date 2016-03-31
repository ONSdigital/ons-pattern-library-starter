/*
Stop prism from auto running on DOMContentLoaded
*/
document.removeEventListener('DOMContentLoaded', Prism.highlightAll);
Prism.highlightAll();


/*
Show and hide grid overlay on examples
 */
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


/*
Force example code to height that is on 8px baseline
 */

$(function () {
    var $el = $('.on-grid');

    $el.each(function() {
        var $this = $(this),
            preHeight = $this.height(),
            baselineHeight;
        
        // Round current height up to nearest multiple of 8
        baselineHeight = Math.ceil(preHeight/8.0) * 8;
        // Set element height to height on baseline
        $this.height(baselineHeight);

    });
});
