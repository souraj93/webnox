(function(a) {
    if (typeof b == 'undefined')
        var b = wooaa_vars;
    a.fn.serializeArrayAll = function() {
        var b = /\r?\n/g;
        return this.map(function() {
            return this.elements ? a.makeArray(this.elements) : this
        }).map(function(e, d) {
            var c = a(this).val();
            if (c == null)
                return c == null;
            if (this.type === 'checkbox') {
                if (this.checked)
                    return {
                        name: this.name,
                        value: this.checked ? this.value : ''
                    }
            } else if (this.type === 'radio') {
                if (this.checked)
                    return {
                        name: this.name,
                        value: this.checked ? this.value : ''
                    }
            } else
                return a.isArray(c) ? a.map(c, function(a, c) {
                    return {
                        name: d.name,
                        value: a.replace(b, '\r\n')
                    }
                }) : {
                    name: d.name,
                    value: c.replace(b, '\r\n')
                }
        }).get()
    }
    ,
    a(document).on('wooaa_adding_to_cart', function(b, a) {
        a.removeClass('added').addClass('loading')
    }),
    a(document).on('wooaa_added_to_cart', function(b, c, d, a) {
        a.removeClass('loading').addClass('added')
    }),
    a(document).on('click', '.single_add_to_cart_button:not(.disabled, .wpc-disabled, .wooaa-disabled, .wooco-disabled, .woosb-disabled, .woobt-disabled, .woosg-disabled, .woofs-disabled, .woopq-disabled, .wpcbn-btn, .wpcuv-update)', function(j) {
        var g = !1, c = a(this), d = c.closest('form.cart'), h, f, e, i;
        if (wooaa_vars.product_types !== void 0 && (h = wooaa_vars.product_types.split(','),
        h.includes('all') ? g = !0 : h.forEach(function(a) {
            c.is('.product-type-' + a + ' .single_add_to_cart_button') && (g = !0)
        })),
        g)
            return j.preventDefault(),
            f = d.find('input:not([name="product_id"]), select, button, textarea').serializeArrayAll() || 0,
            a.each(f, function(b, a) {
                a.name === 'add-to-cart' && (a.name = 'product_id',
                a.value = d.find('input[name=variation_id]').val() || d.find('[name=variation_id]').val() || d.find('input.variation_id').val() || d.find('.variation_id').val() || d.find('input[name=add-to-cart]').val() || d.find('[name=add-to-cart]').val() || c.val())
            }),
            a(document.body).trigger('wooaa_adding_to_cart', [c, f]),
            a(document.body).trigger('adding_to_cart', [c, f]),
            c.is('.product-type-variable .single_add_to_cart_button') ? (e = {},
            i = {},
            d.find('select[name^=attribute]').each(function() {
                var b = a(this).attr('name');
                i[b] = a(this).val()
            }),
            a.each(f, function(b, a) {
                a.name !== '' && (e[a.name] = a.value)
            }),
            e.action = 'wooaa_add_to_cart_variable',
            e.variation = i,
            e.nonce = wooaa_vars.nonce,
            a.post(wooaa_vars.ajax_url, e, function(d) {
                if (!d)
                    return;
                if (d.error && d.product_url) {
                    window.location = d.product_url;
                    return
                }
                if (b.cart_redirect_after_add === 'yes') {
                    window.location = b.cart_url;
                    return
                }
                a(document.body).trigger('added_to_cart', [d.fragments, d.cart_hash, c]),
                a(document.body).trigger('wooaa_added_to_cart', [d.fragments, d.cart_hash, c])
            })) : a.ajax({
                type: 'POST',
                url: b.wc_ajax_url.toString().replace('%%endpoint%%', 'add_to_cart'),
                data: f,
                success: function(d) {
                    if (!d)
                        return;
                    if (d.error && d.product_url) {
                        window.location = d.product_url;
                        return
                    }
                    if (b.cart_redirect_after_add === 'yes') {
                        window.location = b.cart_url;
                        return
                    }
                    a(document.body).trigger('added_to_cart', [d.fragments, d.cart_hash, c]),
                    a(document.body).trigger('wooaa_added_to_cart', [d.fragments, d.cart_hash, c])
                },
                dataType: 'json'
            }),
            !1
    })
}
)(jQuery)
