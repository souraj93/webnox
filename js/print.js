(function(a) {
    'use strict';
    function b(q, p, o) {
        var c = a(q), d = c.clone(p, o), j = c.find('textarea').add(c.filter('textarea')), n = d.find('textarea').add(d.filter('textarea')), g = c.find('select').add(c.filter('select')), m = d.find('select').add(d.filter('select')), i = c.find('canvas').add(c.filter('canvas')), l = d.find('canvas').add(d.filter('canvas')), b, e, f, k, h;
        for (b = 0,
        e = j.length; b < e; ++b)
            a(n[b]).val(a(j[b]).val());
        for (b = 0,
        e = g.length; b < e; ++b)
            for (f = 0,
            k = g[b].options.length; f < k; ++f)
                g[b].options[f].selected === !0 && (m[b].options[f].selected = !0);
        for (b = 0,
        e = i.length; b < e; ++b)
            h = i[b].getContext('2d'),
            h && (l[b].getContext('2d').drawImage(i[b], 0, 0),
            a(l[b]).attr('data-jquery-print', h.canvas.toDataURL()));
        return d
    }
    function d(d) {
        var c = a('');
        try {
            c = b(d)
        } catch (b) {
            c = a('<span />').html(d)
        }
        return c
    }
    function e(b, k, e) {
        var f = a.Deferred(), c, g, d, l, h, i, j;
        try {
            b = b.contentWindow || b.contentDocument || b;
            try {
                b.resizeTo(window.innerWidth, window.innerHeight)
            } catch (a) {
                console.warn(a)
            }
            c = b.document || b.contentDocument || b,
            e.doctype && c.write(e.doctype),
            c.write(k);
            try {
                g = c.querySelectorAll('canvas');
                for (d = 0; d < g.length; d++)
                    l = g[d].getContext('2d'),
                    h = new Image,
                    h.onload = function() {
                        l.drawImage(h, 0, 0)
                    }
                    ,
                    h.src = g[d].getAttribute('data-jquery-print')
            } catch (a) {
                console.warn(a)
            }
            c.close(),
            i = !1,
            j = function() {
                if (i)
                    return;
                b.focus();
                try {
                    b.document.execCommand('print', !1, null) || b.print(),
                    a('body').focus()
                } catch (a) {
                    b.print()
                }
                b.close(),
                i = !0,
                f.resolve()
            }
            ,
            a(b).on('load', j),
            setTimeout(j, e.timeout)
        } catch (a) {
            f.reject(a)
        }
        return f
    }
    function g(f, b) {
        var d = a(b.iframe + ''), g = d.length, h;
        return g === 0 && (d = a('<iframe height="0" width="0" border="0" wmode="Opaque"/>').prependTo('body').css({
            position: 'absolute',
            top: -999,
            left: -999
        })),
        h = d.get(0),
        e(h, f, b).done(function() {
            setTimeout(function() {
                g === 0 && d.remove()
            }, 1e3)
        }).fail(function(a) {
            console.error('Failed to print from iframe', a),
            c(f, b)
        }).always(function() {
            try {
                b.deferred.resolve()
            } catch (a) {
                console.warn('Error notifying deferred', a)
            }
        })
    }
    function c(b, a) {
        var c = window.open();
        return e(c, b, a).always(function() {
            try {
                a.deferred.resolve()
            } catch (a) {
                console.warn('Error notifying deferred', a)
            }
        })
    }
    function f(a) {
        return !!(typeof Node == 'object' ? a instanceof Node : a && typeof a == 'object' && typeof a.nodeType == 'number' && typeof a.nodeName == 'string')
    }
    a.print = a.fn.print = function() {
        var e, i, j = this, o, k, n, h, l, m;
        if (j instanceof a && (j = j.get(0)),
        f(j) ? (i = a(j),
        arguments.length > 0 && (e = arguments[0])) : arguments.length > 0 ? (i = a(arguments[0]),
        f(i[0]) ? arguments.length > 1 && (e = arguments[1]) : (e = arguments[0],
        i = a('html'))) : i = a('html'),
        o = {
            globalStyles: !0,
            mediaPrint: !1,
            stylesheet: null,
            noPrintSelector: '.no-print',
            iframe: !0,
            append: null,
            prepend: null,
            manuallyCopyFormValues: !0,
            deferred: a.Deferred(),
            timeout: 750,
            title: null,
            doctype: '<!doctype html>'
        },
        e = a.extend({}, o, e || {}),
        k = a(''),
        e.globalStyles ? k = a('style, link, meta, base, title') : e.mediaPrint && (k = a('link[media=print]')),
        e.stylesheet) {
            (a.isArray ? a.isArray : Array.isArray)(e.stylesheet) || (e.stylesheet = [e.stylesheet]);
            for (n = 0; n < e.stylesheet.length; n++)
                k = a.merge(k, a('<link rel="stylesheet" href="' + e.stylesheet[n] + '">'))
        }
        h = b(i, !0, !0),
        h = a('<span/>').append(h),
        h.find(e.noPrintSelector).remove(),
        h.append(b(k)),
        e.title && (l = a('title', h),
        l.length === 0 && (l = a('<title />'),
        h.append(l)),
        l.text(e.title)),
        h.append(d(e.append)),
        h.prepend(d(e.prepend)),
        e.manuallyCopyFormValues && (h.find('input').each(function() {
            var b = a(this);
            b.is("[type='radio']") || b.is("[type='checkbox']") ? b.prop('checked') && b.attr('checked', 'checked') : b.attr('value', b.val())
        }),
        h.find('select').each(function() {
            var b = a(this);
            b.find(':selected').attr('selected', 'selected')
        }),
        h.find('textarea').each(function() {
            var b = a(this);
            b.text(b.val())
        })),
        m = h.html();
        try {
            e.deferred.notify('generated_markup', m, h)
        } catch (a) {
            console.warn('Error notifying deferred', a)
        }
        if (h.remove(),
        e.iframe)
            try {
                g(m, e)
            } catch (a) {
                console.error('Failed to print from iframe', a.stack, a.message),
                c(m, e)
            }
        else
            c(m, e);
        return this
    }
}
)(jQuery)
