!
function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    }: t(e)
} ("undefined" != typeof window ? window: this,
function(e, t) {
    function n(e) {
        var t = e.length,
        n = Z.type(e);
        return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    function r(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e,
        function(e, r) {
            return !! t.call(e, r, e) !== n
        });
        if (t.nodeType) return Z.grep(e,
        function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e,
        function(e) {
            return U.call(t, e) >= 0 !== n
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    function o(e) {
        var t = he[e] = {};
        return Z.each(e.match(de) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1),
        e.removeEventListener("load", s, !1),
        Z.ready()
    }
    function a() {
        Object.defineProperty(this.cache = {},
        0, {
            get: function() {
                return {}
            }
        }),
        this.expando = Z.expando + Math.random()
    }
    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: xe.test(n) ? Z.parseJSON(n) : n)
            } catch(i) {}
            ye.set(e, t, n)
        } else n = void 0;
        return n
    }
    function l() {
        return ! 0
    }
    function c() {
        return ! 1
    }
    function f() {
        try {
            return J.activeElement
        } catch(e) {}
    }
    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function h(e) {
        var t = Pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function g(e, t) {
        for (var n = 0,
        r = e.length; r > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }
    function m(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), l = o.events)) {
                delete s.handle,
                s.events = {};
                for (i in l) for (n = 0, r = l[i].length; r > n; n++) Z.event.add(t, i, l[i][n])
            }
            ye.hasData(e) && (a = ye.access(e), u = Z.extend({},
            a), ye.set(t, u))
        }
    }
    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }
    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ne.test(e.type) ? t.checked = e.checked: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function x(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body),
        o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display: Z.css(i[0], "display");
        return i.detach(),
        o
    }
    function b(e) {
        var t = J,
        n = $e[e];
        return n || (n = x(e, t), "none" !== n && n || (We = (We || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = x(e, t), We.detach()), $e[e] = n),
        n
    }
    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || _e(e),
        n && (s = n.getPropertyValue(t) || n[t]),
        n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Ie.test(s) && Be.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)),
        void 0 !== s ? s + "": s
    }
    function T(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get: (this.get = t).apply(this, arguments)
            }
        }
    }
    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--;) if (t = Ge[i] + n, t in e) return t;
        return r
    }
    function N(e, t, n) {
        var r = Xe.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += Z.css(e, n + Te[o], !0, i)),
        r ? ("content" === n && (s -= Z.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Te[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Te[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Te[o] + "Width", !0, i)));
        return s
    }
    function E(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = _e(e),
        s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ie.test(i)) return i;
            r = s && (Q.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border": "content"), r, o) + "px"
    }
    function S(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s],
        r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r), "none" === n && i || ve.set(r, "olddisplay", i ? n: Z.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s],
        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "": "none"));
        return e
    }
    function j(e, t, n, r, i) {
        return new j.prototype.init(e, t, n, r, i)
    }
    function D() {
        return setTimeout(function() {
            Qe = void 0
        }),
        Qe = Z.now()
    }
    function A(e, t) {
        var n, r = 0,
        i = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Te[r],
        i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function L(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; s > o; o++) if (r = i[o].call(n, t, e)) return r
    }
    function q(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this,
        p = {},
        d = e.style,
        h = e.nodeType && Ce(e),
        g = ve.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--,
                Z.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden", f.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], Ke.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (h ? "hide": "show")) {
                if ("show" !== i || !g || void 0 === g[r]) continue;
                h = !0
            }
            p[r] = g && g[r] || Z.style(e, r)
        } else l = void 0;
        if (Z.isEmptyObject(p))"inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}),
            o && (g.hidden = !h),
            h ? Z(e).show() : f.done(function() {
                Z(e).hide()
            }),
            f.done(function() {
                var t;
                ve.remove(e, "fxshow");
                for (t in p) Z.style(e, t, p[t])
            });
            for (r in p) s = L(h ? g[r] : 0, r, f),
            r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function H(e, t) {
        var n, r, i, o, s;
        for (n in e) if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
            o = s.expand(o),
            delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }
    function O(e, t, n) {
        var r, i, o = 0,
        s = tt.length,
        a = Z.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (i) return ! 1;
            for (var t = Qe || D(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]),
            1 > o && u ? n: (a.resolveWith(e, [l]), !1)
        },
        l = a.promise({
            elem: e,
            props: Z.extend({},
            t),
            opts: Z.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Qe || D(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? l.tweens.length: 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]),
                this
            }
        }),
        c = l.props;
        for (H(c, l.opts.specialEasing); s > o; o++) if (r = tt[o].call(l, e, c, l.opts)) return r;
        return Z.map(c, L, l),
        Z.isFunction(l.opts.start) && l.opts.start.call(e, l),
        Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function F(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            o = t.toLowerCase().match(de) || [];
            if (Z.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0,
            Z.each(e[a] || [],
            function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }),
            u
        }
        var o = {},
        s = e === wt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function M(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e: r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r),
        e
    }
    function R(e, t, n) {
        for (var r, i, o, s, a = e.contents,
        u = e.dataTypes;
        "*" === u[0];) u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in a) if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }
    function W(e, t, n, r) {
        var i, o, s, a, u, l = {},
        c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0) if (s && e["throws"]) t = s(t);
            else try {
                t = s(t)
            } catch(f) {
                return {
                    state: "parsererror",
                    error: s ? f: "No conversion from " + u + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function $(e, t, n, r) {
        var i;
        if (Z.isArray(t)) Z.each(t,
        function(t, i) {
            n || kt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
        });
        else if (n || "object" !== Z.type(t)) r(e, t);
        else for (i in t) $(e + "[" + i + "]", t[i], n, r)
    }
    function B(e) {
        return Z.isWindow(e) ? e: 9 === e.nodeType && e.defaultView
    }
    var I = [],
    _ = I.slice,
    z = I.concat,
    X = I.push,
    U = I.indexOf,
    V = {},
    Y = V.toString,
    G = V.hasOwnProperty,
    Q = {},
    J = e.document,
    K = "2.1.1",
    Z = function(e, t) {
        return new Z.fn.init(e, t)
    },
    ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    te = /^-ms-/,
    ne = /-([\da-z])/gi,
    re = function(e, t) {
        return t.toUpperCase()
    };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return _.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(_.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: I.sort,
        splice: I.splice
    },
    Z.extend = Z.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {},
        a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t],
        r = e[t],
        s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n: []) : o = n && Z.isPlainObject(n) ? n: {},
        s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    },
    Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return ! Z.isArray(e) && e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object": typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e),
            e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
            s = e.length,
            a = n(e);
            if (r) {
                if (a) for (; s > o && (i = t.apply(e[o], r), i !== !1); o++);
                else for (o in e) if (i = t.apply(e[o], r), i === !1) break
            } else if (a) for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "": (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length,
            r = 0,
            i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o),
            r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
            s = e.length,
            a = n(e),
            u = [];
            if (a) for (; s > o; o++) i = t(e[o], o, r),
            null != i && u.push(i);
            else for (o in e) i = t(e[o], o, r),
            null != i && u.push(i);
            return z.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n),
            Z.isFunction(e) ? (r = _.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(_.call(arguments)))
            },
            i.guid = e.guid = e.guid || Z.guid++, i) : void 0
        },
        now: Date.now,
        support: Q
    }),
    Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, d, h, g;
            if ((t ? t.ownerDocument || t: $) !== q && L(t), t = t || q, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (O && !r) {
                if (i = ye.exec(e)) if (s = i[1]) {
                    if (9 === a) {
                        if (o = t.getElementById(s), !o || !o.parentNode) return n;
                        if (o.id === s) return n.push(o),
                        n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && R(t, o) && o.id === s) return n.push(o),
                    n
                } else {
                    if (i[2]) return Z.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((s = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(s)),
                    n
                }
                if (w.qsa && (!F || !F.test(e))) {
                    if (d = f = W, h = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
                        h = xe.test(e) && c(t.parentNode) || t,
                        g = l.join(",")
                    }
                    if (g) try {
                        return Z.apply(n, h.querySelectorAll(g)),
                        n
                    } catch(m) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ue, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[W] = !0,
            e
        }
        function i(e) {
            var t = q.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }
        function s(e, t) {
            var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(e) {
            return e && typeof e.getElementsByTagName !== V && e
        }
        function f() {}
        function p(e) {
            for (var t = 0,
            n = e.length,
            r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir,
            i = n && "parentNode" === r,
            o = I++;
            return t.first ?
            function(t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            }: function(t, n, s) {
                var a, u, l = [B, o];
                if (s) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, s)) return ! 0
                } else for (; t = t[r];) if (1 === t.nodeType || i) {
                    if (u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === B && a[1] === o) return l[2] = a[2];
                    if (u[r] = l, l[2] = e(t, n, s)) return ! 0
                }
            }
        }
        function h(e) {
            return e.length > 1 ?
            function(t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function g(e, n, r) {
            for (var i = 0,
            o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }
        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }
        function v(e, t, n, i, o, s) {
            return i && !i[W] && (i = v(i)),
            o && !o[W] && (o = v(o, s)),
            r(function(r, s, a, u) {
                var l, c, f, p = [],
                d = [],
                h = s.length,
                v = r || g(t || "*", a.nodeType ? [a] : a, []),
                y = !e || !r && t ? v: m(v, p, e, a, u),
                x = n ? o || (r ? e: h || i) ? [] : s: y;
                if (n && n(y, x, a, u), i) for (l = m(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? te.call(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else x = m(x === s ? x.splice(h, x.length) : x),
                o ? o(null, s, x, u) : Z.apply(s, x)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length,
            o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                return e === t
            },
            s, !0), l = d(function(e) {
                return te.call(t, e) > -1
            },
            s, !0), c = [function(e, n, r) {
                return ! o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }]; i > a; a++) if (n = T.relative[e[a].type]) c = [d(h(c), n)];
            else {
                if (n = T.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                    for (r = ++a; i > r && !T.relative[e[r].type]; r++);
                    return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*": ""
                    })).replace(ue, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                c.push(n)
            }
            return h(c)
        }
        function x(e, n) {
            var i = n.length > 0,
            o = e.length > 0,
            s = function(r, s, a, u, l) {
                var c, f, p, d = 0,
                h = "0",
                g = r && [],
                v = [],
                y = j,
                x = r || o && T.find.TAG("*", l),
                b = B += null == y ? 1 : Math.random() || .1,
                w = x.length;
                for (l && (j = s !== q && s); h !== w && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0; p = e[f++];) if (p(c, s, a)) {
                            u.push(c);
                            break
                        }
                        l && (B = b)
                    }
                    i && ((c = !p && c) && d--, r && g.push(c))
                }
                if (d += h, i && h !== d) {
                    for (f = 0; p = n[f++];) p(g, v, s, a);
                    if (r) {
                        if (d > 0) for (; h--;) g[h] || v[h] || (v[h] = J.call(u));
                        v = m(v)
                    }
                    Z.apply(u, v),
                    l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (B = b, j = y),
                g
            };
            return i ? r(s) : s
        }
        var b, w, T, C, N, k, E, S, j, D, A, L, q, H, O, F, P, M, R, W = "sizzle" + -new Date,
        $ = e.document,
        B = 0,
        I = 0,
        _ = n(),
        z = n(),
        X = n(),
        U = function(e, t) {
            return e === t && (A = !0),
            0
        },
        V = "undefined",
        Y = 1 << 31,
        G = {}.hasOwnProperty,
        Q = [],
        J = Q.pop,
        K = Q.push,
        Z = Q.push,
        ee = Q.slice,
        te = Q.indexOf ||
        function(e) {
            for (var t = 0,
            n = this.length; n > t; t++) if (this[t] === e) return t;
            return - 1
        },
        ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        re = "[\\x20\\t\\r\\n\\f]",
        ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        oe = ie.replace("w", "w#"),
        se = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]",
        ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
        ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
        le = new RegExp("^" + re + "*," + re + "*"),
        ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
        fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]", "g"),
        pe = new RegExp(ae),
        de = new RegExp("^" + oe + "$"),
        he = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + se),
            PSEUDO: new RegExp("^" + ae),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ne + ")$", "i"),
            needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
        },
        ge = /^(?:input|select|textarea|button)$/i,
        me = /^h\d$/i,
        ve = /^[^{]+\{\s*\[native \w/,
        ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        xe = /[+~]/,
        be = /'|\\/g,
        we = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)", "ig"),
        Te = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
        try {
            Z.apply(Q = ee.call($.childNodes), $.childNodes),
            Q[$.childNodes.length].nodeType
        } catch(Ce) {
            Z = {
                apply: Q.length ?
                function(e, t) {
                    K.apply(e, ee.call(t))
                }: function(e, t) {
                    for (var n = e.length,
                    r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        N = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !! t && "HTML" !== t.nodeName
        },
        L = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e: $,
            r = n.defaultView;
            return n !== q && 9 === n.nodeType && n.documentElement ? (q = n, H = n.documentElement, O = !N(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload",
            function() {
                L()
            },
            !1) : r.attachEvent && r.attachEvent("onunload",
            function() {
                L()
            })), w.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }), w.getById = i(function(e) {
                return H.appendChild(e).id = W,
                !n.getElementsByName || !n.getElementsByName(W).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if (typeof t.getElementById !== V && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ?
            function(e, t) {
                return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
            }: function(e, t) {
                var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            },
            T.find.CLASS = w.getElementsByClassName &&
            function(e, t) {
                return typeof t.getElementsByClassName !== V && O ? t.getElementsByClassName(e) : void 0
            },
            P = [], F = [], (w.qsa = ve.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowclip^='']").length && F.push("[*^$]=" + re + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || F.push("\\[" + re + "*(?:value|" + ne + ")"),
                e.querySelectorAll(":checked").length || F.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && F.push("name" + re + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                F.push(",.*:")
            })), (w.matchesSelector = ve.test(M = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = M.call(e, "div"),
                M.call(e, "[s!='']:x"),
                P.push("!=", ae)
            }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(H.compareDocumentPosition), R = t || ve.test(H.contains) ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            U = t ?
            function(e, t) {
                if (e === t) return A = !0,
                0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r: (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === $ && R($, e) ? -1 : t === n || t.ownerDocument === $ && R($, t) ? 1 : D ? te.call(D, e) - te.call(D, t) : 0 : 4 & r ? -1 : 1)
            }: function(e, t) {
                if (e === t) return A = !0,
                0;
                var r, i = 0,
                o = e.parentNode,
                a = t.parentNode,
                u = [e],
                l = [t];
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : D ? te.call(D, e) - te.call(D, t) : 0;
                if (o === a) return s(e, t);
                for (r = e; r = r.parentNode;) u.unshift(r);
                for (r = t; r = r.parentNode;) l.unshift(r);
                for (; u[i] === l[i];) i++;
                return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
            },
            n) : q
        },
        t.matches = function(e, n) {
            return t(e, null, null, n)
        },
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && L(e), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !O || P && P.test(n) || F && F.test(n))) try {
                var r = M.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch(i) {}
            return t(n, q, null, [e]).length > 0
        },
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && L(e),
            R(e, t)
        },
        t.attr = function(e, t) { (e.ownerDocument || e) !== q && L(e);
            var n = T.attrHandle[t.toLowerCase()],
            r = n && G.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r: w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
        },
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        t.uniqueSort = function(e) {
            var t, n = [],
            r = 0,
            i = 0;
            if (A = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), A) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null,
            e
        },
        C = t.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += C(t);
            return n
        },
        T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Te),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && _(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n: !n || (o += "", "=" === n ? o === r: "!=" === n ? o !== r: "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice( - r.length) === r: "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice( - 4),
                    a = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        v = a && t.nodeName.toLowerCase(),
                        y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];) if (a ? f.nodeName.toLowerCase() === v: 1 === f.nodeType) return ! 1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [s ? m.firstChild: m.lastChild], s && y) {
                                for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === B && l[1], p = l[0] === B && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [B, d, p];
                                    break
                                }
                            } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === B) p = l[1];
                            else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v: 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [B, p]), f !== t)););
                            return p -= i,
                            p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = te.call(e, i[s]),
                        e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                    n = [],
                    i = E(e.replace(ue, "$1"));
                    return i[W] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(we, Te).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = O ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! T.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; ++r < t;) e.push(r);
                    return e
                })
            }
        },
        T.pseudos.nth = T.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[b] = a(b);
        for (b in {
            submit: !0,
            reset: !0
        }) T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos,
        T.setFilters = new f,
        k = t.tokenize = function(e, n) {
            var r, i, o, s, a, u, l, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = T.preFilter; a;) { (!r || (i = le.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])),
                r = !1,
                (i = ce.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), a = a.slice(r.length));
                for (s in T.filter) ! (i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length: a ? t.error(e) : z(e, u).slice(0)
        },
        E = t.compile = function(e, t) {
            var n, r = [],
            i = [],
            o = X[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]),
                o[W] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)),
                o.selector = e
            }
            return o
        },
        S = t.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
            f = !r && k(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i--&&(s = o[i], !T.relative[a = s.type]);) if ((u = T.find[a]) && (r = u(s.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e) return Z.apply(n, r),
                    n;
                    break
                }
            }
            return (l || E(e, f))(r, t, !O, n, xe.test(e) && c(t.parentNode) || t),
            n
        },
        w.sortStable = W.split("").sort(U).join("") === W,
        w.detectDuplicates = !!A,
        L(),
        w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width",
        function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value",
        function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne,
        function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
        }),
        t
    } (e);
    Z.find = ie,
    Z.expr = ie.selectors,
    Z.expr[":"] = Z.expr.pseudos,
    Z.unique = ie.uniqueSort,
    Z.text = ie.getText,
    Z.isXMLDoc = ie.isXML,
    Z.contains = ie.contains;
    var oe = Z.expr.match.needsContext,
    se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ae = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t,
        function(e) {
            return 1 === e.nodeType
        }))
    },
    Z.fn.extend({
        find: function(e) {
            var t, n = this.length,
            r = [],
            i = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                for (t = 0; n > t; t++) if (Z.contains(i[t], this)) return ! 0
            }));
            for (t = 0; n > t; t++) Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + e: e,
            r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !! r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ce = Z.fn.init = function(e, t) {
        var n, r;
        if (!e) return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return ! t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t: J, !0)), se.test(n[1]) && Z.isPlainObject(t)) for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return r = J.getElementById(n[2]),
            r && r.parentNode && (this.length = 1, this[0] = r),
            this.context = J,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    };
    ce.prototype = Z.fn,
    ue = Z(J);
    var fe = /^(?:parents|prev(?:Until|All))/,
    pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    Z.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && Z(e).is(n)) break;
                r.push(e)
            }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    Z.fn.extend({
        has: function(e) {
            var t = Z(e, this),
            n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++) if (Z.contains(this, t[e])) return ! 0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0,
            i = this.length,
            o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    },
    function(e, t) {
        Z.fn[e] = function(n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice( - 5) && (r = n),
            r && "string" == typeof r && (i = Z.filter(r, i)),
            this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var de = /\S+/g,
    he = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || o(e) : Z.extend({},
        e);
        var t, n, r, i, s, a, u = [],
        l = !e.once && [],
        c = function(o) {
            for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++) if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break
            }
            r = !1,
            u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
        },
        f = {
            add: function() {
                if (u) {
                    var n = u.length; !
                    function o(t) {
                        Z.each(t,
                        function(t, n) {
                            var r = Z.type(n);
                            "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    } (arguments),
                    r ? s = u.length: t && (i = n, c(t))
                }
                return this
            },
            remove: function() {
                return u && Z.each(arguments,
                function(e, t) {
                    for (var n; (n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1),
                    r && (s >= n && s--, a >= n && a--)
                }),
                this
            },
            has: function(e) {
                return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                s = 0,
                this
            },
            disable: function() {
                return u = l = t = void 0,
                this
            },
            disabled: function() {
                return ! u
            },
            lock: function() {
                return l = void 0,
                t || f.disable(),
                this
            },
            locked: function() {
                return ! l
            },
            fireWith: function(e, t) {
                return ! u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! n
            }
        };
        return f
    },
    Z.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return Z.Deferred(function(n) {
                        Z.each(t,
                        function(t, o) {
                            var s = Z.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? Z.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            Z.each(t,
            function(e, o) {
                var s = o[2],
                a = o[3];
                r[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[o[0] + "With"] = s.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0,
            o = _.call(arguments),
            s = o.length,
            a = 1 !== s || e && Z.isFunction(e.promise) ? s: 0,
            u = 1 === a ? e: Z.Deferred(),
            l = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? _.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                }
            };
            if (s > 1) for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o),
            u.promise()
        }
    });
    var ge;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e),
        this
    },
    Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++:Z.ready(!0)
        },
        ready: function(e) { (e === !0 ? --Z.readyWait: Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }),
    Z.ready.promise = function(t) {
        return ge || (ge = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))),
        ge.promise(t)
    },
    Z.ready.promise();
    var me = Z.access = function(e, t, n, r, i, o, s) {
        var a = 0,
        u = e.length,
        l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (a in n) Z.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(Z(e), n)
        })), t)) for (; u > a; a++) t(e[a], n, s ? r: r.call(e[a], a, t(e[a], n)));
        return i ? e: l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    },
    a.uid = 1,
    a.accepts = Z.acceptData,
    a.prototype = {
        key: function(e) {
            if (!a.accepts(e)) return 0;
            var t = {},
            n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    },
                    Object.defineProperties(e, t)
                } catch(r) {
                    t[this.expando] = n,
                    Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}),
            n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
            o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
            else for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n: n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r: this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n: t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
            s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(de) || [])),
                n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function(e) {
            return ! Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a,
    ye = new a,
    xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    be = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {
            ye.remove(e, t)
        },
        _data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function(e, t) {
            ve.remove(e, t)
        }
    }),
    Z.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
            s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ye.set(this, e)
            }) : me(this,
            function(t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ye.get(o, e), void 0 !== n) return n;
                    if (n = ye.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ye.get(this, r);
                    ye.set(this, r, t),
                    -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                })
            },
            null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ye.remove(this, e)
            })
        }
    }),
    Z.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = Z._queueHooks(e, t),
            s = function() {
                Z.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--),
            arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
            i = Z.Deferred(),
            o = this,
            s = this.length,
            a = function() {--r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(o[s], e + "queueHooks"),
            n && n.empty && (r++, n.empty.add(a));
            return a(),
            i.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Te = ["Top", "Right", "Bottom", "Left"],
    Ce = function(e, t) {
        return e = t || e,
        "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
    },
    Ne = /^(?:checkbox|radio)$/i; !
    function() {
        var e = J.createDocumentFragment(),
        t = e.appendChild(J.createElement("div")),
        n = J.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    } ();
    var ke = "undefined";
    Q.focusinBubbles = "onfocusin" in e;
    var Ee = /^key/,
    Se = /^(?:mouse|pointer|contextmenu)|click/,
    je = /^(?:focusinfocus|focusoutblur)$/,
    De = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.get(e);
            if (m) for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(de) || [""], l = t.length; l--;) a = De.exec(t[l]) || [],
            d = g = a[1],
            h = (a[2] || "").split(".").sort(),
            d && (f = Z.event.special[d] || {},
            d = (i ? f.delegateType: f.bindType) || d, f = Z.event.special[d] || {},
            c = Z.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && Z.expr.match.needsContext.test(i),
                namespace: h.join(".")
            },
            o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.hasData(e) && ve.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(de) || [""], l = t.length; l--;) if (a = De.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                    for (f = Z.event.special[d] || {},
                    d = (r ? f.delegateType: f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o],
                    !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
                } else for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || J],
            d = G.call(t, "type") ? t.type: t,
            h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !je.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t: new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {},
            i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d, je.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s),
                    a = s;
                    a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u: f.bindType || d,
                c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"),
                c && c.apply(s, n),
                c = l && s[l],
                c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = d,
                i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)),
                t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [],
            a = _.call(arguments),
            u = (ve.get(this, "events") || {})[e.type] || [],
            l = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
            a = t.delegateCount,
            u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) if (u.disabled !== !0 || "click" !== e.type) {
                for (r = [], n = 0; a > n; n++) o = t[n],
                i = o.selector + " ",
                void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length),
                r[i] && r.push(o);
                r.length && s.push({
                    elem: u,
                    handlers: r
                })
            }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[Z.expando]) return e;
            var t, n, r, i = e.type,
            o = e,
            s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Se.test(i) ? this.mouseHooks: Ee.test(i) ? this.keyHooks: {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t],
            e[n] = o[n];
            return e.target || (e.target = J),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    },
    Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l: c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    },
    Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l,
            e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l,
            e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                o = e.handleObj;
                return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    Q.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                i = ve.access(r, t);
                i || r.addEventListener(e, n, !0),
                ve.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                i = ve.access(r, t) - 1;
                i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
            }
        }
    }),
    Z.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return Z().off(e),
                o.apply(this, arguments)
            },
            r.guid = o.guid || (o.guid = Z.guid++)),
            this.each(function() {
                Z.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
            Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0),
            n === !1 && (n = c),
            this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Le = /<([\w:]+)/,
    qe = /<|&#?\w+;/,
    He = /<(?:script|style|link)/i,
    Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Fe = /^$|\/(?:java|ecma)script/i,
    Pe = /^true\/(.*)/,
    Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Re = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Re.optgroup = Re.option,
    Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead,
    Re.th = Re.td,
    Z.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
            u = Z.contains(e.ownerDocument, e);
            if (! (Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e))) for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
            if (t) if (n) for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++) m(o[r], s[r]);
            else m(e, a);
            return s = v(a, "script"),
            s.length > 0 && g(s, !u && v(e, "script")),
            a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++) if (i = e[p], i || 0 === i) if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
            else if (qe.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (Le.exec(i) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + i.replace(Ae, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                Z.merge(f, o.childNodes),
                o = c.firstChild,
                o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];) if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n)) for (l = 0; i = o[l++];) Fe.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = Z.event.special,
            s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
                    if (t.events) for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    ve.cache[i] && delete ve.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }),
    Z.fn.extend({
        text: function(e) {
            return me(this,
            function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            },
            null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)),
            n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e: t,
            this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return me(this,
            function(e) {
                var t = this[0] || {},
                n = 0,
                r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !He.test(e) && !Re[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ae, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {},
                        1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch(i) {}
                }
                t && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments,
            function(t) {
                e = this.parentNode,
                Z.cleanData(v(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this: this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = z.apply([], e);
            var n, r, i, o, s, a, u = 0,
            l = this.length,
            c = this,
            f = l - 1,
            p = e[0],
            g = Z.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !Q.checkClone && Oe.test(p)) return this.each(function(n) {
                var r = c.eq(n);
                g && (e[0] = p.call(this, n, r.html())),
                r.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(v(n, "script"), d), o = i.length; l > u; u++) s = n,
                u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))),
                t.call(this[u], s, u);
                if (o) for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) s = i[u],
                Fe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Me, "")))
            }
            return this
        }
    }),
    Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this: this.clone(!0),
            Z(i[s])[t](n),
            X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We, $e = {},
    Be = /^margin/,
    Ie = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
    _e = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }; !
    function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            s.innerHTML = "",
            i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top,
            r = "4px" === t.width,
            i.removeChild(o)
        }
        var n, r, i = J.documentElement,
        o = J.createElement("div"),
        s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == r && t(),
                r
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                s.style.width = "1px",
                i.appendChild(o),
                t = !parseFloat(e.getComputedStyle(n, null).marginRight),
                i.removeChild(o),
                t
            }
        }))
    } (),
    Z.swap = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o],
        e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i
    };
    var ze = /^(none|table(?!-c[ea]).+)/,
    Xe = new RegExp("^(" + we + ")(.*)$", "i"),
    Ue = new RegExp("^([+-])=(" + we + ")", "i"),
    Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Ye = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    Ge = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t),
                u = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)),
                s = Z.cssHooks[t] || Z.cssHooks[a],
                void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i: u[t] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)),
            s = Z.cssHooks[t] || Z.cssHooks[a],
            s && "get" in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = w(e, t, r)),
            "normal" === i && t in Ye && (i = Ye[t]),
            "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }),
    Z.each(["height", "width"],
    function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve,
                function() {
                    return E(e, t, r)
                }) : E(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && _e(e);
                return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    Z.cssHooks.marginRight = T(Q.reliableMarginRight,
    function(e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        },
        w, [e, "marginRight"]) : void 0
    }),
    Z.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0,
                i = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        Be.test(e) || (Z.cssHooks[e + t].set = N)
    }),
    Z.fn.extend({
        css: function(e, t) {
            return me(this,
            function(e, t, n) {
                var r, i, o = {},
                s = 0;
                if (Z.isArray(t)) {
                    for (r = _e(e), i = t.length; i > s; s++) o[t[s]] = Z.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            },
            e, t, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ce(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }),
    Z.Tween = j,
    j.prototype = {
        constructor: j,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (Z.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = j.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : j.propHooks._default.set(this),
            this
        }
    },
    j.prototype.init.prototype = j.prototype,
    j.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    Z.fx = j.prototype.init,
    Z.fx.step = {};
    var Qe, Je, Ke = /^(?:toggle|show|hide)$/,
    Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
    et = /queueHooks$/,
    tt = [q],
    nt = {
        "*": [function(e, t) {
            var n = this.createTween(e, t),
            r = n.cur(),
            i = Ze.exec(t),
            o = i && i[3] || (Z.cssNumber[e] ? "": "px"),
            s = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
            a = 1,
            u = 20;
            if (s && s[3] !== o) {
                o = o || s[3],
                i = i || [],
                s = +r || 1;
                do a = a || ".5",
                s /= a,
                Z.style(n.elem, e, s + o);
                while (a !== (a = n.cur() / r) && 1 !== a && --u)
            }
            return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]),
            n
        }]
    };
    Z.Animation = Z.extend(O, {
        tweener: function(e, t) {
            Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0,
            i = e.length; i > r; r++) n = e[r],
            nt[n] = nt[n] || [],
            nt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? tt.unshift(e) : tt.push(e)
        }
    }),
    Z.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? Z.extend({},
        e) : {
            complete: n || !n && t || Z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Z.isFunction(t) && t
        };
        return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            Z.isFunction(r.old) && r.old.call(this),
            r.queue && Z.dequeue(this, r.queue)
        },
        r
    },
    Z.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Ce).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = Z.isEmptyObject(e),
            o = Z.speed(t, n, r),
            s = function() {
                var t = O(this, Z.extend({},
                e), o); (i || ve.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                i = null != e && e + "queueHooks",
                o = Z.timers,
                s = ve.get(this);
                if (i) s[i] && s[i].stop && r(s[i]);
                else for (i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1)); (t || !n) && Z.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = ve.get(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = Z.timers,
                s = r ? r.length: 0;
                for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    Z.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
        }
    }),
    Z.each({
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        Z.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    Z.timers = [],
    Z.fx.tick = function() {
        var e, t = 0,
        n = Z.timers;
        for (Qe = Z.now(); t < n.length; t++) e = n[t],
        e() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(),
        Qe = void 0
    },
    Z.fx.timer = function(e) {
        Z.timers.push(e),
        e() ? Z.fx.start() : Z.timers.pop()
    },
    Z.fx.interval = 13,
    Z.fx.start = function() {
        Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
    },
    Z.fx.stop = function() {
        clearInterval(Je),
        Je = null
    },
    Z.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    Z.fn.delay = function(e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e: e,
        t = t || "fx",
        this.queue(t,
        function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    },
    function() {
        var e = J.createElement("input"),
        t = J.createElement("select"),
        n = t.appendChild(J.createElement("option"));
        e.type = "checkbox",
        Q.checkOn = "" !== e.value,
        Q.optSelected = n.selected,
        t.disabled = !0,
        Q.optDisabled = !n.disabled,
        e = J.createElement("input"),
        e.value = "t",
        e.type = "radio",
        Q.radioValue = "t" === e.value
    } ();
    var rt, it, ot = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return me(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }),
    Z.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it: rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i: (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i: (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            o = t && t.match(de);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = Z.propFix[n] || n,
            Z.expr.match.bool.test(n) && (e[r] = !1),
            e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    it = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    Z.each(Z.expr.match.bool.source.match(/\w+/g),
    function(e, t) {
        var n = ot[t] || Z.find.attr;
        ot[t] = function(e, t, r) {
            var i, o;
            return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o),
            i
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return me(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }),
    Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(e),
            o && (t = Z.propFix[t] || t, i = Z.propHooks[t]),
            void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: e[t] = n: i && "get" in i && null !== (r = i.get(e, t)) ? r: e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex: -1
                }
            }
        }
    }),
    Q.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }
    }),
    Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e,
            u = 0,
            l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a) for (t = (e || "").match(de) || []; l > u; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                s = Z.trim(r),
                n.className !== s && (n.className = s)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
            u = 0,
            l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a) for (t = (e || "").match(de) || []; l > u; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                s = e ? Z.trim(r) : "",
                n.className !== s && (n.className = s)
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ?
            function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            }: function() {
                if ("string" === n) for (var t, r = 0,
                i = Z(this), o = e.match(de) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "": ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            n = 0,
            r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        }
    });
    var ut = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = Z.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "": "number" == typeof i ? i += "": Z.isArray(i) && (i = Z.map(i,
                function(e) {
                    return null == e ? "": e + ""
                })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n: (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "": n)) : void 0
        }
    }),
    Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t: Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type || 0 > i,
                    s = o ? null: [], a = o ? i + 1 : r.length, u = 0 > i ? a: o ? i: 0; a > u; u++) if (n = r[u], !(!n.selected && u !== i || (Q.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                        if (t = Z(n).val(), o) return t;
                        s.push(t)
                    }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options,
                    o = Z.makeArray(t), s = i.length; s--;) r = i[s],
                    (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    Z.each(["radio", "checkbox"],
    function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        },
        Q.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    }),
    Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var lt = Z.now(),
    ct = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    },
    Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser,
            t = n.parseFromString(e, "text/xml")
        } catch(r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e),
        t
    };
    var ft, pt, dt = /#.*$/,
    ht = /([?&])_=[^&]*/,
    gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    vt = /^(?:GET|HEAD)$/,
    yt = /^\/\//,
    xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    bt = {},
    wt = {},
    Tt = "*/".concat("*");
    try {
        pt = location.href
    } catch(Ct) {
        pt = J.createElement("a"),
        pt.href = "",
        pt = pt.href
    }
    ft = xt.exec(pt.toLowerCase()) || [],
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pt,
            type: "GET",
            isLocal: mt.test(ft[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Tt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? M(M(e, Z.ajaxSettings), t) : M(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(bt),
        ajaxTransport: F(wt),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var u, c, v, y, b, T = t;
                2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = R(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent": 304 === e ? T = "notmodified": (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess": "ajaxError", [w, f, u ? c: v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0),
            t = t || {};
            var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({},
            t),
            p = f.context || f,
            d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
            h = Z.Deferred(),
            g = Z.Callbacks("once memory"),
            m = f.statusCode || {},
            v = {},
            y = {},
            x = 0,
            b = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!s) for (s = {}; t = gt.exec(o);) s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? o: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = y[n] = y[n] || e, v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > x) for (t in e) m[t] = [m[t], e[t]];
                    else w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || b;
                    return r && r.abort(t),
                    n(0, t),
                    this
                }
            };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || pt) + "").replace(dt, "").replace(yt, ft[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = xt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === ft[1] && u[2] === ft[2] && (u[3] || ("http:" === u[1] ? "80": "443")) === (ft[3] || ("http:" === ft[1] ? "80": "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(bt, f, t, w), 2 === x) return w;
            l = f.global,
            l && 0 === Z.active++&&Z.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !vt.test(f.type),
            i = f.url,
            f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&": "?") + f.data, delete f.data), f.cache === !1 && (f.url = ht.test(i) ? i.replace(ht, "$1_=" + lt++) : i + (ct.test(i) ? "&": "?") + "_=" + lt++)),
            f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])),
            (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType),
            w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Tt + "; q=0.01": "") : f.accepts["*"]);
            for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            }) w[c](f[c]);
            if (r = P(wt, f, t, w)) {
                w.readyState = 1,
                l && d.trigger("ajaxSend", [w, f]),
                f.async && f.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                },
                f.timeout));
                try {
                    x = 1,
                    r.send(v, n)
                } catch(T) {
                    if (! (2 > x)) throw T;
                    n( - 1, T)
                }
            } else n( - 1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }),
    Z.each(["get", "post"],
    function(e, t) {
        Z[t] = function(e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0),
            Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }),
    Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(Z.isFunction(e) ?
            function(t) {
                Z(this).wrapInner(e.call(this, t))
            }: function() {
                var t = Z(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    },
    Z.expr.filters.visible = function(e) {
        return ! Z.expr.filters.hidden(e)
    };
    var Nt = /%20/g,
    kt = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, r = [],
        i = function(e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "": t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e,
        function() {
            i(this.name, this.value)
        });
        else for (n in e) $(n, e[n], t, i);
        return r.join("&").replace(Nt, "+")
    },
    Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && jt.test(this.nodeName) && !St.test(e) && (this.checked || !Ne.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null: Z.isArray(n) ? Z.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    }),
    Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch(e) {}
    };
    var Dt = 0,
    At = {},
    Lt = {
        0 : 200,
        1223 : 204
    },
    qt = Z.ajaxSettings.xhr();
    e.ActiveXObject && Z(e).on("unload",
    function() {
        for (var e in At) At[e]()
    }),
    Q.cors = !!qt && "withCredentials" in qt,
    Q.ajax = qt = !!qt,
    Z.ajaxTransport(function(e) {
        var t;
        return Q.cors || qt && !e.crossDomain ? {
            send: function(n, r) {
                var i, o = e.xhr(),
                s = ++Dt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete At[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Lt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        }: void 0, o.getAllResponseHeaders()))
                    }
                },
                o.onload = t(),
                o.onerror = t("error"),
                t = At[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch(a) {
                    if (t) throw a
                }
            },
            abort: function() {
                t && t()
            }
        }: void 0
    }),
    Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e),
                e
            }
        }
    }),
    Z.ajaxPrefilter("script",
    function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    Z.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }),
                    J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ht = [],
    Ot = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ht.pop() || Z.expando + "_" + lt++;
            return this[e] = !0,
            e
        }
    }),
    Z.ajaxPrefilter("json jsonp",
    function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Ot.test(t.url) ? "url": "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&": "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || Z.error(i + " was not called"),
            s[0]
        },
        t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        },
        r.always(function() {
            e[i] = o,
            t[i] && (t.jsonpCallback = n.jsonpCallback, Ht.push(i)),
            s && Z.isFunction(o) && o(s[0]),
            s = o = void 0
        }), "script") : void 0
    }),
    Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1),
        t = t || J;
        var r = se.exec(e),
        i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var Ft = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ft) return Ft.apply(this, arguments);
        var r, i, o, s = this,
        a = e.indexOf(" ");
        return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)),
        Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"),
        s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n &&
        function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }),
        this
    },
    Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers,
        function(t) {
            return e === t.elem
        }).length
    };
    var Pt = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = Z.css(e, "position"),
            f = Z(e),
            p = {};
            "static" === c && (e.style.position = "relative"),
            a = f.offset(),
            o = Z.css(e, "top"),
            u = Z.css(e, "left"),
            l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
            l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0),
            Z.isFunction(t) && (t = t.call(e, n, a)),
            null != t.top && (p.top = t.top - a.top + s),
            null != t.left && (p.left = t.left - a.left + i),
            "using" in t ? t.using.call(e, p) : f.css(p)
        }
    },
    Z.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
            i = {
                top: 0,
                left: 0
            },
            o = r && r.ownerDocument;
            return o ? (t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = B(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Pt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || Pt
            })
        }
    }),
    Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function(i) {
            return me(this,
            function(t, i, o) {
                var s = B(t);
                return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset: o, r ? o: e.pageYOffset) : t[i] = o)
            },
            t, i, arguments.length, null)
        }
    }),
    Z.each(["top", "left"],
    function(e, t) {
        Z.cssHooks[t] = T(Q.pixelPosition,
        function(e, n) {
            return n ? (n = w(e, t), Ie.test(n) ? Z(e).position()[t] + "px": n) : void 0
        })
    }),
    Z.each({
        Height: "height",
        Width: "width"
    },
    function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        },
        function(n, r) {
            Z.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                s = n || (r === !0 || i === !0 ? "margin": "border");
                return me(this,
                function(t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                },
                t, o ? r: void 0, o, null)
            }
        })
    }),
    Z.fn.size = function() {
        return this.length
    },
    Z.fn.andSelf = Z.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return Z
    });
    var Mt = e.jQuery,
    Rt = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Rt),
        t && e.jQuery === Z && (e.jQuery = Mt),
        Z
    },
    typeof t === ke && (e.jQuery = e.$ = Z),
    Z
}); !
function(t) {
    var i = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
    "function" == typeof define && define.amd ? define(["exports"],
    function(a) {
        i.Orienter = t(i, a)
    }) : "undefined" != typeof exports ? t(i, exports) : i.Orienter = t(i, {})
} (function(t, i) {
    function a(t, i) {
        for (var a in i) t[a] = i[a]
    }
    return i = function() {
        this.initialize.apply(this, arguments)
    },
    a(i.prototype, {
        lon: 0,
        lat: 0,
        direction: 0,
        fix: 0,
        os: "",
        initialize: function() {
            switch (this.lon = 0, this.lat = 0, this.direction = window.orientation || 0, this.direction) {
            case 0:
                this.fix = 0;
                break;
            case 90:
                this.fix = -270;
                break;
            case - 90 : this.fix = -90
            }
            navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? this.os = "ios": this.os = navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("Linux") ? "android": ""
        },
        init: function() {
            this._orient = this.orientHandler.bind(this),
            window.addEventListener("deviceorientation", this._orient, !1),
            this._change = this.changeHandler.bind(this),
            window.addEventListener("orientationchange", this._change, !1)
        },
        destroy: function() {
            window.removeEventListener("deviceorientation", this._orient, !1),
            window.removeEventListener("orientationchange", this._change, !1)
        },
        changeHandler: function(t) {
            this.direction = window.orientation
        },
        orientHandler: function(t) {
            switch (this.os) {
            case "ios":
                switch (this.direction) {
                case 0:
                    this.lon = t.alpha + t.gamma,
                    t.beta > 0 && (this.lat = t.beta - 90);
                    break;
                case 90:
                    t.gamma < 0 ? this.lon = t.alpha - 90 : this.lon = t.alpha - 270,
                    t.gamma > 0 ? this.lat = 90 - t.gamma: this.lat = -90 - t.gamma;
                    break;
                case - 90 : t.gamma < 0 ? this.lon = t.alpha - 90 : this.lon = t.alpha - 270,
                    t.gamma < 0 ? this.lat = 90 + t.gamma: this.lat = -90 + t.gamma
                }
                break;
            case "android":
                switch (this.direction) {
                case 0:
                    this.lon = t.alpha + t.gamma + 30,
                    t.gamma > 90 ? this.lat = 90 - t.beta: this.lat = t.beta - 90;
                    break;
                case 90:
                    this.lon = t.alpha - 230,
                    t.gamma > 0 ? this.lat = 270 - t.gamma: this.lat = -90 - t.gamma;
                    break;
                case - 90 : this.lon = t.alpha - 180,
                    this.lat = -90 + t.gamma
                }
            }
            this.lon += this.fix,
            this.lon %= 360,
            this.lon < 0 && (this.lon += 360),
            this.lon = Math.round(this.lon),
            this.lat = Math.round(this.lat),
            this.handler && this.handler.apply(this, [{
                a: Math.round(t.alpha),
                b: Math.round(t.beta),
                g: Math.round(t.gamma),
                lon: this.lon,
                lat: this.lat,
                dir: this.direction
            }])
        }
    }),
    i
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global: this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function(t, e, i) {
        var s = function(t) {
            var e, i = [],
            s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        },
        r = function(t, e, i) {
            var s, r, n = t.cycle;
            for (s in n) r = n[s],
            t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
            delete t.cycle
        },
        n = function(t, e, s) {
            i.call(this, t, e, s),
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._dirty = !0,
            this.render = n.prototype.render
        },
        a = 1e-10,
        o = i._internals,
        l = o.isSelector,
        h = o.isArray,
        _ = n.prototype = i.to({},
        .1, {}),
        u = [];
        n.version = "1.18.2",
        _.constructor = n,
        _.kill()._gc = !1,
        n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf,
        n.getTweensOf = i.getTweensOf,
        n.lagSmoothing = i.lagSmoothing,
        n.ticker = i.ticker,
        n.render = i.render,
        _.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            i.prototype.invalidate.call(this)
        },
        _.updateTo = function(t, e) {
            var s, r = this.ratio,
            n = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (s in t) this.vars[s] = t[s];
            if (this._initted || n) if (e) this._initted = !1,
            n && this.render(0, !0, !0);
            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var a = this._totalTime;
                this.render(0, !0, !1),
                this._initted = !1,
                this.render(a, !0, !1)
            } else if (this._initted = !1, this._init(), this._time > 0 || n) for (var o, l = 1 / (1 - r), h = this._firstPT; h;) o = h.s + h.c,
            h.c *= l,
            h.s = o - h.c,
            h = h._next;
            return this
        },
        _.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var s, r, n, l, h, _, u, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
            p = this._time,
            d = this._totalTime,
            m = this._cycle,
            g = this._duration,
            v = this._rawPrevTime;
            if (t >= f - 1e-7 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > v || 0 >= t && t >= -1e-7 || v === a && "isPause" !== this.data) && v !== t && (i = !0, v > a && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || v === t ? t: a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === g && v > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = c = !e || t || v === t ? t: a)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g: this._time < 0 && (this._time = 0)), this._easeType ? (h = this._time / g, _ = this._easeType, u = this._easePower, (1 === _ || 3 === _ && h >= .5) && (h = 1 - h), 3 === _ && (h *= 2), 1 === u ? h *= h: 2 === u ? h *= h * h: 3 === u ? h *= h * h * h: 4 === u && (h *= h * h * h * h), 1 === _ ? this.ratio = 1 - h: 2 === _ ? this.ratio = h: this._time / g < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)), p === this._time && !i && m === this._cycle) return void(d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p,
                this._totalTime = d,
                this._rawPrevTime = v,
                this._cycle = m,
                o.lazyTweens.push(this),
                void(this._lazy = [t, e]);
                this._time && !s ? this.ratio = this._ease.getRatio(this._time / g) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
            n = n._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || s) && this._callback("onUpdate")),
            this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
            r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === a && c !== a && (this._rawPrevTime = 0))
        },
        n.to = function(t, e, i) {
            return new n(t, e, i)
        },
        n.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new n(t, e, i)
        },
        n.fromTo = function(t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new n(t, e, s)
        },
        n.staggerTo = n.allTo = function(t, e, a, o, _, c, f) {
            o = o || 0;
            var p, d, m, g, v = 0,
            y = [],
            T = function() {
                a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments),
                _.apply(f || a.callbackScope || this, c || u)
            },
            x = a.cycle,
            w = a.startAt && a.startAt.cycle;
            for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t))), t = t || [], 0 > o && (t = s(t), t.reverse(), o *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                d = {};
                for (g in a) d[g] = a[g];
                if (x && r(d, t, m), w) {
                    w = d.startAt = {};
                    for (g in a.startAt) w[g] = a.startAt[g];
                    r(d.startAt, t, m)
                }
                d.delay = v + (d.delay || 0),
                m === p && _ && (d.onComplete = T),
                y[m] = new n(t[m], e, d),
                v += o
            }
            return y
        },
        n.staggerFrom = n.allFrom = function(t, e, i, s, r, a, o) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            n.staggerTo(t, e, i, s, r, a, o)
        },
        n.staggerFromTo = n.allFromTo = function(t, e, i, s, r, a, o, l) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            n.staggerTo(t, e, s, r, a, o, l)
        },
        n.delayedCall = function(t, e, i, s, r) {
            return new n(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        },
        n.set = function(t, e) {
            return new n(t, 0, e)
        },
        n.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var c = function(t, e) {
            for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n: (e && (s[r++] = n), s = s.concat(c(n, e)), r = s.length),
            n = n._next;
            return s
        },
        f = n.getAllTweens = function(e) {
            return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
        };
        n.killAll = function(t, i, s, r) {
            null == i && (i = !0),
            null == s && (s = !0);
            var n, a, o, l = f(0 != r),
            h = l.length,
            _ = i && s && r;
            for (o = 0; h > o; o++) a = l[o],
            (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        },
        n.killChildTweensOf = function(t, e) {
            if (null != t) {
                var r, a, _, u, c, f = o.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = s(t)), h(t)) for (u = t.length; --u > -1;) n.killChildTweensOf(t[u], e);
                else {
                    r = [];
                    for (_ in f) for (a = f[_].target.parentNode; a;) a === t && (r = r.concat(f[_].tweens)),
                    a = a.parentNode;
                    for (c = r.length, u = 0; c > u; u++) e && r[u].totalTime(r[u].totalDuration()),
                    r[u]._enabled(!1, !1)
                }
            }
        };
        var p = function(t, i, s, r) {
            i = i !== !1,
            s = s !== !1,
            r = r !== !1;
            for (var n, a, o = f(r), l = i && s && r, h = o.length; --h > -1;) a = o[h],
            (l || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
        };
        return n.pauseAll = function(t, e, i) {
            p(!0, t, e, i)
        },
        n.resumeAll = function(t, e, i) {
            p(!1, t, e, i)
        },
        n.globalTimeScale = function(e) {
            var s = t._rootTimeline,
            r = i.ticker.time;
            return arguments.length ? (e = e || a, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
        },
        _.progress = function(t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t: t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        },
        _.totalProgress = function(t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        },
        _.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        },
        _.duration = function(e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        },
        _.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this: this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        },
        _.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        },
        _.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        },
        _.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        },
        n
    },
    !0),
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function(t, e, i) {
        var s = function(t) {
            e.call(this, t),
            this._labels = {},
            this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
            this.smoothChildTiming = this.vars.smoothChildTiming === !0,
            this._sortChildren = !0,
            this._onUpdate = this.vars.onUpdate;
            var i, s, r = this.vars;
            for (s in r) i = r[s],
            l(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
            l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
        },
        r = 1e-10,
        n = i._internals,
        a = s._internals = {},
        o = n.isSelector,
        l = n.isArray,
        h = n.lazyTweens,
        _ = n.lazyRender,
        u = _gsScope._gsDefine.globals,
        c = function(t) {
            var e, i = {};
            for (e in t) i[e] = t[e];
            return i
        },
        f = function(t, e, i) {
            var s, r, n = t.cycle;
            for (s in n) r = n[s],
            t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
            delete t.cycle
        },
        p = a.pauseCallback = function() {},
        d = function(t) {
            var e, i = [],
            s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        },
        m = s.prototype = new e;
        return s.version = "1.18.2",
        m.constructor = s,
        m.kill()._gc = m._forcingPlayhead = m._hasPause = !1,
        m.to = function(t, e, s, r) {
            var n = s.repeat && u.TweenMax || i;
            return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
        },
        m.from = function(t, e, s, r) {
            return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r)
        },
        m.fromTo = function(t, e, s, r, n) {
            var a = r.repeat && u.TweenMax || i;
            return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
        },
        m.staggerTo = function(t, e, r, n, a, l, h, _) {
            var u, p, m = new s({
                onComplete: l,
                onCompleteParams: h,
                callbackScope: _,
                smoothChildTiming: this.smoothChildTiming
            }),
            g = r.cycle;
            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = d(t)), n = n || 0, 0 > n && (t = d(t), t.reverse(), n *= -1), p = 0; p < t.length; p++) u = c(r),
            u.startAt && (u.startAt = c(u.startAt), u.startAt.cycle && f(u.startAt, t, p)),
            g && f(u, t, p),
            m.to(t[p], e, u, p * n);
            return this.add(m, a)
        },
        m.staggerFrom = function(t, e, i, s, r, n, a, o) {
            return i.immediateRender = 0 != i.immediateRender,
            i.runBackwards = !0,
            this.staggerTo(t, e, i, s, r, n, a, o)
        },
        m.staggerFromTo = function(t, e, i, s, r, n, a, o, l) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            this.staggerTo(t, e, s, r, n, a, o, l)
        },
        m.call = function(t, e, s, r) {
            return this.add(i.delayedCall(0, t, e, s), r)
        },
        m.set = function(t, e, s) {
            return s = this._parseTimeOrLabel(s, 0, !0),
            null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused),
            this.add(new i(t, 0, e), s)
        },
        s.exportRoot = function(t, e) {
            t = t || {},
            null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r, n, a = new s(t),
            o = a._timeline;
            for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next,
            e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay),
            r = n;
            return o.add(a, 0),
            a
        },
        m.add = function(r, n, a, o) {
            var h, _, u, c, f, p;
            if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                if (r instanceof Array || r && r.push && l(r)) {
                    for (a = a || "normal", o = o || 0, h = n, _ = r.length, u = 0; _ > u; u++) l(c = r[u]) && (c = new s({
                        tweens: c
                    })),
                    this.add(c, h),
                    "string" != typeof c && "function" != typeof c && ("sequence" === a ? h = c._startTime + c.totalDuration() / c._timeScale: "start" === a && (c._startTime -= c.delay())),
                    h += o;
                    return this._uncache(!0)
                }
                if ("string" == typeof r) return this.addLabel(r, n);
                if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                r = i.delayedCall(0, r)
            }
            if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (f = this, p = f.rawTime() > r._startTime; f._timeline;) p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1),
            f = f._timeline;
            return this
        },
        m.remove = function(e) {
            if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline: t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime: i._time) - (e._reversed ? e.totalDuration() - e._totalTime: e._totalTime) / e._timeScale,
                this
            }
            if (e instanceof Array || e && e.push && l(e)) {
                for (var s = e.length; --s > -1;) this.remove(e[s]);
                return this
            }
            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        },
        m._remove = function(t, i) {
            e.prototype._remove.call(this, t, i);
            var s = this._last;
            return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        },
        m.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        },
        m.insert = m.insertMultiple = function(t, e, i, s) {
            return this.add(t, e || 0, i, s)
        },
        m.appendMultiple = function(t, e, i, s) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
        },
        m.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
            this
        },
        m.addPause = function(t, e, s, r) {
            var n = i.delayedCall(0, p, s, r || this);
            return n.vars.onComplete = n.vars.onReverseComplete = e,
            n.data = "isPause",
            this._hasPause = !0,
            this.add(n, t)
        },
        m.removeLabel = function(t) {
            return delete this._labels[t],
            this
        },
        m.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        },
        m._parseTimeOrLabel = function(e, i, s, r) {
            var n;
            if (r instanceof t && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || r.push && l(r))) for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
            if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
            else {
                if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i: i: this._labels[e] + i;
                i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)),
                e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
            }
            return Number(e) + i
        },
        m.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t: this._parseTimeOrLabel(t), e !== !1)
        },
        m.stop = function() {
            return this.paused(!0)
        },
        m.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        },
        m.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        },
        m.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, a, o, l, u, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
            p = this._time,
            d = this._startTime,
            m = this._timeScale,
            g = this._paused;
            if (t >= f - 1e-7) this._totalTime = this._time = f,
            this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))),
            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t: r,
            t = f + 1e-4;
            else if (1e-7 > t) if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1,
            this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0),
            this._rawPrevTime = t;
            else {
                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t: r, 0 === t && n) for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1),
                s = s._next;
                t = 0,
                this._initted || (l = !0)
            } else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (t >= p) for (s = this._first; s && s._startTime <= t && !u;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s),
                    s = s._next;
                    else for (s = this._last; s && s._startTime >= t && !u;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s),
                    s = s._prev;
                    u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== p && this._first || i || l || u) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), c = this._time, c >= p) for (s = this._first; s && (a = s._next, c === this._time && (!this._paused || g));)(s._active || s._startTime <= c && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                s = a;
                else for (s = this._last; s && (a = s._prev, c === this._time && (!this._paused || g));) {
                    if (s._active || s._startTime <= p && !s._paused && !s._gc) {
                        if (u === s) {
                            for (u = s._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale: (t - u._startTime) * u._timeScale, e, i),
                            u = u._prev;
                            u = null,
                            this.pause()
                        }
                        s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                    }
                    s = a
                }
                this._onUpdate && (e || (h.length && _(), this._callback("onUpdate"))),
                o && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (n && (h.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
            }
        },
        m._hasPausedChild = function() {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof s && t._hasPausedChild()) return ! 0;
                t = t._next
            }
            return ! 1
        },
        m.getChildren = function(t, e, s, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a;) a._startTime < r || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))),
            a = a._next;
            return n
        },
        m.getTweensOf = function(t, e) {
            var s, r, n = this._gc,
            a = [],
            o = 0;
            for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
            return n && this._enabled(!1, !0),
            a
        },
        m.recent = function() {
            return this._recent
        },
        m._contains = function(t) {
            for (var e = t.timeline; e;) {
                if (e === this) return ! 0;
                e = e.timeline
            }
            return ! 1
        },
        m.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var s, r = this._first,
            n = this._labels; r;) r._startTime >= i && (r._startTime += t),
            r = r._next;
            if (e) for (s in n) n[s] >= i && (n[s] += t);
            return this._uncache(!0)
        },
        m._kill = function(t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
            return r
        },
        m.clear = function(t) {
            var e = this.getChildren(!1, !0, !0),
            i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}),
            this._uncache(!0)
        },
        m.invalidate = function() {
            for (var e = this._first; e;) e.invalidate(),
            e = e._next;
            return t.prototype.invalidate.call(this)
        },
        m._enabled = function(t, i) {
            if (t === this._gc) for (var s = this._first; s;) s._enabled(t, !0),
            s = s._next;
            return e.prototype._enabled.call(this, t, i)
        },
        m.totalTime = function(e, i, s) {
            this._forcingPlayhead = !0;
            var r = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
            r
        },
        m.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        },
        m.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, s = 0,
                    r = this._last,
                    n = 999999999999; r;) e = r._prev,
                    r._dirty && r.totalDuration(),
                    r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime,
                    r._startTime < 0 && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren( - r._startTime, !1, -9999999999), n = 0),
                    i = r._startTime + r._totalDuration / r._timeScale,
                    i > s && (s = i),
                    r = e;
                    this._duration = this._totalDuration = s,
                    this._dirty = !1
                }
                return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
        },
        m.paused = function(e) {
            if (!e) for (var i = this._first,
            s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0),
            i = i._next;
            return t.prototype.paused.apply(this, arguments)
        },
        m.usesFrames = function() {
            for (var e = this._timeline; e._timeline;) e = e._timeline;
            return e === t._rootFramesTimeline
        },
        m.rawTime = function() {
            return this._paused ? this._totalTime: (this._timeline.rawTime() - this._startTime) * this._timeScale
        },
        s
    },
    !0),
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"],
    function(t, e, i) {
        var s = function(e) {
            t.call(this, e),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = this.vars.yoyo === !0,
            this._dirty = !0
        },
        r = 1e-10,
        n = e._internals,
        a = n.lazyTweens,
        o = n.lazyRender,
        l = new i(null, null, 1, 0),
        h = s.prototype = new t;
        return h.constructor = s,
        h.kill()._gc = !1,
        s.version = "1.18.2",
        h.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._uncache(!0),
            t.prototype.invalidate.call(this)
        },
        h.addCallback = function(t, i, s, r) {
            return this.add(e.delayedCall(0, t, s, r), i)
        },
        h.removeCallback = function(t, e) {
            if (t) if (null == e) this._kill(null, t);
            else for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
            return this
        },
        h.removePause = function(e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        },
        h.tweenTo = function(t, i) {
            i = i || {};
            var s, r, n, a = {
                ease: l,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (r in i) a[r] = i[r];
            return a.time = this._parseTimeOrLabel(t),
            s = Math.abs(Number(a.time) - this._time) / this._timeScale || .001,
            n = new e(this, s, a),
            a.onStart = function() {
                n.target.paused(!0),
                n.vars.time !== n.target.time() && s === n.duration() && n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale),
                i.onStart && n._callback("onStart")
            },
            n
        },
        h.tweenFromTo = function(t, e, i) {
            i = i || {},
            t = this._parseTimeOrLabel(t),
            i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            },
            i.immediateRender = i.immediateRender !== !1;
            var s = this.tweenTo(e, i);
            return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
        },
        h.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var s, n, l, h, _, u, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
            d = this._duration,
            m = this._time,
            g = this._totalTime,
            v = this._startTime,
            y = this._timeScale,
            T = this._rawPrevTime,
            x = this._paused,
            w = this._cycle;
            if (t >= p - 1e-7) this._locked || (this._totalTime = p, this._cycle = this._repeat),
            this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", _ = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > T || T === r) && T !== t && this._first && (_ = !0, T > r && (h = "onReverseComplete"))),
            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t: r,
            this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4);
            else if (1e-7 > t) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && T !== r && (T > 0 || 0 > t && T >= 0) && !this._locked) && (h = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1,
            this._timeline.autoRemoveChildren && this._reversed ? (_ = n = !0, h = "onReverseComplete") : T >= 0 && this._first && (_ = !0),
            this._rawPrevTime = t;
            else {
                if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t: r, 0 === t && n) for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1),
                s = s._next;
                t = 0,
                this._initted || (_ = !0)
            } else if (0 === d && 0 > T && (_ = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = d + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                if (t = this._time, t >= m) for (s = this._first; s && s._startTime <= t && !c;) s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (c = s),
                s = s._next;
                else for (s = this._last; s && s._startTime >= t && !c;) s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (c = s),
                s = s._prev;
                c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== w && !this._locked) {
                var b = this._yoyo && 0 !== (1 & w),
                P = b === (this._yoyo && 0 !== (1 & this._cycle)),
                S = this._totalTime,
                k = this._cycle,
                O = this._rawPrevTime,
                R = this._time;
                if (this._totalTime = w * d, this._cycle < w ? b = !b: this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? T - 1e-4: T, this._cycle = w, this._locked = !0, m = b ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), m !== this._time) return;
                if (P && (m = b ? d + 1e-4: -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !x) return;
                this._time = R,
                this._totalTime = S,
                this._cycle = k,
                this._rawPrevTime = O
            }
            if (! (this._time !== m && this._first || i || _ || c)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), f = this._time, f >= m) for (s = this._first; s && (l = s._next, f === this._time && (!this._paused || x));)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (c === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
            s = l;
            else for (s = this._last; s && (l = s._prev, f === this._time && (!this._paused || x));) {
                if (s._active || s._startTime <= m && !s._paused && !s._gc) {
                    if (c === s) {
                        for (c = s._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale: (t - c._startTime) * c._timeScale, e, i),
                        c = c._prev;
                        c = null,
                        this.pause()
                    }
                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)
                }
                s = l
            }
            this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))),
            h && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
        },
        h.getActive = function(t, e, i) {
            null == t && (t = !0),
            null == e && (e = !0),
            null == i && (i = !1);
            var s, r, n = [],
            a = this.getChildren(t, e, i),
            o = 0,
            l = a.length;
            for (s = 0; l > s; s++) r = a[s],
            r.isActive() && (n[o++] = r);
            return n
        },
        h.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(),
            s = i.length;
            for (e = 0; s > e; e++) if (i[e].time > t) return i[e].name;
            return null
        },
        h.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;) if (e[i].time < t) return e[i].name;
            return null
        },
        h.getLabelsArray = function() {
            var t, e = [],
            i = 0;
            for (t in this._labels) e[i++] = {
                time: this._labels[t],
                name: t
            };
            return e.sort(function(t, e) {
                return t.time - e.time
            }),
            e
        },
        h.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t: t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        },
        h.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        },
        h.totalDuration = function(e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this: (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        },
        h.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        },
        h.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        },
        h.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        },
        h.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        },
        h.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        },
        s
    },
    !0),
    function() {
        var t = 180 / Math.PI,
        e = [],
        i = [],
        s = [],
        r = {},
        n = _gsScope._gsDefine.globals,
        a = function(t, e, i, s) {
            this.a = t,
            this.b = e,
            this.c = i,
            this.d = s,
            this.da = s - t,
            this.ca = i - t,
            this.ba = e - t
        },
        o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        l = function(t, e, i, s) {
            var r = {
                a: t
            },
            n = {},
            a = {},
            o = {
                c: s
            },
            l = (t + e) / 2,
            h = (e + i) / 2,
            _ = (i + s) / 2,
            u = (l + h) / 2,
            c = (h + _) / 2,
            f = (c - u) / 8;
            return r.b = l + (t - l) / 4,
            n.b = u + f,
            r.c = n.a = (r.b + n.b) / 2,
            n.c = a.a = (u + c) / 2,
            a.b = c - f,
            o.b = _ + (s - _) / 4,
            a.c = o.a = (a.b + o.b) / 2,
            [r, n, a, o]
        },
        h = function(t, r, n, a, o) {
            var h, _, u, c, f, p, d, m, g, v, y, T, x, w = t.length - 1,
            b = 0,
            P = t[0].a;
            for (h = 0; w > h; h++) f = t[b],
            _ = f.a,
            u = f.d,
            c = t[b + 1].d,
            o ? (y = e[h], T = i[h], x = (T + y) * r * .25 / (a ? .5 : s[h] || .5), p = u - (u - _) * (a ? .5 * r: 0 !== y ? x / y: 0), d = u + (c - u) * (a ? .5 * r: 0 !== T ? x / T: 0), m = u - (p + ((d - p) * (3 * y / (y + T) + .5) / 4 || 0))) : (p = u - (u - _) * r * .5, d = u + (c - u) * r * .5, m = u - (p + d) / 2),
            p += m,
            d += m,
            f.c = g = p,
            0 !== h ? f.b = P: f.b = P = f.a + .6 * (f.c - f.a),
            f.da = u - _,
            f.ca = g - _,
            f.ba = P - _,
            n ? (v = l(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++,
            P = d;
            f = t[b],
            f.b = P,
            f.c = P + .4 * (f.d - P),
            f.da = f.d - f.a,
            f.ca = f.c - f.a,
            f.ba = P - f.a,
            n && (v = l(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
        },
        _ = function(t, s, r, n) {
            var o, l, h, _, u, c, f = [];
            if (n) for (t = [n].concat(t), l = t.length; --l > -1;)"string" == typeof(c = t[l][s]) && "=" === c.charAt(1) && (t[l][s] = n[s] + Number(c.charAt(0) + c.substr(2)));
            if (o = t.length - 2, 0 > o) return f[0] = new a(t[0][s], 0, 0, t[ - 1 > o ? 0 : 1][s]),
            f;
            for (l = 0; o > l; l++) h = t[l][s],
            _ = t[l + 1][s],
            f[l] = new a(h, 0, 0, _),
            r && (u = t[l + 2][s], e[l] = (e[l] || 0) + (_ - h) * (_ - h), i[l] = (i[l] || 0) + (u - _) * (u - _));
            return f[l] = new a(t[l][s], 0, 0, t[l + 1][s]),
            f
        },
        u = function(t, n, a, l, u, c) {
            var f, p, d, m, g, v, y, T, x = {},
            w = [],
            b = c || t[0];
            u = "string" == typeof u ? "," + u + ",": o,
            null == n && (n = 1);
            for (p in t[0]) w.push(p);
            if (t.length > 1) {
                for (T = t[t.length - 1], y = !0, f = w.length; --f > -1;) if (p = w[f], Math.abs(b[p] - T[p]) > .05) {
                    y = !1;
                    break
                }
                y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
            }
            for (e.length = i.length = s.length = 0, f = w.length; --f > -1;) p = w[f],
            r[p] = -1 !== u.indexOf("," + p + ","),
            x[p] = _(t, p, r[p], c);
            for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]),
            i[f] = Math.sqrt(i[f]);
            if (!l) {
                for (f = w.length; --f > -1;) if (r[p]) for (d = x[w[f]], v = d.length - 1, m = 0; v > m; m++) g = d[m + 1].da / i[m] + d[m].da / e[m],
                s[m] = (s[m] || 0) + g * g;
                for (f = s.length; --f > -1;) s[f] = Math.sqrt(s[f])
            }
            for (f = w.length, m = a ? 4 : 1; --f > -1;) p = w[f],
            d = x[p],
            h(d, n, a, l, r[p]),
            y && (d.splice(0, m), d.splice(d.length - m, m));
            return x
        },
        c = function(t, e, i) {
            e = e || "soft";
            var s, r, n, o, l, h, _, u, c, f, p, d = {},
            m = "cubic" === e ? 3 : 2,
            g = "soft" === e,
            v = [];
            if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
            for (c in t[0]) v.push(c);
            for (h = v.length; --h > -1;) {
                for (c = v[h], d[c] = l = [], f = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][c] : "string" == typeof(p = t[_][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p),
                g && _ > 1 && u - 1 > _ && (l[f++] = (s + l[f - 2]) / 2),
                l[f++] = s;
                for (u = f - m + 1, f = 0, _ = 0; u > _; _ += m) s = l[_],
                r = l[_ + 1],
                n = l[_ + 2],
                o = 2 === m ? 0 : l[_ + 3],
                l[f++] = p = 3 === m ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                l.length = f
            }
            return d
        },
        f = function(t, e, i) {
            for (var s, r, n, a, o, l, h, _, u, c, f, p = 1 / i,
            d = t.length; --d > -1;) for (c = t[d], n = c.a, a = c.d - n, o = c.c - n, l = c.b - n, s = r = 0, _ = 1; i >= _; _++) h = p * _,
            u = 1 - h,
            s = r - (r = (h * h * a + 3 * u * (h * o + u * l)) * h),
            f = d * i + _ - 1,
            e[f] = (e[f] || 0) + s * s
        },
        p = function(t, e) {
            e = e >> 0 || 6;
            var i, s, r, n, a = [],
            o = [],
            l = 0,
            h = 0,
            _ = e - 1,
            u = [],
            c = [];
            for (i in t) f(t[i], a, e);
            for (r = a.length, s = 0; r > s; s++) l += Math.sqrt(a[s]),
            n = s % e,
            c[n] = l,
            n === _ && (h += l, n = s / e >> 0, u[n] = c, o[n] = h, l = 0, c = []);
            return {
                length: h,
                lengths: o,
                segments: u
            }
        },
        d = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.4",
            API: 2,
            global: !0,
            init: function(t, e, i) {
                this._target = t,
                e instanceof Array && (e = {
                    values: e
                }),
                this._func = {},
                this._round = {},
                this._props = [],
                this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var s, r, n, a, o, l = e.values || [],
                h = {},
                _ = l[0],
                f = e.autoRotate || i.vars.orientToBezier;
                this._autoRotate = f ? f instanceof Array ? f: [["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]] : null;
                for (s in _) this._props.push(s);
                for (n = this._props.length; --n > -1;) s = this._props[n],
                this._overwriteProps.push(s),
                r = this._func[s] = "function" == typeof t[s],
                h[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s: "get" + s.substr(3)]() : parseFloat(t[s]),
                o || h[s] !== l[0][s] && (o = h);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(l, e.type, h), this._segCount = this._beziers[s].length, this._timeRes) {
                    var d = p(this._beziers, this._timeRes);
                    this._length = d.length,
                    this._lengths = d.lengths,
                    this._segments = d.segments,
                    this._l1 = this._li = this._s1 = this._si = 0,
                    this._l2 = this._lengths[0],
                    this._curSeg = this._segments[0],
                    this._s2 = this._curSeg[0],
                    this._prec = 1 / this._curSeg.length
                }
                if (f = this._autoRotate) for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                    for (a = 0; 3 > a; a++) s = f[n][a],
                    this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s: "get" + s.substr(3)];
                    s = f[n][2],
                    this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                }
                return this._startRatio = i.vars.runBackwards ? 1 : 0,
                !0
            },
            set: function(e) {
                var i, s, r, n, a, o, l, h, _, u, c = this._segCount,
                f = this._func,
                p = this._target,
                d = e !== this._startRatio;
                if (this._timeRes) {
                    if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && c - 1 > r) {
                        for (h = c - 1; h > r && (this._l2 = _[++r]) <= e;);
                        this._l1 = _[r - 1],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s2 = u[this._s1 = this._si = 0]
                    } else if (e < this._l1 && r > 0) {
                        for (; r > 0 && (this._l1 = _[--r]) >= e;);
                        0 === r && e < this._l1 ? this._l1 = 0 : r++,
                        this._l2 = _[r],
                        this._li = r,
                        this._curSeg = u = this._segments[r],
                        this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                        this._s2 = u[this._si]
                    }
                    if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < u.length - 1) {
                        for (h = u.length - 1; h > r && (this._s2 = u[++r]) <= e;);
                        this._s1 = u[r - 1],
                        this._si = r
                    } else if (e < this._s1 && r > 0) {
                        for (; r > 0 && (this._s1 = u[--r]) >= e;);
                        0 === r && e < this._s1 ? this._s1 = 0 : r++,
                        this._s2 = u[r],
                        this._si = r
                    }
                    o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                } else i = 0 > e ? 0 : e >= 1 ? c - 1 : c * e >> 0,
                o = (e - i * (1 / c)) * c;
                for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r],
                a = this._beziers[n][i],
                l = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a,
                this._round[n] && (l = Math.round(l)),
                f[n] ? p[n](l) : p[n] = l;
                if (this._autoRotate) {
                    var m, g, v, y, T, x, w, b = this._autoRotate;
                    for (r = b.length; --r > -1;) n = b[r][2],
                    x = b[r][3] || 0,
                    w = b[r][4] === !0 ? 1 : t,
                    a = this._beziers[b[r][0]],
                    m = this._beziers[b[r][1]],
                    a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = m.a + (m.b - m.a) * o, T = m.b + (m.c - m.b) * o, v += (T - v) * o, T += (m.c + (m.d - m.c) * o - T) * o, l = d ? Math.atan2(T - v, y - g) * w + x: this._initialRotations[r], f[n] ? p[n](l) : p[n] = l)
                }
            }
        }),
        m = d.prototype;
        d.bezierThrough = u,
        d.cubicToQuadratic = l,
        d._autoCSS = !0,
        d.quadraticToCubic = function(t, e, i) {
            return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        },
        d._cssRegister = function() {
            var t = n.CSSPlugin;
            if (t) {
                var e = t._internals,
                i = e._parseToProxy,
                s = e._setPluginRatio,
                r = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, n, a, o, l) {
                        e instanceof Array && (e = {
                            values: e
                        }),
                        l = new d;
                        var h, _, u, c = e.values,
                        f = c.length - 1,
                        p = [],
                        m = {};
                        if (0 > f) return o;
                        for (h = 0; f >= h; h++) u = i(t, c[h], a, o, l, f !== h),
                        p[h] = u.end;
                        for (_ in e) m[_] = e[_];
                        return m.values = p,
                        o = new r(t, "bezier", 0, 0, u.pt, 2),
                        o.data = u,
                        o.plugin = l,
                        o.setRatio = s,
                        0 === m.autoRotate && (m.autoRotate = !0),
                        !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x && [["x", "y", "rotation", h, !1]]),
                        m.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform),
                        l._onInitTween(u.proxy, m, a._tween),
                        o
                    }
                })
            }
        },
        m._roundProps = function(t, e) {
            for (var i = this._overwriteProps,
            s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
        },
        m._kill = function(t) {
            var e, i, s = this._props;
            for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    } (),
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"],
    function(t, e) {
        var i, s, r, n, a = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = a.prototype.setRatio
        },
        o = _gsScope._gsDefine.globals,
        l = {},
        h = a.prototype = new t("css");
        h.constructor = a,
        a.version = "1.18.2",
        a.API = 2,
        a.defaultTransformPerspective = 0,
        a.defaultSkewType = "compensated",
        a.defaultSmoothOrigin = !0,
        h = "px",
        a.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h,
            lineHeight: ""
        };
        var _, u, c, f, p, d, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
        g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        T = /(?:\d|\-|\+|=|#|\.)*/g,
        x = /opacity *= *([^)]*)/i,
        w = /opacity:([^;]*)/i,
        b = /alpha\(opacity *=.+?\)/i,
        P = /^(rgb|hsl)/,
        S = /([A-Z])/g,
        k = /-([a-z])/gi,
        O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        R = function(t, e) {
            return e.toUpperCase()
        },
        A = /(?:Left|Right|Width)/i,
        C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        M = /,(?=[^\)]*(?:\(|$))/gi,
        z = Math.PI / 180,
        F = 180 / Math.PI,
        X = {},
        I = document,
        E = function(t) {
            return I.createElementNS ? I.createElementNS("http://www.w3.org/1999/xhtml", t) : I.createElement(t)
        },
        N = E("div"),
        L = E("img"),
        Y = a._internals = {
            _specialProps: l
        },
        B = navigator.userAgent,
        j = function() {
            var t = B.indexOf("Android"),
            e = E("a");
            return c = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && ( - 1 === t || Number(B.substr(t + 8, 1)) > 3),
            p = c && Number(B.substr(B.indexOf("Version/") + 8, 1)) < 6,
            f = -1 !== B.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(B)) && (d = parseFloat(RegExp.$1)),
            !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
        } (),
        U = function(t) {
            return x.test("string" == typeof t ? t: (t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        },
        V = function(t) {
            window.console && console.log(t)
        },
        q = "",
        W = "",
        Z = function(t, e) {
            e = e || N;
            var i, s, r = e.style;
            if (void 0 !== r[t]) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
            return s >= 0 ? (W = 3 === s ? "ms": i[s], q = "-" + W.toLowerCase() + "-", W + t) : null
        },
        $ = I.defaultView ? I.defaultView.getComputedStyle: function() {},
        Q = a.getStyle = function(t, e, i, s, r) {
            var n;
            return j || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || $(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n: r) : U(t)
        },
        G = Y.convertToPixels = function(t, i, s, r, n) {
            if ("px" === r || !r) return s;
            if ("auto" === r || !s) return 0;
            var o, l, h, _ = A.test(i),
            u = t,
            c = N.style,
            f = 0 > s;
            if (f && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth: t.clientHeight);
            else {
                if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) c[_ ? "borderLeftWidth": "borderTopWidth"] = s + r;
                else {
                    if (u = t.parentNode || I.body, l = u._gsCache, h = e.ticker.frame, l && _ && l.time === h) return l.width * s / 100;
                    c[_ ? "width": "height"] = s + r
                }
                u.appendChild(N),
                o = parseFloat(N[_ ? "offsetWidth": "offsetHeight"]),
                u.removeChild(N),
                _ && "%" === r && a.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {},
                l.time = h, l.width = o / s * 100),
                0 !== o || n || (o = G(t, i, s, r, !0))
            }
            return f ? -o: o
        },
        H = Y.calculateOffset = function(t, e, i) {
            if ("absolute" !== Q(t, "position", i)) return 0;
            var s = "left" === e ? "Left": "Top",
            r = Q(t, "margin" + s, i);
            return t["offset" + s] - (G(t, e, parseFloat(r), r.replace(T, "")) || 0)
        },
        K = function(t, e) {
            var i, s, r, n = {};
            if (e = e || $(t, null)) if (i = e.length) for (; --i > -1;) r = e[i],
            ( - 1 === r.indexOf("-transform") || St === r) && (n[r.replace(k, R)] = e.getPropertyValue(r));
            else for (i in e)( - 1 === i.indexOf("Transform") || Pt === i) && (n[i] = e[i]);
            else if (e = t.currentStyle || t.style) for (i in e)"string" == typeof i && void 0 === n[i] && (n[i.replace(k, R)] = e[i]);
            return j || (n.opacity = U(t)),
            s = Et(t, e, !1),
            n.rotation = s.rotation,
            n.skewX = s.skewX,
            n.scaleX = s.scaleX,
            n.scaleY = s.scaleY,
            n.x = s.x,
            n.y = s.y,
            Ot && (n.z = s.z, n.rotationX = s.rotationX, n.rotationY = s.rotationY, n.scaleZ = s.scaleZ),
            n.filters && delete n.filters,
            n
        },
        J = function(t, e, i, s, r) {
            var n, a, o, l = {},
            h = t.style;
            for (a in i)"cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n: 0 : H(t, a), void 0 !== h[a] && (o = new pt(h, a, h[a], o)));
            if (s) for (a in s)"className" !== a && (l[a] = s[a]);
            return {
                difs: l,
                firstMPT: o
            }
        },
        tt = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        },
        et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        it = function(t, e, i) {
            var s = parseFloat("width" === e ? t.offsetWidth: t.offsetHeight),
            r = tt[e],
            n = r.length;
            for (i = i || $(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0,
            s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
            return s
        },
        st = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t) return t + " "; (null == t || "" === t) && (t = "0 0");
            var i = t.split(" "),
            s = -1 !== t.indexOf("left") ? "0%": -1 !== t.indexOf("right") ? "100%": i[0],
            r = -1 !== t.indexOf("top") ? "0%": -1 !== t.indexOf("bottom") ? "100%": i[1];
            return null == r ? r = "center" === s ? "50%": "0": "center" === r && (r = "50%"),
            ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"),
            t = s + " " + r + (i.length > 2 ? " " + i[2] : ""),
            e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t),
            e || t
        },
        rt = function(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        },
        nt = function(t, e) {
            return null == t ? e: "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e: parseFloat(t)
        },
        at = function(t, e, i, s) {
            var r, n, a, o, l, h = 1e-6;
            return null == t ? o = e: "number" == typeof t ? o = t: (r = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * ( - 1 === t.indexOf("rad") ? 1 : F) - (l ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r: a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (a / r | 0) * r: -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), o = e + a),
            h > o && o > -h && (o = 0),
            o
        },
        ot = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        lt = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
            255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i: 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        ht = a.parseColor = function(t, e) {
            var i, s, r, n, a, o, l, h, _, u, c;
            if (t) if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
            else {
                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t]) i = ot[t];
                else if ("#" === t.charAt(0)) 4 === t.length && (s = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + s + s + r + r + n + n),
                t = parseInt(t.substr(1), 16),
                i = [t >> 16, t >> 8 & 255, 255 & t];
                else if ("hsl" === t.substr(0, 3)) if (i = c = t.match(m), e) {
                    if ( - 1 !== t.indexOf("=")) return t.match(g)
                } else a = Number(i[0]) % 360 / 360,
                o = Number(i[1]) / 100,
                l = Number(i[2]) / 100,
                r = .5 >= l ? l * (o + 1) : l + o - l * o,
                s = 2 * l - r,
                i.length > 3 && (i[3] = Number(t[3])),
                i[0] = lt(a + 1 / 3, s, r),
                i[1] = lt(a, s, r),
                i[2] = lt(a - 1 / 3, s, r);
                else i = t.match(m) || ot.transparent;
                i[0] = Number(i[0]),
                i[1] = Number(i[1]),
                i[2] = Number(i[2]),
                i.length > 3 && (i[3] = Number(i[3]))
            } else i = ot.black;
            return e && !c && (s = i[0] / 255, r = i[1] / 255, n = i[2] / 255, h = Math.max(s, r, n), _ = Math.min(s, r, n), l = (h + _) / 2, h === _ ? a = o = 0 : (u = h - _, o = l > .5 ? u / (2 - h - _) : u / (h + _), a = h === s ? (r - n) / u + (n > r ? 6 : 0) : h === r ? (n - s) / u + 2 : (s - r) / u + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0),
            i
        },
        _t = function(t, e) {
            var i, s, r, n = t.match(ut) || [],
            a = 0,
            o = n.length ? "": t;
            for (i = 0; i < n.length; i++) s = n[i],
            r = t.substr(a, t.indexOf(s, a) - a),
            a += r.length + s.length,
            s = ht(s, e),
            3 === s.length && s.push(1),
            o += r + (e ? "hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] : "rgba(" + s.join(",")) + ")";
            return o
        },
        ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (h in ot) ut += "|" + h + "\\b";
        ut = new RegExp(ut + ")", "gi"),
        a.colorStringFilter = function(t) {
            var e, i = t[0] + t[1];
            ut.lastIndex = 0,
            ut.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = _t(t[0], e), t[1] = _t(t[1], e))
        },
        e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
        var ct = function(t, e, i, s) {
            if (null == t) return function(t) {
                return t
            };
            var r, n = e ? (t.match(ut) || [""])[0] : "",
            a = t.split(n).join("").match(v) || [],
            o = t.substr(0, t.indexOf(a[0])),
            l = ")" === t.charAt(t.length - 1) ? ")": "",
            h = -1 !== t.indexOf(" ") ? " ": ",",
            _ = a.length,
            u = _ > 0 ? a[0].replace(m, "") : "";
            return _ ? r = e ?
            function(t) {
                var e, c, f, p;
                if ("number" == typeof t) t += u;
                else if (s && M.test(t)) {
                    for (p = t.replace(M, "|").split("|"), f = 0; f < p.length; f++) p[f] = r(p[f]);
                    return p.join(",")
                }
                if (e = (t.match(ut) || [n])[0], c = t.split(e).join("").match(v) || [], f = c.length, _ > f--) for (; ++f < _;) c[f] = i ? c[(f - 1) / 2 | 0] : a[f];
                return o + c.join(h) + h + e + l + ( - 1 !== t.indexOf("inset") ? " inset": "")
            }: function(t) {
                var e, n, c;
                if ("number" == typeof t) t += u;
                else if (s && M.test(t)) {
                    for (n = t.replace(M, "|").split("|"), c = 0; c < n.length; c++) n[c] = r(n[c]);
                    return n.join(",")
                }
                if (e = t.match(v) || [], c = e.length, _ > c--) for (; ++c < _;) e[c] = i ? e[(c - 1) / 2 | 0] : a[c];
                return o + e.join(h) + l
            }: function(t) {
                return t
            }
        },
        ft = function(t) {
            return t = t.split(","),
            function(e, i, s, r, n, a, o) {
                var l, h = (i + "").split(" ");
                for (o = {},
                l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                return r.parse(e, o, n, a)
            }
        },
        pt = (Y._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, s, r, n, a = this.data,
            o = a.proxy,
            l = a.firstMPT,
            h = 1e-6; l;) e = o[l.v],
            l.r ? e = Math.round(e) : h > e && e > -h && (e = 0),
            l.t[l.p] = e,
            l = l._next;
            if (a.autoRotate && (a.autoRotate.rotation = o.rotation), 1 === t || 0 === t) for (l = a.firstMPT, n = 1 === t ? "e": "b"; l;) {
                if (i = l.t, i.type) {
                    if (1 === i.type) {
                        for (r = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                        i[n] = r
                    }
                } else i[n] = i.s + i.xs0;
                l = l._next
            }
        },
        function(t, e, i, s, r) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = r,
            s && (s._prev = this, this._next = s)
        }),
        dt = (Y._parseToProxy = function(t, e, i, s, r, n) {
            var a, o, l, h, _, u = s,
            c = {},
            f = {},
            p = i._transform,
            d = X;
            for (i._transform = null, X = e, s = _ = i.parse(t, e, s, r), X = d, n && (i._transform = p, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                if (s.type <= 1 && (o = s.p, f[o] = s.s + s.c, c[o] = s.s, n || (h = new pt(s, "s", o, h, s.r), s.c = 0), 1 === s.type)) for (a = s.l; --a > 0;) l = "xn" + a,
                o = s.p + "_" + l,
                f[o] = s.data[l],
                c[o] = s[l],
                n || (h = new pt(s, l, o, h, s.rxp[l]));
                s = s._next
            }
            return {
                proxy: c,
                end: f,
                firstMPT: h,
                pt: _
            }
        },
        Y.CSSPropTween = function(t, e, s, r, a, o, l, h, _, u, c) {
            this.t = t,
            this.p = e,
            this.s = s,
            this.c = r,
            this.n = l || e,
            t instanceof dt || n.push(this.n),
            this.r = h,
            this.type = o || 0,
            _ && (this.pr = _, i = !0),
            this.b = void 0 === u ? s: u,
            this.e = void 0 === c ? s + r: c,
            a && (this._next = a, a._prev = this)
        }),
        mt = function(t, e, i, s, r, n) {
            var a = new dt(t, e, i, s - i, r, ( - 1), n);
            return a.b = i,
            a.e = a.xs0 = s,
            a
        },
        gt = a.parseComplex = function(t, e, i, s, r, n, a, o, l, h) {
            i = i || n || "",
            a = new dt(t, e, 0, 0, a, h ? 2 : 1, null, (!1), o, i, s),
            s += "";
            var u, c, f, p, d, v, y, T, x, w, b, P, S, k = i.split(", ").join(",").split(" "),
            O = s.split(", ").join(",").split(" "),
            R = k.length,
            A = _ !== !1;
            for (( - 1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(M, ", ").split(" "), O = O.join(" ").replace(M, ", ").split(" "), R = k.length), R !== O.length && (k = (n || "").split(" "), R = k.length), a.plugin = l, a.setRatio = h, ut.lastIndex = 0, u = 0; R > u; u++) if (p = k[u], d = O[u], T = parseFloat(p), T || 0 === T) a.appendXtra("", T, rt(d, T), d.replace(g, ""), A && -1 !== d.indexOf("px"), !0);
            else if (r && ut.test(p)) P = "," === d.charAt(d.length - 1) ? "),": ")",
            S = -1 !== d.indexOf("hsl") && j,
            p = ht(p, S),
            d = ht(d, S),
            x = p.length + d.length > 6,
            x && !j && 0 === d[3] ? (a["xs" + a.l] += a.l ? " transparent": "transparent", a.e = a.e.split(O[u]).join("transparent")) : (j || (x = !1), S ? a.appendXtra(x ? "hsla(": "hsl(", p[0], rt(d[0], p[0]), ",", !1, !0).appendXtra("", p[1], rt(d[1], p[1]), "%,", !1).appendXtra("", p[2], rt(d[2], p[2]), x ? "%,": "%" + P, !1) : a.appendXtra(x ? "rgba(": "rgb(", p[0], d[0] - p[0], ",", !0, !0).appendXtra("", p[1], d[1] - p[1], ",", !0).appendXtra("", p[2], d[2] - p[2], x ? ",": P, !0), x && (p = p.length < 4 ? 1 : p[3], a.appendXtra("", p, (d.length < 4 ? 1 : d[3]) - p, P, !1))),
            ut.lastIndex = 0;
            else if (v = p.match(m)) {
                if (y = d.match(g), !y || y.length !== v.length) return a;
                for (f = 0, c = 0; c < v.length; c++) b = v[c],
                w = p.indexOf(b, f),
                a.appendXtra(p.substr(f, w - f), Number(b), rt(y[c], b), "", A && "px" === p.substr(w + b.length, 2), 0 === c),
                f = w + b.length;
                a["xs" + a.l] += p.substr(f)
            } else a["xs" + a.l] += a.l ? " " + d: d;
            if ( - 1 !== s.indexOf("=") && a.data) {
                for (P = a.xs0 + a.data.s, u = 1; u < a.l; u++) P += a["xs" + u] + a.data["xn" + u];
                a.e = P + a["xs" + u]
            }
            return a.l || (a.type = -1, a.xs0 = a.e),
            a.xfirst || a
        },
        vt = 9;
        for (h = dt.prototype, h.l = h.pr = 0; --vt > 0;) h["xn" + vt] = 0,
        h["xs" + vt] = "";
        h.xs0 = "",
        h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null,
        h.appendXtra = function(t, e, i, s, r, n) {
            var a = this,
            o = a.l;
            return a["xs" + o] += n && o ? " " + t: t || "",
            i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new dt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                s: e + i
            },
            a.rxp = {},
            a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
        };
        var yt = function(t, e) {
            e = e || {},
            this.p = e.prefix ? Z(t) || t: t,
            l[t] = l[this.p] = this,
            this.format = e.formatter || ct(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        },
        Tt = Y._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var s, r, n = t.split(","),
            a = e.defaultValue;
            for (i = i || [a], s = 0; s < n.length; s++) e.prefix = 0 === s && e.prefix,
            e.defaultValue = i[s] || a,
            r = new yt(n[s], e)
        },
        xt = function(t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                Tt(t, {
                    parser: function(t, i, s, r, n, a, h) {
                        var _ = o.com.greensock.plugins[e];
                        return _ ? (_._cssRegister(), l[s].parse(t, i, s, r, n, a, h)) : (V("Error: " + e + " js file not loaded."), n)
                    }
                })
            }
        };
        h = yt.prototype,
        h.parseComplex = function(t, e, i, s, r, n) {
            var a, o, l, h, _, u, c = this.keyword;
            if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : c && (o = [e], l = [i])), l) {
                for (h = l.length > o.length ? l.length: o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt,
                i = l[a] = l[a] || this.dflt,
                c && (_ = e.indexOf(c), u = i.indexOf(c), _ !== u && ( - 1 === u ? o[a] = o[a].split(c).join("") : -1 === _ && (o[a] += " " + c)));
                e = o.join(", "),
                i = l.join(", ")
            }
            return gt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
        },
        h.parse = function(t, e, i, s, n, a, o) {
            return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
        },
        a.registerSpecialProp = function(t, e, i) {
            Tt(t, {
                parser: function(t, s, r, n, a, o, l) {
                    var h = new dt(t, r, 0, 0, a, 2, r, (!1), i);
                    return h.plugin = o,
                    h.setRatio = e(t, s, n._tween, r),
                    h
                },
                priority: i
            })
        },
        a.useSVGTransformAttr = c || f;
        var wt, bt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        Pt = Z("transform"),
        St = q + "transform",
        kt = Z("transformOrigin"),
        Ot = null !== Z("perspective"),
        Rt = Y.Transform = function() {
            this.perspective = parseFloat(a.defaultTransformPerspective) || 0,
            this.force3D = !(a.defaultForce3D === !1 || !Ot) && (a.defaultForce3D || "auto")
        },
        At = window.SVGElement,
        Ct = function(t, e, i) {
            var s, r = I.createElementNS("http://www.w3.org/2000/svg", t),
            n = /([a-z])([A-Z])/g;
            for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
            return e.appendChild(r),
            r
        },
        Dt = I.documentElement,
        Mt = function() {
            var t, e, i, s = d || /Android/i.test(B) && !window.chrome;
            return I.createElementNS && !s && (t = Ct("svg", Dt), e = Ct("rect", t, {
                width: 100,
                height: 50,
                x: 100
            }), i = e.getBoundingClientRect().width, e.style[kt] = "50% 50%", e.style[Pt] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(f && Ot), Dt.removeChild(t)),
            s
        } (),
        zt = function(t, e, i, s, r) {
            var n, o, l, h, _, u, c, f, p, d, m, g, v, y, T = t._gsTransform,
            x = It(t, !0);
            T && (v = T.xOrigin, y = T.yOrigin),
            (!s || (n = s.split(" ")).length < 2) && (c = t.getBBox(), e = st(e).split(" "), n = [( - 1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width: parseFloat(e[0])) + c.x, ( - 1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height: parseFloat(e[1])) + c.y]),
            i.xOrigin = h = parseFloat(n[0]),
            i.yOrigin = _ = parseFloat(n[1]),
            s && x !== Xt && (u = x[0], c = x[1], f = x[2], p = x[3], d = x[4], m = x[5], g = u * p - c * f, o = h * (p / g) + _ * ( - f / g) + (f * m - p * d) / g, l = h * ( - c / g) + _ * (u / g) - (u * m - c * d) / g, h = i.xOrigin = n[0] = o, _ = i.yOrigin = n[1] = l),
            T && (r || r !== !1 && a.defaultSmoothOrigin !== !1 ? (o = h - v, l = _ - y, T.xOffset += o * x[0] + l * x[2] - o, T.yOffset += o * x[1] + l * x[3] - l) : T.xOffset = T.yOffset = 0),
            t.setAttribute("data-svg-origin", n.join(" "))
        },
        Ft = function(t) {
            return !! (At && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
        },
        Xt = [1, 0, 0, 1, 0, 0],
        It = function(t, e) {
            var i, s, r, n, a, o = t._gsTransform || new Rt,
            l = 1e5;
            if (Pt ? s = Q(t, St, null, !0) : t.currentStyle && (s = t.currentStyle.filter.match(C), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s, (o.svg || t.getBBox && Ft(t)) && (i && -1 !== (t.style[Pt] + "").indexOf("matrix") && (s = t.style[Pt], i = 0), r = t.getAttribute("transform"), i && r && ( - 1 !== r.indexOf("matrix") ? (s = r, i = 0) : -1 !== r.indexOf("translate") && (s = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Xt;
            for (r = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], vt = r.length; --vt > -1;) n = Number(r[vt]),
            r[vt] = (a = n - (n |= 0)) ? (a * l + (0 > a ? -.5 : .5) | 0) / l + n: n;
            return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
        },
        Et = Y.getTransform = function(t, i, s, n) {
            if (t._gsTransform && s && !n) return t._gsTransform;
            var o, l, h, _, u, c, f = s ? t._gsTransform || new Rt: new Rt,
            p = f.scaleX < 0,
            d = 2e-5,
            m = 1e5,
            g = Ot ? parseFloat(Q(t, kt, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
            v = parseFloat(a.defaultTransformPerspective) || 0;
            if (f.svg = !(!t.getBBox || !Ft(t)), f.svg && (zt(t, Q(t, kt, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), wt = a.useSVGTransformAttr || Mt), o = It(t), o !== Xt) {
                if (16 === o.length) {
                    var y, T, x, w, b, P = o[0],
                    S = o[1],
                    k = o[2],
                    O = o[3],
                    R = o[4],
                    A = o[5],
                    C = o[6],
                    D = o[7],
                    M = o[8],
                    z = o[9],
                    X = o[10],
                    I = o[12],
                    E = o[13],
                    N = o[14],
                    L = o[11],
                    Y = Math.atan2(C, X);
                    f.zOrigin && (N = -f.zOrigin, I = M * N - o[12], E = z * N - o[13], N = X * N + f.zOrigin - o[14]),
                    f.rotationX = Y * F,
                    Y && (w = Math.cos( - Y), b = Math.sin( - Y), y = R * w + M * b, T = A * w + z * b, x = C * w + X * b, M = R * -b + M * w, z = A * -b + z * w, X = C * -b + X * w, L = D * -b + L * w, R = y, A = T, C = x),
                    Y = Math.atan2( - k, X),
                    f.rotationY = Y * F,
                    Y && (w = Math.cos( - Y), b = Math.sin( - Y), y = P * w - M * b, T = S * w - z * b, x = k * w - X * b, z = S * b + z * w, X = k * b + X * w, L = O * b + L * w, P = y, S = T, k = x),
                    Y = Math.atan2(S, P),
                    f.rotation = Y * F,
                    Y && (w = Math.cos( - Y), b = Math.sin( - Y), P = P * w + R * b, T = S * w + A * b, A = S * -b + A * w, C = k * -b + C * w, S = T),
                    f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY),
                    f.scaleX = (Math.sqrt(P * P + S * S) * m + .5 | 0) / m,
                    f.scaleY = (Math.sqrt(A * A + z * z) * m + .5 | 0) / m,
                    f.scaleZ = (Math.sqrt(C * C + X * X) * m + .5 | 0) / m,
                    f.skewX = 0,
                    f.perspective = L ? 1 / (0 > L ? -L: L) : 0,
                    f.x = I,
                    f.y = E,
                    f.z = N,
                    f.svg && (f.x -= f.xOrigin - (f.xOrigin * P - f.yOrigin * R), f.y -= f.yOrigin - (f.yOrigin * S - f.xOrigin * A))
                } else if ((!Ot || n || !o.length || f.x !== o[4] || f.y !== o[5] || !f.rotationX && !f.rotationY) && (void 0 === f.x || "none" !== Q(t, "display", i))) {
                    var B = o.length >= 6,
                    j = B ? o[0] : 1,
                    U = o[1] || 0,
                    V = o[2] || 0,
                    q = B ? o[3] : 1;
                    f.x = o[4] || 0,
                    f.y = o[5] || 0,
                    h = Math.sqrt(j * j + U * U),
                    _ = Math.sqrt(q * q + V * V),
                    u = j || U ? Math.atan2(U, j) * F: f.rotation || 0,
                    c = V || q ? Math.atan2(V, q) * F + u: f.skewX || 0,
                    Math.abs(c) > 90 && Math.abs(c) < 270 && (p ? (h *= -1, c += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (_ *= -1, c += 0 >= c ? 180 : -180)),
                    f.scaleX = h,
                    f.scaleY = _,
                    f.rotation = u,
                    f.skewX = c,
                    Ot && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1),
                    f.svg && (f.x -= f.xOrigin - (f.xOrigin * j + f.yOrigin * V), f.y -= f.yOrigin - (f.xOrigin * U + f.yOrigin * q))
                }
                f.zOrigin = g;
                for (l in f) f[l] < d && f[l] > -d && (f[l] = 0)
            }
            return s && (t._gsTransform = f, f.svg && (wt && t.style[Pt] ? e.delayedCall(.001,
            function() {
                Bt(t.style, Pt)
            }) : !wt && t.getAttribute("transform") && e.delayedCall(.001,
            function() {
                t.removeAttribute("transform")
            }))),
            f
        },
        Nt = function(t) {
            var e, i, s = this.data,
            r = -s.rotation * z,
            n = r + s.skewX * z,
            a = 1e5,
            o = (Math.cos(r) * s.scaleX * a | 0) / a,
            l = (Math.sin(r) * s.scaleX * a | 0) / a,
            h = (Math.sin(n) * -s.scaleY * a | 0) / a,
            _ = (Math.cos(n) * s.scaleY * a | 0) / a,
            u = this.t.style,
            c = this.t.currentStyle;
            if (c) {
                i = l,
                l = -h,
                h = -i,
                e = c.filter,
                u.filter = "";
                var f, p, m = this.t.offsetWidth,
                g = this.t.offsetHeight,
                v = "absolute" !== c.position,
                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + _,
                w = s.x + m * s.xPercent / 100,
                b = s.y + g * s.yPercent / 100;
                if (null != s.ox && (f = (s.oxp ? m * s.ox * .01 : s.ox) - m / 2, p = (s.oyp ? g * s.oy * .01 : s.oy) - g / 2, w += f - (f * o + p * l), b += p - (f * h + p * _)), v ? (f = m / 2, p = g / 2, y += ", Dx=" + (f - (f * o + p * l) + w) + ", Dy=" + (p - (f * h + p * _) + b) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(D, y) : u.filter = y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                    var P, S, k, O = 8 > d ? 1 : -1;
                    for (f = s.ieOffsetX || 0, p = s.ieOffsetY || 0, s.ieOffsetX = Math.round((m - ((0 > o ? -o: o) * m + (0 > l ? -l: l) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > _ ? -_: _) * g + (0 > h ? -h: h) * m)) / 2 + b), vt = 0; 4 > vt; vt++) S = et[vt],
                    P = c[S],
                    i = -1 !== P.indexOf("px") ? parseFloat(P) : G(this.t, S, parseFloat(P), P.replace(T, "")) || 0,
                    k = i !== s[S] ? 2 > vt ? -s.ieOffsetX: -s.ieOffsetY: 2 > vt ? f - s.ieOffsetX: p - s.ieOffsetY,
                    u[S] = (s[S] = Math.round(i - k * (0 === vt || 2 === vt ? 1 : O))) + "px"
                }
            }
        },
        Lt = Y.set3DTransformRatio = Y.setTransformRatio = function(t) {
            var e, i, s, r, n, a, o, l, h, _, u, c, p, d, m, g, v, y, T, x, w, b, P, S = this.data,
            k = this.t.style,
            O = S.rotation,
            R = S.rotationX,
            A = S.rotationY,
            C = S.scaleX,
            D = S.scaleY,
            M = S.scaleZ,
            F = S.x,
            X = S.y,
            I = S.z,
            E = S.svg,
            N = S.perspective,
            L = S.force3D;
            if (((1 === t || 0 === t) && "auto" === L && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !L) && !I && !N && !A && !R && 1 === M || wt && E || !Ot) return void(O || S.skewX || E ? (O *= z, b = S.skewX * z, P = 1e5, e = Math.cos(O) * C, r = Math.sin(O) * C, i = Math.sin(O - b) * -D, n = Math.cos(O - b) * D, b && "simple" === S.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, n *= v, S.skewY && (e *= v, r *= v)), E && (F += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, X += S.yOrigin - (S.xOrigin * r + S.yOrigin * n) + S.yOffset, wt && (S.xPercent || S.yPercent) && (d = this.t.getBBox(), F += .01 * S.xPercent * d.width, X += .01 * S.yPercent * d.height), d = 1e-6, d > F && F > -d && (F = 0), d > X && X > -d && (X = 0)), T = (e * P | 0) / P + "," + (r * P | 0) / P + "," + (i * P | 0) / P + "," + (n * P | 0) / P + "," + F + "," + X + ")", E && wt ? this.t.setAttribute("transform", "matrix(" + T) : k[Pt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(": "matrix(") + T) : k[Pt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(": "matrix(") + C + ",0,0," + D + "," + F + "," + X + ")");
            if (f && (d = 1e-4, d > C && C > -d && (C = M = 2e-5), d > D && D > -d && (D = M = 2e-5), !N || S.z || S.rotationX || S.rotationY || (N = 0)), O || S.skewX) O *= z,
            m = e = Math.cos(O),
            g = r = Math.sin(O),
            S.skewX && (O -= S.skewX * z, m = Math.cos(O), g = Math.sin(O), "simple" === S.skewType && (v = Math.tan(S.skewX * z), v = Math.sqrt(1 + v * v), m *= v, g *= v, S.skewY && (e *= v, r *= v))),
            i = -g,
            n = m;
            else {
                if (! (A || R || 1 !== M || N || E)) return void(k[Pt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(": "translate3d(") + F + "px," + X + "px," + I + "px)" + (1 !== C || 1 !== D ? " scale(" + C + "," + D + ")": ""));
                e = n = 1,
                i = r = 0
            }
            h = 1,
            s = a = o = l = _ = u = 0,
            c = N ? -1 / N: 0,
            p = S.zOrigin,
            d = 1e-6,
            x = ",",
            w = "0",
            O = A * z,
            O && (m = Math.cos(O), g = Math.sin(O), o = -g, _ = c * -g, s = e * g, a = r * g, h = m, c *= m, e *= m, r *= m),
            O = R * z,
            O && (m = Math.cos(O), g = Math.sin(O), v = i * m + s * g, y = n * m + a * g, l = h * g, u = c * g, s = i * -g + s * m, a = n * -g + a * m, h *= m, c *= m, i = v, n = y),
            1 !== M && (s *= M, a *= M, h *= M, c *= M),
            1 !== D && (i *= D, n *= D, l *= D, u *= D),
            1 !== C && (e *= C, r *= C, o *= C, _ *= C),
            (p || E) && (p && (F += s * -p, X += a * -p, I += h * -p + p), E && (F += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, X += S.yOrigin - (S.xOrigin * r + S.yOrigin * n) + S.yOffset), d > F && F > -d && (F = w), d > X && X > -d && (X = w), d > I && I > -d && (I = 0)),
            T = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(": "matrix3d(",
            T += (d > e && e > -d ? w: e) + x + (d > r && r > -d ? w: r) + x + (d > o && o > -d ? w: o),
            T += x + (d > _ && _ > -d ? w: _) + x + (d > i && i > -d ? w: i) + x + (d > n && n > -d ? w: n),
            R || A || 1 !== M ? (T += x + (d > l && l > -d ? w: l) + x + (d > u && u > -d ? w: u) + x + (d > s && s > -d ? w: s), T += x + (d > a && a > -d ? w: a) + x + (d > h && h > -d ? w: h) + x + (d > c && c > -d ? w: c) + x) : T += ",0,0,0,0,1,0,",
            T += F + x + X + x + I + x + (N ? 1 + -I / N: 1) + ")",
            k[Pt] = T
        };
        h = Rt.prototype,
        h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0,
        h.scaleX = h.scaleY = h.scaleZ = 1,
        Tt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, s, n, o, l) {
                if (s._lastParsedTransform === l) return n;
                s._lastParsedTransform = l;
                var h, _, u, c, f, p, d, m, g, v, y = t._gsTransform,
                T = t.style,
                x = 1e-6,
                w = bt.length,
                b = l,
                P = {},
                S = "transformOrigin";
                if (l.display ? (c = Q(t, "display"), T.display = "block", h = Et(t, r, !0, l.parseTransform), T.display = c) : h = Et(t, r, !0, l.parseTransform), s._transform = h, "string" == typeof b.transform && Pt) c = N.style,
                c[Pt] = b.transform,
                c.display = "block",
                c.position = "absolute",
                I.body.appendChild(N),
                _ = Et(N, null, !1),
                I.body.removeChild(N),
                _.perspective || (_.perspective = h.perspective),
                null != b.xPercent && (_.xPercent = nt(b.xPercent, h.xPercent)),
                null != b.yPercent && (_.yPercent = nt(b.yPercent, h.yPercent));
                else if ("object" == typeof b) {
                    if (_ = {
                        scaleX: nt(null != b.scaleX ? b.scaleX: b.scale, h.scaleX),
                        scaleY: nt(null != b.scaleY ? b.scaleY: b.scale, h.scaleY),
                        scaleZ: nt(b.scaleZ, h.scaleZ),
                        x: nt(b.x, h.x),
                        y: nt(b.y, h.y),
                        z: nt(b.z, h.z),
                        xPercent: nt(b.xPercent, h.xPercent),
                        yPercent: nt(b.yPercent, h.yPercent),
                        perspective: nt(b.transformPerspective, h.perspective)
                    },
                    m = b.directionalRotation, null != m) if ("object" == typeof m) for (c in m) b[c] = m[c];
                    else b.rotation = m;
                    "string" == typeof b.x && -1 !== b.x.indexOf("%") && (_.x = 0, _.xPercent = nt(b.x, h.xPercent)),
                    "string" == typeof b.y && -1 !== b.y.indexOf("%") && (_.y = 0, _.yPercent = nt(b.y, h.yPercent)),
                    _.rotation = at("rotation" in b ? b.rotation: "shortRotation" in b ? b.shortRotation + "_short": "rotationZ" in b ? b.rotationZ: h.rotation, h.rotation, "rotation", P),
                    Ot && (_.rotationX = at("rotationX" in b ? b.rotationX: "shortRotationX" in b ? b.shortRotationX + "_short": h.rotationX || 0, h.rotationX, "rotationX", P), _.rotationY = at("rotationY" in b ? b.rotationY: "shortRotationY" in b ? b.shortRotationY + "_short": h.rotationY || 0, h.rotationY, "rotationY", P)),
                    _.skewX = null == b.skewX ? h.skewX: at(b.skewX, h.skewX),
                    _.skewY = null == b.skewY ? h.skewY: at(b.skewY, h.skewY),
                    (u = _.skewY - h.skewY) && (_.skewX += u, _.rotation += u)
                }
                for (Ot && null != b.force3D && (h.force3D = b.force3D, d = !0), h.skewType = b.skewType || h.skewType || a.defaultSkewType, p = h.force3D || h.z || h.rotationX || h.rotationY || _.z || _.rotationX || _.rotationY || _.perspective, p || null == b.scale || (_.scaleZ = 1); --w > -1;) i = bt[w],
                f = _[i] - h[i],
                (f > x || -x > f || null != b[i] || null != X[i]) && (d = !0, n = new dt(h, i, h[i], f, n), i in P && (n.e = P[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                return f = b.transformOrigin,
                h.svg && (f || b.svgOrigin) && (g = h.xOffset, v = h.yOffset, zt(t, st(f), _, b.svgOrigin, b.smoothOrigin), n = mt(h, "xOrigin", (y ? h: _).xOrigin, _.xOrigin, n, S), n = mt(h, "yOrigin", (y ? h: _).yOrigin, _.yOrigin, n, S), (g !== h.xOffset || v !== h.yOffset) && (n = mt(h, "xOffset", y ? g: h.xOffset, h.xOffset, n, S), n = mt(h, "yOffset", y ? v: h.yOffset, h.yOffset, n, S)), f = wt ? null: "0px 0px"),
                (f || Ot && p && h.zOrigin) && (Pt ? (d = !0, i = kt, f = (f || Q(t, i, r, !1, "50% 50%")) + "", n = new dt(T, i, 0, 0, n, ( - 1), S), n.b = T[i], n.plugin = o, Ot ? (c = h.zOrigin, f = f.split(" "), h.zOrigin = (f.length > 2 && (0 === c || "0px" !== f[2]) ? parseFloat(f[2]) : c) || 0, n.xs0 = n.e = f[0] + " " + (f[1] || "50%") + " 0px", n = new dt(h, "zOrigin", 0, 0, n, ( - 1), n.n), n.b = c, n.xs0 = n.e = h.zOrigin) : n.xs0 = n.e = f) : st(f + "", h)),
                d && (s._transformType = h.svg && wt || !p && 3 !== this._transformType ? 2 : 3),
                n
            },
            prefix: !0
        }),
        Tt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        Tt("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, a, o) {
                e = this.format(e);
                var l, h, _, u, c, f, p, d, m, g, v, y, T, x, w, b, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                S = t.style;
                for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < P.length; h++) this.p.indexOf("border") && (P[h] = Z(P[h])),
                c = u = Q(t, P[h], r, !1, "0px"),
                -1 !== c.indexOf(" ") && (u = c.split(" "), c = u[0], u = u[1]),
                f = _ = l[h],
                p = parseFloat(c),
                y = c.substr((p + "").length),
                T = "=" === f.charAt(1),
                T ? (d = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), d *= parseFloat(f), v = f.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(f), v = f.substr((d + "").length)),
                "" === v && (v = s[i] || y),
                v !== y && (x = G(t, "borderLeft", p, y), w = G(t, "borderTop", p, y), "%" === v ? (c = x / m * 100 + "%", u = w / g * 100 + "%") : "em" === v ? (b = G(t, "borderLeft", 1, "em"), c = x / b + "em", u = w / b + "em") : (c = x + "px", u = w + "px"), T && (f = parseFloat(c) + d + v, _ = parseFloat(u) + d + v)),
                a = gt(S, P[h], c + " " + u, f + " " + _, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: ct("0px 0px 0px 0px", !1, !0)
        }),
        Tt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, s, n, a) {
                var o, l, h, _, u, c, f = "background-position",
                p = r || $(t, null),
                m = this.format((p ? d ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                g = this.format(e);
                if ( - 1 !== m.indexOf("%") != ( - 1 !== g.indexOf("%")) && (c = Q(t, "backgroundImage").replace(O, ""), c && "none" !== c)) {
                    for (o = m.split(" "), l = g.split(" "), L.setAttribute("src", c), h = 2; --h > -1;) m = o[h],
                    _ = -1 !== m.indexOf("%"),
                    _ !== ( - 1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - L.width: t.offsetHeight - L.height, o[h] = _ ? parseFloat(m) / 100 * u + "px": parseFloat(m) / u * 100 + "%");
                    m = o.join(" ")
                }
                return this.parseComplex(t.style, m, g, n, a)
            },
            formatter: st
        }),
        Tt("backgroundSize", {
            defaultValue: "0 0",
            formatter: st
        }),
        Tt("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        Tt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        Tt("transformStyle", {
            prefix: !0
        }),
        Tt("backfaceVisibility", {
            prefix: !0
        }),
        Tt("userSelect", {
            prefix: !0
        }),
        Tt("margin", {
            parser: ft("marginTop,marginRight,marginBottom,marginLeft")
        }),
        Tt("padding", {
            parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        Tt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, s, n, a) {
                var o, l, h;
                return 9 > d ? (l = t.currentStyle, h = 8 > d ? " ": ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)),
                this.parseComplex(t.style, o, e, n, a)
            }
        }),
        Tt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        Tt("autoRound,strictUnits", {
            parser: function(t, e, i, s, r) {
                return r
            }
        }),
        Tt("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, s, n, a) {
                return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0]
            }
        }),
        Tt("borderWidth", {
            parser: ft("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        Tt("float,cssFloat,styleFloat", {
            parser: function(t, e, i, s, r, n) {
                var a = t.style,
                o = "cssFloat" in a ? "cssFloat": "styleFloat";
                return new dt(a, o, 0, 0, r, ( - 1), i, (!1), 0, a[o], e)
            }
        });
        var Yt = function(t) {
            var e, i = this.t,
            s = i.filter || Q(this.data, "filter") || "",
            r = this.s + this.c * t | 0;
            100 === r && ( - 1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)),
            e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(x, "opacity=" + r))
        };
        Tt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, s, n, a) {
                var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                l = t.style,
                h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                h && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0),
                j ? n = new dt(l, "opacity", o, e - o, n) : (n = new dt(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Yt),
                h && (n = new dt(l, "visibility", 0, 0, n, ( - 1), null, (!1), 0, 0 !== o ? "inherit": "hidden", 0 === e ? "hidden": "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)),
                n
            }
        });
        var Bt = function(t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
        },
        jt = function(t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b: this.e);
                for (var e = this.data,
                i = this.t.style; e;) e.v ? i[e.p] = e.v: Bt(i, e.p),
                e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        Tt("className", {
            parser: function(t, e, s, n, a, o, l) {
                var h, _, u, c, f, p = t.getAttribute("class") || "",
                d = t.style.cssText;
                if (a = n._classNamePT = new dt(t, s, 0, 0, a, 2), a.setRatio = jt, a.pr = -11, i = !0, a.b = p, _ = K(t, r), u = t._gsClassPT) {
                    for (c = {},
                    f = u.data; f;) c[f.p] = 1,
                    f = f._next;
                    u.setRatio(1)
                }
                return t._gsClassPT = a,
                a.e = "=" !== e.charAt(1) ? e: p.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                t.setAttribute("class", a.e),
                h = J(t, _, K(t), l, c),
                t.setAttribute("class", p),
                a.data = h.firstMPT,
                t.style.cssText = d,
                a = a.xfirst = n.parse(t, h.difs, a, o)
            }
        });
        var Ut = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, s, r, n, a = this.t.style,
                o = l.transform.parse;
                if ("all" === this.e) a.cssText = "",
                r = !0;
                else for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s],
                l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? kt: l[i].p),
                Bt(a, i);
                r && (Bt(a, Pt), n = this.t._gsTransform, n && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (Tt("clearProps", {
            parser: function(t, e, s, r, n) {
                return n = new dt(t, s, 0, 0, n, 2),
                n.setRatio = Ut,
                n.e = e,
                n.pr = -10,
                n.data = r._tween,
                i = !0,
                n
            }
        }), h = "bezier,throwProps,physicsProps,physics2D".split(","), vt = h.length; vt--;) xt(h[vt]);
        h = a.prototype,
        h._firstPT = h._lastParsedTransform = h._transform = null,
        h._onInitTween = function(t, e, o) {
            if (!t.nodeType) return ! 1;
            this._target = t,
            this._tween = o,
            this._vars = e,
            _ = e.autoRound,
            i = !1,
            s = e.suffixMap || a.suffixMap,
            r = $(t, ""),
            n = this._overwriteProps;
            var h, f, d, m, g, v, y, T, x, b = t.style;
            if (u && "" === b.zIndex && (h = Q(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (m = b.cssText, h = K(t, r), b.cssText = m + ";" + e, h = J(t, h, K(t)).difs, !j && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, b.cssText = m), e.className ? this._firstPT = f = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = f = this.parse(t, e, null), this._transformType) {
                for (x = 3 === this._transformType, Pt ? c && (u = !0, "" === b.zIndex && (y = Q(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible": "hidden"))) : b.zoom = 1, d = f; d && d._next;) d = d._next;
                T = new dt(t, "transform", 0, 0, null, 2),
                this._linkCSSP(T, null, d),
                T.setRatio = Pt ? Lt: Nt,
                T.data = this._transform || Et(t, r, !0),
                T.tween = o,
                T.pr = -1,
                n.pop()
            }
            if (i) {
                for (; f;) {
                    for (v = f._next, d = m; d && d.pr > f.pr;) d = d._next; (f._prev = d ? d._prev: g) ? f._prev._next = f: m = f,
                    (f._next = d) ? d._prev = f: g = f,
                    f = v
                }
                this._firstPT = m
            }
            return ! 0
        },
        h.parse = function(t, e, i, n) {
            var a, o, h, u, c, f, p, d, m, g, v = t.style;
            for (a in e) f = e[a],
            o = l[a],
            o ? i = o.parse(t, f, a, this, i, n, e) : (c = Q(t, a, r) + "", m = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && P.test(f) ? (m || (f = ht(f), f = (f.length > 3 ? "rgba(": "rgb(") + f.join(",") + ")"), i = gt(v, a, c, f, !0, "transparent", i, 0, n)) : !m || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (h = parseFloat(c), p = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (h = it(t, a, r), p = "px") : "left" === a || "top" === a ? (h = H(t, a, r), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), g = m && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), d = f.replace(T, "")) : (u = parseFloat(f), d = m ? f.replace(T, "") : ""), "" === d && (d = a in s ? s[a] : p), f = u || 0 === u ? (g ? u + h: u) + d: e[a], p !== d && "" !== d && (u || 0 === u) && h && (h = G(t, a, h, p), "%" === d ? (h /= G(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = h + "%")) : "em" === d || "rem" === d || "vw" === d || "vh" === d ? h /= G(t, a, 1, d) : "px" !== d && (u = G(t, a, u, d), d = "px"), g && (u || 0 === u) && (f = u + h + d)), g && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== v[a] && (f || f + "" != "NaN" && null != f) ? (i = new dt(v, a, u || h || 0, 0, i, ( - 1), a, (!1), 0, c, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f: c) : V("invalid " + a + " tween value: " + e[a]) : (i = new dt(v, a, h, u - h, i, 0, a, _ !== !1 && ("px" === d || "zIndex" === a), 0, c, f), i.xs0 = d)) : i = gt(v, a, c, f, !0, null, i, 0, n)),
            n && i && !i.plugin && (i.plugin = n);
            return i
        },
        h.setRatio = function(t) {
            var e, i, s, r = this._firstPT,
            n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; r;) {
                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type) if (1 === r.type) if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                else {
                    for (i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                    r.t[r.p] = i
                } else - 1 === r.type ? r.t[r.p] = r.xs0: r.setRatio && r.setRatio(t);
                else r.t[r.p] = e + r.xs0;
                r = r._next
            } else for (; r;) 2 !== r.type ? r.t[r.p] = r.b: r.setRatio(t),
            r = r._next;
            else for (; r;) {
                if (2 !== r.type) if (r.r && -1 !== r.type) if (e = Math.round(r.s + r.c), r.type) {
                    if (1 === r.type) {
                        for (s = r.l, i = r.xs0 + e + r.xs1, s = 1; s < r.l; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                        r.t[r.p] = i
                    }
                } else r.t[r.p] = e + r.xs0;
                else r.t[r.p] = r.e;
                else r.setRatio(t);
                r = r._next
            }
        },
        h._enableTransforms = function(t) {
            this._transform = this._transform || Et(this._target, r, !0),
            this._transformType = this._transform.svg && wt || !t && 3 !== this._transformType ? 2 : 3
        };
        var Vt = function(t) {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        h._addLazySet = function(t, e, i) {
            var s = this._firstPT = new dt(t, e, 0, 0, this._firstPT, 2);
            s.e = i,
            s.setRatio = Vt,
            s.data = this
        },
        h._linkCSSP = function(t, e, i, s) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next: this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t: s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i),
            t
        },
        h._kill = function(e) {
            var i, s, r, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (s in e) n[s] = e[s];
                n.opacity = 1,
                n.autoAlpha && (n.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null),
            t.prototype._kill.call(this, n)
        };
        var qt = function(t, e, i) {
            var s, r, n, a;
            if (t.slice) for (r = t.length; --r > -1;) qt(t[r], e, i);
            else for (s = t.childNodes, r = s.length; --r > -1;) n = s[r],
            a = n.type,
            n.style && (e.push(K(n)), i && i.push(n)),
            1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || qt(n, e, i)
        };
        return a.cascadeTo = function(t, i, s) {
            var r, n, a, o, l = e.to(t, i, s),
            h = [l],
            _ = [],
            u = [],
            c = [],
            f = e._internals.reservedProps;
            for (t = l._targets || l.target, qt(t, _, c), l.render(i, !0, !0), qt(t, u), l.render(0, !0, !0), l._enabled(!0), r = c.length; --r > -1;) if (n = J(c[r], _[r], u[r]), n.firstMPT) {
                n = n.difs;
                for (a in s) f[a] && (n[a] = s[a]);
                o = {};
                for (a in n) o[a] = _[r][a];
                h.push(e.fromTo(c[r], i, o, n))
            }
            return h
        },
        t.activate([a]),
        a
    },
    !0),
    function() {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.5",
            priority: -1,
            API: 2,
            init: function(t, e, i) {
                return this._tween = i,
                !0
            }
        }),
        e = function(t) {
            for (; t;) t.f || t.blob || (t.r = 1),
            t = t._next
        },
        i = t.prototype;
        i._onInitAllProps = function() {
            for (var t, i, s, r = this._tween,
            n = r.vars.roundProps.join ? r.vars.roundProps: r.vars.roundProps.split(","), a = n.length, o = {},
            l = r._propLookup.roundProps; --a > -1;) o[n[a]] = 1;
            for (a = n.length; --a > -1;) for (t = n[a], i = r._firstPT; i;) s = i._next,
            i.pg ? i.t._roundProps(o, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), s && (s._prev = i._prev), i._prev ? i._prev._next = s: r._firstPT === i && (r._firstPT = s), i._next = i._prev = null, r._propLookup[t] = l)),
            i = s;
            return ! 1
        },
        i._add = function(t, e, i, s) {
            this._addTween(t, e, i, i + s, e, !0),
            this._overwriteProps.push(e)
        }
    } (),
    function() {
        _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.5.0",
            init: function(t, e, i) {
                var s;
                if ("function" != typeof t.setAttribute) return ! 1;
                for (s in e) this._addTween(t, "setAttribute", t.getAttribute(s) + "", e[s] + "", s, !1, s),
                this._overwriteProps.push(s);
                return ! 0
            }
        })
    } (),
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function(t, e, i) {
            "object" != typeof e && (e = {
                rotation: e
            }),
            this.finals = {};
            var s, r, n, a, o, l, h = e.useRadians === !0 ? 2 * Math.PI: 360,
            _ = 1e-6;
            for (s in e)"useRadians" !== s && (l = (e[s] + "").split("_"), r = l[0], n = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s: "get" + s.substr(3)]()), a = this.finals[s] = "string" == typeof r && "=" === r.charAt(1) ? n + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, o = a - n, l.length && (r = l.join("_"), -1 !== r.indexOf("short") && (o %= h, o !== o % (h / 2) && (o = 0 > o ? o + h: o - h)), -1 !== r.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * h) % h - (o / h | 0) * h: -1 !== r.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * h) % h - (o / h | 0) * h)), (o > _ || -_ > o) && (this._addTween(t, s, n, n + o, s), this._overwriteProps.push(s)));
            return ! 0
        },
        set: function(t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t);
            else for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
            e = e._next
        }
    })._autoCSS = !0,
    _gsScope._gsDefine("easing.Back", ["easing.Ease"],
    function(t) {
        var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
        n = r.com.greensock,
        a = 2 * Math.PI,
        o = Math.PI / 2,
        l = n._class,
        h = function(e, i) {
            var s = l("easing." + e,
            function() {},
            !0),
            r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            s
        },
        _ = t.register ||
        function() {},
        u = function(t, e, i, s, r) {
            var n = l("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new s
            },
            !0);
            return _(n, t),
            n
        },
        c = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        },
        f = function(e, i) {
            var s = l("easing." + e,
            function(t) {
                this._p1 = t || 0 === t ? t: 1.70158,
                this._p2 = 1.525 * this._p1
            },
            !0),
            r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            r.config = function(t) {
                return new s(t)
            },
            s
        },
        p = u("Back", f("BackOut",
        function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), f("BackIn",
        function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), f("BackInOut",
        function(t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })),
        d = l("easing.SlowMo",
        function(t, e, i) {
            e = e || 0 === e ? e: .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e: 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = i === !0
        },
        !0),
        m = d.prototype = new t;
        return m.constructor = d,
        m.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t: e - (t = 1 - t / this._p1) * t * t * t * e: t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t: e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t: this._calcEnd ? 1 : e
        },
        d.ease = new d(.7, .7),
        m.config = d.config = function(t, e, i) {
            return new d(t, e, i)
        },
        e = l("easing.SteppedEase",
        function(t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        },
        !0),
        m = e.prototype = new t,
        m.constructor = e,
        m.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        },
        m.config = e.config = function(t) {
            return new e(t)
        },
        i = l("easing.RoughEase",
        function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, l = e.taper || "none",
            h = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, d = e.clamp === !0, m = e.template instanceof t ? e.template: null, g = "number" == typeof e.strength ? .4 * e.strength: .4; --f > -1;) i = p ? Math.random() : 1 / u * f,
            s = m ? m.getRatio(i) : i,
            "none" === l ? r = g: "out" === l ? (n = 1 - i, r = n * n * g) : "in" === l ? r = i * i * g: .5 > i ? (n = 2 * i, r = n * n * .5 * g) : (n = 2 * (1 - i), r = n * n * .5 * g),
            p ? s += Math.random() * r - .5 * r: f % 2 ? s += .5 * r: s -= .5 * r,
            d && (s > 1 ? s = 1 : 0 > s && (s = 0)),
            h[_++] = {
                x: i,
                y: s
            };
            for (h.sort(function(t, e) {
                return t.x - e.x
            }), o = new c(1, 1, null), f = u; --f > -1;) a = h[f],
            o = new c(a.x, a.y, o);
            this._prev = new c(0, 0, 0 !== o.t ? o: o.next)
        },
        !0),
        m = i.prototype = new t,
        m.constructor = i,
        m.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else for (; e.prev && t <= e.t;) e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        },
        m.config = function(t) {
            return new i(t)
        },
        i.ease = new i,
        u("Bounce", h("BounceOut",
        function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), h("BounceIn",
        function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t: 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), h("BounceInOut",
        function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t: 2 * t - 1,
            t = 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        u("Circ", h("CircOut",
        function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), h("CircIn",
        function(t) {
            return - (Math.sqrt(1 - t * t) - 1)
        }), h("CircInOut",
        function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        s = function(e, i, s) {
            var r = l("easing." + e,
            function(t, e) {
                this._p1 = t >= 1 ? t: 1,
                this._p2 = (e || s) / (1 > t ? t: 1),
                this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0),
                this._p2 = a / this._p2
            },
            !0),
            n = r.prototype = new t;
            return n.constructor = r,
            n.getRatio = i,
            n.config = function(t, e) {
                return new r(t, e)
            },
            r
        },
        u("Elastic", s("ElasticOut",
        function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        },
        .3), s("ElasticIn",
        function(t) {
            return - (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        },
        .3), s("ElasticInOut",
        function(t) {
            return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        },
        .45)),
        u("Expo", h("ExpoOut",
        function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), h("ExpoIn",
        function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), h("ExpoInOut",
        function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        u("Sine", h("SineOut",
        function(t) {
            return Math.sin(t * o)
        }), h("SineIn",
        function(t) {
            return - Math.cos(t * o) + 1
        }), h("SineInOut",
        function(t) {
            return - .5 * (Math.cos(Math.PI * t) - 1)
        })),
        l("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        },
        !0),
        _(r.SlowMo, "SlowMo", "ease,"),
        _(i, "RoughEase", "ease,"),
        _(e, "SteppedEase", "ease,"),
        p
    },
    !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var s, r, n, a, o, l = function(t) {
            var e, s = t.split("."),
            r = i;
            for (e = 0; e < s.length; e++) r[s[e]] = r = r[s[e]] || {};
            return r
        },
        h = l("com.greensock"),
        _ = 1e-10,
        u = function(t) {
            var e, i = [],
            s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        },
        c = function() {},
        f = function() {
            var t = Object.prototype.toString,
            e = t.call([]);
            return function(i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        } (),
        p = {},
        d = function(s, r, n, a) {
            this.sc = p[s] ? p[s].sc: [],
            p[s] = this,
            this.gsClass = null,
            this.func = n;
            var o = [];
            this.check = function(h) {
                for (var _, u, c, f, m, g = r.length,
                v = g; --g > -1;)(_ = p[r[g]] || new d(r[g], [])).gsClass ? (o[g] = _.gsClass, v--) : h && _.sc.push(this);
                if (0 === v && n) for (u = ("com.greensock." + s).split("."), c = u.pop(), f = l(u.join("."))[c] = this.gsClass = n.apply(n, o), a && (i[c] = f, m = "undefined" != typeof module && module.exports, !m && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/": "") + s.split(".").pop(), [],
                function() {
                    return f
                }) : s === e && m && (module.exports = f)), g = 0; g < this.sc.length; g++) this.sc[g].check()
            },
            this.check(!0)
        },
        m = t._gsDefine = function(t, e, i, s) {
            return new d(t, e, i, s)
        },
        g = h._class = function(t, e, i) {
            return e = e ||
            function() {},
            m(t, [],
            function() {
                return e
            },
            i),
            e
        };
        m.globals = i;
        var v = [0, 0, 1, 1],
        y = [],
        T = g("easing.Ease",
        function(t, e, i, s) {
            this._func = t,
            this._type = i || 0,
            this._power = s || 0,
            this._params = e ? v.concat(e) : v
        },
        !0),
        x = T.map = {},
        w = T.register = function(t, e, i, s) {
            for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;) for (n = l[_], r = s ? g("easing." + n, null, !0) : h.easing[n] || {},
            a = u.length; --a > -1;) o = u[a],
            x[n + "." + o] = x[o + n] = r[o] = t.getRatio ? t: t[o] || new t
        };
        for (n = T.prototype, n._calcEnd = !1, n.getRatio = function(t) {
            if (this._func) return this._params[0] = t,
            this._func.apply(null, this._params);
            var e = this._type,
            i = this._power,
            s = 1 === e ? 1 - t: 2 === e ? t: .5 > t ? 2 * t: 2 * (1 - t);
            return 1 === i ? s *= s: 2 === i ? s *= s * s: 3 === i ? s *= s * s * s: 4 === i && (s *= s * s * s * s),
            1 === e ? 1 - s: 2 === e ? s: .5 > t ? s / 2 : 1 - s / 2
        },
        s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r,
        w(new T(null, null, 1, r), n, "easeOut", !0),
        w(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone": "")),
        w(new T(null, null, 3, r), n, "easeInOut");
        x.linear = h.easing.Linear.easeIn,
        x.swing = h.easing.Quad.easeInOut;
        var b = g("events.EventDispatcher",
        function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        });
        n = b.prototype,
        n.addEventListener = function(t, e, i, s, r) {
            r = r || 0;
            var n, l, h = this._listeners[t],
            _ = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) n = h[l],
            n.c === e && n.s === i ? h.splice(l, 1) : 0 === _ && n.pr < r && (_ = l + 1);
            h.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: r
            }),
            this !== a || o || a.wake()
        },
        n.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s) for (i = s.length; --i > -1;) if (s[i].c === e) return void s.splice(i, 1)
        },
        n.dispatchEvent = function(t) {
            var e, i, s, r = this._listeners[t];
            if (r) for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e],
            s && (s.up ? s.c.call(s.s || i, {
                type: t,
                target: i
            }) : s.c.call(s.s || i))
        };
        var P = t.requestAnimationFrame,
        S = t.cancelAnimationFrame,
        k = Date.now ||
        function() {
            return (new Date).getTime()
        },
        O = k();
        for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"],
        S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
        g("Ticker",
        function(t, e) {
            var i, s, r, n, l, h = this,
            u = k(),
            f = !(e === !1 || !P) && "auto",
            p = 500,
            d = 33,
            m = "tick",
            g = function(t) {
                var e, a, o = k() - O;
                o > p && (u += o - d),
                O += o,
                h.time = (O - u) / 1e3,
                e = h.time - l,
                (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= n ? .004 : n - e), a = !0),
                t !== !0 && (r = s(g)),
                a && h.dispatchEvent(m)
            };
            b.call(h),
            h.time = h.frame = 0,
            h.tick = function() {
                g(!0)
            },
            h.lagSmoothing = function(t, e) {
                p = t || 1 / _,
                d = Math.min(e, p, 0)
            },
            h.sleep = function() {
                null != r && (f && S ? S(r) : clearTimeout(r), s = c, r = null, h === a && (o = !1))
            },
            h.wake = function(t) {
                null !== r ? h.sleep() : t ? u += -O + (O = k()) : h.frame > 10 && (O = k() - p + 5),
                s = 0 === i ? c: f && P ? P: function(t) {
                    return setTimeout(t, 1e3 * (l - h.time) + 1 | 0)
                },
                h === a && (o = !0),
                g(2)
            },
            h.fps = function(t) {
                return arguments.length ? (i = t, n = 1 / (i || 60), l = this.time + n, void h.wake()) : i
            },
            h.useRAF = function(t) {
                return arguments.length ? (h.sleep(), f = t, void h.fps(i)) : f
            },
            h.fps(t),
            setTimeout(function() {
                "auto" === f && h.frame < 5 && "hidden" !== document.visibilityState && h.useRAF(!1)
            },
            1500)
        }),
        n = h.Ticker.prototype = new h.events.EventDispatcher,
        n.constructor = h.Ticker;
        var R = g("core.Animation",
        function(t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Z) {
                o || a.wake();
                var i = this.vars.useFrames ? W: Z;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        });
        a = R.ticker = new h.Ticker,
        n = R.prototype,
        n._dirty = n._gc = n._initted = n._paused = !1,
        n._totalTime = n._time = 0,
        n._rawPrevTime = -1,
        n._next = n._last = n._onUpdate = n._timeline = n.timeline = null,
        n._paused = !1;
        var A = function() {
            o && k() - O > 2e3 && a.wake(),
            setTimeout(A, 2e3)
        };
        A(),
        n.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        },
        n.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        },
        n.resume = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!1)
        },
        n.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        },
        n.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay: 0, e !== !1, !0)
        },
        n.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        },
        n.render = function(t, e, i) {},
        n.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        },
        n.isActive = function() {
            var t, e = this._timeline,
            i = this._startTime;
            return ! e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
        },
        n._enabled = function(t, e) {
            return o || a.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        },
        n._kill = function(t, e) {
            return this._enabled(!1, !1)
        },
        n.kill = function(t, e) {
            return this._kill(t, e),
            this
        },
        n._uncache = function(t) {
            for (var e = t ? this: this.timeline; e;) e._dirty = !0,
            e = e.timeline;
            return this
        },
        n._swapSelfInParams = function(t) {
            for (var e = t.length,
            i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
            return i
        },
        n._callback = function(t) {
            var e = this.vars;
            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
        },
        n.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        },
        n.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        },
        n.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        },
        n.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        },
        n.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration: t, e)) : this._time
        },
        n.totalTime = function(t, e, i) {
            if (o || a.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                    r = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime: r._time) - (this._reversed ? s - t: t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                    r = r._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && (F.length && Q(), this.render(t, e, !1), F.length && Q())
            }
            return this
        },
        n.progress = n.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i: this.ratio
        },
        n.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        },
        n.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        },
        n.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                i = e || 0 === e ? e: this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t,
            this._uncache(!1)
        },
        n.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime: this._totalTime, !0)), this) : this._reversed
        },
        n.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, s = this._timeline;
            return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e: null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime: (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))),
            this._gc && !t && this._enabled(!0, !1),
            this
        };
        var C = g("core.SimpleTimeline",
        function(t) {
            R.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        n = C.prototype = new R,
        n.constructor = C,
        n.kill()._gc = !1,
        n._first = n._last = n._recent = null,
        n._sortChildren = !1,
        n.add = n.insert = function(t, e, i, s) {
            var r, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren) for (n = t._startTime; r && r._startTime > n;) r = r._prev;
            return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t),
            t._next ? t._next._prev = t: this._last = t,
            t._prev = r,
            this._recent = t,
            this._timeline && this._uncache(!0),
            this
        },
        n._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next: this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev: this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)),
            this
        },
        n.render = function(t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next,
            (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
            r = s
        },
        n.rawTime = function() {
            return o || a.wake(),
            this._totalTime
        };
        var D = g("TweenLite",
        function(e, i, s) {
            if (R.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e: D.selector(e) || e;
            var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
            l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? q[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0]) for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++) n = a[r],
            n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = G(n, this, !1), 1 === l && this._siblings[r].length > 1 && K(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
            else this._propLookup = {},
            this._siblings = G(e, this, !1),
            1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render( - this._delay))
        },
        !0),
        M = function(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        },
        z = function(t, e) {
            var i, s = {};
            for (i in t) V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!B[i] || B[i] && B[i]._autoCSS) || (s[i] = t[i], delete t[i]);
            t.css = s
        };
        n = D.prototype = new R,
        n.constructor = D,
        n.kill()._gc = !1,
        n.ratio = 0,
        n._firstPT = n._targets = n._overwrittenProps = n._startAt = null,
        n._notifyPluginsOfEnabled = n._lazy = !1,
        D.version = "1.18.2",
        D.defaultEase = n._ease = new T(null, null, 1, 1),
        D.defaultOverwrite = "auto",
        D.ticker = a,
        D.autoSleep = 120,
        D.lagSmoothing = function(t, e) {
            a.lagSmoothing(t, e)
        },
        D.selector = t.$ || t.jQuery ||
        function(e) {
            var i = t.$ || t.jQuery;
            return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e: document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var F = [],
        X = {},
        I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        E = function(t) {
            for (var e, i = this._firstPT,
            s = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start: i.c * t + i.s,
            i.r ? e = Math.round(e) : s > e && e > -s && (e = 0),
            i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
            i = i._next
        },
        N = function(t, e, i, s) {
            var r, n, a, o, l, h, _, u = [t, e],
            c = 0,
            f = "",
            p = 0;
            for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(I) || [], n = e.match(I) || [], s && (s._next = null, s.blob = 1, u._firstPT = s), l = n.length, o = 0; l > o; o++) _ = n[o],
            h = e.substr(c, e.indexOf(_, c) - c),
            f += h || !o ? h: ",",
            c += h.length,
            p ? p = (p + 1) % 5 : "rgba(" === h.substr( - 5) && (p = 1),
            _ === r[o] || r.length <= o ? f += _: (f && (u.push(f), f = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
                _next: u._firstPT,
                t: u,
                p: u.length - 1,
                s: a,
                c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                f: 0,
                r: p && 4 > p
            }),
            c += _.length;
            return f += e.substr(c),
            f && u.push(f),
            u.setRatio = E,
            u
        },
        L = function(t, e, i, s, r, n, a, o) {
            var l, h, _ = "get" === i ? t[e] : i,
            u = typeof t[e],
            c = "string" == typeof s && "=" === s.charAt(1),
            f = {
                t: t,
                p: e,
                s: _,
                f: "function" === u,
                pg: 0,
                n: r || e,
                r: n,
                pr: 0,
                c: c ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - _ || 0
            };
            return "number" !== u && ("function" === u && "get" === i && (h = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e: "get" + e.substr(3), f.s = _ = a ? t[h](a) : t[h]()), "string" == typeof _ && (a || isNaN(_)) ? (f.fp = a, l = N(_, s, o || D.defaultStringFilter, f), f = {
                t: l,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: r || e,
                pr: 0
            }) : c || (f.s = parseFloat(_), f.c = parseFloat(s) - f.s || 0)),
            f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f) : void 0
        },
        Y = D._internals = {
            isArray: f,
            isSelector: M,
            lazyTweens: F,
            blobDif: N
        },
        B = D._plugins = {},
        j = Y.tweenLookup = {},
        U = 0,
        V = Y.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1
        },
        q = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        W = R._rootFramesTimeline = new C,
        Z = R._rootTimeline = new C,
        $ = 30,
        Q = Y.lazyRender = function() {
            var t, e = F.length;
            for (X = {}; --e > -1;) t = F[e],
            t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            F.length = 0
        };
        Z._startTime = a.time,
        W._startTime = a.frame,
        Z._active = W._active = !0,
        setTimeout(Q, 1),
        R._updateRoot = D.render = function() {
            var t, e, i;
            if (F.length && Q(), Z.render((a.time - Z._startTime) * Z._timeScale, !1, !1), W.render((a.frame - W._startTime) * W._timeScale, !1, !1), F.length && Q(), a.frame >= $) {
                $ = a.frame + (parseInt(D.autoSleep, 10) || 120);
                for (i in j) {
                    for (e = j[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete j[i]
                }
                if (i = Z._first, (!i || i._paused) && D.autoSleep && !W._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || a.sleep()
                }
            }
        },
        a.addEventListener("tick", R._updateRoot);
        var G = function(t, e, i) {
            var s, r, n = t._gsTweenID;
            if (j[n || (t._gsTweenID = n = "t" + U++)] || (j[n] = {
                target: t,
                tweens: []
            }), e && (s = j[n].tweens, s[r = s.length] = e, i)) for (; --r > -1;) s[r] === e && s.splice(r, 1);
            return j[n].tweens
        },
        H = function(t, e, i, s) {
            var r, n, a = t.vars.onOverwrite;
            return a && (r = a(t, e, i, s)),
            a = D.onOverwrite,
            a && (n = a(t, e, i, s)),
            r !== !1 && n !== !1
        },
        K = function(t, e, i, s, r) {
            var n, a, o, l;
            if (1 === s || s >= 4) {
                for (l = r.length, n = 0; l > n; n++) if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                else if (5 === s) break;
                return a
            }
            var h, u = e._startTime + _,
            c = [],
            f = 0,
            p = 0 === e._duration;
            for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || J(e, 0, p), 0 === J(o, h, p) && (c[f++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && u - o._startTime <= 2e-10 || (c[f++] = o)));
            for (n = f; --n > -1;) if (o = c[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                if (2 !== s && !H(o, e)) continue;
                o._enabled(!1, !1) && (a = !0)
            }
            return a
        },
        J = function(t, e, i) {
            for (var s = t._timeline,
            r = s._timeScale,
            n = t._startTime; s._timeline;) {
                if (n += s._startTime, r *= s._timeScale, s._paused) return - 100;
                s = s._timeline
            }
            return n /= r,
            n > e ? n - e: i && n === e || !t._initted && 2 * _ > n - e ? _: (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
        };
        n._init = function() {
            var t, e, i, s, r, n = this.vars,
            a = this._overwrittenProps,
            o = this._duration,
            l = !!n.immediateRender,
            h = n.ease;
            if (n.startAt) {
                this._startAt && (this._startAt.render( - 1, !0), this._startAt.kill()),
                r = {};
                for (s in n.startAt) r[s] = n.startAt[s];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l) if (this._time > 0) this._startAt = null;
                else if (0 !== o) return
            } else if (n.runBackwards && 0 !== o) if (this._startAt) this._startAt.render( - 1, !0),
            this._startAt.kill(),
            this._startAt = null;
            else {
                0 !== this._time && (l = !1),
                i = {};
                for (s in n) V[s] && "autoCSS" !== s || (i[s] = n[s]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && n.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                    if (0 === this._time) return
                } else this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = h = h ? h instanceof T ? h: "function" == typeof h ? new T(h, n.easeParams) : x[h] || D.defaultEase: D.defaultEase, n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {},
            this._siblings[t], a ? a[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards) for (i = this._firstPT; i;) i.s += i.c,
            i.c = -i.c,
            i = i._next;
            this._onUpdate = n.onUpdate,
            this._initted = !0
        },
        n._initProps = function(e, i, s, r) {
            var n, a, o, l, h, _;
            if (null == e) return ! 1;
            X[e._gsTweenID] && Q(),
            this.vars.css || e.style && e !== t && e.nodeType && B.css && this.vars.autoCSS !== !1 && z(this.vars, e);
            for (n in this.vars) if (_ = this.vars[n], V[n]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
            else if (B[n] && (l = new B[n])._onInitTween(e, this.vars[n], this)) {
                for (this._firstPT = h = {
                    _next: this._firstPT,
                    t: l,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: n,
                    pg: 1,
                    pr: l._priority
                },
                a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT; (l._priority || l._onInitAllProps) && (o = !0),
                (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0),
                h._next && (h._next._prev = h)
            } else i[n] = L.call(this, e, n, "get", _, n, 0, null, this.vars.stringFilter);
            return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (X[e._gsTweenID] = !0), o)
        },
        n.render = function(t, e, i) {
            var s, r, n, a, o = this._time,
            l = this._duration,
            h = this._rawPrevTime;
            if (t >= l - 1e-7) this._totalTime = this._time = l,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
            this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren),
            0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || h === _ && "isPause" !== this.data) && h !== t && (i = !0, h > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t: _);
            else if (1e-7 > t) this._totalTime = this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed),
            0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t: _)),
            this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l,
                c = this._easeType,
                f = this._easePower; (1 === c || 3 === c && u >= .5) && (u = 1 - u),
                3 === c && (u *= 2),
                1 === f ? u *= u: 2 === f ? u *= u * u: 3 === f ? u *= u * u * u: 4 === f && (u *= u * u * u * u),
                1 === c ? this.ratio = 1 - u: 2 === c ? this.ratio = u: .5 > t / l ? this.ratio = u / 2 : this.ratio = 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o,
                    this._rawPrevTime = h,
                    F.push(this),
                    void(this._lazy = [t, e]);
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                n = n._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._callback("onUpdate")),
                r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
            }
        },
        n._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1,
            this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target: D.selector(e) || e;
            var s, r, n, a, o, l, h, _, u, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((f(e) || M(e)) && "number" != typeof e[0]) for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
            else {
                if (this._targets) {
                    for (s = this._targets.length; --s > -1;) if (e === this._targets[s]) {
                        o = this._propLookup[s] || {},
                        this._overwrittenProps = this._overwrittenProps || [],
                        r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {}: "all";
                        break
                    }
                } else {
                    if (e !== this.target) return ! 1;
                    o = this._propLookup,
                    r = this._overwrittenProps = t ? this._overwrittenProps || {}: "all"
                }
                if (o) {
                    if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                        for (n in h) o[n] && (u || (u = []), u.push(n));
                        if ((u || !t) && !H(this, i, e, u)) return ! 1
                    }
                    for (n in h)(a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next: a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]),
                    _ && (r[n] = 1); ! this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        },
        n.invalidate = function() {
            return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {}: [],
            R.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -_, this.render( - this._delay)),
            this
        },
        n._enabled = function(t, e) {
            if (o || a.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s) for (i = s.length; --i > -1;) this._siblings[i] = G(s[i], this, !0);
                else this._siblings = G(this.target, this, !0)
            }
            return R.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable": "_onDisable", this)
        },
        D.to = function(t, e, i) {
            return new D(t, e, i)
        },
        D.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new D(t, e, i)
        },
        D.fromTo = function(t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new D(t, e, s)
        },
        D.delayedCall = function(t, e, i, s, r) {
            return new D(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        },
        D.set = function(t, e) {
            return new D(t, 0, e)
        },
        D.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t: D.selector(t) || t;
            var i, s, r, n;
            if ((f(t) || M(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;) for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
            } else for (s = G(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        },
        D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
        };
        var tt = g("plugins.TweenPlugin",
        function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = tt.prototype
        },
        !0);
        if (n = tt.prototype, tt.version = "1.18.0", tt.API = 2, n._firstPT = null, n._addTween = L, n.setRatio = E, n._kill = function(t) {
            var e, i = this._overwriteProps,
            s = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = [];
            else for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
            for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)),
            s = s._next;
            return ! 1
        },
        n._roundProps = function(t, e) {
            for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e),
            i = i._next
        },
        D._onPluginEvent = function(t, e) {
            var i, s, r, n, a, o = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; o;) {
                    for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next; (o._prev = s ? s._prev: n) ? o._prev._next = o: r = o,
                    (o._next = s) ? s._prev = o: n = o,
                    o = a
                }
                o = e._firstPT = r
            }
            for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
            o = o._next;
            return i
        },
        tt.activate = function(t) {
            for (var e = t.length; --e > -1;) t[e].API === tt.API && (B[(new t[e])._propName] = t[e]);
            return ! 0
        },
        m.plugin = function(t) {
            if (! (t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
            var e, i = t.propName,
            s = t.priority || 0,
            r = t.overwriteProps,
            n = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            },
            a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
            function() {
                tt.call(this, i, s),
                this._overwriteProps = r || []
            },
            t.global === !0),
            o = a.prototype = new tt(i);
            o.constructor = a,
            a.API = t.API;
            for (e in n)"function" == typeof t[e] && (o[n[e]] = t[e]);
            return a.version = t.version,
            tt.activate([a]),
            a
        },
        s = t._gsQueue) {
            for (r = 0; r < s.length; r++) s[r]();
            for (n in p) p[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
        }
        o = !1
    }
} ("undefined" != typeof module && module.exports && "undefined" != typeof global ? global: this || window, "TweenMax"),
!
function(t, e) {
    "use strict";
    var i = "ontouchstart" in window,
    s = {
        start: i ? "touchstart": "mousedown",
        end: i ? "touchend": "mouseup"
    };
    t.event.special[e] = {
        setup: function() {
            t(this).off("click").on(s.start + " " + s.end,
            function(t) {
                s.E = t.originalEvent.changedTouches ? t.originalEvent.changedTouches[0] : t
            }).on(s.start,
            function(t) {
                t.which && 1 !== t.which || (s.target = t.target, s.time = (new Date).getTime(), s.X = s.E.pageX, s.Y = s.E.pageY)
            }).on(s.end,
            function(i) {
                var r = Math.abs(s.X - s.E.pageX) <= 10 && Math.abs(s.Y - s.E.pageY) <= 10;
                s.target === i.target && (new Date).getTime() - s.time < 500 && r && r && (i.type = e, i.pageX = s.E.pageX, i.pageY = s.E.pageY, t.event.dispatch.call(this, i))
            })
        },
        remove: function() {
            t(this).off(s.start + " " + s.end)
        }
    },
    t.fn[e] = function(t) {
        return this[t ? "on": "trigger"](e, t)
    }
} (jQuery, "tap"),
function(t, e) {
    "use strict";
    var i = "ontouchstart" in window,
    s = {
        start: i ? "touchstart": "mousedown",
        end: i ? "touchend": "mouseup"
    };
    t.event.special[e] = {
        setup: function() {
            t(this).off("click").on(s.start + " " + s.end,
            function(t) {
                s.E = t.originalEvent.changedTouches ? t.originalEvent.changedTouches[0] : t
            }).on(s.start,
            function(i) {
                if (!i.which || 1 === i.which) {
                    s.target = i.target,
                    s.time = (new Date).getTime(),
                    s.X = s.E.pageX,
                    s.Y = s.E.pageY;
                    var r = this,
                    n = i;
                    s.timer = setTimeout(function() {
                        s.timer = null,
                        n.type = e,
                        n.pageX = s.E.pageX,
                        n.pageY = s.E.pageY,
                        t.event.dispatch.call(r, n)
                    },
                    550)
                }
            }).on(s.end,
            function(t) {
                s.target === t.target && (new Date).getTime() - s.time < 550 && s.timer && (clearTimeout(s.timer), s.timer = null)
            })
        },
        remove: function() {
            t(this).off(s.start + " " + s.end)
        }
    },
    t.fn[e] = function(t) {
        return this[t ? "on": "trigger"](e, t)
    }
} (jQuery, "press");
var wxTool = function() {
    var t, e = !0,
    i = {
        link: "",
        imgUrl: "",
        title: "",
        desc: "",
        success: function() {},
        cancel: function() {}
    },
    s = function(t) {
        wx.onMenuShareAppMessage({
            title: t.title,
            desc: t.desc,
            link: t.link,
            imgUrl: t.imgUrl,
            type: "link",
            dataUrl: "",
            success: t.success,
            cancel: t.cancel
        }),
        wx.onMenuShareTimeline({
            title: t.desc,
            link: t.link,
            imgUrl: t.imgUrl,
            success: t.success,
            cancel: t.cancel
        }),
        wx.onMenuShareQQ(t),
        wx.onMenuShareWeibo(t)
    },
    r = function(t, e) {
        wx.config({
            debug: e || !1,
            appId: t.appId,
            timestamp: t.timestamp,
            nonceStr: t.nonceStr,
            signature: t.signature,
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
        }),
        wx.error(function(t) {})
    },
    n = function(t) {
        e ? (e = !1, wx.ready(function() {
            s($.extend({},
            i, t))
        })) : s($.extend({},
        i, t))
    };
    return {
        init: function(e) {
            var i = this;
            return t = $.ajax({
                url: e.url,
                data: e.data || {},
                dataType: e.dataType || "jsonp",
                type: e.type || "GET"
            }),
            t.done(function(t) {
                "0" == t.ret && t.data && (r(t.data, e.debug), i.share = n, $.isFunction(e.done) && e.done())
            }),
            t
        },
        wxInit: function(t, e, i) {
            var s = this;
            r(t, i),
            s.share = n,
            $.isFunction(e) && e()
        }
    }
} ();

var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global: this || window; (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine.plugin({
        propName: "T3",
        priority: 0,
        API: 2,
        version: "1.0.0",
        overwriteProps: ["opacity", "rotation", "rotate", "rotationX", "rotationY", "rotationZ", "x", "y", "z", "scale", "scaleX", "scaleY", "scaleZ"],
        init: function(e, a, o) {
            if (!e.uuid) return ! 1;
            var t = this;
            return Object.keys(a).forEach(function(o) {
                var i = a[o];
                switch (o) {
                case "opacity":
                    t._addTween(e.material, "opacity", e.material.opacity, i, o);
                    break;
                case "rotation":
                    t._addTween(e, o, e.rotation.x, i, o),
                    t._addTween(e, o, e.rotation.y, i, o),
                    t._addTween(e, o, e.rotation.z, i, o);
                    break;
                case "rotate":
                    t._addTween(e.material, "rotation", e.material.rotation, i, o);
                    break;
                case "rotationX":
                    t._addTween(e.rotation, "x", e.rotation.x, i, o);
                    break;
                case "rotationY":
                    t._addTween(e.rotation, "y", e.rotation.y, i, o);
                    break;
                case "rotationZ":
                    t._addTween(e.rotation, "z", e.rotation.z, i, o);
                    break;
                case "x":
                    t._addTween(e.position, "x", e.position.x, i, o);
                    break;
                case "y":
                    t._addTween(e.position, "y", e.position.y, i, o);
                    break;
                case "z":
                    t._addTween(e.position, "z", e.position.z, i, o);
                    break;
                case "scale":
                    t._addTween(e.scale, "x", e.scale.x, i, o),
                    t._addTween(e.scale, "y", e.scale.y, i, o);
                    break;
                case "scaleX":
                    t._addTween(e.scale, "x", e.scale.x, i, o);
                    break;
                case "scaleY":
                    t._addTween(e.scale, "y", e.scale.y, i, o);
                    break;
                case "scaleZ":
                    t._addTween(e.scale, "z", e.scale.z, i, o);
                    break;
                default:
                    console.warn('Property "' + o + '" is not supported by the PixiPlugin')
                }
            }),
            !0
        },
        set: function(e) {
            this._super.setRatio.call(this, e)
        }
    })
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()();



//cfg start


var CFG = function() {
    function e(e, t) {
        return e = e || 0,
        t = t || 300,
        function(i, p, a, g) {
            var s = p.cur + a.z - e;
            if (s >= -50) {
                var c = s / (t / a.speed);
                c > 1 && (c = 1),
                c < 0 && (c = 0),
                n.set(this, {
                    T3: {
                        opacity: 1 - c
                    }
                })
            }
        }
    }
    var t = {},
    i = function(e, t, i, p) {
        var n = [];
        e = $.isArray(e) ? e: [e];
        for (var a = 0; a < e.length; a++) n.push((p || "images") + "/" + (t ? t + "/": "") + e[a] + (/\.(jpg|gif|mp3|mp4)$/.test(e[a]) ? "": i ? "." + i: ".png"));
        return n
    };
    // t.all = [];
    // var p = ["bg.jpg", "m1", "stone1", "stone2", "stone3", "stone4", "stone5", "stone6", "stone7", "txt1", "arrow", "txt2", "txt3", "txt4", "yan1", "yan2", "guang2", "guang3", "light"];
    // Array.prototype.push.apply(t.all, i(p, "1")),
    // p = ["bg.jpg", "diqiu", "dot", "gts", "ws","jds","yyzs","girl3","xh","xh2","xh3","girl4", "girl5", "guang", "haishui", "huichen1", "huichen2", "starlight", "tengman4", "tengman5", "tengman", "txt1", "txt2", "txt3", "txt4", "yezi1", "yezi2", "yezi3", "yezi4", "yezi5", "yezi6", "yezi7", "yezi8"],
    // Array.prototype.push.apply(t.all, i(p, "2")),
    // p = ["bg.jpg", "clock", "cloud2", "cloud3", "cloud4", "crown", "deng", "gezi2", "gezi3", "girl1", "girl2", "girl3", "girl4", "girl6", "girl7", "girl8", "girl9", "girl10", "gongjian", "gongmen", "gongmen2", "haojiao", "huaban1", "huaban2", "huaban3", "huaban4", "huaban5", "huaban6", "huaban7", "huilang", "shuqin", "stage", "txt1", "txt2", "txt3", "zhuzi", "girls"],
    // Array.prototype.push.apply(t.all, i(p, "3")),
    // t.end = [],
    // p = ["logo", "btn", "vs", "txt", "restart"],
    // p.push(navigator.userAgent.match(/Android (.+); /) ? "bg1.jpg": "bg.jpg"),
    // Array.prototype.push.apply(t.end, i(p, "end")),
    // t.option = {};
    var n = TweenMax,
    a = 0,
    g = 9500,
    s = 121500,
    c = 11660;
    return t.objs = {
        group1: {
            start: 0,
            type: "group",
            len: g + 500,
            child: {
                bg: {
                    img: "1/ysybg.jpg",
                    w: 800,
                    h: 800,
                    dir: 1,
                    len: g,
                    z: -1e4,
                    speed: 0.1,
                    s: 20
                },
                txt1: {
                    img: "1/txt1.png",
                    w: 357,
                    h: 69,
                    dir: 1,
                    z: 0,
                    speed: 1.5,
                    s: .5,
                    handle: e()
                },
                arrow: {
                    img: "1/arrow.png",
                    w: 20,
                    h: 30,
                    dir: 1,
                    y: -60,
                    z: 0,
                    speed: 1.5,
                    s: .5,
                    mc: !0,
                    vTiles: 1,
                    hTiles: 3,
                    duration: 500,
                    handle: e()
                },
                txt2: {
                    img: "1/txt2.png",
                    w: 356,
                    h: 69,
                    dir: 1,
                    z: -1500,
                    speed: 1,
                    s: .5,
                    effect: "opacity",
                    zlen: 1e3,
                    zdua: 800,
                    handle: e()
                },
                stones1: {
                    type: "particle",
                    size: 9,
                    rotate: 4,
                    z: -2500,
                    z1: -4500,
                    R: 200,
                    R1: 400,
                    start: 0,
                    len: 5e3,
                    effect: "opacity",
                    zlen: 3e3,
                    zdua: 800,
                    speed: 1,
                    img: [{
                        url: "1/stone1.png",
                        w: 297,
                        h: 236
                    },
                    {
                        url: "1/stone2.png",
                        w: 235,
                        h: 172
                    },
                    {
                        url: "1/stone3.png",
                        w: 297,
                        h: 236
                    },
                    {
                        url: "1/stone4.png",
                        w: 174,
                        h: 195
                    },
                    {
                        url: "1/stone8.png",
                        w: 179,
                        h: 190
                    }]
                },
                yans1: {
                    type: "particle",
                    size: 4,
                    rotate: 2,
                    z: -2700,
                    z1: -4300,
                    R: 100,
                    R1: 250,
                    start: 0,
                    len: 5e3,
                    effect: "opacity",
                    speed: 1,
                    img: [{
                        url: "1/yan1.png",
                        w: 368,
                        h: 355,
                        s: .65
                    },
                    {
                        url: "1/yan2.png",
                        w: 321,
                        h: 331,
                        s: .65
                    }]
                },
                txt3: {
                    img: "1/txt3.png",
                    w: 266,
                    h: 69,
                    dir: 1,
                    z: -5e3,
                    speed: 1,
                    s: .5,
                    effect: "opacity",
                    zlen: 1500,
                    zdua: 800,
                    handle: e()
                },
                stones2: {
                    type: "particle",
                    size: 9,
                    rotate: 2,
                    z: -5500,
                    z1: -7500,
                    R: 200,
                    R1: 400,
                    start: 0,
                    len: 8e3,
                    effect: "opacity",
                    zlen: 3e3,
                    zdua: 800,
                    img: [{
                        url: "1/stone5.png",
                        w: 175,
                        h: 150
                    },
                    {
                        url: "1/stone6.png",
                        w: 104,
                        h: 93
                    },
                    {
                        url: "1/stone7.png",
                        w: 60,
                        h: 55
                    },
                    {
                        url: "1/stone1.png",
                        w: 297,
                        h: 236
                    },
                    {
                        url: "1/stone9.png",
                        w: 157,
                        h: 184
                    }]
                },
                yans2: {
                    type: "particle",
                    size: 5,
                    rotate: 2,
                    z: -5700,
                    z1: -7300,
                    R: 50,
                    R1: 250,
                    start: 3e3,
                    len: 6e3,
                    effect: "opacity",
                    speed: 1,
                    img: [{
                        url: "1/yan1.png",
                        w: 368,
                        h: 355,
                        s: .65
                    },
                    {
                        url: "1/yan2.png",
                        w: 321,
                        h: 331,
                        s: .65
                    }]
                },
                txt4: {
                    img: "1/txt4.png",
                    w: 383,
                    h: 92,
                    dir: 1,
                    z: -7e3,
                    speed: 1,
                    s: .5,
                    effect: "opacity",
                    zlen: 1500,
                    zdua: 800,
                    handle: e()
                },
                guang2: {
                    type: "group",
                    start: a + 5e3,
                    len: 6e3,
                    x: 0,
                    y: 0,
                    handle: function(e, t, i, p) {
                        n.set(this, {
                            T3: {
                                rotationZ: p * Math.PI / 1e4
                            }
                        })
                    },
                    child: {
                        g: {
                            img: "1/guang2.png",
                            w: 720,
                            h: 808,
                            dir: 1,
                            y: -60,
                            x: 80,
                            start: 4e3,
                            z: -8980,
                            speed: 1,
                            s: .7,
                            effect: "opacity",
                            zlen: 5e3,
                            zdua: 800,
                            handle: function(e, t, i, p) {
                                n.set(this, {
                                    T3: {
                                        rotate: p * Math.PI / 1e4
                                    }
                                })
                            }
                        }
                    }
                },
                guang3: {
                    img: "1/guang3.png",
                    w: 1e3,
                    h: 1e3,
                    dir: 1,
                    y: 0,
                    x: 0,
                    start: 4e3,
                    z: -9e3,
                    speed: 1,
                    s: .7,
                    effect: "opacity",
                    zlen: 5e3,
                    zdua: 800,
                    handle: function(e, t, i, p) {
                        n.set(this, {
                            T3: {
                                rotate: p * Math.PI / 5e3
                            }
                        })
                    }
                },
                lights: {
                    type: "particle",
                    size: 30,
                    rotate: 1,
                    z: -7e3,
                    z1: -8800,
                    R: 100,
                    R1: 300,
                    Rofs: Math.PI / 2,
                    start: 4e3,
                    len: 6e3,
                    effect: "opacity",
                    zdua: 3e3,
                    zlen: 800,
                    speed: 1,
                    img: [{
                        url: "1/light.png",
                        w: 3,
                        h: 50
                    }]
                },
                m1: {
                    img: "1/m1.png",
                    w: 461,
                    h: 577,
                    dir: 1,
                    y: -65,
                    start: 4e3,
                    z: -9e3,
                    speed: 1,
                    s: .8,
                    effect: "opacity",
                    zlen: 5e3,
                    zdua: 800
                },
                yans3: {
                    type: "particle",
                    size: 3,
                    rotate: 2,
                    y: -308,
                    x: 0,
                    z: -8900,
                    z1: -9100,
                    R: 0,
                    R1: 50,
                    start: 5e3,
                    len: 6e3,
                    effect: "opacity",
                    speed: 1,
                    img: [{
                        url: "1/yan1.png",
                        w: 467,
                        h: 541,
                        s: .35
                    },
                    {
                        url: "1/yan2.png",
                        w: 486,
                        h: 418,
                        s: .35
                    },
                    {
                        url: "1/yun1.png",
                        w: 340,
                        h: 183,
                        s: .35
                    }]
                }
            }
        },
        group2: {
            start: a += g,
            type: "group",
            len: s + 600,
            s:10,
            child: {
                bg: {
                    img: "2/bg.jpg",
                    w: 800,
                    h: 800,
                    dir: 1,
                    x:-350,
                    len: s,
                    z: -a - 1e4,
                    speed: .01,
                    s: 20
                },
                gts: {
                    img: "2/gts.png",
                    w: 750,
                    h: 447,
                    dir: 1,
                    z: -a - 100,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                gq: {
                    img: "2/gq.png",
                    w: 355,
                    h:200,
                    x:100,
                    dir: 1,
                    z: -a - 900,
                    speed: .15,
                    s: 1.85,
                    s: .885,
                    effect: "opacity",
                    start: a + 0
                },
                ws: {
                    img: "2/ws.png",
                    w: 715,
                    h: 352,
                    dir: 1,
                    x: -40,
                    y:-50,
                    z: -a - 1300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                gq_text: {
                    img: "2/gq_text.png",
                    w: 250,
                    h: 81,
                    dir: 1,
                    y:-120,
                    z: -a - 1200,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                jds: {
                    img: "2/jds.png",
                    w: 682,
                    h: 816,
                    dir: 1,
                    x: -40,
                    z: -a - 2500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                xh: {
                    img: "2/xh.png",
                    w: 186,
                    h: 180,
                    dir: 1,
                    x: 80,
                    y: 80,
                    z: -a - 2100,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                xh2: {
                    img: "2/xh2.png",
                    w: 65,
                    h: 85,
                    dir: 1,
                    x: -100,
                    y: 80,
                    z: -a - 2150,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                xh3: {
                    img: "2/xh3.png",
                    w: 137,
                    h: 104,
                    dir: 1,
                    x: -115,
                    y: 0,
                    z: -a - 2200,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                yyzs: {
                    img: "2/yyzs.png",
                    w: 622,
                    h: 688,
                    dir: 1,
                    y:-70,
                    z: -a - 3700,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                yf: {
                    img: "2/yf.png",
                    w: 523,
                    h: 298,
                    y:120,
                    dir: 1,
                    z: -a - 3300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                yyy: {
                    img: "2/yyy.png",
                    w: 629,
                    h:392,
                    x:-180,
                    y:100,
                    dir: 1,
                    z: -a - 3350,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                yyy2: {
                    img: "2/yyy2.png",
                    w: 690,
                    h:363,
                    x:180,
                    y:100,
                    dir: 1,
                    z: -a - 3250,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                ttnk: {
                    img: "2/ttnk.png",
                    w: 701,
                    h:721,
                    dir: 1,
                    z: -a - 4900,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hohc: {
                    img: "2/hogc.png",
                    w: 690,
                    h:344,
                    dir: 1,
                    y:80,
                    x:20,
                    z: -a - 4400,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                wdnf: {
                    img: "2/wdnf1.png",
                    w: 627,
                    h:208,
                    dir: 1,
                    z: -a - 6100,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hlbtr: {
                    img: "2/hlbtr.png",
                    w: 369,
                    h:1009,
                    dir: 1,
                    x:-100,
                    z: -a - 7600,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hlbt: {
                    img: "2/hlbtl.png",
                    w: 380,
                    h:1047,
                    dir: 1,
                    x:100,
                    z: -a - 7300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hlbt_wz: {
                    img: "2/hlbt_wz1.png",
                    w: 531,
                    h:216,
                    dir: 1,
                    z: -a - 6660,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hlbt_te: {
                    img: "2/hlbt_wz.png",
                    w: 531,
                    h:216,
                    y:-120,
                    dir: 1,
                    z: -a - 6500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                // swqs: {
                //     img: "2/swqs.png",
                //     w: 750,
                //     h:644,
                //     dir: 1,
                //     y:-80,
                //     z: -a - 9000,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // lz1: {
                //     img: "2/lz1.png",
                //     w: 680,
                //     h:578,
                //     dir: 1,
                //     y:-100,
                //     z: -a - 8600,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // lz2: {
                //     img: "2/lz2.png",
                //     w: 481,
                //     h:339,
                //     dir: 1,
                //     y:180,
                //     x:-40,
                //     z: -a - 9400,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // swss_text: {
                //     img: "2/swss_text.png",
                //     w: 641,
                //     h:268,
                //     dir: 1,
                //     y:-140,
                //     z: -a - 8600,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                czr: {
                    img: "2/czr.png",
                    w: 424,
                    h:409,
                    dir: 1,
                    z: -a - 9000,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                car: {
                    img: "2/car.png",
                    w: 325,
                    h:202,
                    dir: 1,
                    x:90,
                    y:90,
                    z: -a - 9400,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                zycz_text: {
                    img: "2/zycz_text.png",
                    w: 628,
                    h:268,
                    dir: 1,
                    y:-180,
                    z: -a - 9000,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                bxjg: {
                    img: "2/bxjg.png",
                    w: 749,
                    h:756,
                    dir: 1,
                    y:25,
                    z: -a - 11200,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                gcjg: {
                    img: "2/gcjg.png",
                    w: 1248,
                    h:968,
                    y:75,
                    x:90,
                    dir: 1,
                    z: -a - 10800,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                bxjg_text: {
                    img: "2/bxjg_text.png",
                    w: 632,
                    h:268,
                    y:-175,
                    dir: 1,
                    z: -a - 10400,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                jjh: {
                    img: "2/jjh.png",
                    w: 644,
                    h:814,
                    dir: 1,
                    z: -a - 12600,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                jjh2: {
                    img: "2/jjh2.png",
                    w: 573,
                    h:425,
                    y:125,
                    x:-15,
                    dir: 1,
                    z: -a - 12800,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                jjh_text: {
                    img: "2/jjh_text.png",
                    w: 652,
                    h:268,
                    y:-300,
                    dir: 1,
                    z: -a - 12500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szw: {
                    img: "2/szw.png",
                    w: 750,
                    h:496,
                    x:90,
                    y:30,
                    dir: 1,
                    z: -a - 14000,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szwy: {
                    img: "2/szwy.png",
                    w: 709,
                    h:191,
                    x:-5,
                    y:100,
                    dir: 1,
                    z: -a - 14400,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szw_text: {
                    img: "2/szw_text.png",
                    w: 656,
                    h:268,
                    y:-160,
                    dir: 1,
                    z: -a -13800,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                trw: {
                    img: "2/trw.png",
                    w: 594,
                    h:556,
                    y:30,
                    dir: 1,
                    z: -a - 15200,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                ttv: {
                    img: "2/ttv.png",
                    w: 674,
                    h:829,
                    y:80,
                    dir: 1,
                    z: -a - 15600,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                tmm_text: {
                    img: "2/tmm_text.png",
                    w: 637,
                    h:268,
                    y:-160,
                    dir: 1,
                    z: -a - 15600,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hfq: {
                    img: "2/hfq.png",
                    w: 750,
                    h:993,
                    y:30,
                    dir: 1,
                    z: -a - 17600,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hfq_text: {
                    img: "2/hfq_text.png",
                    w: 640,
                    h:268,
                    y:-160,
                    dir: 1,
                    z: -a - 17000,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                // jjdh: {
                //     img: "2/jjdh.png",
                //     w: 714,
                //     h:397,
                //     y:60,
                //     dir: 1,
                //     z: -a - 21000,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // dhy: {
                //     img: "2/dhy.png",
                //     w: 750,
                //     h:216,
                //     y:-30,
                //     dir: 1,
                //     z: -a - 20600,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // dhy2: {
                //     img: "2/dhy2.png",
                //     w: 343,
                //     h:150,
                //     y:380,
                //     x:250,
                //     dir: 1,
                //     z: -a - 20400,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // jjdh_text: {
                //     img: "2/jjdh_text.png",
                //     w: 635,
                //     h:270,
                //     y:-150,
                //     dir: 1,
                //     z: -a - 20300,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // lmoy: {
                //     img: "2/lmoy.png",
                //     w: 1176,
                //     h:336,
                //     y:-40,
                //     dir: 1,
                //     z: -a - 22900,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // lmo: {
                //     img: "2/lmo.png",
                //     w: 462,
                //     h:421,
                //     dir: 1,
                //     y:52,
                //     z: -a - 22500,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // lmo_text: {
                //     img: "2/lmo_text.png",
                //     w: 639,
                //     h:270,
                //     dir: 1,
                //     y:-150,
                //     z: -a - 22500,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // txt1: {
                //     // img: "2/txt1.png",
                //     w: 619,
                //     h: 208,
                //     dir: 1,
                //     offset: 1e3,
                //     z: -a - 100,
                //     speed: 1,
                //     s: .5,
                //     effect: "opacity",
                //     zlen: 1e3,
                //     zdua: 500,
                //     handle: e()
                // },
                dot1s: {
                    type: "particle",
                    size: 40,
                    rotate: 1,
                    z: -a - 300,
                    z1: -a - 2500,
                    R: 100,
                    R1: 300,
                    Rofs: Math.PI / 2,
                    start: a,
                    len: 5e3,
                    effect: "opacity",
                    zdua: 2990,
                    zlen: 3e3,
                    speed: 1,
                    img: [{
                        url: "2/dot.png",
                        w: 3,
                        h: 25
                    }]
                },
                dot2s: {
                    type: "particle",
                    size: 40,
                    rotate: 1,
                    z: -a - 2500,
                    z1: -a - 4700,
                    R: 100,
                    R1: 300,
                    Rofs: Math.PI / 2,
                    start: a,
                    len: 5e3,
                    effect: "opacity",
                    zdua: 2990,
                    zlen: 3e3,
                    speed: 1,
                    img: [{
                        url: "2/dot.png",
                        w: 3,
                        h: 25
                    }]
                },
                dot3s: {
                    type: "particle",
                    size: 40,
                    rotate: 1,
                    z: -a - 4700,
                    z1: -a - 5500,
                    R: 100,
                    R1: 300,
                    Rofs: Math.PI / 2,
                    start: -a - 3500,
                    len: 5e3,
                    effect: "opacity",
                    zdua: 2990,
                    zlen: 3e3,
                    speed: 1,
                    img: [{
                        url: "2/dot.png",
                        w: 3,
                        h: 25
                    }]
                },
                dot3s: {
                    type: "particle",
                    size: 40,
                    rotate: 1,
                    z: -a - 5500,
                    z1: -a - 7500,
                    R: 100,
                    R1: 300,
                    Rofs: Math.PI / 2,
                    start: -a - 3500,
                    len: 5e3,
                    effect: "opacity",
                    zdua: 2990,
                    zlen: 3e3,
                    speed: 1,
                    img: [{
                        url: "2/dot.png",
                        w: 3,
                        h: 25
                    }]
                },
                // txt2: {
                //     // img: "2/txt2.png",
                //     w: 278,
                //     h: 33,
                //     dir: 1,
                //     z: -a - 30e3,
                //     speed: 1,
                //     s: .5,
                //     effect: "opacity",
                //     zlen: 2e3,
                //     zdua: 800,
                //     handle: e()
                // },
                // leafs: {
                //     type: "particle",
                //     size: 30,
                //     rotate: 2,
                //     x: 0,
                //     y: 0,
                //     z: -a - 1000,
                //     z1: -a - 1250,
                //     zofs: 50,
                //     R: 100,
                //     R1: 400,
                //     len: 1e3,
                //     speed: 1,
                //     s: .5,
                //     effect: "opacity",
                //     img: [{
                //         url: "2/yezi1.png",
                //         w: 70,
                //         h: 71
                //     },
                //     {
                //         url: "2/yezi2.png",
                //         w: 92,
                //         h: 95
                //     },
                //     {
                //         url: "2/yezi3.png",
                //         w: 97,
                //         h: 76
                //     },
                //     {
                //         url: "2/yezi4.png",
                //         w: 80,
                //         h: 65
                //     },
                //     {
                //         url: "2/yezi5.png",
                //         w: 74,
                //         h: 62
                //     },
                //     {
                //         url: "2/yezi6.png",
                //         w: 45,
                //         h: 80
                //     },
                //     {
                //         url: "2/yezi7.png",
                //         w: 54,
                //         h: 77
                //     },
                //     {
                //         url: "2/yezi8.png",
                //         w: 67,
                //         h: 67
                //     }]
                // },
                huichen: {
                    type: "particle",
                    size: 10,
                    rotate: 2,
                    len: 7800,
                    z: -a - 2300,
                    z1: -a - 5e3,
                    R: 80,
                    R1: 200,
                    effect: "opacity",
                    zlen: 3e3,
                    zdua: 800,
                    speed: 1,
                    s: .5,
                    img: [{
                        url: "2/huichen1.png",
                        w: 524,
                        h: 488
                    },
                    {
                        url: "2/huichen2.png",
                        w: 409,
                        h: 473
                    }]
                },
                // txt3: {
                //     // img: "2/txt4.png",
                //     w: 242,
                //     h: 74,
                //     z: -a - 5700,
                //     speed: 1,
                //     s: .5,
                //     effect: "opacity",
                //     zlen: 3e3,
                //     zdua: 800,
                //     handle: e()
                // },
                light1: {
                    img: "2/guang.png",
                    w: 784,
                    h: 736,
                    start: a + 2800,
                    z: -a - 5800,
                    speed: 1,
                    s: .75,
                    effect: "opacity",
                    zlen: 3e3,
                    zdua: 1500,
                    handle: function(e, t, i, p) {
                        var a = Power2.easeIn.getRatio((p - 2500) / 1e3);
                        n.set(this, {
                            T3: {
                                rotate: -(1 - p / 3e3) * (Math.PI / 2),
                                x: p < 2500 ? 0 : 150 * a,
                                y: p < 2500 ? 0 : 150 * -a
                            }
                        })
                    }
                },
                // earth: {
                //     // img: "2/diqiu.png",
                //     w: 504,
                //     h: 384,
                //     start: a + 2800,
                //     z: -a - 5820,
                //     speed: 1,
                //     s: .75,
                //     effect: "opacity",
                //     zlen: 3e3,
                //     zdua: 1500,
                //     handle: function(e, t, i, p) {
                //         var a = Power2.easeIn.getRatio((p - 2500) / 1e3);
                //         n.set(this, {
                //             T3: {
                //                 x: p < 2500 ? 0 : 150 * a,
                //                 y: p < 2500 ? 0 : 150 * -a
                //             }
                //         })
                //     }
                // },
                // model1: function() {
                //     var e = 7500,
                //     t = 3e3,
                //     i = 6e3;
                //     return {
                //         type: "group",
                //         start: a + t,
                //         len: i,
                //         child: {
                //             m3: {
                //                 img: "2/girl3.png",
                //                 w: 177,
                //                 h: 442,
                //                 dir: 1,
                //                 x: -130,
                //                 y: -50,
                //                 z: -a - e - 200,
                //                 speed: 1,
                //                 s: .75,
                //                 effect: "opacity"
                //             },
                //             m4: {
                //                 img: "2/girl4.png",
                //                 w: 347,
                //                 h: 542,
                //                 dir: 1,
                //                 x: 100,
                //                 y: 100,
                //                 z: -a - e - 400,
                //                 s: .85,
                //                 effect: "opacity"
                //             },
                //             y1: {
                //                 img: "2/tengman.png",
                //                 w: 697,
                //                 h: 719,
                //                 x: 0,
                //                 y: 0,
                //                 dir: 1,
                //                 z: -a - e - 500,
                //                 s: 1.8,
                //                 effect: "opacity"
                //             }
                //         }
                //     }
                // } (),
                huichen1: {
                    type: "particle",
                    size: 5,
                    rotate: 2,
                    len: 7800,
                    start: a + 5500,
                    z: -a - 8500,
                    z1: -a - 9500,
                    R: 50,
                    R1: 100,
                    effect: "opacity",
                    zlen: 3e3,
                    zdua: 800,
                    speed: 1,
                    s: .65,
                    img: [{
                        url: "2/huichen1.png",
                        w: 524,
                        h: 488
                    },
                    {
                        url: "2/huichen2.png",
                        w: 409,
                        h: 473
                    }]
                },
                model2: function() {
                    var e = 11500,
                    t = 8e3,
                    i = 6e3;
                    return {
                        type: "group",
                        start: a + t,
                        len: i,
                        child: {
                            m5: {
                                // img: "2/girl5.png",
                                w: 570,
                                h: 494,
                                dir: 1,
                                x: 30,
                                y: 0,
                                z: -a - e - 100,
                                s: 1,
                                effect: "opacity",
                                zdua: 1200
                            },
                            y1: {
                                // img: "2/tengman4.png",
                                w: 552,
                                h: 633,
                                x: -320,
                                y: 300,
                                r: 2.8 * Math.PI / 4,
                                z: -a - e - 350,
                                s: 1.2,
                                effect: "opacity",
                                zdua: 1200
                            },
                            y2: {
                                // img: "2/tengman5.png",
                                w: 498,
                                h: 526,
                                x: 270,
                                y: 300,
                                r: 1.5 * Math.PI / 4,
                                z: -a - e - 350,
                                s: 1.2,
                                effect: "opacity",
                                zdua: 1200
                            },
                            y3: {
                                // img: "2/tengman4.png",
                                w: 498,
                                h: 526,
                                x: 270,
                                y: -250,
                                r: 7 * Math.PI / 4,
                                z: -a - e - 350,
                                s: 1.4,
                                effect: "opacity",
                                zdua: 1200
                            },
                            y4: {
                                // img: "2/tengman5.png",
                                w: 498,
                                h: 526,
                                x: -370,
                                y: -250,
                                r: .5 * Math.PI / 4,
                                dir: -1,
                                z: -a - e - 350,
                                s: 1.2,
                                effect: "opacity",
                                zdua: 1200
                            }
                        }
                    }
                } (),
                shape1: {
                    img: "2/starlight.png",
                    w: 750,
                    h: 750,
                    start: a + 7800,
                    z: -a - 121000,
                    effect: "opacity",
                    s: 1,
                    zlen: 5e3,
                    handle: function(e, t, i, p) {
                        n.set(this, {
                            T3: {
                                rotate: p * Math.PI / 7200
                            }
                        })
                    }
                }
            }
        },
        group3: {
            start: a += s,
            type: "group",
            len: c + 600,
            child: {
                bg: {
                    img: "3/bg.jpg",
                    w: 800,
                    h: 1060,
                    dir: 1,
                    z: -a - 1e4,
                    speed: .15,
                    s: 20,
                    y: -3e3
                    // handle: function(e, t, i, p) { /*去掉3背景*/
                    //     var a = t.cur - 34e3;
                    //     a > 0 ? n.set(this, {
                    //         T3: {
                    //             y: i.y + a / 3
                    //         }
                    //     }) : n.set(this, {
                    //         T3: {
                    //             y: i.y
                    //         }
                    //     })
                    // }
                },
                scene1: function() {
                    var t = 0,
                    i = 4e3;
                    return {
                        type: "group",
                        start: a + t,
                        len: i,
                        child: {
                            // clouds1: {
                            //     type: "particle",
                            //     size: 6,
                            //     rotate: 0,
                            //     x: 65,
                            //     y: -230,
                            //     z: -a - 700,
                            //     z1: -a - 2200,
                            //     zofs: 30,
                            //     R: 0,
                            //     R1: 50,
                            //     start: a,
                            //     len: 6e3,
                            //     speed: 1,
                            //     s: .5,
                            //     effect: "opacity",
                            //     img: [{
                            //         url: "3/cloud2.png",
                            //         w: 741,
                            //         h: 378
                            //     },
                            //     {
                            //         url: "3/cloud3.png",
                            //         w: 741,
                            //         h: 378
                            //     },
                            //     {
                            //         url: "3/cloud4.png",
                            //         w: 741,
                            //         h: 378
                            //     }]
                            // },
                            // clouds2: {
                            //     type: "particle",
                            //     size: 6,
                            //     rotate: 0,
                            //     x: -65,
                            //     y: -230,
                            //     z: -a - 800,
                            //     z1: -a - 2300,
                            //     zofs: 30,
                            //     R: 0,
                            //     R1: 50,
                            //     start: a,
                            //     len: 6e3,
                            //     speed: 1,
                            //     s: .5,
                            //     effect: "opacity",
                            //     img: [{
                            //         url: "3/cloud4.png",
                            //         w: 741,
                            //         h: 378
                            //     },
                            //     {
                            //         url: "3/cloud2.png",
                            //         w: 741,
                            //         h: 378
                            //     },
                            //     {
                            //         url: "3/cloud3.png",
                            //         w: 741,
                            //         h: 378
                            //     }]
                            // },
                            // dove1: {
                            //     img: "3/gezi2.png",
                            //     w: 187,
                            //     h: 220,
                            //     dir: -1,
                            //     z: -a - 500,
                            //     s: .75,
                            //     x: -150,
                            //     y: 100,
                            //     speed: 1.3,
                            //     effect: "opacity"
                            // },
                            // dove2: {
                            //     img: "3/gezi2.png",
                            //     w: 187,
                            //     h: 220,
                            //     dir: 1,
                            //     z: -a - 500,
                            //     s: .75,
                            //     x: 150,
                            //     y: 100,
                            //     speed: 1.3,
                            //     effect: "opacity"
                            // },
                            // zhuzi1: {
                            //     type: "particle",
                            //     size: 5,
                            //     rotate: 0,
                            //     x: 180,
                            //     y: -20,
                            //     z: -a - 800,
                            //     z1: -a - 2e3,
                            //     zofs: 0,
                            //     R: 0,
                            //     R1: 0,
                            //     start: a,
                            //     len: 3e3,
                            //     speed: 1,
                            //     s: .85,
                            //     effect: "opacity",
                            //     img: [{
                            //         url: "3/zhuzi.png",
                            //         w: 80,
                            //         h: 546
                            //     }]
                            // },
                            // zhuzi2: {
                            //     type: "particle",
                            //     size: 5,
                            //     rotate: 0,
                            //     x: -180,
                            //     y: -20,
                            //     z: -a - 800,
                            //     z1: -a - 2e3,
                            //     zofs: 1,
                            //     R: 0,
                            //     R1: 0,
                            //     start: a,
                            //     len: 3e3,
                            //     speed: 1,
                            //     s: .85,
                            //     effect: "opacity",
                            //     img: [{
                            //         url: "3/zhuzi.png",
                            //         w: 80,
                            //         h: 546
                            //     }]
                            // },
                            // cloud2: {
                            //     img: "3/cloud3.png",
                            //     w: 603,
                            //     h: 313,
                            //     z: -a - 300,
                            //     x: -50,
                            //     y: -230,
                            //     s: .55,
                            //     effect: "opacity"
                            // },
                            // cloud3: {
                            //     img: "3/cloud4.png",
                            //     w: 726,
                            //     h: 369,
                            //     z: -a - 450,
                            //     x: 50,
                            //     y: -80,
                            //     s: .55,
                            //     effect: "opacity"
                            // },
                            // cloud4: {
                            //     img: "3/cloud2.png",
                            //     w: 741,
                            //     h: 378,
                            //     z: -a - 620,
                            //     x: 0,
                            //     y: 120,
                            //     s: .6,
                            //     speed: 1.2,
                            //     effect: "opacity"
                            // },
                            // txt1: {
                            //     img: "3/txt1.png",
                            //     w: 278,
                            //     h: 77,
                            //     z: -a - 580,
                            //     x: 0,
                            //     y: 120,
                            //     s: .5,
                            //     speed: 1.2,
                            //     effect: "opacity",
                            //     handle: e()
                            // },
                            m1: {
                                img: "3/cl.png",
                                w: 269,
                                h: 542,
                                z: -a - 1050,
                                x: -70,
                                s: .5,
                                speed: 0.55,
                                effect: "opacity"
                            },
                            // clock: {
                            //     img: "3/clock.png",
                            //     w: 245,
                            //     h: 240,
                            //     z: -a - 1800,
                            //     x: 0,
                            //     y: 340,
                            //     s: .8,
                            //     effect: "opacity"
                            // },
                            // haojiao: {
                            //     img: "3/haojiao.png",
                            //     w: 352,
                            //     h: 181,
                            //     z: -a - 1750,
                            //     x: 0,
                            //     y: -170,
                            //     s: .3,
                            //     effect: "opacity"
                            // },
                            // shuqin1: {
                            //     img: "3/shuqin.png",
                            //     w: 280,
                            //     h: 275,
                            //     z: -a - 2050,
                            //     x: -120,
                            //     y: -160,
                            //     s: .65,
                            //     effect: "opacity"
                            // },
                            // shuqin2: {
                            //     img: "3/shuqin.png",
                            //     w: 280,
                            //     h: 275,
                            //     dir: -1,
                            //     z: -a - 2050,
                            //     x: 120,
                            //     y: -160,
                            //     s: .65,
                            //     effect: "opacity"
                            // }
                        }
                    }
                } (),
                scene2: function() {
                    var e = 2e3,
                    t = 0,
                    i = 6e3,
                    p = a;
                    return console.log("_postemp+_pos+800", p + e + 800),
                    {
                        type: "group",
                        start: a + t,
                        len: i,
                        child: {
                            m2: {
                                img: "3/qq.png",
                                w: 222,
                                h: 480,
                                z: -a - e - 290,
                                x: 70,
                                s: .6,
                                speed: 0.55,
                                effect: "opacity"
                            },
                            // gate: {
                            //     img: "3/gongmen.png",
                            //     w: 540,
                            //     h: 619,
                            //     z: -a - e - 300,
                            //     x: 0,
                            //     y: 0,
                            //     s: .8,
                            //     effect: "opacity"
                            // },
                            // deng: {
                            //     img: "3/deng.png",
                            //     w: 600,
                            //     h: 194,
                            //     z: -a - e - 100,
                            //     x: 0,
                            //     y: 250,
                            //     s: .6,
                            //     effect: "opacity"
                            // },
                            // clouds1: {
                            //     type: "particle",
                            //     size: 4,
                            //     rotate: 0,
                            //     x: 80,
                            //     y: -130,
                            //     z: -a - e - 300,
                            //     z1: -a - e - 1300,
                            //     zofs: 0,
                            //     R: 0,
                            //     R1: 0,
                            //     start: a,
                            //     len: 6e3,
                            //     speed: 1,
                            //     s: .5,
                            //     effect: "opacity",
                            //     img: [{
                            //         url: "3/cloud2.png",
                            //         w: 741,
                            //         h: 378
                            //     },
                            //     {
                            //         url: "3/cloud3.png",
                            //         w: 741,
                            //         h: 378
                            //     },
                            //     {
                            //         url: "3/cloud4.png",
                            //         w: 741,
                            //         h: 378
                            //     }]
                            // },
                            // clouds2: {
                            //     type: "particle",
                            //     size: 4,
                            //     rotate: 0,
                            //     x: -80,
                            //     y: -130,
                            //     z: -a - e - 425,
                            //     z1: -a - e - 1425,
                            //     zofs: 0,
                            //     R: 0,
                            //     R1: 0,
                            //     start: a,
                            //     len: 6e3,
                            //     speed: 1,
                            //     s: .5,
                            //     effect: "opacity",
                            //     img: [{
                            //         url: "3/cloud4.png",
                            //         w: 741,
                            //         h: 378
                            //     },
                            //     {
                            //         url: "3/cloud2.png",
                            //         w: 741,
                            //         h: 378
                            //     },
                            //     {
                            //         url: "3/cloud3.png",
                            //         w: 741,
                            //         h: 378
                            //     }]
                            // },
                            // c1: {
                            //     img: "3/cloud3.png",
                            //     w: 603,
                            //     h: 313,
                            //     dir: -1,
                            //     z: -a - e - 650,
                            //     x: 100,
                            //     y: 100,
                            //     s: .35,
                            //     effect: "opacity"
                            // },
                            // c2: {
                            //     img: "3/cloud2.png",
                            //     w: 741,
                            //     h: 378,
                            //     z: -a - e - 550,
                            //     x: -80,
                            //     y: 120,
                            //     s: .35,
                            //     effect: "opacity"
                            // },
                            // huilang: {
                            //     img: "3/huilang.png",
                            //     w: 953,
                            //     h: 688,
                            //     z: -a - e - 1200,
                            //     x: 0,
                            //     y: 100,
                            //     s: .8,
                            //     effect: "opacity",
                            //     handle: function(e, t, i, p) {}
                            // },
                            // shuqin1: {
                            //     img: "3/shuqin.png",
                            //     w: 280,
                            //     h: 275,
                            //     z: -a - e - 650,
                            //     x: -80,
                            //     y: -80,
                            //     s: .3,
                            //     effect: "opacity"
                            // },
                            // shuqin2: {
                            //     img: "3/shuqin.png",
                            //     w: 280,
                            //     h: 275,
                            //     dir: -1,
                            //     z: -a - e - 650,
                            //     x: 80,
                            //     y: -80,
                            //     s: .3,
                            //     effect: "opacity"
                            // },
                            // gongjian1: {
                            //     img: "3/gongjian.png",
                            //     w: 211,
                            //     h: 246,
                            //     dir: -1,
                            //     z: -a - e - 700,
                            //     x: -80,
                            //     y: 80,
                            //     s: .35,
                            //     effect: "opacity"
                            // },
                            // gongjian2: {
                            //     img: "3/gongjian.png",
                            //     w: 211,
                            //     h: 246,
                            //     z: -a - e - 700,
                            //     x: 80,
                            //     y: 80,
                            //     s: .35,
                            //     effect: "opacity"
                            // },
                            // m3: {
                            //     img: "3/girl3.png",
                            //     w: 245,
                            //     h: 389,
                            //     z: -a - e - 750,
                            //     x: -50,
                            //     y: -60,
                            //     s: .35,
                            //     effect: "opacity"
                            // },
                            // m4: {
                            //     img: "3/girl4.png",
                            //     w: 257,
                            //     h: 379,
                            //     z: -a - e - 850,
                            //     x: 50,
                            //     y: -60,
                            //     s: .35,
                            //     effect: "opacity"
                            // },
                            // m5: {
                            //     img: "3/girl5.png",
                            //     w: 252,
                            //     h: 364,
                            //     z: -a - e - 950,
                            //     x: -30,
                            //     y: -20,
                            //     s: .35,
                            //     effect: "opacity"
                            // },
                            // m6: {
                            //     img: "3/girl6.png",
                            //     w: 318,
                            //     h: 218,
                            //     z: -a - e - 1100,
                            //     x: 10,
                            //     y: -10,
                            //     s: .25,
                            //     effect: "opacity"
                            // }
                        }
                    }
                } (),
                scene3: function() {
                    var t = 3300,
                    i = 1e3,
                    p = 6e3;
                    return console.log(a + i, a + t),
                    {
                        type: "group",
                        start: a + i,
                        len: p,
                        child: {
                            // gate: {
                            //     type: "particle",
                            //     size: 2,
                            //     rotate: 0,
                            //     x: 0,
                            //     y: 0,
                            //     z: -a - t - 1500,
                            //     z1: -a - t - 2e3,
                            //     zofs: 0,
                            //     R: 0,
                            //     R1: 0,
                            //     start: a + 2e3,
                            //     len: 4e3,
                            //     speed: 1,
                            //     s: .85,
                            //     effect: "opacity",
                            //     img: [{
                            //         url: "3/gongmen2.png",
                            //         w: 468,
                            //         h: 637
                            //     }]
                            // },
                            // cloud1: {
                            //     img: "3/cloud2.png",
                            //     w: 741,
                            //     h: 378,
                            //     z: -a - t - 620,
                            //     x: 0,
                            //     y: 0,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity",
                            //     zlen: 2e3,
                            //     zdua: 500
                            // },
                            // cloud2: {
                            //     img: "3/cloud3.png",
                            //     w: 603,
                            //     h: 313,
                            //     z: -a - t - 2200,
                            //     x: -100,
                            //     y: 300,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            txt2: {
                                img: "3/zdy.png",
                                w: 418,
                                h: 690,
                                z: -a - t - 580,
                                x: 70,
                                y: 0,
                                s: .5,
                                speed: 0.55,
                                effect: "opacity",
                                zlen: 800,
                                zdua: 500,
                                handle: e()
                            },
                            // crown: {
                            //     img: "3/crown.png",
                            //     w: 640,
                            //     h: 220,
                            //     z: -a - t - 1300,
                            //     x: 0,
                            //     y: 280,
                            //     s: .5,
                            //     speed: 1,
                            //     effect: "opacity",
                            //     zlen: 1500,
                            //     zdua: 500
                            // },
                            // clouds1: {
                            //     type: "particle",
                            //     size: 4,
                            //     rotate: 0,
                            //     x: 90,
                            //     y: -130,
                            //     z: -a - t - 750,
                            //     z1: -a - t - 2e3,
                            //     zofs: 0,
                            //     R: 0,
                            //     R1: 30,
                            //     start: a,
                            //     len: 6e3,
                            //     speed: 1,
                            //     s: .5,
                            //     effect: "opacity",
                            //     img: [{
                            //         url: "3/cloud2.png",
                            //         w: 741,
                            //         h: 378
                            //     },
                            //     {
                            //         url: "3/cloud3.png",
                            //         w: 741,
                            //         h: 378
                            //     },
                            //     {
                            //         url: "3/cloud4.png",
                            //         w: 741,
                            //         h: 378
                            //     }]
                            // },
                            // clouds2: {
                            //     type: "particle",
                            //     size: 4,
                            //     rotate: 0,
                            //     x: -90,
                            //     y: -130,
                            //     z: -a - t - 900,
                            //     z1: -a - t - 2150,
                            //     zofs: 100,
                            //     R: 0,
                            //     R1: 30,
                            //     start: a,
                            //     len: 6e3,
                            //     speed: 1,
                            //     s: .5,
                            //     effect: "opacity",
                            //     img: [{
                            //         url: "3/cloud4.png",
                            //         w: 741,
                            //         h: 378
                            //     },
                            //     {
                            //         url: "3/cloud2.png",
                            //         w: 741,
                            //         h: 378
                            //     },
                            //     {
                            //         url: "3/cloud3.png",
                            //         w: 741,
                            //         h: 378
                            //     }]
                            // }
                        }
                    }
                } (),
                scene4: function() {
                    var e = 5500,
                    t = 4e3,
                    i = 7e3;
                    return {
                        type: "group",
                        start: a + t,
                        len: i,
                        child: {
                            // flowers: {
                            //     type: "particle",
                            //     size: 10,
                            //     rotate: 2,
                            //     x: 0,
                            //     y: 0,
                            //     z: -a - e - 300,
                            //     z1: -a - e - 1800,
                            //     zofs: 0,
                            //     R: 200,
                            //     R1: 300,
                            //     len: 7e3,
                            //     speed: 1,
                            //     s: .5,
                            //     effect: "opacity",
                            //     img: [{
                            //         url: "3/huaban1.png",
                            //         w: 163,
                            //         h: 152
                            //     },
                            //     {
                            //         url: "3/huaban2.png",
                            //         w: 73,
                            //         h: 153
                            //     },
                            //     {
                            //         url: "3/huaban3.png",
                            //         w: 179,
                            //         h: 107
                            //     },
                            //     {
                            //         url: "3/huaban4.png",
                            //         w: 138,
                            //         h: 117
                            //     },
                            //     {
                            //         url: "3/huaban5.png",
                            //         w: 87,
                            //         h: 73
                            //     },
                            //     {
                            //         url: "3/huaban6.png",
                            //         w: 77,
                            //         h: 78
                            //     },
                            //     {
                            //         url: "3/huaban7.png",
                            //         w: 109,
                            //         h: 44
                            //     }]
                            // },
                            c1: {
                                img: "3/zylz.png",
                                w: 513,
                                h: 546,
                                z: -a - e - 900,
                                x: -70,
                                s: .6,
                                speed: 0.55,
                                effect: "opacity"
                            },
                            // c2: {
                            //     img: "3/cloud3.png",
                            //     w: 603,
                            //     h: 313,
                            //     z: -a - e - 1e3,
                            //     x: 150,
                            //     y: 50,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // c3: {
                            //     img: "3/cloud4.png",
                            //     w: 726,
                            //     h: 399,
                            //     dir: -1,
                            //     z: -a - e - 700,
                            //     x: -50,
                            //     y: -150,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // m1: {
                            //     img: "3/girl7.png",
                            //     w: 610,
                            //     h: 216,
                            //     z: -a - e - 730,
                            //     x: 0,
                            //     y: -40,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // m2: {
                            //     img: "3/girl8.png",
                            //     w: 430,
                            //     h: 246,
                            //     z: -a - e - 1030,
                            //     x: -50,
                            //     y: 130,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // doves: {
                            //     type: "particle",
                            //     size: 17,
                            //     rotate: 1,
                            //     x: 0,
                            //     y: -250,
                            //     avg: !0,
                            //     avgBy: 14,
                            //     sort: !0,
                            //     avgStart: 3 * Math.PI / 4,
                            //     avgOfs: 0,
                            //     avgDir: 1,
                            //     dis: !0,
                            //     z: -a - e - 1600,
                            //     z1: -a - e - 3100,
                            //     zofs: 0,
                            //     R: 100,
                            //     R1: 200,
                            //     Rofs: 2 * -Math.PI / 4,
                            //     len: 6e3,
                            //     speed: 1,
                            //     s: .35,
                            //     effect: "opacity",
                            //     img: [{
                            //         url: "3/gezi3.png",
                            //         w: 193,
                            //         h: 230
                            //     }]
                            // },
                            // cxx: {
                            //     img: "3/cloud2.png",
                            //     w: 741,
                            //     h: 378,
                            //     z: -a - e - 2e3,
                            //     x: 200,
                            //     y: 250,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // c4: {
                            //     img: "3/cloud2.png",
                            //     w: 741,
                            //     h: 378,
                            //     z: -a - e - 1800,
                            //     x: -100,
                            //     y: 50,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // c5: {
                            //     img: "3/cloud4.png",
                            //     w: 726,
                            //     h: 399,
                            //     dir: -1,
                            //     z: -a - e - 2300,
                            //     x: 100,
                            //     y: -250,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // c6: {
                            //     img: "3/cloud2.png",
                            //     w: 741,
                            //     h: 378,
                            //     z: -a - e - 2500,
                            //     x: -100,
                            //     y: -150,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // c7: {
                            //     img: "3/cloud3.png",
                            //     w: 603,
                            //     h: 313,
                            //     dir: -1,
                            //     z: -a - e - 2700,
                            //     x: 50,
                            //     y: 50,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // c8: {
                            //     img: "3/cloud2.png",
                            //     w: 741,
                            //     h: 378,
                            //     z: -a - e - 3300,
                            //     x: -50,
                            //     y: -150,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // m3: {
                            //     img: "3/girl9.png",
                            //     w: 761,
                            //     h: 478,
                            //     z: -a - e - 3400,
                            //     x: -50,
                            //     y: -100,
                            //     s: .5,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // c9: {
                            //     img: "3/cloud3.png",
                            //     w: 603,
                            //     h: 313,
                            //     dir: -1,
                            //     z: -a - e - 3800,
                            //     x: 50,
                            //     y: 100,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // m4: {
                            //     img: "3/girl10.png",
                            //     w: 709,
                            //     h: 421,
                            //     z: -a - e - 3700,
                            //     x: 30,
                            //     y: 140,
                            //     s: .45,
                            //     speed: 1,
                            //     effect: "opacity"
                            // }
                        }
                    }
                } (),
                scene5: function() {
                    var t = 9500,
                    i = 6e3,
                    p = 6e3;
                    return {
                        type: "group",
                        start: a + i,
                        len: p,
                        child: {
                            // clouds: {
                            //     type: "particle",
                            //     size: 7,
                            //     rotate: 0,
                            //     x: 0,
                            //     y: 0,
                            //     avg: !0,
                            //     avgBy: 5,
                            //     sort: !1,
                            //     z: -a - t - 800,
                            //     z1: -a - t - 1300,
                            //     zofs: 100,
                            //     R: 100,
                            //     R1: 300,
                            //     dis: !0,
                            //     len: 6e3,
                            //     speed: 1,
                            //     s: .75,
                            //     effect: "opacity",
                            //     img: [{
                            //         url: "3/cloud4.png",
                            //         w: 726,
                            //         h: 369
                            //     },
                            //     {
                            //         url: "3/cloud2.png",
                            //         w: 741,
                            //         h: 378
                            //     },
                            //     {
                            //         url: "3/cloud3.png",
                            //         w: 603,
                            //         h: 313
                            //     }]
                            // },
                            txt: {
                                img: "3/ct.png",
                                w: 379,
                                h: 533,
                                z: -a - t - 500,
                                x: 70,
                                s: .6,
                                speed: 1,
                                effect: "opacity",
                                handle: function(){setTimeout(function(){},900)}
                            },
                            // c1: {
                            //     img: "3/cloud2.png",
                            //     w: 741,
                            //     h: 378,
                            //     z: -a - t - 600,
                            //     x: 0,
                            //     y: -20,
                            //     s: .6,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // stage: {
                            //     img: "3/stage.png",
                            //     w: 574,
                            //     h: 574,
                            //     y: 29,
                            //     x: 2,
                            //     z: -a - t - 2100,
                            //     s: 1.14,
                            //     speed: 1,
                            //     effect: "opacity"
                            // },
                            // girls: {
                            //     img: "3/girls.png",
                            //     w: 655,
                            //     h: 506,
                            //     z: -a - t - 2080,
                            //     s: .8,
                            //     speed: 1,
                            //     start: a + t,
                            //     effect: "opacity",
                            //     zlen: 1500,
                            //     zdua: 500,
                            //     x: -13,
                            //     y: -90
                            // }
                        }
                    }
                } ()
            }
        }
    },
    a += c,
    t.POS = a,
    t.movie = {},
    t.handle = function(e, t) {
        if (!this.option[e]) return null;
        var i = this.option[e];
        return {
            path: i[4],
            all: i[2],
            fra: i[3],
            start: i[8],
            sprite: i[5],
            row: i[6],
            last: i[7],
            width: i[0],
            height: i[1],
            speed: t || 15
        }
    },
    t
} (); !
function(n) {
    function e(n) {
        window.console && window.console.log ? window.console.log.apply(console, arguments) : window.opera && window.opera.postError && window.opera.postError(n)
    }
    var t, i, o = n(window),
    r = (n("body"), n(document), "ipad" == navigator.userAgent.toLowerCase().match(/ipad/i), navigator.platform.toLowerCase().indexOf("win") > -1, {
        line: Power0.easeNone,
        sini: Sine.easeIn,
        sino: Sine.easeOut,
        sinio: Sine.easeInOut,
        p1i: Power1.easeIn,
        p1o: Power1.easeOut,
        p1io: Power1.easeInOut,
        p2i: Power2.easeIn,
        p2o: Power2.easeOut,
        p2io: Power2.easeInOut,
        p4i: Power2.easeIn,
        p4o: Power2.easeOut,
        p4io: Power2.easeInOut,
        bi: Back.easeIn.config(1),
        bo: Back.easeOut.config(1),
        bio: Back.easeInOut.config(1),
        b2i: Back.easeIn.config(2),
        b2o: Back.easeOut.config(2),
        bio: Back.easeInOut.config(2),
        boi: Bounce.easeIn,
        boo: Bounce.easeOut,
        boio: Bounce.easeInOut,
        exi: Expo.easeIn,
        exo: Expo.easeOut,
        exio: Expo.easeInOut,
        eli: Elastic.easeIn,
        elo: Elastic.easeOut,
        elio: Elastic.easeInOut
    }),
    a = TweenMax;
    TimelineMax;
    $f = window.$f || {
        rh: function(e) {
            $f;
            t = o.width(),
            i = o.height(),
            n("#main").css({
                width: t,
                height: i
            }),
            n(".box").each(function(e, o) {
                var r = n(this).data("w"),
                a = n(this).data("pw"),
                s = n(this).data("h"),
                u = n(this).data("ph"),
                c = Math.min(!r || (_sw = a * t / 100) >= r ? 1 : _sw / r, !s || (_sh = u * i / 100) >= s ? 1 : _sh / s);
                TweenMax.set(this, {
                    scale: c
                })
            }),
            n(".sbg img,.sview").each(function(e, o) {
                var r = n(this).data("w"),
                a = n(this).data("h"),
                s = n(this).hasClass("contain") ? Math.min(t / (r || t), i / (a || i)) : Math.max(t / (r || t), i / (a || i));
                TweenMax.set(this, {
                    scale: s
                })
            })
        },
        orientationchange: function() {
            90 == window.orientation || window.orientation == -90 ? n(".pop-tip").stop(!0, !0).fadeIn(500) : n(".pop-tip").stop(!0, !0).fadeOut(500)
        },
        Render: function() {
            var t = this,
            i = {
                render: function(e, t, i) {
                    var o = document.createElement("audio"),
                    r = n(o);
                    return o.src = e,
                    o.preload = !0,
                    o.load(),
                    t && r.bind("ended",
                    function() {
                        this.currentTime = 0,
                        this.play()
                    }),
                    {
                        audio: r,
                        play: function(n, e) {
                            e && (o.currentTime = 0),
                            o.play()
                        },
                        pause: function(n, e) {
                            o.pause(),
                            e && (o.currentTime = 0)
                        },
                        destroy: function() {
                            r.remove()
                        },
                        load: function() {
                            o.load()
                        }
                    }
                },
                factory: function() {
                    var n = {};
                    return function(e, t, o) {
                        return n[e] || (n[e] = i.render(e + (e.indexOf(".mp3") > -1 ? "": ".mp3"), t, o), n[e].load()),
                        n[e]
                    }
                } ()
            },
            s = function(e) {
                var i, o, r, a = !1,
                s = '<video class="video-box" data-index="1" x-webkit-airplay="true" playsinline webkit-playsinline="true" preload="auto" src="<%=src%>"  poster="<%=poster%>"></video>',
                u = n.extend({
                    loop: !1,
                    poster: "",
                    show: !0,
                    hide: !0,
                    contain: !1,
                    parent: ".body-back"
                },
                window.CFG && CFG.movie && CFG.movie[e.name] || {},
                e);
                return {
                    sprite: null,
                    movie: null,
                    parent: null,
                    init: function() {
                        this.opt = u,
                        u.evt = "resize." + Math.round(1e6 * Math.random()),
                        this.parent = i = n(u.parent);
                        var e = t.render(s, {
                            src: u.src[0],
                            poster: u.src[1]
                        });
                        return this.sprite = o = n(e).appendTo(i),
                        this.movie = r = o[0],
                        this.render(),
                        this
                    },
                    render: function() {
                        var n = this;
                        o.css({
                            width: u.width,
                            height: u.height,
                            display: "block"
                        }),
                        o.bind("canplay",
                        function() {}),
                        o.one("ended",
                        function() { !! u.hide && n.hide(),
                            $f.isFunction(u.callback) && (u.context ? u.callback.call(u.context) : u.callback())
                        }),
                        o.one("playing",
                        function() {
                            $f.isFunction(u.play) && u.play()
                        }),
                        n.bind(),
                        u.show && n.show()
                    },
                    bind: function() {
                        n(window).bind(u.evt,
                        function() {
                            var n = i.width(),
                            e = i.height(),
                            t = u.contain ? Math.min(n / u.width, e / u.height) : Math.max(n / u.width, e / u.height),
                            r = u.width * t,
                            a = u.height * t;
                            o.css({
                                width: r,
                                height: a,
                                left: "50%",
                                top: "50%",
                                marginLeft: -r / 2,
                                marginTop: -a / 2
                            })
                        }).trigger(u.evt)
                    },
                    show: function() {
                        if (!a) {
                            a = !0;
                            return o.show(),
                            this
                        }
                    },
                    unbind: function() {
                        n(window).unbind(u.evt)
                    },
                    hide: function() {
                        a && (a = !1, r.pause(), o.remove())
                    }
                }
            },
            u = function(e, t) {
                var i, o, r, a = !1,
                e = n.extend({},
                e);
                return {
                    loader: null,
                    init: function() {
                        var n = this;
                        return r = e.complete,
                        e.complete = function(e, t, i) {
                            n.complete(),
                            $f.isFunction(r) && r(e, t, i)
                        },
                        t ? n.loadbypixi() : n.load(),
                        n
                    },
                    load: function() {
                        var n = this;
                        n.loader = o = $f.loader(e.dom, e.handle, e.complete, e.thread, e.arr),
                        o.load()
                    },
                    loadbypixi: function() {
                        var n = this;
                        n.loader = o = new PIXI.loaders.Loader,
                        o.add(e.arr || []),
                        o.on("progress",
                        function(n) {
                            var t = Math.floor(n.progress);
                            e.handle(n, t)
                        }),
                        o.on("complete",
                        function(n) {
                            e.complete(n)
                        }),
                        o.load()
                    },
                    loaded: !1,
                    complete: function() {
                        this.loaded = !0,
                        $f.isFunction(i) && i()
                    },
                    regist: function(n) {
                        this.loaded ? $f.isFunction(n) && n() : (i = n, a = !0)
                    }
                }
            }; !
            function() {
                for (var n = 0,
                e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"],
                window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var i = (new Date).getTime(),
                    o = Math.max(0, 16 - (i - n)),
                    r = window.setTimeout(function() {
                        e(i + o)
                    },
                    o);
                    return n = i + o,
                    r
                }),
                window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
                    clearTimeout(n)
                })
            } (),
            Array.prototype.filter || (Array.prototype.filter = function(n) {
                "use strict";
                if (void 0 === this || null === this) throw new TypeError;
                var e = Object(this),
                t = e.length >>> 0;
                if ("function" != typeof n) throw new TypeError;
                for (var i = [], o = arguments.length >= 2 ? arguments[1] : void 0, r = 0; r < t; r++) if (r in e) {
                    var a = e[r];
                    n.call(o, a, r, e) && i.push(a)
                }
                return i
            });
            var c, l, d, h, f, p = function() {
                var n, e = {},
                t = [],
                i = 0,
                o = 0,
                r = 0,
                a = 3,
                s = !1,
                u = {};
                return {
                    init: function(n) {
                        u = n || {},
                        t = u.list || [],
                        a = u.thread || a,
                        i = t.length;
                        for (var e = 0; e < (i < a ? i: a); e++) this.handle();
                        return 0 == i && this.complete(),
                        this
                    },
                    handle: function() {
                        r == i ? o != i || s || this.complete() : (this.load(t[r]), r++)
                    },
                    load: function(n, t) {
                        var r = this,
                        a = function() {
                            o++,
                            u.handle && u.handle(o, i),
                            r.handle()
                        };
                        return e[n] ? t || a() : e[n] = (new THREE.TextureLoader).load(n,
                        function() {
                            t || a()
                        }),
                        e[n]
                    },
                    complete: function() {
                        s = !0,
                        "function" == typeof u.complete && u.complete(),
                        "function" == typeof n && n()
                    },
                    list: function() {
                        return e
                    },
                    regist: function(e) {
                        this.loaded ? "function" == typeof e && e() : (n = e, show = !0)
                    }
                }
            },
            m = function() {
                var e, t, o;
                return {
                    init: function() {
                        var r = this;
                        e = n(".vload"),
                        $load = e.find(".load"),
                        o = e.find(".inner");
                        // l = d = i.factory("audio/bg.mp3?1", !0),
                        // h = i.factory("audio/end.mp3?1", !0),
                        // f = n('<div class="music"><span></span></div>');
                        // var a = function() {
                        //     f.appendTo("body"),
                        //     f.bind("touchstart",
                        //     function() {
                        //         f.hasClass("close") ? (f.removeClass("close"), l.play()) : (f.addClass("close"), l.pause())
                        //     })
                        // },
                        var s = (navigator.userAgent.indexOf("MQQBrowser") > -1, navigator.userAgent.match(/Android (.+); /)),
                        u = navigator.userAgent.match(/iPhone OS (.+) like Mac/),
                        m = u && 320 == window.screen.width && window.screen.height <= 480;
                        // if (s || m) return a(),
                        // f.hide(),
                        this.hide(),
                        w().init(),
                        void r.loadEnd();
                        // var v = setTimeout(function() {
                        //     v = null,
                        //     l.pause(),
                        //     l.audio.unbind("timeupdate"),
                        //     f.addClass("close"),
                        //     a()
                        // },
                        // 2e3);
                        // l.audio.one("timeupdate",
                        // function() {
                        //     v && (clearTimeout(v), v = null, a())
                        // }),
                        // l.play(),
                        c = t = p().init({
                            list: CFG.all,
                            handle: function(n, e) {
                                var t = Math.round(100 * n / e);
                                t < 100 && ($load.find(".numt").attr("class", "num numt num" + Math.floor(t / 10)), $load.find(".numu").attr("class", "num numu num" + Math.floor(t % 10)))
                            },
                            complete: function() {
                                setTimeout(function() {
                                    r.complete()
                                },
                                50),
                                r.loadEnd()
                            }
                        })
                    },
                    loadEnd: function() {
                        u({
                            dom: CFG.end
                        }).init()
                    },
                    render: function() {},
                    handle: function() {},
                    complete: function() {
                        var n = this;
                        n.hide(),
                        v().init()
                    },
                    hide: function() {
                        a.to(e, .5, {
                            opacity: 0,
                            onComplete: function() {
                                e.remove();
                            }
                        })
                    }
                }
            },
            w = function(e) {
                var i, r;
                return {
                    init: function() {
                        var e = this;
                        return this.elem = i = n(t.rendertpl("vvideo", {})).appendTo(".main"),
                        o.trigger("resize"),
                        e.show(),
                        this
                    },
                    show: function() {
                        var n = this;
                        a.from(i.show(), .5, {
                            opacity: 0
                        });
                        // r = s({
                        //     loop: !1,
                        //     show: !0,
                        //     hide: !1,
                        //     parent: i.find(".view"),
                        //     src: ["images/video/bg.jpg"],
                        //     width: 750,
                        //     height: 1334,
                        //     callback: function() {
                        //         n.hide(),
                        //         g().init(!0)
                        //     },
                        //     contain: !1
                        // }).init();
                        var e = i.find(".tip"),
                        t = i.find(".arrow"),
                        o = 0,
                        u = $f.progress({
                            dua: 500,
                            infi: !0,
                            callback: function() {
                                o++,
                                t.attr("class", "arrow a" + (o % 3 + 1))
                            }
                        }).init();
                        i.bind("touchend",
                        function() {
                            e.remove(),
                            u.stop()
                            //r.show()
                            // r.movie.play()
                        })
                    },
                    handle: function() {},
                    hide: function() {
                        a.to(i, .35, {
                            opacity: 0,
                            delay: 1,
                            onComplete: function() {
                                i.remove()
                            }
                        })
                    }
                }
            },
            v = function(i) {
                var s, u, l, d, h, f, p, m = 0,
                w = function(t, i, o) {
                    t = n.extend({
                        html: "",
                        cls: "",
                        x: 0,
                        y: 0,
                        z: 0,
                        r: 0,
                        w: 0,
                        h: 0,
                        s: 1,
                        dir: 1,
                        start: 0,
                        len: 0,
                        speed: 1,
                        overlay: !1,
                        opacity: 1,
                        index: 0,
                        name: "",
                        img: "",
                        offset: 1,
                        noTransform: !1,
                        type: "sprite",
                        size: 1,
                        z1: 0,
                        zofs: 100,
                        R: 0,
                        R1: 0,
                        Rofs: 0,
                        avg: !1,
                        sort: !1,
                        avgOfs: Math.PI / 12,
                        avgBy: 0,
                        avgStart: void 0,
                        avgDir: 0,
                        dis: !1,
                        disSort: !0,
                        disOfs: 0,
                        disDir: 0,
                        mc: !1,
                        hTiles: 1,
                        vTiles: 1,
                        duration: 100,
                        frames: null
                    },
                    t);
                    var r, s, u = !1,
                    l = [],
                    d = 0,
                    h = t.zlen || 3e3,
                    f = f || 800,
                    p = {
                        opacity: function(n) {
                            var e = -n.cur - r.position.z;
                            switch (!0) {
                            case e > h - d: r.visible = !1;
                                break;
                            case e <= h - d && e >= h - d - f: r.material.opacity = (h - d - e) / f,
                                r.visible = !0;
                                break;
                            default:
                                r.material.opacity = 1,
                                r.visible = !0
                            }
                        }
                    },
                    v = function(n, e, t, i, o) {
                        this.currentTile = 0,
                        this.durationTile = i,
                        this.currentTime = 0,
                        this.hTiles = e,
                        this.vTiles = t,
                        this.cntTiles = o || this.hTiles * this.vTiles,
                        n.wrapS = n.wrapT = THREE.RepeatWrapping,
                        n.repeat.set(1 / this.hTiles, 1 / this.vTiles),
                        this.update = function(e) {
                            for (this.currentTime += e; this.currentTime > this.durationTile;) {
                                this.currentTime -= this.durationTile,
                                this.currentTile++,
                                this.currentTile == this.cntTiles && (this.currentTile = 0);
                                var t = this.currentTile % this.hTiles;
                                n.offset.x = t / this.hTiles;
                                var i = Math.floor(this.currentTile / this.hTiles);
                                n.offset.y = i / this.vTiles
                            }
                        }
                    },
                    g = {};
                    return {
                        init: function(e) {
                            switch (g = e, !0) {
                            case !! t.child: u = !0,
                                this.elem = r = new THREE.Group,
                                n.each(t.child,
                                function(n, i) {
                                    i.name = n,
                                    i.start = i.start || t.start,
                                    l.push(w(i, r, !0).init(e))
                                });
                                break;
                            case "particle" == t.type: u = !0,
                                t.size = t.size || 0,
                                t.img = $f.isArray(t.img) ? t.img: [t.img],
                                this.elem = r = new THREE.Group;
                                for (var i = void 0 != t.avgStart ? t.avgStart: $f.random(0, 2 * Math.PI, !0), o = [], s = [], d = 0; d < t.size; d++) o[d] = d,
                                s[d] = Math.round((t.R1 - t.R) * (t.disDir ? d: t.size - d) / (t.size - 1 || 1)) + t.R;
                                t.sort || (o = $f.shuffleArray(o)),
                                t.disSort || (s = $f.shuffleArray(s));
                                for (var d = 0; d < t.size && t.img.length > 0; d++) {
                                    var h = $f.random( - t.zofs, t.zofs),
                                    f = t.dis ? s[d] + $f.random( - t.disOfs, t.disOfs) : $f.random(t.R, t.R1),
                                    p = t.avgBy || t.size,
                                    T = t.avg ? (t.avgDir ? 2 * Math.PI: 0) + (t.avgDir ? -1 : 1) * (2 * Math.PI * o[d] / p + $f.random( - t.avgOfs, t.avgOfs, !0)) + i: $f.random(0, 2 * Math.PI, !0),
                                    b = {},
                                    y = t.img[d % t.img.length];
                                    b = {
                                        x: t.x + Math.round(Math.cos(T) * f),
                                        y: t.y + Math.round(Math.sin(T) * f),
                                        z: t.z + (t.z1 - t.z) * d / (t.size > 1 ? t.size - 1 : 1) + h,
                                        img: y.url,
                                        w: y.w,
                                        h: y.h,
                                        r: (t.rotate ? 1 == t.rotate ? T: 2 * Math.random() * Math.PI: 0) + t.Rofs,
                                        effect: t.effect,
                                        zlen: t.zlen,
                                        zdua: t.zdua,
                                        speed: y.speed || t.speed,
                                        s: y.s || t.s,
                                        name: t.name + " child",
                                        start: t.start,
                                        handle: t.childHandle
                                    },
                                    l.push(w(b, r, !0).init(e))
                                }
                                break;
                            default:
                                var x = c.load($f.startWith(t.img, "data:image") ? t.img: "images/" + t.img);
                                x.minFilter = THREE.LinearFilter;
                                var M = new THREE.SpriteMaterial({
                                    map: x
                                });
                                this.elem = r = new THREE.Sprite(M),
                                t.mc && (r.mc = new v(x, t.hTiles, t.vTiles, t.duration, t.frames)),
                                a.set(r, {
                                    T3: {
                                        x: t.x,
                                        y: t.y,
                                        z: t.z,
                                        scaleX: t.w * t.s * t.dir,
                                        scaleY: t.h * t.s,
                                        rotate: t.r
                                    }
                                })
                            }
                            return r.name = t.name,
                            m++,
                            this
                        },
                        elem: null,
                        option: function(e) {
                            return e && n.extend(t, e),
                            t
                        },
                        update: function(e) {
                            if (e.cur < t.start - t.offset || e.cur > (t.len ? t.len + t.start: 500 - r.position.z)) {
                                if (!s) return;
                                this.remove()
                            } else s || this.regist(),
                            this.handle(e),
                            u && n.each(l,
                            function(n, t) {
                                t.update(e)
                            })
                        },
                        handle: function(n) {
                            var e = n.cur - t.start;
                            1 != t.speed && a.set(r, {
                                T3: {
                                    z: t.z - (1 - t.speed) * e
                                }
                            }),
                            !!t.effect && !u && p[t.effect] && p[t.effect](n),
                            !!t.handle && t.handle.call(r, i, n, t, e),
                            t.mc && r.mc.update(1e3 * g.clock.getDelta())
                        },
                        regist: function() {
                            return s = !0,
                            i.add(r),
                            e(".. " + t.name + " regist .."),
                            this
                        },
                        remove: function() {
                            if(t.name=="scene4"){
                                Zepto("#form").css({
                                    "z-index":"999",
                                    "opacity":1
                                });
                            }
                            if (s) return i.remove(r),
                            s = !1,
                            e(".. " + t.name + " remove .."),
                            this
                        },
                        info: {}
                    }
                },
                v = function(t) {
                    var i, o, s, u, c,ca, l,re, d, h, f = {},fg={},
                    p = [],
                    v = {
                        cur: 0,
                        tar: 0,
                        end: 1e4,
                        sCur: 0,
                        sTar: 0,
                        sTemp: 0,
                        sMax: 60,
                        sMin: 1,
                        sOfs: 3,
                        sTime: 2
                    },
                    g = {
                        locked: !1,
                        stoped: !1
                    },
                    T = {
                        lat0: 0,
                        lat1: 0,
                        latMax: 30,
                        lon0: 0,
                        lon1: 0,
                        lonMax: 20,
                        x: 0,
                        y: 0
                    };
                    return {
                        init: function(n, t) {
                            s = n.scene,
                            c = ca = n.camera,
                            l = re = n.renderer,
                            o = n.stage,
                            u = new THREE.Group,
                            s.add(u),
                            this.clock = new THREE.Clock,
                            window.Stats;
                            for (var i in t) this.add(i, t[i]);
                            return e("I", m),
                            this
                        },
                        add: function(n, e, t) {
                            e.name = n,
                            fg[n] = f[n] = w(e, t || u).init({
                                clock: this.clock
                            })
                        },
                        get: function(n) {
                            return n ? f[n] : f
                        },
                        remove: function(n) {
                            var e = this.get(n);
                            e && (e.remove(), delete f[n])
                        },
                        start: function() {
                            var n, t, i, r, s, c, l = this,
                            d = "ontouchstart" in window,
                            f = d ? "touchstart.touchHandler": "mousedown.touchHandler",
                            p = d ? "touchmove.touchHandler": "mousemove.touchHandler",
                            m = d ? "touchend.touchHandler": "mouseup.touchHandler",
                            w = !1,
                            T = !0,
                            b = "pageX",
                            y = "pageY";

                            var raycaster = new THREE.Raycaster();
                            var mouse = new THREE.Vector3();

                            function onDocumentMouseDown( event ) {
                                event.preventDefault();
                                mouse.x = ( event.originalEvent.changedTouches[0].clientX / re.domElement.clientWidth ) * 2 - 1;
                                mouse.y = - ( event.originalEvent.changedTouches[0].clientY / re.domElement.clientHeight ) * 2 + 1;
                                raycaster.setFromCamera( mouse, ca );

                                var elemG1 = fg["group2"].elem.children;
                                // var elemG2 = fg["group2"].elem.children;
                                // var elemG3 = fg["group3"].elem.children;
                                // var elemG4 = fg["group4"].elem.children;
                                // elemG1.concat(elemG2).concat(elemG3).concat(elemG4);

                                var intersects = raycaster.intersectObjects(elemG1); 
                                if ( intersects.length > 0 ) {
                                    if ("jds" == intersects[0].object.name) {
                                        console.log('tap obj:'+ intersects[0].object.name);
                                    }
                                }
                            };

                            o.unbind(f).bind(f,
                            function(e) {
                                e.preventDefault(),
                                onDocumentMouseDown(e);

                                g.locked || (a.killTweensOf(u), w = !0, n = i = d ? e.originalEvent.changedTouches[0][b] : e[b], t = r = d ? e.originalEvent.changedTouches[0][y] : e[y], o.bind(p,
                                function(n, e) {
                                    if (n.preventDefault(), !g.locked && w) {
                                        s = d ? n.originalEvent.changedTouches[0][b] : n[b],
                                        c = d ? n.originalEvent.changedTouches[0][y] : n[y];
                                        var t = r - c;
                                        l.pos(Math.round(t)),
                                        i = s,
                                        r = c
                                    }
                                }).bind(m,
                                function(e) {
                                    w = !1,
                                    o.unbind(p).unbind(m),
                                    s = d ? e.originalEvent.changedTouches[0][b] : e[b],
                                    c = d ? e.originalEvent.changedTouches[0][y] : e[y],
                                    Math.abs(s - n) <= 10 && Math.abs(c - t) <= 10 ? l.pos(0, !0) : T && (T = !1, v.sTar = Math.abs(v.sTar) < 10 ? v.sTar: v.sTar > 0 ? 10 : -10)
                                }))
                            }),
                            h = !0,
                            l.render(),
                            e(v)
                        },
                        orienter: function() {
                            d = new Orienter;
                            var n = !1,
                            e = 0,
                            t = 0,
                            i = 0,
                            o = 0;
                            d.handler = function(r) {
                                n ? (i = r.lon - e, o = r.lat - t, Math.abs(i) > 180 && (i > 0 ? i -= 360 : i = 360 + i), Math.abs(i) >= 1 && (T.lon0 = r.g, T.lon0 = T.lon0 > T.lonMax ? T.lonMax: T.lon0 < -T.lonMax ? -T.lonMax: T.lon0, e = r.lon), Math.abs(o) >= 1 && (T.lat0 += o, T.lat0 = T.lat0 > T.latMax ? T.latMax: T.lat0 < -T.latMax ? -T.latMax: T.lat0, t = r.lat)) : (n = !0, e = r.lon, t = r.lat)
                            },
                            d.init()
                        },
                        play: function() {
                            this.unlock(),
                            this.render()
                        },
                        stop: function() {
                            a.killTweensOf(v),
                            a.killTweensOf(u),
                            v.tar = v.cur,
                            v.sTemp = v.sCur,
                            v.sCur = v.sTar = 0
                        },
                        lock: function() {
                            g.locked = !0,
                            this.stop(),
                            i && (cancelAnimationFrame(i), i = null)
                        },
                        unlock: function() {
                            g.locked = !1,
                            v.sCur = v.sTemp,
                            this.render()
                        },
                        pos: function(n, e) {
                            var t = this;
                            return void 0 == n ? v: void(e ? t.stop() : v.sTar = (n > 0 ? 1 : -1) * Math.min(Math.max(Math.abs(n / v.sOfs), v.sMin), v.sMax))
                        },
                        "goto": function(n, e) {
                            this.stop(),
                            a.to(u, e || 1, {
                                ease: r.p2io,
                                T3: {
                                    z: n
                                }
                            })
                        },
                        setEnd: function(n) {
                            v.end = n
                        },
                        _handleSubscribe: function(n) {
                            p = p.filter(function(e, t) {
                                return ! e.done && e.dir * n.cur > e.dir * e.pos ? (e.callback(), e.done = !0) : e.done && e.dir * n.cur < e.dir * e.pos && (e.done = !1),
                                !e.done || e.infi
                            })
                        },
                        subscribe: function(e) {
                            var t = n.extend({
                                pos: 0,
                                dir: 1,
                                done: !1,
                                infi: !1,
                                callback: null
                            },
                            e);
                            return t.unsubscribe = function() {
                                p = p.filter(function(n, t, i) {
                                    return n.callback != e.callback
                                })
                            },
                            p.push(t),
                            t
                        },
                        tip: function() {
                            this.$tip || (e("tiper", o.parent()), this.$tip = n('<div class="debug"></div>').appendTo(o.parent())),
                            this.$tip.text(v.tar + ":" + Math.round(v.cur))
                        },
                        render: function() {
                            var n = u.position.z + v.sTar * v.sTime;
                            n = n > v.end ? v.end: n < 0 ? 0 : n,
                            u.position.z = n,
                            v.cur = n;
                            for (var e in f) f[e].update(v);
                            l.render(s, c),
                            i = requestAnimationFrame(this.render.bind(this)),
                            v.cur == v.end && this.end()
                        },
                        end: function() {
                            var n = this;
                            n.destroy(),
                            t.callback && t.callback()
                        },
                        destroy: function() {
                            this.lock(),
                            d = null
                        }
                    }
                },
                T = {};
                return {
                    init: function() {
                        var e = this;
                        return this.elem = s = n(t.rendertpl("vstage", {})).appendTo(".main"),
                        u = s.find(".view"),
                        o.trigger("resize"),
                        e.show(),
                        this
                    },
                    show: function() {
                        var e = this;
                        s.show(),
                        d = new THREE.Scene,
                        h = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, .1, 1e5),
                        h.position.z = 500,
                        f = new THREE.WebGLRenderer({
                            alpha: !1
                        }),
                        f.setSize(window.innerWidth, window.innerHeight),
                        f.setClearColor(0),
                        f.setPixelRatio(window.devicePixelRatio),
                        u.append(f.domElement),
                        d.add(h),
                        h.position.set(0, 0, 500),
                        h.lookAt(new THREE.Vector3(0, 0, 0)),
                        l = v({
                            callback: function() {
                                e.end()
                            }
                        }).init({
                            scene: d,
                            camera: h,
                            renderer: f,
                            stage: u
                        },
                        n.extend(T, CFG.objs)),
                        l.setEnd(CFG.POS),
                        l.start(),
                        window.OBJ = l,
                        this.bind(),
                        p = g().init()
                    },
                    handle: function() {},
                    bind: function() {
                        o.bind("resize.three",
                        function() {
                            f.setSize(window.innerWidth, window.innerHeight),
                            h.aspect = window.innerWidth / window.innerHeight,
                            h.updateProjectionMatrix()
                        })
                    },
                    unbind: function() {
                        o.unbind(".three")
                    },
                    end: function() {
                        this.hide()
                    },
                    hide: function() {
                        this.unbind(),
                        s.remove()
                    }
                }
            },
            g = function(e) {
                var i, r;
                return {
                    init: function(e) {
                        var a = this;
                        return this.elem = i = n(t.rendertpl("vend", {
                            isAndroid: e
                        })).appendTo(".main"),
                        r = e,
                        o.trigger("resize"),
                        a.show(),
                        this
                    },
                    show: function() {
                        var n = this;
                        if (r && (d && d.pause(), f.show(), l = h, !f.hasClass("close"))) {
                            var e = setTimeout(function() {
                                e = null,
                                f.addClass("close"),
                                l.pause()
                            },
                            500);
                            l.audio.one("timeupdate",
                            function() {
                                e && (clearTimeout(e), e = null)
                            }),
                            h.play()
                        }
                        r ? (a.from(i.show(), 1, {
                            opacity: 0,
                            onComplete: function() {
                                n.handle()
                            }
                        }), a.from(i.find(".btn"), .75, {
                            y: 200,
                            opacity: 0,
                            elay: .5
                        })) : (i.show(), n.handle())
                    },
                    handle: function() {
                        i.find(".restart").one("tap",
                        function() {
                            window.location.reload()
                        })
                    },
                    hide: function() {
                        a.to(i, .35, {
                            opacity: 0,
                            onComplete: function() {
                                i.remove()
                            }
                        })
                    }
                }
            };
            m().init()
        },
        render: function(e, t) {
            var i = $f.template(n.trim(e));
            return i(t)
        },
        init: function() {
            var e = this;
            CSSPlugin.defaultTransformPerspective = 500,
            window.addEventListener("onorientationchange" in window ? "orientationchange": "resize", e.orientationchange, !1);
            for (var t in e) t.indexOf("Init") > 0 && e[t] != arguments.callee && n.isFunction(e[t]) && e[t]()
        },
        i_: function() {
            var n = this;
            o.resize(n.rh).trigger("resize"),
            n.Render()
        },
        random: function(n, e, t) {
            var i = Math.random() * (e - n);
            return n + (t ? i: Math.round(i))
        },
        rendertpl: function(e, t) {
            return this.render(n.trim(n("#" + e).text()), t)
        },
        render: function(e, t) {
            var i = $f.template(n.trim(e));
            return i(t)
        },
        TPL: function(n, e) {
            return n.replace(/\{([\w\.]*)\}/g,
            function(n, t) {
                for (var i = t.split("."), o = e[i.shift()], r = 0, a = i.length; r < a; r++) o = o[i[r]];
                return "undefined" != typeof o && null !== o ? o: ""
            })
        },
        startWith: function(n, e) {
            for (var t = "*.?+$^[](){}|\\/",
            i = e.split(""), o = 0; o < i.length; o++) t.indexOf(i[o]) > -1 && (i[o] = "\\" + i[o]);
            var r = new RegExp("^" + i.join(""));
            return r.test(n)
        },
        endWith: function(n, e) {
            for (var t = "*.?+$^[](){}|\\/",
            i = e.split(""), o = 0; o < i.length; o++) t.indexOf(i[o]) > -1 && (i[o] = "\\" + i[o]);
            e = i.join("");
            var r = new RegExp(e + "$");
            return r.test(n)
        },
        getUrlParam: function(n) {
            var e = new RegExp("(^|&)" + n + "=([^&]*)(&|$)"),
            t = window.location.search.substr(1).match(e);
            return null != t ? unescape(t[2]) : null
        },
        hash: function() {
            return location.hash ? location.hash.substr(1) : ""
        },
        shuffleArray: function(n) {
            for (var e, t, i = n.length; i; e = parseInt(Math.random() * i), t = n[--i], n[i] = n[e], n[e] = t);
            return n
        },
        sizeOf: function(n) {
            var e = 0;
            for (var t in n) e++;
            return e
        },
        objTostr: function(n, e, t) {
            var i = "";
            e = e ? e: "";
            var o = t ? "": " ";
            for (var r in n) i += e + r + o;
            return i
        },
        objTostrP: function(n, e, t, i) {
            var o = "";
            t = t ? t: "";
            var r = i ? "": " ";
            for (var a in n) o += t + n[a][e] + r;
            return o
        },
        is: function(n, e) {
            var t = Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
            return void 0 !== e && null !== e && t === n.toLowerCase()
        },
        isFunction: function(n) {
            return this.is("function", n)
        },
        isObject: function(n) {
            return this.is("object", n)
        },
        isString: function(n) {
            return this.is("string", n)
        },
        isArray: function(n) {
            return this.is("array", n)
        },
        isBoolean: function(n) {
            return this.is("boolean", n)
        },
        isDate: function(n) {
            return this.is("date", n)
        },
        isNumber: function(n) {
            return this.is("number", n)
        },
        isUndefined: function(n) {
            return void 0 === n
        },
        isNull: function(n) {
            return null === n
        },
        isEmptyObject: function(n) {
            if (this.isObject(n)) {
                for (var e in n) return ! 1;
                return ! 0
            }
            return ! 1
        },
        isEmptyArray: function(n) {
            return this.isArray(n) && 0 == n.length
        },
        isNotEmptyArray: function(n) {
            return this.isArray(n) && n.length > 0
        },
        Sc: function(n, e, t) {
            var i = n + "=" + escape(e);
            if (! (void 0 != t) && (t = 24), t > 0) {
                var o = new Date,
                r = 3600 * t * 1e3;
                o.setTime(o.getTime() + r),
                i += "; expires=" + o.toGMTString()
            }
            document.cookie = i
        },
        Gc: function(n) {
            for (var e = document.cookie.split("; "), t = 0; t < e.length; t++) {
                var i = e[t].split("=");
                if (i[0] == n) return unescape(decodeURIComponent(i[1]))
            }
        },
        Dc: function(n) {
            var e = new Date;
            e.setTime(e.getTime() - 1e4),
            document.cookie = n + "=; expires=" + e.toGMTString()
        }
    },
    $f.loader = function(e, t, i, o, r) {
        var a = [],
        s = function(e) {
            var t = [],
            i = {};
            e.find("*:not(script)").each(function() {
                var e = "";
                if ("none" != n(this).css("background-image")) var e = n(this).css("background-image");
                else if ("undefined" != typeof n(this).attr("src") && "img" == this.tagName.toLowerCase()) var e = n(this).attr("src");
                e.indexOf(",") == -1 && (e = e.replace('url("', ""), e = e.replace("url(", ""), e = e.replace('")', ""), e = e.replace(")", ""), e.length > 0 && "none" != e && !i[e] && (i[e] = !0, t.push(e)))
            });
            return t
        };
        r = r || [],
        n.isArray(e) ? a = n.merge(e, r) : (a = s(n(e)), a = n.merge(a, r));
        var u, c, l = 0,
        d = 0,
        h = a.length,
        o = o || 3,
        f = !1,
        p = !1;
        return {
            load: function() {
                u = (new Date).getTime();
                for (var n = 0; n < (h < o ? h: o); n++) this.handler();
                return this
            },
            loading: function(n) {
                var e = this,
                i = function() {
                    d++,
                    $f.isFunction(t) && t(e, d, h),
                    e.handler()
                };
                if (!n) return void i();
                var o = new Image;
                o.onload = o.onerror = function() {
                    e.assets[n] = o,
                    i()
                },
                o.src = n
            },
            handler: function() {
                var e = this;
                return d >= h && !p ? (p = !0, c = (new Date).getTime(), n.isFunction(i) && i(e, h, h)) : !f && l < h && (e.loading(a[l]), l++),
                this
            },
            sleep: function() {
                f = !0
            },
            wakeup: function() {
                var n = this;
                f && (f = !1, n.handler())
            },
            assets: {}
        }
    },
    function() {
        for (var n = 0,
        e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
            var i = (new Date).getTime(),
            o = Math.max(0, 16 - (i - n)),
            r = window.setTimeout(function() {
                e(i + o)
            },
            o);
            return n = i + o,
            r
        }),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
            clearTimeout(n)
        })
    } (),
    $f.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var s = /(.)^/,
    u = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    c = /\\|'|\r|\n|\u2028|\u2029/g,
    l = function(n) {
        return "\\" + u[n]
    };
    $f.template = function(e, t, i, o) { ! i && o && (i = o),
        i = n.extend({},
        i, $f.templateSettings);
        var r = RegExp([(i.escape || s).source, (i.interpolate || s).source, (i.evaluate || s).source].join("|") + "|$", "g"),
        a = 0,
        u = "__p+='";
        e.replace(r,
        function(n, t, i, o, r) {
            return u += e.slice(a, r).replace(c, l),
            a = r + n.length,
            t ? u += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'": i ? u += "'+\n((__t=(" + i + "))==null?'':__t)+\n'": o && (u += "';\n" + o + "\n__p+='"),
            n
        }),
        u += "';\n",
        i.variable || (u = "with(obj||{}){\n" + u + "}\n"),
        u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
        var d = [],
        h = [];
        t = t || {},
        !t.$f && (t.$f = $f);
        for (var f in t) d.push(f),
        h.push(t[f]);
        d.splice(0, 0, i.variable || "obj"),
        d.push(u);
        try {
            var p = Function.apply(this, d)
        } catch(m) {
            throw m.source = u,
            m
        }
        var w = function(e) {
            var t = n.merge([e], h);
            return p.apply(this, t)
        },
        v = i.variable || "obj";
        return w.source = "function(" + v + "){\n" + u + "}",
        w
    },
    $f.progress = function(e) {
        var t, i = null,
        o = function(e) {
            return n.extend({
                dua: 10,
                end: 100,
                start: 0,
                infi: !1
            },
            e)
        };
        return {
            init: function(n) {
                var i = this;
                return e = o(e),
                t = void 0 == n ? e.start: n,
                !!e.imd && i.handler(),
                i.start(),
                i
            },
            stop: function() {
                i && (clearInterval(i), i = null)
            },
            start: function(r, a) {
                var s = this;
                r && (r = o(r), e = n.extend(e, r)),
                void 0 == a || e.infi || (t = a),
                i || (i = window.setInterval(function() {
                    s.handler()
                },
                e.dua || 10))
            },
            complete: function() {
                var n = this;
                $f.isFunction(e.complete) && e.complete(t, e.end, e),
                n.stop()
            },
            handler: function() {
                var n = this;
                if ((e.infi || t !== e.end) && (t < e.end ? t++:t = e.start, $f.isFunction(e.callback) && e.callback(t, e.end, e)), !e.infi && t == e.end) return void n.complete()
            }
        }
    },
    window.wx_config && window.wxTool && wxTool.wxInit(window.wx_config || {},
    function() {
        wxTool.share(wxshare || {})
    }),
    n(function() {
        $f.i_()
    })
} (jQuery);