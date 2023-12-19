(function(a) {
    "use strict";
    var b = function() {
        var b = a(".pxl-cursor")
          , c = a(".pxl-cursor-follower")
          , h = a(".pxl-cursor-arrow-prev")
          , i = a(".pxl-cursor-arrow-next")
          , f = a(".pxl-cursor-drag")
          , g = a(".pxl-cursor-map")
          , s = a(".pxl-cursor-text")
          , r = a(".pxl-cursor-icon")
          , m = 0
          , l = 0
          , k = 0
          , j = 0
          , n = 0
          , o = 0;
        if (b.length <= 0)
            return !1;
        document.body.classList.add('pxl-cursor-init'),
        a(document).on("mousemove", function(a) {
            n = a.clientX,
            o = a.clientY
        }),
        p(),
        q();
        function p() {
            var a = b.width()
              , d = c.width()
              , e = h.width()
              , p = i.width()
              , q = f.width()
              , r = g.width();
            TweenMax.to({}, .01, {
                repeat: -1,
                onRepeat: function() {
                    m += (n - m) / 9,
                    l += (o - l) / 9,
                    k += n - k,
                    j += o - j,
                    c.length > 0 && TweenMax.set(c, {
                        css: {
                            left: m - d / 2 - 2,
                            top: l - d / 2 - 2
                        }
                    }),
                    b.length > 0 && TweenMax.set(b, {
                        css: {
                            left: n - a / 2,
                            top: o - a / 2
                        }
                    }),
                    h.length > 0 && TweenMax.set(h, {
                        css: {
                            left: k - e / 2,
                            top: j - e / 2
                        }
                    }),
                    i.length > 0 && TweenMax.set(i, {
                        css: {
                            left: k - p / 2,
                            top: j - p / 2
                        }
                    }),
                    f.length > 0 && TweenMax.set(f, {
                        css: {
                            left: k - q / 2,
                            top: j - q / 2
                        }
                    }),
                    g.length > 0 && TweenMax.set(g, {
                        css: {
                            left: m - r / 2,
                            top: l - r / 2
                        }
                    })
                }
            })
        }
        function e(a, d) {
            a.addClass("active"),
            d == !0 && (b.removeClass("active").addClass('hide'),
            c.removeClass("active").addClass('hide'))
        }
        function d(a, d) {
            a.removeClass("active"),
            d == !0 && (b.removeClass("hide"),
            c.removeClass("hide"))
        }
        function t(d) {
            a(d).parents('.cursor-drag-area').length > 0 && (f.removeClass("active"),
            b.removeClass("hide"),
            c.removeClass("hide")),
            a(d).parents('.cursor-map-target').length > 0 && (g.removeClass("active"),
            b.removeClass("hide"),
            c.removeClass("hide"))
        }
        function u(d) {
            a(d).parents('.cursor-drag-area').length > 0 && (f.addClass("active"),
            b.addClass("hide"),
            c.addClass("hide")),
            a(d).parents('.cursor-map-target').length > 0 && (g.addClass("active"),
            b.addClass("hide"),
            c.addClass("hide"))
        }
        function q() {
            a('a').on("mouseenter", function() {
                e(b, !1),
                e(c, !1)
            }),
            a('a').on("mouseleave", function() {
                d(b, !1),
                d(c, !1)
            }),
            a('.pxl-video-btn').on("mouseenter", function() {
                e(b, !1),
                e(c, !1)
            }),
            a('.pxl-video-btn').on("mouseleave", function() {
                d(b, !1),
                d(c, !1)
            }),
            a('.pxl-anchor').on("mouseenter", function() {
                e(b, !1),
                e(c, !1)
            }),
            a('.pxl-anchor').on("mouseleave", function() {
                d(b, !1),
                d(c, !1)
            }),
            a('.pxl-swiper-thumbs').on("mouseenter", function() {
                e(b, !1),
                e(c, !1)
            }),
            a('.pxl-swiper-thumbs').on("mouseleave", function() {
                d(b, !1),
                d(c, !1)
            }),
            a('.cursor-arrow-prev').on("mouseenter", function() {
                e(h, !0)
            }),
            a('.cursor-arrow-prev').on("mouseleave", function() {
                d(h, !0)
            }),
            a('.cursor-arrow-next').on("mouseenter", function() {
                e(i, !0)
            }),
            a('.cursor-arrow-next').on("mouseleave", function() {
                d(i, !0)
            }),
            a('.cursor-drag-area').on("mouseenter", function() {
                e(f, !0)
            }),
            a('.cursor-drag-area').on("mouseleave", function() {
                d(f, !0)
            }),
            a(document).on('mousedown', '.cursor-drag-area', function() {
                f.addClass("clicked")
            }),
            a(document).on('mouseup', '.cursor-drag-area', function() {
                f.removeClass("clicked")
            }),
            a('.cursor-map-target').on("mouseenter", function() {
                e(g, !0)
            }),
            a('.cursor-map-target').on("mouseleave", function() {
                d(g, !0)
            })
        }
    };
    a(document).find('.pxl-cursor').length > 0 && a(window).innerWidth() >= 1200 && b()
}
)(jQuery)
