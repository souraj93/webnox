(function(a) {
    var b = function(a, b) {};
    a(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/global', b)
    })
}
)(jQuery)
