(function(a) {
    a(document).ready(function() {
        var b = {
            showLogs: !1,
            round: 1e3,
            init: function() {
                if (this._log("init"),
                this._inited) {
                    this._log("Already Inited"),
                    this._inited = !0;
                    return
                }
                this._requestAnimationFrame = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a, b) {
                        window.setTimeout(a, 1e3 / 60)
                    }
                }(),
                this._onScroll(!0)
            },
            _inited: !1,
            _properties: ['x', 'y', 'z', 'rotateX', 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ', 'scale'],
            _requestAnimationFrame: null,
            _log: function(a) {
                this.showLogs && console.log("Parallax Scroll / " + a)
            },
            _onScroll: function(b) {
                var c = a(document).scrollTop()
                  , d = a(window).height();
                this._log("onScroll " + c),
                a("[data-parallax]").each(a.proxy(function(E, w) {
                    var f = a(w), e = [], z = !1, t = f.data("style"), u, m, A, g, i, y, o, n, k, s, j, v, h, l, p, r, q, B, C, D, x;
                    t == void 0 && (t = f.attr("style") || "",
                    f.data("style", t)),
                    u = [f.data("parallax")];
                    for (m = 2; ; m++)
                        if (f.data("parallax" + m))
                            u.push(f.data("parallax-" + m));
                        else
                            break;
                    A = u.length;
                    for (m = 0; m < A; m++)
                        g = u[m],
                        i = g["from-scroll"],
                        y = g["from-scroll-custom"],
                        i == void 0 && (y != void 0 ? i = Math.max(0, a(w).offset().top - y) : i = Math.max(0, a(w).offset().top - d)),
                        i = i | 0,
                        o = g.distance,
                        n = g["to-scroll"],
                        o == void 0 && n == void 0 && (o = d),
                        o = Math.max(o | 0, 1),
                        k = g.easing,
                        s = g["easing-return"],
                        (k == void 0 || !a.easing || !a.easing[k]) && (k = null),
                        (s == void 0 || !a.easing || !a.easing[s]) && (s = k),
                        k && (j = g.duration,
                        j == void 0 && (j = o),
                        j = Math.max(j | 0, 1),
                        v = g["duration-return"],
                        v == void 0 && (v = j),
                        o = 1,
                        h = f.data("current-time"),
                        h == void 0 && (h = 0)),
                        n == void 0 && (n = i + o),
                        n = n | 0,
                        l = g.smoothness,
                        l == void 0 && (l = 35),
                        l = l | 0,
                        (b || l == 0) && (l = 1),
                        l = l | 0,
                        p = c,
                        p = Math.max(p, i),
                        p = Math.min(p, n),
                        k && (f.data("sens") == void 0 && f.data("sens", "back"),
                        p > i && (f.data("sens") == "back" ? (h = 1,
                        f.data("sens", "go")) : h++),
                        p < n && (f.data("sens") == "go" ? (h = 1,
                        f.data("sens", "back")) : h++),
                        b && (h = j),
                        f.data("current-time", h)),
                        this._properties.map(a.proxy(function(b) {
                            var o = 0, c = g[b], d, q, m, r;
                            if (c == void 0)
                                return;
                            b == "scale" || b == "scaleX" || b == "scaleY" || b == "scaleZ" ? o = 1 : c = c | 0,
                            d = f.data("_" + b),
                            d == void 0 && (d = o),
                            q = (c - o) * ((p - i) / (n - i)) + o,
                            m = d + (q - d) / l,
                            k && h > 0 && h <= j && (r = o,
                            f.data("sens") == "back" && (r = c,
                            c = -c,
                            k = s,
                            j = v),
                            m = a.easing[k](null, h, r, c, j)),
                            m = Math.ceil(m * this.round) / this.round,
                            m == d && q == c && (m = c),
                            e[b] || (e[b] = 0),
                            e[b] += m,
                            d != e[b] && (f.data("_" + b, e[b]),
                            z = !0)
                        }, this));
                    z && (e.z != void 0 && (r = g.perspective,
                    r == void 0 && (r = 800),
                    q = f.parent(),
                    q.data("style") || q.data("style", q.attr("style") || ""),
                    q.attr("style", "perspective:" + r + "px; -webkit-perspective:" + r + "px; " + q.data("style"))),
                    e.scaleX == void 0 && (e.scaleX = 1),
                    e.scaleY == void 0 && (e.scaleY = 1),
                    e.scaleZ == void 0 && (e.scaleZ = 1),
                    e.scale != void 0 && (e.scaleX *= e.scale,
                    e.scaleY *= e.scale,
                    e.scaleZ *= e.scale),
                    B = "translate3d(" + (e.x ? e.x : 0) + "px, " + (e.y ? e.y : 0) + "px, " + (e.z ? e.z : 0) + "px)",
                    C = "rotateX(" + (e.rotateX ? e.rotateX : 0) + "deg) rotateY(" + (e.rotateY ? e.rotateY : 0) + "deg) rotateZ(" + (e.rotateZ ? e.rotateZ : 0) + "deg)",
                    D = "scaleX(" + e.scaleX + ") scaleY(" + e.scaleY + ") scaleZ(" + e.scaleZ + ")",
                    x = B + " " + C + " " + D + ";",
                    this._log(x),
                    f.attr("style", "transform:" + x + " -webkit-transform:" + x + " " + t))
                }, this)),
                window.requestAnimationFrame ? window.requestAnimationFrame(a.proxy(this._onScroll, this, !1)) : this._requestAnimationFrame(a.proxy(this._onScroll, this, !1))
            }
        };
        a(window).innerWidth() >= 1201 && b.init()
    })
}
)(jQuery)
