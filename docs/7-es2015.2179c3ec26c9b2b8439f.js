(window.webpackJsonp = window.webpackJsonp || []).push([
    [7],
    {
        a7BO: function(e, t, o) {
            'use strict';
            o.r(t),
                o.d(t, 'startTapClick', function() {
                    return i;
                });
            var n = o('aiEM');
            const i = (e) => {
                    let t,
                        o,
                        i,
                        v,
                        p = 10 * -u,
                        f = 0;
                    const L =
                            e.getBoolean('animated', !0) &&
                            e.getBoolean('rippleEffect', !0),
                        m = new WeakMap(),
                        w = (e) => {
                            (p = Object(n.i)(e)), b(e);
                        },
                        E = () => {
                            clearTimeout(v),
                                (v = void 0),
                                o && (T(!1), (o = void 0));
                        },
                        h = (e) => {
                            o ||
                                (void 0 !== t && null !== t.parentElement) ||
                                ((t = void 0), g(s(e), e));
                        },
                        b = (e) => {
                            g(void 0, e);
                        },
                        g = (e, t) => {
                            if (e && e === o) return;
                            clearTimeout(v), (v = void 0);
                            const { x: i, y: s } = Object(n.j)(t);
                            if (o) {
                                if (m.has(o)) throw new Error('internal error');
                                o.classList.contains(r) || j(o, i, s), T(!0);
                            }
                            if (e) {
                                const t = m.get(e);
                                t && (clearTimeout(t), m.delete(e));
                                const o = a(e) ? 0 : d;
                                e.classList.remove(r),
                                    (v = setTimeout(() => {
                                        j(e, i, s), (v = void 0);
                                    }, o));
                            }
                            o = e;
                        },
                        j = (e, t, o) => {
                            (f = Date.now()), e.classList.add(r);
                            const n = L && c(e);
                            n && n.addRipple && (O(), (i = n.addRipple(t, o)));
                        },
                        O = () => {
                            void 0 !== i && (i.then((e) => e()), (i = void 0));
                        },
                        T = (e) => {
                            O();
                            const t = o;
                            if (!t) return;
                            const n = l - Date.now() + f;
                            if (e && n > 0 && !a(t)) {
                                const e = setTimeout(() => {
                                    t.classList.remove(r), m.delete(t);
                                }, l);
                                m.set(t, e);
                            } else t.classList.remove(r);
                        },
                        S = document;
                    S.addEventListener('ionScrollStart', (e) => {
                        (t = e.target), E();
                    }),
                        S.addEventListener('ionScrollEnd', () => {
                            t = void 0;
                        }),
                        S.addEventListener('ionGestureCaptured', E),
                        S.addEventListener(
                            'touchstart',
                            (e) => {
                                (p = Object(n.i)(e)), h(e);
                            },
                            !0
                        ),
                        S.addEventListener('touchcancel', w, !0),
                        S.addEventListener('touchend', w, !0),
                        S.addEventListener(
                            'mousedown',
                            (e) => {
                                const t = Object(n.i)(e) - u;
                                p < t && h(e);
                            },
                            !0
                        ),
                        S.addEventListener(
                            'mouseup',
                            (e) => {
                                const t = Object(n.i)(e) - u;
                                p < t && b(e);
                            },
                            !0
                        );
                },
                s = (e) => {
                    if (!e.composedPath)
                        return e.target.closest('.ion-activatable');
                    {
                        const t = e.composedPath();
                        for (let e = 0; e < t.length - 2; e++) {
                            const o = t[e];
                            if (
                                o.classList &&
                                o.classList.contains('ion-activatable')
                            )
                                return o;
                        }
                    }
                },
                a = (e) => e.classList.contains('ion-activatable-instant'),
                c = (e) => {
                    if (e.shadowRoot) {
                        const t = e.shadowRoot.querySelector(
                            'ion-ripple-effect'
                        );
                        if (t) return t;
                    }
                    return e.querySelector('ion-ripple-effect');
                },
                r = 'ion-activated',
                d = 200,
                l = 200,
                u = 2500;
        },
    },
]);
