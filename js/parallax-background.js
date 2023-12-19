(function(c) {
    var b = {};
    function a(d) {
        if (b[d])
            return b[d].exports;
        var e = b[d] = {
            i: d,
            l: !1,
            exports: {}
        };
        return c[d].call(e.exports, e, e.exports, a),
        e.l = !0,
        e.exports
    }
    return a.m = c,
    a.c = b,
    a.d = function(b, c, d) {
        a.o(b, c) || Object.defineProperty(b, c, {
            configurable: !1,
            enumerable: !0,
            get: d
        })
    }
    ,
    a.n = function(b) {
        var c = b && b.__esModule ? function() {
            return b.default
        }
        : function() {
            return b
        }
        ;
        return a.d(c, 'a', c),
        c
    }
    ,
    a.o = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ,
    a.p = "",
    a(a.s = 0)
}
)([function(d, e, f) {
    "use strict";
    var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a
    }
    : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
    }
      , b = function() {
        function a(d, c) {
            for (var b = 0, a; b < c.length; b++)
                a = c[b],
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(d, a.key, a)
        }
        return function(b, c, d) {
            return c && a(b.prototype, c),
            d && a(b, d),
            b
        }
    }();
    function c(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    (function(d) {
        var e = function() {
            function a(e, f) {
                c(this, a);
                var b = this;
                b.settings = d.extend(!0, {
                    event: 'scroll',
                    animation_type: 'shift',
                    zoom: 20,
                    rotate_perspective: 1400,
                    animate_duration: 1,
                    ignore_z_index: !1,
                    gyroscope_event: !0
                }, f),
                b.$element = d(e),
                b.$element_inner = b.$element.find('.parallax-inner'),
                b.data_options = b.$element.data('parallax-background'),
                b.settings = d.extend(!0, b.settings, b.data_options),
                b.inner_size = b.settings.zoom + 100,
                b.coef = b.inner_size / 100,
                b.shift = b.settings.zoom / 2 / b.coef,
                b.device_orientation = '',
                b.viewport_top = 0,
                b.viewport_bottom = 0,
                b.init()
            }
            return b(a, [{
                key: 'init',
                value: function() {
                    if (typeof TweenLite == 'undefined') {
                        console.warn('TweenMax or TweenLite library is required... https://greensock.com/tweenlite');
                        return
                    }
                    if (typeof CSSPlugin == 'undefined') {
                        console.warn('CSSPlugin in required... https://greensock.com/CSSPlugin');
                        return
                    }
                    var a = this;
                    a.set_elements_styles(),
                    a.update_window_size(),
                    a.update_orientation(),
                    d(window).on('resize', function() {
                        a.update_window_size(),
                        a.update_orientation()
                    }),
                    a.settings.event == 'scroll' && (a.update_viewports(),
                    d(window).on('scroll', function() {
                        a.update_viewports()
                    })),
                    a.settings.event == 'scroll' ? a.subscribe_scroll_event() : a.settings.event == 'mouse_move' && a.subscribe_mouse_move_event(),
                    a.settings.gyroscope_event && a.subscribe_gyro_event()
                }
            }, {
                key: 'update_window_size',
                value: function() {
                    var a = this;
                    a.ww = window.innerWidth,
                    a.wh = window.innerHeight
                }
            }, {
                key: 'update_viewports',
                value: function() {
                    var a = this;
                    a.viewport_top = d(window).scrollTop(),
                    a.viewport_bottom = a.viewport_top + a.wh
                }
            }, {
                key: 'set_elements_styles',
                value: function() {
                    var a = this;
                    a.$element.css({
                        overflow: 'hidden'
                    }),
                    a.$element_inner.css({
                        top: -a.settings.zoom / 2 + '%',
                        left: -a.settings.zoom / 2 + '%',
                        height: a.inner_size + '%',
                        width: a.inner_size + '%',
                        position: 'absolute'
                    }),
                    a.settings.animation_type == 'rotate' && (TweenLite.set(a.$element, {
                        perspective: a.settings.rotate_perspective
                    }),
                    TweenLite.set(a.$element_inner, {
                        transformStyle: "preserve-3d"
                    }))
                }
            }, {
                key: 'update_orientation',
                value: function() {
                    var a = this;
                    a.ww > a.wh ? a.device_orientation = 'landscape' : a.device_orientation = 'portrait'
                }
            }, {
                key: 'subscribe_gyro_event',
                value: function() {
                    var a = this
                      , d = 0
                      , e = 0
                      , b = 0
                      , c = 0;
                    window.addEventListener("deviceorientation", function(j) {
                        var h = Math.round(j.gamma), i = Math.round(j.beta), f = 0, g = 0, k, l;
                        h > d && b < 15 ? b++ : h < d && b > -15 && b--,
                        i > e && c < 15 ? c++ : i < e && c > -15 && c--,
                        d = h,
                        e = i,
                        k = 100 / 15 * b,
                        l = 100 / 15 * c,
                        a.device_orientation == 'landscape' ? (f = a.shift / a.coef / 100 * l,
                        g = a.shift / a.coef / 100 * k) : (f = a.shift / a.coef / 100 * k,
                        g = a.shift / a.coef / 100 * l * -1),
                        a.settings.animation_type == 'shift' ? TweenLite.to(a.$element_inner, a.settings.animate_duration, {
                            x: g + '%',
                            y: f + '%'
                        }) : a.settings.animation_type == 'rotate' && TweenLite.to(a.$element_inner, a.settings.animate_duration, {
                            rotationX: -g + '%',
                            rotationY: -f + '%'
                        })
                    }, !0)
                }
            }, {
                key: 'get_cursor_shift_by_element',
                value: function(a, f, e) {
                    var b = this
                      , c = a.offset()
                      , g = a.outerWidth()
                      , h = a.outerHeight()
                      , i = f - c.left - a.width() * .5
                      , j = e - c.top - a.height() * .5
                      , k = i / g * 2
                      , l = j / h * 2
                      , m = b.shift * k
                      , d = b.shift * l;
                    return {
                        x: m,
                        y: d
                    }
                }
            }, {
                key: 'is_cursor_on_element',
                value: function(a, c, d) {
                    var e = a.offset()
                      , f = e.top
                      , b = e.left
                      , g = b + a.outerWidth()
                      , h = f + a.outerHeight();
                    return c > b && c < g && d > f && d < h
                }
            }, {
                key: 'subscribe_mouse_move_event',
                value: function() {
                    var a = this, b;
                    a.settings.ignore_z_index ? (b = !1,
                    d(document).on("mousemove", function(d) {
                        if (a.is_cursor_on_element(a.$element, d.pageX, d.pageY)) {
                            var f = a.get_cursor_shift_by_element(a.$element, d.pageX, d.pageY, !0);
                            e(f.x, f.y),
                            b = !0
                        } else
                            b && (c(),
                            b = !1)
                    })) : (a.$element.on("mousemove", function(b) {
                        var c = a.get_cursor_shift_by_element(a.$element, b.pageX, b.pageY, !0);
                        e(c.x, c.y)
                    }),
                    a.$element.mouseleave(function() {
                        c()
                    }));
                    function c() {
                        a.settings.animation_type == 'shift' ? TweenLite.to(a.$element_inner, a.settings.animate_duration, {
                            x: '0%',
                            y: '0%'
                        }) : a.settings.animation_type == 'rotate' && TweenLite.to(a.$element_inner, a.settings.animate_duration, {
                            rotationX: 0,
                            rotationY: 0
                        })
                    }
                    function e(b, c) {
                        a.settings.animation_type == 'shift' ? TweenLite.to(a.$element_inner, a.settings.animate_duration, {
                            x: b + '%',
                            y: c + '%'
                        }) : a.settings.animation_type == 'rotate' && TweenLite.to(a.$element_inner, a.settings.animate_duration, {
                            rotationX: c + '%',
                            rotationY: -b + '%'
                        })
                    }
                }
            }, {
                key: 'subscribe_scroll_event',
                value: function() {
                    var a = this
                      , b = 0
                      , g = 0
                      , h = 0
                      , e = 0
                      , c = 0
                      , f = 0;
                    i(),
                    j(),
                    d(window).on('resize', function() {
                        i()
                    }),
                    d(window).on('scroll resize', function() {
                        j()
                    });
                    function i() {
                        c = a.$element.outerHeight(),
                        b = a.$element.offset().top,
                        g = b + c,
                        f = c + a.wh
                    }
                    function j() {
                        a.viewport_bottom > b && a.viewport_top < g ? (a.$element.addClass('active'),
                        h = a.viewport_bottom - b - f / 2,
                        e = h / (f / 2),
                        a.settings.animation_type == 'shift' ? TweenLite.to(a.$element_inner, a.settings.animate_duration, {
                            y: a.shift * e + '%'
                        }) : a.settings.animation_type == 'rotate' && TweenLite.to(a.$element_inner, a.settings.animate_duration, {
                            rotationX: a.shift * e + '%'
                        })) : a.$element.removeClass('active')
                    }
                }
            }]),
            a
        }();
        d.fn.parallaxBackground = function() {
            var c = this
              , d = arguments[0]
              , g = Array.prototype.slice.call(arguments, 1)
              , h = c.length
              , b = void 0
              , f = void 0;
            for (b = 0; b < h; b++)
                if ((typeof d == 'undefined' ? 'undefined' : a(d)) == 'object' || typeof d == 'undefined' ? c[b].parallax_background = new e(c[b],d) : f = c[b].parallax_background[d].apply(c[b].parallax_background, g),
                typeof f != 'undefined')
                    return f;
            return c
        }
    }
    )(jQuery)
}
])
