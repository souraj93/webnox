/*!
* SplitText 3.6.1
* https://greensock.com
*
* @license Copyright 2021, GreenSock. All rights reserved.
* Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
!function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? b(exports) : "function" == typeof define && define.amd ? define(["exports"], b) : b((a = a || self).window = a.window || {})
}(this, function(c) {
    "use strict";
    var s = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/, b, q, j, p, t, u, v, n, f;
    function m(a) {
        return q.getComputedStyle(a)
    }
    function e(a, d) {
        var c;
        return v(a) ? a : "string" == (c = typeof a) && !d && a ? n.call(b.querySelectorAll(a), 0) : a && "object" == c && "length"in a ? n.call(a, 0) : a ? [a] : []
    }
    function g(a) {
        return "absolute" === a.position || !0 === a.absolute
    }
    function x(d, b) {
        for (var a, c = b.length; -1 < --c; )
            if (a = b[c],
            d.substr(0, a.length) === a)
                return a.length
    }
    function o(a, c) {
        void 0 === a && (a = "");
        var b = ~a.indexOf("++")
          , d = 1;
        return b && (a = a.split("++").join("")),
        function() {
            return "<" + c + " style='position:relative;display:inline-block;'" + (a ? " class='" + a + (b ? d++ : "") + "'>" : ">")
        }
    }
    function h(a, c, d) {
        var b = a.nodeType;
        if (1 === b || 9 === b || 11 === b)
            for (a = a.firstChild; a; a = a.nextSibling)
                h(a, c, d);
        else
            3 !== b && 4 !== b || (a.nodeValue = a.nodeValue.split(c).join(d))
    }
    function i(c, a) {
        for (var b = a.length; -1 < --b; )
            c.push(a[b])
    }
    function l(a, c, d) {
        for (var b; a && a !== c; ) {
            if (b = a._next || a.nextSibling)
                return b.textContent.charAt(0) === d;
            a = a.parentNode || a._parent
        }
    }
    function k(c) {
        var b, a, d = e(c.childNodes), f = d.length;
        for (b = 0; b < f; b++)
            (a = d[b])._isSplit ? k(a) : b && a.previousSibling && 3 === a.previousSibling.nodeType ? (a.previousSibling.nodeValue += 3 === a.nodeType ? a.nodeValue : a.firstChild.nodeValue,
            c.removeChild(a)) : 3 !== a.nodeType && (c.insertBefore(a.firstChild, a),
            c.removeChild(a))
    }
    function a(a, b) {
        return parseFloat(b[a]) || 0
    }
    function y(d, s, W, U, N, C, A) {
        var e, j, t, c, y, v, w, J, q, f, P, p, n = m(d), K = a("paddingLeft", n), Q = -999, Y = a("borderBottomWidth", n) + a("borderTopWidth", n), X = a("borderLeftWidth", n) + a("borderRightWidth", n), V = a("paddingTop", n) + a("paddingBottom", n), T = a("paddingLeft", n) + a("paddingRight", n), S = a("fontSize", n) * (s.lineThreshold || .2), R = n.textAlign, E = [], L = [], M = [], F = s.wordDelimiter || " ", D = s.tag ? s.tag : s.span ? "span" : "div", G = s.type || s.split || "chars,words,lines", u = N && ~G.indexOf("lines") ? [] : null, r = ~G.indexOf("words"), x = ~G.indexOf("chars"), o = g(s), z = s.linesClass, I = ~(z || "").indexOf("++"), B = [], H = "flex" === n.display, O = d.style.display;
        for (I && (z = z.split("++").join("")),
        H && (d.style.display = "block"),
        t = (j = d.getElementsByTagName("*")).length,
        y = [],
        e = 0; e < t; e++)
            y[e] = j[e];
        if (u || o)
            for (e = 0; e < t; e++)
                ((v = (c = y[e]).parentNode === d) || o || x && !r) && (p = c.offsetTop,
                u && v && Math.abs(p - Q) > S && ("BR" !== c.nodeName || 0 === e) && (w = [],
                u.push(w),
                Q = p),
                o && (c._x = c.offsetLeft,
                c._y = p,
                c._w = c.offsetWidth,
                c._h = c.offsetHeight),
                u && ((c._isSplit && v || !x && v || r && v || !r && c.parentNode.parentNode === d && !c.parentNode._isSplit) && (w.push(c),
                c._x -= K,
                l(c, d, F) && (c._wordEnd = !0)),
                "BR" === c.nodeName && (c.nextSibling && "BR" === c.nextSibling.nodeName || 0 === e) && u.push([])));
        for (e = 0; e < t; e++)
            if (v = (c = y[e]).parentNode === d,
            "BR" !== c.nodeName)
                if (o && (q = c.style,
                r || v || (c._x += c.parentNode._x,
                c._y += c.parentNode._y),
                q.left = c._x + "px",
                q.top = c._y + "px",
                q.position = "absolute",
                q.display = "block",
                q.width = c._w + 1 + "px",
                q.height = c._h + "px"),
                !r && x)
                    if (c._isSplit)
                        for (c._next = j = c.nextSibling,
                        c.parentNode.appendChild(c); j && 3 === j.nodeType && " " === j.textContent; )
                            c._next = j.nextSibling,
                            c.parentNode.appendChild(j),
                            j = j.nextSibling;
                    else
                        c.parentNode._isSplit ? (c._parent = c.parentNode,
                        !c.previousSibling && c.firstChild && (c.firstChild._isFirst = !0),
                        c.nextSibling && " " === c.nextSibling.textContent && !c.nextSibling.nextSibling && B.push(c.nextSibling),
                        c._next = c.nextSibling && c.nextSibling._isFirst ? null : c.nextSibling,
                        c.parentNode.removeChild(c),
                        y.splice(e--, 1),
                        t--) : v || (p = !c.nextSibling && l(c.parentNode, d, F),
                        c.parentNode._parent && c.parentNode._parent.appendChild(c),
                        p && c.parentNode.appendChild(b.createTextNode(" ")),
                        "span" === D && (c.style.display = "inline"),
                        E.push(c));
                else
                    c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML ? L.push(c) : x && !c._isSplit && ("span" === D && (c.style.display = "inline"),
                    E.push(c));
            else
                u || o ? (c.parentNode && c.parentNode.removeChild(c),
                y.splice(e--, 1),
                t--) : r || d.appendChild(c);
        for (e = B.length; -1 < --e; )
            B[e].parentNode.removeChild(B[e]);
        if (u) {
            for (o && (f = b.createElement(D),
            d.appendChild(f),
            P = f.offsetWidth + "px",
            p = f.offsetParent === d ? 0 : d.offsetLeft,
            d.removeChild(f)),
            q = d.style.cssText,
            d.style.cssText = "display:none;"; d.firstChild; )
                d.removeChild(d.firstChild);
            for (J = " " === F && (!o || !r && !x),
            e = 0; e < u.length; e++) {
                for (w = u[e],
                (f = b.createElement(D)).style.cssText = "display:block;text-align:" + R + ";position:" + (o ? "absolute;" : "relative;"),
                z && (f.className = z + (I ? e + 1 : "")),
                M.push(f),
                t = w.length,
                j = 0; j < t; j++)
                    "BR" !== w[j].nodeName && (c = w[j],
                    f.appendChild(c),
                    J && c._wordEnd && f.appendChild(b.createTextNode(" ")),
                    o && (0 === j && (f.style.top = c._y + "px",
                    f.style.left = K + p + "px"),
                    c.style.top = "0px",
                    p && (c.style.left = c._x - p + "px")));
                0 === t ? f.innerHTML = "&nbsp;" : r || x || (k(f),
                h(f, String.fromCharCode(160), " ")),
                o && (f.style.width = P,
                f.style.height = c._h + "px"),
                d.appendChild(f)
            }
            d.style.cssText = q
        }
        o && (A > d.clientHeight && (d.style.height = A - V + "px",
        d.clientHeight < A && (d.style.height = A + Y + "px")),
        C > d.clientWidth && (d.style.width = C - T + "px",
        d.clientWidth < C && (d.style.width = C + X + "px"))),
        H && (O ? d.style.display = O : d.style.removeProperty("display")),
        i(W, E),
        r && i(U, L),
        i(N, M)
    }
    function w(i, e, B, o) {
        var c, f, a, m, v, d, q, w, j = e.tag ? e.tag : e.span ? "span" : "div", n = ~(e.type || e.split || "chars,words,lines").indexOf("chars"), C = g(e), k = e.wordDelimiter || " ", l = " " !== k ? "" : C ? "&#173; " : " ", z = "</" + j + ">", p = 1, A = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : x : null, r = b.createElement("div"), y = i.parentNode;
        for (y.insertBefore(r, i),
        r.textContent = i.nodeValue,
        y.removeChild(i),
        q = -1 !== (c = function d(a) {
            var b = a.nodeType
              , c = "";
            if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent)
                    return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling)
                    c += d(a)
            } else if (3 === b || 4 === b)
                return a.nodeValue;
            return c
        }(i = r)).indexOf("<"),
        !1 !== e.reduceWhiteSpace && (c = c.replace(u, " ").replace(t, "")),
        q && (c = c.split("<").join("{{LT}}")),
        v = c.length,
        f = (" " === c.charAt(0) ? l : "") + B(),
        a = 0; a < v; a++)
            if (d = c.charAt(a),
            A && (w = A(c.substr(a), e.specialChars)))
                d = c.substr(a, w || 1),
                f += n && " " !== d ? o() + d + "</" + j + ">" : d,
                a += w - 1;
            else if (d === k && c.charAt(a - 1) !== k && a) {
                for (f += p ? z : "",
                p = 0; c.charAt(a + 1) === k; )
                    f += l,
                    a++;
                a === v - 1 ? f += l : ")" !== c.charAt(a + 1) && (f += l + B(),
                p = 1)
            } else
                "{" === d && "{{LT}}" === c.substr(a, 6) ? (f += n ? o() + "{{LT}}</" + j + ">" : "{{LT}}",
                a += 5) : 55296 <= d.charCodeAt(0) && d.charCodeAt(0) <= 56319 || 65024 <= c.charCodeAt(a + 1) && c.charCodeAt(a + 1) <= 65039 ? (m = ((c.substr(a, 12).split(s) || [])[1] || "").length || 2,
                f += n && " " !== d ? o() + c.substr(a, m) + "</" + j + ">" : c.substr(a, m),
                a += m - 1) : f += n && " " !== d ? o() + d + "</" + j + ">" : d;
        i.outerHTML = f + (p ? z : ""),
        q && h(y, "{{LT}}", "<")
    }
    function r(c, b, f, h) {
        var d, a, i = e(c.childNodes), j = i.length, k = g(b);
        if (3 !== c.nodeType || 1 < j) {
            for (b.absolute = !1,
            d = 0; d < j; d++)
                (a = i[d])._next = a._isFirst = a._parent = a._wordEnd = null,
                3 === a.nodeType && !/\S+/.test(a.nodeValue) || (k && 3 !== a.nodeType && "inline" === m(a).display && (a.style.display = "inline-block",
                a.style.position = "relative"),
                a._isSplit = !0,
                r(a, b, f, h));
            return b.absolute = k,
            void (c._isSplit = !0)
        }
        w(c, b, f, h)
    }
    t = /(?:\r|\n|\t\t)/g,
    u = /(?:\s\s+)/g,
    v = Array.isArray,
    n = [].slice,
    f = ((p = d.prototype).split = function(a) {
        this.isSplit && this.revert(),
        this.vars = a = a || this.vars,
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e, f, b, c = this.elements.length, d = a.tag ? a.tag : a.span ? "span" : "div", g = o(a.wordsClass, d), h = o(a.charsClass, d); -1 < --c; )
            b = this.elements[c],
            this._originals[c] = b.innerHTML,
            e = b.clientHeight,
            f = b.clientWidth,
            r(b, a, g, h),
            y(b, a, this.chars, this.words, this.lines, f, e);
        return this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        this.isSplit = !0,
        this
    }
    ,
    p.revert = function() {
        var a = this._originals;
        if (!a)
            throw "revert() call wasn't scoped properly.";
        return this.elements.forEach(function(b, c) {
            return b.innerHTML = a[c]
        }),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this.isSplit = !1,
        this
    }
    ,
    d.create = function(a, b) {
        return new d(a,b)
    }
    ,
    d);
    function d(c, a) {
        j || function() {
            b = document,
            q = window,
            j = 1
        }(),
        this.elements = e(c),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this._originals = [],
        this.vars = a || {},
        this.split(a)
    }
    f.version = "3.6.1",
    c.SplitText = f,
    c.default = f,
    typeof window == "undefined" || window !== c ? Object.defineProperty(c, "__esModule", {
        value: !0
    }) : delete c.default
})
