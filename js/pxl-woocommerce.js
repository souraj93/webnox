(function(a) {
    "use strict";
    a(document).ready(function() {
        var c, e, b, d;
        a('.widget_product_search .search-field').find("input[type='text']").each(function(b) {
            a(this).val() || a(this).attr("placeholder", "Search and Press Enter")
        }),
        a('.product-layout-list').parents('ul.products').addClass('products-list'),
        a('.single_variation_wrap').addClass('clearfix'),
        a('.woocommerce-variation-add-to-cart').addClass('clearfix'),
        c = a('.woocommerce .wooc-product-meta'),
        e = a('.woocommerce form.cart'),
        c && c.append(e),
        b = a('.woocommerce .woocommerce-form-coupon-toggle .woocommerce-info'),
        d = a('.woocommerce .woocommerce-form-coupon'),
        b && (b.append(d),
        b.find('.showcoupon').css('display', 'none'),
        d.css('display', 'inline-flex')),
        a('.cart-total-wrap').on('click', function() {
            a('.widget-cart-sidebar').toggleClass('open'),
            a(this).toggleClass('cart-open'),
            a('.site-overlay').toggleClass('open')
        }),
        a('.site-overlay').on('click', function() {
            a(this).removeClass('open'),
            a(this).parents('#page').find('.widget-cart-sidebar').removeClass('open')
        }),
        a('.woocommerce-tab-heading').on('click', function() {
            a(this).toggleClass('open'),
            a(this).parent().find('.woocommerce-tab-content').slideToggle('')
        }),
        a('.site-menu-right .h-btn-cart, .mobile-menu-cart .h-btn-cart').on('click', function(b) {
            b.preventDefault(),
            a(this).parents('#pxl-header-wrap').find('.widget_shopping_cart').toggleClass('open'),
            a('.pxl-hidden-sidebar').removeClass('open'),
            a('.pxl-search-popup').removeClass('open')
        }),
        a('.woocommerce-add-to-cart a.button:not(".no-animate")').append('<i>+</i>'),
        a('.page #pxl-wapper #pxl-main #reviews').remove(),
        a('.woocommerce-add-to-cart a.button').on('click', function() {
            a(this).parents('.woocommerce-product-inner').addClass('cart-added')
        }),
        a('.woocommerce-archive-layout .layout-grid').on('click', function() {
            a(this).addClass('active'),
            a(this).parent().find('.layout-list').removeClass('active'),
            a(this).parents('.site-main').find('ul.products').addClass('pxl-products-grid').removeClass('pxl-products-list')
        }),
        a('.woocommerce-archive-layout .layout-list').on('click', function() {
            a(this).addClass('active'),
            a(this).parent().find('.layout-grid').removeClass('active'),
            a(this).parents('.site-main').find('ul.products').addClass('pxl-products-list').removeClass('pxl-products-grid')
        }),
        a('.woocommerce-archive-layout .layout-list.active').parents('.site-main').find('ul.products').addClass('pxl-products-list').removeClass('pxl-products-grid')
    })
}
)(jQuery)
