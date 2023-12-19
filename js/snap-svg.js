!function(m) {
    var c, b, i = "0.4.2", f = "hasOwnProperty", e = /[\.\/]/, g = /\s*,\s*/, h = "*", j = function(a, b) {
        return a - b
    }, d = {
        n: {}
    }, k = function() {
        for (var a = 0, b = this.length; b > a; a++)
            if ("undefined" != typeof this[a])
                return this[a]
    }, l = function() {
        for (var a = this.length; --a; )
            if ("undefined" != typeof this[a])
                return this[a]
    }, a = function(o, p) {
        var d, q, m, g, i, h, n, f, s, e, r;
        o = String(o),
        q = b,
        m = Array.prototype.slice.call(arguments, 2),
        g = a.listeners(o),
        i = 0,
        h = [],
        n = {},
        f = [],
        s = c,
        f.firstDefined = k,
        f.lastDefined = l,
        c = o,
        b = 0;
        for (e = 0,
        r = g.length; r > e; e++)
            "zIndex"in g[e] && (h.push(g[e].zIndex),
            g[e].zIndex < 0 && (n[g[e].zIndex] = g[e]));
        for (h.sort(j); h[i] < 0; )
            if (d = n[h[i++]],
            f.push(d.apply(p, m)),
            b)
                return b = q,
                f;
        for (e = 0; r > e; e++)
            if (d = g[e],
            "zIndex"in d)
                if (d.zIndex == h[i]) {
                    if (f.push(d.apply(p, m)),
                    b)
                        break;
                    do
                        if (i++,
                        d = n[h[i]],
                        d && f.push(d.apply(p, m)),
                        b)
                            break;
                    while (d)
                } else
                    n[d.zIndex] = d;
            else if (f.push(d.apply(p, m)),
            b)
                break;
        return b = q,
        c = s,
        f
    };
    a._events = d,
    a.listeners = function(p) {
        var b, o, i, c, n, a, l, j, m = p.split(e), f = d, g = [f], k = [];
        for (c = 0,
        n = m.length; n > c; c++) {
            for (j = [],
            a = 0,
            l = g.length; l > a; a++)
                for (f = g[a].n,
                o = [f[m[c]], f[h]],
                i = 2; i--; )
                    b = o[i],
                    b && (j.push(b),
                    k = k.concat(b.f || []));
            g = j
        }
        return k
    }
    ,
    a.on = function(b, a) {
        if (b = String(b),
        "function" != typeof a)
            return function() {}
            ;
        for (var f = b.split(g), c = 0, h = f.length; h > c; c++)
            !function(i) {
                for (var h, f = i.split(e), b = d, c = 0, g = f.length; g > c; c++)
                    b = b.n,
                    b = b.hasOwnProperty(f[c]) && b[f[c]] || (b[f[c]] = {
                        n: {}
                    });
                for (b.f = b.f || [],
                c = 0,
                g = b.f.length; g > c; c++)
                    if (b.f[c] == a) {
                        h = !0;
                        break
                    }
                !h && b.f.push(a)
            }(f[c]);
        return function(b) {
            +b == +b && (a.zIndex = +b)
        }
    }
    ,
    a.f = function(b) {
        var c = [].slice.call(arguments, 1);
        return function() {
            a.apply(null, [b, null].concat(c).concat([].slice.call(arguments, 0)))
        }
    }
    ,
    a.stop = function() {
        b = 1
    }
    ,
    a.nt = function(a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(c) : c
    }
    ,
    a.nts = function() {
        return c.split(e)
    }
    ,
    a.off = a.unbind = function(r, q) {
        var k, i, l, b, j, n, c, o, m, p;
        if (!r)
            return void (a._events = d = {
                n: {}
            });
        if (k = r.split(g),
        k.length > 1)
            for (i = 0,
            l = k.length; l > i; i++)
                a.off(k[i], q);
        else {
            k = r.split(e),
            m = [d];
            for (i = 0,
            l = k.length; l > i; i++)
                for (c = 0; c < m.length; c += n.length - 2) {
                    if (n = [c, 1],
                    b = m[c].n,
                    k[i] != h)
                        b[k[i]] && n.push(b[k[i]]);
                    else
                        for (j in b)
                            b[f](j) && n.push(b[j]);
                    m.splice.apply(m, n)
                }
            for (i = 0,
            l = m.length; l > i; i++)
                for (b = m[i]; b.n; ) {
                    if (q) {
                        {
                            if (b.f) {
                                for (c = 0,
                                o = b.f.length; o > c; c++)
                                    if (b.f[c] == q) {
                                        b.f.splice(c, 1);
                                        break
                                    }
                                !b.f.length && delete b.f
                            }
                            for (j in b.n)
                                if (b.n[f](j) && b.n[j].f) {
                                    p = b.n[j].f;
                                    for (c = 0,
                                    o = p.length; o > c; c++)
                                        if (p[c] == q) {
                                            p.splice(c, 1);
                                            break
                                        }
                                    !p.length && delete b.n[j].f
                                }
                        }
                    } else {
                        delete b.f;
                        for (j in b.n)
                            b.n[f](j) && b.n[j].f && delete b.n[j].f
                    }
                    b = b.n
                }
        }
    }
    ,
    a.once = function(b, d) {
        var c = function() {
            return a.unbind(b, c),
            d.apply(this, arguments)
        };
        return a.on(b, c)
    }
    ,
    a.version = i,
    a.toString = function() {
        return "You are running Eve " + i
    }
    ,
    "undefined" != typeof module && module.exports ? module.exports = a : "function" == typeof define && define.amd ? define("eve", [], function() {
        return a
    }) : m.eve = a
}(this),
function(a, b) {
    if ("function" == typeof define && define.amd)
        define(["eve"], function(c) {
            return b(a, c)
        });
    else if ("undefined" != typeof exports) {
        var c = require("eve");
        module.exports = b(a, c)
    } else
        b(a, a.eve)
}(window || this, function(c, a) {
    var d = function(f) {
        var b = {}
          , d = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || c.msRequestAnimationFrame || function(a) {
            setTimeout(a, 16)
        }
          , q = Array.isArray || function(a) {
            return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
        }
          , j = 0
          , g = "M" + (+new Date).toString(36)
          , h = function() {
            return g + (j++).toString(36)
        }
          , i = Date.now || function() {
            return +new Date
        }
          , r = function(b) {
            var a = this, c;
            if (null == b)
                return a.s;
            c = a.s - b,
            a.b += a.dur * c,
            a.B += a.dur * c,
            a.s = b
        }
          , k = function(a) {
            var b = this;
            return null == a ? b.spd : void (b.spd = a)
        }
          , l = function(b) {
            var a = this;
            return null == b ? a.dur : (a.s = a.s * b / a.dur,
            void (a.dur = b))
        }
          , m = function() {
            var a = this;
            delete b[a.id],
            a.update(),
            f("mina.stop." + a.id, a)
        }
          , n = function() {
            var a = this;
            a.pdif || (delete b[a.id],
            a.update(),
            a.pdif = a.get() - a.b)
        }
          , o = function() {
            var a = this;
            a.pdif && (a.b = a.get() - a.pdif,
            delete a.pdif,
            b[a.id] = a)
        }
          , p = function() {
            var c, a = this, b, d;
            if (q(a.start)) {
                c = [];
                for (b = 0,
                d = a.start.length; d > b; b++)
                    c[b] = +a.start[b] + (a.end[b] - a.start[b]) * a.easing(a.s)
            } else
                c = +a.start + (a.end - a.start) * a.easing(a.s);
            a.set(c)
        }
          , e = function() {
            var c = 0, g, a, h;
            for (g in b)
                b.hasOwnProperty(g) && (a = b[g],
                h = a.get(),
                c++,
                a.s = (h - a.b) / (a.dur / a.spd),
                a.s >= 1 && (delete b[g],
                a.s = 1,
                c--,
                function(a) {
                    setTimeout(function() {
                        f("mina.finish." + a.id, a)
                    })
                }(a)),
                a.update());
            c && d(e)
        }
          , a = function(j, u, g, v, q, s, t) {
            var c = {
                id: h(),
                start: j,
                end: u,
                b: g,
                s: 0,
                dur: v - g,
                spd: 1,
                get: q,
                set: s,
                easing: t || a.linear,
                status: r,
                speed: k,
                duration: l,
                stop: m,
                pause: n,
                resume: o,
                update: p
            }, i, f;
            b[c.id] = c,
            f = 0;
            for (i in b)
                if (b.hasOwnProperty(i) && (f++,
                2 == f))
                    break;
            return 1 == f && d(e),
            c
        };
        return a.time = i,
        a.getById = function(a) {
            return b[a] || null
        }
        ,
        a.linear = function(a) {
            return a
        }
        ,
        a.easeout = function(a) {
            return Math.pow(a, 1.7)
        }
        ,
        a.easein = function(a) {
            return Math.pow(a, .48)
        }
        ,
        a.easeinout = function(c) {
            if (1 == c)
                return 1;
            if (0 == c)
                return 0;
            var b = .48 - c / 1.04
              , d = Math.sqrt(.1734 + b * b)
              , e = d - b
              , g = Math.pow(Math.abs(e), 1 / 3) * (0 > e ? -1 : 1)
              , f = -d - b
              , h = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1)
              , a = g + h + .5;
            return 3 * (1 - a) * a * a + a * a * a
        }
        ,
        a.backin = function(a) {
            if (1 == a)
                return 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }
        ,
        a.backout = function(a) {
            if (0 == a)
                return 0;
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        }
        ,
        a.elastic = function(a) {
            return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
        }
        ,
        a.bounce = function(a) {
            var c, d = 7.5625, b = 2.75;
            return 1 / b > a ? c = d * a * a : 2 / b > a ? (a -= 1.5 / b,
            c = d * a * a + .75) : 2.5 / b > a ? (a -= 2.25 / b,
            c = d * a * a + .9375) : (a -= 2.625 / b,
            c = d * a * a + .984375),
            c
        }
        ,
        c.mina = a,
        a
    }("undefined" == typeof a ? function() {}
    : a)
      , b = function(J) {
        var e, j, l, f, p, d, y, q, x, v, s, L, K, A, M, N, O, H, Q, R, w, G, t, m, D, P, X, n, E, B, U, F, S;
        function b(a, d) {
            if (a) {
                if (a.nodeType)
                    return i(a);
                if (c(a, "array") && b.set)
                    return b.set.apply(b, a);
                if (a instanceof o)
                    return a;
                if (null == d)
                    return a = e.doc.querySelector(String(a)),
                    i(a)
            }
            return a = null == a ? "100%" : a,
            d = null == d ? "100%" : d,
            new k(a,d)
        }
        function h(a, b) {
            var c, d;
            if (b) {
                if ("#text" == a && (a = e.doc.createTextNode(b.text || b["#text"] || "")),
                "#comment" == a && (a = e.doc.createComment(b.text || b["#text"] || "")),
                "string" == typeof a && (a = h(a)),
                "string" == typeof b)
                    return 1 == a.nodeType ? "xlink:" == b.substring(0, 6) ? a.getAttributeNS(G, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(t, b.substring(4)) : a.getAttribute(b) : "text" == b ? a.nodeValue : null;
                if (1 == a.nodeType) {
                    for (c in b)
                        b[j](c) && (d = l(b[c]),
                        d ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(G, c.substring(6), d) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(t, c.substring(4), d) : a.setAttribute(c, d) : a.removeAttribute(c))
                } else
                    "text"in b && (a.nodeValue = b.text)
            } else
                a = e.doc.createElementNS(t, a);
            return a
        }
        function c(a, b) {
            return b = l.prototype.toLowerCase.call(b),
            "finite" == b ? isFinite(a) : !!("array" == b && (a instanceof Array || Array.isArray && Array.isArray(a))) || "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || L.call(a).slice(8, -1).toLowerCase() == b
        }
        function V(a) {
            var c, b;
            if ("function" == typeof a || Object(a) !== a)
                return a;
            c = new a.constructor;
            for (b in a)
                a[j](b) && (c[b] = V(a[b]));
            return c
        }
        function ab(a, c) {
            for (var b = 0, d = a.length; d > b; b++)
                if (a[b] === c)
                    return a.push(a.splice(b, 1)[0])
        }
        function r(c, d, b) {
            function a() {
                var h = Array.prototype.slice.call(arguments, 0)
                  , e = h.join("␀")
                  , f = a.cache = a.cache || {}
                  , g = a.count = a.count || [];
                return f[j](e) ? (ab(g, e),
                b ? b(f[e]) : f[e]) : (g.length >= 1e3 && delete f[g.shift()],
                g.push(e),
                f[e] = c.apply(d, h),
                b ? b(f[e]) : f[e])
            }
            return a
        }
        function C(b, c, e, f, a, g) {
            if (null == a) {
                var h = b - e
                  , i = c - f;
                return h || i ? (180 + 180 * d.atan2(-i, -h) / v + 360) % 360 : 0
            }
            return C(b, c, a, g) - C(e, f, a, g)
        }
        function I(a) {
            return a % 360 * v / 180
        }
        function aa(a) {
            return 180 * a / v % 360
        }
        function $(a) {
            var b = [];
            return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(e, c, a) {
                return a = a.split(/\s*,\s*|\s+/),
                "rotate" == c && 1 == a.length && a.push(0, 0),
                "scale" == c && (a.length > 2 ? a = a.slice(0, 2) : 2 == a.length && a.push(0, 0),
                1 == a.length && a.push(a[0], 0, 0)),
                b.push("skewX" == c ? ["m", 1, 0, d.tan(I(a[0])), 1, 0, 0] : "skewY" == c ? ["m", 1, d.tan(I(a[0])), 0, 1, 0, 0] : [c.charAt(0)].concat(a)),
                e
            }),
            b
        }
        function _(r, n) {
            var m = U(r), c = new b.Matrix, k, q, p, o, h, g, d, a, f, i, j, e;
            if (m)
                for (k = 0,
                q = m.length; q > k; k++)
                    a = m[k],
                    f = a.length,
                    i = l(a[0]).toLowerCase(),
                    j = a[0] != i,
                    e = j ? c.invert() : 0,
                    "t" == i && 2 == f ? c.translate(a[1], 0) : "t" == i && 3 == f ? j ? (p = e.x(0, 0),
                    o = e.y(0, 0),
                    h = e.x(a[1], a[2]),
                    g = e.y(a[1], a[2]),
                    c.translate(h - p, g - o)) : c.translate(a[1], a[2]) : "r" == i ? 2 == f ? (d = d || n,
                    c.rotate(a[1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == f && (j ? (h = e.x(a[2], a[3]),
                    g = e.y(a[2], a[3]),
                    c.rotate(a[1], h, g)) : c.rotate(a[1], a[2], a[3])) : "s" == i ? 2 == f || 3 == f ? (d = d || n,
                    c.scale(a[1], a[f - 1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == f ? j ? (h = e.x(a[2], a[3]),
                    g = e.y(a[2], a[3]),
                    c.scale(a[1], a[1], h, g)) : c.scale(a[1], a[1], a[2], a[3]) : 5 == f && (j ? (h = e.x(a[3], a[4]),
                    g = e.y(a[3], a[4]),
                    c.scale(a[1], a[2], h, g)) : c.scale(a[1], a[2], a[3], a[4])) : "m" == i && 7 == f && c.add(a[1], a[2], a[3], a[4], a[5], a[6]);
            return c
        }
        function Z(a) {
            var d = a.node.ownerSVGElement && i(a.node.ownerSVGElement) || a.node.parentNode && i(a.node.parentNode) || b.select("svg") || b(0, 0)
              , e = d.select("defs")
              , c = null != e && e.node;
            return c || (c = u("defs", d.node).node),
            c
        }
        function T(a) {
            return a.node.ownerSVGElement && i(a.node.ownerSVGElement) || b.select("svg")
        }
        function Y(e, f, j) {
            function b(a) {
                if (null == a)
                    return s;
                if (a == +a)
                    return a;
                h(d, {
                    width: a
                });
                try {
                    return d.getBBox().width
                } catch (a) {
                    return 0
                }
            }
            function c(a) {
                if (null == a)
                    return s;
                if (a == +a)
                    return a;
                h(d, {
                    height: a
                });
                try {
                    return d.getBBox().height
                } catch (a) {
                    return 0
                }
            }
            function a(a, b) {
                null == f ? i[a] = b(e.attr(a) || 0) : a == f && (i = b(null == j ? e.attr(a) || 0 : j))
            }
            var g = T(e).node
              , i = {}
              , d = g.querySelector(".svg---mgr");
            switch (d || (d = h("rect"),
            h(d, {
                x: -9e9,
                y: -9e9,
                width: 10,
                height: 10,
                class: "svg---mgr",
                fill: "none"
            }),
            g.appendChild(d)),
            e.type) {
            case "rect":
                a("rx", b),
                a("ry", c);
            case "image":
                a("width", b),
                a("height", c);
            case "text":
                a("x", b),
                a("y", c);
                break;
            case "circle":
                a("cx", b),
                a("cy", c),
                a("r", b);
                break;
            case "ellipse":
                a("cx", b),
                a("cy", c),
                a("rx", b),
                a("ry", c);
                break;
            case "line":
                a("x1", b),
                a("x2", b),
                a("y1", c),
                a("y2", c);
                break;
            case "marker":
                a("refX", b),
                a("markerWidth", b),
                a("refY", c),
                a("markerHeight", c);
                break;
            case "radialGradient":
                a("fx", b),
                a("fy", c);
                break;
            case "tspan":
                a("dx", b),
                a("dy", c);
                break;
            default:
                a(f, b)
            }
            return g.removeChild(d),
            i
        }
        function ac(b) {
            var a, f, d, e;
            c(b, "array") || (b = Array.prototype.slice.call(arguments, 0));
            for (a = 0,
            f = 0,
            d = this.node; this[a]; )
                delete this[a++];
            for (a = 0; a < b.length; a++)
                "set" == b[a].type ? b[a].forEach(function(a) {
                    d.appendChild(a.node)
                }) : d.appendChild(b[a].node);
            e = d.childNodes;
            for (a = 0; a < e.length; a++)
                this[f++] = i(e[a]);
            return this
        }
        function o(a) {
            var b, d, c;
            if (a.snap in m)
                return m[a.snap];
            try {
                b = a.ownerSVGElement
            } catch (a) {}
            if (this.node = a,
            b && (this.paper = new k(b)),
            this.type = a.tagName || a.nodeName,
            d = this.id = w(this),
            this.anims = {},
            this._ = {
                transform: []
            },
            a.snap = d,
            m[d] = this,
            "g" == this.type && (this.add = ac),
            this.type in {
                g: 1,
                mask: 1,
                pattern: 1,
                symbol: 1
            })
                for (c in k.prototype)
                    k.prototype[j](c) && (this[c] = k.prototype[c])
        }
        function z(a) {
            this.node = a
        }
        function u(b, c) {
            var a = h(b), d;
            return c.appendChild(a),
            d = i(a),
            d
        }
        function k(b, l) {
            var a, c, d, g = k.prototype, i, f;
            if (b && "svg" == b.tagName) {
                if (b.snap in m)
                    return m[b.snap];
                i = b.ownerDocument,
                a = new o(b),
                c = b.getElementsByTagName("desc")[0],
                d = b.getElementsByTagName("defs")[0],
                c || (c = h("desc"),
                c.appendChild(i.createTextNode("Created with Snap")),
                a.node.appendChild(c)),
                d || (d = h("defs"),
                a.node.appendChild(d)),
                a.defs = d;
                for (f in g)
                    g[j](f) && (a[f] = g[f]);
                a.paper = a.root = a
            } else
                a = u("svg", e.doc.body),
                h(a.node, {
                    height: l,
                    version: 1.1,
                    width: b,
                    xmlns: t
                });
            return a
        }
        function i(a) {
            return a ? a instanceof o || a instanceof z ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new k(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new k(a.contentDocument.getElementsByTagName("svg")[0]) : new o(a) : a
        }
        function W(b, e) {
            for (var a = 0, f = b.length, c, d; f > a; a++)
                c = {
                    type: b[a].type,
                    attr: b[a].attr()
                },
                d = b[a].children(),
                e.push(c),
                d.length && W(d, c.childNodes = [])
        }
        return b.version = "0.4.0",
        b.toString = function() {
            return "Snap v" + this.version
        }
        ,
        b._ = {},
        e = {
            win: J.window,
            doc: J.window.document
        },
        b._.glob = e,
        j = "hasOwnProperty",
        l = String,
        f = parseFloat,
        p = parseInt,
        d = Math,
        y = d.max,
        q = d.min,
        x = d.abs,
        v = (d.pow,
        d.PI),
        s = (d.round,
        ""),
        L = Object.prototype.toString,
        K = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
        A = (b._.separator = /[,\s]+/,
        /[\s]*,[\s]*/),
        M = {
            hs: 1,
            rg: 1
        },
        N = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
        O = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
        H = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi,
        Q = 0,
        R = "S" + (+new Date).toString(36),
        w = function(a) {
            return (a && a.type ? a.type : s) + R + (Q++).toString(36)
        }
        ,
        G = "http://www.w3.org/1999/xlink",
        t = "http://www.w3.org/2000/svg",
        m = {},
        b.url = function(a) {
            return "url('#" + a + "')"
        }
        ,
        b._.$ = h,
        b._.id = w,
        b.format = function() {
            var a = /\{([^\}]+)\}/g
              , b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g
              , c = function(d, e, c) {
                var a = c;
                return e.replace(b, function(e, b, f, c, d) {
                    b = b || c,
                    a && (b in a && (a = a[b]),
                    "function" == typeof a && d && (a = a()))
                }),
                a = (null == a || a == c ? d : a) + ""
            };
            return function(b, d) {
                return l(b).replace(a, function(a, b) {
                    return c(a, b, d)
                })
            }
        }(),
        b._.clone = V,
        b._.cacher = r,
        b.rad = I,
        b.deg = aa,
        b.sin = function(a) {
            return d.sin(b.rad(a))
        }
        ,
        b.tan = function(a) {
            return d.tan(b.rad(a))
        }
        ,
        b.cos = function(a) {
            return d.cos(b.rad(a))
        }
        ,
        b.asin = function(a) {
            return b.deg(d.asin(a))
        }
        ,
        b.acos = function(a) {
            return b.deg(d.acos(a))
        }
        ,
        b.atan = function(a) {
            return b.deg(d.atan(a))
        }
        ,
        b.atan2 = function(a) {
            return b.deg(d.atan2(a))
        }
        ,
        b.angle = C,
        b.len = function(a, c, d, e) {
            return Math.sqrt(b.len2(a, c, d, e))
        }
        ,
        b.len2 = function(a, b, c, d) {
            return (a - c) * (a - c) + (b - d) * (b - d)
        }
        ,
        b.closestPoint = function(s, r, q) {
            var c, d, l, k, e, g, b, a, f, n, o, h, i, p, j;
            function m(a) {
                var b = a.x - r
                  , c = a.y - q;
                return b * b + c * c
            }
            for (c,
            d,
            l,
            k,
            e = s.node,
            g = e.getTotalLength(),
            b = g / e.pathSegList.numberOfItems * .125,
            a = 1 / 0,
            f = 0; g >= f; f += b)
                (k = m(l = e.getPointAtLength(f))) < a && (c = l,
                d = f,
                a = k);
            for (b *= .5; b > .5; )
                (h = d - b) >= 0 && (p = m(n = e.getPointAtLength(h))) < a ? (c = n,
                d = h,
                a = p) : (i = d + b) <= g && (j = m(o = e.getPointAtLength(i))) < a ? (c = o,
                d = i,
                a = j) : b *= .5;
            return c = {
                x: c.x,
                y: c.y,
                length: d,
                distance: Math.sqrt(a)
            }
        }
        ,
        b.is = c,
        b.snapTo = function(a, d, b) {
            var f, e;
            if (b = c(b, "finite") ? b : 10,
            c(a, "array")) {
                for (f = a.length; f--; )
                    if (x(a[f] - d) <= b)
                        return a[f]
            } else {
                if (a = +a,
                e = d % a,
                b > e)
                    return d - e;
                if (e > a - b)
                    return d - e + a
            }
            return d
        }
        ,
        b.getRGB = r(function(m) {
            if (!m || (m = l(m)).indexOf("-") + 1)
                return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: n
                };
            if ("none" == m)
                return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: n
                };
            if (!(M[j](m.toLowerCase().substring(0, 2)) || "#" == m.charAt()) && (m = D(m)),
            !m)
                return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: n
                };
            var g, h, i, k, o, a, e = m.match(K);
            return e ? (e[2] && (i = p(e[2].substring(5), 16),
            h = p(e[2].substring(3, 5), 16),
            g = p(e[2].substring(1, 3), 16)),
            e[3] && (i = p((o = e[3].charAt(3)) + o, 16),
            h = p((o = e[3].charAt(2)) + o, 16),
            g = p((o = e[3].charAt(1)) + o, 16)),
            e[4] && (a = e[4].split(A),
            g = f(a[0]),
            "%" == a[0].slice(-1) && (g *= 2.55),
            h = f(a[1]),
            "%" == a[1].slice(-1) && (h *= 2.55),
            i = f(a[2]),
            "%" == a[2].slice(-1) && (i *= 2.55),
            "rgba" == e[1].toLowerCase().slice(0, 4) && (k = f(a[3])),
            a[3] && "%" == a[3].slice(-1) && (k /= 100)),
            e[5] ? (a = e[5].split(A),
            g = f(a[0]),
            "%" == a[0].slice(-1) && (g /= 100),
            h = f(a[1]),
            "%" == a[1].slice(-1) && (h /= 100),
            i = f(a[2]),
            "%" == a[2].slice(-1) && (i /= 100),
            ("deg" == a[0].slice(-3) || "°" == a[0].slice(-1)) && (g /= 360),
            "hsba" == e[1].toLowerCase().slice(0, 4) && (k = f(a[3])),
            a[3] && "%" == a[3].slice(-1) && (k /= 100),
            b.hsb2rgb(g, h, i, k)) : e[6] ? (a = e[6].split(A),
            g = f(a[0]),
            "%" == a[0].slice(-1) && (g /= 100),
            h = f(a[1]),
            "%" == a[1].slice(-1) && (h /= 100),
            i = f(a[2]),
            "%" == a[2].slice(-1) && (i /= 100),
            ("deg" == a[0].slice(-3) || "°" == a[0].slice(-1)) && (g /= 360),
            "hsla" == e[1].toLowerCase().slice(0, 4) && (k = f(a[3])),
            a[3] && "%" == a[3].slice(-1) && (k /= 100),
            b.hsl2rgb(g, h, i, k)) : (g = q(d.round(g), 255),
            h = q(d.round(h), 255),
            i = q(d.round(i), 255),
            k = q(y(k, 0), 1),
            e = {
                r: g,
                g: h,
                b: i,
                toString: n
            },
            e.hex = "#" + (16777216 | i | h << 8 | g << 16).toString(16).slice(1),
            e.opacity = c(k, "finite") ? k : 1,
            e)) : {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: n
            }
        }, b),
        b.hsb = r(function(a, c, d) {
            return b.hsb2rgb(a, c, d).hex
        }),
        b.hsl = r(function(a, c, d) {
            return b.hsl2rgb(a, c, d).hex
        }),
        b.rgb = r(function(b, e, f, g) {
            if (c(g, "finite")) {
                var a = d.round;
                return "rgba(" + [a(b), a(e), a(f), +g.toFixed(2)] + ")"
            }
            return "#" + (16777216 | f | e << 8 | b << 16).toString(16).slice(1)
        }),
        D = function(c) {
            var a = e.doc.getElementsByTagName("head")[0] || e.doc.getElementsByTagName("svg")[0]
              , b = "rgb(255, 0, 0)";
            return (D = r(function(c) {
                if ("red" == c.toLowerCase())
                    return b;
                a.style.color = b,
                a.style.color = c;
                var d = e.doc.defaultView.getComputedStyle(a, s).getPropertyValue("color");
                return d == b ? null : d
            }))(c)
        }
        ,
        P = function() {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        }
        ,
        X = function() {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        }
        ,
        n = function() {
            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
        }
        ,
        E = function(a, d, e) {
            if (null == d && c(a, "object") && "r"in a && "g"in a && "b"in a && (e = a.b,
            d = a.g,
            a = a.r),
            null == d && c(a, string)) {
                var f = b.getRGB(a);
                a = f.r,
                d = f.g,
                e = f.b
            }
            return (a > 1 || d > 1 || e > 1) && (a /= 255,
            d /= 255,
            e /= 255),
            [a, d, e]
        }
        ,
        B = function(a, e, f, g) {
            a = d.round(255 * a),
            e = d.round(255 * e),
            f = d.round(255 * f);
            var h = {
                r: a,
                g: e,
                b: f,
                opacity: c(g, "finite") ? g : 1,
                hex: b.rgb(a, e, f),
                toString: n
            };
            return c(g, "finite") && (h.opacity = g),
            h
        }
        ,
        b.color = function(a) {
            var d;
            return c(a, "object") && "h"in a && "s"in a && "b"in a ? (d = b.hsb2rgb(a),
            a.r = d.r,
            a.g = d.g,
            a.b = d.b,
            a.opacity = 1,
            a.hex = d.hex) : c(a, "object") && "h"in a && "s"in a && "l"in a ? (d = b.hsl2rgb(a),
            a.r = d.r,
            a.g = d.g,
            a.b = d.b,
            a.opacity = 1,
            a.hex = d.hex) : (c(a, "string") && (a = b.getRGB(a)),
            c(a, "object") && "r"in a && "g"in a && "b"in a && !("error"in a) ? (d = b.rgb2hsl(a),
            a.h = d.h,
            a.s = d.s,
            a.l = d.l,
            d = b.rgb2hsb(a),
            a.v = d.b) : (a = {
                hex: "none"
            },
            a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1,
            a.error = 1)),
            a.toString = n,
            a
        }
        ,
        b.hsb2rgb = function(a, j, h, i) {
            c(a, "object") && "h"in a && "s"in a && "b"in a && (h = a.b,
            j = a.s,
            i = a.o,
            a = a.h),
            a *= 360;
            var e, f, g, d, b;
            return a = a % 360 / 60,
            b = h * j,
            d = b * (1 - x(a % 2 - 1)),
            e = f = g = h - b,
            a = ~~a,
            e += [b, d, 0, 0, d, b][a],
            f += [d, b, b, d, 0, 0][a],
            g += [0, 0, d, b, b, d][a],
            B(e, f, g, i)
        }
        ,
        b.hsl2rgb = function(a, f, e, j) {
            c(a, "object") && "h"in a && "s"in a && "l"in a && (e = a.l,
            f = a.s,
            a = a.h),
            (a > 1 || f > 1 || e > 1) && (a /= 360,
            f /= 100,
            e /= 100),
            a *= 360;
            var g, h, i, d, b;
            return a = a % 360 / 60,
            b = 2 * f * (.5 > e ? e : 1 - e),
            d = b * (1 - x(a % 2 - 1)),
            g = h = i = e - b / 2,
            a = ~~a,
            g += [b, d, 0, 0, d, b][a],
            h += [d, b, b, d, 0, 0][a],
            i += [0, 0, d, b, b, d][a],
            B(g, h, i, j)
        }
        ,
        b.rgb2hsb = function(b, c, a) {
            a = E(b, c, a),
            b = a[0],
            c = a[1],
            a = a[2];
            var f, g, e, d;
            return e = y(b, c, a),
            d = e - q(b, c, a),
            f = 0 == d ? null : e == b ? (c - a) / d : e == c ? (a - b) / d + 2 : (b - c) / d + 4,
            f = (f + 360) % 6 * 60 / 360,
            g = 0 == d ? 0 : d / e,
            {
                h: f,
                s: g,
                b: e,
                toString: P
            }
        }
        ,
        b.rgb2hsl = function(c, d, a) {
            a = E(c, d, a),
            c = a[0],
            d = a[1],
            a = a[2];
            var g, i, e, f, h, b;
            return f = y(c, d, a),
            h = q(c, d, a),
            b = f - h,
            g = 0 == b ? null : f == c ? (d - a) / b : f == d ? (a - c) / b + 2 : (c - d) / b + 4,
            g = (g + 360) % 6 * 60 / 360,
            e = (f + h) / 2,
            i = 0 == b ? 0 : .5 > e ? b / (2 * e) : b / (2 - 2 * e),
            {
                h: g,
                s: i,
                l: e,
                toString: X
            }
        }
        ,
        b.parsePathString = function(d) {
            var e, f, a;
            return d ? (e = b.path(d),
            e.arr) ? b.path.clone(e.arr) : (f = {
                a: 7,
                c: 6,
                o: 2,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                u: 3,
                z: 0
            },
            a = [],
            c(d, "array") && c(d[0], "array") && (a = b.path.clone(d)),
            a.length || l(d).replace(N, function(g, c, e) {
                var b = []
                  , d = c.toLowerCase();
                if (e.replace(H, function(c, a) {
                    a && b.push(+a)
                }),
                "m" == d && b.length > 2 && (a.push([c].concat(b.splice(0, 2))),
                d = "l",
                c = "m" == c ? "l" : "L"),
                "o" == d && 1 == b.length && a.push([c, b[0]]),
                "r" == d)
                    a.push([c].concat(b));
                else
                    for (; b.length >= f[d] && (a.push([c].concat(b.splice(0, f[d]))),
                    f[d]); )
                        ;
            }),
            a.toString = b.path.toString,
            e.arr = b.path.clone(a),
            a) : null
        }
        ,
        U = b.parseTransformString = function(a) {
            if (!a)
                return null;
            var d = [];
            return c(a, "array") && c(a[0], "array") && (d = b.path.clone(a)),
            d.length || l(a).replace(O, function(e, a, c) {
                {
                    var b = [];
                    a.toLowerCase()
                }
                c.replace(H, function(c, a) {
                    a && b.push(+a)
                }),
                d.push([a].concat(b))
            }),
            d.toString = b.path.toString,
            d
        }
        ,
        b._.svgTransform2string = $,
        b._.rgTransform = /^[a-z][\s]*-?\.?\d/i,
        b._.transform2matrix = _,
        b._unit2px = Y,
        e.doc.contains || e.doc.compareDocumentPosition ? function(a, c) {
            var d = 9 == a.nodeType ? a.documentElement : a
              , b = c && c.parentNode;
            return a == b || !(!b || 1 != b.nodeType || !(d.contains ? d.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)))
        }
        : function(b, a) {
            if (a)
                for (; a; )
                    if (a = a.parentNode,
                    a == b)
                        return !0;
            return !1
        }
        ,
        b._.getSomeDefs = Z,
        b._.getSomeSVG = T,
        b.select = function(a) {
            return a = l(a).replace(/([^\\]):/g, "$1\\:"),
            i(e.doc.querySelector(a))
        }
        ,
        b.selectAll = function(f) {
            for (var c = e.doc.querySelectorAll(f), d = (b.set || Array)(), a = 0; a < c.length; a++)
                d.push(i(c[a]));
            return d
        }
        ,
        setInterval(function() {
            var b, c, a;
            for (b in m)
                m[j](b) && (c = m[b],
                a = c.node,
                ("svg" != c.type && !a.ownerSVGElement || "svg" == c.type && (!a.parentNode || "ownerSVGElement"in a.parentNode && !a.ownerSVGElement)) && delete m[b])
        }, 1e4),
        o.prototype.attr = function(b, l) {
            var d = this, f = d.node, g, i, e, m, k, h;
            if (!b) {
                if (1 != f.nodeType)
                    return {
                        text: f.nodeValue
                    };
                for (g = f.attributes,
                i = {},
                e = 0,
                m = g.length; m > e; e++)
                    i[g[e].nodeName] = g[e].nodeValue;
                return i
            }
            if (c(b, "string")) {
                if (!(arguments.length > 1))
                    return a("snap.util.getattr." + b, d).firstDefined();
                k = {},
                k[b] = l,
                b = k
            }
            for (h in b)
                b[j](h) && a("snap.util.attr." + h, d, b[h]);
            return d
        }
        ,
        b.parse = function(a) {
            var b = e.doc.createDocumentFragment()
              , c = !0
              , d = e.doc.createElement("div");
            if (a = l(a),
            a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>",
            c = !1),
            d.innerHTML = a,
            a = d.getElementsByTagName("svg")[0])
                if (c)
                    b = a;
                else
                    for (; a.firstChild; )
                        b.appendChild(a.firstChild);
            return new z(b)
        }
        ,
        b.fragment = function() {
            for (var f = Array.prototype.slice.call(arguments, 0), c = e.doc.createDocumentFragment(), d = 0, g = f.length, a; g > d; d++)
                a = f[d],
                a.node && a.node.nodeType && c.appendChild(a.node),
                a.nodeType && c.appendChild(a),
                "string" == typeof a && c.appendChild(b.parse(a).node);
            return new z(c)
        }
        ,
        b._.make = u,
        b._.wrap = i,
        k.prototype.el = function(c, a) {
            var b = u(c, this.node);
            return a && b.attr(a),
            b
        }
        ,
        o.prototype.children = function() {
            for (var c = [], d = this.node.childNodes, a = 0, e = d.length; e > a; a++)
                c[a] = b(d[a]);
            return c
        }
        ,
        o.prototype.toJSON = function() {
            var a = [];
            return W([this], a),
            a[0]
        }
        ,
        a.on("snap.util.getattr", function() {
            var b = a.nt(), c;
            return b = b.substring(b.lastIndexOf(".") + 1),
            c = b.replace(/[A-Z]/g, function(a) {
                return "-" + a.toLowerCase()
            }),
            F[j](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : h(this.node, b)
        }),
        F = {
            "alignment-baseline": 0,
            "baseline-shift": 0,
            clip: 0,
            "clip-path": 0,
            "clip-rule": 0,
            color: 0,
            "color-interpolation": 0,
            "color-interpolation-filters": 0,
            "color-profile": 0,
            "color-rendering": 0,
            cursor: 0,
            direction: 0,
            display: 0,
            "dominant-baseline": 0,
            "enable-background": 0,
            fill: 0,
            "fill-opacity": 0,
            "fill-rule": 0,
            filter: 0,
            "flood-color": 0,
            "flood-opacity": 0,
            font: 0,
            "font-family": 0,
            "font-size": 0,
            "font-size-adjust": 0,
            "font-stretch": 0,
            "font-style": 0,
            "font-variant": 0,
            "font-weight": 0,
            "glyph-orientation-horizontal": 0,
            "glyph-orientation-vertical": 0,
            "image-rendering": 0,
            kerning: 0,
            "letter-spacing": 0,
            "lighting-color": 0,
            marker: 0,
            "marker-end": 0,
            "marker-mid": 0,
            "marker-start": 0,
            mask: 0,
            opacity: 0,
            overflow: 0,
            "pointer-events": 0,
            "shape-rendering": 0,
            "stop-color": 0,
            "stop-opacity": 0,
            stroke: 0,
            "stroke-dasharray": 0,
            "stroke-dashoffset": 0,
            "stroke-linecap": 0,
            "stroke-linejoin": 0,
            "stroke-miterlimit": 0,
            "stroke-opacity": 0,
            "stroke-width": 0,
            "text-anchor": 0,
            "text-decoration": 0,
            "text-rendering": 0,
            "unicode-bidi": 0,
            visibility: 0,
            "word-spacing": 0,
            "writing-mode": 0
        },
        a.on("snap.util.attr", function(c) {
            var b = a.nt(), d = {}, e, f;
            b = b.substring(b.lastIndexOf(".") + 1),
            d[b] = c,
            e = b.replace(/-(\w)/gi, function(b, a) {
                return a.toUpperCase()
            }),
            f = b.replace(/[A-Z]/g, function(a) {
                return "-" + a.toLowerCase()
            }),
            F[j](f) ? this.node.style[e] = null == c ? s : c : h(this.node, d)
        }),
        function() {}(k.prototype),
        b.ajax = function(j, d, e, i) {
            var b = new XMLHttpRequest, f = w(), h, g;
            if (b) {
                if (c(d, "function"))
                    i = e,
                    e = d,
                    d = null;
                else if (c(d, "object")) {
                    h = [];
                    for (g in d)
                        d.hasOwnProperty(g) && h.push(encodeURIComponent(g) + "=" + encodeURIComponent(d[g]));
                    d = h.join("&")
                }
                return b.open(d ? "POST" : "GET", j, !0),
                d && (b.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                b.setRequestHeader("Content-type", "application/x-www-form-urlencoded")),
                e && (a.once("snap.ajax." + f + ".0", e),
                a.once("snap.ajax." + f + ".200", e),
                a.once("snap.ajax." + f + ".304", e)),
                b.onreadystatechange = function() {
                    4 == b.readyState && a("snap.ajax." + f + "." + b.status, i, b)
                }
                ,
                4 == b.readyState ? b : (b.send(d),
                b)
            }
        }
        ,
        b.load = function(d, a, c) {
            b.ajax(d, function(e) {
                var d = b.parse(e.responseText);
                c ? a.call(c, d) : a(d)
            })
        }
        ,
        S = function(c) {
            var d = c.getBoundingClientRect()
              , e = c.ownerDocument
              , a = e.body
              , b = e.documentElement
              , f = b.clientTop || a.clientTop || 0
              , h = b.clientLeft || a.clientLeft || 0
              , i = d.top + (g.win.pageYOffset || b.scrollTop || a.scrollTop) - f
              , j = d.left + (g.win.pageXOffset || b.scrollLeft || a.scrollLeft) - h;
            return {
                y: i,
                x: j
            }
        }
        ,
        b.getElementByPoint = function(g, d) {
            var h = this, a = (h.canvas,
            e.doc.elementFromPoint(g, d)), f, b, c;
            return e.win.opera && "svg" == a.tagName && (f = S(a),
            b = a.createSVGRect(),
            b.x = g - f.x,
            b.y = d - f.y,
            b.width = b.height = 1,
            c = a.getIntersectionList(b, null),
            c.length && (a = c[c.length - 1])),
            a ? i(a) : null
        }
        ,
        b.plugin = function(a) {
            a(b, o, k, e, z)
        }
        ,
        e.win.Snap = b,
        b
    }(c || this);
    return b.plugin(function(b, u, x, w, p) {
        var e, k, h, q, f, l, n, j, g, r, m, i;
        function o(c, a) {
            var e, d;
            if (null == a) {
                if (e = !0,
                a = c.node.getAttribute("linearGradient" == c.type || "radialGradient" == c.type ? "gradientTransform" : "pattern" == c.type ? "patternTransform" : "transform"),
                !a)
                    return new b.Matrix;
                a = b._.svgTransform2string(a)
            } else
                a = b._.rgTransform.test(a) ? h(a).replace(/\.{3}|\u2026/g, c._.transform || "") : b._.svgTransform2string(a),
                k(a, "array") && (a = b.path ? b.path.toString.call(a) : h(a)),
                c._.transform = a;
            return d = b._.transform2matrix(a, c.getBBox(1)),
            e ? d : void (c.matrix = d)
        }
        function t(o) {
            var a, j, m, d, c, b, i, k, g, h, l;
            function e(b, d) {
                var a = f(b.node, d);
                a = a && a.match(m),
                a = a && a[2],
                a && "#" == a.charAt() && (a = a.substring(1),
                a && (c[a] = (c[a] || []).concat(function(c) {
                    var a = {};
                    a[d] = URL(c),
                    f(b.node, a)
                })))
            }
            function n(b) {
                var a = f(b.node, "xlink:href");
                a && "#" == a.charAt() && (a = a.substring(1),
                a && (c[a] = (c[a] || []).concat(function(a) {
                    b.attr("xlink:href", "#" + a)
                })))
            }
            for (a,
            j = o.selectAll("*"),
            m = /^\s*url\(("|'|)(.*)\1\)\s*$/,
            d = [],
            c = {},
            b = 0,
            i = j.length; i > b; b++)
                a = j[b],
                e(a, "fill"),
                e(a, "stroke"),
                e(a, "filter"),
                e(a, "mask"),
                e(a, "clip-path"),
                n(a),
                k = f(a.node, "id"),
                k && (f(a.node, {
                    id: a.id
                }),
                d.push({
                    old: k,
                    id: a.id
                }));
            for (b = 0,
            i = d.length; i > b; b++)
                if (g = c[d[b].old],
                g)
                    for (h = 0,
                    l = g.length; l > h; h++)
                        g[h](d[b].id)
        }
        function v(b, c, a) {
            return function(e) {
                var d = e.slice(b, c);
                return 1 == d.length && (d = d[0]),
                a ? a(d) : d
            }
        }
        function s(a) {
            return function() {
                var c = a ? "<" + this.type : "", e = this.node.attributes, d = this.node.childNodes, b, f;
                if (a)
                    for (b = 0,
                    f = e.length; f > b; b++)
                        c += " " + e[b].name + '="' + e[b].value.replace(/"/g, '\\"') + '"';
                if (d.length) {
                    for (a && (c += ">"),
                    b = 0,
                    f = d.length; f > b; b++)
                        3 == d[b].nodeType ? c += d[b].nodeValue : 1 == d[b].nodeType && (c += g(d[b]).toString());
                    a && (c += "</" + this.type + ">")
                } else
                    a && (c += "/>");
                return c
            }
        }
        e = u.prototype,
        k = b.is,
        h = String,
        q = b._unit2px,
        f = b._.$,
        l = b._.make,
        n = b._.getSomeDefs,
        j = "hasOwnProperty",
        g = b._.wrap,
        e.getBBox = function(g) {
            var a, d, f, c, e;
            if (!b.Matrix || !b.path)
                return this.node.getBBox();
            if (a = this,
            d = new b.Matrix,
            a.removed)
                return b._.box();
            for (; "use" == a.type; )
                g || (d = d.add(a.transform().localMatrix.translate(a.attr("x") || 0, a.attr("y") || 0))),
                a.original ? a = a.original : (f = a.attr("xlink:href"),
                a = a.original = a.node.ownerDocument.getElementById(f.substring(f.indexOf("#") + 1)));
            c = a._,
            e = b.path.get[a.type] || b.path.get.deflt;
            try {
                return g ? (c.bboxwt = e ? b.path.getBBox(a.realPath = e(a)) : b._.box(a.node.getBBox()),
                b._.box(c.bboxwt)) : (a.realPath = e(a),
                a.matrix = a.transform().localMatrix,
                c.bbox = b.path.getBBox(b.path.map(a.realPath, d.add(a.matrix))),
                b._.box(c.bbox))
            } catch (a) {
                return b._.box()
            }
        }
        ,
        r = function() {
            return this.string
        }
        ,
        e.transform = function(a) {
            var l = this._, g, d, i, c, j, e, k, m;
            if (null == a) {
                for (g,
                d = this,
                i = new b.Matrix(this.node.getCTM()),
                c = o(this),
                j = [c],
                e = new b.Matrix,
                k = c.toTransformString(),
                m = h(c) == h(this.matrix) ? h(l.transform) : k; "svg" != d.type && (d = d.parent()); )
                    j.push(o(d));
                for (g = j.length; g--; )
                    e.add(j[g]);
                return {
                    string: m,
                    globalMatrix: i,
                    totalMatrix: e,
                    localMatrix: c,
                    diffMatrix: i.clone().add(c.invert()),
                    global: i.toTransformString(),
                    total: e.toTransformString(),
                    local: k,
                    toString: r
                }
            }
            return a instanceof b.Matrix ? (this.matrix = a,
            this._.transform = a.toTransformString()) : o(this, a),
            this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? f(this.node, {
                gradientTransform: this.matrix
            }) : "pattern" == this.type ? f(this.node, {
                patternTransform: this.matrix
            }) : f(this.node, {
                transform: this.matrix
            })),
            this
        }
        ,
        e.parent = function() {
            return g(this.node.parentNode)
        }
        ,
        e.append = e.add = function(a) {
            if (a) {
                if ("set" == a.type) {
                    var b = this;
                    return a.forEach(function(a) {
                        b.add(a)
                    }),
                    this
                }
                a = g(a),
                this.node.appendChild(a.node),
                a.paper = this.paper
            }
            return this
        }
        ,
        e.appendTo = function(a) {
            return a && (a = g(a),
            a.append(this)),
            this
        }
        ,
        e.prepend = function(a) {
            var b, d, c;
            if (a) {
                if ("set" == a.type)
                    return d = this,
                    a.forEach(function(a) {
                        b ? b.after(a) : d.prepend(a),
                        b = a
                    }),
                    this;
                a = g(a),
                c = a.parent(),
                this.node.insertBefore(a.node, this.node.firstChild),
                this.add && this.add(),
                a.paper = this.paper,
                this.parent() && this.parent().add(),
                c && c.add()
            }
            return this
        }
        ,
        e.prependTo = function(a) {
            return a = g(a),
            a.prepend(this),
            this
        }
        ,
        e.before = function(a) {
            var b, c;
            return "set" == a.type ? (b = this,
            a.forEach(function(a) {
                var c = a.parent();
                b.node.parentNode.insertBefore(a.node, b.node),
                c && c.add()
            }),
            this.parent().add(),
            this) : (a = g(a),
            c = a.parent(),
            this.node.parentNode.insertBefore(a.node, this.node),
            this.parent() && this.parent().add(),
            c && c.add(),
            a.paper = this.paper,
            this)
        }
        ,
        e.after = function(a) {
            a = g(a);
            var b = a.parent();
            return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node),
            this.parent() && this.parent().add(),
            b && b.add(),
            a.paper = this.paper,
            this
        }
        ,
        e.insertBefore = function(a) {
            a = g(a);
            var b = this.parent();
            return a.node.parentNode.insertBefore(this.node, a.node),
            this.paper = a.paper,
            b && b.add(),
            a.parent() && a.parent().add(),
            this
        }
        ,
        e.insertAfter = function(a) {
            a = g(a);
            var b = this.parent();
            return a.node.parentNode.insertBefore(this.node, a.node.nextSibling),
            this.paper = a.paper,
            b && b.add(),
            a.parent() && a.parent().add(),
            this
        }
        ,
        e.remove = function() {
            var a = this.parent();
            return this.node.parentNode && this.node.parentNode.removeChild(this.node),
            delete this.paper,
            this.removed = !0,
            a && a.add(),
            this
        }
        ,
        e.select = function(a) {
            return g(this.node.querySelector(a))
        }
        ,
        e.selectAll = function(e) {
            for (var c = this.node.querySelectorAll(e), d = (b.set || Array)(), a = 0; a < c.length; a++)
                d.push(g(c[a]));
            return d
        }
        ,
        e.asPX = function(b, a) {
            return null == a && (a = this.attr(b)),
            +q(this, b, a)
        }
        ,
        e.use = function() {
            var a, b = this.node.id;
            return b || (b = this.id,
            f(this.node, {
                id: b
            })),
            a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? l(this.type, this.node.parentNode) : l("use", this.node.parentNode),
            f(a.node, {
                "xlink:href": "#" + b
            }),
            a.original = this,
            a
        }
        ,
        e.clone = function() {
            var a = g(this.node.cloneNode(!0));
            return f(a.node, "id") && f(a.node, {
                id: a.id
            }),
            t(a),
            a.insertAfter(this),
            a
        }
        ,
        e.toDefs = function() {
            var a = n(this);
            return a.appendChild(this.node),
            this
        }
        ,
        e.pattern = e.toPattern = function(a, c, d, e) {
            var b = l("pattern", n(this));
            return null == a && (a = this.getBBox()),
            k(a, "object") && "x"in a && (c = a.y,
            d = a.width,
            e = a.height,
            a = a.x),
            f(b.node, {
                x: a,
                y: c,
                width: d,
                height: e,
                patternUnits: "userSpaceOnUse",
                id: b.id,
                viewBox: [a, c, d, e].join(" ")
            }),
            b.node.appendChild(this.node),
            b
        }
        ,
        e.marker = function(a, e, c, d, g, h) {
            var b = l("marker", n(this));
            return null == a && (a = this.getBBox()),
            k(a, "object") && "x"in a && (e = a.y,
            c = a.width,
            d = a.height,
            g = a.refX || a.cx,
            h = a.refY || a.cy,
            a = a.x),
            f(b.node, {
                viewBox: [a, e, c, d].join(" "),
                markerWidth: c,
                markerHeight: d,
                orient: "auto",
                refX: g || 0,
                refY: h || 0,
                id: b.id
            }),
            b.node.appendChild(this.node),
            b
        }
        ,
        m = function(c, e, a, b) {
            "function" != typeof a || a.length || (b = a,
            a = d.linear),
            this.attr = c,
            this.dur = e,
            a && (this.easing = a),
            b && (this.callback = b)
        }
        ,
        b._.Animation = m,
        b.animation = function(a, b, c, d) {
            return new m(a,b,c,d)
        }
        ,
        e.inAnim = function() {
            var a = this, b = [], c;
            for (c in a.anims)
                a.anims[j](c) && !function(a) {
                    b.push({
                        anim: new m(a._attrs,a.dur,a.easing,a._callback),
                        mina: a,
                        curStatus: a.status(),
                        status: function(b) {
                            return a.status(b)
                        },
                        stop: function() {
                            a.stop()
                        }
                    })
                }(a.anims[c]);
            return b
        }
        ,
        b.animate = function(i, j, g, h, b, c) {
            "function" != typeof b || b.length || (c = b,
            b = d.linear);
            var e = d.time()
              , f = d(i, j, e, e + h, d.time, g, b);
            return c && a.once("mina.finish." + f.id, c),
            f
        }
        ,
        e.stop = function() {
            for (var b = this.inAnim(), a = 0, c = b.length; c > a; a++)
                b[a].stop();
            return this
        }
        ,
        e.animate = function(b, u, l, p) {
            var i, q, s, o, g, r, n, c, f, w, t, e;
            "function" != typeof l || l.length || (p = l,
            l = d.linear),
            b instanceof m && (p = b.callback,
            l = b.easing,
            u = b.dur,
            b = b.attr),
            g = [],
            r = [],
            n = {},
            c = this;
            for (f in b)
                b[j](f) && (c.equal ? (o = c.equal(f, h(b[f])),
                i = o.from,
                q = o.to,
                s = o.f) : (i = +c.attr(f),
                q = +b[f]),
                w = k(i, "array") ? i.length : 1,
                n[f] = v(g.length, g.length + w, s),
                g = g.concat(i),
                r = r.concat(q));
            return t = d.time(),
            e = d(g, r, t, t + u, d.time, function(d) {
                var b = {}, a;
                for (a in n)
                    n[j](a) && (b[a] = n[a](d));
                c.attr(b)
            }, l),
            c.anims[e.id] = e,
            e._attrs = b,
            e._callback = p,
            a("snap.animcreated." + c.id, e),
            a.once("mina.finish." + e.id, function() {
                delete c.anims[e.id],
                p && p.call(c)
            }),
            a.once("mina.stop." + e.id, function() {
                delete c.anims[e.id]
            }),
            c
        }
        ,
        i = {},
        e.data = function(c, f) {
            var d = i[this.id] = i[this.id] || {}, e;
            if (0 == arguments.length)
                return a("snap.data.get." + this.id, this, d, null),
                d;
            if (1 == arguments.length) {
                if (b.is(c, "object")) {
                    for (e in c)
                        c[j](e) && this.data(e, c[e]);
                    return this
                }
                return a("snap.data.get." + this.id, this, d[c], c),
                d[c]
            }
            return d[c] = f,
            a("snap.data.set." + this.id, this, f, c),
            this
        }
        ,
        e.removeData = function(a) {
            return null == a ? i[this.id] = {} : i[this.id] && delete i[this.id][a],
            this
        }
        ,
        e.outerSVG = e.toString = s(1),
        e.innerSVG = s(),
        e.toDataURL = function() {
            if (c && c.btoa) {
                var a = this.getBBox()
                  , d = b.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                    x: +a.x.toFixed(3),
                    y: +a.y.toFixed(3),
                    width: +a.width.toFixed(3),
                    height: +a.height.toFixed(3),
                    contents: this.outerSVG()
                });
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(d)))
            }
        }
        ,
        p.prototype.select = e.select,
        p.prototype.selectAll = e.selectAll
    }),
    b.plugin(function(c) {
        function b(a, b, c, d, f, g) {
            return null == b && "[object SVGMatrix]" == e.call(a) ? (this.a = a.a,
            this.b = a.b,
            this.c = a.c,
            this.d = a.d,
            this.e = a.e,
            void (this.f = a.f)) : void (null != a ? (this.a = +a,
            this.b = +b,
            this.c = +c,
            this.d = +d,
            this.e = +f,
            this.f = +g) : (this.a = 1,
            this.b = 0,
            this.c = 0,
            this.d = 1,
            this.e = 0,
            this.f = 0))
        }
        var e = Object.prototype.toString
          , f = String
          , a = Math
          , d = "";
        !function(e) {
            function g(a) {
                return a[0] * a[0] + a[1] * a[1]
            }
            function h(b) {
                var c = a.sqrt(g(b));
                b[0] && (b[0] /= c),
                b[1] && (b[1] /= c)
            }
            e.add = function(a, l, k, j, n, i) {
                var f, e, d, g, c = [[], [], []], m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], h = [[a, k, n], [l, j, i], [0, 0, 1]];
                for (a && a instanceof b && (h = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]]),
                f = 0; 3 > f; f++)
                    for (e = 0; 3 > e; e++) {
                        for (g = 0,
                        d = 0; 3 > d; d++)
                            g += m[f][d] * h[d][e];
                        c[f][e] = g
                    }
                return this.a = c[0][0],
                this.b = c[1][0],
                this.c = c[0][1],
                this.d = c[1][1],
                this.e = c[0][2],
                this.f = c[1][2],
                this
            }
            ,
            e.invert = function() {
                var a = this
                  , c = a.a * a.d - a.b * a.c;
                return new b(a.d / c,-a.b / c,-a.c / c,a.a / c,(a.c * a.f - a.d * a.e) / c,(a.b * a.e - a.a * a.f) / c)
            }
            ,
            e.clone = function() {
                return new b(this.a,this.b,this.c,this.d,this.e,this.f)
            }
            ,
            e.translate = function(a, b) {
                return this.add(1, 0, 0, 1, a, b)
            }
            ,
            e.scale = function(d, c, a, b) {
                return null == c && (c = d),
                (a || b) && this.add(1, 0, 0, 1, a, b),
                this.add(d, 0, 0, c, 0, 0),
                (a || b) && this.add(1, 0, 0, 1, -a, -b),
                this
            }
            ,
            e.rotate = function(b, d, e) {
                b = c.rad(b),
                d = d || 0,
                e = e || 0;
                var f = +a.cos(b).toFixed(9)
                  , g = +a.sin(b).toFixed(9);
                return this.add(f, g, -g, f, d, e),
                this.add(1, 0, 0, 1, -d, -e)
            }
            ,
            e.x = function(a, b) {
                return a * this.a + b * this.c + this.e
            }
            ,
            e.y = function(a, b) {
                return a * this.b + b * this.d + this.f
            }
            ,
            e.get = function(a) {
                return +this[f.fromCharCode(97 + a)].toFixed(4)
            }
            ,
            e.toString = function() {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }
            ,
            e.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }
            ,
            e.determinant = function() {
                return this.a * this.d - this.b * this.c
            }
            ,
            e.split = function() {
                var b = {}, d, e, f;
                return b.dx = this.e,
                b.dy = this.f,
                d = [[this.a, this.c], [this.b, this.d]],
                b.scalex = a.sqrt(g(d[0])),
                h(d[0]),
                b.shear = d[0][0] * d[1][0] + d[0][1] * d[1][1],
                d[1] = [d[1][0] - d[0][0] * b.shear, d[1][1] - d[0][1] * b.shear],
                b.scaley = a.sqrt(g(d[1])),
                h(d[1]),
                b.shear /= b.scaley,
                this.determinant() < 0 && (b.scalex = -b.scalex),
                e = -d[0][1],
                f = d[1][1],
                0 > f ? (b.rotate = c.deg(a.acos(f)),
                0 > e && (b.rotate = 360 - b.rotate)) : b.rotate = c.deg(a.asin(e)),
                b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate),
                b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate,
                b.noRotation = !+b.shear.toFixed(9) && !b.rotate,
                b
            }
            ,
            e.toTransformString = function(b) {
                var a = b || this.split();
                return +a.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (a.scalex = +a.scalex.toFixed(4),
                a.scaley = +a.scaley.toFixed(4),
                a.rotate = +a.rotate.toFixed(4),
                (a.dx || a.dy ? "t" + [+a.dx.toFixed(4), +a.dy.toFixed(4)] : d) + (1 != a.scalex || 1 != a.scaley ? "s" + [a.scalex, a.scaley, 0, 0] : d) + (a.rotate ? "r" + [+a.rotate.toFixed(4), 0, 0] : d))
            }
        }(b.prototype),
        c.Matrix = b,
        c.matrix = function(a, c, d, e, f, g) {
            return new b(a,c,d,e,f,g)
        }
    }),
    b.plugin(function(c, j, u, i, k) {
        var m, g, e, d, o, b, f, h, l, p, t;
        function q(e) {
            return function(i) {
                var l, m, n;
                a.stop(),
                i instanceof k && 1 == i.node.childNodes.length && ("radialGradient" == i.node.firstChild.tagName || "linearGradient" == i.node.firstChild.tagName || "pattern" == i.node.firstChild.tagName) && (i = i.node.firstChild,
                d(this).appendChild(i),
                i = g(i)),
                i instanceof j ? "radialGradient" == i.type || "linearGradient" == i.type || "pattern" == i.type ? (i.node.id || b(i.node, {
                    id: i.id
                }),
                l = f(i.node.id)) : l = i.attr(e) : (l = c.color(i),
                l.error) ? (m = c(d(this).ownerSVGElement).gradient(i),
                m ? (m.node.id || b(m.node, {
                    id: m.id
                }),
                l = f(m.node.id)) : l = i) : l = h(l),
                n = {},
                n[e] = l,
                b(this.node, n),
                this.node.style[e] = p
            }
        }
        function n(b) {
            a.stop(),
            b == +b && (b += "px"),
            this.node.style.fontSize = b
        }
        function s(e) {
            for (var b = [], d = e.childNodes, c = 0, f = d.length, a; f > c; c++)
                a = d[c],
                3 == a.nodeType && b.push(a.nodeValue),
                "tspan" == a.tagName && b.push(1 == a.childNodes.length && 3 == a.firstChild.nodeType ? a.firstChild.nodeValue : s(a));
            return b
        }
        function r() {
            return a.stop(),
            this.node.style.fontSize
        }
        m = c._.make,
        g = c._.wrap,
        e = c.is,
        d = c._.getSomeDefs,
        o = /^url\(#?([^)]+)\)$/,
        b = c._.$,
        f = c.url,
        h = String,
        l = c._.separator,
        p = "",
        a.on("snap.util.attr.mask", function(c) {
            if (c instanceof j || c instanceof k) {
                if (a.stop(),
                c instanceof k && 1 == c.node.childNodes.length && (c = c.node.firstChild,
                d(this).appendChild(c),
                c = g(c)),
                "mask" == c.type)
                    var e = c;
                else
                    e = m("mask", d(this)),
                    e.node.appendChild(c.node);
                !e.node.id && b(e.node, {
                    id: e.id
                }),
                b(this.node, {
                    mask: f(e.id)
                })
            }
        }),
        function(b) {
            a.on("snap.util.attr.clip", b),
            a.on("snap.util.attr.clip-path", b),
            a.on("snap.util.attr.clipPath", b)
        }(function(e) {
            if (e instanceof j || e instanceof k) {
                if (a.stop(),
                "clipPath" == e.type)
                    var c = e;
                else
                    c = m("clipPath", d(this)),
                    c.node.appendChild(e.node),
                    !c.node.id && b(c.node, {
                        id: c.id
                    });
                b(this.node, {
                    "clip-path": f(c.node.id || c.id)
                })
            }
        }),
        a.on("snap.util.attr.fill", q("fill")),
        a.on("snap.util.attr.stroke", q("stroke")),
        t = /^([lr])(?:\(([^)]*)\))?(.*)$/i,
        a.on("snap.util.grad.parse", function(d) {
            var c, e, a, b;
            return d = h(d),
            c = d.match(t),
            !c ? null : (e = c[1],
            a = c[2],
            b = c[3],
            a = a.split(/\s*,\s*/).map(function(a) {
                return +a == a ? +a : a
            }),
            1 == a.length && 0 == a[0] && (a = []),
            b = b.split("-"),
            b = b.map(function(a) {
                a = a.split(":");
                var b = {
                    color: a[0]
                };
                return a[1] && (b.offset = parseFloat(a[1])),
                b
            }),
            {
                type: e,
                params: a,
                stops: b
            })
        }),
        a.on("snap.util.attr.d", function(d) {
            a.stop(),
            e(d, "array") && e(d[0], "array") && (d = c.path.toString.call(d)),
            d = h(d),
            d.match(/[ruo]/i) && (d = c.path.toAbsolute(d)),
            b(this.node, {
                d
            })
        })(-1),
        a.on("snap.util.attr.#text", function(b) {
            a.stop(),
            b = h(b);
            for (var c = i.doc.createTextNode(b); this.node.firstChild; )
                this.node.removeChild(this.node.firstChild);
            this.node.appendChild(c)
        })(-1),
        a.on("snap.util.attr.path", function(b) {
            a.stop(),
            this.attr({
                d: b
            })
        })(-1),
        a.on("snap.util.attr.class", function(b) {
            a.stop(),
            this.node.className.baseVal = b
        })(-1),
        a.on("snap.util.attr.viewBox", function(c) {
            var d;
            d = e(c, "object") && "x"in c ? [c.x, c.y, c.width, c.height].join(" ") : e(c, "array") ? c.join(" ") : c,
            b(this.node, {
                viewBox: d
            }),
            a.stop()
        })(-1),
        a.on("snap.util.attr.transform", function(b) {
            this.transform(b),
            a.stop()
        })(-1),
        a.on("snap.util.attr.r", function(c) {
            "rect" == this.type && (a.stop(),
            b(this.node, {
                rx: c,
                ry: c
            }))
        })(-1),
        a.on("snap.util.attr.textpath", function(h) {
            var f, c, i, l, k;
            if (a.stop(),
            "text" == this.type) {
                if (!h && this.textPath) {
                    for (c = this.textPath; c.node.firstChild; )
                        this.node.appendChild(c.node.firstChild);
                    return c.remove(),
                    void delete this.textPath
                }
                if (e(h, "string") ? (l = d(this),
                k = g(l.parentNode).path(h),
                l.appendChild(k.node),
                f = k.id,
                k.attr({
                    id: f
                })) : (h = g(h),
                h instanceof j && (f = h.attr("id"),
                f || (f = h.id,
                h.attr({
                    id: f
                })))),
                f)
                    if (c = this.textPath,
                    i = this.node,
                    c)
                        c.attr({
                            "xlink:href": "#" + f
                        });
                    else {
                        for (c = b("textPath", {
                            "xlink:href": "#" + f
                        }); i.firstChild; )
                            c.appendChild(i.firstChild);
                        i.appendChild(c),
                        this.textPath = g(c)
                    }
            }
        })(-1),
        a.on("snap.util.attr.text", function(g) {
            var c, d, f;
            if ("text" == this.type) {
                for (c = this.node,
                d = function(c) {
                    var a = b("tspan"), f;
                    if (e(c, "array"))
                        for (f = 0; f < c.length; f++)
                            a.appendChild(d(c[f]));
                    else
                        a.appendChild(i.doc.createTextNode(c));
                    return a.normalize && a.normalize(),
                    a
                }
                ; c.firstChild; )
                    c.removeChild(c.firstChild);
                for (f = d(g); f.firstChild; )
                    c.appendChild(f.firstChild)
            }
            a.stop()
        })(-1),
        a.on("snap.util.attr.fontSize", n)(-1),
        a.on("snap.util.attr.font-size", n)(-1),
        a.on("snap.util.getattr.transform", function() {
            return a.stop(),
            this.transform()
        })(-1),
        a.on("snap.util.getattr.textpath", function() {
            return a.stop(),
            this.textPath
        })(-1),
        function() {
            function d(b) {
                return function() {
                    a.stop();
                    var d = i.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + b);
                    return "none" == d ? d : c(i.doc.getElementById(d.match(o)[1]))
                }
            }
            function e(c) {
                return function(d) {
                    var e, g;
                    if (a.stop(),
                    e = "marker" + c.charAt(0).toUpperCase() + c.substring(1),
                    "" == d || !d)
                        return void (this.node.style[e] = "none");
                    if ("marker" == d.type)
                        return g = d.node.id,
                        g || b(d.node, {
                            id: d.id
                        }),
                        void (this.node.style[e] = f(g))
                }
            }
            a.on("snap.util.getattr.marker-end", d("end"))(-1),
            a.on("snap.util.getattr.markerEnd", d("end"))(-1),
            a.on("snap.util.getattr.marker-start", d("start"))(-1),
            a.on("snap.util.getattr.markerStart", d("start"))(-1),
            a.on("snap.util.getattr.marker-mid", d("mid"))(-1),
            a.on("snap.util.getattr.markerMid", d("mid"))(-1),
            a.on("snap.util.attr.marker-end", e("end"))(-1),
            a.on("snap.util.attr.markerEnd", e("end"))(-1),
            a.on("snap.util.attr.marker-start", e("start"))(-1),
            a.on("snap.util.attr.markerStart", e("start"))(-1),
            a.on("snap.util.attr.marker-mid", e("mid"))(-1),
            a.on("snap.util.attr.markerMid", e("mid"))(-1)
        }(),
        a.on("snap.util.getattr.r", function() {
            return "rect" == this.type && b(this.node, "rx") == b(this.node, "ry") ? (a.stop(),
            b(this.node, "rx")) : void 0
        })(-1),
        a.on("snap.util.getattr.text", function() {
            if ("text" == this.type || "tspan" == this.type) {
                a.stop();
                var b = s(this.node);
                return 1 == b.length ? b[0] : b
            }
        })(-1),
        a.on("snap.util.getattr.#text", function() {
            return this.node.textContent
        })(-1),
        a.on("snap.util.getattr.viewBox", function() {
            a.stop();
            var d = b(this.node, "viewBox");
            return d ? (d = d.split(l),
            c._.box(+d[0], +d[1], +d[2], +d[3])) : void 0
        })(-1),
        a.on("snap.util.getattr.points", function() {
            var c = b(this.node, "points");
            return a.stop(),
            c ? c.split(l) : void 0
        })(-1),
        a.on("snap.util.getattr.path", function() {
            var c = b(this.node, "d");
            return a.stop(),
            c
        })(-1),
        a.on("snap.util.getattr.class", function() {
            return this.node.className.baseVal
        })(-1),
        a.on("snap.util.getattr.fontSize", r)(-1),
        a.on("snap.util.getattr.font-size", r)(-1)
    }),
    b.plugin(function(e, d) {
        var a = /\S+/g
          , c = String
          , b = d.prototype;
        b.addClass = function(k) {
            var g, j, d, e, h = c(k || "").match(a) || [], f = this.node, i = f.className.baseVal, b = i.match(a) || [];
            if (h.length) {
                for (g = 0; d = h[g++]; )
                    j = b.indexOf(d),
                    ~j || b.push(d);
                e = b.join(" "),
                i != e && (f.className.baseVal = e)
            }
            return this
        }
        ,
        b.removeClass = function(k) {
            var g, e, h, d, j = c(k || "").match(a) || [], f = this.node, i = f.className.baseVal, b = i.match(a) || [];
            if (b.length) {
                for (g = 0; h = j[g++]; )
                    e = b.indexOf(h),
                    ~e && b.splice(e, 1);
                d = b.join(" "),
                i != d && (f.className.baseVal = d)
            }
            return this
        }
        ,
        b.hasClass = function(b) {
            var c = this.node
              , d = c.className.baseVal
              , e = d.match(a) || [];
            return !!~e.indexOf(b)
        }
        ,
        b.toggleClass = function(c, g) {
            if (null != g)
                return g ? this.addClass(c) : this.removeClass(c);
            var h, f, d, e, k = (c || "").match(a) || [], i = this.node, j = i.className.baseVal, b = j.match(a) || [];
            for (h = 0; d = k[h++]; )
                f = b.indexOf(d),
                ~f ? b.splice(f, 1) : b.push(d);
            return e = b.join(" "),
            j != e && (i.className.baseVal = e),
            this
        }
    }),
    b.plugin(function() {
        function f(a) {
            return a
        }
        function g(a) {
            return function(b) {
                return +b.toFixed(3) + a
            }
        }
        var c = {
            "+": function(a, b) {
                return a + b
            },
            "-": function(a, b) {
                return a - b
            },
            "/": function(a, b) {
                return a / b
            },
            "*": function(a, b) {
                return a * b
            }
        }
          , b = String
          , d = /[a-z]+$/i
          , e = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        a.on("snap.util.attr", function(f) {
            var g = b(f).match(e), j, h, i, k, l, m, n;
            if (g) {
                if (j = a.nt(),
                h = j.substring(j.lastIndexOf(".") + 1),
                i = this.attr(h),
                k = {},
                a.stop(),
                l = g[3] || "",
                m = i.match(d),
                n = c[g[1]],
                m && m == l ? f = n(parseFloat(i), +g[2]) : (i = this.asPX(h),
                f = n(this.asPX(h), this.asPX(h, g[2] + l))),
                isNaN(i) || isNaN(f))
                    return;
                k[h] = f,
                this.attr(k)
            }
        })(-10),
        a.on("snap.util.equal", function(j, n) {
            var h = b(this.attr(j) || ""), i = b(n).match(e), l, k, m;
            if (i)
                return a.stop(),
                l = i[3] || "",
                k = h.match(d),
                m = c[i[1]],
                k && k == l ? {
                    from: parseFloat(h),
                    to: m(parseFloat(h), +i[2]),
                    f: g(k)
                } : (h = this.asPX(j),
                {
                    from: h,
                    to: m(h, this.asPX(j, i[2] + l)),
                    f
                })
        })(-10)
    }),
    b.plugin(function(e, f, h, g) {
        var b = h.prototype, d = e.is, i;
        b.rect = function(a, f, g, h, c, e) {
            var b;
            return null == e && (e = c),
            d(a, "object") && "[object Object]" == a ? b = a : null != a && (b = {
                x: a,
                y: f,
                width: g,
                height: h
            },
            null != c && (b.rx = c,
            b.ry = e)),
            this.el("rect", b)
        }
        ,
        b.circle = function(a, c, e) {
            var b;
            return d(a, "object") && "[object Object]" == a ? b = a : null != a && (b = {
                cx: a,
                cy: c,
                r: e
            }),
            this.el("circle", b)
        }
        ,
        i = function() {
            function a() {
                this.parentNode.removeChild(this)
            }
            return function(d, e) {
                var b = g.doc.createElement("img")
                  , c = g.doc.body;
                b.style.cssText = "position:absolute;left:-9999em;top:-9999em",
                b.onload = function() {
                    e.call(b),
                    b.onload = b.onerror = null,
                    c.removeChild(b)
                }
                ,
                b.onerror = a,
                c.appendChild(b),
                b.src = d
            }
        }(),
        b.image = function(a, f, g, h, j) {
            var c = this.el("image"), b;
            return d(a, "object") && "src"in a ? c.attr(a) : null != a && (b = {
                "xlink:href": a,
                preserveAspectRatio: "none"
            },
            null != f && null != g && (b.x = f,
            b.y = g),
            null != h && null != j ? (b.width = h,
            b.height = j) : i(a, function() {
                e._.$(c.node, {
                    width: this.offsetWidth,
                    height: this.offsetHeight
                })
            }),
            e._.$(c.node, b)),
            c
        }
        ,
        b.ellipse = function(a, c, e, f) {
            var b;
            return d(a, "object") && "[object Object]" == a ? b = a : null != a && (b = {
                cx: a,
                cy: c,
                rx: e,
                ry: f
            }),
            this.el("ellipse", b)
        }
        ,
        b.path = function(a) {
            var b;
            return d(a, "object") && !d(a, "array") ? b = a : a && (b = {
                d: a
            }),
            this.el("path", b)
        }
        ,
        b.group = b.g = function(a) {
            var b = this.el("g");
            return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)),
            b
        }
        ,
        b.svg = function(b, c, j, e, f, g, h, i) {
            var a = {};
            return d(b, "object") && null == c ? a = b : (null != b && (a.x = b),
            null != c && (a.y = c),
            null != j && (a.width = j),
            null != e && (a.height = e),
            null != f && null != g && null != h && null != i && (a.viewBox = [f, g, h, i])),
            this.el("svg", a)
        }
        ,
        b.mask = function(a) {
            var b = this.el("mask");
            return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)),
            b
        }
        ,
        b.ptrn = function(b, c, f, e, g, h, i, j) {
            if (d(b, "object"))
                var a = b;
            else
                a = {
                    patternUnits: "userSpaceOnUse"
                },
                b && (a.x = b),
                c && (a.y = c),
                null != f && (a.width = f),
                null != e && (a.height = e),
                a.viewBox = null != g && null != h && null != i && null != j ? [g, h, i, j] : [b || 0, c || 0, f || 0, e || 0];
            return this.el("pattern", a)
        }
        ,
        b.use = function(a) {
            return null != a ? (a instanceof f && (a.attr("id") || a.attr({
                id: e._.id(a)
            }),
            a = a.attr("id")),
            "#" == String(a).charAt() && (a = a.substring(1)),
            this.el("use", {
                "xlink:href": "#" + a
            })) : f.prototype.use.call(this)
        }
        ,
        b.symbol = function(a, b, c, d) {
            var e = {};
            return null != a && null != b && null != c && null != d && (e.viewBox = [a, b, c, d]),
            this.el("symbol", e)
        }
        ,
        b.text = function(a, c, e) {
            var b = {};
            return d(a, "object") ? b = a : null != a && (b = {
                x: a,
                y: c,
                text: e || ""
            }),
            this.el("text", b)
        }
        ,
        b.line = function(a, c, e, f) {
            var b = {};
            return d(a, "object") ? b = a : null != a && (b = {
                x1: a,
                x2: e,
                y1: c,
                y2: f
            }),
            this.el("line", b)
        }
        ,
        b.polyline = function(a) {
            arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
            var b = {};
            return d(a, "object") && !d(a, "array") ? b = a : null != a && (b = {
                points: a
            }),
            this.el("polyline", b)
        }
        ,
        b.polygon = function(a) {
            arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
            var b = {};
            return d(a, "object") && !d(a, "array") ? b = a : null != a && (b = {
                points: a
            }),
            this.el("polygon", b)
        }
        ,
        function() {
            function j() {
                return this.selectAll("stop")
            }
            function f(a, f) {
                var c = d("stop")
                  , b = {
                    offset: +f + "%"
                };
                return a = e.color(a),
                b["stop-color"] = a.hex,
                a.opacity < 1 && (b["stop-opacity"] = a.opacity),
                d(c, b),
                this.node.appendChild(c),
                this
            }
            function g() {
                var c, f, b, g, h, i, a;
                return "linearGradient" == this.type ? (c = d(this.node, "x1") || 0,
                f = d(this.node, "x2") || 1,
                b = d(this.node, "y1") || 0,
                g = d(this.node, "y2") || 0,
                e._.box(c, b, math.abs(f - c), math.abs(g - b))) : (h = this.node.cx || .5,
                i = this.node.cy || .5,
                a = this.node.r || 0,
                e._.box(h - a, i - a, 2 * a, 2 * a))
            }
            function k(n, o) {
                var j, c, e, f, k, g, b, l;
                function m(b, c) {
                    for (var d = (c - k) / (b - g), a = g; b > a; a++)
                        e[a].offset = +(+k + d * (a - g)).toFixed(2);
                    g = b,
                    k = c
                }
                if (c = a("snap.util.grad.parse", null, o).firstDefined(),
                !c)
                    return null;
                c.params.unshift(n),
                j = "l" == c.type.toLowerCase() ? h.apply(0, c.params) : i.apply(0, c.params),
                c.type != c.type.toLowerCase() && d(j.node, {
                    gradientUnits: "userSpaceOnUse"
                }),
                e = c.stops,
                f = e.length,
                k = 0,
                g = 0,
                f--;
                for (b = 0; f > b; b++)
                    "offset"in e[b] && m(b, e[b].offset);
                for (e[f].offset = e[f].offset || 100,
                m(f, e[f].offset),
                b = 0; f >= b; b++)
                    l = e[b],
                    j.addStop(l.color, l.offset);
                return j
            }
            function h(c, b, h, i, k) {
                var a = e._.make("linearGradient", c);
                return a.stops = j,
                a.addStop = f,
                a.getBBox = g,
                null != b && d(a.node, {
                    x1: b,
                    y1: h,
                    x2: i,
                    y2: k
                }),
                a
            }
            function i(l, b, i, k, c, h) {
                var a = e._.make("radialGradient", l);
                return a.stops = j,
                a.addStop = f,
                a.getBBox = g,
                null != b && d(a.node, {
                    cx: b,
                    cy: i,
                    r: k
                }),
                null != c && null != h && d(a.node, {
                    fx: c,
                    fy: h
                }),
                a
            }
            var d = e._.$;
            b.gradient = function(a) {
                return k(this.defs, a)
            }
            ,
            b.gradientLinear = function(a, b, c, d) {
                return h(this.defs, a, b, c, d)
            }
            ,
            b.gradientRadial = function(a, b, c, d, e) {
                return i(this.defs, a, b, c, d, e)
            }
            ,
            b.toString = function() {
                var c, d = this.node.ownerDocument, a = d.createDocumentFragment(), b = d.createElement("div"), f = this.node.cloneNode(!0);
                return a.appendChild(b),
                b.appendChild(f),
                e._.$(f, {
                    xmlns: "http://www.w3.org/2000/svg"
                }),
                c = b.innerHTML,
                a.removeChild(a.firstChild),
                c
            }
            ,
            b.toDataURL = function() {
                return c && c.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
            }
            ,
            b.clear = function() {
                for (var c, a = this.node.firstChild; a; )
                    c = a.nextSibling,
                    "defs" != a.tagName ? a.parentNode.removeChild(a) : b.clear.call({
                        node: a
                    }),
                    a = c
            }
        }()
    }),
    b.plugin(function(a, E) {
        function j(b) {
            var a = j.ps = j.ps || {};
            return a[b] ? a[b].sleep = 100 : a[b] = {
                sleep: 100
            },
            setTimeout(function() {
                for (var c in a)
                    a[S](c) && c != b && (a[c].sleep--,
                    !a[c].sleep && delete a[c])
            }),
            a[b]
        }
        function h(a, e, c, d) {
            return null == a && (a = e = c = d = 0),
            null == e && (e = a.y,
            c = a.width,
            d = a.height,
            a = a.x),
            {
                x: a,
                y: e,
                width: c,
                w: c,
                height: d,
                h: d,
                x2: a + c,
                y2: e + d,
                cx: a + c / 2,
                cy: e + d / 2,
                r1: b.min(c, d) / 2,
                r2: b.max(c, d) / 2,
                r0: b.sqrt(c * c + d * d) / 2,
                path: p(a, e, c, d),
                vb: [a, e, c, d].join(" ")
            }
        }
        function m() {
            return this.join(",").replace(R, "$1")
        }
        function i(b) {
            var a = u(b);
            return a.toString = m,
            a
        }
        function A(a, b, c, d, e, f, g, h, i) {
            return null == i ? n(a, b, c, d, e, f, g, h) : o(a, b, c, d, e, f, g, h, Q(a, b, c, d, e, f, g, h, i))
        }
        function y(d, c) {
            function b(a) {
                return +(+a).toFixed(3)
            }
            return a._.cacher(function(h, n, q) {
                h instanceof E && (h = h.attr("d")),
                h = l(h);
                for (var f, g, a, k, e, j = "", m = {}, i = 0, p = 0, r = h.length; r > p; p++) {
                    if (a = h[p],
                    "M" == a[0])
                        f = +a[1],
                        g = +a[2];
                    else {
                        if (k = A(f, g, a[1], a[2], a[3], a[4], a[5], a[6]),
                        i + k > n) {
                            if (c && !m.start) {
                                if (e = A(f, g, a[1], a[2], a[3], a[4], a[5], a[6], n - i),
                                j += ["C" + b(e.start.x), b(e.start.y), b(e.m.x), b(e.m.y), b(e.x), b(e.y)],
                                q)
                                    return j;
                                m.start = j,
                                j = ["M" + b(e.x), b(e.y) + "C" + b(e.n.x), b(e.n.y), b(e.end.x), b(e.end.y), b(a[5]), b(a[6])].join(),
                                i += k,
                                f = +a[5],
                                g = +a[6];
                                continue
                            }
                            if (!d && !c)
                                return e = A(f, g, a[1], a[2], a[3], a[4], a[5], a[6], n - i)
                        }
                        i += k,
                        f = +a[5],
                        g = +a[6]
                    }
                    j += a.shift() + a
                }
                return m.end = j,
                e = d ? i : c ? m : o(f, g, a[0], a[1], a[2], a[3], a[4], a[5], 1)
            }, null, a._.clone)
        }
        function o(k, j, d, e, g, h, m, l, a) {
            var c = 1 - a
              , n = L(c, 3)
              , o = L(c, 2)
              , i = a * a
              , p = i * a
              , v = n * k + 3 * o * a * d + 3 * c * a * a * g + p * m
              , u = n * j + 3 * o * a * e + 3 * c * a * a * h + p * l
              , s = k + 2 * a * (d - k) + i * (g - 2 * d + k)
              , t = j + 2 * a * (e - j) + i * (h - 2 * e + j)
              , r = d + 2 * a * (g - d) + i * (m - 2 * g + d)
              , q = e + 2 * a * (h - e) + i * (l - 2 * h + e)
              , w = c * k + a * d
              , x = c * j + a * e
              , y = c * g + a * m
              , z = c * h + a * l
              , A = 90 - 180 * b.atan2(s - r, t - q) / f;
            return {
                x: v,
                y: u,
                m: {
                    x: s,
                    y: t
                },
                n: {
                    x: r,
                    y: q
                },
                start: {
                    x: w,
                    y: x
                },
                end: {
                    x: y,
                    y: z
                },
                alpha: A
            }
        }
        function x(c, d, k, e, f, g, i, j) {
            a.is(c, "array") || (c = [c, d, k, e, f, g, i, j]);
            var b = D.apply(null, c);
            return h(b.min.x, b.min.y, b.max.x - b.min.x, b.max.y - b.min.y)
        }
        function e(a, b, c) {
            return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
        }
        function F(a, b) {
            return a = h(a),
            b = h(b),
            e(b, a.x, a.y) || e(b, a.x2, a.y) || e(b, a.x, a.y2) || e(b, a.x2, a.y2) || e(a, b.x, b.y) || e(a, b.x2, b.y) || e(a, b.x, b.y2) || e(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
        }
        function K(c, a, b, d, e) {
            var f = -3 * a + 9 * b - 9 * d + 3 * e
              , g = c * f + 6 * a - 12 * b + 6 * d;
            return c * g - 3 * a + 3 * b
        }
        function n(t, s, r, q, p, o, n, m, a) {
            var d, i, k, j, f, c, h, g, e, l;
            null == a && (a = 1),
            a = a > 1 ? 1 : 0 > a ? 0 : a;
            for (d = a / 2,
            i = 12,
            k = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816],
            j = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472],
            f = 0,
            c = 0; i > c; c++)
                h = d * k[c] + d,
                g = K(h, t, r, p, n),
                e = K(h, s, q, o, m),
                l = g * g + e * e,
                f += j[c] * b.sqrt(l);
            return d * f
        }
        function Q(d, l, k, j, e, f, h, i, a) {
            if (!(0 > a || n(d, l, k, j, e, f, h, i) < a)) {
                var c, o = 1, m = o / 2, b = o - m, p = .01;
                for (c = n(d, l, k, j, e, f, h, i, b); g(c - a) > p; )
                    m /= 2,
                    b += (a > c ? 1 : -1) * m,
                    c = n(d, l, k, j, e, f, h, i, b);
                return b
            }
        }
        function P(j, b, e, f, g, h, i, a) {
            var q, p, m, n, o, l, k;
            if (!(c(j, e) < d(g, i) || d(j, e) > c(g, i) || c(b, f) < d(h, a) || d(b, f) > c(h, a)))
                if (q = (j * f - b * e) * (g - i) - (j - e) * (g * a - h * i),
                p = (j * f - b * e) * (h - a) - (b - f) * (g * a - h * i),
                m = (j - e) * (h - a) - (b - f) * (g - i),
                m)
                    if (n = q / m,
                    o = p / m,
                    l = +n.toFixed(2),
                    k = +o.toFixed(2),
                    !(l < +d(j, e).toFixed(2) || l > +c(j, e).toFixed(2) || l < +d(g, i).toFixed(2) || l > +c(g, i).toFixed(2) || k < +d(b, f).toFixed(2) || k > +c(b, f).toFixed(2) || k < +d(h, a).toFixed(2) || k > +c(h, a).toFixed(2)))
                        return {
                            x: n,
                            y: o
                        }
        }
        function O(v, t, s) {
            var C = x(v), B = x(t), A, z, i, j, u, p, y, q, a, e, m, d, h, c, f, k, l, b, r, w;
            if (!F(C, B))
                return s ? 0 : [];
            for (A = n.apply(0, v),
            z = n.apply(0, t),
            i = ~~(A / 8),
            j = ~~(z / 8),
            u = [],
            p = [],
            y = {},
            q = s ? 0 : [],
            a = 0; i + 1 > a; a++)
                e = o.apply(0, v.concat(a / i)),
                u.push({
                    x: e.x,
                    y: e.y,
                    t: a / i
                });
            for (a = 0; j + 1 > a; a++)
                e = o.apply(0, t.concat(a / j)),
                p.push({
                    x: e.x,
                    y: e.y,
                    t: a / j
                });
            for (a = 0; i > a; a++)
                for (m = 0; j > m; m++)
                    if (d = u[a],
                    h = u[a + 1],
                    c = p[m],
                    f = p[m + 1],
                    k = g(h.x - d.x) < .001 ? "y" : "x",
                    l = g(f.x - c.x) < .001 ? "y" : "x",
                    b = P(d.x, d.y, h.x, h.y, c.x, c.y, f.x, f.y),
                    b) {
                        if (y[b.x.toFixed(4)] == b.y.toFixed(4))
                            continue;
                        y[b.x.toFixed(4)] = b.y.toFixed(4),
                        r = d.t + g((b[k] - d[k]) / (h[k] - d[k])) * (h.t - d.t),
                        w = c.t + g((b[l] - c[l]) / (f[l] - c[l])) * (f.t - c.t),
                        r >= 0 && 1 >= r && w >= 0 && 1 >= w && (s ? q++ : q.push({
                            x: b.x,
                            y: b.y,
                            t1: r,
                            t2: w
                        }))
                    }
            return q
        }
        function N(a, b) {
            return t(a, b)
        }
        function M(a, b) {
            return t(a, b, 1)
        }
        function t(s, t, u) {
            var d, e, f, g, q, k, n, m, b, h, o, p, w, j, r, v, i, a, c, x;
            s = l(s),
            t = l(t);
            for (d,
            e,
            f,
            g,
            q,
            k,
            n,
            m,
            b,
            h,
            o = u ? 0 : [],
            p = 0,
            w = s.length; w > p; p++)
                if (j = s[p],
                "M" == j[0])
                    d = q = j[1],
                    e = k = j[2];
                else {
                    "C" == j[0] ? (b = [d, e].concat(j.slice(1)),
                    d = b[6],
                    e = b[7]) : (b = [d, e, d, e, q, k, q, k],
                    d = q,
                    e = k);
                    for (r = 0,
                    v = t.length; v > r; r++)
                        if (i = t[r],
                        "M" == i[0])
                            f = n = i[1],
                            g = m = i[2];
                        else if ("C" == i[0] ? (h = [f, g].concat(i.slice(1)),
                        f = h[6],
                        g = h[7]) : (h = [f, g, f, g, n, m, n, m],
                        f = n,
                        g = m),
                        a = O(b, h, u),
                        u)
                            o += a;
                        else {
                            for (c = 0,
                            x = a.length; x > c; c++)
                                a[c].segment1 = p,
                                a[c].segment2 = r,
                                a[c].bez1 = b,
                                a[c].bez2 = h;
                            o = o.concat(a)
                        }
                }
            return o
        }
        function U(a, b, c) {
            var d = H(a);
            return e(d, b, c) && t(a, [["M", b, c], ["H", d.x2 + 10]], 1) % 2 == 1
        }
        function H(b) {
            var m = j(b), a, g, i, f, e, n, r, k, o, p, s, t, q;
            if (m.bbox)
                return u(m.bbox);
            if (!b)
                return h();
            b = l(b);
            for (a,
            g = 0,
            i = 0,
            f = [],
            e = [],
            n = 0,
            r = b.length; r > n; n++)
                a = b[n],
                "M" == a[0] ? (g = a[1],
                i = a[2],
                f.push(g),
                e.push(i)) : (k = D(g, i, a[1], a[2], a[3], a[4], a[5], a[6]),
                f = f.concat(k.min.x, k.max.x),
                e = e.concat(k.min.y, k.max.y),
                g = a[5],
                i = a[6]);
            return o = d.apply(0, f),
            p = d.apply(0, e),
            s = c.apply(0, f),
            t = c.apply(0, e),
            q = h(o, p, s - o, t - p),
            m.bbox = u(q),
            q
        }
        function p(d, e, b, c, a) {
            if (a)
                return [["M", +d + +a, e], ["l", b - 2 * a, 0], ["a", a, a, 0, 0, 1, a, a], ["l", 0, c - 2 * a], ["a", a, a, 0, 0, 1, -a, a], ["l", 2 * a - b, 0], ["a", a, a, 0, 0, 1, -a, -a], ["l", 0, 2 * a - c], ["a", a, a, 0, 0, 1, a, -a], ["z"]];
            var f = [["M", d, e], ["l", b, 0], ["l", 0, c], ["l", -b, 0], ["z"]];
            return f.toString = m,
            f
        }
        function k(c, d, b, a, e) {
            if (null == e && null == a && (a = b),
            c = +c,
            d = +d,
            b = +b,
            a = +a,
            null != e)
                var f = Math.PI / 180
                  , h = c + b * Math.cos(-a * f)
                  , i = c + b * Math.cos(-e * f)
                  , j = d + b * Math.sin(-a * f)
                  , k = d + b * Math.sin(-e * f)
                  , g = [["M", h, j], ["A", b, b, 0, +(e - a > 180), 0, i, k]];
            else
                g = [["M", c, d], ["m", 0, -a], ["a", b, a, 0, 1, 1, 0, 2 * a], ["a", b, a, 0, 1, 1, 0, -2 * a], ["z"]];
            return g.toString = m,
            g
        }
        function W(f) {
            var q = j(f), s = String.prototype.toLowerCase, c, h, g, l, n, r, d, t, e, b, k, u, o, v, p;
            if (q.rel)
                return i(q.rel);
            a.is(f, "array") && a.is(f && f[0], "array") || (f = a.parsePathString(f)),
            c = [],
            h = 0,
            g = 0,
            l = 0,
            n = 0,
            r = 0,
            "M" == f[0][0] && (h = f[0][1],
            g = f[0][2],
            l = h,
            n = g,
            r++,
            c.push(["M", h, g]));
            for (d = r,
            t = f.length; t > d; d++) {
                if (e = c[d] = [],
                b = f[d],
                b[0] != s.call(b[0]))
                    switch (e[0] = s.call(b[0]),
                    e[0]) {
                    case "a":
                        e[1] = b[1],
                        e[2] = b[2],
                        e[3] = b[3],
                        e[4] = b[4],
                        e[5] = b[5],
                        e[6] = +(b[6] - h).toFixed(3),
                        e[7] = +(b[7] - g).toFixed(3);
                        break;
                    case "v":
                        e[1] = +(b[1] - g).toFixed(3);
                        break;
                    case "m":
                        l = b[1],
                        n = b[2];
                    default:
                        for (k = 1,
                        u = b.length; u > k; k++)
                            e[k] = +(b[k] - (k % 2 ? h : g)).toFixed(3)
                    }
                else {
                    e = c[d] = [],
                    "m" == b[0] && (l = b[1] + h,
                    n = b[2] + g);
                    for (o = 0,
                    v = b.length; v > o; o++)
                        c[d][o] = b[o]
                }
                switch (p = c[d].length,
                c[d][0]) {
                case "z":
                    h = l,
                    g = n;
                    break;
                case "h":
                    h += +c[d][p - 1];
                    break;
                case "v":
                    g += +c[d][p - 1];
                    break;
                default:
                    h += +c[d][p - 2],
                    g += +c[d][p - 1]
                }
            }
            return c.toString = m,
            q.rel = i(c),
            c
        }
        function z(g) {
            var t = j(g), n, d, f, e, o, p, v, c, b, u, r, w, h, l, s, q, x;
            if (t.abs)
                return i(t.abs);
            if (I(g, "array") && I(g && g[0], "array") || (g = a.parsePathString(g)),
            !g || !g.length)
                return [["M", 0, 0]];
            d = [],
            f = 0,
            e = 0,
            o = 0,
            p = 0,
            v = 0,
            "M" == g[0][0] && (f = +g[0][1],
            e = +g[0][2],
            o = f,
            p = e,
            v++,
            d[0] = ["M", f, e]);
            for (c,
            b,
            u = 3 == g.length && "M" == g[0][0] && "R" == g[1][0].toUpperCase() && "Z" == g[2][0].toUpperCase(),
            r = v,
            w = g.length; w > r; r++) {
                if (d.push(c = []),
                b = g[r],
                n = b[0],
                n != n.toUpperCase())
                    switch (c[0] = n.toUpperCase(),
                    c[0]) {
                    case "A":
                        c[1] = b[1],
                        c[2] = b[2],
                        c[3] = b[3],
                        c[4] = b[4],
                        c[5] = b[5],
                        c[6] = +b[6] + f,
                        c[7] = +b[7] + e;
                        break;
                    case "V":
                        c[1] = +b[1] + e;
                        break;
                    case "H":
                        c[1] = +b[1] + f;
                        break;
                    case "R":
                        for (h = [f, e].concat(b.slice(1)),
                        l = 2,
                        s = h.length; s > l; l++)
                            h[l] = +h[l] + f,
                            h[++l] = +h[l] + e;
                        d.pop(),
                        d = d.concat(G(h, u));
                        break;
                    case "O":
                        d.pop(),
                        h = k(f, e, b[1], b[2]),
                        h.push(h[0]),
                        d = d.concat(h);
                        break;
                    case "U":
                        d.pop(),
                        d = d.concat(k(f, e, b[1], b[2], b[3])),
                        c = ["U"].concat(d[d.length - 1].slice(-2));
                        break;
                    case "M":
                        o = +b[1] + f,
                        p = +b[2] + e;
                    default:
                        for (l = 1,
                        s = b.length; s > l; l++)
                            c[l] = +b[l] + (l % 2 ? f : e)
                    }
                else if ("R" == n)
                    h = [f, e].concat(b.slice(1)),
                    d.pop(),
                    d = d.concat(G(h, u)),
                    c = ["R"].concat(b.slice(-2));
                else if ("O" == n)
                    d.pop(),
                    h = k(f, e, b[1], b[2]),
                    h.push(h[0]),
                    d = d.concat(h);
                else if ("U" == n)
                    d.pop(),
                    d = d.concat(k(f, e, b[1], b[2], b[3])),
                    c = ["U"].concat(d[d.length - 1].slice(-2));
                else
                    for (q = 0,
                    x = b.length; x > q; q++)
                        c[q] = b[q];
                if (n = n.toUpperCase(),
                "O" != n)
                    switch (c[0]) {
                    case "Z":
                        f = +o,
                        e = +p;
                        break;
                    case "H":
                        f = c[1];
                        break;
                    case "V":
                        e = c[1];
                        break;
                    case "M":
                        o = c[c.length - 2],
                        p = c[c.length - 1];
                    default:
                        f = c[c.length - 2],
                        e = c[c.length - 1]
                    }
            }
            return d.toString = m,
            t.abs = i(d),
            d
        }
        function s(c, d, a, b) {
            return [c, d, a, b, a, b]
        }
        function B(g, h, c, d, e, f) {
            var a = 1 / 3
              , b = 2 / 3;
            return [a * g + b * c, a * h + b * d, a * e + b * c, a * f + b * d, e, f]
        }
        function C(p, n, h, e, z, Q, u, i, j, s) {
            var q, F = 120 * f / 180, y = f / 180 * (+z || 0), k = [], x = a._.cacher(function(c, d, a) {
                var e = c * b.cos(a) - d * b.sin(a)
                  , f = c * b.sin(a) + d * b.cos(a);
                return {
                    x: e,
                    y: f
                }
            }), o, m, v, D, B, K, w, t, d, c, A, U, T, S, R, P, N, O, M, E, L, J, r, I, H, G, l, V;
            if (s ? (d = s[0],
            c = s[1],
            w = s[2],
            t = s[3]) : (q = x(p, n, -y),
            p = q.x,
            n = q.y,
            q = x(i, j, -y),
            i = q.x,
            j = q.y,
            o = (b.cos(f / 180 * z),
            b.sin(f / 180 * z),
            (p - i) / 2),
            m = (n - j) / 2,
            v = o * o / (h * h) + m * m / (e * e),
            v > 1 && (v = b.sqrt(v),
            h = v * h,
            e = v * e),
            D = h * h,
            B = e * e,
            K = (Q == u ? -1 : 1) * b.sqrt(g((D * B - D * m * m - B * o * o) / (D * m * m + B * o * o))),
            w = K * h * m / e + (p + i) / 2,
            t = K * -e * o / h + (n + j) / 2,
            d = b.asin(((n - t) / e).toFixed(9)),
            c = b.asin(((j - t) / e).toFixed(9)),
            d = w > p ? f - d : d,
            c = w > i ? f - c : c,
            0 > d && (d = 2 * f + d),
            0 > c && (c = 2 * f + c),
            u && d > c && (d -= 2 * f),
            !u && c > d && (c -= 2 * f)),
            A = c - d,
            g(A) > F && (U = c,
            T = i,
            S = j,
            c = d + F * (u && c > d ? 1 : -1),
            i = w + h * b.cos(c),
            j = t + e * b.sin(c),
            k = C(i, j, h, e, z, 0, u, T, S, [c, U, w, t])),
            A = c - d,
            R = b.cos(d),
            P = b.sin(d),
            N = b.cos(c),
            O = b.sin(c),
            M = b.tan(A / 4),
            E = 4 / 3 * h * M,
            L = 4 / 3 * e * M,
            J = [p, n],
            r = [p + E * P, n - L * R],
            I = [i + E * O, j - L * N],
            H = [i, j],
            r[0] = 2 * J[0] - r[0],
            r[1] = 2 * J[1] - r[1],
            s)
                return [r, I, H].concat(k);
            k = [r, I, H].concat(k).join().split(",");
            for (G = [],
            l = 0,
            V = k.length; V > l; l++)
                G[l] = l % 2 ? x(k[l - 1], k[l], y).y : x(k[l], k[l + 1], y).x;
            return G
        }
        function D(m, l, p, s, v, u, y, z) {
            for (var i, h, o, a, q, r, x, t, k = [], f = [[], []], w = 0, e, j, n; 2 > w; ++w)
                if (0 == w ? (h = 6 * m - 12 * p + 6 * v,
                i = -3 * m + 9 * p - 9 * v + 3 * y,
                o = 3 * p - 3 * m) : (h = 6 * l - 12 * s + 6 * u,
                i = -3 * l + 9 * s - 9 * u + 3 * z,
                o = 3 * s - 3 * l),
                g(i) < 1e-12) {
                    if (g(h) < 1e-12)
                        continue;
                    a = -o / h,
                    a > 0 && 1 > a && k.push(a)
                } else
                    x = h * h - 4 * o * i,
                    t = b.sqrt(x),
                    0 > x || (q = (-h + t) / (2 * i),
                    q > 0 && 1 > q && k.push(q),
                    r = (-h - t) / (2 * i),
                    r > 0 && 1 > r && k.push(r));
            for (e,
            j = k.length,
            n = j; j--; )
                a = k[j],
                e = 1 - a,
                f[0][j] = e * e * e * m + 3 * e * e * a * p + 3 * e * a * a * v + a * a * a * y,
                f[1][j] = e * e * e * l + 3 * e * e * a * s + 3 * e * a * a * u + a * a * a * z;
            return f[0][n] = m,
            f[1][n] = l,
            f[0][n + 1] = y,
            f[1][n + 1] = z,
            f[0].length = f[1].length = n + 2,
            {
                min: {
                    x: d.apply(0, f[0]),
                    y: d.apply(0, f[1])
                },
                max: {
                    x: c.apply(0, f[0]),
                    y: c.apply(0, f[1])
                }
            }
        }
        function l(y, o) {
            var u = !o && j(y), d, b, e, f, x, w, v, l, m, g, p, a, t, k, h, n, q;
            if (!o && u.curve)
                return i(u.curve);
            for (d = z(y),
            b = o && z(o),
            e = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            },
            f = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            },
            x = function(b, a, c) {
                var d, e;
                if (!b)
                    return ["C", a.x, a.y, a.x, a.y, a.x, a.y];
                switch (!(b[0]in {
                    T: 1,
                    Q: 1
                }) && (a.qx = a.qy = null),
                b[0]) {
                case "M":
                    a.X = b[1],
                    a.Y = b[2];
                    break;
                case "A":
                    b = ["C"].concat(C.apply(0, [a.x, a.y].concat(b.slice(1))));
                    break;
                case "S":
                    "C" == c || "S" == c ? (d = 2 * a.x - a.bx,
                    e = 2 * a.y - a.by) : (d = a.x,
                    e = a.y),
                    b = ["C", d, e].concat(b.slice(1));
                    break;
                case "T":
                    "Q" == c || "T" == c ? (a.qx = 2 * a.x - a.qx,
                    a.qy = 2 * a.y - a.qy) : (a.qx = a.x,
                    a.qy = a.y),
                    b = ["C"].concat(B(a.x, a.y, a.qx, a.qy, b[1], b[2]));
                    break;
                case "Q":
                    a.qx = b[1],
                    a.qy = b[2],
                    b = ["C"].concat(B(a.x, a.y, b[1], b[2], b[3], b[4]));
                    break;
                case "L":
                    b = ["C"].concat(s(a.x, a.y, b[1], b[2]));
                    break;
                case "H":
                    b = ["C"].concat(s(a.x, a.y, b[1], a.y));
                    break;
                case "V":
                    b = ["C"].concat(s(a.x, a.y, a.x, b[1]));
                    break;
                case "Z":
                    b = ["C"].concat(s(a.x, a.y, a.X, a.Y))
                }
                return b
            }
            ,
            w = function(e, a) {
                if (e[a].length > 7) {
                    e[a].shift();
                    for (var f = e[a]; f.length; )
                        l[a] = "A",
                        b && (m[a] = "A"),
                        e.splice(a++, 0, ["C"].concat(f.splice(0, 6)));
                    e.splice(a, 1),
                    t = c(d.length, b && b.length || 0)
                }
            }
            ,
            v = function(e, g, f, h, a) {
                e && g && "M" == e[a][0] && "M" != g[a][0] && (g.splice(a, 0, ["M", h.x, h.y]),
                f.bx = 0,
                f.by = 0,
                f.x = e[a][1],
                f.y = e[a][2],
                t = c(d.length, b && b.length || 0))
            }
            ,
            l = [],
            m = [],
            g = "",
            p = "",
            a = 0,
            t = c(d.length, b && b.length || 0); t > a; a++)
                d[a] && (g = d[a][0]),
                "C" != g && (l[a] = g,
                a && (p = l[a - 1])),
                d[a] = x(d[a], e, p),
                "A" != l[a] && "C" == g && (l[a] = "C"),
                w(d, a),
                b && (b[a] && (g = b[a][0]),
                "C" != g && (m[a] = g,
                a && (p = m[a - 1])),
                b[a] = x(b[a], f, p),
                "A" != m[a] && "C" == g && (m[a] = "C"),
                w(b, a)),
                v(d, b, e, f, a),
                v(b, d, f, e, a),
                k = d[a],
                h = b && b[a],
                n = k.length,
                q = b && h.length,
                e.x = k[n - 2],
                e.y = k[n - 1],
                e.bx = r(k[n - 4]) || e.x,
                e.by = r(k[n - 3]) || e.y,
                f.bx = b && (r(h[q - 4]) || f.x),
                f.by = b && (r(h[q - 3]) || f.y),
                f.x = b && h[q - 2],
                f.y = b && h[q - 1];
            return b || (u.curve = i(d)),
            b ? [d, b] : d
        }
        function V(c, e) {
            if (!e)
                return c;
            var i, f, d, a, g, h, b;
            for (c = l(c),
            d = 0,
            g = c.length; g > d; d++)
                for (b = c[d],
                a = 1,
                h = b.length; h > a; a += 2)
                    i = e.x(b[a], b[a + 1]),
                    f = e.y(b[a], b[a + 1]),
                    b[a] = i,
                    b[a + 1] = f;
            return c
        }
        function G(b, e) {
            for (var f = [], c = 0, d = b.length, a; d - 2 * !e > c; c += 2)
                a = [{
                    x: +b[c - 2],
                    y: +b[c - 1]
                }, {
                    x: +b[c],
                    y: +b[c + 1]
                }, {
                    x: +b[c + 2],
                    y: +b[c + 3]
                }, {
                    x: +b[c + 4],
                    y: +b[c + 5]
                }],
                e ? c ? d - 4 == c ? a[3] = {
                    x: +b[0],
                    y: +b[1]
                } : d - 2 == c && (a[2] = {
                    x: +b[0],
                    y: +b[1]
                },
                a[3] = {
                    x: +b[2],
                    y: +b[3]
                }) : a[0] = {
                    x: +b[d - 2],
                    y: +b[d - 1]
                } : d - 4 == c ? a[3] = a[2] : c || (a[0] = {
                    x: +b[c],
                    y: +b[c + 1]
                }),
                f.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y]);
            return f
        }
        var v = E.prototype
          , I = a.is
          , u = a._.clone
          , S = "hasOwnProperty"
          , R = /,?([a-z]),?/gi
          , r = parseFloat
          , b = Math
          , f = b.PI
          , d = b.min
          , c = b.max
          , L = b.pow
          , g = b.abs
          , T = y(1)
          , J = y()
          , w = y(0, 1)
          , q = a._unit2px
          , X = {
            path: function(a) {
                return a.attr("path")
            },
            circle: function(b) {
                var a = q(b);
                return k(a.cx, a.cy, a.r)
            },
            ellipse: function(b) {
                var a = q(b);
                return k(a.cx || 0, a.cy || 0, a.rx, a.ry)
            },
            rect: function(b) {
                var a = q(b);
                return p(a.x || 0, a.y || 0, a.width, a.height, a.rx, a.ry)
            },
            image: function(b) {
                var a = q(b);
                return p(a.x || 0, a.y || 0, a.width, a.height)
            },
            line: function(a) {
                return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
            },
            polyline: function(a) {
                return "M" + a.attr("points")
            },
            polygon: function(a) {
                return "M" + a.attr("points") + "z"
            },
            deflt: function(b) {
                var a = b.node.getBBox();
                return p(a.x, a.y, a.width, a.height)
            }
        };
        a.path = j,
        a.path.getTotalLength = T,
        a.path.getPointAtLength = J,
        a.path.getSubpath = function(a, b, c) {
            if (this.getTotalLength(a) - c < 1e-6)
                return w(a, b).end;
            var d = w(a, c, 1);
            return b ? w(d, b).end : d
        }
        ,
        v.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }
        ,
        v.getPointAtLength = function(a) {
            return J(this.attr("d"), a)
        }
        ,
        v.getSubpath = function(b, c) {
            return a.path.getSubpath(this.attr("d"), b, c)
        }
        ,
        a._.box = h,
        a.path.findDotsAtSegment = o,
        a.path.bezierBBox = x,
        a.path.isPointInsideBBox = e,
        a.closest = function(k, g, f, q) {
            for (var b = 100, n = h(k - b / 2, g - b / 2, b, b), d = [], r = f[0].hasOwnProperty("x") ? function(a) {
                return {
                    x: f[a].x,
                    y: f[a].y
                }
            }
            : function(a) {
                return {
                    x: f[a],
                    y: q[a]
                }
            }
            , l = 0, c, j, i, o, p, m; 1e6 >= b && !l; ) {
                for (c = 0,
                j = f.length; j > c; c++)
                    if (i = r(c),
                    e(n, i.x, i.y)) {
                        l++,
                        d.push(i);
                        break
                    }
                l || (b *= 2,
                n = h(k - b / 2, g - b / 2, b, b))
            }
            if (1e6 != b) {
                p = 1 / 0;
                for (c = 0,
                j = d.length; j > c; c++)
                    m = a.len(k, g, d[c].x, d[c].y),
                    p > m && (p = m,
                    d[c].len = m,
                    o = d[c]);
                return o
            }
        }
        ,
        a.path.isBBoxIntersect = F,
        a.path.intersection = N,
        a.path.intersectionNumber = M,
        a.path.isPointInside = U,
        a.path.getBBox = H,
        a.path.get = X,
        a.path.toRelative = W,
        a.path.toAbsolute = z,
        a.path.toCubic = l,
        a.path.map = V,
        a.path.toString = m,
        a.path.clone = i
    }),
    b.plugin(function(c) {
        var f = Math.max
          , g = Math.min
          , e = function(a) {
            if (this.items = [],
            this.bindings = {},
            this.length = 0,
            this.type = "set",
            a)
                for (var b = 0, c = a.length; c > b; b++)
                    a[b] && (this[this.items.length] = this.items[this.items.length] = a[b],
                    this.length++)
        }
          , b = e.prototype;
        b.push = function() {
            for (var a, b, c = 0, d = arguments.length; d > c; c++)
                a = arguments[c],
                a && (b = this.items.length,
                this[b] = this.items[b] = a,
                this.length++);
            return this
        }
        ,
        b.pop = function() {
            return this.length && delete this[this.length--],
            this.items.pop()
        }
        ,
        b.forEach = function(b, c) {
            for (var a = 0, d = this.items.length; d > a; a++)
                if (b.call(c, this.items[a], a) === !1)
                    return this;
            return this
        }
        ,
        b.animate = function(b, i, e, g) {
            var f, j, h, k, l, m, n;
            return "function" != typeof e || e.length || (g = e,
            e = d.linear),
            b instanceof c._.Animation && (g = b.callback,
            e = b.easing,
            i = e.dur,
            b = b.attr),
            f = arguments,
            c.is(b, "array") && c.is(f[f.length - 1], "array") && (j = !0),
            k = function() {
                h ? this.b = h : h = this.b
            }
            ,
            l = 0,
            m = this,
            n = g && function() {
                ++l == m.length && g.call(this)
            }
            ,
            this.forEach(function(c, d) {
                a.once("snap.animcreated." + c.id, k),
                j ? f[d] && c.animate.apply(c, f[d]) : c.animate(b, i, e, n)
            })
        }
        ,
        b.remove = function() {
            for (; this.length; )
                this.pop().remove();
            return this
        }
        ,
        b.bind = function(a, b, d) {
            var c = {}, e;
            return "function" == typeof b ? this.bindings[a] = b : (e = d || a,
            this.bindings[a] = function(a) {
                c[e] = a,
                b.attr(c)
            }
            ),
            this
        }
        ,
        b.attr = function(b) {
            var d = {}, a, c, e;
            for (a in b)
                this.bindings[a] ? this.bindings[a](b[a]) : d[a] = b[a];
            for (c = 0,
            e = this.items.length; e > c; c++)
                this.items[c].attr(d);
            return this
        }
        ,
        b.clear = function() {
            for (; this.length; )
                this.pop()
        }
        ,
        b.splice = function(b, d) {
            var a, h, j, i, c;
            b = 0 > b ? f(this.length + b, 0) : b,
            d = f(0, g(this.length - b, d)),
            h = [],
            j = [],
            i = [];
            for (a = 2; a < arguments.length; a++)
                i.push(arguments[a]);
            for (a = 0; d > a; a++)
                j.push(this[b + a]);
            for (; a < this.length - b; a++)
                h.push(this[b + a]);
            c = i.length;
            for (a = 0; a < c + h.length; a++)
                this.items[b + a] = this[b + a] = c > a ? i[a] : h[a - c];
            for (a = this.items.length = this.length -= d - c; this[a]; )
                delete this[a++];
            return new e(j)
        }
        ,
        b.exclude = function(b) {
            for (var a = 0, c = this.length; c > a; a++)
                if (this[a] == b)
                    return this.splice(a, 1),
                    !0;
            return !1
        }
        ,
        b.insertAfter = function(b) {
            for (var a = this.items.length; a--; )
                this.items[a].insertAfter(b);
            return this
        }
        ,
        b.getBBox = function() {
            for (var a = [], b = [], c = [], d = [], h = this.items.length, e; h--; )
                this.items[h].removed || (e = this.items[h].getBBox(),
                a.push(e.x),
                b.push(e.y),
                c.push(e.x + e.width),
                d.push(e.y + e.height));
            return a = g.apply(0, a),
            b = g.apply(0, b),
            c = f.apply(0, c),
            d = f.apply(0, d),
            {
                x: a,
                y: b,
                x2: c,
                y2: d,
                width: c - a,
                height: d - b,
                cx: a + (c - a) / 2,
                cy: b + (d - b) / 2
            }
        }
        ,
        b.clone = function(a) {
            a = new e;
            for (var b = 0, c = this.items.length; c > b; b++)
                a.push(this.items[b].clone());
            return a
        }
        ,
        b.toString = function() {
            return "Snap‘s set"
        }
        ,
        b.type = "set",
        c.Set = e,
        c.set = function() {
            var a = new e;
            return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)),
            a
        }
    }),
    b.plugin(function(b, k) {
        function j(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
            case "t":
                return [b, 0, 0];
            case "m":
                return [b, 1, 0, 0, 1, 0, 0];
            case "r":
                return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
            case "s":
                return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        }
        function o(e, a, n) {
            a = c(a).replace(/\.{3}|\u2026/g, e),
            e = b.parseTransformString(e) || [],
            a = b.parseTransformString(a) || [];
            for (var h, o, g, k, p = Math.max(e.length, a.length), l = [], m = [], i = 0; p > i; i++) {
                if (g = e[i] || j(a[i]),
                k = a[i] || j(g),
                g[0] != k[0] || "r" == g[0].toLowerCase() && (g[2] != k[2] || g[3] != k[3]) || "s" == g[0].toLowerCase() && (g[3] != k[3] || g[4] != k[4])) {
                    e = b._.transform2matrix(e, n()),
                    a = b._.transform2matrix(a, n()),
                    l = [["m", e.a, e.b, e.c, e.d, e.e, e.f]],
                    m = [["m", a.a, a.b, a.c, a.d, a.e, a.f]];
                    break
                }
                for (l[i] = [],
                m[i] = [],
                h = 0,
                o = Math.max(g.length, k.length); o > h; h++)
                    h in g && (l[i][h] = g[h]),
                    h in k && (m[i][h] = k[h])
            }
            return {
                from: d(l),
                to: d(m),
                f: f(l)
            }
        }
        function h(a) {
            return a
        }
        function n(a) {
            return function(b) {
                return +b.toFixed(3) + a
            }
        }
        function l(a) {
            return a.join(" ")
        }
        function p(a) {
            return b.rgb(a[0], a[1], a[2])
        }
        function f(c) {
            var a, f, b, g, d, e, i = 0, h = [];
            for (a = 0,
            f = c.length; f > a; a++) {
                for (d = "[",
                e = ['"' + c[a][0] + '"'],
                b = 1,
                g = c[a].length; g > b; b++)
                    e[b] = "val[" + i++ + "]";
                d += e + "]",
                h[a] = d
            }
            return Function("val", "return Snap.path.toString.call([" + h + "])")
        }
        function d(b) {
            for (var d = [], a = 0, e = b.length, c, f; e > a; a++)
                for (c = 1,
                f = b[a].length; f > c; c++)
                    d.push(b[a][c]);
            return d
        }
        function i(a) {
            return isFinite(parseFloat(a))
        }
        function m(a, c) {
            return !!(b.is(a, "array") && b.is(c, "array")) && a.toString() == c.toString()
        }
        var e = {}
          , g = /[a-z]+$/i
          , c = String;
        e.stroke = e.fill = "colour",
        k.prototype.equal = function(b, c) {
            return a("snap.util.equal", this, b, c).firstDefined()
        }
        ,
        a.on("snap.util.equal", function(k, a) {
            var j, q, r = c(this.attr(k) || ""), t = this, s, u;
            return i(r) && i(a) ? {
                from: parseFloat(r),
                to: parseFloat(a),
                f: h
            } : "colour" == e[k] ? (j = b.color(r),
            q = b.color(a),
            {
                from: [j.r, j.g, j.b, j.opacity],
                to: [q.r, q.g, q.b, q.opacity],
                f: p
            }) : "viewBox" == k ? (j = this.attr(k).vb.split(" ").map(Number),
            q = a.split(" ").map(Number),
            {
                from: j,
                to: q,
                f: l
            }) : "transform" == k || "gradientTransform" == k || "patternTransform" == k ? (a instanceof b.Matrix && (a = a.toTransformString()),
            b._.rgTransform.test(a) || (a = b._.svgTransform2string(a)),
            o(r, a, function() {
                return t.getBBox(1)
            })) : "d" == k || "path" == k ? (j = b.path.toCubic(r, a),
            {
                from: d(j[0]),
                to: d(j[1]),
                f: f(j[0])
            }) : "points" == k ? (j = c(r).split(b._.separator),
            q = c(a).split(b._.separator),
            {
                from: j,
                to: q,
                f: function(a) {
                    return a
                }
            }) : (s = r.match(g),
            u = c(a).match(g),
            s && m(s, u) ? {
                from: parseFloat(r),
                to: parseFloat(a),
                f: n(s)
            } : {
                from: this.asPX(k),
                to: this.asPX(k, a),
                f: h
            })
        })
    }),
    b.plugin(function(d, o, s, m) {
        for (var c = o.prototype, q = "hasOwnProperty", g = ("createTouch"in m.doc), l = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], h = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, f = function(d, a) {
            var b = "y" == d ? "scrollTop" : "scrollLeft"
              , c = a && a.node ? a.node.ownerDocument : m.doc;
            return c[b in c.documentElement ? "documentElement" : "body"][b]
        }, p = function() {
            return this.originalEvent.preventDefault()
        }, r = function() {
            return this.originalEvent.stopPropagation()
        }, n = function(b, a, i, e) {
            var c = g && h[a] ? h[a] : a
              , d = function(c) {
                var j = f("y", e), k = f("x", e), d, l, m, n, o;
                if (g && h[q](a))
                    for (d = 0,
                    l = c.targetTouches && c.targetTouches.length; l > d; d++)
                        if (c.targetTouches[d].target == b || b.contains(c.targetTouches[d].target)) {
                            m = c,
                            c = c.targetTouches[d],
                            c.originalEvent = m,
                            c.preventDefault = p,
                            c.stopPropagation = r;
                            break
                        }
                return n = c.clientX + k,
                o = c.clientY + j,
                i.call(e, c, n, o)
            };
            return a !== c && b.addEventListener(a, d, !1),
            b.addEventListener(c, d, !1),
            function() {
                return a !== c && b.removeEventListener(a, d, !1),
                b.removeEventListener(c, d, !1),
                !0
            }
        }, b = [], j = function(c) {
            for (var d, h = c.clientX, i = c.clientY, m = f("y"), n = f("x"), k = b.length, e, l, j; k--; ) {
                if (d = b[k],
                g) {
                    for (e,
                    l = c.touches && c.touches.length; l--; )
                        if (e = c.touches[l],
                        e.identifier == d.el._drag.id || d.el.node.contains(e.target)) {
                            h = e.clientX,
                            i = e.clientY,
                            (c.originalEvent ? c.originalEvent : c).preventDefault();
                            break
                        }
                } else
                    c.preventDefault();
                j = d.el.node,
                j.nextSibling,
                j.parentNode,
                j.style.display,
                h += n,
                i += m,
                a("snap.drag.move." + d.el.id, d.move_scope || d.el, h - d.el._drag.x, i - d.el._drag.y, h, i, c)
            }
        }, i = function(f) {
            d.unmousemove(j).unmouseup(i);
            for (var c, e = b.length; e--; )
                c = b[e],
                c.el._drag = {},
                a("snap.drag.end." + c.el.id, c.end_scope || c.start_scope || c.move_scope || c.el, f),
                a.off("snap.drag.*." + c.el.id);
            b = []
        }, k = l.length, e; k--; )
            !function(a) {
                d[a] = c[a] = function(c, e) {
                    if (d.is(c, "function"))
                        this.events = this.events || [],
                        this.events.push({
                            name: a,
                            f: c,
                            unbind: n(this.node || document, a, c, e || this)
                        });
                    else
                        for (var b = 0, f = this.events.length; f > b; b++)
                            if (this.events[b].name == a)
                                try {
                                    this.events[b].f.call(this)
                                } catch (a) {}
                    return this
                }
                ,
                d["un" + a] = c["un" + a] = function(d) {
                    for (var b = this.events || [], c = b.length; c--; )
                        if (b[c].name == a && (b[c].f == d || !d))
                            return b[c].unbind(),
                            b.splice(c, 1),
                            !b.length && delete this.events,
                            this;
                    return this
                }
            }(l[k]);
        c.hover = function(b, c, a, d) {
            return this.mouseover(b, a).mouseout(c, d || a)
        }
        ,
        c.unhover = function(a, b) {
            return this.unmouseover(a).unmouseout(b)
        }
        ,
        e = [],
        c.drag = function(g, h, n, o, k, p) {
            var c, f;
            function l(e, f, l) {
                (e.originalEvent || e).preventDefault(),
                c._drag.x = f,
                c._drag.y = l,
                c._drag.id = e.identifier,
                !b.length && d.mousemove(j).mouseup(i),
                b.push({
                    el: c,
                    move_scope: o,
                    start_scope: k,
                    end_scope: p
                }),
                h && a.on("snap.drag.start." + c.id, h),
                g && a.on("snap.drag.move." + c.id, g),
                n && a.on("snap.drag.end." + c.id, n),
                a("snap.drag.start." + c.id, k || o || c, f, l, e)
            }
            function m(b, d, e) {
                a("snap.draginit." + c.id, c, b, d, e)
            }
            return c = this,
            !arguments.length ? c.drag(function(a, b) {
                this.attr({
                    transform: f + (f ? "T" : "t") + [a, b]
                })
            }, function() {
                f = this.transform().local
            }) : (a.on("snap.draginit." + c.id, l),
            c._drag = {},
            e.push({
                el: c,
                start: l,
                init: m
            }),
            c.mousedown(m),
            c)
        }
        ,
        c.undrag = function() {
            for (var b = e.length; b--; )
                e[b].el == this && (this.unmousedown(e[b].init),
                e.splice(b, 1),
                a.unbind("snap.drag.*." + this.id),
                a.unbind("snap.draginit." + this.id));
            return !e.length && d.unmousemove(j).unmouseup(i),
            this
        }
    }),
    b.plugin(function(b, d, f) {
        var g = (d.prototype,
        f.prototype)
          , h = /^\s*url\((.+)\)/
          , e = String
          , c = b._.$;
        b.filter = {},
        g.filter = function(g) {
            var a = this, h, i, f;
            return "svg" != a.type && (a = a.paper),
            h = b.parse(e(g)),
            i = b._.id(),
            f = (a.node.offsetWidth,
            a.node.offsetHeight,
            c("filter")),
            c(f, {
                id: i,
                filterUnits: "userSpaceOnUse"
            }),
            f.appendChild(h.node),
            a.defs.appendChild(f),
            new d(f)
        }
        ,
        a.on("snap.util.getattr.filter", function() {
            var d, f;
            if (a.stop(),
            d = c(this.node, "filter"),
            d)
                return f = e(d).match(h),
                f && b.select(f[1])
        }),
        a.on("snap.util.attr.filter", function(e) {
            if (e instanceof d && "filter" == e.type) {
                a.stop();
                var f = e.node.id;
                f || (c(e.node, {
                    id: e.id
                }),
                f = e.id),
                c(this.node, {
                    filter: b.url(f)
                })
            }
            e && "none" != e || (a.stop(),
            this.node.removeAttribute("filter"))
        }),
        b.filter.blur = function(a, c) {
            null == a && (a = 2);
            var d = null == c ? a : [a, c];
            return b.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: d
            })
        }
        ,
        b.filter.blur.toString = function() {
            return this()
        }
        ,
        b.filter.shadow = function(e, f, c, a, d) {
            return "string" == typeof c && (a = c,
            d = a,
            c = 4),
            "string" != typeof a && (d = a,
            a = "#000"),
            a = a || "#000",
            null == c && (c = 4),
            null == d && (d = 1),
            null == e && (e = 0,
            f = 2),
            null == f && (f = e),
            a = b.color(a),
            b.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: a,
                dx: e,
                dy: f,
                blur: c,
                opacity: d
            })
        }
        ,
        b.filter.shadow.toString = function() {
            return this()
        }
        ,
        b.filter.grayscale = function(a) {
            return null == a && (a = 1),
            b.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - a),
                b: .7152 - .7152 * (1 - a),
                c: .0722 - .0722 * (1 - a),
                d: .2126 - .2126 * (1 - a),
                e: .7152 + .2848 * (1 - a),
                f: .0722 - .0722 * (1 - a),
                g: .2126 - .2126 * (1 - a),
                h: .0722 + .9278 * (1 - a)
            })
        }
        ,
        b.filter.grayscale.toString = function() {
            return this()
        }
        ,
        b.filter.sepia = function(a) {
            return null == a && (a = 1),
            b.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - a),
                b: .769 - .769 * (1 - a),
                c: .189 - .189 * (1 - a),
                d: .349 - .349 * (1 - a),
                e: .686 + .314 * (1 - a),
                f: .168 - .168 * (1 - a),
                g: .272 - .272 * (1 - a),
                h: .534 - .534 * (1 - a),
                i: .131 + .869 * (1 - a)
            })
        }
        ,
        b.filter.sepia.toString = function() {
            return this()
        }
        ,
        b.filter.saturate = function(a) {
            return null == a && (a = 1),
            b.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - a
            })
        }
        ,
        b.filter.saturate.toString = function() {
            return this()
        }
        ,
        b.filter.hueRotate = function(a) {
            return a = a || 0,
            b.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: a
            })
        }
        ,
        b.filter.hueRotate.toString = function() {
            return this()
        }
        ,
        b.filter.invert = function(a) {
            return null == a && (a = 1),
            b.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: a,
                amount2: 1 - a
            })
        }
        ,
        b.filter.invert.toString = function() {
            return this()
        }
        ,
        b.filter.brightness = function(a) {
            return null == a && (a = 1),
            b.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: a
            })
        }
        ,
        b.filter.brightness.toString = function() {
            return this()
        }
        ,
        b.filter.contrast = function(a) {
            return null == a && (a = 1),
            b.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: a,
                amount2: .5 - a / 2
            })
        }
        ,
        b.filter.contrast.toString = function() {
            return this()
        }
    }),
    b.plugin(function(a, b) {
        var c = a._.box
          , d = a.is
          , e = /^[^a-z]*([tbmlrc])/i
          , f = function() {
            return "T" + this.dx + "," + this.dy
        };
        b.prototype.getAlign = function(b, g) {
            null == g && d(b, "string") && (g = b,
            b = null),
            b = b || this.paper;
            var h = b.getBBox ? b.getBBox() : c(b)
              , i = this.getBBox()
              , a = {};
            switch (g = g && g.match(e),
            g = g ? g[1].toLowerCase() : "c") {
            case "t":
                a.dx = 0,
                a.dy = h.y - i.y;
                break;
            case "b":
                a.dx = 0,
                a.dy = h.y2 - i.y2;
                break;
            case "m":
                a.dx = 0,
                a.dy = h.cy - i.cy;
                break;
            case "l":
                a.dx = h.x - i.x,
                a.dy = 0;
                break;
            case "r":
                a.dx = h.x2 - i.x2,
                a.dy = 0;
                break;
            default:
                a.dx = h.cx - i.cx,
                a.dy = 0
            }
            return a.toString = f,
            a
        }
        ,
        b.prototype.align = function(a, b) {
            return this.transform("..." + this.getAlign(a, b))
        }
    }),
    b
})
