(function(a) {
    a.fn.tableHeadFixer = function(b) {
        return this.each(function() {
            c.call(this)
        });
        function c() {
            var g, c;
            {
                g = {
                    head: !0,
                    foot: !1,
                    left: 0,
                    right: 0,
                    'z-index': 0
                },
                c = a.extend({}, g, b),
                c.table = this,
                c.parent = a(c.table).parent(),
                l(),
                c.head == !0 && m(),
                c.foot == !0 && h(),
                c.left > 0 && i(),
                c.right > 0 && j(),
                k(),
                a(c.parent).trigger('scroll'),
                a(window).resize(function() {
                    a(c.parent).trigger('scroll')
                });
                function k() {
                    var d = a(c.table), b;
                    c.head && (c.left > 0 && (b = d.find('thead tr'),
                    b.each(function(d, b) {
                        e(b, function(b) {
                            a(b).css('z-index', c['z-index'] + 1)
                        })
                    })),
                    c.right > 0 && (b = d.find('thead tr'),
                    b.each(function(d, b) {
                        f(b, function(b) {
                            a(b).css('z-index', c['z-index'] + 1)
                        })
                    }))),
                    c.foot && (c.left > 0 && (b = d.find('tfoot tr'),
                    b.each(function(d, b) {
                        e(b, function(b) {
                            a(b).css('z-index', c['z-index'])
                        })
                    })),
                    c.right > 0 && (b = d.find('tfoot tr'),
                    b.each(function(d, b) {
                        f(b, function(b) {
                            a(b).css('z-index', c['z-index'])
                        })
                    })))
                }
                function l() {
                    var b = a(c.parent)
                      , d = a(c.table);
                    b.append(d),
                    b.css({
                        'overflow-x': 'auto',
                        'overflow-y': 'auto'
                    }),
                    b.scroll(function() {
                        var e = b[0].scrollWidth
                          , f = b[0].clientWidth
                          , g = b[0].scrollHeight
                          , h = b[0].clientHeight
                          , a = b.scrollTop()
                          , d = b.scrollLeft();
                        c.head && this.find('thead tr > *').css('top', a),
                        c.foot && this.find('tfoot tr > *').css('bottom', g - h - a),
                        c.left > 0 && c.leftColumns.css('left', d),
                        c.right > 0 && c.rightColumns.css('right', e - f - d)
                    }
                    .bind(d))
                }
                function m() {
                    var b = a(c.table).find('thead')
                      , f = b.find('tr')
                      , e = b.find('tr > *');
                    d(e),
                    e.css({
                        position: 'relative'
                    })
                }
                function h() {
                    var b = a(c.table).find('tfoot')
                      , f = b.find('tr')
                      , e = b.find('tr > *');
                    d(e),
                    e.css({
                        position: 'relative'
                    })
                }
                function i() {
                    var b = a(c.table), f, g;
                    c.leftColumns = a(),
                    f = b.find('tr'),
                    f.each(function(b, a) {
                        e(a, function(a) {
                            c.leftColumns = c.leftColumns.add(a)
                        })
                    }),
                    g = c.leftColumns,
                    g.each(function(c, b) {
                        var b = a(b);
                        d(b),
                        b.css({
                            position: 'relative'
                        })
                    })
                }
                function j() {
                    var b = a(c.table), h = c.right, e, g;
                    c.rightColumns = a(),
                    e = b.find('tr'),
                    e.each(function(b, a) {
                        f(a, function(a) {
                            c.rightColumns = c.rightColumns.add(a)
                        })
                    }),
                    g = c.rightColumns,
                    g.each(function(c, b) {
                        var b = a(b);
                        d(b),
                        b.css({
                            position: 'relative'
                        })
                    })
                }
                function d(b) {
                    return !1;
                    b.each(function(g, d) {
                        var d = a(d), f = a(d).parent(), b = d.css('background-color'), c, e;
                        b = b == 'transparent' || b == 'rgba(0, 0, 0, 0)' ? null : b,
                        c = f.css('background-color'),
                        c = c == 'transparent' || c == 'rgba(0, 0, 0, 0)' ? null : c,
                        e = c || 'white',
                        e = b || e,
                        d.css('background-color', e)
                    })
                }
                function e(i, g) {
                    for (var f = c.left, e = 1, b = 1, h, d, j; b <= f; b = b + e)
                        h = e > 1 ? b - 1 : b,
                        d = a(i).find('> *:nth-child(' + h + ')'),
                        j = d.prop('colspan'),
                        d.cellPos().left < f && g(d),
                        e = j
                }
                function f(i, f) {
                    for (var g = c.right, d = 1, b = 1, h, e, j; b <= g; b = b + d)
                        h = d > 1 ? b - 1 : b,
                        e = a(i).find('> *:nth-last-child(' + h + ')'),
                        j = e.prop('colspan'),
                        f(e),
                        d = j
                }
            }
        }
    }
}
)(jQuery),
function(a) {
    function b(c) {
        var b = [];
        c.children('tr').each(function(c, d) {
            a(d).children('td, th').each(function(e, j) {
                var i = a(j), f = i.attr('colspan') | 0, g = i.attr('rowspan') | 0, h, d, k;
                for (f = f || 1,
                g = g || 1; b[c] && b[c][e]; ++e)
                    ;
                for (h = e; h < e + f; ++h)
                    for (d = c; d < c + g; ++d)
                        b[d] || (b[d] = []),
                        b[d][h] = !0;
                k = {
                    top: c,
                    left: e
                },
                i.data('cellPos', k)
            })
        })
    }
    a.fn.cellPos = function(d) {
        var a = this.first(), c = a.data('cellPos'), e;
        return (!c || d) && (e = a.closest('table, thead, tbody, tfoot'),
        b(e)),
        c = a.data('cellPos'),
        c
    }
}(jQuery)
