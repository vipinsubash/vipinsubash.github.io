! function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(i, r, function (t) {
                return e[t]
            }.bind(null, r));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 239)
}([function (e, t, n) {
    var i = n(1),
        r = n(47).f,
        o = n(26),
        a = n(34),
        s = n(93),
        l = n(114),
        c = n(86);
    e.exports = function (e, t) {
        var n, u, f, d, h, p = e.target,
            g = e.global,
            v = e.stat;
        if (n = g ? i : v ? i[p] || s(p, {}) : (i[p] || {}).prototype)
            for (u in t) {
                if (d = t[u], f = e.noTargetGet ? (h = r(n, u)) && h.value : n[u], !c(g ? u : p + (v ? "." : "#") + u, e.forced) && void 0 !== f) {
                    if (typeof d == typeof f) continue;
                    l(d, f)
                }(e.sham || f && f.sham) && o(d, "sham", !0), a(n, u, d, e)
            }
    }
}, function (e, t, n) {
    (function (t) {
        var n = function (e) {
            return e && e.Math == Math && e
        };
        e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
    }).call(this, n(91))
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, n) {
    "use strict";
    var i, r = n(9),
        o = n(1),
        a = n(15),
        s = n(25),
        l = n(89),
        c = n(26),
        u = n(34),
        f = n(22).f,
        d = n(88),
        h = n(74),
        p = n(4),
        g = n(84),
        v = o.DataView,
        m = v && v.prototype,
        y = o.Int8Array,
        b = y && y.prototype,
        w = o.Uint8ClampedArray,
        x = w && w.prototype,
        S = y && d(y),
        k = b && d(b),
        C = Object.prototype,
        _ = C.isPrototypeOf,
        E = p("toStringTag"),
        T = g("TYPED_ARRAY_TAG"),
        O = !(!o.ArrayBuffer || !v),
        A = O && !!h && "Opera" !== l(o.opera),
        $ = !1,
        L = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        },
        P = function (e) {
            return a(e) && s(L, l(e))
        };
    for (i in L) o[i] || (A = !1);
    if ((!A || "function" != typeof S || S === Function.prototype) && (S = function () {
            throw TypeError("Incorrect invocation")
        }, A))
        for (i in L) o[i] && h(o[i], S);
    if ((!A || !k || k === C) && (k = S.prototype, A))
        for (i in L) o[i] && h(o[i].prototype, k);
    if (A && d(x) !== k && h(x, k), r && !s(k, E))
        for (i in $ = !0, f(k, E, {
                get: function () {
                    return a(this) ? this[T] : void 0
                }
            }), L) o[i] && c(o[i], T, i);
    O && h && d(m) !== C && h(m, C), e.exports = {
        NATIVE_ARRAY_BUFFER: O,
        NATIVE_ARRAY_BUFFER_VIEWS: A,
        TYPED_ARRAY_TAG: $ && T,
        aTypedArray: function (e) {
            if (P(e)) return e;
            throw TypeError("Target is not a typed array")
        },
        aTypedArrayConstructor: function (e) {
            if (h) {
                if (_.call(S, e)) return e
            } else
                for (var t in L)
                    if (s(L, i)) {
                        var n = o[t];
                        if (n && (e === n || _.call(n, e))) return e
                    } throw TypeError("Target is not a typed array constructor")
        },
        exportProto: function (e, t, n) {
            if (r) {
                if (n)
                    for (var i in L) {
                        var a = o[i];
                        a && s(a.prototype, e) && delete a.prototype[e]
                    }
                k[e] && !n || u(k, e, n ? t : A && b[e] || t)
            }
        },
        exportStatic: function (e, t, n) {
            var i, a;
            if (r) {
                if (h) {
                    if (n)
                        for (i in L)(a = o[i]) && s(a, e) && delete a[e];
                    if (S[e] && !n) return;
                    try {
                        return u(S, e, n ? t : A && y[e] || t)
                    } catch (e) {}
                }
                for (i in L) !(a = o[i]) || a[e] && !n || u(a, e, t)
            }
        },
        isView: function (e) {
            var t = l(e);
            return "DataView" === t || s(L, t)
        },
        isTypedArray: P,
        TypedArray: S,
        TypedArrayPrototype: k
    }
}, function (e, t, n) {
    var i = n(1),
        r = n(65),
        o = n(84),
        a = n(116),
        s = i.Symbol,
        l = r("wks");
    e.exports = function (e) {
        return l[e] || (l[e] = a && s[e] || (a ? s : o)("Symbol." + e))
    }
}, function (e, t, n) {
    var i = n(37),
        r = Math.min;
    e.exports = function (e) {
        return e > 0 ? r(i(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(21).find,
        o = n(63),
        a = !0;
    "find" in [] && Array(1).find((function () {
        a = !1
    })), i({
        target: "Array",
        proto: !0,
        forced: a
    }, {
        find: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("find")
}, function (e, t, n) {
    var i = n(34),
        r = n(149),
        o = Object.prototype;
    r !== o.toString && i(o, "toString", r, {
        unsafe: !0
    })
}, function (e, t, n) {
    "use strict";
    var i = n(33),
        r = n(63),
        o = n(67),
        a = n(49),
        s = n(118),
        l = a.set,
        c = a.getterFor("Array Iterator");
    e.exports = s(Array, "Array", (function (e, t) {
        l(this, {
            type: "Array Iterator",
            target: i(e),
            index: 0,
            kind: t
        })
    }), (function () {
        var e = c(this),
            t = e.target,
            n = e.kind,
            i = e.index++;
        return !t || i >= t.length ? (e.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == n ? {
            value: i,
            done: !1
        } : "values" == n ? {
            value: t[i],
            done: !1
        } : {
            value: [i, t[i]],
            done: !1
        }
    }), "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function (e, t, n) {
    var i = n(2);
    e.exports = !i((function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(1),
        o = n(69),
        a = n(9),
        s = n(116),
        l = n(2),
        c = n(25),
        u = n(57),
        f = n(15),
        d = n(11),
        h = n(20),
        p = n(33),
        g = n(55),
        v = n(56),
        m = n(70),
        y = n(71),
        b = n(48),
        w = n(143),
        x = n(99),
        S = n(47),
        k = n(22),
        C = n(83),
        _ = n(26),
        E = n(34),
        T = n(65),
        O = n(75),
        A = n(76),
        $ = n(84),
        L = n(4),
        P = n(117),
        j = n(106),
        D = n(59),
        N = n(49),
        I = n(21).forEach,
        M = O("hidden"),
        R = L("toPrimitive"),
        H = N.set,
        F = N.getterFor("Symbol"),
        W = Object.prototype,
        B = r.Symbol,
        q = r.JSON,
        V = q && q.stringify,
        Y = S.f,
        z = k.f,
        X = w.f,
        U = C.f,
        Q = T("symbols"),
        G = T("op-symbols"),
        K = T("string-to-symbol-registry"),
        J = T("symbol-to-string-registry"),
        Z = T("wks"),
        ee = r.QObject,
        te = !ee || !ee.prototype || !ee.prototype.findChild,
        ne = a && l((function () {
            return 7 != m(z({}, "a", {
                get: function () {
                    return z(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function (e, t, n) {
            var i = Y(W, t);
            i && delete W[t], z(e, t, n), i && e !== W && z(W, t, i)
        } : z,
        ie = function (e, t) {
            var n = Q[e] = m(B.prototype);
            return H(n, {
                type: "Symbol",
                tag: e,
                description: t
            }), a || (n.description = t), n
        },
        re = s && "symbol" == typeof B.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return Object(e) instanceof B
        },
        oe = function (e, t, n) {
            e === W && oe(G, t, n), d(e);
            var i = g(t, !0);
            return d(n), c(Q, i) ? (n.enumerable ? (c(e, M) && e[M][i] && (e[M][i] = !1), n = m(n, {
                enumerable: v(0, !1)
            })) : (c(e, M) || z(e, M, v(1, {})), e[M][i] = !0), ne(e, i, n)) : z(e, i, n)
        },
        ae = function (e, t) {
            d(e);
            var n = p(t),
                i = y(n).concat(ue(n));
            return I(i, (function (t) {
                a && !se.call(n, t) || oe(e, t, n[t])
            })), e
        },
        se = function (e) {
            var t = g(e, !0),
                n = U.call(this, t);
            return !(this === W && c(Q, t) && !c(G, t)) && (!(n || !c(this, t) || !c(Q, t) || c(this, M) && this[M][t]) || n)
        },
        le = function (e, t) {
            var n = p(e),
                i = g(t, !0);
            if (n !== W || !c(Q, i) || c(G, i)) {
                var r = Y(n, i);
                return !r || !c(Q, i) || c(n, M) && n[M][i] || (r.enumerable = !0), r
            }
        },
        ce = function (e) {
            var t = X(p(e)),
                n = [];
            return I(t, (function (e) {
                c(Q, e) || c(A, e) || n.push(e)
            })), n
        },
        ue = function (e) {
            var t = e === W,
                n = X(t ? G : p(e)),
                i = [];
            return I(n, (function (e) {
                !c(Q, e) || t && !c(W, e) || i.push(Q[e])
            })), i
        };
    s || (E((B = function () {
        if (this instanceof B) throw TypeError("Symbol is not a constructor");
        var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            t = $(e),
            n = function (e) {
                this === W && n.call(G, e), c(this, M) && c(this[M], t) && (this[M][t] = !1), ne(this, t, v(1, e))
            };
        return a && te && ne(W, t, {
            configurable: !0,
            set: n
        }), ie(t, e)
    }).prototype, "toString", (function () {
        return F(this).tag
    })), C.f = se, k.f = oe, S.f = le, b.f = w.f = ce, x.f = ue, a && (z(B.prototype, "description", {
        configurable: !0,
        get: function () {
            return F(this).description
        }
    }), o || E(W, "propertyIsEnumerable", se, {
        unsafe: !0
    })), P.f = function (e) {
        return ie(L(e), e)
    }), i({
        global: !0,
        wrap: !0,
        forced: !s,
        sham: !s
    }, {
        Symbol: B
    }), I(y(Z), (function (e) {
        j(e)
    })), i({
        target: "Symbol",
        stat: !0,
        forced: !s
    }, {
        for: function (e) {
            var t = String(e);
            if (c(K, t)) return K[t];
            var n = B(t);
            return K[t] = n, J[n] = t, n
        },
        keyFor: function (e) {
            if (!re(e)) throw TypeError(e + " is not a symbol");
            if (c(J, e)) return J[e]
        },
        useSetter: function () {
            te = !0
        },
        useSimple: function () {
            te = !1
        }
    }), i({
        target: "Object",
        stat: !0,
        forced: !s,
        sham: !a
    }, {
        create: function (e, t) {
            return void 0 === t ? m(e) : ae(m(e), t)
        },
        defineProperty: oe,
        defineProperties: ae,
        getOwnPropertyDescriptor: le
    }), i({
        target: "Object",
        stat: !0,
        forced: !s
    }, {
        getOwnPropertyNames: ce,
        getOwnPropertySymbols: ue
    }), i({
        target: "Object",
        stat: !0,
        forced: l((function () {
            x.f(1)
        }))
    }, {
        getOwnPropertySymbols: function (e) {
            return x.f(h(e))
        }
    }), q && i({
        target: "JSON",
        stat: !0,
        forced: !s || l((function () {
            var e = B();
            return "[null]" != V([e]) || "{}" != V({
                a: e
            }) || "{}" != V(Object(e))
        }))
    }, {
        stringify: function (e) {
            for (var t, n, i = [e], r = 1; arguments.length > r;) i.push(arguments[r++]);
            if (n = t = i[1], (f(t) || void 0 !== e) && !re(e)) return u(t) || (t = function (e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !re(t)) return t
            }), i[1] = t, V.apply(q, i)
        }
    }), B.prototype[R] || _(B.prototype, R, B.prototype.valueOf), D(B, "Symbol"), A[M] = !0
}, function (e, t, n) {
    var i = n(15);
    e.exports = function (e) {
        if (!i(e)) throw TypeError(String(e) + " is not an object");
        return e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(72).indexOf,
        o = n(45),
        a = [].indexOf,
        s = !!a && 1 / [1].indexOf(1, -0) < 0,
        l = o("indexOf");
    i({
        target: "Array",
        proto: !0,
        forced: s || l
    }, {
        indexOf: function (e) {
            return s ? a.apply(this, arguments) || 0 : r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    var i = n(34),
        r = Date.prototype,
        o = r.toString,
        a = r.getTime;
    new Date(NaN) + "" != "Invalid Date" && i(r, "toString", (function () {
        var e = a.call(this);
        return e == e ? o.call(this) : "Invalid Date"
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(80);
    i({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== r
    }, {
        exec: r
    })
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(9),
        o = n(1),
        a = n(25),
        s = n(15),
        l = n(22).f,
        c = n(114),
        u = o.Symbol;
    if (r && "function" == typeof u && (!("description" in u.prototype) || void 0 !== u().description)) {
        var f = {},
            d = function () {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    t = this instanceof d ? new u(e) : void 0 === e ? u() : u(e);
                return "" === e && (f[t] = !0), t
            };
        c(d, u);
        var h = d.prototype = u.prototype;
        h.constructor = d;
        var p = h.toString,
            g = "Symbol(test)" == String(u("test")),
            v = /^Symbol\((.*)\)[^)]+$/;
        l(h, "description", {
            configurable: !0,
            get: function () {
                var e = s(this) ? this.valueOf() : this,
                    t = p.call(e);
                if (a(f, e)) return "";
                var n = g ? t.slice(7, -1) : t.replace(v, "$1");
                return "" === n ? void 0 : n
            }
        }), i({
            global: !0,
            forced: !0
        }, {
            Symbol: d
        })
    }
}, function (e, t, n) {
    n(106)("iterator")
}, function (e, t, n) {
    "use strict";
    var i = n(121).charAt,
        r = n(49),
        o = n(118),
        a = r.set,
        s = r.getterFor("String Iterator");
    o(String, "String", (function (e) {
        a(this, {
            type: "String Iterator",
            string: String(e),
            index: 0
        })
    }), (function () {
        var e, t = s(this),
            n = t.string,
            r = t.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (e = i(n, r), t.index += e.length, {
            value: e,
            done: !1
        })
    }))
}, function (e, t, n) {
    var i = n(1),
        r = n(122),
        o = n(8),
        a = n(26),
        s = n(4),
        l = s("iterator"),
        c = s("toStringTag"),
        u = o.values;
    for (var f in r) {
        var d = i[f],
            h = d && d.prototype;
        if (h) {
            if (h[l] !== u) try {
                a(h, l, u)
            } catch (e) {
                h[l] = u
            }
            if (h[c] || a(h, c, f), r[f])
                for (var p in o)
                    if (h[p] !== o[p]) try {
                        a(h, p, o[p])
                    } catch (e) {
                        h[p] = o[p]
                    }
        }
    }
}, function (e, t, n) {
    var i = n(39);
    e.exports = function (e) {
        return Object(i(e))
    }
}, function (e, t, n) {
    var i = n(73),
        r = n(68),
        o = n(20),
        a = n(5),
        s = n(87),
        l = [].push,
        c = function (e) {
            var t = 1 == e,
                n = 2 == e,
                c = 3 == e,
                u = 4 == e,
                f = 6 == e,
                d = 5 == e || f;
            return function (h, p, g, v) {
                for (var m, y, b = o(h), w = r(b), x = i(p, g, 3), S = a(w.length), k = 0, C = v || s, _ = t ? C(h, S) : n ? C(h, 0) : void 0; S > k; k++)
                    if ((d || k in w) && (y = x(m = w[k], k, b), e))
                        if (t) _[k] = y;
                        else if (y) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return m;
                    case 6:
                        return k;
                    case 2:
                        l.call(_, m)
                } else if (u) return !1;
                return f ? -1 : c || u ? u : _
            }
        };
    e.exports = {
        forEach: c(0),
        map: c(1),
        filter: c(2),
        some: c(3),
        every: c(4),
        find: c(5),
        findIndex: c(6)
    }
}, function (e, t, n) {
    var i = n(9),
        r = n(112),
        o = n(11),
        a = n(55),
        s = Object.defineProperty;
    t.f = i ? s : function (e, t, n) {
        if (o(e), t = a(t, !0), o(n), r) try {
            return s(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(68),
        o = n(33),
        a = n(45),
        s = [].join,
        l = r != Object,
        c = a("join", ",");
    i({
        target: "Array",
        proto: !0,
        forced: l || c
    }, {
        join: function (e) {
            return s.call(o(this), void 0 === e ? "," : e)
        }
    })
}, function (e, t) {
    (function (t) {
        e.exports = t
    }).call(this, {})
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    var i = n(9),
        r = n(22),
        o = n(56);
    e.exports = i ? function (e, t, n) {
        return r.f(e, t, o(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t) {
    e.exports = function (e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function () {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(15),
        o = n(57),
        a = n(50),
        s = n(5),
        l = n(33),
        c = n(77),
        u = n(66),
        f = n(4)("species"),
        d = [].slice,
        h = Math.max;
    i({
        target: "Array",
        proto: !0,
        forced: !u("slice")
    }, {
        slice: function (e, t) {
            var n, i, u, p = l(this),
                g = s(p.length),
                v = a(e, g),
                m = a(void 0 === t ? g : t, g);
            if (o(p) && ("function" != typeof (n = p.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[f]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return d.call(p, v, m);
            for (i = new(void 0 === n ? Array : n)(h(m - v, 0)), u = 0; v < m; v++, u++) v in p && c(i, u, p[v]);
            return i.length = u, i
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(34),
        r = n(11),
        o = n(2),
        a = n(95),
        s = RegExp.prototype,
        l = s.toString,
        c = o((function () {
            return "/a/b" != l.call({
                source: "a",
                flags: "b"
            })
        })),
        u = "toString" != l.name;
    (c || u) && i(RegExp.prototype, "toString", (function () {
        var e = r(this),
            t = String(e.source),
            n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in s) ? a.call(e) : n)
    }), {
        unsafe: !0
    })
}, function (e, t, n) {
    "use strict";
    var i = n(81),
        r = n(100),
        o = n(11),
        a = n(39),
        s = n(51),
        l = n(96),
        c = n(5),
        u = n(82),
        f = n(80),
        d = n(2),
        h = [].push,
        p = Math.min,
        g = !d((function () {
            return !RegExp(4294967295, "y")
        }));
    i("split", 2, (function (e, t, n) {
        var i;
        return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
            var i = String(a(this)),
                o = void 0 === n ? 4294967295 : n >>> 0;
            if (0 === o) return [];
            if (void 0 === e) return [i];
            if (!r(e)) return t.call(i, e, o);
            for (var s, l, c, u = [], d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), p = 0, g = new RegExp(e.source, d + "g");
                (s = f.call(g, i)) && !((l = g.lastIndex) > p && (u.push(i.slice(p, s.index)), s.length > 1 && s.index < i.length && h.apply(u, s.slice(1)), c = s[0].length, p = l, u.length >= o));) g.lastIndex === s.index && g.lastIndex++;
            return p === i.length ? !c && g.test("") || u.push("") : u.push(i.slice(p)), u.length > o ? u.slice(0, o) : u
        } : "0".split(void 0, 0).length ? function (e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        } : t, [function (t, n) {
            var r = a(this),
                o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, r, n) : i.call(String(r), t, n)
        }, function (e, r) {
            var a = n(i, e, this, r, i !== t);
            if (a.done) return a.value;
            var f = o(e),
                d = String(this),
                h = s(f, RegExp),
                v = f.unicode,
                m = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (g ? "y" : "g"),
                y = new h(g ? f : "^(?:" + f.source + ")", m),
                b = void 0 === r ? 4294967295 : r >>> 0;
            if (0 === b) return [];
            if (0 === d.length) return null === u(y, d) ? [d] : [];
            for (var w = 0, x = 0, S = []; x < d.length;) {
                y.lastIndex = g ? x : 0;
                var k, C = u(y, g ? d : d.slice(x));
                if (null === C || (k = p(c(y.lastIndex + (g ? 0 : x)), d.length)) === w) x = l(d, x, v);
                else {
                    if (S.push(d.slice(w, x)), S.length === b) return S;
                    for (var _ = 1; _ <= C.length - 1; _++)
                        if (S.push(C[_]), S.length === b) return S;
                    x = w = k
                }
            }
            return S.push(d.slice(w)), S
        }]
    }), !g)
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(2),
        o = n(57),
        a = n(15),
        s = n(20),
        l = n(5),
        c = n(77),
        u = n(87),
        f = n(66),
        d = n(4)("isConcatSpreadable"),
        h = !r((function () {
            var e = [];
            return e[d] = !1, e.concat()[0] !== e
        })),
        p = f("concat"),
        g = function (e) {
            if (!a(e)) return !1;
            var t = e[d];
            return void 0 !== t ? !!t : o(e)
        };
    i({
        target: "Array",
        proto: !0,
        forced: !h || !p
    }, {
        concat: function (e) {
            var t, n, i, r, o, a = s(this),
                f = u(a, 0),
                d = 0;
            for (t = -1, i = arguments.length; t < i; t++)
                if (o = -1 === t ? a : arguments[t], g(o)) {
                    if (d + (r = l(o.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (n = 0; n < r; n++, d++) n in o && c(f, d, o[n])
                } else {
                    if (d >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    c(f, d++, o)
                } return f.length = d, f
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(21).map;
    i({
        target: "Array",
        proto: !0,
        forced: !n(66)("map")
    }, {
        map: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    var i = n(68),
        r = n(39);
    e.exports = function (e) {
        return i(r(e))
    }
}, function (e, t, n) {
    var i = n(1),
        r = n(65),
        o = n(26),
        a = n(25),
        s = n(93),
        l = n(113),
        c = n(49),
        u = c.get,
        f = c.enforce,
        d = String(l).split("toString");
    r("inspectSource", (function (e) {
        return l.call(e)
    })), (e.exports = function (e, t, n, r) {
        var l = !!r && !!r.unsafe,
            c = !!r && !!r.enumerable,
            u = !!r && !!r.noTargetGet;
        "function" == typeof n && ("string" != typeof t || a(n, "name") || o(n, "name", t), f(n).source = d.join("string" == typeof t ? t : "")), e !== i ? (l ? !u && e[t] && (c = !0) : delete e[t], c ? e[t] = n : o(e, t, n)) : c ? e[t] = n : s(t, n)
    })(Function.prototype, "toString", (function () {
        return "function" == typeof this && u(this).source || l.call(this)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(81),
        r = n(11),
        o = n(20),
        a = n(5),
        s = n(37),
        l = n(39),
        c = n(96),
        u = n(82),
        f = Math.max,
        d = Math.min,
        h = Math.floor,
        p = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        g = /\$([$&'`]|\d\d?)/g;
    i("replace", 2, (function (e, t, n) {
        return [function (n, i) {
            var r = l(this),
                o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, r, i) : t.call(String(r), n, i)
        }, function (e, o) {
            var l = n(t, e, this, o);
            if (l.done) return l.value;
            var h = r(e),
                p = String(this),
                g = "function" == typeof o;
            g || (o = String(o));
            var v = h.global;
            if (v) {
                var m = h.unicode;
                h.lastIndex = 0
            }
            for (var y = [];;) {
                var b = u(h, p);
                if (null === b) break;
                if (y.push(b), !v) break;
                "" === String(b[0]) && (h.lastIndex = c(p, a(h.lastIndex), m))
            }
            for (var w, x = "", S = 0, k = 0; k < y.length; k++) {
                b = y[k];
                for (var C = String(b[0]), _ = f(d(s(b.index), p.length), 0), E = [], T = 1; T < b.length; T++) E.push(void 0 === (w = b[T]) ? w : String(w));
                var O = b.groups;
                if (g) {
                    var A = [C].concat(E, _, p);
                    void 0 !== O && A.push(O);
                    var $ = String(o.apply(void 0, A))
                } else $ = i(C, p, _, E, O, o);
                _ >= S && (x += p.slice(S, _) + $, S = _ + C.length)
            }
            return x + p.slice(S)
        }];

        function i(e, n, i, r, a, s) {
            var l = i + e.length,
                c = r.length,
                u = g;
            return void 0 !== a && (a = o(a), u = p), t.call(s, u, (function (t, o) {
                var s;
                switch (o.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return n.slice(0, i);
                    case "'":
                        return n.slice(l);
                    case "<":
                        s = a[o.slice(1, -1)];
                        break;
                    default:
                        var u = +o;
                        if (0 === u) return t;
                        if (u > c) {
                            var f = h(u / 10);
                            return 0 === f ? t : f <= c ? void 0 === r[f - 1] ? o.charAt(1) : r[f - 1] + o.charAt(1) : t
                        }
                        s = r[u - 1]
                }
                return void 0 === s ? "" : s
            }))
        }
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(21).filter;
    i({
        target: "Array",
        proto: !0,
        forced: !n(66)("filter")
    }, {
        filter: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t) {
    var n = Math.ceil,
        i = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(123);
    i({
        target: "Array",
        proto: !0,
        forced: [].forEach != r
    }, {
        forEach: r
    })
}, function (e, t) {
    e.exports = function (e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e
    }
}, function (e, t, n) {
    var i = n(1),
        r = n(122),
        o = n(123),
        a = n(26);
    for (var s in r) {
        var l = i[s],
            c = l && l.prototype;
        if (c && c.forEach !== o) try {
            a(c, "forEach", o)
        } catch (e) {
            c.forEach = o
        }
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t, n) {
    "use strict";
    var i = n(81),
        r = n(11),
        o = n(5),
        a = n(39),
        s = n(96),
        l = n(82);
    i("match", 1, (function (e, t, n) {
        return [function (t) {
            var n = a(this),
                i = null == t ? void 0 : t[e];
            return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n))
        }, function (e) {
            var i = n(t, e, this);
            if (i.done) return i.value;
            var a = r(e),
                c = String(this);
            if (!a.global) return l(a, c);
            var u = a.unicode;
            a.lastIndex = 0;
            for (var f, d = [], h = 0; null !== (f = l(a, c));) {
                var p = String(f[0]);
                d[h] = p, "" === p && (a.lastIndex = s(c, o(a.lastIndex), u)), h++
            }
            return 0 === h ? null : d
        }]
    }))
}, function (e, t, n) {
    var i = n(0),
        r = n(151);
    i({
        global: !0,
        forced: parseInt != r
    }, {
        parseInt: r
    })
}, function (e, t, n) {
    var i = n(0),
        r = n(20),
        o = n(71);
    i({
        target: "Object",
        stat: !0,
        forced: n(2)((function () {
            o(1)
        }))
    }, {
        keys: function (e) {
            return o(r(e))
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(2);
    e.exports = function (e, t) {
        var n = [][e];
        return !n || !i((function () {
            n.call(null, t || function () {
                throw 1
            }, 1)
        }))
    }
}, function (e, t, n) {
    var i = n(0),
        r = n(150);
    i({
        global: !0,
        forced: parseFloat != r
    }, {
        parseFloat: r
    })
}, function (e, t, n) {
    var i = n(9),
        r = n(83),
        o = n(56),
        a = n(33),
        s = n(55),
        l = n(25),
        c = n(112),
        u = Object.getOwnPropertyDescriptor;
    t.f = i ? u : function (e, t) {
        if (e = a(e), t = s(t, !0), c) try {
            return u(e, t)
        } catch (e) {}
        if (l(e, t)) return o(!r.f.call(e, t), e[t])
    }
}, function (e, t, n) {
    var i = n(115),
        r = n(94).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return i(e, r)
    }
}, function (e, t, n) {
    var i, r, o, a = n(145),
        s = n(1),
        l = n(15),
        c = n(26),
        u = n(25),
        f = n(75),
        d = n(76),
        h = s.WeakMap;
    if (a) {
        var p = new h,
            g = p.get,
            v = p.has,
            m = p.set;
        i = function (e, t) {
            return m.call(p, e, t), t
        }, r = function (e) {
            return g.call(p, e) || {}
        }, o = function (e) {
            return v.call(p, e)
        }
    } else {
        var y = f("state");
        d[y] = !0, i = function (e, t) {
            return c(e, y, t), t
        }, r = function (e) {
            return u(e, y) ? e[y] : {}
        }, o = function (e) {
            return u(e, y)
        }
    }
    e.exports = {
        set: i,
        get: r,
        has: o,
        enforce: function (e) {
            return o(e) ? r(e) : i(e, {})
        },
        getterFor: function (e) {
            return function (t) {
                var n;
                if (!l(t) || (n = r(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return n
            }
        }
    }
}, function (e, t, n) {
    var i = n(37),
        r = Math.max,
        o = Math.min;
    e.exports = function (e, t) {
        var n = i(e);
        return n < 0 ? r(n + t, 0) : o(n, t)
    }
}, function (e, t, n) {
    var i = n(11),
        r = n(58),
        o = n(4)("species");
    e.exports = function (e, t) {
        var n, a = i(e).constructor;
        return void 0 === a || null == (n = i(a)[o]) ? t : r(n)
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(50),
        o = n(37),
        a = n(5),
        s = n(20),
        l = n(87),
        c = n(77),
        u = n(66),
        f = Math.max,
        d = Math.min;
    i({
        target: "Array",
        proto: !0,
        forced: !u("splice")
    }, {
        splice: function (e, t) {
            var n, i, u, h, p, g, v = s(this),
                m = a(v.length),
                y = r(e, m),
                b = arguments.length;
            if (0 === b ? n = i = 0 : 1 === b ? (n = 0, i = m - y) : (n = b - 2, i = d(f(o(t), 0), m - y)), m + n - i > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (u = l(v, i), h = 0; h < i; h++)(p = y + h) in v && c(u, h, v[p]);
            if (u.length = i, n < i) {
                for (h = y; h < m - i; h++) g = h + n, (p = h + i) in v ? v[g] = v[p] : delete v[g];
                for (h = m; h > m - i + n; h--) delete v[h - 1]
            } else if (n > i)
                for (h = m - i; h > y; h--) g = h + n - 1, (p = h + i - 1) in v ? v[g] = v[p] : delete v[g];
            for (h = 0; h < n; h++) v[h + y] = arguments[h + 2];
            return v.length = m - i + n, u
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(78).trim;
    i({
        target: "String",
        proto: !0,
        forced: n(152)("trim")
    }, {
        trim: function () {
            return r(this)
        }
    })
}, function (e, t, n) {
    var i = n(9),
        r = n(22).f,
        o = Function.prototype,
        a = o.toString,
        s = /^\s*function ([^ (]*)/;
    !i || "name" in o || r(o, "name", {
        configurable: !0,
        get: function () {
            try {
                return a.call(this).match(s)[1]
            } catch (e) {
                return ""
            }
        }
    })
}, function (e, t, n) {
    var i = n(15);
    e.exports = function (e, t) {
        if (!i(e)) return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
        if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
        if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function (e, t, n) {
    var i = n(41);
    e.exports = Array.isArray || function (e) {
        return "Array" == i(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
        return e
    }
}, function (e, t, n) {
    var i = n(22).f,
        r = n(25),
        o = n(4)("toStringTag");
    e.exports = function (e, t, n) {
        e && !r(e = n ? e : e.prototype, o) && i(e, o, {
            configurable: !0,
            value: t
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(58),
        o = n(20),
        a = n(2),
        s = n(45),
        l = [].sort,
        c = [1, 2, 3],
        u = a((function () {
            c.sort(void 0)
        })),
        f = a((function () {
            c.sort(null)
        })),
        d = s("sort");
    i({
        target: "Array",
        proto: !0,
        forced: u || !f || d
    }, {
        sort: function (e) {
            return void 0 === e ? l.call(o(this)) : l.call(o(this), r(e))
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(9),
        r = n(1),
        o = n(86),
        a = n(34),
        s = n(25),
        l = n(41),
        c = n(120),
        u = n(55),
        f = n(2),
        d = n(70),
        h = n(48).f,
        p = n(47).f,
        g = n(22).f,
        v = n(78).trim,
        m = r.Number,
        y = m.prototype,
        b = "Number" == l(d(y)),
        w = function (e) {
            var t, n, i, r, o, a, s, l, c = u(e, !1);
            if ("string" == typeof c && c.length > 2)
                if (43 === (t = (c = v(c)).charCodeAt(0)) || 45 === t) {
                    if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === t) {
                switch (c.charCodeAt(1)) {
                    case 66:
                    case 98:
                        i = 2, r = 49;
                        break;
                    case 79:
                    case 111:
                        i = 8, r = 55;
                        break;
                    default:
                        return +c
                }
                for (a = (o = c.slice(2)).length, s = 0; s < a; s++)
                    if ((l = o.charCodeAt(s)) < 48 || l > r) return NaN;
                return parseInt(o, i)
            }
            return +c
        };
    if (o("Number", !m(" 0o1") || !m("0b1") || m("+0x1"))) {
        for (var x, S = function (e) {
                var t = arguments.length < 1 ? 0 : e,
                    n = this;
                return n instanceof S && (b ? f((function () {
                    y.valueOf.call(n)
                })) : "Number" != l(n)) ? c(new m(w(t)), n, S) : w(t)
            }, k = i ? h(m) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), C = 0; k.length > C; C++) s(m, x = k[C]) && !s(S, x) && g(S, x, p(m, x));
        S.prototype = y, y.constructor = S, a(r, "Number", S)
    }
}, function (e, t, n) {
    var i = n(9),
        r = n(1),
        o = n(86),
        a = n(120),
        s = n(22).f,
        l = n(48).f,
        c = n(100),
        u = n(95),
        f = n(34),
        d = n(2),
        h = n(101),
        p = n(4)("match"),
        g = r.RegExp,
        v = g.prototype,
        m = /a/g,
        y = /a/g,
        b = new g(m) !== m;
    if (i && o("RegExp", !b || d((function () {
            return y[p] = !1, g(m) != m || g(y) == y || "/a/i" != g(m, "i")
        })))) {
        for (var w = function (e, t) {
                var n = this instanceof w,
                    i = c(e),
                    r = void 0 === t;
                return !n && i && e.constructor === w && r ? e : a(b ? new g(i && !r ? e.source : e, t) : g((i = e instanceof w) ? e.source : e, i && r ? u.call(e) : t), n ? this : v, w)
            }, x = function (e) {
                e in w || s(w, e, {
                    configurable: !0,
                    get: function () {
                        return g[e]
                    },
                    set: function (t) {
                        g[e] = t
                    }
                })
            }, S = l(g), k = 0; S.length > k;) x(S[k++]);
        v.constructor = w, w.prototype = v, f(r, "RegExp", w)
    }
    h("RegExp")
}, function (e, t, n) {
    var i = n(4),
        r = n(70),
        o = n(26),
        a = i("unscopables"),
        s = Array.prototype;
    null == s[a] && o(s, a, r(null)), e.exports = function (e) {
        s[a][e] = !0
    }
}, function (e, t) {
    e.exports = jQuery
}, function (e, t, n) {
    var i = n(69),
        r = n(144);
    (e.exports = function (e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: "3.3.2",
        mode: i ? "pure" : "global",
        copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t, n) {
    var i = n(2),
        r = n(4)("species");
    e.exports = function (e) {
        return !i((function () {
            var t = [];
            return (t.constructor = {})[r] = function () {
                return {
                    foo: 1
                }
            }, 1 !== t[e](Boolean).foo
        }))
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    var i = n(2),
        r = n(41),
        o = "".split;
    e.exports = i((function () {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function (e) {
        return "String" == r(e) ? o.call(e, "") : Object(e)
    } : Object
}, function (e, t) {
    e.exports = !1
}, function (e, t, n) {
    var i = n(11),
        r = n(146),
        o = n(94),
        a = n(76),
        s = n(125),
        l = n(97),
        c = n(75)("IE_PROTO"),
        u = function () {},
        f = function () {
            var e, t = l("iframe"),
                n = o.length;
            for (t.style.display = "none", s.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), f = e.F; n--;) delete f.prototype[o[n]];
            return f()
        };
    e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (u.prototype = i(e), n = new u, u.prototype = null, n[c] = e) : n = f(), void 0 === t ? n : r(n, t)
    }, a[c] = !0
}, function (e, t, n) {
    var i = n(115),
        r = n(94);
    e.exports = Object.keys || function (e) {
        return i(e, r)
    }
}, function (e, t, n) {
    var i = n(33),
        r = n(5),
        o = n(50),
        a = function (e) {
            return function (t, n, a) {
                var s, l = i(t),
                    c = r(l.length),
                    u = o(a, c);
                if (e && n != n) {
                    for (; c > u;)
                        if ((s = l[u++]) != s) return !0
                } else
                    for (; c > u; u++)
                        if ((e || u in l) && l[u] === n) return e || u || 0;
                return !e && -1
            }
        };
    e.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}, function (e, t, n) {
    var i = n(58);
    e.exports = function (e, t, n) {
        if (i(e), void 0 === t) return e;
        switch (n) {
            case 0:
                return function () {
                    return e.call(t)
                };
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, i) {
                    return e.call(t, n, i)
                };
            case 3:
                return function (n, i, r) {
                    return e.call(t, n, i, r)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t, n) {
    var i = n(11),
        r = n(148);
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var e, t = !1,
            n = {};
        try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
        } catch (e) {}
        return function (n, o) {
            return i(n), r(o), t ? e.call(n, o) : n.__proto__ = o, n
        }
    }() : void 0)
}, function (e, t, n) {
    var i = n(65),
        r = n(84),
        o = i("keys");
    e.exports = function (e) {
        return o[e] || (o[e] = r(e))
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    "use strict";
    var i = n(55),
        r = n(22),
        o = n(56);
    e.exports = function (e, t, n) {
        var a = i(t);
        a in e ? r.f(e, a, o(0, n)) : e[a] = n
    }
}, function (e, t, n) {
    var i = n(39),
        r = "[" + n(79) + "]",
        o = RegExp("^" + r + r + "*"),
        a = RegExp(r + r + "*$"),
        s = function (e) {
            return function (t) {
                var n = String(i(t));
                return 1 & e && (n = n.replace(o, "")), 2 & e && (n = n.replace(a, "")), n
            }
        };
    e.exports = {
        start: s(1),
        end: s(2),
        trim: s(3)
    }
}, function (e, t) {
    e.exports = "\t\n\v\f\r Â áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff"
}, function (e, t, n) {
    "use strict";
    var i, r, o = n(95),
        a = RegExp.prototype.exec,
        s = String.prototype.replace,
        l = a,
        c = (i = /a/, r = /b*/g, a.call(i, "a"), a.call(r, "a"), 0 !== i.lastIndex || 0 !== r.lastIndex),
        u = void 0 !== /()??/.exec("")[1];
    (c || u) && (l = function (e) {
        var t, n, i, r, l = this;
        return u && (n = new RegExp("^" + l.source + "$(?!\\s)", o.call(l))), c && (t = l.lastIndex), i = a.call(l, e), c && i && (l.lastIndex = l.global ? i.index + i[0].length : t), u && i && i.length > 1 && s.call(i[0], n, (function () {
            for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
        })), i
    }), e.exports = l
}, function (e, t, n) {
    "use strict";
    var i = n(26),
        r = n(34),
        o = n(2),
        a = n(4),
        s = n(80),
        l = a("species"),
        c = !o((function () {
            var e = /./;
            return e.exec = function () {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        })),
        u = !o((function () {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function () {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        }));
    e.exports = function (e, t, n, f) {
        var d = a(e),
            h = !o((function () {
                var t = {};
                return t[d] = function () {
                    return 7
                }, 7 != "" [e](t)
            })),
            p = h && !o((function () {
                var t = !1,
                    n = /a/;
                return n.exec = function () {
                    return t = !0, null
                }, "split" === e && (n.constructor = {}, n.constructor[l] = function () {
                    return n
                }), n[d](""), !t
            }));
        if (!h || !p || "replace" === e && !c || "split" === e && !u) {
            var g = /./ [d],
                v = n(d, "" [e], (function (e, t, n, i, r) {
                    return t.exec === s ? h && !r ? {
                        done: !0,
                        value: g.call(t, n, i)
                    } : {
                        done: !0,
                        value: e.call(n, t, i)
                    } : {
                        done: !1
                    }
                })),
                m = v[0],
                y = v[1];
            r(String.prototype, e, m), r(RegExp.prototype, d, 2 == t ? function (e, t) {
                return y.call(e, this, t)
            } : function (e) {
                return y.call(e, this)
            }), f && i(RegExp.prototype[d], "sham", !0)
        }
    }
}, function (e, t, n) {
    var i = n(41),
        r = n(80);
    e.exports = function (e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var o = n.call(e, t);
            if ("object" != typeof o) throw TypeError("RegExp exec method returned something other than an Object or null");
            return o
        }
        if ("RegExp" !== i(e)) throw TypeError("RegExp#exec called on incompatible receiver");
        return r.call(e, t)
    }
}, function (e, t, n) {
    "use strict";
    var i = {}.propertyIsEnumerable,
        r = Object.getOwnPropertyDescriptor,
        o = r && !i.call({
            1: 2
        }, 1);
    t.f = o ? function (e) {
        var t = r(this, e);
        return !!t && t.enumerable
    } : i
}, function (e, t) {
    var n = 0,
        i = Math.random();
    e.exports = function (e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + i).toString(36)
    }
}, function (e, t, n) {
    var i = n(98),
        r = n(1),
        o = function (e) {
            return "function" == typeof e ? e : void 0
        };
    e.exports = function (e, t) {
        return arguments.length < 2 ? o(i[e]) || o(r[e]) : i[e] && i[e][t] || r[e] && r[e][t]
    }
}, function (e, t, n) {
    var i = n(2),
        r = /#|\.prototype\./,
        o = function (e, t) {
            var n = s[a(e)];
            return n == c || n != l && ("function" == typeof t ? i(t) : !!t)
        },
        a = o.normalize = function (e) {
            return String(e).replace(r, ".").toLowerCase()
        },
        s = o.data = {},
        l = o.NATIVE = "N",
        c = o.POLYFILL = "P";
    e.exports = o
}, function (e, t, n) {
    var i = n(15),
        r = n(57),
        o = n(4)("species");
    e.exports = function (e, t) {
        var n;
        return r(e) && ("function" != typeof (n = e.constructor) || n !== Array && !r(n.prototype) ? i(n) && null === (n = n[o]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
    }
}, function (e, t, n) {
    var i = n(25),
        r = n(20),
        o = n(75),
        a = n(126),
        s = o("IE_PROTO"),
        l = Object.prototype;
    e.exports = a ? Object.getPrototypeOf : function (e) {
        return e = r(e), i(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? l : null
    }
}, function (e, t, n) {
    var i = n(41),
        r = n(4)("toStringTag"),
        o = "Arguments" == i(function () {
            return arguments
        }());
    e.exports = function (e) {
        var t, n, a;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), r)) ? n : o ? i(t) : "Object" == (a = i(t)) && "function" == typeof t.callee ? "Arguments" : a
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(57),
        o = [].reverse,
        a = [1, 2];
    i({
        target: "Array",
        proto: !0,
        forced: String(a) === String(a.reverse())
    }, {
        reverse: function () {
            return r(this) && (this.length = this.length), o.call(this)
        }
    })
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    var i = n(58),
        r = n(20),
        o = n(68),
        a = n(5),
        s = function (e) {
            return function (t, n, s, l) {
                i(n);
                var c = r(t),
                    u = o(c),
                    f = a(c.length),
                    d = e ? f - 1 : 0,
                    h = e ? -1 : 1;
                if (s < 2)
                    for (;;) {
                        if (d in u) {
                            l = u[d], d += h;
                            break
                        }
                        if (d += h, e ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; e ? d >= 0 : f > d; d += h) d in u && (l = n(l, u[d], d, c));
                return l
            }
        };
    e.exports = {
        left: s(!1),
        right: s(!0)
    }
}, function (e, t, n) {
    var i = n(1),
        r = n(26);
    e.exports = function (e, t) {
        try {
            r(i, e, t)
        } catch (n) {
            i[e] = t
        }
        return t
    }
}, function (e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (e, t, n) {
    "use strict";
    var i = n(11);
    e.exports = function () {
        var e = i(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function (e, t, n) {
    "use strict";
    var i = n(121).charAt;
    e.exports = function (e, t, n) {
        return t + (n ? i(e, t).length : 1)
    }
}, function (e, t, n) {
    var i = n(1),
        r = n(15),
        o = i.document,
        a = r(o) && r(o.createElement);
    e.exports = function (e) {
        return a ? o.createElement(e) : {}
    }
}, function (e, t, n) {
    e.exports = n(1)
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    var i = n(15),
        r = n(41),
        o = n(4)("match");
    e.exports = function (e) {
        var t;
        return i(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == r(e))
    }
}, function (e, t, n) {
    "use strict";
    var i = n(85),
        r = n(22),
        o = n(4),
        a = n(9),
        s = o("species");
    e.exports = function (e) {
        var t = i(e),
            n = r.f;
        a && t && !t[s] && n(t, s, {
            configurable: !0,
            get: function () {
                return this
            }
        })
    }
}, function (e, t) {
    e.exports = function (e, t, n) {
        if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e
    }
}, function (e, t, n) {
    var i = n(85);
    e.exports = i("navigator", "userAgent") || ""
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    n(31), n(36), n(6), n(12), n(23), n(14), n(35), n(30), n(53);

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    var r = function () {
        function e(t) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.view = t
        }
        var t, n, r;
        return t = e, (n = [{
            key: "destroy",
            value: function () {
                var e = this.view.$nativeSelect.data("select-id");
                this.view.$nativeSelect.data("select-id", null).removeClass("initialized"), this.view.$nativeSelect.parent().find("span.caret").remove(), this.view.$nativeSelect.parent().find("input").remove(), this.view.$nativeSelect.hasClass("select-wrapper") && this.view.$nativeSelect.find("select").unwrap(), $("ul#select-options-".concat(e)).remove()
            }
        }, {
            key: "render",
            value: function () {
                this.setWrapperClasses(), this.setMaterialSelectInitialValue(), this.view.$nativeSelect.data("select-id", this.view.properties.id), this.view.$nativeSelect.before(this.view.$selectWrapper), this.view.options.showResetButton && this.appendResetButton(), this.appendDropdownIcon(), this.appendMaterialSelect(), this.appendMaterialOptionsList(), this.appendNativeSelect(), this.appendSelectLabel(), this.appendCustomTemplateParts(), this.shouldValidate && this.appendValidationFeedbackElements(), this.isRequired && this.enableValidation(), this.isDisabled || (this.setMaterialOptionsListMaxHeight(), this.view.dropdown = this.view.$materialSelect.dropdown({
                    hover: !1,
                    closeOnClick: !1,
                    resetScroll: !1
                })), this.shouldInheritTabindex && this.view.$materialSelect.attr("tabindex", this.view.$nativeSelect.attr("tabindex")), this.isDefaultMaterialInput && this.view.$mainLabel.css("top", "-7px"), this.isCustomSelect && this.view.$materialSelect.css({
                    display: "inline-block",
                    width: "100%",
                    height: "calc(1.5em + .75rem + 2px)",
                    padding: ".375rem 1.75rem .375rem .75rem",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    backgroundColor: "#fff",
                    border: "1px solid #ced4da"
                }), this.addAccessibilityAttributes(), this.markInitialized()
            }
        }, {
            key: "setWrapperClasses",
            value: function () {
                this.isDefaultMaterialInput ? this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr("class").split(" ").filter((function (e) {
                    return "md-form" !== e
                })).join(" ")).css({
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem"
                }) : this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr("class"))
            }
        }, {
            key: "setMaterialSelectInitialValue",
            value: function () {
                if (this.view.options.placeholder) this.view.$materialSelect.attr("placeholder", this.view.options.placeholder), this.view.$nativeSelect.find('option[value=""][selected][disabled][data-mdb-placeholder]').length || this.view.$nativeSelect.prepend('<option value="" selected disabled data-mdb-placeholder></option>');
                else {
                    var e = this.view.$materialSelectInitialOption.replace(/"/g, "&quot;").replace(/  +/g, " ").trim();
                    this.view.$materialSelect.val(e)
                }
            }
        }, {
            key: "appendDropdownIcon",
            value: function () {
                this.isDisabled && this.view.$dropdownIcon.addClass("disabled"), this.view.$selectWrapper.append(this.view.$dropdownIcon)
            }
        }, {
            key: "appendResetButton",
            value: function () {
                this.isDisabled && this.view.$btnReset.addClass("disabled"), -1 === this.view.$nativeSelect.get(0).selectedIndex && this.view.$btnReset.hide(), this.view.$selectWrapper.append(this.view.$btnReset)
            }
        }, {
            key: "appendMaterialSelect",
            value: function () {
                this.view.$selectWrapper.append(this.view.$materialSelect)
            }
        }, {
            key: "appendMaterialOptionsList",
            value: function () {
                this.isSearchable && this.appendSearchInputOption(), this.isEditable && this.isSearchable && this.appendAddOptionBtn(), this.buildMaterialOptions(), this.isMultiple && this.appendToggleAllCheckbox(), this.view.$selectWrapper.append(this.view.$materialOptionsList)
            }
        }, {
            key: "appendNativeSelect",
            value: function () {
                this.view.$nativeSelect.appendTo(this.view.$selectWrapper)
            }
        }, {
            key: "appendSelectLabel",
            value: function () {
                (this.view.$materialSelect.val() || this.view.options.placeholder) && this.view.$mainLabel.addClass("active"), this.view.$mainLabel[this.isDisabled ? "addClass" : "removeClass"]("disabled"), this.view.$mainLabel.appendTo(this.view.$selectWrapper)
            }
        }, {
            key: "appendCustomTemplateParts",
            value: function () {
                var e = this;
                this.view.$customTemplateParts.each((function (t, n) {
                    $(n).appendTo(e.view.$materialOptionsList).wrap("<li></li>")
                })), this.view.$btnSave.appendTo(this.view.$selectWrapper).clone().appendTo(this.view.$materialOptionsList)
            }
        }, {
            key: "appendValidationFeedbackElements",
            value: function () {
                this.view.$validFeedback.insertAfter(this.view.$selectWrapper), this.view.$invalidFeedback.insertAfter(this.view.$selectWrapper)
            }
        }, {
            key: "enableValidation",
            value: function () {
                this.view.$nativeSelect.css({
                    position: "absolute",
                    top: "1rem",
                    left: "0",
                    height: "0",
                    width: "0",
                    opacity: "0",
                    padding: "0",
                    "pointer-events": "none"
                }), -1 === this.view.$nativeSelect.attr("style").indexOf("inline!important") && this.view.$nativeSelect.attr("style", "".concat(this.view.$nativeSelect.attr("style"), " display: inline!important;")), this.view.$nativeSelect.attr("tabindex", -1), this.view.$nativeSelect.data("inherit-tabindex", !1)
            }
        }, {
            key: "setMaterialOptionsListMaxHeight",
            value: function () {
                var e = $("<div />").appendTo($("body"));
                e.css({
                    position: "absolute !important",
                    visibility: "hidden !important",
                    display: "block !important"
                }), this.view.$materialOptionsList.show();
                var t = this.view.$materialOptionsList.clone().appendTo(e),
                    n = this.view.options.visibleOptions,
                    i = 0,
                    r = t.find("li").not(".disabled"),
                    o = "" === r.first().text().trim() ? r.eq(1).height() : r.first().height(),
                    a = r.length;
                if (this.isSearchable && (i += this.view.$searchInput.height()), this.isMultiple && (i += this.view.$toggleAll.height()), this.view.$materialOptionsList.hide(), e.remove(), n >= 0 && n < a) {
                    var s = o * n + i;
                    this.view.$materialOptionsList.css("max-height", s), this.view.$materialSelect.data("maxheight", s)
                }
            }
        }, {
            key: "addAccessibilityAttributes",
            value: function () {
                this.view.$materialSelect.attr({
                    role: this.isSearchable ? "combobox" : "listbox",
                    "aria-multiselectable": this.isMultiple,
                    "aria-disabled": this.isDisabled,
                    "aria-required": this.isRequired,
                    "aria-labelledby": this.view.$mainLabel.attr("id"),
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), this.view.$searchInput && this.view.$searchInput.attr("role", "searchbox"), this.view.$materialOptionsList.find("li").each((function () {
                    var e = $(this);
                    e.attr({
                        role: "option",
                        "aria-selected": e.hasClass("active"),
                        "aria-disabled": e.hasClass("disabled")
                    })
                }))
            }
        }, {
            key: "markInitialized",
            value: function () {
                this.view.$nativeSelect.addClass("initialized")
            }
        }, {
            key: "appendSearchInputOption",
            value: function () {
                var e = this.view.$nativeSelect.attr("searchable"),
                    t = this.isDefaultMaterialInput ? "" : "md-form",
                    n = this.isDefaultMaterialInput ? "select-default mb-2" : "";
                this.view.$searchInput = $('<span class="search-wrap ml-2"><div class="'.concat(t, ' mt-0"><input type="text" class="search w-100 d-block ').concat(n, '" tabindex="-1" placeholder="').concat(e, '"></div></span>')), this.view.$materialOptionsList.append(this.view.$searchInput), this.view.$searchInput.on("click", (function (e) {
                    return e.stopPropagation()
                }))
            }
        }, {
            key: "appendAddOptionBtn",
            value: function () {
                this.view.$searchInput.append(this.view.$addOptionBtn)
            }
        }, {
            key: "buildMaterialOptions",
            value: function () {
                var e = this;
                this.view.$nativeSelectChildren.each((function (t, n) {
                    var i = $(n);
                    if (i.is("option")) e.buildSingleOption(i, e.isMultiple ? "multiple" : "");
                    else if (i.is("optgroup")) {
                        var r = $('<li class="optgroup"><span>'.concat(i.attr("label"), "</span></li>"));
                        e.view.$materialOptionsList.append(r), i.children("option").each((function (t, n) {
                            e.buildSingleOption($(n), "optgroup-option")
                        }))
                    }
                }))
            }
        }, {
            key: "appendToggleAllCheckbox",
            value: function () {
                var e = this.view.$materialOptionsList.find("li").first();
                e.hasClass("disabled") && e.find("input").prop("disabled") ? e.after(this.view.$toggleAll) : this.view.$materialOptionsList.find("li").first().before(this.view.$toggleAll)
            }
        }, {
            key: "addNewOption",
            value: function () {
                var e = this.view.$searchInput.find("input").val(),
                    t = $('<option value="'.concat(e.toLowerCase(), '" selected>').concat(e, "</option>")).prop("selected", !0);
                this.isMultiple || this.view.$nativeSelectChildren.each((function (e, t) {
                    $(t).attr("selected", !1)
                })), this.view.$nativeSelect.append(t)
            }
        }, {
            key: "buildSingleOption",
            value: function (e, t) {
                var n = e.is(":disabled") ? "disabled" : "",
                    i = e.is(":selected") ? "active" : "",
                    r = "optgroup-option" === t ? "optgroup-option" : "",
                    o = e.data("icon"),
                    a = e.data("fas") ? '<i class="fa-pull-right m-2 fas fa-'.concat(e.data("fas"), " ").concat(this.view.options.fasClasses, '"></i> ') : "",
                    s = e.data("far") ? '<i class="fa-pull-right m-2 far fa-'.concat(e.data("far"), " ").concat(this.view.options.farClasses, '"></i> ') : "",
                    l = e.data("fab") ? '<i class="fa-pull-right m-2 fab fa-'.concat(e.data("fab"), " ").concat(this.view.options.fabClasses, '"></i> ') : "",
                    c = e.attr("class"),
                    u = o ? '<img alt="" src="'.concat(o, '" class="').concat(c, '">') : "",
                    f = this.isMultiple ? '<input type="checkbox" class="form-check-input" '.concat(n, "/><label></label>") : "",
                    d = e.data("secondary-text") ? '<p class="text-muted pt-0 mb-0" disabled>'.concat(e.data("secondary-text"), "</p>") : "";
                this.view.$materialOptionsList.append($('<li class="'.concat(n, " ").concat(i, " ").concat(r, '">').concat(u, '<span class="filtrable ').concat(this.view.options.copyClassesOption ? c : "", '">').concat(f, " ").concat(e.html(), " ").concat(a, " ").concat(s, " ").concat(l, " ").concat(d, "</span></li>")))
            }
        }, {
            key: "shouldValidate",
            get: function () {
                return this.view.options.validate
            }
        }, {
            key: "shouldInheritTabindex",
            get: function () {
                return !1 !== this.view.$nativeSelect.data("inherit-tabindex")
            }
        }, {
            key: "isMultiple",
            get: function () {
                return this.view.isMultiple
            }
        }, {
            key: "isSearchable",
            get: function () {
                return this.view.isSearchable
            }
        }, {
            key: "isRequired",
            get: function () {
                return this.view.isRequired
            }
        }, {
            key: "isEditable",
            get: function () {
                return this.view.isEditable
            }
        }, {
            key: "isDisabled",
            get: function () {
                return this.view.isDisabled
            }
        }, {
            key: "isDefaultMaterialInput",
            get: function () {
                return this.view.options.defaultMaterialInput
            }
        }, {
            key: "isCustomSelect",
            get: function () {
                return this.view.$materialSelect.hasClass("custom-select") && this.view.$materialSelect.hasClass("select-dropdown")
            }
        }]) && i(t.prototype, n), r && i(t, r), e
    }()
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return o
    }));
    n(31), n(36), n(6), n(109), n(12), n(32), n(44), n(14), n(110), n(35), n(53);
    var i = n(104);

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    var o = function () {
        function e(t, n) {
            var r = n.options,
                o = n.properties.id;
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.properties = {
                id: o,
                isMultiple: Boolean(t.attr("multiple")),
                isSearchable: Boolean(t.attr("searchable")),
                isRequired: Boolean(t.attr("required")),
                isEditable: Boolean(t.attr("editable"))
            }, this.options = this._copyOptions(r), this.$nativeSelect = t, this.$selectWrapper = $('<div class="select-wrapper"></div>'), this.$materialOptionsList = $('<ul id="select-options-'.concat(this.properties.id, '" class="dropdown-content select-dropdown w-100 ').concat(this.properties.isMultiple ? "multiple-select-dropdown" : "", '"></ul>')), this.$materialSelectInitialOption = t.find("option:selected").text() || t.find("option:first").text() || "", this.$nativeSelectChildren = this.$nativeSelect.children("option, optgroup"), this.$materialSelect = $('<input type="text" class="'.concat(this.options.defaultMaterialInput ? "browser-default custom-select multi-bs-select select-dropdown form-control" : "select-dropdown form-control", '" ').concat(!this.options.validate && 'readonly="true"', ' required="').concat(this.options.validate ? "true" : "false", '" ').concat(this.$nativeSelect.is(" :disabled") ? "disabled" : "", ' data-activates="select-options-').concat(this.properties.id, '" value=""/>')), this.$dropdownIcon = this.options.defaultMaterialInput ? "" : $('<span class="caret">&#9660;</span>'), this.$searchInput = null, this.$noSearchResultsInfo = $("<li><span><i>".concat(this.options.labels.noSearchResults, "</i></span></li>")), this.$toggleAll = $('<li class="select-toggle-all"><span><input type="checkbox" class="form-check-input"><label>'.concat(this.options.labels.selectAll, "</label></span></li>")), this.$addOptionBtn = $('<i class="select-add-option fas fa-plus"></i>'), this.$mainLabel = this._jQueryFallback(this.$nativeSelect.next("label.mdb-main-label"), $("label[for='".concat(this.properties.id, "']"))), this.$customTemplateParts = this._jQueryFallback(this.$nativeSelect.nextUntil("select", ".mdb-select-template-part"), $("[data-mdb-select-template-part-for='".concat(this.properties.id, "']"))), this.$btnSave = this.$nativeSelect.nextUntil("select", ".btn-save"), this.$btnReset = $('<span class="reset-select-btn">&times;</span>'), this.$validFeedback = $('<div class="valid-feedback">'.concat(this.options.labels.validFeedback, "</div>")), this.$invalidFeedback = $('<div class="invalid-feedback">'.concat(this.options.labels.invalidFeedback, "</div>")), this.keyCodes = {
                tab: 9,
                enter: 13,
                shift: 16,
                alt: 18,
                esc: 27,
                space: 32,
                end: 35,
                home: 36,
                arrowUp: 38,
                arrowDown: 40
            }, this.renderer = new i.a(this), this.dropdown = null
        }
        var t, n, o;
        return t = e, o = [{
            key: "isMobileDevice",
            get: function () {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            }
        }], (n = [{
            key: "destroy",
            value: function () {
                this.renderer.destroy()
            }
        }, {
            key: "render",
            value: function () {
                this.renderer.render()
            }
        }, {
            key: "selectPreselectedOptions",
            value: function (e) {
                var t = this;
                if (this.isMultiple) this.$nativeSelect.find("option:selected:not(:disabled)").each((function (n, i) {
                    var r = i.index;
                    e(r), t._isPlaceholderPresent() && (r -= 1), t.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(r).addClass("selected active").find(":checkbox").prop("checked", !0)
                }));
                else {
                    var n = this.$nativeSelect.find("option:selected").first(),
                        i = this.$nativeSelect.find("option").index(n.get(0));
                    n.get(0) && "disabled" !== n.attr("disabled") && e(i)
                }
            }
        }, {
            key: "bindResetButtonClick",
            value: function (e) {
                var t = this;
                this.$btnReset.on("click", (function (n) {
                    n.preventDefault(), t.$nativeSelect.find('option[value=""][selected][disabled][data-mdb-novalue]').length || (t._toggleResetButton(!0), t.$materialSelect.val(t.isMultiple ? [] : ""), t.$materialSelect.trigger("close"), t.$mainLabel.removeClass("active"), t.$materialOptionsList.find("li.active, li.selected").removeClass("active").removeClass("selected"), t.$materialOptionsList.find('li[aria-selected="true"]').attr("aria-selected", "false"), t.$materialOptionsList.find('input[type="checkbox"]').prop("checked", !1), e())
                }))
            }
        }, {
            key: "bindAddNewOptionClick",
            value: function () {
                this.$addOptionBtn.on("click", this.renderer.addNewOption.bind(this.renderer))
            }
        }, {
            key: "bindMaterialSelectFocus",
            value: function () {
                var e = this;
                this.$materialSelect.on("focus", (function (t) {
                    var n = $(t.target);
                    if (n.parent().addClass("active"), $("ul.select-dropdown").not(e.$materialOptionsList.get(0)).is(":visible") && $("input.select-dropdown").trigger("close"), e.$mainLabel.addClass("active"), !e.$materialOptionsList.is(":visible")) {
                        var i = n.val(),
                            r = e.$materialOptionsList.find("li").filter((function () {
                                return $(this).text().toLowerCase() === i.toLowerCase()
                            })).get(0);
                        e._selectSingleOption(r)
                    }
                    e.isMultiple || e.$mainLabel.addClass("active")
                }))
            }
        }, {
            key: "bindMaterialSelectClick",
            value: function () {
                var e = this;
                this.$materialSelect.on("mousedown", (function (e) {
                    3 === e.which && e.preventDefault()
                })), this.$materialSelect.on("click", (function (t) {
                    t.stopPropagation(), e.$mainLabel.addClass("active"), e._updateDropdownScrollTop()
                }))
            }
        }, {
            key: "bindMaterialSelectBlur",
            value: function () {
                var e = this;
                this.$materialSelect.on("blur", (function (t) {
                    var n = $(t.target);
                    n.parent().removeClass("active"), e.isMultiple || e.isSearchable || n.trigger("close"), e.$materialOptionsList.find("li.selected").removeClass("selected")
                }))
            }
        }, {
            key: "bindMaterialOptionsListTouchstart",
            value: function () {
                this.$materialOptionsList.on("touchstart", (function (e) {
                    return e.stopPropagation()
                }))
            }
        }, {
            key: "bindMaterialSelectKeydown",
            value: function () {
                var e = this;
                this.$materialSelect.on("keydown", (function (t) {
                    var n = $(t.target),
                        i = t.which === e.keyCodes.tab,
                        r = t.which === e.keyCodes.arrowUp,
                        o = t.which === e.keyCodes.arrowDown,
                        a = t.which === e.keyCodes.enter,
                        s = t.which === e.keyCodes.esc,
                        l = o && t.altKey,
                        c = r && t.altKey,
                        u = t.which === e.keyCodes.home,
                        f = t.which === e.keyCodes.end,
                        d = t.which === e.keyCodes.space,
                        h = e.$materialOptionsList.is(":visible");
                    switch (!0) {
                        case i:
                            return e._handleTabKey(n);
                        case !h && (a || l):
                        case e.isMultiple && !h && (o || r):
                            return n.trigger("open"), e._updateDropdownScrollTop();
                        case h && (s || c):
                            return n.trigger("close");
                        case !h && (o || r):
                            return e._handleClosedArrowUpDownKey(t.which);
                        case h && (o || r):
                            return e._handleArrowUpDownKey(t.which);
                        case h && u:
                            return e._handleHomeKey();
                        case h && f:
                            return e._handleEndKey();
                        case h && (a || d):
                            return e._handleEnterKey(n);
                        default:
                            return e._handleLetterKey(t)
                    }
                }))
            }
        }, {
            key: "bindMaterialSelectDropdownToggle",
            value: function () {
                var e = this;
                this.$materialSelect.on("open", (function () {
                    return e.$materialSelect.attr("aria-expanded", "true")
                })), this.$materialSelect.on("close", (function () {
                    return e.$materialSelect.attr("aria-expanded", "false")
                }))
            }
        }, {
            key: "bindToggleAllClick",
            value: function (e) {
                var t = this;
                this.$toggleAll.on("click", (function (n) {
                    var i = $(t.$toggleAll).find('input[type="checkbox"]').first(),
                        r = Boolean($(i).prop("checked")),
                        o = !r;
                    $(i).prop("checked", !r), t.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").each((function (n, i) {
                        var r = $(i),
                            a = r.find('input[type="checkbox"]');
                        r.attr("aria-selected", o), o && a.is(":checked") || !o && !a.is(":checked") || $(i).is(":hidden") || $(i).is(".disabled") || (a.prop("checked", o), t.$nativeSelect.find("option").eq(n).prop("selected", o), r.toggleClass("active"), t._selectOption(i), e(n))
                    })), t.$nativeSelect.data("stop-refresh", !0), t._triggerChangeOnNativeSelect(), t.$nativeSelect.removeData("stop-refresh"), n.stopPropagation()
                }))
            }
        }, {
            key: "bindMaterialOptionMousedown",
            value: function () {
                var e = this;
                this.$materialOptionsList.on("mousedown", (function (t) {
                    var n = t.target;
                    $(".modal-content").find(e.$materialOptionsList).length && n.scrollHeight > n.offsetHeight && t.preventDefault()
                }))
            }
        }, {
            key: "bindMaterialOptionClick",
            value: function (e) {
                var t = this;
                this.$materialOptionsList.find("li:not(.optgroup)").not(this.$toggleAll).each((function (n, i) {
                    $(i).on("click", (function (r) {
                        r.stopPropagation(), t._toggleResetButton(!1);
                        var o = $(i);
                        if (!o.hasClass("disabled") && !o.hasClass("optgroup")) {
                            var a = !0;
                            if (t.isMultiple) {
                                o.find('input[type="checkbox"]').prop("checked", (function (e, t) {
                                    return !t
                                }));
                                var s = Boolean(t.$nativeSelect.find("optgroup").length),
                                    l = t._isToggleAllPresent() && !t._isPlaceholderPresent() ? o.index() - 1 : o.index();
                                switch (!0) {
                                    case t.isSearchable && s:
                                        a = e(l - o.prevAll(".optgroup").length - 1);
                                        break;
                                    case t.isSearchable:
                                        a = e(l - 1);
                                        break;
                                    case s:
                                        a = e(l - o.prevAll(".optgroup").length);
                                        break;
                                    default:
                                        a = e(l)
                                }
                                t._isToggleAllPresent() && t._updateToggleAllOption(), t.$materialSelect.trigger("focus")
                            } else {
                                t.$materialOptionsList.find("li").removeClass("active").attr("aria-selected", "false");
                                var c = o.children().last()[0].childNodes[0];
                                t.$materialSelect.val($(c).text().replace(/  +/g, " ").trim()), t.$materialSelect.trigger("close")
                            }
                            o.toggleClass("active");
                            var u = o.attr("aria-selected");
                            o.attr("aria-selected", "true" === u ? "false" : "true"), t._selectSingleOption(o), t.$nativeSelect.data("stop-refresh", !0);
                            var f = t._isPlaceholderPresent() ? n + 1 : n;
                            t.$nativeSelect.find("option").eq(f).prop("selected", a), t.$nativeSelect.removeData("stop-refresh"), t._triggerChangeOnNativeSelect(), t.$materialSelect.val() && t.$mainLabel.addClass("active"), o.hasClass("li-added") && t.renderer.buildSingleOption(o, "")
                        }
                    }))
                }))
            }
        }, {
            key: "bindSingleMaterialOptionClick",
            value: function () {
                var e = this;
                this.$materialOptionsList.find("li").on("click", (function () {
                    e.$materialSelect.trigger("close")
                }))
            }
        }, {
            key: "bindSearchInputKeyup",
            value: function () {
                var e = this;
                this.$searchInput.find(".search").on("keyup", (function (t) {
                    var n = $(t.target),
                        i = t.which === e.keyCodes.tab,
                        r = t.which === e.keyCodes.esc,
                        o = t.which === e.keyCodes.enter,
                        a = o && t.shiftKey,
                        s = t.which === e.keyCodes.arrowUp;
                    if (t.which === e.keyCodes.arrowDown || i || r || s) return e.$materialSelect.focus(), void e._handleArrowUpDownKey(t.which);
                    var l = n.closest("ul"),
                        c = n.val(),
                        u = l.find("li span.filtrable"),
                        f = !1;
                    if (u.each((function () {
                            var e = $(this);
                            if ("string" == typeof this.outerHTML) {
                                var t = this.textContent.toLowerCase();
                                t.includes(c.toLowerCase()) ? e.show().parent().show() : e.hide().parent().hide(), t.trim() === c.toLowerCase() && (f = !0)
                            }
                        })), o) return e.isEditable && !f ? void e.renderer.addNewOption() : (a && e._handleEnterWithShiftKey(n), void e.$materialSelect.trigger("open"));
                    e.$addOptionBtn[c && e.isEditable && !f ? "show" : "hide"](), 0 !== u.filter((function (e, t) {
                        return $(t).is(":visible") && !$(t).parent().hasClass("disabled")
                    })).length ? (e.$toggleAll.show(), e.$materialOptionsList.find(e.$noSearchResultsInfo).remove(), e._updateToggleAllOption()) : (e.$toggleAll.hide(), e.$materialOptionsList.append(e.$noSearchResultsInfo)), e.dropdown.updatePosition(e.$materialSelect, e.$materialOptionsList)
                }))
            }
        }, {
            key: "bindHtmlClick",
            value: function () {
                var e = this;
                $("html").on("click", (function (t) {
                    $(t.target).closest("#select-options-".concat(e.properties.id)).length || $(t.target).hasClass("mdb-select") || !$("#select-options-".concat(e.properties.id)).hasClass("active") || (e.$materialSelect.trigger("close"), e.$materialSelect.val() || e.options.placeholder || e.$mainLabel.removeClass("active")), e.isSearchable && null !== e.$searchInput && e.$materialOptionsList.hasClass("active") && e.$materialOptionsList.find(".search-wrap input.search").focus()
                }))
            }
        }, {
            key: "bindMobileDevicesMousedown",
            value: function () {
                $("select").siblings("input.select-dropdown", "input.multi-bs-select").on("mousedown", (function (t) {
                    e.isMobileDevice && (t.clientX >= t.target.clientWidth || t.clientY >= t.target.clientHeight) && t.preventDefault()
                }))
            }
        }, {
            key: "bindSaveBtnClick",
            value: function () {
                var e = this;
                this.$btnSave.on("click", (function () {
                    e.$materialSelect.trigger("close")
                }))
            }
        }, {
            key: "_toggleResetButton",
            value: function (e) {
                var t = this.$nativeSelect.data("stop-refresh");
                this.$nativeSelect.attr("data-stop-refresh", "true"), e ? this.$nativeSelect.prepend('<option value="" selected disabled data-mdb-novalue></option>') : this.$nativeSelect.find("option[data-mdb-novalue]").remove(), this.$nativeSelect.attr("data-stop-refresh", t), this.$btnReset[e ? "hide" : "show"]()
            }
        }, {
            key: "_isToggleAllPresent",
            value: function () {
                return this.$materialOptionsList.find(this.$toggleAll).length
            }
        }, {
            key: "_isPlaceholderPresent",
            value: function () {
                return !(!this.$nativeSelect.attr("data-placeholder") && !this.options.placeholder)
            }
        }, {
            key: "_updateToggleAllOption",
            value: function () {
                var e = this.$materialOptionsList.find("li").not(".select-toggle-all, .disabled, :hidden").find("[type=checkbox]"),
                    t = e.filter(":checked"),
                    n = this.$toggleAll.find("[type=checkbox]").is(":checked");
                t.length !== e.length || n ? t.length < e.length && n && this.$toggleAll.find("[type=checkbox]").prop("checked", !1) : this.$toggleAll.find("[type=checkbox]").prop("checked", !0)
            }
        }, {
            key: "_handleTabKey",
            value: function (e) {
                this._handleEscKey(e)
            }
        }, {
            key: "_handleEnterWithShiftKey",
            value: function (e) {
                this.isMultiple ? this.$toggleAll.trigger("click") : this._handleEnterKey(e)
            }
        }, {
            key: "_handleEnterKey",
            value: function (e) {
                this.$materialOptionsList.find("li.selected:not(.disabled)").trigger("click").addClass("active"), this._removeKeyboardActiveClass(), this.isMultiple || e.trigger("close")
            }
        }, {
            key: "_handleArrowUpDownKey",
            value: function (e) {
                var t = this._getArrowMatchedActiveOptions(e, !1),
                    n = t.$matchedMaterialOption,
                    i = t.$activeOption;
                this._selectSingleOption(n), this._removeKeyboardActiveClass(), n.find("input").is(":checked") || n.removeClass(this.options.keyboardActiveClass), i.hasClass("selected") || i.find("input").is(":checked") || !this.isMultiple || i.removeClass("active", this.options.keyboardActiveClass), n.addClass(this.options.keyboardActiveClass), n.position() && this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop() + n.position().top)
            }
        }, {
            key: "_handleClosedArrowUpDownKey",
            value: function (e) {
                var t = this._getArrowMatchedActiveOptions(e, !0).$matchedMaterialOption;
                t.trigger("click").addClass("active"), this._updateDropdownScrollTop(), this._selectSingleOption(t)
            }
        }, {
            key: "_getArrowMatchedActiveOptions",
            value: function (e, t) {
                var n = this,
                    i = t ? "" : ":visible",
                    r = this.$materialOptionsList.find("li".concat(i)).not(".disabled, .select-toggle-all"),
                    o = r.first(),
                    a = r.last(),
                    s = this.$materialOptionsList.find("li.selected").length > 0,
                    l = null,
                    c = null;
                if (e === this.keyCodes.arrowUp) {
                    var u = s ? this.$materialOptionsList.find("li.selected").first() : a,
                        f = u.prev("li".concat(i, ":not(.disabled, .select-toggle-all)"));
                    c = f, r.each((function (e, t) {
                        $(t).hasClass(n.options.keyboardActiveClass) && (f = r.eq(e - 1), c = r.eq(e))
                    })), l = u.is(o) || !s ? u : f
                } else {
                    var d = s ? this.$materialOptionsList.find("li.selected").first() : o,
                        h = d.next("li".concat(i, ":not(.disabled, .select-toggle-all)"));
                    c = h, r.each((function (e, t) {
                        $(t).hasClass(n.options.keyboardActiveClass) && (h = r.eq(e + 1), c = r.eq(e))
                    })), l = d.is(a) || !s ? d : h
                }
                return {
                    $matchedMaterialOption: l,
                    $activeOption: c
                }
            }
        }, {
            key: "_handleHomeKey",
            value: function () {
                this._selectBoundaryOption("first")
            }
        }, {
            key: "_handleEndKey",
            value: function () {
                this._selectBoundaryOption("last")
            }
        }, {
            key: "_selectBoundaryOption",
            value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all")[e]();
                this._selectSingleOption(t), this._removeKeyboardActiveClass(), t.find("input").is(":checked") || t.removeClass(this.options.keyboardActiveClass), t.addClass(this.options.keyboardActiveClass), t.position() && this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop() + t.position().top)
            }
        }, {
            key: "_handleEscKey",
            value: function (e) {
                this._removeKeyboardActiveClass(), e.trigger("close")
            }
        }, {
            key: "_handleLetterKey",
            value: function (e) {
                var t = this;
                if (this._removeKeyboardActiveClass(), this.isSearchable) {
                    var n = e.which > 46 && e.which < 91,
                        i = e.which > 93 && e.which < 106,
                        r = 8 === e.which;
                    (n || i) && this.$searchInput.find("input").focus(), r && this.$searchInput.find("input").val("").focus()
                } else {
                    var o = "",
                        a = String.fromCharCode(e.which).toLowerCase(),
                        s = Object.keys(this.keyCodes).map((function (e) {
                            return t.keyCodes[e]
                        }));
                    if (a && -1 === s.indexOf(e.which)) {
                        o += a;
                        var l = this.$materialOptionsList.find("li").filter((function (e, t) {
                            return $(t).text().toLowerCase().includes(o)
                        })).first();
                        this.isMultiple || this.$materialOptionsList.find("li").removeClass("active"), l.addClass("active"), this._selectSingleOption(l), this._updateDropdownScrollTop()
                    }
                }
            }
        }, {
            key: "_removeKeyboardActiveClass",
            value: function () {
                this.$materialOptionsList.find("li").removeClass(this.options.keyboardActiveClass)
            }
        }, {
            key: "_triggerChangeOnNativeSelect",
            value: function () {
                var e = new KeyboardEvent("change", {
                    bubbles: !0,
                    cancelable: !0
                });
                this.$nativeSelect.get(0).dispatchEvent(e)
            }
        }, {
            key: "_selectSingleOption",
            value: function (e) {
                this.$materialOptionsList.find("li.selected").removeClass("selected"), this._selectOption(e)
            }
        }, {
            key: "_updateDropdownScrollTop",
            value: function () {
                var e = this.$materialOptionsList.find("li.active").not(".disabled").first();
                e.length ? this.$materialOptionsList.scrollTo(e) : this.$materialOptionsList.scrollTop(0)
            }
        }, {
            key: "_selectOption",
            value: function (e) {
                $(e).addClass("selected")
            }
        }, {
            key: "_copyOptions",
            value: function (e) {
                return $.extend({}, e)
            }
        }, {
            key: "_jQueryFallback",
            value: function () {
                for (var e = null, t = 0; t < arguments.length; t++)
                    if ((e = t < 0 || arguments.length <= t ? void 0 : arguments[t]).length) return e;
                return e
            }
        }, {
            key: "isMultiple",
            get: function () {
                return this.properties.isMultiple
            }
        }, {
            key: "isSearchable",
            get: function () {
                return this.properties.isSearchable
            }
        }, {
            key: "isRequired",
            get: function () {
                return this.properties.isRequired
            }
        }, {
            key: "isEditable",
            get: function () {
                return this.properties.isEditable
            }
        }, {
            key: "isDisabled",
            get: function () {
                return this.$nativeSelect.is(":disabled")
            }
        }]) && r(t.prototype, n), o && r(t, o), e
    }()
}, function (e, t, n) {
    var i = n(98),
        r = n(25),
        o = n(117),
        a = n(22).f;
    e.exports = function (e) {
        var t = i.Symbol || (i.Symbol = {});
        r(t, e) || a(t, e, {
            value: o.f(e)
        })
    }
}, function (e, t, n) {
    var i = n(0),
        r = n(163);
    i({
        target: "Object",
        stat: !0,
        forced: Object.assign !== r
    }, {
        assign: r
    })
}, function (e, t, n) {
    "use strict";
    var i = n(20),
        r = n(50),
        o = n(5);
    e.exports = function (e) {
        for (var t = i(this), n = o(t.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n : r(l, n); c > s;) t[s++] = e;
        return t
    }
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(72).includes,
        o = n(63);
    i({
        target: "Array",
        proto: !0
    }, {
        includes: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("includes")
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(218),
        o = n(39);
    i({
        target: "String",
        proto: !0,
        forced: !n(219)("includes")
    }, {
        includes: function (e) {
            return !!~String(o(this)).indexOf(r(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(92).left;
    i({
        target: "Array",
        proto: !0,
        forced: n(45)("reduce")
    }, {
        reduce: function (e) {
            return r(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    var i = n(9),
        r = n(2),
        o = n(97);
    e.exports = !i && !r((function () {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}, function (e, t, n) {
    var i = n(65);
    e.exports = i("native-function-to-string", Function.toString)
}, function (e, t, n) {
    var i = n(25),
        r = n(124),
        o = n(47),
        a = n(22);
    e.exports = function (e, t) {
        for (var n = r(t), s = a.f, l = o.f, c = 0; c < n.length; c++) {
            var u = n[c];
            i(e, u) || s(e, u, l(t, u))
        }
    }
}, function (e, t, n) {
    var i = n(25),
        r = n(33),
        o = n(72).indexOf,
        a = n(76);
    e.exports = function (e, t) {
        var n, s = r(e),
            l = 0,
            c = [];
        for (n in s) !i(a, n) && i(s, n) && c.push(n);
        for (; t.length > l;) i(s, n = t[l++]) && (~o(c, n) || c.push(n));
        return c
    }
}, function (e, t, n) {
    var i = n(2);
    e.exports = !!Object.getOwnPropertySymbols && !i((function () {
        return !String(Symbol())
    }))
}, function (e, t, n) {
    t.f = n(4)
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(147),
        o = n(88),
        a = n(74),
        s = n(59),
        l = n(26),
        c = n(34),
        u = n(4),
        f = n(69),
        d = n(67),
        h = n(119),
        p = h.IteratorPrototype,
        g = h.BUGGY_SAFARI_ITERATORS,
        v = u("iterator"),
        m = function () {
            return this
        };
    e.exports = function (e, t, n, u, h, y, b) {
        r(n, t, u);
        var w, x, S, k = function (e) {
                if (e === h && O) return O;
                if (!g && e in E) return E[e];
                switch (e) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this)
                }
            },
            C = t + " Iterator",
            _ = !1,
            E = e.prototype,
            T = E[v] || E["@@iterator"] || h && E[h],
            O = !g && T || k(h),
            A = "Array" == t && E.entries || T;
        if (A && (w = o(A.call(new e)), p !== Object.prototype && w.next && (f || o(w) === p || (a ? a(w, p) : "function" != typeof w[v] && l(w, v, m)), s(w, C, !0, !0), f && (d[C] = m))), "values" == h && T && "values" !== T.name && (_ = !0, O = function () {
                return T.call(this)
            }), f && !b || E[v] === O || l(E, v, O), d[t] = O, h)
            if (x = {
                    values: k("values"),
                    keys: y ? O : k("keys"),
                    entries: k("entries")
                }, b)
                for (S in x) !g && !_ && S in E || c(E, S, x[S]);
            else i({
                target: t,
                proto: !0,
                forced: g || _
            }, x);
        return x
    }
}, function (e, t, n) {
    "use strict";
    var i, r, o, a = n(88),
        s = n(26),
        l = n(25),
        c = n(4),
        u = n(69),
        f = c("iterator"),
        d = !1;
    [].keys && ("next" in (o = [].keys()) ? (r = a(a(o))) !== Object.prototype && (i = r) : d = !0), null == i && (i = {}), u || l(i, f) || s(i, f, (function () {
        return this
    })), e.exports = {
        IteratorPrototype: i,
        BUGGY_SAFARI_ITERATORS: d
    }
}, function (e, t, n) {
    var i = n(15),
        r = n(74);
    e.exports = function (e, t, n) {
        var o, a;
        return r && "function" == typeof (o = t.constructor) && o !== n && i(a = o.prototype) && a !== n.prototype && r(e, a), e
    }
}, function (e, t, n) {
    var i = n(37),
        r = n(39),
        o = function (e) {
            return function (t, n) {
                var o, a, s = String(r(t)),
                    l = i(n),
                    c = s.length;
                return l < 0 || l >= c ? e ? "" : void 0 : (o = s.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536
            }
        };
    e.exports = {
        codeAt: o(!1),
        charAt: o(!0)
    }
}, function (e, t) {
    e.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function (e, t, n) {
    "use strict";
    var i = n(21).forEach,
        r = n(45);
    e.exports = r("forEach") ? function (e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
    } : [].forEach
}, function (e, t, n) {
    var i = n(85),
        r = n(48),
        o = n(99),
        a = n(11);
    e.exports = i("Reflect", "ownKeys") || function (e) {
        var t = r.f(a(e)),
            n = o.f;
        return n ? t.concat(n(e)) : t
    }
}, function (e, t, n) {
    var i = n(85);
    e.exports = i("document", "documentElement")
}, function (e, t, n) {
    var i = n(2);
    e.exports = !i((function () {
        function e() {}
        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    }))
}, function (e, t, n) {
    var i = n(4),
        r = n(67),
        o = i("iterator"),
        a = Array.prototype;
    e.exports = function (e) {
        return void 0 !== e && (r.Array === e || a[o] === e)
    }
}, function (e, t, n) {
    var i = n(89),
        r = n(67),
        o = n(4)("iterator");
    e.exports = function (e) {
        if (null != e) return e[o] || e["@@iterator"] || r[i(e)]
    }
}, function (e, t, n) {
    var i = n(4)("iterator"),
        r = !1;
    try {
        var o = 0,
            a = {
                next: function () {
                    return {
                        done: !!o++
                    }
                },
                return: function () {
                    r = !0
                }
            };
        a[i] = function () {
            return this
        }, Array.from(a, (function () {
            throw 2
        }))
    } catch (e) {}
    e.exports = function (e, t) {
        if (!t && !r) return !1;
        var n = !1;
        try {
            var o = {};
            o[i] = function () {
                return {
                    next: function () {
                        return {
                            done: n = !0
                        }
                    }
                }
            }, e(o)
        } catch (e) {}
        return n
    }
}, function (e, t, n) {
    var i = n(0),
        r = n(2),
        o = n(20),
        a = n(88),
        s = n(126);
    i({
        target: "Object",
        stat: !0,
        forced: r((function () {
            a(1)
        })),
        sham: !s
    }, {
        getPrototypeOf: function (e) {
            return a(o(e))
        }
    })
}, function (e, t, n) {
    var i = n(34);
    e.exports = function (e, t, n) {
        for (var r in t) i(e, r, t[r], n);
        return e
    }
}, function (e, t, n) {
    var i, r, o, a = n(1),
        s = n(2),
        l = n(41),
        c = n(73),
        u = n(125),
        f = n(97),
        d = n(103),
        h = a.location,
        p = a.setImmediate,
        g = a.clearImmediate,
        v = a.process,
        m = a.MessageChannel,
        y = a.Dispatch,
        b = 0,
        w = {},
        x = function (e) {
            if (w.hasOwnProperty(e)) {
                var t = w[e];
                delete w[e], t()
            }
        },
        S = function (e) {
            return function () {
                x(e)
            }
        },
        k = function (e) {
            x(e.data)
        },
        C = function (e) {
            a.postMessage(e + "", h.protocol + "//" + h.host)
        };
    p && g || (p = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return w[++b] = function () {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, i(b), b
    }, g = function (e) {
        delete w[e]
    }, "process" == l(v) ? i = function (e) {
        v.nextTick(S(e))
    } : y && y.now ? i = function (e) {
        y.now(S(e))
    } : m && !/(iphone|ipod|ipad).*applewebkit/i.test(d) ? (o = (r = new m).port2, r.port1.onmessage = k, i = c(o.postMessage, o, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || s(C) ? i = "onreadystatechange" in f("script") ? function (e) {
        u.appendChild(f("script")).onreadystatechange = function () {
            u.removeChild(this), x(e)
        }
    } : function (e) {
        setTimeout(S(e), 0)
    } : (i = C, a.addEventListener("message", k, !1))), e.exports = {
        set: p,
        clear: g
    }
}, function (e, t, n) {
    "use strict";
    var i = n(58),
        r = function (e) {
            var t, n;
            this.promise = new e((function (e, i) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = i
            })), this.resolve = i(t), this.reject = i(n)
        };
    e.exports.f = function (e) {
        return new r(e)
    }
}, function (e, t, n) {
    var i = n(0),
        r = n(2),
        o = n(33),
        a = n(47).f,
        s = n(9),
        l = r((function () {
            a(1)
        }));
    i({
        target: "Object",
        stat: !0,
        forced: !s || l,
        sham: !s
    }, {
        getOwnPropertyDescriptor: function (e, t) {
            return a(o(e), t)
        }
    })
}, function (e, t, n) {
    var i = n(0),
        r = n(9),
        o = n(124),
        a = n(33),
        s = n(47),
        l = n(77);
    i({
        target: "Object",
        stat: !0,
        sham: !r
    }, {
        getOwnPropertyDescriptors: function (e) {
            for (var t, n, i = a(e), r = s.f, c = o(i), u = {}, f = 0; c.length > f;) void 0 !== (n = r(i, t = c[f++])) && l(u, t, n);
            return u
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(1),
        r = n(9),
        o = n(3).NATIVE_ARRAY_BUFFER,
        a = n(26),
        s = n(131),
        l = n(2),
        c = n(102),
        u = n(37),
        f = n(5),
        d = n(137),
        h = n(48).f,
        p = n(22).f,
        g = n(108),
        v = n(59),
        m = n(49),
        y = m.get,
        b = m.set,
        w = i.ArrayBuffer,
        x = w,
        S = i.DataView,
        k = i.Math,
        C = i.RangeError,
        _ = k.abs,
        E = k.pow,
        T = k.floor,
        O = k.log,
        A = k.LN2,
        $ = function (e, t, n) {
            var i, r, o, a = new Array(n),
                s = 8 * n - t - 1,
                l = (1 << s) - 1,
                c = l >> 1,
                u = 23 === t ? E(2, -24) - E(2, -77) : 0,
                f = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                d = 0;
            for ((e = _(e)) != e || e === 1 / 0 ? (r = e != e ? 1 : 0, i = l) : (i = T(O(e) / A), e * (o = E(2, -i)) < 1 && (i--, o *= 2), (e += i + c >= 1 ? u / o : u * E(2, 1 - c)) * o >= 2 && (i++, o /= 2), i + c >= l ? (r = 0, i = l) : i + c >= 1 ? (r = (e * o - 1) * E(2, t), i += c) : (r = e * E(2, c - 1) * E(2, t), i = 0)); t >= 8; a[d++] = 255 & r, r /= 256, t -= 8);
            for (i = i << t | r, s += t; s > 0; a[d++] = 255 & i, i /= 256, s -= 8);
            return a[--d] |= 128 * f, a
        },
        L = function (e, t) {
            var n, i = e.length,
                r = 8 * i - t - 1,
                o = (1 << r) - 1,
                a = o >> 1,
                s = r - 7,
                l = i - 1,
                c = e[l--],
                u = 127 & c;
            for (c >>= 7; s > 0; u = 256 * u + e[l], l--, s -= 8);
            for (n = u & (1 << -s) - 1, u >>= -s, s += t; s > 0; n = 256 * n + e[l], l--, s -= 8);
            if (0 === u) u = 1 - a;
            else {
                if (u === o) return n ? NaN : c ? -1 / 0 : 1 / 0;
                n += E(2, t), u -= a
            }
            return (c ? -1 : 1) * n * E(2, u - t)
        },
        P = function (e) {
            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
        },
        j = function (e) {
            return [255 & e]
        },
        D = function (e) {
            return [255 & e, e >> 8 & 255]
        },
        N = function (e) {
            return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
        },
        I = function (e) {
            return $(e, 23, 4)
        },
        M = function (e) {
            return $(e, 52, 8)
        },
        R = function (e, t) {
            p(e.prototype, t, {
                get: function () {
                    return y(this)[t]
                }
            })
        },
        H = function (e, t, n, i) {
            var r = d(+n),
                o = y(e);
            if (r + t > o.byteLength) throw C("Wrong index");
            var a = y(o.buffer).bytes,
                s = r + o.byteOffset,
                l = a.slice(s, s + t);
            return i ? l : l.reverse()
        },
        F = function (e, t, n, i, r, o) {
            var a = d(+n),
                s = y(e);
            if (a + t > s.byteLength) throw C("Wrong index");
            for (var l = y(s.buffer).bytes, c = a + s.byteOffset, u = i(+r), f = 0; f < t; f++) l[c + f] = u[o ? f : t - f - 1]
        };
    if (o) {
        if (!l((function () {
                w(1)
            })) || !l((function () {
                new w(-1)
            })) || l((function () {
                return new w, new w(1.5), new w(NaN), "ArrayBuffer" != w.name
            }))) {
            for (var W, B = (x = function (e) {
                    return c(this, x), new w(d(e))
                }).prototype = w.prototype, q = h(w), V = 0; q.length > V;)(W = q[V++]) in x || a(x, W, w[W]);
            B.constructor = x
        }
        var Y = new S(new x(2)),
            z = S.prototype.setInt8;
        Y.setInt8(0, 2147483648), Y.setInt8(1, 2147483649), !Y.getInt8(0) && Y.getInt8(1) || s(S.prototype, {
            setInt8: function (e, t) {
                z.call(this, e, t << 24 >> 24)
            },
            setUint8: function (e, t) {
                z.call(this, e, t << 24 >> 24)
            }
        }, {
            unsafe: !0
        })
    } else x = function (e) {
        c(this, x, "ArrayBuffer");
        var t = d(e);
        b(this, {
            bytes: g.call(new Array(t), 0),
            byteLength: t
        }), r || (this.byteLength = t)
    }, S = function (e, t, n) {
        c(this, S, "DataView"), c(e, x, "DataView");
        var i = y(e).byteLength,
            o = u(t);
        if (o < 0 || o > i) throw C("Wrong offset");
        if (o + (n = void 0 === n ? i - o : f(n)) > i) throw C("Wrong length");
        b(this, {
            buffer: e,
            byteLength: n,
            byteOffset: o
        }), r || (this.buffer = e, this.byteLength = n, this.byteOffset = o)
    }, r && (R(x, "byteLength"), R(S, "buffer"), R(S, "byteLength"), R(S, "byteOffset")), s(S.prototype, {
        getInt8: function (e) {
            return H(this, 1, e)[0] << 24 >> 24
        },
        getUint8: function (e) {
            return H(this, 1, e)[0]
        },
        getInt16: function (e) {
            var t = H(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
            return (t[1] << 8 | t[0]) << 16 >> 16
        },
        getUint16: function (e) {
            var t = H(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
            return t[1] << 8 | t[0]
        },
        getInt32: function (e) {
            return P(H(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
        },
        getUint32: function (e) {
            return P(H(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
        },
        getFloat32: function (e) {
            return L(H(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
        },
        getFloat64: function (e) {
            return L(H(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
        },
        setInt8: function (e, t) {
            F(this, 1, e, j, t)
        },
        setUint8: function (e, t) {
            F(this, 1, e, j, t)
        },
        setInt16: function (e, t) {
            F(this, 2, e, D, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint16: function (e, t) {
            F(this, 2, e, D, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setInt32: function (e, t) {
            F(this, 4, e, N, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint32: function (e, t) {
            F(this, 4, e, N, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat32: function (e, t) {
            F(this, 4, e, I, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat64: function (e, t) {
            F(this, 8, e, M, t, arguments.length > 2 ? arguments[2] : void 0)
        }
    });
    v(x, "ArrayBuffer"), v(S, "DataView"), e.exports = {
        ArrayBuffer: x,
        DataView: S
    }
}, function (e, t, n) {
    var i = n(37),
        r = n(5);
    e.exports = function (e) {
        if (void 0 === e) return 0;
        var t = i(e),
            n = r(t);
        if (t !== n) throw RangeError("Wrong length or index");
        return n
    }
}, function (e, t, n) {
    var i = n(181);
    e.exports = function (e, t) {
        var n = i(e);
        if (n % t) throw RangeError("Wrong offset");
        return n
    }
}, function (e, t, n) {
    "use strict";
    var i = n(81),
        r = n(11),
        o = n(39),
        a = n(154),
        s = n(82);
    i("search", 1, (function (e, t, n) {
        return [function (t) {
            var n = o(this),
                i = null == t ? void 0 : t[e];
            return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n))
        }, function (e) {
            var i = n(t, e, this);
            if (i.done) return i.value;
            var o = r(e),
                l = String(this),
                c = o.lastIndex;
            a(c, 0) || (o.lastIndex = 0);
            var u = s(o, l);
            return a(o.lastIndex, c) || (o.lastIndex = c), null === u ? -1 : u.index
        }]
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(21).some;
    i({
        target: "Array",
        proto: !0,
        forced: n(45)("some")
    }, {
        some: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(33),
        r = n(37),
        o = n(5),
        a = n(45),
        s = Math.min,
        l = [].lastIndexOf,
        c = !!l && 1 / [1].lastIndexOf(1, -0) < 0,
        u = a("lastIndexOf");
    e.exports = c || u ? function (e) {
        if (c) return l.apply(this, arguments) || 0;
        var t = i(this),
            n = o(t.length),
            a = n - 1;
        for (arguments.length > 1 && (a = s(a, r(arguments[1]))), a < 0 && (a = n + a); a >= 0; a--)
            if (a in t && t[a] === e) return a || 0;
        return -1
    } : l
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(21).findIndex,
        o = n(63),
        a = !0;
    "findIndex" in [] && Array(1).findIndex((function () {
        a = !1
    })), i({
        target: "Array",
        proto: !0,
        forced: a
    }, {
        findIndex: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("findIndex")
}, function (e, t, n) {
    var i = n(33),
        r = n(48).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function (e) {
        return a && "[object Window]" == o.call(e) ? function (e) {
            try {
                return r(e)
            } catch (e) {
                return a.slice()
            }
        }(e) : r(i(e))
    }
}, function (e, t, n) {
    var i = n(1),
        r = n(93),
        o = i["__core-js_shared__"] || r("__core-js_shared__", {});
    e.exports = o
}, function (e, t, n) {
    var i = n(1),
        r = n(113),
        o = i.WeakMap;
    e.exports = "function" == typeof o && /native code/.test(r.call(o))
}, function (e, t, n) {
    var i = n(9),
        r = n(22),
        o = n(11),
        a = n(71);
    e.exports = i ? Object.defineProperties : function (e, t) {
        o(e);
        for (var n, i = a(t), s = i.length, l = 0; s > l;) r.f(e, n = i[l++], t[n]);
        return e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(119).IteratorPrototype,
        r = n(70),
        o = n(56),
        a = n(59),
        s = n(67),
        l = function () {
            return this
        };
    e.exports = function (e, t, n) {
        var c = t + " Iterator";
        return e.prototype = r(i, {
            next: o(1, n)
        }), a(e, c, !1, !0), s[c] = l, e
    }
}, function (e, t, n) {
    var i = n(15);
    e.exports = function (e) {
        if (!i(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
        return e
    }
}, function (e, t, n) {
    "use strict";
    var i = n(89),
        r = {};
    r[n(4)("toStringTag")] = "z", e.exports = "[object z]" !== String(r) ? function () {
        return "[object " + i(this) + "]"
    } : r.toString
}, function (e, t, n) {
    var i = n(1),
        r = n(78).trim,
        o = n(79),
        a = i.parseFloat,
        s = 1 / a(o + "-0") != -1 / 0;
    e.exports = s ? function (e) {
        var t = r(String(e)),
            n = a(t);
        return 0 === n && "-" == t.charAt(0) ? -0 : n
    } : a
}, function (e, t, n) {
    var i = n(1),
        r = n(78).trim,
        o = n(79),
        a = i.parseInt,
        s = /^[+-]?0[Xx]/,
        l = 8 !== a(o + "08") || 22 !== a(o + "0x16");
    e.exports = l ? function (e, t) {
        var n = r(String(e));
        return a(n, t >>> 0 || (s.test(n) ? 16 : 10))
    } : a
}, function (e, t, n) {
    var i = n(2),
        r = n(79);
    e.exports = function (e) {
        return i((function () {
            return !!r[e]() || "â€‹Â…á Ž" != "â€‹Â…á Ž" [e]() || r[e].name !== e
        }))
    }
}, function (e, t, n) {
    var i = n(11);
    e.exports = function (e, t, n, r) {
        try {
            return r ? t(i(n)[0], n[1]) : t(n)
        } catch (t) {
            var o = e.return;
            throw void 0 !== o && i(o.call(e)), t
        }
    }
}, function (e, t) {
    e.exports = Object.is || function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    }
}, function (e, t, n) {
    var i = n(0),
        r = n(156).values;
    i({
        target: "Object",
        stat: !0
    }, {
        values: function (e) {
            return r(e)
        }
    })
}, function (e, t, n) {
    var i = n(9),
        r = n(71),
        o = n(33),
        a = n(83).f,
        s = function (e) {
            return function (t) {
                for (var n, s = o(t), l = r(s), c = l.length, u = 0, f = []; c > u;) n = l[u++], i && !a.call(s, n) || f.push(e ? [n, s[n]] : s[n]);
                return f
            }
        };
    e.exports = {
        entries: s(!0),
        values: s(!1)
    }
}, function (e, t, n) {
    n(0)({
        target: "Object",
        stat: !0
    }, {
        setPrototypeOf: n(74)
    })
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var t, i;
        n(10), n(16), n(17), n(31), n(36), n(6), n(159), n(12), n(8), n(23), n(32), n(90), n(28), n(60), n(52), n(161), n(13), n(54), n(130), n(7), n(46), n(43), n(62), n(14), n(29), n(18), n(42), n(35), n(30), n(53), n(19);

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        /*!
         * jQuery JavaScript Library v3.5.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2020-05-04T22:49Z
         */
        t = "undefined" != typeof window ? window : void 0, i = function (e, t) {
            var i = [],
                o = Object.getPrototypeOf,
                a = i.slice,
                s = i.flat ? function (e) {
                    return i.flat.call(e)
                } : function (e) {
                    return i.concat.apply([], e)
                },
                l = i.push,
                c = i.indexOf,
                u = {},
                f = u.toString,
                d = u.hasOwnProperty,
                h = d.toString,
                p = h.call(Object),
                g = {},
                v = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                m = function (e) {
                    return null != e && e === e.window
                },
                y = e.document,
                b = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function w(e, t, n) {
                var i, r, o = (n = n || y).createElement("script");
                if (o.text = e, t)
                    for (i in b)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
                n.head.appendChild(o).parentNode.removeChild(o)
            }

            function x(e) {
                return null == e ? e + "" : "object" === r(e) || "function" == typeof e ? u[f.call(e)] || "object" : r(e)
            }
            var S = function e(t, n) {
                return new e.fn.init(t, n)
            };

            function k(e) {
                var t = !!e && "length" in e && e.length,
                    n = x(e);
                return !v(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            S.fn = S.prototype = {
                jquery: "3.5.1",
                constructor: S,
                length: 0,
                toArray: function () {
                    return a.call(this)
                },
                get: function (e) {
                    return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function (e) {
                    var t = S.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function (e) {
                    return S.each(this, e)
                },
                map: function (e) {
                    return this.pushStack(S.map(this, (function (t, n) {
                        return e.call(t, n, t)
                    })))
                },
                slice: function () {
                    return this.pushStack(a.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                even: function () {
                    return this.pushStack(S.grep(this, (function (e, t) {
                        return (t + 1) % 2
                    })))
                },
                odd: function () {
                    return this.pushStack(S.grep(this, (function (e, t) {
                        return t % 2
                    })))
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: i.sort,
                splice: i.splice
            }, S.extend = S.fn.extend = function () {
                var e, t, n, i, o, a, s = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" === r(s) || v(s) || (s = {}), l === c && (s = this, l--); l < c; l++)
                    if (null != (e = arguments[l]))
                        for (t in e) i = e[t], "__proto__" !== t && s !== i && (u && i && (S.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], a = o && !Array.isArray(n) ? [] : o || S.isPlainObject(n) ? n : {}, o = !1, s[t] = S.extend(u, a, i)) : void 0 !== i && (s[t] = i));
                return s
            }, S.extend({
                expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () {},
                isPlainObject: function (e) {
                    var t, n;
                    return !(!e || "[object Object]" !== f.call(e) || (t = o(e)) && ("function" != typeof (n = d.call(t, "constructor") && t.constructor) || h.call(n) !== p))
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function (e, t, n) {
                    w(e, {
                        nonce: t && t.nonce
                    }, n)
                },
                each: function (e, t) {
                    var n, i = 0;
                    if (k(e))
                        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                    else
                        for (i in e)
                            if (!1 === t.call(e[i], i, e[i])) break;
                    return e
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (k(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
                },
                inArray: function (e, t, n) {
                    return null == t ? -1 : c.call(t, e, n)
                },
                merge: function (e, t) {
                    for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                    return e.length = r, e
                },
                grep: function (e, t, n) {
                    for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
                    return i
                },
                map: function (e, t, n) {
                    var i, r, o = 0,
                        a = [];
                    if (k(e))
                        for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
                    else
                        for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
                    return s(a)
                },
                guid: 1,
                support: g
            }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = i[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
                u["[object " + t + "]"] = t.toLowerCase()
            }));
            var C =
                /*!
                 * Sizzle CSS Selector Engine v2.3.5
                 * https://sizzlejs.com/
                 *
                 * Copyright JS Foundation and other contributors
                 * Released under the MIT license
                 * https://js.foundation/
                 *
                 * Date: 2020-03-14
                 */
                function (e) {
                    var t, n, i, r, o, a, s, l, c, u, f, d, h, p, g, v, m, y, b, w = "sizzle" + 1 * new Date,
                        x = e.document,
                        S = 0,
                        k = 0,
                        C = le(),
                        _ = le(),
                        E = le(),
                        T = le(),
                        O = function (e, t) {
                            return e === t && (f = !0), 0
                        },
                        A = {}.hasOwnProperty,
                        $ = [],
                        L = $.pop,
                        P = $.push,
                        j = $.push,
                        D = $.slice,
                        N = function (e, t) {
                            for (var n = 0, i = e.length; n < i; n++)
                                if (e[n] === t) return n;
                            return -1
                        },
                        I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        M = "[\\x20\\t\\r\\n\\f]",
                        R = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                        H = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
                        F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                        W = new RegExp(M + "+", "g"),
                        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                        q = new RegExp("^" + M + "*," + M + "*"),
                        V = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                        Y = new RegExp(M + "|>"),
                        z = new RegExp(F),
                        X = new RegExp("^" + R + "$"),
                        U = {
                            ID: new RegExp("^#(" + R + ")"),
                            CLASS: new RegExp("^\\.(" + R + ")"),
                            TAG: new RegExp("^(" + R + "|[*])"),
                            ATTR: new RegExp("^" + H),
                            PSEUDO: new RegExp("^" + F),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + I + ")$", "i"),
                            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                        },
                        Q = /HTML$/i,
                        G = /^(?:input|select|textarea|button)$/i,
                        K = /^h\d$/i,
                        J = /^[^{]+\{\s*\[native \w/,
                        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        ee = /[+~]/,
                        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
                        ne = function (e, t) {
                            var n = "0x" + e.slice(1) - 65536;
                            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                        },
                        ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        re = function (e, t) {
                            return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        },
                        oe = function () {
                            d()
                        },
                        ae = we((function (e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                        }), {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        j.apply($ = D.call(x.childNodes), x.childNodes), $[x.childNodes.length].nodeType
                    } catch (e) {
                        j = {
                            apply: $.length ? function (e, t) {
                                P.apply(e, D.call(t))
                            } : function (e, t) {
                                for (var n = e.length, i = 0; e[n++] = t[i++];);
                                e.length = n - 1
                            }
                        }
                    }

                    function se(e, t, i, r) {
                        var o, s, c, u, f, p, m, y = t && t.ownerDocument,
                            x = t ? t.nodeType : 9;
                        if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;
                        if (!r && (d(t), t = t || h, g)) {
                            if (11 !== x && (f = Z.exec(e)))
                                if (o = f[1]) {
                                    if (9 === x) {
                                        if (!(c = t.getElementById(o))) return i;
                                        if (c.id === o) return i.push(c), i
                                    } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                                } else {
                                    if (f[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(i, t.getElementsByClassName(o)), i
                                } if (n.qsa && !T[e + " "] && (!v || !v.test(e)) && (1 !== x || "object" !== t.nodeName.toLowerCase())) {
                                if (m = e, y = t, 1 === x && (Y.test(e) || V.test(e))) {
                                    for ((y = ee.test(e) && me(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, re) : t.setAttribute("id", u = w)), s = (p = a(e)).length; s--;) p[s] = (u ? "#" + u : ":scope") + " " + be(p[s]);
                                    m = p.join(",")
                                }
                                try {
                                    return j.apply(i, y.querySelectorAll(m)), i
                                } catch (t) {
                                    T(e, !0)
                                } finally {
                                    u === w && t.removeAttribute("id")
                                }
                            }
                        }
                        return l(e.replace(B, "$1"), t, i, r)
                    }

                    function le() {
                        var e = [];
                        return function t(n, r) {
                            return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
                        }
                    }

                    function ce(e) {
                        return e[w] = !0, e
                    }

                    function ue(e) {
                        var t = h.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function fe(e, t) {
                        for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
                    }

                    function de(e, t) {
                        var n = t && e,
                            i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (i) return i;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function he(e) {
                        return function (t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }

                    function pe(e) {
                        return function (t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function ge(e) {
                        return function (t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                        }
                    }

                    function ve(e) {
                        return ce((function (t) {
                            return t = +t, ce((function (n, i) {
                                for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                            }))
                        }))
                    }

                    function me(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }
                    for (t in n = se.support = {}, o = se.isXML = function (e) {
                            var t = e.namespaceURI,
                                n = (e.ownerDocument || e).documentElement;
                            return !Q.test(t || n && n.nodeName || "HTML")
                        }, d = se.setDocument = function (e) {
                            var t, r, a = e ? e.ownerDocument || e : x;
                            return a != h && 9 === a.nodeType && a.documentElement ? (p = (h = a).documentElement, g = !o(h), x != h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.scope = ue((function (e) {
                                return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                            })), n.attributes = ue((function (e) {
                                return e.className = "i", !e.getAttribute("className")
                            })), n.getElementsByTagName = ue((function (e) {
                                return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                            })), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ue((function (e) {
                                return p.appendChild(e).id = w, !h.getElementsByName || !h.getElementsByName(w).length
                            })), n.getById ? (i.filter.ID = function (e) {
                                var t = e.replace(te, ne);
                                return function (e) {
                                    return e.getAttribute("id") === t
                                }
                            }, i.find.ID = function (e, t) {
                                if (void 0 !== t.getElementById && g) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }) : (i.filter.ID = function (e) {
                                var t = e.replace(te, ne);
                                return function (e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }, i.find.ID = function (e, t) {
                                if (void 0 !== t.getElementById && g) {
                                    var n, i, r, o = t.getElementById(e);
                                    if (o) {
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                    }
                                    return []
                                }
                            }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                            } : function (e, t) {
                                var n, i = [],
                                    r = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                    return i
                                }
                                return o
                            }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                            }, m = [], v = [], (n.qsa = J.test(h.querySelectorAll)) && (ue((function (e) {
                                var t;
                                p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + w + "-]").length || v.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                            })), ue((function (e) {
                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = h.createElement("input");
                                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                            }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue((function (e) {
                                n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", F)
                            })), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function (e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    i = t && t.parentNode;
                                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                            } : function (e, t) {
                                if (t)
                                    for (; t = t.parentNode;)
                                        if (t === e) return !0;
                                return !1
                            }, O = t ? function (e, t) {
                                if (e === t) return f = !0, 0;
                                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == h || e.ownerDocument == x && b(x, e) ? -1 : t == h || t.ownerDocument == x && b(x, t) ? 1 : u ? N(u, e) - N(u, t) : 0 : 4 & i ? -1 : 1)
                            } : function (e, t) {
                                if (e === t) return f = !0, 0;
                                var n, i = 0,
                                    r = e.parentNode,
                                    o = t.parentNode,
                                    a = [e],
                                    s = [t];
                                if (!r || !o) return e == h ? -1 : t == h ? 1 : r ? -1 : o ? 1 : u ? N(u, e) - N(u, t) : 0;
                                if (r === o) return de(e, t);
                                for (n = e; n = n.parentNode;) a.unshift(n);
                                for (n = t; n = n.parentNode;) s.unshift(n);
                                for (; a[i] === s[i];) i++;
                                return i ? de(a[i], s[i]) : a[i] == x ? -1 : s[i] == x ? 1 : 0
                            }, h) : h
                        }, se.matches = function (e, t) {
                            return se(e, null, null, t)
                        }, se.matchesSelector = function (e, t) {
                            if (d(e), n.matchesSelector && g && !T[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))) try {
                                var i = y.call(e, t);
                                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                            } catch (e) {
                                T(t, !0)
                            }
                            return se(t, h, null, [e]).length > 0
                        }, se.contains = function (e, t) {
                            return (e.ownerDocument || e) != h && d(e), b(e, t)
                        }, se.attr = function (e, t) {
                            (e.ownerDocument || e) != h && d(e);
                            var r = i.attrHandle[t.toLowerCase()],
                                o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                        }, se.escape = function (e) {
                            return (e + "").replace(ie, re)
                        }, se.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }, se.uniqueSort = function (e) {
                            var t, i = [],
                                r = 0,
                                o = 0;
                            if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(O), f) {
                                for (; t = e[o++];) t === e[o] && (r = i.push(o));
                                for (; r--;) e.splice(i[r], 1)
                            }
                            return u = null, e
                        }, r = se.getText = function (e) {
                            var t, n = "",
                                i = 0,
                                o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                                } else if (3 === o || 4 === o) return e.nodeValue
                            } else
                                for (; t = e[i++];) n += r(t);
                            return n
                        }, (i = se.selectors = {
                            cacheLength: 50,
                            createPseudo: ce,
                            match: U,
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
                                ATTR: function (e) {
                                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                },
                                CHILD: function (e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                                },
                                PSEUDO: function (e) {
                                    var t, n = !e[6] && e[2];
                                    return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function (e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return "*" === e ? function () {
                                        return !0
                                    } : function (e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t
                                    }
                                },
                                CLASS: function (e) {
                                    var t = C[e + " "];
                                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, (function (e) {
                                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                    }))
                                },
                                ATTR: function (e, t, n) {
                                    return function (i) {
                                        var r = se.attr(i, e);
                                        return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function (e, t, n, i, r) {
                                    var o = "nth" !== e.slice(0, 3),
                                        a = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === i && 0 === r ? function (e) {
                                        return !!e.parentNode
                                    } : function (t, n, l) {
                                        var c, u, f, d, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                                            v = t.parentNode,
                                            m = s && t.nodeName.toLowerCase(),
                                            y = !l && !s,
                                            b = !1;
                                        if (v) {
                                            if (o) {
                                                for (; g;) {
                                                    for (d = t; d = d[g];)
                                                        if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                                    p = g = "only" === e && !p && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (p = [a ? v.firstChild : v.lastChild], a && y) {
                                                for (b = (h = (c = (u = (f = (d = v)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === S && c[1]) && c[2], d = h && v.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();)
                                                    if (1 === d.nodeType && ++b && d === t) {
                                                        u[e] = [S, h, b];
                                                        break
                                                    }
                                            } else if (y && (b = h = (c = (u = (f = (d = t)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === S && c[1]), !1 === b)
                                                for (;
                                                    (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && ((u = (f = d[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [S, b]), d !== t)););
                                            return (b -= r) === i || b % i == 0 && b / i >= 0
                                        }
                                    }
                                },
                                PSEUDO: function (e, t) {
                                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                    return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                                        for (var i, o = r(e, t), a = o.length; a--;) e[i = N(e, o[a])] = !(n[i] = o[a])
                                    })) : function (e) {
                                        return r(e, 0, n)
                                    }) : r
                                }
                            },
                            pseudos: {
                                not: ce((function (e) {
                                    var t = [],
                                        n = [],
                                        i = s(e.replace(B, "$1"));
                                    return i[w] ? ce((function (e, t, n, r) {
                                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                    })) : function (e, r, o) {
                                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                                    }
                                })),
                                has: ce((function (e) {
                                    return function (t) {
                                        return se(e, t).length > 0
                                    }
                                })),
                                contains: ce((function (e) {
                                    return e = e.replace(te, ne),
                                        function (t) {
                                            return (t.textContent || r(t)).indexOf(e) > -1
                                        }
                                })),
                                lang: ce((function (e) {
                                    return X.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                        function (t) {
                                            var n;
                                            do {
                                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1
                                        }
                                })),
                                target: function (t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function (e) {
                                    return e === p
                                },
                                focus: function (e) {
                                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: ge(!1),
                                disabled: ge(!0),
                                checked: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function (e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                },
                                empty: function (e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function (e) {
                                    return !i.pseudos.empty(e)
                                },
                                header: function (e) {
                                    return K.test(e.nodeName)
                                },
                                input: function (e) {
                                    return G.test(e.nodeName)
                                },
                                button: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function (e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: ve((function () {
                                    return [0]
                                })),
                                last: ve((function (e, t) {
                                    return [t - 1]
                                })),
                                eq: ve((function (e, t, n) {
                                    return [n < 0 ? n + t : n]
                                })),
                                even: ve((function (e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e
                                })),
                                odd: ve((function (e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e
                                })),
                                lt: ve((function (e, t, n) {
                                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                                    return e
                                })),
                                gt: ve((function (e, t, n) {
                                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                    return e
                                }))
                            }
                        }).pseudos.nth = i.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) i.pseudos[t] = he(t);
                    for (t in {
                            submit: !0,
                            reset: !0
                        }) i.pseudos[t] = pe(t);

                    function ye() {}

                    function be(e) {
                        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                        return i
                    }

                    function we(e, t, n) {
                        var i = t.dir,
                            r = t.next,
                            o = r || i,
                            a = n && "parentNode" === o,
                            s = k++;
                        return t.first ? function (t, n, r) {
                            for (; t = t[i];)
                                if (1 === t.nodeType || a) return e(t, n, r);
                            return !1
                        } : function (t, n, l) {
                            var c, u, f, d = [S, s];
                            if (l) {
                                for (; t = t[i];)
                                    if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                            } else
                                for (; t = t[i];)
                                    if (1 === t.nodeType || a)
                                        if (u = (f = t[w] || (t[w] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                        else {
                                            if ((c = u[o]) && c[0] === S && c[1] === s) return d[2] = c[2];
                                            if (u[o] = d, d[2] = e(t, n, l)) return !0
                                        } return !1
                        }
                    }

                    function xe(e) {
                        return e.length > 1 ? function (t, n, i) {
                            for (var r = e.length; r--;)
                                if (!e[r](t, n, i)) return !1;
                            return !0
                        } : e[0]
                    }

                    function Se(e, t, n, i, r) {
                        for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
                        return a
                    }

                    function ke(e, t, n, i, r, o) {
                        return i && !i[w] && (i = ke(i)), r && !r[w] && (r = ke(r, o)), ce((function (o, a, s, l) {
                            var c, u, f, d = [],
                                h = [],
                                p = a.length,
                                g = o || function (e, t, n) {
                                    for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                                    return n
                                }(t || "*", s.nodeType ? [s] : s, []),
                                v = !e || !o && t ? g : Se(g, d, e, s, l),
                                m = n ? r || (o ? e : p || i) ? [] : a : v;
                            if (n && n(v, m, s, l), i)
                                for (c = Se(m, h), i(c, [], s, l), u = c.length; u--;)(f = c[u]) && (m[h[u]] = !(v[h[u]] = f));
                            if (o) {
                                if (r || e) {
                                    if (r) {
                                        for (c = [], u = m.length; u--;)(f = m[u]) && c.push(v[u] = f);
                                        r(null, m = [], c, l)
                                    }
                                    for (u = m.length; u--;)(f = m[u]) && (c = r ? N(o, f) : d[u]) > -1 && (o[c] = !(a[c] = f))
                                }
                            } else m = Se(m === a ? m.splice(p, m.length) : m), r ? r(null, a, m, l) : j.apply(a, m)
                        }))
                    }

                    function Ce(e) {
                        for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, u = we((function (e) {
                                return e === t
                            }), s, !0), f = we((function (e) {
                                return N(t, e) > -1
                            }), s, !0), d = [function (e, n, i) {
                                var r = !a && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
                                return t = null, r
                            }]; l < o; l++)
                            if (n = i.relative[e[l].type]) d = [we(xe(d), n)];
                            else {
                                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                                    for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                                    return ke(l > 1 && xe(d), l > 1 && be(e.slice(0, l - 1).concat({
                                        value: " " === e[l - 2].type ? "*" : ""
                                    })).replace(B, "$1"), n, l < r && Ce(e.slice(l, r)), r < o && Ce(e = e.slice(r)), r < o && be(e))
                                }
                                d.push(n)
                            } return xe(d)
                    }
                    return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, a = se.tokenize = function (e, t) {
                        var n, r, o, a, s, l, c, u = _[e + " "];
                        if (u) return t ? 0 : u.slice(0);
                        for (s = e, l = [], c = i.preFilter; s;) {
                            for (a in n && !(r = q.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = V.exec(s)) && (n = r.shift(), o.push({
                                    value: n,
                                    type: r[0].replace(B, " ")
                                }), s = s.slice(n.length)), i.filter) !(r = U[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), o.push({
                                value: n,
                                type: a,
                                matches: r
                            }), s = s.slice(n.length));
                            if (!n) break
                        }
                        return t ? s.length : s ? se.error(e) : _(e, l).slice(0)
                    }, s = se.compile = function (e, t) {
                        var n, r = [],
                            o = [],
                            s = E[e + " "];
                        if (!s) {
                            for (t || (t = a(e)), n = t.length; n--;)(s = Ce(t[n]))[w] ? r.push(s) : o.push(s);
                            (s = E(e, function (e, t) {
                                var n = t.length > 0,
                                    r = e.length > 0,
                                    o = function (o, a, s, l, u) {
                                        var f, p, v, m = 0,
                                            y = "0",
                                            b = o && [],
                                            w = [],
                                            x = c,
                                            k = o || r && i.find.TAG("*", u),
                                            C = S += null == x ? 1 : Math.random() || .1,
                                            _ = k.length;
                                        for (u && (c = a == h || a || u); y !== _ && null != (f = k[y]); y++) {
                                            if (r && f) {
                                                for (p = 0, a || f.ownerDocument == h || (d(f), s = !g); v = e[p++];)
                                                    if (v(f, a || h, s)) {
                                                        l.push(f);
                                                        break
                                                    } u && (S = C)
                                            }
                                            n && ((f = !v && f) && m--, o && b.push(f))
                                        }
                                        if (m += y, n && y !== m) {
                                            for (p = 0; v = t[p++];) v(b, w, a, s);
                                            if (o) {
                                                if (m > 0)
                                                    for (; y--;) b[y] || w[y] || (w[y] = L.call(l));
                                                w = Se(w)
                                            }
                                            j.apply(l, w), u && !o && w.length > 0 && m + t.length > 1 && se.uniqueSort(l)
                                        }
                                        return u && (S = C, c = x), b
                                    };
                                return n ? ce(o) : o
                            }(o, r))).selector = e
                        }
                        return s
                    }, l = se.select = function (e, t, n, r) {
                        var o, l, c, u, f, d = "function" == typeof e && e,
                            h = !r && a(e = d.selector || e);
                        if (n = n || [], 1 === h.length) {
                            if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                                if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                                d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                            }
                            for (o = U.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);)
                                if ((f = i.find[u]) && (r = f(c.matches[0].replace(te, ne), ee.test(l[0].type) && me(t.parentNode) || t))) {
                                    if (l.splice(o, 1), !(e = r.length && be(l))) return j.apply(n, r), n;
                                    break
                                }
                        }
                        return (d || s(e, h))(r, t, !g, n, !t || ee.test(e) && me(t.parentNode) || t), n
                    }, n.sortStable = w.split("").sort(O).join("") === w, n.detectDuplicates = !!f, d(), n.sortDetached = ue((function (e) {
                        return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
                    })), ue((function (e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    })) || fe("type|href|height|width", (function (e, t, n) {
                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    })), n.attributes && ue((function (e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    })) || fe("value", (function (e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                    })), ue((function (e) {
                        return null == e.getAttribute("disabled")
                    })) || fe(I, (function (e, t, n) {
                        var i;
                        if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    })), se
                }(e);
            S.find = C, S.expr = C.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = C.uniqueSort, S.text = C.getText, S.isXMLDoc = C.isXML, S.contains = C.contains, S.escapeSelector = C.escape;
            var _ = function (e, t, n) {
                    for (var i = [], r = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (r && S(e).is(n)) break;
                            i.push(e)
                        } return i
                },
                E = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                T = S.expr.match.needsContext;

            function O(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function $(e, t, n) {
                return v(t) ? S.grep(e, (function (e, i) {
                    return !!t.call(e, i, e) !== n
                })) : t.nodeType ? S.grep(e, (function (e) {
                    return e === t !== n
                })) : "string" != typeof t ? S.grep(e, (function (e) {
                    return c.call(t, e) > -1 !== n
                })) : S.filter(t, e, n)
            }
            S.filter = function (e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, (function (e) {
                    return 1 === e.nodeType
                })))
            }, S.fn.extend({
                find: function (e) {
                    var t, n, i = this.length,
                        r = this;
                    if ("string" != typeof e) return this.pushStack(S(e).filter((function () {
                        for (t = 0; t < i; t++)
                            if (S.contains(r[t], this)) return !0
                    })));
                    for (n = this.pushStack([]), t = 0; t < i; t++) S.find(e, r[t], n);
                    return i > 1 ? S.uniqueSort(n) : n
                },
                filter: function (e) {
                    return this.pushStack($(this, e || [], !1))
                },
                not: function (e) {
                    return this.pushStack($(this, e || [], !0))
                },
                is: function (e) {
                    return !!$(this, "string" == typeof e && T.test(e) ? S(e) : e || [], !1).length
                }
            });
            var L, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (S.fn.init = function (e, t, n) {
                var i, r;
                if (!e) return this;
                if (n = n || L, "string" == typeof e) {
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : y, !0)), A.test(i[1]) && S.isPlainObject(t))
                            for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return (r = y.getElementById(i[2])) && (this[0] = r, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
            }).prototype = S.fn, L = S(y);
            var j = /^(?:parents|prev(?:Until|All))/,
                D = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function N(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            S.fn.extend({
                has: function (e) {
                    var t = S(e, this),
                        n = t.length;
                    return this.filter((function () {
                        for (var e = 0; e < n; e++)
                            if (S.contains(this, t[e])) return !0
                    }))
                },
                closest: function (e, t) {
                    var n, i = 0,
                        r = this.length,
                        o = [],
                        a = "string" != typeof e && S(e);
                    if (!T.test(e))
                        for (; i < r; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                } return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? c.call(S(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), S.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function (e) {
                    return _(e, "parentNode")
                },
                parentsUntil: function (e, t, n) {
                    return _(e, "parentNode", n)
                },
                next: function (e) {
                    return N(e, "nextSibling")
                },
                prev: function (e) {
                    return N(e, "previousSibling")
                },
                nextAll: function (e) {
                    return _(e, "nextSibling")
                },
                prevAll: function (e) {
                    return _(e, "previousSibling")
                },
                nextUntil: function (e, t, n) {
                    return _(e, "nextSibling", n)
                },
                prevUntil: function (e, t, n) {
                    return _(e, "previousSibling", n)
                },
                siblings: function (e) {
                    return E((e.parentNode || {}).firstChild, e)
                },
                children: function (e) {
                    return E(e.firstChild)
                },
                contents: function (e) {
                    return null != e.contentDocument && o(e.contentDocument) ? e.contentDocument : (O(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
                }
            }, (function (e, t) {
                S.fn[e] = function (n, i) {
                    var r = S.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = S.filter(i, r)), this.length > 1 && (D[e] || S.uniqueSort(r), j.test(e) && r.reverse()), this.pushStack(r)
                }
            }));
            var I = /[^\x20\t\r\n\f]+/g;

            function M(e) {
                return e
            }

            function R(e) {
                throw e
            }

            function H(e, t, n, i) {
                var r;
                try {
                    e && v(r = e.promise) ? r.call(e).done(t).fail(n) : e && v(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            S.Callbacks = function (e) {
                e = "string" == typeof e ? function (e) {
                    var t = {};
                    return S.each(e.match(I) || [], (function (e, n) {
                        t[n] = !0
                    })), t
                }(e) : S.extend({}, e);
                var t, n, i, r, o = [],
                    a = [],
                    s = -1,
                    l = function () {
                        for (r = r || e.once, i = t = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                        e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
                    },
                    c = {
                        add: function () {
                            return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                S.each(n, (function (n, i) {
                                    v(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== x(i) && t(i)
                                }))
                            }(arguments), n && !t && l()), this
                        },
                        remove: function () {
                            return S.each(arguments, (function (e, t) {
                                for (var n;
                                    (n = S.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                            })), this
                        },
                        has: function (e) {
                            return e ? S.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function () {
                            return o && (o = []), this
                        },
                        disable: function () {
                            return r = a = [], o = n = "", this
                        },
                        disabled: function () {
                            return !o
                        },
                        lock: function () {
                            return r = a = [], n || t || (o = n = ""), this
                        },
                        locked: function () {
                            return !!r
                        },
                        fireWith: function (e, n) {
                            return r || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!i
                        }
                    };
                return c
            }, S.extend({
                Deferred: function (t) {
                    var n = [
                            ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                            ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                        ],
                        i = "pending",
                        o = {
                            state: function () {
                                return i
                            },
                            always: function () {
                                return a.done(arguments).fail(arguments), this
                            },
                            catch: function (e) {
                                return o.then(null, e)
                            },
                            pipe: function () {
                                var e = arguments;
                                return S.Deferred((function (t) {
                                    S.each(n, (function (n, i) {
                                        var r = v(e[i[4]]) && e[i[4]];
                                        a[i[1]]((function () {
                                            var e = r && r.apply(this, arguments);
                                            e && v(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                        }))
                                    })), e = null
                                })).promise()
                            },
                            then: function (t, i, o) {
                                var a = 0;

                                function s(t, n, i, o) {
                                    return function () {
                                        var l = this,
                                            c = arguments,
                                            u = function () {
                                                var e, u;
                                                if (!(t < a)) {
                                                    if ((e = i.apply(l, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                    u = e && ("object" === r(e) || "function" == typeof e) && e.then, v(u) ? o ? u.call(e, s(a, n, M, o), s(a, n, R, o)) : (a++, u.call(e, s(a, n, M, o), s(a, n, R, o), s(a, n, M, n.notifyWith))) : (i !== M && (l = void 0, c = [e]), (o || n.resolveWith)(l, c))
                                                }
                                            },
                                            f = o ? u : function () {
                                                try {
                                                    u()
                                                } catch (e) {
                                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= a && (i !== R && (l = void 0, c = [e]), n.rejectWith(l, c))
                                                }
                                            };
                                        t ? f() : (S.Deferred.getStackHook && (f.stackTrace = S.Deferred.getStackHook()), e.setTimeout(f))
                                    }
                                }
                                return S.Deferred((function (e) {
                                    n[0][3].add(s(0, e, v(o) ? o : M, e.notifyWith)), n[1][3].add(s(0, e, v(t) ? t : M)), n[2][3].add(s(0, e, v(i) ? i : R))
                                })).promise()
                            },
                            promise: function (e) {
                                return null != e ? S.extend(e, o) : o
                            }
                        },
                        a = {};
                    return S.each(n, (function (e, t) {
                        var r = t[2],
                            s = t[5];
                        o[t[1]] = r.add, s && r.add((function () {
                            i = s
                        }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), r.add(t[3].fire), a[t[0]] = function () {
                            return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                        }, a[t[0] + "With"] = r.fireWith
                    })), o.promise(a), t && t.call(a, a), a
                },
                when: function (e) {
                    var t = arguments.length,
                        n = t,
                        i = Array(n),
                        r = a.call(arguments),
                        o = S.Deferred(),
                        s = function (e) {
                            return function (n) {
                                i[e] = this, r[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(i, r)
                            }
                        };
                    if (t <= 1 && (H(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(r[n] && r[n].then))) return o.then();
                    for (; n--;) H(r[n], s(n), o.reject);
                    return o.promise()
                }
            });
            var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            S.Deferred.exceptionHook = function (t, n) {
                e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }, S.readyException = function (t) {
                e.setTimeout((function () {
                    throw t
                }))
            };
            var W = S.Deferred();

            function B() {
                y.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), S.ready()
            }
            S.fn.ready = function (e) {
                return W.then(e).catch((function (e) {
                    S.readyException(e)
                })), this
            }, S.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                    (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0, !0 !== e && --S.readyWait > 0 || W.resolveWith(y, [S]))
                }
            }), S.ready.then = W.then, "complete" === y.readyState || "loading" !== y.readyState && !y.documentElement.doScroll ? e.setTimeout(S.ready) : (y.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
            var q = function e(t, n, i, r, o, a, s) {
                    var l = 0,
                        c = t.length,
                        u = null == i;
                    if ("object" === x(i))
                        for (l in o = !0, i) e(t, n, l, i[l], !0, a, s);
                    else if (void 0 !== r && (o = !0, v(r) || (s = !0), u && (s ? (n.call(t, r), n = null) : (u = n, n = function (e, t, n) {
                            return u.call(S(e), n)
                        })), n))
                        for (; l < c; l++) n(t[l], i, s ? r : r.call(t[l], l, n(t[l], i)));
                    return o ? t : u ? n.call(t) : c ? n(t[0], i) : a
                },
                V = /^-ms-/,
                Y = /-([a-z])/g;

            function z(e, t) {
                return t.toUpperCase()
            }

            function X(e) {
                return e.replace(V, "ms-").replace(Y, z)
            }
            var U = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function Q() {
                this.expando = S.expando + Q.uid++
            }
            Q.uid = 1, Q.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function (e, t, n) {
                    var i, r = this.cache(e);
                    if ("string" == typeof t) r[X(t)] = n;
                    else
                        for (i in t) r[X(i)] = t[i];
                    return r
                },
                get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
                },
                access: function (e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function (e, t) {
                    var n, i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(I) || []).length;
                            for (; n--;) delete i[t[n]]
                        }(void 0 === t || S.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !S.isEmptyObject(t)
                }
            };
            var G = new Q,
                K = new Q,
                J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Z = /[A-Z]/g;

            function ee(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                        try {
                            n = function (e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {}
                        K.set(e, t, n)
                    } else n = void 0;
                return n
            }
            S.extend({
                hasData: function (e) {
                    return K.hasData(e) || G.hasData(e)
                },
                data: function (e, t, n) {
                    return K.access(e, t, n)
                },
                removeData: function (e, t) {
                    K.remove(e, t)
                },
                _data: function (e, t, n) {
                    return G.access(e, t, n)
                },
                _removeData: function (e, t) {
                    G.remove(e, t)
                }
            }), S.fn.extend({
                data: function (e, t) {
                    var n, i, o, a = this[0],
                        s = a && a.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = K.get(a), 1 === a.nodeType && !G.get(a, "hasDataAttrs"))) {
                            for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = X(i.slice(5)), ee(a, i, o[i]));
                            G.set(a, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" === r(e) ? this.each((function () {
                        K.set(this, e)
                    })) : q(this, (function (t) {
                        var n;
                        if (a && void 0 === t) return void 0 !== (n = K.get(a, e)) ? n : void 0 !== (n = ee(a, e)) ? n : void 0;
                        this.each((function () {
                            K.set(this, e, t)
                        }))
                    }), null, t, arguments.length > 1, null, !0)
                },
                removeData: function (e) {
                    return this.each((function () {
                        K.remove(this, e)
                    }))
                }
            }), S.extend({
                queue: function (e, t, n) {
                    var i;
                    if (e) return t = (t || "fx") + "queue", i = G.get(e, t), n && (!i || Array.isArray(n) ? i = G.access(e, t, S.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = S.queue(e, t),
                        i = n.length,
                        r = n.shift(),
                        o = S._queueHooks(e, t);
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function () {
                        S.dequeue(e, t)
                    }), o)), !i && o && o.empty.fire()
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return G.get(e, n) || G.access(e, n, {
                        empty: S.Callbacks("once memory").add((function () {
                            G.remove(e, [t + "queue", n])
                        }))
                    })
                }
            }), S.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? S.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                        var n = S.queue(this, e, t);
                        S._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e)
                    }))
                },
                dequeue: function (e) {
                    return this.each((function () {
                        S.dequeue(this, e)
                    }))
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, t) {
                    var n, i = 1,
                        r = S.Deferred(),
                        o = this,
                        a = this.length,
                        s = function () {
                            --i || r.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = G.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                    return s(), r.promise(t)
                }
            });
            var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
                ie = ["Top", "Right", "Bottom", "Left"],
                re = y.documentElement,
                oe = function (e) {
                    return S.contains(e.ownerDocument, e)
                },
                ae = {
                    composed: !0
                };
            re.getRootNode && (oe = function (e) {
                return S.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
            });
            var se = function (e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === S.css(e, "display")
            };

            function le(e, t, n, i) {
                var r, o, a = 20,
                    s = i ? function () {
                        return i.cur()
                    } : function () {
                        return S.css(e, t, "")
                    },
                    l = s(),
                    c = n && n[3] || (S.cssNumber[t] ? "" : "px"),
                    u = e.nodeType && (S.cssNumber[t] || "px" !== c && +l) && ne.exec(S.css(e, t));
                if (u && u[3] !== c) {
                    for (l /= 2, c = c || u[3], u = +l || 1; a--;) S.style(e, t, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
                    u *= 2, S.style(e, t, u + c), n = n || []
                }
                return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
            }
            var ce = {};

            function ue(e) {
                var t, n = e.ownerDocument,
                    i = e.nodeName,
                    r = ce[i];
                return r || (t = n.body.appendChild(n.createElement(i)), r = S.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ce[i] = r, r)
            }

            function fe(e, t) {
                for (var n, i, r = [], o = 0, a = e.length; o < a; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = G.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && se(i) && (r[o] = ue(i))) : "none" !== n && (r[o] = "none", G.set(i, "display", n)));
                for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
                return e
            }
            S.fn.extend({
                show: function () {
                    return fe(this, !0)
                },
                hide: function () {
                    return fe(this)
                },
                toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                        se(this) ? S(this).show() : S(this).hide()
                    }))
                }
            });
            var de, he, pe = /^(?:checkbox|radio)$/i,
                ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ve = /^$|^module$|\/(?:java|ecma)script/i;
            de = y.createDocumentFragment().appendChild(y.createElement("div")), (he = y.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), de.appendChild(he), g.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue, de.innerHTML = "<option></option>", g.option = !!de.lastChild;
            var me = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function ye(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && O(e, t) ? S.merge([e], n) : n
            }

            function be(e, t) {
                for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
            }
            me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, g.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
            var we = /<|&#?\w+;/;

            function xe(e, t, n, i, r) {
                for (var o, a, s, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
                    if ((o = e[h]) || 0 === o)
                        if ("object" === x(o)) S.merge(d, o.nodeType ? [o] : o);
                        else if (we.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (ge.exec(o) || ["", ""])[1].toLowerCase(), l = me[s] || me._default, a.innerHTML = l[1] + S.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
                    S.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
                } else d.push(t.createTextNode(o));
                for (f.textContent = "", h = 0; o = d[h++];)
                    if (i && S.inArray(o, i) > -1) r && r.push(o);
                    else if (c = oe(o), a = ye(f.appendChild(o), "script"), c && be(a), n)
                    for (u = 0; o = a[u++];) ve.test(o.type || "") && n.push(o);
                return f
            }
            var Se = /^key/,
                ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ce = /^([^.]*)(?:\.(.+)|)/;

            function _e() {
                return !0
            }

            function Ee() {
                return !1
            }

            function Te(e, t) {
                return e === function () {
                    try {
                        return y.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }

            function Oe(e, t, n, i, o, a) {
                var s, l;
                if ("object" === r(t)) {
                    for (l in "string" != typeof n && (i = i || n, n = void 0), t) Oe(e, l, n, i, t[l], a);
                    return e
                }
                if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ee;
                else if (!o) return e;
                return 1 === a && (s = o, (o = function (e) {
                    return S().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = S.guid++)), e.each((function () {
                    S.event.add(this, t, o, i, n)
                }))
            }

            function Ae(e, t, n) {
                n ? (G.set(e, t, !1), S.event.add(e, t, {
                    namespace: !1,
                    handler: function (e) {
                        var i, r, o = G.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (o.length)(S.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (o = a.call(arguments), G.set(this, t, o), i = n(this, t), this[t](), o !== (r = G.get(this, t)) || i ? G.set(this, t, !1) : r = {}, o !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
                        } else o.length && (G.set(this, t, {
                            value: S.event.trigger(S.extend(o[0], S.Event.prototype), o.slice(1), this)
                        }), e.stopImmediatePropagation())
                    }
                })) : void 0 === G.get(e, t) && S.event.add(e, t, _e)
            }
            S.event = {
                global: {},
                add: function (e, t, n, i, r) {
                    var o, a, s, l, c, u, f, d, h, p, g, v = G.get(e);
                    if (U(e))
                        for (n.handler && (n = (o = n).handler, r = o.selector), r && S.find.matchesSelector(re, r), n.guid || (n.guid = S.guid++), (l = v.events) || (l = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (t) {
                                return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0
                            }), c = (t = (t || "").match(I) || [""]).length; c--;) h = g = (s = Ce.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h && (f = S.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = S.event.special[h] || {}, u = S.extend({
                            type: h,
                            origType: g,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && S.expr.match.needsContext.test(r),
                            namespace: p.join(".")
                        }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(h, a)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), S.event.global[h] = !0)
                },
                remove: function (e, t, n, i, r) {
                    var o, a, s, l, c, u, f, d, h, p, g, v = G.hasData(e) && G.get(e);
                    if (v && (l = v.events)) {
                        for (c = (t = (t || "").match(I) || [""]).length; c--;)
                            if (h = g = (s = Ce.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                                for (f = S.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) u = d[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                                a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, v.handle) || S.removeEvent(e, h, v.handle), delete l[h])
                            } else
                                for (h in l) S.event.remove(e, h + t[c], n, i, !0);
                        S.isEmptyObject(l) && G.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    var t, n, i, r, o, a, s = new Array(arguments.length),
                        l = S.event.fix(e),
                        c = (G.get(this, "events") || Object.create(null))[l.type] || [],
                        u = S.event.special[l.type] || {};
                    for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                    if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                        for (a = S.event.handlers.call(this, l, c), t = 0;
                            (r = a[t++]) && !l.isPropagationStopped();)
                            for (l.currentTarget = r.elem, n = 0;
                                (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((S.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, l), l.result
                    }
                },
                handlers: function (e, t) {
                    var n, i, r, o, a, s = [],
                        l = t.delegateCount,
                        c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? S(r, this).index(c) > -1 : S.find(r, this, null, [c]).length), a[r] && o.push(i);
                                o.length && s.push({
                                    elem: c,
                                    handlers: o
                                })
                            } return c = this, l < t.length && s.push({
                        elem: c,
                        handlers: t.slice(l)
                    }), s
                },
                addProp: function (e, t) {
                    Object.defineProperty(S.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(t) ? function () {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function (t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function (e) {
                    return e[S.expando] ? e : new S.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function (e) {
                            var t = this || e;
                            return pe.test(t.type) && t.click && O(t, "input") && Ae(t, "click", _e), !1
                        },
                        trigger: function (e) {
                            var t = this || e;
                            return pe.test(t.type) && t.click && O(t, "input") && Ae(t, "click"), !0
                        },
                        _default: function (e) {
                            var t = e.target;
                            return pe.test(t.type) && t.click && O(t, "input") && G.get(t, "click") || O(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, S.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, S.Event = function (e, t) {
                if (!(this instanceof S.Event)) return new S.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
            }, S.Event.prototype = {
                constructor: S.Event,
                isDefaultPrevented: Ee,
                isPropagationStopped: Ee,
                isImmediatePropagationStopped: Ee,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = _e, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = _e, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = _e, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, S.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, S.event.addProp), S.each({
                focus: "focusin",
                blur: "focusout"
            }, (function (e, t) {
                S.event.special[e] = {
                    setup: function () {
                        return Ae(this, e, Te), !1
                    },
                    trigger: function () {
                        return Ae(this, e), !0
                    },
                    delegateType: t
                }
            })), S.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function (e, t) {
                S.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n, i = this,
                            r = e.relatedTarget,
                            o = e.handleObj;
                        return r && (r === i || S.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            })), S.fn.extend({
                on: function (e, t, n, i) {
                    return Oe(this, e, t, n, i)
                },
                one: function (e, t, n, i) {
                    return Oe(this, e, t, n, i, 1)
                },
                off: function (e, t, n) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" === r(e)) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each((function () {
                        S.event.remove(this, e, n, t)
                    }))
                }
            });
            var $e = /<script|<style|<link/i,
                Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function je(e, t) {
                return O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
            }

            function De(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function Ne(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function Ie(e, t) {
                var n, i, r, o, a, s;
                if (1 === t.nodeType) {
                    if (G.hasData(e) && (s = G.get(e).events))
                        for (r in G.remove(t, "handle events"), s)
                            for (n = 0, i = s[r].length; n < i; n++) S.event.add(t, r, s[r][n]);
                    K.hasData(e) && (o = K.access(e), a = S.extend({}, o), K.set(t, a))
                }
            }

            function Me(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }

            function Re(e, t, n, i) {
                t = s(t);
                var r, o, a, l, c, u, f = 0,
                    d = e.length,
                    h = d - 1,
                    p = t[0],
                    m = v(p);
                if (m || d > 1 && "string" == typeof p && !g.checkClone && Le.test(p)) return e.each((function (r) {
                    var o = e.eq(r);
                    m && (t[0] = p.call(this, r, o.html())), Re(o, t, n, i)
                }));
                if (d && (o = (r = xe(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                    for (l = (a = S.map(ye(r, "script"), De)).length; f < d; f++) c = r, f !== h && (c = S.clone(c, !0, !0), l && S.merge(a, ye(c, "script"))), n.call(e[f], c, f);
                    if (l)
                        for (u = a[a.length - 1].ownerDocument, S.map(a, Ne), f = 0; f < l; f++) c = a[f], ve.test(c.type || "") && !G.access(c, "globalEval") && S.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? S._evalUrl && !c.noModule && S._evalUrl(c.src, {
                            nonce: c.nonce || c.getAttribute("nonce")
                        }, u) : w(c.textContent.replace(Pe, ""), c, u))
                }
                return e
            }

            function He(e, t, n) {
                for (var i, r = t ? S.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || S.cleanData(ye(i)), i.parentNode && (n && oe(i) && be(ye(i, "script")), i.parentNode.removeChild(i));
                return e
            }
            S.extend({
                htmlPrefilter: function (e) {
                    return e
                },
                clone: function (e, t, n) {
                    var i, r, o, a, s = e.cloneNode(!0),
                        l = oe(e);
                    if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                        for (a = ye(s), i = 0, r = (o = ye(e)).length; i < r; i++) Me(o[i], a[i]);
                    if (t)
                        if (n)
                            for (o = o || ye(e), a = a || ye(s), i = 0, r = o.length; i < r; i++) Ie(o[i], a[i]);
                        else Ie(e, s);
                    return (a = ye(s, "script")).length > 0 && be(a, !l && ye(e, "script")), s
                },
                cleanData: function (e) {
                    for (var t, n, i, r = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (U(n)) {
                            if (t = n[G.expando]) {
                                if (t.events)
                                    for (i in t.events) r[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                                n[G.expando] = void 0
                            }
                            n[K.expando] && (n[K.expando] = void 0)
                        }
                }
            }), S.fn.extend({
                detach: function (e) {
                    return He(this, e, !0)
                },
                remove: function (e) {
                    return He(this, e)
                },
                text: function (e) {
                    return q(this, (function (e) {
                        return void 0 === e ? S.text(this) : this.empty().each((function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        }))
                    }), null, e, arguments.length)
                },
                append: function () {
                    return Re(this, arguments, (function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
                    }))
                },
                prepend: function () {
                    return Re(this, arguments, (function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = je(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }))
                },
                before: function () {
                    return Re(this, arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }))
                },
                after: function () {
                    return Re(this, arguments, (function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }))
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ye(e, !1)), e.textContent = "");
                    return this
                },
                clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function () {
                        return S.clone(this, e, t)
                    }))
                },
                html: function (e) {
                    return q(this, (function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !$e.test(e) && !me[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = S.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ye(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }), null, e, arguments.length)
                },
                replaceWith: function () {
                    var e = [];
                    return Re(this, arguments, (function (t) {
                        var n = this.parentNode;
                        S.inArray(this, e) < 0 && (S.cleanData(ye(this)), n && n.replaceChild(t, this))
                    }), e)
                }
            }), S.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function (e, t) {
                S.fn[e] = function (e) {
                    for (var n, i = [], r = S(e), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), S(r[a])[t](n), l.apply(i, n.get());
                    return this.pushStack(i)
                }
            }));
            var Fe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
                We = function (t) {
                    var n = t.ownerDocument.defaultView;
                    return n && n.opener || (n = e), n.getComputedStyle(t)
                },
                Be = function (e, t, n) {
                    var i, r, o = {};
                    for (r in t) o[r] = e.style[r], e.style[r] = t[r];
                    for (r in i = n.call(e), t) e.style[r] = o[r];
                    return i
                },
                qe = new RegExp(ie.join("|"), "i");

            function Ve(e, t, n) {
                var i, r, o, a, s = e.style;
                return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = S.style(e, t)), !g.pixelBoxStyles() && Fe.test(a) && qe.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function Ye(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function () {
                function t() {
                    if (u) {
                        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(c).appendChild(u);
                        var t = e.getComputedStyle(u);
                        i = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), r = 36 === n(t.width), u.style.position = "absolute", o = 12 === n(u.offsetWidth / 3), re.removeChild(c), u = null
                    }
                }

                function n(e) {
                    return Math.round(parseFloat(e))
                }
                var i, r, o, a, s, l, c = y.createElement("div"),
                    u = y.createElement("div");
                u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === u.style.backgroundClip, S.extend(g, {
                    boxSizingReliable: function () {
                        return t(), r
                    },
                    pixelBoxStyles: function () {
                        return t(), a
                    },
                    pixelPosition: function () {
                        return t(), i
                    },
                    reliableMarginLeft: function () {
                        return t(), l
                    },
                    scrollboxSize: function () {
                        return t(), o
                    },
                    reliableTrDimensions: function () {
                        var t, n, i, r;
                        return null == s && (t = y.createElement("table"), n = y.createElement("tr"), i = y.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", i.style.height = "9px", re.appendChild(t).appendChild(n).appendChild(i), r = e.getComputedStyle(n), s = parseInt(r.height) > 3, re.removeChild(t)), s
                    }
                }))
            }();
            var ze = ["Webkit", "Moz", "ms"],
                Xe = y.createElement("div").style,
                Ue = {};

            function Qe(e) {
                var t = S.cssProps[e] || Ue[e];
                return t || (e in Xe ? e : Ue[e] = function (e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;)
                        if ((e = ze[n] + t) in Xe) return e
                }(e) || e)
            }
            var Ge = /^(none|table(?!-c[ea]).+)/,
                Ke = /^--/,
                Je = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Ze = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function et(e, t, n) {
                var i = ne.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }

            function tt(e, t, n, i, r, o) {
                var a = "width" === t ? 1 : 0,
                    s = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === n && (l += S.css(e, n + ie[a], !0, r)), i ? ("content" === n && (l -= S.css(e, "padding" + ie[a], !0, r)), "margin" !== n && (l -= S.css(e, "border" + ie[a] + "Width", !0, r))) : (l += S.css(e, "padding" + ie[a], !0, r), "padding" !== n ? l += S.css(e, "border" + ie[a] + "Width", !0, r) : s += S.css(e, "border" + ie[a] + "Width", !0, r));
                return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5)) || 0), l
            }

            function nt(e, t, n) {
                var i = We(e),
                    r = (!g.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    o = r,
                    a = Ve(e, t, i),
                    s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Fe.test(a)) {
                    if (!n) return a;
                    a = "auto"
                }
                return (!g.boxSizingReliable() && r || !g.reliableTrDimensions() && O(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === S.css(e, "boxSizing", !1, i), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + tt(e, t, n || (r ? "border" : "content"), o, i, a) + "px"
            }

            function it(e, t, n, i, r) {
                return new it.prototype.init(e, t, n, i, r)
            }
            S.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = Ve(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function (e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, a, s, l = X(t),
                            c = Ke.test(t),
                            u = e.style;
                        if (c || (t = Qe(l)), s = S.cssHooks[t] || S.cssHooks[l], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : u[t];
                        "string" === (a = r(n)) && (o = ne.exec(n)) && o[1] && (n = le(e, t, o), a = "number"), null != n && n == n && ("number" !== a || c || (n += o && o[3] || (S.cssNumber[l] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (c ? u.setProperty(t, n) : u[t] = n))
                    }
                },
                css: function (e, t, n, i) {
                    var r, o, a, s = X(t);
                    return Ke.test(t) || (t = Qe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Ve(e, t, i)), "normal" === r && t in Ze && (r = Ze[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
                }
            }), S.each(["height", "width"], (function (e, t) {
                S.cssHooks[t] = {
                    get: function (e, n, i) {
                        if (n) return !Ge.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, i) : Be(e, Je, (function () {
                            return nt(e, t, i)
                        }))
                    },
                    set: function (e, n, i) {
                        var r, o = We(e),
                            a = !g.scrollboxSize() && "absolute" === o.position,
                            s = (a || i) && "border-box" === S.css(e, "boxSizing", !1, o),
                            l = i ? tt(e, t, i, s, o) : 0;
                        return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - .5)), l && (r = ne.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = S.css(e, t)), et(0, n, l)
                    }
                }
            })), S.cssHooks.marginLeft = Ye(g.reliableMarginLeft, (function (e, t) {
                if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                    marginLeft: 0
                }, (function () {
                    return e.getBoundingClientRect().left
                }))) + "px"
            })), S.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function (e, t) {
                S.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ie[i] + t] = o[i] || o[i - 2] || o[0];
                        return r
                    }
                }, "margin" !== e && (S.cssHooks[e + t].set = et)
            })), S.fn.extend({
                css: function (e, t) {
                    return q(this, (function (e, t, n) {
                        var i, r, o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (i = We(e), r = t.length; a < r; a++) o[t[a]] = S.css(e, t[a], !1, i);
                            return o
                        }
                        return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                    }), e, t, arguments.length > 1)
                }
            }), S.Tween = it, it.prototype = {
                constructor: it,
                init: function (e, t, n, i, r, o) {
                    this.elem = e, this.prop = n, this.easing = r || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (S.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var e = it.propHooks[this.prop];
                    return e && e.get ? e.get(this) : it.propHooks._default.get(this)
                },
                run: function (e) {
                    var t, n = it.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : it.propHooks._default.set(this), this
                }
            }, it.prototype.init.prototype = it.prototype, it.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function (e) {
                        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, it.propHooks.scrollTop = it.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, S.easing = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, S.fx = it.prototype.init, S.fx.step = {};
            var rt, ot, at = /^(?:toggle|show|hide)$/,
                st = /queueHooks$/;

            function lt() {
                ot && (!1 === y.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(lt) : e.setTimeout(lt, S.fx.interval), S.fx.tick())
            }

            function ct() {
                return e.setTimeout((function () {
                    rt = void 0
                })), rt = Date.now()
            }

            function ut(e, t) {
                var n, i = 0,
                    r = {
                        height: e
                    };
                for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }

            function ft(e, t, n) {
                for (var i, r = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                    if (i = r[o].call(n, t, e)) return i
            }

            function dt(e, t, n) {
                var i, r, o = 0,
                    a = dt.prefilters.length,
                    s = S.Deferred().always((function () {
                        delete l.elem
                    })),
                    l = function () {
                        if (r) return !1;
                        for (var t = rt || ct(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(i);
                        return s.notifyWith(e, [c, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
                    },
                    c = s.promise({
                        elem: e,
                        props: S.extend({}, t),
                        opts: S.extend(!0, {
                            specialEasing: {},
                            easing: S.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: rt || ct(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var i = S.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(i), i
                        },
                        stop: function (t) {
                            var n = 0,
                                i = t ? c.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; n < i; n++) c.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                        }
                    }),
                    u = c.props;
                for (function (e, t) {
                        var n, i, r, o, a;
                        for (n in e)
                            if (r = t[i = X(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = S.cssHooks[i]) && "expand" in a)
                                for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                            else t[i] = r
                    }(u, c.opts.specialEasing); o < a; o++)
                    if (i = dt.prefilters[o].call(c, e, u, c.opts)) return v(i.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
                return S.map(u, ft, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), S.fx.timer(S.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }
            S.Animation = S.extend(dt, {
                    tweeners: {
                        "*": [function (e, t) {
                            var n = this.createTween(e, t);
                            return le(n.elem, e, ne.exec(t), n), n
                        }]
                    },
                    tweener: function (e, t) {
                        v(e) ? (t = e, e = ["*"]) : e = e.match(I);
                        for (var n, i = 0, r = e.length; i < r; i++) n = e[i], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
                    },
                    prefilters: [function (e, t, n) {
                        var i, r, o, a, s, l, c, u, f = "width" in t || "height" in t,
                            d = this,
                            h = {},
                            p = e.style,
                            g = e.nodeType && se(e),
                            v = G.get(e, "fxshow");
                        for (i in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                                a.unqueued || s()
                            }), a.unqueued++, d.always((function () {
                                d.always((function () {
                                    a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                                }))
                            }))), t)
                            if (r = t[i], at.test(r)) {
                                if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                                    if ("show" !== r || !v || void 0 === v[i]) continue;
                                    g = !0
                                }
                                h[i] = v && v[i] || S.style(e, i)
                            } if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(h))
                            for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = v && v.display) && (c = G.get(e, "display")), "none" === (u = S.css(e, "display")) && (c ? u = c : (fe([e], !0), c = e.style.display || c, u = S.css(e, "display"), fe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === S.css(e, "float") && (l || (d.done((function () {
                                    p.display = c
                                })), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function () {
                                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                                }))), l = !1, h) l || (v ? "hidden" in v && (g = v.hidden) : v = G.access(e, "fxshow", {
                                display: c
                            }), o && (v.hidden = !g), g && fe([e], !0), d.done((function () {
                                for (i in g || fe([e]), G.remove(e, "fxshow"), h) S.style(e, i, h[i])
                            }))), l = ft(g ? v[i] : 0, i, d), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
                    }],
                    prefilter: function (e, t) {
                        t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
                    }
                }), S.speed = function (e, t, n) {
                    var i = e && "object" === r(e) ? S.extend({}, e) : {
                        complete: n || !n && t || v(e) && e,
                        duration: e,
                        easing: n && t || t && !v(t) && t
                    };
                    return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                        v(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue)
                    }, i
                }, S.fn.extend({
                    fadeTo: function (e, t, n, i) {
                        return this.filter(se).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, i)
                    },
                    animate: function (e, t, n, i) {
                        var r = S.isEmptyObject(e),
                            o = S.speed(t, n, i),
                            a = function () {
                                var t = dt(this, S.extend({}, e), o);
                                (r || G.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function (e, t, n) {
                        var i = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
                            var t = !0,
                                r = null != e && e + "queueHooks",
                                o = S.timers,
                                a = G.get(this);
                            if (r) a[r] && a[r].stop && i(a[r]);
                            else
                                for (r in a) a[r] && a[r].stop && st.test(r) && i(a[r]);
                            for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                            !t && n || S.dequeue(this, e)
                        }))
                    },
                    finish: function (e) {
                        return !1 !== e && (e = e || "fx"), this.each((function () {
                            var t, n = G.get(this),
                                i = n[e + "queue"],
                                r = n[e + "queueHooks"],
                                o = S.timers,
                                a = i ? i.length : 0;
                            for (n.finish = !0, S.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                            delete n.finish
                        }))
                    }
                }), S.each(["toggle", "show", "hide"], (function (e, t) {
                    var n = S.fn[t];
                    S.fn[t] = function (e, i, r) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, i, r)
                    }
                })), S.each({
                    slideDown: ut("show"),
                    slideUp: ut("hide"),
                    slideToggle: ut("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function (e, t) {
                    S.fn[e] = function (e, n, i) {
                        return this.animate(t, e, n, i)
                    }
                })), S.timers = [], S.fx.tick = function () {
                    var e, t = 0,
                        n = S.timers;
                    for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || S.fx.stop(), rt = void 0
                }, S.fx.timer = function (e) {
                    S.timers.push(e), S.fx.start()
                }, S.fx.interval = 13, S.fx.start = function () {
                    ot || (ot = !0, lt())
                }, S.fx.stop = function () {
                    ot = null
                }, S.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, S.fn.delay = function (t, n) {
                    return t = S.fx && S.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function (n, i) {
                        var r = e.setTimeout(n, t);
                        i.stop = function () {
                            e.clearTimeout(r)
                        }
                    }))
                },
                function () {
                    var e = y.createElement("input"),
                        t = y.createElement("select").appendChild(y.createElement("option"));
                    e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = y.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
                }();
            var ht, pt = S.expr.attrHandle;
            S.fn.extend({
                attr: function (e, t) {
                    return q(this, S.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each((function () {
                        S.removeAttr(this, e)
                    }))
                }
            }), S.extend({
                attr: function (e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (r = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = S.find.attr(e, t)) ? void 0 : i)
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!g.radioValue && "radio" === t && O(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function (e, t) {
                    var n, i = 0,
                        r = t && t.match(I);
                    if (r && 1 === e.nodeType)
                        for (; n = r[i++];) e.removeAttribute(n)
                }
            }), ht = {
                set: function (e, t, n) {
                    return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, S.each(S.expr.match.bool.source.match(/\w+/g), (function (e, t) {
                var n = pt[t] || S.find.attr;
                pt[t] = function (e, t, i) {
                    var r, o, a = t.toLowerCase();
                    return i || (o = pt[a], pt[a] = r, r = null != n(e, t, i) ? a : null, pt[a] = o), r
                }
            }));
            var gt = /^(?:input|select|textarea|button)$/i,
                vt = /^(?:a|area)$/i;

            function mt(e) {
                return (e.match(I) || []).join(" ")
            }

            function yt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function bt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
            }
            S.fn.extend({
                prop: function (e, t) {
                    return q(this, S.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return this.each((function () {
                        delete this[S.propFix[e] || e]
                    }))
                }
            }), S.extend({
                prop: function (e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, r = S.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = S.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), g.optSelected || (S.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
                S.propFix[this.toLowerCase()] = this
            })), S.fn.extend({
                addClass: function (e) {
                    var t, n, i, r, o, a, s, l = 0;
                    if (v(e)) return this.each((function (t) {
                        S(this).addClass(e.call(this, t, yt(this)))
                    }));
                    if ((t = bt(e)).length)
                        for (; n = this[l++];)
                            if (r = yt(n), i = 1 === n.nodeType && " " + mt(r) + " ") {
                                for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                r !== (s = mt(i)) && n.setAttribute("class", s)
                            } return this
                },
                removeClass: function (e) {
                    var t, n, i, r, o, a, s, l = 0;
                    if (v(e)) return this.each((function (t) {
                        S(this).removeClass(e.call(this, t, yt(this)))
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = bt(e)).length)
                        for (; n = this[l++];)
                            if (r = yt(n), i = 1 === n.nodeType && " " + mt(r) + " ") {
                                for (a = 0; o = t[a++];)
                                    for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                                r !== (s = mt(i)) && n.setAttribute("class", s)
                            } return this
                },
                toggleClass: function (e, t) {
                    var n = r(e),
                        i = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function (n) {
                        S(this).toggleClass(e.call(this, n, yt(this), t), t)
                    })) : this.each((function () {
                        var t, r, o, a;
                        if (i)
                            for (r = 0, o = S(this), a = bt(e); t = a[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = yt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
                    }))
                },
                hasClass: function (e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];)
                        if (1 === n.nodeType && (" " + mt(yt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var wt = /\r/g;
            S.fn.extend({
                val: function (e) {
                    var t, n, i, r = this[0];
                    return arguments.length ? (i = v(e), this.each((function (n) {
                        var r;
                        1 === this.nodeType && (null == (r = i ? e.call(this, n, S(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = S.map(r, (function (e) {
                            return null == e ? "" : e + ""
                        }))), (t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    }))) : r ? (t = S.valHooks[r.type] || S.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
                }
            }), S.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = S.find.attr(e, "value");
                            return null != t ? t : mt(S.text(e))
                        }
                    },
                    select: {
                        get: function (e) {
                            var t, n, i, r = e.options,
                                o = e.selectedIndex,
                                a = "select-one" === e.type,
                                s = a ? null : [],
                                l = a ? o + 1 : r.length;
                            for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                                if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))) {
                                    if (t = S(n).val(), a) return t;
                                    s.push(t)
                                } return s
                        },
                        set: function (e, t) {
                            for (var n, i, r = e.options, o = S.makeArray(t), a = r.length; a--;)((i = r[a]).selected = S.inArray(S.valHooks.option.get(i), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), S.each(["radio", "checkbox"], (function () {
                S.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return e.checked = S.inArray(S(e).val(), t) > -1
                    }
                }, g.checkOn || (S.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            })), g.focusin = "onfocusin" in e;
            var xt = /^(?:focusinfocus|focusoutblur)$/,
                St = function (e) {
                    e.stopPropagation()
                };
            S.extend(S.event, {
                trigger: function (t, n, i, o) {
                    var a, s, l, c, u, f, h, p, g = [i || y],
                        b = d.call(t, "type") ? t.type : t,
                        w = d.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = p = l = i = i || y, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(b + S.event.triggered) && (b.indexOf(".") > -1 && (w = b.split("."), b = w.shift(), w.sort()), u = b.indexOf(":") < 0 && "on" + b, (t = t[S.expando] ? t : new S.Event(b, "object" === r(t) && t)).isTrigger = o ? 2 : 3, t.namespace = w.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : S.makeArray(n, [t]), h = S.event.special[b] || {}, o || !h.trigger || !1 !== h.trigger.apply(i, n))) {
                        if (!o && !h.noBubble && !m(i)) {
                            for (c = h.delegateType || b, xt.test(c + b) || (s = s.parentNode); s; s = s.parentNode) g.push(s), l = s;
                            l === (i.ownerDocument || y) && g.push(l.defaultView || l.parentWindow || e)
                        }
                        for (a = 0;
                            (s = g[a++]) && !t.isPropagationStopped();) p = s, t.type = a > 1 ? c : h.bindType || b, (f = (G.get(s, "events") || Object.create(null))[t.type] && G.get(s, "handle")) && f.apply(s, n), (f = u && s[u]) && f.apply && U(s) && (t.result = f.apply(s, n), !1 === t.result && t.preventDefault());
                        return t.type = b, o || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(g.pop(), n) || !U(i) || u && v(i[b]) && !m(i) && ((l = i[u]) && (i[u] = null), S.event.triggered = b, t.isPropagationStopped() && p.addEventListener(b, St), i[b](), t.isPropagationStopped() && p.removeEventListener(b, St), S.event.triggered = void 0, l && (i[u] = l)), t.result
                    }
                },
                simulate: function (e, t, n) {
                    var i = S.extend(new S.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    S.event.trigger(i, null, t)
                }
            }), S.fn.extend({
                trigger: function (e, t) {
                    return this.each((function () {
                        S.event.trigger(e, t, this)
                    }))
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return S.event.trigger(e, t, n, !0)
                }
            }), g.focusin || S.each({
                focus: "focusin",
                blur: "focusout"
            }, (function (e, t) {
                var n = function (e) {
                    S.event.simulate(t, e.target, S.event.fix(e))
                };
                S.event.special[t] = {
                    setup: function () {
                        var i = this.ownerDocument || this.document || this,
                            r = G.access(i, t);
                        r || i.addEventListener(e, n, !0), G.access(i, t, (r || 0) + 1)
                    },
                    teardown: function () {
                        var i = this.ownerDocument || this.document || this,
                            r = G.access(i, t) - 1;
                        r ? G.access(i, t, r) : (i.removeEventListener(e, n, !0), G.remove(i, t))
                    }
                }
            }));
            var kt = e.location,
                Ct = {
                    guid: Date.now()
                },
                _t = /\?/;
            S.parseXML = function (t) {
                var n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (e) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + t), n
            };
            var Et = /\[\]$/,
                Tt = /\r?\n/g,
                Ot = /^(?:submit|button|image|reset|file)$/i,
                At = /^(?:input|select|textarea|keygen)/i;

            function $t(e, t, n, i) {
                var o;
                if (Array.isArray(t)) S.each(t, (function (t, o) {
                    n || Et.test(e) ? i(e, o) : $t(e + "[" + ("object" === r(o) && null != o ? t : "") + "]", o, n, i)
                }));
                else if (n || "object" !== x(t)) i(e, t);
                else
                    for (o in t) $t(e + "[" + o + "]", t[o], n, i)
            }
            S.param = function (e, t) {
                var n, i = [],
                    r = function (e, t) {
                        var n = v(t) ? t() : t;
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, (function () {
                    r(this.name, this.value)
                }));
                else
                    for (n in e) $t(n, e[n], t, r);
                return i.join("&")
            }, S.fn.extend({
                serialize: function () {
                    return S.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map((function () {
                        var e = S.prop(this, "elements");
                        return e ? S.makeArray(e) : this
                    })).filter((function () {
                        var e = this.type;
                        return this.name && !S(this).is(":disabled") && At.test(this.nodeName) && !Ot.test(e) && (this.checked || !pe.test(e))
                    })).map((function (e, t) {
                        var n = S(this).val();
                        return null == n ? null : Array.isArray(n) ? S.map(n, (function (e) {
                            return {
                                name: t.name,
                                value: e.replace(Tt, "\r\n")
                            }
                        })) : {
                            name: t.name,
                            value: n.replace(Tt, "\r\n")
                        }
                    })).get()
                }
            });
            var Lt = /%20/g,
                Pt = /#.*$/,
                jt = /([?&])_=[^&]*/,
                Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Nt = /^(?:GET|HEAD)$/,
                It = /^\/\//,
                Mt = {},
                Rt = {},
                Ht = "*/".concat("*"),
                Ft = y.createElement("a");

            function Wt(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, r = 0,
                        o = t.toLowerCase().match(I) || [];
                    if (v(n))
                        for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }

            function Bt(e, t, n, i) {
                var r = {},
                    o = e === Rt;

                function a(s) {
                    var l;
                    return r[s] = !0, S.each(e[s] || [], (function (e, s) {
                        var c = s(t, n, i);
                        return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                    })), l
                }
                return a(t.dataTypes[0]) || !r["*"] && a("*")
            }

            function qt(e, t) {
                var n, i, r = S.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                return i && S.extend(!0, e, i), e
            }
            Ft.href = kt.href, S.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: kt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ht,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": S.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? qt(qt(e, S.ajaxSettings), t) : qt(S.ajaxSettings, e)
                },
                ajaxPrefilter: Wt(Mt),
                ajaxTransport: Wt(Rt),
                ajax: function (t, n) {
                    "object" === r(t) && (n = t, t = void 0), n = n || {};
                    var i, o, a, s, l, c, u, f, d, h, p = S.ajaxSetup({}, n),
                        g = p.context || p,
                        v = p.context && (g.nodeType || g.jquery) ? S(g) : S.event,
                        m = S.Deferred(),
                        b = S.Callbacks("once memory"),
                        w = p.statusCode || {},
                        x = {},
                        k = {},
                        C = "canceled",
                        _ = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (u) {
                                    if (!s)
                                        for (s = {}; t = Dt.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = s[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function () {
                                return u ? a : null
                            },
                            setRequestHeader: function (e, t) {
                                return null == u && (e = k[e.toLowerCase()] = k[e.toLowerCase()] || e, x[e] = t), this
                            },
                            overrideMimeType: function (e) {
                                return null == u && (p.mimeType = e), this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (u) _.always(e[_.status]);
                                    else
                                        for (t in e) w[t] = [w[t], e[t]];
                                return this
                            },
                            abort: function (e) {
                                var t = e || C;
                                return i && i.abort(t), E(0, t), this
                            }
                        };
                    if (m.promise(_), p.url = ((t || p.url || kt.href) + "").replace(It, kt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(I) || [""], null == p.crossDomain) {
                        c = y.createElement("a");
                        try {
                            c.href = p.url, c.href = c.href, p.crossDomain = Ft.protocol + "//" + Ft.host != c.protocol + "//" + c.host
                        } catch (e) {
                            p.crossDomain = !0
                        }
                    }
                    if (p.data && p.processData && "string" != typeof p.data && (p.data = S.param(p.data, p.traditional)), Bt(Mt, p, n, _), u) return _;
                    for (d in (f = S.event && p.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nt.test(p.type), o = p.url.replace(Pt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Lt, "+")) : (h = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (_t.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(jt, "$1"), h = (_t.test(o) ? "&" : "?") + "_=" + Ct.guid++ + h), p.url = o + h), p.ifModified && (S.lastModified[o] && _.setRequestHeader("If-Modified-Since", S.lastModified[o]), S.etag[o] && _.setRequestHeader("If-None-Match", S.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && _.setRequestHeader("Content-Type", p.contentType), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : p.accepts["*"]), p.headers) _.setRequestHeader(d, p.headers[d]);
                    if (p.beforeSend && (!1 === p.beforeSend.call(g, _, p) || u)) return _.abort();
                    if (C = "abort", b.add(p.complete), _.done(p.success), _.fail(p.error), i = Bt(Rt, p, n, _)) {
                        if (_.readyState = 1, f && v.trigger("ajaxSend", [_, p]), u) return _;
                        p.async && p.timeout > 0 && (l = e.setTimeout((function () {
                            _.abort("timeout")
                        }), p.timeout));
                        try {
                            u = !1, i.send(x, E)
                        } catch (e) {
                            if (u) throw e;
                            E(-1, e)
                        }
                    } else E(-1, "No Transport");

                    function E(t, n, r, s) {
                        var c, d, h, y, x, k = n;
                        u || (u = !0, l && e.clearTimeout(l), i = void 0, a = s || "", _.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (y = function (e, t, n) {
                            for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (i)
                                for (r in s)
                                    if (s[r] && s[r].test(i)) {
                                        l.unshift(r);
                                        break
                                    } if (l[0] in n) o = l[0];
                            else {
                                for (r in n) {
                                    if (!l[0] || e.converters[r + " " + l[0]]) {
                                        o = r;
                                        break
                                    }
                                    a || (a = r)
                                }
                                o = o || a
                            }
                            if (o) return o !== l[0] && l.unshift(o), n[o]
                        }(p, _, r)), !c && S.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function () {}), y = function (e, t, n, i) {
                            var r, o, a, s, l, c = {},
                                u = e.dataTypes.slice();
                            if (u[1])
                                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                            for (o = u.shift(); o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                if (!(a = c[l + " " + o] || c["* " + o]))
                                    for (r in c)
                                        if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                            !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                                            break
                                        } if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + l + " to " + o
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(p, y, _, c), c ? (p.ifModified && ((x = _.getResponseHeader("Last-Modified")) && (S.lastModified[o] = x), (x = _.getResponseHeader("etag")) && (S.etag[o] = x)), 204 === t || "HEAD" === p.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = y.state, d = y.data, c = !(h = y.error))) : (h = k, !t && k || (k = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (n || k) + "", c ? m.resolveWith(g, [d, k, _]) : m.rejectWith(g, [_, k, h]), _.statusCode(w), w = void 0, f && v.trigger(c ? "ajaxSuccess" : "ajaxError", [_, p, c ? d : h]), b.fireWith(g, [_, k]), f && (v.trigger("ajaxComplete", [_, p]), --S.active || S.event.trigger("ajaxStop")))
                    }
                    return _
                },
                getJSON: function (e, t, n) {
                    return S.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return S.get(e, void 0, t, "script")
                }
            }), S.each(["get", "post"], (function (e, t) {
                S[t] = function (e, n, i, r) {
                    return v(n) && (r = r || i, i = n, n = void 0), S.ajax(S.extend({
                        url: e,
                        type: t,
                        dataType: r,
                        data: n,
                        success: i
                    }, S.isPlainObject(e) && e))
                }
            })), S.ajaxPrefilter((function (e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            })), S._evalUrl = function (e, t, n) {
                return S.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function () {}
                    },
                    dataFilter: function (e) {
                        S.globalEval(e, t, n)
                    }
                })
            }, S.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return this[0] && (v(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    })).append(this)), this
                },
                wrapInner: function (e) {
                    return v(e) ? this.each((function (t) {
                        S(this).wrapInner(e.call(this, t))
                    })) : this.each((function () {
                        var t = S(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }))
                },
                wrap: function (e) {
                    var t = v(e);
                    return this.each((function (n) {
                        S(this).wrapAll(t ? e.call(this, n) : e)
                    }))
                },
                unwrap: function (e) {
                    return this.parent(e).not("body").each((function () {
                        S(this).replaceWith(this.childNodes)
                    })), this
                }
            }), S.expr.pseudos.hidden = function (e) {
                return !S.expr.pseudos.visible(e)
            }, S.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, S.ajaxSettings.xhr = function () {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {}
            };
            var Vt = {
                    0: 200,
                    1223: 204
                },
                Yt = S.ajaxSettings.xhr();
            g.cors = !!Yt && "withCredentials" in Yt, g.ajax = Yt = !!Yt, S.ajaxTransport((function (t) {
                var n, i;
                if (g.cors || Yt && !t.crossDomain) return {
                    send: function (r, o) {
                        var a, s = t.xhr();
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) s.setRequestHeader(a, r[a]);
                        n = function (e) {
                            return function () {
                                n && (n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = n(), i = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                            4 === s.readyState && e.setTimeout((function () {
                                n && i()
                            }))
                        }, n = n("abort");
                        try {
                            s.send(t.hasContent && t.data || null)
                        } catch (e) {
                            if (n) throw e
                        }
                    },
                    abort: function () {
                        n && n()
                    }
                }
            })), S.ajaxPrefilter((function (e) {
                e.crossDomain && (e.contents.script = !1)
            })), S.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function (e) {
                        return S.globalEval(e), e
                    }
                }
            }), S.ajaxPrefilter("script", (function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            })), S.ajaxTransport("script", (function (e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function (i, r) {
                        t = S("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), y.head.appendChild(t[0])
                    },
                    abort: function () {
                        n && n()
                    }
                }
            }));
            var zt, Xt = [],
                Ut = /(=)\?(?=&|$)|\?\?/;
            S.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Xt.pop() || S.expando + "_" + Ct.guid++;
                    return this[e] = !0, e
                }
            }), S.ajaxPrefilter("json jsonp", (function (t, n, i) {
                var r, o, a, s = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ut, "$1" + r) : !1 !== t.jsonp && (t.url += (_t.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                    return a || S.error(r + " was not called"), a[0]
                }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
                    a = arguments
                }, i.always((function () {
                    void 0 === o ? S(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Xt.push(r)), a && v(o) && o(a[0]), a = o = void 0
                })), "script"
            })), g.createHTMLDocument = ((zt = y.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === zt.childNodes.length), S.parseHTML = function (e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((i = (t = y.implementation.createHTMLDocument("")).createElement("base")).href = y.location.href, t.head.appendChild(i)) : t = y), o = !n && [], (r = A.exec(e)) ? [t.createElement(r[1])] : (r = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], r.childNodes)));
                var i, r, o
            }, S.fn.load = function (e, t, n) {
                var i, o, a, s = this,
                    l = e.indexOf(" ");
                return l > -1 && (i = mt(e.slice(l)), e = e.slice(0, l)), v(t) ? (n = t, t = void 0) : t && "object" === r(t) && (o = "POST"), s.length > 0 && S.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done((function (e) {
                    a = arguments, s.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e)
                })).always(n && function (e, t) {
                    s.each((function () {
                        n.apply(this, a || [e.responseText, t, e])
                    }))
                }), this
            }, S.expr.pseudos.animated = function (e) {
                return S.grep(S.timers, (function (t) {
                    return e === t.elem
                })).length
            }, S.offset = {
                setOffset: function (e, t, n) {
                    var i, r, o, a, s, l, c = S.css(e, "position"),
                        u = S(e),
                        f = {};
                    "static" === c && (e.style.position = "relative"), s = u.offset(), o = S.css(e, "top"), l = S.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (a = (i = u.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), v(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), u.css(f))
                }
            }, S.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                        S.offset.setOffset(this, e, t)
                    }));
                    var t, n, i = this[0];
                    return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function () {
                    if (this[0]) {
                        var e, t, n, i = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === S.css(i, "position")) t = i.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
                            e && e !== i && 1 === e.nodeType && ((r = S(e).offset()).top += S.css(e, "borderTopWidth", !0), r.left += S.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - r.top - S.css(i, "marginTop", !0),
                            left: t.left - r.left - S.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map((function () {
                        for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
                        return e || re
                    }))
                }
            }), S.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function (e, t) {
                var n = "pageYOffset" === t;
                S.fn[e] = function (i) {
                    return q(this, (function (e, i, r) {
                        var o;
                        if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
                    }), e, i, arguments.length)
                }
            })), S.each(["top", "left"], (function (e, t) {
                S.cssHooks[t] = Ye(g.pixelPosition, (function (e, n) {
                    if (n) return n = Ve(e, t), Fe.test(n) ? S(e).position()[t] + "px" : n
                }))
            })), S.each({
                Height: "height",
                Width: "width"
            }, (function (e, t) {
                S.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function (n, i) {
                    S.fn[i] = function (r, o) {
                        var a = arguments.length && (n || "boolean" != typeof r),
                            s = n || (!0 === r || !0 === o ? "margin" : "border");
                        return q(this, (function (t, n, r) {
                            var o;
                            return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? S.css(t, n, s) : S.style(t, n, r, s)
                        }), t, a ? r : void 0, a)
                    }
                }))
            })), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
                S.fn[t] = function (e) {
                    return this.on(t, e)
                }
            })), S.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
                S.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }));
            var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            S.proxy = function (e, t) {
                var n, i, r;
                if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return i = a.call(arguments, 2), (r = function () {
                    return e.apply(t || this, i.concat(a.call(arguments)))
                }).guid = e.guid = e.guid || S.guid++, r
            }, S.holdReady = function (e) {
                e ? S.readyWait++ : S.ready(!0)
            }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = O, S.isFunction = v, S.isWindow = m, S.camelCase = X, S.type = x, S.now = Date.now, S.isNumeric = function (e) {
                var t = S.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, S.trim = function (e) {
                return null == e ? "" : (e + "").replace(Qt, "")
            }, "function" == typeof define && n(24) && define("jquery", [], (function () {
                return S
            }));
            var Gt = e.jQuery,
                Kt = e.$;
            return S.noConflict = function (t) {
                return e.$ === S && (e.$ = Kt), t && e.jQuery === S && (e.jQuery = Gt), S
            }, void 0 === t && (e.jQuery = e.$ = S), S
        }, "object" === r(e) && "object" === r(e.exports) ? e.exports = t.document ? i(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return i(e)
        } : i(t)
    }).call(this, n(27)(e))
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(160),
        o = n(20),
        a = n(5),
        s = n(37),
        l = n(87);
    i({
        target: "Array",
        proto: !0
    }, {
        flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
                t = o(this),
                n = a(t.length),
                i = l(t, 0);
            return i.length = r(i, t, t, n, 0, void 0 === e ? 1 : s(e)), i
        }
    })
}, function (e, t, n) {
    "use strict";
    var i = n(57),
        r = n(5),
        o = n(73),
        a = function (e, t, n, s, l, c, u, f) {
            for (var d, h = l, p = 0, g = !!u && o(u, f, 3); p < s;) {
                if (p in n) {
                    if (d = g ? g(n[p], p, t) : n[p], c > 0 && i(d)) h = a(e, t, d, r(d.length), h, c - 1) - 1;
                    else {
                        if (h >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                        e[h] = d
                    }
                    h++
                }
                p++
            }
            return h
        };
    e.exports = a
}, function (e, t, n) {
    n(63)("flat")
}, function (e, t, n) {
    "use strict";
    (function (e, t) {
        var i;
        n(10), n(16), n(17), n(31), n(36), n(6), n(142), n(38), n(12), n(8), n(32), n(111), n(90), n(28), n(140), n(60), n(54), n(107), n(44), n(7), n(46), n(43), n(164), n(14), n(18), n(42), n(35), n(139), n(30), n(53), n(40), n(19);

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        /**!
         * @fileOverview Kickass library to create and place poppers near their reference elements.
         * @version 1.14.7
         * @license
         * Copyright (c) 2016 Federico Zivolo and contributors
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE.
         */
        i = function () {
            for (var t = "undefined" != typeof window && "undefined" != typeof document, n = ["Edge", "Trident", "Firefox"], i = 0, r = 0; r < n.length; r += 1)
                if (t && navigator.userAgent.indexOf(n[r]) >= 0) {
                    i = 1;
                    break
                } var o = t && window.Promise ? function (e) {
                var t = !1;
                return function () {
                    t || (t = !0, window.Promise.resolve().then((function () {
                        t = !1, e()
                    })))
                }
            } : function (e) {
                var t = !1;
                return function () {
                    t || (t = !0, setTimeout((function () {
                        t = !1, e()
                    }), i))
                }
            };

            function a(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }

            function s(e, t) {
                if (1 !== e.nodeType) return [];
                var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                return t ? n[t] : n
            }

            function l(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }

            function c(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case "HTML":
                    case "BODY":
                        return e.ownerDocument.body;
                    case "#document":
                        return e.body
                }
                var t = s(e),
                    n = t.overflow,
                    i = t.overflowX,
                    r = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + r + i) ? e : c(l(e))
            }
            var u = t && !(!window.MSInputMethodContext || !document.documentMode),
                f = t && /MSIE 10/.test(navigator.userAgent);

            function d(e) {
                return 11 === e ? u : 10 === e ? f : u || f
            }

            function h(e) {
                if (!e) return document.documentElement;
                for (var t = d(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? h(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
            }

            function p(e) {
                return null !== e.parentNode ? p(e.parentNode) : e
            }

            function g(e, t) {
                if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = n ? e : t,
                    r = n ? t : e,
                    o = document.createRange();
                o.setStart(i, 0), o.setEnd(r, 0);
                var a, s, l = o.commonAncestorContainer;
                if (e !== l && t !== l || i.contains(r)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && h(a.firstElementChild) !== a ? h(l) : l;
                var c = p(e);
                return c.host ? g(c.host, t) : g(e, p(t).host)
            }

            function v(e) {
                var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                    n = e.nodeName;
                if ("BODY" === n || "HTML" === n) {
                    var i = e.ownerDocument.documentElement;
                    return (e.ownerDocument.scrollingElement || i)[t]
                }
                return e[t]
            }

            function m(e, t) {
                var n = "x" === t ? "Left" : "Top",
                    i = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
            }

            function y(e, t, n, i) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], d(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
            }

            function b(e) {
                var t = e.body,
                    n = e.documentElement,
                    i = d(10) && getComputedStyle(n);
                return {
                    height: y("Height", t, n, i),
                    width: y("Width", t, n, i)
                }
            }
            var w = function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                x = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                S = function (e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                },
                k = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                };

            function C(e) {
                return k({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                })
            }

            function _(e) {
                var t = {};
                try {
                    if (d(10)) {
                        t = e.getBoundingClientRect();
                        var n = v(e, "top"),
                            i = v(e, "left");
                        t.top += n, t.left += i, t.bottom += n, t.right += i
                    } else t = e.getBoundingClientRect()
                } catch (e) {}
                var r = {
                        left: t.left,
                        top: t.top,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    },
                    o = "HTML" === e.nodeName ? b(e.ownerDocument) : {},
                    a = o.width || e.clientWidth || r.right - r.left,
                    l = o.height || e.clientHeight || r.bottom - r.top,
                    c = e.offsetWidth - a,
                    u = e.offsetHeight - l;
                if (c || u) {
                    var f = s(e);
                    c -= m(f, "x"), u -= m(f, "y"), r.width -= c, r.height -= u
                }
                return C(r)
            }

            function E(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = d(10),
                    r = "HTML" === t.nodeName,
                    o = _(e),
                    a = _(t),
                    l = c(e),
                    u = s(t),
                    f = parseFloat(u.borderTopWidth, 10),
                    h = parseFloat(u.borderLeftWidth, 10);
                n && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                var p = C({
                    top: o.top - a.top - f,
                    left: o.left - a.left - h,
                    width: o.width,
                    height: o.height
                });
                if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
                    var g = parseFloat(u.marginTop, 10),
                        m = parseFloat(u.marginLeft, 10);
                    p.top -= f - g, p.bottom -= f - g, p.left -= h - m, p.right -= h - m, p.marginTop = g, p.marginLeft = m
                }
                return (i && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (p = function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = v(t, "top"),
                        r = v(t, "left"),
                        o = n ? -1 : 1;
                    return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
                }(p, t)), p
            }

            function T(e) {
                if (!e || !e.parentElement || d()) return document.documentElement;
                for (var t = e.parentElement; t && "none" === s(t, "transform");) t = t.parentElement;
                return t || document.documentElement
            }

            function O(e, t, n, i) {
                var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    o = {
                        top: 0,
                        left: 0
                    },
                    a = r ? T(e) : g(e, t);
                if ("viewport" === i) o = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.ownerDocument.documentElement,
                        i = E(e, n),
                        r = Math.max(n.clientWidth, window.innerWidth || 0),
                        o = Math.max(n.clientHeight, window.innerHeight || 0),
                        a = t ? 0 : v(n),
                        s = t ? 0 : v(n, "left");
                    return C({
                        top: a - i.top + i.marginTop,
                        left: s - i.left + i.marginLeft,
                        width: r,
                        height: o
                    })
                }(a, r);
                else {
                    var u = void 0;
                    "scrollParent" === i ? "BODY" === (u = c(l(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === i ? e.ownerDocument.documentElement : i;
                    var f = E(u, a, r);
                    if ("HTML" !== u.nodeName || function e(t) {
                            var n = t.nodeName;
                            if ("BODY" === n || "HTML" === n) return !1;
                            if ("fixed" === s(t, "position")) return !0;
                            var i = l(t);
                            return !!i && e(i)
                        }(a)) o = f;
                    else {
                        var d = b(e.ownerDocument),
                            h = d.height,
                            p = d.width;
                        o.top += f.top - f.marginTop, o.bottom = h + f.top, o.left += f.left - f.marginLeft, o.right = p + f.left
                    }
                }
                var m = "number" == typeof (n = n || 0);
                return o.left += m ? n : n.left || 0, o.top += m ? n : n.top || 0, o.right -= m ? n : n.right || 0, o.bottom -= m ? n : n.bottom || 0, o
            }

            function A(e, t, n, i, r) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto")) return e;
                var a = O(n, i, o, r),
                    s = {
                        top: {
                            width: a.width,
                            height: t.top - a.top
                        },
                        right: {
                            width: a.right - t.right,
                            height: a.height
                        },
                        bottom: {
                            width: a.width,
                            height: a.bottom - t.bottom
                        },
                        left: {
                            width: t.left - a.left,
                            height: a.height
                        }
                    },
                    l = Object.keys(s).map((function (e) {
                        return k({
                            key: e
                        }, s[e], {
                            area: (t = s[e], t.width * t.height)
                        });
                        var t
                    })).sort((function (e, t) {
                        return t.area - e.area
                    })),
                    c = l.filter((function (e) {
                        var t = e.width,
                            i = e.height;
                        return t >= n.clientWidth && i >= n.clientHeight
                    })),
                    u = c.length > 0 ? c[0].key : l[0].key,
                    f = e.split("-")[1];
                return u + (f ? "-" + f : "")
            }

            function $(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return E(n, i ? T(t) : g(t, n), i)
            }

            function L(e) {
                var t = e.ownerDocument.defaultView.getComputedStyle(e),
                    n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                    i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return {
                    width: e.offsetWidth + i,
                    height: e.offsetHeight + n
                }
            }

            function P(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, (function (e) {
                    return t[e]
                }))
            }

            function j(e, t, n) {
                n = n.split("-")[0];
                var i = L(e),
                    r = {
                        width: i.width,
                        height: i.height
                    },
                    o = -1 !== ["right", "left"].indexOf(n),
                    a = o ? "top" : "left",
                    s = o ? "left" : "top",
                    l = o ? "height" : "width",
                    c = o ? "width" : "height";
                return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[c] : t[P(s)], r
            }

            function D(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }

            function N(e, t, n) {
                return (void 0 === n ? e : e.slice(0, function (e, t, n) {
                    if (Array.prototype.findIndex) return e.findIndex((function (e) {
                        return e[t] === n
                    }));
                    var i = D(e, (function (e) {
                        return e[t] === n
                    }));
                    return e.indexOf(i)
                }(e, "name", n))).forEach((function (e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = e.function || e.fn;
                    e.enabled && a(n) && (t.offsets.popper = C(t.offsets.popper), t.offsets.reference = C(t.offsets.reference), t = n(t, e))
                })), t
            }

            function I() {
                if (!this.state.isDestroyed) {
                    var e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    e.offsets.reference = $(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = A(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = j(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                }
            }

            function M(e, t) {
                return e.some((function (e) {
                    var n = e.name;
                    return e.enabled && n === t
                }))
            }

            function R(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                    var r = t[i],
                        o = r ? "" + r + n : e;
                    if (void 0 !== document.body.style[o]) return o
                }
                return null
            }

            function H() {
                return this.state.isDestroyed = !0, M(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[R("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
            }

            function F(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }

            function W(e, t, n, i) {
                n.updateBound = i, F(e).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var r = c(e);
                return function e(t, n, i, r) {
                    var o = "BODY" === t.nodeName,
                        a = o ? t.ownerDocument.defaultView : t;
                    a.addEventListener(n, i, {
                        passive: !0
                    }), o || e(c(a.parentNode), n, i, r), r.push(a)
                }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
            }

            function B() {
                this.state.eventsEnabled || (this.state = W(this.reference, this.options, this.state, this.scheduleUpdate))
            }

            function q() {
                var e, t;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, F(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function (e) {
                    e.removeEventListener("scroll", t.updateBound)
                })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
            }

            function V(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }

            function Y(e, t) {
                Object.keys(t).forEach((function (n) {
                    var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && V(t[n]) && (i = "px"), e.style[n] = t[n] + i
                }))
            }
            var z = t && /Firefox/i.test(navigator.userAgent);

            function X(e, t, n) {
                var i = D(e, (function (e) {
                        return e.name === t
                    })),
                    r = !!i && e.some((function (e) {
                        return e.name === n && e.enabled && e.order < i.order
                    }));
                if (!r) {
                    var o = "`" + t + "`",
                        a = "`" + n + "`";
                    console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                }
                return r
            }
            var U = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                Q = U.slice(3);

            function G(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = Q.indexOf(e),
                    i = Q.slice(n + 1).concat(Q.slice(0, n));
                return t ? i.reverse() : i
            }
            var K = {
                FLIP: "flip",
                CLOCKWISE: "clockwise",
                COUNTERCLOCKWISE: "counterclockwise"
            };

            function J(e, t, n, i) {
                var r = [0, 0],
                    o = -1 !== ["right", "left"].indexOf(i),
                    a = e.split(/(\+|\-)/).map((function (e) {
                        return e.trim()
                    })),
                    s = a.indexOf(D(a, (function (e) {
                        return -1 !== e.search(/,|\s/)
                    })));
                a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    c = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
                return (c = c.map((function (e, i) {
                    var r = (1 === i ? !o : o) ? "height" : "width",
                        a = !1;
                    return e.reduce((function (e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                    }), []).map((function (e) {
                        return function (e, t, n, i) {
                            var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                o = +r[1],
                                a = r[2];
                            if (!o) return e;
                            if (0 === a.indexOf("%")) {
                                var s = void 0;
                                switch (a) {
                                    case "%p":
                                        s = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        s = i
                                }
                                return C(s)[t] / 100 * o
                            }
                            return "vh" === a || "vw" === a ? ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                        }(e, r, t, n)
                    }))
                }))).forEach((function (e, t) {
                    e.forEach((function (n, i) {
                        V(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                    }))
                })), r
            }
            var Z = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function () {},
                    onUpdate: function () {},
                    modifiers: {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function (e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = t.split("-")[1];
                                if (i) {
                                    var r = e.offsets,
                                        o = r.reference,
                                        a = r.popper,
                                        s = -1 !== ["bottom", "top"].indexOf(n),
                                        l = s ? "left" : "top",
                                        c = s ? "width" : "height",
                                        u = {
                                            start: S({}, l, o[l]),
                                            end: S({}, l, o[l] + o[c] - a[c])
                                        };
                                    e.offsets.popper = k({}, a, u[i])
                                }
                                return e
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function (e, t) {
                                var n = t.offset,
                                    i = e.placement,
                                    r = e.offsets,
                                    o = r.popper,
                                    a = r.reference,
                                    s = i.split("-")[0],
                                    l = void 0;
                                return l = V(+n) ? [+n, 0] : J(n, o, a, s), "left" === s ? (o.top += l[0], o.left -= l[1]) : "right" === s ? (o.top += l[0], o.left += l[1]) : "top" === s ? (o.left += l[0], o.top -= l[1]) : "bottom" === s && (o.left += l[0], o.top += l[1]), e.popper = o, e
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function (e, t) {
                                var n = t.boundariesElement || h(e.instance.popper);
                                e.instance.reference === n && (n = h(n));
                                var i = R("transform"),
                                    r = e.instance.popper.style,
                                    o = r.top,
                                    a = r.left,
                                    s = r[i];
                                r.top = "", r.left = "", r[i] = "";
                                var l = O(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                                r.top = o, r.left = a, r[i] = s, t.boundaries = l;
                                var c = t.priority,
                                    u = e.offsets.popper,
                                    f = {
                                        primary: function (e) {
                                            var n = u[e];
                                            return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), S({}, e, n)
                                        },
                                        secondary: function (e) {
                                            var n = "right" === e ? "left" : "top",
                                                i = u[n];
                                            return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), S({}, n, i)
                                        }
                                    };
                                return c.forEach((function (e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    u = k({}, u, f[t](e))
                                })), e.offsets.popper = u, e
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function (e) {
                                var t = e.offsets,
                                    n = t.popper,
                                    i = t.reference,
                                    r = e.placement.split("-")[0],
                                    o = Math.floor,
                                    a = -1 !== ["top", "bottom"].indexOf(r),
                                    s = a ? "right" : "bottom",
                                    l = a ? "left" : "top",
                                    c = a ? "width" : "height";
                                return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function (e, t) {
                                var n;
                                if (!X(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                var i = t.element;
                                if ("string" == typeof i) {
                                    if (!(i = e.instance.popper.querySelector(i))) return e
                                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                var r = e.placement.split("-")[0],
                                    o = e.offsets,
                                    a = o.popper,
                                    l = o.reference,
                                    c = -1 !== ["left", "right"].indexOf(r),
                                    u = c ? "height" : "width",
                                    f = c ? "Top" : "Left",
                                    d = f.toLowerCase(),
                                    h = c ? "left" : "top",
                                    p = c ? "bottom" : "right",
                                    g = L(i)[u];
                                l[p] - g < a[d] && (e.offsets.popper[d] -= a[d] - (l[p] - g)), l[d] + g > a[p] && (e.offsets.popper[d] += l[d] + g - a[p]), e.offsets.popper = C(e.offsets.popper);
                                var v = l[d] + l[u] / 2 - g / 2,
                                    m = s(e.instance.popper),
                                    y = parseFloat(m["margin" + f], 10),
                                    b = parseFloat(m["border" + f + "Width"], 10),
                                    w = v - e.offsets.popper[d] - y - b;
                                return w = Math.max(Math.min(a[u] - g, w), 0), e.arrowElement = i, e.offsets.arrow = (S(n = {}, d, Math.round(w)), S(n, h, ""), n), e
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function (e, t) {
                                if (M(e.instance.modifiers, "inner")) return e;
                                if (e.flipped && e.placement === e.originalPlacement) return e;
                                var n = O(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                    i = e.placement.split("-")[0],
                                    r = P(i),
                                    o = e.placement.split("-")[1] || "",
                                    a = [];
                                switch (t.behavior) {
                                    case K.FLIP:
                                        a = [i, r];
                                        break;
                                    case K.CLOCKWISE:
                                        a = G(i);
                                        break;
                                    case K.COUNTERCLOCKWISE:
                                        a = G(i, !0);
                                        break;
                                    default:
                                        a = t.behavior
                                }
                                return a.forEach((function (s, l) {
                                    if (i !== s || a.length === l + 1) return e;
                                    i = e.placement.split("-")[0], r = P(i);
                                    var c = e.offsets.popper,
                                        u = e.offsets.reference,
                                        f = Math.floor,
                                        d = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom),
                                        h = f(c.left) < f(n.left),
                                        p = f(c.right) > f(n.right),
                                        g = f(c.top) < f(n.top),
                                        v = f(c.bottom) > f(n.bottom),
                                        m = "left" === i && h || "right" === i && p || "top" === i && g || "bottom" === i && v,
                                        y = -1 !== ["top", "bottom"].indexOf(i),
                                        b = !!t.flipVariations && (y && "start" === o && h || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && v);
                                    (d || m || b) && (e.flipped = !0, (d || m) && (i = a[l + 1]), b && (o = function (e) {
                                        return "end" === e ? "start" : "start" === e ? "end" : e
                                    }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = k({}, e.offsets.popper, j(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, "flip"))
                                })), e
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport"
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function (e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = e.offsets,
                                    r = i.popper,
                                    o = i.reference,
                                    a = -1 !== ["left", "right"].indexOf(n),
                                    s = -1 === ["top", "left"].indexOf(n);
                                return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), e.placement = P(t), e.offsets.popper = C(r), e
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function (e) {
                                if (!X(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                var t = e.offsets.reference,
                                    n = D(e.instance.modifiers, (function (e) {
                                        return "preventOverflow" === e.name
                                    })).boundaries;
                                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                    if (!0 === e.hide) return e;
                                    e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === e.hide) return e;
                                    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                }
                                return e
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function (e, t) {
                                var n = t.x,
                                    i = t.y,
                                    r = e.offsets.popper,
                                    o = D(e.instance.modifiers, (function (e) {
                                        return "applyStyle" === e.name
                                    })).gpuAcceleration;
                                void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var a = void 0 !== o ? o : t.gpuAcceleration,
                                    s = h(e.instance.popper),
                                    l = _(s),
                                    c = {
                                        position: r.position
                                    },
                                    u = function (e, t) {
                                        var n = e.offsets,
                                            i = n.popper,
                                            r = n.reference,
                                            o = Math.round,
                                            a = Math.floor,
                                            s = function (e) {
                                                return e
                                            },
                                            l = o(r.width),
                                            c = o(i.width),
                                            u = -1 !== ["left", "right"].indexOf(e.placement),
                                            f = -1 !== e.placement.indexOf("-"),
                                            d = t ? u || f || l % 2 == c % 2 ? o : a : s,
                                            h = t ? o : s;
                                        return {
                                            left: d(l % 2 == 1 && c % 2 == 1 && !f && t ? i.left - 1 : i.left),
                                            top: h(i.top),
                                            bottom: h(i.bottom),
                                            right: d(i.right)
                                        }
                                    }(e, window.devicePixelRatio < 2 || !z),
                                    f = "bottom" === n ? "top" : "bottom",
                                    d = "right" === i ? "left" : "right",
                                    p = R("transform"),
                                    g = void 0,
                                    v = void 0;
                                if (v = "bottom" === f ? "HTML" === s.nodeName ? -s.clientHeight + u.bottom : -l.height + u.bottom : u.top, g = "right" === d ? "HTML" === s.nodeName ? -s.clientWidth + u.right : -l.width + u.right : u.left, a && p) c[p] = "translate3d(" + g + "px, " + v + "px, 0)", c[f] = 0, c[d] = 0, c.willChange = "transform";
                                else {
                                    var m = "bottom" === f ? -1 : 1,
                                        y = "right" === d ? -1 : 1;
                                    c[f] = v * m, c[d] = g * y, c.willChange = f + ", " + d
                                }
                                var b = {
                                    "x-placement": e.placement
                                };
                                return e.attributes = k({}, b, e.attributes), e.styles = k({}, c, e.styles), e.arrowStyles = k({}, e.offsets.arrow, e.arrowStyles), e
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function (e) {
                                var t, n;
                                return Y(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function (e) {
                                    !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                })), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e
                            },
                            onLoad: function (e, t, n, i, r) {
                                var o = $(r, t, e, n.positionFixed),
                                    a = A(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return t.setAttribute("x-placement", a), Y(t, {
                                    position: n.positionFixed ? "fixed" : "absolute"
                                }), n
                            },
                            gpuAcceleration: void 0
                        }
                    }
                },
                ee = function () {
                    function e(t, n) {
                        var i = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        w(this, e), this.scheduleUpdate = function () {
                            return requestAnimationFrame(i.update)
                        }, this.update = o(this.update.bind(this)), this.options = k({}, e.Defaults, r), this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(k({}, e.Defaults.modifiers, r.modifiers)).forEach((function (t) {
                            i.options.modifiers[t] = k({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
                        })), this.modifiers = Object.keys(this.options.modifiers).map((function (e) {
                            return k({
                                name: e
                            }, i.options.modifiers[e])
                        })).sort((function (e, t) {
                            return e.order - t.order
                        })), this.modifiers.forEach((function (e) {
                            e.enabled && a(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                        })), this.update();
                        var s = this.options.eventsEnabled;
                        s && this.enableEventListeners(), this.state.eventsEnabled = s
                    }
                    return x(e, [{
                        key: "update",
                        value: function () {
                            return I.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            return H.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function () {
                            return B.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function () {
                            return q.call(this)
                        }
                    }]), e
                }();
            return ee.Utils = ("undefined" != typeof window ? window : e).PopperUtils, ee.placements = U, ee.Defaults = Z, ee
        }, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) && void 0 !== t ? t.exports = i() : "function" == typeof define && n(24) ? define(i) : window.Popper = i()
    }).call(this, n(91), n(27)(e))
}, function (e, t, n) {
    "use strict";
    var i = n(9),
        r = n(2),
        o = n(71),
        a = n(99),
        s = n(83),
        l = n(20),
        c = n(68),
        u = Object.assign;
    e.exports = !u || r((function () {
        var e = {},
            t = {},
            n = Symbol();
        return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function (e) {
            t[e] = e
        })), 7 != u({}, e)[n] || "abcdefghijklmnopqrst" != o(u({}, t)).join("")
    })) ? function (e, t) {
        for (var n = l(e), r = arguments.length, u = 1, f = a.f, d = s.f; r > u;)
            for (var h, p = c(arguments[u++]), g = f ? o(p).concat(f(p)) : o(p), v = g.length, m = 0; v > m;) h = g[m++], i && !d.call(p, h) || (n[h] = p[h]);
        return n
    } : u
}, function (e, t, n) {
    "use strict";
    var i, r, o, a, s = n(0),
        l = n(69),
        c = n(1),
        u = n(98),
        f = n(165),
        d = n(34),
        h = n(131),
        p = n(59),
        g = n(101),
        v = n(15),
        m = n(58),
        y = n(102),
        b = n(41),
        w = n(166),
        x = n(129),
        S = n(51),
        k = n(132).set,
        C = n(167),
        _ = n(168),
        E = n(169),
        T = n(133),
        O = n(170),
        A = n(103),
        $ = n(49),
        L = n(86),
        P = n(4)("species"),
        j = "Promise",
        D = $.get,
        N = $.set,
        I = $.getterFor(j),
        M = f,
        R = c.TypeError,
        H = c.document,
        F = c.process,
        W = c.fetch,
        B = F && F.versions,
        q = B && B.v8 || "",
        V = T.f,
        Y = V,
        z = "process" == b(F),
        X = !!(H && H.createEvent && c.dispatchEvent),
        U = L(j, (function () {
            var e = M.resolve(1),
                t = function () {},
                n = (e.constructor = {})[P] = function (e) {
                    e(t, t)
                };
            return !((z || "function" == typeof PromiseRejectionEvent) && (!l || e.finally) && e.then(t) instanceof n && 0 !== q.indexOf("6.6") && -1 === A.indexOf("Chrome/66"))
        })),
        Q = U || !x((function (e) {
            M.all(e).catch((function () {}))
        })),
        G = function (e) {
            var t;
            return !(!v(e) || "function" != typeof (t = e.then)) && t
        },
        K = function (e, t, n) {
            if (!t.notified) {
                t.notified = !0;
                var i = t.reactions;
                C((function () {
                    for (var r = t.value, o = 1 == t.state, a = 0; i.length > a;) {
                        var s, l, c, u = i[a++],
                            f = o ? u.ok : u.fail,
                            d = u.resolve,
                            h = u.reject,
                            p = u.domain;
                        try {
                            f ? (o || (2 === t.rejection && te(e, t), t.rejection = 1), !0 === f ? s = r : (p && p.enter(), s = f(r), p && (p.exit(), c = !0)), s === u.promise ? h(R("Promise-chain cycle")) : (l = G(s)) ? l.call(s, d, h) : d(s)) : h(r)
                        } catch (e) {
                            p && !c && p.exit(), h(e)
                        }
                    }
                    t.reactions = [], t.notified = !1, n && !t.rejection && Z(e, t)
                }))
            }
        },
        J = function (e, t, n) {
            var i, r;
            X ? ((i = H.createEvent("Event")).promise = t, i.reason = n, i.initEvent(e, !1, !0), c.dispatchEvent(i)) : i = {
                promise: t,
                reason: n
            }, (r = c["on" + e]) ? r(i) : "unhandledrejection" === e && E("Unhandled promise rejection", n)
        },
        Z = function (e, t) {
            k.call(c, (function () {
                var n, i = t.value;
                if (ee(t) && (n = O((function () {
                        z ? F.emit("unhandledRejection", i, e) : J("unhandledrejection", e, i)
                    })), t.rejection = z || ee(t) ? 2 : 1, n.error)) throw n.value
            }))
        },
        ee = function (e) {
            return 1 !== e.rejection && !e.parent
        },
        te = function (e, t) {
            k.call(c, (function () {
                z ? F.emit("rejectionHandled", e) : J("rejectionhandled", e, t.value)
            }))
        },
        ne = function (e, t, n, i) {
            return function (r) {
                e(t, n, r, i)
            }
        },
        ie = function (e, t, n, i) {
            t.done || (t.done = !0, i && (t = i), t.value = n, t.state = 2, K(e, t, !0))
        },
        re = function (e, t, n, i) {
            if (!t.done) {
                t.done = !0, i && (t = i);
                try {
                    if (e === n) throw R("Promise can't be resolved itself");
                    var r = G(n);
                    r ? C((function () {
                        var i = {
                            done: !1
                        };
                        try {
                            r.call(n, ne(re, e, i, t), ne(ie, e, i, t))
                        } catch (n) {
                            ie(e, i, n, t)
                        }
                    })) : (t.value = n, t.state = 1, K(e, t, !1))
                } catch (n) {
                    ie(e, {
                        done: !1
                    }, n, t)
                }
            }
        };
    U && (M = function (e) {
        y(this, M, j), m(e), i.call(this);
        var t = D(this);
        try {
            e(ne(re, this, t), ne(ie, this, t))
        } catch (e) {
            ie(this, t, e)
        }
    }, (i = function (e) {
        N(this, {
            type: j,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = h(M.prototype, {
        then: function (e, t) {
            var n = I(this),
                i = V(S(this, M));
            return i.ok = "function" != typeof e || e, i.fail = "function" == typeof t && t, i.domain = z ? F.domain : void 0, n.parent = !0, n.reactions.push(i), 0 != n.state && K(this, n, !1), i.promise
        },
        catch: function (e) {
            return this.then(void 0, e)
        }
    }), r = function () {
        var e = new i,
            t = D(e);
        this.promise = e, this.resolve = ne(re, e, t), this.reject = ne(ie, e, t)
    }, T.f = V = function (e) {
        return e === M || e === o ? new r(e) : Y(e)
    }, l || "function" != typeof f || (a = f.prototype.then, d(f.prototype, "then", (function (e, t) {
        var n = this;
        return new M((function (e, t) {
            a.call(n, e, t)
        })).then(e, t)
    }), {
        unsafe: !0
    }), "function" == typeof W && s({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function (e) {
            return _(M, W.apply(c, arguments))
        }
    }))), s({
        global: !0,
        wrap: !0,
        forced: U
    }, {
        Promise: M
    }), p(M, j, !1, !0), g(j), o = u.Promise, s({
        target: j,
        stat: !0,
        forced: U
    }, {
        reject: function (e) {
            var t = V(this);
            return t.reject.call(void 0, e), t.promise
        }
    }), s({
        target: j,
        stat: !0,
        forced: l || U
    }, {
        resolve: function (e) {
            return _(l && this === o ? M : this, e)
        }
    }), s({
        target: j,
        stat: !0,
        forced: Q
    }, {
        all: function (e) {
            var t = this,
                n = V(t),
                i = n.resolve,
                r = n.reject,
                o = O((function () {
                    var n = m(t.resolve),
                        o = [],
                        a = 0,
                        s = 1;
                    w(e, (function (e) {
                        var l = a++,
                            c = !1;
                        o.push(void 0), s++, n.call(t, e).then((function (e) {
                            c || (c = !0, o[l] = e, --s || i(o))
                        }), r)
                    })), --s || i(o)
                }));
            return o.error && r(o.value), n.promise
        },
        race: function (e) {
            var t = this,
                n = V(t),
                i = n.reject,
                r = O((function () {
                    var r = m(t.resolve);
                    w(e, (function (e) {
                        r.call(t, e).then(n.resolve, i)
                    }))
                }));
            return r.error && i(r.value), n.promise
        }
    })
}, function (e, t, n) {
    var i = n(1);
    e.exports = i.Promise
}, function (e, t, n) {
    var i = n(11),
        r = n(127),
        o = n(5),
        a = n(73),
        s = n(128),
        l = n(153),
        c = function (e, t) {
            this.stopped = e, this.result = t
        };
    (e.exports = function (e, t, n, u, f) {
        var d, h, p, g, v, m, y, b = a(t, n, u ? 2 : 1);
        if (f) d = e;
        else {
            if ("function" != typeof (h = s(e))) throw TypeError("Target is not iterable");
            if (r(h)) {
                for (p = 0, g = o(e.length); g > p; p++)
                    if ((v = u ? b(i(y = e[p])[0], y[1]) : b(e[p])) && v instanceof c) return v;
                return new c(!1)
            }
            d = h.call(e)
        }
        for (m = d.next; !(y = m.call(d)).done;)
            if ("object" == typeof (v = l(d, b, y.value, u)) && v && v instanceof c) return v;
        return new c(!1)
    }).stop = function (e) {
        return new c(!0, e)
    }
}, function (e, t, n) {
    var i, r, o, a, s, l, c, u, f = n(1),
        d = n(47).f,
        h = n(41),
        p = n(132).set,
        g = n(103),
        v = f.MutationObserver || f.WebKitMutationObserver,
        m = f.process,
        y = f.Promise,
        b = "process" == h(m),
        w = d(f, "queueMicrotask"),
        x = w && w.value;
    x || (i = function () {
        var e, t;
        for (b && (e = m.domain) && e.exit(); r;) {
            t = r.fn, r = r.next;
            try {
                t()
            } catch (e) {
                throw r ? a() : o = void 0, e
            }
        }
        o = void 0, e && e.enter()
    }, b ? a = function () {
        m.nextTick(i)
    } : v && !/(iphone|ipod|ipad).*applewebkit/i.test(g) ? (s = !0, l = document.createTextNode(""), new v(i).observe(l, {
        characterData: !0
    }), a = function () {
        l.data = s = !s
    }) : y && y.resolve ? (c = y.resolve(void 0), u = c.then, a = function () {
        u.call(c, i)
    }) : a = function () {
        p.call(f, i)
    }), e.exports = x || function (e) {
        var t = {
            fn: e,
            next: void 0
        };
        o && (o.next = t), r || (r = t, a()), o = t
    }
}, function (e, t, n) {
    var i = n(11),
        r = n(15),
        o = n(133);
    e.exports = function (e, t) {
        if (i(e), r(t) && t.constructor === e) return t;
        var n = o.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function (e, t, n) {
    var i = n(1);
    e.exports = function (e, t) {
        var n = i.console;
        n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return {
                error: !1,
                value: e()
            }
        } catch (e) {
            return {
                error: !0,
                value: e
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    var i, r;
    n(10), n(16), n(17), n(31), n(36), n(6), n(38), n(12), n(8), n(23), n(32), n(28), n(60), n(13), n(134), n(135), n(44), n(7), n(46), n(43), n(62), n(14), n(29), n(18), n(42), n(30), n(53), n(40), n(19);

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    /*!
     * Bootstrap v4.5.0 (https://getbootstrap.com/)
     * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    i = void 0, r = function (e, t, n) {
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function r(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function (t) {
                    a(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
        var c = "transitionend";

        function u(e) {
            var n = this,
                i = !1;
            return t(this).one(f.TRANSITION_END, (function () {
                i = !0
            })), setTimeout((function () {
                i || f.triggerTransitionEnd(n)
            }), e), this
        }
        var f = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            },
            getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : ""
                }
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function (e) {
                if (!e) return 0;
                var n = t(e).css("transition-duration"),
                    i = t(e).css("transition-delay"),
                    r = parseFloat(n),
                    o = parseFloat(i);
                return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
            },
            reflow: function (e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function (e) {
                t(e).trigger(c)
            },
            supportsTransitionEnd: function () {
                return Boolean(c)
            },
            isElement: function (e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function (e, t, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i],
                            o = t[i],
                            a = o && f.isElement(o) ? "element" : null == (s = o) ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                        if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
                    } var s
            },
            findShadowRoot: function (e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    var t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? f.findShadowRoot(e.parentNode) : null
            },
            jQueryDetection: function () {
                if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = t.fn.jquery.split(" ")[0].split(".");
                if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
            }
        };
        f.jQueryDetection(), t.fn.emulateTransitionEnd = u, t.event.special[f.TRANSITION_END] = {
            bindType: c,
            delegateType: c,
            handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        };
        var d = t.fn.alert,
            h = function () {
                function e(e) {
                    this._element = e
                }
                var n = e.prototype;
                return n.close = function (e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.alert"), this._element = null
                }, n._getRootElement = function (e) {
                    var n = f.getSelectorFromElement(e),
                        i = !1;
                    return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i
                }, n._triggerCloseEvent = function (e) {
                    var n = t.Event("close.bs.alert");
                    return t(e).trigger(n), n
                }, n._removeElement = function (e) {
                    var n = this;
                    if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                        var i = f.getTransitionDurationFromElement(e);
                        t(e).one(f.TRANSITION_END, (function (t) {
                            return n._destroyElement(e, t)
                        })).emulateTransitionEnd(i)
                    } else this._destroyElement(e)
                }, n._destroyElement = function (e) {
                    t(e).detach().trigger("closed.bs.alert").remove()
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this),
                            r = i.data("bs.alert");
                        r || (r = new e(this), i.data("bs.alert", r)), "close" === n && r[n](this)
                    }))
                }, e._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }]), e
            }();
        t(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', h._handleDismiss(new h)), t.fn.alert = h._jQueryInterface, t.fn.alert.Constructor = h, t.fn.alert.noConflict = function () {
            return t.fn.alert = d, h._jQueryInterface
        };
        var p = t.fn.button,
            g = function () {
                function e(e) {
                    this._element = e
                }
                var n = e.prototype;
                return n.toggle = function () {
                    var e = !0,
                        n = !0,
                        i = t(this._element).closest('[data-toggle="buttons"]')[0];
                    if (i) {
                        var r = this._element.querySelector('input:not([type="hidden"])');
                        if (r) {
                            if ("radio" === r.type)
                                if (r.checked && this._element.classList.contains("active")) e = !1;
                                else {
                                    var o = i.querySelector(".active");
                                    o && t(o).removeClass("active")
                                } e && ("checkbox" !== r.type && "radio" !== r.type || (r.checked = !this._element.classList.contains("active")), t(r).trigger("change")), r.focus(), n = !1
                        }
                    }
                    this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && t(this._element).toggleClass("active"))
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.button"), this._element = null
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.button");
                        i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }]), e
            }();
        t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
            var n = e.target,
                i = n;
            if (t(n).hasClass("btn") || (n = t(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) e.preventDefault();
            else {
                var r = n.querySelector('input:not([type="hidden"])');
                if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void e.preventDefault();
                "LABEL" === i.tagName && r && "checkbox" === r.type && e.preventDefault(), g._jQueryInterface.call(t(n), "toggle")
            }
        })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
            var n = t(e.target).closest(".btn")[0];
            t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
        })), t(window).on("load.bs.button.data-api", (function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
                var i = e[t],
                    r = i.querySelector('input:not([type="hidden"])');
                r.checked || r.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
            }
            for (var o = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < a; o++) {
                var s = e[o];
                "true" === s.getAttribute("aria-pressed") ? s.classList.add("active") : s.classList.remove("active")
            }
        })), t.fn.button = g._jQueryInterface, t.fn.button.Constructor = g, t.fn.button.noConflict = function () {
            return t.fn.button = p, g._jQueryInterface
        };
        var v = "carousel",
            m = ".bs.carousel",
            y = t.fn[v],
            b = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0
            },
            w = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            },
            x = ".carousel-indicators",
            S = {
                TOUCH: "touch",
                PEN: "pen"
            },
            k = function () {
                function e(e, t) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(x), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                }
                var n = e.prototype;
                return n.next = function () {
                    this._isSliding || this._slide("next")
                }, n.nextWhenVisible = function () {
                    !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                }, n.prev = function () {
                    this._isSliding || this._slide("prev")
                }, n.pause = function (e) {
                    e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (f.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, n.cycle = function (e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, n.to = function (e) {
                    var n = this;
                    this._activeElement = this._element.querySelector(".active.carousel-item");
                    var i = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding) t(this._element).one("slid.bs.carousel", (function () {
                            return n.to(e)
                        }));
                        else {
                            if (i === e) return this.pause(), void this.cycle();
                            var r = e > i ? "next" : "prev";
                            this._slide(r, this._items[e])
                        }
                }, n.dispose = function () {
                    t(this._element).off(m), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, n._getConfig = function (e) {
                    return e = l(l({}, b), e), f.typeCheckConfig(v, e, w), e
                }, n._handleSwipe = function () {
                    var e = Math.abs(this.touchDeltaX);
                    if (!(e <= 40)) {
                        var t = e / this.touchDeltaX;
                        this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                    }
                }, n._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard && t(this._element).on("keydown.bs.carousel", (function (t) {
                        return e._keydown(t)
                    })), "hover" === this._config.pause && t(this._element).on("mouseenter.bs.carousel", (function (t) {
                        return e.pause(t)
                    })).on("mouseleave.bs.carousel", (function (t) {
                        return e.cycle(t)
                    })), this._config.touch && this._addTouchEventListeners()
                }, n._addTouchEventListeners = function () {
                    var e = this;
                    if (this._touchSupported) {
                        var n = function (t) {
                                e._pointerEvent && S[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                            },
                            i = function (t) {
                                e._pointerEvent && S[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function (t) {
                                    return e.cycle(t)
                                }), 500 + e._config.interval))
                            };
                        t(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function (e) {
                            return e.preventDefault()
                        })), this._pointerEvent ? (t(this._element).on("pointerdown.bs.carousel", (function (e) {
                            return n(e)
                        })), t(this._element).on("pointerup.bs.carousel", (function (e) {
                            return i(e)
                        })), this._element.classList.add("pointer-event")) : (t(this._element).on("touchstart.bs.carousel", (function (e) {
                            return n(e)
                        })), t(this._element).on("touchmove.bs.carousel", (function (t) {
                            return function (t) {
                                t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                            }(t)
                        })), t(this._element).on("touchend.bs.carousel", (function (e) {
                            return i(e)
                        })))
                    }
                }, n._keydown = function (e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next()
                    }
                }, n._getItemIndex = function (e) {
                    return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
                }, n._getItemByDirection = function (e, t) {
                    var n = "next" === e,
                        i = "prev" === e,
                        r = this._getItemIndex(t),
                        o = this._items.length - 1;
                    if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                    var a = (r + ("prev" === e ? -1 : 1)) % this._items.length;
                    return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                }, n._triggerSlideEvent = function (e, n) {
                    var i = this._getItemIndex(e),
                        r = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                        o = t.Event("slide.bs.carousel", {
                            relatedTarget: e,
                            direction: n,
                            from: r,
                            to: i
                        });
                    return t(this._element).trigger(o), o
                }, n._setActiveIndicatorElement = function (e) {
                    if (this._indicatorsElement) {
                        var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                        t(n).removeClass("active");
                        var i = this._indicatorsElement.children[this._getItemIndex(e)];
                        i && t(i).addClass("active")
                    }
                }, n._slide = function (e, n) {
                    var i, r, o, a = this,
                        s = this._element.querySelector(".active.carousel-item"),
                        l = this._getItemIndex(s),
                        c = n || s && this._getItemByDirection(e, s),
                        u = this._getItemIndex(c),
                        d = Boolean(this._interval);
                    if ("next" === e ? (i = "carousel-item-left", r = "carousel-item-next", o = "left") : (i = "carousel-item-right", r = "carousel-item-prev", o = "right"), c && t(c).hasClass("active")) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && s && c) {
                        this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(c);
                        var h = t.Event("slid.bs.carousel", {
                            relatedTarget: c,
                            direction: o,
                            from: l,
                            to: u
                        });
                        if (t(this._element).hasClass("slide")) {
                            t(c).addClass(r), f.reflow(c), t(s).addClass(i), t(c).addClass(i);
                            var p = parseInt(c.getAttribute("data-interval"), 10);
                            p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var g = f.getTransitionDurationFromElement(s);
                            t(s).one(f.TRANSITION_END, (function () {
                                t(c).removeClass(i + " " + r).addClass("active"), t(s).removeClass("active " + r + " " + i), a._isSliding = !1, setTimeout((function () {
                                    return t(a._element).trigger(h)
                                }), 0)
                            })).emulateTransitionEnd(g)
                        } else t(s).removeClass("active"), t(c).addClass("active"), this._isSliding = !1, t(this._element).trigger(h);
                        d && this.cycle()
                    }
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.carousel"),
                            r = l(l({}, b), t(this).data());
                        "object" === o(n) && (r = l(l({}, r), n));
                        var a = "string" == typeof n ? n : r.slide;
                        if (i || (i = new e(this, r), t(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
                        else if ("string" == typeof a) {
                            if (void 0 === i[a]) throw new TypeError('No method named "' + a + '"');
                            i[a]()
                        } else r.interval && r.ride && (i.pause(), i.cycle())
                    }))
                }, e._dataApiClickHandler = function (n) {
                    var i = f.getSelectorFromElement(this);
                    if (i) {
                        var r = t(i)[0];
                        if (r && t(r).hasClass("carousel")) {
                            var o = l(l({}, t(r).data()), t(this).data()),
                                a = this.getAttribute("data-slide-to");
                            a && (o.interval = !1), e._jQueryInterface.call(t(r), o), a && t(r).data("bs.carousel").to(a), n.preventDefault()
                        }
                    }
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return b
                    }
                }]), e
            }();
        t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", k._dataApiClickHandler), t(window).on("load.bs.carousel.data-api", (function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
                var r = t(e[n]);
                k._jQueryInterface.call(r, r.data())
            }
        })), t.fn[v] = k._jQueryInterface, t.fn[v].Constructor = k, t.fn[v].noConflict = function () {
            return t.fn[v] = y, k._jQueryInterface
        };
        var C = "collapse",
            _ = t.fn[C],
            E = {
                toggle: !0,
                parent: ""
            },
            T = {
                toggle: "boolean",
                parent: "(string|element)"
            },
            O = '[data-toggle="collapse"]',
            A = function () {
                function e(e, t) {
                    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll(O)), i = 0, r = n.length; i < r; i++) {
                        var o = n[i],
                            a = f.getSelectorFromElement(o),
                            s = [].slice.call(document.querySelectorAll(a)).filter((function (t) {
                                return t === e
                            }));
                        null !== a && s.length > 0 && (this._selector = a, this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var n = e.prototype;
                return n.toggle = function () {
                    t(this._element).hasClass("show") ? this.hide() : this.show()
                }, n.show = function () {
                    var n, i, r = this;
                    if (!(this._isTransitioning || t(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function (e) {
                            return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains("collapse")
                        }))).length && (n = null), n && (i = t(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                        var o = t.Event("show.bs.collapse");
                        if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                            n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data("bs.collapse", null));
                            var a = this._getDimension();
                            t(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && t(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                            var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                                l = f.getTransitionDurationFromElement(this._element);
                            t(this._element).one(f.TRANSITION_END, (function () {
                                t(r._element).removeClass("collapsing").addClass("collapse show"), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger("shown.bs.collapse")
                            })).emulateTransitionEnd(l), this._element.style[a] = this._element[s] + "px"
                        }
                    }
                }, n.hide = function () {
                    var e = this;
                    if (!this._isTransitioning && t(this._element).hasClass("show")) {
                        var n = t.Event("hide.bs.collapse");
                        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var i = this._getDimension();
                            this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", f.reflow(this._element), t(this._element).addClass("collapsing").removeClass("collapse show");
                            var r = this._triggerArray.length;
                            if (r > 0)
                                for (var o = 0; o < r; o++) {
                                    var a = this._triggerArray[o],
                                        s = f.getSelectorFromElement(a);
                                    null !== s && (t([].slice.call(document.querySelectorAll(s))).hasClass("show") || t(a).addClass("collapsed").attr("aria-expanded", !1))
                                }
                            this.setTransitioning(!0), this._element.style[i] = "";
                            var l = f.getTransitionDurationFromElement(this._element);
                            t(this._element).one(f.TRANSITION_END, (function () {
                                e.setTransitioning(!1), t(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                            })).emulateTransitionEnd(l)
                        }
                    }
                }, n.setTransitioning = function (e) {
                    this._isTransitioning = e
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, n._getConfig = function (e) {
                    return (e = l(l({}, E), e)).toggle = Boolean(e.toggle), f.typeCheckConfig(C, e, T), e
                }, n._getDimension = function () {
                    return t(this._element).hasClass("width") ? "width" : "height"
                }, n._getParent = function () {
                    var n, i = this;
                    f.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                    var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        o = [].slice.call(n.querySelectorAll(r));
                    return t(o).each((function (t, n) {
                        i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                    })), n
                }, n._addAriaAndCollapsedClass = function (e, n) {
                    var i = t(e).hasClass("show");
                    n.length && t(n).toggleClass("collapsed", !i).attr("aria-expanded", i)
                }, e._getTargetFromElement = function (e) {
                    var t = f.getSelectorFromElement(e);
                    return t ? document.querySelector(t) : null
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this),
                            r = i.data("bs.collapse"),
                            a = l(l(l({}, E), i.data()), "object" === o(n) && n ? n : {});
                        if (!r && a.toggle && "string" == typeof n && /show|hide/.test(n) && (a.toggle = !1), r || (r = new e(this, a), i.data("bs.collapse", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return E
                    }
                }]), e
            }();
        t(document).on("click.bs.collapse.data-api", O, (function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = t(this),
                i = f.getSelectorFromElement(this),
                r = [].slice.call(document.querySelectorAll(i));
            t(r).each((function () {
                var e = t(this),
                    i = e.data("bs.collapse") ? "toggle" : n.data();
                A._jQueryInterface.call(e, i)
            }))
        })), t.fn[C] = A._jQueryInterface, t.fn[C].Constructor = A, t.fn[C].noConflict = function () {
            return t.fn[C] = _, A._jQueryInterface
        };
        var $ = "dropdown",
            L = t.fn[$],
            P = new RegExp("38|40|27"),
            j = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null
            },
            D = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string",
                popperConfig: "(null|object)"
            },
            N = function () {
                function e(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var i = e.prototype;
                return i.toggle = function () {
                    if (!this._element.disabled && !t(this._element).hasClass("disabled")) {
                        var n = t(this._menu).hasClass("show");
                        e._clearMenus(), n || this.show(!0)
                    }
                }, i.show = function (i) {
                    if (void 0 === i && (i = !1), !(this._element.disabled || t(this._element).hasClass("disabled") || t(this._menu).hasClass("show"))) {
                        var r = {
                                relatedTarget: this._element
                            },
                            o = t.Event("show.bs.dropdown", r),
                            a = e._getParentFromElement(this._element);
                        if (t(a).trigger(o), !o.isDefaultPrevented()) {
                            if (!this._inNavbar && i) {
                                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var s = this._element;
                                "parent" === this._config.reference ? s = a : f.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(a).addClass("position-static"), this._popper = new n(s, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(a).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass("show"), t(a).toggleClass("show").trigger(t.Event("shown.bs.dropdown", r))
                        }
                    }
                }, i.hide = function () {
                    if (!this._element.disabled && !t(this._element).hasClass("disabled") && t(this._menu).hasClass("show")) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = t.Event("hide.bs.dropdown", n),
                            r = e._getParentFromElement(this._element);
                        t(r).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass("show"), t(r).toggleClass("show").trigger(t.Event("hidden.bs.dropdown", n)))
                    }
                }, i.dispose = function () {
                    t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, i.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, i._addEventListeners = function () {
                    var e = this;
                    t(this._element).on("click.bs.dropdown", (function (t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle()
                    }))
                }, i._getConfig = function (e) {
                    return e = l(l(l({}, this.constructor.Default), t(this._element).data()), e), f.typeCheckConfig($, e, this.constructor.DefaultType), e
                }, i._getMenuElement = function () {
                    if (!this._menu) {
                        var t = e._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(".dropdown-menu"))
                    }
                    return this._menu
                }, i._getPlacement = function () {
                    var e = t(this._element.parentNode),
                        n = "bottom-start";
                    return e.hasClass("dropup") ? n = t(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
                }, i._detectNavbar = function () {
                    return t(this._element).closest(".navbar").length > 0
                }, i._getOffset = function () {
                    var e = this,
                        t = {};
                    return "function" == typeof this._config.offset ? t.fn = function (t) {
                        return t.offsets = l(l({}, t.offsets), e._config.offset(t.offsets, e._element) || {}), t
                    } : t.offset = this._config.offset, t
                }, i._getPopperConfig = function () {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (e.modifiers.applyStyle = {
                        enabled: !1
                    }), l(l({}, e), this._config.popperConfig)
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.dropdown"),
                            r = "object" === o(n) ? n : null;
                        if (i || (i = new e(this, r), t(this).data("bs.dropdown", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, e._clearMenus = function (n) {
                    if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                        for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), r = 0, o = i.length; r < o; r++) {
                            var a = e._getParentFromElement(i[r]),
                                s = t(i[r]).data("bs.dropdown"),
                                l = {
                                    relatedTarget: i[r]
                                };
                            if (n && "click" === n.type && (l.clickEvent = n), s) {
                                var c = s._menu;
                                if (t(a).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(a, n.target))) {
                                    var u = t.Event("hide.bs.dropdown", l);
                                    t(a).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), t(c).removeClass("show"), t(a).removeClass("show").trigger(t.Event("hidden.bs.dropdown", l)))
                                }
                            }
                        }
                }, e._getParentFromElement = function (e) {
                    var t, n = f.getSelectorFromElement(e);
                    return n && (t = document.querySelector(n)), t || e.parentNode
                }, e._dataApiKeydownHandler = function (n) {
                    if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(".dropdown-menu").length)) : P.test(n.which)) && !this.disabled && !t(this).hasClass("disabled")) {
                        var i = e._getParentFromElement(this),
                            r = t(i).hasClass("show");
                        if (r || 27 !== n.which) {
                            if (n.preventDefault(), n.stopPropagation(), !r || r && (27 === n.which || 32 === n.which)) return 27 === n.which && t(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void t(this).trigger("click");
                            var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function (e) {
                                return t(e).is(":visible")
                            }));
                            if (0 !== o.length) {
                                var a = o.indexOf(n.target);
                                38 === n.which && a > 0 && a--, 40 === n.which && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus()
                            }
                        }
                    }
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return j
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return D
                    }
                }]), e
            }();
        t(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', N._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", N._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", N._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function (e) {
            e.preventDefault(), e.stopPropagation(), N._jQueryInterface.call(t(this), "toggle")
        })).on("click.bs.dropdown.data-api", ".dropdown form", (function (e) {
            e.stopPropagation()
        })), t.fn[$] = N._jQueryInterface, t.fn[$].Constructor = N, t.fn[$].noConflict = function () {
            return t.fn[$] = L, N._jQueryInterface
        };
        var I = t.fn.modal,
            M = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            },
            R = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            },
            H = ".modal-dialog",
            F = function () {
                function e(e, t) {
                    this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(H), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                }
                var n = e.prototype;
                return n.toggle = function (e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, n.show = function (e) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        t(this._element).hasClass("fade") && (this._isTransitioning = !0);
                        var i = t.Event("show.bs.modal", {
                            relatedTarget: e
                        });
                        t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function (e) {
                            return n.hide(e)
                        })), t(this._dialog).on("mousedown.dismiss.bs.modal", (function () {
                            t(n._element).one("mouseup.dismiss.bs.modal", (function (e) {
                                t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            }))
                        })), this._showBackdrop((function () {
                            return n._showElement(e)
                        })))
                    }
                }, n.hide = function (e) {
                    var n = this;
                    if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                        var i = t.Event("hide.bs.modal");
                        if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var r = t(this._element).hasClass("fade");
                            if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off("focusin.bs.modal"), t(this._element).removeClass("show"), t(this._element).off("click.dismiss.bs.modal"), t(this._dialog).off("mousedown.dismiss.bs.modal"), r) {
                                var o = f.getTransitionDurationFromElement(this._element);
                                t(this._element).one(f.TRANSITION_END, (function (e) {
                                    return n._hideModal(e)
                                })).emulateTransitionEnd(o)
                            } else this._hideModal()
                        }
                    }
                }, n.dispose = function () {
                    [window, this._element, this._dialog].forEach((function (e) {
                        return t(e).off(".bs.modal")
                    })), t(document).off("focusin.bs.modal"), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                }, n.handleUpdate = function () {
                    this._adjustDialog()
                }, n._getConfig = function (e) {
                    return e = l(l({}, M), e), f.typeCheckConfig("modal", e, R), e
                }, n._triggerBackdropTransition = function () {
                    var e = this;
                    if ("static" === this._config.backdrop) {
                        var n = t.Event("hidePrevented.bs.modal");
                        if (t(this._element).trigger(n), n.defaultPrevented) return;
                        this._element.classList.add("modal-static");
                        var i = f.getTransitionDurationFromElement(this._element);
                        t(this._element).one(f.TRANSITION_END, (function () {
                            e._element.classList.remove("modal-static")
                        })).emulateTransitionEnd(i), this._element.focus()
                    } else this.hide()
                }, n._showElement = function (e) {
                    var n = this,
                        i = t(this._element).hasClass("fade"),
                        r = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") && r ? r.scrollTop = 0 : this._element.scrollTop = 0, i && f.reflow(this._element), t(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                    var o = t.Event("shown.bs.modal", {
                            relatedTarget: e
                        }),
                        a = function () {
                            n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                        };
                    if (i) {
                        var s = f.getTransitionDurationFromElement(this._dialog);
                        t(this._dialog).one(f.TRANSITION_END, a).emulateTransitionEnd(s)
                    } else a()
                }, n._enforceFocus = function () {
                    var e = this;
                    t(document).off("focusin.bs.modal").on("focusin.bs.modal", (function (n) {
                        document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                    }))
                }, n._setEscapeEvent = function () {
                    var e = this;
                    this._isShown ? t(this._element).on("keydown.dismiss.bs.modal", (function (t) {
                        e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
                    })) : this._isShown || t(this._element).off("keydown.dismiss.bs.modal")
                }, n._setResizeEvent = function () {
                    var e = this;
                    this._isShown ? t(window).on("resize.bs.modal", (function (t) {
                        return e.handleUpdate(t)
                    })) : t(window).off("resize.bs.modal")
                }, n._hideModal = function () {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function () {
                        t(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger("hidden.bs.modal")
                    }))
                }, n._removeBackdrop = function () {
                    this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                }, n._showBackdrop = function (e) {
                    var n = this,
                        i = t(this._element).hasClass("fade") ? "fade" : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on("click.dismiss.bs.modal", (function (e) {
                                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition()
                            })), i && f.reflow(this._backdrop), t(this._backdrop).addClass("show"), !e) return;
                        if (!i) return void e();
                        var r = f.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(f.TRANSITION_END, e).emulateTransitionEnd(r)
                    } else if (!this._isShown && this._backdrop) {
                        t(this._backdrop).removeClass("show");
                        var o = function () {
                            n._removeBackdrop(), e && e()
                        };
                        if (t(this._element).hasClass("fade")) {
                            var a = f.getTransitionDurationFromElement(this._backdrop);
                            t(this._backdrop).one(f.TRANSITION_END, o).emulateTransitionEnd(a)
                        } else o()
                    } else e && e()
                }, n._adjustDialog = function () {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, n._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, n._checkScrollbar = function () {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, n._setScrollbar = function () {
                    var e = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                            i = [].slice.call(document.querySelectorAll(".sticky-top"));
                        t(n).each((function (n, i) {
                            var r = i.style.paddingRight,
                                o = t(i).css("padding-right");
                            t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                        })), t(i).each((function (n, i) {
                            var r = i.style.marginRight,
                                o = t(i).css("margin-right");
                            t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                        }));
                        var r = document.body.style.paddingRight,
                            o = t(document.body).css("padding-right");
                        t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                    }
                    t(document.body).addClass("modal-open")
                }, n._resetScrollbar = function () {
                    var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                    t(e).each((function (e, n) {
                        var i = t(n).data("padding-right");
                        t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                    }));
                    var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    t(n).each((function (e, n) {
                        var i = t(n).data("margin-right");
                        void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                    }));
                    var i = t(document.body).data("padding-right");
                    t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
                }, n._getScrollbarWidth = function () {
                    var e = document.createElement("div");
                    e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, e._jQueryInterface = function (n, i) {
                    return this.each((function () {
                        var r = t(this).data("bs.modal"),
                            a = l(l(l({}, M), t(this).data()), "object" === o(n) && n ? n : {});
                        if (r || (r = new e(this, a), t(this).data("bs.modal", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](i)
                        } else a.show && r.show(i)
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return M
                    }
                }]), e
            }();
        t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (e) {
            var n, i = this,
                r = f.getSelectorFromElement(this);
            r && (n = document.querySelector(r));
            var o = t(n).data("bs.modal") ? "toggle" : l(l({}, t(n).data()), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var a = t(n).one("show.bs.modal", (function (e) {
                e.isDefaultPrevented() || a.one("hidden.bs.modal", (function () {
                    t(i).is(":visible") && i.focus()
                }))
            }));
            F._jQueryInterface.call(t(n), o, this)
        })), t.fn.modal = F._jQueryInterface, t.fn.modal.Constructor = F, t.fn.modal.noConflict = function () {
            return t.fn.modal = I, F._jQueryInterface
        };
        var W = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            B = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            q = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
            V = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

        function Y(e, t, n) {
            if (0 === e.length) return e;
            if (n && "function" == typeof n) return n(e);
            for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), a = function (e, n) {
                    var i = o[e],
                        a = i.nodeName.toLowerCase();
                    if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                    var s = [].slice.call(i.attributes),
                        l = [].concat(t["*"] || [], t[a] || []);
                    s.forEach((function (e) {
                        (function (e, t) {
                            var n = e.nodeName.toLowerCase();
                            if (-1 !== t.indexOf(n)) return -1 === W.indexOf(n) || Boolean(e.nodeValue.match(q) || e.nodeValue.match(V));
                            for (var i = t.filter((function (e) {
                                    return e instanceof RegExp
                                })), r = 0, o = i.length; r < o; r++)
                                if (n.match(i[r])) return !0;
                            return !1
                        })(e, l) || i.removeAttribute(e.nodeName)
                    }))
                }, s = 0, l = o.length; s < l; s++) a(s);
            return i.body.innerHTML
        }
        var z = "tooltip",
            X = t.fn.tooltip,
            U = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            Q = ["sanitize", "whiteList", "sanitizeFn"],
            G = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)"
            },
            K = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            },
            J = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: B,
                popperConfig: null
            },
            Z = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip"
            },
            ee = function () {
                function e(e, t) {
                    if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }
                var i = e.prototype;
                return i.enable = function () {
                    this._isEnabled = !0
                }, i.disable = function () {
                    this._isEnabled = !1
                }, i.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, i.toggle = function (e) {
                    if (this._isEnabled)
                        if (e) {
                            var n = this.constructor.DATA_KEY,
                                i = t(e.currentTarget).data(n);
                            i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (t(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, i.dispose = function () {
                    clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, i.show = function () {
                    var e = this;
                    if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var i = t.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        t(this.element).trigger(i);
                        var r = f.findShadowRoot(this.element),
                            o = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                        if (i.isDefaultPrevented() || !o) return;
                        var a = this.getTipElement(),
                            s = f.getUID(this.constructor.NAME);
                        a.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(a).addClass("fade");
                        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                            c = this._getAttachment(l);
                        this.addAttachmentClass(c);
                        var u = this._getContainer();
                        t(a).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(a).appendTo(u), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, this._getPopperConfig(c)), t(a).addClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                        var d = function () {
                            e.config.animation && e._fixTransition();
                            var n = e._hoverState;
                            e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
                        };
                        if (t(this.tip).hasClass("fade")) {
                            var h = f.getTransitionDurationFromElement(this.tip);
                            t(this.tip).one(f.TRANSITION_END, d).emulateTransitionEnd(h)
                        } else d()
                    }
                }, i.hide = function (e) {
                    var n = this,
                        i = this.getTipElement(),
                        r = t.Event(this.constructor.Event.HIDE),
                        o = function () {
                            "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                        };
                    if (t(this.element).trigger(r), !r.isDefaultPrevented()) {
                        if (t(i).removeClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, t(this.tip).hasClass("fade")) {
                            var a = f.getTransitionDurationFromElement(i);
                            t(i).one(f.TRANSITION_END, o).emulateTransitionEnd(a)
                        } else o();
                        this._hoverState = ""
                    }
                }, i.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, i.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, i.addAttachmentClass = function (e) {
                    t(this.getTipElement()).addClass("bs-tooltip-" + e)
                }, i.getTipElement = function () {
                    return this.tip = this.tip || t(this.config.template)[0], this.tip
                }, i.setContent = function () {
                    var e = this.getTipElement();
                    this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass("fade show")
                }, i.setElementContent = function (e, n) {
                    "object" !== o(n) || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Y(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
                }, i.getTitle = function () {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, i._getPopperConfig = function (e) {
                    var t = this;
                    return l(l({}, {
                        placement: e,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function (e) {
                            return t._handlePopperPlacementChange(e)
                        }
                    }), this.config.popperConfig)
                }, i._getOffset = function () {
                    var e = this,
                        t = {};
                    return "function" == typeof this.config.offset ? t.fn = function (t) {
                        return t.offsets = l(l({}, t.offsets), e.config.offset(t.offsets, e.element) || {}), t
                    } : t.offset = this.config.offset, t
                }, i._getContainer = function () {
                    return !1 === this.config.container ? document.body : f.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
                }, i._getAttachment = function (e) {
                    return K[e.toUpperCase()]
                }, i._setListeners = function () {
                    var e = this;
                    this.config.trigger.split(" ").forEach((function (n) {
                        if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function (t) {
                            return e.toggle(t)
                        }));
                        else if ("manual" !== n) {
                            var i = "hover" === n ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                r = "hover" === n ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            t(e.element).on(i, e.config.selector, (function (t) {
                                return e._enter(t)
                            })).on(r, e.config.selector, (function (t) {
                                return e._leave(t)
                            }))
                        }
                    })), this._hideModalHandler = function () {
                        e.element && e.hide()
                    }, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l(l({}, this.config), {}, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, i._fixTitle = function () {
                    var e = o(this.element.getAttribute("data-original-title"));
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, i._enter = function (e, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function () {
                        "show" === n._hoverState && n.show()
                    }), n.config.delay.show) : n.show())
                }, i._leave = function (e, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function () {
                        "out" === n._hoverState && n.hide()
                    }), n.config.delay.hide) : n.hide())
                }, i._isWithActiveTrigger = function () {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1
                }, i._getConfig = function (e) {
                    var n = t(this.element).data();
                    return Object.keys(n).forEach((function (e) {
                        -1 !== Q.indexOf(e) && delete n[e]
                    })), "number" == typeof (e = l(l(l({}, this.constructor.Default), n), "object" === o(e) && e ? e : {})).delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), f.typeCheckConfig(z, e, this.constructor.DefaultType), e.sanitize && (e.template = Y(e.template, e.whiteList, e.sanitizeFn)), e
                }, i._getDelegateConfig = function () {
                    var e = {};
                    if (this.config)
                        for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, i._cleanTipClass = function () {
                    var e = t(this.getTipElement()),
                        n = e.attr("class").match(U);
                    null !== n && n.length && e.removeClass(n.join(""))
                }, i._handlePopperPlacementChange = function (e) {
                    this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, i._fixTransition = function () {
                    var e = this.getTipElement(),
                        n = this.config.animation;
                    null === e.getAttribute("x-placement") && (t(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.tooltip"),
                            r = "object" === o(n) && n;
                        if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, r), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return J
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return z
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return Z
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ".bs.tooltip"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return G
                    }
                }]), e
            }();
        t.fn.tooltip = ee._jQueryInterface, t.fn.tooltip.Constructor = ee, t.fn.tooltip.noConflict = function () {
            return t.fn.tooltip = X, ee._jQueryInterface
        };
        var te = "popover",
            ne = t.fn.popover,
            ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            re = l(l({}, ee.Default), {}, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            oe = l(l({}, ee.DefaultType), {}, {
                content: "(string|element|function)"
            }),
            ae = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover"
            },
            se = function (e) {
                var n, i;

                function a() {
                    return e.apply(this, arguments) || this
                }
                i = e, (n = a).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
                var s = a.prototype;
                return s.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, s.addAttachmentClass = function (e) {
                    t(this.getTipElement()).addClass("bs-popover-" + e)
                }, s.getTipElement = function () {
                    return this.tip = this.tip || t(this.config.template)[0], this.tip
                }, s.setContent = function () {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(".popover-header"), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
                }, s._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, s._cleanTipClass = function () {
                    var e = t(this.getTipElement()),
                        n = e.attr("class").match(ie);
                    null !== n && n.length > 0 && e.removeClass(n.join(""))
                }, a._jQueryInterface = function (e) {
                    return this.each((function () {
                        var n = t(this).data("bs.popover"),
                            i = "object" === o(e) ? e : null;
                        if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
                            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]()
                        }
                    }))
                }, r(a, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return re
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return te
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.popover"
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return ae
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ".bs.popover"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return oe
                    }
                }]), a
            }(ee);
        t.fn.popover = se._jQueryInterface, t.fn.popover.Constructor = se, t.fn.popover.noConflict = function () {
            return t.fn.popover = ne, se._jQueryInterface
        };
        var le = "scrollspy",
            ce = t.fn[le],
            ue = {
                offset: 10,
                method: "auto",
                target: ""
            },
            fe = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            },
            de = "scroll.bs.scrollspy",
            he = ".nav-link",
            pe = ".list-group-item",
            ge = ".dropdown-item",
            ve = function () {
                function e(e, n) {
                    var i = this;
                    this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + he + "," + this._config.target + " " + pe + "," + this._config.target + " " + ge, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(de, (function (e) {
                        return i._process(e)
                    })), this.refresh(), this._process()
                }
                var n = e.prototype;
                return n.refresh = function () {
                    var e = this,
                        n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                        i = "auto" === this._config.method ? n : this._config.method,
                        r = "position" === i ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function (e) {
                        var n, o = f.getSelectorFromElement(e);
                        if (o && (n = document.querySelector(o)), n) {
                            var a = n.getBoundingClientRect();
                            if (a.width || a.height) return [t(n)[i]().top + r, o]
                        }
                        return null
                    })).filter((function (e) {
                        return e
                    })).sort((function (e, t) {
                        return e[0] - t[0]
                    })).forEach((function (t) {
                        e._offsets.push(t[0]), e._targets.push(t[1])
                    }))
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, n._getConfig = function (e) {
                    if ("string" != typeof (e = l(l({}, ue), "object" === o(e) && e ? e : {})).target && f.isElement(e.target)) {
                        var n = t(e.target).attr("id");
                        n || (n = f.getUID(le), t(e.target).attr("id", n)), e.target = "#" + n
                    }
                    return f.typeCheckConfig(le, e, fe), e
                }, n._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, n._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, n._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, n._process = function () {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= n) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }, n._activate = function (e) {
                    this._activeTarget = e, this._clear();
                    var n = this._selector.split(",").map((function (t) {
                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                        })),
                        i = t([].slice.call(document.querySelectorAll(n.join(","))));
                    i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(he + ", " + pe).addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(he).addClass("active")), t(this._scrollElement).trigger("activate.bs.scrollspy", {
                        relatedTarget: e
                    })
                }, n._clear = function () {
                    [].slice.call(document.querySelectorAll(this._selector)).filter((function (e) {
                        return e.classList.contains("active")
                    })).forEach((function (e) {
                        return e.classList.remove("active")
                    }))
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this).data("bs.scrollspy"),
                            r = "object" === o(n) && n;
                        if (i || (i = new e(this, r), t(this).data("bs.scrollspy", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return ue
                    }
                }]), e
            }();
        t(window).on("load.bs.scrollspy.data-api", (function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
                var i = t(e[n]);
                ve._jQueryInterface.call(i, i.data())
            }
        })), t.fn[le] = ve._jQueryInterface, t.fn[le].Constructor = ve, t.fn[le].noConflict = function () {
            return t.fn[le] = ce, ve._jQueryInterface
        };
        var me = t.fn.tab,
            ye = function () {
                function e(e) {
                    this._element = e
                }
                var n = e.prototype;
                return n.show = function () {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass("active") || t(this._element).hasClass("disabled"))) {
                        var n, i, r = t(this._element).closest(".nav, .list-group")[0],
                            o = f.getSelectorFromElement(this._element);
                        if (r) {
                            var a = "UL" === r.nodeName || "OL" === r.nodeName ? "> li > .active" : ".active";
                            i = (i = t.makeArray(t(r).find(a)))[i.length - 1]
                        }
                        var s = t.Event("hide.bs.tab", {
                                relatedTarget: this._element
                            }),
                            l = t.Event("show.bs.tab", {
                                relatedTarget: i
                            });
                        if (i && t(i).trigger(s), t(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
                            o && (n = document.querySelector(o)), this._activate(this._element, r);
                            var c = function () {
                                var n = t.Event("hidden.bs.tab", {
                                        relatedTarget: e._element
                                    }),
                                    r = t.Event("shown.bs.tab", {
                                        relatedTarget: i
                                    });
                                t(i).trigger(n), t(e._element).trigger(r)
                            };
                            n ? this._activate(n, n.parentNode, c) : c()
                        }
                    }
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.tab"), this._element = null
                }, n._activate = function (e, n, i) {
                    var r = this,
                        o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(".active") : t(n).find("> li > .active"))[0],
                        a = i && o && t(o).hasClass("fade"),
                        s = function () {
                            return r._transitionComplete(e, o, i)
                        };
                    if (o && a) {
                        var l = f.getTransitionDurationFromElement(o);
                        t(o).removeClass("show").one(f.TRANSITION_END, s).emulateTransitionEnd(l)
                    } else s()
                }, n._transitionComplete = function (e, n, i) {
                    if (n) {
                        t(n).removeClass("active");
                        var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
                        r && t(r).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (t(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), f.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                        var o = t(e).closest(".dropdown")[0];
                        if (o) {
                            var a = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                            t(a).addClass("active")
                        }
                        e.setAttribute("aria-expanded", !0)
                    }
                    i && i()
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this),
                            r = i.data("bs.tab");
                        if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }]), e
            }();
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (e) {
            e.preventDefault(), ye._jQueryInterface.call(t(this), "show")
        })), t.fn.tab = ye._jQueryInterface, t.fn.tab.Constructor = ye, t.fn.tab.noConflict = function () {
            return t.fn.tab = me, ye._jQueryInterface
        };
        var be = t.fn.toast,
            we = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            xe = {
                animation: !0,
                autohide: !0,
                delay: 500
            },
            Se = function () {
                function e(e, t) {
                    this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
                }
                var n = e.prototype;
                return n.show = function () {
                    var e = this,
                        n = t.Event("show.bs.toast");
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        this._config.animation && this._element.classList.add("fade");
                        var i = function () {
                            e._element.classList.remove("showing"), e._element.classList.add("show"), t(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout((function () {
                                e.hide()
                            }), e._config.delay))
                        };
                        if (this._element.classList.remove("hide"), f.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                            var r = f.getTransitionDurationFromElement(this._element);
                            t(this._element).one(f.TRANSITION_END, i).emulateTransitionEnd(r)
                        } else i()
                    }
                }, n.hide = function () {
                    if (this._element.classList.contains("show")) {
                        var e = t.Event("hide.bs.toast");
                        t(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                    }
                }, n.dispose = function () {
                    clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), t(this._element).off("click.dismiss.bs.toast"), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
                }, n._getConfig = function (e) {
                    return e = l(l(l({}, xe), t(this._element).data()), "object" === o(e) && e ? e : {}), f.typeCheckConfig("toast", e, this.constructor.DefaultType), e
                }, n._setListeners = function () {
                    var e = this;
                    t(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function () {
                        return e.hide()
                    }))
                }, n._close = function () {
                    var e = this,
                        n = function () {
                            e._element.classList.add("hide"), t(e._element).trigger("hidden.bs.toast")
                        };
                    if (this._element.classList.remove("show"), this._config.animation) {
                        var i = f.getTransitionDurationFromElement(this._element);
                        t(this._element).one(f.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }, e._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = t(this),
                            r = i.data("bs.toast"),
                            a = "object" === o(n) && n;
                        if (r || (r = new e(this, a), i.data("bs.toast", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n](this)
                        }
                    }))
                }, r(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.0"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return we
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return xe
                    }
                }]), e
            }();
        t.fn.toast = Se._jQueryInterface, t.fn.toast.Constructor = Se, t.fn.toast.noConflict = function () {
            return t.fn.toast = be, Se._jQueryInterface
        }, e.Alert = h, e.Button = g, e.Carousel = k, e.Collapse = A, e.Dropdown = N, e.Modal = F, e.Popover = se, e.Scrollspy = ve, e.Tab = ye, e.Toast = Se, e.Tooltip = ee, e.Util = f, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, "object" === ("undefined" == typeof exports ? "undefined" : o(exports)) && void 0 !== e ? r(exports, n(64), n(172)) : "function" == typeof define && n(24) ? define(["exports", "jquery", "popper.js"], r) : r((i = i || self).bootstrap = {}, i.jQuery, i.Popper)
}, function (e, t) {
    e.exports = popper
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var t, i;
        n(10), n(16), n(17), n(36), n(12), n(8), n(23), n(32), n(28), n(54), n(7), n(14), n(18), n(30), n(19);

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        /*!
         * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
         * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
         * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
         */
        t = void 0, i = function () {
            var e = {
                    CUSTOMFILE: '.custom-file input[type="file"]',
                    CUSTOMFILELABEL: ".custom-file-label",
                    FORM: "form",
                    INPUT: "input"
                },
                t = function (t) {
                    var n = "",
                        i = t.parentNode.querySelector(e.CUSTOMFILELABEL);
                    return i && (n = i.innerHTML), n
                },
                n = function (e) {
                    if (e.childNodes.length > 0)
                        for (var t = [].slice.call(e.childNodes), n = 0; n < t.length; n++) {
                            var i = t[n];
                            if (3 !== i.nodeType) return i
                        }
                    return e
                },
                i = function (t) {
                    var i = t.bsCustomFileInput.defaultText,
                        r = t.parentNode.querySelector(e.CUSTOMFILELABEL);
                    r && (n(r).innerHTML = i)
                },
                r = !!window.File,
                o = function (e) {
                    if (e.hasAttribute("multiple") && r) return [].slice.call(e.files).map((function (e) {
                        return e.name
                    })).join(", ");
                    if (-1 !== e.value.indexOf("fakepath")) {
                        var t = e.value.split("\\");
                        return t[t.length - 1]
                    }
                    return e.value
                };

            function a() {
                var t = this.parentNode.querySelector(e.CUSTOMFILELABEL);
                if (t) {
                    var r = n(t),
                        a = o(this);
                    a.length ? r.innerHTML = a : i(this)
                }
            }

            function s() {
                for (var t = [].slice.call(this.querySelectorAll(e.INPUT)).filter((function (e) {
                        return !!e.bsCustomFileInput
                    })), n = 0, r = t.length; n < r; n++) i(t[n])
            }
            var l = "reset",
                c = "change";
            return {
                init: function (n, i) {
                    void 0 === n && (n = e.CUSTOMFILE), void 0 === i && (i = e.FORM);
                    for (var r = [].slice.call(document.querySelectorAll(n)), o = [].slice.call(document.querySelectorAll(i)), u = 0, f = r.length; u < f; u++) {
                        var d = r[u];
                        Object.defineProperty(d, "bsCustomFileInput", {
                            value: {
                                defaultText: t(d)
                            },
                            writable: !0
                        }), a.call(d), d.addEventListener(c, a)
                    }
                    for (var h = 0, p = o.length; h < p; h++) o[h].addEventListener(l, s), Object.defineProperty(o[h], "bsCustomFileInput", {
                        value: !0,
                        writable: !0
                    })
                },
                destroy: function () {
                    for (var t = [].slice.call(document.querySelectorAll(e.FORM)).filter((function (e) {
                            return !!e.bsCustomFileInput
                        })), n = [].slice.call(document.querySelectorAll(e.INPUT)).filter((function (e) {
                            return !!e.bsCustomFileInput
                        })), r = 0, o = n.length; r < o; r++) {
                        var u = n[r];
                        i(u), u.bsCustomFileInput = void 0, u.removeEventListener(c, a)
                    }
                    for (var f = 0, d = t.length; f < d; f++) t[f].removeEventListener(l, s), t[f].bsCustomFileInput = void 0
                }
            }
        }, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) && void 0 !== e ? e.exports = i() : "function" == typeof define && n(24) ? define(i) : (t = t || self).bsCustomFileInput = i(), document.addEventListener("DOMContentLoaded", (function () {
            bsCustomFileInput.init()
        }))
    }).call(this, n(27)(e))
}, function (e, t) {
    ! function (e) {
        e("body").on("shown.bs.modal", ".modal", (function () {
            e(".modal-backdrop").length || ($modal_dialog = e(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && (e(this).addClass("modal-scrolling"), e("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && (e(this).addClass("modal-content-clickable"), e("body").addClass("scrollable")))
        })), e("body").on("hidden.bs.modal", ".modal", (function () {
            e("body").removeClass("scrollable")
        }))
    }(jQuery)
}, function (e, t) {
    jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (e, t, n, i, r) {
            return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
        },
        easeInQuad: function (e, t, n, i, r) {
            return i * (t /= r) * t + n
        },
        easeOutQuad: function (e, t, n, i, r) {
            return -i * (t /= r) * (t - 2) + n
        },
        easeInOutQuad: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function (e, t, n, i, r) {
            return i * (t /= r) * t * t + n
        },
        easeOutCubic: function (e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t + 1) + n
        },
        easeInOutCubic: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function (e, t, n, i, r) {
            return i * (t /= r) * t * t * t + n
        },
        easeOutQuart: function (e, t, n, i, r) {
            return -i * ((t = t / r - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function (e, t, n, i, r) {
            return i * (t /= r) * t * t * t * t + n
        },
        easeOutQuint: function (e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function (e, t, n, i, r) {
            return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function (e, t, n, i, r) {
            return i * Math.sin(t / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function (e, t, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
        },
        easeInExpo: function (e, t, n, i, r) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
        },
        easeOutExpo: function (e, t, n, i, r) {
            return t == r ? n + i : i * (1 - Math.pow(2, -10 * t / r)) + n
        },
        easeInOutExpo: function (e, t, n, i, r) {
            return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
        },
        easeInCirc: function (e, t, n, i, r) {
            return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
        },
        easeOutCirc: function (e, t, n, i, r) {
            return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
        },
        easeInOutCirc: function (e, t, n, i, r) {
            return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function (e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                o = a / 4
            } else o = a / (2 * Math.PI) * Math.asin(i / s);
            return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) + n
        },
        easeOutElastic: function (e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                o = a / 4
            } else o = a / (2 * Math.PI) * Math.asin(i / s);
            return s * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / a) + i + n
        },
        easeInOutElastic: function (e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (2 == (t /= r / 2)) return n + i;
            if (a || (a = r * (.3 * 1.5)), s < Math.abs(i)) {
                s = i;
                o = a / 4
            } else o = a / (2 * Math.PI) * Math.asin(i / s);
            return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * -.5 + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * .5 + i + n
        },
        easeInBack: function (e, t, n, i, r, o) {
            return null == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n
        },
        easeOutBack: function (e, t, n, i, r, o) {
            return null == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
        },
        easeInOutBack: function (e, t, n, i, r, o) {
            return null == o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + n : i / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + n
        },
        easeInBounce: function (e, t, n, i, r) {
            return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
        },
        easeOutBounce: function (e, t, n, i, r) {
            return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function (e, t, n, i, r) {
            return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
        }
    })
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var t;
        n(10), n(16), n(17), n(31), n(8), n(23), n(90), n(28), n(177), n(13), n(7), n(46), n(43), n(62), n(14), n(29), n(18), n(42), n(35), n(30), n(178), n(183), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(19);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        /*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
        /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
        /*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
        jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function (e) {
            function t(e) {
                var t = e.length,
                    i = n.type(e);
                return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
            }
            if (!e.jQuery) {
                var n = function e(t, n) {
                    return new e.fn.init(t, n)
                };
                n.isWindow = function (e) {
                    return null != e && e == e.window
                }, n.type = function (e) {
                    return null == e ? e + "" : "object" == i(e) || "function" == typeof e ? o[s.call(e)] || "object" : i(e)
                }, n.isArray = Array.isArray || function (e) {
                    return "array" === n.type(e)
                }, n.isPlainObject = function (e) {
                    var t;
                    if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (e) {
                        return !1
                    }
                    for (t in e);
                    return void 0 === t || a.call(e, t)
                }, n.each = function (e, n, i) {
                    var r = 0,
                        o = e.length,
                        a = t(e);
                    if (i) {
                        if (a)
                            for (; o > r && !1 !== n.apply(e[r], i); r++);
                        else
                            for (r in e)
                                if (!1 === n.apply(e[r], i)) break
                    } else if (a)
                        for (; o > r && !1 !== n.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === n.call(e[r], r, e[r])) break;
                    return e
                }, n.data = function (e, t, i) {
                    if (void 0 === i) {
                        var o = (a = e[n.expando]) && r[a];
                        if (void 0 === t) return o;
                        if (o && t in o) return o[t]
                    } else if (void 0 !== t) {
                        var a = e[n.expando] || (e[n.expando] = ++n.uuid);
                        return r[a] = r[a] || {}, r[a][t] = i, i
                    }
                }, n.removeData = function (e, t) {
                    var i = e[n.expando],
                        o = i && r[i];
                    o && n.each(t, (function (e, t) {
                        delete o[t]
                    }))
                }, n.extend = function () {
                    var e, t, r, o, a, s, l = arguments[0] || {},
                        c = 1,
                        u = arguments.length,
                        f = !1;
                    for ("boolean" == typeof l && (f = l, l = arguments[c] || {}, c++), "object" != i(l) && "function" !== n.type(l) && (l = {}), c === u && (l = this, c--); u > c; c++)
                        if (null != (a = arguments[c]))
                            for (o in a) e = l[o], l !== (r = a[o]) && (f && r && (n.isPlainObject(r) || (t = n.isArray(r))) ? (t ? (t = !1, s = e && n.isArray(e) ? e : []) : s = e && n.isPlainObject(e) ? e : {}, l[o] = n.extend(f, s, r)) : void 0 !== r && (l[o] = r));
                    return l
                }, n.queue = function (e, i, r) {
                    if (e) {
                        i = (i || "fx") + "queue";
                        var o = n.data(e, i);
                        return r ? (!o || n.isArray(r) ? o = n.data(e, i, function (e, n) {
                            var i = n || [];
                            return null != e && (t(Object(e)) ? function (e, t) {
                                for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                                if (n != n)
                                    for (; void 0 !== t[i];) e[r++] = t[i++];
                                e.length = r
                            }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
                        }(r)) : o.push(r), o) : o || []
                    }
                }, n.dequeue = function (e, t) {
                    n.each(e.nodeType ? [e] : e, (function (e, i) {
                        t = t || "fx";
                        var r = n.queue(i, t),
                            o = r.shift();
                        "inprogress" === o && (o = r.shift()), o && ("fx" === t && r.unshift("inprogress"), o.call(i, (function () {
                            n.dequeue(i, t)
                        })))
                    }))
                }, n.fn = n.prototype = {
                    init: function (e) {
                        if (e.nodeType) return this[0] = e, this;
                        throw new Error("Not a DOM node.")
                    },
                    offset: function () {
                        var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                            top: 0,
                            left: 0
                        };
                        return {
                            top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                            left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                        }
                    },
                    position: function () {
                        function e() {
                            for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                            return e || document
                        }
                        var t = this[0],
                            e = e.apply(t),
                            i = this.offset(),
                            r = /^(?:body|html)$/i.test(e.nodeName) ? {
                                top: 0,
                                left: 0
                            } : n(e).offset();
                        return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
                            top: i.top - r.top,
                            left: i.left - r.left
                        }
                    }
                };
                var r = {};
                n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
                for (var o = {}, a = o.hasOwnProperty, s = o.toString, l = "Boolean Number String Function Array Date RegExp Object Error".split(" "), c = 0; c < l.length; c++) o["[object " + l[c] + "]"] = l[c].toLowerCase();
                n.fn.init.prototype = n.fn, e.Velocity = {
                    Utilities: n
                }
            }
        }(window), t = function () {
            return function (e, t, n, r) {
                function o(e) {
                    return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]), e
                }

                function a(e) {
                    var t = d.data(e, "velocity");
                    return null === t ? r : t
                }

                function s(e) {
                    return function (t) {
                        return Math.round(t * e) * (1 / e)
                    }
                }

                function l(e, n, i, r) {
                    function o(e, t) {
                        return 1 - 3 * t + 3 * e
                    }

                    function a(e, t) {
                        return 3 * t - 6 * e
                    }

                    function s(e) {
                        return 3 * e
                    }

                    function l(e, t, n) {
                        return ((o(t, n) * e + a(t, n)) * e + s(t)) * e
                    }

                    function c(e, t, n) {
                        return 3 * o(t, n) * e * e + 2 * a(t, n) * e + s(t)
                    }

                    function u(t, n) {
                        for (var r = 0; h > r; ++r) {
                            var o = c(n, e, i);
                            if (0 === o) return n;
                            n -= (l(n, e, i) - t) / o
                        }
                        return n
                    }

                    function f(t, n, r) {
                        var o, a, s = 0;
                        do {
                            (o = l(a = n + (r - n) / 2, e, i) - t) > 0 ? r = a : n = a
                        } while (Math.abs(o) > g && ++s < v);
                        return a
                    }

                    function d() {
                        S = !0, (e != n || i != r) && function () {
                            for (var t = 0; m > t; ++t) x[t] = l(t * y, e, i)
                        }()
                    }
                    var h = 4,
                        p = .001,
                        g = 1e-7,
                        v = 10,
                        m = 11,
                        y = 1 / (m - 1),
                        b = "Float32Array" in t;
                    if (4 !== arguments.length) return !1;
                    for (var w = 0; 4 > w; ++w)
                        if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
                    e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
                    var x = b ? new Float32Array(m) : new Array(m),
                        S = !1,
                        k = function (t) {
                            return S || d(), e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(function (t) {
                                for (var n = 0, r = 1, o = m - 1; r != o && x[r] <= t; ++r) n += y;
                                var a = n + (t - x[--r]) / (x[r + 1] - x[r]) * y,
                                    s = c(a, e, i);
                                return s >= p ? u(t, a) : 0 == s ? a : f(t, n, n + y)
                            }(t), n, r)
                        };
                    k.getControlPoints = function () {
                        return [{
                            x: e,
                            y: n
                        }, {
                            x: i,
                            y: r
                        }]
                    };
                    var C = "generateBezier(" + [e, n, i, r] + ")";
                    return k.toString = function () {
                        return C
                    }, k
                }

                function c(e, t) {
                    var n = e;
                    return g.isString(e) ? b.Easings[e] || (n = !1) : n = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? w.apply(null, e.concat([t])) : !(!g.isArray(e) || 4 !== e.length) && l.apply(null, e), !1 === n && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
                }

                function u(e) {
                    if (e) {
                        var t = (new Date).getTime(),
                            n = b.State.calls.length;
                        n > 1e4 && (b.State.calls = function (e) {
                            for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                                var r = e[t];
                                r && i.push(r)
                            }
                            return i
                        }(b.State.calls));
                        for (var i = 0; n > i; i++)
                            if (b.State.calls[i]) {
                                var o = b.State.calls[i],
                                    s = o[0],
                                    l = o[2],
                                    c = o[3],
                                    h = !!c,
                                    p = null;
                                c || (c = b.State.calls[i][3] = t - 16);
                                for (var v = Math.min((t - c) / l.duration, 1), m = 0, y = s.length; y > m; m++) {
                                    var w = s[m],
                                        S = w.element;
                                    if (a(S)) {
                                        var C = !1;
                                        for (var _ in l.display !== r && null !== l.display && "none" !== l.display && ("flex" === l.display && d.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], (function (e, t) {
                                                x.setPropertyValue(S, "display", t)
                                            })), x.setPropertyValue(S, "display", l.display)), l.visibility !== r && "hidden" !== l.visibility && x.setPropertyValue(S, "visibility", l.visibility), w)
                                            if ("element" !== _) {
                                                var E, T = w[_],
                                                    O = g.isString(T.easing) ? b.Easings[T.easing] : T.easing;
                                                if (1 === v) E = T.endValue;
                                                else {
                                                    var A = T.endValue - T.startValue;
                                                    if (E = T.startValue + A * O(v, l, A), !h && E === T.currentValue) continue
                                                }
                                                if (T.currentValue = E, "tween" === _) p = E;
                                                else {
                                                    if (x.Hooks.registered[_]) {
                                                        var $ = x.Hooks.getRoot(_),
                                                            L = a(S).rootPropertyValueCache[$];
                                                        L && (T.rootPropertyValue = L)
                                                    }
                                                    var P = x.setPropertyValue(S, _, T.currentValue + (0 === parseFloat(E) ? "" : T.unitType), T.rootPropertyValue, T.scrollData);
                                                    x.Hooks.registered[_] && (a(S).rootPropertyValueCache[$] = x.Normalizations.registered[$] ? x.Normalizations.registered[$]("extract", null, P[1]) : P[1]), "transform" === P[0] && (C = !0)
                                                }
                                            } l.mobileHA && a(S).transformCache.translate3d === r && (a(S).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && x.flushTransformCache(S)
                                    }
                                }
                                l.display !== r && "none" !== l.display && (b.State.calls[i][2].display = !1), l.visibility !== r && "hidden" !== l.visibility && (b.State.calls[i][2].visibility = !1), l.progress && l.progress.call(o[1], o[1], v, Math.max(0, c + l.duration - t), c, p), 1 === v && f(i)
                            }
                    }
                    b.State.isTicking && k(u)
                }

                function f(e, t) {
                    if (!b.State.calls[e]) return !1;
                    for (var n = b.State.calls[e][0], i = b.State.calls[e][1], o = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, c = 0, u = n.length; u > c; c++) {
                        var f = n[c].element;
                        if (t || o.loop || ("none" === o.display && x.setPropertyValue(f, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(f, "visibility", o.visibility)), !0 !== o.loop && (d.queue(f)[1] === r || !/\.velocityQueueEntryFlag/i.test(d.queue(f)[1])) && a(f)) {
                            a(f).isAnimating = !1, a(f).rootPropertyValueCache = {};
                            var h = !1;
                            d.each(x.Lists.transforms3D, (function (e, t) {
                                var n = /^scale/.test(t) ? 1 : 0,
                                    i = a(f).transformCache[t];
                                a(f).transformCache[t] !== r && new RegExp("^\\(" + n + "[^.]").test(i) && (h = !0, delete a(f).transformCache[t])
                            })), o.mobileHA && (h = !0, delete a(f).transformCache.translate3d), h && x.flushTransformCache(f), x.Values.removeClass(f, "velocity-animating")
                        }
                        if (!t && o.complete && !o.loop && c === u - 1) try {
                            o.complete.call(i, i)
                        } catch (e) {
                            setTimeout((function () {
                                throw e
                            }), 1)
                        }
                        s && !0 !== o.loop && s(i), a(f) && !0 === o.loop && !t && (d.each(a(f).tweensContainer, (function (e, t) {
                            /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                        })), b(f, "reverse", {
                            loop: !0,
                            delay: o.delay
                        })), !1 !== o.queue && d.dequeue(f, o.queue)
                    }
                    b.State.calls[e] = !1;
                    for (var p = 0, g = b.State.calls.length; g > p; p++)
                        if (!1 !== b.State.calls[p]) {
                            l = !0;
                            break
                        }! 1 === l && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
                }
                var d, h = function () {
                        if (n.documentMode) return n.documentMode;
                        for (var e = 7; e > 4; e--) {
                            var t = n.createElement("div");
                            if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                        }
                        return r
                    }(),
                    p = function () {
                        var e = 0;
                        return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                            var n, i = (new Date).getTime();
                            return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout((function () {
                                t(i + n)
                            }), n)
                        }
                    }(),
                    g = {
                        isString: function (e) {
                            return "string" == typeof e
                        },
                        isArray: Array.isArray || function (e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        },
                        isFunction: function (e) {
                            return "[object Function]" === Object.prototype.toString.call(e)
                        },
                        isNode: function (e) {
                            return e && e.nodeType
                        },
                        isNodeList: function (e) {
                            return "object" == i(e) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== r && (0 === e.length || "object" == i(e[0]) && e[0].nodeType > 0)
                        },
                        isWrapped: function (e) {
                            return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                        },
                        isSVG: function (e) {
                            return t.SVGElement && e instanceof t.SVGElement
                        },
                        isEmptyObject: function (e) {
                            for (var t in e) return !1;
                            return !0
                        }
                    },
                    v = !1;
                if (e.fn && e.fn.jquery ? (d = e, v = !0) : d = t.Velocity.Utilities, 8 >= h && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                if (!(7 >= h)) {
                    var m = 400,
                        y = "swing",
                        b = {
                            State: {
                                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                                isAndroid: /Android/i.test(navigator.userAgent),
                                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                                isChrome: t.chrome,
                                isFirefox: /Firefox/i.test(navigator.userAgent),
                                prefixElement: n.createElement("div"),
                                prefixMatches: {},
                                scrollAnchor: null,
                                scrollPropertyLeft: null,
                                scrollPropertyTop: null,
                                isTicking: !1,
                                calls: []
                            },
                            CSS: {},
                            Utilities: d,
                            Redirects: {},
                            Easings: {},
                            Promise: t.Promise,
                            defaults: {
                                queue: "",
                                duration: m,
                                easing: y,
                                begin: r,
                                complete: r,
                                progress: r,
                                display: r,
                                visibility: r,
                                loop: !1,
                                delay: !1,
                                mobileHA: !0,
                                _cacheValues: !0
                            },
                            init: function (e) {
                                d.data(e, "velocity", {
                                    isSVG: g.isSVG(e),
                                    isAnimating: !1,
                                    computedStyle: null,
                                    tweensContainer: null,
                                    rootPropertyValueCache: {},
                                    transformCache: {}
                                })
                            },
                            hook: null,
                            mock: !1,
                            version: {
                                major: 1,
                                minor: 2,
                                patch: 2
                            },
                            debug: !1
                        };
                    t.pageYOffset !== r ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
                    var w = function () {
                        function e(e) {
                            return -e.tension * e.x - e.friction * e.v
                        }

                        function t(t, n, i) {
                            var r = {
                                x: t.x + i.dx * n,
                                v: t.v + i.dv * n,
                                tension: t.tension,
                                friction: t.friction
                            };
                            return {
                                dx: r.v,
                                dv: e(r)
                            }
                        }

                        function n(n, i) {
                            var r = {
                                    dx: n.v,
                                    dv: e(n)
                                },
                                o = t(n, .5 * i, r),
                                a = t(n, .5 * i, o),
                                s = t(n, i, a),
                                l = 1 / 6 * (r.dx + 2 * (o.dx + a.dx) + s.dx),
                                c = 1 / 6 * (r.dv + 2 * (o.dv + a.dv) + s.dv);
                            return n.x = n.x + l * i, n.v = n.v + c * i, n
                        }
                        return function e(t, i, r) {
                            var o, a, s, l = {
                                    x: -1,
                                    v: 0,
                                    tension: null,
                                    friction: null
                                },
                                c = [0],
                                u = 0;
                            for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, r = r || null, l.tension = t, l.friction = i, a = (o = null !== r) ? (u = e(t, i)) / r * .016 : .016; s = n(s || l, a), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                            return o ? function (e) {
                                return c[e * (c.length - 1) | 0]
                            } : u
                        }
                    }();
                    b.Easings = {
                        linear: function (e) {
                            return e
                        },
                        swing: function (e) {
                            return .5 - Math.cos(e * Math.PI) / 2
                        },
                        spring: function (e) {
                            return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                        }
                    }, d.each([
                        ["ease", [.25, .1, .25, 1]],
                        ["ease-in", [.42, 0, 1, 1]],
                        ["ease-out", [0, 0, .58, 1]],
                        ["ease-in-out", [.42, 0, .58, 1]],
                        ["easeInSine", [.47, 0, .745, .715]],
                        ["easeOutSine", [.39, .575, .565, 1]],
                        ["easeInOutSine", [.445, .05, .55, .95]],
                        ["easeInQuad", [.55, .085, .68, .53]],
                        ["easeOutQuad", [.25, .46, .45, .94]],
                        ["easeInOutQuad", [.455, .03, .515, .955]],
                        ["easeInCubic", [.55, .055, .675, .19]],
                        ["easeOutCubic", [.215, .61, .355, 1]],
                        ["easeInOutCubic", [.645, .045, .355, 1]],
                        ["easeInQuart", [.895, .03, .685, .22]],
                        ["easeOutQuart", [.165, .84, .44, 1]],
                        ["easeInOutQuart", [.77, 0, .175, 1]],
                        ["easeInQuint", [.755, .05, .855, .06]],
                        ["easeOutQuint", [.23, 1, .32, 1]],
                        ["easeInOutQuint", [.86, 0, .07, 1]],
                        ["easeInExpo", [.95, .05, .795, .035]],
                        ["easeOutExpo", [.19, 1, .22, 1]],
                        ["easeInOutExpo", [1, 0, 0, 1]],
                        ["easeInCirc", [.6, .04, .98, .335]],
                        ["easeOutCirc", [.075, .82, .165, 1]],
                        ["easeInOutCirc", [.785, .135, .15, .86]]
                    ], (function (e, t) {
                        b.Easings[t[0]] = l.apply(null, t[1])
                    }));
                    var x = b.CSS = {
                        RegEx: {
                            isHex: /^#([A-f\d]{3}){1,2}$/i,
                            valueUnwrap: /^[A-z]+\((.*)\)$/i,
                            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                        },
                        Lists: {
                            colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                            transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                            transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                        },
                        Hooks: {
                            templates: {
                                textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                                boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                                clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                                backgroundPosition: ["X Y", "0% 0%"],
                                transformOrigin: ["X Y Z", "50% 50% 0px"],
                                perspectiveOrigin: ["X Y", "50% 50%"]
                            },
                            registered: {},
                            register: function () {
                                for (var e = 0; e < x.Lists.colors.length; e++) {
                                    var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                                    x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                                }
                                var n, i, r;
                                if (h)
                                    for (n in x.Hooks.templates) {
                                        r = (i = x.Hooks.templates[n])[0].split(" ");
                                        var o = i[1].match(x.RegEx.valueSplit);
                                        "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), x.Hooks.templates[n] = [r.join(" "), o.join(" ")])
                                    }
                                for (n in x.Hooks.templates)
                                    for (var e in r = (i = x.Hooks.templates[n])[0].split(" ")) {
                                        var a = n + r[e],
                                            s = e;
                                        x.Hooks.registered[a] = [n, s]
                                    }
                            },
                            getRoot: function (e) {
                                var t = x.Hooks.registered[e];
                                return t ? t[0] : e
                            },
                            cleanRootPropertyValue: function (e, t) {
                                return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                            },
                            extractValue: function (e, t) {
                                var n = x.Hooks.registered[e];
                                if (n) {
                                    var i = n[0],
                                        r = n[1];
                                    return (t = x.Hooks.cleanRootPropertyValue(i, t)).toString().match(x.RegEx.valueSplit)[r]
                                }
                                return t
                            },
                            injectValue: function (e, t, n) {
                                var i = x.Hooks.registered[e];
                                if (i) {
                                    var r, o = i[0],
                                        a = i[1];
                                    return (r = (n = x.Hooks.cleanRootPropertyValue(o, n)).toString().match(x.RegEx.valueSplit))[a] = t, r.join(" ")
                                }
                                return n
                            }
                        },
                        Normalizations: {
                            registered: {
                                clip: function (e, t, n) {
                                    switch (e) {
                                        case "name":
                                            return "clip";
                                        case "extract":
                                            var i;
                                            return i = x.RegEx.wrappedValueAlreadyExtracted.test(n) ? n : (i = n.toString().match(x.RegEx.valueUnwrap)) ? i[1].replace(/,(\s+)?/g, " ") : n;
                                        case "inject":
                                            return "rect(" + n + ")"
                                    }
                                },
                                blur: function (e, t, n) {
                                    switch (e) {
                                        case "name":
                                            return b.State.isFirefox ? "filter" : "-webkit-filter";
                                        case "extract":
                                            var i = parseFloat(n);
                                            if (!i && 0 !== i) {
                                                var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                                i = r ? r[1] : 0
                                            }
                                            return i;
                                        case "inject":
                                            return parseFloat(n) ? "blur(" + n + ")" : "none"
                                    }
                                },
                                opacity: function (e, t, n) {
                                    if (8 >= h) switch (e) {
                                        case "name":
                                            return "filter";
                                        case "extract":
                                            var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                            return i ? i[1] / 100 : 1;
                                        case "inject":
                                            return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                                    } else switch (e) {
                                        case "name":
                                            return "opacity";
                                        case "extract":
                                        case "inject":
                                            return n
                                    }
                                }
                            },
                            register: function () {
                                9 >= h || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                                for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function () {
                                    var t = x.Lists.transformsBase[e];
                                    x.Normalizations.registered[t] = function (e, n, i) {
                                        switch (e) {
                                            case "name":
                                                return "transform";
                                            case "extract":
                                                return a(n) === r || a(n).transformCache[t] === r ? /^scale/i.test(t) ? 1 : 0 : a(n).transformCache[t].replace(/[()]/g, "");
                                            case "inject":
                                                var o = !1;
                                                switch (t.substr(0, t.length - 1)) {
                                                    case "translate":
                                                        o = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                                                        break;
                                                    case "scal":
                                                    case "scale":
                                                        b.State.isAndroid && a(n).transformCache[t] === r && 1 > i && (i = 1), o = !/(\d)$/i.test(i);
                                                        break;
                                                    case "skew":
                                                        o = !/(deg|\d)$/i.test(i);
                                                        break;
                                                    case "rotate":
                                                        o = !/(deg|\d)$/i.test(i)
                                                }
                                                return o || (a(n).transformCache[t] = "(" + i + ")"), a(n).transformCache[t]
                                        }
                                    }
                                }();
                                for (e = 0; e < x.Lists.colors.length; e++) ! function () {
                                    var t = x.Lists.colors[e];
                                    x.Normalizations.registered[t] = function (e, n, i) {
                                        switch (e) {
                                            case "name":
                                                return t;
                                            case "extract":
                                                var o;
                                                if (x.RegEx.wrappedValueAlreadyExtracted.test(i)) o = i;
                                                else {
                                                    var a, s = {
                                                        black: "rgb(0, 0, 0)",
                                                        blue: "rgb(0, 0, 255)",
                                                        gray: "rgb(128, 128, 128)",
                                                        green: "rgb(0, 128, 0)",
                                                        red: "rgb(255, 0, 0)",
                                                        white: "rgb(255, 255, 255)"
                                                    };
                                                    /^[A-z]+$/i.test(i) ? a = s[i] !== r ? s[i] : s.black : x.RegEx.isHex.test(i) ? a = "rgb(" + x.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (a = s.black), o = (a || i).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                                }
                                                return 8 >= h || 3 !== o.split(" ").length || (o += " 1"), o;
                                            case "inject":
                                                return 8 >= h ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), (8 >= h ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                        }
                                    }
                                }()
                            }
                        },
                        Names: {
                            camelCase: function (e) {
                                return e.replace(/-(\w)/g, (function (e, t) {
                                    return t.toUpperCase()
                                }))
                            },
                            SVGAttribute: function (e) {
                                var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                                return (h || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                            },
                            prefixCheck: function (e) {
                                if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
                                for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                                    var r;
                                    if (r = 0 === n ? e : t[n] + e.replace(/^\w/, (function (e) {
                                            return e.toUpperCase()
                                        })), g.isString(b.State.prefixElement.style[r])) return b.State.prefixMatches[e] = r, [r, !0]
                                }
                                return [e, !1]
                            }
                        },
                        Values: {
                            hexToRgb: function (e) {
                                var t;
                                return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function (e, t, n, i) {
                                    return t + t + n + n + i + i
                                })), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                            },
                            isCSSNullValue: function (e) {
                                return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                            },
                            getUnitType: function (e) {
                                return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                            },
                            getDisplayType: function (e) {
                                var t = e && e.tagName.toString().toLowerCase();
                                return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                            },
                            addClass: function (e, t) {
                                e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                            },
                            removeClass: function (e, t) {
                                e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                            }
                        },
                        getPropertyValue: function (e, n, i, o) {
                            function s(e, n) {
                                function i() {
                                    u && x.setPropertyValue(e, "display", "none")
                                }
                                var l = 0;
                                if (8 >= h) l = d.css(e, n);
                                else {
                                    var c, u = !1;
                                    if (/^(width|height)$/.test(n) && 0 === x.getPropertyValue(e, "display") && (u = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                                        if ("height" === n && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                            var f = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                            return i(), f
                                        }
                                        if ("width" === n && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                            var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                            return i(), p
                                        }
                                    }
                                    c = a(e) === r ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), ("" === (l = 9 === h && "filter" === n ? c.getPropertyValue(n) : c[n]) || null === l) && (l = e.style[n]), i()
                                }
                                if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                                    var g = s(e, "position");
                                    ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = d(e).position()[n] + "px")
                                }
                                return l
                            }
                            var l;
                            if (x.Hooks.registered[n]) {
                                var c = n,
                                    u = x.Hooks.getRoot(c);
                                i === r && (i = x.getPropertyValue(e, x.Names.prefixCheck(u)[0])), x.Normalizations.registered[u] && (i = x.Normalizations.registered[u]("extract", e, i)), l = x.Hooks.extractValue(c, i)
                            } else if (x.Normalizations.registered[n]) {
                                var f, p;
                                "transform" !== (f = x.Normalizations.registered[n]("name", e)) && (p = s(e, x.Names.prefixCheck(f)[0]), x.Values.isCSSNullValue(p) && x.Hooks.templates[n] && (p = x.Hooks.templates[n][1])), l = x.Normalizations.registered[n]("extract", e, p)
                            }
                            if (!/^[\d-]/.test(l))
                                if (a(e) && a(e).isSVG && x.Names.SVGAttribute(n))
                                    if (/^(height|width)$/i.test(n)) try {
                                        l = e.getBBox()[n]
                                    } catch (e) {
                                        l = 0
                                    } else l = e.getAttribute(n);
                                    else l = s(e, x.Names.prefixCheck(n)[0]);
                            return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
                        },
                        setPropertyValue: function (e, n, i, r, o) {
                            var s = n;
                            if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = i : "Left" === o.direction ? t.scrollTo(i, o.alternateValue) : t.scrollTo(o.alternateValue, i);
                            else if (x.Normalizations.registered[n] && "transform" === x.Normalizations.registered[n]("name", e)) x.Normalizations.registered[n]("inject", e, i), s = "transform", i = a(e).transformCache[n];
                            else {
                                if (x.Hooks.registered[n]) {
                                    var l = n,
                                        c = x.Hooks.getRoot(n);
                                    r = r || x.getPropertyValue(e, c), i = x.Hooks.injectValue(l, i, r), n = c
                                }
                                if (x.Normalizations.registered[n] && (i = x.Normalizations.registered[n]("inject", e, i), n = x.Normalizations.registered[n]("name", e)), s = x.Names.prefixCheck(n)[0], 8 >= h) try {
                                    e.style[s] = i
                                } catch (e) {
                                    b.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
                                } else a(e) && a(e).isSVG && x.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
                                b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
                            }
                            return [s, i]
                        },
                        flushTransformCache: function (e) {
                            function t(t) {
                                return parseFloat(x.getPropertyValue(e, t))
                            }
                            var n = "";
                            if ((h || b.State.isAndroid && !b.State.isChrome) && a(e).isSVG) {
                                var i = {
                                    translate: [t("translateX"), t("translateY")],
                                    skewX: [t("skewX")],
                                    skewY: [t("skewY")],
                                    scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                                    rotate: [t("rotateZ"), 0, 0]
                                };
                                d.each(a(e).transformCache, (function (e) {
                                    /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
                                }))
                            } else {
                                var r, o;
                                d.each(a(e).transformCache, (function (t) {
                                    return r = a(e).transformCache[t], "transformPerspective" === t ? (o = r, !0) : (9 === h && "rotateZ" === t && (t = "rotate"), void(n += t + r + " "))
                                })), o && (n = "perspective" + o + " " + n)
                            }
                            x.setPropertyValue(e, "transform", n)
                        }
                    };
                    x.Hooks.register(), x.Normalizations.register(), b.hook = function (e, t, n) {
                        var i = r;
                        return e = o(e), d.each(e, (function (e, o) {
                            if (a(o) === r && b.init(o), n === r) i === r && (i = b.CSS.getPropertyValue(o, t));
                            else {
                                var s = b.CSS.setPropertyValue(o, t, n);
                                "transform" === s[0] && b.CSS.flushTransformCache(o), i = s
                            }
                        })), i
                    };
                    var S = function e() {
                        function i() {
                            return l ? O.promise || null : h
                        }

                        function s() {
                            function e(e) {
                                function f(e, t) {
                                    var n = r,
                                        i = r,
                                        a = r;
                                    return g.isArray(e) ? (n = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? a = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (i = t ? e[1] : c(e[1], s.duration), e[2] !== r && (a = e[2]))) : n = e, t || (i = i || s.easing), g.isFunction(n) && (n = n.call(o, C, k)), g.isFunction(a) && (a = a.call(o, C, k)), [n || 0, i, a]
                                }

                                function h(e, t) {
                                    var n, i;
                                    return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, (function (e) {
                                        return n = e, ""
                                    })), n || (n = x.Values.getUnitType(e)), [i, n]
                                }

                                function p() {
                                    var e = {
                                            myParent: o.parentNode || n.body,
                                            position: x.getPropertyValue(o, "position"),
                                            fontSize: x.getPropertyValue(o, "fontSize")
                                        },
                                        i = e.position === N.lastPosition && e.myParent === N.lastParent,
                                        r = e.fontSize === N.lastFontSize;
                                    N.lastParent = e.myParent, N.lastPosition = e.position, N.lastFontSize = e.fontSize;
                                    var s = 100,
                                        l = {};
                                    if (r && i) l.emToPx = N.lastEmToPx, l.percentToPxWidth = N.lastPercentToPxWidth, l.percentToPxHeight = N.lastPercentToPxHeight;
                                    else {
                                        var c = a(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                        b.init(c), e.myParent.appendChild(c), d.each(["overflow", "overflowX", "overflowY"], (function (e, t) {
                                            b.CSS.setPropertyValue(c, t, "hidden")
                                        })), b.CSS.setPropertyValue(c, "position", e.position), b.CSS.setPropertyValue(c, "fontSize", e.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], (function (e, t) {
                                            b.CSS.setPropertyValue(c, t, s + "%")
                                        })), b.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = N.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / s, e.myParent.removeChild(c)
                                    }
                                    return null === N.remToPx && (N.remToPx = parseFloat(x.getPropertyValue(n.body, "fontSize")) || 16), null === N.vwToPx && (N.vwToPx = parseFloat(t.innerWidth) / 100, N.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = N.remToPx, l.vwToPx = N.vwToPx, l.vhToPx = N.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                                }
                                if (s.begin && 0 === C) try {
                                    s.begin.call(v, v)
                                } catch (e) {
                                    setTimeout((function () {
                                        throw e
                                    }), 1)
                                }
                                if ("scroll" === T) {
                                    var m, S, _, E = /^x$/i.test(s.axis) ? "Left" : "Top",
                                        A = parseFloat(s.offset) || 0;
                                    s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, _ = (m = s.container["scroll" + E]) + d(o).position()[E.toLowerCase()] + A) : s.container = null : (m = b.State.scrollAnchor[b.State["scrollProperty" + E]], S = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === E ? "Top" : "Left")]], _ = d(o).offset()[E.toLowerCase()] + A), l = {
                                        scroll: {
                                            rootPropertyValue: !1,
                                            startValue: m,
                                            currentValue: m,
                                            endValue: _,
                                            unitType: "",
                                            easing: s.easing,
                                            scrollData: {
                                                container: s.container,
                                                direction: E,
                                                alternateValue: S
                                            }
                                        },
                                        element: o
                                    }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                                } else if ("reverse" === T) {
                                    if (!a(o).tweensContainer) return void d.dequeue(o, s.queue);
                                    "none" === a(o).opts.display && (a(o).opts.display = "auto"), "hidden" === a(o).opts.visibility && (a(o).opts.visibility = "visible"), a(o).opts.loop = !1, a(o).opts.begin = null, a(o).opts.complete = null, w.easing || delete s.easing, w.duration || delete s.duration, s = d.extend({}, a(o).opts, s);
                                    var $ = d.extend(!0, {}, a(o).tweensContainer);
                                    for (var L in $)
                                        if ("element" !== L) {
                                            var P = $[L].startValue;
                                            $[L].startValue = $[L].currentValue = $[L].endValue, $[L].endValue = P, g.isEmptyObject(w) || ($[L].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + L + "): " + JSON.stringify($[L]), o)
                                        } l = $
                                } else if ("start" === T) {
                                    for (var j in a(o).tweensContainer && !0 === a(o).isAnimating && ($ = a(o).tweensContainer), d.each(y, (function (e, t) {
                                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                                var n = f(t, !0),
                                                    i = n[0],
                                                    o = n[1],
                                                    a = n[2];
                                                if (x.RegEx.isHex.test(i)) {
                                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(i), c = a ? x.Values.hexToRgb(a) : r, u = 0; u < s.length; u++) {
                                                        var d = [l[u]];
                                                        o && d.push(o), c !== r && d.push(c[u]), y[e + s[u]] = d
                                                    }
                                                    delete y[e]
                                                }
                                            }
                                        })), y) {
                                        var D = f(y[j]),
                                            M = D[0],
                                            R = D[1],
                                            H = D[2];
                                        j = x.Names.camelCase(j);
                                        var F = x.Hooks.getRoot(j),
                                            W = !1;
                                        if (a(o).isSVG || "tween" === F || !1 !== x.Names.prefixCheck(F)[1] || x.Normalizations.registered[F] !== r) {
                                            (s.display !== r && null !== s.display && "none" !== s.display || s.visibility !== r && "hidden" !== s.visibility) && /opacity|filter/.test(j) && !H && 0 !== M && (H = 0), s._cacheValues && $ && $[j] ? (H === r && (H = $[j].endValue + $[j].unitType), W = a(o).rootPropertyValueCache[F]) : x.Hooks.registered[j] ? H === r ? (W = x.getPropertyValue(o, F), H = x.getPropertyValue(o, j, W)) : W = x.Hooks.templates[F][1] : H === r && (H = x.getPropertyValue(o, j));
                                            var B, q, V, Y = !1;
                                            if (H = (B = h(j, H))[0], V = B[1], M = (B = h(j, M))[0].replace(/^([+-\/*])=/, (function (e, t) {
                                                    return Y = t, ""
                                                })), q = B[1], H = parseFloat(H) || 0, M = parseFloat(M) || 0, "%" === q && (/^(fontSize|lineHeight)$/.test(j) ? (M /= 100, q = "em") : /^scale/.test(j) ? (M /= 100, q = "") : /(Red|Green|Blue)$/i.test(j) && (M = M / 100 * 255, q = "")), /[\/*]/.test(Y)) q = V;
                                            else if (V !== q && 0 !== H)
                                                if (0 === M) q = V;
                                                else {
                                                    i = i || p();
                                                    var z = /margin|padding|left|right|width|text|word|letter/i.test(j) || /X$/.test(j) || "x" === j ? "x" : "y";
                                                    switch (V) {
                                                        case "%":
                                                            H *= "x" === z ? i.percentToPxWidth : i.percentToPxHeight;
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            H *= i[V + "ToPx"]
                                                    }
                                                    switch (q) {
                                                        case "%":
                                                            H *= 1 / ("x" === z ? i.percentToPxWidth : i.percentToPxHeight);
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            H *= 1 / i[q + "ToPx"]
                                                    }
                                                } switch (Y) {
                                                case "+":
                                                    M = H + M;
                                                    break;
                                                case "-":
                                                    M = H - M;
                                                    break;
                                                case "*":
                                                    M *= H;
                                                    break;
                                                case "/":
                                                    M = H / M
                                            }
                                            l[j] = {
                                                rootPropertyValue: W,
                                                startValue: H,
                                                currentValue: H,
                                                endValue: M,
                                                unitType: q,
                                                easing: R
                                            }, b.debug && console.log("tweensContainer (" + j + "): " + JSON.stringify(l[j]), o)
                                        } else b.debug && console.log("Skipping [" + F + "] due to a lack of browser support.")
                                    }
                                    l.element = o
                                }
                                l.element && (x.Values.addClass(o, "velocity-animating"), I.push(l), "" === s.queue && (a(o).tweensContainer = l, a(o).opts = s), a(o).isAnimating = !0, C === k - 1 ? (b.State.calls.push([I, v, s, null, O.resolver]), !1 === b.State.isTicking && (b.State.isTicking = !0, u())) : C++)
                            }
                            var i, o = this,
                                s = d.extend({}, b.defaults, w),
                                l = {};
                            switch (a(o) === r && b.init(o), parseFloat(s.delay) && !1 !== s.queue && d.queue(o, s.queue, (function (e) {
                                b.velocityQueueEntryFlag = !0, a(o).delayTimer = {
                                    setTimeout: setTimeout(e, parseFloat(s.delay)),
                                    next: e
                                }
                            })), s.duration.toString().toLowerCase()) {
                                case "fast":
                                    s.duration = 200;
                                    break;
                                case "normal":
                                    s.duration = m;
                                    break;
                                case "slow":
                                    s.duration = 600;
                                    break;
                                default:
                                    s.duration = parseFloat(s.duration) || 1
                            }!1 !== b.mock && (!0 === b.mock ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = c(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), s.display !== r && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== r && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, !1 === s.queue ? s.delay ? setTimeout(e, s.delay) : e() : d.queue(o, s.queue, (function (t, n) {
                                return !0 === n ? (O.promise && O.resolver(v), !0) : (b.velocityQueueEntryFlag = !0, void e())
                            })), "" !== s.queue && "fx" !== s.queue || "inprogress" === d.queue(o)[0] || d.dequeue(o)
                        }
                        var l, h, p, v, y, w, S = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
                        if (g.isWrapped(this) ? (l = !1, p = 0, v = this, h = this) : (l = !0, p = 1, v = S ? arguments[0].elements || arguments[0].e : arguments[0]), v = o(v)) {
                            S ? (y = arguments[0].properties || arguments[0].p, w = arguments[0].options || arguments[0].o) : (y = arguments[p], w = arguments[p + 1]);
                            var k = v.length,
                                C = 0;
                            if (!/^(stop|finish)$/i.test(y) && !d.isPlainObject(w)) {
                                var _ = p + 1;
                                w = {};
                                for (var E = _; E < arguments.length; E++) g.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? g.isString(arguments[E]) || g.isArray(arguments[E]) ? w.easing = arguments[E] : g.isFunction(arguments[E]) && (w.complete = arguments[E]) : w.duration = arguments[E]
                            }
                            var T, O = {
                                promise: null,
                                resolver: null,
                                rejecter: null
                            };
                            switch (l && b.Promise && (O.promise = new b.Promise((function (e, t) {
                                O.resolver = e, O.rejecter = t
                            }))), y) {
                                case "scroll":
                                    T = "scroll";
                                    break;
                                case "reverse":
                                    T = "reverse";
                                    break;
                                case "finish":
                                case "stop":
                                    d.each(v, (function (e, t) {
                                        a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer)
                                    }));
                                    var A = [];
                                    return d.each(b.State.calls, (function (e, t) {
                                        t && d.each(t[1], (function (n, i) {
                                            var o = w === r ? "" : w;
                                            return !0 !== o && t[2].queue !== o && (w !== r || !1 !== t[2].queue) || void d.each(v, (function (n, r) {
                                                r === i && ((!0 === w || g.isString(w)) && (d.each(d.queue(r, g.isString(w) ? w : ""), (function (e, t) {
                                                    g.isFunction(t) && t(null, !0)
                                                })), d.queue(r, g.isString(w) ? w : "", [])), "stop" === y ? (a(r) && a(r).tweensContainer && !1 !== o && d.each(a(r).tweensContainer, (function (e, t) {
                                                    t.endValue = t.currentValue
                                                })), A.push(e)) : "finish" === y && (t[2].duration = 1))
                                            }))
                                        }))
                                    })), "stop" === y && (d.each(A, (function (e, t) {
                                        f(t, !0)
                                    })), O.promise && O.resolver(v)), i();
                                default:
                                    if (!d.isPlainObject(y) || g.isEmptyObject(y)) {
                                        if (g.isString(y) && b.Redirects[y]) {
                                            var $ = (D = d.extend({}, w)).duration,
                                                L = D.delay || 0;
                                            return !0 === D.backwards && (v = d.extend(!0, [], v).reverse()), d.each(v, (function (e, t) {
                                                parseFloat(D.stagger) ? D.delay = L + parseFloat(D.stagger) * e : g.isFunction(D.stagger) && (D.delay = L + D.stagger.call(t, e, k)), D.drag && (D.duration = parseFloat($) || (/^(callout|transition)/.test(y) ? 1e3 : m), D.duration = Math.max(D.duration * (D.backwards ? 1 - e / k : (e + 1) / k), .75 * D.duration, 200)), b.Redirects[y].call(t, t, D || {}, e, k, v, O.promise ? O : r)
                                            })), i()
                                        }
                                        var P = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                        return O.promise ? O.rejecter(new Error(P)) : console.log(P), i()
                                    }
                                    T = "start"
                            }
                            var j, D, N = {
                                    lastParent: null,
                                    lastPosition: null,
                                    lastFontSize: null,
                                    lastPercentToPxWidth: null,
                                    lastPercentToPxHeight: null,
                                    lastEmToPx: null,
                                    remToPx: null,
                                    vwToPx: null,
                                    vhToPx: null
                                },
                                I = [];
                            if (d.each(v, (function (e, t) {
                                    g.isNode(t) && s.call(t)
                                })), (D = d.extend({}, b.defaults, w)).loop = parseInt(D.loop), j = 2 * D.loop - 1, D.loop)
                                for (var M = 0; j > M; M++) {
                                    var R = {
                                        delay: D.delay,
                                        progress: D.progress
                                    };
                                    M === j - 1 && (R.display = D.display, R.visibility = D.visibility, R.complete = D.complete), e(v, "reverse", R)
                                }
                            return i()
                        }
                    };
                    (b = d.extend(S, b)).animate = S;
                    var k = t.requestAnimationFrame || p;
                    return b.State.isMobile || n.hidden === r || n.addEventListener("visibilitychange", (function () {
                        n.hidden ? (k = function (e) {
                            return setTimeout((function () {
                                e(!0)
                            }), 16)
                        }, u()) : k = t.requestAnimationFrame || p
                    })), e.Velocity = b, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = b.defaults), d.each(["Down", "Up"], (function (e, t) {
                        b.Redirects["slide" + t] = function (e, n, i, o, a, s) {
                            var l = d.extend({}, n),
                                c = l.begin,
                                u = l.complete,
                                f = {
                                    height: "",
                                    marginTop: "",
                                    marginBottom: "",
                                    paddingTop: "",
                                    paddingBottom: ""
                                },
                                h = {};
                            l.display === r && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                                for (var n in c && c.call(a, a), f) {
                                    h[n] = e.style[n];
                                    var i = b.CSS.getPropertyValue(e, n);
                                    f[n] = "Down" === t ? [i, 0] : [0, i]
                                }
                                h.overflow = e.style.overflow, e.style.overflow = "hidden"
                            }, l.complete = function () {
                                for (var t in h) e.style[t] = h[t];
                                u && u.call(a, a), s && s.resolver(a)
                            }, b(e, f, l)
                        }
                    })), d.each(["In", "Out"], (function (e, t) {
                        b.Redirects["fade" + t] = function (e, n, i, o, a, s) {
                            var l = d.extend({}, n),
                                c = {
                                    opacity: "In" === t ? 1 : 0
                                },
                                u = l.complete;
                            l.complete = i !== o - 1 ? l.begin = null : function () {
                                u && u.call(a, a), s && s.resolver(a)
                            }, l.display === r && (l.display = "In" === t ? "auto" : "none"), b(this, c, l)
                        }
                    })), b
                }
                jQuery.fn.velocity = jQuery.fn.animate
            }(window.jQuery || window.Zepto || window, window, document)
        }, "object" == i(e) && "object" == i(e.exports) ? e.exports = t() : "function" == typeof define && n(24) ? define(t) : t())
    }).call(this, n(27)(e))
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(2),
        o = n(136),
        a = n(11),
        s = n(50),
        l = n(5),
        c = n(51),
        u = o.ArrayBuffer,
        f = o.DataView,
        d = u.prototype.slice;
    i({
        target: "ArrayBuffer",
        proto: !0,
        unsafe: !0,
        forced: r((function () {
            return !new u(2).slice(1, void 0).byteLength
        }))
    }, {
        slice: function (e, t) {
            if (void 0 !== d && void 0 === t) return d.call(a(this), e);
            for (var n = a(this).byteLength, i = s(e, n), r = s(void 0 === t ? n : t, n), o = new(c(this, u))(l(r - i)), h = new f(this), p = new f(o), g = 0; i < r;) p.setUint8(g++, h.getUint8(i++));
            return o
        }
    })
}, function (e, t, n) {
    n(179)("Float32", 4, (function (e) {
        return function (t, n, i) {
            return e(this, t, n, i)
        }
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(1),
        o = n(9),
        a = n(180),
        s = n(3),
        l = n(136),
        c = n(102),
        u = n(56),
        f = n(26),
        d = n(5),
        h = n(137),
        p = n(138),
        g = n(55),
        v = n(25),
        m = n(89),
        y = n(15),
        b = n(70),
        w = n(74),
        x = n(48).f,
        S = n(182),
        k = n(21).forEach,
        C = n(101),
        _ = n(22),
        E = n(47),
        T = n(49),
        O = T.get,
        A = T.set,
        $ = _.f,
        L = E.f,
        P = Math.round,
        j = r.RangeError,
        D = l.ArrayBuffer,
        N = l.DataView,
        I = s.NATIVE_ARRAY_BUFFER_VIEWS,
        M = s.TYPED_ARRAY_TAG,
        R = s.TypedArray,
        H = s.TypedArrayPrototype,
        F = s.aTypedArrayConstructor,
        W = s.isTypedArray,
        B = function (e, t) {
            for (var n = 0, i = t.length, r = new(F(e))(i); i > n;) r[n] = t[n++];
            return r
        },
        q = function (e, t) {
            $(e, t, {
                get: function () {
                    return O(this)[t]
                }
            })
        },
        V = function (e) {
            var t;
            return e instanceof D || "ArrayBuffer" == (t = m(e)) || "SharedArrayBuffer" == t
        },
        Y = function (e, t) {
            return W(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
        },
        z = function (e, t) {
            return Y(e, t = g(t, !0)) ? u(2, e[t]) : L(e, t)
        },
        X = function (e, t, n) {
            return !(Y(e, t = g(t, !0)) && y(n) && v(n, "value")) || v(n, "get") || v(n, "set") || n.configurable || v(n, "writable") && !n.writable || v(n, "enumerable") && !n.enumerable ? $(e, t, n) : (e[t] = n.value, e)
        };
    o ? (I || (E.f = z, _.f = X, q(H, "buffer"), q(H, "byteOffset"), q(H, "byteLength"), q(H, "length")), i({
        target: "Object",
        stat: !0,
        forced: !I
    }, {
        getOwnPropertyDescriptor: z,
        defineProperty: X
    }), e.exports = function (e, t, n, o) {
        var s = e + (o ? "Clamped" : "") + "Array",
            l = "get" + e,
            u = "set" + e,
            g = r[s],
            v = g,
            m = v && v.prototype,
            _ = {},
            E = function (e, n) {
                $(e, n, {
                    get: function () {
                        return function (e, n) {
                            var i = O(e);
                            return i.view[l](n * t + i.byteOffset, !0)
                        }(this, n)
                    },
                    set: function (e) {
                        return function (e, n, i) {
                            var r = O(e);
                            o && (i = (i = P(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), r.view[u](n * t + r.byteOffset, i, !0)
                        }(this, n, e)
                    },
                    enumerable: !0
                })
            };
        I ? a && (v = n((function (e, n, i, r) {
            return c(e, v, s), y(n) ? V(n) ? void 0 !== r ? new g(n, p(i, t), r) : void 0 !== i ? new g(n, p(i, t)) : new g(n) : W(n) ? B(v, n) : S.call(v, n) : new g(h(n))
        })), w && w(v, R), k(x(g), (function (e) {
            e in v || f(v, e, g[e])
        })), v.prototype = m) : (v = n((function (e, n, i, r) {
            c(e, v, s);
            var o, a, l, u = 0,
                f = 0;
            if (y(n)) {
                if (!V(n)) return W(n) ? B(v, n) : S.call(v, n);
                o = n, f = p(i, t);
                var g = n.byteLength;
                if (void 0 === r) {
                    if (g % t) throw j("Wrong length");
                    if ((a = g - f) < 0) throw j("Wrong length")
                } else if ((a = d(r) * t) + f > g) throw j("Wrong length");
                l = a / t
            } else l = h(n), o = new D(a = l * t);
            for (A(e, {
                    buffer: o,
                    byteOffset: f,
                    byteLength: a,
                    length: l,
                    view: new N(o)
                }); u < l;) E(e, u++)
        })), w && w(v, R), m = v.prototype = b(H)), m.constructor !== v && f(m, "constructor", v), M && f(m, M, s), _[s] = v, i({
            global: !0,
            forced: v != g,
            sham: !I
        }, _), "BYTES_PER_ELEMENT" in v || f(v, "BYTES_PER_ELEMENT", t), "BYTES_PER_ELEMENT" in m || f(m, "BYTES_PER_ELEMENT", t), C(s)
    }) : e.exports = function () {}
}, function (e, t, n) {
    var i = n(1),
        r = n(2),
        o = n(129),
        a = n(3).NATIVE_ARRAY_BUFFER_VIEWS,
        s = i.ArrayBuffer,
        l = i.Int8Array;
    e.exports = !a || !r((function () {
        l(1)
    })) || !r((function () {
        new l(-1)
    })) || !o((function (e) {
        new l, new l(null), new l(1.5), new l(e)
    }), !0) || r((function () {
        return 1 !== new l(new s(2), 1, void 0).length
    }))
}, function (e, t, n) {
    var i = n(37);
    e.exports = function (e) {
        var t = i(e);
        if (t < 0) throw RangeError("The argument can't be less than 0");
        return t
    }
}, function (e, t, n) {
    var i = n(20),
        r = n(5),
        o = n(128),
        a = n(127),
        s = n(73),
        l = n(3).aTypedArrayConstructor;
    e.exports = function (e) {
        var t, n, c, u, f, d, h = i(e),
            p = arguments.length,
            g = p > 1 ? arguments[1] : void 0,
            v = void 0 !== g,
            m = o(h);
        if (null != m && !a(m))
            for (d = (f = m.call(h)).next, h = []; !(u = d.call(f)).done;) h.push(u.value);
        for (v && p > 2 && (g = s(g, arguments[2], 2)), n = r(h.length), c = new(l(this))(n), t = 0; n > t; t++) c[t] = v ? g(h[t], t) : h[t];
        return c
    }
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(184),
        o = i.aTypedArray;
    i.exportProto("copyWithin", (function (e, t) {
        return r.call(o(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(20),
        r = n(50),
        o = n(5),
        a = Math.min;
    e.exports = [].copyWithin || function (e, t) {
        var n = i(this),
            s = o(n.length),
            l = r(e, s),
            c = r(t, s),
            u = arguments.length > 2 ? arguments[2] : void 0,
            f = a((void 0 === u ? s : r(u, s)) - c, s - l),
            d = 1;
        for (c < l && l < c + f && (d = -1, c += f - 1, l += f - 1); f-- > 0;) c in n ? n[l] = n[c] : delete n[l], l += d, c += d;
        return n
    }
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(21).every,
        o = i.aTypedArray;
    i.exportProto("every", (function (e) {
        return r(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(108),
        o = i.aTypedArray;
    i.exportProto("fill", (function (e) {
        return r.apply(o(this), arguments)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(21).filter,
        o = n(51),
        a = i.aTypedArray,
        s = i.aTypedArrayConstructor;
    i.exportProto("filter", (function (e) {
        for (var t = r(a(this), e, arguments.length > 1 ? arguments[1] : void 0), n = o(this, this.constructor), i = 0, l = t.length, c = new(s(n))(l); l > i;) c[i] = t[i++];
        return c
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(21).find,
        o = i.aTypedArray;
    i.exportProto("find", (function (e) {
        return r(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(21).findIndex,
        o = i.aTypedArray;
    i.exportProto("findIndex", (function (e) {
        return r(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(21).forEach,
        o = i.aTypedArray;
    i.exportProto("forEach", (function (e) {
        r(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(72).includes,
        o = i.aTypedArray;
    i.exportProto("includes", (function (e) {
        return r(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(72).indexOf,
        o = i.aTypedArray;
    i.exportProto("indexOf", (function (e) {
        return r(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(1),
        r = n(3),
        o = n(8),
        a = n(4)("iterator"),
        s = i.Uint8Array,
        l = o.values,
        c = o.keys,
        u = o.entries,
        f = r.aTypedArray,
        d = r.exportProto,
        h = s && s.prototype[a],
        p = !!h && ("values" == h.name || null == h.name),
        g = function () {
            return l.call(f(this))
        };
    d("entries", (function () {
        return u.call(f(this))
    })), d("keys", (function () {
        return c.call(f(this))
    })), d("values", g, !p), d(a, g, !p)
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = i.aTypedArray,
        o = [].join;
    i.exportProto("join", (function (e) {
        return o.apply(r(this), arguments)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(141),
        o = i.aTypedArray;
    i.exportProto("lastIndexOf", (function (e) {
        return r.apply(o(this), arguments)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(21).map,
        o = n(51),
        a = i.aTypedArray,
        s = i.aTypedArrayConstructor;
    i.exportProto("map", (function (e) {
        return r(a(this), e, arguments.length > 1 ? arguments[1] : void 0, (function (e, t) {
            return new(s(o(e, e.constructor)))(t)
        }))
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(92).left,
        o = i.aTypedArray;
    i.exportProto("reduce", (function (e) {
        return r(o(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(92).right,
        o = i.aTypedArray;
    i.exportProto("reduceRight", (function (e) {
        return r(o(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = i.aTypedArray,
        o = Math.floor;
    i.exportProto("reverse", (function () {
        for (var e, t = r(this).length, n = o(t / 2), i = 0; i < n;) e = this[i], this[i++] = this[--t], this[t] = e;
        return this
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(5),
        o = n(138),
        a = n(20),
        s = n(2),
        l = i.aTypedArray,
        c = s((function () {
            new Int8Array(1).set({})
        }));
    i.exportProto("set", (function (e) {
        l(this);
        var t = o(arguments.length > 1 ? arguments[1] : void 0, 1),
            n = this.length,
            i = a(e),
            s = r(i.length),
            c = 0;
        if (s + t > n) throw RangeError("Wrong length");
        for (; c < s;) this[t + c] = i[c++]
    }), c)
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(51),
        o = n(2),
        a = i.aTypedArray,
        s = i.aTypedArrayConstructor,
        l = [].slice,
        c = o((function () {
            new Int8Array(1).slice()
        }));
    i.exportProto("slice", (function (e, t) {
        for (var n = l.call(a(this), e, t), i = r(this, this.constructor), o = 0, c = n.length, u = new(s(i))(c); c > o;) u[o] = n[o++];
        return u
    }), c)
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(21).some,
        o = i.aTypedArray;
    i.exportProto("some", (function (e) {
        return r(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = i.aTypedArray,
        o = [].sort;
    i.exportProto("sort", (function (e) {
        return o.call(r(this), e)
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(3),
        r = n(5),
        o = n(50),
        a = n(51),
        s = i.aTypedArray;
    i.exportProto("subarray", (function (e, t) {
        var n = s(this),
            i = n.length,
            l = o(e, i);
        return new(a(n, n.constructor))(n.buffer, n.byteOffset + l * n.BYTES_PER_ELEMENT, r((void 0 === t ? i : o(t, i)) - l))
    }))
}, function (e, t, n) {
    "use strict";
    var i = n(1),
        r = n(3),
        o = n(2),
        a = i.Int8Array,
        s = r.aTypedArray,
        l = [].toLocaleString,
        c = [].slice,
        u = !!a && o((function () {
            l.call(new a(1))
        })),
        f = o((function () {
            return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString()
        })) || !o((function () {
            a.prototype.toLocaleString.call([1, 2])
        }));
    r.exportProto("toLocaleString", (function () {
        return l.apply(u ? c.call(s(this)) : s(this), arguments)
    }), f)
}, function (e, t, n) {
    "use strict";
    var i = n(1),
        r = n(3),
        o = n(2),
        a = i.Uint8Array,
        s = a && a.prototype,
        l = [].toString,
        c = [].join;
    o((function () {
        l.call({})
    })) && (l = function () {
        return c.call(this)
    }), r.exportProto("toString", l, (s || {}).toString != l)
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n(10), n(16), n(17), n(12), n(8), n(23), n(13), n(61), n(7), n(29), n(18), n(19);

        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        /*!
         * Waves v0.7.6
         * http://fian.my.id/Waves
         *
         * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
         * Released under the MIT license
         * https://github.com/fians/Waves/blob/master/LICENSE
         */
        ! function (i, r) {
            "function" == typeof define && n(24) ? define([], (function () {
                return i.Waves = r.call(i), i.Waves
            })) : "object" === ("undefined" == typeof exports ? "undefined" : t(exports)) ? e.exports = r.call(i) : i.Waves = r.call(i)
        }("object" === ("undefined" == typeof window ? "undefined" : t(window)) ? window : void 0, (function () {
            var e = e || {},
                n = document.querySelectorAll.bind(document),
                i = Object.prototype.toString,
                r = "ontouchstart" in window;

            function o(e) {
                var n = t(e);
                return "function" === n || "object" === n && !!e
            }

            function a(e) {
                var t, r = i.call(e);
                return "[object String]" === r ? n(e) : o(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(r) && e.hasOwnProperty("length") ? e : o(t = e) && t.nodeType > 0 ? [e] : []
            }

            function s(e) {
                var n, i, r = {
                        top: 0,
                        left: 0
                    },
                    o = e && e.ownerDocument;
                return n = o.documentElement, "undefined" !== t(e.getBoundingClientRect) && (r = e.getBoundingClientRect()), i = function (e) {
                    return null !== (t = e) && t === t.window ? e : 9 === e.nodeType && e.defaultView;
                    var t
                }(o), {
                    top: r.top + i.pageYOffset - n.clientTop,
                    left: r.left + i.pageXOffset - n.clientLeft
                }
            }

            function l(e) {
                var t = "";
                for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
                return t
            }
            var c = {
                    duration: 750,
                    delay: 200,
                    show: function (e, t, n) {
                        if (2 === e.button) return !1;
                        t = t || this;
                        var i = document.createElement("div");
                        i.className = "waves-ripple waves-rippling", t.appendChild(i);
                        var r = s(t),
                            o = 0,
                            a = 0;
                        "touches" in e && e.touches.length ? (o = e.touches[0].pageY - r.top, a = e.touches[0].pageX - r.left) : (o = e.pageY - r.top, a = e.pageX - r.left), a = a >= 0 ? a : 0, o = o >= 0 ? o : 0;
                        var u = "scale(" + t.clientWidth / 100 * 3 + ")",
                            f = "translate(0,0)";
                        n && (f = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", a), i.setAttribute("data-y", o), i.setAttribute("data-scale", u), i.setAttribute("data-translate", f);
                        var d = {
                            top: o + "px",
                            left: a + "px"
                        };
                        i.classList.add("waves-notransition"), i.setAttribute("style", l(d)), i.classList.remove("waves-notransition"), d["-webkit-transform"] = u + " " + f, d["-moz-transform"] = u + " " + f, d["-ms-transform"] = u + " " + f, d["-o-transform"] = u + " " + f, d.transform = u + " " + f, d.opacity = "1";
                        var h = "mousemove" === e.type ? 2500 : c.duration;
                        d["-webkit-transition-duration"] = h + "ms", d["-moz-transition-duration"] = h + "ms", d["-o-transition-duration"] = h + "ms", d["transition-duration"] = h + "ms", i.setAttribute("style", l(d))
                    },
                    hide: function (e, t) {
                        for (var n = (t = t || this).getElementsByClassName("waves-rippling"), i = 0, o = n.length; i < o; i++) f(e, t, n[i]);
                        r && (t.removeEventListener("touchend", c.hide), t.removeEventListener("touchcancel", c.hide)), t.removeEventListener("mouseup", c.hide), t.removeEventListener("mouseleave", c.hide)
                    }
                },
                u = {
                    input: function (e) {
                        var t = e.parentNode;
                        if ("span" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                            var n = document.createElement("span");
                            n.className = "waves-input-wrapper", t.replaceChild(n, e), n.appendChild(e)
                        }
                    },
                    img: function (e) {
                        var t = e.parentNode;
                        if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                            var n = document.createElement("i");
                            t.replaceChild(n, e), n.appendChild(e)
                        }
                    }
                };

            function f(e, t, n) {
                if (n) {
                    n.classList.remove("waves-rippling");
                    var i = n.getAttribute("data-x"),
                        r = n.getAttribute("data-y"),
                        o = n.getAttribute("data-scale"),
                        a = n.getAttribute("data-translate"),
                        s = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                    s < 0 && (s = 0), "mousemove" === e.type && (s = 150);
                    var u = "mousemove" === e.type ? 2500 : c.duration;
                    setTimeout((function () {
                        var e = {
                            top: r + "px",
                            left: i + "px",
                            opacity: "0",
                            "-webkit-transition-duration": u + "ms",
                            "-moz-transition-duration": u + "ms",
                            "-o-transition-duration": u + "ms",
                            "transition-duration": u + "ms",
                            "-webkit-transform": o + " " + a,
                            "-moz-transform": o + " " + a,
                            "-ms-transform": o + " " + a,
                            "-o-transform": o + " " + a,
                            transform: o + " " + a
                        };
                        n.setAttribute("style", l(e)), setTimeout((function () {
                            try {
                                t.removeChild(n)
                            } catch (e) {
                                return !1
                            }
                        }), u)
                    }), s)
                }
            }
            var d = {
                touches: 0,
                allowEvent: function (e) {
                    var t = !0;
                    return /^(mousedown|mousemove)$/.test(e.type) && d.touches && (t = !1), t
                },
                registerEvent: function (e) {
                    var t = e.type;
                    "touchstart" === t ? d.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout((function () {
                        d.touches && (d.touches -= 1)
                    }), 500)
                }
            };

            function h(e) {
                var t = function (e) {
                    if (!1 === d.allowEvent(e)) return null;
                    for (var t = null, n = e.target || e.srcElement; n.parentElement;) {
                        if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                            t = n;
                            break
                        }
                        n = n.parentElement
                    }
                    return t
                }(e);
                if (null !== t) {
                    if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
                    if (d.registerEvent(e), "touchstart" === e.type && c.delay) {
                        var n = !1,
                            i = setTimeout((function () {
                                i = null, c.show(e, t)
                            }), c.delay),
                            o = function (r) {
                                i && (clearTimeout(i), i = null, c.show(e, t)), n || (n = !0, c.hide(r, t)), s()
                            },
                            a = function (e) {
                                i && (clearTimeout(i), i = null), o(e), s()
                            };
                        t.addEventListener("touchmove", a, !1), t.addEventListener("touchend", o, !1), t.addEventListener("touchcancel", o, !1);
                        var s = function () {
                            t.removeEventListener("touchmove", a), t.removeEventListener("touchend", o), t.removeEventListener("touchcancel", o)
                        }
                    } else c.show(e, t), r && (t.addEventListener("touchend", c.hide, !1), t.addEventListener("touchcancel", c.hide, !1)), t.addEventListener("mouseup", c.hide, !1), t.addEventListener("mouseleave", c.hide, !1)
                }
            }
            return e.init = function (e) {
                var t = document.body;
                "duration" in (e = e || {}) && (c.duration = e.duration), "delay" in e && (c.delay = e.delay), r && (t.addEventListener("touchstart", h, !1), t.addEventListener("touchcancel", d.registerEvent, !1), t.addEventListener("touchend", d.registerEvent, !1)), t.addEventListener("mousedown", h, !1)
            }, e.attach = function (e, t) {
                var n, r;
                e = a(e), "[object Array]" === i.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
                for (var o = 0, s = e.length; o < s; o++) r = (n = e[o]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(r) && (u[r](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + t)
            }, e.ripple = function (e, t) {
                var n = (e = a(e)).length;
                if ((t = t || {}).wait = t.wait || 0, t.position = t.position || null, n)
                    for (var i, r, o, l = {}, u = 0, f = {
                            type: "mousedown",
                            button: 1
                        }, d = function (e, t) {
                            return function () {
                                c.hide(e, t)
                            }
                        }; u < n; u++)
                        if (i = e[u], r = t.position || {
                                x: i.clientWidth / 2,
                                y: i.clientHeight / 2
                            }, o = s(i), l.x = o.left + r.x, l.y = o.top + r.y, f.pageX = l.x, f.pageY = l.y, c.show(f, i), t.wait >= 0 && null !== t.wait) {
                            setTimeout(d({
                                type: "mouseup",
                                button: 1
                            }, i), t.wait)
                        }
            }, e.calm = function (e) {
                for (var t = {
                        type: "mouseup",
                        button: 1
                    }, n = 0, i = (e = a(e)).length; n < i; n++) c.hide(t, e[n])
            }, e.displayEffect = function (t) {
                console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), e.init(t)
            }, e
        })), $(document).ready((function () {
            Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".chip", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init()
        }))
    }).call(this, n(27)(e))
}, function (e, t, n) {
    "use strict";
    n(6), n(23), n(32), n(61), n(14), n(35);

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    jQuery((function (e) {
        (new(function () {
            function t() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.inputSelector = "".concat(["text", "password", "email", "url", "tel", "number", "search", "search-md"].map((function (e) {
                    return "input[type=".concat(e, "]")
                })).join(", "), ", textarea"), this.textAreaSelector = ".materialize-textarea", this.$text = e(".md-textarea-auto"), this.$body = e("body"), this.$document = e(document)
            }
            var n, r, o;
            return n = t, (r = [{
                key: "init",
                value: function () {
                    var t, n = this;
                    this.$text.length && (t = window.attachEvent ? function (e, t, n) {
                        e.attachEvent("on".concat(t), n)
                    } : function (e, t, n) {
                        e.addEventListener(t, n, !1)
                    }, this.$text.each((function () {
                        var e = this;

                        function n() {
                            e.style.height = "auto", e.style.height = "".concat(e.scrollHeight, "px")
                        }

                        function i() {
                            window.setTimeout(n, 0)
                        }
                        t(e, "change", n), t(e, "cut", i), t(e, "paste", i), t(e, "drop", i), t(e, "keydown", i), n()
                    }))), e(this.inputSelector).each((function (t, i) {
                        var r = e(i),
                            o = i.validity.badInput;
                        n.updateTextFields(r), o && n.toggleActiveClass(r, "add")
                    })), this.addOnFocusEvent(), this.addOnBlurEvent(), this.addOnChangeEvent(), this.addOnResetEvent(), this.appendHiddenDiv(), this.ChangeDateInputType(), this.makeActiveAutofocus(), e(this.textAreaSelector).each(this.textAreaAutoResize), this.$body.on("keyup keydown", this.textAreaSelector, this.textAreaAutoResize)
                }
            }, {
                key: "makeActiveAutofocus",
                value: function () {
                    this.toggleActiveClass(e("input[autofocus]"), "add")
                }
            }, {
                key: "toggleActiveClass",
                value: function (e, t) {
                    var n;
                    t = "".concat(t, "Class"), n = e.parent().hasClass("timepicker") ? "label" : "label, i, .input-prefix", e.siblings(n)[t]("active")
                }
            }, {
                key: "addOnFocusEvent",
                value: function () {
                    var t = this;
                    this.$document.on("focus", this.inputSelector, (function (n) {
                        t.toggleActiveClass(e(n.target), "add")
                    }))
                }
            }, {
                key: "addOnBlurEvent",
                value: function () {
                    var t = this;
                    this.$document.on("blur", this.inputSelector, (function (n) {
                        var i = e(n.target),
                            r = !i.val(),
                            o = !n.target.validity.badInput,
                            a = void 0 === i.attr("placeholder");
                        r && o && a && t.toggleActiveClass(i, "remove"), !r && o && a && i.siblings("i, .input-prefix").removeClass("active"), t.validateField(i)
                    }))
                }
            }, {
                key: "addOnChangeEvent",
                value: function () {
                    var t = this;
                    this.$document.on("change", this.inputSelector, (function (n) {
                        var i = e(n.target);
                        t.updateTextFields(i), t.validateField(i)
                    }))
                }
            }, {
                key: "addOnResetEvent",
                value: function () {
                    var t = this;
                    this.$document.on("reset", (function (n) {
                        var i = e(n.target);
                        i.is("form") && (i.find(t.inputSelector).removeClass("valid invalid").each((function (n, i) {
                            var r = e(i),
                                o = !r.val(),
                                a = !r.attr("placeholder");
                            o && a && t.toggleActiveClass(r, "remove")
                        })), i.find("select.initialized").each((function (t, n) {
                            var i = e(n),
                                r = i.siblings("input.select-dropdown"),
                                o = i.children("[selected]").val();
                            i.val(o), r.val(o)
                        })))
                    }))
                }
            }, {
                key: "appendHiddenDiv",
                value: function () {
                    if (!e(".hiddendiv").first().length) {
                        var t = e('<div class="hiddendiv common"></div>');
                        this.$body.append(t)
                    }
                }
            }, {
                key: "updateTextFields",
                value: function (e) {
                    var t = Boolean(e.val().length),
                        n = Boolean(e.attr("placeholder")),
                        i = t || n ? "add" : "remove";
                    this.toggleActiveClass(e, i)
                }
            }, {
                key: "validateField",
                value: function (e) {
                    if (e.hasClass("validate")) {
                        var t = e.val(),
                            n = !t.length,
                            i = !e[0].validity.badInput;
                        if (n && i) e.removeClass("valid").removeClass("invalid");
                        else {
                            var r = e[0].validity.valid,
                                o = Number(e.attr("length")) || 0;
                            r && (!o || o > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
                        }
                    }
                }
            }, {
                key: "ChangeDateInputType",
                value: function () {
                    var t = e('input[type="date"]');
                    t.each((function (e, t) {
                        t.type = "text"
                    })), t.on("focus", (function (e) {
                        e.target.type = "date"
                    })), t.on("blur", (function (t) {
                        t.target.type = "text", 0 === t.target.value.length && e("label[for=".concat(t.target.id, "]")).removeClass("active")
                    }))
                }
            }, {
                key: "textAreaAutoResize",
                value: function () {
                    var t = e(this);
                    if (t.val().length) {
                        var n = e(".hiddendiv"),
                            i = t.css("font-family"),
                            r = t.css("font-size");
                        r && n.css("font-size", r), i && n.css("font-family", i), "off" === t.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text("".concat(t.val(), "\n"));
                        var o = n.html().replace(/\n/g, "<br>");
                        n.html(o), n.css("width", t.is(":visible") ? t.width() : e(window).width() / 2), t.css("height", n.height())
                    }
                }
            }]) && i(n.prototype, r), o && i(n, o), t
        }())).init()
    }))
}, function (e, t) {
    jQuery((function (e) {
        e(window).on("scroll", (function () {
            var t = e(".navbar");
            t.length && e(".scrolling-navbar")[t.offset().top > 50 ? "addClass" : "removeClass"]("top-nav-collapse")
        }))
    }))
}, function (e, t, n) {
    "use strict";
    n(6);
    jQuery((function (e) {
        e.fn.mdbTreeview = function () {
            var t = e(this);
            t.hasClass("treeview") && function (t) {
                t.find(".rotate").each((function () {
                    var t = e(this);
                    t.off("click"), t.on("click", (function () {
                        var t = e(this);
                        t.siblings(".nested").toggleClass("active"), t.toggleClass("down")
                    }))
                }))
            }(t), t.hasClass("treeview-animated") && function (t) {
                var n = t.find(".treeview-animated-element"),
                    i = t.find(".closed");
                t.find(".nested").hide(), i.off("click"), i.on("click", (function () {
                    var t = e(this),
                        n = t.siblings(".nested"),
                        i = t.children(".fa-angle-right");
                    t.toggleClass("open"), i.toggleClass("down"), n.hasClass("active") ? n.removeClass("active").slideUp() : n.addClass("active").slideDown()
                })), n.off("click"), n.on("click", (function () {
                    var t = e(this);
                    t.hasClass("opened") ? t.removeClass("opened") : (n.removeClass("opened"), t.addClass("opened"))
                }))
            }(t), t.hasClass("treeview-colorful") && function (t) {
                var n = t.find(".treeview-colorful-element"),
                    i = t.find(".treeview-colorful-items-header");
                t.find(".nested").hide(), i.off("click"), i.on("click", (function () {
                    var t = e(this),
                        n = t.siblings(".nested"),
                        i = t.children(".fa-plus-circle"),
                        r = t.children(".fa-minus-circle");
                    t.toggleClass("open"), i.removeClass("fa-plus-circle"), i.addClass("fa-minus-circle"), r.removeClass("fa-minus-circle"), r.addClass("fa-plus-circle"), n.hasClass("active") ? n.removeClass("active").slideUp() : n.addClass("active").slideDown()
                })), n.off("click"), n.on("click", (function () {
                    var t = e(this);
                    t.hasClass("opened") ? n.removeClass("opened") : (n.removeClass("opened"), t.addClass("opened"))
                }))
            }(t)
        }
    }))
}, function (e, t, n) {
    "use strict";
    n(28), n(13), n(7), n(29);

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function o(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }
    jQuery((function (e) {
        var t = function () {
                function t() {
                    i(this, t)
                }
                return o(t, [{
                    key: "init",
                    value: function () {
                        e(".wow").wow()
                    }
                }]), t
            }(),
            n = function () {
                function t(e, n) {
                    i(this, t), this.$wowElement = e, this.customization = n, this.animated = !0, this.options = this.assignElementCustomization()
                }
                return o(t, [{
                    key: "init",
                    value: function () {
                        var t = this;
                        e(window).scroll((function () {
                            t.animated ? t.hide() : t.mdbWow()
                        })), this.appear()
                    }
                }, {
                    key: "assignElementCustomization",
                    value: function () {
                        return {
                            animationName: this.$wowElement.css("animation-name"),
                            offset: 100,
                            iteration: this.fallback().or(this.$wowElement.data("wow-iteration")).or(1).value(),
                            duration: this.fallback().or(this.$wowElement.data("wow-duration")).or(1e3).value(),
                            delay: this.fallback().or(this.$wowElement.data("wow-delay")).or(0).value()
                        }
                    }
                }, {
                    key: "mdbWow",
                    value: function () {
                        var e = this;
                        "visible" !== this.$wowElement.css("visibility") && this.shouldElementBeVisible(!0) && (setTimeout((function () {
                            return e.$wowElement.removeClass("animated")
                        }), this.countRemoveTime()), this.appear())
                    }
                }, {
                    key: "appear",
                    value: function () {
                        this.$wowElement.addClass("animated"), this.$wowElement.css({
                            visibility: "visible",
                            "animation-name": this.options.animationName,
                            "animation-iteration-count": this.options.iteration,
                            "animation-duration": this.options.duration,
                            "animation-delay": this.options.delay
                        })
                    }
                }, {
                    key: "hide",
                    value: function () {
                        var e = this;
                        this.shouldElementBeVisible(!1) ? (this.$wowElement.removeClass("animated"), this.$wowElement.css({
                            "animation-name": "none",
                            visibility: "hidden"
                        })) : setTimeout((function () {
                            e.$wowElement.removeClass("animated")
                        }), this.countRemoveTime()), this.mdbWow(), this.animated = !this.animated
                    }
                }, {
                    key: "shouldElementBeVisible",
                    value: function (t) {
                        var n = this.getOffset(this.$wowElement[0]),
                            i = this.$wowElement.height(),
                            r = e(document).height(),
                            o = window.innerHeight,
                            a = window.scrollY,
                            s = o + a - this.options.offset > n,
                            l = o + a - this.options.offset > n + i,
                            c = a < n,
                            u = a < n + i,
                            f = o + a === r,
                            d = n + this.options.offset > r,
                            h = o + a - this.options.offset < n,
                            p = a > n + this.options.offset,
                            g = a < n + this.options.offset,
                            v = n + i > r - this.options.offset;
                        return t ? s && c || l && u || f && d : s && p || h && g || v
                    }
                }, {
                    key: "countRemoveTime",
                    value: function () {
                        var e = 1e3 * this.$wowElement.css("animation-duration").slice(0, -1),
                            t = 0;
                        return this.options.duration && (t = e + this.checkOptionsStringFormat(this.options.duration)), this.options.delay && (t += this.checkOptionsStringFormat(this.options.delay)), t
                    }
                }, {
                    key: "checkOptionsStringFormat",
                    value: function (e) {
                        var t;
                        if ("s" === e.toString().slice(-1)) t = e.toString().slice(0, -1);
                        else {
                            if (isNaN(e.toString().slice(-1))) return console.log("Not supported animation customization format.");
                            t = e
                        }
                        return t
                    }
                }, {
                    key: "getOffset",
                    value: function (e) {
                        var t = e.getBoundingClientRect(),
                            n = document.body,
                            i = document.documentElement,
                            r = window.pageYOffset || i.scrollTop || n.scrollTop,
                            o = i.clientTop || n.clientTop || 0,
                            a = t.top + r - o;
                        return Math.round(a)
                    }
                }, {
                    key: "fallback",
                    value: function () {
                        return {
                            _value: void 0,
                            or: function (e) {
                                return void 0 !== e && void 0 === this._value && (this._value = e), this
                            },
                            value: function () {
                                return this._value
                            }
                        }
                    }
                }]), t
            }();
        e.fn.wow = function (t) {
            this.each((function () {
                new n(e(this), t).init()
            }))
        }, window.WOW = t
    }))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var t, i;
        n(10), n(16), n(17), n(213), n(36), n(38), n(12), n(8), n(23), n(52), n(13), n(44), n(7), n(43), n(14), n(18), n(42), n(30), n(40), n(19);

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        /*!
         * perfect-scrollbar v1.5.0
         * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
         * Licensed under MIT
         */
        t = void 0, i = function () {
            function e(e) {
                return getComputedStyle(e)
            }

            function t(e, t) {
                for (var n in t) {
                    var i = t[n];
                    "number" == typeof i && (i += "px"), e.style[n] = i
                }
                return e
            }

            function n(e) {
                var t = document.createElement("div");
                return t.className = e, t
            }
            var i = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

            function r(e, t) {
                if (!i) throw new Error("No element matching method supported");
                return i.call(e, t)
            }

            function o(e) {
                e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
            }

            function a(e, t) {
                return Array.prototype.filter.call(e.children, (function (e) {
                    return r(e, t)
                }))
            }
            var s = {
                    main: "ps",
                    rtl: "ps__rtl",
                    element: {
                        thumb: function (e) {
                            return "ps__thumb-" + e
                        },
                        rail: function (e) {
                            return "ps__rail-" + e
                        },
                        consuming: "ps__child--consume"
                    },
                    state: {
                        focus: "ps--focus",
                        clicking: "ps--clicking",
                        active: function (e) {
                            return "ps--active-" + e
                        },
                        scrolling: function (e) {
                            return "ps--scrolling-" + e
                        }
                    }
                },
                l = {
                    x: null,
                    y: null
                };

            function c(e, t) {
                var n = e.element.classList,
                    i = s.state.scrolling(t);
                n.contains(i) ? clearTimeout(l[t]) : n.add(i)
            }

            function u(e, t) {
                l[t] = setTimeout((function () {
                    return e.isAlive && e.element.classList.remove(s.state.scrolling(t))
                }), e.settings.scrollingThreshold)
            }
            var f = function (e) {
                    this.element = e, this.handlers = {}
                },
                d = {
                    isEmpty: {
                        configurable: !0
                    }
                };
            f.prototype.bind = function (e, t) {
                void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1)
            }, f.prototype.unbind = function (e, t) {
                var n = this;
                this.handlers[e] = this.handlers[e].filter((function (i) {
                    return !(!t || i === t) || (n.element.removeEventListener(e, i, !1), !1)
                }))
            }, f.prototype.unbindAll = function () {
                for (var e in this.handlers) this.unbind(e)
            }, d.isEmpty.get = function () {
                var e = this;
                return Object.keys(this.handlers).every((function (t) {
                    return 0 === e.handlers[t].length
                }))
            }, Object.defineProperties(f.prototype, d);
            var h = function () {
                this.eventElements = []
            };

            function p(e) {
                if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
                var t = document.createEvent("CustomEvent");
                return t.initCustomEvent(e, !1, !1, void 0), t
            }

            function g(e, t, n, i, r) {
                var o;
                if (void 0 === i && (i = !0), void 0 === r && (r = !1), "top" === t) o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
                else {
                    if ("left" !== t) throw new Error("A proper axis should be provided");
                    o = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
                }! function (e, t, n, i, r) {
                    var o = n[0],
                        a = n[1],
                        s = n[2],
                        l = n[3],
                        f = n[4],
                        d = n[5];
                    void 0 === i && (i = !0), void 0 === r && (r = !1);
                    var h = e.element;
                    e.reach[l] = null, h[s] < 1 && (e.reach[l] = "start"), h[s] > e[o] - e[a] - 1 && (e.reach[l] = "end"), t && (h.dispatchEvent(p("ps-scroll-" + l)), t < 0 ? h.dispatchEvent(p("ps-scroll-" + f)) : t > 0 && h.dispatchEvent(p("ps-scroll-" + d)), i && function (e, t) {
                        c(e, t), u(e, t)
                    }(e, l)), e.reach[l] && (t || r) && h.dispatchEvent(p("ps-" + l + "-reach-" + e.reach[l]))
                }(e, n, o, i, r)
            }

            function v(e) {
                return parseInt(e, 10) || 0
            }
            h.prototype.eventElement = function (e) {
                var t = this.eventElements.filter((function (t) {
                    return t.element === e
                }))[0];
                return t || (t = new f(e), this.eventElements.push(t)), t
            }, h.prototype.bind = function (e, t, n) {
                this.eventElement(e).bind(t, n)
            }, h.prototype.unbind = function (e, t, n) {
                var i = this.eventElement(e);
                i.unbind(t, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1)
            }, h.prototype.unbindAll = function () {
                this.eventElements.forEach((function (e) {
                    return e.unbindAll()
                })), this.eventElements = []
            }, h.prototype.once = function (e, t, n) {
                var i = this.eventElement(e);
                i.bind(t, (function e(r) {
                    i.unbind(t, e), n(r)
                }))
            };
            var m = {
                isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
                supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
                isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
            };

            function y(e) {
                var n = e.element,
                    i = Math.floor(n.scrollTop),
                    r = n.getBoundingClientRect();
                e.containerWidth = Math.ceil(r.width), e.containerHeight = Math.ceil(r.height), e.contentWidth = n.scrollWidth, e.contentHeight = n.scrollHeight, n.contains(e.scrollbarXRail) || (a(n, s.element.rail("x")).forEach((function (e) {
                        return o(e)
                    })), n.appendChild(e.scrollbarXRail)), n.contains(e.scrollbarYRail) || (a(n, s.element.rail("y")).forEach((function (e) {
                        return o(e)
                    })), n.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = b(e, v(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = v((e.negativeScrollAdjustment + n.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = b(e, v(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = v(i * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                    function (e, n) {
                        var i = {
                                width: n.railXWidth
                            },
                            r = Math.floor(e.scrollTop);
                        n.isRtl ? i.left = n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : i.left = e.scrollLeft, n.isScrollbarXUsingBottom ? i.bottom = n.scrollbarXBottom - r : i.top = n.scrollbarXTop + r, t(n.scrollbarXRail, i);
                        var o = {
                            top: r,
                            height: n.railYHeight
                        };
                        n.isScrollbarYUsingRight ? n.isRtl ? o.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth - 9 : o.right = n.scrollbarYRight - e.scrollLeft : n.isRtl ? o.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : o.left = n.scrollbarYLeft + e.scrollLeft, t(n.scrollbarYRail, o), t(n.scrollbarX, {
                            left: n.scrollbarXLeft,
                            width: n.scrollbarXWidth - n.railBorderXWidth
                        }), t(n.scrollbarY, {
                            top: n.scrollbarYTop,
                            height: n.scrollbarYHeight - n.railBorderYWidth
                        })
                    }(n, e), e.scrollbarXActive ? n.classList.add(s.state.active("x")) : (n.classList.remove(s.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, n.scrollLeft = !0 === e.isRtl ? e.contentWidth : 0), e.scrollbarYActive ? n.classList.add(s.state.active("y")) : (n.classList.remove(s.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, n.scrollTop = 0)
            }

            function b(e, t) {
                return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
            }

            function w(e, t) {
                var n = t[0],
                    i = t[1],
                    r = t[2],
                    o = t[3],
                    a = t[4],
                    l = t[5],
                    f = t[6],
                    d = t[7],
                    h = t[8],
                    p = e.element,
                    g = null,
                    v = null,
                    m = null;

                function b(t) {
                    t.touches && t.touches[0] && (t[r] = t.touches[0].pageY), p[f] = g + m * (t[r] - v), c(e, d), y(e), t.stopPropagation(), t.preventDefault()
                }

                function w() {
                    u(e, d), e[h].classList.remove(s.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", b)
                }

                function x(t, a) {
                    g = p[f], a && t.touches && (t[r] = t.touches[0].pageY), v = t[r], m = (e[i] - e[n]) / (e[o] - e[l]), a ? e.event.bind(e.ownerDocument, "touchmove", b) : (e.event.bind(e.ownerDocument, "mousemove", b), e.event.once(e.ownerDocument, "mouseup", w), t.preventDefault()), e[h].classList.add(s.state.clicking), t.stopPropagation()
                }
                e.event.bind(e[a], "mousedown", (function (e) {
                    x(e)
                })), e.event.bind(e[a], "touchstart", (function (e) {
                    x(e, !0)
                }))
            }
            var x = {
                    "click-rail": function (e) {
                        e.element, e.event.bind(e.scrollbarY, "mousedown", (function (e) {
                            return e.stopPropagation()
                        })), e.event.bind(e.scrollbarYRail, "mousedown", (function (t) {
                            var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                            e.element.scrollTop += n * e.containerHeight, y(e), t.stopPropagation()
                        })), e.event.bind(e.scrollbarX, "mousedown", (function (e) {
                            return e.stopPropagation()
                        })), e.event.bind(e.scrollbarXRail, "mousedown", (function (t) {
                            var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                            e.element.scrollLeft += n * e.containerWidth, y(e), t.stopPropagation()
                        }))
                    },
                    "drag-thumb": function (e) {
                        w(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), w(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
                    },
                    keyboard: function (e) {
                        var t = e.element;
                        e.event.bind(e.ownerDocument, "keydown", (function (n) {
                            if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && (r(t, ":hover") || r(e.scrollbarX, ":focus") || r(e.scrollbarY, ":focus"))) {
                                var i, o = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                                if (o) {
                                    if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;
                                    else
                                        for (; o.shadowRoot;) o = o.shadowRoot.activeElement;
                                    if (r(i = o, "input,[contenteditable]") || r(i, "select,[contenteditable]") || r(i, "textarea,[contenteditable]") || r(i, "button,[contenteditable]")) return
                                }
                                var a = 0,
                                    s = 0;
                                switch (n.which) {
                                    case 37:
                                        a = n.metaKey ? -e.contentWidth : n.altKey ? -e.containerWidth : -30;
                                        break;
                                    case 38:
                                        s = n.metaKey ? e.contentHeight : n.altKey ? e.containerHeight : 30;
                                        break;
                                    case 39:
                                        a = n.metaKey ? e.contentWidth : n.altKey ? e.containerWidth : 30;
                                        break;
                                    case 40:
                                        s = n.metaKey ? -e.contentHeight : n.altKey ? -e.containerHeight : -30;
                                        break;
                                    case 32:
                                        s = n.shiftKey ? e.containerHeight : -e.containerHeight;
                                        break;
                                    case 33:
                                        s = e.containerHeight;
                                        break;
                                    case 34:
                                        s = -e.containerHeight;
                                        break;
                                    case 36:
                                        s = e.contentHeight;
                                        break;
                                    case 35:
                                        s = -e.contentHeight;
                                        break;
                                    default:
                                        return
                                }
                                e.settings.suppressScrollX && 0 !== a || e.settings.suppressScrollY && 0 !== s || (t.scrollTop -= s, t.scrollLeft += a, y(e), function (n, i) {
                                    var r = Math.floor(t.scrollTop);
                                    if (0 === n) {
                                        if (!e.scrollbarYActive) return !1;
                                        if (0 === r && i > 0 || r >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation
                                    }
                                    var o = t.scrollLeft;
                                    if (0 === i) {
                                        if (!e.scrollbarXActive) return !1;
                                        if (0 === o && n < 0 || o >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                                    }
                                    return !0
                                }(a, s) && n.preventDefault())
                            }
                        }))
                    },
                    wheel: function (t) {
                        var n = t.element;

                        function i(i) {
                            var r = function (e) {
                                    var t = e.deltaX,
                                        n = -1 * e.deltaY;
                                    return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
                                }(i),
                                o = r[0],
                                a = r[1];
                            if (! function (t, i, r) {
                                    if (!m.isWebKit && n.querySelector("select:focus")) return !0;
                                    if (!n.contains(t)) return !1;
                                    for (var o = t; o && o !== n;) {
                                        if (o.classList.contains(s.element.consuming)) return !0;
                                        var a = e(o);
                                        if (r && a.overflowY.match(/(scroll|auto)/)) {
                                            var l = o.scrollHeight - o.clientHeight;
                                            if (l > 0 && (o.scrollTop > 0 && r < 0 || o.scrollTop < l && r > 0)) return !0
                                        }
                                        if (i && a.overflowX.match(/(scroll|auto)/)) {
                                            var c = o.scrollWidth - o.clientWidth;
                                            if (c > 0 && (o.scrollLeft > 0 && i < 0 || o.scrollLeft < c && i > 0)) return !0
                                        }
                                        o = o.parentNode
                                    }
                                    return !1
                                }(i.target, o, a)) {
                                var l = !1;
                                t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (a ? n.scrollTop -= a * t.settings.wheelSpeed : n.scrollTop += o * t.settings.wheelSpeed, l = !0) : t.scrollbarXActive && !t.scrollbarYActive && (o ? n.scrollLeft += o * t.settings.wheelSpeed : n.scrollLeft -= a * t.settings.wheelSpeed, l = !0) : (n.scrollTop -= a * t.settings.wheelSpeed, n.scrollLeft += o * t.settings.wheelSpeed), y(t), (l = l || function (e, i) {
                                    var r = Math.floor(n.scrollTop),
                                        o = 0 === n.scrollTop,
                                        a = r + n.offsetHeight === n.scrollHeight,
                                        s = 0 === n.scrollLeft,
                                        l = n.scrollLeft + n.offsetWidth === n.scrollWidth;
                                    return !(Math.abs(i) > Math.abs(e) ? o || a : s || l) || !t.settings.wheelPropagation
                                }(o, a)) && !i.ctrlKey && (i.stopPropagation(), i.preventDefault())
                            }
                        }
                        void 0 !== window.onwheel ? t.event.bind(n, "wheel", i) : void 0 !== window.onmousewheel && t.event.bind(n, "mousewheel", i)
                    },
                    touch: function (t) {
                        if (m.supportsTouch || m.supportsIePointer) {
                            var n = t.element,
                                i = {},
                                r = 0,
                                o = {},
                                a = null;
                            m.supportsTouch ? (t.event.bind(n, "touchstart", f), t.event.bind(n, "touchmove", d), t.event.bind(n, "touchend", h)) : m.supportsIePointer && (window.PointerEvent ? (t.event.bind(n, "pointerdown", f), t.event.bind(n, "pointermove", d), t.event.bind(n, "pointerup", h)) : window.MSPointerEvent && (t.event.bind(n, "MSPointerDown", f), t.event.bind(n, "MSPointerMove", d), t.event.bind(n, "MSPointerUp", h)))
                        }

                        function l(e, i) {
                            n.scrollTop -= i, n.scrollLeft -= e, y(t)
                        }

                        function c(e) {
                            return e.targetTouches ? e.targetTouches[0] : e
                        }

                        function u(e) {
                            return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                        }

                        function f(e) {
                            if (u(e)) {
                                var t = c(e);
                                i.pageX = t.pageX, i.pageY = t.pageY, r = (new Date).getTime(), null !== a && clearInterval(a)
                            }
                        }

                        function d(a) {
                            if (u(a)) {
                                var f = c(a),
                                    d = {
                                        pageX: f.pageX,
                                        pageY: f.pageY
                                    },
                                    h = d.pageX - i.pageX,
                                    p = d.pageY - i.pageY;
                                if (function (t, i, r) {
                                        if (!n.contains(t)) return !1;
                                        for (var o = t; o && o !== n;) {
                                            if (o.classList.contains(s.element.consuming)) return !0;
                                            var a = e(o);
                                            if (r && a.overflowY.match(/(scroll|auto)/)) {
                                                var l = o.scrollHeight - o.clientHeight;
                                                if (l > 0 && (o.scrollTop > 0 && r < 0 || o.scrollTop < l && r > 0)) return !0
                                            }
                                            if (i && a.overflowX.match(/(scroll|auto)/)) {
                                                var c = o.scrollWidth - o.clientWidth;
                                                if (c > 0 && (o.scrollLeft > 0 && i < 0 || o.scrollLeft < c && i > 0)) return !0
                                            }
                                            o = o.parentNode
                                        }
                                        return !1
                                    }(a.target, h, p)) return;
                                l(h, p), i = d;
                                var g = (new Date).getTime(),
                                    v = g - r;
                                v > 0 && (o.x = h / v, o.y = p / v, r = g),
                                    function (e, i) {
                                        var r = Math.floor(n.scrollTop),
                                            o = n.scrollLeft,
                                            a = Math.abs(e),
                                            s = Math.abs(i);
                                        if (s > a) {
                                            if (i < 0 && r === t.contentHeight - t.containerHeight || i > 0 && 0 === r) return 0 === window.scrollY && i > 0 && m.isChrome
                                        } else if (a > s && (e < 0 && o === t.contentWidth - t.containerWidth || e > 0 && 0 === o)) return !0;
                                        return !0
                                    }(h, p) && a.preventDefault()
                            }
                        }

                        function h() {
                            t.settings.swipeEasing && (clearInterval(a), a = setInterval((function () {
                                t.isInitialized ? clearInterval(a) : o.x || o.y ? Math.abs(o.x) < .01 && Math.abs(o.y) < .01 ? clearInterval(a) : (l(30 * o.x, 30 * o.y), o.x *= .8, o.y *= .8) : clearInterval(a)
                            }), 10))
                        }
                    }
                },
                S = function (i, r) {
                    var o = this;
                    if (void 0 === r && (r = {}), "string" == typeof i && (i = document.querySelector(i)), !i || !i.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
                    for (var a in this.element = i, i.classList.add(s.main), this.settings = {
                            handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                            maxScrollbarLength: null,
                            minScrollbarLength: null,
                            scrollingThreshold: 1e3,
                            scrollXMarginOffset: 0,
                            scrollYMarginOffset: 0,
                            suppressScrollX: !1,
                            suppressScrollY: !1,
                            swipeEasing: !0,
                            useBothWheelAxes: !1,
                            wheelPropagation: !0,
                            wheelSpeed: 1
                        }, r) this.settings[a] = r[a];
                    this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
                    var l, c, u = function () {
                            return i.classList.add(s.state.focus)
                        },
                        f = function () {
                            return i.classList.remove(s.state.focus)
                        };
                    this.isRtl = "rtl" === e(i).direction, !0 === this.isRtl && i.classList.add(s.rtl), this.isNegativeScroll = (c = i.scrollLeft, i.scrollLeft = -1, l = i.scrollLeft < 0, i.scrollLeft = c, l), this.negativeScrollAdjustment = this.isNegativeScroll ? i.scrollWidth - i.clientWidth : 0, this.event = new h, this.ownerDocument = i.ownerDocument || document, this.scrollbarXRail = n(s.element.rail("x")), i.appendChild(this.scrollbarXRail), this.scrollbarX = n(s.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", u), this.event.bind(this.scrollbarX, "blur", f), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
                    var d = e(this.scrollbarXRail);
                    this.scrollbarXBottom = parseInt(d.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = v(d.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = v(d.borderLeftWidth) + v(d.borderRightWidth), t(this.scrollbarXRail, {
                        display: "block"
                    }), this.railXMarginWidth = v(d.marginLeft) + v(d.marginRight), t(this.scrollbarXRail, {
                        display: ""
                    }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = n(s.element.rail("y")), i.appendChild(this.scrollbarYRail), this.scrollbarY = n(s.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", u), this.event.bind(this.scrollbarY, "blur", f), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
                    var p = e(this.scrollbarYRail);
                    this.scrollbarYRight = parseInt(p.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = v(p.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function (t) {
                        var n = e(t);
                        return v(n.width) + v(n.paddingLeft) + v(n.paddingRight) + v(n.borderLeftWidth) + v(n.borderRightWidth)
                    }(this.scrollbarY) : null, this.railBorderYWidth = v(p.borderTopWidth) + v(p.borderBottomWidth), t(this.scrollbarYRail, {
                        display: "block"
                    }), this.railYMarginHeight = v(p.marginTop) + v(p.marginBottom), t(this.scrollbarYRail, {
                        display: ""
                    }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                        x: i.scrollLeft <= 0 ? "start" : i.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                        y: i.scrollTop <= 0 ? "start" : i.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
                    }, this.isAlive = !0, this.settings.handlers.forEach((function (e) {
                        return x[e](o)
                    })), this.lastScrollTop = Math.floor(i.scrollTop), this.lastScrollLeft = i.scrollLeft, this.event.bind(this.element, "scroll", (function (e) {
                        return o.onScroll(e)
                    })), y(this)
                };
            return S.prototype.update = function () {
                this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, t(this.scrollbarXRail, {
                    display: "block"
                }), t(this.scrollbarYRail, {
                    display: "block"
                }), this.railXMarginWidth = v(e(this.scrollbarXRail).marginLeft) + v(e(this.scrollbarXRail).marginRight), this.railYMarginHeight = v(e(this.scrollbarYRail).marginTop) + v(e(this.scrollbarYRail).marginBottom), t(this.scrollbarXRail, {
                    display: "none"
                }), t(this.scrollbarYRail, {
                    display: "none"
                }), y(this), g(this, "top", 0, !1, !0), g(this, "left", 0, !1, !0), t(this.scrollbarXRail, {
                    display: ""
                }), t(this.scrollbarYRail, {
                    display: ""
                }))
            }, S.prototype.onScroll = function (e) {
                this.isAlive && (y(this), g(this, "top", this.element.scrollTop - this.lastScrollTop), g(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
            }, S.prototype.destroy = function () {
                this.isAlive && (this.event.unbindAll(), o(this.scrollbarX), o(this.scrollbarY), o(this.scrollbarXRail), o(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
            }, S.prototype.removePsClasses = function () {
                this.element.className = this.element.className.split(" ").filter((function (e) {
                    return !e.match(/^ps([-_].+|)$/)
                })).join(" ")
            }, S
        }, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) && void 0 !== e ? e.exports = i() : "function" == typeof define && n(24) ? define(i) : (t = t || self).PerfectScrollbar = i()
    }).call(this, n(27)(e))
}, function (e, t, n) {
    "use strict";
    var i = n(0),
        r = n(21).every;
    i({
        target: "Array",
        proto: !0,
        forced: n(45)("every")
    }, {
        every: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n(13), n(46);
        ! function (e) {
            e(["jquery"], (function (e) {
                return function () {
                    var t, n, i, r = 0,
                        o = {
                            error: "error",
                            info: "info",
                            success: "success",
                            warning: "warning"
                        },
                        a = {
                            clear: function (n, i) {
                                var r = f();
                                t || s(r);
                                l(n, r, i) || function (n) {
                                    for (var i = t.children(), r = i.length - 1; r >= 0; r--) l(e(i[r]), n)
                                }(r)
                            },
                            remove: function (n) {
                                var i = f();
                                t || s(i);
                                if (n && 0 === e(":focus", n).length) return void d(n);
                                t.children().length && t.remove()
                            },
                            error: function (e, t, n) {
                                return u({
                                    type: o.error,
                                    iconClass: f().iconClasses.error,
                                    message: e,
                                    optionsOverride: n,
                                    title: t
                                })
                            },
                            getContainer: s,
                            info: function (e, t, n) {
                                return u({
                                    type: o.info,
                                    iconClass: f().iconClasses.info,
                                    message: e,
                                    optionsOverride: n,
                                    title: t
                                })
                            },
                            options: {},
                            subscribe: function (e) {
                                n = e
                            },
                            success: function (e, t, n) {
                                return u({
                                    type: o.success,
                                    iconClass: f().iconClasses.success,
                                    message: e,
                                    optionsOverride: n,
                                    title: t
                                })
                            },
                            version: "2.1.1",
                            warning: function (e, t, n) {
                                return u({
                                    type: o.warning,
                                    iconClass: f().iconClasses.warning,
                                    message: e,
                                    optionsOverride: n,
                                    title: t
                                })
                            }
                        };
                    return a;

                    function s(n, i) {
                        return n || (n = f()), (t = e("#" + n.containerId)).length ? t : (i && (t = function (n) {
                            return (t = e("<div/>").attr("id", n.containerId).addClass(n.positionClass).attr("aria-live", "polite").attr("role", "alert")).appendTo(e(n.target)), t
                        }(n)), t)
                    }

                    function l(t, n, i) {
                        var r = !(!i || !i.force) && i.force;
                        return !(!t || !r && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
                            duration: n.hideDuration,
                            easing: n.hideEasing,
                            complete: function () {
                                d(t)
                            }
                        }), !0)
                    }

                    function c(e) {
                        n && n(e)
                    }

                    function u(n) {
                        var o = f(),
                            a = n.iconClass || o.iconClass;
                        if (void 0 !== n.optionsOverride && (o = e.extend(o, n.optionsOverride), a = n.optionsOverride.iconClass || a), ! function (e, t) {
                                if (e.preventDuplicates) {
                                    if (t.message === i) return !0;
                                    i = t.message
                                }
                                return !1
                            }(o, n)) {
                            r++, t = s(o, !0);
                            var l = null,
                                u = e("<div/>"),
                                h = e("<div/>"),
                                p = e("<div/>"),
                                g = e("<div/>"),
                                v = e(o.closeHtml),
                                m = {
                                    intervalId: null,
                                    hideEta: null,
                                    maxHideTime: null
                                },
                                y = {
                                    toastId: r,
                                    state: "visible",
                                    startTime: new Date,
                                    options: o,
                                    map: n
                                };
                            return n.iconClass && u.addClass(o.toastClass).addClass(a), n.title && (h.append(n.title).addClass(o.titleClass), u.append(h)), n.message && (p.append(n.message).addClass(o.messageClass), u.append(p)), o.closeButton && (v.addClass("md-toast-close-button").attr("role", "button"), u.prepend(v)), o.progressBar && (g.addClass("md-toast-progress"), u.prepend(g)), o.newestOnTop ? t.prepend(u) : t.append(u), u.hide(), u[o.showMethod]({
                                    duration: o.showDuration,
                                    easing: o.showEasing,
                                    complete: o.onShown
                                }), o.timeOut > 0 && (l = setTimeout(b, o.timeOut), m.maxHideTime = parseFloat(o.timeOut), m.hideEta = (new Date).getTime() + m.maxHideTime, o.progressBar && (m.intervalId = setInterval(S, 10))),
                                function () {
                                    u.hover(x, w), !o.onclick && o.tapToDismiss && u.click(b);
                                    o.closeButton && v && v.click((function (e) {
                                        e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), b(!0)
                                    }));
                                    o.onclick && u.click((function () {
                                        o.onclick(), b()
                                    }))
                                }(), c(y), o.debug && console && console.log(y), u
                        }

                        function b(t) {
                            if (!e(":focus", u).length || t) return clearTimeout(m.intervalId), u[o.hideMethod]({
                                duration: o.hideDuration,
                                easing: o.hideEasing,
                                complete: function () {
                                    d(u), o.onHidden && "hidden" !== y.state && o.onHidden(), y.state = "hidden", y.endTime = new Date, c(y)
                                }
                            })
                        }

                        function w() {
                            (o.timeOut > 0 || o.extendedTimeOut > 0) && (l = setTimeout(b, o.extendedTimeOut), m.maxHideTime = parseFloat(o.extendedTimeOut), m.hideEta = (new Date).getTime() + m.maxHideTime)
                        }

                        function x() {
                            clearTimeout(l), m.hideEta = 0, u.stop(!0, !0)[o.showMethod]({
                                duration: o.showDuration,
                                easing: o.showEasing
                            })
                        }

                        function S() {
                            var e = (m.hideEta - (new Date).getTime()) / m.maxHideTime * 100;
                            g.width(e + "%")
                        }
                    }

                    function f() {
                        return e.extend({}, {
                            tapToDismiss: !0,
                            toastClass: "md-toast",
                            containerId: "toast-container",
                            debug: !1,
                            showMethod: "fadeIn",
                            showDuration: 300,
                            showEasing: "swing",
                            onShown: void 0,
                            hideMethod: "fadeOut",
                            hideDuration: 1e3,
                            hideEasing: "swing",
                            onHidden: void 0,
                            extendedTimeOut: 1e3,
                            iconClasses: {
                                error: "md-toast-error",
                                info: "md-toast-info",
                                success: "md-toast-success",
                                warning: "md-toast-warning"
                            },
                            iconClass: "md-toast-info",
                            positionClass: "md-toast-top-right",
                            timeOut: 5e3,
                            titleClass: "md-toast-title",
                            messageClass: "md-toast-message",
                            target: "body",
                            closeHtml: '<button type="button">&times;</button>',
                            newestOnTop: !0,
                            preventDuplicates: !1,
                            progressBar: !1
                        }, a.options)
                    }

                    function d(e) {
                        t || (t = s()), e.is(":visible") || (e.remove(), e = null, 0 === t.children().length && (t.remove(), i = void 0))
                    }
                }()
            }))
        }("function" == typeof define && n(24) ? define : function (t, i) {
            e.exports ? e.exports = i(n(64)) : window.toastr = i(window.jQuery)
        })
    }).call(this, n(27)(e))
}, function (e, t, n) {
    "use strict";
    n(38), n(40);
    jQuery((function (e) {
        var t = "ontouchstart" in document.documentElement,
            n = function (e, t) {
                (t && !e.hasClass("active") || !t && e.hasClass("active")) && (e[t ? "addClass" : "removeClass"]("active"), document.querySelectorAll("ul .btn-floating").forEach((function (e) {
                    return e.classList[t ? "add" : "remove"]("shown")
                })))
            },
            i = e(".fixed-action-btn:not(.smooth-scroll) > .btn-floating");
        i.on("mouseenter", (function (i) {
            t || n(e(i.currentTarget).parent(), !0)
        })), i.parent().on("mouseleave", (function (t) {
            return n(e(t.currentTarget), !1)
        })), i.on("click", (function (t) {
            var i;
            t.preventDefault(), (i = e(t.currentTarget).parent()).hasClass("active") ? n(i, !1) : n(i, !0)
        })), e.fn.extend({
            openFAB: function () {
                n(e(this), !0)
            },
            closeFAB: function () {
                n(e(this), !1)
            }
        })
    }))
}, function (e, t, n) {
    "use strict";
    n(6);
    jQuery((function (e) {
        e(document).on("click.card", ".card", (function (i) {
            var r = e(this).find(".card-reveal");
            if (r.length) {
                var o = e(i.target),
                    a = o.is(".card-reveal .card-title"),
                    s = o.is(".card-reveal .card-title i"),
                    l = o.is(".card .activator"),
                    c = o.is(".card .activator i");
                a || s ? n(r) : (l || c) && t(r)
            }
        }));
        var t = function (e) {
                e.css({
                    display: "block"
                }).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                })
            },
            n = function (e) {
                e.velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function () {
                        e.css({
                            display: "none"
                        })
                    }
                })
            };
        e(".rotate-btn").on("click", (function () {
            e(this).closest(".card").toggleClass("flipped")
        })), e(window).on("load", (function () {
            e(".card-rotating").each((function () {
                var t = e(this),
                    n = t.parent(),
                    i = t.find(".front"),
                    r = t.find(".back"),
                    o = t.find(".front").outerHeight(),
                    a = t.find(".back").outerHeight();
                o > a ? e(n, r).height(o) : o < a ? e(n, i).height(a) : e(n).height(a)
            }))
        })), e(".card-share > a").on("click", (function (t) {
            t.preventDefault(), e(this).toggleClass("share-expanded").parent().find("div").toggleClass("social-reveal-active")
        })), e(".map-card").on("click", (function () {
            e(this).find(".card-body").toggleClass("closed")
        }))
    }))
}, function (e, t, n) {
    "use strict";
    n(31), n(6), n(61);
    jQuery((function (e) {
        function t() {
            var t = e(this),
                n = Number(t.attr("length")),
                i = Number(t.val().length),
                r = i <= n;
            t.parent().find('span[class="character-counter"]').html("".concat(i, "/").concat(n)),
                function (e, t) {
                    var n = t.hasClass("invalid");
                    e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"), t.addClass("invalid"))
                }(r, t)
        }

        function n() {
            e(this).parent().find('span[class="character-counter"]').html("")
        }
        e.fn.characterCounter = function () {
            return this.each((function () {
                var i, r, o = e(this);
                void 0 !== o.attr("length") && (o.on("input focus", t), o.on("blur", n), i = o, r = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), i.parent().append(r))
            }))
        }, e(document).ready((function () {
            e("input, textarea").characterCounter()
        }))
    }))
}, function (e, t, n) {
    var i = n(100);
    e.exports = function (e) {
        if (i(e)) throw TypeError("The method doesn't accept regular expressions");
        return e
    }
}, function (e, t, n) {
    var i = n(4)("match");
    e.exports = function (e) {
        var t = /./;
        try {
            "/./" [e](t)
        } catch (n) {
            try {
                return t[i] = !1, "/./" [e](t)
            } catch (e) {}
        }
        return !1
    }
}, function (e, t, n) {
    "use strict";
    n(36), n(6);
    jQuery((function (e) {
        function t(t, i) {
            var r = t.find("> li > .collapsible-header");
            n(i), r.not(i).removeClass("active").parent().removeClass("active").children(".collapsible-body").stop(!0, !1).slideUp({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function () {
                    e(this).css("height", "")
                }
            })
        }

        function n(t) {
            t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function () {
                    e(this).css("height", "")
                }
            }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                duration: 350,
                easing: "easeOutQuart",
                queue: !1,
                complete: function () {
                    e(this).css("height", "")
                }
            })
        }

        function i(e) {
            return r(e).length > 0
        }

        function r(e) {
            return e.closest("li > .collapsible-header")
        }
        e.fn.collapsible = function (o) {
            var a = {
                accordion: void 0
            };
            return o = e.extend(a, o), this.each((function () {
                var a = e(this),
                    s = a.find("> li > .collapsible-header"),
                    l = a.data("collapsible");
                a.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), o.accordion || "accordion" === l || void 0 === l ? (s.on("click.collapse", (function (n) {
                    var o = e(n.target);
                    i(o) && (o = r(o)), o.toggleClass("active"), t(a, o)
                })), t(a, s.filter(".active").first())) : s.each((function () {
                    e(this).on("click.collapse", (function (t) {
                        var o = e(t.target);
                        i(o) && (o = r(o)), o.toggleClass("active"), n(o)
                    })), e(this).hasClass("active") && n(e(this))
                }))
            }))
        }, e(".collapsible").collapsible()
    }))
}, function (e, t, n) {
    "use strict";
    n(6), n(23), n(32), n(54), n(155);
    jQuery((function (e) {
        e(document).on("change", '.file-field input[type="file"]', (function () {
            var t = e(this);
            console.log(t);
            var n = t.closest(".file-field").find("input.file-path"),
                i = t.get(0).files,
                r = [];
            r = Array.isArray(i) ? i.map((function (e) {
                return e.name
            })) : Object.values(i).map((function (e) {
                return e.name
            })), n.val(r.join(", ")), n.trigger("change")
        }))
    }))
}, function (e, t, n) {
    "use strict";
    n(6), n(109), n(12), n(44), n(110);

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }! function (e) {
        var t = function () {
            function t(n, i) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.defaults = {
                    data: {},
                    dataColor: "",
                    closeColor: "#4285f4",
                    closeBlurColor: "#ced4da",
                    inputFocus: "1px solid #4285f4",
                    inputBlur: "1px solid #ced4da",
                    inputFocusShadow: "0 1px 0 0 #4285f4",
                    inputBlurShadow: "",
                    visibleOptions: 5
                }, this.enterCharCode = 13, this.homeCharCode = 36, this.endCharCode = 35, this.arrowUpCharCode = 38, this.arrowDownCharCode = 40, this.count = -1, this.nextScrollHeight = -45, this.$input = n, this.options = this.assignOptions(i), this.$clearButton = this.$input.next(".mdb-autocomplete-clear"), this.$autocompleteWrap = e('<ul class="mdb-autocomplete-wrap"></ul>')
            }
            var n, r, o;
            return n = t, (r = [{
                key: "init",
                value: function () {
                    this.handleEvents()
                }
            }, {
                key: "handleEvents",
                value: function () {
                    this.setData(), this.inputFocus(), this.inputBlur(), this.inputKeyupData(), this.inputLiClick(), this.clearAutocomplete(), this.setAutocompleteWrapHeight()
                }
            }, {
                key: "assignOptions",
                value: function (t) {
                    return e.extend({}, this.defaults, t)
                }
            }, {
                key: "setAutocompleteWrapHeight",
                value: function () {
                    this.$autocompleteWrap.css("max-height", "".concat(45 * this.options.visibleOptions, "px"))
                }
            }, {
                key: "setData",
                value: function () {
                    Object.keys(this.options.data).length && this.$autocompleteWrap.insertAfter(this.$input)
                }
            }, {
                key: "inputFocus",
                value: function () {
                    var e = this;
                    this.$input.on("focus", (function () {
                        e.changeSVGcolors(), e.$input.css("border-bottom", e.options.inputFocus), e.$input.css("box-shadow", e.options.inputFocusShadow)
                    }))
                }
            }, {
                key: "inputBlur",
                value: function () {
                    var e = this;
                    this.$input.on("blur", (function () {
                        e.$input.css("border-bottom", e.options.inputBlur), e.$input.css("box-shadow", e.options.inputBlurShadow)
                    }))
                }
            }, {
                key: "inputKeyupData",
                value: function () {
                    var e = this;
                    this.$input.on("keyup", (function (t) {
                        if (t.which === e.enterCharCode) return e.options.data.includes(e.$input.val()) || e.options.data.push(e.$input.val()), e.$autocompleteWrap.find(".selected").trigger("click"), e.$autocompleteWrap.empty(), e.inputBlur(), e.count = -1, e.nextScrollHeight = -45, e.count;
                        var n = e.$input.val();
                        if (e.$autocompleteWrap.empty(), n.length) {
                            e.appendOptions(e.options.data, n);
                            var i = e.$autocompleteWrap,
                                r = e.$autocompleteWrap.find("li"),
                                o = r.eq(e.count).outerHeight(),
                                a = r.eq(e.count - 1).outerHeight();
                            t.which === e.homeCharCode && e.homeHandler(i, r), t.which === e.endCharCode && e.endHandler(i, r), t.which === e.arrowDownCharCode ? e.arrowDownHandler(i, r, o) : t.which === e.arrowUpCharCode && e.arrowUpHandler(i, r, o, a), 0 === n.length ? e.$clearButton.css("visibility", "hidden") : e.$clearButton.css("visibility", "visible"), e.$autocompleteWrap.children().css("color", e.options.dataColor)
                        } else e.$clearButton.css("visibility", "hidden")
                    }))
                }
            }, {
                key: "endHandler",
                value: function (e, t) {
                    this.count = t.length - 1, this.nextScrollHeight = 45 * t.length - 45, e.scrollTop(45 * t.length), t.eq(-1).addClass("selected")
                }
            }, {
                key: "homeHandler",
                value: function (e, t) {
                    this.count = 0, this.nextScrollHeight = -45, e.scrollTop(0), t.eq(0).addClass("selected")
                }
            }, {
                key: "arrowDownHandler",
                value: function (e, t, n) {
                    if (this.count > t.length - 2) return this.count = -1, t.scrollTop(0), void(this.nextScrollHeight = -45);
                    this.count++, this.nextScrollHeight += n, e.scrollTop(this.nextScrollHeight), t.eq(this.count).addClass("selected")
                }
            }, {
                key: "arrowUpHandler",
                value: function (e, t, n, i) {
                    this.count < 1 ? (this.count = t.length, e.scrollTop(e.prop("scrollHeight")), this.nextScrollHeight = e.prop("scrollHeight") - n) : this.count--, this.nextScrollHeight -= i, e.scrollTop(this.nextScrollHeight), t.eq(this.count).addClass("selected")
                }
            }, {
                key: "appendOptions",
                value: function (t, n) {
                    for (var i in t)
                        if (-1 !== t[i].toLowerCase().indexOf(n.toLowerCase())) {
                            var r = e("<li>".concat(t[i], "</li>"));
                            this.$autocompleteWrap.append(r)
                        }
                }
            }, {
                key: "inputLiClick",
                value: function () {
                    var t = this;
                    this.$autocompleteWrap.on("click", "li", (function (n) {
                        n.preventDefault(), t.$input.val(e(n.target).text()), t.$autocompleteWrap.empty()
                    }))
                }
            }, {
                key: "clearAutocomplete",
                value: function () {
                    var t = this;
                    this.$clearButton.on("click", (function (n) {
                        n.preventDefault(), t.count = -1, t.nextScrollHeight = -45;
                        var i = e(n.currentTarget);
                        i.parent().find(".mdb-autocomplete").val(""), i.css("visibility", "hidden"), t.$autocompleteWrap.empty(), i.parent().find("label").removeClass("active")
                    }))
                }
            }, {
                key: "changeSVGcolors",
                value: function () {
                    var e = this;
                    this.$input.hasClass("mdb-autocomplete") && (this.$input.on("keyup", (function (t) {
                        e.fillSVG(t, e.options.closeColor)
                    })), this.$input.on("blur", (function (t) {
                        e.fillSVG(t, e.options.closeBlurColor)
                    })))
                }
            }, {
                key: "fillSVG",
                value: function (t, n) {
                    t.preventDefault(), e(t.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", n)
                }
            }]) && i(n.prototype, r), o && i(n, o), t
        }();
        e.fn.mdbAutocomplete = function (n) {
            return this.each((function () {
                new t(e(this), n).init()
            }))
        }
    }(jQuery)
}, function (e, t) {
    var n = !1;

    function i() {
        $("#mdb-preloader").fadeOut("slow"), $("body").removeAttr("aria-busy")
    }
    $(window).on("load", (function () {
        n = !0
    })), jQuery((function (e) {
        e("body").attr("aria-busy", !0), e("#preloader-markup").load("./dev/dist/mdb-addons/preloader.html", (function () {
            n ? i() : e(window).on("load", (function () {
                i()
            }))
        }))
    }))
}, function (e, t, n) {
    "use strict";
    n(6);
    jQuery((function (e) {
        var t = "input[type=range]:not(.custom-range):not(.multi-range)",
            n = '<span class="thumb" style="margin-left: 7px"><span class="value"></span></span>',
            i = !1;

        function r(e, t) {
            var n = e.attr("min"),
                i = e.attr("max"),
                r = e.width() - 13.5,
                o = r / (i - n),
                a = o * e.val() - o * n;
            a < 0 ? a = 0 : a > r && (a = r), t.addClass("active").css("left", a)
        }

        function o(e, t, n, i, r, o, a) {
            e.velocity({
                height: t,
                width: n,
                top: i,
                marginLeft: r
            }, {
                duration: o,
                easing: a || "swing"
            })
        }

        function a(e) {
            o(e, "30px", "30px", "-27px", "-7px", 200, "easeOutExpo")
        }

        function s(e) {
            o(e, "0", "0", "10px", "7px", 200)
        }
        e(document).on("change", t, (function () {
            var t = e(this);
            t.siblings(".thumb").find(".value").html(t.val())
        })), e(document).on("mousedown touchstart contextmenu", t, (function (o) {
            var s = e(this),
                l = !s.siblings(".thumb").length,
                c = "contextmenu" === o.type;
            l && function () {
                var i = e(n);
                e(t).after(i)
            }();
            var u = s.siblings(".thumb");
            i = !c, s.addClass("active"), u.hasClass("active") || a(u), r(e(this), u), u.find(".value").html(s.val())
        })), e(document).on("mouseup touchend", ".range-field", (function () {
            var t = e(this).children(".thumb");
            i = !1, t.hasClass("active") && s(t), t.removeClass("active")
        })), e(document).on("input mousemove touchmove", ".range-field", (function () {
            var n = e(this).children(".thumb");
            i && (n.hasClass("active") || a(n), r(e(this).children(t), n), n.find(".value").html(n.siblings(t).val()))
        })), e(document).on("mouseout touchleave", ".range-field", (function () {
            if (!i) {
                var t = e(this).children(".thumb");
                t.hasClass("active") && s(t), t.removeClass("active")
            }
        }))
    }))
}, function (e, t, n) {
    "use strict";
    n(10), n(16), n(17), n(6), n(8), n(13), n(61), n(7), n(29), n(18), n(19);

    function i(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    i || null == s.return || s.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    jQuery((function (e) {
        var t = function () {
            function t(n, i) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.settings = {
                    menuLeftMinBorder: .3,
                    menuLeftMaxBorder: -.5,
                    menuRightMinBorder: -.3,
                    menuRightMaxBorder: .5,
                    menuVelocityOffset: 10
                }, this.defaults = {
                    menuWidth: 240,
                    edge: "left",
                    closeOnClick: !1,
                    breakpoint: 1440,
                    timeDurationOpen: 500,
                    timeDurationClose: 500,
                    timeDurationOverlayOpen: 200,
                    timeDurationOverlayClose: 200,
                    easingOpen: "easeInOutQuad",
                    easingClose: "easeInOutQuad",
                    showOverlay: !0,
                    showCloseButton: !1,
                    slim: !1,
                    onOpen: null,
                    onClose: null
                }, this.$element = n, this.$elementCloned = n.clone().css({
                    display: "inline-block",
                    lineHeight: "24px"
                }).html('<i class="fas fa-times"></i>'), this.options = this.assignOptions(i), this.menuOut = !1, this.lastTouchVelocity = {
                    x: {
                        startPosition: 0,
                        startTime: 0,
                        endPosition: 0,
                        endTime: 0
                    }
                }, this.$body = e("body"), this.$menu = e("#".concat(this.$element.attr("data-activates"))), this.$sidenavOverlay = e("#sidenav-overlay"), this.$dragTarget = e('<div class="drag-target"></div>'), this.isTouchDevice = "ontouchstart" in document.documentElement, this.$body.append(this.$dragTarget)
            }
            var n, o, a;
            return n = t, (o = [{
                key: "assignOptions",
                value: function (t) {
                    return e.extend({}, this.defaults, t)
                }
            }, {
                key: "init",
                value: function () {
                    this.setMenuWidth(), this.setMenuTranslation(), this.closeOnClick(), this.openOnClick(), this.bindTouchEvents(), this.showCloseButton(), this.inputOnClick(), !0 === this.options.slim && this.handleSlim(), this.onOpen(), this.onClose(), this.options[0] + this.options[1] + this.options[2] + this.options[3] === "show" && !1 === this.menuOut && this.$element.trigger("click"), this.options[0] + this.options[1] + this.options[2] + this.options[3] === "hide" && !0 === this.menuOut && this.removeMenu()
                }
            }, {
                key: "setMenuWidth",
                value: function () {
                    var t = e("#".concat(this.$menu.attr("id"))).find("> .sidenav-bg");
                    this.$menu.css("width", this.options.menuWidth), t.css("width", this.options.menuWidth)
                }
            }, {
                key: "setMenuTranslation",
                value: function () {
                    var t = this;
                    "left" === this.options.edge ? (this.$menu.css("transform", "translateX(-100%)"), this.$dragTarget.css({
                        left: 0
                    })) : (this.$menu.addClass("right-aligned").css("transform", "translateX(100%)"), this.$dragTarget.css({
                        right: 0
                    })), this.$menu.hasClass("fixed") && (window.innerWidth > this.options.breakpoint ? (this.menuOut = !0, this.$menu.css("transform", "translateX(0)")) : this.menuOut = !1, this.$menu.find("input[type=text]").on("touchstart", (function () {
                        t.$menu.addClass("transform-fix-input")
                    })), e(window).on("resize", (function () {
                        if (t.isTouchDevice || e(".fixed-sn main, .fixed-sn footer").css("padding-left", t.options.menuWidth), window.innerWidth > t.options.breakpoint) t.$sidenavOverlay.length ? (t.removeMenu(!0), e(".fixed-sn main, .fixed-sn footer").css("padding-left", t.options.menuWidth)) : (!1 === t.menuOut && e(t).trigger("sidenav_open", [t.options.onOpen]), t.$menu.css("transform", "translateX(0%)"), t.menuOut = !0);
                        else if (!1 !== t.menuOut || t.isTouchDevice) t.isTouchDevice || (t.menuOut = !1, t.removeMenu(!0));
                        else {
                            var n = "left" === t.options.edge ? "-100" : "100";
                            t.$menu.css("transform", "translateX(".concat(n, "%)")), t.removeMenu(!0)
                        }
                    })))
                }
            }, {
                key: "closeOnClick",
                value: function () {
                    var e = this;
                    !0 === this.options.closeOnClick && (this.$menu.on("click", "a:not(.collapsible-header)", (function () {
                        return e.removeMenu()
                    })), "translateX(0)" === this.$menu.css("transform") && this.$menu.on("click", (function () {
                        return e.removeMenu()
                    })))
                }
            }, {
                key: "onOpen",
                value: function (t) {
                    e(this).on("sidenav_open", (function (e, t) {
                        "function" == typeof t && t()
                    }))
                }
            }, {
                key: "onClose",
                value: function (t) {
                    e(this).on("sidenav_close", (function (e, t) {
                        "function" == typeof t && t()
                    }))
                }
            }, {
                key: "openOnClick",
                value: function () {
                    var t = this;
                    this.$element.on("click", (function (n) {
                        if (n.preventDefault(), !0 === t.menuOut) return t.removeMenu();
                        e(t).trigger("sidenav_open", [t.options.onOpen]), t.menuOut = !0, !0 === t.options.showOverlay ? e("#sidenav-overlay").length || t.showSidenavOverlay() : t.showCloseButton();
                        var i = [];
                        i = "left" === t.options.edge ? [0, -1 * t.options.menuWidth] : [0, t.options.menuWidth], "matrix(1, 0, 0, 1, 0, 0)" !== t.$menu.css("transform") && t.$menu.velocity({
                            translateX: i
                        }, {
                            duration: t.options.timeDurationOpen,
                            queue: !1,
                            easing: t.options.easingOpen
                        }), t.$sidenavOverlay.on("touchmove", t.touchmoveEventHandler.bind(t)), t.$menu.on("touchmove", (function (e) {
                            e.preventDefault(), t.$menu.find(".custom-scrollbar").css("padding-bottom", "30px")
                        })), !1 === t.options.showOverlay && (t.menuOut = !0)
                    }))
                }
            }, {
                key: "bindTouchEvents",
                value: function () {
                    var e = this;
                    this.$dragTarget.on("click", (function () {
                        e.menuOut && e.removeMenu()
                    })), this.$dragTarget.on("touchstart", (function (t) {
                        e.lastTouchVelocity.x.startPosition = t.touches[0].clientX, e.lastTouchVelocity.x.startTime = Date.now()
                    })), this.$dragTarget.on("touchmove", this.touchmoveEventHandler.bind(this)), this.$dragTarget.on("touchend", this.touchendEventHandler.bind(this))
                }
            }, {
                key: "showCloseButton",
                value: function () {
                    !0 === this.options.showCloseButton && (this.$menu.prepend(this.$elementCloned), this.$menu.find(".logo-wrapper").css({
                        borderTop: "1px solid rgba(153,153,153,.3)"
                    }))
                }
            }, {
                key: "inputOnClick",
                value: function () {
                    var e = this;
                    this.$menu.find("input[type=text]").on("touchstart", (function () {
                        return e.$menu.css("transform", "translateX(0)")
                    }))
                }
            }, {
                key: "removeMenu",
                value: function (t) {
                    var n = this;
                    this.$body.css({
                        overflow: "",
                        width: ""
                    }), this.$menu.velocity({
                        translateX: "left" === this.options.edge ? "-100%" : "100%"
                    }, {
                        duration: this.options.timeDurationClose,
                        queue: !1,
                        easing: this.options.easingClose,
                        complete: function () {
                            !0 === t && (n.$menu.removeAttr("style"), n.$menu.css("width", n.options.menuWidth))
                        }
                    }), this.$menu.removeClass("transform-fix-input"), this.hideSidenavOverlay(), this.menuOut = !1, e(".fixed-sn .double-nav").css("padding-left", "unset"), e(".fixed-sn main, .fixed-sn footer").css({
                        "padding-left": "0"
                    }), e(this).trigger("sidenav_close", [this.options.onClose])
                }
            }, {
                key: "handleSlim",
                value: function () {
                    var t = this;
                    e("#toggle").on("click", (function () {
                        t.$menu.hasClass("slim") ? (t.$menu.removeClass("slim"), e(".sv-slim-icon").removeClass("fa-angle-double-right").addClass("fa-angle-double-left"), e(".fixed-sn .double-nav").css({
                            transition: "all .3s ease-in-out",
                            "padding-left": "15.9rem"
                        }), e(".fixed-sn main, .fixed-sn footer").css({
                            transition: "all .3s ease-in-out",
                            "padding-left": "15rem"
                        })) : (t.$menu.addClass("slim"), e(".sv-slim-icon").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"), e(".fixed-sn .double-nav").css("padding-left", "4.6rem"), e(".fixed-sn main, .fixed-sn footer").css({
                            "padding-left": "3.7rem"
                        }))
                    }))
                }
            }, {
                key: "touchmoveEventHandler",
                value: function (e) {
                    if ("touchmove" === e.type) {
                        var t = i(e.touches, 1)[0],
                            n = t.clientX;
                        Date.now() - this.lastTouchVelocity.x.startTime > 20 && (this.lastTouchVelocity.x.startPosition = t.clientX, this.lastTouchVelocity.x.startTime = Date.now()), this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (n > this.options.menuWidth ? n = this.options.menuWidth : n < 0 && (n = 0)), this.translateSidenavX(n), this.updateOverlayOpacity(n)
                    }
                }
            }, {
                key: "calculateTouchVelocityX",
                value: function () {
                    return Math.abs(this.lastTouchVelocity.x.endPosition - this.lastTouchVelocity.x.startPosition) / Math.abs(this.lastTouchVelocity.x.endTime - this.lastTouchVelocity.x.startTime)
                }
            }, {
                key: "touchendEventHandler",
                value: function (e) {
                    if ("touchend" === e.type) {
                        var t = e.changedTouches[0];
                        this.lastTouchVelocity.x.endTime = Date.now(), this.lastTouchVelocity.x.endPosition = t.clientX;
                        var n = this.calculateTouchVelocityX(),
                            i = t.clientX,
                            r = i - this.options.menuWidth,
                            o = i - this.options.menuWidth / 2;
                        r > 0 && (r = 0), o < 0 && (o = 0), "left" === this.options.edge ? (this.menuOut || n <= this.settings.menuLeftMinBorder || n < this.options.menuLeftMaxBorder ? (0 !== r && this.translateMenuX([0, r], "300"), this.showSidenavOverlay()) : (!this.menuOut || n > this.settings.menuLeftMinBorder) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.menuWidth - this.options.menuVelocityOffset, r], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                            width: "10px",
                            right: "",
                            left: 0
                        })) : this.menuOut && n >= this.settings.menuRightMinBorder || n > this.settings.menuRightMaxBorder ? (this.translateMenuX([0, o], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                            width: "50%",
                            right: "",
                            left: 0
                        })) : (!this.menuOut || n < this.settings.menuRightMinBorder) && (this.enableScrolling(), this.translateMenuX([this.options.menuWidth + this.options.menuVelocityOffset, o], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                            width: "10px",
                            right: 0,
                            left: ""
                        }))
                    }
                }
            }, {
                key: "buildSidenavOverlay",
                value: function () {
                    var t = this;
                    !0 === this.options.showOverlay && (this.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'), this.$sidenavOverlay.css("opacity", 0).on("click", (function () {
                        return t.removeMenu()
                    })), this.$body.append(this.$sidenavOverlay))
                }
            }, {
                key: "disableScrolling",
                value: function () {
                    var e = this.$body.innerWidth();
                    this.$body.css("overflow", "hidden"), this.$body.width(e)
                }
            }, {
                key: "enableScrolling",
                value: function () {
                    this.$body.css({
                        overflow: "",
                        width: ""
                    })
                }
            }, {
                key: "translateMenuX",
                value: function (e, t) {
                    this.$menu.velocity({
                        translateX: e
                    }, {
                        duration: "string" == typeof t ? Number(t) : t,
                        queue: !1,
                        easing: this.options.easingOpen
                    })
                }
            }, {
                key: "translateSidenavX",
                value: function (e) {
                    if ("left" === this.options.edge) {
                        var t = e >= this.options.menuWidth / 2;
                        this.menuOut = t, this.$menu.css("transform", "translateX(".concat(e - this.options.menuWidth, "px)"))
                    } else {
                        var n = e < window.innerWidth - this.options.menuWidth / 2;
                        this.menuOut = n;
                        var i = e - this.options.menuWidth / 2;
                        i < 0 && (i = 0), this.$menu.css("transform", "translateX(".concat(i, "px)"))
                    }
                }
            }, {
                key: "updateOverlayOpacity",
                value: function (e) {
                    var t;
                    t = "left" === this.options.edge ? e / this.options.menuWidth : Math.abs((e - window.innerWidth) / this.options.menuWidth), this.$sidenavOverlay.velocity({
                        opacity: t
                    }, {
                        duration: 10,
                        queue: !1,
                        easing: this.options.easingOpen
                    })
                }
            }, {
                key: "showSidenavOverlay",
                value: function () {
                    !0 !== this.options.showOverlay || e("#sidenav-overlay").length || this.buildSidenavOverlay(), this.$sidenavOverlay.velocity({
                        opacity: 1
                    }, {
                        duration: this.options.timeDurationOverlayOpen,
                        queue: !1,
                        easing: this.options.easingOpen
                    })
                }
            }, {
                key: "hideSidenavOverlay",
                value: function () {
                    this.$sidenavOverlay.velocity({
                        opacity: 0
                    }, {
                        duration: this.options.timeDurationOverlayClose,
                        queue: !1,
                        easing: this.options.easingOpen,
                        complete: function () {
                            e(this).remove()
                        }
                    })
                }
            }]) && r(n.prototype, o), a && r(n, a), t
        }();
        e.fn.sideNav = function (n) {
            e(this).each((function () {
                new t(e(this), n).init()
            }))
        }, e(".side-nav").on("touchmove", (function (e) {
            e.stopPropagation()
        }), !1)
    }))
}, function (e, t, n) {
    "use strict";
    n(10), n(16), n(17), n(12), n(8), n(7), n(18), n(19);

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    jQuery((function () {
        $(".smooth-scroll").on("click", "a", (function (e) {
            e.preventDefault();
            var t = $(this),
                n = t.attr("href");
            if (void 0 !== i(n) && 0 === n.indexOf("#")) {
                var r = $(this).attr("data-offset") || 0;
                $("body,html").animate({
                    scrollTop: $(n).offset().top - r
                }, 700);
                var o = t.parentsUntil(".smooth-scroll").last().parent().attr("data-allow-hashes");
                void 0 !== i(o) && !1 !== o && history.replaceState(null, null, n)
            }
        }))
    }))
}, function (e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    jQuery((function (e) {
        var t = function () {
            function t(n, i) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.defaults = {
                    topSpacing: 0,
                    zIndex: !1,
                    stopper: "#footer",
                    stickyClass: !1,
                    startScrolling: "top",
                    minWidth: !1
                }, this.$element = n, this.options = this.assignOptions(i), this.$window = e(window), this.stopper = this.options.stopper, this.elementWidth = this.$element.outerWidth(), this.elementHeight = this.$element.outerHeight(!0), this.initialScrollTop = this.$element.offset().top, this.$placeholder = e('<div class="sticky-placeholder"></div>'), this.scrollTop = 0, this.setPushPoint(), this.setStopperPosition(), this.bindEvents()
            }
            var i, r, o;
            return i = t, (r = [{
                key: "hasZIndex",
                value: function () {
                    return "number" == typeof this.options.zIndex
                }
            }, {
                key: "hasStopper",
                value: function () {
                    return e(this.options.stopper).length || "number" == typeof this.options.stopper
                }
            }, {
                key: "isScreenHeightEnough",
                value: function () {
                    return this.$element.outerHeight() + this.options.topSpacing < this.$window.height()
                }
            }, {
                key: "assignOptions",
                value: function (t) {
                    return e.extend({}, this.defaults, t)
                }
            }, {
                key: "setPushPoint",
                value: function () {
                    "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$pushPoint = this.initialScrollTop - this.options.topSpacing : this.$pushPoint = this.initialScrollTop + this.$element.outerHeight(!0) - this.$window.height()
                }
            }, {
                key: "setStopperPosition",
                value: function () {
                    "string" == typeof this.options.stopper ? this.stopPoint = e(this.stopper).offset().top - this.options.topSpacing : "number" == typeof this.options.stopper && (this.stopPoint = this.options.stopper)
                }
            }, {
                key: "bindEvents",
                value: function () {
                    this.$window.on("resize", this.handleResize.bind(this)), this.$window.on("scroll", this.init.bind(this))
                }
            }, {
                key: "handleResize",
                value: function () {
                    var e = this.$element.parent();
                    this.elementWidth = e.width(), this.elementHeight = this.$element.outerHeight(!0), this.setPushPoint(), this.setStopperPosition(), this.init()
                }
            }, {
                key: "init",
                value: function () {
                    if (this.options.minWidth && this.options.minWidth > this.$window.innerWidth()) return !1;
                    "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.scrollTop = this.$window.scrollTop() : this.scrollTop = this.$window.scrollTop() + this.$window.height(), this.$pushPoint < this.scrollTop ? (this.appendPlaceholder(), this.stickyStart()) : this.stickyEnd(), this.$window.scrollTop() > this.$pushPoint ? this.stop() : this.stickyEnd()
                }
            }, {
                key: "appendPlaceholder",
                value: function () {
                    this.$element.after(this.$placeholder), this.$placeholder.css({
                        width: this.elementWidth,
                        height: this.elementHeight
                    })
                }
            }, {
                key: "stickyStart",
                value: function () {
                    this.options.stickyClass && this.$element.addClass(this.options.stickyClass), this.$element.get(0).style.overflow = "scroll";
                    var e = this.$element.get(0).scrollHeight;
                    this.$element.get(0).style.overflow = "", this.$element.css({
                        position: "fixed",
                        width: this.elementWidth,
                        height: e
                    }), "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$element.css({
                        top: this.options.topSpacing
                    }) : this.$element.css({
                        bottom: 0,
                        top: ""
                    }), this.hasZIndex() && this.$element.css({
                        zIndex: this.options.zIndex
                    })
                }
            }, {
                key: "stickyEnd",
                value: function () {
                    this.options.stickyClass && this.$element.removeClass(this.options.stickyClass), this.$placeholder.remove(), this.$element.css({
                        position: "static",
                        top: this.options.topSpacing,
                        width: "",
                        height: ""
                    })
                }
            }, {
                key: "stop",
                value: function () {
                    this.stopPoint < e(this.$element).offset().top - this.options.topSpacing + this.$element.outerHeight(!0) && this.$element.css({
                        position: "absolute",
                        bottom: 0,
                        top: ""
                    })
                }
            }]) && n(i.prototype, r), o && n(i, o), t
        }();
        e.fn.sticky = function (n) {
            e(this).each((function () {
                new t(e(this), n).init()
            }))
        }
    }))
}, function (e, t, n) {
    "use strict";
    n(10), n(31), n(36), n(6), n(38), n(23), n(134), n(135), n(44), n(40);

    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    jQuery((function (e) {
        var t = function () {
            function t(n) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.$activator = n, this.$activates = e("#".concat(n.attr("data-activates"))), this.options = {
                    inDuration: this.fallback().or(n.data("induration")).or(n.attr("data-in-duration")).or(i.inDuration).or(300).value(),
                    outDuration: this.fallback().or(n.data("outduration")).or(n.attr("data-out-duration")).or(i.outDuration).or(225).value(),
                    easingEffectIn: this.fallback().or(n.data("easingeffectin")).or(n.attr("data-easing-effect-in")).or(i.easingEffectIn).or("easeOutCubic").value(),
                    easingEffectOut: this.fallback().or(n.data("easingeffectout")).or(n.attr("data-easing-effect-out")).or(i.easingEffectOut).or("swing").value(),
                    constrainWidth: this.fallback().or(n.data("constrainwidth")).or(n.attr("data-constrain-width")).or(i.constrainWidth).or(!0).value(),
                    hover: this.fallback().or(n.data("hover")).or(n.attr("data-hover")).or(i.hover).or(!1).value(),
                    gutter: this.fallback().or(n.data("gutter")).or(n.attr("data-gutter")).or(i.gutter).or(0).value(),
                    belowOrigin: this.fallback().or(n.data("beloworigin")).or(n.attr("data-below-origin")).or(i.belowOrigin).or(!1).value(),
                    alignment: this.fallback().or(n.data("alignment")).or(n.attr("data-alignment")).or(i.alignment).or("left").value(),
                    maxHeight: this.fallback().or(n.data("maxheight")).or(n.attr("data-max-height")).or(i.maxHeight).or("").value(),
                    resetScroll: this.fallback().or(n.data("resetscroll")).or(n.attr("data-reset-scroll")).or(i.resetScroll).or(!0).value()
                }, this.isFocused = !1
            }
            var n, a, s;
            return n = t, s = [{
                key: "mdbDropdownAutoInit",
                value: function () {
                    e(".dropdown-button").dropdown(), this.bindMultiLevelDropdownEvents(), this.bindBootstrapEvents()
                }
            }, {
                key: "bindMultiLevelDropdownEvents",
                value: function () {
                    e(".multi-level-dropdown .dropdown-submenu > a").on("mouseenter", (function (t) {
                        var n = e(this);
                        e(".multi-level-dropdown .dropdown-submenu .dropdown-menu").removeClass("show"), n.next(".dropdown-menu").addClass("show"), t.stopPropagation()
                    })), e(".multi-level-dropdown .dropdown").on("hidden.bs.dropdown", (function () {
                        e(".multi-level-dropdown .dropdown-menu.show").removeClass("show")
                    }))
                }
            }, {
                key: "bindBootstrapEvents",
                value: function () {
                    var t = this;
                    e(".dropdown, .dropup").on({
                        "show.bs.dropdown": function (n) {
                            var i = e(n.target),
                                r = t._getDropdownEffects(i);
                            t._dropdownEffectStart(i, r.effectIn)
                        },
                        "shown.bs.dropdown": function (n) {
                            var i = e(n.target),
                                r = t._getDropdownEffects(i);
                            r.effectIn && r.effectOut && t._dropdownEffectEnd(i, r)
                        },
                        "hide.bs.dropdown": function (n) {
                            var i = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                                r = e(n.target),
                                o = t._getDropdownEffects(r);
                            o.effectOut && (i || n.preventDefault(), t._dropdownEffectStart(r, o.effectOut), t._dropdownEffectEnd(r, o, (function () {
                                r.removeClass("show"), r.find(".dropdown-menu").removeClass("show")
                            })))
                        }
                    })
                }
            }, {
                key: "_getDropdownEffects",
                value: function (e) {
                    var t = "fadeIn",
                        n = "fadeOut",
                        i = e.find(".dropdown-menu"),
                        r = e.parents("ul.nav");
                    return r.height > 0 && (t = r.data("dropdown-in") || null, n = r.data("dropdown-out") || null), {
                        effectIn: i.data("dropdown-in") || t,
                        effectOut: i.data("dropdown-out") || n
                    }
                }
            }, {
                key: "_dropdownEffectStart",
                value: function (e, t) {
                    t && (e.addClass("dropdown-animating"), e.find(".dropdown-menu").addClass(["animated", t].join(" ")))
                }
            }, {
                key: "_dropdownEffectEnd",
                value: function (e, t, n) {
                    e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function () {
                        e.removeClass("dropdown-animating"), e.find(".dropdown-menu").removeClass(["animated", t.effectIn, t.effectOut].join(" ")), "function" == typeof n && n()
                    }))
                }
            }], (a = [{
                key: "returnPublicInterface",
                value: function () {
                    return {
                        $activator: this.$activator,
                        $activates: this.$activates,
                        updatePosition: this.updatePosition.bind(this)
                    }
                }
            }, {
                key: "init",
                value: function () {
                    this.appendDropdownToActivator(), this.options.hover ? this.handleHoverableDropdown() : this.handleClickableDropdown(), this.bindEvents()
                }
            }, {
                key: "appendDropdownToActivator",
                value: function () {
                    this.$activator.after(this.$activates)
                }
            }, {
                key: "handleHoverableDropdown",
                value: function () {
                    var t = this,
                        n = !1;
                    this.$activator.unbind("click.".concat(this.$activator.attr("id"))), this.$activator.on("mouseenter", (function () {
                        !1 === n && (t.placeDropdown(), n = !0)
                    })), this.$activator.on("mouseleave", (function (i) {
                        var r = i.toElement || i.relatedTarget;
                        e(r).closest(".dropdown-content").is(t.$activates) || (t.$activates.stop(!0, !0), t.hideDropdown(), n = !1)
                    })), this.$activates.on("mouseleave", (function (i) {
                        var r = i.toElement || i.relatedTarget;
                        e(r).closest(".dropdown-button").is(t.$activator) || (t.$activates.stop(!0, !0), t.hideDropdown(), n = !1)
                    }))
                }
            }, {
                key: "handleClickableDropdown",
                value: function () {
                    var t = this;
                    this.$activator.unbind("click.".concat(this.$activator.attr("id"))), this.$activator.bind("click.".concat(this.$activator.attr("id")), (function (n) {
                        if (!t.isFocused) {
                            var i = t.$activator.get(0) === n.currentTarget,
                                r = t.$activator.hasClass("active"),
                                o = 0 !== e(n.target).closest(".dropdown-content").length;
                            !i || r || o ? r && (t.hideDropdown(), e(document).unbind("click.".concat(t.$activates.attr("id"), " touchstart.").concat(t.$activates.attr("id")))) : (n.preventDefault(), t.placeDropdown("click")), t.$activates.hasClass("active") && e(document).bind("click.".concat(t.$activates.attr("id"), " touchstart.").concat(t.$activates.attr("id")), (function (n) {
                                !t.$activates.is(n.target) && !t.$activator.is(n.target) && !t.$activator.find(n.target).length && (t.hideDropdown(), e(document).unbind("click.".concat(t.$activates.attr("id"), " touchstart.").concat(t.$activates.attr("id"))))
                            }))
                        }
                    }))
                }
            }, {
                key: "bindEvents",
                value: function () {
                    var e = this;
                    this.$activator.on("open", (function (t, n) {
                        e.placeDropdown(n)
                    })), this.$activator.on("close", this.hideDropdown.bind(this))
                }
            }, {
                key: "placeDropdown",
                value: function (e) {
                    "focus" === e && (this.isFocused = !0), this.$activates.addClass("active"), this.$activator.addClass("active"), !0 === this.options.constrainWidth ? this.$activates.css("width", this.$activator.outerWidth()) : this.$activates.css("white-space", "nowrap"), this.updatePosition(), this.showDropdown()
                }
            }, {
                key: "showDropdown",
                value: function () {
                    this.$activates.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: this.options.inDuration,
                        easing: this.options.easingEffectIn,
                        complete: function () {
                            e(this).css("height", "")
                        }
                    }).animate(function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? i(n, !0).forEach((function (t) {
                                r(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(n).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({
                        opacity: 1
                    }, this.options.resetScroll && {
                        scrollTop: 0
                    }), {
                        queue: !1,
                        duration: this.options.inDuration,
                        easing: "easeOutSine"
                    })
                }
            }, {
                key: "hideDropdown",
                value: function () {
                    var e = this;
                    this.isFocused = !1, this.$activates.fadeOut({
                        durations: this.options.outDuration,
                        easing: this.options.easingEffectOut
                    }), this.$activates.removeClass("active"), this.$activator.removeClass("active"), setTimeout((function () {
                        e.$activates.css("max-height", e.options.maxHeight)
                    }), this.options.outDuration)
                }
            }, {
                key: "updatePosition",
                value: function () {
                    var t = window.innerHeight,
                        n = this.$activator.innerHeight(),
                        i = this.$activator.offset().top - e(window).scrollTop(),
                        r = this._getHorizontalAlignment(),
                        o = 0,
                        a = 0,
                        s = this.$activator.parent(),
                        l = this.options.belowOrigin ? n : 0,
                        c = !s.is("body") && s.get(0).scrollHeight > s.get(0).clientHeight ? s.get(0).scrollTop : 0,
                        u = i + this.$activates.innerHeight() > t,
                        f = i + n - this.$activates.innerHeight() < 0;
                    if (u && f) {
                        var d = t - i - l;
                        this.$activates.css("max-height", d)
                    } else u && (l || (l += n), l -= this.$activates.innerHeight());
                    "left" === r ? (o = this.options.gutter, a = this.$activator.position().left + o) : "right" === r && (a = this.$activator.position().left + this.$activator.outerWidth() - this.$activates.outerWidth() + (o = -this.options.gutter)), this.$activates.css({
                        position: "absolute",
                        top: this.$activator.position().top + l + c,
                        left: a
                    })
                }
            }, {
                key: "_getHorizontalAlignment",
                value: function () {
                    var t = this.$activator.offset().left;
                    return t + this.$activates.innerWidth() > e(window).width() ? "right" : t - this.$activates.innerWidth() + this.$activator.innerWidth() < 0 ? "left" : this.options.alignment
                }
            }, {
                key: "fallback",
                value: function () {
                    return {
                        _value: void 0,
                        or: function (e) {
                            return void 0 !== e && void 0 === this._value && (this._value = e), this
                        },
                        value: function () {
                            return this._value
                        }
                    }
                }
            }]) && o(n.prototype, a), s && o(n, s), t
        }();
        e.fn.scrollTo = function (t) {
            return this.scrollTop(this.scrollTop() - this.offset().top + e(t).offset().top), this
        }, e.fn.dropdown = function (e) {
            if (this.length > 1) {
                var n = [];
                return this.each((function () {
                    var i = new t(this, e);
                    i.init(), n.push(i.returnPublicInterface())
                })), n
            }
            var i = new t(this, e);
            return i.init(), i.returnPublicInterface()
        }, e.dropdown = {
            initAnimations: function () {
                t.bindBootstrapEvents()
            }
        }, t.mdbDropdownAutoInit()
    }))
}, function (e, t, n) {
    "use strict";
    n(6), n(12);

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    jQuery((function (e) {
        var t = function () {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.$searchWrappers = e, this.options = {
                    color: this.fallback().or(n.color).or("#000").value(),
                    backgroundColor: this.fallback().or(n.backgroundColor).or("").value(),
                    fontSize: this.fallback().or(n.fontSize).or(".9rem").value(),
                    fontWeight: this.fallback().or(n.fontWeight).or("400").value(),
                    borderRadius: this.fallback().or(n.borderRadius).or("").value(),
                    borderColor: this.fallback().or(n.borderColor).or("").value(),
                    margin: this.fallback().or(n.margin).or("").value()
                }
            }
            var n, r, o;
            return n = t, (r = [{
                key: "init",
                value: function () {
                    return this.bindSearchEvents(), this.$searchWrappers.css({
                        color: this.options.color,
                        backgroundColor: this.options.backgroundColor,
                        fontSize: this.options.fontSize,
                        fontWeight: this.options.fontWeight,
                        borderRadius: this.options.borderRadius,
                        borderColor: this.options.borderColor,
                        margin: this.options.margin
                    })
                }
            }, {
                key: "bindSearchEvents",
                value: function () {
                    this.$searchWrappers.each((function () {
                        var t = e(this).find("input").first();
                        t.on("keyup", (function () {
                            t.closest("div[id]").find("a, li").each((function () {
                                var n = e(this);
                                n.html().toLowerCase().indexOf(t.val().toLowerCase()) > -1 ? n.css({
                                    display: ""
                                }) : n.css({
                                    display: "none"
                                })
                            }))
                        }))
                    }))
                }
            }, {
                key: "fallback",
                value: function () {
                    return {
                        _value: void 0,
                        or: function (e) {
                            return void 0 !== e && void 0 === this._value && (this._value = e), this
                        },
                        value: function () {
                            return this._value
                        }
                    }
                }
            }]) && i(n.prototype, r), o && i(n, o), t
        }();
        e.fn.mdbDropSearch = function (e) {
            return new t(this, e).init()
        }
    }))
}, function (e, t, n) {
    "use strict";
    n(31), n(6), n(38), n(12), n(52), n(13), n(7), n(14), n(29), n(35), n(53), n(40);
    var i = n(105);

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    jQuery((function (e) {
        var t, n = function () {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.options = {
                    destroy: this.fallback().or(n.destroy).or(!1).value(),
                    validate: this.fallback().or(e.attr("data-validate")).or(n.validate).or(!1).value(),
                    selectId: this.fallback().or(e.attr("data-select-id")).or(n.selectId).or(null).value(),
                    defaultMaterialInput: this.fallback().or(e.attr("data-default-material-input")).or(n.defaultMaterialInput).or(!1).value(),
                    fasClasses: this.fallback().or(e.attr("data-fas-classes")).or(n.fasClasses).or("").value(),
                    farClasses: this.fallback().or(e.attr("data-far-classes")).or(n.farClasses).or("").value(),
                    fabClasses: this.fallback().or(e.attr("data-fab-classes")).or(n.fabClasses).or("").value(),
                    copyClassesOption: this.fallback().or(e.attr("data-copy-classes-option")).or(n.copyClassesOption).or(!1).value(),
                    labels: {
                        selectAll: this.fallback().or(e.attr("data-label-select-all")).or((n.labels || {}).selectAll).or("Select all").value(),
                        optionsSelected: this.fallback().or(e.attr("data-label-options-selected")).or((n.labels || {}).optionsSelected).or("options selected").value(),
                        validFeedback: this.fallback().or(e.attr("data-label-valid-feedback")).or((n.labels || {}).validFeedback).or("Ok").value(),
                        invalidFeedback: this.fallback().or(e.attr("data-label-invalid-feedback")).or((n.labels || {}).invalidFeedback).or("Incorrect value").value(),
                        noSearchResults: this.fallback().or(e.attr("data-label-no-search-results")).or((n.labels || {}).noSearchResults).or("No results").value()
                    },
                    keyboardActiveClass: this.fallback().or(e.attr("data-keyboard-active-class")).or(n.keyboardActiveClass).or("heavy-rain-gradient").value(),
                    placeholder: this.fallback().or(e.attr("data-placeholder")).or(n.placeholder).or(null).value(),
                    visibleOptions: this.fallback().or(e.attr("data-visible-options")).or(n.visibleOptions).or(5).value(),
                    maxSelectedOptions: this.fallback().or(e.attr("data-max-selected-options")).or(n.maxSelectedOptions).or(5).value(),
                    showResetButton: this.fallback().or(e.attr("data-show-reset-button")).or(n.showResetButton).or(!1).value()
                }, this.uuid = e.attr("id") || this.options.selectId || this._randomUUID(), this.view = new i.a(e, {
                    options: this.options,
                    properties: {
                        id: this.uuid
                    }
                }), this.selectedOptionsIndexes = [], t.mutationObservers = []
            }
            var n, o, a;
            return n = t, a = [{
                key: "clearMutationObservers",
                value: function () {
                    t.mutationObservers.forEach((function (e) {
                        e.disconnect(), e.customStatus = "stopped"
                    }))
                }
            }, {
                key: "mdbSelectAutoInit",
                value: function () {
                    e(".mdb-select.mdb-select-autoinit").materialSelect()
                }
            }], (o = [{
                key: "init",
                value: function () {
                    var e = this;
                    this.options.destroy ? this.view.destroy() : (this.isInitialized && this.view.destroy(), this.view.render(), this.view.selectPreselectedOptions((function (t) {
                        return e._toggleSelectedValue(t)
                    })), this.bindEvents())
                }
            }, {
                key: "bindEvents",
                value: function () {
                    var e = this;
                    this.bindMutationObserverChange(), this.view.isEditable && this.view.isSearchable && this.view.bindResetButtonClick((function () {
                        return e._resetSelection()
                    })), this.view.bindAddNewOptionClick(), this.view.bindMaterialSelectFocus(), this.view.bindMaterialSelectClick(), this.view.bindMaterialSelectBlur(), this.view.bindMaterialOptionsListTouchstart(), this.view.bindMaterialSelectKeydown(), this.view.bindMaterialSelectDropdownToggle(), this.view.bindToggleAllClick((function (t) {
                        return e._toggleSelectedValue(t)
                    })), this.view.bindMaterialOptionMousedown(), this.view.bindMaterialOptionClick((function (t) {
                        return e._toggleSelectedValue(t)
                    })), !this.view.isMultiple && this.view.isSearchable && this.view.bindSingleMaterialOptionClick(), this.view.isSearchable && this.view.bindSearchInputKeyup(), this.view.bindHtmlClick(), this.view.bindMobileDevicesMousedown(), this.view.bindSaveBtnClick()
                }
            }, {
                key: "bindMutationObserverChange",
                value: function () {
                    var e = new MutationObserver(this._onMutationObserverChange.bind(this));
                    e.observe(this.view.$nativeSelect.get(0), {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }), e.customId = this.uuid, e.customStatus = "observing", t.clearMutationObservers(), t.mutationObservers.push(e)
                }
            }, {
                key: "_onMutationObserverChange",
                value: function (t) {
                    t.forEach((function (t) {
                        var n = e(t.target).closest("select");
                        !0 !== n.data("stop-refresh") && ("childList" === t.type || "attributes" === t.type && e(t.target).is("option")) && (n.materialSelect({
                            destroy: !0
                        }), n.materialSelect())
                    }))
                }
            }, {
                key: "_resetSelection",
                value: function () {
                    this.selectedOptionsIndexes = [], this.view.$nativeSelect.find("option").prop("selected", !1)
                }
            }, {
                key: "_toggleSelectedValue",
                value: function (e) {
                    var t = this.selectedOptionsIndexes.indexOf(e),
                        n = -1 !== t;
                    return n ? this.selectedOptionsIndexes.splice(t, 1) : this.selectedOptionsIndexes.push(e), this.view.$nativeSelect.find("option").eq(e).prop("selected", !n), this._setValueToMaterialSelect(), !n
                }
            }, {
                key: "_setValueToMaterialSelect",
                value: function () {
                    var e = this,
                        t = "",
                        n = this.selectedOptionsIndexes.length;
                    this.selectedOptionsIndexes.forEach((function (n) {
                        return t += ", ".concat(e.view.$nativeSelect.find("option").eq(n).text().replace(/  +/g, " ").trim())
                    })), 0 === (t = this.options.maxSelectedOptions >= 0 && n > this.options.maxSelectedOptions ? "".concat(n, " ").concat(this.options.labels.optionsSelected) : t.substring(2)).length && (t = this.view.$nativeSelect.find("option:disabled").eq(0).text()), this.view.$nativeSelect.siblings("".concat(this.options.defaultMaterialInput ? "input.multi-bs-select" : "input.select-dropdown")).val(t)
                }
            }, {
                key: "_randomUUID",
                value: function () {
                    var e = (new Date).getTime();
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (t) {
                        var n = (e + 16 * Math.random()) % 16 | 0;
                        return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
                    }))
                }
            }, {
                key: "fallback",
                value: function () {
                    return {
                        _value: void 0,
                        or: function (e) {
                            return void 0 !== e && void 0 === this._value && (this._value = e), this
                        },
                        value: function () {
                            return this._value
                        }
                    }
                }
            }, {
                key: "isInitialized",
                get: function () {
                    return Boolean(this.view.$nativeSelect.data("select-id")) && this.view.$nativeSelect.hasClass("initialized")
                }
            }]) && r(n.prototype, o), a && r(n, a), t
        }();
        e.fn.materialSelect = function (t) {
            e(this).not(".browser-default").not(".custom-select").each((function () {
                new n(e(this), t).init()
            }))
        }, t = e.fn.val, e.fn.val = function (e) {
            if (!arguments.length) return t.call(this);
            if (!0 !== this.data("stop-refresh") && this.hasClass("mdb-select") && this.hasClass("initialized")) {
                n.clearMutationObservers(), this.materialSelect({
                    destroy: !0
                });
                var i = t.call(this, e);
                return this.materialSelect(), i
            }
            return t.call(this, e)
        }, n.mdbSelectAutoInit()
    }))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var t;
        n(10), n(16), n(17), n(38), n(8), n(32), n(28), n(13), n(130), n(157), n(7), n(29), n(18), n(40), n(19);

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        /*!
         * clipboard.js v2.0.0
         * https://zenorocha.github.io/clipboard.js
         * 
         * Licensed MIT Â© Zeno Rocha
         */
        t = function () {
            return function (e) {
                function t(i) {
                    if (n[i]) return n[i].exports;
                    var r = n[i] = {
                        i: i,
                        l: !1,
                        exports: {}
                    };
                    return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
                }
                var n = {};
                return t.m = e, t.c = n, t.i = function (e) {
                    return e
                }, t.d = function (e, n, i) {
                    t.o(e, n) || Object.defineProperty(e, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: i
                    })
                }, t.n = function (e) {
                    var n = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(n, "a", n), n
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 3)
            }([function (e, t, n) {
                var r, o, a;
                o = [e, n(7)], r = function (e, t) {
                    var n = function (e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }(t),
                        r = "function" == typeof Symbol && "symbol" == i(Symbol.iterator) ? function (e) {
                            return i(e)
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : i(e)
                        },
                        o = function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                }
                            }
                            return function (t, n, i) {
                                return n && e(t.prototype, n), i && e(t, i), t
                            }
                        }(),
                        a = function () {
                            function e(t) {
                                (function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                })(this, e), this.resolveOptions(t), this.initSelection()
                            }
                            return o(e, [{
                                key: "resolveOptions",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                                }
                            }, {
                                key: "initSelection",
                                value: function () {
                                    this.text ? this.selectFake() : this.target && this.selectTarget()
                                }
                            }, {
                                key: "selectFake",
                                value: function () {
                                    var e = this,
                                        t = "rtl" == document.documentElement.getAttribute("dir");
                                    this.removeFake(), this.fakeHandlerCallback = function () {
                                        return e.removeFake()
                                    }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                                    var i = window.pageYOffset || document.documentElement.scrollTop;
                                    this.fakeElem.style.top = i + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, n.default)(this.fakeElem), this.copyText()
                                }
                            }, {
                                key: "removeFake",
                                value: function () {
                                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                                }
                            }, {
                                key: "selectTarget",
                                value: function () {
                                    this.selectedText = (0, n.default)(this.target), this.copyText()
                                }
                            }, {
                                key: "copyText",
                                value: function () {
                                    var e = void 0;
                                    try {
                                        e = document.execCommand(this.action)
                                    } catch (t) {
                                        e = !1
                                    }
                                    this.handleResult(e)
                                }
                            }, {
                                key: "handleResult",
                                value: function (e) {
                                    this.emitter.emit(e ? "success" : "error", {
                                        action: this.action,
                                        text: this.selectedText,
                                        trigger: this.trigger,
                                        clearSelection: this.clearSelection.bind(this)
                                    })
                                }
                            }, {
                                key: "clearSelection",
                                value: function () {
                                    this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                                }
                            }, {
                                key: "destroy",
                                value: function () {
                                    this.removeFake()
                                }
                            }, {
                                key: "action",
                                set: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                    if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                                },
                                get: function () {
                                    return this._action
                                }
                            }, {
                                key: "target",
                                set: function (e) {
                                    if (void 0 !== e) {
                                        if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                        if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                        if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                        this._target = e
                                    }
                                },
                                get: function () {
                                    return this._target
                                }
                            }]), e
                        }();
                    e.exports = a
                }, void 0 !== (a = "function" == typeof r ? r.apply(t, o) : r) && (e.exports = a)
            }, function (e, t, n) {
                var i = n(6),
                    r = n(5);
                e.exports = function (e, t, n) {
                    if (!e && !t && !n) throw new Error("Missing required arguments");
                    if (!i.string(t)) throw new TypeError("Second argument must be a String");
                    if (!i.fn(n)) throw new TypeError("Third argument must be a Function");
                    if (i.node(e)) return function (e, t, n) {
                        return e.addEventListener(t, n), {
                            destroy: function () {
                                e.removeEventListener(t, n)
                            }
                        }
                    }(e, t, n);
                    if (i.nodeList(e)) return function (e, t, n) {
                        return Array.prototype.forEach.call(e, (function (e) {
                            e.addEventListener(t, n)
                        })), {
                            destroy: function () {
                                Array.prototype.forEach.call(e, (function (e) {
                                    e.removeEventListener(t, n)
                                }))
                            }
                        }
                    }(e, t, n);
                    if (i.string(e)) return function (e, t, n) {
                        return r(document.body, e, t, n)
                    }(e, t, n);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                }
            }, function (e, t) {
                function n() {}
                n.prototype = {
                    on: function (e, t, n) {
                        var i = this.e || (this.e = {});
                        return (i[e] || (i[e] = [])).push({
                            fn: t,
                            ctx: n
                        }), this
                    },
                    once: function (e, t, n) {
                        function i() {
                            r.off(e, i), t.apply(n, arguments)
                        }
                        var r = this;
                        return i._ = t, this.on(e, i, n)
                    },
                    emit: function (e) {
                        for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, t);
                        return this
                    },
                    off: function (e, t) {
                        var n = this.e || (this.e = {}),
                            i = n[e],
                            r = [];
                        if (i && t)
                            for (var o = 0, a = i.length; o < a; o++) i[o].fn !== t && i[o].fn._ !== t && r.push(i[o]);
                        return r.length ? n[e] = r : delete n[e], this
                    }
                }, e.exports = n
            }, function (e, t, n) {
                var r, o, a;
                o = [e, n(0), n(2), n(1)], void 0 !== (a = "function" == typeof (r = function (e, t, n, r) {
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function a(e, t) {
                        var n = "data-clipboard-" + e;
                        if (t.hasAttribute(n)) return t.getAttribute(n)
                    }
                    var s = o(t),
                        l = o(n),
                        c = o(r),
                        u = "function" == typeof Symbol && "symbol" == i(Symbol.iterator) ? function (e) {
                            return i(e)
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : i(e)
                        },
                        f = function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                                }
                            }
                            return function (t, n, i) {
                                return n && e(t.prototype, n), i && e(t, i), t
                            }
                        }(),
                        d = function (e) {
                            function t(e, n) {
                                ! function (e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, t);
                                var r = function (e, t) {
                                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !t || "object" != i(t) && "function" != typeof t ? e : t
                                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                                return r.resolveOptions(n), r.listenClick(e), r
                            }
                            return function (e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + i(t));
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                            }(t, e), f(t, [{
                                key: "resolveOptions",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === u(e.container) ? e.container : document.body
                                }
                            }, {
                                key: "listenClick",
                                value: function (e) {
                                    var t = this;
                                    this.listener = (0, c.default)(e, "click", (function (e) {
                                        return t.onClick(e)
                                    }))
                                }
                            }, {
                                key: "onClick",
                                value: function (e) {
                                    var t = e.delegateTarget || e.currentTarget;
                                    this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s.default({
                                        action: this.action(t),
                                        target: this.target(t),
                                        text: this.text(t),
                                        container: this.container,
                                        trigger: t,
                                        emitter: this
                                    })
                                }
                            }, {
                                key: "defaultAction",
                                value: function (e) {
                                    return a("action", e)
                                }
                            }, {
                                key: "defaultTarget",
                                value: function (e) {
                                    var t = a("target", e);
                                    if (t) return document.querySelector(t)
                                }
                            }, {
                                key: "defaultText",
                                value: function (e) {
                                    return a("text", e)
                                }
                            }, {
                                key: "destroy",
                                value: function () {
                                    this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                                }
                            }], [{
                                key: "isSupported",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                        t = "string" == typeof e ? [e] : e,
                                        n = !!document.queryCommandSupported;
                                    return t.forEach((function (e) {
                                        n = n && !!document.queryCommandSupported(e)
                                    })), n
                                }
                            }]), t
                        }(l.default);
                    e.exports = d
                }) ? r.apply(t, o) : r) && (e.exports = a)
            }, function (e, t) {
                var n = 9;
                if ("undefined" != typeof Element && !Element.prototype.matches) {
                    var i = Element.prototype;
                    i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
                }
                e.exports = function (e, t) {
                    for (; e && e.nodeType !== n;) {
                        if ("function" == typeof e.matches && e.matches(t)) return e;
                        e = e.parentNode
                    }
                }
            }, function (e, t, n) {
                function i(e, t, n, i, o) {
                    var a = r.apply(this, arguments);
                    return e.addEventListener(n, a, o), {
                        destroy: function () {
                            e.removeEventListener(n, a, o)
                        }
                    }
                }

                function r(e, t, n, i) {
                    return function (n) {
                        n.delegateTarget = o(n.target, t), n.delegateTarget && i.call(e, n)
                    }
                }
                var o = n(4);
                e.exports = function (e, t, n, r, o) {
                    return "function" == typeof e.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, (function (e) {
                        return i(e, t, n, r, o)
                    })))
                }
            }, function (e, t) {
                t.node = function (e) {
                    return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
                }, t.nodeList = function (e) {
                    var n = Object.prototype.toString.call(e);
                    return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
                }, t.string = function (e) {
                    return "string" == typeof e || e instanceof String
                }, t.fn = function (e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                }
            }, function (e, t) {
                e.exports = function (e) {
                    var t;
                    if ("SELECT" === e.nodeName) e.focus(), t = e.value;
                    else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                        var n = e.hasAttribute("readonly");
                        n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
                    } else {
                        e.hasAttribute("contenteditable") && e.focus();
                        var i = window.getSelection(),
                            r = document.createRange();
                        r.selectNodeContents(e), i.removeAllRanges(), i.addRange(r), t = i.toString()
                    }
                    return t
                }
            }])
        }, "object" == ("undefined" == typeof exports ? "undefined" : i(exports)) && "object" == i(e) ? e.exports = t() : "function" == typeof define && n(24) ? define([], t) : "object" == ("undefined" == typeof exports ? "undefined" : i(exports)) ? exports.ClipboardJS = t() : window.ClipboardJS = t()
    }).call(this, n(27)(e))
}, function (e, t, n) {
    "use strict";
    (function (e, t) {
        n(31), n(36), n(38), n(12), n(23), n(32), n(28), n(60), n(52), n(13), n(107), n(44), n(7), n(46), n(43), n(62), n(14), n(29), n(42), n(35), n(30), n(40);
        var i = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
            r = function () {
                var e = /\blang(?:uage)?-([\w-]+)\b/i,
                    t = 0,
                    n = i.Prism = {
                        manual: i.Prism && i.Prism.manual,
                        disableWorkerMessageHandler: i.Prism && i.Prism.disableWorkerMessageHandler,
                        util: {
                            encode: function (e) {
                                return e instanceof r ? new r(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                            },
                            type: function (e) {
                                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                            },
                            objId: function (e) {
                                return e.__id || Object.defineProperty(e, "__id", {
                                    value: ++t
                                }), e.__id
                            },
                            clone: function (e, t) {
                                var i = n.util.type(e);
                                switch (t = t || {}, i) {
                                    case "Object":
                                        if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                                        o = {};
                                        for (var r in t[n.util.objId(e)] = o, e) e.hasOwnProperty(r) && (o[r] = n.util.clone(e[r], t));
                                        return o;
                                    case "Array":
                                        if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                                        var o = [];
                                        return t[n.util.objId(e)] = o, e.forEach((function (e, i) {
                                            o[i] = n.util.clone(e, t)
                                        })), o
                                }
                                return e
                            }
                        },
                        languages: {
                            extend: function (e, t) {
                                var i = n.util.clone(n.languages[e]);
                                for (var r in t) i[r] = t[r];
                                return i
                            },
                            insertBefore: function (e, t, i, r) {
                                var o = (r = r || n.languages)[e];
                                if (2 == arguments.length) {
                                    for (var a in i = arguments[1]) i.hasOwnProperty(a) && (o[a] = i[a]);
                                    return o
                                }
                                var s = {};
                                for (var l in o)
                                    if (o.hasOwnProperty(l)) {
                                        if (l == t)
                                            for (var a in i) i.hasOwnProperty(a) && (s[a] = i[a]);
                                        s[l] = o[l]
                                    } return n.languages.DFS(n.languages, (function (t, n) {
                                    n === r[e] && t != e && (this[t] = s)
                                })), r[e] = s
                            },
                            DFS: function (e, t, i, r) {
                                for (var o in r = r || {}, e) e.hasOwnProperty(o) && (t.call(e, o, e[o], i || o), "Object" !== n.util.type(e[o]) || r[n.util.objId(e[o])] ? "Array" !== n.util.type(e[o]) || r[n.util.objId(e[o])] || (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, o, r)) : (r[n.util.objId(e[o])] = !0, n.languages.DFS(e[o], t, null, r)))
                            }
                        },
                        plugins: {},
                        highlightAll: function (e, t) {
                            n.highlightAllUnder(document, e, t)
                        },
                        highlightAllUnder: function (e, t, i) {
                            var r = {
                                callback: i,
                                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                            };
                            n.hooks.run("before-highlightall", r);
                            for (var o, a = r.elements || e.querySelectorAll(r.selector), s = 0; o = a[s++];) n.highlightElement(o, !0 === t, r.callback)
                        },
                        highlightElement: function (t, r, o) {
                            for (var a, s, l = t; l && !e.test(l.className);) l = l.parentNode;
                            l && (a = (l.className.match(e) || [, ""])[1].toLowerCase(), s = n.languages[a]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + a, t.parentNode && (l = t.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + a));
                            var c = {
                                element: t,
                                language: a,
                                grammar: s,
                                code: t.textContent
                            };
                            if (n.hooks.run("before-sanity-check", c), !c.code || !c.grammar) return c.code && (n.hooks.run("before-highlight", c), c.element.textContent = c.code, n.hooks.run("after-highlight", c)), void n.hooks.run("complete", c);
                            if (n.hooks.run("before-highlight", c), r && i.Worker) {
                                var u = new Worker(n.filename);
                                u.onmessage = function (e) {
                                    c.highlightedCode = e.data, n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, o && o.call(c.element), n.hooks.run("after-highlight", c), n.hooks.run("complete", c)
                                }, u.postMessage(JSON.stringify({
                                    language: c.language,
                                    code: c.code,
                                    immediateClose: !0
                                }))
                            } else c.highlightedCode = n.highlight(c.code, c.grammar, c.language), n.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, o && o.call(t), n.hooks.run("after-highlight", c), n.hooks.run("complete", c)
                        },
                        highlight: function (e, t, i) {
                            var o = {
                                code: e,
                                grammar: t,
                                language: i
                            };
                            return n.hooks.run("before-tokenize", o), o.tokens = n.tokenize(o.code, o.grammar), n.hooks.run("after-tokenize", o), r.stringify(n.util.encode(o.tokens), o.language)
                        },
                        matchGrammar: function (e, t, i, r, o, a, s) {
                            var l = n.Token;
                            for (var c in i)
                                if (i.hasOwnProperty(c) && i[c]) {
                                    if (c == s) return;
                                    var u = i[c];
                                    u = "Array" === n.util.type(u) ? u : [u];
                                    for (var f = 0; f < u.length; ++f) {
                                        var d = u[f],
                                            h = d.inside,
                                            p = !!d.lookbehind,
                                            g = !!d.greedy,
                                            v = 0,
                                            m = d.alias;
                                        if (g && !d.pattern.global) {
                                            var y = d.pattern.toString().match(/[imuy]*$/)[0];
                                            d.pattern = RegExp(d.pattern.source, y + "g")
                                        }
                                        d = d.pattern || d;
                                        for (var b = r, w = o; b < t.length; w += t[b].length, ++b) {
                                            var x = t[b];
                                            if (t.length > e.length) return;
                                            if (!(x instanceof l)) {
                                                if (g && b != t.length - 1) {
                                                    if (d.lastIndex = w, !(T = d.exec(e))) break;
                                                    for (var S = T.index + (p ? T[1].length : 0), k = T.index + T[0].length, C = b, _ = w, E = t.length; C < E && (_ < k || !t[C].type && !t[C - 1].greedy); ++C) S >= (_ += t[C].length) && (++b, w = _);
                                                    if (t[b] instanceof l) continue;
                                                    O = C - b, x = e.slice(w, _), T.index -= w
                                                } else {
                                                    d.lastIndex = 0;
                                                    var T = d.exec(x),
                                                        O = 1
                                                }
                                                if (T) {
                                                    p && (v = T[1] ? T[1].length : 0);
                                                    k = (S = T.index + v) + (T = T[0].slice(v)).length;
                                                    var A = x.slice(0, S),
                                                        $ = x.slice(k),
                                                        L = [b, O];
                                                    A && (++b, w += A.length, L.push(A));
                                                    var P = new l(c, h ? n.tokenize(T, h) : T, m, T, g);
                                                    if (L.push(P), $ && L.push($), Array.prototype.splice.apply(t, L), 1 != O && n.matchGrammar(e, t, i, b, w, !0, c), a) break
                                                } else if (a) break
                                            }
                                        }
                                    }
                                }
                        },
                        tokenize: function (e, t, i) {
                            var r = [e],
                                o = t.rest;
                            if (o) {
                                for (var a in o) t[a] = o[a];
                                delete t.rest
                            }
                            return n.matchGrammar(e, r, t, 0, 0, !1), r
                        },
                        hooks: {
                            all: {},
                            add: function (e, t) {
                                var i = n.hooks.all;
                                i[e] = i[e] || [], i[e].push(t)
                            },
                            run: function (e, t) {
                                var i = n.hooks.all[e];
                                if (i && i.length)
                                    for (var r, o = 0; r = i[o++];) r(t)
                            }
                        }
                    },
                    r = n.Token = function (e, t, n, i, r) {
                        this.type = e, this.content = t, this.alias = n, this.length = 0 | (i || "").length, this.greedy = !!r
                    };
                if (r.stringify = function (e, t, i) {
                        if ("string" == typeof e) return e;
                        if ("Array" === n.util.type(e)) return e.map((function (n) {
                            return r.stringify(n, t, e)
                        })).join("");
                        var o = {
                            type: e.type,
                            content: r.stringify(e.content, t, i),
                            tag: "span",
                            classes: ["token", e.type],
                            attributes: {},
                            language: t,
                            parent: i
                        };
                        if (e.alias) {
                            var a = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
                            Array.prototype.push.apply(o.classes, a)
                        }
                        n.hooks.run("wrap", o);
                        var s = Object.keys(o.attributes).map((function (e) {
                            return e + '="' + (o.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                        })).join(" ");
                        return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + o.content + "</" + o.tag + ">"
                    }, !i.document) return i.addEventListener ? (n.disableWorkerMessageHandler || i.addEventListener("message", (function (e) {
                    var t = JSON.parse(e.data),
                        r = t.language,
                        o = t.code,
                        a = t.immediateClose;
                    i.postMessage(n.highlight(o, n.languages[r], r)), a && i.close()
                }), !1), i.Prism) : i.Prism;
                var o = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
                return o && (n.filename = o.src, n.manual || o.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), i.Prism
            }();
        e.exports && (e.exports = r), void 0 !== t && (t.Prism = r), r.languages.markup = {
                comment: /<!--[\s\S]*?-->/,
                prolog: /<\?[\s\S]+?\?>/,
                doctype: /<!DOCTYPE[\s\S]+?>/i,
                cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
                    greedy: !0,
                    inside: {
                        tag: {
                            pattern: /^<\/?[^\s>\/]+/i,
                            inside: {
                                punctuation: /^<\/?/,
                                namespace: /^[^\s>\/:]+:/
                            }
                        },
                        "attr-value": {
                            pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                            inside: {
                                punctuation: [/^=/, {
                                    pattern: /(^|[^\\])["']/,
                                    lookbehind: !0
                                }]
                            }
                        },
                        punctuation: /\/?>/,
                        "attr-name": {
                            pattern: /[^\s>\/]+/,
                            inside: {
                                namespace: /^[^\s>\/:]+:/
                            }
                        }
                    }
                },
                entity: /&#?[\da-z]{1,8};/i
            }, r.languages.markup.tag.inside["attr-value"].inside.entity = r.languages.markup.entity, r.hooks.add("wrap", (function (e) {
                "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
            })), r.languages.xml = r.languages.markup, r.languages.html = r.languages.markup, r.languages.mathml = r.languages.markup, r.languages.svg = r.languages.markup, r.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                    pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
                    inside: {
                        rule: /@[\w-]+/
                    }
                },
                url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
                selector: /[^{}\s][^{};]*?(?=\s*\{)/,
                string: {
                    pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
                important: /\B!important\b/i,
                function: /[-a-z0-9]+(?=\()/i,
                punctuation: /[(){};:]/
            }, r.languages.css.atrule.inside.rest = r.languages.css, r.languages.markup && (r.languages.insertBefore("markup", "tag", {
                style: {
                    pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
                    lookbehind: !0,
                    inside: r.languages.css,
                    alias: "language-css",
                    greedy: !0
                }
            }), r.languages.insertBefore("inside", "attr-value", {
                "style-attr": {
                    pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                    inside: {
                        "attr-name": {
                            pattern: /^\s*style/i,
                            inside: r.languages.markup.tag.inside
                        },
                        punctuation: /^\s*=\s*['"]|['"]\s*$/,
                        "attr-value": {
                            pattern: /.+/i,
                            inside: r.languages.css
                        }
                    },
                    alias: "language-css"
                }
            }, r.languages.markup.tag)), r.languages.clike = {
                comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0
                }, {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: !0,
                    greedy: !0
                }],
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: !0
                },
                "class-name": {
                    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
                    lookbehind: !0,
                    inside: {
                        punctuation: /[.\\]/
                    }
                },
                keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                boolean: /\b(?:true|false)\b/,
                function: /[a-z0-9_]+(?=\()/i,
                number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
                punctuation: /[{}[\];(),.:]/
            }, r.languages.javascript = r.languages.extend("clike", {
                keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
                number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
                function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
                operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
            }), r.languages.insertBefore("javascript", "keyword", {
                regex: {
                    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
                    lookbehind: !0,
                    greedy: !0
                },
                "function-variable": {
                    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
                    alias: "function"
                },
                constant: /\b[A-Z][A-Z\d_]*\b/
            }), r.languages.insertBefore("javascript", "string", {
                "template-string": {
                    pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /\${[^}]+}/,
                            inside: {
                                "interpolation-punctuation": {
                                    pattern: /^\${|}$/,
                                    alias: "punctuation"
                                },
                                rest: null
                            }
                        },
                        string: /[\s\S]+/
                    }
                }
            }), r.languages.javascript["template-string"].inside.interpolation.inside.rest = r.languages.javascript, r.languages.markup && r.languages.insertBefore("markup", "tag", {
                script: {
                    pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
                    lookbehind: !0,
                    inside: r.languages.javascript,
                    alias: "language-javascript",
                    greedy: !0
                }
            }), r.languages.js = r.languages.javascript, r.languages["markup-templating"] = {}, Object.defineProperties(r.languages["markup-templating"], {
                buildPlaceholders: {
                    value: function (e, t, n, i) {
                        e.language === t && (e.tokenStack = [], e.code = e.code.replace(n, (function (n) {
                            if ("function" == typeof i && !i(n)) return n;
                            for (var r = e.tokenStack.length; - 1 !== e.code.indexOf("___" + t.toUpperCase() + r + "___");) ++r;
                            return e.tokenStack[r] = n, "___" + t.toUpperCase() + r + "___"
                        })), e.grammar = r.languages.markup)
                    }
                },
                tokenizePlaceholders: {
                    value: function (e, t) {
                        if (e.language === t && e.tokenStack) {
                            e.grammar = r.languages[t];
                            var n = 0,
                                i = Object.keys(e.tokenStack);
                            ! function o(a) {
                                if (!(n >= i.length))
                                    for (var s = 0; s < a.length; s++) {
                                        var l = a[s];
                                        if ("string" == typeof l || l.content && "string" == typeof l.content) {
                                            var c = i[n],
                                                u = e.tokenStack[c],
                                                f = "string" == typeof l ? l : l.content,
                                                d = f.indexOf("___" + t.toUpperCase() + c + "___");
                                            if (d > -1) {
                                                ++n;
                                                var h, p = f.substring(0, d),
                                                    g = new r.Token(t, r.tokenize(u, e.grammar, t), "language-" + t, u),
                                                    v = f.substring(d + ("___" + t.toUpperCase() + c + "___").length);
                                                if (p || v ? o(h = [p, g, v].filter((function (e) {
                                                        return !!e
                                                    }))) : h = g, "string" == typeof l ? Array.prototype.splice.apply(a, [s, 1].concat(h)) : l.content = h, n >= i.length) break
                                            }
                                        } else l.content && "string" != typeof l.content && o(l.content)
                                    }
                            }(e.tokens)
                        }
                    }
                }
            }), r.languages.json = {
                property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
                string: {
                    pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
                    greedy: !0
                },
                number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
                punctuation: /[{}[\]);,]/,
                operator: /:/g,
                boolean: /\b(?:true|false)\b/i,
                null: /\bnull\b/i
            }, r.languages.jsonp = r.languages.json,
            function (e) {
                e.languages.php = e.languages.extend("clike", {
                    keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
                    constant: /\b[A-Z0-9_]{2,}\b/,
                    comment: {
                        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                        lookbehind: !0
                    }
                }), e.languages.insertBefore("php", "string", {
                    "shell-comment": {
                        pattern: /(^|[^\\])#.*/,
                        lookbehind: !0,
                        alias: "comment"
                    }
                }), e.languages.insertBefore("php", "keyword", {
                    delimiter: {
                        pattern: /\?>|<\?(?:php|=)?/i,
                        alias: "important"
                    },
                    variable: /\$+(?:\w+\b|(?={))/i,
                    package: {
                        pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\\/
                        }
                    }
                }), e.languages.insertBefore("php", "operator", {
                    property: {
                        pattern: /(->)[\w]+/,
                        lookbehind: !0
                    }
                }), e.languages.insertBefore("php", "string", {
                    "nowdoc-string": {
                        pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
                        greedy: !0,
                        alias: "string",
                        inside: {
                            delimiter: {
                                pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                                alias: "symbol",
                                inside: {
                                    punctuation: /^<<<'?|[';]$/
                                }
                            }
                        }
                    },
                    "heredoc-string": {
                        pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
                        greedy: !0,
                        alias: "string",
                        inside: {
                            delimiter: {
                                pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                                alias: "symbol",
                                inside: {
                                    punctuation: /^<<<"?|[";]$/
                                }
                            },
                            interpolation: null
                        }
                    },
                    "single-quoted-string": {
                        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                        greedy: !0,
                        alias: "string"
                    },
                    "double-quoted-string": {
                        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                        greedy: !0,
                        alias: "string",
                        inside: {
                            interpolation: null
                        }
                    }
                }), delete e.languages.php.string;
                var t = {
                    pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
                    lookbehind: !0,
                    inside: {
                        rest: e.languages.php
                    }
                };
                e.languages.php["heredoc-string"].inside.interpolation = t, e.languages.php["double-quoted-string"].inside.interpolation = t, e.hooks.add("before-tokenize", (function (t) {
                    if (/(?:<\?php|<\?)/gi.test(t.code)) {
                        e.languages["markup-templating"].buildPlaceholders(t, "php", /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi)
                    }
                })), e.hooks.add("after-tokenize", (function (t) {
                    e.languages["markup-templating"].tokenizePlaceholders(t, "php")
                }))
            }(r), r.languages.typescript = r.languages.extend("javascript", {
                keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,
                builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/
            }), r.languages.ts = r.languages.typescript, r.languages.scss = r.languages.extend("css", {
                comment: {
                    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                    lookbehind: !0
                },
                atrule: {
                    pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
                    inside: {
                        rule: /@[\w-]+/
                    }
                },
                url: /(?:[-a-z]+-)*url(?=\()/i,
                selector: {
                    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
                    inside: {
                        parent: {
                            pattern: /&/,
                            alias: "important"
                        },
                        placeholder: /%[-\w]+/,
                        variable: /\$[-\w]+|#\{\$[-\w]+\}/
                    }
                }
            }), r.languages.insertBefore("scss", "atrule", {
                keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
                    pattern: /( +)(?:from|through)(?= )/,
                    lookbehind: !0
                }]
            }), r.languages.scss.property = {
                pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
                inside: {
                    variable: /\$[-\w]+|#\{\$[-\w]+\}/
                }
            }, r.languages.insertBefore("scss", "important", {
                variable: /\$[-\w]+|#\{\$[-\w]+\}/
            }), r.languages.insertBefore("scss", "function", {
                placeholder: {
                    pattern: /%[-\w]+/,
                    alias: "selector"
                },
                statement: {
                    pattern: /\B!(?:default|optional)\b/i,
                    alias: "keyword"
                },
                boolean: /\b(?:true|false)\b/,
                null: /\bnull\b/,
                operator: {
                    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
                    lookbehind: !0
                }
            }), r.languages.scss.atrule.inside.rest = r.languages.scss,
            function () {
                if ("undefined" != typeof self && self.Prism && self.document) {
                    var e = /\n(?!$)/g,
                        t = function (t) {
                            var i = n(t)["white-space"];
                            if ("pre-wrap" === i || "pre-line" === i) {
                                var r = t.querySelector("code"),
                                    o = t.querySelector(".line-numbers-rows"),
                                    a = t.querySelector(".line-numbers-sizer"),
                                    s = r.textContent.split(e);
                                a || ((a = document.createElement("span")).className = "line-numbers-sizer", r.appendChild(a)), a.style.display = "block", s.forEach((function (e, t) {
                                    a.textContent = e || "\n";
                                    var n = a.getBoundingClientRect().height;
                                    o.children[t].style.height = n + "px"
                                })), a.textContent = "", a.style.display = "none"
                            }
                        },
                        n = function (e) {
                            return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
                        };
                    window.addEventListener("resize", (function () {
                        Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"), t)
                    })), r.hooks.add("complete", (function (n) {
                        if (n.code) {
                            var i = n.element.parentNode,
                                o = /\s*\bline-numbers\b\s*/;
                            if (i && /pre/i.test(i.nodeName) && (o.test(i.className) || o.test(n.element.className)) && !n.element.querySelector(".line-numbers-rows")) {
                                o.test(n.element.className) && (n.element.className = n.element.className.replace(o, " ")), o.test(i.className) || (i.className += " line-numbers");
                                var a, s = n.code.match(e),
                                    l = s ? s.length + 1 : 1,
                                    c = new Array(l + 1);
                                c = c.join("<span></span>"), (a = document.createElement("span")).setAttribute("aria-hidden", "true"), a.className = "line-numbers-rows", a.innerHTML = c, i.hasAttribute("data-start") && (i.style.counterReset = "linenumber " + (parseInt(i.getAttribute("data-start"), 10) - 1)), n.element.appendChild(a), t(i), r.hooks.run("line-numbers", n)
                            }
                        }
                    })), r.hooks.add("line-numbers", (function (e) {
                        e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
                    })), r.plugins.lineNumbers = {
                        getLine: function (e, t) {
                            if ("PRE" === e.tagName && e.classList.contains("line-numbers")) {
                                var n = e.querySelector(".line-numbers-rows"),
                                    i = parseInt(e.getAttribute("data-start"), 10) || 1,
                                    r = i + (n.children.length - 1);
                                t < i && (t = i), t > r && (t = r);
                                var o = t - i;
                                return n.children[o]
                            }
                        }
                    }
                }
            }(),
            function () {
                if ("undefined" != typeof self && self.Prism && self.document) {
                    var e = [],
                        t = {},
                        n = function () {};
                    r.plugins.toolbar = {};
                    var i = r.plugins.toolbar.registerButton = function (n, i) {
                            var r;
                            r = "function" == typeof i ? i : function (e) {
                                var t;
                                return "function" == typeof i.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", (function () {
                                    i.onClick.call(this, e)
                                }))) : "string" == typeof i.url ? (t = document.createElement("a")).href = i.url : t = document.createElement("span"), t.textContent = i.text, t
                            }, e.push(t[n] = r)
                        },
                        o = r.plugins.toolbar.hook = function (i) {
                            var r = i.element.parentNode;
                            if (r && /pre/i.test(r.nodeName) && !r.parentNode.classList.contains("code-toolbar")) {
                                var o = document.createElement("div");
                                o.classList.add("code-toolbar"), r.parentNode.insertBefore(o, r), o.appendChild(r);
                                var a = document.createElement("div");
                                a.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (e = document.body.getAttribute("data-toolbar-order").split(",").map((function (e) {
                                    return t[e] || n
                                }))), e.forEach((function (e) {
                                    var t = e(i);
                                    if (t) {
                                        var n = document.createElement("div");
                                        n.classList.add("toolbar-item"), n.appendChild(t), a.appendChild(n)
                                    }
                                })), o.appendChild(a)
                            }
                        };
                    i("label", (function (e) {
                        var t = e.element.parentNode;
                        if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                            var n, i, r = t.getAttribute("data-label");
                            try {
                                i = document.querySelector("template#" + r)
                            } catch (e) {}
                            return i ? n = i.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n
                        }
                    })), r.hooks.add("complete", o)
                }
            }(),
            function () {
                if (("undefined" == typeof self || self.Prism) && self.document && Function.prototype.bind) {
                    var e, t, n = {
                            gradient: {
                                create: (e = {}, t = function (t) {
                                    if (e[t]) return e[t];
                                    var n = t.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/),
                                        i = n && n[1],
                                        r = n && n[2],
                                        o = t.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g, "").split(/\s*,\s*/);
                                    return r.indexOf("linear") >= 0 ? e[t] = function (e, t, n) {
                                        var i = "180deg";
                                        return /^(?:-?\d*\.?\d+(?:deg|rad)|to\b|top|right|bottom|left)/.test(n[0]) && (i = n.shift()).indexOf("to ") < 0 && (i.indexOf("top") >= 0 ? i = i.indexOf("left") >= 0 ? "to bottom right" : i.indexOf("right") >= 0 ? "to bottom left" : "to bottom" : i.indexOf("bottom") >= 0 ? i = i.indexOf("left") >= 0 ? "to top right" : i.indexOf("right") >= 0 ? "to top left" : "to top" : i.indexOf("left") >= 0 ? i = "to right" : i.indexOf("right") >= 0 ? i = "to left" : e && (i.indexOf("deg") >= 0 ? i = 90 - parseFloat(i) + "deg" : i.indexOf("rad") >= 0 && (i = Math.PI / 2 - parseFloat(i) + "rad"))), t + "(" + i + "," + n.join(",") + ")"
                                    }(i, r, o) : r.indexOf("radial") >= 0 ? e[t] = function (e, t, n) {
                                        if (n[0].indexOf("at") < 0) {
                                            var i = "center",
                                                r = "ellipse",
                                                o = "farthest-corner";
                                            if (/\bcenter|top|right|bottom|left\b|^\d+/.test(n[0]) && (i = n.shift().replace(/\s*-?\d+(?:rad|deg)\s*/, "")), /\bcircle|ellipse|closest|farthest|contain|cover\b/.test(n[0])) {
                                                var a = n.shift().split(/\s+/);
                                                !a[0] || "circle" !== a[0] && "ellipse" !== a[0] || (r = a.shift()), a[0] && (o = a.shift()), "cover" === o ? o = "farthest-corner" : "contain" === o && (o = "clothest-side")
                                            }
                                            return t + "(" + r + " " + o + " at " + i + "," + n.join(",") + ")"
                                        }
                                        return t + "(" + n.join(",") + ")"
                                    }(0, r, o) : e[t] = r + "(" + o.join(",") + ")"
                                }, function () {
                                    new r.plugins.Previewer("gradient", (function (e) {
                                        return this.firstChild.style.backgroundImage = "", this.firstChild.style.backgroundImage = t(e), !!this.firstChild.style.backgroundImage
                                    }), "*", (function () {
                                        this._elt.innerHTML = "<div></div>"
                                    }))
                                }),
                                tokens: {
                                    gradient: {
                                        pattern: /(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,
                                        inside: {
                                            function: /[\w-]+(?=\()/,
                                            punctuation: /[(),]/
                                        }
                                    }
                                },
                                languages: {
                                    css: !0,
                                    less: !0,
                                    sass: [{
                                        lang: "sass",
                                        before: "punctuation",
                                        inside: "inside",
                                        root: r.languages.sass && r.languages.sass["variable-line"]
                                    }, {
                                        lang: "sass",
                                        before: "punctuation",
                                        inside: "inside",
                                        root: r.languages.sass && r.languages.sass["property-line"]
                                    }],
                                    scss: !0,
                                    stylus: [{
                                        lang: "stylus",
                                        before: "func",
                                        inside: "rest",
                                        root: r.languages.stylus && r.languages.stylus["property-declaration"].inside
                                    }, {
                                        lang: "stylus",
                                        before: "func",
                                        inside: "rest",
                                        root: r.languages.stylus && r.languages.stylus["variable-declaration"].inside
                                    }]
                                }
                            },
                            angle: {
                                create: function () {
                                    new r.plugins.Previewer("angle", (function (e) {
                                        var t, n, i = parseFloat(e),
                                            r = e.match(/[a-z]+$/i);
                                        if (!i || !r) return !1;
                                        switch (r = r[0]) {
                                            case "deg":
                                                t = 360;
                                                break;
                                            case "grad":
                                                t = 400;
                                                break;
                                            case "rad":
                                                t = 2 * Math.PI;
                                                break;
                                            case "turn":
                                                t = 1
                                        }
                                        return n = 100 * i / t, n %= 100, this[(i < 0 ? "set" : "remove") + "Attribute"]("data-negative", ""), this.querySelector("circle").style.strokeDasharray = Math.abs(n) + ",500", !0
                                    }), "*", (function () {
                                        this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                                    }))
                                },
                                tokens: {
                                    angle: /(?:\b|\B-|(?=\B\.))\d*\.?\d+(?:deg|g?rad|turn)\b/i
                                },
                                languages: {
                                    css: !0,
                                    less: !0,
                                    markup: {
                                        lang: "markup",
                                        before: "punctuation",
                                        inside: "inside",
                                        root: r.languages.markup && r.languages.markup.tag.inside["attr-value"]
                                    },
                                    sass: [{
                                        lang: "sass",
                                        inside: "inside",
                                        root: r.languages.sass && r.languages.sass["property-line"]
                                    }, {
                                        lang: "sass",
                                        before: "operator",
                                        inside: "inside",
                                        root: r.languages.sass && r.languages.sass["variable-line"]
                                    }],
                                    scss: !0,
                                    stylus: [{
                                        lang: "stylus",
                                        before: "func",
                                        inside: "rest",
                                        root: r.languages.stylus && r.languages.stylus["property-declaration"].inside
                                    }, {
                                        lang: "stylus",
                                        before: "func",
                                        inside: "rest",
                                        root: r.languages.stylus && r.languages.stylus["variable-declaration"].inside
                                    }]
                                }
                            },
                            color: {
                                create: function () {
                                    new r.plugins.Previewer("color", (function (e) {
                                        return this.style.backgroundColor = "", this.style.backgroundColor = e, !!this.style.backgroundColor
                                    }))
                                },
                                tokens: {
                                    color: {
                                        pattern: /\B#(?:[0-9a-f]{3}){1,2}\b|\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B|\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                                        inside: {
                                            function: /[\w-]+(?=\()/,
                                            punctuation: /[(),]/
                                        }
                                    }
                                },
                                languages: {
                                    css: !0,
                                    less: !0,
                                    markup: {
                                        lang: "markup",
                                        before: "punctuation",
                                        inside: "inside",
                                        root: r.languages.markup && r.languages.markup.tag.inside["attr-value"]
                                    },
                                    sass: [{
                                        lang: "sass",
                                        before: "punctuation",
                                        inside: "inside",
                                        root: r.languages.sass && r.languages.sass["variable-line"]
                                    }, {
                                        lang: "sass",
                                        inside: "inside",
                                        root: r.languages.sass && r.languages.sass["property-line"]
                                    }],
                                    scss: !0,
                                    stylus: [{
                                        lang: "stylus",
                                        before: "hexcode",
                                        inside: "rest",
                                        root: r.languages.stylus && r.languages.stylus["property-declaration"].inside
                                    }, {
                                        lang: "stylus",
                                        before: "hexcode",
                                        inside: "rest",
                                        root: r.languages.stylus && r.languages.stylus["variable-declaration"].inside
                                    }]
                                }
                            },
                            easing: {
                                create: function () {
                                    new r.plugins.Previewer("easing", (function (e) {
                                        var t = (e = {
                                            linear: "0,0,1,1",
                                            ease: ".25,.1,.25,1",
                                            "ease-in": ".42,0,1,1",
                                            "ease-out": "0,0,.58,1",
                                            "ease-in-out": ".42,0,.58,1"
                                        } [e] || e).match(/-?\d*\.?\d+/g);
                                        if (4 === t.length) {
                                            t = t.map((function (e, t) {
                                                return 100 * (t % 2 ? 1 - e : e)
                                            })), this.querySelector("path").setAttribute("d", "M0,100 C" + t[0] + "," + t[1] + ", " + t[2] + "," + t[3] + ", 100,0");
                                            var n = this.querySelectorAll("line");
                                            return n[0].setAttribute("x2", t[0]), n[0].setAttribute("y2", t[1]), n[1].setAttribute("x2", t[2]), n[1].setAttribute("y2", t[3]), !0
                                        }
                                        return !1
                                    }), "*", (function () {
                                        this._elt.innerHTML = '<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /></svg>'
                                    }))
                                },
                                tokens: {
                                    easing: {
                                        pattern: /\bcubic-bezier\((?:-?\d*\.?\d+,\s*){3}-?\d*\.?\d+\)\B|\b(?:linear|ease(?:-in)?(?:-out)?)(?=\s|[;}]|$)/i,
                                        inside: {
                                            function: /[\w-]+(?=\()/,
                                            punctuation: /[(),]/
                                        }
                                    }
                                },
                                languages: {
                                    css: !0,
                                    less: !0,
                                    sass: [{
                                        lang: "sass",
                                        inside: "inside",
                                        before: "punctuation",
                                        root: r.languages.sass && r.languages.sass["variable-line"]
                                    }, {
                                        lang: "sass",
                                        inside: "inside",
                                        root: r.languages.sass && r.languages.sass["property-line"]
                                    }],
                                    scss: !0,
                                    stylus: [{
                                        lang: "stylus",
                                        before: "hexcode",
                                        inside: "rest",
                                        root: r.languages.stylus && r.languages.stylus["property-declaration"].inside
                                    }, {
                                        lang: "stylus",
                                        before: "hexcode",
                                        inside: "rest",
                                        root: r.languages.stylus && r.languages.stylus["variable-declaration"].inside
                                    }]
                                }
                            },
                            time: {
                                create: function () {
                                    new r.plugins.Previewer("time", (function (e) {
                                        var t = parseFloat(e),
                                            n = e.match(/[a-z]+$/i);
                                        return !(!t || !n) && (n = n[0], this.querySelector("circle").style.animationDuration = 2 * t + n, !0)
                                    }), "*", (function () {
                                        this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                                    }))
                                },
                                tokens: {
                                    time: /(?:\b|\B-|(?=\B\.))\d*\.?\d+m?s\b/i
                                },
                                languages: {
                                    css: !0,
                                    less: !0,
                                    markup: {
                                        lang: "markup",
                                        before: "punctuation",
                                        inside: "inside",
                                        root: r.languages.markup && r.languages.markup.tag.inside["attr-value"]
                                    },
                                    sass: [{
                                        lang: "sass",
                                        inside: "inside",
                                        root: r.languages.sass && r.languages.sass["property-line"]
                                    }, {
                                        lang: "sass",
                                        before: "operator",
                                        inside: "inside",
                                        root: r.languages.sass && r.languages.sass["variable-line"]
                                    }],
                                    scss: !0,
                                    stylus: [{
                                        lang: "stylus",
                                        before: "hexcode",
                                        inside: "rest",
                                        root: r.languages.stylus && r.languages.stylus["property-declaration"].inside
                                    }, {
                                        lang: "stylus",
                                        before: "hexcode",
                                        inside: "rest",
                                        root: r.languages.stylus && r.languages.stylus["variable-declaration"].inside
                                    }]
                                }
                            }
                        },
                        i = /(?:^|\s)token(?=$|\s)/,
                        o = /(?:^|\s)active(?=$|\s)/g,
                        a = /(?:^|\s)flipped(?=$|\s)/g,
                        s = function e(t, n, i, o) {
                            this._elt = null, this._type = t, this._clsRegexp = RegExp("(?:^|\\s)" + t + "(?=$|\\s)"), this._token = null, this.updater = n, this._mouseout = this.mouseout.bind(this), this.initializer = o;
                            var a = this;
                            i || (i = ["*"]), "Array" !== r.util.type(i) && (i = [i]), i.forEach((function (t) {
                                "string" != typeof t && (t = t.lang), e.byLanguages[t] || (e.byLanguages[t] = []), e.byLanguages[t].indexOf(a) < 0 && e.byLanguages[t].push(a)
                            })), e.byType[t] = this
                        };
                    for (var l in s.prototype.init = function () {
                            this._elt || (this._elt = document.createElement("div"), this._elt.className = "prism-previewer prism-previewer-" + this._type, document.body.appendChild(this._elt), this.initializer && this.initializer())
                        }, s.prototype.isDisabled = function (e) {
                            do {
                                if (e.hasAttribute && e.hasAttribute("data-previewers")) return -1 === (e.getAttribute("data-previewers") || "").split(/\s+/).indexOf(this._type)
                            } while (e = e.parentNode);
                            return !1
                        }, s.prototype.check = function (e) {
                            if (!i.test(e.className) || !this.isDisabled(e)) {
                                do {
                                    if (i.test(e.className) && this._clsRegexp.test(e.className)) break
                                } while (e = e.parentNode);
                                e && e !== this._token && (this._token = e, this.show())
                            }
                        }, s.prototype.mouseout = function () {
                            this._token.removeEventListener("mouseout", this._mouseout, !1), this._token = null, this.hide()
                        }, s.prototype.show = function () {
                            if (this._elt || this.init(), this._token)
                                if (this.updater.call(this._elt, this._token.textContent)) {
                                    this._token.addEventListener("mouseout", this._mouseout, !1);
                                    var e = function (e) {
                                        var t = 0,
                                            n = 0,
                                            i = e;
                                        if (i.parentNode) {
                                            do {
                                                t += i.offsetLeft, n += i.offsetTop
                                            } while ((i = i.offsetParent) && i.nodeType < 9);
                                            i = e;
                                            do {
                                                t -= i.scrollLeft, n -= i.scrollTop
                                            } while ((i = i.parentNode) && !/body/i.test(i.nodeName))
                                        }
                                        return {
                                            top: n,
                                            right: innerWidth - t - e.offsetWidth,
                                            bottom: innerHeight - n - e.offsetHeight,
                                            left: t
                                        }
                                    }(this._token);
                                    this._elt.className += " active", e.top - this._elt.offsetHeight > 0 ? (this._elt.className = this._elt.className.replace(a, ""), this._elt.style.top = e.top + "px", this._elt.style.bottom = "") : (this._elt.className += " flipped", this._elt.style.bottom = e.bottom + "px", this._elt.style.top = ""), this._elt.style.left = e.left + Math.min(200, this._token.offsetWidth / 2) + "px"
                                } else this.hide()
                        }, s.prototype.hide = function () {
                            this._elt.className = this._elt.className.replace(o, "")
                        }, s.byLanguages = {}, s.byType = {}, s.initEvents = function (e, t) {
                            var n = [];
                            s.byLanguages[t] && (n = n.concat(s.byLanguages[t])), s.byLanguages["*"] && (n = n.concat(s.byLanguages["*"])), e.addEventListener("mouseover", (function (e) {
                                var t = e.target;
                                n.forEach((function (e) {
                                    e.check(t)
                                }))
                            }), !1)
                        }, r.plugins.Previewer = s, r.hooks.add("before-highlight", (function (e) {
                            for (var t in n) {
                                var i = n[t].languages;
                                if (e.language && i[e.language] && !i[e.language].initialized) {
                                    var o = i[e.language];
                                    "Array" !== r.util.type(o) && (o = [o]), o.forEach((function (o) {
                                        var a, s, l, c;
                                        !0 === o ? (a = "important", s = e.language, o = e.language) : (a = o.before || "important", s = o.inside || o.lang, l = o.root || r.languages, c = o.skip, o = e.language), !c && r.languages[o] && (r.languages.insertBefore(s, a, n[t].tokens, l), e.grammar = r.languages[o], i[e.language] = {
                                            initialized: !0
                                        })
                                    }))
                                }
                            }
                        })), r.hooks.add("after-highlight", (function (e) {
                            (s.byLanguages["*"] || s.byLanguages[e.language]) && s.initEvents(e.element, e.language)
                        })), n) n[l].create()
                }
            }(),
            function () {
                var t = Object.assign || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                };

                function n(e) {
                    this.defaults = t({}, e)
                }

                function i(e) {
                    for (var t = 0, n = 0; n < e.length; ++n) e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
                    return e.length + t
                }
                n.prototype = {
                    setDefaults: function (e) {
                        this.defaults = t(this.defaults, e)
                    },
                    normalize: function (e, n) {
                        for (var i in n = t(this.defaults, n)) {
                            var r = i.replace(/-(\w)/g, (function (e, t) {
                                return t.toUpperCase()
                            }));
                            "normalize" !== i && "setDefaults" !== r && n[i] && this[r] && (e = this[r].call(this, e, n[i]))
                        }
                        return e
                    },
                    leftTrim: function (e) {
                        return e.replace(/^\s+/, "")
                    },
                    rightTrim: function (e) {
                        return e.replace(/\s+$/, "")
                    },
                    tabsToSpaces: function (e, t) {
                        return t = 0 | t || 4, e.replace(/\t/g, new Array(++t).join(" "))
                    },
                    spacesToTabs: function (e, t) {
                        return t = 0 | t || 4, e.replace(new RegExp(" {" + t + "}", "g"), "\t")
                    },
                    removeTrailing: function (e) {
                        return e.replace(/\s*?$/gm, "")
                    },
                    removeInitialLineFeed: function (e) {
                        return e.replace(/^(?:\r?\n|\r)/, "")
                    },
                    removeIndent: function (e) {
                        var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
                        return t && t[0].length ? (t.sort((function (e, t) {
                            return e.length - t.length
                        })), t[0].length ? e.replace(new RegExp("^" + t[0], "gm"), "") : e) : e
                    },
                    indent: function (e, t) {
                        return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++t).join("\t") + "$&")
                    },
                    breakLines: function (e, t) {
                        t = !0 === t ? 80 : 0 | t || 80;
                        for (var n = e.split("\n"), r = 0; r < n.length; ++r)
                            if (!(i(n[r]) <= t)) {
                                for (var o = n[r].split(/(\s+)/g), a = 0, s = 0; s < o.length; ++s) {
                                    var l = i(o[s]);
                                    (a += l) > t && (o[s] = "\n" + o[s], a = l)
                                }
                                n[r] = o.join("")
                            } return n.join("\n")
                    }
                }, e.exports && (e.exports = n), void 0 !== r && (r.plugins.NormalizeWhitespace = new n({
                    "remove-trailing": !0,
                    "remove-indent": !0,
                    "left-trim": !0,
                    "right-trim": !0
                }), r.hooks.add("before-sanity-check", (function (e) {
                    var t = r.plugins.NormalizeWhitespace;
                    if (!e.settings || !1 !== e.settings["whitespace-normalization"])
                        if (e.element && e.element.parentNode || !e.code) {
                            var n = e.element.parentNode,
                                i = /\bno-whitespace-normalization\b/;
                            if (e.code && n && "pre" === n.nodeName.toLowerCase() && !i.test(n.className) && !i.test(e.element.className)) {
                                for (var o = n.childNodes, a = "", s = "", l = !1, c = 0; c < o.length; ++c) {
                                    var u = o[c];
                                    u == e.element ? l = !0 : "#text" === u.nodeName && (l ? s += u.nodeValue : a += u.nodeValue, n.removeChild(u), --c)
                                }
                                if (e.element.children.length && r.plugins.KeepMarkup) {
                                    var f = a + e.element.innerHTML + s;
                                    e.element.innerHTML = t.normalize(f, e.settings), e.code = e.element.textContent
                                } else e.code = a + e.code + s, e.code = t.normalize(e.code, e.settings)
                            }
                        } else e.code = t.normalize(e.code, e.settings)
                })))
            }(),
            function () {
                if ("undefined" != typeof self && self.Prism && self.document)
                    if (r.plugins.toolbar) {
                        var e = window.ClipboardJS || void 0;
                        e || (e = n(233));
                        var t = [];
                        if (!e) {
                            var i = document.createElement("script"),
                                o = document.querySelector("head");
                            i.onload = function () {
                                if (e = window.ClipboardJS)
                                    for (; t.length;) t.pop()()
                            }, i.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", o.appendChild(i)
                        }
                        r.plugins.toolbar.registerButton("copy-to-clipboard", (function (n) {
                            var i = document.createElement("button");
                            return i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code', i.classList = "btn-copy-code btn btn-outline-grey btn-sm px-2 waves-effect", e ? r() : t.push(r), i;

                            function r() {
                                var t = new e(i, {
                                    text: function () {
                                        return n.code
                                    }
                                });
                                t.on("success", (function () {
                                    i.textContent = "Copied!", o()
                                })), t.on("error", (function () {
                                    i.textContent = "Press Ctrl+C to copy", o()
                                }))
                            }

                            function o() {
                                setTimeout((function () {
                                    i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code'
                                }), 5e3)
                            }
                        }))
                    } else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")
            }()
    }).call(this, n(27)(e), n(91))
}, function (e, t) {
    e.exports = clipboard
}, function (e, t) {
    var n;
    $((function (e) {
        e('.documentation a[href="#"]').click((function (e) {
            e.preventDefault()
        }))
    })), window.location.host === (n = window.location.host)
}, , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    n(158), n(162), n(171), n(175), n(176), n(211), n(209), n(207), n(208), n(223), n(216), n(217), n(214), n(226), n(215), n(225), n(220), n(224), n(221), n(228), n(229), n(104), n(105), n(230), n(227), n(212), n(222), n(174), n(210), n(173), n(231), n(232), n(234)
}]);