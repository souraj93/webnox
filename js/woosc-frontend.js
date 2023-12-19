'use strict';
(function(a) {
    var d = 0;
    a(function() {
        y(),
        l('first'),
        n(),
        w(),
        q(),
        t(),
        woosc_vars.open_bar === 'yes' && (b('bar'),
        g()),
        a('.woosc-settings-fields').sortable({
            handle: '.move',
            update: function(a, b) {
                u()
            }
        }),
        woosc_vars.button_action === 'show_message' && a.notiny.addTheme('woosc', {
            notification_class: 'notiny-theme-woosc'
        }),
        v()
    }),
    a(window).on('resize', function() {
        v()
    }),
    a(document).on('click touch', '.woosc_table .woosq-btn, .woosc_table .woosq-link', function(a) {
        a.preventDefault(),
        m()
    }),
    a(document).on('click touch', '.woosc-sidebar .woosq-btn, .woosc-sidebar .woosq-link', function(a) {
        a.preventDefault(),
        f()
    }),
    a(document).on('click touch', '.woosc-table-settings', function(b) {
        b.preventDefault(),
        a('.woosc-settings').toggleClass('open')
    }),
    a(document).on('click touch', '.woosc-bar-print', function(b) {
        b.preventDefault(),
        a.print('#woosc-area')
    }),
    a(document).on('keydown', function(b) {
        (b.ctrlKey == !0 || b.metaKey == !0) && b.which == '80' && a('.woosc-area').hasClass('woosc-area-open-table') && (b.preventDefault(),
        a.print('#woosc-area'))
    }),
    a(document).on('click touch', '.woosc-bar-share', function(b) {
        b.preventDefault(),
        a('.woosc-share').toggleClass('open'),
        a('.woosc-share-content').addClass('woosc-loading');
        var c = {
            action: 'woosc_share',
            nonce: woosc_vars.nonce
        };
        jQuery.post(woosc_vars.ajax_url, c, function(b) {
            a('.woosc-share-content').html(b).removeClass('woosc-loading')
        })
    }),
    a(document).on('click touch', '#woosc_copy_url, #woosc_copy_btn', function(a) {
        a.preventDefault(),
        C('#woosc_copy_url')
    }),
    a(document).on('click touch', '.woosc-bar-search', function(b) {
        if (b.preventDefault(),
        a('.woosc-search').toggleClass('open'),
        a('.woosc-search-result').text() === '')
            return d != null && clearTimeout(d),
            d = setTimeout(r, 300),
            !1
    }),
    a(document).on('click touch', '.woosc-popup', function(b) {
        a(b.target).closest('.woosc-popup-content').length === 0 && a(this).toggleClass('open')
    }),
    a(document).on('keyup', '#woosc_search_input', function() {
        if (a('#woosc_search_input').val() !== '')
            return d != null && clearTimeout(d),
            d = setTimeout(r, 300),
            !1
    }),
    a(document).on('click touch', '.woosc-item-add', function(c) {
        c.preventDefault();
        var d = a(this).attr('data-id');
        a('.woosc-search').toggleClass('open'),
        p(d),
        b('table'),
        h()
    }),
    a(document).on('click touch', '.woosc-popup-close', function(b) {
        b.preventDefault(),
        a(this).closest('.woosc-popup').toggleClass('open')
    }),
    a(document).on('woovr_selected', function(e, c) {
        var d = c.attr('data-id')
          , b = c.attr('data-pid');
        d > 0 ? a('.woosc-btn-' + b).removeClass('woosc-btn-added woosc-added').attr('data-id', d) : a('.woosc-btn-' + b).removeClass('woosc-btn-added woosc-added').attr('data-id', b)
    }),
    a(document).on('found_variation', function(c, d) {
        var b = a(c.target).attr('data-product_id');
        a('.woosc-btn-' + b).removeClass('woosc-btn-added woosc-added').attr('data-id', d.variation_id),
        a('.woosc-btn-' + b + ':not(.woosc-btn-has-icon)').html(woosc_vars.button_text),
        a('.woosc-btn-has-icon.woosc-btn-' + b).find('.woosc-btn-icon').removeClass(woosc_vars.button_added_icon).addClass(woosc_vars.button_normal_icon),
        a('.woosc-btn-has-icon.woosc-btn-' + b).find('.woosc-btn-text').html(woosc_vars.button_text)
    }),
    a(document).on('reset_data', function(c) {
        var b = a(c.target).attr('data-product_id');
        a('.woosc-btn-' + b).removeClass('woosc-btn-added woosc-added').attr('data-id', b),
        a('.woosc-btn-' + b + ':not(.woosc-btn-has-icon)').html(woosc_vars.button_text),
        a('.woosc-btn-has-icon.woosc-btn-' + b).find('.woosc-btn-icon').removeClass(woosc_vars.button_added_icon).addClass(woosc_vars.button_normal_icon),
        a('.woosc-btn-has-icon.woosc-btn-' + b).find('.woosc-btn-text').html(woosc_vars.button_text)
    }),
    a(document).on('click touch', '.woosc-bar-remove', function(a) {
        a.preventDefault();
        var c = confirm(woosc_vars.remove_all);
        c == !0 && (i('all'),
        b('table'))
    }),
    a(document).on('click touch', '.woosc-btn', function(l) {
        var c, d, f, j, k, e;
        l.preventDefault(),
        c = a(this),
        d = c.attr('data-id'),
        f = c.attr('data-pid'),
        j = c.attr('data-product_id'),
        k = c.attr('data-product_name'),
        e = c.attr('data-product_image'),
        typeof f !== typeof void 0 && f !== !1 && (d = f),
        typeof j !== typeof void 0 && j !== !1 && (d = j),
        c.addClass(''),
        c.hasClass('woosc-btn-added woosc-added') ? woosc_vars.click_again === 'yes' ? (i(d),
        woosc_vars.button_action === 'show_message' && a.notiny({
            theme: 'woosc',
            position: woosc_vars.message_position,
            image: e,
            text: woosc_vars.message_removed.replace('{name}', '<strong>' + k + '</strong>')
        })) : woosc_vars.button_action === 'show_message' && a.notiny({
            theme: 'woosc',
            position: woosc_vars.message_position,
            image: e,
            text: woosc_vars.message_exists.replace('{name}', '<strong>' + k + '</strong>')
        }) : (c.addClass('woosc-btn-adding woosc-adding'),
        p(d),
        woosc_vars.button_action === 'show_message' && a.notiny({
            theme: 'woosc',
            position: woosc_vars.message_position,
            image: e,
            text: woosc_vars.message_added.replace('{name}', '<strong>' + k + '</strong>')
        })),
        woosc_vars.button_action === 'show_bar' && (b('bar'),
        g()),
        woosc_vars.button_action === 'show_table' && (b('table'),
        g(),
        h()),
        (woosc_vars.button_action === 'show_message' || woosc_vars.button_action === 'none') && a('.woosc-bar').hasClass('woosc-bar-open') && b('bar'),
        woosc_vars.button_action === 'show_sidebar' && (b('sidebar'),
        o())
    }),
    a(document).on('click touch', '#woosc-area .woosc-bar-item-remove, #woosc-area .woosc-remove', function(c) {
        c.preventDefault();
        var d = a(this).attr('data-id');
        a(this).parent().addClass('removing'),
        i(d),
        b('table'),
        n()
    }),
    a(document).on('click touch', '.woosc-page .woosc-remove', function(b) {
        b.preventDefault();
        var c = a(this).attr('data-id');
        i(c),
        location.reload()
    }),
    a(document).on('click touch', '.woosc-sidebar-item-remove', function(b) {
        b.preventDefault();
        var c = a(this).closest('.woosc-sidebar-item').attr('data-id');
        i(c),
        a(this).closest('.woosc-sidebar-item').slideUp(),
        n()
    }),
    a(document).on('click touch', '.woosc-bar-btn', function(c) {
        c.preventDefault(),
        a('.woosc-table-items').hasClass('woosc-table-items-loaded') || b('table'),
        A()
    }),
    a(document).on('click touch', function(b) {
        (woosc_vars.click_outside === 'yes' || woosc_vars.click_outside === 'yes_empty' && parseInt(a('.woosc-bar').attr('data-count')) === 0) && a(b.target).closest('.wpc_compare_count').length === 0 && a(b.target).closest('.woosc-popup').length === 0 && a(b.target).closest('.woosc-btn').length === 0 && a(b.target).closest('.woosc-table').length === 0 && a(b.target).closest('.woosc-bar').length === 0 && a(b.target).closest('.woosc-menu-item a').length === 0 && a(b.target).closest('.woosc-menu a').length === 0 && a(b.target).closest('.woosc-sidebar-btn').length === 0 && (woosc_vars.open_button === '' || a(b.target).closest(woosc_vars.open_button).length === 0) && m()
    }),
    a(document).on('click touch', '.woosc-area-open-sidebar', function(b) {
        a(b.target).closest('.woosc-sidebar').length === 0 && f()
    }),
    a(document).on('click touch', '.woosc-sidebar-close, .woosc-sidebar-continue', function(a) {
        f()
    }),
    a(document).on('click touch', '.woosc-sidebar-btn', function(a) {
        a.preventDefault(),
        f(),
        z()
    }),
    a(document).on('click touch', '#woosc-table-close', function(a) {
        a.preventDefault(),
        k()
    }),
    a(document).on('change', '.woosc-settings-field, .woosc-settings-tool', function() {
        u()
    }),
    woosc_vars.open_button !== '' && a(document).on('click touch', woosc_vars.open_button, function(c) {
        c.preventDefault(),
        woosc_vars.open_button_action === 'open_page' ? woosc_vars.page_url !== '' && woosc_vars.page_url !== '#' && (window.location.href = woosc_vars.page_url) : (woosc_vars.open_button_action === 'open_popup' && (a('.woosc-table-items').hasClass('woosc-table-items-loaded') || b('table'),
        g(),
        h()),
        woosc_vars.open_button_action === 'open_sidebar' && (a('.woosc-sidebar-items').hasClass('woosc-sidebar-items-loaded') || b('sidebar'),
        o()))
    }),
    a(document).on('click touch', '.woosc-menu-item a, .woosc-menu a', function(c) {
        woosc_vars.menu_action === 'open_popup' && (c.preventDefault(),
        a('.woosc-table-items').hasClass('woosc-table-items-loaded') || b('table'),
        g(),
        h()),
        woosc_vars.menu_action === 'open_sidebar' && (c.preventDefault(),
        a('.woosc-sidebar-items').hasClass('woosc-sidebar-items-loaded') || b('sidebar'),
        o())
    });
    function r() {
        a('.woosc-search-result').html('').addClass('woosc-loading'),
        d = null;
        var b = {
            action: 'woosc_search',
            keyword: a('#woosc_search_input').val(),
            nonce: woosc_vars.nonce
        };
        a.post(woosc_vars.ajax_url, b, function(b) {
            a('.woosc-search-result').html(b).removeClass('woosc-loading')
        })
    }
    function e(b, c, d) {
        var a = new Date, e;
        a.setTime(a.getTime() + d * 24 * 60 * 60 * 1e3),
        e = 'expires=' + a.toUTCString(),
        document.cookie = b + '=' + c + '; ' + e + '; path=/'
    }
    function c(e) {
        for (var c = e + '=', d = document.cookie.split(';'), b = 0, a; b < d.length; b++) {
            for (a = d[b]; a.charAt(0) == ' '; )
                a = a.substring(1);
            if (a.indexOf(c) == 0)
                return decodeURIComponent(a.substring(c.length, a.length))
        }
        return ''
    }
    function B() {
        var a = j();
        return c(a) != '' ? c(a) : ''
    }
    function x() {
        var d = j(), c = [], f;
        a('.woosc-bar-item').each(function() {
            var b = a(this).attr('data-id');
            b !== '' && c.push(b)
        }),
        f = c.join(),
        e(d, f, 7),
        b('table')
    }
    function u() {
        var c = []
          , d = []
          , f = 'woosc_fields_' + woosc_vars.hash
          , g = 'woosc_settings_' + woosc_vars.hash;
        woosc_vars.user_id !== '' && (f += '_' + woosc_vars.user_id,
        g += '_' + woosc_vars.user_id),
        a('.woosc-settings-field').each(function() {
            var b = a(this).val();
            a(this).prop('checked') ? (c.push(b),
            a('.woosc_table .tr-' + b).removeClass('tr-hide')) : a('.woosc_table .tr-' + b).addClass('tr-hide')
        }),
        a('.woosc-settings-tool').each(function() {
            var b = a(this).val();
            a(this).prop('checked') && d.push(b)
        }),
        e(f, c.join(','), 7),
        e(g, d.join(','), 7),
        b('table')
    }
    function p(b) {
        var i = !1, h = woosc_vars.limit_notice, g = j(), f, d, k;
        c(g) !== '' ? (d = c(g).split(','),
        d.length < woosc_vars.limit ? (d = a.grep(d, function(a) {
            return a != b
        }),
        woosc_vars.adding === 'append' ? d.push(b) : d.unshift(b),
        k = d.join(),
        e(g, k, 7)) : (i = !0,
        h = h.replace('{limit}', woosc_vars.limit)),
        f = d.length) : (e(g, b, 7),
        f = 1),
        l(f),
        a(document.body).trigger('woosc_added', [f]),
        i ? (a('.woosc-btn[data-id="' + b + '"]').removeClass('woosc-btn-adding woosc-adding'),
        alert(h)) : (a('.woosc-btn[data-id="' + b + '"]').removeClass('woosc-btn-adding woosc-adding').addClass('woosc-btn-added woosc-added'),
        a('.woosc-btn[data-id="' + b + '"]:not(.woosc-btn-has-icon)').html(woosc_vars.button_text_added),
        a('.woosc-btn-has-icon[data-id="' + b + '"]').find('.woosc-btn-icon').removeClass(woosc_vars.button_normal_icon).addClass(woosc_vars.button_added_icon),
        a('.woosc-btn-has-icon[data-id="' + b + '"]').find('.woosc-btn-text').html(woosc_vars.button_text_added))
    }
    function i(b) {
        var f = 0, d = j(), g, h;
        b !== 'all' ? (c(d) != '' && (g = c(d).split(','),
        g = a.grep(g, function(a) {
            return a != b
        }),
        h = g.join(),
        e(d, h, 7),
        f = g.length),
        a('.woosc-btn[data-id="' + b + '"]').removeClass('woosc-btn-added woosc-added'),
        a('.woosc-btn[data-id="' + b + '"]:not(.woosc-btn-has-icon)').html(woosc_vars.button_text),
        a('.woosc-btn-has-icon[data-id="' + b + '"]').find('.woosc-btn-icon').removeClass(woosc_vars.button_added_icon).addClass(woosc_vars.button_normal_icon),
        a('.woosc-btn-has-icon[data-id="' + b + '"]').find('.woosc-btn-text').html(woosc_vars.button_text)) : (c(d) != '' && (e(d, '', 7),
        f = 0),
        a('.woosc-btn').removeClass('woosc-btn-added woosc-added'),
        a('.woosc-btn:not(.woosc-btn-has-icon)').html(woosc_vars.button_text),
        a('.woosc-btn-has-icon').find('.woosc-btn-icon').removeClass(woosc_vars.button_added_icon).addClass(woosc_vars.button_normal_icon),
        a('.woosc-btn-has-icon').find('.woosc-btn-text').html(woosc_vars.button_text)),
        l(f),
        a(document.body).trigger('woosc_removed', [f])
    }
    function n() {
        var b = j(), d;
        c(b) != '' && (d = c(b).split(','),
        a('.woosc-btn').removeClass('woosc-btn-added woosc-added'),
        a('.woosc-btn:not(.woosc-btn-has-icon)').html(woosc_vars.button_text),
        a('.woosc-btn.woosc-btn-has-icon').find('.woosc-btn-icon').removeClass(woosc_vars.button_added_icon).addClass(woosc_vars.button_normal_icon),
        a('.woosc-btn.woosc-btn-has-icon').find('.woosc-btn-text').html(woosc_vars.button_text),
        d.forEach(function(b) {
            a('.woosc-btn-' + b).addClass('woosc-btn-added woosc-added'),
            a('.woosc-btn-' + b + ':not(.woosc-btn-has-icon)').html(woosc_vars.button_text_added),
            a('.woosc-btn-has-icon.woosc-btn-' + b).find('.woosc-btn-icon').removeClass(woosc_vars.button_normal_icon).addClass(woosc_vars.button_added_icon),
            a('.woosc-btn-has-icon.woosc-btn-' + b).find('.woosc-btn-text').html(woosc_vars.button_text_added)
        }))
    }
    function b(b) {
        var c = {
            action: 'woosc_load_data',
            get_data: b,
            nonce: woosc_vars.nonce
        };
        b === 'table' && a('.woosc-table-inner').addClass('woosc-loading'),
        b === 'sidebar' && a('.woosc-sidebar').addClass('woosc-loading'),
        a.post(woosc_vars.ajax_url, c, function(c) {
            (b === 'bar' || b === 'table') && (a('.woosc-bar-items').html(c.bar).addClass('woosc-bar-items-loaded'),
            a(document.body).trigger('woosc_bar_loaded')),
            b === 'table' && (a('.woosc-table-items').html(c.table).addClass('woosc-table-items-loaded'),
            a(window).width() >= 768 ? woosc_vars.freeze_column === 'yes' && woosc_vars.freeze_row === 'yes' ? a('#woosc_table').tableHeadFixer({
                head: !0,
                left: 1
            }) : woosc_vars.freeze_column === 'yes' ? a('#woosc_table').tableHeadFixer({
                head: !1,
                left: 1
            }) : woosc_vars.freeze_row === 'yes' && a('#woosc_table').tableHeadFixer({
                head: !0
            }) : woosc_vars.freeze_row === 'yes' && a('#woosc_table').tableHeadFixer({
                head: !0
            }),
            woosc_vars.scrollbar === 'yes' && a('.woosc-table-items').perfectScrollbar({
                theme: 'wpc'
            }),
            a('.woosc-table-inner').removeClass('woosc-loading'),
            w(),
            q(),
            t(),
            a(document.body).trigger('woosc_table_loaded')),
            b === 'sidebar' && (a('.woosc-sidebar-items').html(c.sidebar).addClass('woosc-sidebar-items-loaded'),
            a('.woosc-sidebar').removeClass('woosc-loading'),
            woosc_vars.scrollbar === 'yes' && a('.woosc-sidebar-items').perfectScrollbar({
                theme: 'wpc'
            }),
            a(document.body).trigger('woosc_sidebar_loaded'))
        })
    }
    function v() {
        let b = a(window).width();
        b >= 1024 && a('.woosc-quick-table .woosc_table').tableHeadFixer({
            head: !1,
            left: 2
        }),
        b >= 768 && b < 1024 && a('.woosc-quick-table .woosc_table').tableHeadFixer({
            head: !1,
            left: 1
        }),
        b < 768 && a('.woosc-quick-table .woosc_table').tableHeadFixer({
            head: !1,
            left: 0
        })
    }
    function g() {
        f(),
        a('#woosc-area').addClass('woosc-area-open-bar'),
        a('.woosc-bar').addClass('woosc-bar-open'),
        a('.woosc-bar-items').sortable({
            handle: 'img',
            update: function(a, b) {
                x()
            }
        }),
        a(document.body).trigger('woosc_bar_open')
    }
    function s() {
        a('#woosc-area').removeClass('woosc-area-open-bar'),
        a('.woosc-bar').removeClass('woosc-bar-open'),
        a(document.body).trigger('woosc_bar_close')
    }
    function o() {
        s(),
        k(),
        a('#woosc-area').addClass('woosc-area-open-sidebar'),
        a('.woosc-sidebar').addClass('woosc-sidebar-open'),
        a(document.body).trigger('woosc_sidebar_open')
    }
    function f() {
        a('#woosc-area').removeClass('woosc-area-open-sidebar'),
        a('.woosc-sidebar').removeClass('woosc-sidebar-open'),
        a(document.body).trigger('woosc_sidebar_close')
    }
    function h() {
        f(),
        a('#woosc-area').addClass('woosc-area-open-table'),
        a('.woosc-table').addClass('woosc-table-open'),
        a('.woosc-bar-btn').addClass('woosc-bar-btn-open'),
        woosc_vars.bar_bubble === 'yes' && a('.woosc-bar').removeClass('woosc-bar-bubble'),
        a(document.body).trigger('woosc_table_open')
    }
    function k() {
        a('#woosc-area').removeClass('woosc-area-open woosc-area-open-table'),
        a('.woosc-table').removeClass('woosc-table-open'),
        a('.woosc-bar-btn').removeClass('woosc-bar-btn-open'),
        woosc_vars.bar_bubble === 'yes' && a('.woosc-bar').addClass('woosc-bar-bubble'),
        a(document.body).trigger('woosc_table_close')
    }
    function A() {
        a('.woosc-table').hasClass('woosc-table-open') ? k() : h()
    }
    function D() {
        a('#woosc-area').addClass('woosc-area-open'),
        b('table'),
        g(),
        h(),
        a(document.body).trigger('woosc_open')
    }
    function m() {
        a('#woosc-area').removeClass('woosc-area-open'),
        s(),
        k(),
        a(document.body).trigger('woosc_close')
    }
    function z() {
        a('#woosc-area').hasClass('woosc-area-open') ? m() : D(),
        a(document.body).trigger('woosc_toggle')
    }
    function y() {
        var b = a('#woosc-area').attr('data-bg-color')
          , c = a('#woosc-area').attr('data-btn-color');
        a('.woosc-table').css('background-color', b),
        a('.woosc-bar').css('background-color', b),
        a('.woosc-bar-btn').css('background-color', c),
        a('.woosc-sidebar-btn').css('background-color', c)
    }
    function l(b) {
        var c, d;
        b === 'first' && (c = B(),
        c != '' ? (d = c.split(','),
        b = d.length) : b = 0),
        a('.woosc-menu-item').each(function() {
            a(this).hasClass('menu-item-type-woosc') ? a(this).find('.woosc-menu-item-inner').attr('data-count', b) : a(this).addClass('menu-item-type-woosc').find('a').wrapInner('<span class="woosc-menu-item-inner" data-count="' + b + '"></span>')
        }),
        a('#woosc-area').attr('data-count', b),
        a('.woosc-bar').attr('data-count', b),
        a('.woosc-sidebar-count').html(' (' + b + ')'),
        a('.woosc-bar-items').removeClass('woosc-bar-items-loaded'),
        a('.woosc-sidebar-items').removeClass('woosc-sidebar-items-loaded'),
        a('.woosc-table-items').removeClass('woosc-table-items-loaded'),
        a(document.body).trigger('woosc_change_count', [b])
    }
    function w() {
        woosc_vars.hide_empty_row === 'yes' && a('.woosc_table > tbody > tr').each(function() {
            var b = a(this)
              , c = 0
              , d = !0;
            b.children('td').each(function() {
                if (c > 0 && a(this).html().length > 0)
                    return d = !1,
                    !1;
                c++
            }),
            d && b.addClass('tr-empty').remove()
        })
    }
    function t() {
        a('#woosc_highlight_differences').prop('checked') ? a('.woosc_table > tbody > tr').each(function() {
            var b = a(this)
              , c = 0
              , e = a(this).children('td').eq(1).html()
              , d = !1;
            b.children('td:not(.td-placeholder)').each(function() {
                if (c > 1 && a(this).html() !== e)
                    return d = !0,
                    !1;
                c++
            }),
            d && b.addClass('tr-highlight')
        }) : a('.woosc_table tr').removeClass('tr-highlight')
    }
    function q() {
        a('#woosc_hide_similarities').prop('checked') ? a('.woosc_table > tbody > tr').each(function() {
            var b = a(this)
              , c = 0
              , e = a(this).children('td').eq(1).html()
              , d = !0;
            b.children('td:not(.td-placeholder)').each(function() {
                if (c > 1 && a(this).html() !== e)
                    return d = !1,
                    !1;
                c++
            }),
            d && b.addClass('tr-similar')
        }) : a('.woosc_table tr').removeClass('tr-similar')
    }
    function C(a) {
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
        alert(woosc_vars.copied_text.replace('%s', a.value))
    }
    function j() {
        return woosc_vars.user_id !== '' ? 'woosc_products_' + woosc_vars.user_id : 'woosc_products'
    }
}
)(jQuery)
