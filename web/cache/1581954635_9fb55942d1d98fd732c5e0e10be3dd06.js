!function(e, t, n) {
    function r(e, t) {
        return typeof e === t;
    }
    function o() {
        var e, t, n, o, i, s, a;
        for (var l in C) if (C.hasOwnProperty(l)) {
            if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
            for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) s = e[i], 
            a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), 
            Modernizr[a[0]][a[1]] = o), S.push((o ? "" : "no-") + a.join("-"));
        }
    }
    function i(e) {
        var t = x.className, n = Modernizr._config.classPrefix || "";
        if (_ && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2");
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), _ ? x.className.baseVal = t : x.className = t);
    }
    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
    }
    function a() {
        var e = t.body;
        return e || (e = s(_ ? "svg" : "body"), e.fake = !0), e;
    }
    function l(e, n, r, o) {
        var i, l, u, f, c = "modernizr", d = s("div"), p = a();
        if (parseInt(r, 10)) for (;r--; ) u = s("div"), u.id = o ? o[r] : c + (r + 1), d.appendChild(u);
        return i = s("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : d).appendChild(i), 
        p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), 
        d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = x.style.overflow, 
        x.style.overflow = "hidden", x.appendChild(p)), l = n(d, e), p.fake ? (p.parentNode.removeChild(p), 
        x.style.overflow = f, x.offsetHeight) : d.parentNode.removeChild(d), !!l;
    }
    function u(e, t) {
        return !!~("" + e).indexOf(t);
    }
    function f(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase();
        }).replace(/^-/, "");
    }
    function c(e, t) {
        return function() {
            return e.apply(t, arguments);
        };
    }
    function d(e, t, n) {
        var o;
        for (var i in e) if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? c(o, n || t) : o);
        return !1;
    }
    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase();
        }).replace(/^ms-/, "-ms-");
    }
    function m(t, n, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var i = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r)); else if (i) {
                var s = i.error ? "error" : "log";
                i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
            }
        } else o = !n && t.currentStyle && t.currentStyle[r];
        return o;
    }
    function v(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (;o--; ) if (e.CSS.supports(p(t[o]), r)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--; ) i.push("(" + p(t[o]) + ":" + r + ")");
            return i = i.join(" or "), l("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == m(e, null, "position");
            });
        }
        return n;
    }
    function y(e, t, o, i) {
        function a() {
            c && (delete O.style, delete O.modElem);
        }
        if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
            var l = v(e, o);
            if (!r(l, "undefined")) return l;
        }
        for (var c, d, p, m, y, g = [ "modernizr", "tspan", "samp" ]; !O.style && g.length; ) c = !0, 
        O.modElem = s(g.shift()), O.style = O.modElem.style;
        for (p = e.length, d = 0; p > d; d++) if (m = e[d], y = O.style[m], u(m, "-") && (m = f(m)), 
        O.style[m] !== n) {
            if (i || r(o, "undefined")) return a(), "pfx" == t ? m : !0;
            try {
                O.style[m] = o;
            } catch (h) {}
            if (O.style[m] != y) return a(), "pfx" == t ? m : !0;
        }
        return a(), !1;
    }
    function g(e, t, n, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + T.join(s + " ") + s).split(" ");
        return r(t, "string") || r(t, "undefined") ? y(a, t, o, i) : (a = (e + " " + P.join(s + " ") + s).split(" "), 
        d(a, t, n));
    }
    function h(e, t, r) {
        return g(e, n, n, t, r);
    }
    var S = [], C = [], b = {
        _version: "3.5.0",
        _config: {
            classPrefix: "has--",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e]);
            }, 0);
        },
        addTest: function(e, t, n) {
            C.push({
                name: e,
                fn: t,
                options: n
            });
        },
        addAsyncTest: function(e) {
            C.push({
                name: null,
                fn: e
            });
        }
    }, Modernizr = function() {};
    Modernizr.prototype = b, Modernizr = new Modernizr(), Modernizr.addTest("history", function() {
        var t = navigator.userAgent;
        return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState" in e.history : !1;
    }), Modernizr.addTest("localstorage", function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
        } catch (t) {
            return !1;
        }
    }), Modernizr.addTest("sessionstorage", function() {
        var e = "modernizr";
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0;
        } catch (t) {
            return !1;
        }
    });
    var w = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [ "", "" ];
    b._prefixes = w;
    var x = t.documentElement, _ = "svg" === x.nodeName.toLowerCase(), z = "Moz O ms Webkit", P = b._config.usePrefixes ? z.toLowerCase().split(" ") : [];
    b._domPrefixes = P;
    var A = function() {
        function e(e, t) {
            var o;
            return e ? (t && "string" != typeof t || (t = s(t || "div")), e = "on" + e, o = e in t, 
            !o && r && (t.setAttribute || (t = s("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], 
            t[e] !== n && (t[e] = n), t.removeAttribute(e)), o) : !1;
        }
        var r = !("onblur" in t.documentElement);
        return e;
    }();
    b.hasEvent = A;
    var E = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1;
        } : function(t) {
            var n = !1;
            return l("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
            }), n;
        };
    }();
    b.mq = E;
    var T = (b.testStyles = l, b._config.usePrefixes ? z.split(" ") : []);
    b._cssomPrefixes = T;
    var N = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function() {
        delete N.elem;
    });
    var O = {
        style: N.elem.style
    };
    Modernizr._q.unshift(function() {
        delete O.style;
    });
    b.testProp = function(e, t, r) {
        return y([ e ], n, t, r);
    };
    b.testAllProps = g, b.testAllProps = h, Modernizr.addTest("cssanimations", h("animationName", "a", !0)), 
    o(), i(S), delete b.addTest, delete b.addAsyncTest;
    for (var j = 0; j < Modernizr._q.length; j++) Modernizr._q[j]();
    e.Modernizr = Modernizr;
}(window, document);

!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [], E = C.document, r = Object.getPrototypeOf, s = t.slice, g = t.concat, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
    }, x = function(e) {
        return null != e && e === e.window;
    }, c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
    }
    var f = "3.4.1", k = function(e, t) {
        return new k.fn.init(e, t);
    }, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function d(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this);
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return k.each(this, e);
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e);
            }));
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), 
        s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], 
        "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], 
        o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a;
    }, k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            });
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [ e ] : e) : u.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r;
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (d(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a);
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), 
    k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
    });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date(), m = n.document, S = 0, r = 0, p = ue(), x = ue(), N = ue(), A = ue(), D = function(e, t) {
            return e === t && (l = !0), 0;
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", F = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + $),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + R + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, oe = function() {
            T();
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t));
                } : function(e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1;
                }
            };
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = e.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n;
                    } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), 
                    n;
                } else {
                    if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                    if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), 
                    n;
                }
                if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), 
                        o = (l = h(t)).length;
                        while (o--) l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {
                        A(t, !0);
                    } finally {
                        s === k && e.removeAttribute("id");
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r);
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
            };
        }
        function le(e) {
            return e[k] = !0, e;
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function fe(e, t) {
            var n = e.split("|"), r = n.length;
            while (r--) b.attrHandle[n[r]] = t;
        }
        function pe(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
            };
        }
        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
                });
            });
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
            var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML");
        }, T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : m;
            return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, 
            E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), 
            d.attributes = ce(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
            }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
            }), d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                };
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                    }
                    return [];
                }
            }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
            }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), 
                e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), 
                e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
            }), ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), 
                a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), v.push(",.*:");
            })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $);
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), 
            t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1;
            }, D = t ? function(e, t) {
                if (e === t) return l = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return l = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
                if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o) return pe(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
            }), C;
        }, se.matches = function(e, t) {
            return se(e, null, null, t);
        }, se.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = c.call(e, t);
                if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {
                A(t, !0);
            }
            return 0 < se(t, C, null, [ e ]).length;
        }, se.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && T(e), y(e, t);
        }, se.attr = function(e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()], r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, se.escape = function(e) {
            return (e + "").replace(re, ie);
        }, se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                while (t = e[i++]) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1);
            }
            return u = null, e;
        }, o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else while (t = e[r++]) n += o(t);
            return n;
        }, (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
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
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling";
                                }
                                return !0;
                            }
                            if (u = [ m ? c.firstChild : c.lastChild ], m && p) {
                                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], 
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [ S, s, d ];
                                    break;
                                }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), 
                            !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [ S, d ]), 
                            a === e)) break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g;
                        }
                    };
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[k] ? a(o) : 1 < a.length ? (t = [ e, e, "", o ], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]);
                    }) : function(e) {
                        return a(e, 0, t);
                    }) : a;
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = [], i = [], s = f(e.replace(B, "$1"));
                    return s[k] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                    }) : function(e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
                    };
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length;
                    };
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne), function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t);
                    };
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), 
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === a;
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !b.pseudos.empty(e);
                },
                header: function(e) {
                    return J.test(e.nodeName);
                },
                input: function(e) {
                    return Q.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ve(function() {
                    return [ 0 ];
                }),
                last: ve(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: ve(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                    return e;
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        }) b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function be(s, e, t) {
            var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
                return !1;
            } : function(e, t, n) {
                var r, i, o, a = [ S, p ];
                if (n) {
                    while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), 
                l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
                    if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
                    if ((i[c] = a)[2] = s(e, t, n)) return !0;
                }
                return !1;
            };
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--) if (!i[r](e, t, n)) return !1;
                return !0;
            } : i[0];
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
            l && t.push(s)));
            return a;
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                    return n;
                }(h || "*", n.nodeType ? [ n ] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--) (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r);
                        }
                        o = p.length;
                        while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
            });
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i;
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e);
            }, a, !0), c = [ function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null, r;
            } ]; s < r; s++) if (t = b.relative[e[s].type]) c = [ be(we(c), t) ]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                    for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                    return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
                }
                c.push(t);
            }
            return we(c);
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), 
                n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), 
                i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = N[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument === C || (T(o), n = !E);
                            while (s = v[a++]) if (s(o, t || C, n)) {
                                r.push(o);
                                break;
                            }
                            i && (S = h);
                        }
                        m && ((o = !s && o) && u--, e && c.push(o));
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f);
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
                    }
                    return i && (S = h, w = p), c;
                }, m ? le(r) : r))).selector = e;
            }
            return a;
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break;
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
        }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, 
        T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ce(function(e) {
            return null == e.getAttribute("disabled");
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), se;
    }(C);
    k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, 
    k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
    var T = function(e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && k(e).is(n)) break;
            r.push(e);
        }
        return r;
    }, S = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, N = k.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r;
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r;
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r;
        }) : k.filter(n, e, r);
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [ r ] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0));
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), 
                D.test(r[1]) && k.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
    }).prototype = k.fn, q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/, O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e;
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
            if (!N.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return T(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n);
        },
        next: function(e) {
            return P(e, "nextSibling");
        },
        prev: function(e) {
            return P(e, "previousSibling");
        },
        nextAll: function(e) {
            return T(e, "nextSibling");
        },
        prevAll: function(e) {
            return T(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n);
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return S(e.firstChild);
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), 
            k.merge([], e.childNodes));
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 
            1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
        };
    });
    var R = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e;
    }
    function I(e) {
        throw e;
    }
    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
        } catch (e) {
            n.apply(void 0, [ e ]);
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function(e, t) {
            n[t] = !0;
        }), n) : k.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once, o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, 
                t = !1);
            }
            r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                    k.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
                    });
                }(arguments), t && !i && c()), this;
            },
            remove: function() {
                return k.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
                }), this;
            },
            has: function(e) {
                return e ? -1 < k.inArray(e, s) : 0 < s.length;
            },
            empty: function() {
                return s && (s = []), this;
            },
            disable: function() {
                return a = u = [], s = t = "", this;
            },
            disabled: function() {
                return !s;
            },
            lock: function() {
                return a = u = [], t || i || (s = t = ""), this;
            },
            locked: function() {
                return !!a;
            },
            fireWith: function(e, t) {
                return a || (t = [ e, (t = t || []).slice ? t.slice() : t ], u.push(t), i || c()), 
                this;
            },
            fire: function() {
                return f.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!o;
            }
        };
        return f;
    }, k.extend({
        Deferred: function(e) {
            var o = [ [ "notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2 ], [ "resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected" ] ], i = "pending", a = {
                state: function() {
                    return i;
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return a.then(null, e);
                },
                pipe: function() {
                    var i = arguments;
                    return k.Deferred(function(r) {
                        k.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [ e ] : arguments);
                            });
                        }), i = null;
                    }).promise();
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this, r = arguments, e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, 
                                    t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, 
                                    r = [ e ]), (s || o.resolveWith)(n, r));
                                }
                            }, t = s ? e : function() {
                                try {
                                    e();
                                } catch (e) {
                                    k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, 
                                    r = [ e ]), o.rejectWith(n, r));
                                }
                            };
                            i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), 
                            C.setTimeout(t));
                        };
                    }
                    return k.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), 
                        o[2][3].add(l(0, e, m(n) ? n : I));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? k.extend(e, a) : a;
                }
            }, s = {};
            return k.each(o, function(e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r;
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), 
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                }, s[t[0] + "With"] = n.fireWith;
            }), a.promise(s), e && e.call(s, s), s;
        },
        when: function(e) {
            var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = k.Deferred(), a = function(t) {
                return function(e) {
                    r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
                };
            };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) W(i[t], a(t), o.reject);
            return o.promise();
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, k.readyException = function(e) {
        C.setTimeout(function() {
            throw e;
        });
    };
    var F = k.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), 
        k.ready();
    }
    k.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            k.readyException(e);
        }), this;
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [ k ]);
        }
    }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), 
    C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === w(n)) for (s in i = !0, n) _(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, 
        m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(k(e), n);
        })), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    }, z = /^-ms-/, U = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase();
    }
    function V(e) {
        return e.replace(z, "ms-").replace(U, X);
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Y() {
        this.expando = k.expando + Y.uid++;
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n; else for (r in t) i[V(r)] = t[r];
            return i;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [ t ] : t.match(R) || []).length;
                    while (n--) delete r[t[n]];
                }
                (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t);
        }
    };
    var Q = new Y(), J = new Y(), K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;
    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
            } catch (e) {}
            J.set(e, t, n);
        } else n = void 0;
        return n;
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e);
        },
        data: function(e, t, n) {
            return J.access(e, t, n);
        },
        removeData: function(e, t) {
            J.remove(e, t);
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n);
        },
        _removeData: function(e, t) {
            Q.remove(e, t);
        }
    }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), 
                    ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0);
                }
                return i;
            }
            return "object" == typeof n ? this.each(function() {
                J.set(this, n);
            }) : _(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e);
                });
            }, null, e, 1 < arguments.length, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e);
            });
        }
    }), k.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), 
            r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t), r = n.length, i = n.shift(), o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, function() {
                k.dequeue(e, t);
            }, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    Q.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [ o ]);
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"), re = [ "Top", "Right", "Bottom", "Left" ], ie = E.documentElement, oe = function(e) {
        return k.contains(e.ownerDocument, e);
    }, ae = {
        composed: !0
    };
    ie.getRootNode && (oe = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
    });
    var se = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
    }, ue = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
        return i;
    };
    function le(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur();
        } : function() {
            return k.css(e, t, "");
        }, u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), 
            c /= o;
            c *= 2, k.style(e, t, c + l), n = n || [];
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
        r.start = c, r.end = i)), i;
    }
    var ce = {};
    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, 
        t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), 
        "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, 
        s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), 
        o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", 
        Q.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    k.fn.extend({
        show: function() {
            return fe(this, !0);
        },
        hide: function() {
            return fe(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? k(this).show() : k(this).hide();
            });
        }
    });
    var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && A(e, t) ? k.merge([ e ], n) : n;
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, 
    ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;
    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [ o ] : o); else if (be.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || [ "", "" ])[1].toLowerCase(), 
            u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && -1 < k.inArray(o, r)) i && i.push(o); else if (l = oe(o), 
        a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o);
        }
        return f;
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), 
    xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), 
    y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", 
    y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/, Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ee = /^([^.]*)(?:\.(.+)|)/;
    function ke() {
        return !0;
    }
    function Se() {
        return !1;
    }
    function Ne(e, t) {
        return e === function() {
            try {
                return E.activeElement;
            } catch (e) {}
        }() == ("focus" === t);
    }
    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
            return e;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
        r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se; else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return k().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, i, r, n);
        });
    }
    function De(e, i, o) {
        o ? (Q.set(e, i, !1), k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), 
                    Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, 
                    r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                } else r.length && (Q.set(this, i, {
                    value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation());
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) {
                n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), 
                n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
                }), l = (e = (e || "").match(R) || [ "" ]).length;
                while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), 
                d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, 
                f = k.event.special[d] || {}, c = k.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), 
                f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
                k.event.global[d] = !0);
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [ "" ]).length;
                while (l--) if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), 
                d) {
                    f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), 
                    c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), 
                    delete u[d]);
                } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length), l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l), t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, 
                    s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), 
                    s.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, s), s.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [ l ]).length), 
                a[i] && o.push(r);
                o.length && s.push({
                    elem: l,
                    handlers: o
                });
            }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s;
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t];
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    });
                }
            });
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, k.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, k.event.addProp), k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k.event.special[e] = {
            setup: function() {
                return De(this, e, Ne), !1;
            },
            trigger: function() {
                return De(this, e), !0;
            },
            delegateType: t
        };
    }), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), 
                e.type = i), t;
            }
        };
    }), k.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), 
            this.each(function() {
                k.event.remove(this, e, n, t);
            });
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, qe = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i, He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
        e;
    }
    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, 
            a.events = {}, l) for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
        }
    }
    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
        });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), 
        t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), 
            s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], 
            he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                nonce: u.nonce || u.getAttribute("nonce")
            }) : b(u.textContent.replace(He, ""), u, l));
        }
        return n;
    }
    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)), 
        r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), 
            r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]); else Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) if (G(n)) {
                if (t = n[Q.expando]) {
                    if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                    n[Q.expando] = void 0;
                }
                n[J.expando] && (n[J.expando] = void 0);
            }
        }
    }), k.fn.extend({
        detach: function(e) {
            return We(this, e, !0);
        },
        remove: function(e) {
            return We(this, e);
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t);
            });
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
            }, n);
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), 
            k(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n);
        };
    });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), Fe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e);
    }, Be = new RegExp(re.join("|"), "i");
    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), 
        !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, 
        o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
        s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }
    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    !function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
                ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), 
                r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), 
                ie.removeChild(s), u = null;
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", 
        y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
            boxSizingReliable: function() {
                return e(), r;
            },
            pixelBoxStyles: function() {
                return e(), o;
            },
            pixelPosition: function() {
                return e(), n;
            },
            reliableMarginLeft: function() {
                return e(), a;
            },
            scrollboxSize: function() {
                return e(), i;
            }
        }));
    }();
    var Ue = [ "Webkit", "Moz", "ms" ], Xe = E.createElement("div").style, Ve = {};
    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
            while (n--) if ((e = Ue[n] + t) in Xe) return e;
        }(e) || e);
    }
    var Ye = /^(none|table(?!-c[ea]).+)/, Qe = /^--/, Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ke = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (;a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), 
        "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), 
        "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), 
        u;
    }
    function tt(e, t, n) {
        var r = Fe(e), i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r), o = i, a = _e(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), 
        (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
    }
    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i);
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n;
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
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t), u = Qe.test(t), l = e.style;
                if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), 
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), 
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), 
            void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), 
            !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
    }), k.each([ "height", "width" ], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() {
                    return tt(e, u, n);
                });
            },
            set: function(e, t, n) {
                var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), 
                s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), 
                Ze(0, t, s);
            }
        };
    }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [ e ]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n;
            }
        }, "margin" !== i && (k.cssHooks[i + o].set = Ze);
    }), k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o;
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
            }, e, t, 1 < arguments.length);
        }
    }), ((k.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, k.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, k.fx = nt.prototype.init, k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;
    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), 
        k.fx.tick());
    }
    function ct() {
        return C.setTimeout(function() {
            rt = void 0;
        }), rt = Date.now();
    }
    function ft(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function dt(o, e, t) {
        var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (a) return !1;
            for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return s.notifyWith(o, [ l, n, t ]), n < 1 && i ? t : (i || s.notifyWith(o, [ l, 1, 0 ]), 
            s.resolveWith(o, [ l ]), !1);
        }, l = s.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {
                specialEasing: {},
                easing: k.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: rt || ct(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n;
            },
            stop: function(e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [ l, 1, 0 ]), s.resolveWith(o, [ l, e ])) : s.rejectWith(o, [ l, e ]), 
                this;
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e) if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), 
            n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), 
            delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i;
        }(c, l.opts.specialEasing); r < i; r++) if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), 
        n;
        return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
        k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l;
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = [ "*" ]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], 
            dt.tweeners[n].unshift(t);
        },
        prefilters: [ function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && se(e), v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, 
            s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s();
            }), a.unqueued++, p.always(function() {
                p.always(function() {
                    a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
                });
            })), t) if (i = t[r], st.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    g = !0;
                }
                d[r] = v && v[r] || k.style(e, r);
            }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
            null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([ e ], !0), 
            l = e.style.display || l, c = k.css(e, "display"), fe([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                h.display = l;
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), 
            n.overflow && (h.overflow = "hidden", p.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                display: l
            }), o && (v.hidden = !g), g && fe([ e ], !0), p.done(function() {
                for (r in g || fe([ e ]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r]);
            })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, 
            u.start = 0));
        } ],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
        }
    }), k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), 
        null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
        }, r;
    }, k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t), o = k.speed(e, n, r), a = function() {
                var e = dt(this, k.extend({}, t), o);
                (i || Q.get(this, "finish")) && e.stop(!0);
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o);
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), 
            this.each(function() {
                var e = !0, t = null != i && i + "queueHooks", n = k.timers, r = Q.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--; ) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), 
                e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i);
            });
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), 
                e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), 
                i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
            });
        }
    }), k.each([ "toggle", "show", "hide" ], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
        };
    }), k.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n);
        };
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0, n = k.timers;
        for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), rt = void 0;
    }, k.fx.timer = function(e) {
        k.timers.push(e), k.fx.start();
    }, k.fx.interval = 13, k.fx.start = function() {
        it || (it = !0, lt());
    }, k.fx.stop = function() {
        it = null;
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n);
            };
        });
    }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), 
    ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, 
    (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e);
            });
        }
    }), k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), 
            void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
            n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(R);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
        }
    }), ht = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), 
            r;
        };
    });
    var vt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    function mt(e) {
        return (e.match(R) || []).join(" ");
    }
    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
    }
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e];
            });
        }
    }), k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, 
            i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), k.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        k.propFix[this.toLowerCase()] = this;
    }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                k(this).addClass(t.call(this, e, xt(this)));
            });
            if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                a = 0;
                while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = mt(r)) && n.setAttribute("class", s);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                k(this).removeClass(t.call(this, e, xt(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                a = 0;
                while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                i !== (s = mt(r)) && n.setAttribute("class", s);
            }
            return this;
        },
        toggleClass: function(i, t) {
            var o = typeof i, a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t);
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = k(this), r = bt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), 
                this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
            return !1;
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + "";
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                        if (t = k(n).val(), a) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = k.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), k.each([ "radio", "checkbox" ], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
            }
        }, y.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), y.focusin = "onfocusin" in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/, Ct = function(e) {
        e.stopPropagation();
    };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [ n || E ], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), 
            h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, 
            e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : k.makeArray(t, [ e ]), 
            c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), 
                    a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, 
                (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), 
                (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), 
                k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), 
                e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, 
                a && (n[u] = a)), e.result;
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event(), n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t);
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0);
        }
    }), y.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e));
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this, t = Q.access(e, r);
                t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
            },
            teardown: function() {
                var e = this.ownerDocument || this, t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
            }
        };
    });
    var Et = C.location, kt = Date.now(), St = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), 
        t;
    };
    var Nt = /\[\]$/, At = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i, jt = /^(?:input|select|textarea|keygen)/i;
    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function(e, t) {
            r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
        }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) qt(n + "[" + t + "]", e[t], r, i);
    }
    k.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            i(this.name, this.value);
        }); else for (n in e) qt(n, e[n], t, i);
        return r.join("&");
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                };
            }).get();
        }
    });
    var Lt = /%20/g, Ht = /#.*$/, Ot = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Rt = /^(?:GET|HEAD)$/, Mt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Ft = E.createElement("a");
    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(R) || [];
            if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function _t(t, i, o, a) {
        var s = {}, u = t === Wt;
        function l(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), 
                l(n), !1);
            }), r;
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*");
    }
    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e;
    }
    Ft.href = Et.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
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
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        }
                        t = n[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function() {
                    return h ? p : null;
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [ w[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t), l(0, t), this;
                }
            };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), 
            v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [ "" ], 
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
                } catch (e) {
                    v.crossDomain = !0;
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), 
            _t(It, v, t, T), h) return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), 
            v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), 
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), 
            v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, 
            delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), 
            v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), 
            k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), 
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), 
            v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [ T, v ]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout");
                }, v.timeout));
                try {
                    h = !1, c.send(a, l);
                } catch (e) {
                    if (h) throw e;
                    l(-1, e);
                }
            } else l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, 
                i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (i in s) if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break;
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break;
                            }
                            a || (a = i);
                        }
                        o = o || a;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                }(v, T, n)), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
                    u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break;
                        }
                        if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                            t = a(t);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: a ? e : "No conversion from " + u + " to " + o
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    };
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), 
                (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, 
                o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), 
                T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [ o, l, T ]) : x.rejectWith(y, [ T, l, a ]), 
                T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [ T, v, i ? o : a ]), 
                b.fireWith(y, [ T, l ]), g && (m.trigger("ajaxComplete", [ T, v ]), --k.active || k.event.trigger("ajaxStop")));
            }
            return T;
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script");
        }
    }), k.each([ "get", "post" ], function(e, i) {
        k[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e));
        };
    }), k._evalUrl = function(e, t) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t);
            }
        });
    }, k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e));
            }) : this.each(function() {
                var e = k(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
            });
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes);
            }), this;
        }
    }), k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e);
    }, k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest();
        } catch (e) {}
    };
    var Ut = {
        0: 200,
        1223: 204
    }, Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), 
                e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, 
                        "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()));
                    };
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a();
                    });
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null);
                } catch (e) {
                    if (o) throw e;
                }
            },
            abort: function() {
                o && o();
            }
        };
    }), k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e;
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = k("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
                }), E.head.appendChild(r[0]);
            },
            abort: function() {
                i && i();
            }
        };
    });
    var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0, e;
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), 
        e.converters["script json"] = function() {
            return o || k.error(r + " was not called"), o[0];
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments;
        }, n.always(function() {
            void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, 
            Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
        }), "script";
    }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
    2 === Vt.childNodes.length), k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, 
        t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [ t.createElement(i[1]) ] : (i = we([ e ], t, o), 
        o && o.length && k(o).remove(), k.merge([], i.childNodes)));
        var r, i, o;
    }, k.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 
        0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, k.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem;
        }).length;
    }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), 
            u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, 
            i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), 
            null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), 
            "using" in t ? t.using.call(e, f) : c.css(f);
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e);
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, 
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), 
                    i.left += k.css(e, "borderLeftWidth", !0));
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === k.css(e, "position")) e = e.offsetParent;
                return e || ie;
            });
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
            }, t, e, arguments.length);
        };
    }), k.each([ "top", "left" ], function(e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
            if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t;
        });
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, 
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
                }, s, n ? e : void 0, n);
            };
        });
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), k.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), 
        (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid = e.guid || k.guid++, i;
    }, k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0);
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, 
    k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k;
    });
    var Qt = C.jQuery, Jt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
    }, e || (C.jQuery = C.$ = k), k;
});

if (!window.Symbol) {
    (function(window) {
        var defineProperty = Object.defineProperty;
        var prefix = "__symbol-" + Math.ceil(Math.random() * 1e9) + "-";
        var id = 0;
        function Symbol(description) {
            if (!(this instanceof Symbol)) {
                return new Symbol(description);
            }
            var symbol = prefix + id++;
            this._symbol = symbol;
        }
        defineProperty(Symbol.prototype, "toString", {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function toString() {
                return this._symbol;
            }
        });
        window.Symbol = Symbol;
    })(this);
}

!function(a) {
    var b = navigator.userAgent;
    a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function() {
        var b, c = document.createElement("source"), d = function(a) {
            var b, d, e = a.parentNode;
            "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), 
            setTimeout(function() {
                e.removeChild(b);
            })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, 
            d = a.sizes, a.sizes += ",100vw", setTimeout(function() {
                a.sizes = d;
            }));
        }, e = function() {
            var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]");
            for (a = 0; a < b.length; a++) d(b[a]);
        }, f = function() {
            clearTimeout(b), b = setTimeout(e, 99);
        }, g = a.matchMedia && matchMedia("(orientation: landscape)"), h = function() {
            f(), g && g.addListener && g.addListener(f);
        };
        return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", 
        /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), 
        f;
    }());
}(window), function(a, b, c) {
    "use strict";
    function d(a) {
        return " " === a || "\t" === a || "\n" === a || "\f" === a || "\r" === a;
    }
    function e(b, c) {
        var d = new a.Image();
        return d.onerror = function() {
            A[b] = !1, ba();
        }, d.onload = function() {
            A[b] = 1 === d.width, ba();
        }, d.src = c, "pending";
    }
    function f() {
        M = !1, P = a.devicePixelRatio, N = {}, O = {}, s.DPR = P || 1, Q.width = Math.max(a.innerWidth || 0, z.clientWidth), 
        Q.height = Math.max(a.innerHeight || 0, z.clientHeight), Q.vw = Q.width / 100, Q.vh = Q.height / 100, 
        r = [ Q.height, Q.width, P ].join("-"), Q.em = s.getEmValue(), Q.rem = Q.em;
    }
    function g(a, b, c, d) {
        var e, f, g, h;
        return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), 
        g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c;
    }
    function h(a) {
        var b, c = s.getSet(a), d = !1;
        "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d;
    }
    function i(a, b) {
        return a.res - b.res;
    }
    function j(a, b, c) {
        var d;
        return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), 
        a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || aa(d, d.set.sizes)), d;
    }
    function k(a, b) {
        var c, d, e;
        if (a && b) for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++) if (a === s.makeUrl(e[c].url)) {
            d = e[c];
            break;
        }
        return d;
    }
    function l(a, b) {
        var c, d, e, f, g = a.getElementsByTagName("source");
        for (c = 0, d = g.length; d > c; c++) e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), 
        f && b.push({
            srcset: f,
            media: e.getAttribute("media"),
            type: e.getAttribute("type"),
            sizes: e.getAttribute("sizes")
        });
    }
    function m(a, b) {
        function c(b) {
            var c, d = b.exec(a.substring(m));
            return d ? (c = d[0], m += c.length, c) : void 0;
        }
        function e() {
            var a, c, d, e, f, i, j, k, l, m = !1, o = {};
            for (e = 0; e < h.length; e++) f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), 
            k = parseInt(j, 10), l = parseFloat(j), X.test(j) && "w" === i ? ((a || c) && (m = !0), 
            0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0), 
            0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
            m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 
            1 === o.d && (b.has1x = !0), o.set = b, n.push(o));
        }
        function f() {
            for (c(T), i = "", j = "in descriptor"; ;) {
                if (k = a.charAt(m), "in descriptor" === j) if (d(k)) i && (h.push(i), i = "", j = "after descriptor"); else {
                    if ("," === k) return m += 1, i && h.push(i), void e();
                    if ("(" === k) i += k, j = "in parens"; else {
                        if ("" === k) return i && h.push(i), void e();
                        i += k;
                    }
                } else if ("in parens" === j) if (")" === k) i += k, j = "in descriptor"; else {
                    if ("" === k) return h.push(i), void e();
                    i += k;
                } else if ("after descriptor" === j) if (d(k)) ; else {
                    if ("" === k) return void e();
                    j = "in descriptor", m -= 1;
                }
                m += 1;
            }
        }
        for (var g, h, i, j, k, l = a.length, m = 0, n = []; ;) {
            if (c(U), m >= l) return n;
            g = c(V), h = [], "," === g.slice(-1) ? (g = g.replace(W, ""), e()) : f();
        }
    }
    function n(a) {
        function b(a) {
            function b() {
                f && (g.push(f), f = "");
            }
            function c() {
                g[0] && (h.push(g), g = []);
            }
            for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1; ;) {
                if (e = a.charAt(j), "" === e) return b(), c(), h;
                if (k) {
                    if ("*" === e && "/" === a[j + 1]) {
                        k = !1, j += 2, b();
                        continue;
                    }
                    j += 1;
                } else {
                    if (d(e)) {
                        if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
                            j += 1;
                            continue;
                        }
                        if (0 === i) {
                            b(), j += 1;
                            continue;
                        }
                        e = " ";
                    } else if ("(" === e) i += 1; else if (")" === e) i -= 1; else {
                        if ("," === e) {
                            b(), c(), j += 1;
                            continue;
                        }
                        if ("/" === e && "*" === a.charAt(j + 1)) {
                            k = !0, j += 2;
                            continue;
                        }
                    }
                    f += e, j += 1;
                }
            }
        }
        function c(a) {
            return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1;
        }
        var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i, l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (f = b(a), g = f.length, e = 0; g > e; e++) if (h = f[e], i = h[h.length - 1], 
        c(i)) {
            if (j = i, h.pop(), 0 === h.length) return j;
            if (h = h.join(" "), s.matchesMedia(h)) return j;
        }
        return "100vw";
    }
    b.createElement("picture");
    var o, p, q, r, s = {}, t = !1, u = function() {}, v = b.createElement("img"), w = v.getAttribute, x = v.setAttribute, y = v.removeAttribute, z = b.documentElement, A = {}, B = {
        algorithm: ""
    }, C = "data-pfsrc", D = C + "set", E = navigator.userAgent, F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35, G = "currentSrc", H = /\s+\+?\d+(e\d+)?w/, I = /(\([^)]+\))?\s*(.+)/, J = a.picturefillCFG, K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", L = "font-size:100%!important;", M = !0, N = {}, O = {}, P = a.devicePixelRatio, Q = {
        px: 1,
        in: 96
    }, R = b.createElement("a"), S = !1, T = /^[ \t\n\r\u000c]+/, U = /^[, \t\n\r\u000c]+/, V = /^[^ \t\n\r\u000c]+/, W = /[,]+$/, X = /^\d+$/, Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, Z = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c);
    }, $ = function(a) {
        var b = {};
        return function(c) {
            return c in b || (b[c] = a(c)), b[c];
        };
    }, _ = function() {
        var a = /^([\d\.]+)(em|vw|px)$/, b = function() {
            for (var a = arguments, b = 0, c = a[0]; ++b in a; ) c = c.replace(a[b], a[++b]);
            return c;
        }, c = $(function(a) {
            return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";";
        });
        return function(b, d) {
            var e;
            if (!(b in N)) if (N[b] = !1, d && (e = b.match(a))) N[b] = e[1] * Q[e[2]]; else try {
                N[b] = new Function("e", c(b))(Q);
            } catch (f) {}
            return N[b];
        };
    }(), aa = function(a, b) {
        return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, 
        a;
    }, ba = function(a) {
        if (t) {
            var c, d, e, f = a || {};
            if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [ f.elements ] : (f.context = f.elements, 
            f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), 
            e = c.length) {
                for (s.setupRun(f), S = !0, d = 0; e > d; d++) s.fillImg(c[d], f);
                s.teardownRun(f);
            }
        }
    };
    o = a.console && console.warn ? function(a) {
        console.warn(a);
    } : u, G in v || (G = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, 
    A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), 
    s.ns = ("pf" + new Date().getTime()).substr(0, 9), s.supSrcset = "srcset" in v, 
    s.supSizes = "sizes" in v, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && !function(a) {
        v.srcset = "data:,a", a.src = "data:,a", s.supSrcset = v.complete === a.complete, 
        s.supPicture = s.supSrcset && s.supPicture;
    }(b.createElement("img")), s.supSrcset && !s.supSizes ? !function() {
        var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", d = b.createElement("img"), e = function() {
            var a = d.width;
            2 === a && (s.supSizes = !0), q = s.supSrcset && !s.supSizes, t = !0, setTimeout(ba);
        };
        d.onload = e, d.onerror = e, d.setAttribute("sizes", "9px"), d.srcset = c + " 1w," + a + " 9w", 
        d.src = c;
    }() : t = !0, s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = B, 
    s.DPR = P || 1, s.u = Q, s.types = A, s.setSize = u, s.makeUrl = $(function(a) {
        return R.href = a, R.href;
    }), s.qsa = function(a, b) {
        return "querySelector" in a ? a.querySelectorAll(b) : [];
    }, s.matchesMedia = function() {
        return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function(a) {
            return !a || matchMedia(a).matches;
        } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments);
    }, s.mMQ = function(a) {
        return a ? _(a) : !0;
    }, s.calcLength = function(a) {
        var b = _(a, !0) || !1;
        return 0 > b && (b = !1), b;
    }, s.supportsType = function(a) {
        return a ? A[a] : !0;
    }, s.parseSize = $(function(a) {
        var b = (a || "").match(I);
        return {
            media: b && b[1],
            length: b && b[2]
        };
    }), s.parseSet = function(a) {
        return a.cands || (a.cands = m(a.srcset, a)), a.cands;
    }, s.getEmValue = function() {
        var a;
        if (!p && (a = b.body)) {
            var c = b.createElement("div"), d = z.style.cssText, e = a.style.cssText;
            c.style.cssText = K, z.style.cssText = L, a.style.cssText = L, a.appendChild(c), 
            p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), z.style.cssText = d, 
            a.style.cssText = e;
        }
        return p || 16;
    }, s.calcListLength = function(a) {
        if (!(a in O) || B.uT) {
            var b = s.calcLength(n(a));
            O[a] = b ? b : Q.width;
        }
        return O[a];
    }, s.setRes = function(a) {
        var b;
        if (a) {
            b = s.parseSet(a);
            for (var c = 0, d = b.length; d > c; c++) aa(b[c], a.sizes);
        }
        return b;
    }, s.setRes.res = aa, s.applySetCandidate = function(a, b) {
        if (a.length) {
            var c, d, e, f, h, k, l, m, n, o = b[s.ns], p = s.DPR;
            if (k = o.curSrc || b[G], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p, 
            n || (l.cached = !0, l.res >= p && (h = l))), !h) for (a.sort(i), f = a.length, 
            h = a[f - 1], d = 0; f > d; d++) if (c = a[d], c.res >= p) {
                e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
                break;
            }
            h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), 
            s.setSize(b));
        }
    }, s.setSrc = function(a, b) {
        var c;
        a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", 
        a.offsetWidth + 1 && (a.style.width = c));
    }, s.getSet = function(a) {
        var b, c, d, e = !1, f = a[s.ns].sets;
        for (b = 0; b < f.length && !e; b++) if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
            "pending" === d && (c = d), e = c;
            break;
        }
        return e;
    }, s.parseSets = function(a, b, d) {
        var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(), j = a[s.ns];
        (j.src === c || d.src) && (j.src = w.call(a, "src"), j.src ? x.call(a, C, j.src) : y.call(a, C)), 
        (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"), 
        j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = {
            srcset: j.srcset,
            sizes: w.call(a, "sizes")
        }, j.sets.push(f), g = (q || j.src) && H.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, 
        f.cands.push({
            url: j.src,
            d: 1,
            set: f
        }))) : j.src && j.sets.push({
            srcset: j.src,
            sizes: null
        }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g && !s.supSizes), 
        h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e), a.srcset = "") : y.call(a, D)), 
        j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), 
        j.parsed = !0;
    }, s.fillImg = function(a, b) {
        var c, d = b.reselect || b.reevaluate;
        a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), 
        c.supported ? c.evaled = r : h(a));
    }, s.setupRun = function() {
        (!S || M || P !== a.devicePixelRatio) && f();
    }, s.supPicture ? (ba = u, s.fillImg = u) : !function() {
        var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/, e = function() {
            var a = b.readyState || "";
            f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), 
            c && clearTimeout(f));
        }, f = setTimeout(e, b.body ? 9 : 99), g = function(a, b) {
            var c, d, e = function() {
                var f = new Date() - d;
                b > f ? c = setTimeout(e, b - f) : (c = null, a());
            };
            return function() {
                d = new Date(), c || (c = setTimeout(e, b));
            };
        }, h = z.clientHeight, i = function() {
            M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h, 
            h = z.clientHeight, M && s.fillImgs();
        };
        Z(a, "resize", g(i, 99)), Z(b, "readystatechange", e);
    }(), s.picturefill = ba, s.fillImgs = ba, s.teardownRun = u, ba._ = s, a.picturefillCFG = {
        pf: s,
        push: function(a) {
            var b = a.shift();
            "function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0], S && s.fillImgs({
                reselect: !0
            }));
        }
    };
    for (;J && J.length; ) a.picturefillCFG.push(J.shift());
    a.picturefill = ba, "object" == typeof module && "object" == typeof module.exports ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function() {
        return ba;
    }), s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="));
}(window, document);

!function() {
    if ("function" == typeof window.CustomEvent) return !1;
    function t(t, e) {
        e = e || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
    }
    t.prototype = window.Event.prototype, window.CustomEvent = t;
}();

(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        factory(root.jQuery);
    }
})(this, function($) {
    $.transit = {
        version: "0.9.12",
        propertyMap: {
            marginLeft: "margin",
            marginRight: "margin",
            marginBottom: "margin",
            marginTop: "margin",
            paddingLeft: "padding",
            paddingRight: "padding",
            paddingBottom: "padding",
            paddingTop: "padding"
        },
        enabled: true,
        useTransitionEnd: false
    };
    var div = document.createElement("div");
    var support = {};
    function getVendorPropertyName(prop) {
        if (prop in div.style) return prop;
        var prefixes = [ "Moz", "Webkit", "O", "ms" ];
        var prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);
        for (var i = 0; i < prefixes.length; ++i) {
            var vendorProp = prefixes[i] + prop_;
            if (vendorProp in div.style) {
                return vendorProp;
            }
        }
    }
    function checkTransform3dSupport() {
        div.style[support.transform] = "";
        div.style[support.transform] = "rotateY(90deg)";
        return div.style[support.transform] !== "";
    }
    var isChrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    support.transition = getVendorPropertyName("transition");
    support.transitionDelay = getVendorPropertyName("transitionDelay");
    support.transform = getVendorPropertyName("transform");
    support.transformOrigin = getVendorPropertyName("transformOrigin");
    support.filter = getVendorPropertyName("Filter");
    support.transform3d = checkTransform3dSupport();
    var eventNames = {
        transition: "transitionend",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        WebkitTransition: "webkitTransitionEnd",
        msTransition: "MSTransitionEnd"
    };
    var transitionEnd = support.transitionEnd = eventNames[support.transition] || null;
    for (var key in support) {
        if (support.hasOwnProperty(key) && typeof $.support[key] === "undefined") {
            $.support[key] = support[key];
        }
    }
    div = null;
    $.cssEase = {
        _default: "ease",
        in: "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        snap: "cubic-bezier(0,1,.5,1)",
        easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    $.cssHooks["transit:transform"] = {
        get: function(elem) {
            return $(elem).data("transform") || new Transform();
        },
        set: function(elem, v) {
            var value = v;
            if (!(value instanceof Transform)) {
                value = new Transform(value);
            }
            if (support.transform === "WebkitTransform" && !isChrome) {
                elem.style[support.transform] = value.toString(true);
            } else {
                elem.style[support.transform] = value.toString();
            }
            $(elem).data("transform", value);
        }
    };
    $.cssHooks.transform = {
        set: $.cssHooks["transit:transform"].set
    };
    $.cssHooks.filter = {
        get: function(elem) {
            return elem.style[support.filter];
        },
        set: function(elem, value) {
            elem.style[support.filter] = value;
        }
    };
    if ($.fn.jquery < "1.8") {
        $.cssHooks.transformOrigin = {
            get: function(elem) {
                return elem.style[support.transformOrigin];
            },
            set: function(elem, value) {
                elem.style[support.transformOrigin] = value;
            }
        };
        $.cssHooks.transition = {
            get: function(elem) {
                return elem.style[support.transition];
            },
            set: function(elem, value) {
                elem.style[support.transition] = value;
            }
        };
    }
    registerCssHook("scale");
    registerCssHook("scaleX");
    registerCssHook("scaleY");
    registerCssHook("translate");
    registerCssHook("rotate");
    registerCssHook("rotateX");
    registerCssHook("rotateY");
    registerCssHook("rotate3d");
    registerCssHook("perspective");
    registerCssHook("skewX");
    registerCssHook("skewY");
    registerCssHook("x", true);
    registerCssHook("y", true);
    function Transform(str) {
        if (typeof str === "string") {
            this.parse(str);
        }
        return this;
    }
    Transform.prototype = {
        setFromString: function(prop, val) {
            var args = typeof val === "string" ? val.split(",") : val.constructor === Array ? val : [ val ];
            args.unshift(prop);
            Transform.prototype.set.apply(this, args);
        },
        set: function(prop) {
            var args = Array.prototype.slice.apply(arguments, [ 1 ]);
            if (this.setter[prop]) {
                this.setter[prop].apply(this, args);
            } else {
                this[prop] = args.join(",");
            }
        },
        get: function(prop) {
            if (this.getter[prop]) {
                return this.getter[prop].apply(this);
            } else {
                return this[prop] || 0;
            }
        },
        setter: {
            rotate: function(theta) {
                this.rotate = unit(theta, "deg");
            },
            rotateX: function(theta) {
                this.rotateX = unit(theta, "deg");
            },
            rotateY: function(theta) {
                this.rotateY = unit(theta, "deg");
            },
            scale: function(x, y) {
                if (y === undefined) {
                    y = x;
                }
                this.scale = x + "," + y;
            },
            skewX: function(x) {
                this.skewX = unit(x, "deg");
            },
            skewY: function(y) {
                this.skewY = unit(y, "deg");
            },
            perspective: function(dist) {
                this.perspective = unit(dist, "px");
            },
            x: function(x) {
                this.set("translate", x, null);
            },
            y: function(y) {
                this.set("translate", null, y);
            },
            translate: function(x, y) {
                if (this._translateX === undefined) {
                    this._translateX = 0;
                }
                if (this._translateY === undefined) {
                    this._translateY = 0;
                }
                if (x !== null && x !== undefined) {
                    this._translateX = unit(x, "px");
                }
                if (y !== null && y !== undefined) {
                    this._translateY = unit(y, "px");
                }
                this.translate = this._translateX + "," + this._translateY;
            }
        },
        getter: {
            x: function() {
                return this._translateX || 0;
            },
            y: function() {
                return this._translateY || 0;
            },
            scale: function() {
                var s = (this.scale || "1,1").split(",");
                if (s[0]) {
                    s[0] = parseFloat(s[0]);
                }
                if (s[1]) {
                    s[1] = parseFloat(s[1]);
                }
                return s[0] === s[1] ? s[0] : s;
            },
            rotate3d: function() {
                var s = (this.rotate3d || "0,0,0,0deg").split(",");
                for (var i = 0; i <= 3; ++i) {
                    if (s[i]) {
                        s[i] = parseFloat(s[i]);
                    }
                }
                if (s[3]) {
                    s[3] = unit(s[3], "deg");
                }
                return s;
            }
        },
        parse: function(str) {
            var self = this;
            str.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(x, prop, val) {
                self.setFromString(prop, val);
            });
        },
        toString: function(use3d) {
            var re = [];
            for (var i in this) {
                if (this.hasOwnProperty(i)) {
                    if (!support.transform3d && (i === "rotateX" || i === "rotateY" || i === "perspective" || i === "transformOrigin")) {
                        continue;
                    }
                    if (i[0] !== "_") {
                        if (use3d && i === "scale") {
                            re.push(i + "3d(" + this[i] + ",1)");
                        } else if (use3d && i === "translate") {
                            re.push(i + "3d(" + this[i] + ",0)");
                        } else {
                            re.push(i + "(" + this[i] + ")");
                        }
                    }
                }
            }
            return re.join(" ");
        }
    };
    function callOrQueue(self, queue, fn) {
        if (queue === true) {
            self.queue(fn);
        } else if (queue) {
            self.queue(queue, fn);
        } else {
            self.each(function() {
                fn.call(this);
            });
        }
    }
    function getProperties(props) {
        var re = [];
        $.each(props, function(key) {
            key = $.camelCase(key);
            key = $.transit.propertyMap[key] || $.cssProps[key] || key;
            key = uncamel(key);
            if (support[key]) key = uncamel(support[key]);
            if ($.inArray(key, re) === -1) {
                re.push(key);
            }
        });
        return re;
    }
    function getTransition(properties, duration, easing, delay) {
        var props = getProperties(properties);
        if ($.cssEase[easing]) {
            easing = $.cssEase[easing];
        }
        var attribs = "" + toMS(duration) + " " + easing;
        if (parseInt(delay, 10) > 0) {
            attribs += " " + toMS(delay);
        }
        var transitions = [];
        $.each(props, function(i, name) {
            transitions.push(name + " " + attribs);
        });
        return transitions.join(", ");
    }
    $.fn.transition = $.fn.transit = function(properties, duration, easing, callback) {
        var self = this;
        var delay = 0;
        var queue = true;
        var theseProperties = $.extend(true, {}, properties);
        if (typeof duration === "function") {
            callback = duration;
            duration = undefined;
        }
        if (typeof duration === "object") {
            easing = duration.easing;
            delay = duration.delay || 0;
            queue = typeof duration.queue === "undefined" ? true : duration.queue;
            callback = duration.complete;
            duration = duration.duration;
        }
        if (typeof easing === "function") {
            callback = easing;
            easing = undefined;
        }
        if (typeof theseProperties.easing !== "undefined") {
            easing = theseProperties.easing;
            delete theseProperties.easing;
        }
        if (typeof theseProperties.duration !== "undefined") {
            duration = theseProperties.duration;
            delete theseProperties.duration;
        }
        if (typeof theseProperties.complete !== "undefined") {
            callback = theseProperties.complete;
            delete theseProperties.complete;
        }
        if (typeof theseProperties.queue !== "undefined") {
            queue = theseProperties.queue;
            delete theseProperties.queue;
        }
        if (typeof theseProperties.delay !== "undefined") {
            delay = theseProperties.delay;
            delete theseProperties.delay;
        }
        if (typeof duration === "undefined") {
            duration = $.fx.speeds._default;
        }
        if (typeof easing === "undefined") {
            easing = $.cssEase._default;
        }
        duration = toMS(duration);
        var transitionValue = getTransition(theseProperties, duration, easing, delay);
        var work = $.transit.enabled && support.transition;
        var i = work ? parseInt(duration, 10) + parseInt(delay, 10) : 0;
        if (i === 0) {
            var fn = function(next) {
                self.css(theseProperties);
                if (callback) {
                    callback.apply(self);
                }
                if (next) {
                    next();
                }
            };
            callOrQueue(self, queue, fn);
            return self;
        }
        var oldTransitions = {};
        var run = function(nextCall) {
            var bound = false;
            var cb = function() {
                if (bound) {
                    self.unbind(transitionEnd, cb);
                }
                if (i > 0) {
                    self.each(function() {
                        this.style[support.transition] = oldTransitions[this] || null;
                    });
                }
                if (typeof callback === "function") {
                    callback.apply(self);
                }
                if (typeof nextCall === "function") {
                    nextCall();
                }
            };
            if (i > 0 && transitionEnd && $.transit.useTransitionEnd) {
                bound = true;
                self.bind(transitionEnd, cb);
            } else {
                window.setTimeout(cb, i);
            }
            self.each(function() {
                if (i > 0) {
                    this.style[support.transition] = transitionValue;
                }
                $(this).css(theseProperties);
            });
        };
        var deferredRun = function(next) {
            this.offsetWidth;
            run(next);
        };
        callOrQueue(self, queue, deferredRun);
        return this;
    };
    function registerCssHook(prop, isPixels) {
        if (!isPixels) {
            $.cssNumber[prop] = true;
        }
        $.transit.propertyMap[prop] = support.transform;
        $.cssHooks[prop] = {
            get: function(elem) {
                var t = $(elem).css("transit:transform");
                return t.get(prop);
            },
            set: function(elem, value) {
                var t = $(elem).css("transit:transform");
                t.setFromString(prop, value);
                $(elem).css({
                    "transit:transform": t
                });
            }
        };
    }
    function uncamel(str) {
        return str.replace(/([A-Z])/g, function(letter) {
            return "-" + letter.toLowerCase();
        });
    }
    function unit(i, units) {
        if (typeof i === "string" && !i.match(/^[\-0-9\.]+$/)) {
            return i;
        } else {
            return "" + i + units;
        }
    }
    function toMS(duration) {
        var i = duration;
        if (typeof i === "string" && !i.match(/^[\-0-9\.]+/)) {
            i = $.fx.speeds[i] || $.fx.speeds._default;
        }
        return unit(i, "ms");
    }
    $.transit.getTransitionValue = getTransition;
    return $;
});

(function(fn) {
    if (typeof define === "function" && define.amd) {
        define([], fn);
    } else if (typeof module !== "undefined" && module !== null && module.exports) {
        module.exports = fn;
    } else {
        fn();
    }
})(function() {
    var assign = Object.assign || window.jQuery && jQuery.extend;
    var threshold = 8;
    var requestFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(fn, element) {
            return window.setTimeout(function() {
                fn();
            }, 25);
        };
    }();
    var ignoreTags = {
        textarea: true,
        input: true,
        select: true,
        button: true
    };
    var mouseevents = {
        move: "mousemove",
        cancel: "mouseup dragstart",
        end: "mouseup"
    };
    var touchevents = {
        move: "touchmove",
        cancel: "touchend",
        end: "touchend"
    };
    var rspaces = /\s+/;
    var eventOptions = {
        bubbles: true,
        cancelable: true
    };
    var eventsSymbol = Symbol("events");
    function createEvent(type) {
        return new CustomEvent(type, eventOptions);
    }
    function getEvents(node) {
        return node[eventsSymbol] || (node[eventsSymbol] = {});
    }
    function on(node, types, fn, data, selector) {
        types = types.split(rspaces);
        var events = getEvents(node);
        var i = types.length;
        var handlers, type;
        function handler(e) {
            fn(e, data);
        }
        while (i--) {
            type = types[i];
            handlers = events[type] || (events[type] = []);
            handlers.push([ fn, handler ]);
            node.addEventListener(type, handler);
        }
    }
    function off(node, types, fn, selector) {
        types = types.split(rspaces);
        var events = getEvents(node);
        var i = types.length;
        var type, handlers, k;
        if (!events) {
            return;
        }
        while (i--) {
            type = types[i];
            handlers = events[type];
            if (!handlers) {
                continue;
            }
            k = handlers.length;
            while (k--) {
                if (handlers[k][0] === fn) {
                    node.removeEventListener(type, handlers[k][1]);
                    handlers.splice(k, 1);
                }
            }
        }
    }
    function trigger(node, type, properties) {
        var event = createEvent(type);
        if (properties) {
            assign(event, properties);
        }
        node.dispatchEvent(event);
    }
    function Timer(fn) {
        var callback = fn, active = false, running = false;
        function trigger(time) {
            if (active) {
                callback();
                requestFrame(trigger);
                running = true;
                active = false;
            } else {
                running = false;
            }
        }
        this.kick = function(fn) {
            active = true;
            if (!running) {
                trigger();
            }
        };
        this.end = function(fn) {
            var cb = callback;
            if (!fn) {
                return;
            }
            if (!running) {
                fn();
            } else {
                callback = active ? function() {
                    cb();
                    fn();
                } : fn;
                active = true;
            }
        };
    }
    function noop() {}
    function preventDefault(e) {
        e.preventDefault();
    }
    function isIgnoreTag(e) {
        return !!ignoreTags[e.target.tagName.toLowerCase()];
    }
    function isPrimaryButton(e) {
        return e.which === 1 && !e.ctrlKey && !e.altKey;
    }
    function identifiedTouch(touchList, id) {
        var i, l;
        if (touchList.identifiedTouch) {
            return touchList.identifiedTouch(id);
        }
        i = -1;
        l = touchList.length;
        while (++i < l) {
            if (touchList[i].identifier === id) {
                return touchList[i];
            }
        }
    }
    function changedTouch(e, data) {
        var touch = identifiedTouch(e.changedTouches, data.identifier);
        if (!touch) {
            return;
        }
        if (touch.pageX === data.pageX && touch.pageY === data.pageY) {
            return;
        }
        return touch;
    }
    function mousedown(e) {
        if (!isPrimaryButton(e)) {
            return;
        }
        if (isIgnoreTag(e)) {
            return;
        }
        on(document, mouseevents.move, mousemove, e);
        on(document, mouseevents.cancel, mouseend, e);
    }
    function mousemove(e, data) {
        checkThreshold(e, data, e, removeMouse);
    }
    function mouseend(e, data) {
        removeMouse();
    }
    function removeMouse() {
        off(document, mouseevents.move, mousemove);
        off(document, mouseevents.cancel, mouseend);
    }
    function touchstart(e) {
        if (ignoreTags[e.target.tagName.toLowerCase()]) {
            return;
        }
        var touch = e.changedTouches[0];
        var data = {
            target: touch.target,
            pageX: touch.pageX,
            pageY: touch.pageY,
            identifier: touch.identifier,
            touchmove: function(e, data) {
                touchmove(e, data);
            },
            touchend: function(e, data) {
                touchend(e, data);
            }
        };
        on(document, touchevents.move, data.touchmove, data);
        on(document, touchevents.cancel, data.touchend, data);
    }
    function touchmove(e, data) {
        var touch = changedTouch(e, data);
        if (!touch) {
            return;
        }
        checkThreshold(e, data, touch, removeTouch);
    }
    function touchend(e, data) {
        var touch = identifiedTouch(e.changedTouches, data.identifier);
        if (!touch) {
            return;
        }
        removeTouch(data);
    }
    function removeTouch(data) {
        off(document, touchevents.move, data.touchmove);
        off(document, touchevents.cancel, data.touchend);
    }
    function checkThreshold(e, data, touch, fn) {
        var distX = touch.pageX - data.pageX;
        var distY = touch.pageY - data.pageY;
        if (distX * distX + distY * distY < threshold * threshold) {
            return;
        }
        triggerStart(e, data, touch, distX, distY, fn);
    }
    function triggerStart(e, data, touch, distX, distY, fn) {
        var touches = e.targetTouches;
        var time = e.timeStamp - data.timeStamp;
        var template = {
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
            shiftKey: e.shiftKey,
            startX: data.pageX,
            startY: data.pageY,
            distX: distX,
            distY: distY,
            deltaX: distX,
            deltaY: distY,
            pageX: touch.pageX,
            pageY: touch.pageY,
            velocityX: distX / time,
            velocityY: distY / time,
            identifier: data.identifier,
            targetTouches: touches,
            finger: touches ? touches.length : 1,
            enableMove: function() {
                this.moveEnabled = true;
                this.enableMove = noop;
                e.preventDefault();
            }
        };
        trigger(data.target, "movestart", template);
        fn(data);
    }
    function activeMousemove(e, data) {
        var timer = data.timer;
        data.touch = e;
        data.timeStamp = e.timeStamp;
        timer.kick();
    }
    function activeMouseend(e, data) {
        var target = data.target;
        var event = data.event;
        var timer = data.timer;
        removeActiveMouse();
        endEvent(target, event, timer, function() {
            setTimeout(function() {
                off(target, "click", preventDefault);
            }, 0);
        });
    }
    function removeActiveMouse() {
        off(document, mouseevents.move, activeMousemove);
        off(document, mouseevents.end, activeMouseend);
    }
    function activeTouchmove(e, data) {
        var event = data.event;
        var timer = data.timer;
        var touch = changedTouch(e, event);
        if (!touch) {
            return;
        }
        e.preventDefault();
        event.targetTouches = e.targetTouches;
        data.touch = touch;
        data.timeStamp = e.timeStamp;
        timer.kick();
    }
    function activeTouchend(e, data) {
        var target = data.target;
        var event = data.event;
        var timer = data.timer;
        var touch = identifiedTouch(e.changedTouches, event.identifier);
        if (!touch) {
            return;
        }
        removeActiveTouch(data);
        endEvent(target, event, timer);
    }
    function removeActiveTouch(data) {
        off(document, touchevents.move, data.activeTouchmove);
        off(document, touchevents.end, data.activeTouchend);
    }
    function updateEvent(event, touch, timeStamp) {
        var time = timeStamp - event.timeStamp;
        event.distX = touch.pageX - event.startX;
        event.distY = touch.pageY - event.startY;
        event.deltaX = touch.pageX - event.pageX;
        event.deltaY = touch.pageY - event.pageY;
        event.velocityX = .3 * event.velocityX + .7 * event.deltaX / time;
        event.velocityY = .3 * event.velocityY + .7 * event.deltaY / time;
        event.pageX = touch.pageX;
        event.pageY = touch.pageY;
    }
    function endEvent(target, event, timer, fn) {
        timer.end(function() {
            trigger(target, "moveend", event);
            return fn && fn();
        });
    }
    function movestart(e) {
        if (e.defaultPrevented) {
            return;
        }
        if (!e.moveEnabled) {
            return;
        }
        var event = {
            startX: e.startX,
            startY: e.startY,
            pageX: e.pageX,
            pageY: e.pageY,
            distX: e.distX,
            distY: e.distY,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            velocityX: e.velocityX,
            velocityY: e.velocityY,
            identifier: e.identifier,
            targetTouches: e.targetTouches,
            finger: e.finger
        };
        var data = {
            target: e.target,
            event: event,
            timer: new Timer(update),
            touch: undefined,
            timeStamp: e.timeStamp
        };
        function update(time) {
            updateEvent(event, data.touch, data.timeStamp);
            trigger(data.target, "move", event);
        }
        if (e.identifier === undefined) {
            on(e.target, "click", preventDefault);
            on(document, mouseevents.move, activeMousemove, data);
            on(document, mouseevents.end, activeMouseend, data);
        } else {
            data.activeTouchmove = function(e, data) {
                activeTouchmove(e, data);
            };
            data.activeTouchend = function(e, data) {
                activeTouchend(e, data);
            };
            on(document, touchevents.move, data.activeTouchmove, data);
            on(document, touchevents.end, data.activeTouchend, data);
        }
    }
    on(document, "mousedown", mousedown);
    on(document, "touchstart", touchstart);
    on(document, "movestart", movestart);
    if (!window.jQuery) {
        return;
    }
    var properties = "startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(" ");
    function enableMove1(e) {
        e.enableMove();
    }
    function enableMove2(e) {
        e.enableMove();
    }
    function enableMove3(e) {
        e.enableMove();
    }
    function add(handleObj) {
        var handler = handleObj.handler;
        handleObj.handler = function(e) {
            var i = properties.length;
            var property;
            while (i--) {
                property = properties[i];
                e[property] = e.originalEvent[property];
            }
            handler.apply(this, arguments);
        };
    }
    jQuery.event.special.movestart = {
        setup: function() {
            on(this, "movestart", enableMove1);
            return false;
        },
        teardown: function() {
            off(this, "movestart", enableMove1);
            return false;
        },
        add: add
    };
    jQuery.event.special.move = {
        setup: function() {
            on(this, "movestart", enableMove2);
            return false;
        },
        teardown: function() {
            off(this, "movestart", enableMove2);
            return false;
        },
        add: add
    };
    jQuery.event.special.moveend = {
        setup: function() {
            on(this, "movestart", enableMove3);
            return false;
        },
        teardown: function() {
            off(this, "movestart", enableMove3);
            return false;
        },
        add: add
    };
});

(function(thisModule) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], thisModule);
    } else if (typeof module !== "undefined" && module !== null && module.exports) {
        module.exports = thisModule;
    } else {
        thisModule(jQuery);
    }
})(function(jQuery, undefined) {
    var add = jQuery.event.add, remove = jQuery.event.remove, trigger = function(node, type, data) {
        jQuery.event.trigger(type, data, node);
    }, settings = {
        threshold: .4,
        sensitivity: 6
    };
    function moveend(e) {
        var w, h, event;
        w = e.currentTarget.offsetWidth;
        h = e.currentTarget.offsetHeight;
        event = {
            distX: e.distX,
            distY: e.distY,
            velocityX: e.velocityX,
            velocityY: e.velocityY,
            finger: e.finger
        };
        if (e.distX > e.distY) {
            if (e.distX > -e.distY) {
                if (e.distX / w > settings.threshold || e.velocityX * e.distX / w * settings.sensitivity > 1) {
                    event.type = "swiperight";
                    trigger(e.currentTarget, event);
                }
            } else {
                if (-e.distY / h > settings.threshold || e.velocityY * e.distY / w * settings.sensitivity > 1) {
                    event.type = "swipeup";
                    trigger(e.currentTarget, event);
                }
            }
        } else {
            if (e.distX > -e.distY) {
                if (e.distY / h > settings.threshold || e.velocityY * e.distY / w * settings.sensitivity > 1) {
                    event.type = "swipedown";
                    trigger(e.currentTarget, event);
                }
            } else {
                if (-e.distX / w > settings.threshold || e.velocityX * e.distX / w * settings.sensitivity > 1) {
                    event.type = "swipeleft";
                    trigger(e.currentTarget, event);
                }
            }
        }
    }
    function getData(node) {
        var data = jQuery.data(node, "event_swipe");
        if (!data) {
            data = {
                count: 0
            };
            jQuery.data(node, "event_swipe", data);
        }
        return data;
    }
    jQuery.event.special.swipe = jQuery.event.special.swipeleft = jQuery.event.special.swiperight = jQuery.event.special.swipeup = jQuery.event.special.swipedown = {
        setup: function(data, namespaces, eventHandle) {
            var data = getData(this);
            if (data.count++ > 0) {
                return;
            }
            add(this, "moveend", moveend);
            return true;
        },
        teardown: function() {
            var data = getData(this);
            if (--data.count > 0) {
                return;
            }
            remove(this, "moveend", moveend);
            return true;
        },
        settings: settings
    };
});

function Flatpickr(e, t) {
    function n(e) {
        return e.bind(he);
    }
    function a(e) {
        he.config.noCalendar && !he.selectedDates.length && (he.selectedDates = [ he.now ]), 
        pe(e), he.selectedDates.length && (!he.minDateHasTime || "input" !== e.type || e.target.value.length >= 2 ? (i(), 
        oe()) : setTimeout(function() {
            i(), oe();
        }, 1e3));
    }
    function i() {
        if (he.config.enableTime) {
            var e = (parseInt(he.hourElement.value, 10) || 0) % (he.amPM ? 12 : 24), t = (parseInt(he.minuteElement.value, 10) || 0) % 60, n = he.config.enableSeconds ? (parseInt(he.secondElement.value, 10) || 0) % 60 : 0;
            void 0 !== he.amPM && (e = e % 12 + 12 * ("PM" === he.amPM.textContent)), he.minDateHasTime && 0 === ge(he.latestSelectedDateObj, he.config.minDate) && (e = Math.max(e, he.config.minDate.getHours())) === he.config.minDate.getHours() && (t = Math.max(t, he.config.minDate.getMinutes())), 
            he.maxDateHasTime && 0 === ge(he.latestSelectedDateObj, he.config.maxDate) && (e = Math.min(e, he.config.maxDate.getHours())) === he.config.maxDate.getHours() && (t = Math.min(t, he.config.maxDate.getMinutes())), 
            o(e, t, n);
        }
    }
    function r(e) {
        var t = e || he.latestSelectedDateObj;
        t && o(t.getHours(), t.getMinutes(), t.getSeconds());
    }
    function o(e, t, n) {
        he.selectedDates.length && he.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0), 
        he.config.enableTime && !he.isMobile && (he.hourElement.value = he.pad(he.config.time_24hr ? e : (12 + e) % 12 + 12 * (e % 12 == 0)), 
        he.minuteElement.value = he.pad(t), he.config.time_24hr || (he.amPM.textContent = e >= 12 ? "PM" : "AM"), 
        !0 === he.config.enableSeconds && (he.secondElement.value = he.pad(n)));
    }
    function l(e) {
        var t = e.target.value;
        e.delta && (t = (parseInt(t) + e.delta).toString()), 4 !== t.length && "Enter" !== e.key || (he.currentYearElement.blur(), 
        /[^\d]/.test(t) || O(t));
    }
    function c(e, t, n) {
        return t instanceof Array ? t.forEach(function(t) {
            return c(e, t, n);
        }) : e instanceof Array ? e.forEach(function(e) {
            return c(e, t, n);
        }) : (e.addEventListener(t, n), void he._handlers.push({
            element: e,
            event: t,
            handler: n
        }));
    }
    function s(e) {
        return function(t) {
            return 1 === t.which && e(t);
        };
    }
    function d() {
        if (he._handlers = [], he._animationLoop = [], he.config.wrap && [ "open", "close", "toggle", "clear" ].forEach(function(e) {
            Array.prototype.forEach.call(he.element.querySelectorAll("[data-" + e + "]"), function(t) {
                return c(t, "mousedown", s(he[e]));
            });
        }), he.isMobile) return X();
        if (he.debouncedResize = me(j, 50), he.triggerChange = function() {
            te("Change");
        }, he.debouncedChange = me(he.triggerChange, 300), "range" === he.config.mode && he.daysContainer && c(he.daysContainer, "mouseover", function(e) {
            return P(e.target);
        }), c(window.document.body, "keydown", L), he.config.static || c(he._input, "keydown", L), 
        he.config.inline || he.config.static || c(window, "resize", he.debouncedResize), 
        void 0 !== window.ontouchstart && c(window.document, "touchstart", I), c(window.document, "mousedown", s(I)), 
        c(he._input, "blur", I), !0 === he.config.clickOpens && c(he._input, "focus", he.open), 
        he.config.noCalendar || (he.monthNav.addEventListener("wheel", function(e) {
            return e.preventDefault();
        }), c(he.monthNav, "wheel", me(ce, 10)), c(he.monthNav, "mousedown", s(se)), c(he.monthNav, [ "keyup", "increment" ], l), 
        c(he.daysContainer, "mousedown", s(K)), he.config.animate && (c(he.daysContainer, [ "webkitAnimationEnd", "animationend" ], f), 
        c(he.monthNav, [ "webkitAnimationEnd", "animationend" ], m))), he.config.enableTime) {
            var e = function(e) {
                return e.target.select();
            };
            c(he.timeContainer, [ "wheel", "input", "increment" ], a), c(he.timeContainer, "mousedown", s(p)), 
            c(he.timeContainer, [ "wheel", "increment" ], he.debouncedChange), c(he.timeContainer, "input", he.triggerChange), 
            c([ he.hourElement, he.minuteElement ], "focus", e), void 0 !== he.secondElement && c(he.secondElement, "focus", function() {
                return he.secondElement.select();
            }), void 0 !== he.amPM && c(he.amPM, "mousedown", s(function(e) {
                a(e), he.triggerChange(e);
            }));
        }
    }
    function u() {
        for (var e = he._animationLoop.length; e--; ) he._animationLoop[e](), he._animationLoop.splice(e, 1);
    }
    function f(e) {
        if (he.daysContainer.childNodes.length > 1) switch (e.animationName) {
          case "fpSlideLeft":
            he.daysContainer.lastChild.classList.remove("slideLeftNew"), he.daysContainer.removeChild(he.daysContainer.firstChild), 
            he.days = he.daysContainer.firstChild, u();
            break;

          case "fpSlideRight":
            he.daysContainer.firstChild.classList.remove("slideRightNew"), he.daysContainer.removeChild(he.daysContainer.lastChild), 
            he.days = he.daysContainer.firstChild, u();
        }
    }
    function m(e) {
        switch (e.animationName) {
          case "fpSlideLeftNew":
          case "fpSlideRightNew":
            he.navigationCurrentMonth.classList.remove("slideLeftNew"), he.navigationCurrentMonth.classList.remove("slideRightNew");
            for (var t = he.navigationCurrentMonth; t.nextSibling && /curr/.test(t.nextSibling.className); ) he.monthNav.removeChild(t.nextSibling);
            for (;t.previousSibling && /curr/.test(t.previousSibling.className); ) he.monthNav.removeChild(t.previousSibling);
            he.oldCurMonth = null;
        }
    }
    function g(e) {
        e = e ? he.parseDate(e) : he.latestSelectedDateObj || (he.config.minDate > he.now ? he.config.minDate : he.config.maxDate && he.config.maxDate < he.now ? he.config.maxDate : he.now);
        try {
            he.currentYear = e.getFullYear(), he.currentMonth = e.getMonth();
        } catch (t) {
            console.error(t.stack), console.warn("Invalid date supplied: " + e);
        }
        he.redraw();
    }
    function p(e) {
        ~e.target.className.indexOf("arrow") && h(e, e.target.classList.contains("arrowUp") ? 1 : -1);
    }
    function h(e, t, n) {
        var a = n || e.target.parentNode.childNodes[0], i = ne("increment");
        i.delta = t, a.dispatchEvent(i);
    }
    function D(e) {
        var t = de("div", "numInputWrapper"), n = de("input", "numInput " + e), a = de("span", "arrowUp"), i = de("span", "arrowDown");
        return n.type = "text", n.pattern = "\\d*", t.appendChild(n), t.appendChild(a), 
        t.appendChild(i), t;
    }
    function v() {
        var e = window.document.createDocumentFragment();
        he.calendarContainer = de("div", "flatpickr-calendar"), he.calendarContainer.tabIndex = -1, 
        he.config.noCalendar || (e.appendChild(k()), he.innerContainer = de("div", "flatpickr-innerContainer"), 
        he.config.weekNumbers && he.innerContainer.appendChild(T()), he.rContainer = de("div", "flatpickr-rContainer"), 
        he.rContainer.appendChild(E()), he.daysContainer || (he.daysContainer = de("div", "flatpickr-days"), 
        he.daysContainer.tabIndex = -1), M(), he.rContainer.appendChild(he.daysContainer), 
        he.innerContainer.appendChild(he.rContainer), e.appendChild(he.innerContainer)), 
        he.config.enableTime && e.appendChild(x()), fe(he.calendarContainer, "rangeMode", "range" === he.config.mode), 
        fe(he.calendarContainer, "animate", he.config.animate), he.calendarContainer.appendChild(e);
        var t = he.config.appendTo && he.config.appendTo.nodeType;
        if (he.config.inline || he.config.static) {
            if (he.calendarContainer.classList.add(he.config.inline ? "inline" : "static"), 
            he.config.inline && !t) return he.element.parentNode.insertBefore(he.calendarContainer, he._input.nextSibling);
            if (he.config.static) {
                var n = de("div", "flatpickr-wrapper");
                return he.element.parentNode.insertBefore(n, he.element), n.appendChild(he.element), 
                he.altInput && n.appendChild(he.altInput), void n.appendChild(he.calendarContainer);
            }
        }
        (t ? he.config.appendTo : window.document.body).appendChild(he.calendarContainer);
    }
    function C(e, t, n, a) {
        var i = A(t, !0), r = de("span", "flatpickr-day " + e, t.getDate());
        return r.dateObj = t, r.$i = a, r.setAttribute("aria-label", he.formatDate(t, he.config.ariaDateFormat)), 
        0 === ge(t, he.now) && (he.todayDateElem = r, r.classList.add("today")), i ? (r.tabIndex = -1, 
        ae(t) && (r.classList.add("selected"), he.selectedDateElem = r, "range" === he.config.mode && (fe(r, "startRange", 0 === ge(t, he.selectedDates[0])), 
        fe(r, "endRange", 0 === ge(t, he.selectedDates[1]))))) : (r.classList.add("disabled"), 
        he.selectedDates[0] && t > he.minRangeDate && t < he.selectedDates[0] ? he.minRangeDate = t : he.selectedDates[0] && t < he.maxRangeDate && t > he.selectedDates[0] && (he.maxRangeDate = t)), 
        "range" === he.config.mode && (ie(t) && !ae(t) && r.classList.add("inRange"), 1 === he.selectedDates.length && (t < he.minRangeDate || t > he.maxRangeDate) && r.classList.add("notAllowed")), 
        he.config.weekNumbers && "prevMonthDay" !== e && n % 7 == 1 && he.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" + he.config.getWeek(t) + "</span>"), 
        te("DayCreate", r), r;
    }
    function w(e, t) {
        var n = e + t || 0, a = void 0 !== e ? he.days.childNodes[n] : he.selectedDateElem || he.todayDateElem || he.days.childNodes[0], i = function() {
            (a = a || he.days.childNodes[n]).focus(), "range" === he.config.mode && P(a);
        };
        if (void 0 === a && 0 !== t) return t > 0 ? (he.changeMonth(1), n %= 42) : t < 0 && (he.changeMonth(-1), 
        n += 42), b(i);
        i();
    }
    function b(e) {
        if (!0 === he.config.animate) return he._animationLoop.push(e);
        e();
    }
    function M(e) {
        var t = (new Date(he.currentYear, he.currentMonth, 1).getDay() - he.l10n.firstDayOfWeek + 7) % 7, n = "range" === he.config.mode;
        he.prevMonthDays = he.utils.getDaysinMonth((he.currentMonth - 1 + 12) % 12), he.selectedDateElem = void 0, 
        he.todayDateElem = void 0;
        var a = he.utils.getDaysinMonth(), i = window.document.createDocumentFragment(), r = he.prevMonthDays + 1 - t, o = 0;
        for (he.config.weekNumbers && he.weekNumbers.firstChild && (he.weekNumbers.textContent = ""), 
        n && (he.minRangeDate = new Date(he.currentYear, he.currentMonth - 1, r), he.maxRangeDate = new Date(he.currentYear, he.currentMonth + 1, (42 - t) % a)); r <= he.prevMonthDays; r++, 
        o++) i.appendChild(C("prevMonthDay", new Date(he.currentYear, he.currentMonth - 1, r), r, o));
        for (r = 1; r <= a; r++, o++) i.appendChild(C("", new Date(he.currentYear, he.currentMonth, r), r, o));
        for (var l = a + 1; l <= 42 - t; l++, o++) i.appendChild(C("nextMonthDay", new Date(he.currentYear, he.currentMonth + 1, l % a), l, o));
        n && 1 === he.selectedDates.length && i.childNodes[0] ? (he._hidePrevMonthArrow = he._hidePrevMonthArrow || he.minRangeDate > i.childNodes[0].dateObj, 
        he._hideNextMonthArrow = he._hideNextMonthArrow || he.maxRangeDate < new Date(he.currentYear, he.currentMonth + 1, 1)) : re();
        var c = de("div", "dayContainer");
        if (c.appendChild(i), he.config.animate && void 0 !== e) for (;he.daysContainer.childNodes.length > 1; ) he.daysContainer.removeChild(he.daysContainer.firstChild); else y(he.daysContainer);
        return e >= 0 ? he.daysContainer.appendChild(c) : he.daysContainer.insertBefore(c, he.daysContainer.firstChild), 
        he.days = he.daysContainer.firstChild, he.daysContainer;
    }
    function y(e) {
        for (;e.firstChild; ) e.removeChild(e.firstChild);
    }
    function k() {
        var e = window.document.createDocumentFragment();
        he.monthNav = de("div", "flatpickr-month"), he.prevMonthNav = de("span", "flatpickr-prev-month"), 
        he.prevMonthNav.innerHTML = he.config.prevArrow, he.currentMonthElement = de("span", "cur-month"), 
        he.currentMonthElement.title = he.l10n.scrollTitle;
        var t = D("cur-year");
        return he.currentYearElement = t.childNodes[0], he.currentYearElement.title = he.l10n.scrollTitle, 
        he.config.minDate && (he.currentYearElement.min = he.config.minDate.getFullYear()), 
        he.config.maxDate && (he.currentYearElement.max = he.config.maxDate.getFullYear(), 
        he.currentYearElement.disabled = he.config.minDate && he.config.minDate.getFullYear() === he.config.maxDate.getFullYear()), 
        he.nextMonthNav = de("span", "flatpickr-next-month"), he.nextMonthNav.innerHTML = he.config.nextArrow, 
        he.navigationCurrentMonth = de("span", "flatpickr-current-month"), he.navigationCurrentMonth.appendChild(he.currentMonthElement), 
        he.navigationCurrentMonth.appendChild(t), e.appendChild(he.prevMonthNav), e.appendChild(he.navigationCurrentMonth), 
        e.appendChild(he.nextMonthNav), he.monthNav.appendChild(e), Object.defineProperty(he, "_hidePrevMonthArrow", {
            get: function() {
                return this.__hidePrevMonthArrow;
            },
            set: function(e) {
                this.__hidePrevMonthArrow !== e && (he.prevMonthNav.style.display = e ? "none" : "block"), 
                this.__hidePrevMonthArrow = e;
            }
        }), Object.defineProperty(he, "_hideNextMonthArrow", {
            get: function() {
                return this.__hideNextMonthArrow;
            },
            set: function(e) {
                this.__hideNextMonthArrow !== e && (he.nextMonthNav.style.display = e ? "none" : "block"), 
                this.__hideNextMonthArrow = e;
            }
        }), re(), he.monthNav;
    }
    function x() {
        he.calendarContainer.classList.add("hasTime"), he.config.noCalendar && he.calendarContainer.classList.add("noCalendar"), 
        he.timeContainer = de("div", "flatpickr-time"), he.timeContainer.tabIndex = -1;
        var e = de("span", "flatpickr-time-separator", ":"), t = D("flatpickr-hour");
        he.hourElement = t.childNodes[0];
        var n = D("flatpickr-minute");
        if (he.minuteElement = n.childNodes[0], he.hourElement.tabIndex = he.minuteElement.tabIndex = -1, 
        he.hourElement.value = he.pad(he.latestSelectedDateObj ? he.latestSelectedDateObj.getHours() : he.config.defaultHour), 
        he.minuteElement.value = he.pad(he.latestSelectedDateObj ? he.latestSelectedDateObj.getMinutes() : he.config.defaultMinute), 
        he.hourElement.step = he.config.hourIncrement, he.minuteElement.step = he.config.minuteIncrement, 
        he.hourElement.min = he.config.time_24hr ? 0 : 1, he.hourElement.max = he.config.time_24hr ? 23 : 12, 
        he.minuteElement.min = 0, he.minuteElement.max = 59, he.hourElement.title = he.minuteElement.title = he.l10n.scrollTitle, 
        he.timeContainer.appendChild(t), he.timeContainer.appendChild(e), he.timeContainer.appendChild(n), 
        he.config.time_24hr && he.timeContainer.classList.add("time24hr"), he.config.enableSeconds) {
            he.timeContainer.classList.add("hasSeconds");
            var a = D("flatpickr-second");
            he.secondElement = a.childNodes[0], he.secondElement.value = he.latestSelectedDateObj ? he.pad(he.latestSelectedDateObj.getSeconds()) : "00", 
            he.secondElement.step = he.minuteElement.step, he.secondElement.min = he.minuteElement.min, 
            he.secondElement.max = he.minuteElement.max, he.timeContainer.appendChild(de("span", "flatpickr-time-separator", ":")), 
            he.timeContainer.appendChild(a);
        }
        return he.config.time_24hr || (he.amPM = de("span", "flatpickr-am-pm", [ "AM", "PM" ][he.hourElement.value > 11 | 0]), 
        he.amPM.title = he.l10n.toggleTitle, he.amPM.tabIndex = -1, he.timeContainer.appendChild(he.amPM)), 
        he.timeContainer;
    }
    function E() {
        he.weekdayContainer || (he.weekdayContainer = de("div", "flatpickr-weekdays"));
        var e = he.l10n.firstDayOfWeek, t = he.l10n.weekdays.shorthand.slice();
        return e > 0 && e < t.length && (t = [].concat(t.splice(e, t.length), t.splice(0, e))), 
        he.weekdayContainer.innerHTML = "\n\t\t<span class=flatpickr-weekday>\n\t\t\t" + t.join("</span><span class=flatpickr-weekday>") + "\n\t\t</span>\n\t\t", 
        he.weekdayContainer;
    }
    function T() {
        return he.calendarContainer.classList.add("hasWeeks"), he.weekWrapper = de("div", "flatpickr-weekwrapper"), 
        he.weekWrapper.appendChild(de("span", "flatpickr-weekday", he.l10n.weekAbbreviation)), 
        he.weekNumbers = de("div", "flatpickr-weeks"), he.weekWrapper.appendChild(he.weekNumbers), 
        he.weekWrapper;
    }
    function N(e, t, n) {
        var a = (t = void 0 === t || t) ? e : e - he.currentMonth, i = !he.config.animate || !1 === n;
        if (!(a < 0 && he._hidePrevMonthArrow || a > 0 && he._hideNextMonthArrow)) {
            if (he.currentMonth += a, (he.currentMonth < 0 || he.currentMonth > 11) && (he.currentYear += he.currentMonth > 11 ? 1 : -1, 
            he.currentMonth = (he.currentMonth + 12) % 12, te("YearChange")), M(i ? void 0 : a), 
            i) return te("MonthChange"), re();
            var r = he.navigationCurrentMonth;
            if (a < 0) for (;r.nextSibling && /curr/.test(r.nextSibling.className); ) he.monthNav.removeChild(r.nextSibling); else if (a > 0) for (;r.previousSibling && /curr/.test(r.previousSibling.className); ) he.monthNav.removeChild(r.previousSibling);
            if (he.oldCurMonth = he.navigationCurrentMonth, he.navigationCurrentMonth = he.monthNav.insertBefore(he.oldCurMonth.cloneNode(!0), a > 0 ? he.oldCurMonth.nextSibling : he.oldCurMonth), 
            a > 0 ? (he.daysContainer.firstChild.classList.add("slideLeft"), he.daysContainer.lastChild.classList.add("slideLeftNew"), 
            he.oldCurMonth.classList.add("slideLeft"), he.navigationCurrentMonth.classList.add("slideLeftNew")) : a < 0 && (he.daysContainer.firstChild.classList.add("slideRightNew"), 
            he.daysContainer.lastChild.classList.add("slideRight"), he.oldCurMonth.classList.add("slideRight"), 
            he.navigationCurrentMonth.classList.add("slideRightNew")), he.currentMonthElement = he.navigationCurrentMonth.firstChild, 
            he.currentYearElement = he.navigationCurrentMonth.lastChild.childNodes[0], re(), 
            he.oldCurMonth.firstChild.textContent = he.utils.monthToStr(he.currentMonth - a), 
            te("MonthChange"), document.activeElement && document.activeElement.$i) {
                var o = document.activeElement.$i;
                b(function() {
                    w(o, 0);
                });
            }
        }
    }
    function F(e) {
        he.input.value = "", he.altInput && (he.altInput.value = ""), he.mobileInput && (he.mobileInput.value = ""), 
        he.selectedDates = [], he.latestSelectedDateObj = void 0, he.showTimeInput = !1, 
        he.redraw(), !1 !== e && te("Change");
    }
    function _() {
        he.isOpen = !1, he.isMobile || (he.calendarContainer.classList.remove("open"), he._input.classList.remove("active")), 
        te("Close");
    }
    function S() {
        for (var e = he._handlers.length; e--; ) {
            var t = he._handlers[e];
            t.element.removeEventListener(t.event, t.handler);
        }
        he._handlers = [], he.mobileInput ? (he.mobileInput.parentNode && he.mobileInput.parentNode.removeChild(he.mobileInput), 
        he.mobileInput = null) : he.calendarContainer && he.calendarContainer.parentNode && he.calendarContainer.parentNode.removeChild(he.calendarContainer), 
        he.altInput && (he.input.type = "text", he.altInput.parentNode && he.altInput.parentNode.removeChild(he.altInput), 
        delete he.altInput), he.input && (he.input.type = he.input._type, he.input.classList.remove("flatpickr-input"), 
        he.input.removeAttribute("readonly"), he.input.value = ""), [ "_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config" ].forEach(function(e) {
            return delete he[e];
        });
    }
    function Y(e) {
        return !(!he.config.appendTo || !he.config.appendTo.contains(e)) || he.calendarContainer.contains(e);
    }
    function I(e) {
        if (he.isOpen && !he.config.inline) {
            var t = Y(e.target), n = e.target === he.input || e.target === he.altInput || he.element.contains(e.target) || e.path && e.path.indexOf && (~e.path.indexOf(he.input) || ~e.path.indexOf(he.altInput));
            ("blur" === e.type ? n && e.relatedTarget && !Y(e.relatedTarget) : !n && !t) && (e.preventDefault(), 
            he.close(), "range" === he.config.mode && 1 === he.selectedDates.length && (he.clear(!1), 
            he.redraw()));
        }
    }
    function O(e) {
        if (!(!e || he.currentYearElement.min && e < he.currentYearElement.min || he.currentYearElement.max && e > he.currentYearElement.max)) {
            var t = parseInt(e, 10), n = he.currentYear !== t;
            he.currentYear = t || he.currentYear, he.config.maxDate && he.currentYear === he.config.maxDate.getFullYear() ? he.currentMonth = Math.min(he.config.maxDate.getMonth(), he.currentMonth) : he.config.minDate && he.currentYear === he.config.minDate.getFullYear() && (he.currentMonth = Math.max(he.config.minDate.getMonth(), he.currentMonth)), 
            n && (he.redraw(), te("YearChange"));
        }
    }
    function A(e, t) {
        if (he.config.minDate && ge(e, he.config.minDate, void 0 !== t ? t : !he.minDateHasTime) < 0 || he.config.maxDate && ge(e, he.config.maxDate, void 0 !== t ? t : !he.maxDateHasTime) > 0) return !1;
        if (!he.config.enable.length && !he.config.disable.length) return !0;
        for (var n, a = he.parseDate(e, null, !0), i = he.config.enable.length > 0, r = i ? he.config.enable : he.config.disable, o = 0; o < r.length; o++) {
            if ((n = r[o]) instanceof Function && n(a)) return i;
            if (n instanceof Date && n.getTime() === a.getTime()) return i;
            if ("string" == typeof n && he.parseDate(n, null, !0).getTime() === a.getTime()) return i;
            if ("object" === (void 0 === n ? "undefined" : _typeof(n)) && n.from && n.to && a >= n.from && a <= n.to) return i;
        }
        return !i;
    }
    function L(e) {
        var t = e.target === he._input, n = Y(e.target), r = he.config.allowInput, o = he.isOpen && (!r || !t), l = he.config.inline && t && !r;
        if ("Enter" === e.key && r && t) return he.setDate(he._input.value, !0, e.target === he.altInput ? he.config.altFormat : he.config.dateFormat), 
        e.target.blur();
        if (n || o || l) {
            var c = he.timeContainer && he.timeContainer.contains(e.target);
            switch (e.key) {
              case "Enter":
                c ? oe() : K(e);
                break;

              case "Escape":
                e.preventDefault(), he.close();
                break;

              case "ArrowLeft":
              case "ArrowRight":
                if (!c) if (e.preventDefault(), he.daysContainer) {
                    var s = "ArrowRight" === e.key ? 1 : -1;
                    e.ctrlKey ? N(s, !0) : w(e.target.$i, s);
                } else he.config.enableTime && !c && he.hourElement.focus();
                break;

              case "ArrowUp":
              case "ArrowDown":
                e.preventDefault();
                var d = "ArrowDown" === e.key ? 1 : -1;
                he.daysContainer ? e.ctrlKey ? (O(he.currentYear - d), w(e.target.$i, 0)) : c || w(e.target.$i, 7 * d) : he.config.enableTime && (c || he.hourElement.focus(), 
                a(e));
                break;

              case "Tab":
                e.target === he.hourElement ? (e.preventDefault(), he.minuteElement.select()) : e.target === he.minuteElement && (he.secondElement || he.amPM) ? (e.preventDefault(), 
                (he.secondElement || he.amPM).focus()) : e.target === he.secondElement && (e.preventDefault(), 
                he.amPM.focus());
                break;

              case "a":
                e.target === he.amPM && (he.amPM.textContent = "AM", i(), oe());
                break;

              case "p":
                e.target === he.amPM && (he.amPM.textContent = "PM", i(), oe());
            }
            te("KeyDown", e);
        }
    }
    function P(e) {
        if (1 === he.selectedDates.length && e.classList.contains("flatpickr-day")) {
            for (var t = e.dateObj, n = he.parseDate(he.selectedDates[0], null, !0), a = Math.min(t.getTime(), he.selectedDates[0].getTime()), i = Math.max(t.getTime(), he.selectedDates[0].getTime()), r = !1, o = a; o < i; o += he.utils.duration.DAY) if (!A(new Date(o))) {
                r = !0;
                break;
            }
            for (var l = he.days.childNodes[0].dateObj.getTime(), c = 0; c < 42; c++, l += he.utils.duration.DAY) {
                (function(o, l) {
                    var c = o < he.minRangeDate.getTime() || o > he.maxRangeDate.getTime(), s = he.days.childNodes[l];
                    if (c) return he.days.childNodes[l].classList.add("notAllowed"), [ "inRange", "startRange", "endRange" ].forEach(function(e) {
                        s.classList.remove(e);
                    }), "continue";
                    if (r && !c) return "continue";
                    [ "startRange", "inRange", "endRange", "notAllowed" ].forEach(function(e) {
                        s.classList.remove(e);
                    });
                    var d = Math.max(he.minRangeDate.getTime(), a), u = Math.min(he.maxRangeDate.getTime(), i);
                    e.classList.add(t < he.selectedDates[0] ? "startRange" : "endRange"), n < t && o === n.getTime() ? s.classList.add("startRange") : n > t && o === n.getTime() && s.classList.add("endRange"), 
                    o >= d && o <= u && s.classList.add("inRange");
                })(l, c);
            }
        }
    }
    function j() {
        !he.isOpen || he.config.static || he.config.inline || B();
    }
    function H(e) {
        if (he.isMobile) return e && (e.preventDefault(), e.target.blur()), setTimeout(function() {
            he.mobileInput.click();
        }, 0), void te("Open");
        he.isOpen || he._input.disabled || he.config.inline || (he.isOpen = !0, he.calendarContainer.classList.add("open"), 
        B(), he._input.classList.add("active"), te("Open"));
    }
    function R(e) {
        return function(t) {
            var n = he.config["_" + e + "Date"] = he.parseDate(t), a = he.config["_" + ("min" === e ? "max" : "min") + "Date"], i = t && n instanceof Date;
            i && (he[e + "DateHasTime"] = n.getHours() || n.getMinutes() || n.getSeconds()), 
            he.selectedDates && (he.selectedDates = he.selectedDates.filter(function(e) {
                return A(e);
            }), he.selectedDates.length || "min" !== e || r(n), oe()), he.daysContainer && (J(), 
            i ? he.currentYearElement[e] = n.getFullYear() : he.currentYearElement.removeAttribute(e), 
            he.currentYearElement.disabled = a && n && a.getFullYear() === n.getFullYear());
        };
    }
    function W() {
        var e = [ "utc", "wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile" ], t = [ "onChange", "onClose", "onDayCreate", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange" ];
        he.config = Object.create(Flatpickr.defaultConfig);
        var a = _extends({}, he.instanceConfig, JSON.parse(JSON.stringify(he.element.dataset || {})));
        he.config.parseDate = a.parseDate, he.config.formatDate = a.formatDate, _extends(he.config, a), 
        !a.dateFormat && a.enableTime && (he.config.dateFormat = he.config.noCalendar ? "H:i" + (he.config.enableSeconds ? ":S" : "") : Flatpickr.defaultConfig.dateFormat + " H:i" + (he.config.enableSeconds ? ":S" : "")), 
        a.altInput && a.enableTime && !a.altFormat && (he.config.altFormat = he.config.noCalendar ? "h:i" + (he.config.enableSeconds ? ":S K" : " K") : Flatpickr.defaultConfig.altFormat + " h:i" + (he.config.enableSeconds ? ":S" : "") + " K"), 
        Object.defineProperty(he.config, "minDate", {
            get: function() {
                return this._minDate;
            },
            set: R("min")
        }), Object.defineProperty(he.config, "maxDate", {
            get: function() {
                return this._maxDate;
            },
            set: R("max")
        }), he.config.minDate = a.minDate, he.config.maxDate = a.maxDate;
        for (var i = 0; i < e.length; i++) he.config[e[i]] = !0 === he.config[e[i]] || "true" === he.config[e[i]];
        for (var r = t.length; r--; ) void 0 !== he.config[t[r]] && (he.config[t[r]] = ue(he.config[t[r]] || []).map(n));
        for (var o = 0; o < he.config.plugins.length; o++) {
            var l = he.config.plugins[o](he) || {};
            for (var c in l) he.config[c] instanceof Array || ~t.indexOf(c) ? he.config[c] = ue(l[c]).map(n).concat(he.config[c]) : void 0 === a[c] && (he.config[c] = l[c]);
        }
        te("ParseConfig");
    }
    function U() {
        "object" !== _typeof(he.config.locale) && void 0 === Flatpickr.l10ns[he.config.locale] && console.warn("flatpickr: invalid locale " + he.config.locale), 
        he.l10n = _extends(Object.create(Flatpickr.l10ns.default), "object" === _typeof(he.config.locale) ? he.config.locale : "default" !== he.config.locale ? Flatpickr.l10ns[he.config.locale] || {} : {});
    }
    function B() {
        if (void 0 !== he.calendarContainer) {
            var e = he.calendarContainer.offsetHeight, t = he.calendarContainer.offsetWidth, n = he.config.position, a = he._positionElement.getBoundingClientRect(), i = window.innerHeight - a.bottom, r = "above" === n || "below" !== n && i < e && a.top > e, o = window.pageYOffset + a.top + (r ? -e - 2 : he._positionElement.offsetHeight + 2);
            if (fe(he.calendarContainer, "arrowTop", !r), fe(he.calendarContainer, "arrowBottom", r), 
            !he.config.inline) {
                var l = window.pageXOffset + a.left, c = window.document.body.offsetWidth - a.right, s = l + t > window.document.body.offsetWidth;
                fe(he.calendarContainer, "rightMost", s), he.config.static || (he.calendarContainer.style.top = o + "px", 
                s ? (he.calendarContainer.style.left = "auto", he.calendarContainer.style.right = c + "px") : (he.calendarContainer.style.left = l + "px", 
                he.calendarContainer.style.right = "auto"));
            }
        }
    }
    function J() {
        he.config.noCalendar || he.isMobile || (E(), re(), M());
    }
    function K(e) {
        if (e.preventDefault(), e.stopPropagation(), e.target.classList.contains("flatpickr-day") && !e.target.classList.contains("disabled") && !e.target.classList.contains("notAllowed")) {
            var t = he.latestSelectedDateObj = new Date(e.target.dateObj.getTime()), n = t.getMonth() !== he.currentMonth && "range" !== he.config.mode;
            if (he.selectedDateElem = e.target, "single" === he.config.mode) he.selectedDates = [ t ]; else if ("multiple" === he.config.mode) {
                var a = ae(t);
                a ? he.selectedDates.splice(a, 1) : he.selectedDates.push(t);
            } else "range" === he.config.mode && (2 === he.selectedDates.length && he.clear(), 
            he.selectedDates.push(t), 0 !== ge(t, he.selectedDates[0], !0) && he.selectedDates.sort(function(e, t) {
                return e.getTime() - t.getTime();
            }));
            if (i(), n) {
                var o = he.currentYear !== t.getFullYear();
                he.currentYear = t.getFullYear(), he.currentMonth = t.getMonth(), o && te("YearChange"), 
                te("MonthChange");
            }
            if (M(), he.minDateHasTime && he.config.enableTime && 0 === ge(t, he.config.minDate) && r(he.config.minDate), 
            oe(), he.config.enableTime && setTimeout(function() {
                return he.showTimeInput = !0;
            }, 50), "range" === he.config.mode && (1 === he.selectedDates.length ? (P(e.target), 
            he._hidePrevMonthArrow = he._hidePrevMonthArrow || he.minRangeDate > he.days.childNodes[0].dateObj, 
            he._hideNextMonthArrow = he._hideNextMonthArrow || he.maxRangeDate < new Date(he.currentYear, he.currentMonth + 1, 1)) : re()), 
            te("Change"), n ? b(function() {
                return he.selectedDateElem.focus();
            }) : w(e.target.$i, 0), he.config.enableTime && setTimeout(function() {
                return he.hourElement.select();
            }, 451), he.config.closeOnSelect) {
                var l = "single" === he.config.mode && !he.config.enableTime, c = "range" === he.config.mode && 2 === he.selectedDates.length && !he.config.enableTime;
                (l || c) && he.close();
            }
        }
    }
    function $(e, t) {
        he.config[e] = t, he.redraw(), g();
    }
    function z(e, t) {
        if (e instanceof Array) he.selectedDates = e.map(function(e) {
            return he.parseDate(e, t);
        }); else if (e instanceof Date || !isNaN(e)) he.selectedDates = [ he.parseDate(e, t) ]; else if (e && e.substring) switch (he.config.mode) {
          case "single":
            he.selectedDates = [ he.parseDate(e, t) ];
            break;

          case "multiple":
            he.selectedDates = e.split("; ").map(function(e) {
                return he.parseDate(e, t);
            });
            break;

          case "range":
            he.selectedDates = e.split(he.l10n.rangeSeparator).map(function(e) {
                return he.parseDate(e, t);
            });
        }
        he.selectedDates = he.selectedDates.filter(function(e) {
            return e instanceof Date && A(e, !1);
        }), he.selectedDates.sort(function(e, t) {
            return e.getTime() - t.getTime();
        });
    }
    function G(e, t, n) {
        if (!e) return he.clear(t);
        z(e, n), he.showTimeInput = he.selectedDates.length > 0, he.latestSelectedDateObj = he.selectedDates[0], 
        he.redraw(), g(), r(), oe(t), t && te("Change");
    }
    function V() {
        function e(e) {
            for (var t = e.length; t--; ) "string" == typeof e[t] || +e[t] ? e[t] = he.parseDate(e[t], null, !0) : e[t] && e[t].from && e[t].to && (e[t].from = he.parseDate(e[t].from), 
            e[t].to = he.parseDate(e[t].to));
            return e.filter(function(e) {
                return e;
            });
        }
        he.selectedDates = [], he.now = new Date(), he.config.disable.length && (he.config.disable = e(he.config.disable)), 
        he.config.enable.length && (he.config.enable = e(he.config.enable));
        var t = he.config.defaultDate || he.input.value;
        t && z(t, he.config.dateFormat);
        var n = he.selectedDates.length ? he.selectedDates[0] : he.config.minDate && he.config.minDate.getTime() > he.now ? he.config.minDate : he.config.maxDate && he.config.maxDate.getTime() < he.now ? he.config.maxDate : he.now;
        he.currentYear = n.getFullYear(), he.currentMonth = n.getMonth(), he.selectedDates.length && (he.latestSelectedDateObj = he.selectedDates[0]), 
        he.minDateHasTime = he.config.minDate && (he.config.minDate.getHours() || he.config.minDate.getMinutes() || he.config.minDate.getSeconds()), 
        he.maxDateHasTime = he.config.maxDate && (he.config.maxDate.getHours() || he.config.maxDate.getMinutes() || he.config.maxDate.getSeconds()), 
        Object.defineProperty(he, "latestSelectedDateObj", {
            get: function() {
                return he._selectedDateObj || he.selectedDates[he.selectedDates.length - 1];
            },
            set: function(e) {
                he._selectedDateObj = e;
            }
        }), he.isMobile || Object.defineProperty(he, "showTimeInput", {
            get: function() {
                return he._showTimeInput;
            },
            set: function(e) {
                he._showTimeInput = e, he.calendarContainer && fe(he.calendarContainer, "showTimeInput", e), 
                B();
            }
        });
    }
    function Z() {
        he.utils = {
            duration: {
                DAY: 864e5
            },
            getDaysinMonth: function(e, t) {
                return e = void 0 === e ? he.currentMonth : e, t = void 0 === t ? he.currentYear : t, 
                1 === e && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : he.l10n.daysInMonth[e];
            },
            monthToStr: function(e, t) {
                return t = void 0 === t ? he.config.shorthandCurrentMonth : t, he.l10n.months[(t ? "short" : "long") + "hand"][e];
            }
        };
    }
    function q() {
        [ "D", "F", "J", "M", "W", "l" ].forEach(function(e) {
            he.formats[e] = Flatpickr.prototype.formats[e].bind(he);
        }), he.revFormat.F = Flatpickr.prototype.revFormat.F.bind(he), he.revFormat.M = Flatpickr.prototype.revFormat.M.bind(he);
    }
    function Q() {
        if (he.input = he.config.wrap ? he.element.querySelector("[data-input]") : he.element, 
        !he.input) return console.warn("Error: invalid input element specified", he.input);
        he.input._type = he.input.type, he.input.type = "text", he.input.classList.add("flatpickr-input"), 
        he._input = he.input, he.config.altInput && (he.altInput = de(he.input.nodeName, he.input.className + " " + he.config.altInputClass), 
        he._input = he.altInput, he.altInput.placeholder = he.input.placeholder, he.altInput.disabled = he.input.disabled, 
        he.altInput.type = "text", he.input.type = "hidden", !he.config.static && he.input.parentNode && he.input.parentNode.insertBefore(he.altInput, he.input.nextSibling)), 
        he.config.allowInput || he._input.setAttribute("readonly", "readonly"), he._positionElement = he.config.positionElement || he._input;
    }
    function X() {
        var e = he.config.enableTime ? he.config.noCalendar ? "time" : "datetime-local" : "date";
        he.mobileInput = de("input", he.input.className + " flatpickr-mobile"), he.mobileInput.step = "any", 
        he.mobileInput.tabIndex = 1, he.mobileInput.type = e, he.mobileInput.disabled = he.input.disabled, 
        he.mobileInput.placeholder = he.input.placeholder, he.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", 
        he.selectedDates.length && (he.mobileInput.defaultValue = he.mobileInput.value = he.formatDate(he.selectedDates[0], he.mobileFormatStr)), 
        he.config.minDate && (he.mobileInput.min = he.formatDate(he.config.minDate, "Y-m-d")), 
        he.config.maxDate && (he.mobileInput.max = he.formatDate(he.config.maxDate, "Y-m-d")), 
        he.input.type = "hidden", he.config.altInput && (he.altInput.type = "hidden");
        try {
            he.input.parentNode.insertBefore(he.mobileInput, he.input.nextSibling);
        } catch (e) {}
        he.mobileInput.addEventListener("change", function(e) {
            he.setDate(e.target.value, !1, he.mobileFormatStr), te("Change"), te("Close");
        });
    }
    function ee() {
        if (he.isOpen) return he.close();
        he.open();
    }
    function te(e, t) {
        var n = he.config["on" + e];
        if (void 0 !== n && n.length > 0) for (var a = 0; n[a] && a < n.length; a++) n[a](he.selectedDates, he.input.value, he, t);
        "Change" === e && (he.input.dispatchEvent(ne("change")), he.input.dispatchEvent(ne("input")));
    }
    function ne(e) {
        return he._supportsEvents ? new Event(e, {
            bubbles: !0
        }) : (he._[e + "Event"] = document.createEvent("Event"), he._[e + "Event"].initEvent(e, !0, !0), 
        he._[e + "Event"]);
    }
    function ae(e) {
        for (var t = 0; t < he.selectedDates.length; t++) if (0 === ge(he.selectedDates[t], e)) return "" + t;
        return !1;
    }
    function ie(e) {
        return !("range" !== he.config.mode || he.selectedDates.length < 2) && (ge(e, he.selectedDates[0]) >= 0 && ge(e, he.selectedDates[1]) <= 0);
    }
    function re() {
        he.config.noCalendar || he.isMobile || !he.monthNav || (he.currentMonthElement.textContent = he.utils.monthToStr(he.currentMonth) + " ", 
        he.currentYearElement.value = he.currentYear, he._hidePrevMonthArrow = he.config.minDate && (he.currentYear === he.config.minDate.getFullYear() ? he.currentMonth <= he.config.minDate.getMonth() : he.currentYear < he.config.minDate.getFullYear()), 
        he._hideNextMonthArrow = he.config.maxDate && (he.currentYear === he.config.maxDate.getFullYear() ? he.currentMonth + 1 > he.config.maxDate.getMonth() : he.currentYear > he.config.maxDate.getFullYear()));
    }
    function oe(e) {
        if (!he.selectedDates.length) return he.clear(e);
        he.isMobile && (he.mobileInput.value = he.selectedDates.length ? he.formatDate(he.latestSelectedDateObj, he.mobileFormatStr) : "");
        var t = "range" !== he.config.mode ? "; " : he.l10n.rangeSeparator;
        he.input.value = he.selectedDates.map(function(e) {
            return he.formatDate(e, he.config.dateFormat);
        }).join(t), he.config.altInput && (he.altInput.value = he.selectedDates.map(function(e) {
            return he.formatDate(e, he.config.altFormat);
        }).join(t)), te("ValueUpdate");
    }
    function le(e) {
        return Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
    }
    function ce(e) {
        e.preventDefault();
        var t = he.currentYearElement.parentNode.contains(e.target);
        if (e.target === he.currentMonthElement || t) {
            var n = le(e);
            t ? (O(he.currentYear + n), e.target.value = he.currentYear) : he.changeMonth(n, !0, !1);
        }
    }
    function se(e) {
        var t = he.prevMonthNav.contains(e.target), n = he.nextMonthNav.contains(e.target);
        t || n ? N(t ? -1 : 1) : e.target === he.currentYearElement ? (e.preventDefault(), 
        he.currentYearElement.select()) : "arrowUp" === e.target.className ? he.changeYear(he.currentYear + 1) : "arrowDown" === e.target.className && he.changeYear(he.currentYear - 1);
    }
    function de(e, t, n) {
        var a = window.document.createElement(e);
        return t = t || "", n = n || "", a.className = t, void 0 !== n && (a.textContent = n), 
        a;
    }
    function ue(e) {
        return e instanceof Array ? e : [ e ];
    }
    function fe(e, t, n) {
        if (n) return e.classList.add(t);
        e.classList.remove(t);
    }
    function me(e, t, n) {
        var a = void 0;
        return function() {
            var i = this, r = arguments;
            clearTimeout(a), a = setTimeout(function() {
                a = null, n || e.apply(i, r);
            }, t), n && !a && e.apply(i, r);
        };
    }
    function ge(e, t, n) {
        return e instanceof Date && t instanceof Date && (!1 !== n ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime());
    }
    function pe(e) {
        e.preventDefault();
        var t = "keydown" === e.type, n = (e.type, e.type, e.target);
        if (he.amPM && e.target === he.amPM) return e.target.textContent = [ "AM", "PM" ]["AM" === e.target.textContent | 0];
        var a = Number(n.min), i = Number(n.max), r = Number(n.step), o = parseInt(n.value, 10), l = o + r * (e.delta || (t ? 38 === e.which ? 1 : -1 : Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0));
        if (void 0 !== n.value && 2 === n.value.length) {
            var c = n === he.hourElement, s = n === he.minuteElement;
            l < a ? (l = i + l + !c + (c && !he.amPM), s && h(null, -1, he.hourElement)) : l > i && (l = n === he.hourElement ? l - i - !he.amPM : a, 
            s && h(null, 1, he.hourElement)), he.amPM && c && (1 === r ? l + o === 23 : Math.abs(l - o) > r) && (he.amPM.textContent = "PM" === he.amPM.textContent ? "AM" : "PM"), 
            n.value = he.pad(l);
        }
    }
    var he = this;
    return he._ = {}, he._.afterDayAnim = b, he.changeMonth = N, he.changeYear = O, 
    he.clear = F, he.close = _, he._createElement = de, he.destroy = S, he.isEnabled = A, 
    he.jumpToDate = g, he.open = H, he.redraw = J, he.set = $, he.setDate = G, he.toggle = ee, 
    function() {
        he.element = he.input = e, he.instanceConfig = t || {}, he.parseDate = Flatpickr.prototype.parseDate.bind(he), 
        he.formatDate = Flatpickr.prototype.formatDate.bind(he), q(), W(), U(), Q(), V(), 
        Z(), he.isOpen = !1, he.isMobile = !he.config.disableMobile && !he.config.inline && "single" === he.config.mode && !he.config.disable.length && !he.config.enable.length && !he.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), 
        he.isMobile || v(), d(), (he.selectedDates.length || he.config.noCalendar) && (he.config.enableTime && r(he.config.noCalendar ? he.latestSelectedDateObj || he.config.minDate : null), 
        oe()), he.config.weekNumbers && (he.calendarContainer.style.width = he.daysContainer.offsetWidth + he.weekWrapper.offsetWidth + "px"), 
        he.showTimeInput = he.selectedDates.length > 0 || he.config.noCalendar, he.isMobile || B(), 
        te("Ready");
    }(), he;
}

function _flatpickr(e, t) {
    for (var n = Array.prototype.slice.call(e), a = [], i = 0; i < n.length; i++) try {
        n[i]._flatpickr = new Flatpickr(n[i], t || {}), a.push(n[i]._flatpickr);
    } catch (e) {
        console.warn(e, e.stack);
    }
    return 1 === a.length ? a[0] : a;
}

function flatpickr(e, t) {
    return _flatpickr(window.document.querySelectorAll(e), t);
}

var _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
}, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

Flatpickr.defaultConfig = {
    mode: "single",
    position: "auto",
    animate: -1 === window.navigator.userAgent.indexOf("MSIE"),
    utc: !1,
    wrap: !1,
    weekNumbers: !1,
    allowInput: !1,
    clickOpens: !0,
    closeOnSelect: !0,
    time_24hr: !1,
    enableTime: !1,
    noCalendar: !1,
    dateFormat: "Y-m-d",
    ariaDateFormat: "F j, Y",
    altInput: !1,
    altInputClass: "form-control input",
    altFormat: "F j, Y",
    defaultDate: null,
    minDate: null,
    maxDate: null,
    parseDate: null,
    formatDate: null,
    getWeek: function(e) {
        var t = new Date(e.getTime()), n = new Date(t.getFullYear(), 0, 1);
        return Math.ceil(((t - n) / 864e5 + n.getDay() + 1) / 7);
    },
    enable: [],
    disable: [],
    shorthandCurrentMonth: !1,
    inline: !1,
    static: !1,
    appendTo: null,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    enableSeconds: !1,
    hourIncrement: 1,
    minuteIncrement: 5,
    defaultHour: 12,
    defaultMinute: 0,
    disableMobile: !1,
    locale: "default",
    plugins: [],
    onClose: void 0,
    onChange: void 0,
    onDayCreate: void 0,
    onMonthChange: void 0,
    onOpen: void 0,
    onParseConfig: void 0,
    onReady: void 0,
    onValueUpdate: void 0,
    onYearChange: void 0,
    onKeyDown: void 0
}, Flatpickr.l10ns = {
    en: {
        weekdays: {
            shorthand: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            longhand: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
        },
        months: {
            shorthand: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            longhand: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
        },
        daysInMonth: [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ],
        firstDayOfWeek: 0,
        ordinal: function(e) {
            var t = e % 100;
            if (t > 3 && t < 21) return "th";
            switch (t % 10) {
              case 1:
                return "st";

              case 2:
                return "nd";

              case 3:
                return "rd";

              default:
                return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle"
    }
}, Flatpickr.l10ns.default = Object.create(Flatpickr.l10ns.en), Flatpickr.localize = function(e) {
    return _extends(Flatpickr.l10ns.default, e || {});
}, Flatpickr.setDefaults = function(e) {
    return _extends(Flatpickr.defaultConfig, e || {});
}, Flatpickr.prototype = {
    formats: {
        Z: function(e) {
            return e.toISOString();
        },
        D: function(e) {
            return this.l10n.weekdays.shorthand[this.formats.w(e)];
        },
        F: function(e) {
            return this.utils.monthToStr(this.formats.n(e) - 1, !1);
        },
        G: function(e) {
            return Flatpickr.prototype.pad(Flatpickr.prototype.formats.h(e));
        },
        H: function(e) {
            return Flatpickr.prototype.pad(e.getHours());
        },
        J: function(e) {
            return e.getDate() + this.l10n.ordinal(e.getDate());
        },
        K: function(e) {
            return e.getHours() > 11 ? "PM" : "AM";
        },
        M: function(e) {
            return this.utils.monthToStr(e.getMonth(), !0);
        },
        S: function(e) {
            return Flatpickr.prototype.pad(e.getSeconds());
        },
        U: function(e) {
            return e.getTime() / 1e3;
        },
        W: function(e) {
            return this.config.getWeek(e);
        },
        Y: function(e) {
            return e.getFullYear();
        },
        d: function(e) {
            return Flatpickr.prototype.pad(e.getDate());
        },
        h: function(e) {
            return e.getHours() % 12 ? e.getHours() % 12 : 12;
        },
        i: function(e) {
            return Flatpickr.prototype.pad(e.getMinutes());
        },
        j: function(e) {
            return e.getDate();
        },
        l: function(e) {
            return this.l10n.weekdays.longhand[e.getDay()];
        },
        m: function(e) {
            return Flatpickr.prototype.pad(e.getMonth() + 1);
        },
        n: function(e) {
            return e.getMonth() + 1;
        },
        s: function(e) {
            return e.getSeconds();
        },
        w: function(e) {
            return e.getDay();
        },
        y: function(e) {
            return String(e.getFullYear()).substring(2);
        }
    },
    formatDate: function(e, t) {
        var n = this;
        return void 0 !== this.config && void 0 !== this.config.formatDate ? this.config.formatDate(e, t) : t.split("").map(function(t, a, i) {
            return n.formats[t] && "\\" !== i[a - 1] ? n.formats[t](e) : "\\" !== t ? t : "";
        }).join("");
    },
    revFormat: {
        D: function() {},
        F: function(e, t) {
            e.setMonth(this.l10n.months.longhand.indexOf(t));
        },
        G: function(e, t) {
            e.setHours(parseFloat(t));
        },
        H: function(e, t) {
            e.setHours(parseFloat(t));
        },
        J: function(e, t) {
            e.setDate(parseFloat(t));
        },
        K: function(e, t) {
            var n = e.getHours();
            12 !== n && e.setHours(n % 12 + 12 * /pm/i.test(t));
        },
        M: function(e, t) {
            e.setMonth(this.l10n.months.shorthand.indexOf(t));
        },
        S: function(e, t) {
            e.setSeconds(t);
        },
        U: function(e, t) {
            return new Date(1e3 * parseFloat(t));
        },
        W: function(e, t) {
            return t = parseInt(t), new Date(e.getFullYear(), 0, 2 + 7 * (t - 1), 0, 0, 0, 0, 0);
        },
        Y: function(e, t) {
            e.setFullYear(t);
        },
        Z: function(e, t) {
            return new Date(t);
        },
        d: function(e, t) {
            e.setDate(parseFloat(t));
        },
        h: function(e, t) {
            e.setHours(parseFloat(t));
        },
        i: function(e, t) {
            e.setMinutes(parseFloat(t));
        },
        j: function(e, t) {
            e.setDate(parseFloat(t));
        },
        l: function() {},
        m: function(e, t) {
            e.setMonth(parseFloat(t) - 1);
        },
        n: function(e, t) {
            e.setMonth(parseFloat(t) - 1);
        },
        s: function(e, t) {
            e.setSeconds(parseFloat(t));
        },
        w: function() {},
        y: function(e, t) {
            e.setFullYear(2e3 + parseFloat(t));
        }
    },
    tokenRegex: {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "(\\w+)",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    },
    pad: function(e) {
        return ("0" + e).slice(-2);
    },
    parseDate: function(e, t, n) {
        if (!e) return null;
        var a = e;
        if (e instanceof Date) (e = new Date(e.getTime())).fp_isUTC = a.fp_isUTC; else if (void 0 !== e.toFixed) e = new Date(e); else {
            var i = t || (this.config || Flatpickr.defaultConfig).dateFormat;
            if ("today" === (e = String(e).trim())) e = new Date(), n = !0; else if (/Z$/.test(e) || /GMT$/.test(e)) e = new Date(e); else if (this.config && this.config.parseDate) e = this.config.parseDate(e, i); else {
                for (var r = this.config && this.config.noCalendar ? new Date(new Date().setHours(0, 0, 0, 0)) : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0), o = void 0, l = 0, c = 0, s = ""; l < i.length; l++) {
                    var d = i[l], u = "\\" === d, f = "\\" === i[l - 1] || u;
                    if (this.tokenRegex[d] && !f) {
                        s += this.tokenRegex[d];
                        var m = new RegExp(s).exec(e);
                        m && (o = !0) && (r = this.revFormat[d](r, m[++c]) || r);
                    } else u || (s += ".");
                }
                e = o ? r : null;
            }
        }
        return e instanceof Date ? (this.config && this.config.utc && !e.fp_isUTC && (e = e.fp_toUTC()), 
        !0 === n && e.setHours(0, 0, 0, 0), e) : (console.warn("flatpickr: invalid date " + a), 
        console.info(this.element), null);
    }
}, "undefined" != typeof HTMLElement && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
    return _flatpickr(this, e);
}, HTMLElement.prototype.flatpickr = function(e) {
    return _flatpickr([ this ], e);
}), "undefined" != typeof jQuery && (jQuery.fn.flatpickr = function(e) {
    return _flatpickr(this, e);
}), Date.prototype.fp_incr = function(e) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(e, 10));
}, Date.prototype.fp_isUTC = !1, Date.prototype.fp_toUTC = function() {
    var e = new Date(this.getUTCFullYear(), this.getUTCMonth(), this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds());
    return e.fp_isUTC = !0, e;
}, "undefined" != typeof module && (module.exports = Flatpickr);

(function($) {
    var o = $({});
    $.subscribe = function() {
        o.on.apply(o, arguments);
    };
    $.unsubscribe = function() {
        o.off.apply(o, arguments);
    };
    $.publish = function() {
        o.trigger.apply(o, arguments);
    };
})(jQuery);

(function($, window) {
    "use strict";
    var numberRegex = /^-?\d*\.?\d*$/, objectRegex = /^[[{]/;
    function deserializeValue(value) {
        try {
            return !value ? value : value === "true" || (value === "false" ? false : value === "null" ? null : numberRegex.test(value) ? +value : objectRegex.test(value) ? JSON.parse(value) : value);
        } catch (e) {
            return value;
        }
    }
    function PluginBase(name, element, options) {
        var me = this;
        me._name = name;
        me.$el = $(element);
        me.opts = $.extend({}, me.defaults || {}, options);
        me.eventSuffix = "." + name;
        me._events = [];
        $.expr.pseudos["plugin-" + name.toLowerCase()] = function(elem) {
            return !!$.data(elem, "plugin_" + name);
        };
        me.init(element, options);
        $.publish("plugin/" + name + "/onInit", [ me ]);
    }
    PluginBase.prototype = {
        init: function() {
            throw new Error("Plugin " + this.getName() + " has to have an init function!");
        },
        destroy: function() {
            if (typeof console !== "undefined" && typeof console.warn === "function") {
                console.warn("Plugin " + this.getName() + " should have a custom destroy method!");
            }
            this._destroy();
        },
        update: function() {},
        _destroy: function() {
            var me = this, name = me.getName();
            $.each(me._events, function(i, obj) {
                if (typeof obj === "object") {
                    obj.el.off(obj.event);
                }
            });
            $.each(me.opts, function(o) {
                delete me.opts[o];
            });
            me.$el.removeData("plugin_" + name);
            $.publish("plugin/" + name + "/onDestroy", [ me ]);
            return me;
        },
        _on: function() {
            var me = this, $el = $(arguments[0]), event = me.getEventName(arguments[1]), args = Array.prototype.slice.call(arguments, 2);
            me._events.push({
                el: $el,
                event: event
            });
            args.unshift(event);
            $el.on.apply($el, args);
            $.publish("plugin/" + me._name + "/onRegisterEvent", [ $el, event ]);
            return me;
        },
        _off: function(element, event) {
            var me = this, events = me._events, pluginEvent = me.getEventName(event), eventIds = [], $element = $(element), filteredEvents = $.grep(events, function(obj, index) {
                eventIds.push(index);
                return typeof obj !== "undefined" && pluginEvent === obj.event && $element[0] === obj.el[0];
            });
            $.each(filteredEvents, function(index, event) {
                $element.off(event.event);
            });
            $.each(eventIds, function(id) {
                if (!events[id]) {
                    return;
                }
                delete events[id];
            });
            $.publish("plugin/" + me._name + "/onRemoveEvent", [ $element, event ]);
            return me;
        },
        getName: function() {
            return this._name;
        },
        getEventName: function(event) {
            var suffix = this.eventSuffix, parts = event.split(" "), len = parts.length, i = 0;
            for (;i < len; i++) {
                parts[i] += suffix;
            }
            return parts.join(" ");
        },
        getElement: function() {
            return this.$el;
        },
        getOptions: function() {
            return $.extend({}, this.opts);
        },
        getOption: function(key) {
            return this.opts[key];
        },
        setOption: function(key, value) {
            var me = this;
            me.opts[key] = value;
            return me;
        },
        applyDataAttributes: function(shouldDeserialize, ignoreList) {
            var me = this, attr;
            ignoreList = ignoreList || [];
            $.each(me.opts, function(key) {
                if (ignoreList.indexOf(key) !== -1) {
                    return;
                }
                attr = me.$el.attr("data-" + key);
                if (typeof attr === "undefined") {
                    return true;
                }
                me.opts[key] = shouldDeserialize !== false ? deserializeValue(attr) : attr;
                return true;
            });
            $.publish("plugin/" + me._name + "/onDataAttributes", [ me.$el, me.opts ]);
            return me.opts;
        },
        safeURIDecode: function(value) {
            try {
                return decodeURIComponent(value);
            } catch (e) {
                return value;
            }
        }
    };
    $.PluginBase = PluginBase;
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F();
        };
    }
    $.plugin = function(name, plugin) {
        var pluginFn = function(options) {
            return this.each(function() {
                var element = this, pluginData = $.data(element, "plugin_" + name);
                if (!pluginData) {
                    if (typeof plugin === "function") {
                        pluginData = new plugin(name, element, options);
                    } else {
                        var Plugin = function() {
                            PluginBase.call(this, name, element, options);
                        };
                        Plugin.prototype = $.extend(Object.create(PluginBase.prototype), {
                            constructor: Plugin
                        }, plugin);
                        pluginData = new Plugin();
                    }
                    $.data(element, "plugin_" + name, pluginData);
                }
            });
        };
        window.PluginsCollection = window.PluginsCollection || {};
        window.PluginsCollection[name] = plugin;
        $.fn[name] = pluginFn;
    };
    $.overridePlugin = function(pluginName, override) {
        var overridePlugin = window.PluginsCollection[pluginName];
        if (typeof overridePlugin !== "object" || typeof override !== "object") {
            return false;
        }
        $.fn[pluginName] = function(options) {
            return this.each(function() {
                var element = this, pluginData = $.data(element, "plugin_" + pluginName);
                if (!pluginData) {
                    var Plugin = function() {
                        PluginBase.call(this, pluginName, element, options);
                    };
                    Plugin.prototype = $.extend(Object.create(PluginBase.prototype), {
                        constructor: Plugin,
                        superclass: overridePlugin
                    }, overridePlugin, override);
                    pluginData = new Plugin();
                    $.data(element, "plugin_" + pluginName, pluginData);
                }
            });
        };
    };
})(jQuery, window);

(function($, window, document) {
    "use strict";
    var $html = $("html"), vendorPropertyDiv = document.createElement("div"), vendorPrefixes = [ "webkit", "moz", "ms", "o" ];
    function hasCookiesAllowed() {
        if (window.cookieRemoval === 0) {
            return true;
        }
        if (window.cookieRemoval === 1) {
            if (document.cookie.indexOf("cookiePreferences") !== -1) {
                return true;
            }
            return document.cookie.indexOf("cookieDeclined") === -1;
        }
        return document.cookie.indexOf("allowCookie") !== -1;
    }
    function isDeviceCookieAllowed() {
        var cookiesAllowed = hasCookiesAllowed();
        if (window.cookieRemoval !== 1) {
            return cookiesAllowed;
        }
        return cookiesAllowed && document.cookie.indexOf('"name":"x-ua-device","active":true') !== -1;
    }
    function EventEmitter() {
        var me = this;
        me._events = {};
    }
    EventEmitter.prototype = {
        constructor: EventEmitter,
        name: "EventEmitter",
        on: function(eventName, callback, context) {
            var me = this, events = me._events || (me._events = {}), event = events[eventName] || (events[eventName] = []);
            event.push({
                callback: callback,
                context: context || me
            });
            return me;
        },
        once: function(eventName, callback, context) {
            var me = this, once = function() {
                me.off(eventName, once, context);
                callback.apply(me, arguments);
            };
            return me.on(eventName, once, context);
        },
        off: function(eventName, callback, context) {
            var me = this, events = me._events || (me._events = {}), eventNames = eventName ? [ eventName ] : Object.keys(events), eventList, event, name, len, i, j;
            for (i = 0, len = eventNames.length; i < len; i++) {
                name = eventNames[i];
                eventList = events[name];
                if (!eventList) {
                    return me;
                }
                if (!callback && !context) {
                    eventList.length = 0;
                    delete events[name];
                    continue;
                }
                for (j = eventList.length - 1; j >= 0; j--) {
                    event = eventList[j];
                    if (callback && callback !== event.callback || context && context !== event.context) {
                        continue;
                    }
                    eventList.splice(j, 1);
                }
            }
            return me;
        },
        trigger: function(eventName) {
            var me = this, events = me._events || (me._events = {}), eventList = events[eventName], event, args, a1, a2, a3, len, i;
            if (!eventList) {
                return me;
            }
            args = Array.prototype.slice.call(arguments, 1);
            len = eventList.length;
            i = -1;
            if (args.length <= 3) {
                a1 = args[0];
                a2 = args[1];
                a3 = args[2];
            }
            switch (args.length) {
              case 0:
                while (++i < len) (event = eventList[i]).callback.call(event.context);
                return me;

              case 1:
                while (++i < len) (event = eventList[i]).callback.call(event.context, a1);
                return me;

              case 2:
                while (++i < len) (event = eventList[i]).callback.call(event.context, a1, a2);
                return me;

              case 3:
                while (++i < len) (event = eventList[i]).callback.call(event.context, a1, a2, a3);
                return me;

              default:
                while (++i < len) (event = eventList[i]).callback.apply(event.context, args);
                return me;
            }
        },
        destroy: function() {
            this.off();
        }
    };
    window.StateManager = $.extend(Object.create(EventEmitter.prototype), {
        EventEmitter: EventEmitter,
        _breakpoints: [],
        _listeners: [],
        _plugins: {},
        _pluginQueue: {},
        _pluginsInitialized: false,
        _currentState: "",
        _previousState: "",
        _viewportWidth: 0,
        _vendorPropertyCache: {},
        init: function(breakpoints) {
            var me = this;
            me._viewportWidth = me.getViewportWidth();
            me._baseFontSize = parseInt($html.css("font-size"));
            me.registerBreakpoint(breakpoints);
            me._checkResize();
            me._browserDetection();
            me._setDeviceCookie();
            $($.proxy(me.initQueuedPlugins, me, true));
            $.publish("StateManager/onInit", [ me ]);
            return me;
        },
        registerBreakpoint: function(breakpoint) {
            var me = this, breakpoints = breakpoint instanceof Array ? breakpoint : Array.prototype.slice.call(arguments), len = breakpoints.length, i = 0;
            for (;i < len; i++) {
                me._addBreakpoint(breakpoints[i]);
            }
            return me;
        },
        _addBreakpoint: function(breakpoint) {
            var me = this, breakpoints = me._breakpoints, existingBreakpoint, state = breakpoint.state, enter = me._convertRemValue(breakpoint.enter), exit = me._convertRemValue(breakpoint.exit), len = breakpoints.length, i = 0;
            breakpoint.enter = enter;
            breakpoint.exit = exit;
            for (;i < len; i++) {
                existingBreakpoint = breakpoints[i];
                if (existingBreakpoint.state === state) {
                    throw new Error('Multiple breakpoints of state "' + state + '" detected.');
                }
                if (existingBreakpoint.enter <= exit && enter <= existingBreakpoint.exit) {
                    throw new Error('Breakpoint range of state "' + state + '" overlaps state "' + existingBreakpoint.state + '".');
                }
            }
            breakpoints.push(breakpoint);
            me._plugins[state] = {};
            me._checkBreakpoint(breakpoint, me._viewportWidth);
            return me;
        },
        _convertRemValue: function(remValue) {
            var me = this, baseFontSize = me._baseFontSize;
            return remValue * baseFontSize;
        },
        removeBreakpoint: function(state) {
            var me = this, breakpoints = me._breakpoints, len = breakpoints.length, i = 0;
            if (typeof state !== "string") {
                return me;
            }
            for (;i < len; i++) {
                if (state !== breakpoints[i].state) {
                    continue;
                }
                breakpoints.splice(i, 1);
                return me._removeStatePlugins(state);
            }
            return me;
        },
        _removeStatePlugins: function(state) {
            var me = this, plugins = me._plugins[state], selectors = Object.keys(plugins), selectorLen = selectors.length, pluginNames, pluginLen, i, j;
            for (i = 0; i < selectorLen; i++) {
                pluginNames = Object.keys(plugins[selectors[i]]);
                for (j = 0, pluginLen = pluginNames.length; j < pluginLen; j++) {
                    me.destroyPlugin(selectors[i], pluginNames[j]);
                }
            }
            delete plugins[state];
            return me;
        },
        registerListener: function(listener) {
            var me = this, listenerArr = listener instanceof Array ? listener : Array.prototype.slice.call(arguments), len = listenerArr.length, i = 0;
            for (;i < len; i++) {
                me._addListener(listenerArr[i]);
            }
            return me;
        },
        _addListener: function(listener) {
            var me = this, listeners = me._listeners, enterFn = listener.enter;
            listeners.push(listener);
            if ((listener.state === me._currentState || listener.state === "*") && typeof enterFn === "function") {
                enterFn({
                    exiting: me._previousState,
                    entering: me._currentState
                });
            }
            return me;
        },
        addPlugin: function(selector, pluginName, config, viewport) {
            var me = this, pluginsInitialized = me._pluginsInitialized, breakpoints = me._breakpoints, currentState = me._currentState, len, i;
            if (typeof config === "string" || config instanceof Array) {
                viewport = config;
                config = {};
            }
            if (typeof viewport === "string") {
                viewport = [ viewport ];
            }
            if (!(viewport instanceof Array)) {
                viewport = [];
                for (i = 0, len = breakpoints.length; i < len; i++) {
                    viewport.push(breakpoints[i].state);
                }
            }
            for (i = 0, len = viewport.length; i < len; i++) {
                me._addPluginOption(viewport[i], selector, pluginName, config);
                if (currentState !== viewport[i]) {
                    continue;
                }
                if (pluginsInitialized) {
                    me._initPlugin(selector, pluginName);
                    continue;
                }
                me.addPluginToQueue(selector, pluginName);
            }
            return me;
        },
        removePlugin: function(selector, pluginName, viewport) {
            var me = this, breakpoints = me._breakpoints, plugins = me._plugins, state, sel, len, i;
            if (typeof viewport === "string") {
                viewport = [ viewport ];
            }
            if (!(viewport instanceof Array)) {
                viewport = [];
                for (i = 0, len = breakpoints.length; i < len; i++) {
                    viewport.push(breakpoints[i].state);
                }
            }
            for (i = 0, len = viewport.length; i < len; i++) {
                if (!(state = plugins[viewport[i]])) {
                    continue;
                }
                if (!(sel = state[selector])) {
                    continue;
                }
                delete sel[pluginName];
            }
            if (!me._pluginsInitialized) {
                me.removePluginFromQueue(selector, pluginName);
            }
            return me;
        },
        updatePlugin: function(selector, pluginName) {
            var me = this, state = me._currentState, pluginConfigs = me._plugins[state][selector] || {}, pluginNames = typeof pluginName === "string" ? [ pluginName ] : Object.keys(pluginConfigs), len = pluginNames.length, i = 0;
            for (;i < len; i++) {
                me._initPlugin(selector, pluginNames[i]);
            }
            return me;
        },
        _addPluginOption: function(state, selector, pluginName, config) {
            var me = this, plugins = me._plugins, selectors = plugins[state] || (plugins[state] = {}), configs = selectors[selector] || (selectors[selector] = {}), pluginConfig = configs[pluginName];
            configs[pluginName] = $.extend(pluginConfig || {}, config);
        },
        _initPlugin: function(selector, pluginName) {
            var me = this, $el = $(selector);
            if ($el.length > 1) {
                $.each($el, function() {
                    me._initSinglePlugin($(this), selector, pluginName);
                });
                return;
            }
            me._initSinglePlugin($el, selector, pluginName);
        },
        addPluginToQueue: function(selector, pluginName) {
            var me = this, queue = me._pluginQueue, pluginNames = queue[selector] || (queue[selector] = []);
            if (pluginNames.indexOf(pluginName) === -1) {
                pluginNames.push(pluginName);
            }
        },
        removePluginFromQueue: function(selector, pluginName) {
            var me = this, queue = me._pluginQueue, pluginNames = queue[selector], index;
            if (pluginNames && (index = pluginNames.indexOf(pluginName)) !== -1) {
                pluginNames.splice(index, 1);
            }
        },
        initQueuedPlugins: function(clearQueue) {
            var me = this, queue = me._pluginQueue, selectors = Object.keys(queue), selectorLen = selectors.length, i = 0, selector, plugins, pluginLen, j;
            for (;i < selectorLen; i++) {
                selector = selectors[i];
                plugins = queue[selector];
                for (j = 0, pluginLen = plugins.length; j < pluginLen; j++) {
                    me._initPlugin(selector, plugins[j]);
                }
                if (clearQueue !== false) {
                    delete queue[selector];
                }
            }
            me._pluginsInitialized = true;
        },
        _initSinglePlugin: function(element, selector, pluginName) {
            var me = this, currentConfig = me._getPluginConfig(me._currentState, selector, pluginName), plugin = element.data("plugin_" + pluginName);
            if (!plugin) {
                if (!element[pluginName]) {
                    console.error('Plugin "' + pluginName + '" is not a valid jQuery-plugin!');
                    return;
                }
                element[pluginName](currentConfig);
                return;
            }
            if (JSON.stringify(currentConfig) === JSON.stringify(me._getPluginConfig(me._previousState, selector, pluginName))) {
                if (typeof plugin.update === "function") {
                    plugin.update(me._currentState, me._previousState);
                }
                return;
            }
            me.destroyPlugin(element, pluginName);
            element[pluginName](currentConfig);
        },
        _getPluginConfig: function(state, selector, plugin) {
            var selectors = this._plugins[state] || {}, pluginConfigs = selectors[selector] || {};
            return pluginConfigs[plugin] || {};
        },
        _checkResize: function() {
            var me = this, width = me.getViewportWidth();
            if (width !== me._viewportWidth) {
                me._checkBreakpoints(width);
                me.trigger("resize", width);
                me._setDeviceCookie();
            }
            me._viewportWidth = width;
            me.requestAnimationFrame(me._checkResize.bind(me));
        },
        _checkBreakpoints: function(width) {
            var me = this, checkWidth = width || me.getViewportWidth(), breakpoints = me._breakpoints, len = breakpoints.length, i = 0;
            for (;i < len; i++) {
                me._checkBreakpoint(breakpoints[i], checkWidth);
            }
            return me;
        },
        _checkBreakpoint: function(breakpoint, width) {
            var me = this, checkWidth = width || me.getViewportWidth(), enterWidth = ~~breakpoint.enter, exitWidth = ~~breakpoint.exit, state = breakpoint.state;
            if (state !== me._currentState && checkWidth >= enterWidth && checkWidth <= exitWidth) {
                me._changeBreakpoint(state);
            }
        },
        _changeBreakpoint: function(state) {
            var me = this, previousState = me._previousState = me._currentState, currentState = me._currentState = state;
            return me.trigger("exitBreakpoint", previousState).trigger("changeBreakpoint", {
                entering: currentState,
                exiting: previousState
            }).trigger("enterBreakpoint", currentState)._switchListener(previousState, currentState)._switchPlugins(previousState, currentState);
        },
        _switchListener: function(fromState, toState) {
            var me = this, previousListeners = me._getBreakpointListeners(fromState), currentListeners = me._getBreakpointListeners(toState), eventObj = {
                exiting: fromState,
                entering: toState
            }, callFn, len, i;
            for (i = 0, len = previousListeners.length; i < len; i++) {
                if (typeof (callFn = previousListeners[i].exit) === "function") {
                    callFn(eventObj);
                }
            }
            for (i = 0, len = currentListeners.length; i < len; i++) {
                if (typeof (callFn = currentListeners[i].enter) === "function") {
                    callFn(eventObj);
                }
            }
            return me;
        },
        _getBreakpointListeners: function(state) {
            var me = this, listeners = me._listeners, breakpointListeners = [], len = listeners.length, i = 0, listenerType;
            for (;i < len; i++) {
                if ((listenerType = listeners[i].state) === state || listenerType === "*") {
                    breakpointListeners.push(listeners[i]);
                }
            }
            return breakpointListeners;
        },
        _switchPlugins: function(fromState, toState) {
            var me = this, plugins = me._plugins, fromSelectors = plugins[fromState] || {}, fromKeys = Object.keys(fromSelectors), selector, oldPluginConfigs, newPluginConfigs, configKeys, pluginName, plugin, $el, toSelectors = plugins[toState] || {}, toKeys = Object.keys(toSelectors), lenKeys, lenConfig, lenEl, x, y, z;
            for (x = 0, lenKeys = fromKeys.length; x < lenKeys; x++) {
                selector = fromKeys[x];
                oldPluginConfigs = fromSelectors[selector];
                $el = $(selector);
                if (!oldPluginConfigs || !(lenEl = $el.length)) {
                    continue;
                }
                newPluginConfigs = toSelectors[selector];
                configKeys = Object.keys(oldPluginConfigs);
                for (y = 0, lenConfig = configKeys.length; y < lenConfig; y++) {
                    pluginName = configKeys[y];
                    if (!newPluginConfigs || !newPluginConfigs[pluginName]) {
                        me.destroyPlugin($el, pluginName);
                        continue;
                    }
                    if (JSON.stringify(newPluginConfigs[pluginName]) === JSON.stringify(oldPluginConfigs[pluginName])) {
                        for (z = 0; z < lenEl; z++) {
                            if (!(plugin = $($el[z]).data("plugin_" + pluginName))) {
                                continue;
                            }
                            if (typeof plugin.update === "function") {
                                plugin.update(fromState, toState);
                            }
                        }
                        continue;
                    }
                    me.destroyPlugin($el, pluginName);
                }
            }
            for (x = 0, lenKeys = toKeys.length; x < lenKeys; x++) {
                selector = toKeys[x];
                newPluginConfigs = toSelectors[selector];
                $el = $(selector);
                if (!newPluginConfigs || !$el.length) {
                    continue;
                }
                configKeys = Object.keys(newPluginConfigs);
                for (y = 0, lenConfig = configKeys.length; y < lenConfig; y++) {
                    pluginName = configKeys[y];
                    if (!$el.data("plugin_" + pluginName)) {
                        $el[pluginName](newPluginConfigs[pluginName]);
                    }
                }
            }
            return me;
        },
        destroyPlugin: function(selector, pluginName) {
            var $el = typeof selector === "string" ? $(selector) : selector, name = "plugin_" + pluginName, len = $el.length, i = 0, $currentEl, plugin;
            if (!len) {
                return this;
            }
            for (;i < len; i++) {
                $currentEl = $($el[i]);
                if (plugin = $currentEl.data(name)) {
                    plugin.destroy();
                    $currentEl.removeData(name);
                }
            }
            return this;
        },
        getViewportWidth: function() {
            var width = window.innerWidth;
            if (typeof width === "number") {
                return width;
            }
            return (width = document.documentElement.clientWidth) !== 0 ? width : document.body.clientWidth;
        },
        getViewportHeight: function() {
            var height = window.innerHeight;
            if (typeof height === "number") {
                return height;
            }
            return (height = document.documentElement.clientHeight) !== 0 ? height : document.body.clientHeight;
        },
        getPreviousState: function() {
            return this._previousState;
        },
        isPreviousState: function(state) {
            var states = state instanceof Array ? state : Array.prototype.slice.call(arguments), previousState = this._previousState, len = states.length, i = 0;
            for (;i < len; i++) {
                if (previousState === states[i]) {
                    return true;
                }
            }
            return false;
        },
        getCurrentState: function() {
            return this._currentState;
        },
        isCurrentState: function(state) {
            var states = state instanceof Array ? state : Array.prototype.slice.call(arguments), currentState = this._currentState, len = states.length, i = 0;
            for (;i < len; i++) {
                if (currentState === states[i]) {
                    return true;
                }
            }
            return false;
        },
        isPortraitMode: function() {
            return !!this.matchMedia("(orientation: portrait)").matches;
        },
        isLandscapeMode: function() {
            return !!this.matchMedia("(orientation: landscape)").matches;
        },
        getDevicePixelRatio: function() {
            return window.devicePixelRatio || 1;
        },
        isBrowser: function(browser) {
            var regEx = new RegExp(browser.toLowerCase(), "i");
            return this._checkUserAgent(regEx);
        },
        _checkUserAgent: function(regEx) {
            return !!navigator.userAgent.toLowerCase().match(regEx);
        },
        _browserDetection: function() {
            var me = this, detections = {};
            detections["is--edge"] = me._checkUserAgent(/edge\//);
            detections["is--opera"] = me._checkUserAgent(/opera/);
            detections["is--chrome"] = !detections["is--edge"] && me._checkUserAgent(/\bchrome\b/);
            detections["is--firefox"] = me._checkUserAgent(/firefox/);
            detections["is--webkit"] = !detections["is--edge"] && me._checkUserAgent(/webkit/);
            detections["is--safari"] = !detections["is--edge"] && !detections["is--chrome"] && me._checkUserAgent(/safari/) && me._checkUserAgent(/trident/);
            detections["is--ie"] = !detections["is--opera"] && (me._checkUserAgent(/msie/) || me._checkUserAgent(/trident\/7/));
            detections["is--ie-touch"] = detections["is--ie"] && me._checkUserAgent(/touch/);
            detections["is--gecko"] = !detections["is--webkit"] && me._checkUserAgent(/gecko/);
            $.each(detections, function(key, value) {
                if (value) $html.addClass(key);
            });
        },
        hasCookiesAllowed: hasCookiesAllowed,
        _getCurrentDevice: function() {
            var i = 0, width = this.getViewportWidth(), device = "desktop", devices = window.statisticDevices || [];
            for (;i < devices.length; i++) {
                if (width >= ~~devices[i].enter && width <= ~~devices[i].exit) {
                    device = devices[i].device;
                }
            }
            return device;
        },
        _setDeviceCookie: function() {
            if (!isDeviceCookieAllowed()) {
                return;
            }
            var device = this._getCurrentDevice(), cookieString = "x-ua-device=" + device + "; path=/";
            if (window.secureShop !== undefined && window.secureShop === true) {
                cookieString = "x-ua-device=" + device + ";secure; path=/";
            }
            document.cookie = cookieString;
        },
        _getScrollBarSize: function() {
            var cache;
            var getSize = function() {
                var $el = $("<div>", {
                    css: {
                        width: 100,
                        height: 100,
                        overflow: "scroll",
                        position: "absolute",
                        top: -9999
                    }
                }), el = $el[0], width, height;
                $("body").append($el);
                width = el.offsetWidth - el.clientWidth;
                height = el.offsetHeight - el.clientHeight;
                $($el).remove();
                return {
                    width: width,
                    height: height
                };
            };
            return function() {
                if (!cache) {
                    cache = getSize();
                }
                return cache;
            };
        }(),
        getScrollBarSize: function() {
            return $.extend({}, this._getScrollBarSize());
        },
        getScrollBarWidth: function() {
            return this._getScrollBarSize().width;
        },
        getScrollBarHeight: function() {
            return this._getScrollBarSize().height;
        },
        matchMedia: window.matchMedia.bind(window),
        requestAnimationFrame: window.requestAnimationFrame.bind(window),
        cancelAnimationFrame: window.cancelAnimationFrame.bind(window),
        getVendorProperty: function(property, softError) {
            var cache = this._vendorPropertyCache, style = vendorPropertyDiv.style;
            if (cache[property]) {
                return cache[property];
            }
            if (property in style) {
                return cache[property] = property;
            }
            var prop = property.charAt(0).toUpperCase() + property.substr(1), len = vendorPrefixes.length, i = 0, vendorProp;
            for (;i < len; i++) {
                vendorProp = vendorPrefixes[i] + prop;
                if (vendorProp in style) {
                    return cache[property] = vendorProp;
                }
            }
            return cache[property] = softError ? property : null;
        }
    });
})(jQuery, window, document);

(function(window, document) {
    "use strict";
    window.StorageManager = function() {
        var storage = {}, p;
        var enableBlackHoleStorage = function() {
            var blackHoleStorage = {
                length: 0,
                clear: function() {},
                getItem: function() {
                    return null;
                },
                key: function() {
                    return null;
                },
                removeItem: function() {
                    return null;
                },
                setItem: function() {
                    return null;
                }
            };
            storage = {
                local: blackHoleStorage,
                session: blackHoleStorage
            };
        };
        try {
            if (window.StateManager.hasCookiesAllowed()) {
                storage = {
                    local: window.localStorage,
                    session: window.sessionStorage
                };
            } else {
                enableBlackHoleStorage();
            }
        } catch (err) {
            enableBlackHoleStorage();
        }
        function hasCookiesSupport() {
            if ("cookie" in document && document.cookie.length > 0) {
                return true;
            }
            document.cookie = "testcookie=1;";
            var writeTest = document.cookie.indexOf("testcookie") !== -1;
            document.cookie = "testcookie=1" + ";expires=Sat, 01-Jan-2000 00:00:00 GMT";
            return writeTest;
        }
        for (p in storage) {
            if (!storage.hasOwnProperty(p)) {
                continue;
            }
            try {
                storage[p].setItem("storage", "");
                storage[p].removeItem("storage");
            } catch (err) {}
        }
        return {
            getStorage: function(type) {
                return storage[type];
            },
            getSessionStorage: function() {
                return this.getStorage("session");
            },
            getLocalStorage: function() {
                return this.getStorage("local");
            },
            clear: function(type) {
                this.getStorage(type).clear();
            },
            getItem: function(type, key) {
                return this.getStorage(type).getItem(key);
            },
            key: function(type, i) {
                return this.getStorage(type).key(i);
            },
            removeItem: function(type, key) {
                this.getStorage(type).removeItem(key);
            },
            setItem: function(type, key, value) {
                this.getStorage(type).setItem(key, value);
            },
            hasCookiesSupport: hasCookiesSupport()
        };
    }();
})(window, document);

(function($) {
    "use strict";
    var $html = $("html");
    $.plugin("swOffcanvasMenu", {
        defaults: {
            wrapSelector: ".page-wrap",
            moveWrapper: false,
            offCanvasSelector: ".sidebar-main",
            closeButtonSelector: ".entry--close-off-canvas",
            direction: "fromLeft",
            offCanvasElementCls: "off-canvas",
            leftMenuCls: "is--left",
            rightMenuCls: "is--right",
            activeMenuCls: "is--active",
            openClass: "is--open",
            fullscreen: false,
            fullscreenCls: "is--full-screen",
            disableTransitions: false,
            disableTransitionCls: "no--transitions",
            mode: "local",
            ajaxURL: ""
        },
        init: function() {
            var me = this, opts = me.opts, themeConfig = window.themeConfig, $offCanvas;
            opts.moveWrapper = opts.moveWrapper || !!(themeConfig && !~~themeConfig.offcanvasOverlayPage);
            me.applyDataAttributes();
            me.$pageWrap = $(opts.wrapSelector);
            me.isOpened = false;
            if (opts.mode === "ajax") {
                $offCanvas = me.$offCanvas = $("<div>", {
                    class: opts.offCanvasElementCls
                }).appendTo("body");
            } else {
                $offCanvas = me.$offCanvas = $(opts.offCanvasSelector);
                $offCanvas.addClass(opts.offCanvasElementCls);
            }
            $offCanvas.addClass(opts.direction === "fromLeft" ? opts.leftMenuCls : opts.rightMenuCls);
            $offCanvas.addClass(opts.disableTransitionCls);
            if (!opts.disableTransitions) {
                $offCanvas.removeClass(opts.disableTransitionCls);
            }
            if (opts.fullscreen) {
                $offCanvas.addClass(opts.fullscreenCls);
            }
            setTimeout(function() {
                $offCanvas.addClass(opts.activeMenuCls);
            }, 0);
            me.registerEventListeners();
        },
        registerEventListeners: function() {
            var me = this, opts = me.opts;
            me._on(me.$el, "click touch", $.proxy(me.onClickElement, me));
            me.$offCanvas.on(me.getEventName("click"), opts.closeButtonSelector, $.proxy(me.onClickCloseButton, me));
            $.subscribe(me.getEventName("plugin/swOffcanvasMenu/onBeforeOpenMenu"), $.proxy(me.onBeforeOpenMenu, me));
            $.publish("plugin/swOffcanvasMenu/onRegisterEvents", [ me ]);
        },
        onBeforeOpenMenu: function(event, plugin) {
            var me = this;
            if (plugin !== me) {
                me.closeMenu();
            }
        },
        onClickElement: function(event) {
            var me = this;
            if (!$.contains(me.$offCanvas[0], event.target || event.currentTarget)) {
                event.preventDefault();
            }
            me.openMenu();
            $.publish("plugin/swOffcanvasMenu/onClickElement", [ me, event ]);
        },
        onClickCloseButton: function(event) {
            var me = this;
            event.preventDefault();
            event.stopPropagation();
            me.closeMenu();
            $.publish("plugin/swOffcanvasMenu/onClickCloseButton", [ me, event ]);
        },
        openMenu: function() {
            var me = this, opts = me.opts, menuWidth = me.$offCanvas.outerWidth();
            if (me.isOpened) {
                return;
            }
            me.isOpened = true;
            $.publish("plugin/swOffcanvasMenu/onBeforeOpenMenu", [ me ]);
            $html.addClass("no--scroll");
            $.overlay.open({
                onClose: $.proxy(me.closeMenu, me)
            });
            if (opts.moveWrapper) {
                if (opts.direction === "fromRight") {
                    menuWidth *= -1;
                }
                me.$pageWrap.css("left", menuWidth);
            }
            me.$offCanvas.addClass(opts.openClass);
            $.publish("plugin/swOffcanvasMenu/onOpenMenu", [ me ]);
            if (opts.mode === "ajax" && opts.ajaxURL) {
                $.ajax({
                    url: opts.ajaxURL,
                    success: function(result) {
                        me.$offCanvas.html(result);
                    }
                });
            }
        },
        closeMenu: function() {
            var me = this, opts = me.opts;
            if (!me.isOpened) {
                return;
            }
            me.isOpened = false;
            $.overlay.close();
            $html.removeClass("no--scroll");
            if (opts.moveWrapper) {
                me.$pageWrap.css("left", 0);
            }
            me.$offCanvas.removeClass(opts.openClass);
            $.publish("plugin/swOffcanvasMenu/onCloseMenu", [ me ]);
        },
        destroy: function() {
            var me = this, opts = me.opts;
            me.closeMenu();
            me.$offCanvas.removeClass(opts.offCanvasElementCls).removeClass(opts.activeMenuCls).removeClass(opts.openClass).prop("style", "");
            if (opts.moveWrapper) {
                me.$pageWrap.prop("style", "");
            }
            me.$el.off(me.getEventName("click"), opts.closeButtonSelector);
            $.unsubscribe(me.getEventName("plugin/swOffcanvasMenu/onBeforeOpenMenu"));
            me._destroy();
        }
    });
})(jQuery);

(function($, StateManager, window) {
    "use strict";
    var msPointerEnabled = window.navigator.msPointerEnabled, $body = $("body");
    $.plugin("swSearch", {
        defaults: {
            activeCls: "is--active",
            searchFieldSelector: ".main-search--field",
            resultsSelector: ".main-search--results",
            resultLinkSelector: ".search-result--link",
            resultItemSelector: ".result--item",
            loadingIndicatorSelector: ".form--ajax-loader",
            headerSelector: ".header-main",
            activeHeaderClass: "is--active-searchfield",
            triggerSelector: ".entry--trigger",
            requestUrl: "",
            keyBoardNavigation: true,
            activeOnStart: false,
            minLength: 3,
            searchDelay: 250,
            animationSpeed: 200,
            keyMap: {
                UP: 38,
                DOWN: 40,
                ENTER: 13
            }
        },
        init: function() {
            var me = this, $el = me.$el, opts = me.opts;
            me.applyDataAttributes();
            me.requestURL = opts.requestUrl || window.controller.ajax_search;
            if (!me.requestURL) {
                throw new Error('Parameter "requestUrl" needs to be set.');
            }
            var convertUrlToRelativeUrl = function(url) {
                url = url.replace("https:", "");
                url = url.replace("http:", "");
                return url;
            };
            me.requestURL = convertUrlToRelativeUrl(me.requestURL);
            me.$searchField = $el.find(opts.searchFieldSelector);
            me.$results = $el.find(opts.resultsSelector);
            me.$loader = $el.find(opts.loadingIndicatorSelector);
            me.$toggleSearchBtn = $el.find(opts.triggerSelector);
            me.$mainHeader = $(opts.headerSelector);
            me.lastSearchTerm = "";
            me.keyupTimeout = 0;
            me._isSubmitting = false;
            me.registerListeners();
        },
        registerListeners: function() {
            var me = this, opts = me.opts, $searchField = me.$searchField, $formElement = me.$searchField.closest("form");
            me._on($searchField, "keyup", $.proxy(me.onKeyUp, me));
            me._on($searchField, "keydown", $.proxy(me.onKeyDown, me));
            me._on(me.$toggleSearchBtn, "click", $.proxy(me.onClickSearchEntry, me));
            me._on($formElement, "submit", $.proxy(me.onSubmit, me));
            if (msPointerEnabled) {
                me.$results.on("click", opts.resultLinkSelector, function(event) {
                    window.location.href = $(event.currentTarget).attr("href");
                });
            }
            StateManager.registerListener({
                state: "xs",
                enter: function() {
                    if (opts.activeOnStart) {
                        me.openMobileSearch();
                    }
                },
                exit: function() {
                    me.closeMobileSearch();
                }
            });
            $.publish("plugin/swSearch/onRegisterEvents", [ me ]);
        },
        onKeyDown: function(event) {
            var me = this, opts = me.opts, keyMap = opts.keyMap, keyCode = event.which, navKeyPressed = opts.keyBoardNavigation && (keyCode === keyMap.UP || keyCode === keyMap.DOWN || keyCode === keyMap.ENTER);
            $.publish("plugin/swSearch/onKeyDown", [ me, event ]);
            if (navKeyPressed && me.$results.hasClass(opts.activeCls)) {
                me.onKeyboardNavigation(keyCode);
                event.preventDefault();
                return false;
            }
            return true;
        },
        onKeyUp: function(event) {
            var me = this, opts = me.opts, term = me.$searchField.val() + "", timeout = me.keyupTimeout;
            $.publish("plugin/swSearch/onKeyUp", [ me, event ]);
            if (timeout) {
                window.clearTimeout(timeout);
            }
            if (term.length < opts.minLength) {
                me.lastSearchTerm = "";
                me.closeResult();
                return;
            }
            if (term === me.lastSearchTerm) {
                return;
            }
            me.keyupTimeout = window.setTimeout($.proxy(me.triggerSearchRequest, me, term), opts.searchDelay);
        },
        onSubmit: function(event) {
            var me = this;
            if (me.lastSearchAjax) {
                me.lastSearchAjax.abort();
            }
            if (me._isSubmitting) {
                event.preventDefault();
                return;
            }
            me._isSubmitting = true;
        },
        triggerSearchRequest: function(searchTerm) {
            var me = this;
            me.$loader.fadeIn(me.opts.animationSpeed);
            me.lastSearchTerm = $.trim(searchTerm);
            $.publish("plugin/swSearch/onSearchRequest", [ me, searchTerm ]);
            if (me.lastSearchAjax) {
                me.lastSearchAjax.abort();
            }
            if (me._isSubmitting) {
                return;
            }
            me.lastSearchAjax = $.ajax({
                url: me.requestURL,
                dataType: "html",
                data: {
                    sSearch: me.lastSearchTerm
                },
                success: function(response) {
                    me.showResult(response);
                    $.publish("plugin/swSearch/onSearchResponse", [ me, searchTerm, response ]);
                }
            });
        },
        showResult: function(response) {
            var me = this, opts = me.opts;
            me.$loader.fadeOut(opts.animationSpeed);
            me.$results.empty().html(response).addClass(opts.activeCls).show();
            if (!StateManager.isCurrentState("xs")) {
                $body.on(me.getEventName("click touchstart"), $.proxy(me.onClickBody, me));
            }
            picturefill();
            $.publish("plugin/swSearch/onShowResult", [ me ]);
        },
        closeResult: function() {
            var me = this;
            me.$results.removeClass(me.opts.activeCls).hide().empty();
            $.publish("plugin/swSearch/onCloseResult", [ me ]);
        },
        onClickBody: function(event) {
            var me = this, target = event.target, pluginEl = me.$el[0], resultsEl = me.$results[0];
            if (target === pluginEl || target === resultsEl || $.contains(pluginEl, target) || $.contains(resultsEl, target)) {
                return;
            }
            $body.off(me.getEventName("click touchstart"));
            me.closeMobileSearch();
        },
        onKeyboardNavigation: function(keyCode) {
            var me = this, opts = me.opts, keyMap = opts.keyMap, $results = me.$results, activeClass = opts.activeCls, $selected = $results.find("." + activeClass), $resultItems;
            $.publish("plugin/swSearch/onKeyboardNavigation", [ me, keyCode ]);
            if (keyCode === keyMap.UP || keyCode === keyMap.DOWN) {
                $resultItems = $results.find(opts.resultItemSelector);
                if (!$selected.length && keyCode == keyMap.DOWN) {
                    me.selectFirstResultItem($resultItems);
                    return;
                }
                if (!$selected.length && keyCode == keyMap.UP) {
                    me.selectLastResultItem($resultItems);
                    return;
                }
                $resultItems.removeClass(activeClass);
                if (me.selectResultItem(keyCode, $selected)) {
                    return;
                }
            }
            switch (keyCode) {
              case keyMap.DOWN:
                me.selectFirstResultItem($resultItems);
                break;

              case keyMap.UP:
                me.selectLastResultItem($resultItems);
                break;

              case keyMap.ENTER:
                me.onPressEnter($selected);
                break;
            }
        },
        onClickSearchEntry: function(event) {
            var me = this, $el = me.$el, opts = me.opts;
            $.publish("plugin/swSearch/onClickSearchEntry", [ me, event ]);
            if (!StateManager.isCurrentState("xs")) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            $el.hasClass(opts.activeCls) ? me.closeMobileSearch() : me.openMobileSearch();
        },
        openMobileSearch: function() {
            var me = this, $el = me.$el, opts = me.opts, activeCls = opts.activeCls;
            $body.on(me.getEventName("click touchstart"), $.proxy(me.onClickBody, me));
            $el.addClass(activeCls);
            me.$toggleSearchBtn.addClass(activeCls);
            me.$mainHeader.addClass(opts.activeHeaderClass);
            me.$searchField.focus();
            $.publish("plugin/swSearch/onOpenMobileSearch", [ me ]);
        },
        closeMobileSearch: function() {
            var me = this, $el = me.$el, opts = me.opts, activeCls = opts.activeCls;
            $el.removeClass(activeCls);
            me.$toggleSearchBtn.removeClass(activeCls);
            me.$mainHeader.removeClass(opts.activeHeaderClass);
            me.$searchField.blur();
            $.publish("plugin/swSearch/onCloseMobileSearch", [ me ]);
            me.closeResult();
        },
        selectFirstResultItem: function(resultItems) {
            var me = this, opts = me.opts, activeClass = opts.activeCls;
            $.publish("plugin/swSearch/onSelectFirstResultItem", [ me, resultItems ]);
            resultItems.first().addClass(activeClass);
        },
        selectLastResultItem: function(resultItems) {
            var me = this, opts = me.opts, activeClass = opts.activeCls;
            $.publish("plugin/swSearch/onSelectLastResultItem", [ me, resultItems ]);
            resultItems.last().addClass(activeClass);
        },
        selectResultItem: function(keyCode, $selected) {
            var me = this, opts = me.opts, keyMap = opts.keyMap, activeClass = opts.activeCls, $nextSibling;
            $.publish("plugin/swSearch/onSelectNextResultItem", [ me, keyCode ]);
            $nextSibling = $selected[keyCode === keyMap.DOWN ? "next" : "prev"](opts.resultItemSelector);
            if ($nextSibling.length) {
                $nextSibling.addClass(activeClass);
                return true;
            }
            return false;
        },
        onPressEnter: function($selected) {
            var me = this, opts = me.opts;
            $.publish("plugin/swSearch/onPressEnter", [ me, $selected ]);
            if ($selected.length) {
                window.location.href = $selected.find(opts.resultLinkSelector).attr("href");
                return;
            }
            me.$searchField.parent().submit();
        },
        destroy: function() {
            var me = this;
            me.closeMobileSearch();
            $body.off(me.getEventName("click touchstart"));
            me._destroy();
        }
    });
})(jQuery, StateManager, window);

(function($) {
    $.plugin("swTabMenu", {
        defaults: {
            pluginClass: "js--tab-menu",
            tabContainerSelector: ".tab--navigation",
            tabSelector: ".tab--link",
            containerListSelector: ".tab--container-list",
            containerSelector: ".tab--container",
            contentSelector: ".tab--content",
            hasContentClass: "has--content",
            activeTabClass: "is--active",
            activeContainerClass: "is--active",
            startIndex: -1,
            scrollable: false
        },
        init: function() {
            var me = this, opts = me.opts, $el = me.$el, $container, $tab;
            me.applyDataAttributes();
            $el.addClass(opts.pluginClass);
            me.$tabContainer = $el.find(opts.tabContainerSelector);
            me.$containerList = $el.find(opts.containerListSelector);
            me.$tabs = me.$tabContainer.find(opts.tabSelector);
            me.$container = me.$containerList.find(opts.containerSelector);
            me.$container.each(function(i, el) {
                $container = $(el);
                $tab = $(me.$tabs.get(i));
                if ($container.find(opts.contentSelector).html().trim().length) {
                    $container.addClass(opts.hasContentClass);
                    $tab.addClass(opts.hasContentClass);
                    if (opts.startIndex === -1) {
                        $tab.addClass(opts.activeTabClass);
                        opts.startIndex = i;
                    }
                }
            });
            if (me.opts.scrollable) {
                me.$el.swMenuScroller({
                    listSelector: me.$tabContainer
                });
            }
            opts.startIndex = Math.max(opts.startIndex, 0);
            me._index = null;
            me.registerEventListeners();
            me.changeTab(opts.startIndex);
        },
        registerEventListeners: function() {
            var me = this;
            me.$tabs.each(function(i, el) {
                me._on(el, "click touchstart", $.proxy(me.changeTab, me, i));
            });
            $.publish("plugin/swTabMenu/onRegisterEvents", [ me ]);
        },
        changeTab: function(index, event) {
            var me = this, opts = me.opts, activeTabClass = opts.activeTabClass, activeContainerClass = opts.activeContainerClass, $tab, tabId, dataUrl, $container;
            if (event) {
                event.preventDefault();
            }
            if (index === me._index) {
                return;
            }
            me._index = index;
            $tab = $(me.$tabs.get(index));
            $container = $(me.$container.get(index));
            me.$tabContainer.find("." + activeTabClass).removeClass(activeTabClass);
            $tab.addClass(activeTabClass);
            me.$containerList.find("." + activeContainerClass).removeClass(activeContainerClass);
            $container.addClass(activeContainerClass);
            dataUrl = $tab.attr("data-url");
            tabId = $container.attr("data-tab-id");
            if ($tab.attr("data-mode") === "remote" && dataUrl) {
                $container.load(dataUrl);
            }
            if (tabId !== undefined) {
                $.publish("onShowContent-" + tabId, [ me, index ]);
            }
            $.publish("plugin/swTabMenu/onChangeTab", [ me, index ]);
        },
        destroy: function() {
            var me = this, menuScroller = me.$el.data("plugin_swMenuScroller");
            if (menuScroller !== undefined) {
                menuScroller.destroy();
            }
            me.$el.removeClass(me.opts.pluginClass);
            me._destroy();
        }
    });
})(jQuery);

(function($, Modernizr, window, Math) {
    "use strict";
    var transitionProperty = StateManager.getVendorProperty("transition"), transformProperty = StateManager.getVendorProperty("transform"), killEvent = function(event) {
        event.preventDefault();
        event.stopPropagation();
    };
    $.plugin("swImageSlider", {
        defaults: {
            animationSpeed: 350,
            animationEasing: "cubic-bezier(.2,.89,.75,.99)",
            thumbnails: true,
            dotNavigation: true,
            arrowControls: true,
            touchControls: true,
            autoSlide: false,
            pinchToZoom: false,
            swipeToSlide: true,
            pullPreview: false,
            doubleTap: false,
            doubleTapPeriod: 400,
            preventScrolling: false,
            minZoom: 1,
            maxZoom: "auto",
            moveTolerance: 30,
            swipeTolerance: 50,
            swipePeriod: 250,
            pullTolerance: "auto",
            startIndex: 0,
            autoSlideInterval: 5e3,
            loopSlides: false,
            imageContainerSelector: ".image-slider--container",
            imageSlideSelector: ".image-slider--slide",
            thumbnailContainerSelector: ".image-slider--thumbnails",
            thumbnailSlideSelector: ".image-slider--thumbnails-slide",
            thumbnailSelector: ".thumbnail--link",
            dotNavSelector: ".image-slider--dots",
            dotLinkSelector: ".dot--link",
            thumbnailArrowCls: "thumbnails--arrow",
            leftArrowCls: "arrow is--left",
            rightArrowCls: "arrow is--right",
            thumbnailArrowTopCls: "is--top",
            thumbnailArrowLeftCls: "is--left",
            thumbnailArrowRightCls: "is--right",
            thumbnailArrowBottomCls: "is--bottom",
            activeStateClass: "is--active",
            dragClass: "is--dragging",
            noThumbClass: "no--thumbnails",
            imageSelector: ".image-slider--item img",
            itemSelector: ".image-slider--item",
            hiddenClass: "is--hidden"
        },
        init: function() {
            var me = this, opts = me.opts;
            me.applyDataAttributes();
            me._$slideContainer = me.$el.find(opts.imageContainerSelector);
            me._$slide = me._$slideContainer.find(opts.imageSlideSelector);
            me._slideIndex = opts.startIndex;
            me._slideInterval = 0;
            me._$currentImage = null;
            me._minZoom = parseFloat(opts.minZoom) || 1;
            me._maxZoom = parseFloat(opts.maxZoom);
            me._autoScale = !me._maxZoom && (me._maxZoom = me._minZoom);
            if (opts.thumbnails) {
                me._$thumbnailContainer = me.$el.find(opts.thumbnailContainerSelector);
                me._$thumbnailSlide = me._$thumbnailContainer.find(opts.thumbnailSlideSelector);
                me._thumbnailOrientation = me.getThumbnailOrientation();
                me._thumbnailOffset = 0;
                me.createThumbnailArrows();
            }
            if (opts.dotNavigation) {
                me._$dotNav = me.$el.find(opts.dotNavSelector);
                me._$dots = me._$dotNav.find(opts.dotLinkSelector);
                me.setActiveDot(me._slideIndex);
            }
            me.trackItems();
            if (opts.arrowControls) {
                me.createArrows();
            }
            if (opts.thumbnails) {
                me.trackThumbnailControls();
                me.setActiveThumbnail(me._slideIndex);
            }
            me.setIndex(me._slideIndex);
            me._grabImage = false;
            me._startTouchPoint = new Vector(0, 0);
            me._imageTranslation = new Vector(0, 0);
            me._imageScale = 1;
            me._touchDistance = 0;
            me._lastTouchTime = 0;
            me._lastMoveTime = 0;
            me._lockSlide = false;
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this, opts = me.opts, $slide = me._$slide;
            if (opts.touchControls) {
                me._on($slide, "touchstart mousedown", $.proxy(me.onTouchStart, me));
                me._on($slide, "touchmove mousemove", $.proxy(me.onTouchMove, me));
                me._on($slide, "touchend mouseup mouseleave", $.proxy(me.onTouchEnd, me));
                me._on($slide, "MSHoldVisual", killEvent);
                me._on($slide, "click", $.proxy(me.onClick, me));
                if (!opts.preventScrolling && ("ontouchstart" in window || navigator.msMaxTouchPoints)) {
                    me._on($slide, "movestart", function(e) {
                        if (e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) {
                            me._lockSlide = true;
                            e.preventDefault();
                        }
                    });
                }
                if (opts.pinchToZoom) {
                    me._on($slide, "mousewheel DOMMouseScroll scroll", $.proxy(me.onScroll, me));
                }
                if (opts.doubleTap) {
                    me._on($slide, "dblclick", $.proxy(me.onDoubleClick, me));
                }
            }
            if (opts.arrowControls) {
                me._on(me._$arrowLeft, "click touchstart", $.proxy(me.onLeftArrowClick, me));
                me._on(me._$arrowRight, "click touchstart", $.proxy(me.onRightArrowClick, me));
            }
            if (opts.thumbnails) {
                me._$thumbnails.each($.proxy(me.applyClickEventHandler, me));
                me._on(me._$thumbnailArrowPrev, "click touchstart", $.proxy(me.onThumbnailPrevArrowClick, me));
                me._on(me._$thumbnailArrowNext, "click touchstart", $.proxy(me.onThumbnailNextArrowClick, me));
                if (opts.touchControls) {
                    me._on(me._$thumbnailSlide, "touchstart", $.proxy(me.onThumbnailSlideTouch, me));
                    me._on(me._$thumbnailSlide, "touchmove", $.proxy(me.onThumbnailSlideMove, me));
                }
            }
            if (opts.dotNavigation && me._$dots) {
                me._$dots.each($.proxy(me.applyClickEventHandler, me));
            }
            if (opts.autoSlide) {
                me.startAutoSlide();
                me._on(me.$el, "mouseenter", $.proxy(me.stopAutoSlide, me));
                me._on(me.$el, "mouseleave", $.proxy(me.startAutoSlide, me));
            }
            StateManager.on("resize", me.onResize, me);
            $.publish("plugin/swImageSlider/onRegisterEvents", [ me ]);
        },
        onTouchStart: function(event) {
            var me = this, opts = me.opts, pointers = me.getPointers(event), pointerA = pointers[0], currTime = Date.now(), startPoint = me._startTouchPoint, startX = startPoint.x, startY = startPoint.y, distance, deltaX, deltaY;
            startPoint.set(pointerA.clientX, pointerA.clientY);
            if (pointers.length === 1) {
                me._lastMoveTime = currTime;
                if (opts.autoSlide) {
                    me.stopAutoSlide();
                }
                if (event.originalEvent instanceof MouseEvent) {
                    event.preventDefault();
                    me._grabImage = true;
                    me._$slideContainer.addClass(opts.dragClass);
                    return;
                }
                if (!opts.doubleTap) {
                    return;
                }
                deltaX = Math.abs(pointerA.clientX - startX);
                deltaY = Math.abs(pointerA.clientY - startY);
                distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                if (currTime - me._lastTouchTime < opts.doubleTapPeriod && distance <= opts.moveTolerance) {
                    me.onDoubleClick(event);
                    return;
                }
                me._lastTouchTime = currTime;
            } else {
                event.preventDefault();
            }
        },
        onTouchMove: function(event) {
            var me = this, opts = me.opts, touches = me.getPointers(event), touchA = touches[0], touchB = touches[1], scale = me._imageScale, startTouch = me._startTouchPoint, touchDistance = me._touchDistance, slideStyle = me._$slide[0].style, percentage, offset, distance, deltaX, deltaY;
            if (touches.length > 2) {
                return;
            }
            if (touches.length === 1) {
                if (event.originalEvent instanceof MouseEvent && !me._grabImage) {
                    return;
                }
                deltaX = touchA.clientX - startTouch.x;
                deltaY = touchA.clientY - startTouch.y;
                if (scale === 1) {
                    if (me._lockSlide) {
                        return;
                    }
                    offset = me._slideIndex * -100;
                    percentage = deltaX / me._$slide.width() * 100;
                    if (me._slideIndex === 0 && deltaX > 0) {
                        percentage *= Math.atan(percentage) / Math.PI;
                    }
                    if (me._slideIndex === me._itemCount - 1 && deltaX < 0) {
                        percentage *= Math.atan(percentage) / -Math.PI;
                    }
                    if (transitionProperty && transformProperty) {
                        slideStyle[transitionProperty] = "none";
                        slideStyle[transformProperty] = "translateX(" + (offset + percentage) + "%)";
                    } else {
                        slideStyle.left = offset + percentage + "%";
                    }
                    if (opts.preventScrolling) {
                        event.preventDefault();
                    }
                    return;
                }
                startTouch.set(touchA.clientX, touchA.clientY);
                me.translate(deltaX / scale, deltaY / scale);
                event.preventDefault();
                return;
            }
            if (!opts.pinchToZoom || !touchB) {
                return;
            }
            deltaX = Math.abs(touchA.clientX - touchB.clientX);
            deltaY = Math.abs(touchA.clientY - touchB.clientY);
            distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (touchDistance === 0) {
                me._touchDistance = distance;
                return;
            }
            me.scale((distance - touchDistance) / 100);
            me._touchDistance = distance;
        },
        onTouchEnd: function(event) {
            var me = this, opts = me.opts, touches = event.changedTouches, remaining = event.originalEvent.touches, touchA = touches && touches[0] || event.originalEvent, touchB = remaining && remaining[0], swipeTolerance = opts.swipeTolerance, pullTolerance = typeof opts.pullTolerance === "number" ? opts.pullTolerance : me._$slide.width() / 3, startPoint = me._startTouchPoint, deltaX, deltaY, absX, absY, swipeValid, pullValid;
            if (event.originalEvent instanceof MouseEvent && !me._grabImage) {
                return;
            }
            me._touchDistance = 0;
            me._grabImage = false;
            me._$slideContainer.removeClass(opts.dragClass);
            me._lockSlide = false;
            if (touchB) {
                startPoint.set(touchB.clientX, touchB.clientY);
                return;
            }
            if (opts.autoSlide) {
                me.startAutoSlide();
            }
            if (!opts.swipeToSlide || me._imageScale > 1) {
                return;
            }
            deltaX = startPoint.x - touchA.clientX;
            deltaY = startPoint.y - touchA.clientY;
            absX = Math.abs(deltaX);
            absY = Math.abs(deltaY);
            swipeValid = Date.now() - me._lastMoveTime < opts.swipePeriod && absX > swipeTolerance && absY < swipeTolerance;
            pullValid = absX >= pullTolerance;
            if (Math.sqrt(deltaX * deltaX + deltaY * deltaY) > opts.moveTolerance) {
                event.preventDefault();
            }
            if (pullValid || swipeValid) {
                deltaX < 0 ? me.slidePrev() : me.slideNext();
                return;
            }
            me.slide(me._slideIndex);
        },
        onClick: function(event) {
            var me = this, opts = me.opts, touches = event.changedTouches, touchA = touches && touches[0] || event.originalEvent, startPoint = me._startTouchPoint, deltaX = startPoint.x - touchA.clientX, deltaY = startPoint.y - touchA.clientY;
            if (Math.sqrt(deltaX * deltaX + deltaY * deltaY) > opts.moveTolerance) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            $.publish("plugin/swImageSlider/onClick", [ me, event ]);
        },
        onScroll: function(event) {
            var me = this, e = event.originalEvent;
            if ((e.detail ? e.detail * -1 : e.wheelDelta) > 0) {
                me.scale(.25);
            } else {
                me.scale(-.25);
            }
            event.preventDefault();
            $.publish("plugin/swImageSlider/onScroll", [ me, event ]);
        },
        onDoubleClick: function(event) {
            var me = this;
            if (!me.opts.doubleTap) {
                return;
            }
            event.preventDefault();
            if (me._imageScale <= 1) {
                me.scale(1, true);
            } else {
                me.setScale(1, true);
            }
            $.publish("plugin/swImageSlider/onDoubleClick", [ me, event ]);
        },
        onLeftArrowClick: function(event) {
            var me = this;
            event.preventDefault();
            me.slidePrev();
            $.publish("plugin/swImageSlider/onLeftArrowClick", [ me, event ]);
        },
        onRightArrowClick: function(event) {
            var me = this;
            event.preventDefault();
            me.slideNext();
            $.publish("plugin/swImageSlider/onRightArrowClick", [ me, event ]);
        },
        onThumbnailPrevArrowClick: function(event) {
            event.preventDefault();
            var me = this, $container = me._$thumbnailContainer, size = me._thumbnailOrientation === "horizontal" ? $container.innerWidth() : $container.innerHeight();
            me.setThumbnailSlidePosition(me._thumbnailOffset + size / 2, true);
            $.publish("plugin/swImageSlider/onThumbnailPrevArrowClick", [ me, event ]);
        },
        onThumbnailNextArrowClick: function(event) {
            event.preventDefault();
            var me = this, $container = me._$thumbnailContainer, size = me._thumbnailOrientation === "horizontal" ? $container.innerWidth() : $container.innerHeight();
            me.setThumbnailSlidePosition(me._thumbnailOffset - size / 2, true);
            $.publish("plugin/swImageSlider/onThumbnailNextArrowClick", [ me, event ]);
        },
        onMouseLeave: function(event) {
            var me = this;
            me._grabImage = false;
            me._$slideContainer.removeClass(me.opts.dragClass);
            me.slide(me._slideIndex);
            $.publish("plugin/swImageSlider/onMouseLeave", [ me, event ]);
        },
        onResize: function(newWidth) {
            var me = this;
            me.updateMaxZoomValue();
            me.scale(0);
            me.translate(0, 0);
            if (me.opts.thumbnails) {
                me.trackThumbnailControls();
            }
            $.publish("plugin/swImageSlider/onResize", [ me, newWidth ]);
        },
        onThumbnailSlideTouch: function(event) {
            var me = this, pointers = me.getPointers(event), pointerA = pointers[0];
            me._startTouchPoint.set(pointerA.clientX, pointerA.clientY);
            $.publish("plugin/swImageSlider/onThumbnailSlideTouch", [ me, event, pointerA.clientX, pointerA.clientY ]);
        },
        onThumbnailSlideMove: function(event) {
            event.preventDefault();
            var me = this, pointers = me.getPointers(event), pointerA = pointers[0], startPoint = me._startTouchPoint, isHorizontal = me._thumbnailOrientation === "horizontal", posA = isHorizontal ? pointerA.clientX : pointerA.clientY, posB = isHorizontal ? startPoint.x : startPoint.y, delta = posA - posB;
            startPoint.set(pointerA.clientX, pointerA.clientY);
            me.setThumbnailSlidePosition(me._thumbnailOffset + delta, false);
            me.trackThumbnailControls();
            $.publish("plugin/swImageSlider/onThumbnailSlideTouch", [ me, event, pointerA.clientX, pointerA.clientY ]);
        },
        getPointers: function(event) {
            var origEvent = event.originalEvent || event;
            return origEvent.touches || [ origEvent ];
        },
        getTransformedPosition: function(x, y, scale) {
            var me = this, $image = me._$currentImage, $container = me._$slideContainer, minX = Math.max(0, ($image.width() * scale - $container.width()) / scale / 2), minY = Math.max(0, ($image.height() * scale - $container.height()) / scale / 2), newPos = new Vector(Math.max(minX * -1, Math.min(minX, x)), Math.max(minY * -1, Math.min(minY, y)));
            $.publish("plugin/swImageSlider/onGetTransformedPosition", [ me, newPos, x, y, scale ]);
            return newPos;
        },
        getMinScale: function() {
            return this._minZoom;
        },
        getMaxScale: function() {
            return this._maxZoom;
        },
        setTranslation: function(x, y) {
            var me = this, newPos = me.getTransformedPosition(x, y, me._imageScale);
            me._imageTranslation.set(newPos.x, newPos.y);
            me.updateTransform(false);
            $.publish("plugin/swImageSlider/onSetTranslation", [ me, x, y ]);
        },
        translate: function(x, y) {
            var me = this, translation = me._imageTranslation;
            me.setTranslation(translation.x + x, translation.y + y);
            $.publish("plugin/swImageSlider/onTranslate", [ me, x, y ]);
        },
        setScale: function(scale, animate, callback) {
            var me = this, oldScale = me._imageScale;
            me.updateMaxZoomValue();
            me._imageScale = Math.max(me._minZoom, Math.min(me._maxZoom, scale));
            if (me._imageScale === oldScale) {
                if (typeof callback === "function") {
                    callback.call(me);
                }
                return;
            }
            me.updateTransform(animate, callback);
            $.publish("plugin/swImageSlider/onSetScale", [ me, scale, animate, callback ]);
        },
        getScale: function() {
            return this._imageScale;
        },
        scale: function(factor, animate, callback) {
            var me = this;
            me.setScale(me._imageScale + factor, animate, callback);
            $.publish("plugin/swImageSlider/onScale", [ me, factor, animate, callback ]);
        },
        updateTransform: function(animate, callback) {
            var me = this, translation = me._imageTranslation, scale = me._imageScale, newPosition = me.getTransformedPosition(translation.x, translation.y, scale), image = me._$currentImage[0], animationSpeed = me.opts.animationSpeed;
            translation.set(newPosition.x, newPosition.y);
            image.style[transitionProperty] = animate ? "all " + animationSpeed + "ms" : "";
            image.style[transformProperty] = "scale(" + scale + ") translate(" + translation.x + "px, " + translation.y + "px)";
            $.publish("plugin/swImageSlider/onUpdateTransform", [ me, animate, callback ]);
            if (!callback) {
                return;
            }
            if (!animate) {
                callback.call(me);
                return;
            }
            setTimeout($.proxy(callback, me), animationSpeed);
        },
        applyClickEventHandler: function(index, el) {
            var me = this, $el = $(el), i = index || $el.index();
            me._on($el, "click", function(event) {
                event.preventDefault();
                me.slide(i);
            });
            $.publish("plugin/swImageSlider/onApplyClickEventHandler", [ me, index, el ]);
        },
        createArrows: function() {
            var me = this, opts = me.opts, hiddenClass = " " + opts.hiddenClass;
            me._$arrowLeft = $("<a>", {
                class: opts.leftArrowCls + ((opts.loopSlides || me._slideIndex > 0) && me._itemCount > 1 ? "" : hiddenClass)
            }).appendTo(me._$slideContainer);
            me._$arrowRight = $("<a>", {
                class: opts.rightArrowCls + ((opts.loopSlides || me._slideIndex < me._itemCount - 1) && me._itemCount > 1 ? "" : hiddenClass)
            }).appendTo(me._$slideContainer);
            $.publish("plugin/swImageSlider/onCreateArrows", [ me, me._$arrowLeft, me._$arrowRight ]);
        },
        createThumbnailArrows: function() {
            var me = this, opts = me.opts, isHorizontal = me._thumbnailOrientation === "horizontal", prevClass = isHorizontal ? opts.thumbnailArrowLeftCls : opts.thumbnailArrowTopCls, nextClass = isHorizontal ? opts.thumbnailArrowRightCls : opts.thumbnailArrowBottomCls;
            me._$thumbnailArrowPrev = $("<a>", {
                class: opts.thumbnailArrowCls + " " + prevClass
            }).appendTo(me._$thumbnailContainer);
            me._$thumbnailArrowNext = $("<a>", {
                class: opts.thumbnailArrowCls + " " + nextClass
            }).appendTo(me._$thumbnailContainer);
            $.publish("plugin/swImageSlider/onCreateThumbnailArrows", [ me, me._$thumbnailArrowPrev, me._$thumbnailArrowNext ]);
        },
        trackItems: function() {
            var me = this, opts = me.opts;
            me._$items = me._$slide.find(opts.itemSelector);
            picturefill();
            me._$images = me._$slide.find(opts.imageSelector);
            if (opts.thumbnails) {
                me._$thumbnails = me._$thumbnailContainer.find(opts.thumbnailSelector);
                me._thumbnailCount = me._$thumbnails.length;
                if (me._thumbnailCount === 0) {
                    me.$el.addClass(opts.noThumbClass);
                    opts.thumbnails = false;
                }
            }
            me._itemCount = me._$items.length;
            $.publish("plugin/swImageSlider/onTrackItems", [ me ]);
        },
        setIndex: function(index) {
            var me = this, slideStyle = me._$slide[0].style, percentage = (index || me._slideIndex) * -100;
            if (transformProperty && transitionProperty) {
                slideStyle[transitionProperty] = "none";
                slideStyle[transformProperty] = "translateX(" + percentage + "%)";
            } else {
                slideStyle.left = percentage + "%";
            }
            me._$currentImage = $(me._$images[index]);
            me.updateMaxZoomValue();
            $.publish("plugin/swImageSlider/onSetIndex", [ me, index ]);
        },
        getIndex: function(event) {
            return this._slideIndex;
        },
        updateMaxZoomValue: function() {
            var me = this, $currentImage = me._$currentImage, image = $currentImage[0];
            if (!me._autoScale) {
                return;
            }
            if (!image) {
                me._maxZoom = me._minZoom;
                return;
            }
            me._maxZoom = Math.max(image.naturalWidth, image.naturalHeight) / Math.max($currentImage.width(), $currentImage.height());
            me._maxZoom = Math.max(me._maxZoom, me._minZoom);
            if (image.getAttribute("data-extension") === "svg") {
                me._maxZoom = 5;
            }
            $.publish("plugin/swImageSlider/onUpdateMaxZoomValue", [ me, me._maxZoom ]);
        },
        getThumbnailOrientation: function() {
            var $container = this._$thumbnailContainer;
            return $container.innerWidth() > $container.innerHeight() ? "horizontal" : "vertical";
        },
        setActiveThumbnail: function(index) {
            var me = this, isHorizontal = me._thumbnailOrientation === "horizontal", orientation = isHorizontal ? "left" : "top", $thumbnail = me._$thumbnails.eq(index), $container = me._$thumbnailContainer, thumbnailPos = $thumbnail.position(), slidePos = me._$thumbnailSlide.position(), slideOffset = slidePos[orientation], posA = thumbnailPos[orientation] * -1, posB = thumbnailPos[orientation] + (isHorizontal ? $thumbnail.outerWidth() : $thumbnail.outerHeight()), containerSize = isHorizontal ? $container.width() : $container.height(), activeClass = me.opts.activeStateClass, newPos;
            if (posA < slideOffset && posB * -1 < slideOffset + containerSize * -1) {
                newPos = containerSize - Math.max(posB, containerSize);
            } else {
                newPos = Math.max(posA, slideOffset);
            }
            me._$thumbnails.removeClass(activeClass);
            $thumbnail.addClass(activeClass);
            me.setThumbnailSlidePosition(newPos, true);
            $.publish("plugin/swImageSlider/onSetActiveThumbnail", [ me, index ]);
        },
        setActiveDot: function(index) {
            var me = this, $dots = me._$dots;
            if (me.opts.dotNavigation && $dots) {
                $dots.removeClass(me.opts.activeStateClass);
                $dots.eq(index || me._slideIndex).addClass(me.opts.activeStateClass);
            }
            $.publish("plugin/swImageSlider/onSetActiveDot", [ me, index ]);
        },
        setThumbnailSlidePosition: function(offset, animate) {
            var me = this, $slide = me._$thumbnailSlide, $container = me._$thumbnailContainer, isHorizontal = me._thumbnailOrientation === "horizontal", sizeA = isHorizontal ? $container.innerWidth() : $container.innerHeight(), sizeB = isHorizontal ? $slide.outerWidth(true) : $slide.outerHeight(true), min = Math.min(0, sizeA - sizeB), css = {};
            me._thumbnailOffset = Math.max(min, Math.min(0, offset));
            css[isHorizontal ? "left" : "top"] = me._thumbnailOffset;
            css[isHorizontal ? "top" : "left"] = "auto";
            if (!animate) {
                $slide.css(css);
            } else {
                $slide[Modernizr.csstransitions ? "transition" : "animate"](css, me.animationSpeed, $.proxy(me.trackThumbnailControls, me));
            }
            $.publish("plugin/swImageSlider/onSetThumbnailSlidePosition", [ me, offset, animate ]);
        },
        trackThumbnailControls: function() {
            var me = this, opts = me.opts, isHorizontal = me._thumbnailOrientation === "horizontal", $container = me._$thumbnailContainer, $slide = me._$thumbnailSlide, $prevArr = me._$thumbnailArrowPrev, $nextArr = me._$thumbnailArrowNext, activeCls = me.opts.activeStateClass, pos, orientation;
            if (!$slide) {
                return;
            }
            pos = $slide.position();
            orientation = me.getThumbnailOrientation();
            if (me._thumbnailOrientation !== orientation) {
                $prevArr.toggleClass(opts.thumbnailArrowLeftCls, !isHorizontal).toggleClass(opts.thumbnailArrowTopCls, isHorizontal);
                $nextArr.toggleClass(opts.thumbnailArrowRightCls, !isHorizontal).toggleClass(opts.thumbnailArrowBottomCls, isHorizontal);
                me._thumbnailOrientation = orientation;
                me.setActiveThumbnail(me._slideIndex);
            }
            if (me._thumbnailOrientation === "horizontal") {
                $prevArr.toggleClass(activeCls, pos.left < 0);
                $nextArr.toggleClass(activeCls, $slide.innerWidth() + pos.left > $container.innerWidth());
            } else {
                $prevArr.toggleClass(activeCls, pos.top < 0);
                $nextArr.toggleClass(activeCls, $slide.innerHeight() + pos.top > $container.innerHeight());
            }
            $.publish("plugin/swImageSlider/onTrackThumbnailControls", [ me ]);
        },
        startAutoSlide: function() {
            var me = this;
            me.stopAutoSlide(me._slideInterval);
            me._slideInterval = window.setTimeout($.proxy(me.slideNext, me), me.opts.autoSlideInterval);
            $.publish("plugin/swImageSlider/onStartAutoSlide", [ me, me._slideInterval ]);
        },
        stopAutoSlide: function() {
            var me = this;
            window.clearTimeout(me._slideInterval);
            $.publish("plugin/swImageSlider/onStopAutoSlide", [ me ]);
        },
        slide: function(index, callback) {
            var me = this, opts = me.opts, slideStyle = me._$slide[0].style;
            me._slideIndex = index;
            if (opts.thumbnails) {
                me.setActiveThumbnail(index);
                me.trackThumbnailControls();
            }
            if (opts.dotNavigation && me._$dots) {
                me.setActiveDot(index);
            }
            if (opts.autoSlide) {
                me.stopAutoSlide();
                me.startAutoSlide();
            }
            me.resetTransformation(true, function() {
                if (transitionProperty && transformProperty) {
                    slideStyle[transitionProperty] = "all " + opts.animationSpeed + "ms " + opts.animationEasing;
                    slideStyle[transformProperty] = "translateX(" + index * -100 + "%)";
                    if (typeof callback === "function") {
                        setTimeout($.proxy(callback, me), opts.animationSpeed);
                    }
                } else {
                    me._$slide.animate({
                        left: index * -100 + "%",
                        easing: "ease-out"
                    }, opts.animationSpeed, $.proxy(callback, me));
                }
            });
            me._$currentImage = $(me._$images[index]);
            me.updateMaxZoomValue();
            if (opts.arrowControls) {
                me._$arrowLeft.toggleClass(opts.hiddenClass, !opts.loopSlides && index <= 0);
                me._$arrowRight.toggleClass(opts.hiddenClass, !opts.loopSlides && index >= me._itemCount - 1);
            }
            $.publish("plugin/swImageSlider/onSlide", [ me, index, callback ]);
        },
        resetTransformation: function(animate, callback) {
            var me = this, translation = me._imageTranslation;
            me._touchDistance = 0;
            if (me._imageScale !== 1 || translation.x !== 0 || translation.y !== 0) {
                me._imageScale = 1;
                me._imageTranslation.set(0, 0);
                me.updateTransform(animate, callback);
            } else if (callback) {
                callback.call(me);
            }
            $.publish("plugin/swImageSlider/onResetTransformation", [ me, animate, callback ]);
        },
        slideNext: function() {
            var me = this, newIndex = me._slideIndex + 1, itemCount = me._itemCount, isLooping = me.opts.loopSlides;
            me._lastTouchTime = 0;
            me.slide(newIndex >= itemCount && isLooping ? 0 : Math.min(itemCount - 1, newIndex));
            $.publish("plugin/swImageSlider/onSlideNext", [ me, newIndex ]);
        },
        slidePrev: function() {
            var me = this, newIndex = me._slideIndex - 1, itemCount = me._itemCount, isLooping = me.opts.loopSlides;
            me._lastTouchTime = 0;
            me.slide(newIndex < 0 && isLooping ? itemCount - 1 : Math.max(0, newIndex));
            $.publish("plugin/swImageSlider/onSlidePrev", [ me, newIndex ]);
        },
        destroy: function() {
            var me = this, opts = me.opts;
            me.resetTransformation(false);
            me._$slideContainer = null;
            me._$items = null;
            me._$currentImage = null;
            if (opts.dotNavigation && me._$dots) {
                me._$dots.removeClass(me.opts.activeStateClass);
                me._$dotNav = null;
                me._$dots = null;
            }
            if (opts.arrowControls) {
                me._$arrowLeft.remove();
                me._$arrowRight.remove();
            }
            if (opts.thumbnails) {
                me._$thumbnailArrowPrev.remove();
                me._$thumbnailArrowNext.remove();
                me._$thumbnailContainer = null;
                me._$thumbnailSlide = null;
                me._$thumbnails.removeClass(me.opts.activeStateClass);
                me._$thumbnails = null;
            }
            if (opts.autoSlide) {
                me.stopAutoSlide();
            }
            StateManager.off("resize", me.onResize, me);
            me._destroy();
        }
    });
    function Vector(x, y) {
        var me = this;
        me.x = x || 0;
        me.y = y || 0;
    }
    Vector.prototype.set = function(x, y) {
        var me = this;
        me.x = typeof x === "number" ? x : me.x;
        me.y = typeof y === "number" ? y : me.y;
    };
})(jQuery, Modernizr, window, Math);

(function($) {
    "use strict";
    $.plugin("swImageZoom", {
        defaults: {
            showTitle: true,
            containerCls: "js--img-zoom--container",
            lensCls: "js--img-zoom--lens",
            flyoutCls: "js--img-zoom--flyout",
            titleContainerCls: "js--img-zoom--title",
            activeSelector: ".is--active",
            animationSpeed: 300
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.active = false;
            me.$container = me.$el.find(".image-slider--slide");
            me.imageBox = me.$el.find(".image--box");
            me.$imageElements = me.$el.find(".image--element");
            me.$thumbnails = me.$el.find(".thumbnail--link");
            me.$flyout = me.createFlyoutElement();
            me.$lens = me.createLensElement();
            if (me.opts.showTitle) {
                me.$title = me.createTitleContainer();
            }
            me.zoomImage = false;
            me.$activeImage = me.getActiveImageElement();
            me.flyoutWidth = me.$flyout.outerWidth();
            me.flyoutHeight = me.$flyout.outerHeight();
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            $("body").on("scroll.imageZoom", $.proxy(me.stopZoom, me));
            me._on(me.$container, "mousemove", $.proxy(me.onMouseMove, me));
            me._on(me.$container, "mouseout", $.proxy(me.stopZoom, me));
            me._on(me.$lens, "click", $.proxy(me.onLensClick, me));
            $.subscribe(me.getEventName("plugin/swImageSlider/onRightArrowClick"), $.proxy(me.stopZoom, me));
            $.subscribe(me.getEventName("plugin/swImageSlider/onLeftArrowClick"), $.proxy(me.stopZoom, me));
            $.subscribe(me.getEventName("plugin/swImageSlider/onClick"), $.proxy(me.stopZoom, me));
            $.subscribe(me.getEventName("plugin/swImageSlider/onLightbox"), $.proxy(me.stopZoom, me));
            $.publish("plugin/swImageZoom/onRegisterEvents", [ me ]);
        },
        createLensElement: function() {
            var me = this, $el = $("<div>", {
                class: me.opts.lensCls,
                html: "&nbsp;"
            }).appendTo(me.$container);
            $.publish("plugin/swImageZoom/onCreateLensElement", [ me, $el ]);
            return $el;
        },
        createFlyoutElement: function() {
            var me = this, $el = $("<div>", {
                class: me.opts.flyoutCls
            }).appendTo(me.$el);
            $.publish("plugin/swImageZoom/onCreateFlyoutElement", [ me, $el ]);
            return $el;
        },
        createTitleContainer: function() {
            var me = this, $el;
            if (!me.$flyout.length || !me.opts.showTitle) {
                return;
            }
            $el = $("<div>", {
                class: me.opts.titleContainerCls
            }).appendTo(me.$flyout);
            $.publish("plugin/swImageZoom/onCreateTitleContainer", [ me, $el ]);
            return $el;
        },
        getActiveImageThumbnail: function() {
            var me = this, $thumbnail = me.$thumbnails.filter(me.opts.activeSelector);
            $.publish("plugin/swImageZoom/onGetActiveImageThumbnail", [ me, $thumbnail ]);
            return $thumbnail;
        },
        getActiveImageElement: function() {
            var me = this, $el;
            me.$activeImageThumbnail = me.getActiveImageThumbnail();
            if (!me.$activeImageThumbnail.length) {
                $el = me.$imageElements.eq(0);
            } else {
                $el = me.$imageElements.eq(me.$activeImageThumbnail.index());
            }
            $.publish("plugin/swImageZoom/onGetActiveImageElement", [ me, $el ]);
            return $el;
        },
        setLensSize: function(factor) {
            var me = this;
            me.lensWidth = me.flyoutWidth / factor;
            me.lensHeight = me.flyoutHeight / factor;
            if (me.lensWidth > me.imageWidth) {
                me.lensWidth = me.imageWidth;
            }
            if (me.lensHeight > me.imageHeight) {
                me.lensHeight = me.imageHeight;
            }
            me.$lens.css({
                width: me.lensWidth,
                height: me.lensHeight
            });
            $.publish("plugin/swImageZoom/onSetLensSize", [ me, me.$lens, factor ]);
        },
        setLensPosition: function(x, y) {
            var me = this;
            me.$lens.css({
                top: y,
                left: x
            });
            $.publish("plugin/swImageZoom/onSetLensPosition", [ me, me.$lens, x, y ]);
        },
        showLens: function() {
            var me = this;
            me.$lens.stop(true, true).fadeIn(me.opts.animationSpeed);
            $.publish("plugin/swImageZoom/onShowLens", [ me, me.$lens ]);
        },
        hideLens: function() {
            var me = this;
            me.$lens.stop(true, true).fadeOut(me.opts.animationSpeed);
            $.publish("plugin/swImageZoom/onHideLens", [ me, me.$lens ]);
        },
        setZoomPosition: function(x, y) {
            var me = this;
            me.$flyout.css("backgroundPosition", x + "px " + y + "px");
            $.publish("plugin/swImageZoom/onSetZoomPosition", [ me, me.$flyout, x, y ]);
        },
        showZoom: function() {
            var me = this;
            me.$flyout.stop(true, true).fadeIn(me.opts.animationSpeed);
            $.publish("plugin/swImageZoom/onShowZoom", [ me, me.$flyout ]);
        },
        hideZoom: function() {
            var me = this;
            me.$flyout.stop(true, true).fadeOut(me.opts.animationSpeed);
            $.publish("plugin/swImageZoom/onHideZoom", [ me, me.$flyout ]);
        },
        setImageTitle: function(title) {
            var me = this;
            if (!me.opts.showTitle || !me.$title.length) {
                return;
            }
            me.$title.html("<span>" + (title || me.imageTitle) + "</span>");
            $.publish("plugin/swImageZoom/onSetImageTitle", [ me, me.$title, title ]);
        },
        onMouseMove: function(event) {
            var me = this;
            if (!me.zoomImage) {
                me.activateZoom();
                return;
            }
            var containerOffset = me.$container.offset(), mouseX = event.pageX, mouseY = event.pageY, containerX = mouseX - containerOffset.left, containerY = mouseY - containerOffset.top, lensX = containerX - me.lensWidth / 2, lensY = containerY - me.lensHeight / 2, minX = me.imageOffset.left - containerOffset.left, minY = me.imageOffset.top - containerOffset.top, maxX = minX + me.imageWidth - me.$lens.outerWidth(), maxY = minY + me.imageHeight - me.$lens.outerHeight(), lensLeft = me.clamp(lensX, minX, maxX), lensTop = me.clamp(lensY, minY, maxY), zoomLeft = -(lensLeft - minX) * me.factor, zoomTop = -(lensTop - minY) * me.factor;
            if (minX >= maxX) {
                zoomLeft = zoomLeft + me.flyoutWidth / 2 - me.zoomImage.width / 2;
            }
            if (minY >= maxY) {
                zoomTop = zoomTop + me.flyoutHeight / 2 - me.zoomImage.height / 2;
            }
            if (mouseX > me.imageOffset.left && mouseX < me.imageOffset.left + me.imageWidth && mouseY > me.imageOffset.top && mouseY < me.imageOffset.top + me.imageHeight) {
                me.showLens();
                me.showZoom();
                me.setLensPosition(lensLeft, lensTop);
                me.setZoomPosition(zoomLeft, zoomTop);
            } else {
                me.stopZoom();
            }
        },
        setActiveImage: function() {
            var me = this;
            me.$activeImageElement = me.getActiveImageElement();
            me.$activeImage = me.$activeImageElement.find("img");
            me.imageTitle = me.$activeImageElement.attr("data-alt");
            me.imageWidth = me.$activeImage.innerWidth();
            me.imageHeight = me.$activeImage.innerHeight();
            me.imageOffset = me.$activeImage.offset();
            $.publish("plugin/swImageZoom/onSetActiveImage", me);
        },
        activateZoom: function() {
            var me = this;
            me.setActiveImage();
            if (!me.zoomImage) {
                me.zoomImageUrl = me.$activeImageElement.attr("data-img-original");
                me.zoomImage = new Image();
                me.zoomImage.onload = function() {
                    me.factor = me.zoomImage.width / me.$activeImage.innerWidth();
                    me.setLensSize(me.factor);
                    me.$flyout.css("background", "url(" + me.zoomImageUrl + ") 0px 0px no-repeat #fff");
                    if (me.opts.showTitle) {
                        me.setImageTitle(me.title);
                    }
                    $.publish("plugin/swImageZoom/onZoomImageLoaded", [ me, me.zoomImage ]);
                };
                me.zoomImage.src = me.zoomImageUrl;
            }
            $.publish("plugin/swImageZoom/onActivateZoom", me);
            me.active = true;
        },
        stopZoom: function() {
            var me = this;
            me.hideLens();
            me.hideZoom();
            me.zoomImage = false;
            me.active = false;
            $.publish("plugin/swImageZoom/onStopZoom", me);
        },
        onLensClick: function(event) {
            $.publish("plugin/swImageZoom/onLensClick", [ this, event ]);
        },
        clamp: function(number, min, max) {
            return Math.max(min, Math.min(max, number));
        },
        destroy: function() {
            var me = this;
            $.unsubscribe(me.getEventName("plugin/swImageSlider/onRightArrowClick"));
            $.unsubscribe(me.getEventName("plugin/swImageSlider/onLeftArrowClick"));
            $.unsubscribe(me.getEventName("plugin/swImageSlider/onClick"));
            $.unsubscribe(me.getEventName("plugin/swImageSlider/onLightbox"));
            me.$lens.remove();
            me.$flyout.remove();
            me.$container.removeClass(me.opts.containerCls);
            $("body").off("scroll.imageZoom");
            me._destroy();
        }
    });
})(jQuery);

(function($) {
    "use strict";
    $.plugin("swCollapsePanel", {
        alias: "collapsePanel",
        defaults: {
            collapseTarget: false,
            contentSiblingSelector: ".collapse--content",
            collapseTargetCls: "js--collapse-target",
            collapsedStateCls: "is--collapsed",
            activeTriggerCls: "is--active",
            closeSiblings: false,
            animationSpeed: 400,
            hashPrefix: "show-",
            action: "toggle"
        },
        init: function() {
            var me = this, opts = me.opts;
            me.applyDataAttributes();
            if (opts.collapseTarget) {
                me.$targetEl = $(opts.collapseTarget);
            } else {
                me.$targetEl = me.$el.next(opts.contentSiblingSelector);
            }
            me.$targetEl.addClass(opts.collapseTargetCls);
            me.handleHashParameter();
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$el, "click", function(e) {
                e.preventDefault();
                switch (me.opts.action) {
                  case "open":
                    me.openPanel();
                    break;

                  case "close":
                    me.closePanel();
                    break;

                  default:
                    me.toggleCollapse();
                }
            });
            $.publish("plugin/swCollapsePanel/onRegisterEvents", [ me ]);
        },
        toggleCollapse: function() {
            var me = this;
            if (me.$targetEl.hasClass(me.opts.collapsedStateCls)) {
                me.closePanel();
            } else {
                me.openPanel();
            }
            $.publish("plugin/swCollapsePanel/onToggleCollapse", [ me ]);
        },
        openPanel: function() {
            var me = this, opts = me.opts, $targetEl = me.$targetEl, $siblings = $("." + opts.collapseTargetCls).not($targetEl), tabId = $targetEl.parent().attr("data-tab-id");
            me.$el.addClass(opts.activeTriggerCls);
            if ($targetEl.hasClass(opts.collapsedStateCls)) {
                return;
            }
            $targetEl.finish().slideDown(opts.animationSpeed, function() {
                $.publish("plugin/swCollapsePanel/onOpen", [ me ]);
            }).addClass(opts.collapsedStateCls);
            if (opts.closeSiblings) {
                $siblings.finish().slideUp(opts.animationSpeed, function() {
                    $siblings.removeClass(opts.collapsedStateCls);
                    $siblings.prev().removeClass(opts.activeTriggerCls);
                });
            }
            if (tabId !== undefined) {
                $.publish("onShowContent-" + tabId, [ me ]);
            }
            $.publish("plugin/swCollapsePanel/onOpenPanel", [ me ]);
        },
        closePanel: function() {
            var me = this, opts = me.opts;
            me.$el.removeClass(opts.activeTriggerCls);
            if (!me.$targetEl.hasClass(opts.collapsedStateCls)) {
                return;
            }
            me.$targetEl.finish().slideUp(opts.animationSpeed, function() {
                me.$targetEl.removeClass(opts.collapsedStateCls);
                $.publish("plugin/swCollapsePanel/onClose", [ me ]);
            });
            $.publish("plugin/swCollapsePanel/onClosePanel", [ me ]);
        },
        handleHashParameter: function() {
            var me = this, hash = window.location.hash, prefixLength = me.opts.hashPrefix.length;
            if (hash.indexOf(me.opts.hashPrefix) !== 1) {
                return;
            }
            if (!me.$targetEl.is("#" + hash.substr(prefixLength + 1))) {
                return;
            }
            me.openPanel();
        },
        destroy: function() {
            var me = this, opts = me.opts;
            me.$el.removeClass(opts.activeTriggerCls);
            me.$targetEl.removeClass(opts.collapsedStateCls).removeClass(opts.collapseTargetCls).prop("style", "");
            me._destroy();
        }
    });
})(jQuery);

(function($) {
    "use strict";
    $.plugin("swAutoSubmit", {
        defaults: {
            loadingindicator: true
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$form = $(me.$el.parents("form")[0]);
            me._on(me.$el, "change", $.proxy(me.onChangeSelection, me));
            $.publish("plugin/swAutoSubmit/onRegisterEvents", [ me ]);
        },
        onChangeSelection: function() {
            var me = this;
            if (me.opts.loadingindicator) {
                $.loadingIndicator.open({
                    closeOnClick: false
                });
            }
            $.publish("plugin/swAutoSubmit/onChangeSelection", [ me ]);
            me.$form.submit();
        }
    });
})(jQuery);

(function($) {
    "use strict";
    $.plugin("swScrollAnimate", {
        defaults: {
            scrollContainerSelector: "body, html",
            scrollTarget: 0,
            animationSpeed: 500,
            easing: "swing"
        },
        init: function() {
            var me = this, opts = me.opts;
            me.applyDataAttributes();
            me.$container = $(opts.scrollContainerSelector);
            if (typeof opts.scrollTarget === "string") {
                me.$targetEl = $(opts.scrollTarget);
            }
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$el, "touchstart click", $.proxy(me.onClickElement, me));
            $.publish("plugin/swScrollAnimate/onRegisterEvents", [ me ]);
        },
        onClickElement: function(event) {
            event.preventDefault();
            var me = this, opts = me.opts;
            $.publish("plugin/swScrollAnimate/onClickElement", [ me, event ]);
            if (me.$targetEl) {
                me.scrollToElement(me.$targetEl);
                return;
            }
            me.scrollToPosition(opts.scrollTarget);
        },
        scrollToElement: function($targetEl, offset) {
            var me = this;
            if (!$targetEl.length) {
                return;
            }
            $.publish("plugin/swScrollAnimate/onScrollToElement", [ me, $targetEl, offset ]);
            me.scrollToPosition($targetEl.offset().top + ~~offset);
        },
        scrollToPosition: function(position) {
            var me = this;
            me.$container.animate({
                scrollTop: position
            }, me.opts.animationSpeed, me.opts.easing, function() {
                $.publish("plugin/swScrollAnimate/onScrollEnd", [ me, position ]);
            });
            $.publish("plugin/swScrollAnimate/onScrollToPosition", [ me, position ]);
        },
        destroy: function() {
            this._destroy();
        }
    });
})(jQuery);

(function($, window) {
    "use strict";
    var $window = $(window);
    jQuery.extend(jQuery.easing, {
        easeOutExpo: function(x, t, b, c, d) {
            return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
    });
    $.plugin("swProductSlider", {
        defaults: {
            mode: "local",
            orientation: "horizontal",
            itemMinWidth: 220,
            itemMinHeight: 240,
            itemsPerSlide: 1,
            infiniteSlide: true,
            autoSlide: false,
            autoSlideDirection: "next",
            autoSlideSpeed: 4,
            autoScroll: false,
            autoScrollDirection: "next",
            autoScrollSpeed: 1,
            scrollDistance: 350,
            animationSpeed: 400,
            arrowControls: true,
            arrowAction: "slide",
            wrapperCls: "product-slider",
            horizontalCls: "is--horizontal",
            verticalCls: "is--vertical",
            arrowCls: "product-slider--arrow",
            prevArrowCls: "arrow--prev",
            nextArrowCls: "arrow--next",
            containerSelector: ".product-slider--container",
            itemSelector: ".product-slider--item",
            ajaxCtrlUrl: null,
            ajaxCategoryID: null,
            ajaxMaxShow: 30,
            ajaxShowLoadingIndicator: true,
            ajaxLoadingIndicatorCls: "js--loading-indicator indicator--absolute",
            ajaxLoadingIndicatorIconCls: "icon--default",
            initOnEvent: null
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.autoScrollAnimation = false;
            me.autoSlideAnimation = false;
            me.bufferedCall = false;
            me.initialized = false;
            me.scrollingReachedEndOfItems = false;
            me.totalUniqueItems = 0;
            me.itemsPerSlide = me.opts.itemsPerSlide;
            me.isLoading = false;
            me.isAnimating = false;
            if (me.opts.mode === "ajax" && me.opts.ajaxCtrlUrl === null) {
                console.error("The controller url for the ajax slider is not defined!");
                return;
            }
            if (me.opts.mode === "ajax" && me.opts.ajaxShowLoadingIndicator) {
                me.showLoadingIndicator();
            }
            if (me.opts.initOnEvent !== null) {
                $.subscribe(me.getEventName(me.opts.initOnEvent), function() {
                    if (!me.initialized) {
                        me.initSlider();
                        me.registerEvents();
                    }
                });
            } else {
                me.initSlider();
                me.registerEvents();
            }
        },
        update: function() {
            var me = this;
            if (!me.initialized || !me.$el.is(":visible")) {
                return false;
            }
            me.trackItems();
            me.setSizes();
            var copyCount = me.itemsCount - me.totalUniqueItems, copySize = me.itemsPerPage + me.itemsPerSlide;
            if (me.totalUniqueItems && me.totalUniqueItems <= me.itemsPerPage) {
                me.$items.slice(me.totalUniqueItems, me.itemsCount).remove();
                me.trackItems();
            } else if (me.totalUniqueItems && copySize > copyCount) {
                me.cloneItems(copyCount, copySize);
                me.trackItems();
            } else if (!me.totalUniqueItems && me.isActive() && me.opts.mode !== "ajax") {
                me.initInfiniteSlide();
            }
            me.setPosition(0);
            me.trackArrows();
            $.publish("plugin/swProductSlider/onUpdate", [ me ]);
        },
        initSlider: function() {
            var me = this, opts = me.opts;
            me.$el.addClass(opts.wrapperCls);
            me.createContainer();
            me.trackItems();
            me.setSizes();
            me.currentPosition = me.getScrollPosition();
            if (me.itemsCount <= 0 && opts.mode === "ajax") {
                me.loadItems(0, Math.min(me.itemsPerPage * 2, opts.ajaxMaxShow), $.proxy(me.initSlider, me));
                return;
            }
            if (me.opts.arrowControls && me.isActive()) me.createArrows();
            if (me.opts.autoScroll && me.isActive()) me.autoScroll();
            if (me.opts.autoSlide && me.isActive()) me.autoSlide();
            if (me.opts.mode !== "ajax" && me.isActive()) {
                me.initInfiniteSlide();
            }
            me.initialized = true;
            $.publish("plugin/swProductSlider/onInitSlider", [ me ]);
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$el, "touchstart mouseenter", $.proxy(me.onMouseEnter, me));
            me._on(me.$el, "mouseleave", $.proxy(me.onMouseLeave, me));
            me._on(me.$container, "scroll", $.proxy(me.onScroll, me));
            me._on($window, "resize", $.proxy(me.buffer, me, me.update, 600));
            $.subscribe(me.getEventName("plugin/swTabMenu/onChangeTab"), $.proxy(me.update, me));
            $.subscribe(me.getEventName("plugin/swCollapsePanel/onOpenPanel"), $.proxy(me.update, me));
            $.publish("plugin/swProductSlider/onRegisterEvents", [ me ]);
        },
        isActive: function() {
            var me = this;
            return me.$items.length > me.itemsPerPage;
        },
        getScrollPosition: function(orientation) {
            var me = this, o = orientation || me.opts.orientation;
            return o === "vertical" ? me.$container.scrollTop() : me.$container.scrollLeft();
        },
        setPosition: function(position) {
            var me = this, pos = position || 0, method = me.opts.orientation === "vertical" ? "scrollTop" : "scrollLeft";
            me.$container[method](pos);
            me.currentPosition = pos;
            $.publish("plugin/swProductSlider/onSetPosition", [ me, pos ]);
        },
        setSizes: function(orientation) {
            var me = this, o = orientation || me.opts.orientation, containerSize = o === "vertical" ? me.$el.innerHeight() : me.$el.innerWidth(), itemSize = o === "vertical" ? me.opts.itemMinHeight : me.opts.itemMinWidth;
            me.itemsPerPage = Math.floor(containerSize / itemSize);
            if (me.itemsPerPage < 1) me.itemsPerPage = 1;
            me.itemsPerSlide = Math.min(me.opts.itemsPerSlide, me.itemsPerPage);
            me.itemSizePercent = 100 / me.itemsPerPage;
            if (o === "vertical") {
                me.$items.css({
                    height: me.itemSizePercent + "%"
                });
                me.itemSize = Math.ceil(me.$items.outerHeight());
            } else {
                me.$items.css({
                    width: me.itemSizePercent + "%"
                });
                me.itemSize = Math.ceil(me.$items.outerWidth());
            }
            window.picturefill();
            $.publish("plugin/swProductSlider/onSetSizes", [ me, orientation ]);
        },
        trackItems: function() {
            var me = this;
            me.$items = me.$container.find(me.opts.itemSelector);
            me.itemsCount = me.$items.length;
            $.publish("plugin/swProductSlider/onTrackItems", [ me, me.items, me.itemsCount ]);
            return me.itemsCount;
        },
        trackArrows: function() {
            var me = this;
            if (!me.$arrowPrev || !me.$arrowNext) {
                if (me.isActive() && me.opts.arrowControls) me.createArrows();
                return;
            }
            if (!me.isActive()) {
                me.$arrowPrev.hide();
                me.$arrowNext.hide();
                return;
            }
            var slideEnd = me.currentPosition + me.$container[me.opts.orientation === "vertical" ? "outerHeight" : "outerWidth"]();
            me.$arrowPrev[me.currentPosition > 5 ? "show" : "hide"]();
            me.$arrowNext[slideEnd >= parseInt(me.itemSize * me.itemsCount, 10) - 5 ? "hide" : "show"]();
            $.publish("plugin/swProductSlider/onTrackArrows", [ me, me.$arrowPrev, me.$arrowNext ]);
        },
        showLoadingIndicator: function() {
            var me = this;
            me.$ajaxLoadingIndicator = $("<div>", {
                class: me.opts.ajaxLoadingIndicatorCls,
                html: $("<i>", {
                    class: me.opts.ajaxLoadingIndicatorIconCls
                })
            }).appendTo(me.$el);
        },
        removeLoadingIndicator: function() {
            var me = this;
            if (me.$ajaxLoadingIndicator) {
                me.$ajaxLoadingIndicator.remove();
            }
        },
        loadItems: function(start, limit, callback) {
            var me = this, data = {
                start: start,
                limit: limit
            };
            if (me.opts.ajaxCategoryID !== null) {
                data["category"] = me.opts.ajaxCategoryID;
            }
            me.isLoading = true;
            $.publish("plugin/swProductSlider/onLoadItemsBefore", [ me, data ]);
            $.ajax({
                url: me.opts.ajaxCtrlUrl,
                method: "GET",
                data: data,
                success: function(response) {
                    me.removeLoadingIndicator();
                    me.isLoading = false;
                    me.$container.append(response);
                    if (me.itemsCount === me.trackItems()) {
                        me.initInfiniteSlide();
                    }
                    me.setSizes();
                    me.trackArrows();
                    $.publish("plugin/swProductSlider/onLoadItemsSuccess", [ me, response ]);
                    if (typeof callback === "function" && me.itemsCount > 0) {
                        callback.call(me, response);
                    }
                }
            });
            $.publish("plugin/swProductSlider/onLoadItems", [ me ]);
        },
        createContainer: function(orientation) {
            var me = this, o = orientation || me.opts.orientation, orientationCls = o === "vertical" ? me.opts.verticalCls : me.opts.horizontalCls, $container = me.$el.find(me.opts.containerSelector);
            if (!$container.length) {
                $container = $("<div>", {
                    class: me.opts.containerSelector.substr(1)
                }).appendTo(me.$el);
            }
            $container.addClass(orientationCls);
            me.$container = $container;
            $.publish("plugin/swProductSlider/onCreateContainer", [ me, $container, orientation ]);
            return $container;
        },
        createArrows: function() {
            var me = this, orientationCls = me.opts.orientation === "vertical" ? me.opts.verticalCls : me.opts.horizontalCls;
            if (!me.opts.arrowControls || !me.isActive()) {
                return;
            }
            if (!me.$arrowPrev) {
                me.$arrowPrev = $("<a>", {
                    class: me.opts.arrowCls + " " + me.opts.prevArrowCls + " " + orientationCls
                }).prependTo(me.$el);
                me._on(me.$arrowPrev, "click", $.proxy(me.onArrowClick, me, "prev"));
            }
            if (!me.$arrowNext) {
                me.$arrowNext = $("<a>", {
                    class: me.opts.arrowCls + " " + me.opts.nextArrowCls + " " + orientationCls
                }).prependTo(me.$el);
                me._on(me.$arrowNext, "click", $.proxy(me.onArrowClick, me, "next"));
            }
            me.trackArrows();
            $.publish("plugin/swProductSlider/onCreateArrows", [ me, me.$arrowPrev, me.$arrowNext ]);
        },
        onArrowClick: function(type, event) {
            var me = this, next = me.opts.arrowAction === "scroll" ? "scrollNext" : "slideNext", prev = me.opts.arrowAction === "scroll" ? "scrollPrev" : "slidePrev";
            event.preventDefault();
            me[type === "prev" ? prev : next]();
            $.publish("plugin/swProductSlider/onArrowClick", [ me, event, type ]);
        },
        onMouseEnter: function(event) {
            var me = this;
            me.stopAutoScroll();
            me.stopAutoSlide();
            $.publish("plugin/swProductSlider/onMouseEnter", [ me, event ]);
        },
        onMouseLeave: function(event) {
            var me = this;
            if (me.isActive() && me.opts.autoScroll) me.autoScroll();
            if (me.isActive() && me.opts.autoSlide) me.autoSlide();
            $.publish("plugin/swProductSlider/onMouseLeave", [ me, event ]);
        },
        onScroll: function(event) {
            var me = this;
            if (!me.isAnimating) {
                me.currentPosition = me.getScrollPosition();
            }
            me.trackArrows();
            if (me.opts.mode !== "ajax" || me.isLoading) {
                return;
            }
            var position = me.getScrollPosition(), scrolledItems = Math.floor(position / me.itemSize), itemsLeftToLoad = me.opts.ajaxMaxShow - me.itemsCount, loadMoreCount = me.itemsCount - me.itemsPerPage * 2;
            if (!me.totalUniqueItems && itemsLeftToLoad === 0) {
                me.initInfiniteSlide();
            }
            if (!me.totalUniqueItems && scrolledItems >= loadMoreCount && itemsLeftToLoad > 0) {
                me.loadItems(me.itemsCount, Math.min(me.itemsPerPage, itemsLeftToLoad));
            }
            $.publish("plugin/swProductSlider/onScroll", [ me, event ]);
        },
        initInfiniteSlide: function() {
            var me = this;
            if (!me.opts.infiniteSlide) {
                return;
            }
            me.cloneItems(0, me.itemsPerPage + me.itemsPerSlide);
            me.totalUniqueItems = me.itemsCount;
            me.trackItems();
            $.publish("plugin/swProductSlider/onInitInfiniteSlide", [ me ]);
        },
        cloneItems: function(start, end) {
            var me = this, $copyItems = me.$items.slice(start, end);
            me.$container.append($copyItems.clone());
            $.publish("plugin/swProductSlider/onCloneItems", [ me, start, end, $copyItems ]);
        },
        resetToStart: function() {
            var me = this;
            me.scrollingReachedEndOfItems = false;
            me.setPosition((Math.floor(me.currentPosition / me.itemSize) - me.totalUniqueItems) * me.itemSize);
            $.publish("plugin/swProductSlider/onResetToStart", [ me, me.currentPosition ]);
        },
        slideNext: function() {
            var me = this;
            if (me.scrollingReachedEndOfItems) {
                me.resetToStart();
            }
            me.currentPosition = Math.floor((me.currentPosition + me.itemSize * me.itemsPerSlide) / me.itemSize) * me.itemSize;
            me.slide(me.currentPosition);
            if (me.totalUniqueItems && me.currentPosition / me.itemSize >= me.totalUniqueItems) {
                me.scrollingReachedEndOfItems = true;
            }
            $.publish("plugin/swProductSlider/onSlideNext", [ me, me.currentPosition ]);
        },
        slidePrev: function() {
            var me = this;
            me.scrollingReachedEndOfItems = false;
            me.currentPosition = Math.ceil((me.currentPosition - me.itemSize * me.itemsPerSlide) / me.itemSize) * me.itemSize;
            me.slide(me.currentPosition);
            $.publish("plugin/swProductSlider/onSlidePrev", [ me, me.currentPosition ]);
        },
        slideToElement: function($el, orientation) {
            var me = this, o = orientation || me.opts.orientation, position = $el.position(), slide = o === "vertical" ? position.top : position.left;
            me.slide(slide);
            $.publish("plugin/swProductSlider/onSlideToElement", [ me, $el, orientation ]);
        },
        slide: function(position) {
            var me = this, animation = {};
            me.isAnimating = true;
            animation[me.opts.orientation === "vertical" ? "scrollTop" : "scrollLeft"] = position;
            me.$container.stop().animate(animation, me.opts.animationSpeed, "easeOutExpo", function() {
                me.currentPosition = me.getScrollPosition();
                me.isAnimating = false;
                $.publish("plugin/swProductSlider/onSlideFinished", [ me, me.currentPosition ]);
            });
            $.publish("plugin/swProductSlider/onSlide", [ me, position ]);
        },
        autoSlide: function(slideDirection, slideSpeed) {
            var me = this, direction = slideDirection || me.opts.autoSlideDirection, speed = slideSpeed || me.opts.autoSlideSpeed, method = direction === "prev" ? me.slidePrev : me.slideNext;
            me.autoSlideAnimation = window.setInterval($.proxy(method, me), speed * 1e3);
            $.publish("plugin/swProductSlider/onAutoSlide", [ me, me.autoSlideAnimation, slideDirection, slideSpeed ]);
        },
        stopAutoSlide: function() {
            var me = this;
            window.clearInterval(me.autoSlideAnimation);
            me.autoSlideAnimation = false;
            $.publish("plugin/swProductSlider/onStopAutoSlide", [ me ]);
        },
        scrollNext: function(scrollDistance) {
            var me = this;
            me.currentPosition += scrollDistance || me.opts.scrollDistance;
            me.slide(me.currentPosition);
            $.publish("plugin/swProductSlider/onScrollNext", [ me, me.currentPosition, scrollDistance ]);
        },
        scrollPrev: function(scrollDistance) {
            var me = this;
            me.currentPosition -= scrollDistance || me.opts.scrollDistance;
            me.slide(me.currentPosition);
            $.publish("plugin/swProductSlider/onScrollPrev", [ me, me.currentPosition, scrollDistance ]);
        },
        autoScroll: function(scrollDirection, scrollSpeed) {
            var me = this, direction = scrollDirection || me.opts.autoScrollDirection, speed = scrollSpeed || me.opts.autoScrollSpeed, position = me.getScrollPosition();
            me.autoScrollAnimation = StateManager.requestAnimationFrame($.proxy(me.autoScroll, me, direction, speed));
            me.setPosition(direction === "prev" ? position - speed : position + speed);
            if (me.totalUniqueItems && me.currentPosition / me.itemSize >= me.totalUniqueItems) {
                me.setPosition(0);
            }
            $.publish("plugin/swProductSlider/onAutoScroll", [ me, me.autoScrollAnimation, scrollDirection, scrollSpeed ]);
        },
        stopAutoScroll: function() {
            var me = this;
            StateManager.cancelAnimationFrame(me.autoScrollAnimation);
            me.autoScrollAnimation = false;
            $.publish("plugin/swProductSlider/onStopAutoScroll", [ me ]);
        },
        buffer: function(func, bufferTime) {
            var me = this;
            window.clearTimeout(me.bufferedCall);
            me.bufferedCall = window.setTimeout($.proxy(func, me), bufferTime);
            $.publish("plugin/swProductSlider/onBuffer", [ me, me.bufferedCall, func, bufferTime ]);
        },
        destroy: function() {
            var me = this;
            if (me.opts.initOnEvent !== null) {
                $.unsubscribe(me.getEventName(me.opts.initOnEvent));
            }
            $.unsubscribe(me.getEventName("plugin/swTabMenu/onChangeTab"));
            $.unsubscribe(me.getEventName("plugin/swCollapsePanel/onOpenPanel"));
            if (me.$arrowPrev) me.$arrowPrev.remove();
            if (me.$arrowNext) me.$arrowNext.remove();
            me.stopAutoSlide();
            me.stopAutoScroll();
            me._destroy();
        }
    });
})(jQuery, window);

(function($) {
    "use strict";
    $.plugin("swRegister", {
        defaults: {
            hiddenClass: "is--hidden",
            errorClass: "has--error",
            formSelector: ".register--form",
            submitBtnSelector: ".register--submit,.address--form-submit",
            typeFieldSelector: ".register--customertype select,.address--customertype select,.address--customertype input",
            companyType: "business",
            skipAccountSelector: ".register--check input",
            altShippingSelector: ".register--alt-shipping input",
            companyFieldSelector: ".register--company,.address--company",
            accountFieldSelector: ".register--account-information",
            shippingFieldSelector: ".register--shipping",
            paymentFieldSelector: ".payment--content",
            paymentInputSelector: ".payment--selection-input input",
            countryFieldSelector: ".select--country",
            stateContainerSelector: ".register--state-selection, .address--state-selection",
            paymentMethodSelector: ".payment--method",
            inputSelector: ".is--required",
            errorMessageClass: "register--error-msg",
            personalEmailSelector: "#register_personal_email",
            personalPasswordSelector: "#register_personal_password",
            personalEmailConfirmationSelector: "#register_personal_emailConfirmation",
            personalPasswordConfirmationSelector: "#register_personal_passwordConfirmation",
            personalGuestSelector: "#register_personal_skipLogin"
        },
        init: function() {
            var me = this, opts = me.opts, $el = me.$el;
            me.applyDataAttributes();
            me.$personalEmail = $el.find(opts.personalEmailSelector);
            me.$personalPassword = $el.find(opts.personalPasswordSelector);
            me.$personalEmailConfirmation = $el.find(opts.personalEmailConfirmationSelector);
            me.$personalPasswordConfirmation = $el.find(opts.personalPasswordConfirmationSelector);
            me.$personalGuest = $el.find(opts.personalGuestSelector);
            me.$form = $el.find(opts.formSelector);
            me.$submitBtn = $el.find(opts.submitBtnSelector);
            me.$typeSelection = $el.find(opts.typeFieldSelector);
            me.$skipAccount = $el.find(opts.skipAccountSelector);
            me.$alternativeShipping = $el.find(opts.altShippingSelector);
            me.$companyFieldset = $el.find(opts.companyFieldSelector);
            me.$accountFieldset = $el.find(opts.accountFieldSelector);
            me.$shippingFieldset = $el.find(opts.shippingFieldSelector);
            me.$countySelectFields = $el.find(opts.countryFieldSelector);
            me.$paymentMethods = $el.find(opts.paymentMethodSelector);
            me.$inputs = $el.find(opts.inputSelector);
            me.$stateContainers = $el.find(opts.stateContainerSelector);
            me.checkType();
            me.checkSkipAccount();
            me.checkChangeShipping();
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$typeSelection, "change", $.proxy(me.checkType, me));
            me._on(me.$skipAccount, "change", $.proxy(me.checkSkipAccount, me));
            me._on(me.$alternativeShipping, "change", $.proxy(me.checkChangeShipping, me));
            me._on(me.$countySelectFields, "change", $.proxy(me.onCountryChanged, me));
            me._on(me.$paymentMethods, "change", $.proxy(me.onPaymentChanged, me));
            me._on(me.$form, "focusout", $.proxy(me.onValidateInput, me));
            me._on(me.$submitBtn, "click", $.proxy(me.onSubmitBtn, me));
            $.publish("plugin/swRegister/onRegisterEvents", [ me ]);
        },
        checkType: function() {
            var me = this, opts = me.opts, $fieldSet = me.$companyFieldset, hideCompanyFields = me.$typeSelection.length && me.$typeSelection.val() !== opts.companyType, requiredFields = $fieldSet.find(opts.inputSelector), requiredMethod = !hideCompanyFields ? me.setHtmlRequired : me.removeHtmlRequired, classMethod = !hideCompanyFields ? "removeClass" : "addClass";
            requiredMethod(requiredFields);
            $fieldSet[classMethod](opts.hiddenClass);
            if (!hideCompanyFields) {
                $fieldSet.find("input, select, textarea").prop("disabled", false);
            } else {
                $fieldSet.find("input, select, textarea").attr("disabled", "disabled");
            }
            $.publish("plugin/swRegister/onCheckType", [ me, hideCompanyFields ]);
        },
        checkSkipAccount: function() {
            var me = this, opts = me.opts, $fieldSet = me.$accountFieldset, isChecked = me.$skipAccount.is(":checked"), requiredFields = $fieldSet.find(opts.inputSelector), requiredMethod = !isChecked ? me.setHtmlRequired : me.removeHtmlRequired, classMethod = isChecked ? "addClass" : "removeClass";
            requiredMethod(requiredFields);
            $fieldSet[classMethod](opts.hiddenClass);
            $.publish("plugin/swRegister/onCheckSkipAccount", [ me, isChecked ]);
        },
        checkChangeShipping: function() {
            var me = this, opts = me.opts, $fieldSet = me.$shippingFieldset, isChecked = me.$alternativeShipping.is(":checked"), requiredFields = $fieldSet.find(opts.inputSelector), requiredMethod = isChecked ? me.setHtmlRequired : me.removeHtmlRequired, classMethod = isChecked ? "removeClass" : "addClass";
            requiredMethod(requiredFields);
            $fieldSet[classMethod](opts.hiddenClass);
            $.publish("plugin/swRegister/onCheckChangeShipping", [ me, isChecked ]);
        },
        onCountryChanged: function(event) {
            var me = this, $select = $(event.currentTarget), countryId = $select.val(), addressType = $select.attr("data-address-type"), $stateContainers;
            $.publish("plugin/swRegister/onCountryChangedBefore", [ me, event, countryId, addressType ]);
            me.resetStateSelections(addressType);
            $stateContainers = me.$stateContainers.filter('[data-address-type="' + addressType + '"]');
            if ($stateContainers.length === 0) {
                $stateContainers = me.$stateContainers;
            }
            $stateContainers = $stateContainers.filter('[data-country-id="' + countryId + '"]');
            if ($stateContainers.length) {
                $stateContainers.removeClass(me.opts.hiddenClass);
                $select = $stateContainers.find("select");
                $select.prop("disabled", false);
            }
            $.publish("plugin/swRegister/onCountryChanged", [ me, event, countryId, addressType ]);
        },
        resetStateSelections: function(addressType) {
            var me = this, $select, $stateContainers, $stateContainer;
            $stateContainers = me.$stateContainers.filter('[data-address-type="' + addressType + '"]');
            if ($stateContainers.length === 0) {
                $stateContainers = me.$stateContainers;
            }
            $.each($stateContainers, function(index, stateContainer) {
                $stateContainer = $(stateContainer);
                $select = $stateContainer.find("select");
                $select.attr("disabled", "disabled");
                $stateContainer.addClass(me.opts.hiddenClass);
            });
        },
        onPaymentChanged: function() {
            var me = this, opts = me.opts, inputClass = opts.inputSelector, hiddenClass = opts.hiddenClass, inputSelector = opts.paymentInputSelector, paymentSelector = opts.paymentFieldSelector, requiredMethod, $fieldSet, isChecked, radio, $el;
            $.each(me.$paymentMethods, function(index, el) {
                $el = $(el);
                radio = $el.find(inputSelector);
                isChecked = radio[0].checked;
                requiredMethod = isChecked ? me.setHtmlRequired : me.removeHtmlRequired;
                requiredMethod($el.find(inputClass));
                $fieldSet = $el.find(paymentSelector);
                $fieldSet[isChecked ? "removeClass" : "addClass"](hiddenClass);
            });
            $.publish("plugin/swRegister/onPaymentChanged", [ me ]);
        },
        onSubmitBtn: function() {
            var me = this, $input;
            me.$inputs.each(function() {
                $input = $(this);
                if (!$input.val()) {
                    me.setFieldAsError($input);
                }
            });
            $.publish("plugin/swRegister/onSubmitButton", [ me ]);
        },
        onValidateInput: function(event) {
            var me = this, $el = $(event.target), id = $el.attr("id"), action, relatedTarget = event.relatedTarget || document.activeElement, hasEmailConfirmation = me.$personalEmailConfirmation.length > 0, hasPasswordConfirmation = me.$personalPasswordConfirmation.length > 0;
            me.$targetElement = $(relatedTarget);
            switch (id) {
              case undefined:
                break;

              case me.$personalEmail.prop("id"):
              case me.$personalEmailConfirmation.prop("id"):
                if (hasEmailConfirmation && (me.$personalEmail.val().length <= 0 || me.$personalEmailConfirmation.val().length <= 0)) {
                    break;
                }
                action = "ajax_validate_email";
                break;

              case me.$personalPassword.prop("id"):
              case me.$personalPasswordConfirmation.prop("id"):
                if (hasPasswordConfirmation && (me.$personalPassword.val().length <= 0 || me.$personalPasswordConfirmation.val().length <= 0)) {
                    break;
                }
                action = "ajax_validate_password";
                break;

              default:
                break;
            }
            if (!$el.val() && $el.attr("required")) {
                me.setFieldAsError($el);
            } else if ($el.attr("type") === "checkbox" && !$el.is(":checked")) {
                me.setFieldAsError($el);
            } else if (action) {
                me.validateUsingAjax($el, action);
            } else {
                me.setFieldAsSuccess($el);
            }
            $.publish("plugin/swRegister/onValidateInput", [ me, event, action ]);
        },
        setHtmlRequired: function($elements) {
            $elements.attr({
                required: "required",
                "aria-required": "true"
            });
            $.publish("plugin/swRegister/onSetHtmlRequired", [ this, $elements ]);
        },
        removeHtmlRequired: function($inputs) {
            $inputs.prop("required", false).prop("aria-required", false);
            $.publish("plugin/swRegister/onRemoveHtmlRequired", [ this, $inputs ]);
        },
        setFieldAsError: function($el) {
            var me = this;
            $el.addClass(me.opts.errorClass);
            $.publish("plugin/swRegister/onSetFieldAsError", [ me, $el ]);
        },
        setFieldAsSuccess: function($el) {
            var me = this;
            $el.removeClass(me.opts.errorClass);
            $.publish("plugin/swRegister/onSetFieldAsSuccess", [ me, $el ]);
        },
        validateUsingAjax: function($input, action) {
            var me = this, data = "action=" + action + "&" + me.$el.find("form").serialize(), URL = window.controller.ajax_validate + "/" + action;
            if (!URL) {
                return;
            }
            $.publish("plugin/swRegister/onValidateBefore", [ me, data, URL ]);
            $.ajax({
                data: data,
                type: "post",
                dataType: "json",
                url: URL,
                success: $.proxy(me.onValidateSuccess, me, action, $input)
            });
        },
        onValidateSuccess: function(action, $input, result) {
            var me = this, isError, errorMessages = [], skipEmailConfirmationError = me.$targetElement.attr("name") == me.$personalEmailConfirmation.attr("name") && typeof me.$personalEmailConfirmation.val() === "undefined", skipPasswordConfirmationError = me.$targetElement.attr("name") == me.$personalPasswordConfirmation.attr("name") && typeof me.$personalPasswordConfirmation.val() === "undefined";
            $("#" + action + "--message").remove();
            if (!result) {
                return;
            }
            if (skipEmailConfirmationError) {
                result["emailConfirmation"] = false;
            } else if (skipPasswordConfirmationError) {
                result["passwordConfirmation"] = false;
            }
            for (var key in result) {
                isError = !!result[key];
                if (!isError) {
                    continue;
                }
                if (key == "emailConfirmation" && skipEmailConfirmationError) {
                    result[key] = false;
                    continue;
                } else if (key == "passwordConfirmation" && skipPasswordConfirmationError) {
                    result[key] = false;
                    continue;
                }
                if ($input.attr("name") == me.$personalEmailConfirmation.attr("name") || $input.attr("name") == me.$personalGuest.attr("name")) {
                    $input = me.$personalEmail;
                } else if ($input.attr("name") == me.$personalPasswordConfirmation.attr("name")) {
                    $input = me.$personalPassword;
                }
                errorMessages.push(result[key]);
            }
            if (result) {
                me.updateFieldFlags(result);
            }
            if (errorMessages && errorMessages.length) {
                $("<div>", {
                    html: "<p>" + errorMessages.join("<br/>") + "</p>",
                    id: action + "--message",
                    class: me.opts.errorMessageClass
                }).insertAfter($input);
                me.setFieldAsError($input);
            }
            $.publish("plugin/swRegister/onValidateSuccess", [ me, $input ]);
        },
        updateFieldFlags: function(flags) {
            var me = this, $el = me.$el, keys = Object.keys(flags), len = keys.length, i = 0, flag, $input;
            for (;i < len; i++) {
                flag = keys[i];
                $input = $el.find("." + flag);
                if (flags[flag]) {
                    me.setFieldAsError($input);
                    continue;
                }
                me.setFieldAsSuccess($input);
            }
            $.publish("plugin/swRegister/onUpdateFields", [ me, flags ]);
        },
        destroy: function() {
            this._destroy();
        }
    });
})(jQuery);

(function($, window) {
    "use strict";
    var emptyFn = function() {}, $html = $("html");
    $.modal = {
        _$modalBox: null,
        _$header: null,
        _$title: null,
        _$content: null,
        _$closeButton: null,
        defaults: {
            mode: "local",
            sizing: "auto",
            width: 600,
            height: 600,
            maxHeight: 0,
            overlay: true,
            closeOnOverlay: true,
            showCloseButton: true,
            animationSpeed: 500,
            title: "",
            src: "",
            closeKeys: [ 27 ],
            keyboardClosing: true,
            onClose: emptyFn,
            updateImages: false,
            additionalClass: ""
        },
        options: {},
        open: function(content, options) {
            var me = this, $modalBox = me._$modalBox, opts;
            me.options = opts = $.extend({}, me.defaults, options);
            if (opts.overlay) {
                $.overlay.open($.extend({}, {
                    closeOnClick: opts.closeOnOverlay,
                    onClose: $.proxy(me.onOverlayClose, me)
                }));
            }
            if (!$modalBox) {
                me.initModalBox();
                me.registerEvents();
                $modalBox = me._$modalBox;
            }
            me._$closeButton.toggle(opts.showCloseButton);
            $modalBox.toggleClass("sizing--auto", opts.sizing === "auto");
            $modalBox.toggleClass("sizing--fixed", opts.sizing === "fixed");
            $modalBox.toggleClass("sizing--content", opts.sizing === "content");
            $modalBox.toggleClass("no--header", opts.title.length === 0);
            $modalBox.addClass(opts.additionalClass);
            if (opts.sizing === "content") {
                opts.height = "auto";
            } else {
                $modalBox.css("top", 0);
            }
            me.setTitle(opts.title);
            me.setWidth(opts.width);
            me.setHeight(opts.height);
            me.setMaxHeight(opts.maxHeight);
            $modalBox.css("display", "block");
            switch (opts.mode) {
              case "ajax":
                $.ajax(content, {
                    data: {
                        isXHR: 1
                    },
                    success: function(result) {
                        me.setContent(result);
                        $.publish("plugin/swModal/onOpenAjax", me);
                    }
                });
                me.options.src = content;
                break;

              case "iframe":
                me.setContent('<iframe class="content--iframe" src="' + content + '" width="100%" height="100%"></iframe>');
                me.options.src = content;
                break;

              default:
                me.setContent(content);
                break;
            }
            me.setTransition({
                opacity: 1
            }, me.options.animationSpeed, "linear");
            $html.addClass("no--scroll");
            $.publish("plugin/swModal/onOpen", [ me ]);
            return me;
        },
        close: function() {
            var me = this, opts = me.options, $modalBox = me._$modalBox;
            if (opts.overlay) {
                $.overlay.close();
            }
            $html.removeClass("no--scroll");
            if ($modalBox !== null) {
                me.setTransition({
                    opacity: 0
                }, opts.animationSpeed, "linear", function() {
                    $modalBox.removeClass(opts.additionalClass);
                    $modalBox.css("display", "none");
                    opts.onClose.call(me);
                    me._$content.empty();
                });
            }
            $.publish("plugin/swModal/onClose", [ me ]);
            return me;
        },
        setTransition: function(css, duration, animation, callback) {
            var me = this, $modalBox = me._$modalBox, opts = $.extend({
                animation: "ease",
                duration: me.options.animationSpeed
            }, {
                animation: animation,
                duration: duration
            });
            if (!$.support.transition) {
                $modalBox.stop(true).animate(css, opts.duration, opts.animation, callback);
                return;
            }
            $modalBox.stop(true).transition(css, opts.duration, opts.animation, callback);
            $.publish("plugin/swModal/onSetTransition", [ me, css, opts ]);
        },
        setTitle: function(title) {
            var me = this;
            me._$title.html(title);
            $.publish("plugin/swModal/onSetTitle", [ me, title ]);
        },
        setContent: function(content) {
            var me = this, opts = me.options;
            me._$content.html(content);
            if (opts.sizing === "content") {
                me.center();
                window.setTimeout(me.center.bind(me), 25);
            }
            if (opts.updateImages) {
                picturefill();
            }
            $.publish("plugin/swModal/onSetContent", [ me ]);
        },
        setWidth: function(width) {
            var me = this;
            me._$modalBox.css("width", typeof width === "string" && !/^\d+$/.test(width) ? width : parseInt(width, 10));
            $.publish("plugin/swModal/onSetWidth", [ me ]);
        },
        setHeight: function(height) {
            var me = this, hasTitle = me._$title.text().length > 0, headerHeight;
            height = typeof height === "string" && !/^\d+$/.test(height) ? height : window.parseInt(height, 10);
            if (hasTitle) {
                headerHeight = window.parseInt(me._$header.css("height"), 10);
                me._$content.css("height", height - headerHeight);
            } else {
                me._$content.css("height", "100%");
            }
            me._$modalBox.css("height", height);
            $.publish("plugin/swModal/onSetHeight", [ me ]);
        },
        setMaxHeight: function(height) {
            var me = this;
            if (!height) {
                return;
            }
            height = typeof height === "string" && !/^\d+$/.test(height) ? height : window.parseInt(height, 10);
            me._$modalBox.css("max-height", height);
            $.publish("plugin/swModal/onSetMaxHeight", [ me ]);
        },
        initModalBox: function() {
            var me = this;
            me._$modalBox = $("<div>", {
                class: "js--modal"
            });
            me._$header = $("<div>", {
                class: "header"
            }).appendTo(me._$modalBox);
            me._$title = $("<div>", {
                class: "title"
            }).appendTo(me._$header);
            me._$content = $("<div>", {
                class: "content"
            }).appendTo(me._$modalBox);
            me._$closeButton = $("<div>", {
                class: "btn icon--cross is--small btn--grey modal--close"
            }).appendTo(me._$modalBox);
            $("body").append(me._$modalBox);
            $.publish("plugin/swModal/onInit", [ me ]);
        },
        registerEvents: function() {
            var me = this, $window = $(window);
            me._$closeButton.on("click.modal touchstart.modal", $.proxy(me.close, me));
            $window.on("keydown.modal", $.proxy(me.onKeyDown, me));
            StateManager.on("resize", me.onWindowResize, me);
            StateManager.registerListener({
                state: "xs",
                enter: function() {
                    me._$modalBox.addClass("is--fullscreen");
                },
                exit: function() {
                    me._$modalBox.removeClass("is--fullscreen");
                }
            });
            $.publish("plugin/swModal/onRegisterEvents", [ me ]);
        },
        onKeyDown: function(event) {
            var me = this, keyCode = event.which, keys = me.options.closeKeys, len = keys.length, i = 0;
            if (!me.options.keyboardClosing) {
                return;
            }
            for (;i < len; i++) {
                if (keys[i] === keyCode) {
                    me.close();
                }
            }
            $.publish("plugin/swModal/onKeyDown", [ me, event, keyCode ]);
        },
        onWindowResize: function(event) {
            var me = this;
            if (me.options.sizing === "content") {
                me.center();
            }
            $.publish("plugin/swModal/onWindowResize", [ me, event ]);
        },
        center: function() {
            var me = this, $modalBox = me._$modalBox, windowHeight = window.innerHeight || $(window).height();
            $modalBox.css("top", (windowHeight - $modalBox.height()) / 2);
            $.publish("plugin/swModal/onCenter", [ me ]);
        },
        onOverlayClose: function() {
            var me = this;
            if (!me.options.closeOnOverlay) {
                return;
            }
            me.close();
            $.publish("plugin/swModal/onOverlayClick", [ me ]);
        },
        destroy: function() {
            var me = this, p;
            me._$modalBox.remove();
            me._$modalBox = null;
            me._$header = null;
            me._$title = null;
            me._$content = null;
            me._$closeButton = null;
            for (p in me.options) {
                if (!me.options.hasOwnProperty(p)) {
                    continue;
                }
                delete me.options[p];
            }
            StateManager.off("resize", me.onWindowResize, [ me ]);
        }
    };
    $.plugin("swModalbox", {
        defaults: {
            targetSelector: "",
            content: "",
            mode: "local"
        },
        init: function() {
            var me = this, opts;
            me.opts = $.extend({}, Object.create($.modal.defaults), me.opts);
            me.applyDataAttributes();
            opts = me.opts;
            me.$target = opts.targetSelector && (me.$target = me.$el.find(opts.targetSelector)).length ? me.$target : me.$el;
            me._isOpened = false;
            me._on(me.$target, "click", $.proxy(me.onClick, me));
            $.subscribe(me.getEventName("plugin/swModal/onClose"), $.proxy(me.onClose, me));
            $.publish("plugin/swModalbox/onRegisterEvents", [ me ]);
        },
        onClick: function(event) {
            event.preventDefault();
            var me = this, target = me.$target.length === 1 && me.$target || $(event.currentTarget);
            $.modal.open(me.opts.content || (me.opts.mode !== "local" ? target.attr("href") : target), me.opts);
            me._isOpened = true;
            $.publish("plugin/swModalbox/onClick", [ me, event ]);
        },
        onClose: function() {
            var me = this;
            me._isOpened = false;
            $.publish("plugin/swModalbox/onClose", [ me ]);
        },
        destroy: function() {
            var me = this;
            if (me._isOpened) {
                $.modal.close();
            }
            $.unsubscribe(me.getEventName("plugin/swModal/onClose"));
            me._destroy();
        }
    });
})(jQuery, window);

(function($, window, document, undefined) {
    "use strict";
    $.plugin("swSelectboxReplacement", {
        defaults: {
            baseCls: "js--fancy-select select-field",
            polyfillSelector: ".js--fancy-select, .select-field",
            compatibility: true
        },
        init: function() {
            var me = this;
            me.applyDataAttributes(true);
            me.createTemplate();
            return me;
        },
        createTemplate: function() {
            var me = this, $parent = me.$el.parent(me.opts.polyfillSelector), $wrapEl;
            if ($parent.length > 0) {
                return false;
            }
            $wrapEl = $("<div>", {
                class: me.opts.baseCls
            });
            if (me.opts.compatibility) {
                $wrapEl.addClass(me.$el.attr("class"));
            }
            me.$wrapEl = me.$el.wrap($wrapEl);
            $.publish("plugin/swSelectboxReplacement/onCreateTemplate", [ me, me.$wrapEl ]);
            return me.$wrapEl;
        }
    });
})(jQuery, window, document);

(function($, window) {
    "use strict";
    $.plugin("swCaptcha", {
        defaults: {
            autoLoad: false,
            src: "",
            hasError: false
        },
        init: function() {
            var me = this, $el = me.$el;
            me.applyDataAttributes(true);
            var hasSource = me.opts.src.length > 0, isHoneypot = me.opts.src.indexOf("honeypot") >= 0;
            if (!hasSource || isHoneypot || !StateManager.hasCookiesAllowed()) {
                return;
            }
            if (me.opts.hasError) {
                window.setTimeout($.proxy(me.sendRequest, me), 1e3);
                return;
            }
            if (me.opts.autoLoad) {
                me.sendRequest();
            } else {
                me.$form = $el.closest("form");
                me.$formInputs = me.$form.find(':input:not([name="__csrf_token"], select)');
                me._on(me.$formInputs, "focus", $.proxy(me.onInputFocus, me));
            }
        },
        onInputFocus: function() {
            var me = this;
            me._off(me.$formInputs, "focus");
            me.sendRequest();
        },
        sendRequest: function() {
            var me = this, $el = me.$el;
            $.ajax({
                url: me.opts.src,
                cache: false,
                success: function(response) {
                    $el.html(response);
                    $.publish("plugin/swCaptcha/onSendRequestSuccess", [ me ]);
                }
            });
            $.publish("plugin/swCaptcha/onSendRequest", [ me ]);
        }
    });
})(jQuery, window);

(function($) {
    "use strict";
    $.plugin("swDropdownMenu", {
        defaults: {
            activeCls: "js--is--dropdown-active",
            preventDefault: true,
            closeOnBody: true,
            blockedElements: ".service--link, .compare--list, .compare--entry, " + ".compare--link, .btn--item-delete, .compare--icon-remove, .navigation--link, " + ".blocked--link"
        },
        init: function() {
            var me = this;
            me._on(me.$el, "touchstart click", $.proxy(me.onClickMenu, me));
            $.publish("plugin/swDropdownMenu/onRegisterEvents", [ me ]);
        },
        onClickMenu: function(event) {
            var me = this;
            me.applyDataAttributes();
            if ($(event.target).is(me.opts.blockedElements)) {
                return;
            }
            if (me.opts.preventDefault) {
                event.preventDefault();
            }
            me.$el.toggleClass(me.opts.activeCls);
            if (me.opts.closeOnBody) {
                event.stopPropagation();
                $("body").on(me.getEventName("touchstart click"), $.proxy(me.onClickBody, me));
            }
            $.publish("plugin/swDropdownMenu/onClickMenu", [ me, event ]);
        },
        onClickBody: function(event) {
            var me = this;
            if ($(event.target).is(me.opts.blockedElements)) {
                return;
            }
            event.preventDefault();
            $("body").off(me.getEventName("touchstart click"));
            me.$el.removeClass(me.opts.activeCls);
            $.publish("plugin/swDropdownMenu/onClickBody", [ me, event ]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
})(jQuery);

(function($) {
    "use strict";
    function LoadingIndicator(indicatorOptions) {
        indicatorOptions = indicatorOptions || {};
        this.options = $.extend({}, this.defaults, indicatorOptions);
        return this;
    }
    LoadingIndicator.prototype = {
        $loader: null,
        defaults: {
            loaderCls: "js--loading-indicator",
            iconCls: "icon--default",
            loadingCls: "js--is-loading",
            delay: 0,
            animationSpeed: 500,
            closeOnClick: true,
            openOverlay: true,
            renderElement: "body",
            theme: "dark"
        },
        open: function(callback, scope) {
            var me = this, deferred = $.Deferred(), elements;
            callback = callback || $.noop;
            scope = scope || me;
            me.$loader = me._createLoader();
            $(me.options.renderElement).append(me.$loader).addClass(me.options.loadingCls);
            me._updateLoader();
            if (me.options.openOverlay !== false) {
                me.overlay = new Overlay($.extend({}, {
                    closeOnClick: me.options.closeOnClick,
                    onClose: me.close.bind(me),
                    delay: me.options.delay,
                    renderElement: me.options.renderElement,
                    theme: me.options.theme
                }));
                me.overlay.open();
            }
            elements = {
                loader: me,
                overlay: me.options.openOverlay !== false ? me.overlay.overlay : null
            };
            me._timeout = window.setTimeout(function() {
                me.$loader.fadeIn(me.options.animationSpeed, function() {
                    deferred.resolve(elements);
                    callback.call(scope, elements);
                    $.publish("plugin/swLoadingIndicator/onOpenFinished", [ me, elements ]);
                });
            }, me.options.delay);
            $.publish("plugin/swLoadingIndicator/onOpen", [ me, elements ]);
            return deferred;
        },
        close: function(callback, scope) {
            var me = this, opts = me.options, deferred = $.Deferred();
            callback = callback || $.noop;
            scope = scope || me;
            if (!me.$loader || me.$loader === null) {
                deferred.reject(new Error("Element does not contains a loading indicator."));
                return deferred;
            }
            me.$loader.fadeOut(opts.animationSpeed || me.defaults.animationSpeed, function() {
                if (me._timeout) {
                    window.clearTimeout(me._timeout);
                }
                if (opts.openOverlay !== false) {
                    me.overlay.close().then(function() {
                        $(me.options.renderElement).removeClass(me.options.loadingCls);
                    });
                }
                me.$loader.remove();
                deferred.resolve(me);
                callback.call(scope);
                $.publish("plugin/swLoadingIndicator/onCloseFinished", [ me ]);
            });
            $.publish("plugin/swLoadingIndicator/onClose", [ me ]);
            return deferred;
        },
        _updateLoader: function() {
            var me = this, opts = me.options, $loader = me.$loader, $icon = $($loader.children()[0]);
            if (!$loader.hasClass(opts.loaderCls)) {
                $loader.removeClass("").addClass(opts.loaderCls);
            }
            if (!$icon.hasClass(opts.iconCls)) {
                $icon.removeClass("").addClass(opts.iconCls);
            }
        },
        _createLoader: function() {
            var me = this, loader;
            loader = $("<div>", {
                class: me.options.loaderCls
            }).append($("<div>", {
                class: me.options.iconCls
            }));
            return loader;
        }
    };
    $.loadingIndicator = {
        open: function(indicatorOptions, callback, scope) {
            if ($.isFunction(indicatorOptions)) {
                callback = indicatorOptions;
                indicatorOptions = {};
            }
            callback = callback || $.noop;
            scope = scope || this;
            $.loadingIndicator.loader = new LoadingIndicator(indicatorOptions);
            return $.loadingIndicator.loader.open(callback, scope);
        },
        close: function(callback, scope) {
            var deferred = $.Deferred();
            callback = callback || $.noop;
            scope = scope || this;
            if (!$.loadingIndicator.loader) {
                deferred.reject(new Error("No global loading indicator found."));
                return deferred;
            }
            return $.loadingIndicator.loader.close(callback, scope);
        }
    };
    $.fn.extend({
        setLoading: function(toggle, opts, callback, scope) {
            var deferred = $.Deferred(), target = this, $target = $(target), elements;
            if ($.isFunction(opts)) {
                scope = callback;
                callback = opts;
                opts = {};
            }
            callback = callback || $.noop;
            scope = scope || target;
            opts = opts || {};
            if (toggle) {
                var loader = new LoadingIndicator($.extend({}, {
                    renderElement: target
                }, opts));
                if ($target.find("." + loader.options.loaderCls).length) {
                    deferred.reject(new Error("Element has an loading indicator already."));
                    return deferred;
                }
                loader.open().always(function(elements) {
                    $target.data("__loadingIndicator", elements);
                    deferred.resolve(target, elements);
                    callback.call(scope, elements);
                });
                return deferred;
            }
            elements = $target.data("__loadingIndicator");
            if (!elements || !elements.hasOwnProperty("loader")) {
                deferred.reject(new Error("Element does not contains a loading indicator."));
                return deferred;
            }
            if (elements.overlay) {
                elements.overlay.close();
            }
            elements.loader.close().then(function() {
                deferred.resolve(target);
                callback.call(scope, target);
            });
            return deferred;
        }
    });
    window.LoadingIndicator = LoadingIndicator;
})(jQuery);

(function($) {
    "use strict";
    function Overlay(options) {
        options = options || {};
        this.options = $.extend({}, this.defaults, options);
        return this;
    }
    Overlay.prototype = {
        isOpen: false,
        defaults: {
            renderElement: "body",
            overlayCls: "js--overlay",
            relativeClass: "js--overlay-relative",
            openClass: "is--open",
            closableClass: "is--closable",
            closeOnClick: true,
            onClick: $.noop,
            onClose: $.noop,
            events: [ "click", "touchstart", "MSPointerDown" ].join(".overlay") + ".overlay",
            isScrollable: false,
            theme: "dark",
            delay: 0
        },
        open: function(callback, scope) {
            var me = this, deferred = $.Deferred(), $renderElement = $(me.options.renderElement);
            me.$overlay = me._generateOverlay();
            callback = callback || $.noop;
            scope = scope || me;
            me._timeout = window.setTimeout(function() {
                window.clearTimeout(me._timeout);
                delete me._timeout;
                $renderElement.addClass(me.options.relativeClass);
                me.$overlay.appendTo($renderElement);
                window.setTimeout(function() {
                    me.$overlay.addClass(me.options.openClass);
                }, 1);
                me.isOpen = true;
                if (me.options.closeOnClick) {
                    me.$overlay.addClass(me.options.closableClass);
                }
                deferred.resolve(me, me.$overlay);
                callback.call(scope, me, me.$overlay);
            }, me.options.delay);
            me.$overlay.on(me.options.events, $.proxy(me.onOverlayClick, this, me.options));
            return deferred;
        },
        close: function(callback, scope) {
            var me = this, $renderElement = $(me.options.renderElement), deferred = $.Deferred();
            callback = callback || $.noop;
            scope = scope || me;
            if (me._timeout) {
                window.clearTimeout(me._timeout);
                delete me._timeout;
            }
            if (!me.isOpen) {
                deferred.reject(new Error("No global overlay found."));
                return deferred;
            }
            me.isOpen = false;
            me.$overlay.removeClass(me.options.openClass + " " + me.options.closableClass);
            $renderElement.removeClass(me.options.relativeClass);
            me.$overlay.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                me.$overlay.off(me.options.events).prop("style", "").remove();
                deferred.resolve(me);
                callback.call(scope);
            });
            return deferred;
        },
        onOverlayClick: function(options) {
            var me = this;
            if (options) {
                if (typeof options.onClick === "function") {
                    options.onClick.call(me.$overlay);
                }
                if (options.closeOnClick === false) {
                    return;
                }
                if (typeof options.onClose === "function" && options.onClose.call(me.$overlay) === false) {
                    return;
                }
            }
            me.close();
        },
        _generateOverlay: function() {
            var me = this, $overlay = $("<div>", {
                class: [ me.options.overlayCls, "theme--" + me.options.theme ].join(" ")
            });
            if (!me.options.isScrollable) {
                return $overlay.on("mousewheel DOMMouseScroll", function(event) {
                    event.preventDefault();
                });
            }
            return $overlay;
        }
    };
    $.overlay = {
        overlay: null,
        open: function(options, callback, scope) {
            if ($.isFunction(options)) {
                callback = options;
                scope = callback;
                options = {};
            }
            callback = callback || $.noop;
            options = options || {};
            scope = scope || this;
            $.overlay.overlay = new Overlay(options);
            return $.overlay.overlay.open(callback, scope);
        },
        close: function(callback, scope) {
            var deferred = $.Deferred();
            callback = callback || $.noop;
            scope = scope || this;
            if (!$.overlay.overlay) {
                deferred.reject(new Error("No global overlay found."));
                return deferred;
            }
            return $.overlay.overlay.close(callback, scope);
        }
    };
    window.Overlay = Overlay;
})(jQuery);

(function($) {
    "use strict";
    $.plugin("swFormPolyfill", {
        defaults: {
            eventType: "click"
        },
        init: function() {
            var me = this;
            if (!me.isSupportedBrowser()) {
                return false;
            }
            me.applyDataAttributes();
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$el, me.opts.eventType, $.proxy(me.onSubmitForm, this));
            $.publish("plugin/swFormPolyfill/onRegisterEvents", [ me ]);
        },
        isSupportedBrowser: function() {
            var me = this;
            return me.isIE() || me.isEdge();
        },
        isIE: function() {
            var myNav = navigator.userAgent.toLowerCase();
            return myNav.indexOf("msie") !== -1 || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
        },
        isEdge: function() {
            var myNav = navigator.userAgent.toLowerCase();
            return myNav.indexOf("edge") !== -1;
        },
        onSubmitForm: function() {
            var me = this, id = "#" + me.$el.attr("form"), $form = $(id);
            if (!$form.length) {
                return false;
            }
            $form.submit();
            $.publish("plugin/swFormPolyfill/onSubmitForm", [ me, $form ]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
})(jQuery);

(function($, window) {
    "use strict";
    $.plugin("swPseudoText", {
        defaults: {
            eventType: "keyup"
        },
        init: function() {
            var me = this, selector = $(me.$el.attr("data-selector")), val;
            if (!selector.length) {
                throw new Error("Given selector does not match any element on the page.");
            }
            me._on(me.$el, me.opts.eventType, function() {
                val = me.$el.val();
                selector.val(val.length ? val : "");
            });
        }
    });
})(jQuery, window);

(function($) {
    var emptyObj = {};
    $.plugin("swLastSeenProducts", {
        defaults: {
            productLimit: 20,
            baseUrl: "/",
            shopId: 1,
            currentArticle: emptyObj,
            listSelector: ".last-seen-products--slider",
            containerSelector: ".last-seen-products--container",
            itemCls: "last-seen-products--item product-slider--item product--box box--slider",
            titleCls: "last-seen-products-item--title product--title",
            imageCls: "last-seen-products-item--image product--image",
            noPicture: ""
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$list = me.$el.find(me.opts.listSelector);
            me.$container = me.$list.find(me.opts.containerSelector);
            me.productSlider = me.$list.data("plugin_swProductSlider");
            if (!me.productSlider) {
                return;
            }
            me.storage = StorageManager.getLocalStorage();
            if ($("body").hasClass("is--ctl-detail")) {
                me.collectProduct(me.opts.currentArticle);
                $.subscribe(me.getEventName("plugin/swAjaxVariant/onRequestData"), $.proxy(me.onAjaxVariantChange, me));
            }
            me.createProductList();
        },
        onAjaxVariantChange: function() {
            var me = this;
            me.collectProduct(window.lastSeenProductsConfig.currentArticle);
            me.clearProductList();
            me.createProductList();
        },
        clearProductList: function() {
            var me = this;
            me.$container.children().remove();
        },
        createProductList: function() {
            var me = this, opts = me.opts, itemKey = "lastSeenProducts-" + opts.shopId + "-" + opts.baseUrl, productsJson = me.storage.getItem(itemKey), products = productsJson ? JSON.parse(productsJson) : [], len = Math.min(opts.productLimit, products.length);
            if (len > 1) {
                me.$el.removeClass("is--hidden");
            }
            for (var i = 0; i < len; i++) {
                if (typeof products[i] === "undefined") {
                    break;
                }
                var product = products[i];
                if (product.articleId === opts.currentArticle.articleId) {
                    len++;
                    continue;
                }
                me.$container.append(me.createTemplate(product));
            }
            me.productSlider.initSlider();
            $.publish("plugin/swLastSeenProducts/onCreateProductList", [ me ]);
        },
        createTemplate: function(article) {
            var me = this, $template = $("<div>", {
                class: me.opts.itemCls,
                html: [ me.createProductImage(article), me.createProductTitle(article) ],
                "data-ordernumber": article.orderNumber
            });
            $.publish("plugin/swLastSeenProducts/onCreateTemplate", [ me, $template, article ]);
            return $template;
        },
        createProductTitle: function(data) {
            var me = this, $title = $("<a>", {
                rel: "nofollow",
                class: me.opts.titleCls,
                title: data.articleName,
                href: data.linkDetailsRewritten,
                html: data.articleName
            });
            $.publish("plugin/swLastSeenProducts/onCreateProductTitle", [ me, $title, data ]);
            return $title;
        },
        createProductImage: function(data) {
            var me = this, image = data.images[0], element, imageEl, imageMedia, srcSet;
            element = $("<a>", {
                class: me.opts.imageCls,
                href: data.linkDetailsRewritten,
                title: data.articleName
            });
            imageEl = $("<span>", {
                class: "image--element"
            }).appendTo(element);
            imageMedia = $("<span>", {
                class: "image--media"
            }).appendTo(imageEl);
            if (image) {
                srcSet = image.sourceSet;
            } else {
                srcSet = me.opts.noPicture;
            }
            $("<img>", {
                srcset: srcSet,
                alt: data.articleName,
                title: data.articleName
            }).appendTo(imageMedia);
            $.publish("plugin/swLastSeenProducts/onCreateProductImage", [ me, element, data ]);
            return element;
        },
        collectProduct: function(newProduct) {
            var me = this, opts = me.opts, itemKey = "lastSeenProducts-" + opts.shopId + "-" + opts.baseUrl, productsJson = me.storage.getItem(itemKey), products = productsJson ? JSON.parse(productsJson) : [], linkDetailsQuery = "", len = products.length, i = 0, url, urlQuery;
            if (!newProduct || $.isEmptyObject(newProduct)) {
                return;
            }
            for (;i < len; i++) {
                if (products[i] && products[i].articleId === newProduct.articleId) {
                    products.splice(i, 1);
                }
            }
            url = newProduct.linkDetailsRewritten;
            urlQuery = me.extractQueryParameters(url);
            delete urlQuery.c;
            if ($.param(urlQuery)) {
                linkDetailsQuery = $.param(urlQuery);
                linkDetailsQuery = "?" + linkDetailsQuery;
            }
            if (url.indexOf("/sCategory") !== -1) {
                newProduct.linkDetailsRewritten = url.replace(/\/?sCategory\/[0-9]+/i, "");
            } else if (url.indexOf("?") !== -1) {
                newProduct.linkDetailsRewritten = url.substring(0, url.indexOf("?")) + linkDetailsQuery;
            }
            products.splice(0, 0, newProduct);
            while (products.length > opts.productLimit + 1) {
                products.pop();
            }
            me.storage.setItem(itemKey, JSON.stringify(products));
            $.publish("plugin/swLastSeenProducts/onCollectProduct", [ me, newProduct ]);
        },
        extractQueryParameters: function(url) {
            var queryParams = {};
            if (url.indexOf("?") === -1) {
                return {};
            }
            url = url.substring(url.indexOf("?"));
            url = url.substring(1);
            $.each(url.split("&"), function(key, param) {
                param = param.split("=");
                param[0] = decodeURIComponent(param[0]);
                param[1] = decodeURIComponent(param[1]);
                if (param[0].length && param[1].length && !queryParams.hasOwnProperty(param[0])) {
                    queryParams[param[0]] = param[1];
                }
            });
            return queryParams;
        },
        destroy: function() {
            var me = this;
            $.unsubscribe(me.getEventName("plugin/swAjaxVariant/onRequestData"));
            me._destroy();
        }
    });
})(jQuery);

(function($, window, Math) {
    "use strict";
    $.lightbox = {
        modal: false,
        open: function(imageURL, isSvg) {
            var me = this, size;
            isSvg = isSvg || false;
            me.image = new Image();
            me.content = me.createContent(imageURL);
            me.image.onload = function() {
                var width = me.image.width;
                var height = me.image.height;
                if (isSvg) {
                    width = width * 20;
                    height = height * 20;
                }
                size = me.getOptimizedSize(width, height);
                me.content.find("img").attr("width", size.width).attr("height", size.height);
                me.modal = $.modal.open(me.content, {
                    width: size.width,
                    height: size.height
                });
                $(window).on("resize.lightbox", function() {
                    width = me.image.width;
                    height = me.image.height;
                    if (isSvg) {
                        width = width * 20;
                        height = height * 20;
                    }
                    me.setSize(width, height);
                });
                $.subscribe("plugin/swModal/onClose", function() {
                    $(window).off("resize.lightbox");
                });
            };
            me.image.src = imageURL;
            $.publish("plugin/swLightbox/onOpen", [ me ]);
        },
        createContent: function(imageURL) {
            var me = this, content = $("<div>", {
                class: "lightbox--container",
                html: $("<img>", {
                    src: imageURL,
                    class: "lightbox--image"
                })
            });
            $.publish("plugin/swLightbox/onCreateContent", [ me, content, imageURL ]);
            return content;
        },
        setSize: function(width, height) {
            var me = this, size = me.getOptimizedSize(width, height);
            if (!me.modal) {
                return;
            }
            me.modal.setWidth(size.width);
            me.modal.setHeight(size.height);
            $.publish("plugin/swLightbox/onSetSize", [ me, width, height ]);
        },
        getOptimizedSize: function(width, height) {
            var me = this, aspect = width / height, maxWidth = Math.round(window.innerWidth * .9), maxHeight = Math.round(window.innerHeight * .9), size;
            if (width > maxWidth) {
                width = maxWidth;
                height = Math.round(width / aspect);
            }
            if (height > maxHeight) {
                height = maxHeight;
                width = Math.round(height * aspect);
            }
            size = {
                width: width,
                height: height
            };
            $.publish("plugin/swLightbox/onGetOptimizedSize", [ me, size ]);
            return size;
        },
        destroy: function() {
            var me = this;
            $.unsubscribe(me.getEventName("plugin/swModal/onClose"));
            me._destroy();
        }
    };
})(jQuery, window, Math);

(function($, Modernizr, location) {
    "use strict";
    $.plugin("swAjaxProductNavigation", {
        defaults: {
            arrowFadeSpeed: 500,
            arrowOffset: 40,
            arrowSlideOffset: 140,
            arrowSlideClass: "can--slide",
            productBoxSelector: ".product--box",
            productDetailsSelector: ".product--details",
            prevLinkSelector: ".navigation--link.link--prev",
            nextLinkSelector: ".navigation--link.link--next",
            breadcrumbButtonSelector: ".content--breadcrumb .breadcrumb--button",
            imageContainerSelector: ".image--container",
            listingSelectors: [ ".listing .product--box .product--image", ".listing .product--box .product--title", ".listing .product--box .product--actions .action--more" ]
        },
        init: function() {
            var me = this, $el = me.$el, opts = me.opts, isListing = $el.hasClass("is--ctl-listing"), isDetail = $el.hasClass("is--ctl-detail"), params = me.parseQueryString(location.href);
            if (!(isListing || isDetail)) {
                return;
            }
            me.applyDataAttributes();
            me.storage = StorageManager.getStorage("session");
            if (isListing) {
                me.registerListingEventListeners();
                return;
            }
            me.$prevButton = $el.find(opts.prevLinkSelector);
            me.$nextButton = $el.find(opts.nextLinkSelector);
            me.$backButton = $el.find(opts.breadcrumbButtonSelector);
            me.$productDetails = $el.find(opts.productDetailsSelector);
            me.categoryId = ~~(me.$productDetails.attr("data-category-id") || params && params.c);
            me.orderNumber = me.$productDetails.attr("data-main-ordernumber");
            me.productState = me.getProductState();
            if (!me.categoryId) {
                return;
            }
            if (!$.isEmptyObject(me.productState) && me.productState.ordernumber !== me.orderNumber) {
                me.clearProductState();
                me.productState = {};
            }
            me.registerDetailEventListeners();
            me.getProductNavigation();
        },
        parseQueryString: function(url) {
            var params = {}, urlParts = (url + "").split("?"), queryParts, part, key, value, p;
            if (urlParts.length < 2) {
                return params;
            }
            queryParts = urlParts[1].split("&");
            for (p in queryParts) {
                if (!queryParts.hasOwnProperty(p)) {
                    continue;
                }
                part = queryParts[p].split("=");
                key = this.safeURIDecode(part[0]);
                value = this.safeURIDecode(part[1] || "");
                params[key] = $.isNumeric(value) ? parseFloat(value) : value;
            }
            $.publish("plugin/swAjaxProductNavigation/onParseQueryString", [ this, url, params ]);
            return params;
        },
        getProductState: function() {
            var me = this, state = JSON.parse(me.storage.getItem("lastProductState")) || {};
            $.publish("plugin/swAjaxProductNavigation/onGetProductState", [ me, state ]);
            return state;
        },
        setProductState: function(params) {
            var me = this;
            me.storage.setItem("lastProductState", JSON.stringify(params));
            $.publish("plugin/swAjaxProductNavigation/onSetProductState", [ me, params ]);
        },
        clearProductState: function() {
            var me = this;
            me.storage.removeItem("lastProductState");
            $.publish("plugin/swAjaxProductNavigation/onClearProductState", [ me ]);
        },
        registerListingEventListeners: function() {
            var me = this, selectors = me.opts.listingSelectors.join(", ");
            me.$el.on(me.getEventName("click"), selectors, $.proxy(me.onClickProductInListing, me));
            $.publish("plugin/swAjaxProductNavigation/onRegisterEventsListing", [ me ]);
        },
        onClickProductInListing: function(event) {
            var me = this, opts = me.opts, $target = $(event.target), $parent = $target.parents(opts.productBoxSelector), params = me.parseQueryString(location.href);
            me.setProductState($.extend({}, params, {
                categoryId: ~~$parent.attr("data-category-id"),
                ordernumber: $parent.attr("data-ordernumber")
            }));
            $.publish("plugin/swAjaxProductNavigation/onClickProductInListing", [ me, event ]);
        },
        registerDetailEventListeners: function() {
            var me = this;
            StateManager.on("resize", me.checkPossibleSliding, me);
            me._on(me.$prevButton, "click", $.proxy(me.onArrowClick, me));
            me._on(me.$nextButton, "click", $.proxy(me.onArrowClick, me));
            $.publish("plugin/swAjaxProductNavigation/onRegisterEventsDetail", [ me ]);
        },
        onArrowClick: function(event) {
            var me = this, $target = $(event.currentTarget);
            if (!$.isEmptyObject(me.productState)) {
                me.productState.ordernumber = $target.attr("data-ordernumber");
                me.setProductState(me.productState);
            }
            $.publish("plugin/swAjaxProductNavigation/onArrowClick", [ me, event ]);
        },
        checkPossibleSliding: function() {
            var me = this, opts = me.opts, offset = opts.arrowOffset, slideOffset = opts.arrowSlideOffset, $prevBtn = me.$prevButton, $nextBtn = me.$nextButton, remainingSpacePrev, remainingSpaceNext, prevBtnImage, nextBtnImage;
            if (!$nextBtn.length || !$prevBtn.length) {
                return false;
            }
            remainingSpacePrev = $prevBtn.offset().left + offset;
            remainingSpaceNext = $(window).width() - $nextBtn.offset().left - $nextBtn.outerWidth() + offset;
            prevBtnImage = $prevBtn.find(opts.imageContainerSelector).css("background-image");
            nextBtnImage = $nextBtn.find(opts.imageContainerSelector).css("background-image");
            $prevBtn[prevBtnImage !== "none" && remainingSpacePrev >= slideOffset ? "addClass" : "removeClass"](opts.arrowSlideClass);
            $nextBtn[nextBtnImage !== "none" && remainingSpaceNext >= slideOffset ? "addClass" : "removeClass"](opts.arrowSlideClass);
            $.publish("plugin/swAjaxProductNavigation/onCheckPossibleSliding", [ me ]);
        },
        getProductNavigation: function() {
            var me = this, url = me.$productDetails.attr("data-product-navigation"), params = $.extend({}, me.productState, {
                ordernumber: me.orderNumber,
                categoryId: me.categoryId
            });
            if ($.isEmptyObject(params) || !url || !url.length) {
                return;
            }
            $.ajax({
                url: url,
                data: params,
                method: "GET",
                dataType: "json",
                success: $.proxy(me.onProductNavigationLoaded, me)
            });
            $.publish("plugin/swAjaxProductNavigation/onGetProductNavigation", [ me ]);
        },
        onProductNavigationLoaded: function(response) {
            var me = this, opts = me.opts, $prevBtn = me.$prevButton, $nextBtn = me.$nextButton, listing = response.currentListing, prevProduct = response.previousProduct, nextProduct = response.nextProduct, animSpeed = opts.arrowFadeSpeed, animCss = {
                opacity: 1
            };
            $.publish("plugin/swAjaxProductNavigation/onProductNavigationLoaded", [ me, response ]);
            if (listing && listing.href) {
                me.$backButton.attr("href", listing.href);
            }
            if (typeof prevProduct === "object") {
                $prevBtn.attr("data-ordernumber", prevProduct.orderNumber);
                if (prevProduct.image) {
                    $prevBtn.find(opts.imageContainerSelector).css("background-image", "url(" + prevProduct.image.thumbnails[0].source + ")");
                }
                $prevBtn.attr("href", prevProduct.href).attr("title", prevProduct.name).css("display", "inline");
                if (Modernizr.csstransitions) {
                    $prevBtn.transition(animCss, animSpeed);
                } else {
                    $prevBtn.animate(animCss, animSpeed);
                }
            }
            if (typeof nextProduct === "object") {
                $nextBtn.attr("data-ordernumber", nextProduct.orderNumber);
                if (nextProduct.image) {
                    $nextBtn.find(opts.imageContainerSelector).css("background-image", "url(" + nextProduct.image.thumbnails[0].source + ")");
                }
                $nextBtn.attr("href", nextProduct.href).attr("title", nextProduct.name).css("display", "inline");
                if (Modernizr.csstransitions) {
                    $nextBtn.transition(animCss, animSpeed);
                } else {
                    $nextBtn.animate(animCss, animSpeed);
                }
            }
            me.checkPossibleSliding();
            $.publish("plugin/swAjaxProductNavigation/onProductNavigationFinished", [ me, response ]);
        },
        destroy: function() {
            var me = this, selectors = me.opts.listingSelectors.join(", ");
            StateManager.off("resize", me.checkPossibleSliding, me);
            me.$el.off(me.getEventName("click"), selectors);
            me._destroy();
        }
    });
})(jQuery, Modernizr, location);

(function($) {
    "use strict";
    $.plugin("swNewsletter", {
        defaults: {
            unsubscribeCaptchaRequired: false,
            captchaSelector: 'input[name="sCaptcha"]',
            captchaFormSelector: ".newsletter--captcha-form",
            checkMailSelector: ".newsletter--checkmail",
            additionalFormSelector: ".newsletter--additional-form",
            formSelector: "form",
            submitButtonSelector: "button[type=submit]"
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$checkMail = me.$el.find(me.opts.checkMailSelector);
            me.$addionalForm = me.$el.find(me.opts.additionalFormSelector);
            me.$captchaForm = me.$el.find(me.opts.captchaFormSelector);
            me.$form = me.$el.find(me.opts.formSelector);
            me._on(me.$checkMail, "change", $.proxy(me.refreshAction, me));
            $.subscribe(me.getEventName("plugin/swCaptcha/onSendRequestSuccess"), $.proxy(me.onCaptchaLoaded, me));
            me._on(me.$form, "submit", $.proxy(me.submit, me));
            $.publish("plugin/swNewsletter/onRegisterEvents", [ me ]);
            me.$checkMail.trigger("change");
        },
        refreshAction: function(event) {
            var me = this, $el = $(event.currentTarget), val = $el.val();
            if (val === "-1") {
                me.$addionalForm.hide();
                if (!me.opts.unsubscribeCaptchaRequired) {
                    me.$captchaForm.hide();
                    if (me.$captchaField) {
                        me.$captchaField.prop("required", false);
                        me.$captchaField.prop("aria-required", false);
                    }
                }
            } else {
                me.$addionalForm.show();
                if (!me.opts.unsubscribeCaptchaRequired) {
                    me.$captchaForm.show();
                    if (me.$captchaField) {
                        me.$captchaField.attr("required", true);
                        me.$captchaField.attr("aria-required", true);
                    }
                }
            }
            $.publish("plugin/swNewsletter/onRefreshAction", [ me ]);
        },
        submit: function() {
            var me = this;
            me.$el.find(me.opts.submitButtonSelector).attr("disabled", "disabled").addClass("disabled");
        },
        onCaptchaLoaded: function() {
            var me = this;
            me.$captchaField = me.$captchaForm.find(me.opts.captchaSelector);
            me.$checkMail.trigger("change");
        },
        destroy: function() {
            this._destroy();
        }
    });
})(jQuery);

(function($) {
    "use strict";
    $.plugin("swMenuScroller", {
        defaults: {
            activeItemSelector: ".is--active",
            listSelector: '*[class$="--list"]',
            wrapperClass: "js--menu-scroller",
            listClass: "js--menu-scroller--list",
            itemClass: "js--menu-scroller--item",
            leftArrowClass: "js--menu-scroller--arrow left--arrow",
            rightArrowClass: "js--menu-scroller--arrow right--arrow",
            arrowContentClass: "arrow--content",
            leftArrowContent: "&#58897;",
            rightArrowContent: "&#58895;",
            scrollStep: "auto",
            animationSpeed: 400,
            arrowOffset: 25
        },
        init: function() {
            var me = this, opts = me.opts, $activeChild;
            me.applyDataAttributes();
            me.scrollStep = opts.scrollStep === "auto" ? me.$el.width() / 2 : parseFloat(opts.scrollStep);
            me.$list = me.$el.find(opts.listSelector);
            me.scrollBarOffset = 0;
            me.initTemplate();
            me.registerEvents();
            me.updateButtons();
            $activeChild = me.$list.children(opts.activeItemSelector);
            if ($activeChild.length) {
                me.jumpToElement($activeChild);
            }
        },
        initTemplate: function() {
            var me = this, opts = me.opts, $el = me.$el, $list = me.$list;
            $el.addClass(opts.wrapperClass);
            $list.addClass(opts.listClass);
            me.updateScrollBarOffset();
            $list.children().addClass(opts.itemClass);
            me.$leftArrow = $("<div>", {
                html: $("<span>", {
                    class: opts.arrowContentClass,
                    html: opts.leftArrowContent
                }),
                class: opts.leftArrowClass
            }).appendTo($el);
            me.$rightArrow = $("<div>", {
                html: $("<span>", {
                    class: opts.arrowContentClass,
                    html: opts.rightArrowContent
                }),
                class: opts.rightArrowClass
            }).appendTo($el);
            $.publish("plugin/swMenuScroller/onInitTemplate", [ me ]);
        },
        updateScrollBarOffset: function() {
            var me = this, $list = me.$list, offset;
            offset = me.scrollBarOffset = Math.min(Math.abs($list[0].scrollHeight - $list.height()) * -1, me.scrollBarOffset);
            $list.css({
                bottom: offset,
                "margin-top": offset
            });
            $.publish("plugin/swMenuScroller/onUpdateScrollBarOffset", [ me, offset ]);
        },
        registerEvents: function() {
            var me = this;
            StateManager.on("resize", me.updateResize, me);
            me._on(me.$leftArrow, "click touchstart", $.proxy(me.onLeftArrowClick, me));
            me._on(me.$rightArrow, "click touchstart", $.proxy(me.onRightArrowClick, me));
            me._on(me.$list, "scroll", $.proxy(me.updateButtons, me));
            $.publish("plugin/swMenuScroller/onRegisterEvents", [ me ]);
        },
        updateResize: function() {
            var me = this, opts = me.opts, viewPortWidth = me.$el.width();
            me.updateScrollBarOffset();
            if (opts.scrollStep === "auto") {
                me.scrollStep = viewPortWidth / 2;
            }
            me.updateButtons();
            $.publish("plugin/swMenuScroller/onUpdateResize", [ me ]);
        },
        onLeftArrowClick: function(event) {
            event.preventDefault();
            var me = this;
            me.addOffset(me.scrollStep * -1);
            $.publish("plugin/swMenuScroller/onLeftArrowClick", [ me ]);
        },
        onRightArrowClick: function(event) {
            event.preventDefault();
            var me = this;
            me.addOffset(me.scrollStep);
            $.publish("plugin/swMenuScroller/onRightArrowClick", [ me ]);
        },
        addOffset: function(offset) {
            this.setOffset(this.$list.scrollLeft() + offset, true);
        },
        setOffset: function(offset, animate) {
            var me = this, opts = me.opts, $list = me.$list, maxWidth = $list.prop("scrollWidth") - me.$el.width(), newPos = Math.max(0, Math.min(maxWidth, offset));
            if (animate !== false) {
                $list.stop(true).animate({
                    scrollLeft: newPos
                }, opts.animationSpeed, $.proxy(me.updateButtons, me));
                $.publish("plugin/swMenuScroller/onSetOffset", [ me, offset, animate ]);
                return;
            }
            $list.scrollLeft(newPos);
            me.updateButtons();
            $.publish("plugin/swMenuScroller/onSetOffset", [ me, offset, animate ]);
        },
        updateButtons: function() {
            var me = this, $list = me.$list, elWidth = me.$el.width(), listWidth = $list.prop("scrollWidth"), scrollLeft = $list.scrollLeft();
            me.$leftArrow.toggle(scrollLeft > 0);
            me.$rightArrow.toggle(listWidth > elWidth && scrollLeft < listWidth - elWidth);
            $.publish("plugin/swMenuScroller/onUpdateButtons", [ me, me.$leftArrow, me.$rightArrow ]);
        },
        jumpToElement: function($el) {
            var me = this, $list = me.$list, elWidth = me.$el.width(), scrollLeft = $list.scrollLeft(), leftPos = $el.position().left, rightPos = leftPos + $el.outerWidth(true), newPos;
            if (leftPos > scrollLeft && rightPos > scrollLeft + elWidth) {
                newPos = rightPos - elWidth + me.opts.arrowOffset;
            } else {
                newPos = Math.min(leftPos - me.$leftArrow.width(), scrollLeft);
            }
            me.setOffset(newPos, false);
            $.publish("plugin/swMenuScroller/onJumpToElement", [ me, $el, newPos ]);
        },
        destroy: function() {
            var me = this, opts = me.opts;
            StateManager.off("resize", me.updateResize, me);
            me.$el.removeClass(opts.wrapperClass);
            me.$list.removeClass(opts.listClass);
            me.$list.css({
                bottom: "",
                "margin-top": ""
            });
            me.$list.children().removeClass(opts.itemClass);
            me.$leftArrow.remove();
            me.$rightArrow.remove();
            me._destroy();
        }
    });
})(jQuery);

(function($) {
    "use strict";
    $.plugin("swShippingPayment", {
        defaults: {
            formSelector: "#shippingPaymentForm",
            radioSelector: "input.auto_submit[type=radio]",
            submitSelector: "input[type=submit]"
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me.$el.on("change", me.opts.radioSelector, $.proxy(me.onInputChanged, me));
            $.publish("plugin/swShippingPayment/onRegisterEvents", [ me ]);
        },
        onInputChanged: function() {
            var me = this, form = me.$el.find(me.opts.formSelector), url = form.attr("action"), data = form.serialize() + "&isXHR=1";
            $.publish("plugin/swShippingPayment/onInputChangedBefore", [ me ]);
            $.loadingIndicator.open();
            $.ajax({
                type: "POST",
                url: url,
                data: data,
                success: function(res) {
                    me.$el.empty().html(res);
                    me.$el.find('input[type="submit"][form], button[form]').swFormPolyfill();
                    $.loadingIndicator.close();
                    window.picturefill();
                    $.publish("plugin/swShippingPayment/onInputChanged", [ me ]);
                }
            });
        },
        destroy: function() {
            var me = this;
            me.$el.off("change", me.opts.radioSelector);
            me._destroy();
        }
    });
})(jQuery);

(function($, window) {
    "use strict";
    $.plugin("swAddArticle", {
        defaults: {
            eventName: "click",
            addArticleUrl: window.controller["ajax_add_article"],
            sliderPerPageDefault: 3,
            showModal: true,
            productSliderSelector: ".js--modal .product-slider"
        },
        init: function() {
            var opts = this.opts;
            this.applyDataAttributes();
            opts.showModal = !!opts.showModal && opts.showModal !== "false";
            this._on(this.$el, opts.eventName, $.proxy(this.sendSerializedForm, this));
            $("body").on("click.modal", '*[data-modal-close="true"]', $.proxy(this.closeModal, this));
            StateManager.addPlugin(opts.productSliderSelector, "swProductSlider");
        },
        sendSerializedForm: function(event) {
            event.preventDefault();
            var me = this, opts = me.opts, $el = me.$el, ajaxData = $el.serialize();
            ajaxData += "&isXHR=1";
            if (opts.showModal) {
                $.loadingIndicator.open({
                    openOverlay: true
                });
            }
            $.publish("plugin/swAddArticle/onBeforeAddArticle", [ me, ajaxData ]);
            $.ajax({
                data: ajaxData,
                dataType: "html",
                method: "POST",
                url: opts.addArticleUrl,
                success: function(result) {
                    $.publish("plugin/swAddArticle/onAddArticle", [ me, result ]);
                    if (!opts.showModal) {
                        return;
                    }
                    $.loadingIndicator.close(function() {
                        $.modal.open(result, {
                            width: 750,
                            sizing: "content",
                            onClose: me.onCloseModal.bind(me)
                        });
                        picturefill();
                        StateManager.updatePlugin(opts.productSliderSelector, "swProductSlider");
                        $.publish("plugin/swAddArticle/onAddArticleOpenModal", [ me, result ]);
                    });
                }
            });
        },
        closeModal: function(event) {
            event.preventDefault();
            $.modal.close();
            $.publish("plugin/swAddArticle/onCloseModal", [ this ]);
        },
        onCloseModal: function() {
            StateManager.destroyPlugin(this.opts.productSliderSelector, "swProductSlider");
            $.publish("plugin/swAddArticle/onCloseModal", [ this ]);
        }
    });
})(jQuery, window);

(function($, window, document) {
    "use strict";
    var $document = $(document);
    function round(value, base, method) {
        var rounding = method || "round", b = base || 1, factor = 1 / b;
        return Math[rounding](value * factor) / factor;
    }
    function roundPretty(value, method) {
        var rounding = method || "round", digits = countDigits(value), step = digits > 1 ? 2 : 1, base = 5 * Math.pow(10, digits - step);
        return round(value, base, rounding);
    }
    function countDigits(value) {
        if (value <= 0) {
            return 1;
        }
        return ~~(Math.log(Math.floor(value)) / Math.LN10 + 1);
    }
    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }
    function int(value) {
        return parseFloat(value);
    }
    $.plugin("swRangeSlider", {
        defaults: {
            sliderContainerCls: "range-slider--container",
            rangeBarCls: "range-slider--range-bar",
            handleCls: "range-slider--handle",
            handleMinCls: "is--min",
            handleMaxCls: "is--max",
            activeDraggingCls: "is--dragging",
            minInputElSelector: '*[data-range-input="min"]',
            maxInputElSelector: '*[data-range-input="max"]',
            minLabelElSelector: '*[data-range-label="min"]',
            maxLabelElSelector: '*[data-range-label="max"]',
            labelFormat: "",
            suffix: "",
            roundPretty: false,
            startMin: 20,
            startMax: 80,
            rangeMin: 0,
            rangeMax: 100,
            stepCount: 100,
            digits: 2,
            stepCurve: "linear"
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$minInputEl = me.$el.find(me.opts.minInputElSelector);
            me.$maxInputEl = me.$el.find(me.opts.maxInputElSelector);
            me.$minLabel = me.$el.find(me.opts.minLabelElSelector);
            me.$maxLabel = me.$el.find(me.opts.maxLabelElSelector);
            me.dragState = false;
            me.dragType = "min";
            me.createSliderTemplate();
            me.validateStepCurve();
            me.computeBaseValues();
            me.registerEvents();
        },
        validateStepCurve: function() {
            var me = this, validCurves = [ "linear", "log" ];
            me.opts.stepCurve = me.opts.stepCurve.toString().toLowerCase();
            if (validCurves.indexOf(me.opts.stepCurve) < 0) {
                me.opts.stepCurve = "linear";
            }
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$minHandle, "mousedown touchstart", $.proxy(me.onStartDrag, me, "min", me.$minHandle));
            me._on(me.$maxHandle, "mousedown touchstart", $.proxy(me.onStartDrag, me, "max", me.$maxHandle));
            me._on($document, "mouseup touchend", $.proxy(me.onEndDrag, me));
            me._on($document, "mousemove touchmove", $.proxy(me.slide, me));
            $.publish("plugin/swRangeSlider/onRegisterEvents", [ me ]);
        },
        createSliderTemplate: function() {
            var me = this;
            me.$rangeBar = me.createRangeBar();
            me.$container = me.createRangeContainer();
            me.$minHandle = me.createHandle("min");
            me.$maxHandle = me.createHandle("max");
            me.$minHandle.appendTo(me.$rangeBar);
            me.$maxHandle.appendTo(me.$rangeBar);
            me.$rangeBar.appendTo(me.$container);
            me.$container.prependTo(me.$el);
        },
        createRangeContainer: function() {
            var me = this, $container = $("<div>", {
                class: me.opts.sliderContainerCls
            });
            $.publish("plugin/swRangeSlider/onCreateRangeContainer", [ me, $container ]);
            return $container;
        },
        createRangeBar: function() {
            var me = this, $bar = $("<div>", {
                class: me.opts.rangeBarCls
            });
            $.publish("plugin/swRangeSlider/onCreateRangeBar", [ me, $bar ]);
            return $bar;
        },
        createHandle: function(type) {
            var me = this, typeClass = type == "max" ? me.opts.handleMaxCls : me.opts.handleMinCls, $handle = $("<div>", {
                class: me.opts.handleCls + " " + typeClass
            });
            $.publish("plugin/swRangeSlider/onCreateHandle", [ me, $handle ]);
            return $handle;
        },
        computeBaseValues: function() {
            var me = this;
            me.minRange = int(me.opts.rangeMin);
            me.maxRange = int(me.opts.rangeMax);
            if (me.opts.roundPretty) {
                me.minRange = roundPretty(me.minRange, "floor");
                me.maxRange = roundPretty(me.maxRange, "ceil");
            }
            me.range = me.maxRange - me.minRange;
            me.stepSize = me.range / int(me.opts.stepCount);
            me.stepWidth = 100 / int(me.opts.stepCount);
            me.minValue = me.opts.startMin === me.opts.rangeMin || me.opts.startMin <= me.minRange ? me.minRange : int(me.opts.startMin);
            me.maxValue = me.opts.startMax === me.opts.rangeMax || me.opts.startMax >= me.maxRange ? me.maxRange : int(me.opts.startMax);
            if (me.maxValue == me.minValue || me.maxValue == 0) {
                me.maxValue = me.maxRange;
            }
            $.publish("plugin/swRangeSlider/onComputeBaseValues", [ me, me.minValue, me.maxValue ]);
            me.setRangeBarPosition(me.minValue, me.maxValue);
            me.updateLayout();
        },
        setRangeBarPosition: function(minValue, maxValue) {
            var me = this, min = minValue || me.minValue, max = maxValue || me.maxValue, left = me.getPositionByValue(min), right = me.getPositionByValue(max), width = right - left;
            me.$rangeBar.css({
                left: left + "%",
                width: width + "%"
            });
            $.publish("plugin/swRangeSlider/onSetRangeBarPosition", [ me, me.$rangeBar, minValue, maxValue ]);
        },
        setMin: function(min, updateInput) {
            var me = this, update = updateInput || false;
            min = min === me.opts.rangeMin || min <= me.minRange ? me.minRange : int(min);
            me.minValue = min;
            if (update) {
                me.updateMinInput(min);
            }
            me.setRangeBarPosition();
            me.updateLayout();
            $.publish("plugin/swRangeSlider/onSetMin", [ me, min, updateInput ]);
        },
        setMax: function(max, updateInput) {
            var me = this, update = updateInput || false;
            max = max === me.opts.rangeMax || max >= me.maxRange ? me.maxRange : int(max);
            me.maxValue = max;
            if (update) {
                me.updateMaxInput(max);
            }
            me.setRangeBarPosition();
            me.updateLayout();
            $.publish("plugin/swRangeSlider/onSetMax", [ me, max, updateInput ]);
        },
        reset: function(param) {
            var me = this;
            if (param == "max") {
                me.maxValue = me.maxRange;
                me.$maxInputEl.attr("disabled", "disabled").val(me.maxRange).trigger("change");
            } else {
                me.minValue = me.minRange;
                me.$minInputEl.attr("disabled", "disabled").val(me.minRange).trigger("change");
            }
            me.setRangeBarPosition();
            me.updateLayout();
            $.publish("plugin/swRangeSlider/onReset", [ me, param ]);
        },
        onStartDrag: function(type, $handle) {
            var me = this;
            $handle.addClass(me.opts.activeDraggingCls);
            me.dragState = true;
            me.dragType = type;
            $.publish("plugin/swRangeSlider/onStartDrag", [ me, type, $handle ]);
        },
        onEndDrag: function() {
            var me = this;
            if (!me.dragState) {
                return;
            }
            me.dragState = false;
            me.updateLayout();
            me.$minHandle.removeClass(me.opts.activeDraggingCls);
            me.$maxHandle.removeClass(me.opts.activeDraggingCls);
            if (me.dragType == "max") {
                me.updateMaxInput(me.maxValue);
            } else {
                me.updateMinInput(me.minValue);
            }
            $(me).trigger("rangeChange", me);
            $.publish("plugin/swRangeSlider/onEndDrag", [ me, me.dragType ]);
        },
        slide: function(event) {
            var me = this;
            if (!me.dragState) {
                return;
            }
            var pageX = event.originalEvent.touches ? event.originalEvent.touches[0].pageX : event.pageX, offset = me.$container.offset(), width = me.$container.innerWidth(), mouseX = pageX - offset.left, xPercent = clamp(round(100 / width * mouseX, me.stepWidth, "round"), 0, 100), value = me.getValueByPosition(xPercent);
            event.preventDefault();
            if (me.dragType == "max") {
                var minValue = me.getValueByPosition(me.getPositionByValue(me.minValue) + me.stepWidth);
                me.setMax(clamp(value, minValue, me.maxRange));
            } else {
                var maxValue = me.getValueByPosition(me.getPositionByValue(me.maxValue) - me.stepWidth);
                me.setMin(clamp(value, me.minRange, maxValue));
            }
            $.publish("plugin/swRangeSlider/onSlide", [ me, event, xPercent, value ]);
        },
        updateMinInput: function(value) {
            var me = this;
            if (!me.$minInputEl.length) {
                return;
            }
            if (value <= me.opts.rangeMin) {
                me.$minInputEl.prop("disabled", "disabled").trigger("change");
            } else {
                me.$minInputEl.val(me.formatValueFloat(value)).prop("disabled", false).trigger("change");
            }
            $.publish("plugin/swRangeSlider/onUpdateMinInput", [ me, me.$minInputEl, value ]);
        },
        updateMaxInput: function(value) {
            var me = this;
            if (!me.$maxInputEl.length) {
                return;
            }
            if (value >= me.opts.rangeMax) {
                me.$maxInputEl.prop("disabled", "disabled").trigger("change");
            } else {
                me.$maxInputEl.val(me.formatValueFloat(value)).prop("disabled", false).trigger("change");
            }
            $.publish("plugin/swRangeSlider/onUpdateMaxInput", [ me, me.$maxInputEl, value ]);
        },
        updateMinLabel: function(value) {
            var me = this;
            if (me.$minLabel.length) {
                me.$minLabel.html(me.formatValue(value));
                $.publish("plugin/swRangeSlider/onUpdateMinLabel", [ me, me.$minLabel, value ]);
            }
        },
        updateMaxLabel: function(value) {
            var me = this;
            if (me.$maxLabel.length) {
                me.$maxLabel.html(me.formatValue(value));
                $.publish("plugin/swRangeSlider/onUpdateMaxLabel", [ me, me.$maxLabel, value ]);
            }
        },
        updateLayout: function(minValue, maxValue) {
            var me = this, min = minValue || me.minValue, max = maxValue || me.maxValue;
            me.updateMinLabel(min);
            me.updateMaxLabel(max);
            $.publish("plugin/swRangeSlider/onUpdateLayout", [ me, minValue, maxValue ]);
        },
        roundValue: function(value) {
            var me = this;
            if (value < .1) {
                value = me.roundTo(value, .001);
            } else if (value < 1) {
                value = me.roundTo(value, .01);
            } else if (value < 10) {
                value = me.roundTo(value, .1);
            } else if (value < 100) {
                value = me.roundTo(value, 1);
            } else {
                value = me.roundTo(value, 5);
            }
            return value;
        },
        formatValueFloat: function(value) {
            if (value != this.minRange && value != this.maxRange) {
                value = this.roundValue(value);
            }
            var division = Math.pow(10, this.opts.digits);
            value = Math.round(value * division) / division;
            value = value.toFixed(this.opts.digits);
            return value;
        },
        formatValue: function(value) {
            var me = this;
            $.publish("plugin/swRangeSlider/onFormatValueBefore", [ me, value ]);
            if (value != me.minRange && value != me.maxRange) {
                value = me.roundValue(value);
            }
            if (!me.opts.labelFormat.length) {
                return value.toFixed(me.opts.digits) + " " + me.opts.suffix;
            }
            var division = Math.pow(10, me.opts.digits);
            value = Math.round(value * division) / division;
            value = value.toFixed(me.opts.digits);
            if (me.opts.labelFormat.indexOf("0.00") >= 0) {
                value = me.opts.labelFormat.replace("0.00", value) + " " + me.opts.suffix;
            } else {
                value = value.replace(".", ",");
                value = me.opts.labelFormat.replace("0,00", value) + " " + me.opts.suffix;
            }
            $.publish("plugin/swRangeSlider/onFormatValue", [ me, value ]);
            return value;
        },
        roundTo: function(value, num) {
            var resto = value % num;
            if (resto <= num / 2) {
                return value - resto;
            } else {
                return value + num - resto;
            }
        },
        getPositionByValue: function(value) {
            var me = this;
            if (me.opts.stepCurve == "log") {
                return me._getPositionLog(value);
            }
            return me._getPositionLinear(value);
        },
        _getPositionLog: function(value) {
            var me = this, val = value > 0 ? Math.log(value) : value, minp = 0, maxp = me.opts.stepCount, minv = me.opts.rangeMin > 0 ? Math.log(me.opts.rangeMin) : me.opts.rangeMin, maxv = me.opts.rangeMax > 0 ? Math.log(me.opts.rangeMax) : me.opts.rangeMax, scale = (maxv - minv) / (maxp - minp), pos = minp + (val - minv) / scale;
            pos = Math.round(pos * me.stepWidth);
            return pos > 0 && pos || 0;
        },
        _getPositionLinear: function(value) {
            var me = this;
            return 100 / me.range * (value - me.minRange);
        },
        getValueByPosition: function(position) {
            var me = this;
            if (me.opts.stepCurve == "log") {
                return me._getValueLog(position);
            }
            return me._getValueLinear(position);
        },
        _getValueLinear: function(position) {
            var me = this;
            return me.range / 100 * position + me.minRange;
        },
        _getValueLog: function(position) {
            var me = this;
            if (position === 0) {
                return me.minRange;
            } else if (position === 100) {
                return me.maxRange;
            }
            var minp = 0, maxp = me.opts.stepCount, minv = me.opts.rangeMin > 0 ? Math.log(me.opts.rangeMin) : me.opts.rangeMin, maxv = me.opts.rangeMax > 0 ? Math.log(me.opts.rangeMax) : me.opts.rangeMax, scale = (maxv - minv) / (maxp - minp);
            position = position / me.stepWidth;
            return Math.exp(minv + scale * (position - minp));
        },
        getStepWidth: function(value) {
            var me = this;
            if (me.opts.stepCurve == "log") {
                return value;
            }
            return me.stepWidth;
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
})(jQuery, window, document);

(function($, window, document, undefined) {
    "use strict";
    var specialComponents = {
        value: {
            updateFacet: function(data) {
                var me = this;
                if (me.isChecked(me.$inputs)) {
                    return;
                }
                me.disable(me.$el, data === null);
                me.disable(me.$inputs, data === null);
            }
        },
        "value-list": {
            updateFacet: function(data) {
                this.updateValueList(data);
            }
        },
        "value-list-single": {
            compOpts: {
                checkboxSelector: 'input[type="checkbox"]'
            },
            initComponent: function() {
                var me = this;
                me.$inputs = me.$el.find(me.opts.checkboxSelector);
                me.registerComponentEvents();
            },
            validateComponentShouldBeDisabled: function(data, values, checkedIds) {
                if (checkedIds.length > 0) {
                    return false;
                }
                if (values && values.length <= 0) {
                    return true;
                }
                return data == null;
            },
            registerComponentEvents: function() {
                var me = this;
                me._on(me.$inputs, "change", function(event) {
                    var $el = $(event.currentTarget);
                    if ($el.is(":checked")) {
                        me.$inputs.not($el).attr("disabled", "disabled").parent().addClass("is--disabled");
                        window.setTimeout(function() {
                            me.close();
                        }, 250);
                    }
                    me.onChange(event);
                });
            },
            updateFacet: function(data) {
                this.updateValueList(data);
            },
            validateElementShouldBeDisabled: function($element, activeIds, ids, checkedIds, value) {
                var val = $element.val();
                if (checkedIds.length > 0) {
                    return checkedIds.indexOf(val) === -1;
                }
                if (activeIds.length > 0) {
                    return activeIds.indexOf(val) === -1;
                }
                return ids.indexOf(val) === -1;
            }
        },
        radio: {
            compOpts: {
                radioInputSelector: 'input[type="radio"]'
            },
            initComponent: function() {
                var me = this;
                me.$radioInputs = me.$el.find(me.opts.radioInputSelector);
                me.$inputs = me.$radioInputs;
                me.registerComponentEvents();
            },
            registerComponentEvents: function() {
                var me = this;
                me._on(me.$radioInputs, "change", function(event) {
                    me.onChange(event);
                });
            },
            updateFacet: function(data) {
                this.updateValueList(data);
            }
        },
        "value-tree": {
            updateFacet: function(data) {
                this.updateValueList(data);
            },
            getValueIds: function(values) {
                var ids = [];
                $(values).each(function(index, value) {
                    ids.push(value.id + "");
                });
                return ids;
            },
            registerComponentEvents: function() {
                var me = this;
                me._on(me.$inputs, "change", function(event) {
                    var $el = $(event.currentTarget);
                    if ($el.is(":checked")) {
                        me.$inputs.not($el).attr("disabled", "disabled").parent().addClass("is--disabled");
                        me.$inputs.not($el).prop("checked", false);
                    } else {
                        me.$inputs.prop("disabled", false).parent().removeClass("is--disabled");
                    }
                    me.onChange(event);
                });
            },
            getValues: function(data, $elements) {
                return this.recursiveGetValues(data.values);
            },
            recursiveGetValues: function(values) {
                var items = [];
                var me = this;
                $(values).each(function(index, value) {
                    items.push(value);
                    if (value.values.length > 0) {
                        items = items.concat(me.recursiveGetValues(value.values));
                    }
                });
                return items;
            }
        },
        "value-tree-single": {
            updateFacet: function(data) {
                this.updateValueList(data);
            },
            registerComponentEvents: function() {
                var me = this;
                me._on(me.$inputs, "change", function(event) {
                    var $el = $(event.currentTarget);
                    if ($el.is(":checked")) {
                        me.$inputs.not($el).attr("disabled", "disabled").parent().addClass("is--disabled");
                        me.$inputs.not($el).prop("checked", false);
                    }
                    me.onChange(event);
                });
            },
            getValues: function(data, $elements) {
                if (!data || !data.values) {
                    return [];
                }
                return this.recursiveGetValues(data.values);
            },
            recursiveGetValues: function(values) {
                var me = this, items = [];
                $(values).each(function(index, value) {
                    value.id = value.id + "";
                    items.push(value);
                    if (value.values.length > 0) {
                        items = items.concat(me.recursiveGetValues(value.values));
                    }
                });
                return items;
            },
            validateElementShouldBeDisabled: function($element, activeIds, ids, checkedIds, value) {
                var val = $element.val();
                if (activeIds.length > 0) {
                    return activeIds.indexOf(val) === -1;
                }
                if (checkedIds.length > 0) {
                    return checkedIds.indexOf(val) === -1;
                }
                return ids.indexOf(val) === -1;
            }
        },
        range: {
            compOpts: {
                rangeSliderSelector: '*[data-range-slider="true"]'
            },
            initComponent: function() {
                var me = this;
                me.$rangeSliderEl = me.$el.find(me.opts.rangeSliderSelector);
                me.$rangeInputs = me.$rangeSliderEl.find("input");
                me.rangeSlider = me.$rangeSliderEl.data("plugin_swRangeSlider");
                me.registerComponentEvents();
            },
            updateFacet: function(data) {
                var me = this, initial, isFiltered;
                initial = me.rangeSlider.opts;
                isFiltered = me.rangeSlider.minValue != initial.rangeMin || me.rangeSlider.maxValue != initial.rangeMax;
                if (!isFiltered && data) {
                    isFiltered = data.activeMin !== data.min || data.activeMax !== data.max;
                }
                if (isFiltered) {
                    me.disableComponent(false);
                    return;
                }
                if (data === null) {
                    me.disableComponent(true);
                    return;
                }
                if (data.min == data.max) {
                    me.disableComponent(true);
                    return;
                }
                me.disableComponent(false);
                me.rangeSlider.opts.rangeMax = data.max;
                me.rangeSlider.opts.rangeMin = data.min;
                me.rangeSlider.opts.startMax = data.activeMax;
                me.rangeSlider.opts.startMin = data.activeMin;
                me.rangeSlider.computeBaseValues();
            },
            registerComponentEvents: function() {
                var me = this;
                me._on(me.$rangeInputs, "change", $.proxy(me.onChange, me));
            }
        },
        date: {
            compOpts: {
                datePickerSelector: '*[data-datepicker="true"]'
            },
            initComponent: function() {
                var me = this;
                me.$datePickerEl = me.$el.find(me.opts.datePickerSelector);
                me.datePicker = me.$datePickerEl.data("plugin_swDatePicker");
                me.isRangeSlider = me.$datePickerEl.attr("data-mode") == "range";
                me.$form = me.$el.parents("form");
                me._bufferID = null;
                me.registerComponentEvents();
            },
            registerComponentEvents: function() {
                var me = this;
                me._on(me.$datePickerEl, "change", $.proxy(me.onChange, me));
            },
            onChange: function(event) {
                var me = this;
                me.disableComponent(false);
                if (!me.datePicker.suspended) {
                    if (me.datePicker.opts.enableTime && me.$form.attr("data-instant-filter-result") === "true") {
                        me.buffer($.proxy(me.triggerChange, me, event), 850);
                    } else {
                        me.triggerChange(event);
                    }
                }
                $.publish("plugin/swFilterComponent/onChange", [ me, event ]);
            },
            triggerChange: function(event) {
                var me = this, $el = $(event.currentTarget);
                $el.trigger("onChange", [ me, $el ]);
                me._bufferID = null;
            },
            buffer: function(callback, duration) {
                var me = this;
                if (me._bufferID) {
                    window.clearTimeout(me._bufferID);
                }
                me._bufferID = window.setTimeout(callback, duration);
            },
            updateFacet: function(data) {
                var me = this;
                if (data === null) {
                    me.disableComponent(true);
                    return;
                }
                var isFiltered = me.datePicker.flatpickr.selectedDates.length > 0;
                if (data.min && data.max) {
                    if (data.min === data.max && !isFiltered) {
                        me.disableComponent(true);
                        return;
                    }
                    if (isFiltered) {
                        me.disableComponent(false);
                        return;
                    }
                    me.datePicker.suspendEvents();
                    me.datePicker.flatpickr.set("minDate", data.min);
                    me.datePicker.flatpickr.set("maxDate", data.max);
                    me.datePicker.resumeEvents();
                    me.disableComponent(false);
                    return;
                }
                if (!data.values || data.values.length <= 0) {
                    me.disableComponent(true);
                    return;
                }
                if (isFiltered) {
                    me.datePicker.flatpickr.set("enable", me.datePicker.opts.enabledDates);
                    me.disableComponent(false);
                    return;
                }
                var enabledDates = [];
                $.each(data.values, function(index, option) {
                    enabledDates.push(option.id);
                });
                me.datePicker.flatpickr.set("enable", enabledDates);
                me.disableComponent(enabledDates.length <= 0);
            },
            disableComponent: function(disable) {
                var me = this;
                if (disable && this.$el.hasClass(this.opts.collapseCls)) {
                    this.close();
                }
                this.setDisabledClass(this.$el, disable);
                if (me.isRangeSlider) {
                    me.datePicker.$rangeEndInput.prop("disabled", false);
                    me.datePicker.$rangeStartInput.prop("disabled", false);
                    if (disable) {
                        me.datePicker.$rangeEndInput.prop("disabled", "disabled");
                        me.datePicker.$rangeStartInput.prop("disabled", "disabled");
                    }
                } else {
                    me.$datePickerEl.prop("disabled", false);
                    if (disable) {
                        me.$datePickerEl.prop("disabled", "disabled");
                    }
                }
            }
        },
        rating: {
            compOpts: {
                starInputSelector: ".filter-panel--star-rating input"
            },
            initComponent: function() {
                var me = this;
                me.$starInputs = me.$el.find(me.opts.starInputSelector);
                me.$inputs = me.$starInputs;
                me.registerComponentEvents();
            },
            registerComponentEvents: function() {
                var me = this;
                me._on(me.$starInputs, "change", function(event) {
                    var $el = $(event.currentTarget);
                    me.$starInputs.parents(".rating-star--outer-container").removeClass("is--active");
                    me.$starInputs.not($el).prop("checked", false);
                    if ($el.is(":checked")) {
                        $el.parents(".rating-star--outer-container").addClass("is--active");
                        $el.prop("disabled", false);
                    }
                    me.onChange(event);
                });
            },
            updateFacet: function(data) {
                this.updateValueList(data);
            },
            validateElementShouldBeDisabled: function($element, activeIds, ids, checkedIds, value) {
                var val = $element.val();
                if (value) {
                    return false;
                }
                return checkedIds.indexOf(val) === -1;
            },
            setDisabledClass: function($element, disabled) {
                $element.removeClass("is--disabled");
                $element.parents(".rating-star--outer-container").removeClass("is--disabled");
                if (disabled) {
                    $element.addClass("is--disabled");
                    $element.parents(".rating-star--outer-container").addClass("is--disabled");
                }
            }
        }
    };
    $.plugin("swFilterComponent", {
        defaults: {
            type: "value",
            facetName: null,
            collapseCls: "is--collapsed",
            titleSelector: ".filter-panel--title",
            checkBoxSelector: 'input[type="checkbox"]'
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.type = me.$el.attr("data-filter-type") || me.opts.type;
            me.facetName = me.$el.attr("data-facet-name");
            me.$title = me.$el.find(me.opts.titleSelector);
            me.$siblings = me.$el.siblings("*[data-filter-type]");
            if (specialComponents[me.type] !== undefined) {
                $.extend(me, specialComponents[me.type]);
                $.extend(me.opts, me.compOpts);
            }
            me.initComponent();
            me.registerEvents();
            me.subscribeEvents();
        },
        subscribeEvents: function() {
            var me = this;
            $.subscribe(me.getEventName("plugin/swListingActions/onGetFilterResultFinished"), $.proxy(me.onUpdateFacets, me));
        },
        onUpdateFacets: function(event, plugin, response) {
            var me = this;
            if (!response.hasOwnProperty("facets")) {
                return;
            }
            var facet = me.getFacet(response.facets, me.facetName);
            me.updateFacet(facet);
        },
        initComponent: function() {
            var me = this;
            me.$inputs = me.$el.find(me.opts.checkBoxSelector);
            me.registerComponentEvents();
            $.publish("plugin/swFilterComponent/onInitComponent", [ me ]);
        },
        registerEvents: function() {
            var me = this;
            if (me.type != "value") {
                me._on(me.$title, "click", $.proxy(me.toggleCollapse, me, true));
            }
            $.publish("plugin/swFilterComponent/onRegisterEvents", [ me ]);
        },
        registerComponentEvents: function() {
            var me = this;
            me._on(me.$inputs, "change", $.proxy(me.onChange, me));
            $.publish("plugin/swFilterComponent/onRegisterComponentEvents", [ me ]);
        },
        onChange: function(event) {
            var me = this, $el = $(event.currentTarget);
            me.$el.trigger("onChange", [ me, $el ]);
            $.publish("plugin/swFilterComponent/onChange", [ me, event ]);
        },
        getType: function() {
            return this.type;
        },
        open: function(closeSiblings) {
            var me = this;
            if (closeSiblings) {
                me.$siblings.removeClass(me.opts.collapseCls);
            }
            me.$el.addClass(me.opts.collapseCls);
            $.publish("plugin/swFilterComponent/onOpen", [ me ]);
        },
        close: function() {
            var me = this;
            me.$el.removeClass(me.opts.collapseCls);
            $.publish("plugin/swFilterComponent/onClose", [ me ]);
        },
        toggleCollapse: function() {
            var me = this, shouldOpen = !me.$el.hasClass(me.opts.collapseCls);
            if (me.$el.hasClass("is--disabled")) {
                me.close();
                return;
            }
            if (shouldOpen) {
                me.open(true);
            } else {
                me.close();
            }
            $.publish("plugin/swFilterComponent/onToggleCollapse", [ me, shouldOpen ]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        },
        updateFacet: function(data) {},
        updateValueList: function(data) {
            var me = this, $elements, values, ids, activeIds, checkedIds;
            $elements = me.convertToElementList(me.$inputs);
            values = me.getValues(data, $elements);
            values = me.convertValueIds(values);
            ids = me.getValueIds(values);
            activeIds = me.getActiveValueIds(values);
            checkedIds = me.getElementValues(me.getCheckedElements($elements));
            if (me.validateComponentShouldBeDisabled(data, values, checkedIds)) {
                me.disableAll($elements, values);
                return;
            }
            $elements.each(function(index, $element) {
                var val = $element.val() + "";
                var value = me.findValue(val, values);
                var disable = me.validateElementShouldBeDisabled($element, activeIds, ids, checkedIds, value);
                me.disable($element, disable);
                me.setDisabledClass($element.parents(".filter-panel--input"), disable);
            });
            me.disableComponent(me.allDisabled($elements));
        },
        convertValueIds: function(values) {
            values.forEach(function(value, index) {
                value.id = value.id + "";
            });
            return values;
        },
        disableComponent: function(disable) {
            if (disable && this.$el.hasClass(this.opts.collapseCls)) {
                this.close();
            }
            this.setDisabledClass(this.$el, disable);
        },
        validateComponentShouldBeDisabled: function(data, values, checkedIds) {
            return data == null && checkedIds.length <= 0;
        },
        disableAll: function($elements, values) {
            var me = this;
            $elements.each(function(index, $element) {
                me.disable($element, true);
                me.setDisabledClass($element.parents(".filter-panel--input"), true);
            });
            me.disableComponent(true);
        },
        validateElementShouldBeDisabled: function($element, activeIds, ids, checkedIds, value) {
            var val = $element.val() + "";
            if (activeIds.indexOf(val) >= 0) {
                return false;
            } else if (ids.indexOf(val) >= 0) {
                return false;
            } else if (checkedIds.indexOf(val) >= 0) {
                return false;
            }
            return true;
        },
        getFacet: function(facets, name) {
            var found = null;
            facets.forEach(function(facet, index) {
                if (facet.facetName == name) {
                    found = facet;
                    return false;
                }
            });
            return found;
        },
        isChecked: function($element) {
            return $element.is(":checked");
        },
        getCheckedElements: function($elements) {
            var actives = [], me = this;
            $elements.each(function(index, $element) {
                if (me.isChecked($element)) {
                    actives.push($element);
                }
            });
            return actives;
        },
        getElementValues: function($elements) {
            return $elements.map(function($element) {
                return $element.val() + "";
            });
        },
        findValue: function(val, values) {
            var value = null;
            $(values).each(function(index, item) {
                if (item.id == val) {
                    value = item;
                }
            });
            return value;
        },
        disable: function($element, disabled) {
            this.setDisabledClass($element, disabled);
            this.disableElement($element, disabled);
        },
        disableElement: function($element, disabled) {
            $element.prop("disabled", false);
            if (disabled) {
                $element.prop("disabled", "disabled");
            }
        },
        setDisabledClass: function($element, disabled) {
            $element.removeClass("is--disabled");
            if (disabled) {
                $element.addClass("is--disabled");
            }
        },
        allDisabled: function($elements) {
            var me = this, allDisabled = true;
            $elements.each(function(index, $element) {
                if (!me.isDisabled($element)) {
                    allDisabled = false;
                }
            });
            return allDisabled;
        },
        isDisabled: function($element) {
            return $element.hasClass("is--disabled");
        },
        getValueIds: function(values) {
            var ids = [];
            $(values).each(function(index, value) {
                ids.push(value.id);
            });
            return ids;
        },
        getActiveValueIds: function(values) {
            var ids = [];
            $(values).each(function(index, value) {
                if (value.active) {
                    ids.push(value.id);
                }
            });
            return ids;
        },
        convertToElementList: function(elements) {
            var $elements = [];
            $(elements).each(function(index, element) {
                $elements.push($(element));
            });
            return $($elements);
        },
        getValues: function(data, $elements) {
            var me = this;
            if (!data) {
                return [];
            }
            if (data.hasOwnProperty("values")) {
                return data.values;
            }
            var values = [];
            $(data.facetResults).each(function(index, group) {
                $(group.values).each(function(index, item) {
                    if (me.valueExists(item.id, $elements)) {
                        values.push(item);
                    }
                });
            });
            return values;
        },
        valueExists: function(value, $elements) {
            var exists = false;
            $elements.each(function(index, input) {
                var val = $(input).val() + "";
                if (val == value) {
                    exists = true;
                    return false;
                }
            });
            return exists;
        }
    });
})(jQuery, window, document, undefined);

(function($, window, StateManager, undefined) {
    "use strict";
    var $body = $("body");
    $.plugin("swListingActions", {
        defaults: {
            filterFormSelector: '*[data-filter-form="true"]',
            filterComponentSelector: "*[data-filter-type]",
            filterTriggerSelector: '*[data-filter-trigger="true"]',
            filterTriggerIconSelector: ".action--collapse-icon",
            filterContainerSelector: ".action--filter-options",
            filterInnerContainerSelector: ".filter--container",
            actionFormSelector: '*[data-action-form="true"]',
            actionLinkSelector: '*[data-action-link="true"]',
            activeFilterContSelector: ".filter--active-container",
            applyFilterBtnSelector: ".filter--btn-apply",
            activeFilterCls: "filter--active",
            activeFilterIconCls: "filter--active-icon",
            collapsedCls: "is--collapsed",
            hasActiveFilterCls: "is--active-filter",
            activeCls: "is--active",
            disabledCls: "is--disabled",
            filterCountSelector: ".filter--count",
            loadingClass: "is--loading",
            propertyPrefixChar: "__",
            bufferTime: 850,
            animationSpeed: 400,
            instantFilterActiveCls: "is--instant-filter-active",
            listingSelector: ".listing--container > .listing",
            paginationSelector: ".listing--paging.panel--paging",
            infiniteScrollingAttribute: "data-infinite-scrolling",
            paginationBarPerPageSelector: ".per-page--field.action--field",
            pageInputSelector: "input[name=p]",
            sortInputSelector: "input[name=o]",
            perPageInputSelector: "input[name=n]",
            sortActionFormSelector: ".action--sort",
            perPageActionFormSelector: ".action--per-page",
            listingWrapperSelector: ".listing--wrapper",
            loadingIndSelector: ".listing--wrapper",
            noResultContainerSelector: ".listing-no-filter-result .alert",
            isLoadingCls: "is--loading",
            loadingIndConfig: {
                theme: "light",
                animationSpeed: 100,
                closeOnClick: false
            },
            filterCloseBtnSelector: ".filter--close-btn",
            closeFilterOffCanvasBtnIcon: '<i class="icon--arrow-right"></i>',
            searchHeadlineProductCountSelector: ".search--headline .headline--product-count",
            filterFacetContainerSelector: ".filter--facet-container",
            filterActionButtonBottomSelector: ".filter--actions.filter--actions-bottom",
            sidebarLoadingIndicatorParentSelector: ".content-main--inner",
            addArticleSelector: '*[data-add-article="true"]',
            listingScrollThreshold: -10
        },
        init: function() {
            var me = this, filterCount;
            me.applyDataAttributes();
            $(".sidebar-filter--loader").appendTo(".sidebar-filter--content");
            me.$filterForm = $(me.opts.filterFormSelector);
            me.$filterComponents = me.$filterForm.find(me.opts.filterComponentSelector);
            me.$filterTrigger = me.$el.find(me.opts.filterTriggerSelector);
            me.$filterTriggerIcon = me.$filterTrigger.find(me.opts.filterTriggerIconSelector);
            me.$filterCont = $(me.opts.filterContainerSelector);
            me.$actionForms = $(me.opts.actionFormSelector);
            me.$actionLinks = $(me.opts.actionLinkSelector);
            me.$activeFilterCont = me.$filterForm.find(me.opts.activeFilterContSelector);
            me.$applyFilterBtn = me.$filterForm.find(me.opts.applyFilterBtnSelector);
            me.$listing = $(me.opts.listingSelector);
            me.$pageInput = $(me.$filterForm.find(me.opts.pageInputSelector));
            me.$sortInput = $(me.$filterForm.find(me.opts.sortInputSelector));
            me.$perPageInput = $(me.$filterForm.find(me.opts.perPageInputSelector));
            me.$listingWrapper = me.$el.parent(me.opts.listingWrapperSelector);
            me.$closeFilterOffCanvasBtn = $(me.opts.filterCloseBtnSelector);
            me.$filterFacetContainer = me.$filterForm.find(me.opts.filterFacetContainerSelector);
            me.$filterActionButtonBottom = me.$filterForm.find(me.opts.filterActionButtonBottomSelector);
            me.$sidebarModeLoadionIndicator = $(me.opts.sidebarLoadingIndicatorParentSelector);
            me.$noFilterResultContainer = $(me.opts.noResultContainerSelector);
            me.searchHeadlineProductCount = $(me.opts.searchHeadlineProductCountSelector);
            me.listingUrl = me.$filterForm.attr("data-listing-url");
            me.loadFacets = me.$filterForm.attr("data-load-facets") === "true";
            me.showInstantFilterResult = me.$filterForm.attr("data-instant-filter-result") === "true";
            me.isInfiniteScrolling = me.$listing.attr(me.opts.infiniteScrollingAttribute);
            me.isFilterpanelInSidebar = me.$filterForm.attr("data-is-in-sidebar") === "true";
            me.controllerURL = window.location.href.split("?")[0];
            me.resetLabel = me.$activeFilterCont.attr("data-reset-label");
            me.propertyFieldNames = [];
            me.activeFilterElements = {};
            me.categoryParams = {};
            me.urlParams = "";
            me.bufferTimeout = 0;
            me.closeFilterOffCanvasBtnText = me.$closeFilterOffCanvasBtn.html();
            me.closeFilterOffCanvasBtnTextWithProducts = me.$closeFilterOffCanvasBtn.attr("data-show-products-text");
            me.getPropertyFieldNames();
            me.setCategoryParamsFromTopLocation();
            me.createActiveFiltersFromCategoryParams();
            me.createUrlParams();
            filterCount = Object.keys(me.activeFilterElements).length;
            me.updateFilterTriggerButton(filterCount > 1 ? filterCount - 1 : filterCount);
            me.initStateHandling();
            me.registerEvents();
            me.$loadingIndicatorElement = $(me.opts.loadingIndSelector);
            me.$offCanvasLoadingIndicator = $(me.opts.filterInnerContainerSelector);
            $.subscribe("action/fetchListing", $.proxy(me.onSendListingRequest, me));
            me.disableActiveFilterContainer(true);
            var isFiltered = me.$filterForm.attr("data-is-filtered");
            if (isFiltered > 0 && me.loadFacets) {
                me.getFilterResult(me.urlParams, true, false);
            }
        },
        initStateHandling: function() {
            var me = this, enterFn = $.proxy(me.onEnterMobile, me), exitFn = $.proxy(me.onExitMobile, me);
            StateManager.registerListener([ {
                state: "xs",
                enter: enterFn,
                exit: exitFn
            }, {
                state: "s",
                enter: enterFn,
                exit: exitFn
            } ]);
            $.publish("plugin/swListingActions/onInitStateHandling", [ me ]);
        },
        onEnterMobile: function() {
            var me = this, opts = me.opts;
            me.$filterForm.prop("style", "");
            me.$filterFacetContainer.prop("style", "");
            me.$filterActionButtonBottom.prop("style", "");
            me.disableActiveFilterContainer(false);
            me.$filterCont.removeClass(opts.collapsedCls);
            me.$filterTrigger.removeClass(opts.activeCls);
            $.publish("plugin/swListingActions/onEnterMobile", [ me ]);
        },
        disableActiveFilterContainer: function(disabled) {
            var me = this;
            $.publish("plugin/swListingActions/disableActiveFilter", [ this, disabled ]);
            if (me.showInstantFilterResult || me.isFilterpanelInSidebar) {
                return;
            }
            if (disabled) {
                me.$activeFilterCont.addClass(me.opts.disabledCls);
            } else if (me.$activeFilterCont.hasClass(me.opts.disabledCls)) {
                me.$activeFilterCont.removeClass(me.opts.disabledCls);
            }
        },
        onExitMobile: function() {
            if (StateManager.isCurrentState([ "xs", "s" ])) {
                return;
            }
            if (Object.keys(this.activeFilterElements).length && !this.isFilterpanelInSidebar) {
                this.disableActiveFilterContainer(true);
            }
            $.publish("plugin/swListingActions/onExitMobile", [ this ]);
        },
        registerEvents: function() {
            this._on(this.$filterForm, "submit", $.proxy(this.onFilterSubmit, this));
            this._on(this.$actionForms, "submit", $.proxy(this.onActionSubmit, this));
            this._on(this.$actionLinks, "click", $.proxy(this.onActionLink, this));
            this._on(this.$filterComponents, "onChange", $.proxy(this.onComponentChange, this));
            this._on(this.$filterTrigger, "click", $.proxy(this.onFilterTriggerClick, this));
            this._on($body, "click", $.proxy(this.onBodyClick, this));
            this.$activeFilterCont.on(this.getEventName("click"), "." + this.opts.activeFilterCls, $.proxy(this.onActiveFilterClick, this));
            this.$listingWrapper.on(this.getEventName("submit"), this.opts.actionFormSelector, $.proxy(this.onActionSubmit, this));
            this.$listingWrapper.on(this.getEventName("click"), this.opts.actionLinkSelector, $.proxy(this.onActionLink, this));
            $.publish("plugin/swListingActions/onRegisterEvents", [ this ]);
        },
        onFilterSubmit: function(event) {
            event.preventDefault();
            var formData = this.$filterForm.serializeArray(), categoryParams = this.setCategoryParamsFromData(formData, false);
            this.applyCategoryParams(categoryParams);
            $.publish("plugin/swListingActions/onFilterSubmit", [ this, event ]);
        },
        onActionSubmit: function(event) {
            event.preventDefault();
            var $form = $(event.currentTarget), formData = $form.serializeArray(), categoryParams = this.setCategoryParamsFromData(formData, true);
            if (this.showInstantFilterResult) {
                this.setPageInput(this.getFormValue(formData, "p"));
                if (this.isSortAction($form)) {
                    this.setSortInput(this.getFormValue(formData, "o"));
                } else if (this.isPerPageAction($form)) {
                    this.setPerPageInput(this.getFormValue(formData, "n"));
                }
            }
            this.applyCategoryParams(categoryParams);
            $.publish("plugin/swListingActions/onActionSubmit", [ this, event ]);
        },
        getFormValue: function(data, key) {
            var value = "";
            $.each(data, function(index, item) {
                if (item.name === key) {
                    value = item.value;
                }
            });
            return value;
        },
        isSortAction: function($form) {
            return $form.is(this.opts.sortActionFormSelector);
        },
        isPerPageAction: function($form) {
            return $form.is(this.opts.perPageActionFormSelector);
        },
        setPageInput: function(value) {
            this.$pageInput.val(value);
        },
        setSortInput: function(value) {
            this.$sortInput.val(value);
        },
        setPerPageInput: function(value) {
            this.$perPageInput.val(value);
        },
        onActionLink: function(event) {
            event.preventDefault();
            var me = this, $link = $(event.currentTarget), linkParams = $link.attr("href").split("?")[1], linkParamsArray = linkParams.split("&"), paramValue;
            if (me.showInstantFilterResult) {
                $.each(linkParamsArray, function(index, param) {
                    paramValue = param.split("=");
                    if (paramValue[0] === "p") {
                        me.setPageInput(paramValue[1]);
                    }
                });
            }
            this.applyCategoryParams(this.setCategoryParamsFromUrlParams(linkParams));
            $.publish("plugin/swListingActions/onActionLink", [ this, event ]);
        },
        onFilterTriggerClick: function(event) {
            event.preventDefault();
            if (StateManager.isCurrentState([ "xs", "s" ])) {
                return;
            }
            if (this.$filterCont.hasClass(this.opts.collapsedCls)) {
                this.closeFilterPanel();
            } else {
                this.openFilterPanel();
            }
            $.publish("plugin/swListingActions/onFilterTriggerClick", [ this, event ]);
        },
        onBodyClick: function(event) {
            var $target = $(event.target);
            if (!$target.is(this.opts.filterComponentSelector + ", " + this.opts.filterComponentSelector + " *")) {
                $.each(this.$filterComponents, function(index, item) {
                    $(item).data("plugin_swFilterComponent").close();
                });
            }
            $.publish("plugin/swListingActions/onBodyClick", [ this, event ]);
        },
        onComponentChange: function(event) {
            var urlParams, formData, categoryParams;
            if (this.showInstantFilterResult) {
                this.setPageInput(1);
            }
            formData = this.$filterForm.serializeArray();
            categoryParams = this.setCategoryParamsFromData(formData);
            urlParams = this.createUrlParams(categoryParams);
            this.createActiveFiltersFromCategoryParams(categoryParams);
            this.enableButtonLoading();
            this.buffer($.proxy(this.getFilterResult, this, urlParams, this.loadFacets, this.showInstantFilterResult), this.opts.bufferTime);
            $.publish("plugin/swListingActions/onComponentChange", [ this, event ]);
        },
        onActiveFilterClick: function(event) {
            var me = this, $activeFilter = $(event.currentTarget), param = $activeFilter.attr("data-filter-param"), isMobile = StateManager.isCurrentState([ "xs", "s" ]);
            if (param === "reset") {
                $.each(me.activeFilterElements, function(key) {
                    me.removeActiveFilter(key);
                    me.resetFilterProperty(key);
                });
                $.each(me.$filterComponents, function(i, component) {
                    var $component = $(component), componentPlugin = $component.data("plugin_swFilterComponent");
                    $.each(componentPlugin.$inputs, function(i, item) {
                        componentPlugin.disable($(item), false);
                        componentPlugin.disableComponent(false);
                    });
                    $component.removeClass(me.opts.disabledCls).find("." + me.opts.disabledCls).removeClass(me.opts.disabledCls);
                });
                if (!isMobile && !me.$filterCont.hasClass(me.opts.collapsedCls)) {
                    me.applyCategoryParams();
                }
            } else if (!me.$activeFilterCont.hasClass(me.opts.disabledCls) || me.$filterCont.is(".off-canvas.is--open")) {
                me.removeActiveFilter(param);
                me.resetFilterProperty(param);
            }
            $.publish("plugin/swListingActions/onActiveFilterClick", [ me, event ]);
        },
        getPropertyFieldNames: function() {
            var me = this;
            $.each(me.$filterComponents, function(index, item) {
                var $comp = $(item), types = [ "value-list", "value-list-single", "value-tree", "media", "value-tree-single", "date" ], type = $comp.attr("data-filter-type"), fieldName = $comp.attr("data-field-name");
                if (types.indexOf(type) >= 0 && me.propertyFieldNames.indexOf(fieldName) === -1) {
                    me.propertyFieldNames.push(fieldName);
                }
            });
            $.publish("plugin/swListingActions/onGetPropertyFieldNames", [ me, me.propertyFieldNames ]);
            return me.propertyFieldNames;
        },
        setCategoryParamsFromData: function(formData, extend) {
            var tempParams = {};
            $.each(formData, function(index, item) {
                if (item["value"]) {
                    tempParams[item["name"]] = item["value"];
                }
            });
            if (extend) {
                return $.extend(this.categoryParams, tempParams);
            }
            this.categoryParams = tempParams;
            $.publish("plugin/swListingActions/onSetCategoryParamsFromData", [ this, tempParams ]);
            return tempParams;
        },
        setCategoryParamsFromTopLocation: function() {
            var urlParams = window.location.search.substr(1), categoryParams = this.setCategoryParamsFromUrlParams(urlParams);
            $.publish("plugin/swListingActions/onSetCategoryParamsFromData", [ this, categoryParams ]);
            return categoryParams;
        },
        setCategoryParamsFromUrlParams: function(urlParamString) {
            var me = this, categoryParams, params;
            if (urlParamString.length <= 0) {
                categoryParams = {};
                $.publish("plugin/swListingActions/onSetCategoryParamsFromUrlParams", [ me, categoryParams ]);
                return categoryParams;
            }
            categoryParams = me.categoryParams;
            params = urlParamString.split("&");
            $.each(params, function(index, item) {
                var param = item.split("=");
                param = $.map(param, function(val) {
                    val = val.replace(/\+/g, "%20");
                    return $.PluginBase.prototype.safeURIDecode(val);
                });
                if (param[1] === "reset") {
                    delete categoryParams[param[0]];
                } else if (me.propertyFieldNames.indexOf(param[0]) !== -1) {
                    var properties = param[1].split("|");
                    $.each(properties, function(index, property) {
                        categoryParams[me.opts.propertyPrefixChar + param[0] + me.opts.propertyPrefixChar + property] = property;
                    });
                } else {
                    categoryParams[param[0]] = param[1];
                }
            });
            $.publish("plugin/swListingActions/onSetCategoryParamsFromUrlParams", [ me, categoryParams ]);
            return categoryParams;
        },
        applyCategoryParams: function(categoryParams) {
            var params = categoryParams || this.categoryParams, urlParams = this.createUrlParams(params);
            this.applyUrlParams(urlParams);
            $.publish("plugin/swListingActions/onApplyCategoryParams", [ this, categoryParams ]);
        },
        createUrlParams: function(categoryParams) {
            var catParams = categoryParams || this.categoryParams, params = this.cleanParams(catParams), filterList = [];
            $.each(params, function(key, value) {
                filterList.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
            });
            this.urlParams = "?" + filterList.join("&");
            $.publish("plugin/swListingActions/onCreateUrlParams", [ this, this.urlParams ]);
            return this.urlParams;
        },
        cleanParams: function(params) {
            var me = this, propertyParams = {};
            $.each(params, function(key, value) {
                if (key.substr(0, 2) === me.opts.propertyPrefixChar) {
                    var propertyKey = key.split(me.opts.propertyPrefixChar)[1];
                    if (propertyParams[propertyKey] !== undefined) {
                        propertyParams[propertyKey] += "|" + value;
                    } else {
                        propertyParams[propertyKey] = value;
                    }
                } else {
                    propertyParams[key] = value;
                }
            });
            return propertyParams;
        },
        applyUrlParams: function(urlParams) {
            var params = urlParams || this.urlParams, formData, categoryParams, paramsForFilterResult;
            if (this.showInstantFilterResult) {
                formData = this.$filterForm.serializeArray();
                categoryParams = this.setCategoryParamsFromData(formData);
                paramsForFilterResult = this.createUrlParams(categoryParams);
                this.enableButtonLoading();
                this.buffer($.proxy(this.getFilterResult, this, paramsForFilterResult, false, this.showInstantFilterResult), this.opts.bufferTime);
            } else {
                window.location.href = this.getListingUrl(params, false);
            }
            $.publish("plugin/swListingActions/onApplyUrlParams", [ this, urlParams ]);
        },
        getListingUrl: function(urlParams, encode) {
            var params = urlParams || this.urlParams, url;
            if (encode) {
                url = encodeURI(this.controllerURL + params);
            } else {
                url = this.controllerURL + params;
            }
            $.publish("plugin/swListingActions/onGetListingUrl", [ this, url, urlParams, encode ]);
            return url;
        },
        buffer: function(func, bufferTime) {
            if (this.bufferTimeout) {
                clearTimeout(this.bufferTimeout);
            }
            this.bufferTimeout = setTimeout(func, bufferTime);
            $.publish("plugin/swListingActions/onBuffer", [ this, this.bufferTimeout, func, bufferTime ]);
        },
        resetBuffer: function() {
            this.bufferTimeout = 0;
            $.publish("plugin/swListingActions/onResetBuffer", [ this, this.bufferTimeout ]);
        },
        onSendListingRequest: function(event, params, loadFacets, loadProducts, callback) {
            var formData = this.$filterForm.serializeArray();
            $.each(formData, function(index, item) {
                if (!params.hasOwnProperty(item.name)) {
                    if (!item.value || typeof item.value === "string" && item.value.length <= 0) {
                        return;
                    }
                    params[item.name] = item.value;
                }
            });
            this.sendListingRequest(params, loadFacets, loadProducts, callback, true);
        },
        sendListingRequest: function(params, loadFacets, loadProducts, callback, appendDefaults) {
            if (typeof params === "object") {
                params = "?" + $.param(params);
            }
            this.resetBuffer();
            $.ajax({
                type: "get",
                url: this.buildListingUrl(params, loadFacets, loadProducts),
                success: $.proxy(callback, this)
            });
            $.publish("plugin/swListingActions/onGetFilterResult", [ this, params ]);
        },
        getFilterResult: function(urlParams, loadFacets, loadProducts) {
            var me = this, params = urlParams || me.urlParams, loadingIndicator = me.$loadingIndicatorElement;
            if (me.$filterCont.is(".off-canvas.is--open")) {
                loadingIndicator = me.$offCanvasLoadingIndicator;
            } else if (me.isFilterpanelInSidebar) {
                loadingIndicator = me.$sidebarModeLoadionIndicator;
            }
            me.resetBuffer();
            me.enableLoading(loadingIndicator, loadProducts, function() {
                me.sendListingRequest(params, loadFacets, loadProducts, function(response) {
                    me.disableLoading(loadingIndicator, loadProducts, response, function() {
                        me.updateListing(response);
                        $.publish("plugin/swListingActions/onGetFilterResultFinished", [ me, response, params ]);
                    });
                });
            });
        },
        enableLoading: function(loadingIndicator, loadProducts, callback) {
            callback = $.isFunction(callback) ? callback : $.noop;
            if (loadProducts) {
                this.$listing.addClass(this.opts.isLoadingCls);
                loadingIndicator.setLoading(true, this.opts.loadingIndConfig).then($.proxy(callback, this));
            } else {
                this.enableButtonLoading();
                callback.call(this);
            }
        },
        enableButtonLoading: function() {
            if (!this.showInstantFilterResult) {
                this.$applyFilterBtn.addClass(this.opts.loadingClass);
            }
        },
        disableLoading: function(loadingIndicator, loadProducts, response, callback) {
            callback = $.isFunction(callback) ? callback : $.noop;
            if (loadProducts) {
                loadingIndicator.setLoading(false).then($.proxy(callback, this));
            } else {
                this.$applyFilterBtn.removeClass(this.opts.loadingClass);
                this.updateFilterButton(response.totalCount);
                callback.call(this);
            }
        },
        buildListingUrl: function(formParams, loadFacets, loadProducts) {
            var url = this.listingUrl + formParams;
            if (loadProducts) {
                url += "&loadProducts=1";
            }
            if (loadFacets) {
                url += "&loadFacets=1";
            }
            return url;
        },
        updateListing: function(response) {
            var html, listing = this.$listing, pages;
            if (!response.hasOwnProperty("listing")) {
                listing.removeClass(this.opts.isLoadingCls);
                return;
            }
            this.updateFilterCloseButton(response.totalCount);
            this.updateSearchHeadline(response.totalCount);
            this.updateNoResultContainer(response.totalCount);
            html = response.listing.trim();
            listing.html(html);
            window.picturefill();
            listing.removeClass(this.opts.isLoadingCls);
            window.history.pushState("data", "", window.location.href.split("?")[0] + this.urlParams);
            $.publish("plugin/swListingActions/updateListing", [ this, html ]);
            StateManager.updatePlugin(this.opts.addArticleSelector, "swAddArticle");
            if (this.isInfiniteScrolling) {
                pages = Math.ceil(response.totalCount / this.$perPageInput.val());
                listing.attr("data-pages", pages);
                listing.data("plugin_swInfiniteScrolling").destroy();
                StateManager.addPlugin(this.opts.listingSelector, "swInfiniteScrolling");
                $.publish("plugin/swListingActions/updateInfiniteScrolling", [ this, html, pages ]);
            } else {
                this.updatePagination(response);
                this.scrollToTopPagination();
            }
        },
        scrollToTopPagination: function() {
            var $htmlBodyCt = $("html, body"), listingScrollThreshold = this.opts.listingScrollThreshold, listingActionPos = this.$el.offset().top + listingScrollThreshold, scrollTop = $htmlBodyCt.scrollTop();
            if (scrollTop === 0) {
                scrollTop = $("body").scrollTop();
            }
            if (scrollTop > listingActionPos) {
                $htmlBodyCt.animate({
                    scrollTop: listingActionPos
                }, this.opts.animationSpeed);
            }
        },
        updateFilterCloseButton: function(totalCount) {
            var filterCount = Object.keys(this.activeFilterElements).length;
            if (filterCount > 0) {
                this.$closeFilterOffCanvasBtn.html(this.closeFilterOffCanvasBtnTextWithProducts.replace("%s", totalCount) + this.opts.closeFilterOffCanvasBtnIcon);
                $.publish("plugin/swListingActions/updateFilterCloseBtnWithProductsCount", [ this, totalCount ]);
            } else {
                this.$closeFilterOffCanvasBtn.html(this.closeFilterOffCanvasBtnText);
                $.publish("plugin/swListingActions/updateFilterCloseBtnDefault", [ this ]);
            }
            this.updateFilterTriggerButton(filterCount > 1 ? filterCount - 1 : filterCount);
        },
        updateSearchHeadline: function(totalCount) {
            if (this.searchHeadlineProductCount.length > 0) {
                this.searchHeadlineProductCount.html(totalCount);
            }
        },
        updateNoResultContainer: function(totalCount) {
            if (totalCount > 0) {
                if (!this.$noFilterResultContainer.hasClass("is--hidden")) {
                    this.$noFilterResultContainer.addClass("is--hidden");
                }
                return;
            }
            if (this.$noFilterResultContainer.hasClass("is--hidden")) {
                this.$noFilterResultContainer.removeClass("is--hidden");
            }
        },
        updatePagination: function(response) {
            var html = response.pagination.trim();
            $(this.opts.paginationSelector).replaceWith(html);
            StateManager.updatePlugin(this.opts.paginationBarPerPageSelector, "swAutoSubmit");
            $.publish("plugin/swListingActions/updatePagination", [ this, html ]);
        },
        updateFilterButton: function(count) {
            this.$applyFilterBtn.find(this.opts.filterCountSelector).html(count);
            if (count <= 0) {
                this.$applyFilterBtn.attr("disabled", "disabled");
            } else {
                this.$applyFilterBtn.prop("disabled", false);
            }
            $.publish("plugin/swListingActions/onUpdateFilterButton", [ this, count ]);
        },
        updateFilterTriggerButton: function(activeFilterCount) {
            this.$filterTriggerIcon.html(activeFilterCount || "");
            $.publish("plugin/swListingActions/onUpdateFilterTriggerButton", [ this, activeFilterCount ]);
        },
        createActiveFiltersFromCategoryParams: function(categoryParams) {
            var me = this, count = 0, params = categoryParams || this.categoryParams;
            $.each(this.activeFilterElements, function(key) {
                if (params[key] === undefined || params[key] === 0) {
                    me.removeActiveFilter(key);
                }
            });
            $.each(params, function(key, value) {
                me.createActiveFilter(key, value);
            });
            $.each(this.activeFilterElements, function() {
                count++;
            });
            if (count > 1) {
                this.createActiveFilterElement("reset", this.resetLabel);
            }
            this.$filterCont.toggleClass(this.opts.hasActiveFilterCls, count > 0);
            if (this.showInstantFilterResult && count > 0) {
                this.$filterCont.addClass(this.opts.instantFilterActiveCls);
            }
            if (!this.opts.isFilterpanelInSidebar) {
                this.$activeFilterCont.toggleClass(this.opts.collapsedCls, this.$filterCont.hasClass(this.opts.collapsedCls));
            }
            $.publish("plugin/swListingActions/onCreateActiveFiltersFromCategoryParams", [ this, categoryParams ]);
        },
        createActiveFilter: function(param, value) {
            var label = this.createActiveFilterLabel(param, value);
            if (label !== undefined && label.length) {
                if (this.activeFilterElements[param] !== undefined) {
                    this.updateActiveFilterElement(param, label);
                } else {
                    this.createActiveFilterElement(param, label);
                }
            }
            $.publish("plugin/swListingActions/onCreateActiveFilter", [ this, param, value ]);
        },
        createActiveFilterElement: function(param, label) {
            this.activeFilterElements[param] = $("<span>", {
                class: this.opts.activeFilterCls,
                html: this.getLabelIcon() + label,
                "data-filter-param": param
            }).appendTo(this.$activeFilterCont);
            $.publish("plugin/swListingActions/onCreateActiveFilterElement", [ this, param, label ]);
        },
        updateActiveFilterElement: function(param, label) {
            this.activeFilterElements[param].html(this.getLabelIcon() + label);
            $.publish("plugin/swListingActions/onUpdateActiveFilterElement", [ this, param, label ]);
        },
        removeActiveFilter: function(param) {
            this.activeFilterElements[param].remove();
            delete this.activeFilterElements[param];
            $.publish("plugin/swListingActions/onRemoveActiveFilter", [ this, param ]);
        },
        resetFilterProperty: function(param) {
            var $input, rangeSlider;
            if (param === "rating") {
                $input = this.$filterForm.find('.filter--rating .is--active input[name="rating"]');
                $input.prop("checked", false).trigger("change");
            } else {
                $input = this.$filterForm.find('[name="' + this.escapeDoubleQuotes(param) + '"]');
                if ($input.is("[data-range-input]")) {
                    rangeSlider = $input.parents('[data-range-slider="true"]').data("plugin_swRangeSlider");
                    rangeSlider.reset($input.attr("data-range-input"));
                } else if ($input.is('[data-datepicker="true"]') || $input.is("[data-date-range-input]")) {
                    $input.trigger("clear");
                } else {
                    $input.prop("checked", false).trigger("change");
                }
            }
            $.publish("plugin/swListingActions/onResetFilterProperty", [ this, param ]);
        },
        createActiveFilterLabel: function(param, value) {
            var $label, labelText = "", valueString = value + "";
            if (param === "rating" && value > 0) {
                labelText = this.createStarLabel(value);
            } else {
                $label = this.$filterForm.find('label[for="' + this.escapeDoubleQuotes(param) + '"]');
                if ($label.is("[data-range-label]")) {
                    labelText = $label.prev("span").html() + $label.html();
                } else if ($label.is("[data-date-range-label]")) {
                    labelText = $label.html() + " " + $label.next("[data-date-range-input]").attr("data-display-value");
                } else if ($label.find("img").length) {
                    labelText = $label.find("img").attr("alt");
                } else if ($label.closest(this.opts.filterComponentSelector).is('[data-filter-type="radio"]')) {
                    var activeRadioId = $label.closest(this.opts.filterComponentSelector).find("input:checked").attr("id");
                    labelText = this.$filterForm.find('label[for="' + this.escapeDoubleQuotes(activeRadioId) + '"]').html();
                } else if (value > 0 || valueString.length > 0) {
                    labelText = $label.html();
                }
            }
            $.publish("plugin/swListingActions/onCreateActiveFilterLabel", [ this, labelText, param, value ]);
            return labelText;
        },
        escapeDoubleQuotes: function(str) {
            return str.replace(/\\([\s\S])|(")/g, "\\$1$2");
        },
        createStarLabel: function(stars) {
            var label = "", i = 0;
            for (i; i < 5; i++) {
                if (i < stars) {
                    label += '<i class="icon--star"></i>';
                } else {
                    label += '<i class="icon--star-empty"></i>';
                }
            }
            $.publish("plugin/swListingActions/onCreateStarLabel", [ this, label, stars ]);
            return label;
        },
        getLabelIcon: function() {
            var icon = '<span class="' + this.opts.activeFilterIconCls + '"></span>';
            $.publish("plugin/swListingActions/onCreateStarLabel", [ this, icon ]);
            return icon;
        },
        openFilterPanel: function() {
            if (!this.$filterCont.hasClass(this.opts.hasActiveFilterCls)) {
                this.$activeFilterCont.slideDown(this.opts.animationSpeed);
            }
            this.$filterFacetContainer.slideDown(this.opts.animationSpeed);
            this.$filterActionButtonBottom.slideDown(this.opts.animationSpeed);
            this.disableActiveFilterContainer(false);
            this.$filterCont.addClass(this.opts.collapsedCls);
            this.$filterTrigger.addClass(this.opts.activeCls);
            $.publish("plugin/swListingActions/onOpenFilterPanel", [ this ]);
        },
        closeFilterPanel: function() {
            if (!this.$filterCont.hasClass(this.opts.hasActiveFilterCls)) {
                this.$activeFilterCont.slideUp(this.opts.animationSpeed);
            }
            this.$filterFacetContainer.slideUp(this.opts.animationSpeed);
            this.$filterActionButtonBottom.slideUp(this.opts.animationSpeed);
            this.disableActiveFilterContainer(true);
            this.$filterCont.removeClass(this.opts.collapsedCls);
            this.$filterTrigger.removeClass(this.opts.activeCls);
            $.publish("plugin/swListingActions/onCloseFilterPanel", [ this ]);
        },
        destroy: function() {
            this.$el.off(this.getEventName("click"), "." + this.opts.activeFilterCls);
            this.$listingWrapper.off(this.getEventName("submit"), this.opts.actionFormSelector);
            this.$listingWrapper.off(this.getEventName("click"), this.opts.actionLinkSelector);
            this._destroy();
        }
    });
})(jQuery, window, StateManager, undefined);

(function($, window) {
    "use strict";
    $.plugin("swCollapseCart", {
        defaults: {
            ajaxCartURL: window.controller["ajax_cart"],
            triggerElSelector: ".navigation--entry.entry--cart",
            itemContainerSelector: ".item--container",
            removeItemSelector: ".action--remove",
            offcanvasCloseElSelector: ".close--off-canvas",
            loadingIconClass: "icon--loading-indicator",
            loadingIconWrapperClass: "ajax--cart",
            activeClass: "is--shown",
            displayMode: "collapsible",
            shippingCalculatorOptions: ".table--shipping-costs select"
        },
        init: function() {
            var me = this, opts;
            me.applyDataAttributes(false, [ "ajaxCartURL" ]);
            opts = me.opts;
            me._$triggerEl = $(opts.triggerElSelector);
            me._$linkEl = me._$triggerEl.find(".cart--link");
            me._isOverMe = false;
            me._isCartLoading = false;
            me._$loadingIcon = $("<i>", {
                class: opts.loadingIconClass
            });
            me._isOpened = false;
            if (me.isDisplayMode("offcanvas")) {
                me._$triggerEl.swOffcanvasMenu({
                    offCanvasSelector: me.$el,
                    direction: "fromRight"
                });
            }
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me.$el.on(me.getEventName("click"), me.opts.removeItemSelector, $.proxy(me.onRemoveButtonClick, me));
            me.$el.on(me.getEventName("click touchstart"), me.opts.offcanvasCloseElSelector, $.proxy(me.onCloseButtonClick, me));
            if (me.isDisplayMode("offcanvas")) {
                me._on(me._$triggerEl, "click touchstart", $.proxy(me.onMouseEnter, me));
                $.subscribe(me.getEventName("plugin/swAddArticle/onAddArticle"), $.proxy(me.onArticleAdded, me));
                $.subscribe(me.getEventName("plugin/swAddArticle/onBeforeAddArticle"), $.proxy(me.onBeforeAddArticle, me));
            } else {
                me._on(me._$triggerEl, "mouseenter touchstart", $.proxy(me.onMouseEnter, me));
                me._on(me._$triggerEl, "mouseleave", $.proxy(me.onMouseLeave, me));
                me._on(me._$triggerEl, "click", $.proxy(me.onClick, me));
                me._on(me.$el, "mouseleave", $.proxy(me.onMouseLeave, me));
                $(".container--ajax-cart," + me.opts.triggerElSelector).on(me.getEventName("mouseover"), $.proxy(me.onMouseHoverStart, me)).on(me.getEventName("mouseleave"), $.proxy(me.onMouseHoverEnd, me));
            }
            $.publish("plugin/swCollapseCart/onRegisterEvents", [ me ]);
        },
        onBeforeAddArticle: function() {
            this.showLoadingIndicator();
            this.openMenu();
            $.publish("plugin/swCollapseCart/onBeforeAddArticle", [ this ]);
        },
        onArticleAdded: function(event, plugin, response) {
            if (this.isDisplayMode("collapsible")) {
                return;
            }
            this.$el.html(response).find(".ajax--cart .alert").removeClass("is--hidden");
            picturefill();
            this._on(this.$el.find(this.opts.shippingCalculatorOptions), "change", $.proxy(this.onShippingCalculationChange, this));
            $.publish("plugin/swCollapseCart/onArticleAdded", [ this ]);
        },
        onMouseEnter: function(event) {
            var me = this;
            if (me.isDisplayMode("offcanvas")) {
                event.preventDefault();
                me.showLoadingIndicator();
                me.openMenu();
                me.loadCart();
            } else {
                if (me.isCartLoading()) {
                    me.showLoadingIndicator();
                    me.openMenu();
                } else {
                    me.buffer(function() {
                        if (me.isOverMe() === false || me._wasClicked === true) {
                            return;
                        }
                        me.showLoadingIndicator();
                        me.openMenu();
                        me.loadCart(function() {
                            $("body").one("touchstart", $.proxy(me.onMouseLeave, me));
                            $.publish("plugin/swCollapseCart/onMouseEnterLoaded", [ me, event ]);
                        });
                        $.publish("plugin/swCollapseCart/onMouseEnterBuffer", [ me, event ]);
                    }, 500);
                }
            }
            $.publish("plugin/swCollapseCart/onMouseEnter", [ me, event ]);
        },
        onMouseLeave: function(event) {
            var target = event.toElement || event.relatedTarget || event.target;
            $.publish("plugin/swCollapseCart/onMouseLeave", [ this, event ]);
            if (this.isElementOrChild(this.$el[0], target) || this.isElementOrChild(this._$triggerEl[0], target)) {
                return;
            }
            this.closeMenu();
            this.clearBuffer();
        },
        onCloseButtonClick: function(event) {
            event.preventDefault();
            $.publish("plugin/swCollapseCart/onCloseButton", [ this ]);
            this.closeMenu();
        },
        onRemoveButtonClick: function(event) {
            event.preventDefault();
            var me = this, $currentTarget = $(event.currentTarget), $parent = $currentTarget.parent(), $form = $currentTarget.closest("form"), url;
            if ($currentTarget.attr("href")) {
                url = $currentTarget.attr("href");
            } else {
                url = $form.attr("action");
            }
            $.publish("plugin/swCollapseCart/onRemoveArticle", [ me, event ]);
            $parent.html(me._$loadingIcon.clone());
            $.ajax({
                url: url,
                dataType: "html",
                method: "POST",
                success: function(result) {
                    me.$el.html(result);
                    picturefill();
                    $.publish("plugin/swCollapseCart/onRemoveArticleFinished", [ me, event, result ]);
                }
            });
        },
        buffer: function(func, bufferTime) {
            this.clearBuffer();
            this.bufferTimeout = setTimeout(func, bufferTime);
        },
        clearBuffer: function() {
            if (this.bufferTimeout) {
                clearTimeout(this.bufferTimeout);
            }
        },
        isElementOrChild: function(firstEl, secondEl) {
            return firstEl === secondEl || $.contains(firstEl, secondEl);
        },
        isDisplayMode: function(mode) {
            return this.opts.displayMode === mode;
        },
        showLoadingIndicator: function() {
            this.$el.html($("<div>", {
                class: this.opts.loadingIconWrapperClass,
                html: this._$loadingIcon.clone()
            }));
            $.publish("plugin/swCollapseCart/onShowLoadingIndicator", [ this ]);
        },
        openMenu: function() {
            var plugin;
            this._isOpened = true;
            if (this.isDisplayMode("offcanvas") && (plugin = this._$triggerEl.data("plugin_swOffcanvasMenu"))) {
                plugin.openMenu();
            } else {
                this.$el.addClass(this.opts.activeClass);
            }
            $.publish("plugin/swCollapseCart/onMenuOpen", [ this ]);
        },
        loadCart: function(callback, settings) {
            var me = this, opts = me.opts, $el = me.$el, url = opts.ajaxCartURL;
            settings = settings || {};
            if (me.isCartLoading()) {
                return;
            }
            $.publish("plugin/swCollapseCart/onLoadCart", [ me ]);
            me._$linkEl.addClass("is--disabled");
            me._isCartLoading = true;
            $.ajax({
                url: url,
                dataType: "html",
                data: settings,
                success: function(result) {
                    $el.html(result);
                    picturefill();
                    window.StateManager.updatePlugin('*[data-notification-message-close="true"]', "swNotificationMessageClose");
                    me._on(me.$el.find(me.opts.shippingCalculatorOptions), "change", $.proxy(me.onShippingCalculationChange, me));
                    if (typeof callback === "function") {
                        callback();
                    }
                    $.publish("plugin/swCollapseCart/onLoadCartFinished", [ me, result ]);
                },
                complete: function() {
                    me._$linkEl.removeClass("is--disabled");
                    me._isCartLoading = false;
                }
            });
        },
        closeMenu: function() {
            var plugin;
            this._isOpened = false;
            if (this.isDisplayMode("offcanvas") && (plugin = this._$triggerEl.data("plugin_swOffcanvasMenu"))) {
                plugin.closeMenu();
            } else {
                this.$el.removeClass(this.opts.activeClass);
            }
            $.publish("plugin/swCollapseCart/onCloseMenu", [ this ]);
        },
        onClick: function(event) {
            if (this.isCartLoading()) {
                event.preventDefault();
                return false;
            }
            this._wasClicked = true;
        },
        isCartLoading: function() {
            return !!this._isCartLoading;
        },
        isOverMe: function() {
            return !!this._isOverMe;
        },
        onMouseHoverStart: function() {
            this._isOverMe = true;
        },
        onMouseHoverEnd: function() {
            this._isOverMe = false;
        },
        onShippingCalculationChange: function(event) {
            var me = this, form = $(event.target).closest("form");
            $.publish("plugin/swCollapseCart/onShippingCalculationChange", [ this ]);
            me.showLoadingIndicator();
            $.ajax({
                type: "POST",
                url: form.attr("action"),
                data: form.serialize(),
                success: function(res) {
                    me.loadCart(function() {}, {
                        openShippingCalculations: true
                    });
                    $.publish("plugin/swCollapseCart/onShippingCalculationChangeFinished", [ this ]);
                }
            });
        },
        destroy: function() {
            $.unsubscribe(this.getEventName("plugin/swAddArticle/onAddArticle"));
            $.unsubscribe(this.getEventName("plugin/swAddArticle/onBeforeAddArticle"));
            this.off(this.eventSuffix);
            this._destroy();
        }
    });
})(jQuery, window);

(function($, window, document, undefined) {
    "use strict";
    var $window = $(window), $body = $("body");
    $.plugin("swEmotionLoader", {
        defaults: {
            controllerUrl: null,
            availableDevices: null,
            deviceTypes: {
                xl: "0",
                l: "1",
                m: "2",
                s: "3",
                xs: "4"
            },
            wrapperSelector: ".emotion--wrapper",
            loadingOverlaySelector: ".emotion--overlay",
            ajax: true,
            visibleFullscreenSelector: '.emotion--wrapper:visible[data-fullscreen="true"]'
        },
        init: function() {
            var me = this, opts = me.opts;
            me.applyDataAttributes();
            if (opts.controllerUrl === null || opts.availableDevices === null) {
                me.$el.remove();
                return;
            }
            me.$emotion = false;
            me.availableDevices = (opts.availableDevices + "").split(",");
            me.$overlay = $(me.opts.loadingOverlaySelector);
            me.loadEmotion();
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            StateManager.on("resize", $.proxy(me.onDeviceChange, me));
            $.publish("plugin/swEmotionLoader/onRegisterEvents", [ me ]);
        },
        onDeviceChange: function() {
            var me = this;
            me.loadEmotion();
            $.publish("plugin/swEmotionLoader/onDeviceChange", [ me ]);
        },
        loadEmotion: function(controllerUrl, deviceState) {
            var me = this, devices = me.availableDevices, types = me.opts.deviceTypes, url = controllerUrl || me.opts.controllerUrl, state = deviceState || StateManager.getCurrentState();
            if (devices.indexOf(types[state]) === -1) {
                me.$overlay.remove();
                me.hideEmotion();
                return;
            }
            if (!devices.length || !state.length || !url.length) {
                me.$overlay.remove();
                me.hideEmotion();
                return;
            }
            if (me.$emotion && me.$emotion.length) {
                me.$overlay.remove();
                me.showEmotion();
                return;
            }
            if (me.opts.ajax) {
                me.showEmotion();
                if (me.isLoading) {
                    return;
                }
                me.isLoading = true;
                me.$overlay.insertBefore(".content-main");
                $.ajax({
                    url: url,
                    method: "GET",
                    success: function(response) {
                        me.isLoading = false;
                        me.$overlay.remove();
                        $.publish("plugin/swEmotionLoader/onLoadEmotionLoaded", [ me ]);
                        if (!response.length) {
                            me.hideEmotion();
                            return;
                        }
                        me.initEmotion(response);
                        $.publish("plugin/swEmotionLoader/onLoadEmotionFinished", [ me ]);
                    }
                });
            } else {
                me.$overlay.remove();
                me.$el.html(me.$el.find("template").html());
                me.showEmotion();
                me.initEmotion();
            }
            $.publish("plugin/swEmotionLoader/onLoadEmotion", [ me ]);
        },
        initEmotion: function(html) {
            var me = this;
            if (html) {
                me.$el.html(html);
            }
            me.$emotion = me.$el.find('*[data-emotion="true"]');
            if (!me.$emotion.length) {
                return;
            }
            me.$emotion.attr("data-hasListing", me.opts.hasListing);
            me.$emotion.swEmotion();
            $.publish("plugin/swEmotionLoader/onInitEmotion", [ me, html ]);
        },
        showEmotion: function() {
            var me = this;
            me.$el.css("display", "block");
            $.publish("plugin/swEmotionLoader/onShowEmotion", [ me ]);
        },
        hideEmotion: function() {
            var me = this;
            me.$el.css("display", "none");
            $.publish("plugin/swEmotionLoader/onHideEmotion", [ me ]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
    $.plugin("swEmotion", {
        defaults: {
            gridMode: "resize",
            baseWidth: 1160,
            fullscreen: false,
            columns: 4,
            cellHeight: 185,
            cellSpacing: 10,
            elementSelector: ".emotion--element",
            gridSizerSelector: ".emotion--sizer",
            bannerElSelector: '[data-coverImage="true"]',
            videoElSelector: ".emotion--video",
            wrapperSelector: ".emotion--wrapper",
            hasListing: false
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.bufferedCall = false;
            me.$contentMain = $(".content-main");
            me.$container = me.$el.parents(".content--emotions");
            me.$wrapper = me.$el.parents(me.opts.wrapperSelector);
            me.$elements = me.$el.find(me.opts.elementSelector);
            me.$gridSizer = me.$el.find(me.opts.gridSizerSelector);
            me.$bannerElements = me.$elements.find(me.opts.bannerElSelector);
            me.$videoElements = me.$elements.find(me.opts.videoElSelector);
            me.$productSliderElements = me.$elements.find('*[data-product-slider="true"]');
            me.remSpacing = ~~me.opts.cellSpacing / 16;
            me.currentState = window.StateManager.getCurrentState();
            if (me.opts.fullscreen) {
                me.initFullscreen();
            }
            me.initState(me.currentState);
            me.initMode(me.opts.gridMode);
            me.initElements();
            me.registerEvents();
        },
        initMode: function(gridMode) {
            var me = this, mode = gridMode || me.opts.gridMode, modeMethod = "init" + mode.charAt(0).toUpperCase() + mode.slice(1) + "Grid";
            if (typeof me[modeMethod] === "function") {
                me[modeMethod]();
            } else {
                me.initFluidGrid();
            }
            if (mode !== "resize") {
                me.setContainerSpacing();
            }
        },
        initState: function(state) {
            var me = this;
            state = state || window.StateManager.getCurrentState();
            me.$sizer = me.$el.find(".emotion--sizer-" + state);
            me.clsPrefix = "-" + state;
            if (me.$sizer.length <= 0) {
                me.$sizer = me.$el.find(".emotion--sizer");
                me.clsPrefix = "";
            }
            me.rows = ~~me.$sizer.attr("data-rows");
        },
        initElements: function() {
            var me = this;
            if (me.opts.gridMode !== "rows") {
                $.each(me.$bannerElements, function(index, item) {
                    $(item).swEmotionBanner();
                });
            }
            $.each(me.$videoElements, function(index, item) {
                $(item).swEmotionVideo();
            });
            StateManager.updatePlugin('*[data-product-slider="true"]', "swProductSlider");
            StateManager.updatePlugin('*[data-image-slider="true"]', "swImageSlider");
            StateManager.updatePlugin('*[data-modalbox="true"]', "swModalbox");
            window.picturefill();
            $.publish("plugin/swEmotion/onInitElements", [ me ]);
        },
        initFullscreen: function() {
            var me = this;
            $body.addClass("is--no-sidebar");
            me.$contentMain.addClass("is--fullscreen");
            me.$wrapper.addClass("is--fullscreen");
            $.publish("plugin/swEmotion/onInitFullscreen", [ me ]);
        },
        removeFullscreen: function(showSidebar) {
            var me = this;
            if (showSidebar) $body.removeClass("is--no-sidebar");
            me.$contentMain.removeClass("is--fullscreen");
            me.$wrapper.removeClass("is--fullscreen");
            $.publish("plugin/swEmotion/onRemoveFullscreen", [ me, showSidebar ]);
        },
        initMasonryGrid: function() {
            var me = this;
            me.initFluidGrid();
            $.publish("plugin/swEmotion/onInitMasonryGrid", [ me ]);
        },
        initFluidGrid: function() {
            var me = this;
            me.setElementHeights();
            me.setElementPositions();
            $.publish("plugin/swEmotion/onInitFluidGrid", [ me ]);
        },
        initResizeGrid: function() {
            var me = this;
            me.baseWidth = ~~me.opts.baseWidth;
            me.$el.css("width", me.baseWidth + me.opts.cellSpacing);
            if (!me.opts.fullscreen) {
                me.$wrapper.css("max-width", me.baseWidth);
            }
            me.setElementHeights();
            me.setElementPositions();
            me.scale();
            $.publish("plugin/swEmotion/onInitScaleGrid", [ me ]);
        },
        initRowsGrid: function() {
            var me = this, r, c, rowCls, colCls, element, elementCols, lastCol = 0, colExp = new RegExp(" col" + me.clsPrefix + "-(\\d)", "i"), hiddenElements = $("<div>", {
                class: "hidden-elements"
            }), rows = [];
            me.$elements.filter(".is--hidden" + me.clsPrefix).appendTo(hiddenElements);
            for (r = 1; r <= me.rows; r++) {
                rows[r] = $("<div>", {
                    class: "emotion--row row--" + r
                });
                lastCol = 0;
                for (c = 1; c <= me.opts.columns; c++) {
                    rowCls = ".start-row" + me.clsPrefix + "-" + r;
                    colCls = ".start-col" + me.clsPrefix + "-" + c;
                    element = me.$elements.filter(rowCls + colCls).not(".is--hidden" + me.clsPrefix);
                    if (element.length > 0) {
                        elementCols = ~~(element.attr("class").match(colExp)[1] || 1);
                        element.appendTo(rows[r]);
                        if (c - lastCol > 1) {
                            element.css("margin-left", 100 / me.opts.columns * (c - lastCol - 1) + "%");
                        } else {
                            element.css("margin-left", "inherit");
                        }
                        lastCol = c + elementCols - 1;
                    }
                }
            }
            me.$el.find(":not([data-rows])").remove();
            hiddenElements.appendTo(me.$el);
            $.each(rows, function(rowIndex, $row) {
                me.$el.append($row);
            });
            $.publish("plugin/swEmotion/onInitRowsGrid", [ me, rows, hiddenElements ]);
        },
        registerEvents: function() {
            var me = this;
            window.StateManager.on("resize", $.proxy(me.onResize, me));
            if (me.opts.fullscreen) {
                $.subscribe(me.getEventName("plugin/swEmotionLoader/onShowEmotion"), $.proxy(me.onShow, me));
                $.subscribe(me.getEventName("plugin/swEmotionLoader/onHideEmotion"), $.proxy(me.onHide, me));
            }
            $.publish("plugin/swEmotion/onRegisterEvents", [ me ]);
        },
        onResize: function() {
            var me = this, state = window.StateManager.getCurrentState();
            me.initState(state);
            if (me.opts.gridMode === "resize") {
                me.scale();
            }
            if (me.opts.gridMode === "resize" || me.opts.gridMode === "fluid") {
                me.setElementHeights();
                me.setElementPositions();
            }
            if (me.opts.gridMode === "rows" && me.currentState !== state) {
                me.initRowsGrid();
            }
            me.$bannerElements.trigger("emotionResize");
            me.$videoElements.trigger("emotionResize");
            me.currentState = state;
            $.publish("plugin/swEmotion/onResize", [ me, me.currentState ]);
        },
        onShow: function(event, emotion) {
            var me = this;
            if (emotion.$emotion && emotion.$emotion.is(me.$el)) {
                me.initFullscreen();
            }
            $.publish("plugin/swEmotion/onShow", [ me, event, emotion ]);
        },
        onHide: function(event, emotion) {
            var me = this;
            if (emotion.$emotion && emotion.$emotion.is(me.$el)) {
                me.removeFullscreen();
            }
            $.publish("plugin/swEmotion/onHide", [ me, event, emotion ]);
        },
        setContainerSpacing: function() {
            var me = this;
            me.$el.css({
                "margin-left": -me.remSpacing + "rem"
            });
            $.publish("plugin/swEmotion/onSetContainerSpacing", [ me ]);
        },
        setElementPositions: function() {
            var me = this, i = 1;
            for (i; i <= me.rows; i++) {
                var top = 100 / me.rows * (i - 1);
                me.$elements.filter(".start-row" + me.clsPrefix + "-" + i).css("top", top + "%");
            }
            $.publish("plugin/swEmotion/onSetElementPositions", [ me ]);
        },
        setElementHeights: function() {
            var me = this, i = 1;
            for (i; i <= me.rows; i++) {
                var height = 100 / me.rows * i;
                me.$elements.filter(".row" + me.clsPrefix + "-" + i).css("height", height + "%");
            }
            $.publish("plugin/swEmotion/onSetElementHeights", [ me ]);
        },
        scale: function() {
            var me = this, width = me.opts.fullscreen ? $window.outerWidth() : me.$wrapper.outerWidth(), ratio = me.baseWidth / me.$el.outerHeight(), factor = width / me.baseWidth, containerStyle = me.$el.get(0).style, wrapperHeight = width / ratio;
            $.extend(containerStyle, {
                MsTransform: "scale(" + factor + ") translateX(" + -me.remSpacing + "rem)",
                OTransform: "scale(" + factor + ") translateX(" + -me.remSpacing + "rem)",
                MozTransform: "scale(" + factor + ") translateX(" + -me.remSpacing + "rem)",
                webkitTransform: "scale(" + factor + ") translateX(" + -me.remSpacing + "rem)",
                transform: "scale(" + factor + ") translateX(" + -me.remSpacing + "rem)"
            });
            me.$wrapper.css("height", wrapperHeight);
            $.publish("plugin/swEmotion/onScale", [ me, width, factor, wrapperHeight ]);
        },
        buffer: function(func, bufferTime) {
            var me = this;
            window.clearTimeout(me.bufferedCall);
            me.bufferedCall = window.setTimeout($.proxy(func, me), bufferTime);
            $.publish("plugin/swEmotion/onBuffer", [ me, me.bufferedCall, func, bufferTime ]);
        },
        destroy: function() {
            var me = this;
            if (me.opts.fullscreen) {
                $.unsubscribe(me.getEventName("plugin/swEmotionLoader/onShowEmotion"));
                $.unsubscribe(me.getEventName("plugin/swEmotionLoader/onHideEmotion"));
            }
            me._destroy();
        }
    });
    $.plugin("swEmotionBanner", {
        defaults: {
            width: null,
            height: null,
            containerSelector: ".banner--content"
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$container = me.$el.find(me.opts.containerSelector);
            me.$image = me.$container.find("img");
            me.imageRatio = me.opts.width / me.opts.height;
            me._hasPictureElement = me.$container.find("picture").length >= 1;
            me.resizeBanner();
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$el, "emotionResize", $.proxy(me.resizeBanner, me));
            $.publish("plugin/swEmotionBanner/onRegisterEvents", [ me ]);
        },
        resizeBanner: function() {
            var me = this, containerWidth = me.$el.width(), containerHeight = me.$el.height(), containerRatio = containerWidth / containerHeight, orientation = me.imageRatio > containerRatio, bannerWidth = orientation ? containerHeight * me.imageRatio : "100%", bannerHeight = orientation ? "100%" : containerWidth / me.imageRatio;
            me.$container.css({
                width: bannerWidth,
                height: bannerHeight
            });
            if (me._hasPictureElement) {
                me.$image.css({
                    width: bannerWidth
                });
            }
            $.publish("plugin/swEmotionBanner/onResizeBanner", [ me ]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
    $.plugin("swEmotionVideo", {
        defaults: {
            mode: "cover",
            scaleOriginX: 50,
            scaleOriginY: 50,
            scale: 1,
            playIconCls: "icon--play",
            pauseIconCls: "icon--pause",
            videoSelector: ".video--element",
            coverSelector: ".video--cover",
            playBtnSelector: ".video--play-btn",
            playIconSelector: ".video--play-icon"
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$video = me.$el.find(me.opts.videoSelector);
            me.$videoCover = me.$el.find(me.opts.coverSelector);
            me.$playBtn = me.$el.find(me.opts.playBtnSelector);
            me.$playBtnIcon = me.$playBtn.find(me.opts.playIconSelector);
            me.player = me.$video.get(0);
            if (me.$video.attr("muted") !== undefined) {
                me.player.volume = 0;
            }
            me.setScaleOrigin(me.opts.scaleOriginX, me.opts.scaleOriginY);
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$video, "loadedmetadata", $.proxy(me.onLoadMeta, me));
            me._on(me.$video, "canplay", $.proxy(me.onCanPlay, me));
            me._on(me.$video, "play", $.proxy(me.onVideoPlay, me));
            me._on(me.$video, "ended", $.proxy(me.onVideoEnded, me));
            me._on(me.$el, "emotionResize", $.proxy(me.resizeVideo, me));
            me._on(me.$videoCover, "click", $.proxy(me.onPlayClick, me));
            me._on(me.$playBtn, "click", $.proxy(me.onPlayClick, me));
            $.publish("plugin/swEmotionVideo/onRegisterEvents", [ me ]);
        },
        onLoadMeta: function(event) {
            var me = this;
            me.videoWidth = me.player.videoWidth;
            me.videoHeight = me.player.videoHeight;
            me.videoRatio = me.videoWidth / me.videoHeight;
            me.resizeVideo();
            $.publish("plugin/swEmotionVideo/onLoadMeta", [ me, event ]);
        },
        onCanPlay: function(event) {
            var me = this;
            if (!me.player.paused || me.player.autoplay) {
                me.$playBtnIcon.addClass(me.opts.pauseIconCls).removeClass(me.opts.playIconCls);
            }
            $.publish("plugin/swEmotionVideo/onCanPlay", [ me, event ]);
        },
        onVideoPlay: function(event) {
            var me = this;
            me.$videoCover.hide();
            $.publish("plugin/swEmotionVideo/onVideoPlay", [ me, event ]);
        },
        onVideoEnded: function(event) {
            var me = this;
            me.$playBtnIcon.removeClass(me.opts.pauseIconCls).addClass(me.opts.playIconCls);
            $.publish("plugin/swEmotionVideo/onVideoEnded", [ me, event ]);
        },
        onPlayClick: function(event) {
            var me = this;
            event.preventDefault();
            me.player.paused ? me.playVideo() : me.stopVideo();
            $.publish("plugin/swEmotionVideo/onPlayClick", [ me, event ]);
        },
        playVideo: function() {
            var me = this;
            me.$playBtnIcon.addClass(me.opts.pauseIconCls).removeClass(me.opts.playIconCls);
            me.player.play();
            $.publish("plugin/swEmotionVideo/onPlayVideo", [ me ]);
        },
        stopVideo: function() {
            var me = this;
            me.$playBtnIcon.removeClass(me.opts.pauseIconCls).addClass(me.opts.playIconCls);
            me.player.pause();
            $.publish("plugin/swEmotionVideo/onStopVideo", [ me ]);
        },
        resizeVideo: function() {
            var me = this;
            if (me.opts.mode === "scale") {
                return;
            }
            var containerWidth = me.$el.outerWidth(), containerHeight = me.$el.outerHeight(), containerRatio = containerWidth / containerHeight, orientation = me.videoRatio > containerRatio, positiveFactor = me.videoRatio / containerRatio, negativeFactor = containerRatio / me.videoRatio;
            if (me.opts.mode === "stretch") {
                if (orientation) {
                    me.transformVideo("scaleY(" + positiveFactor * me.opts.scale + ")");
                } else {
                    me.transformVideo("scaleX(" + negativeFactor * me.opts.scale + ")");
                }
            }
            if (me.opts.mode === "cover") {
                if (orientation) {
                    me.transformVideo("scaleX(" + positiveFactor * me.opts.scale + ") scaleY(" + positiveFactor * me.opts.scale + ")");
                } else {
                    me.transformVideo("scaleX(" + negativeFactor * me.opts.scale + ") scaleY(" + negativeFactor * me.opts.scale + ")");
                }
            }
            $.publish("plugin/swEmotionVideo/onResizeVideo", [ me ]);
        },
        setScaleOrigin: function(originX, originY) {
            var me = this, x = originX || me.opts.scaleOriginX, y = originY || me.opts.scaleOriginY, origin = x + "% " + y + "%";
            me.$video.css({
                "-ms-transform-origin": origin,
                "-o-transform-origin": origin,
                "-moz-transform-origin": origin,
                "-webkit-transform-origin": origin,
                "transform-origin": origin
            });
            $.publish("plugin/swEmotionVideo/onSetScaleOrigin", [ me, x, y ]);
        },
        transformVideo: function(transformation) {
            var me = this, videoElementStyle = me.player.style;
            $.extend(videoElementStyle, {
                MsTransform: transformation,
                OTransform: transformation,
                MozTransform: transformation,
                webkitTransform: transformation,
                transform: transformation
            });
            $.publish("plugin/swEmotionVideo/onTransformVideo", [ me, transformation ]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
})(jQuery, window, document);

(function($) {
    "use strict";
    $.plugin("swProductCompareAdd", {
        defaults: {
            compareMenuSelector: ".entry--compare",
            hiddenCls: "is--hidden"
        },
        init: function() {
            this.$el.on(this.getEventName("click"), '*[data-product-compare-add="true"]', $.proxy(this.onAddArticleCompare, this));
            $.publish("plugin/swProductCompareAdd/onRegisterEvents", [ this ]);
        },
        onAddArticleCompare: function(event) {
            var me = this, $target = $(event.target), $form = $target.closest("form"), addArticleUrl;
            event.preventDefault();
            if ($target.attr("href")) {
                addArticleUrl = $target.attr("href");
            } else {
                addArticleUrl = $form.attr("action");
            }
            if (!addArticleUrl) {
                return;
            }
            $.overlay.open({
                closeOnClick: false
            });
            $.loadingIndicator.open({
                openOverlay: false
            });
            $.publish("plugin/swProductCompareAdd/onAddArticleCompareBefore", [ me, event ]);
            $.ajax({
                url: addArticleUrl,
                dataType: "html",
                method: "POST",
                success: function(data) {
                    var compareMenu = $(me.opts.compareMenuSelector), modal;
                    if (compareMenu.hasClass(me.opts.hiddenCls)) {
                        compareMenu.removeClass(me.opts.hiddenCls);
                    }
                    if (data.indexOf('data-max-reached="true"') !== -1) {
                        $.loadingIndicator.close(function() {
                            modal = $.modal.open(data, {
                                sizing: "content",
                                overlay: false
                            });
                            modal.options.overlay = true;
                        });
                    } else {
                        compareMenu.html(data);
                        $('*[data-product-compare-menu="true"]').swProductCompareMenu();
                        $.loadingIndicator.close(function() {
                            $("html, body").animate({
                                scrollTop: $(".top-bar").offset().top
                            }, "slow");
                            $.overlay.close();
                        });
                    }
                    $.publish("plugin/swProductCompareAdd/onAddArticleCompareSuccess", [ me, event, data, compareMenu ]);
                }
            });
            $.publish("plugin/swProductCompareAdd/onAddArticleCompare", [ me, event ]);
        },
        destroy: function() {
            this.$el.off(this.getEventName("click"));
            this._destroy();
        }
    });
})(jQuery);

(function($) {
    "use strict";
    $.plugin("swProductCompareMenu", {
        defaults: {
            compareMenuSelector: ".entry--compare",
            startCompareSelector: ".btn--compare-start",
            deleteCompareSelector: ".btn--compare-delete",
            deleteCompareItemSelector: ".btn--item-delete",
            modalSelector: ".js--modal",
            modalContentInnerSelector: ".modal--compare",
            compareEntriesSelector: ".compare--list .compare--entry",
            compareEntrySelector: ".compare--entry",
            hiddenCls: "is--hidden"
        },
        init: function() {
            var me = this, $compareMenu = $(me.opts.compareMenuSelector);
            if (!$compareMenu.is(":empty")) {
                $compareMenu.removeClass(me.opts.hiddenCls);
            }
            me._on(me.opts.startCompareSelector, "touchstart click", $.proxy(me.onStartCompare, me));
            me._on(me.opts.deleteCompareSelector, "touchstart click", $.proxy(me.onDeleteCompare, me));
            me._on(me.opts.deleteCompareItemSelector, "touchstart click", $.proxy(me.onDeleteItem, me));
            $.publish("plugin/swProductCompareMenu/onRegisterEvents", [ me ]);
        },
        onStartCompare: function(event) {
            event.preventDefault();
            var me = this, startCompareBtn = me.$el.find(me.opts.startCompareSelector), modalUrl = startCompareBtn.attr("href"), modalTitle = startCompareBtn.attr("data-modal-title");
            $.loadingIndicator.open({
                closeOnClick: false
            });
            $.publish("plugin/swProductCompareMenu/onStartCompareBefore", [ me ]);
            $.ajax({
                url: modalUrl,
                dataType: "html",
                success: function(template) {
                    $.publish("plugin/swProductCompareMenu/onStartCompareSuccess", [ me, template ]);
                    $.loadingIndicator.close(function() {
                        $.modal.open(template, {
                            title: modalTitle,
                            sizing: "content"
                        });
                        var templateWidth = $(me.opts.modalSelector).find(me.opts.modalContentInnerSelector).outerWidth();
                        $(me.opts.modalSelector).css("width", templateWidth);
                        picturefill();
                        var maxRows = 0;
                        $(".entry--property").each(function() {
                            var row = ~~$(this).attr("data-property-row");
                            if (row > maxRows) {
                                maxRows = row;
                            }
                        });
                        var maximumHeight, rowSelector, i = 1;
                        for (;i <= maxRows; i++) {
                            rowSelector = '.entry--property[data-property-row="' + i + '"]';
                            maximumHeight = 0;
                            $(rowSelector).each(function() {
                                var rowHeight = $(this).height();
                                if (rowHeight > maximumHeight) {
                                    maximumHeight = rowHeight;
                                }
                            });
                            $(rowSelector).height(maximumHeight);
                        }
                        $.publish("plugin/swProductCompareMenu/onStartCompareFinished", [ me, template ]);
                    });
                }
            });
            $.publish("plugin/swProductCompareMenu/onStartCompare", [ me ]);
        },
        onDeleteCompare: function(event) {
            var me = this, $target = $(event.currentTarget), deleteCompareBtn = me.$el.find(me.opts.deleteCompareSelector), $form = deleteCompareBtn.closest("form"), $menu = $(me.opts.compareMenuSelector), deleteUrl;
            event.preventDefault();
            if ($target.attr("href")) {
                deleteUrl = $target.attr("href");
            } else {
                deleteUrl = $form.attr("action");
            }
            $.ajax({
                url: deleteUrl,
                dataType: "html",
                success: function() {
                    $menu.empty().addClass(me.opts.hiddenCls);
                    $.publish("plugin/swProductCompareMenu/onDeleteCompareSuccess", [ me ]);
                }
            });
            $.publish("plugin/swProductCompareMenu/onDeleteCompare", [ me ]);
        },
        onDeleteItem: function(event) {
            event.preventDefault();
            var me = this, $deleteBtn = $(event.currentTarget), $form = $deleteBtn.closest("form"), rowElement = $deleteBtn.closest(me.opts.compareEntrySelector), compareCount = $(me.opts.compareEntriesSelector).length, deleteUrl;
            if ($deleteBtn.attr("href")) {
                deleteUrl = $deleteBtn.attr("href");
            } else {
                deleteUrl = $form.attr("action");
            }
            if (compareCount > 1) {
                rowElement.slideUp("fast", function() {
                    rowElement.remove();
                });
                $(".compare--quantity").html("(" + (compareCount - 1) + ")");
                $.ajax({
                    url: deleteUrl,
                    dataType: "html",
                    success: function(response) {
                        $.publish("plugin/swProductCompareMenu/onDeleteItemSuccess", [ me, response ]);
                    }
                });
            } else {
                $.ajax({
                    url: deleteUrl,
                    dataType: "html",
                    success: function(response) {
                        $(me.opts.compareMenuSelector).empty().addClass(me.opts.hiddenCls);
                        $('*[data-product-compare-menu="true"]').swProductCompareMenu();
                        $.publish("plugin/swProductCompareMenu/onDeleteItemSuccess", [ me, response ]);
                    }
                });
            }
            $.publish("plugin/swProductCompareMenu/onDeleteItem", [ me, event, deleteUrl ]);
        },
        destroy: function() {
            this._destroy();
        }
    });
})(jQuery);

(function($, window) {
    "use strict";
    var parseQueryString = function(url) {
        var qparams = {}, parts = (url || "").split("?"), qparts, qpart, i = 0;
        if (parts.length <= 1) {
            return qparams;
        }
        qparts = parts[1].split("&");
        for (i in qparts) {
            var key, value;
            qpart = qparts[i].split("=");
            key = $.PluginBase.prototype.safeURIDecode(qpart[0]);
            value = $.PluginBase.prototype.safeURIDecode(qpart[1] || "");
            qparams[key] = $.isNumeric(value) ? parseFloat(value, 10) : value;
        }
        return qparams;
    };
    $.plugin("swInfiniteScrolling", {
        defaults: {
            enabled: true,
            eventName: "scroll",
            categoryId: 0,
            pagingSelector: ".listing--paging",
            productBoxSelector: ".product--box",
            defaultPerPageSelector: ".action--per-page",
            defaultChangeLayoutSelector: ".action--change-layout",
            threshold: 3,
            loadMoreCls: "js--load-more",
            loadPreviousCls: "js--load-previous",
            loadBtnCls: "btn is--primary is--icon-right",
            loadMoreSnippet: "Weitere Artikel laden",
            loadPreviousSnippet: "Vorherige Artikel laden",
            listingContainerSelector: ".listing--container",
            pagingBottomSelector: ".listing--bottom-paging",
            listingActionsWrapper: "infinite--actions",
            ajaxUrl: window.controller.ajax_listing || null,
            productBoxLayout: null,
            delegateConSelector: ".listing--wrapper",
            addArticleSelector: '*[data-add-article="true"]',
            pageShortParameter: "p"
        },
        init: function() {
            var me = this;
            me.$delegateContainer = $(me.opts.delegateConSelector);
            me.applyDataAttributes();
            if (!me.opts.enabled || !me.$el.is(":visible") || me.opts.ajaxUrl === null) {
                return;
            }
            $(me.opts.pagingSelector).remove();
            $(me.opts.pagingBottomSelector).remove();
            me.maxPages = me.$el.attr("data-pages");
            if (me.maxPages <= 1) {
                return;
            }
            me.isLoading = false;
            me.isFinished = false;
            me.fetchCount = 0;
            me.previousPageIndex = 0;
            me.$buttonWrapperTop = $("<div>", {
                class: me.opts.listingActionsWrapper
            });
            me.$buttonWrapperBottom = $("<div>", {
                class: me.opts.listingActionsWrapper
            });
            $(me.opts.listingContainerSelector).after(me.$buttonWrapperBottom);
            $(me.opts.listingContainerSelector).before(me.$buttonWrapperTop);
            me.baseUrl = window.location.href.split("?")[0];
            me.ajax = {
                url: me.opts.ajaxUrl,
                params: parseQueryString(window.location.href)
            };
            me.params = parseQueryString(window.location.href);
            me.historyParams = $.extend({}, me.params);
            if (me.opts.productBoxLayout) {
                me.params.productBoxLayout = me.opts.productBoxLayout || null;
            }
            me.upperParams = $.extend({}, me.params);
            me.urlBasicMode = false;
            if (!me.params[me.opts.pageShortParameter]) {
                me.basicModeSegments = window.location.pathname.split("/");
                me.basicModePageKey = $.inArray("sPage", me.basicModeSegments);
                me.basicModePageValue = me.basicModeSegments[me.basicModePageKey + 1];
                if (me.basicModePageValue) {
                    me.urlBasicMode = true;
                    me.params[me.opts.pageShortParameter] = me.basicModePageValue;
                    me.upperParams[me.opts.pageShortParameter] = me.basicModePageValue;
                }
            }
            if (!me.params[me.opts.pageShortParameter]) {
                me.params[me.opts.pageShortParameter] = 1;
            }
            me.startPage = me.params[me.opts.pageShortParameter];
            me.currentPushState = "";
            if (me.params[me.opts.pageShortParameter] && me.params[me.opts.pageShortParameter] > 1) {
                me.showLoadPrevious();
            }
            me._on(window, me.opts.eventName, $.proxy(me.onScrolling, me));
            me.$delegateContainer.on(me.getEventName("click"), "." + me.opts.loadMoreCls, $.proxy(me.onLoadMore, me));
            me.$delegateContainer.on(me.getEventName("click"), "." + me.opts.loadPreviousCls, $.proxy(me.onLoadPrevious, me));
            $.publish("plugin/swInfiniteScrolling/onRegisterEvents", [ me ]);
        },
        update: function() {
            var me = this;
            me.opts.enabled = me.$el.is(":visible");
            $.publish("plugin/swInfiniteScrolling/onUpdate", [ me ]);
        },
        onScrolling: function() {
            var me = this;
            if (me.isLoading || !me.opts.enabled) {
                return;
            }
            var $window = $(window), docTop = $window.scrollTop() + $window.height(), fetchPoint = me.$el.find(me.opts.productBoxSelector).last(), fetchPointOffset = fetchPoint.offset().top, bufferSize = fetchPoint.height(), triggerPoint = fetchPointOffset - bufferSize;
            if (docTop > triggerPoint && me.params[me.opts.pageShortParameter] < me.maxPages) {
                me.fetchNewPage();
            }
            var $products = $("*[data-page-index]"), visibleProducts = $.grep($products, function(item) {
                return $(item).offset().top <= docTop;
            });
            var $firstProduct = $(visibleProducts).last(), tmpPageIndex = $firstProduct.attr("data-page-index");
            var tmpParams = me.historyParams;
            delete tmpParams.c;
            if (!tmpParams[me.opts.pageShortParameter] || !tmpPageIndex) {
                tmpParams[me.opts.pageShortParameter] = me.startPage;
            }
            if (tmpPageIndex) {
                tmpParams[me.opts.pageShortParameter] = tmpPageIndex;
            }
            var tmpPushState = me.baseUrl + "?" + $.param(tmpParams);
            if (me.urlBasicMode) {
                if (!tmpPageIndex) {
                    tmpPageIndex = me.basicModePageValue;
                }
                var segments = me.basicModeSegments;
                segments[me.basicModePageKey + 1] = tmpPageIndex;
                tmpPushState = segments.join("/");
            }
            if (me.currentPushState != tmpPushState) {
                me.currentPushState = tmpPushState;
                if (!history || !history.pushState) {
                    return;
                }
                history.pushState("data", "", me.currentPushState);
            }
            $.publish("plugin/swInfiniteScrolling/onScrolling", [ me ]);
        },
        fetchNewPage: function() {
            var me = this;
            if (me.isFinished || me.params[me.opts.pageShortParameter] >= me.maxPages) {
                return;
            }
            if (me.isLoading) {
                return;
            }
            if (me.fetchCount >= me.opts.threshold) {
                var button = me.generateButton("next");
                me.$buttonWrapperBottom.html(button);
                me.isFinished = true;
                return;
            }
            me.isLoading = true;
            me.openLoadingIndicator();
            me.params[me.opts.pageShortParameter]++;
            me.fetchCount++;
            if (!me.params.c && me.opts.categoryId) {
                me.params.c = me.opts.categoryId;
            }
            $.publish("plugin/swInfiniteScrolling/onBeforeFetchNewPage", [ me ]);
            $.publish("action/fetchListing", [ me.params, false, true, $.proxy(me.appendListing, me) ]);
            $.publish("plugin/swInfiniteScrolling/onFetchNewPage", [ me ]);
        },
        generateButton: function(buttonType) {
            var me = this, type = buttonType || "next", cls = type == "previous" ? me.opts.loadPreviousCls : me.opts.loadMoreCls, snippet = type == "previous" ? me.opts.loadPreviousSnippet : me.opts.loadMoreSnippet, $button = $("<a>", {
                class: me.opts.loadBtnCls + " " + cls,
                html: snippet + ' <i class="icon--cw is--large"></i>'
            });
            $.publish("plugin/swInfiniteScrolling/onLoadMore", [ me, $button, buttonType ]);
            return $button;
        },
        onLoadMore: function(event) {
            event.preventDefault();
            var me = this;
            $("." + me.opts.loadMoreCls).remove();
            me.isFinished = false;
            if (me.maxPages >= me.opts.threshold) {
                me.opts.threshold++;
            }
            me.fetchNewPage();
            $.publish("plugin/swInfiniteScrolling/onLoadMore", [ me, event ]);
        },
        showLoadPrevious: function() {
            var me = this, button = me.generateButton("previous");
            me.$buttonWrapperTop.html(button);
            $.publish("plugin/swInfiniteScrolling/onShowLoadPrevious", [ me, button ]);
        },
        onLoadPrevious: function(event) {
            event.preventDefault();
            var me = this, callback;
            $("." + me.opts.loadPreviousCls).remove();
            me.openLoadingIndicator("top");
            var tmpParams = me.upperParams;
            if (!tmpParams.c && me.opts.categoryId) {
                tmpParams.c = me.opts.categoryId;
            }
            tmpParams[me.opts.pageShortParameter] = tmpParams[me.opts.pageShortParameter] - 1;
            $.publish("plugin/swInfiniteScrolling/onBeforeFetchPreviousPage", [ me ]);
            me.previousLoadPage = tmpParams[me.opts.pageShortParameter];
            callback = function(response) {
                me.prependListing(response);
                if (tmpParams[me.opts.pageShortParameter] > 1) {
                    me.showLoadPrevious();
                }
            };
            $.publish("action/fetchListing", [ tmpParams, false, true, callback ]);
            $.publish("plugin/swInfiniteScrolling/onLoadPrevious", [ me, event ]);
        },
        appendListing: function(response) {
            var me = this, template;
            template = response.listing.trim();
            $.publish("plugin/swInfiniteScrolling/onFetchNewPageLoaded", [ me, template ]);
            if (!template) {
                me.isFinished = true;
                me.closeLoadingIndicator();
                return;
            }
            me.$el.append(template);
            picturefill();
            me.closeLoadingIndicator();
            StateManager.addPlugin(me.opts.addArticleSelector, "swAddArticle");
            me.isLoading = false;
            if (me.params[me.opts.pageShortParameter] >= me.maxPages) {
                me.isFinished = true;
            }
            $.publish("plugin/swInfiniteScrolling/onFetchNewPageFinished", [ me, template ]);
        },
        prependListing: function(response) {
            var me = this;
            me.$el.prepend(response.listing.trim());
            picturefill();
            me.closeLoadingIndicator();
            StateManager.addPlugin(me.opts.addArticleSelector, "swAddArticle");
            me.isLoading = false;
            $.publish("plugin/swInfiniteScrolling/onLoadPreviousFinished", [ me, response.listing ]);
        },
        openLoadingIndicator: function(type) {
            var me = this, $indicator = $(".js--loading-indicator.indicator--relative");
            if ($indicator.length) {
                return;
            }
            $indicator = $("<div>", {
                class: "js--loading-indicator indicator--relative",
                html: $("<i>", {
                    class: "icon--default"
                })
            });
            if (!type) {
                me.$el.parent().after($indicator);
            } else {
                me.$el.parent().before($indicator);
            }
            $.publish("plugin/swInfiniteScrolling/onOpenLoadingIndicator", [ me, $indicator ]);
        },
        closeLoadingIndicator: function() {
            var me = this, $indicator = $(".js--loading-indicator.indicator--relative");
            if (!$indicator.length) {
                return;
            }
            $indicator.remove();
            $.publish("plugin/swInfiniteScrolling/onCloseLoadingIndicator", [ me ]);
        },
        destroy: function() {
            var me = this;
            if (me.$buttonWrapperTop) {
                me.$buttonWrapperTop.remove();
            }
            if (me.$buttonWrapperBottom) {
                me.$buttonWrapperBottom.remove();
            }
            me.$delegateContainer.off(me.getEventName("click"), "." + me.opts.loadMoreCls);
            me.$delegateContainer.off(me.getEventName("click"), "." + me.opts.loadPreviousCls);
            me._destroy();
        }
    });
})(jQuery, window);

(function($) {
    "use strict";
    $.plugin("swOffcanvasButton", {
        defaults: {
            pluginClass: "js--off-canvas-button",
            contentSelector: ".offcanvas--content",
            closeButtonSelector: ".close--off-canvas",
            fullscreen: true
        },
        init: function() {
            var me = this, $el = me.$el, opts = me.opts, selector = $el.find(opts.contentSelector);
            if (selector.length === 0) {
                selector = $(opts.contentSelector);
            }
            me.applyDataAttributes();
            $el.addClass(opts.pluginClass);
            $el.swOffcanvasMenu({
                direction: "fromRight",
                offCanvasSelector: selector,
                fullscreen: opts.fullscreen,
                closeButtonSelector: opts.closeButtonSelector
            });
        },
        destroy: function() {
            var me = this, $el = me.$el, plugin = $el.data("plugin_swOffcanvasMenu");
            if (plugin) {
                plugin.destroy();
            }
            $el.removeClass(me.opts.pluginClass);
            me._destroy();
        }
    });
})(jQuery);

(function($, Modernizr) {
    "use strict";
    $.plugin("swSubCategoryNav", {
        defaults: {
            enabled: true,
            eventName: "click",
            sidebarCategorySelector: ".sidebar--navigation",
            backwardsSelector: ".link--go-back",
            forwardsSelector: ".link--go-forward",
            mainMenuSelector: ".link--go-main",
            mainCategoryId: null,
            categoryId: null,
            fetchUrl: "",
            overlaySelector: ".offcanvas--overlay",
            sidebarMainSelector: ".sidebar-main",
            mobileNavigationSelector: ".navigation--smartphone",
            loadingClass: "sidebar--ajax-loader",
            backSlideClass: "background",
            iconRightSelector: ".is--icon-right",
            disableScrollingClass: "is--inactive",
            animationSpeedIn: 450,
            animationSpeedOut: 300,
            easingIn: "cubic-bezier(.3,0,.15,1)",
            easingOut: "cubic-bezier(.02, .01, .47, 1)",
            easingFallback: "swing"
        },
        init: function() {
            var me = this, transitionSupport = Modernizr.csstransitions, opts;
            me.applyDataAttributes();
            opts = me.opts;
            if (!opts.enabled || !opts.mainCategoryId) {
                return;
            }
            me.$sidebar = me.$el.closest(opts.sidebarMainSelector);
            me.$sidebarWrapper = me.$el;
            me.$navigation = me.$el.closest(opts.mobileNavigationSelector);
            me.$navigation.show();
            me.$loadingIcon = $("<div>", {
                class: opts.loadingClass
            });
            me.slideFunction = transitionSupport ? "transition" : "animate";
            me.easingEffectIn = transitionSupport ? opts.easingIn : opts.easingFallback;
            me.easingEffectOut = transitionSupport ? opts.easingOut : opts.easingFallback;
            me.inProgress = false;
            $(opts.sidebarCategorySelector + " ul").not(".navigation--level-high").css("display", "none");
            me.addEventListener();
            if (!opts.categoryId || !opts.fetchUrl || opts.mainCategoryId == opts.categoryId && opts.fetchUrl.indexOf("getCategory") !== -1) {
                return;
            }
            $.get(opts.fetchUrl, function(template) {
                me.$sidebarWrapper.css("display", "none");
                me.$sidebar.addClass(opts.disableScrollingClass).append(template);
                $(opts.overlaySelector).addClass(opts.backSlideClass);
            });
        },
        addEventListener: function() {
            var me = this, opts = me.opts, $sidebar = me.$sidebar, eventName = opts.eventName;
            $sidebar.on(me.getEventName(eventName), opts.backwardsSelector, $.proxy(me.onClickBackButton, me));
            $sidebar.on(me.getEventName(eventName), opts.forwardsSelector, $.proxy(me.onClickForwardButton, me));
            $sidebar.on(me.getEventName(eventName), opts.mainMenuSelector, $.proxy(me.onClickMainMenuButton, me));
            $.publish("plugin/swSubCategoryNav/onRegisterEvents", [ me ]);
        },
        onClickBackButton: function(event) {
            event.preventDefault();
            var me = this, $target = $(event.target), url = $target.attr("href"), parentId = ~~$target.attr("data-parentId");
            if (me.inProgress) {
                return;
            }
            me.inProgress = true;
            $.publish("plugin/swSubCategoryNav/onClickBackButton", [ me, event ]);
            if (!url || parentId === me.opts.mainCategoryId && url.indexOf("getCategory") !== -1) {
                me.slideToMainMenu();
                return;
            }
            me.loadTemplate(url, me.slideOut, $target);
        },
        onClickForwardButton: function(event) {
            event.preventDefault();
            var me = this, $target = $(event.currentTarget), url = $target.attr("data-fetchUrl");
            if (me.inProgress) {
                return;
            }
            me.inProgress = true;
            $.publish("plugin/swSubCategoryNav/onClickForwardButton", [ me, event ]);
            me.$sidebar.addClass(me.opts.disableScrollingClass);
            me.loadTemplate(url, me.slideIn, $target);
        },
        onClickMainMenuButton: function(event) {
            event.preventDefault();
            var me = this;
            if (me.inProgress) {
                return;
            }
            me.inProgress = true;
            $.publish("plugin/swSubCategoryNav/onClickMainMenuButton", [ me, event ]);
            me.slideToMainMenu();
        },
        loadTemplate: function(url, callback, $loadingTarget) {
            var me = this;
            $.publish("plugin/swSubCategoryNav/onLoadTemplateBefore", [ me ]);
            if (!$loadingTarget) {
                $.get(url, function(template) {
                    $.publish("plugin/swSubCategoryNav/onLoadTemplate", [ me ]);
                    callback.call(me, template);
                });
                return;
            }
            $loadingTarget.find(me.opts.iconRightSelector).fadeOut("fast");
            $loadingTarget.append(me.$loadingIcon);
            me.$loadingIcon.fadeIn();
            $.get(url, function(template) {
                me.$loadingIcon.hide();
                $.publish("plugin/swSubCategoryNav/onLoadTemplate", [ me ]);
                callback.call(me, template);
            });
        },
        slideOut: function(template) {
            var me = this, opts = me.opts, $overlays, $slide;
            $.publish("plugin/swSubCategoryNav/onSlideOutBefore", [ me ]);
            me.$sidebar.append(template);
            $overlays = $(opts.overlaySelector);
            $overlays.toggleClass(opts.backSlideClass);
            $slide = $overlays.not("." + opts.backSlideClass);
            $slide[me.slideFunction]({
                left: 280
            }, opts.animationSpeedOut, me.easingEffectOut, function() {
                $slide.remove();
                me.inProgress = false;
                $.publish("plugin/swSubCategoryNav/onSlideOut", [ me ]);
            });
        },
        slideIn: function(template) {
            var me = this, opts = me.opts, $overlays, $slide, $el;
            $.publish("plugin/swSubCategoryNav/onSlideInBefore", [ me ]);
            me.$sidebar.scrollTop(0);
            me.$sidebar.append(template);
            $overlays = $(opts.overlaySelector);
            $slide = $overlays.not("." + opts.backSlideClass).css({
                left: 280,
                display: "block"
            });
            $slide[me.slideFunction]({
                left: 0
            }, opts.animationSpeedIn, me.easingEffectIn, function() {
                $overlays.each(function(i, el) {
                    $el = $(el);
                    if ($el.hasClass(opts.backSlideClass)) {
                        $el.remove();
                    }
                });
                $slide.addClass(opts.backSlideClass);
                me.$sidebarWrapper.css("display", "none");
                me.$navigation.hide().show(0);
                $slide.addClass(opts.backSlideClass);
                me.inProgress = false;
                $.publish("plugin/swSubCategoryNav/onSlideIn", [ me ]);
            });
        },
        slideToMainMenu: function() {
            var me = this, opts = me.opts, $overlay = $(opts.overlaySelector);
            $.publish("plugin/swSubCategoryNav/onSlideToMainMenuBefore", [ me ]);
            me.$sidebarWrapper.css("display", "block");
            me.$sidebarWrapper.find(me.opts.iconRightSelector).fadeIn("slow");
            $overlay[me.slideFunction]({
                left: 280
            }, opts.animationSpeedOut, me.easingEffectOut, function() {
                $overlay.remove();
                me.$sidebar.removeClass(opts.disableScrollingClass);
                me.inProgress = false;
                $.publish("plugin/swSubCategoryNav/onSlideToMainMenu", [ me ]);
            });
        },
        destroy: function() {
            var me = this, opts = me.opts, $sidebar = me.$sidebar, $sidebarWrapper = me.$sidebarWrapper;
            if ($sidebar) {
                $sidebar.off(me.getEventName(opts.eventName), "**");
            }
            me.$navigation.hide();
            $(opts.sidebarCategorySelector + " ul").not(".navigation--level-high").css("display", "block");
            if ($sidebarWrapper) {
                me.$sidebarWrapper.css("display", "block");
            }
            $(opts.overlaySelector).remove();
            me._destroy();
        }
    });
})(jQuery, Modernizr);

(function($, window, undefined) {
    "use strict";
    $.plugin("swAjaxWishlist", {
        defaults: {
            counterSelector: ".notes--quantity",
            wishlistSelector: ".entry--notepad",
            iconCls: "icon--check",
            savedCls: "js--is-saved",
            text: "Gemerkt",
            delay: 1500
        },
        init: function() {
            this.applyDataAttributes();
            this.$wishlistButton = $(this.opts.wishlistSelector);
            this.$counter = $(this.opts.counterSelector);
            this.registerEvents();
        },
        registerEvents: function() {
            this.$el.on(this.getEventName("click"), ".action--note, .link--notepad", $.proxy(this.triggerRequest, this));
            $.publish("plugin/swAjaxWishlist/onRegisterEvents", [ this ]);
        },
        triggerRequest: function(event) {
            var $target = $(event.currentTarget), url = $target.attr("data-ajaxUrl");
            if (typeof url === "undefined" || $target.hasClass(this.opts.savedCls)) {
                return;
            }
            event.preventDefault();
            $.ajax({
                url: url,
                dataType: "json",
                method: "POST",
                success: $.proxy(this.responseHandler, this, $target)
            });
            $.publish("plugin/swAjaxWishlist/onTriggerRequest", [ this, event, url ]);
        },
        responseHandler: function($target, response) {
            $.publish("plugin/swAjaxWishlist/onTriggerRequestLoaded", [ this, $target, response ]);
            if (!response.success) {
                return;
            }
            this.updateCounter(response.notesCount);
            this.animateElement($target);
            $.publish("plugin/swAjaxWishlist/onTriggerRequestFinished", [ this, $target, response ]);
        },
        animateElement: function($target) {
            var me = this, $icon = $target.find("i"), originalIcon = $icon[0].className, $text = $target.find(".action--text"), originalText = $text.html();
            $target.addClass(me.opts.savedCls);
            $text.html($target.attr("data-text") || me.opts.text);
            $icon.removeClass(originalIcon).addClass(me.opts.iconCls);
            window.setTimeout(function() {
                $target.removeClass(me.opts.savedCls);
                $text.html(originalText);
                $icon.removeClass(me.opts.iconCls).addClass(originalIcon);
                $.publish("plugin/swAjaxWishlist/onAnimateElementFinished", [ me, $target ]);
            }, me.opts.delay);
            $.publish("plugin/swAjaxWishlist/onAnimateElement", [ me, $target ]);
        },
        updateCounter: function(count) {
            var $btn = this.$wishlistButton, animate = "transition";
            if (this.$counter.length) {
                this.$counter.html(count);
                return this.$counter;
            }
            this.$counter = $("<span>", {
                class: "badge notes--quantity",
                html: count,
                css: {
                    opacity: 0
                }
            }).appendTo($btn.find("a"));
            if (!$.support.transition) {
                animate = "animate";
            }
            this.$counter[animate]({
                opacity: 1
            }, 500);
            $.publish("plugin/swAjaxWishlist/onUpdateCounter", [ this, this.$counter, count ]);
            return this.$counter;
        },
        destroy: function() {
            this.$el.off(this.getEventName("click"));
        }
    });
})(jQuery, window);

(function($, window, undefined) {
    "use strict";
    $.plugin("swPreloaderButton", {
        defaults: {
            loaderCls: "js--loading",
            checkFormIsValid: true
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.opts.checkFormIsValid = me.opts.checkFormIsValid && me.checkForValiditySupport();
            me._on(me.$el, "click", $.proxy(me.onShowPreloader, me));
            $.publish("plugin/swPreloaderButton/onRegisterEvents", [ me ]);
        },
        checkForValiditySupport: function() {
            var me = this, element = document.createElement("input"), valid = typeof element.validity === "object";
            $.publish("plugin/swPreloaderButton/onCheckForValiditySupport", [ me, valid ]);
            return valid;
        },
        onShowPreloader: function() {
            var me = this;
            if (me.opts.checkFormIsValid) {
                var $form = $("#" + me.$el.attr("form"));
                if (!$form.length) {
                    $form = me.$el.parents("form");
                }
                if (!$form.length || !$form[0].checkValidity()) {
                    return;
                }
            }
            window.setTimeout(function() {
                me.$el.html(me.$el.text() + '<div class="' + me.opts.loaderCls + '"></div>').attr("disabled", "disabled");
                $.publish("plugin/swPreloaderButton/onShowPreloader", [ me ]);
            }, 25);
        },
        reset: function() {
            var me = this;
            me.$el.prop("disabled", false).find("." + me.opts.loaderCls).remove();
        }
    });
})(jQuery, window);

(function($, window) {
    "use strict";
    $.plugin("swImageGallery", {
        defaults: {
            imageContainerSelector: ".image-slider--container",
            imageSlideSelector: ".image-slider--slide",
            thumbnailContainerSelector: ".image-slider--thumbnails",
            imageGalleryClass: "image--gallery",
            previousKeyCode: 37,
            nextKeyCode: 39,
            maxZoom: "auto",
            disabledClass: "is--disabled",
            btnClass: "btn is--small",
            zoomInClass: "icon--plus3 button--zoom-in",
            zoomOutClass: "icon--minus3 button--zoom-out",
            zoomResetClass: "icon--resize-shrink button--zoom-reset"
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me._$imageContainer = me.$el.find(me.opts.imageContainerSelector);
            if (!me._$imageContainer.length) {
                return;
            }
            me._$thumbContainer = me.$el.find(me.opts.thumbnailContainerSelector);
            me._$imageContainerClone = me._$imageContainer.clone();
            me._$thumbContainerClone = me._$thumbContainer.clone();
            me.$zoomOutBtn = me.createZoomOutButton().appendTo(me._$imageContainerClone);
            me.$zoomResetBtn = me.createZoomResetButton().appendTo(me._$imageContainerClone);
            me.$zoomInBtn = me.createZoomInButton().appendTo(me._$imageContainerClone);
            me.$template = null;
            me.registerEvents();
        },
        createZoomInButton: function() {
            var me = this, opts = this.opts, $zoomInButton = $("<div>", {
                class: opts.btnClass + " " + opts.zoomInClass
            });
            $.publish("plugin/swImageGallery/onCreateZoomInButton", [ me, $zoomInButton ]);
            return $zoomInButton;
        },
        createZoomOutButton: function() {
            var me = this, opts = me.opts, $zoomOutButton = $("<div>", {
                class: opts.btnClass + " " + opts.zoomOutClass
            });
            $.publish("plugin/swImageGallery/onCreateZoomOutButton", [ me, $zoomOutButton ]);
            return $zoomOutButton;
        },
        createZoomResetButton: function() {
            var me = this, opts = me.opts, $zoomResetButton = $("<div>", {
                class: opts.btnClass + " " + opts.zoomResetClass
            });
            $.publish("plugin/swImageGallery/onCreateZoomResetButton", [ me, $zoomResetButton ]);
            return $zoomResetButton;
        },
        registerEvents: function() {
            var me = this;
            me._on(me._$imageContainer.find(me.opts.imageSlideSelector), "click", $.proxy(me.onClick, me));
            $.subscribe(me.getEventName("plugin/swImageSlider/onSlide"), $.proxy(me.onImageUpdate, me));
            $.subscribe(me.getEventName("plugin/swImageSlider/onUpdateTransform"), $.proxy(me.onImageUpdate, me));
            me._on(window, "keydown", $.proxy(me.onKeyDown, me));
            $.publish("plugin/swImageGallery/onRegisterEvents", [ me ]);
        },
        getImageSlider: function() {
            var me = this, $template = me.$template, slider = $template && $template.data("plugin_swImageSlider") || null;
            $.publish("plugin/swImageGallery/onGetImageSlider", [ me, slider ]);
            return slider;
        },
        onImageUpdate: function(event, context) {
            var me = this, plugin = me.getImageSlider();
            if (plugin !== context) {
                return;
            }
            me.toggleButtons(plugin);
            $.publish("plugin/swImageGallery/onImageUpdate", [ me, event, plugin ]);
        },
        onResetZoom: function(event) {
            var me = this, plugin = me.getImageSlider();
            event.preventDefault();
            if (!plugin || me.$zoomResetBtn.hasClass(me.opts.disabledClass)) {
                return;
            }
            me.disableButtons();
            plugin.resetTransformation(true, function() {
                me.toggleButtons(plugin);
                $.publish("plugin/swImageGallery/onResetZoomFinished", [ me, event, plugin ]);
            });
            $.publish("plugin/swImageGallery/onResetZoom", [ me, event, plugin ]);
        },
        onZoomIn: function(event) {
            var me = this, plugin = me.getImageSlider();
            event.preventDefault();
            if (!plugin || me.$zoomInBtn.hasClass(me.opts.disabledClass)) {
                return;
            }
            me.disableButtons();
            plugin.scale(1, true, function() {
                me.toggleButtons(plugin);
                $.publish("plugin/swImageGallery/onZoomInFinished", [ me, event, plugin ]);
            });
            $.publish("plugin/swImageGallery/onZoomIn", [ me, event, plugin ]);
        },
        onZoomOut: function(event) {
            var me = this, plugin = me.getImageSlider();
            event.preventDefault();
            if (!plugin || me.$zoomOutBtn.hasClass(me.opts.disabledClass)) {
                return;
            }
            me.disableButtons();
            plugin.scale(-1, true, function() {
                me.toggleButtons(plugin);
                $.publish("plugin/swImageGallery/onZoomOutFinished", [ me, event, plugin ]);
            });
            $.publish("plugin/swImageGallery/onZoomOut", [ me, event, plugin ]);
        },
        onKeyDown: function(event) {
            var me = this, opts = me.opts, plugin = me.getImageSlider(), keyCode = event.which;
            if (!plugin) {
                return;
            }
            if (keyCode === opts.previousKeyCode) {
                plugin.slidePrev();
            }
            if (keyCode === opts.nextKeyCode) {
                plugin.slideNext();
            }
            $.publish("plugin/swImageGallery/onKeyDown", [ me, event, keyCode ]);
        },
        createTemplate: function() {
            var me = this, $template, $el, $mediaEl, img;
            me._$imageContainerClone.find("span[data-img-original]").each(function(i, el) {
                $el = $(el);
                $mediaEl = $el.find(".image--media");
                img = $("<img>", {
                    class: "image--element",
                    src: $el.attr("data-img-original"),
                    "data-extension": $mediaEl.hasClass("image--svg") ? "svg" : ""
                });
                $el.replaceWith(img);
            });
            me._$thumbContainerClone.find("a.thumbnails--arrow").remove();
            me._$imageContainerClone.find(".arrow").remove();
            $template = $("<div>", {
                class: me.opts.imageGalleryClass,
                html: [ me._$imageContainerClone, me._$thumbContainerClone ]
            });
            $.publish("plugin/swImageGallery/onCreateTemplate", [ me, $template ]);
            return $template;
        },
        onClick: function(event) {
            var me = this, imageSlider = me.$el.data("plugin_swImageSlider");
            $.modal.open(me.$template || (me.$template = me.createTemplate()), {
                width: "100%",
                height: "100%",
                animationSpeed: 350,
                additionalClass: "image-gallery--modal no--border-radius",
                onClose: me.onCloseModal.bind(me)
            });
            me._on(me.$zoomInBtn, "click touchstart", $.proxy(me.onZoomIn, me));
            me._on(me.$zoomOutBtn, "click touchstart", $.proxy(me.onZoomOut, me));
            me._on(me.$zoomResetBtn, "click touchstart", $.proxy(me.onResetZoom, me));
            picturefill();
            me.$template.swImageSlider({
                dotNavigation: false,
                swipeToSlide: true,
                pinchToZoom: true,
                doubleTap: true,
                maxZoom: me.opts.maxZoom,
                startIndex: imageSlider ? imageSlider.getIndex() : 0,
                preventScrolling: true
            });
            me.toggleButtons(me.getImageSlider());
            $.publish("plugin/swImageGallery/onClick", [ me, event ]);
        },
        onCloseModal: function() {
            var me = this, plugin = me.getImageSlider();
            if (!plugin) {
                return;
            }
            plugin.destroy();
            $.publish("plugin/swImageGallery/onCloseModal", [ me ]);
        },
        disableButtons: function() {
            var me = this, disabledClass = me.opts.disabledClass;
            me.$zoomResetBtn.addClass(disabledClass);
            me.$zoomOutBtn.addClass(disabledClass);
            me.$zoomInBtn.addClass(disabledClass);
            $.publish("plugin/swImageGallery/onDisableButtons", [ me ]);
        },
        toggleButtons: function(plugin) {
            var me = this, disabledClass = me.opts.disabledClass, scale, minScale, maxScale;
            if (!plugin) {
                return;
            }
            scale = plugin.getScale();
            minScale = plugin.getMinScale();
            maxScale = plugin.getMaxScale();
            if (isNaN(maxScale)) {
                maxScale = 1;
            }
            me.$zoomResetBtn.toggleClass(disabledClass, scale === minScale);
            me.$zoomOutBtn.toggleClass(disabledClass, scale === minScale);
            me.$zoomInBtn.toggleClass(disabledClass, scale === maxScale);
            $.publish("plugin/swImageGallery/onToggleButtons", [ me ]);
        },
        destroy: function() {
            var me = this, plugin = me.getImageSlider();
            if (plugin) {
                plugin.destroy();
            }
            $.unsubscribe(me.getEventName("plugin/swImageSlider/onSlide"));
            $.unsubscribe(me.getEventName("plugin/swImageSlider/onUpdateTransform"));
            me.$template.remove();
            me.$template = null;
            me.$zoomOutBtn.remove();
            me.$zoomResetBtn.remove();
            me.$zoomInBtn.remove();
            me._$imageContainer = null;
            me._$thumbContainer = null;
            me._$imageContainerClone = null;
            me._$thumbContainerClone = null;
        }
    });
})(jQuery, window);

(function($) {
    $.plugin("swOffcanvasHtmlPanel", {
        defaults: {
            offcanvasContent: ".teaser--text-long",
            shortDescription: ".teaser--text-short",
            offcanvasTrigger: ".text--offcanvas-link",
            offCanvasSelector: ".teaser--text-offcanvas",
            offCanvasCloseSelector: ".close--off-canvas",
            offCanvasDirection: "fromRight",
            hiddenCls: "is--hidden"
        },
        init: function() {
            var me = this, opts = me.opts, $el = me.$el;
            me.applyDataAttributes();
            me._$shortText = $el.find(opts.shortDescription).removeClass(opts.hiddenCls);
            me._$longText = $el.find(opts.offcanvasContent).addClass(opts.hiddenCls);
            me._$offCanvas = $el.find(opts.offCanvasSelector).removeClass(opts.hiddenCls);
            me._$offcanvasTrigger = $el.find(opts.offcanvasTrigger);
            me._$offcanvasTrigger.swOffcanvasMenu({
                offCanvasSelector: opts.offCanvasSelector,
                closeButtonSelector: opts.offCanvasCloseSelector,
                direction: opts.offCanvasDirection
            });
        },
        destroy: function() {
            var me = this, hiddenClass = me.opts.hiddenCls, plugin = me._$offcanvasTrigger.data("plugin_swOffcanvasMenu");
            me._$longText.removeClass(hiddenClass);
            me._$shortText.addClass(hiddenClass);
            me._$offCanvas.addClass(hiddenClass);
            if (plugin) {
                plugin.destroy();
            }
            me._destroy();
        }
    });
})(jQuery);

(function($, window) {
    "use strict";
    $.plugin("swJumpToTab", {
        defaults: {
            contentCls: "has--content",
            tabDetail: ".tab-menu--product",
            tabCrossSelling: ".tab-menu--cross-selling",
            btnJumpSelectors: [ ".product--rating-link", ".link--publish-comment" ]
        },
        init: function() {
            var me = this, param = decodeURI((RegExp("(?:action|jumpTab)=(.+?)(&|$)").exec(location.search) || [ null, null ])[1]);
            me.applyDataAttributes();
            me.$htmlBody = $("body, html");
            me.$tabMenuCrossSelling = me.$el.find(me.opts.tabCrossSelling);
            me.lastClick = 0;
            me.resizeCrossSelling();
            me.registerEvents();
            if (param === "rating") {
                var $tab = $('[data-tabName="' + param + '"]'), index = $tab.index() || 1;
                me.jumpToTab(index, $tab);
            }
        },
        resizeCrossSelling: function() {
            var me = this, $container;
            if (StateManager.isCurrentState([ "xs", "s" ]) && me.$tabMenuCrossSelling.length) {
                me.$tabMenuCrossSelling.find(".tab--container").each(function(i, el) {
                    $container = $(el);
                    if ($container.find(".tab--content").html().trim().length) {
                        $container.addClass("has--content");
                    }
                });
            }
        },
        registerEvents: function() {
            var me = this;
            me.$el.on(me.getEventName("click touchstart"), me.opts.btnJumpSelectors.join(", "), $.proxy(me.onJumpToTab, me));
            $.publish("plugin/swJumpToTab/onRegisterEvents", [ me ]);
        },
        onJumpToTab: function(event) {
            var me = this, $tab = $('[data-tabName="rating"]'), index = $tab.index() || 1;
            if (event.timeStamp < me.lastClick + 10) {
                return;
            }
            me.lastClick = event.timeStamp;
            event.preventDefault();
            me.jumpToTab(index, $tab);
            $.publish("plugin/swJumpToTab/onClick", [ me, event ]);
        },
        jumpToTab: function(tabIndex, jumpTo) {
            var me = this;
            me.tabMenuProduct = me.$el.find(me.opts.tabDetail).data("plugin_swTabMenu");
            if (!me.$el.hasClass("is--ctl-blog") && me.tabMenuProduct) {
                me.tabMenuProduct.changeTab(tabIndex);
            }
            $.publish("plugin/swJumpToTab/onChangeTab", [ me, tabIndex, jumpTo ]);
            if (!jumpTo || !jumpTo.length) {
                return;
            }
            me.$htmlBody.animate({
                scrollTop: $(jumpTo).offset().top
            }, 0);
            $.publish("plugin/swJumpToTab/onJumpToTab", [ me, tabIndex, jumpTo ]);
        },
        destroy: function() {
            var me = this;
            me.$el.off(this.getEventName("click"), me.opts.btnJumpSelectors.join(", "));
            me._destroy();
        }
    });
})(jQuery, window);

(function($, window) {
    $.plugin("swAjaxVariant", {
        hasHistorySupport: Modernizr.history,
        initialPopState: true,
        defaults: {
            productDetailsSelector: ".product--detail-upper",
            configuratorFormSelector: ".configurator--form",
            orderNumberSelector: ".entry--sku .entry--content",
            historyIdentifier: "sw-ajax-variants",
            productDetailsDescriptionSelector: ".content--description",
            footerJavascriptInlineSelector: "#footer--js-inline"
        },
        init: function() {
            if (!this.$el.find(".product--configurator").length) {
                return;
            }
            this.applyDataAttributes();
            this.$el.on(this.getEventName("click"), '*[data-ajax-variants="true"]', $.proxy(this.onChange, this)).on(this.getEventName("change"), '*[data-ajax-select-variants="true"]', $.proxy(this.onChange, this)).on(this.getEventName("click"), ".reset--configuration", $.proxy(this.onChange, this));
            $(window).on("popstate", $.proxy(this.onPopState, this));
            if (this.hasHistorySupport) {
                this.publishInitialState();
            }
        },
        publishInitialState: function() {
            var stateObj = this._createHistoryStateObject();
            window.history.replaceState(stateObj.state, stateObj.title);
        },
        requestData: function(values, pushState) {
            var me = this, stateObj = me._createHistoryStateObject();
            $.loadingIndicator.open({
                closeOnClick: false,
                delay: 100
            });
            $.publish("plugin/swAjaxVariant/onBeforeRequestData", [ me, values, stateObj.location ]);
            values.template = "ajax";
            if (stateObj.params.hasOwnProperty("c")) {
                values.c = stateObj.params.c;
            }
            $.ajax({
                url: stateObj.location,
                data: values,
                method: "GET",
                success: function(response) {
                    var $response = $($.parseHTML(response, document, true)), $productDetails, $productDescription, ordernumber;
                    $productDetails = $response.find(me.opts.productDetailsSelector);
                    $(me.opts.productDetailsSelector).html($productDetails.html());
                    $productDescription = $response.find(me.opts.productDetailsDescriptionSelector);
                    $(me.opts.productDetailsDescriptionSelector).html($productDescription.html());
                    ordernumber = $.trim(me.$el.find(me.opts.orderNumberSelector).text());
                    window.controller = window.snippets = window.themeConfig = window.lastSeenProductsConfig = window.csrfConfig = null;
                    $(me.opts.footerJavascriptInlineSelector).replaceWith($response.filter(me.opts.footerJavascriptInlineSelector));
                    StateManager.addPlugin('*[data-image-slider="true"]', "swImageSlider").addPlugin(".product--image-zoom", "swImageZoom", "xl").addPlugin('*[data-image-gallery="true"]', "swImageGallery").addPlugin('*[data-add-article="true"]', "swAddArticle").addPlugin('*[data-modalbox="true"]', "swModalbox");
                    if (Object.prototype.hasOwnProperty.call(window, "replaceAsyncReady") && typeof window.replaceAsyncReady === "function") {
                        window.replaceAsyncReady();
                    }
                    $.publish("plugin/swAjaxVariant/onRequestData", [ me, response, values, stateObj.location ]);
                    if (pushState && me.hasHistorySupport) {
                        me.pushState(stateObj, ordernumber);
                        $.publish("plugin/swAjaxVariant/onHistoryChanged", [ me, response, values, stateObj.location ]);
                    }
                },
                complete: function(response, status) {
                    $.loadingIndicator.close();
                    $.publish("plugin/swAjaxVariant/onRequestDataCompleted", [ me, response, status, values, stateObj.location ]);
                }
            });
        },
        pushState: function(stateObj, ordernumber) {
            var location = stateObj.location + "?number=" + ordernumber;
            if (stateObj.params.hasOwnProperty("c")) {
                location += "&c=" + stateObj.params.c;
            }
            window.history.pushState(stateObj.state, stateObj.title, location);
        },
        onPopState: function(event) {
            var state = event.originalEvent.state;
            if (!state || !state.hasOwnProperty("type") || state.type !== "sw-ajax-variants") {
                return;
            }
            if ($("html").hasClass("is--safari") && this.initialPopState) {
                this.initialPopState = false;
                return;
            }
            if (!state.values.length) {
                state = "";
            }
            if (state && state.scrollPos) {
                window.setTimeout(function() {
                    $(window).scrollTop(state.scrollPos);
                }, 10);
            }
            $.publish("plugin/swAjaxVariant/onPopState", [ this, state ]);
            if (state && state.values) {
                this.requestData(state.values, false);
            }
        },
        onChange: function(event) {
            var $target = $(event.target), $form = $target.parents("form"), values = {};
            $.each($form.serializeArray(), function(i, item) {
                if (item.name === "__csrf_token") {
                    return;
                }
                values[item.name] = item.value;
            });
            event.preventDefault();
            if (!this.hasHistorySupport) {
                $.loadingIndicator.open({
                    closeOnClick: false,
                    delay: 0
                });
                $form.submit();
                return false;
            }
            $.publish("plugin/swAjaxVariant/onChange", [ this, values, $target ]);
            this.requestData(values, true);
        },
        _getUrlParams: function() {
            var search = window.location.search.substring(1), urlParams = search.split("&"), params = {};
            $.each(urlParams, function(i, param) {
                param = param.split("=");
                if (param[0].length && param[1] && param[1].length && !params.hasOwnProperty(param[0])) {
                    params[decodeURIComponent(param[0])] = decodeURIComponent(param[1]);
                }
            });
            return params;
        },
        _getUrl: function() {
            return window.location.protocol + "//" + window.location.host + window.location.pathname;
        },
        _createHistoryStateObject: function() {
            var $form = this.$el.find(this.opts.configuratorFormSelector), urlParams = this._getUrlParams(), location = this._getUrl();
            return {
                state: {
                    type: this.opts.historyIdentifier,
                    values: $form.serialize(),
                    scrollPos: $(window).scrollTop()
                },
                title: document.title,
                location: location,
                params: urlParams
            };
        }
    });
})(jQuery, window);

(function($, window, document) {
    "use strict";
    $.getCookie = function(name) {
        var value = "; " + document.cookie, parts = value.split("; " + name + "=");
        if (parts.length === 2) {
            return parts.pop().split(";").shift();
        }
        return undefined;
    };
    $.removeCookie = function(name) {
        var basePath = window.csrfConfig.basePath || "/";
        document.cookie = name + "=; path=" + basePath + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    };
    var CSRF = {
        storageKey: "__csrf_token-" + window.csrfConfig.shopId,
        pendingRequests: {},
        allowedDomains: [ window.location.protocol + "//" + window.location.hostname ],
        getToken: function() {
            return $.getCookie(this.storageKey);
        },
        checkToken: function() {
            return this.getToken() !== undefined;
        },
        createTokenField: function() {
            var me = this;
            return $("<input>", {
                type: "hidden",
                name: "__csrf_token",
                value: me.getToken()
            });
        },
        addTokenField: function(formElement) {
            formElement.append(CSRF.createTokenField());
            $.publish("plugin/swCsrfProtection/addTokenField", [ this, formElement ]);
        },
        getFormElements: function() {
            return $('form[method="post"]');
        },
        updateForms: function() {
            var me = this, formElements = me.getFormElements();
            $.each(formElements, function(index, formElement) {
                var csrfInput;
                formElement = $(formElement);
                csrfInput = formElement.find('input[name="__csrf_token"]');
                if (!CSRF.isLocalLink(formElement.attr("action"))) {
                    return;
                }
                if (csrfInput.length > 0) {
                    csrfInput.val(me.getToken());
                } else {
                    me.addTokenField(formElement);
                }
            });
            $.publish("plugin/swCsrfProtection/updateForms", [ this, formElements ]);
        },
        setupAjax: function() {
            var me = this;
            $(document).ajaxSend($.proxy(me._ajaxBeforeSend, me));
            $(document).ajaxComplete($.proxy(me._ajaxAfterSend, me));
            $.publish("plugin/swCsrfProtection/setupAjax", [ me, me.getToken() ]);
        },
        _ajaxAfterSend: function() {
            window.setTimeout(function() {
                this.updateForms();
            }.bind(this), 1);
        },
        _ajaxBeforeSend: function(event, request, settings) {
            settings = settings || {};
            if (settings.hasOwnProperty("ignoreCSRFHeader") || settings.ignoreCSRFHeader === true || !this.isLocalLink(settings.url)) {
                return;
            }
            request.setRequestHeader("X-CSRF-Token", this.getToken());
        },
        requestToken: function() {
            var me = this;
            if (window.StateManager.hasCookiesAllowed() || window.cookieRemoval === 1) {
                $.ajax({
                    url: window.csrfConfig.generateUrl,
                    success: function(response, status, xhr) {
                        me.saveToken(xhr.getResponseHeader("x-csrf-token"));
                        $.publish("plugin/swCsrfProtection/requestToken", [ me, me.getToken() ]);
                        me.afterInit();
                    }
                });
            }
        },
        saveToken: function(token) {
            var me = this, basePath = window.csrfConfig.basePath || "/";
            document.cookie = me.storageKey + "=" + token + "; path=" + basePath;
        },
        init: function() {
            var me = this;
            if (me.checkToken()) {
                me.afterInit();
                return;
            }
            me.requestToken();
        },
        afterInit: function() {
            var me = this;
            me.updateForms();
            me.setupAjax();
            $.publish("plugin/swCsrfProtection/init", [ me ]);
        },
        isLocalLink: function(link) {
            if (link === undefined || link === null || link[0] === "/") {
                return true;
            }
            for (var index in this.allowedDomains) {
                if (link.indexOf(this.allowedDomains[index]) === 0) {
                    return true;
                }
            }
            return false;
        }
    };
    $(function() {
        CSRF.init();
    });
    window.CSRF = CSRF;
})(jQuery, window, document);

(function($) {
    "use strict";
    $.plugin("swPanelAutoResizer", {
        defaults: {
            panelHeaderSelector: ".panel--header",
            panelBodySelector: ".panel--body",
            panelFooterSelector: ".panel--actions",
            maxHeight: null
        },
        $elChildren: null,
        isModal: false,
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$elChildren = me.$el.children();
            me.isModal = me.$el.closest(".js--modal").length > 0;
            $.subscribe(me.getEventName("plugin/swPanelAutoResizer/onAfterSetHeight"), $.proxy(me._onAfterSetHeight, me));
            $.publish("plugin/swPanelAutoResizer/onInit", [ me ]);
            me.update();
            $.publish("plugin/swPanelAutoResizer/onAfterInit", [ me ]);
        },
        _onAfterSetHeight: function(event, context) {
            var me = this;
            if (me === context) {
                return;
            }
            if (me.$el.closest(context.$el).length > 0) {
                me._calculateColumns();
                me.resize();
            }
        },
        _calculateColumns: function() {
            var me = this, maxWidth = me.$el.width(), width = 0, columns = 0, childWidth = 0;
            $.each(me.$elChildren, function(index, child) {
                childWidth = $(child).width();
                if (width + childWidth > maxWidth) {
                    return;
                }
                width += childWidth;
                columns++;
            });
            me._columns = columns;
        },
        update: function() {
            var me = this;
            if (me._resizeTimeout) {
                window.clearTimeout(me._resizeTimeout);
            }
            me._resizeTimeout = window.setTimeout(function() {
                $.publish("plugin/swPanelAutoResizer/onUpdate", [ me ]);
                me._calculateColumns();
                me.resize();
                $.publish("plugin/swPanelAutoResizer/afterUpdate", [ me ]);
            }, 150);
        },
        getMaxHeight: function($elements) {
            var me = this, opts = me.opts, itemHeight = 0, height = 0;
            $.publish("plugin/swPanelAutoResizer/onGetMaxHeight", [ me ]);
            $elements.each(function(index, childElement) {
                $(childElement).css("height", "auto");
            });
            $elements.each(function(index, childElement) {
                itemHeight = $(childElement).height();
                if (itemHeight > height) {
                    height = itemHeight;
                }
            });
            if (opts.maxHeight !== null && opts.maxHeight < height) {
                height = opts.maxHeight;
            }
            $.publish("plugin/swPanelAutoResizer/onAfterGetMaxHeight", [ me, height ]);
            return height;
        },
        setHeight: function($elements, height) {
            var me = this;
            if (height <= 0) {
                return;
            }
            $.publish("plugin/swPanelAutoResizer/onSetHeight", [ me ]);
            $.each($elements, function(index, childElement) {
                $(childElement).height(height);
            });
            $.publish("plugin/swPanelAutoResizer/onAfterSetHeight", [ me ]);
        },
        resize: function(selector) {
            var me = this, height = 0, chunkItems = [], i = 0, childrenCount = me.$elChildren.length;
            if (typeof selector === "undefined") {
                me.resize(me.opts.panelHeaderSelector);
                me.resize(me.opts.panelBodySelector);
                me.resize(me.opts.panelFooterSelector);
                return;
            }
            $.publish("plugin/swPanelAutoResizer/onResize", [ me, selector ]);
            if (me._columns > 1) {
                for (i; i < childrenCount; i += me._columns) {
                    chunkItems = me.$elChildren.slice(i, i + me._columns).map(function(index, child) {
                        return $(child).find(selector).first();
                    });
                    height = me.getMaxHeight(chunkItems);
                    me.setHeight(chunkItems, height);
                }
            } else {
                me.resetHeight();
            }
            me._centerModal();
            $.publish("plugin/swPanelAutoResizer/onAfterResize", [ me, selector ]);
        },
        _centerModal: function() {
            if (this.isModal === false) {
                return;
            }
            $.modal.center();
        },
        resetHeight: function() {
            var me = this, opts = me.opts;
            var allSelectorClass = [ opts.panelHeaderSelector, opts.panelBodySelector, opts.panelFooterSelector ].join(",");
            me.$elChildren.find(allSelectorClass).each(function(index, childElement) {
                $(childElement).css("height", "auto");
            });
        },
        destroy: function() {
            var me = this;
            me.resetHeight();
            $.unsubscribe(me.getEventName("plugin/swPanelAutoResizer/onAfterSetHeight"));
            me._destroy();
        }
    });
})(jQuery);

(function($, window) {
    "use strict";
    $.addressSelection = {
        _name: "addressSelection",
        _previousOptions: {},
        defaults: {
            id: null,
            formSelector: ".address-manager--selection-form",
            width: "80%",
            height: "80%",
            sizing: "content",
            sessionKey: "",
            setDefaultBillingAddress: null,
            setDefaultShippingAddress: null
        },
        getEventName: function(event) {
            return event + "." + this._name;
        },
        openPrevious: function() {
            this.open(this._previousOptions);
        },
        open: function(options) {
            var me = this, sizing, extraData, maxHeight = 0;
            me.opts = $.extend({}, me.defaults, options);
            extraData = {
                sessionKey: me.opts.sessionKey,
                setDefaultBillingAddress: me.opts.setDefaultBillingAddress,
                setDefaultShippingAddress: me.opts.setDefaultShippingAddress
            };
            sizing = me.opts.sizing;
            me._previousOptions = Object.create(me.opts);
            if (window.StateManager._getCurrentDevice() === "mobile") {
                sizing = "auto";
            } else {
                maxHeight = me.opts.height;
            }
            $.modal.close();
            $.loadingIndicator.open();
            $.publish("plugin/swAddressSelection/onBeforeAddressFetch", [ me ]);
            $.ajax({
                url: window.controller["ajax_address_selection"],
                data: {
                    id: me.opts.id,
                    extraData: extraData
                },
                success: function(data) {
                    $.loadingIndicator.close(function() {
                        $.subscribe(me.getEventName("plugin/swModal/onOpen"), $.proxy(me._onSetContent, me));
                        $.modal.open(data, {
                            width: me.opts.width,
                            maxHeight: maxHeight,
                            additionalClass: "address-manager--modal address-manager--selection",
                            sizing: sizing
                        });
                        $.unsubscribe(me.getEventName("plugin/swModal/onOpen"));
                    });
                    $.publish("plugin/swAddressSelection/onAddressFetchSuccess", [ me, data ]);
                }
            });
        },
        _onSetContent: function(event, $modal) {
            var me = this;
            me._registerPlugins();
            me._bindButtonAction($modal);
        },
        _registerPlugins: function() {
            window.StateManager.addPlugin('*[data-panel-auto-resizer="true"]', "swPanelAutoResizer").addPlugin('*[data-address-editor="true"]', "swAddressEditor").addPlugin('*[data-preloader-button="true"]', "swPreloaderButton");
            $.publish("plugin/swAddressSelection/onRegisterPlugins", [ this ]);
        },
        _bindButtonAction: function($modal) {
            var me = this;
            $.publish("plugin/swAddressSelection/onBeforeBindButtonAction", [ me, $modal ]);
            $modal._$content.find(me.opts.formSelector).on("submit", function(event) {
                var $target = $(event.target);
                event.preventDefault();
                $.publish("plugin/swAddressSelection/onBeforeSave", [ me, $target ]);
                $.ajax({
                    method: $target.attr("method"),
                    url: $target.attr("action"),
                    data: $target.serialize(),
                    success: function(response) {
                        me.onSave($modal, response);
                    }
                });
            });
            $.publish("plugin/swAddressSelection/onAfterBindButtonAction", [ me, $modal ]);
        },
        onSave: function($modal, response) {
            var me = this;
            $.publish("plugin/swAddressSelection/onAfterSave", [ me, $modal, response ]);
            window.location.reload();
        }
    };
    $.plugin("swAddressSelection", {
        init: function() {
            var me = this;
            me.opts = $.extend({}, Object.create($.addressSelection.defaults), me.opts);
            me.applyDataAttributes(true);
            me._on(me.$el, "click", $.proxy(me.onClick, me));
            $.publish("plugin/swAddressSelection/onRegisterEvents", [ me ]);
        },
        onClick: function(event) {
            event.preventDefault();
            $.addressSelection.open(this.opts);
        }
    });
})(jQuery, window);

(function($, window) {
    "use strict";
    $.plugin("swAddressEditor", {
        defaults: {
            id: null,
            submitButtonSelector: ".address--form-submit",
            width: 650,
            height: "80%",
            sizing: "content",
            sessionKey: "",
            setDefaultBillingAddress: null,
            setDefaultShippingAddress: null,
            showSelectionOnClose: false
        },
        init: function() {
            var me = this;
            me.applyDataAttributes(true);
            me._on(me.$el, "click", $.proxy(me.onClick, me));
            $.publish("plugin/swAddressEditor/onRegisterEvents", [ me ]);
        },
        onClick: function(event) {
            var me = this;
            event.preventDefault();
            $.publish("plugin/swAddressEditor/onBeforeClick", [ me, me.opts.id ]);
            if (me.opts.id) {
                me.open(me.opts.id);
            } else {
                me.open();
            }
            $.publish("plugin/swAddressEditor/onAfterClick", [ me, me.opts.id ]);
        },
        open: function(addressId) {
            var me = this, sizing = me.opts.sizing, maxHeight = 0, requestData = {
                id: addressId || null,
                extraData: {
                    sessionKey: me.opts.sessionKey,
                    setDefaultBillingAddress: me.opts.setDefaultBillingAddress,
                    setDefaultShippingAddress: me.opts.setDefaultShippingAddress
                }
            };
            if (window.StateManager._getCurrentDevice() === "mobile") {
                sizing = "auto";
            } else {
                maxHeight = me.opts.height;
            }
            $.modal.close();
            $.loadingIndicator.open();
            $.publish("plugin/swAddressEditor/onBeforeOpen", [ me, requestData ]);
            $.ajax({
                url: window.controller["ajax_address_editor"],
                data: requestData,
                success: function(data) {
                    $.loadingIndicator.close(function() {
                        $.subscribe(me.getEventName("plugin/swModal/onOpen"), $.proxy(me._onSetContent, me));
                        $.modal.open(data, {
                            width: me.opts.width,
                            height: me.opts.height,
                            maxHeight: maxHeight,
                            sizing: sizing,
                            additionalClass: "address-manager--modal address-manager--editor",
                            addressId: addressId
                        });
                        $.unsubscribe(me.getEventName("plugin/swModal/onOpen"));
                    });
                    $.publish("plugin/swAddressEditor/onAddressFetchSuccess", [ me, data ]);
                }
            });
            $.publish("plugin/swAddressEditor/onAfterOpen", [ me ]);
        },
        _onSetContent: function(event, $modal) {
            var me = this;
            me._registerPlugins();
            me._bindButtonAction($modal);
        },
        _registerPlugins: function() {
            window.StateManager.addPlugin('div[data-register="true"]', "swRegister").addPlugin('*[data-preloader-button="true"]', "swPreloaderButton");
            $.publish("plugin/swAddressEditor/onRegisterPlugins", [ this ]);
        },
        _bindButtonAction: function($modal) {
            var me = this, $submitButtons = $modal._$content.find(me.opts.submitButtonSelector), $actionInput = $modal._$content.find("input[name=saveAction]");
            $.publish("plugin/swAddressEditor/onBeforeBindButtonAction", [ me, $modal ]);
            $submitButtons.on("click", function(event) {
                var $elem = $(this);
                event.preventDefault();
                $actionInput.val($elem.attr("data-value"));
                $elem.closest("form").submit();
            });
            $modal._$content.find("form").on("submit", function(event) {
                var $target = $(event.target), actionData = {
                    id: $modal.options.addressId || null
                };
                me._resetErrorMessage($modal);
                me._disableSubmitButtons($modal);
                event.preventDefault();
                $.each($target.serializeArray(), function() {
                    actionData[this.name] = this.value;
                });
                $.publish("plugin/swAddressEditor/onBeforeSave", [ me, actionData ]);
                $.ajax({
                    url: $target.attr("action"),
                    data: actionData,
                    method: "POST",
                    success: function(response) {
                        me.onSave($modal, response);
                    }
                });
            });
            $.publish("plugin/swAddressEditor/onAfterBindButtonAction", [ me, $modal ]);
        },
        onSave: function($modal, response) {
            var me = this;
            $.publish("plugin/swAddressEditor/onAfterSave", [ me, $modal, response ]);
            if (response.success === true) {
                if (me.opts.showSelectionOnClose) {
                    $.addressSelection.openPrevious();
                } else {
                    window.location.reload();
                }
            } else {
                me._highlightErrors($modal, response.errors);
                me._enableSubmitButtons($modal);
            }
        },
        _highlightErrors: function($modal, errors) {
            var fieldPrefix = $modal._$content.find(".address-form--panel").attr("data-prefix") || "address";
            $modal._$content.find(".address-editor--errors").removeClass("is--hidden");
            $.each(errors, function(field, feedback) {
                $modal._$content.find('[name="' + fieldPrefix + "[" + field + ']"]').addClass("has--error");
                if (feedback) {
                    $modal._$content.find(".address-editor--errors .alert--content").append("<p>" + feedback + "</p>");
                }
            });
        },
        _resetErrorMessage: function($modal) {
            $modal._$content.find(".address-editor--errors").addClass("is--hidden");
        },
        _disableSubmitButtons: function($modal) {
            var me = this;
            $modal._$content.find(me.opts.submitButtonSelector).attr("disabled", "disabled");
        },
        _enableSubmitButtons: function($modal) {
            var me = this;
            $modal._$content.find(me.opts.submitButtonSelector).prop("disabled", false).data("plugin_swPreloaderButton").reset();
        }
    });
})(jQuery, window);

(function($, window) {
    $.plugin("swDatePicker", {
        defaults: {
            mode: "single",
            utc: false,
            wrap: false,
            static: false,
            weekNumbers: false,
            allowInput: false,
            clickOpens: true,
            time_24hr: true,
            enableTime: false,
            noCalendar: false,
            dateFormat: "Y-m-d",
            timeFormat: " H:i:S",
            altInput: true,
            rangeStartInput: null,
            rangeEndInput: null,
            altInputClass: "flatpickr-input form-control input",
            altFormat: "F j, Y",
            altTimeFormat: " - H:i",
            multiDateSeparator: null,
            defaultDate: null,
            minDate: null,
            maxDate: null,
            enabledDates: null,
            parseDate: null,
            autoSubmit: false
        },
        init: function(el, options) {
            var me = this, globalConfig = window.datePickerGlobalConfig || {};
            me.opts = $.extend({}, me.defaults, globalConfig, options);
            me.applyDataAttributes(true);
            me.suspended = false;
            if (me.opts.enableTime) {
                me.opts.dateFormat = me.opts.dateFormat + me.opts.timeFormat;
                me.opts.altFormat = me.opts.altFormat + me.opts.altTimeFormat;
            }
            if (me.opts.mode === "range" && me.opts.rangeStartInput !== null) {
                me.$rangeStartInput = $('[name="' + me.opts.rangeStartInput + '"]');
            }
            if (me.opts.mode === "range" && me.opts.rangeEndInput !== null) {
                me.$rangeEndInput = $('[name="' + me.opts.rangeEndInput + '"]');
            }
            me.initFlatpickr();
            me.registerEvents();
            $.publish("plugin/swDatePicker/onInit", [ me ]);
        },
        initFlatpickr: function() {
            var me = this, config = $.extend({}, me.opts);
            me.currentValue = me.$el.val();
            if (me.opts.mode === "multiple" && me.opts.multiDateSeparator !== null) {
                me.$el.val(me.convertMultiSeparatorToFlatpickr(me.$el.val()));
            }
            if (me.opts.enabledDates !== null) {
                if (typeof me.opts.enabledDates === "string") {
                    me.opts.enabledDates = me.opts.enabledDates.split(",");
                }
                config["enable"] = me.opts.enabledDates;
            }
            config["onReady"] = $.proxy(me.onPickerReady, me);
            config["onChange"] = $.proxy(me.onPickerChange, me);
            config["onOpen"] = $.proxy(me.onPickerOpen, me);
            config["onClose"] = $.proxy(me.onPickerClose, me);
            me.flatpickr = me.$el.flatpickr(config);
            if (me.opts.mode === "multiple" && me.opts.multiDateSeparator !== null) {
                me.$el.val(me.convertMultiSeparator(me.$el.val()));
            }
            if (me.opts.mode === "range") {
                me.setDatePickerValFromInputs();
                me.setStartInputVal();
                me.setEndInputVal();
            }
            $.publish("plugin/swDatePicker/onInitFlatpickr", [ me, me.flatpickr, config ]);
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$el, "clear", $.proxy(me.onInputClear, me));
            me._on(me.$el, "change", $.proxy(me.onInputChange, me));
            if (me.$rangeStartInput) {
                me._on(me.$rangeStartInput, "clear", $.proxy(me.onRangeInputClear, me, me.$rangeStartInput));
                me._on(me.$rangeStartInput, "change", $.proxy(me.onInputChange, me));
            }
            if (me.$rangeEndInput) {
                me._on(me.$rangeEndInput, "clear", $.proxy(me.onRangeInputClear, me, me.$rangeEndInput));
                me._on(me.$rangeEndInput, "change", $.proxy(me.onInputChange, me));
            }
            $.subscribe(me.getEventName("plugin/swOffcanvasMenu/onCloseMenu"), $.proxy(me.close, me));
            $.subscribe(me.getEventName("plugin/swOffcanvasMenu/onBeforeOpenMenu"), $.proxy(me.close, me));
            $.publish("plugin/swDatePicker/onRegisterEvents", [ me ]);
        },
        open: function() {
            var me = this;
            me.flatpickr.open();
        },
        close: function() {
            var me = this;
            me.flatpickr.close();
        },
        onInputClear: function() {
            var me = this;
            me.flatpickr.clear();
            $.publish("plugin/swDatePicker/onInputClear", [ me ]);
        },
        onInputChange: function(event) {
            var me = this;
            if (me.suspended) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
            $.publish("plugin/swDatePicker/onInputChange", [ me ]);
        },
        onRangeInputClear: function($input) {
            var me = this;
            $input.val("");
            me.$el.trigger("change");
            me.setDatePickerValFromInputs();
            $.publish("plugin/swDatePicker/onRangeInputClear", [ me ]);
        },
        onPickerReady: function() {
            var me = this;
            $.publish("plugin/swDatePicker/onPickerReady", [ me ]);
        },
        onPickerChange: function() {
            var me = this;
            if (me.opts.mode === "range") {
                me.setStartInputVal();
                me.setEndInputVal();
            }
            if (me.opts.mode === "multiple" && me.opts.multiDateSeparator !== null) {
                me.$el.val(me.convertMultiSeparator(me.$el.val()));
            }
            $.publish("plugin/swDatePicker/onPickerChange", [ me ]);
        },
        onPickerOpen: function() {
            var me = this;
            me.currentValue = me.$el.val();
            $.publish("plugin/swDatePicker/onPickerOpen", [ me ]);
        },
        onPickerClose: function() {
            var me = this;
            if (me.opts.autoSubmit && me.currentValue !== me.$el.val()) {
                me.$el.parents("form").submit();
            }
            me.$el.parent().find("input.flatpickr-input").blur();
            $.publish("plugin/swDatePicker/onPickerClose", [ me ]);
        },
        setStartInputVal: function(value) {
            var me = this;
            if (me.$rangeStartInput) {
                var val = value || me.flatpickr.selectedDates[0] || "", altVal = val;
                if (val && val !== "") {
                    val = me.formatDate(val);
                    altVal = me.formatDate(altVal, me.opts.altFormat);
                }
                me.$rangeStartInput.val(val);
                if (me.opts.altFormat) {
                    me.$rangeStartInput.attr("data-display-value", altVal);
                }
            }
            $.publish("plugin/swDatePicker/onSetStartInputVal", [ me ]);
        },
        setEndInputVal: function(value) {
            var me = this;
            if (me.$rangeEndInput) {
                var val = value || me.flatpickr.selectedDates[1] || "", altVal = val;
                if (val && val !== "") {
                    val = me.formatDate(val);
                    altVal = me.formatDate(altVal, me.opts.altFormat);
                }
                me.$rangeEndInput.val(val);
                if (me.opts.altFormat) {
                    me.$rangeEndInput.attr("data-display-value", altVal);
                }
            }
            $.publish("plugin/swDatePicker/onSetEndInputVal", [ me ]);
        },
        setDatePickerValFromInputs: function() {
            var me = this, values = [];
            if (me.$rangeStartInput && me.$rangeStartInput.val().length > 0) {
                values.push(me.$rangeStartInput.val());
            }
            if (me.$rangeEndInput && me.$rangeEndInput.val().length > 0) {
                values.push(me.$rangeEndInput.val());
            }
            me.flatpickr.setDate(values);
            $.publish("plugin/swDatePicker/onSetDatePickerValFromInputs", [ me ]);
        },
        getRangeStartValue: function() {
            var me = this;
            if (!me.$rangeStartInput) {
                return null;
            }
            $.publish("plugin/swDatePicker/onGetRangeStartValue", [ me ]);
            return me.$rangeStartInput.val();
        },
        getRangeEndValue: function() {
            var me = this;
            if (!me.$rangeEndInput) {
                return null;
            }
            $.publish("plugin/swDatePicker/onGetRangeEndValue", [ me ]);
            return me.$rangeEndInput.val();
        },
        suspendEvents: function() {
            var me = this;
            me.suspended = true;
            $.publish("plugin/swDatePicker/onSuspendEvents", [ me ]);
        },
        resumeEvents: function() {
            var me = this;
            me.suspended = false;
            $.publish("plugin/swDatePicker/onResumeEvents", [ me ]);
        },
        convertMultiSeparator: function(value) {
            var me = this;
            if (me.opts.multiDateSeparator === null) {
                return value;
            }
            var convertValue = value.split("; ").join(me.opts.multiDateSeparator);
            $.publish("plugin/swDatePicker/onConvertMultiSeparator", [ me, convertValue ]);
            return convertValue;
        },
        convertMultiSeparatorToFlatpickr: function(value) {
            var me = this;
            if (me.opts.multiDateSeparator === null) {
                return value;
            }
            var convertValue = value.split(me.opts.multiDateSeparator).join("; ");
            $.publish("plugin/swDatePicker/onConvertMultiSeparatorToFlatpickr", [ me, convertValue ]);
            return convertValue;
        },
        formatDate: function(date, dateFormat) {
            var me = this;
            if (!date) {
                return false;
            }
            dateFormat = dateFormat || me.opts.dateFormat;
            var formattedDate = me.flatpickr.formatDate(date, dateFormat);
            $.publish("plugin/swDatePicker/onFormatDate", [ me, formattedDate, dateFormat, date ]);
            return formattedDate;
        },
        destroy: function() {
            var me = this;
            $.unsubscribe(me.getEventName("plugin/swOffcanvasMenu/onCloseMenu"));
            $.unsubscribe(me.getEventName("plugin/swOffcanvasMenu/onBeforeOpenMenu"));
            me.flatpickr.destroy();
            me._destroy();
            $.publish("plugin/swDatePicker/onDestroy", [ me ]);
        }
    });
})(jQuery, window);

(function($, window) {
    "use strict";
    $.plugin("swStorageField", {
        defaults: {
            storageType: "session",
            storageKeyPrefix: "sw-local-",
            storageKeyName: null,
            storeEvent: "blur"
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.storage = window.StorageManager.getStorage(me.opts.storageType);
            me.storageKey = me.getStorageKey();
            me.$form = me.getParentForm();
            me.setFieldValueFromStorage();
            me.registerEvents();
            $.publish("plugin/swStorageField/init", [ me ]);
        },
        getStorageKey: function() {
            var me = this, fieldName = me.$el.attr("name"), key = me.opts.storageKeyPrefix;
            if (me.opts.storageKeyName !== null) {
                key += me.opts.storageKeyName.toLowerCase();
            } else if (fieldName && fieldName.length) {
                key += fieldName.toLowerCase();
            }
            $.publish("plugin/swStorageField/getStorageKey", [ me, key ]);
            return key;
        },
        getParentForm: function() {
            var me = this, $form = me.$el.parents("form");
            if (me.$el.is("[data-selector]")) {
                $form = $(me.$el.attr("data-selector")).parents("form");
            }
            $.publish("plugin/swStorageField/getParentForm", [ me, $form ]);
            return $form.length > 0 ? $form : null;
        },
        setFieldValueFromStorage: function() {
            var me = this, value = me.storage.getItem(me.storageKey);
            if (value && value.length) {
                me.$el.val(value);
                if (me.$el.is("[data-selector]")) {
                    $(me.$el.attr("data-selector")).val(value);
                }
            }
            $.publish("plugin/swStorageField/setFieldValueFromStorage", [ me ]);
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$el, me.opts.storeEvent, $.proxy(me.storeValue, me));
            if (me.$form && me.$form !== null) {
                me._on(me.$form, "submit", $.proxy(me.onFormSubmit, me));
            }
            $.publish("plugin/swStorageField/onRegisterEvents", [ me ]);
        },
        storeValue: function() {
            var me = this, value = me.$el.val();
            me.storage.setItem(me.storageKey, value);
            $.publish("plugin/swStorageField/storeValue", [ me ]);
        },
        onFormSubmit: function() {
            var me = this;
            me.storage.removeItem(me.storageKey);
            $.publish("plugin/swStorageField/onFormSubmit", [ me ]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
})(jQuery, window);

(function($, window) {
    "use strict";
    var $body = $("body");
    $.plugin("swCookiePermission", {
        defaults: {
            isHiddenClass: "is--hidden",
            cookieMessageShowingClass: "cookie--permission--message",
            acceptButtonSelector: ".cookie-permission--accept-button",
            declineButtonSelector: ".cookie-permission--decline-button",
            cookieConsentManagerSelector: "#cookie-consent",
            closeButtonSelector: ".cookie-permission--close-button",
            privacyLinkSelector: ".cookie-permission--privacy-link",
            cookieGroupNameSelector: ".cookie-consent--group-name",
            cookieNameSelector: ".cookie-consent--cookie-name",
            shopId: 0,
            urlPrefix: "",
            title: ""
        },
        cookieStorageKeyPrefix: "hide-cookie-permission",
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.createProperties();
            me.preparePrivacyLink();
            me.registerEvents();
            me.displayCookiePermission(function(display) {
                if (display) {
                    me.showElement();
                }
            });
        },
        calculatePermissionHeight: function() {
            return this.$el.css("height");
        },
        setPermissionHeight: function() {
            $body.css("padding-bottom", this.calculatePermissionHeight());
        },
        update: function() {
            var me = this;
            this.displayCookiePermission(function(display) {
                if (display) {
                    me.setPermissionHeight();
                }
            });
        },
        createProperties: function() {
            this.$privacyLink = this.$el.find(this.opts.privacyLinkSelector);
            this.$acceptButton = this.$el.find(this.opts.acceptButtonSelector);
            this.$declineButton = this.$el.find(this.opts.declineButtonSelector);
            this.storageKey = this.createStorageKey();
            this.storage = window.StorageManager.getLocalStorage();
        },
        preparePrivacyLink: function() {
            var prefix = this.opts.urlPrefix, href;
            if (!this.$privacyLink) {
                return;
            }
            href = this.$privacyLink.attr("href") || "";
            if (href.match(/^(http:|https:)/)) {
                return;
            }
            if (href.match(/^\//)) {
                prefix = this.opts.urlPrefix.replace(/(\/)$/, "");
            }
            this.$privacyLink.attr("href", [ prefix, href ].join(""));
        },
        registerEvents: function() {
            this._on(this.$acceptButton, "click", $.proxy(this.onAcceptButtonClick, this));
            this._on(this.$declineButton, "click", $.proxy(this.onDeclineButtonClick, this));
        },
        displayCookiePermission: function(callback) {
            if (window.cookieRemoval === 1) {
                if ($.getCookie("cookieDeclined")) {
                    callback(false);
                    return;
                }
                if ($.getCookie("cookiePreferences") && !this.hasPreferencesHashChanged()) {
                    callback(false);
                    return;
                }
            }
            if (window.cookieRemoval === 2 && document.cookie.indexOf("allowCookie") !== -1) {
                callback(false);
                return;
            }
            callback(!this.storage.getItem(this.storageKey));
        },
        hasPreferencesHashChanged: function() {
            var preferences = JSON.parse($.getCookie("cookiePreferences")), currentHash = preferences.hash, uniqueNames = [], newHash;
            $(this.opts.cookieGroupNameSelector).each(function(key, group) {
                uniqueNames.push($(group).val());
            });
            $(this.opts.cookieNameSelector).each(function(key, cookie) {
                uniqueNames.push($(cookie).val());
            });
            uniqueNames.sort();
            newHash = window.btoa(JSON.stringify(uniqueNames));
            return newHash !== currentHash;
        },
        createStorageKey: function() {
            var delimiter = "-";
            return [ this.cookieStorageKeyPrefix, delimiter, this.opts.shopId ].join("");
        },
        onAcceptButtonClick: function(event) {
            event.preventDefault();
            try {
                window.localStorage.setItem(this.storageKey, "true");
            } catch (err) {}
            var d = new Date();
            d.setTime(d.getTime() + 180 * 24 * 60 * 60 * 1e3);
            document.cookie = "allowCookie=1; path=" + this.getBasePath() + ";expires=" + d.toGMTString() + ";";
            this.hideElement();
            this.applyActiveToPreferences();
            $.publish("plugin/swCookiePermission/onAcceptButtonClick", [ this, event ]);
        },
        applyActiveToPreferences: function() {
            var cookieConsentPlugin = $(this.opts.cookieConsentManagerSelector).data("plugin_swCookieConsentManager");
            cookieConsentPlugin.buildCookiePreferences(true);
        },
        onDeclineButtonClick: function(event) {
            event.preventDefault();
            document.cookie = "cookieDeclined=1; path=" + this.getBasePath() + ";";
            this.hideElement();
            $.publish("plugin/swCookiePermission/onDeclineButtonClick", [ this, event ]);
        },
        onCloseButtonClick: function(event) {
            event.preventDefault();
            this.hideElement();
        },
        showElement: function() {
            if (window.cookieRemoval === 2) {
                $.modal.open(this.$el.html(), {
                    title: this.opts.title,
                    sizing: "content",
                    width: 500
                });
                this.$acceptButton = $(this.opts.acceptButtonSelector);
                this.$closeButton = $(this.opts.closeButtonSelector);
                this._on(this.$acceptButton, "click", $.proxy(this.onAcceptButtonClick, this));
                this._on(this.$closeButton, "click", $.proxy(this.onCloseButtonClick, this));
            } else {
                this.$el.removeClass(this.opts.isHiddenClass);
                this.setPermissionHeight();
            }
        },
        hideElement: function() {
            this.$el.addClass(this.opts.isHiddenClass);
            $body.css("padding-bottom", 0);
            $.modal.close();
        },
        getBasePath: function() {
            return window.csrfConfig.basePath || "/";
        }
    });
})(jQuery, window);

(function($, window) {
    window.StateManager.init([ {
        state: "xs",
        enter: 0,
        exit: 29.9375
    }, {
        state: "s",
        enter: 30,
        exit: 47.9375
    }, {
        state: "m",
        enter: 48,
        exit: 63.9375
    }, {
        state: "l",
        enter: 64,
        exit: 78.6875
    }, {
        state: "xl",
        enter: 78.75,
        exit: 322.5
    } ]);
    window.StateManager.addPlugin('*[data-offcanvas="true"]', "swOffcanvasMenu", [ "xs", "s" ]).addPlugin('*[data-datepicker="true"]', "swDatePicker").addPlugin('*[data-search="true"]', "swSearch").addPlugin(".footer--column .column--headline", "swCollapsePanel", {
        contentSiblingSelector: ".column--content"
    }, [ "xs", "s" ]).addPlugin("#new-customer-action, .registration--menu-entry", "swCollapsePanel", [ "xs", "s" ]).addPlugin('*[data-image-slider="true"]', "swImageSlider").addPlugin(".product--image-zoom", "swImageZoom", "xl").addPlugin(".blog-filter--trigger", "swCollapsePanel", [ "xs", "s", "m", "l" ]).addPlugin(".category--teaser .hero--text", "swOffcanvasHtmlPanel", [ "xs", "s" ]).addPlugin('*[data-product-slider="true"]', "swProductSlider").addPlugin(".product--rating-link, .link--publish-comment", "swScrollAnimate", {
        scrollTarget: ".tab-menu--product"
    }, [ "s", "m", "l", "xl" ]).addPlugin("a.link--publish-comment", "swOffcanvasButton", {
        contentSelector: "#tab--product-comment"
    }, [ "xs" ]).addPlugin(".tab-menu--product", "swTabMenu", [ "s", "m", "l", "xl" ]).addPlugin(".tab-menu--cross-selling", "swTabMenu").addPlugin(".tab-menu--product .tab--container", "swOffcanvasButton", {
        titleSelector: ".tab--title",
        previewSelector: ".tab--preview",
        contentSelector: ".tab--content"
    }, [ "xs" ]).addPlugin(".tab-menu--cross-selling .tab--header", "swCollapsePanel", {
        contentSiblingSelector: ".tab--content"
    }, [ "xs", "s" ]).addPlugin("body", "swAjaxProductNavigation").addPlugin('*[data-collapse-panel="true"]', "swCollapsePanel").addPlugin('*[data-range-slider="true"]', "swRangeSlider").addPlugin('*[data-auto-submit="true"]', "swAutoSubmit").addPlugin('*[data-drop-down-menu="true"]', "swDropdownMenu").addPlugin('*[data-newsletter="true"]', "swNewsletter").addPlugin('*[data-pseudo-text="true"]', "swPseudoText").addPlugin('*[data-preloader-button="true"]', "swPreloaderButton").addPlugin("*[data-filter-type]", "swFilterComponent").addPlugin('*[data-listing-actions="true"]', "swListingActions").addPlugin('*[data-scroll="true"]', "swScrollAnimate").addPlugin('*[data-ajax-wishlist="true"]', "swAjaxWishlist").addPlugin('*[data-image-gallery="true"]', "swImageGallery").addPlugin(".emotion--wrapper", "swEmotionLoader").addPlugin('input[type="submit"][form], button[form]', "swFormPolyfill").addPlugin('select:not([data-no-fancy-select="true"])', "swSelectboxReplacement").addPlugin("div.captcha--placeholder[data-src]", "swCaptcha").addPlugin('*[data-modalbox="true"]', "swModalbox").addPlugin(".is--ctl-detail", "swJumpToTab", [ "m", "l", "xl" ]).addPlugin('*[data-ajax-shipping-payment="true"]', "swShippingPayment").addPlugin('*[data-invalid-tos-jump="true"]', "swInvalidTosJump").addPlugin('div[data-register="true"]', "swRegister").addPlugin('*[data-last-seen-products="true"]', "swLastSeenProducts", $.extend({}, window.lastSeenProductsConfig)).addPlugin('*[data-add-article="true"]', "swAddArticle").addPlugin('*[data-menu-scroller="true"]', "swMenuScroller").addPlugin('*[data-collapse-cart="true"]', "swCollapseCart").addPlugin('*[data-compare-ajax="true"]', "swProductCompareAdd").addPlugin('*[data-product-compare-menu="true"]', "swProductCompareMenu").addPlugin('*[data-infinite-scrolling="true"]', "swInfiniteScrolling").addPlugin('*[data-ajax-variants-container="true"]', "swAjaxVariant").addPlugin('*[data-subcategory-nav="true"]', "swSubCategoryNav", [ "xs", "s" ]).addPlugin('*[data-panel-auto-resizer="true"]', "swPanelAutoResizer").addPlugin('*[data-address-selection="true"]', "swAddressSelection").addPlugin('*[data-address-editor="true"]', "swAddressEditor").addPlugin('*[data-cookie-permission="true"]', "swCookiePermission").addPlugin(".navigation--entry.entry--account.with-slt", "swDropdownMenu", [ "m", "l", "xl" ]).addPlugin('*[data-storage-field="true"]', "swStorageField").addPlugin('*[data-notification-message-close="true"]', "swNotificationMessageClose").addPlugin('*[data-cookie-consent-manager="true"]', "swCookieConsentManager");
    $(function($) {
        if (!StorageManager.hasCookiesSupport) {
            createNoCookiesNoticeBox(window.snippets.noCookiesNotice);
        }
        function createNoCookiesNoticeBox(message) {
            $("<div/>", {
                class: "alert is--warning no--cookies"
            }).append($("<div/>", {
                class: "alert--icon"
            }).append($("<i/>", {
                class: "icon--element icon--warning"
            }))).append($("<div/>", {
                class: "alert--content",
                html: message
            }).append($("<a/>", {
                class: "close--alert",
                html: "✕"
            }).on("click", function() {
                $(this).closest(".no--cookies").hide();
            }))).appendTo(".page-wrap");
        }
        $('*[data-lightbox="true"]').on("click.lightbox", function(event) {
            var $el = $(this), target = $el.is("[data-lightbox-target]") ? $el.attr("data-lightbox-target") : $el.attr("href"), isSvg = $el.is("[data-is-svg]");
            event.preventDefault();
            if (target.length) {
                $.lightbox.open(target, isSvg);
            }
        });
        $(".add-voucher--checkbox").on("change", function(event) {
            var method = !$(this).is(":checked") ? "addClass" : "removeClass";
            event.preventDefault();
            $(".add-voucher--panel")[method]("is--hidden");
        });
        $("body").on("click", ".table--shipping-costs-trigger", function(event) {
            event.preventDefault();
            var $this = $(this), $next = $this.parent().find(".table--shipping-costs"), method = $next.hasClass("is--hidden") ? "removeClass" : "addClass";
            $next[method]("is--hidden");
        });
        function cartRefresh() {
            var ajaxCartRefresh = window.controller.ajax_cart_refresh, $cartAmount = $(".cart--amount"), $cartQuantity = $(".cart--quantity");
            if (!ajaxCartRefresh.length) {
                return;
            }
            $.publish("plugin/swResponsive/onCartRefresh");
            $.ajax({
                url: ajaxCartRefresh,
                dataType: "json",
                success: function(cart) {
                    if (!cart.amount || isNaN(cart.quantity)) {
                        return;
                    }
                    $cartAmount.html(cart.amount);
                    $cartQuantity.html(cart.quantity).removeClass("is--hidden");
                    if (cart.quantity === 0) {
                        $cartQuantity.addClass("is--hidden");
                    }
                    $.publish("plugin/swResponsive/onCartRefreshSuccess", [ cart ]);
                }
            });
        }
        $.subscribe("plugin/swAddArticle/onAddArticle", cartRefresh);
        $.subscribe("plugin/swCollapseCart/onRemoveArticleFinished", cartRefresh);
    });
})(jQuery, window);

(function($, window) {
    "use strict";
    $.plugin("swInvalidTosJump", {
        defaults: {
            jumpLabelSelector: 'label[for="sAGB"]',
            errorClass: "has--error"
        },
        init: function() {
            var me = this;
            me.$jumpLabel = $(me.opts.jumpLabelSelector);
            me._on(me.$el, "invalid", $.proxy(me.jumpToInvalid, me));
        },
        jumpToInvalid: function() {
            var me = this;
            window.scroll(0, me.$el.offset().top - window.innerHeight / 2);
            me.$jumpLabel.addClass(me.opts.errorClass);
        }
    });
})(jQuery, window);

$.plugin("swNotificationMessageClose", {
    defaults: {
        notificationSelector: ".alert",
        link: ""
    },
    init: function() {
        this.applyDataAttributes();
        this.$alert = this.$el.closest(this.opts.notificationSelector);
        this._on(this.$el, "click", $.proxy(this.closeMessage, this));
    },
    closeMessage: function(event) {
        event.preventDefault();
        $.post(this.opts.link);
        this.$alert.fadeOut();
    }
});

(function($, window, undefined) {
    "use strict";
    $.getCookiePreference = function(cookieName) {
        var cookie = $.getCookie("cookiePreferences"), activeState = false, groupKeys, cookieKeys, cookiePreferences;
        if (!cookie) {
            return activeState;
        }
        cookiePreferences = JSON.parse(cookie);
        groupKeys = Object.keys(cookiePreferences.groups);
        $.each(groupKeys, function(groupIndex, groupKey) {
            if (!cookiePreferences.groups.hasOwnProperty(groupKey)) {
                return;
            }
            cookieKeys = Object.keys(cookiePreferences.groups[groupKey].cookies);
            $.each(cookieKeys, function(cookieIndex, cookieKey) {
                if (!cookiePreferences.groups[groupKey].cookies.hasOwnProperty(cookieKey)) {
                    return;
                }
                if (cookieKey !== cookieName) {
                    return;
                }
                activeState = cookiePreferences.groups[groupKey].cookies[cookieKey].active;
            });
        });
        return activeState;
    };
    $.plugin("swCookieConsentManager", {
        defaults: {
            openClass: "is--open",
            closeModalSelector: ".cookie-consent--close",
            cookieGroupSelector: ".cookie-consent--group",
            cookieGroupNameSelector: ".cookie-consent--group-name",
            cookieGroupToggleInputSelector: ".cookie-consent--group-state-input",
            cookieContainerSelector: ".cookie-consent--cookie",
            cookieNameSelector: ".cookie-consent--cookie-name",
            cookieActiveInputSelector: ".cookie-consent--cookie-state-input",
            cookieActiveInputLabelSelector: ".cookie-consent--cookie-state",
            saveButtonSelector: ".cookie-consent--save-button",
            openConsentManagerButton: "*[data-openConsentManager=true]",
            cookieLabelSelector: ".cookie--label",
            requiredClass: "cookie-consent--required"
        },
        preferences: null,
        isOpened: false,
        preferenceCookieName: "cookiePreferences",
        cookiePermissionPlugin: null,
        init: function() {
            this.applyDataAttributes();
            this.registerEvents();
            this.cookiePermissionPlugin = $('*[data-cookie-permission="true"]').data("plugin_swCookiePermission");
        },
        registerEvents: function() {
            this.$el.find(this.opts.closeModalSelector).on("click", $.proxy(this.onCloseClicked, this));
            this.$el.find(this.opts.cookieGroupToggleInputSelector).on("change", $.proxy(this.onGroupToggleChanged, this));
            this.$el.find(this.opts.cookieActiveInputSelector).on("change", $.proxy(this.onCookieToggleChanged, this));
            this.$el.find(this.opts.saveButtonSelector).on("click", $.proxy(this.onSave, this));
            this.$el.find(this.opts.cookieLabelSelector).on("click", $.proxy(this.onClickCookieName, this));
            this._on(this.opts.openConsentManagerButton, "click", $.proxy(this.openConsentManager, this));
        },
        assignCookieData: function() {
            if (!this.hasSetPreferences()) {
                return;
            }
            this.preferences = JSON.parse($.getCookie(this.preferenceCookieName));
            this.parsePreferences();
        },
        parsePreferences: function() {
            var me = this, groupNames = Object.keys(me.preferences["groups"]), group, groupRequired, cookieNames, cookie;
            $.each(groupNames, function(groupIndex, groupName) {
                group = me.findGroupByName(groupName);
                groupRequired = group.find(me.opts.cookieActiveInputLabelSelector).hasClass(me.opts.requiredClass);
                me.toggleGroup(group, groupRequired || me.preferences["groups"][groupName].active);
                cookieNames = Object.keys(me.preferences["groups"][groupName].cookies);
                $.each(cookieNames, function(cookieIndex, cookieName) {
                    cookie = me.findCookieByName(cookieName);
                    me.toggleCookie(cookie, groupRequired || me.preferences["groups"][groupName].cookies[cookieName].active);
                    me.checkActiveStateForAllCookiesOfGroup(group, groupRequired || me.preferences["groups"][groupName].cookies[cookieName].active);
                });
            });
        },
        findGroupByName: function(groupName) {
            return $(this.opts.cookieGroupNameSelector + "[value=" + groupName + "]").parent();
        },
        findCookieByName: function(cookieName) {
            return $(this.opts.cookieNameSelector + "[value=" + cookieName + "]").parent();
        },
        hasSetPreferences: function() {
            return $.getCookie(this.preferenceCookieName) !== undefined;
        },
        openConsentManager: function() {
            this.open();
            if (window.cookieRemoval !== 2) {
                this.cookiePermissionPlugin.hideElement();
            }
        },
        buildCookiePreferences: function(allTrue) {
            var opts = this.opts, cookieGroups = this.$el.find(this.opts.cookieGroupSelector), preferences = {
                groups: {}
            }, date = new Date(), uniqueNames = [];
            allTrue = allTrue || false;
            cookieGroups.each(function(index, cookieGroup) {
                var groupName = $(cookieGroup).find(opts.cookieGroupNameSelector).val(), isActive = allTrue ? allTrue : $(cookieGroup).find(opts.cookieGroupToggleInputSelector).is(":checked"), cookies = $(cookieGroup).find(opts.cookieContainerSelector);
                uniqueNames.push(groupName);
                if (!preferences["groups"].hasOwnProperty(groupName)) {
                    preferences["groups"][groupName] = {
                        name: groupName,
                        cookies: {}
                    };
                }
                preferences["groups"][groupName].active = isActive;
                cookies.each(function(cookieIndex, cookie) {
                    var cookieName = $(cookie).find(opts.cookieNameSelector).val(), isCookieActive = allTrue ? allTrue : $(cookie).find(opts.cookieActiveInputSelector).is(":checked");
                    uniqueNames.push(cookieName);
                    if (!preferences["groups"][groupName].cookies.hasOwnProperty(cookieName)) {
                        preferences["groups"][groupName].cookies[cookieName] = {
                            name: cookieName
                        };
                    }
                    preferences["groups"][groupName].cookies[cookieName].active = isCookieActive;
                });
            });
            uniqueNames.sort();
            preferences.hash = window.btoa(JSON.stringify(uniqueNames));
            date.setTime(date.getTime() + 180 * 24 * 60 * 60 * 1e3);
            document.cookie = this.preferenceCookieName + "=" + JSON.stringify(preferences) + ";path=" + this.getBasePath() + ";expires=" + date.toGMTString() + ";";
            $.publish("plugin/swCookieConsentManager/onBuildCookiePreferences", [ this, preferences ]);
        },
        onClickCookieName: function(event) {
            var cookieNameEl = $(event.currentTarget), cookieCt = cookieNameEl.parent(this.opts.cookieContainerSelector), inputEl = cookieCt.find(this.opts.cookieActiveInputSelector);
            inputEl.click();
        },
        toggleAllCookiesFromGroup: function(cookies, active) {
            var me = this;
            cookies.each(function(cookieIndex, cookie) {
                me.toggleCookie($(cookie), active);
            });
        },
        checkActiveStateForAllCookiesOfGroup: function(group, cookieActiveStatus) {
            var opts = this.opts, cookies = group.find(this.opts.cookieContainerSelector), allOfSame = true, groupInput = group.find(this.opts.cookieGroupToggleInputSelector), cookieInput;
            cookies.each(function(cookieIndex, cookie) {
                cookie = $(cookie);
                cookieInput = cookie.find(opts.cookieActiveInputSelector);
                if (cookieInput.is(":checked") !== cookieActiveStatus) {
                    allOfSame = false;
                }
            });
            if (allOfSame) {
                groupInput.prop("indeterminate", false);
                this.toggleGroup(group, cookieActiveStatus);
            } else {
                groupInput.prop("indeterminate", true);
            }
        },
        toggleGroup: function(group, activeStatus) {
            group.find(this.opts.cookieGroupToggleInputSelector).prop("checked", activeStatus);
        },
        toggleCookie: function(cookie, activeStatus) {
            cookie.find(this.opts.cookieActiveInputSelector).prop("checked", activeStatus);
        },
        onSave: function() {
            this.buildCookiePreferences();
            this.close();
            this.removeDeclinedAndAcceptedCookie();
            $.overlay.close();
            $.publish("plugin/swCookieConsentManager/onSave", [ this ]);
        },
        onGroupToggleChanged: function(event) {
            var opts = this.opts, groupToggle = $(event.currentTarget), group = groupToggle.parents(opts.cookieGroupSelector), cookies = group.find(opts.cookieContainerSelector);
            this.toggleAllCookiesFromGroup(cookies, groupToggle.is(":checked"));
            $.publish("plugin/swCookieConsentManager/onGroupToggleChanged", [ this, groupToggle ]);
        },
        onCookieToggleChanged: function(event) {
            var opts = this.opts, cookieToggle = $(event.currentTarget), cookie = cookieToggle.parents(opts.cookieContainerSelector), group = cookie.parents(opts.cookieGroupSelector);
            this.checkActiveStateForAllCookiesOfGroup(group, cookieToggle.is(":checked"));
            $.publish("plugin/swCookieConsentManager/onCookieToggleChanged", [ this, cookieToggle ]);
        },
        onCloseClicked: function() {
            $.overlay.close();
            this.close();
        },
        open: function() {
            if (this.isOpened) {
                return;
            }
            this.assignCookieData();
            this.$el.show();
            this.$el.addClass(this.opts.openClass);
            this.isOpened = true;
            $.overlay.open({
                onClose: $.proxy(this.close, this)
            });
        },
        close: function() {
            if (!this.isOpened) {
                return;
            }
            this.$el.removeClass(this.opts.openClass);
            this.isOpened = false;
        },
        removeDeclinedAndAcceptedCookie: function() {
            $.removeCookie("cookieDeclined");
            $.removeCookie("allowCookie");
            window.localStorage.removeItem(this.cookiePermissionPlugin.storageKey);
        },
        getBasePath: function() {
            return window.csrfConfig.basePath || "/";
        }
    });
})(jQuery, window);

function openCookieConsentManager() {
    var plugin = $('*[data-cookie-consent-manager="true"]').data("plugin_swCookieConsentManager");
    plugin.openConsentManager();
}