'use strict';
(function(a) {
    var c = !0
      , n = []
      , b = Cookies.get('woosw_key');
    try {
        c = 'sessionStorage'in window && window.sessionStorage !== null,
        window.sessionStorage.setItem('woosw', 'test'),
        window.sessionStorage.removeItem('woosw')
    } catch (a) {
        c = !1
    }
    a(function() {
        (b === null || b === void 0 || b === '') && (b = v(),
        Cookies.set('woosw_key', b, {
            expires: 7
        })),
        w(),
        a('.woosw-custom-menu-item').length && r(),
        woosw_vars.button_action === 'message' && a.notiny.addTheme('woosw', {
            notification_class: 'notiny-theme-woosw'
        })
    }),
    a(document).on('woosw_refresh_data', function() {
        o()
    }),
    a(document).on('woosw_refresh_count', function() {
        r()
    }),
    a(document).on('woovr_selected', function(e, d, f) {
        var c = d.attr('data-id')
          , b = d.attr('data-pid');
        c > 0 ? (a('.woosw-btn-' + b).attr('data-id', c).removeClass('woosw-btn-added woosw-added'),
        j(c)) : (a('.woosw-btn-' + b).attr('data-id', b).removeClass('woosw-btn-added woosw-added'),
        j(b))
    }),
    a(document).on('found_variation', function(c, b) {
        var d = a(c.target).attr('data-product_id');
        a('.woosw-btn-' + d).attr('data-id', b.variation_id).removeClass('woosw-btn-added woosw-added'),
        j(b.variation_id)
    }),
    a(document).on('reset_data', function(c) {
        var b = a(c.target).attr('data-product_id');
        a('.woosw-btn-' + b).attr('data-id', b).removeClass('woosw-btn-added woosw-added'),
        j(b)
    }),
    a(document).on('click touch', '#woosw_wishlist .woosq-link, #woosw_wishlist .woosq-btn', function(a) {
        k(),
        a.preventDefault()
    }),
    a(document).on('click touch', '.woosw-btn', function(o) {
        var b = a(this), d = b.attr('data-id'), e = b.attr('data-pid'), k = b.attr('data-product_id'), n = b.attr('data-product_name'), p = b.attr('data-product_image'), q;
        typeof e !== typeof void 0 && e !== !1 && (d = e),
        typeof k !== typeof void 0 && k !== !1 && (d = k),
        q = {
            action: 'wishlist_add',
            product_id: d,
            nonce: woosw_vars.nonce
        },
        b.hasClass('woosw-added') ? woosw_vars.button_action_added === 'page' ? window.location.href = woosw_vars.wishlist_url : a('#woosw_wishlist').hasClass('woosw-loaded') ? l() : t() : (b.addClass('woosw-adding').find('.woosw-btn-icon').removeClass(woosw_vars.button_normal_icon + ' ' + woosw_vars.button_added_icon).addClass(woosw_vars.button_loading_icon),
        a.post(woosw_vars.ajax_url, q, function(e) {
            b.removeClass('woosw-adding').find('.woosw-btn-icon').removeClass(woosw_vars.button_loading_icon),
            woosw_vars.button_action === 'list' && (e.content != null && a('#woosw_wishlist').html(e.content).addClass('woosw-loaded'),
            e.notice != null && m(e.notice.replace('{name}', '<strong>' + n + '</strong>')),
            s(),
            l()),
            woosw_vars.button_action === 'message' && (a('#woosw_wishlist').removeClass('woosw-loaded'),
            a.notiny({
                theme: 'woosw',
                position: woosw_vars.message_position,
                image: p,
                text: e.notice.replace('{name}', '<strong>' + n + '</strong>')
            })),
            woosw_vars.button_action === 'no' && a('#woosw_wishlist').removeClass('woosw-loaded'),
            e.count != null && f(e.count),
            e.status === 1 && j(d),
            c && e.data && sessionStorage.setItem('woosw_data_' + e.data.key, JSON.stringify(e.data)),
            e.data.fragments && h(e.data.fragments),
            e.data.ids && (i(e.data.ids),
            g(e.data.ids)),
            a(document.body).trigger('woosw_add', [d])
        })),
        o.preventDefault()
    }),
    a(document).on('click touch', '.woosw-item--remove span', function(j) {
        var b = a(this)
          , k = b.closest('.woosw-popup-inner').data('key')
          , d = b.closest('.woosw-item')
          , e = d.attr('data-id')
          , l = {
            action: 'wishlist_remove',
            product_id: e,
            key: k,
            nonce: woosw_vars.nonce
        };
        b.addClass('woosw-removing'),
        a.post(woosw_vars.ajax_url, l, function(j) {
            b.removeClass('woosw-removing'),
            d.remove(),
            j.content != null && a('#woosw_wishlist').html(j.content).addClass('woosw-loaded'),
            j.notice != null && m(j.notice),
            j.count != null && f(j.count),
            c && j.data && sessionStorage.setItem('woosw_data_' + j.data.key, JSON.stringify(j.data)),
            j.data.fragments && h(j.data.fragments),
            j.data.ids && (i(j.data.ids),
            g(j.data.ids)),
            a(document.body).trigger('woosw_remove', [e])
        }),
        j.preventDefault()
    }),
    a(document).on('click touch', '.woosw-empty', function(j) {
        var k = a(this), b, l;
        confirm(woosw_vars.empty_confirm) && (e(),
        b = k.closest('.woosw-popup-inner').data('key'),
        l = {
            action: 'wishlist_empty',
            key: b,
            nonce: woosw_vars.nonce
        },
        a.post(woosw_vars.ajax_url, l, function(e) {
            e.content != null && a('#woosw_wishlist').html(e.content).addClass('woosw-loaded'),
            e.notice != null && m(e.notice),
            e.count != null && f(e.count),
            c && e.data && sessionStorage.setItem('woosw_data_' + e.data.key, JSON.stringify(e.data)),
            e.data.fragments && h(e.data.fragments),
            e.data.ids && (i(e.data.ids),
            g(e.data.ids)),
            d(),
            a(document.body).trigger('woosw_empty', [b])
        })),
        j.preventDefault()
    }),
    a(document).on('click touch', '.woosw-popup', function(b) {
        var c = a('.woosw-popup-content');
        a(b.target).closest(c).length == 0 && (k(),
        p())
    }),
    a(document).on('click touch', '.woosw-continue', function(c) {
        var b = a(this).attr('data-url');
        k(),
        b !== '' && (window.location.href = b),
        c.preventDefault()
    }),
    a(document).on('click touch', '#woosw_wishlist .woosw-popup-close', function(a) {
        k(),
        a.preventDefault()
    }),
    a(document).on('click touch', '#woosw_manage .woosw-popup-close', function(a) {
        p(),
        a.preventDefault()
    }),
    a(document).on('click touch', '.woosw-manage', function(b) {
        b.preventDefault(),
        e();
        var c = {
            action: 'manage_wishlists',
            nonce: woosw_vars.nonce
        };
        a.post(woosw_vars.ajax_url, c, function(b) {
            k(),
            a('#woosw_manage').html(b),
            z(),
            d()
        })
    }),
    a(document).on('click touch', '#woosw_add_wishlist', function(f) {
        var b, c;
        f.preventDefault(),
        e(),
        b = a('#woosw_wishlist_name').val(),
        c = {
            action: 'add_wishlist',
            name: b,
            nonce: woosw_vars.nonce
        },
        a.post(woosw_vars.ajax_url, c, function(b) {
            a('#woosw_manage').html(b),
            a('#woosw_wishlist').removeClass('woosw-loaded'),
            d()
        })
    }),
    a(document).on('click touch', '.woosw-set-default', function(l) {
        var b, k;
        l.preventDefault(),
        e(),
        b = a(this).data('key'),
        k = {
            action: 'set_default',
            key: b,
            nonce: woosw_vars.nonce
        },
        a.post(woosw_vars.ajax_url, k, function(b) {
            b.count != null && f(b.count),
            b.products != null && b.products.length && b.products.forEach(a=>{
                j(a)
            }
            ),
            a('#woosw_manage').html(b.content),
            c && b.data && sessionStorage.setItem('woosw_data_' + b.data.key, JSON.stringify(b.data)),
            b.data.fragments && h(b.data.fragments),
            b.data.ids && (i(b.data.ids),
            g(b.data.ids)),
            a('#woosw_wishlist').removeClass('woosw-loaded'),
            d()
        })
    }),
    a(document).on('click touch', '.woosw-delete-wishlist', function(f) {
        var b, c;
        f.preventDefault(),
        confirm(woosw_vars.delete_confirm) && (e(),
        b = a(this).data('key'),
        c = {
            action: 'delete_wishlist',
            key: b,
            nonce: woosw_vars.nonce
        },
        a.post(woosw_vars.ajax_url, c, function(b) {
            a('#woosw_manage').html(b),
            a('#woosw_wishlist').removeClass('woosw-loaded'),
            d()
        }))
    }),
    a(document).on('click touch', '.woosw-view-wishlist', function(f) {
        var b, c;
        f.preventDefault(),
        e(),
        b = a(this).data('key'),
        c = {
            action: 'view_wishlist',
            key: b,
            nonce: woosw_vars.nonce
        },
        a.post(woosw_vars.ajax_url, c, function(b) {
            p(),
            a('#woosw_wishlist').removeClass('woosw-loaded').html(b),
            l(),
            d()
        })
    }),
    a(document).on('click touch', '.woosw-menu-item a, .woosw-menu a', function(b) {
        woosw_vars.menu_action === 'open_popup' && (b.preventDefault(),
        a('#woosw_wishlist').hasClass('woosw-loaded') ? l() : t())
    }),
    a(document).on('click touch', '#woosw_copy_url, #woosw_copy_btn', function(a) {
        a.preventDefault(),
        x('#woosw_copy_url')
    }),
    a(document).on('click touch', '.woosw-item--note', function() {
        a(this).closest('.woosw-item').find('.woosw-item--note-add').length && (a(this).closest('.woosw-item').find('.woosw-item--note-add').show(),
        a(this).hide())
    }),
    a(document).on('click touch', '.woosw_add_note', function(i) {
        var b, c, f, g, h;
        i.preventDefault(),
        e(),
        b = a(this),
        c = b.closest('.woosw-popup-inner').data('key'),
        f = b.closest('.woosw-item').attr('data-id'),
        g = b.closest('.woosw-item').find('input[type="text"]').val(),
        h = {
            action: 'add_note',
            key: c,
            product_id: f,
            note: u(g),
            nonce: woosw_vars.nonce
        },
        a.post(woosw_vars.ajax_url, h, function(a) {
            b.closest('.woosw-item').find('.woosw-item--note').html(a).show(),
            b.closest('.woosw-item').find('.woosw-item--note-add').hide(),
            d()
        })
    }),
    a(window).on('resize', function() {
        q()
    });
    function t() {
        var b = {
            action: 'wishlist_load',
            nonce: woosw_vars.nonce
        };
        a.post(woosw_vars.ajax_url, b, function(b) {
            b.content != null && a('#woosw_wishlist').html(b.content),
            b.count != null && (a('#woosw_wishlist .woosw-items .woosw-item').length && a('#woosw_wishlist .woosw-items .woosw-item').length != b.count ? f(a('#woosw_wishlist .woosw-items .woosw-item').length) : f(b.count)),
            b.notice != null && m(b.notice),
            a('#woosw_wishlist').addClass('woosw-loaded'),
            s(),
            l()
        })
    }
    function r() {
        var b = {
            action: 'wishlist_load_count',
            nonce: woosw_vars.nonce
        };
        a.post(woosw_vars.ajax_url, b, function(b) {
            if (b.count != null) {
                var c = b.count;
                f(c),
                a(document.body).trigger('woosw_load_count', [c])
            }
        })
    }
    function l() {
        a('#woosw_wishlist').addClass('woosw-show'),
        q(),
        a(document.body).trigger('woosw_wishlist_show')
    }
    function k() {
        a('#woosw_wishlist').removeClass('woosw-show'),
        a(document.body).trigger('woosw_wishlist_hide')
    }
    function z() {
        a('#woosw_manage').addClass('woosw-show'),
        a(document.body).trigger('woosw_manage_show')
    }
    function p() {
        a('#woosw_manage').removeClass('woosw-show'),
        a(document.body).trigger('woosw_manage_hide')
    }
    function e() {
        a('.woosw-popup').addClass('woosw-loading')
    }
    function d() {
        a('.woosw-popup').removeClass('woosw-loading')
    }
    function f(b) {
        a('#woosw_wishlist .woosw-count').html(b),
        parseInt(b) > 0 ? a('.woosw-empty').show() : a('.woosw-empty').hide(),
        a('.woosw-menu-item .woosw-menu-item-inner').length ? a('.woosw-menu-item .woosw-menu-item-inner').attr('data-count', b) : a('.woosw-menu-item a').html('<span class="woosw-menu-item-inner" data-count="' + b + '"><i class="woosw-icon"></i><span>' + woosw_vars.menu_text + '</span></span>'),
        a(document.body).trigger('woosw_change_count', [b])
    }
    function m(b) {
        a('.woosw-notice').html(b),
        A(),
        setTimeout(function() {
            y()
        }, 3e3)
    }
    function A() {
        a('#woosw_wishlist .woosw-notice').addClass('woosw-notice-show')
    }
    function y() {
        a('#woosw_wishlist .woosw-notice').removeClass('woosw-notice-show')
    }
    function s() {
        woosw_vars.perfect_scrollbar === 'yes' && jQuery('#woosw_wishlist .woosw-popup-content-mid').perfectScrollbar({
            theme: 'wpc'
        })
    }
    function B() {
        var a = document.getElementById('woosw_copy_url');
        a.select(),
        document.execCommand('copy'),
        alert(woosw_vars.copied_text + ' ' + a.value)
    }
    function x(a) {
        var d, e, b, c;
        a = typeof a == 'string' ? document.querySelector(a) : a,
        navigator.userAgent.match(/ipad|ipod|iphone/i) ? (d = a.contentEditable,
        e = a.readOnly,
        a.contentEditable = !0,
        a.readOnly = !0,
        b = document.createRange(),
        b.selectNodeContents(a),
        c = window.getSelection(),
        c.removeAllRanges(),
        c.addRange(b),
        a.setSelectionRange(0, 999999),
        a.contentEditable = d,
        a.readOnly = e) : a.select(),
        document.execCommand('copy'),
        alert(woosw_vars.copied_text + ' ' + a.value)
    }
    function u(a) {
        return String(a).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    }
    function v() {
        for (var a = [], b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', d = b.length, c = 0; c < 6; c++)
            a.push(b.charAt(Math.floor(Math.random() * d)));
        return a.join('')
    }
    function q() {
        jQuery('.woosw-popup-center .woosw-popup-content').height(2 * Math.floor(jQuery('.woosw-popup-center .woosw-popup-content').height() / 2) + 2)
    }
    function w() {
        if (c)
            try {
                var a = JSON.parse(sessionStorage.getItem('woosw_data_' + b));
                a.fragments && h(a.fragments),
                a.ids && (i(a.ids),
                g(a.ids)),
                a.key && (b === null || b === void 0 || b === '') && Cookies.set('woosw_key', a.key, {
                    expires: 7
                })
            } catch (a) {
                o()
            }
        else
            o()
    }
    function o() {
        var d = {
            action: 'woosw_get_data',
            nonce: woosw_vars.nonce
        };
        a.post(woosw_vars.ajax_url, d, function(d) {
            d && (c && sessionStorage.setItem('woosw_data_' + d.key, JSON.stringify(d)),
            d.fragments && h(d.fragments),
            d.ids && (i(d.ids),
            g(d.ids)),
            d.key && (b === null || b === void 0 || b === '' || b !== d.key) && Cookies.set('woosw_key', d.key, {
                expires: 7
            }),
            a(document.body).trigger('woosw_data_refreshed', [d]))
        })
    }
    function h(b) {
        a.each(b, function(b, c) {
            a(b).replaceWith(c)
        }),
        a(document.body).trigger('woosw_fragments_refreshed', [b])
    }
    function g(a) {
        n = a
    }
    function i(b) {
        a('.woosw-btn').removeClass('woosw-btn-added woosw-added'),
        a('.woosw-btn:not(.woosw-btn-has-icon)').html(woosw_vars.button_text),
        a('.woosw-btn.woosw-btn-has-icon').find('.woosw-btn-icon').removeClass(woosw_vars.button_added_icon).addClass(woosw_vars.button_normal_icon),
        a('.woosw-btn.woosw-btn-has-icon').find('.woosw-btn-text').html(woosw_vars.button_text),
        a.each(b, function(c, b) {
            a('.woosw-btn-' + c).addClass('woosw-btn-added woosw-added'),
            a('.woosw-btn-' + c + ':not(.woosw-btn-has-icon)').html(woosw_vars.button_text_added),
            a('.woosw-btn-has-icon.woosw-btn-' + c).find('.woosw-btn-icon').removeClass(woosw_vars.button_normal_icon).addClass(woosw_vars.button_added_icon),
            a('.woosw-btn-has-icon.woosw-btn-' + c).find('.woosw-btn-text').html(woosw_vars.button_text_added),
            b.parent !== void 0 && (a('.woosw-btn-' + b.parent).addClass('woosw-btn-added woosw-added'),
            a('.woosw-btn-' + b.parent + ':not(.woosw-btn-has-icon)').html(woosw_vars.button_text_added),
            a('.woosw-btn-has-icon.woosw-btn-' + b.parent).find('.woosw-btn-icon').removeClass(woosw_vars.button_normal_icon).addClass(woosw_vars.button_added_icon),
            a('.woosw-btn-has-icon.woosw-btn-' + b.parent).find('.woosw-btn-text').html(woosw_vars.button_text_added))
        }),
        a(document.body).trigger('woosw_buttons_refreshed', [b])
    }
    function j(b) {
        a('.woosw-btn[data-id="' + b + '"]').removeClass('woosw-btn-added woosw-added'),
        a('.woosw-btn[data-id="' + b + '"]:not(.woosw-btn-has-icon)').html(woosw_vars.button_text),
        a('.woosw-btn-has-icon.woosw-btn[data-id="' + b + '"]').find('.woosw-btn-icon').removeClass(woosw_vars.button_added_icon).addClass(woosw_vars.button_normal_icon),
        a('.woosw-btn-has-icon.woosw-btn[data-id="' + b + '"]').find('.woosw-btn-text').html(woosw_vars.button_text),
        a.each(n, function(c) {
            parseInt(c) === parseInt(b) && (a('.woosw-btn[data-id="' + b + '"]').addClass('woosw-btn-added woosw-added'),
            a('.woosw-btn[data-id="' + b + '"]:not(.woosw-btn-has-icon)').html(woosw_vars.button_text_added),
            a('.woosw-btn-has-icon.woosw-btn[data-id="' + b + '"]').find('.woosw-btn-icon').removeClass(woosw_vars.button_normal_icon).addClass(woosw_vars.button_added_icon),
            a('.woosw-btn-has-icon.woosw-btn[data-id="' + b + '"]').find('.woosw-btn-text').html(woosw_vars.button_text_added))
        }),
        a(document.body).trigger('woosw_refresh_button_id', [b, n])
    }
}
)(jQuery)
