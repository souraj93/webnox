(function(a) {
    function b() {
        var a = typeof elementor != 'undefined' ? elementor : elementorFrontend;
        a.hooks.addFilter('pxl_section_start_render', function(a, b, c) {
            return typeof b.pxl_mask_bg_img != 'undefined' && b.pxl_mask_bg_img.url != '' && (a += '<div class="pxl-mask-bg-parallax"></div>'),
            a
        })
    }
    function c() {
        var a = typeof elementor != 'undefined' ? elementor : elementorFrontend;
        a.hooks.addFilter('pxl-custom-section/before-render', function(a, b, c) {
            return a
        })
    }
    function d() {
        var a = typeof elementor != 'undefined' ? elementor : elementorFrontend;
        a.hooks.addFilter('pxl-custom-section-classes', function(a) {
            let b = [];
            return typeof a.custom_style != 'undefined' && a.custom_style != '' && b.push('style-' + a.custom_style),
            b
        })
    }
    function e() {
        var a = typeof elementor != 'undefined' ? elementor : elementorFrontend;
        a.hooks.addFilter('pxl-custom-column/before-render', function(a, b, c) {
            return typeof b.pxl_parallax_col_bg_img != 'undefined' && b.pxl_parallax_col_bg_img.url != '' && (a += '<div class="pxl-column-bg-parallax"></div>'),
            a
        })
    }
    function f() {
        var a = typeof elementor != 'undefined' ? elementor : elementorFrontend;
        a.hooks.addFilter('pxl-custom-column-classes', function(a) {
            let b = [];
            return typeof a.custom_style != 'undefined' && a.custom_style != '' && b.push('style-' + a.custom_style),
            b
        })
    }
    a(window).on('elementor/frontend/init', function() {
        b(),
        c(),
        d(),
        e(),
        f()
    })
}
)(jQuery)
