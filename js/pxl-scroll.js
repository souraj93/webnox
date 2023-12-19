/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? b(exports) : "function" == typeof define && define.amd ? define(["exports"], b) : b((a = a || self).window = a.window || {})
}(this, function(ap) {
    "use strict";
    var n, be, v, O, M, ae, bA, T, aI, bw, K, C, bv, bu, ab, c, G, ai, aS, az, aw, q, k, j, a, ad, e, f, E, g, bB, aJ, aK, ac, aA, aE, p, aC, aQ, r, bs, br, $, bq, aN, bp, w, bo, bi, bm, W, bb, bc, bd, ag, D, bF, ah, aM, s, a_, B, aq, _, aZ, aX, R, S, al, am, ak, aj, h, A, an, bO, l, I, bC, aH, aG, aF, b, aW, Y, bJ, X, y, Q, V, bz, ax, L, aV, av, bT, aa, at, bW, d, bh, ao, bV, bt;
    function bY(d, c) {
        for (var b = 0, a; b < c.length; b++)
            a = c[b],
            a.enumerable = a.enumerable || !1,
            a.configurable = !0,
            "value"in a && (a.writable = !0),
            Object.defineProperty(d, a.key, a)
    }
    function bX() {
        return n || "undefined" != typeof window && (n = window.gsap) && n.registerPlugin && n
    }
    function P(a, b) {
        return ~G.indexOf(a) && G[G.indexOf(a) + 1][b]
    }
    function au(a) {
        return !!~bw.indexOf(a)
    }
    function x(a, b, c, d, e) {
        return a.addEventListener(b, c, {
            passive: !d,
            capture: !!e
        })
    }
    function u(a, b, c, d) {
        return a.removeEventListener(b, c, !!d)
    }
    function bl() {
        return K && K.isPressed || c.cache++
    }
    function aT(b, d) {
        function a(e) {
            if (e || 0 === e) {
                bu && (v.history.scrollRestoration = "manual");
                var f = K && K.isPressed;
                e = a.v = Math.round(e) || (K && K.iOS ? 1 : 0),
                b(e),
                a.cacheID = c.cache,
                f && aS("ss", e)
            } else
                (d || c.cache !== a.cacheID || aS("ref")) && (a.cacheID = c.cache,
                a.v = b());
            return a.v + a.offset
        }
        return a.offset = 0,
        b && a
    }
    function z(a) {
        return n.utils.toArray(a)[0] || ("string" == typeof a && !1 !== n.config().nullTargetWarn ? console.warn("Element not found:", a) : null)
    }
    function U(a, i) {
        var e = i.s, g = i.sc, b, f, h, d;
        return au(a) && (a = O.scrollingElement || M),
        b = c.indexOf(a),
        f = g === k.sc ? 1 : 2,
        ~b || (b = c.push(a) - 1),
        c[b + f] || a.addEventListener("scroll", bl),
        h = c[b + f],
        d = h || (c[b + f] = aT(P(a, e), !0) || (au(a) ? g : aT(function(b) {
            return arguments.length ? a[e] = b : a[e]
        }))),
        d.target = a,
        h || (d.smooth = "smooth" === n.getProperty(a, "scrollBehavior")),
        d
    }
    function bD(g, i, e) {
        function f(f, i) {
            var g = ai();
            i || h < g - a ? (d = b,
            b = f,
            c = a,
            a = g) : e ? b += f : b = d + (f - d) / (g - c) * (a - c)
        }
        var b = g
          , d = g
          , a = ai()
          , c = a
          , h = i || 50
          , j = Math.max(500, 3 * h);
        return {
            update: f,
            reset: function() {
                d = b = e ? 0 : b,
                c = a = 0
            },
            getVelocity: function(g) {
                var k = c
                  , h = d
                  , i = ai();
                return !g && 0 !== g || g === b || f(g),
                a === c || j < i - c ? 0 : (b + (e ? h : -h)) / ((e ? i : a) - k) * 1e3
            }
        }
    }
    function aB(a, b) {
        return b && !a._gsapAllow && a.preventDefault(),
        a.changedTouches ? a.changedTouches[0] : a
    }
    function bK(a) {
        var b = Math.max.apply(Math, a)
          , c = Math.min.apply(Math, a);
        return Math.abs(b) >= Math.abs(c) ? b : c
    }
    function bI() {
        (aI = n.core.globals().ScrollTrigger) && aI.core && function() {
            var a = aI.core
              , e = a.bridge || {}
              , b = a._scrollers
              , d = a._proxies;
            b.push.apply(b, c),
            d.push.apply(d, G),
            c = b,
            G = d,
            aS = function(a, b) {
                return e[a](b)
            }
        }()
    }
    function cd(a) {
        return (n = a || bX()) && "undefined" != typeof document && document.body && (v = window,
        M = (O = document).documentElement,
        ae = O.body,
        bw = [v, O, M, ae],
        n.utils.clamp,
        bv = n.core.context || function() {}
        ,
        T = "onpointerenter"in ae ? "pointer" : "mouse",
        bA = j.isTouch = v.matchMedia && v.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in v || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0,
        C = j.eventTypes = ("ontouchstart"in M ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in M ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
        setTimeout(function() {
            return bu = 0
        }, 500),
        bI(),
        be = 1),
        be
    }
    bu = 1,
    ab = [],
    c = [],
    G = [],
    ai = Date.now,
    aS = function(c, a) {
        return a
    }
    ,
    az = "scrollLeft",
    aw = "scrollTop",
    q = {
        s: az,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: aT(function(a) {
            return arguments.length ? v.scrollTo(a, k.sc()) : v.pageXOffset || O[az] || M[az] || ae[az] || 0
        })
    },
    k = {
        s: aw,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: q,
        sc: aT(function(a) {
            return arguments.length ? v.scrollTo(q.sc(), a) : v.pageYOffset || O[aw] || M[aw] || ae[aw] || 0
        })
    },
    q.op = k,
    c.cache = 0,
    j = (bn.prototype.init = function(b) {
        var t, y, e, c, R, B, f, o, aJ, p, Q, aQ, aj, ak, aq, aC, ar, at, af, aw, aA, W, ao, az, ay, ax, am, ah, S, ag, j, $, _, av, X, Y, Z, D, i, aa, aF, ad, s, m, A, G, F, E, r, a, H, I, V, P, ap, an, aN, w, d, g, h, ac, J;
        be || cd(n) || console.warn("Please gsap.registerPlugin(Observer)"),
        aI || bI(),
        t = b.tolerance,
        y = b.dragMinimum,
        e = b.type,
        c = b.target,
        R = b.lineHeight,
        B = b.debounce,
        f = b.preventDefault,
        o = b.onStop,
        aJ = b.onStopDelay,
        p = b.ignore,
        Q = b.wheelSpeed,
        aQ = b.event,
        aj = b.onDragStart,
        ak = b.onDragEnd,
        aq = b.onDrag,
        aC = b.onPress,
        ar = b.onRelease,
        at = b.onRight,
        af = b.onLeft,
        aw = b.onUp,
        aA = b.onDown,
        W = b.onChangeX,
        ao = b.onChangeY,
        az = b.onChange,
        ay = b.onToggleX,
        ax = b.onToggleY,
        am = b.onHover,
        ah = b.onHoverEnd,
        S = b.onMove,
        ag = b.ignoreCheck,
        j = b.isNormalizer,
        $ = b.onGestureStart,
        _ = b.onGestureEnd,
        av = b.onWheel,
        X = b.onEnable,
        Y = b.onDisable,
        Z = b.onClick,
        D = b.scrollSpeed,
        i = b.capture,
        aa = b.allowClicks,
        aF = b.lockAxis,
        ad = b.onLockAxis;
        function aR() {
            return ac = ai()
        }
        function l(b, c) {
            return (a.event = b) && p && ~p.indexOf(b.target) || c && aN && "touch" !== b.pointerType || ag && ag(b, c)
        }
        function N() {
            var b = a.deltaX = bK(g)
              , c = a.deltaY = bK(h)
              , d = Math.abs(b) >= t
              , e = Math.abs(c) >= t;
            az && (d || e) && az(a, b, c, g, h),
            d && (at && 0 < a.deltaX && at(a),
            af && a.deltaX < 0 && af(a),
            W && W(a),
            ay && a.deltaX < 0 != H < 0 && ay(a),
            H = a.deltaX,
            g[0] = g[1] = g[2] = 0),
            e && (aA && 0 < a.deltaY && aA(a),
            aw && a.deltaY < 0 && aw(a),
            ao && ao(a),
            ax && a.deltaY < 0 != I < 0 && ax(a),
            I = a.deltaY,
            h[0] = h[1] = h[2] = 0),
            (G || A) && (S && S(a),
            A && (aq(a),
            A = !1),
            G = !1),
            E && !(E = !1) && ad && ad(a),
            F && (av(a),
            F = !1),
            s = 0
        }
        function aP(b, c, d) {
            g[d] += b,
            h[d] += c,
            a._vx.update(b),
            a._vy.update(c),
            B ? s = s || requestAnimationFrame(N) : N()
        }
        function aO(b, c) {
            aF && !r && (a.axis = r = Math.abs(b) > Math.abs(c) ? "x" : "y",
            E = !0),
            "y" !== r && (g[2] += b,
            a._vx.update(b, !0)),
            "x" !== r && (h[2] += c,
            a._vy.update(c, !0)),
            B ? s = s || requestAnimationFrame(N) : N()
        }
        function al(b) {
            if (!l(b, 1)) {
                var c = (b = aB(b, f)).clientX
                  , d = b.clientY
                  , g = c - a.x
                  , h = d - a.y
                  , e = a.isDragging;
                a.x = c,
                a.y = d,
                (e || Math.abs(a.startX - c) >= y || Math.abs(a.startY - d) >= y) && (aq && (A = !0),
                e || (a.isDragging = !0),
                aO(g, h),
                e || aj && aj(a))
            }
        }
        function L(b) {
            if (!l(b, 1)) {
                u(j ? c : d, C[1], al, !0);
                var h = !isNaN(a.y - a.startY)
                  , g = a.isDragging && (3 < Math.abs(a.x - a.startX) || 3 < Math.abs(a.y - a.startY))
                  , e = aB(b);
                !g && h && (a._vx.reset(),
                a._vy.reset(),
                f && aa && n.delayedCall(.08, function() {
                    if (300 < ai() - ac && !b.defaultPrevented)
                        if (b.target.click)
                            b.target.click();
                        else if (d.createEvent) {
                            var a = d.createEvent("MouseEvents");
                            a.initMouseEvent("click", !0, !0, v, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null),
                            b.target.dispatchEvent(a)
                        }
                })),
                a.isDragging = a.isGesturing = a.isPressed = !1,
                o && !j && m.restart(!0),
                ak && g && ak(a),
                ar && ar(a, g)
            }
        }
        function aM(b) {
            return b.touches && 1 < b.touches.length && (a.isGesturing = !0) && $(b, a.isDragging)
        }
        function aS() {
            return (a.isGesturing = !1) || _(a)
        }
        function aL(c) {
            if (!l(c)) {
                var a = V()
                  , b = P();
                aP((a - ap) * D, (b - an) * D, 1),
                ap = a,
                an = b,
                o && m.restart(!0)
            }
        }
        function aK(a) {
            if (!l(a)) {
                a = aB(a, f),
                av && (F = !0);
                var b = (1 === a.deltaMode ? R : 2 === a.deltaMode ? v.innerHeight : 1) * Q;
                aP(a.deltaX * b, a.deltaY * b, 0),
                o && !j && m.restart(!0)
            }
        }
        function aH(b) {
            if (!l(b)) {
                var c = b.clientX
                  , d = b.clientY
                  , e = c - a.x
                  , f = d - a.y;
                a.x = c,
                a.y = d,
                G = !0,
                (e || f) && aO(e, f)
            }
        }
        function aG(b) {
            a.event = b,
            am(a)
        }
        function aD(b) {
            a.event = b,
            ah(a)
        }
        function aE(b) {
            return l(b) || aB(b, f) && Z(a)
        }
        this.target = c = z(c) || M,
        this.vars = b,
        p = p && n.utils.toArray(p),
        t = t || 1e-9,
        y = y || 0,
        Q = Q || 1,
        D = D || 1,
        e = e || "wheel,touch,pointer",
        B = !1 !== B,
        R = R || parseFloat(v.getComputedStyle(ae).lineHeight) || 22,
        a = this,
        H = 0,
        I = 0,
        V = U(c, q),
        P = U(c, k),
        ap = V(),
        an = P(),
        aN = ~e.indexOf("touch") && !~e.indexOf("pointer") && "pointerdown" === C[0],
        w = au(c),
        d = c.ownerDocument || O,
        g = [0, 0, 0],
        h = [0, 0, 0],
        ac = 0,
        J = a.onPress = function(b) {
            l(b, 1) || (a.axis = r = null,
            m.pause(),
            a.isPressed = !0,
            b = aB(b),
            H = I = 0,
            a.startX = a.x = b.clientX,
            a.startY = a.y = b.clientY,
            a._vx.reset(),
            a._vy.reset(),
            x(j ? c : d, C[1], al, f, !0),
            a.deltaX = a.deltaY = 0,
            aC && aC(a))
        }
        ,
        m = a._dc = n.delayedCall(aJ || .25, function() {
            a._vx.reset(),
            a._vy.reset(),
            m.pause(),
            o && o(a)
        }).pause(),
        a.deltaX = a.deltaY = 0,
        a._vx = bD(0, 50, !0),
        a._vy = bD(0, 50, !0),
        a.scrollX = V,
        a.scrollY = P,
        a.isDragging = a.isGesturing = a.isPressed = !1,
        bv(this),
        a.enable = function(b) {
            return a.isEnabled || (x(w ? d : c, "scroll", bl),
            0 <= e.indexOf("scroll") && x(w ? d : c, "scroll", aL, f, i),
            0 <= e.indexOf("wheel") && x(c, "wheel", aK, f, i),
            (0 <= e.indexOf("touch") && bA || 0 <= e.indexOf("pointer")) && (x(c, C[0], J, f, i),
            x(d, C[2], L),
            x(d, C[3], L),
            aa && x(c, "click", aR, !1, !0),
            Z && x(c, "click", aE),
            $ && x(d, "gesturestart", aM),
            _ && x(d, "gestureend", aS),
            am && x(c, T + "enter", aG),
            ah && x(c, T + "leave", aD),
            S && x(c, T + "move", aH)),
            a.isEnabled = !0,
            b && b.type && J(b),
            X && X(a)),
            a
        }
        ,
        a.disable = function() {
            a.isEnabled && (ab.filter(function(b) {
                return b !== a && au(b.target)
            }).length || u(w ? d : c, "scroll", bl),
            a.isPressed && (a._vx.reset(),
            a._vy.reset(),
            u(j ? c : d, C[1], al, !0)),
            u(w ? d : c, "scroll", aL, i),
            u(c, "wheel", aK, i),
            u(c, C[0], J, i),
            u(d, C[2], L),
            u(d, C[3], L),
            u(c, "click", aR, !0),
            u(c, "click", aE),
            u(d, "gesturestart", aM),
            u(d, "gestureend", aS),
            u(c, T + "enter", aG),
            u(c, T + "leave", aD),
            u(c, T + "move", aH),
            a.isEnabled = a.isPressed = a.isDragging = !1,
            Y && Y(a))
        }
        ,
        a.kill = a.revert = function() {
            a.disable();
            var b = ab.indexOf(a);
            0 <= b && ab.splice(b, 1),
            K === a && (K = 0)
        }
        ,
        ab.push(a),
        j && au(c) && (K = a),
        a.enable(aQ)
    }
    ,
    function(a, b, c) {
        return b && bY(a.prototype, b),
        c && bY(a, c),
        a
    }(bn, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    bn);
    function bn(a) {
        this.init(a)
    }
    j.version = "3.11.4",
    j.create = function(a) {
        return new j(a)
    }
    ,
    j.register = cd,
    j.getAll = function() {
        return ab.slice()
    }
    ,
    j.getById = function(a) {
        return ab.filter(function(b) {
            return b.vars.id === a
        })[0]
    }
    ,
    bX() && n.registerPlugin(j);
    function bQ() {
        return aC = 1
    }
    function b_() {
        return aC = 0
    }
    function J(a) {
        return a
    }
    function aL(a) {
        return Math.round(1e5 * a) / 1e5 || 0
    }
    function cc() {
        return "undefined" != typeof window
    }
    function b$() {
        return a || cc() && (a = window.gsap) && a.registerPlugin && a
    }
    function Z(a) {
        return !!~bB.indexOf(a)
    }
    function bS(a) {
        return P(a, "getBoundingClientRect") || (Z(a) ? function() {
            return at.width = e.innerWidth,
            at.height = e.innerHeight,
            at
        }
        : function() {
            return I(a)
        }
        )
    }
    function N(a, d) {
        var b = d.s
          , c = d.d2
          , h = d.d
          , f = d.a;
        return (b = "scroll" + c) && (f = P(a, b)) ? f() - bS(a)()[h] : Z(a) ? (E[b] || g[b]) - (e["inner" + c] || E["client" + c] || g["client" + c]) : a[b] - a["offset" + c]
    }
    function aY(c, b) {
        for (var a = 0; a < $.length; a += 3)
            b && !~b.indexOf($[a + 1]) || c($[a], $[a + 1], $[a + 2])
    }
    function F(a) {
        return "string" == typeof a
    }
    function t(a) {
        return "function" == typeof a
    }
    function ay(a) {
        return "number" == typeof a
    }
    function aR(a) {
        return "object" == typeof a
    }
    function aD(a, b, c) {
        return a && a.progress(b ? 0 : 1) && c && a.pause()
    }
    function by(a, c) {
        if (a.enabled) {
            var b = c(a);
            b && b.totalTime && (a.callbackAnimation = b)
        }
    }
    function H(a) {
        return e.getComputedStyle(a)
    }
    function bM(a, c) {
        for (var b in c)
            b in a || (a[b] = c[b]);
        return a
    }
    function bE(a, c) {
        var b = c.d2;
        return a["offset" + b] || a["client" + b] || 0
    }
    function bU(a) {
        var b, c = [], d = a.labels, e = a.duration();
        for (b in d)
            c.push(d[b] / e);
        return c
    }
    function bg(c) {
        var d = a.utils.snap(c)
          , b = Array.isArray(c) && c.slice(0).sort(function(a, b) {
            return a - b
        });
        return b ? function(c, f, e) {
            var a;
            if (void 0 === e && (e = .001),
            !f)
                return d(c);
            if (0 < f) {
                for (c -= e,
                a = 0; a < b.length; a++)
                    if (b[a] >= c)
                        return b[a];
                return b[a - 1]
            }
            for (a = b.length,
            c += e; a--; )
                if (b[a] <= c)
                    return b[a];
            return b[0]
        }
        : function(a, b, e) {
            void 0 === e && (e = .001);
            var f = d(a);
            return !b || Math.abs(f - a) < e || f - a < 0 == b < 0 ? f : d(b < 0 ? a - c : a + c)
        }
    }
    function aO(a, b, c, d) {
        return c.split(",").forEach(function(c) {
            return a(b, c, d)
        })
    }
    function o(a, b, c, d, e) {
        return a.addEventListener(b, c, {
            passive: !d,
            capture: !!e
        })
    }
    function m(a, b, c, d) {
        return a.removeEventListener(b, c, !!d)
    }
    function aP(b, c, a) {
        return a && a.wheelHandler && b(c, "wheel", a)
    }
    function ba(a, c) {
        if (F(a)) {
            var b = a.indexOf("=")
              , d = ~b ? (a.charAt(b - 1) + 1) * parseFloat(a.substr(b + 1)) : 0;
            ~b && (a.indexOf("%") > b && (d *= c / 100),
            a = a.substr(0, b - 1)),
            a = d + (a in aG ? aG[a] * c : ~a.indexOf("%") ? parseFloat(a) * c / 100 : parseFloat(a) || 0)
        }
        return a
    }
    function bf(b, c, l, i, d, t, q, n) {
        var v = d.startColor
          , u = d.endColor
          , w = d.fontSize
          , s = d.indent
          , r = d.fontWeight
          , a = f.createElement("div")
          , m = Z(l) || "fixed" === P(l, "pinType")
          , p = -1 !== b.indexOf("scroller")
          , e = m ? g : l
          , j = -1 !== b.indexOf("start")
          , o = j ? v : u
          , h = "border-color:" + o + ";font-size:" + w + ";color:" + o + ";font-weight:" + r + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return h += "position:" + ((p || n) && m ? "fixed;" : "absolute;"),
        !p && !n && m || (h += (i === k ? aZ : aX) + ":" + (t + parseFloat(s)) + "px;"),
        q && (h += "box-sizing:border-box;text-align:left;width:" + q.offsetWidth + "px;"),
        a._isStart = j,
        a.setAttribute("class", "gsap-marker-" + b + (c ? " marker-" + c : "")),
        a.style.cssText = h,
        a.innerText = c || 0 === c ? b + "-" + c : b,
        e.children[0] ? e.insertBefore(a, e.children[0]) : e.appendChild(a),
        a._offset = a["offset" + i.op.d2],
        aF(a, 0, i, j),
        a
    }
    function cb() {
        return 34 < s() - B && (ag = ag || requestAnimationFrame(L))
    }
    function af() {
        w && w.isPressed && !(w.startX > g.clientWidth) || (c.cache++,
        w ? ag = ag || requestAnimationFrame(L) : L(),
        B || X("scrollStart"),
        B = s())
    }
    function bj() {
        bm = e.innerWidth,
        bi = e.innerHeight
    }
    function ar() {
        c.cache++,
        p || bp || f.fullscreenElement || f.webkitFullscreenElement || bo && bm === e.innerWidth && !(Math.abs(e.innerHeight - bi) > .25 * e.innerHeight) || aJ.restart(!0)
    }
    function bG() {
        return m(d, "scrollEnd", bG) || V(!0)
    }
    function bH(b) {
        for (var a = 0; a < y.length; a += 5)
            (!b || y[a + 4] && y[a + 4].query === b) && (y[a].style.cssText = y[a + 1],
            y[a].getBBox && y[a].setAttribute("transform", y[a + 2] || ""),
            y[a + 3].uncache = 1)
    }
    function bk(d, a) {
        var c;
        for (r = 0; r < b.length; r++)
            !(c = b[r]) || a && c._ctx !== a || (d ? c.kill(1) : c.revert(!0, !0));
        a && bH(a),
        a || X("revert")
    }
    function bR(a, b) {
        c.cache++,
        !b && D || c.forEach(function(a) {
            return t(a) && a.cacheID++ && (a.rec = 0)
        }),
        F(a) && (e.history.scrollRestoration = bc = a)
    }
    function bx(b, e, d, i) {
        if (!b._gsap.swappedIn) {
            for (var f, g = aV.length, c = e.style, a = b.style; g--; )
                c[f = aV[g]] = d[f];
            c.position = "absolute" === d.position ? "absolute" : "relative",
            "inline" === d.display && (c.display = "inline-block"),
            a[aX] = a[aZ] = "auto",
            c.flexBasis = d.flexBasis || "auto",
            c.overflow = "visible",
            c.boxSizing = "border-box",
            c[R] = bE(b, q) + l,
            c[S] = bE(b, k) + l,
            c[h] = a[A] = a.top = a.left = "0",
            aa(i),
            a[R] = a.maxWidth = d[R],
            a[S] = a.maxHeight = d[S],
            a[h] = d[h],
            b.parentNode !== e && (b.parentNode.insertBefore(e, b),
            e.appendChild(b)),
            b._gsap.swappedIn = !0
        }
    }
    function aU(c) {
        for (var d = av.length, e = c.style, b = [], a = 0; a < d; a++)
            b.push(av[a], e[av[a]]);
        return b.t = c,
        b
    }
    function bN(a, o, f, b, B, j, k, y, w, A, s, r, d) {
        var e, q, c, x, i, v, h, n, u, m, p;
        return t(a) && (a = a(y)),
        F(a) && "max" === a.substr(0, 3) && (a = r + ("=" === a.charAt(4) ? ba("0" + a.substr(3), f) : 0)),
        x = d ? d.time() : 0,
        (d && d.seek(0),
        ay(a)) ? k && aF(k, f, b, !0) : (t(o) && (o = o(y)),
        u = (a || "0").split(" "),
        c = z(o) || g,
        (i = I(c) || {}) && (i.left || i.top) || "none" !== H(c).display || (n = c.style.display,
        c.style.display = "block",
        i = I(c),
        n ? c.style.display = n : c.style.removeProperty("display")),
        v = ba(u[0], i[b.d]),
        h = ba(u[1] || "0", f),
        a = i[b.p] - w[b.p] - A + v + B - h,
        k && aF(k, h, b, f - h < 20 || k._isStart && 20 < h),
        f -= f - h),
        j && (m = a + f,
        p = j._isStart,
        e = "scroll" + b.d2,
        aF(j, m, b, p && 20 < m || !p && (s ? Math.max(g[e], E[e]) : j.parentNode[e]) <= m + 1),
        s && (w = I(k),
        s && (j.style[b.op.p] = w[b.op.p] - b.op.m - j._offset + l))),
        d && c && (e = I(c),
        d.seek(r),
        q = I(c),
        d._caScrollDist = e[b.p] - q[b.p],
        a = a / d._caScrollDist * r),
        d && d.seek(x),
        d ? a : Math.round(a)
    }
    function bP(c, e, h, i) {
        if (c.parentNode !== e) {
            var b, f, d = c.style;
            if (e === g) {
                for (b in c._stOrig = d.cssText,
                f = H(c))
                    +b || bW.test(b) || !f[b] || "string" != typeof d[b] || "0" === b || (d[b] = f[b]);
                d.top = h,
                d.left = i
            } else
                d.cssText = c._stOrig;
            a.core.getCache(c).uncache = 1,
            e.appendChild(c)
        }
    }
    function bL(e, i) {
        function b(n, j, k, l, m) {
            var i = b.tween
              , o = j.onComplete
              , p = {};
            return k = k || f(),
            m = l && m || 0,
            l = l || n - k,
            i && i.kill(),
            d = Math.round(k),
            j[h] = n,
            (j.modifiers = p)[h] = function(a) {
                return (a = Math.round(f())) !== d && a !== g && 3 < Math.abs(a - d) && 3 < Math.abs(a - g) ? (i.kill(),
                b.tween = 0) : a = k + l * i.ratio + m * i.ratio * i.ratio,
                g = d,
                d = Math.round(a)
            }
            ,
            j.onUpdate = function() {
                c.cache++,
                L()
            }
            ,
            j.onComplete = function() {
                b.tween = 0,
                o && o.call(i)
            }
            ,
            i = b.tween = a.to(e, j)
        }
        var d, g, f = U(e, i), h = "_scroll" + i.p2;
        return (e[h] = f).wheelHandler = function() {
            return b.tween && b.tween.kill() && (b.tween = 0)
        }
        ,
        o(e, "wheel", f.wheelHandler),
        b
    }
    aM = 1,
    s = Date.now,
    a_ = s(),
    B = 0,
    aq = 0,
    _ = Math.abs,
    aZ = "right",
    aX = "bottom",
    R = "width",
    S = "height",
    al = "Right",
    am = "Left",
    ak = "Top",
    aj = "Bottom",
    h = "padding",
    A = "margin",
    an = "Width",
    bO = "Height",
    l = "px",
    I = function(b, d) {
        var c = d && "matrix(1, 0, 0, 1, 0, 0)" !== H(b)[aQ] && a.to(b, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
          , e = b.getBoundingClientRect();
        return c && c.progress(0).kill(),
        e
    }
    ,
    bC = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    aH = {
        toggleActions: "play",
        anticipatePin: 0
    },
    aG = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    aF = function(e, g, c, d) {
        var b = {
            display: "block"
        }
          , f = c[d ? "os2" : "p2"]
          , h = c[d ? "p2" : "os2"];
        e._isFlipped = d,
        b[c.a + "Percent"] = d ? -100 : 0,
        b[c.a] = d ? "1px" : 0,
        b["border" + f + an] = 1,
        b["border" + h + an] = 0,
        b[c.p] = g + "px",
        a.set(e, b)
    }
    ,
    b = [],
    aW = {},
    Y = {},
    bJ = [],
    X = function(a) {
        return Y[a] && Y[a].map(function(a) {
            return a()
        }) || bJ
    }
    ,
    y = [],
    Q = 0,
    V = function(a, e) {
        if (!B || a) {
            D = d.isRefreshing = !0,
            c.forEach(function(a) {
                return t(a) && a.cacheID++ && (a.rec = a())
            });
            var f = X("refreshInit");
            bq && d.sort(),
            e || bk(),
            c.forEach(function(a) {
                t(a) && (a.smooth && (a.target.style.scrollBehavior = "auto"),
                a(0))
            }),
            b.slice(0).forEach(function(a) {
                return a.refresh()
            }),
            b.forEach(function(a, d) {
                if (a._subPinOffset && a.pin) {
                    var b = a.vars.horizontal ? "offsetWidth" : "offsetHeight"
                      , c = a.pin[b];
                    a.revert(!0, 1),
                    a.adjustPinSpacing(a.pin[b] - c),
                    a.revert(!1, 1)
                }
            }),
            b.forEach(function(a) {
                return "max" === a.vars.end && a.setPositions(a.start, Math.max(a.start + 1, N(a.scroller, a._dir)))
            }),
            f.forEach(function(a) {
                return a && a.render && a.render(-1)
            }),
            c.forEach(function(a) {
                t(a) && (a.smooth && requestAnimationFrame(function() {
                    return a.target.style.scrollBehavior = "smooth"
                }),
                a.rec && a(a.rec))
            }),
            bR(bc, 1),
            aJ.pause(),
            Q++,
            L(2),
            b.forEach(function(a) {
                return t(a.vars.onRefresh) && a.vars.onRefresh(a)
            }),
            D = d.isRefreshing = !1,
            X("refresh")
        } else
            o(d, "scrollEnd", bG)
    }
    ,
    bz = 0,
    ax = 1,
    L = function(g) {
        if (!D || 2 === g) {
            d.isUpdating = !0,
            ah && ah.update(0);
            var a = b.length
              , c = s()
              , e = 50 <= c - a_
              , f = a && b[0].scroll();
            if (ax = f < bz ? -1 : 1,
            bz = f,
            e && (B && !aC && 200 < c - B && (B = 0,
            X("scrollEnd")),
            aA = a_,
            a_ = c),
            ax < 0) {
                for (r = a; 0 < r--; )
                    b[r] && b[r].update(0, e);
                ax = 1
            } else
                for (r = 0; r < a; r++)
                    b[r] && b[r].update(0, e);
            d.isUpdating = !1
        }
        ag = 0
    }
    ,
    aV = ["left", "top", aX, aZ, A + aj, A + al, A + ak, A + am, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    av = aV.concat([R, S, "boxSizing", "max" + an, "max" + bO, "position", A, h, h + ak, h + al, h + aj, h + am]),
    bT = /([A-Z])/g,
    aa = function(b) {
        if (b) {
            var d, e, f = b.t.style, g = b.length, c = 0;
            for ((b.t._gsap || a.core.getCache(b.t)).uncache = 1; c < g; c += 2)
                e = b[c + 1],
                d = b[c],
                e ? f[d] = e : f[d] && f.removeProperty(d.replace(bT, "-$1").toLowerCase())
        }
    }
    ,
    at = {
        left: 0,
        top: 0
    },
    bW = /(webkit|moz|length|cssText|inset)/i,
    d = (i.prototype.init = function(n, j) {
        var T, $, bV, az, aV, x, X, ap, aO, ao, aG, aT, L, a_, bh, bw, ad, bD, bt, bs, aX, aB, bW, ae, bR, br, bp, bi, aZ, bj, w, bz, au, aw, aF, aE, a$, bA, aQ, aJ, aP, Y, bQ, bO, be, O, u, W, bZ, bl, bJ, bI, bo, K, bB, ag, C, bu, bc, v, ab, y, bn, ai, av, aS, bm, bk, bT, d, aI, bX, bY, aY, bv, M, bK, bH, b_;
        this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        aq ? (aJ = (n = bM(F(n) || ay(n) || n.nodeType ? {
            trigger: n
        } : n, aH)).onUpdate,
        aP = n.toggleClass,
        Y = n.id,
        bQ = n.onToggle,
        bO = n.onRefresh,
        be = n.scrub,
        O = n.trigger,
        u = n.pin,
        W = n.pinSpacing,
        bZ = n.invalidateOnRefresh,
        bl = n.anticipatePin,
        bJ = n.onScrubComplete,
        bI = n.onSnapComplete,
        bo = n.once,
        K = n.snap,
        bB = n.pinReparent,
        ag = n.pinSpacer,
        C = n.containerAnimation,
        bu = n.fastScrollEnd,
        bc = n.preventOverlaps,
        v = n.horizontal || n.containerAnimation && !1 !== n.horizontal ? q : k,
        ab = !be && 0 !== be,
        y = z(n.scroller || e),
        bn = a.core.getCache(y),
        ai = Z(y),
        av = "fixed" === ("pinType"in n ? n.pinType : P(y, "pinType") || ai && "fixed"),
        aS = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack],
        bm = ab && n.toggleActions.split(" "),
        bk = "markers"in n ? n.markers : aH.markers,
        bT = ai ? 0 : parseFloat(H(y)["border" + v.p2 + an]) || 0,
        d = this,
        aI = n.onRefreshInit && function() {
            return n.onRefreshInit(d)
        }
        ,
        bX = function(c, f, a) {
            var g = a.d
              , d = a.d2
              , b = a.a;
            return (b = P(c, "getBoundingClientRect")) ? function() {
                return b()[g]
            }
            : function() {
                return (f ? e["inner" + d] : c["client" + d]) || 0
            }
        }(y, ai, v),
        bY = function(a, b) {
            return !b || ~G.indexOf(a) ? bS(a) : function() {
                return at
            }
        }(y, ai),
        aY = 0,
        bv = 0,
        M = U(y, v),
        (bb(d),
        d._dir = v,
        bl *= 45,
        d.scroller = y,
        d.scroll = C ? C.time.bind(C) : M,
        az = M(),
        d.vars = n,
        j = j || n.animation,
        "refreshPriority"in n && (bq = 1,
        -9999 === n.refreshPriority && (ah = d)),
        bn.tweenScroll = bn.tweenScroll || {
            top: bL(y, k),
            left: bL(y, q)
        },
        d.tweenTo = T = bn.tweenScroll[v.p],
        d.scrubDuration = function(b) {
            (bz = ay(b) && b) ? w ? w.duration(b) : w = a.to(j, {
                ease: "expo",
                totalProgress: "+=0.001",
                duration: bz,
                paused: !0,
                onComplete: function() {
                    return bJ && bJ(d)
                }
            }) : (w && w.progress(1).kill(),
            w = 0)
        }
        ,
        j && (j.vars.lazy = !1,
        j._initted || !1 !== j.vars.immediateRender && !1 !== n.immediateRender && j.duration() && j.render(0, !0, !0),
        d.animation = j.pause(),
        (j.scrollTrigger = d).scrubDuration(be),
        aZ = 0,
        Y = Y || j.vars.id),
        b.push(d),
        K && (aR(K) && !K.push || (K = {
            snapTo: K
        }),
        "scrollBehavior"in g.style && a.set(ai ? [g, E] : y, {
            scrollBehavior: "auto"
        }),
        c.forEach(function(a) {
            return t(a) && a.target === (ai ? f.scrollingElement || E : y) && (a.smooth = !1)
        }),
        bV = t(K.snapTo) ? K.snapTo : "labels" === K.snapTo ? function(b) {
            return function(c) {
                return a.utils.snap(bU(b), c)
            }
        }(j) : "labelsDirectional" === K.snapTo ? function(a) {
            return function(b, c) {
                return bg(bU(a))(b, c.direction)
            }
        }(j) : !1 !== K.directional ? function(a, b) {
            return bg(K.snapTo)(a, s() - bv < 500 ? 0 : b.direction)
        }
        : a.utils.snap(K.snapTo),
        au = K.duration || {
            min: .1,
            max: 2
        },
        au = aR(au) ? ac(au.min, au.max) : ac(au, au),
        aw = a.delayedCall(K.delay || bz / 2 || .1, function() {
            var b = M(), m = s() - bv < 500, f = T.tween, e, i, h, g, l, k, c, n, o, p;
            if (!(m || Math.abs(d.getVelocity()) < 10) || f || aC || aY === b)
                d.isActive && aY !== b && aw.restart(!0);
            else if (e = (b - x) / L,
            i = j && !ab ? j.totalProgress() : e,
            h = m ? 0 : (i - bj) / (s() - aA) * 1e3 || 0,
            g = a.utils.clamp(-e, 1 - e, _(h / 2) * h / .185),
            l = e + (!1 === K.inertia ? 0 : g),
            k = ac(0, 1, bV(l, d)),
            c = Math.round(x + k * L),
            n = K.onStart,
            o = K.onInterrupt,
            p = K.onComplete,
            b <= X && x <= b && c !== b) {
                if (f && !f._initted && f.data <= _(c - b))
                    return;
                !1 === K.inertia && (g = k - e),
                T(c, {
                    duration: au(_(.185 * Math.max(_(l - i), _(k - i)) / h / .05 || 0)),
                    ease: K.ease || "power3",
                    data: _(c - b),
                    onInterrupt: function() {
                        return aw.restart(!0) && o && o(d)
                    },
                    onComplete: function() {
                        d.update(),
                        aY = M(),
                        aZ = bj = j && !ab ? j.totalProgress() : d.progress,
                        bI && bI(d),
                        p && p(d)
                    }
                }, b, g * L, c - b - g * L),
                n && n(d, T.tween)
            }
        }).pause()),
        Y && (aW[Y] = d),
        aQ = (aQ = (O = d.trigger = z(O || u)) && O._gsap && O._gsap.stRevert) && aQ(d),
        u = !0 === u ? O : z(u),
        F(aP) && (aP = {
            targets: O,
            className: aP
        }),
        u && (!1 === W || W === A || (W = !(!W && u.parentNode && u.parentNode.style && "flex" === H(u.parentNode).display) && h),
        d.pin = u,
        ($ = a.core.getCache(u)).spacer ? a_ = $.pinState : (ag && ((ag = z(ag)) && !ag.nodeType && (ag = ag.current || ag.nativeElement),
        $.spacerIsNative = !!ag,
        ag && ($.spacerState = aU(ag))),
        $.spacer = ad = ag || f.createElement("div"),
        ad.classList.add("pin-spacer"),
        Y && ad.classList.add("pin-spacer-" + Y),
        $.pinState = a_ = aU(u)),
        !1 !== n.force3D && a.set(u, {
            force3D: !0
        }),
        d.spacer = ad = $.spacer,
        bi = H(u),
        bW = bi[W + v.os2],
        bt = a.getProperty(u),
        bs = a.quickSetter(u, v.a, l),
        bx(u, ad, bi),
        bw = aU(u)),
        bk) && (aT = aR(bk) ? bM(bk, bC) : bC,
        ao = bf("scroller-start", Y, y, v, aT, 0),
        aG = bf("scroller-end", Y, y, v, aT, 0, ao),
        bD = ao["offset" + v.op.d2],
        bK = z(P(y, "content") || y),
        ap = this.markerStart = bf("start", Y, bK, v, aT, bD, 0, C),
        aO = this.markerEnd = bf("end", Y, bK, v, aT, bD, 0, C),
        C && (bA = a.quickSetter([ap, aO], v.a, l)),
        av || G.length && !0 === P(y, "fixedMarkers") || (function(b) {
            var a = H(b).position;
            b.style.position = "absolute" === a || "fixed" === a ? a : "relative"
        }(ai ? g : y),
        a.set([ao, aG], {
            force3D: !0
        }),
        bR = a.quickSetter(ao, v.a, l),
        bp = a.quickSetter(aG, v.a, l))),
        C && (bH = C.vars.onUpdate,
        b_ = C.vars.onUpdateParams,
        C.eventCallback("onUpdate", function() {
            d.update(0, 0, 1),
            bH && bH.apply(b_ || [])
        })),
        d.previous = function() {
            return b[b.indexOf(d) - 1]
        }
        ,
        d.next = function() {
            return b[b.indexOf(d) + 1]
        }
        ,
        d.revert = function(b, c) {
            if (!c)
                return d.kill(!0);
            var a = !1 !== b || !d.enabled
              , e = p;
            a !== d.isReverted && (a && (aE = Math.max(M(), d.scroll.rec || 0),
            aF = d.progress,
            a$ = j && j.progress()),
            ap && [ap, aO, ao, aG].forEach(function(b) {
                return b.style.display = a ? "none" : "block"
            }),
            a && (p = 1,
            d.update(a)),
            !u || bB && d.isActive || (a ? function(a, c, e) {
                var d, b;
                aa(e),
                d = a._gsap,
                d.spacerIsNative ? aa(d.spacerState) : a._gsap.swappedIn && (b = c.parentNode,
                b && (b.insertBefore(a, c),
                b.removeChild(c))),
                a._gsap.swappedIn = !1
            }(u, ad, a_) : bx(u, ad, H(u), ae)),
            a || d.update(a),
            p = e,
            d.isReverted = a)
        }
        ,
        d.refresh = function(ax, au) {
            if (!p && d.enabled || au)
                if (u && ax && B)
                    o(i, "scrollEnd", bG);
                else {
                    !D && aI && aI(d),
                    p = 1,
                    bv = s(),
                    T.tween && (T.tween.kill(),
                    T.tween = 0),
                    w && w.pause(),
                    bZ && j && j.revert({
                        kill: !1
                    }).invalidate(),
                    d.isReverted || d.revert(!0, !0),
                    d._subPinOffset = !1;
                    for (var m, r, an, $, e, c, V, af, at, _, Q, ag = bX(), ar = bY(), Z = C ? C.duration() : N(y, v), J = 0, Y = 0, G = n.end, aq = n.endTrigger || O, P = n.start || (0 !== n.start && O ? u ? "0 0" : "0 100%" : 0), ac = d.pinnedContainer = n.pinnedContainer && z(n.pinnedContainer), ah = O && Math.max(0, b.indexOf(d)) || 0, K = ah; K--; )
                        (c = b[K]).end || c.refresh(0, 1) || (p = 1),
                        !(V = c.pin) || V !== O && V !== u || c.isReverted || ((_ = _ || []).unshift(c),
                        c.revert(!0, !0)),
                        c !== b[K] && (ah--,
                        K--);
                    for (t(P) && (P = P(d)),
                    x = bN(P, O, ag, v, M(), ap, ao, d, ar, bT, av, Z, C) || (u ? -.001 : 0),
                    t(G) && (G = G(d)),
                    F(G) && !G.indexOf("+=") && (~G.indexOf(" ") ? G = (F(P) ? P.split(" ")[0] : "") + G : (J = ba(G.substr(2), ag),
                    G = F(P) ? P : x + J,
                    aq = O)),
                    X = Math.max(x, bN(G || (aq ? "100% 0" : Z), aq, ag, v, M() + J, aO, aG, d, ar, bT, av, Z, C)) || -.001,
                    L = X - x || (x -= .01) && .001,
                    J = 0,
                    K = ah; K--; )
                        (V = (c = b[K]).pin) && c.start - c._pinPush <= x && !C && 0 < c.end && (m = c.end - c.start,
                        (V === O && c.start - c._pinPush < x || V === ac) && !ay(P) && (J += m * (1 - c.progress)),
                        V === u && (Y += m));
                    if (x += J,
                    X += J,
                    d._pinPush = Y,
                    ap && J && ((m = {})[v.a] = "+=" + J,
                    ac && (m[v.p] = "-=" + M()),
                    a.set([ap, aO], m)),
                    u)
                        m = H(u),
                        $ = v === k,
                        an = M(),
                        aX = parseFloat(bt(v.a)) + Y,
                        !Z && 1 < X && ((Q = {
                            style: Q = (ai ? f.scrollingElement || E : y).style,
                            value: Q["overflow" + v.a.toUpperCase()]
                        })["overflow" + v.a.toUpperCase()] = "scroll"),
                        bx(u, ad, m),
                        bw = aU(u),
                        r = I(u, !0),
                        af = av && U(y, $ ? q : k)(),
                        W && ((ae = [W + v.os2, L + Y + l]).t = ad,
                        (K = W === h ? bE(u, v) + L + Y : 0) && ae.push(v.d, K + l),
                        aa(ae),
                        ac && b.forEach(function(a) {
                            a.pin === ac && !1 !== a.vars.pinSpacing && (a._subPinOffset = !0)
                        }),
                        av && M(aE)),
                        av && ((e = {
                            top: r.top + ($ ? an - x : af) + l,
                            left: r.left + ($ ? af : an - x) + l,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[R] = e.maxWidth = Math.ceil(r.width) + l,
                        e[S] = e.maxHeight = Math.ceil(r.height) + l,
                        e[A] = e[A + ak] = e[A + al] = e[A + aj] = e[A + am] = "0",
                        e[h] = m[h],
                        e[h + ak] = m[h + ak],
                        e[h + al] = m[h + al],
                        e[h + aj] = m[h + aj],
                        e[h + am] = m[h + am],
                        bh = function(a, e, g) {
                            for (var b, d = [], f = a.length, c = g ? 8 : 0; c < f; c += 2)
                                b = a[c],
                                d.push(b, b in e ? e[b] : a[c + 1]);
                            return d.t = a.t,
                            d
                        }(a_, e, bB),
                        D && M(0)),
                        j ? (at = j._initted,
                        aN(1),
                        j.render(j.duration(), !0, !0),
                        aB = bt(v.a) - aX + L + Y,
                        br = 1 < Math.abs(L - aB),
                        av && br && bh.splice(bh.length - 2, 2),
                        j.render(0, !0, !0),
                        at || j.invalidate(!0),
                        j.parent || j.totalTime(j.totalTime()),
                        aN(0)) : aB = L,
                        Q && (Q.value ? Q.style["overflow" + v.a.toUpperCase()] = Q.value : Q.style.removeProperty("overflow-" + v.a));
                    else if (O && M() && !C)
                        for (r = O.parentNode; r && r !== g; )
                            r._pinOffset && (x -= r._pinOffset,
                            X -= r._pinOffset),
                            r = r.parentNode;
                    _ && _.forEach(function(a) {
                        return a.revert(!1, !0)
                    }),
                    d.start = x,
                    d.end = X,
                    az = aV = D ? aE : M(),
                    C || D || (az < aE && M(aE),
                    d.scroll.rec = 0),
                    d.revert(!1, !0),
                    aw && (aY = -1,
                    d.isActive && M(x + L * aF),
                    aw.restart(!0)),
                    p = 0,
                    j && ab && (j._initted || a$) && j.progress() !== a$ && j.progress(a$, !0).render(j.time(), !0, !0),
                    aF === d.progress && !C || (j && !ab && j.totalProgress(aF, !0),
                    d.progress = (az - x) / L === aF ? 0 : aF),
                    u && W && (ad._pinOffset = Math.round(d.progress * aB)),
                    bO && !D && bO(d)
                }
        }
        ,
        d.getVelocity = function() {
            return (M() - aV) / (s() - aA) * 1e3 || 0
        }
        ,
        d.endAnimation = function() {
            aD(d.callbackAnimation),
            j && (w ? w.progress(1) : j.paused() ? ab || aD(j, d.direction < 0, 1) : aD(j, j.reversed()))
        }
        ,
        d.labelToScroll = function(a) {
            return j && j.labels && (x || d.refresh() || x) + j.labels[a] / j.duration() * L || 0
        }
        ,
        d.getTrailing = function(a) {
            var c = b.indexOf(d)
              , e = 0 < d.direction ? b.slice(0, c).reverse() : b.slice(c + 1);
            return (F(a) ? e.filter(function(b) {
                return b.vars.preventOverlaps === a
            }) : e).filter(function(a) {
                return 0 < d.direction ? a.end <= x : a.start >= X
            })
        }
        ,
        d.update = function(m, G, F) {
            var i, c, e, n, h, q, o, b, r, a, f, z, A, E;
            (!C || F || m) && (b = D ? aE : d.scroll(),
            r = m ? 0 : (b - x) / L,
            a = r < 0 ? 0 : 1 < r ? 1 : r || 0,
            f = d.progress,
            (G && (aV = az,
            az = C ? M() : b,
            K && (bj = aZ,
            aZ = j && !ab ? j.totalProgress() : a)),
            bl && !a && u && !p && !aM && B && x < b + (b - aV) / (s() - aA) * bl && (a = 1e-4),
            a !== f && d.enabled) && (n = (h = (i = d.isActive = !!a && a < 1) != (!!f && f < 1)) || !!a != !!f,
            d.direction = f < a ? 1 : -1,
            d.progress = a,
            n && !p && (c = a && !f ? 0 : 1 === a ? 1 : 1 === f ? 2 : 3,
            ab && (e = !h && "none" !== bm[c + 1] && bm[c + 1] || bm[c],
            o = j && ("complete" === e || "reset" === e || e in j))),
            bc && (h || o) && (o || be || !j) && (t(bc) ? bc(d) : d.getTrailing(bc).forEach(function(a) {
                return a.endAnimation()
            })),
            ab || (!w || p || aM ? j && j.totalProgress(a, !!p) : (w._dp._time - w._start !== w._time && w.render(w._dp._time - w._start),
            w.resetTo ? w.resetTo("totalProgress", a, j._tTime / j._tDur) : (w.vars.totalProgress = a,
            w.invalidate().restart()))),
            u && (m && W && (ad.style[W + v.os2] = bW),
            av ? n && (q = !m && f < a && b < X + 1 && b + 1 >= N(y, v),
            bB && (m || !i && !q ? bP(u, ad) : (z = I(u, !0),
            A = b - x,
            bP(u, g, z.top + (v === k ? A : 0) + l, z.left + (v === k ? 0 : A) + l))),
            aa(i || q ? bh : bw),
            br && a < 1 && i || bs(aX + (1 !== a || q ? 0 : aB))) : bs(aL(aX + aB * a))),
            !K || T.tween || p || aM || aw.restart(!0),
            aP && (h || bo && a && (a < 1 || !bd)) && aK(aP.targets).forEach(function(a) {
                return a.classList[i || bo ? "add" : "remove"](aP.className)
            }),
            !aJ || ab || m || aJ(d),
            n && !p ? (ab && (o && ("complete" === e ? j.pause().totalProgress(1) : "reset" === e ? j.restart(!0).pause() : "restart" === e ? j.restart(!0) : j[e]()),
            aJ && aJ(d)),
            !h && bd || (bQ && h && by(d, bQ),
            aS[c] && by(d, aS[c]),
            bo && (1 === a ? d.kill(!1, 1) : aS[c] = 0),
            h || aS[c = 1 === a ? 1 : 3] && by(d, aS[c])),
            bu && !i && Math.abs(d.getVelocity()) > (ay(bu) ? bu : 2500) && (aD(d.callbackAnimation),
            w ? w.progress(1) : aD(j, "reverse" === e ? 1 : !a, 1))) : ab && aJ && !p && aJ(d)),
            bp && (E = C ? b / C.duration() * (C._caScrollDist || 0) : b,
            bR(E + (ao._isFlipped ? 1 : 0)),
            bp(E)),
            bA && bA(-b / C.duration() * (C._caScrollDist || 0)))
        }
        ,
        d.enable = function(a, b) {
            d.enabled || (d.enabled = !0,
            o(y, "resize", ar),
            o(ai ? f : y, "scroll", af),
            aI && o(i, "refreshInit", aI),
            !1 !== a && (d.progress = aF = 0,
            az = aV = aY = M()),
            !1 !== b && d.refresh())
        }
        ,
        d.getTween = function(a) {
            return a && T ? T.tween : w
        }
        ,
        d.setPositions = function(a, b) {
            u && (aX += a - x,
            aB += b - a - L,
            W === h && d.adjustPinSpacing(b - a - L)),
            d.start = x = a,
            d.end = X = b,
            L = b - a,
            d.update()
        }
        ,
        d.adjustPinSpacing = function(a) {
            if (ae) {
                var b = ae.indexOf(v.d) + 1;
                ae[b] = parseFloat(ae[b]) + a + l,
                ae[1] = parseFloat(ae[1]) + a + l,
                aa(ae)
            }
        }
        ,
        d.disable = function(c, e) {
            if (d.enabled && (!1 !== c && d.revert(!0, !0),
            d.enabled = d.isActive = !1,
            e || w && w.pause(),
            aE = 0,
            $ && ($.uncache = 1),
            aI && m(i, "refreshInit", aI),
            aw && (aw.pause(),
            T.tween && T.tween.kill() && (T.tween = 0)),
            !ai)) {
                for (var a = b.length; a--; )
                    if (b[a].scroller === y && b[a] !== d)
                        return;
                m(y, "resize", ar),
                m(y, "scroll", af)
            }
        }
        ,
        d.kill = function(e, c) {
            d.disable(e, c),
            w && !c && w.kill(),
            Y && delete aW[Y];
            var a = b.indexOf(d);
            0 <= a && b.splice(a, 1),
            a === r && 0 < ax && r--,
            a = 0,
            b.forEach(function(b) {
                return b.scroller === d.scroller && (a = 1)
            }),
            a || D || (d.scroll.rec = 0),
            j && (j.scrollTrigger = null,
            e && j.revert({
                kill: !1
            }),
            c || j.kill()),
            ap && [ap, aO, ao, aG].forEach(function(a) {
                return a.parentNode && a.parentNode.removeChild(a)
            }),
            ah === d && (ah = 0),
            u && ($ && ($.uncache = 1),
            a = 0,
            b.forEach(function(b) {
                return b.pin === u && a++
            }),
            a || ($.spacer = 0)),
            n.onKill && n.onKill(d)
        }
        ,
        d.enable(!1, !1),
        aQ && aQ(d),
        j && j.add && !L ? a.delayedCall(.01, function() {
            return x || X || d.refresh()
        }) && (L = .01) && (x = X = 0) : d.refresh(),
        u && function() {
            if (bF !== Q) {
                var a = bF = Q;
                requestAnimationFrame(function() {
                    return a === Q && V(!0)
                })
            }
        }()) : this.update = this.refresh = this.kill = J
    }
    ,
    i.register = function(b) {
        return ad || (a = b || b$(),
        cc() && window.document && i.enable(),
        ad = aq),
        ad
    }
    ,
    i.defaults = function(a) {
        if (a)
            for (var b in a)
                aH[b] = a[b];
        return aH
    }
    ,
    i.disable = function(d, h) {
        aq = 0,
        b.forEach(function(a) {
            return a[h ? "kill" : "disable"](d)
        }),
        m(e, "wheel", af),
        m(f, "scroll", af),
        clearInterval(aE),
        m(f, "touchcancel", J),
        m(g, "touchstart", J),
        aO(m, f, "pointerdown,touchstart,mousedown", bQ),
        aO(m, f, "pointerup,touchend,mouseup", b_),
        aJ.kill(),
        aY(m);
        for (var a = 0; a < c.length; a += 3)
            aP(m, c[a], c[a + 1]),
            aP(m, c[a], c[a + 2])
    }
    ,
    i.enable = function() {
        if (e = window,
        f = document,
        E = f.documentElement,
        g = f.body,
        a && (aK = a.utils.toArray,
        ac = a.utils.clamp,
        bb = a.core.context || J,
        aN = a.core.suppressOverwrites || J,
        bc = e.history.scrollRestoration || "auto",
        a.core.globals("ScrollTrigger", i),
        g)) {
            aq = 1,
            j.register(a),
            i.isTouch = j.isTouch,
            W = j.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            o(e, "wheel", af),
            bB = [e, f, E, g],
            a.matchMedia ? (i.matchMedia = function(c) {
                var b, d = a.matchMedia();
                for (b in c)
                    d.add(b, c[b]);
                return d
            }
            ,
            a.addEventListener("matchMediaInit", function() {
                return bk()
            }),
            a.addEventListener("matchMediaRevert", function() {
                return bH()
            }),
            a.addEventListener("matchMedia", function() {
                V(0, 1),
                X("matchMedia")
            }),
            a.matchMedia("(orientation: portrait)", function() {
                return bj(),
                bj
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            bj(),
            o(f, "scroll", af);
            var l, d, h = g.style, n = h.borderTopStyle, p = a.core.Animation.prototype;
            for (p.revert || Object.defineProperty(p, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            h.borderTopStyle = "solid",
            l = I(g),
            k.m = Math.round(l.top + k.sc()) || 0,
            q.m = Math.round(l.left + q.sc()) || 0,
            n ? h.borderTopStyle = n : h.removeProperty("border-top-style"),
            aE = setInterval(cb, 250),
            a.delayedCall(.5, function() {
                return aM = 0
            }),
            o(f, "touchcancel", J),
            o(g, "touchstart", J),
            aO(o, f, "pointerdown,touchstart,mousedown", bQ),
            aO(o, f, "pointerup,touchend,mouseup", b_),
            aQ = a.utils.checkPrefix("transform"),
            av.push(aQ),
            ad = s(),
            aJ = a.delayedCall(.2, V).pause(),
            $ = [f, "visibilitychange", function() {
                var a = e.innerWidth
                  , b = e.innerHeight;
                f.hidden ? (bs = a,
                br = b) : bs === a && br === b || ar()
            }
            , f, "DOMContentLoaded", V, e, "load", V, e, "resize", ar],
            aY(o),
            b.forEach(function(a) {
                return a.enable(0, 1)
            }),
            d = 0; d < c.length; d += 3)
                aP(m, c[d], c[d + 1]),
                aP(m, c[d], c[d + 2])
        }
    }
    ,
    i.config = function(a) {
        "limitCallbacks"in a && (bd = !!a.limitCallbacks);
        var b = a.syncInterval;
        b && clearInterval(aE) || (aE = b) && setInterval(cb, b),
        "ignoreMobileResize"in a && (bo = 1 === i.isTouch && a.ignoreMobileResize),
        "autoRefreshEvents"in a && (aY(m) || aY(o, a.autoRefreshEvents || "none"),
        bp = -1 === (a.autoRefreshEvents + "").indexOf("resize"))
    }
    ,
    i.scrollerProxy = function(h, a) {
        var b = z(h)
          , d = c.indexOf(b)
          , f = Z(b);
        ~d && c.splice(d, f ? 6 : 2),
        a && (f ? G.unshift(e, a, g, a, E, a) : G.unshift(b, a))
    }
    ,
    i.clearMatchMedia = function(a) {
        b.forEach(function(b) {
            return b._ctx && b._ctx.query === a && b._ctx.kill(!0, !0)
        })
    }
    ,
    i.isInViewport = function(c, f, d) {
        var a = (F(c) ? z(c) : c).getBoundingClientRect()
          , b = a[d ? R : S] * f || 0;
        return d ? 0 < a.right - b && a.left + b < e.innerWidth : 0 < a.bottom - b && a.top + b < e.innerHeight
    }
    ,
    i.positionInViewport = function(b, a, g) {
        F(b) && (b = z(b));
        var c = b.getBoundingClientRect()
          , d = c[g ? R : S]
          , f = null == a ? d / 2 : a in aG ? aG[a] * d : ~a.indexOf("%") ? parseFloat(a) * d / 100 : parseFloat(a) || 0;
        return g ? (c.left + f) / e.innerWidth : (c.top + f) / e.innerHeight
    }
    ,
    i.killAll = function(a) {
        if (b.slice(0).forEach(function(a) {
            return "ScrollSmoother" !== a.vars.id && a.kill()
        }),
        !0 !== a) {
            var c = Y.killAll || [];
            Y = {},
            c.forEach(function(a) {
                return a()
            })
        }
    }
    ,
    i);
    function i(b, c) {
        ad || i.register(a) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(b, c)
    }
    d.version = "3.11.4",
    d.saveStyles = function(b) {
        return b ? aK(b).forEach(function(b) {
            if (b && b.style) {
                var c = y.indexOf(b);
                0 <= c && y.splice(c, 5),
                y.push(b, b.style.cssText, b.getBBox && b.getAttribute("transform"), a.core.getCache(b), bb())
            }
        }) : y
    }
    ,
    d.revert = function(a, b) {
        return bk(!a, b)
    }
    ,
    d.create = function(a, b) {
        return new d(a,b)
    }
    ,
    d.refresh = function(a) {
        return a ? ar() : (ad || d.register()) && V(!0)
    }
    ,
    d.update = function(a) {
        return ++c.cache && L(!0 === a ? 2 : 0)
    }
    ,
    d.clearScrollMemory = bR,
    d.maxScroll = function(a, b) {
        return N(a, b ? q : k)
    }
    ,
    d.getScrollFunc = function(a, b) {
        return U(z(a), b ? q : k)
    }
    ,
    d.getById = function(a) {
        return aW[a]
    }
    ,
    d.getAll = function() {
        return b.filter(function(a) {
            return "ScrollSmoother" !== a.vars.id
        })
    }
    ,
    d.isScrolling = function() {
        return !!B
    }
    ,
    d.snapDirectional = bg,
    d.addEventListener = function(a, b) {
        var c = Y[a] || (Y[a] = []);
        ~c.indexOf(b) || c.push(b)
    }
    ,
    d.removeEventListener = function(c, d) {
        var a = Y[c]
          , b = a && a.indexOf(d);
        0 <= b && a.splice(b, 1)
    }
    ,
    d.batch = function(h, c) {
        function i(g, f) {
            var b = []
              , c = []
              , d = a.delayedCall(j, function() {
                f(b, c),
                b = [],
                c = []
            }).pause();
            return function(a) {
                b.length || d.restart(!0),
                b.push(a.trigger),
                c.push(a),
                e <= b.length && d.progress(1)
            }
        }
        var b, g = [], f = {}, j = c.interval || .016, e = c.batchMax || 1e9;
        for (b in c)
            f[b] = "on" === b.substr(0, 2) && t(c[b]) && "onRefreshInit" !== b ? i(0, c[b]) : c[b];
        return t(e) && (e = e(),
        o(d, "refresh", function() {
            return e = c.batchMax()
        })),
        aK(h).forEach(function(c) {
            var a = {};
            for (b in f)
                a[b] = f[b];
            a.trigger = c,
            g.push(d.create(a))
        }),
        g
    }
    ;
    function bZ(d, a, b, c) {
        return c < a ? d(c) : a < 0 && d(0),
        c < b ? (c - a) / (b - a) : b < 0 ? a / (a - b) : 1
    }
    function a$(b, a) {
        !0 === a ? b.style.removeProperty("touch-action") : b.style.touchAction = !0 === a ? "auto" : a ? "pan-" + a + (j.isTouch ? " pinch-zoom" : "") : "none",
        b === E && a$(g, a)
    }
    function cf(f) {
        var e, d = f.event, i = f.target, j = f.axis, b = (d.changedTouches ? d.changedTouches[0] : d).target, c = b._gsap || a.core.getCache(b), h = s();
        if (!c._isScrollT || 2e3 < h - c._isScrollT) {
            for (; b && b !== g && (b.scrollHeight <= b.clientHeight && b.scrollWidth <= b.clientWidth || !ao[(e = H(b)).overflowY] && !ao[e.overflowX]); )
                b = b.parentNode;
            c._isScroll = b && b !== i && !Z(b) && (ao[(e = H(b)).overflowY] || ao[e.overflowX]),
            c._isScrollT = h
        }
        !c._isScroll && "x" !== j || (d.stopPropagation(),
        d._gsapAllow = !0)
    }
    function ca(b, c, d, a) {
        return j.create({
            target: b,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: c,
            onWheel: a = a && cf,
            onPress: a,
            onDrag: a,
            onScroll: a,
            onEnable: function() {
                return d && o(f, j.eventTypes[0], bt, !1, !0)
            },
            onDisable: function() {
                return m(f, j.eventTypes[0], bt, !0)
            }
        })
    }
    function ce(b) {
        function T() {
            return y = !1
        }
        function C() {
            l = N(i, k),
            x = ac(W ? 1 : 0, l),
            p && (B = ac(0, N(i, q))),
            w = Q
        }
        function D() {
            h._gsap.y = aL(parseFloat(h._gsap.y) + f.offset) + "px",
            h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)",
            f.offset = f.cacheID = 0
        }
        function v() {
            C(),
            g.isActive() && g.vars.scrollY > l && (f() > l ? g.progress(1) && f(l) : g.resetTo("scrollY", l))
        }
        aR(b) || (b = {}),
        b.preventDefault = b.isNormalizer = b.allowClicks = !0,
        b.type || (b.type = "wheel,touch"),
        b.debounce = !!b.debounce,
        b.id = b.id || "normalizer";
        var n, l, w, y, g, K, A, G, p = b.normalizeScrollX, H = b.momentum, S = b.allowNestedScroll, i = z(b.target) || E, I = a.core.globals().ScrollSmoother, F = I && I.get(), h = W && (b.content && z(b.content) || F && !1 !== b.content && !F.smooth() && F.content()), f = U(i, k), r = U(i, q), u = 1, P = (j.isTouch && e.visualViewport ? e.visualViewport.scale * e.visualViewport.width : e.outerWidth) / e.innerWidth, M = 0, R = t(H) ? function() {
            return H(n)
        }
        : function() {
            return H || 2.8
        }
        , O = ca(i, b.type, !0, S), B = J, x = J;
        return h && a.set(h, {
            y: "+=0"
        }),
        b.ignoreCheck = function(a) {
            return W && "touchmove" === a.type && function() {
                var d, a, b;
                if (y)
                    return requestAnimationFrame(T),
                    d = aL(n.deltaY / 2),
                    a = x(f.v - d),
                    h && a !== f.v + f.offset && (f.offset = a - f.v,
                    b = aL((parseFloat(h && h._gsap.y) || 0) - f.offset),
                    h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + b + ", 0, 1)",
                    h._gsap.y = b + "px",
                    f.cacheID = c.cache,
                    L()),
                    !0;
                f.offset && D(),
                y = !0
            }() || 1.05 < u && "touchstart" !== a.type || n.isGesturing || a.touches && 1 < a.touches.length
        }
        ,
        b.onPress = function() {
            var a = u;
            u = aL((e.visualViewport && e.visualViewport.scale || 1) / P),
            g.pause(),
            a !== u && a$(i, 1.01 < u || !p && "x"),
            K = r(),
            A = f(),
            C(),
            w = Q
        }
        ,
        b.onRelease = b.onGestureStart = function(h, j) {
            if (f.offset && D(),
            j) {
                c.cache++;
                var e, b, d = R();
                p && (b = (e = r()) + .05 * d * -h.velocityX / .227,
                d *= bZ(r, e, b, N(i, q)),
                g.vars.scrollX = B(b)),
                b = (e = f()) + .05 * d * -h.velocityY / .227,
                d *= bZ(f, e, b, N(i, k)),
                g.vars.scrollY = x(b),
                g.invalidate().duration(d).play(.01),
                (W && g.vars.scrollY >= l || l - 1 <= e) && a.to({}, {
                    onUpdate: v,
                    duration: d
                })
            } else
                G.restart(!0)
        }
        ,
        b.onWheel = function() {
            g._ts && g.pause(),
            1e3 < s() - M && (w = 0,
            M = s())
        }
        ,
        b.onChange = function(a, b, c, g, h) {
            if (Q !== w && C(),
            b && p && r(B(g[2] === b ? K + (a.startX - a.x) : r() + b - g[1])),
            c) {
                f.offset && D();
                var i = h[2] === c
                  , d = i ? A + a.startY - a.y : f() + c - h[1]
                  , e = x(d);
                i && d !== e && (A += e - d),
                f(e)
            }
            (c || b) && L()
        }
        ,
        b.onEnable = function() {
            a$(i, !p && "x"),
            d.addEventListener("refresh", v),
            o(e, "resize", v),
            f.smooth && (f.target.style.scrollBehavior = "auto",
            f.smooth = r.smooth = !1),
            O.enable()
        }
        ,
        b.onDisable = function() {
            a$(i, !0),
            m(e, "resize", v),
            d.removeEventListener("refresh", v),
            O.kill()
        }
        ,
        b.lockAxis = !1 !== b.lockAxis,
        ((n = new j(b)).iOS = W) && !f() && f(1),
        W && a.ticker.add(J),
        G = n._dc,
        g = a.to(n, {
            ease: "power4",
            paused: !0,
            scrollX: p ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: G.vars.onComplete
        }),
        n
    }
    ao = {
        auto: 1,
        scroll: 1
    },
    bV = /(input|label|select|textarea)/i,
    bt = function(a) {
        var b = bV.test(a.target.tagName);
        (b || bh) && (a._gsapAllow = !0,
        bh = b)
    }
    ,
    d.sort = function(a) {
        return b.sort(a || function(a, b) {
            return -1e6 * (a.vars.refreshPriority || 0) + a.start - (b.start + -1e6 * (b.vars.refreshPriority || 0))
        }
        )
    }
    ,
    d.observe = function(a) {
        return new j(a)
    }
    ,
    d.normalizeScroll = function(a) {
        if (void 0 === a)
            return w;
        if (!0 === a && w)
            return w.enable();
        if (!1 === a)
            return w && w.kill();
        var b = a instanceof j ? a : ce(a);
        return w && w.target === b.target && w.kill(),
        Z(b.target) && (w = b),
        b
    }
    ,
    d.core = {
        _getVelocityProp: bD,
        _inputObserver: ca,
        _scrollers: c,
        _proxies: G,
        bridge: {
            ss: function() {
                B || X("scrollStart"),
                B = s()
            },
            ref: function() {
                return p
            }
        }
    },
    b$() && a.registerPlugin(d),
    ap.ScrollTrigger = d,
    ap.default = d,
    typeof window == "undefined" || window !== ap ? Object.defineProperty(ap, "__esModule", {
        value: !0
    }) : delete ap.default
})
