function _defineProperty(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function asyncGeneratorStep(e, t, r, n, i, a, o) {
    try {
        var s = e[a](o),
            c = s.value;
    } catch (d) {
        return void r(d);
    }
    s.done ? t(c) : Promise.resolve(c).then(n, i);
}
function _asyncToGenerator(e) {
    return function() {
        var t = this,
            r = arguments;
        return new Promise(function(n, i) {
            var a = e.apply(t, r);
            function o(e) {
                asyncGeneratorStep(a, n, i, o, s, 'next', e);
            }
            function s(e) {
                asyncGeneratorStep(a, n, i, o, s, 'throw', e);
            }
            o(void 0);
        });
    };
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function _createClass(e, t, r) {
    return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    );
}
(window.webpackJsonp = window.webpackJsonp || []).push([
    [54],
    {
        EpFf: function(e, t, r) {
            'use strict';
            r.r(t),
                r.d(t, 'ion_modal', function() {
                    return y;
                });
            var n = r('imtE'),
                i = r('AfW+'),
                a = r('aiEM'),
                o = r('1ym9'),
                s = r('0AIG'),
                c = r('AzGJ'),
                d = (r('kBU6'), r('EV1M'), r('7TZ+')),
                l = r('Dl6n'),
                m = r('m9yc'),
                p = r('9qPz'),
                u = function(e, t) {
                    var r = Object(o.a)()
                            .addElement(e.querySelector('ion-backdrop'))
                            .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                            .beforeStyles({ 'pointer-events': 'none' })
                            .afterClearStyles(['pointer-events']),
                        n = Object(o.a)()
                            .addElement(e.querySelector('.modal-wrapper'))
                            .beforeStyles({ opacity: 1 })
                            .fromTo(
                                'transform',
                                'translateY(100vh)',
                                'translateY(0vh)'
                            ),
                        i = Object(o.a)()
                            .addElement(e)
                            .easing('cubic-bezier(0.32,0.72,0,1)')
                            .duration(500)
                            .beforeAddClass('show-modal')
                            .addAnimation([r, n]);
                    if (t) {
                        var a = CSS.supports('width', 'max(0px, 1px)')
                                ? 'max(30px, var(--ion-safe-area-top))'
                                : '30px',
                            s = document.body,
                            c = 'translateY('.concat(
                                'ION-MODAL' === t.tagName &&
                                    void 0 !== t.presentingElement
                                    ? '-10px'
                                    : a,
                                ') scale(0.93)'
                            ),
                            d = Object(o.a)()
                                .beforeStyles({
                                    transform: 'translateY(0)',
                                    'transform-origin': 'top center',
                                    overflow: 'hidden',
                                })
                                .afterStyles({ transform: c })
                                .beforeAddWrite(function() {
                                    return s.style.setProperty(
                                        'background-color',
                                        'black'
                                    );
                                })
                                .addElement(t)
                                .keyframes([
                                    {
                                        offset: 0,
                                        filter: 'contrast(1)',
                                        transform: 'translateY(0px) scale(1)',
                                        borderRadius: '0px',
                                    },
                                    {
                                        offset: 1,
                                        filter: 'contrast(0.85)',
                                        transform: c,
                                        borderRadius: '10px 10px 0 0',
                                    },
                                ]);
                        i.addAnimation(d);
                    }
                    return i;
                },
                h = function(e, t) {
                    var r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : 500,
                        n = Object(o.a)()
                            .addElement(e.querySelector('ion-backdrop'))
                            .fromTo('opacity', 'var(--backdrop-opacity)', 0),
                        i = Object(o.a)()
                            .addElement(e.querySelector('.modal-wrapper'))
                            .beforeStyles({ opacity: 1 })
                            .fromTo(
                                'transform',
                                'translateY(0vh)',
                                'translateY(100vh)'
                            ),
                        a = Object(o.a)()
                            .addElement(e)
                            .easing('cubic-bezier(0.32,0.72,0,1)')
                            .duration(r)
                            .addAnimation([n, i]);
                    if (t) {
                        var s = CSS.supports('width', 'max(0px, 1px)')
                                ? 'max(30px, var(--ion-safe-area-top))'
                                : '30px',
                            c =
                                'ION-MODAL' === t.tagName &&
                                void 0 !== t.presentingElement
                                    ? '-10px'
                                    : s,
                            d = document.body,
                            l = 0.93,
                            m = Object(o.a)()
                                .addElement(t)
                                .beforeClearStyles(['transform'])
                                .afterClearStyles(['transform'])
                                .onFinish(function(e) {
                                    1 === e &&
                                        (t.style.setProperty('overflow', ''),
                                        Array.from(
                                            d.querySelectorAll('ion-modal')
                                        ).filter(function(e) {
                                            return (
                                                void 0 !== e.presentingElement
                                            );
                                        }).length <= 1 &&
                                            d.style.setProperty(
                                                'background-color',
                                                ''
                                            ));
                                })
                                .keyframes([
                                    {
                                        offset: 0,
                                        filter: 'contrast(0.85)',
                                        transform: 'translateY('
                                            .concat(c, ') scale(')
                                            .concat(l, ')'),
                                        borderRadius: '10px 10px 0 0',
                                    },
                                    {
                                        offset: 1,
                                        filter: 'contrast(1)',
                                        transform: 'translateY(0px) scale(1)',
                                        borderRadius: '0px',
                                    },
                                ]);
                        a.addAnimation(m);
                    }
                    return a;
                },
                f = function(e) {
                    var t = Object(o.a)(),
                        r = Object(o.a)(),
                        n = Object(o.a)();
                    return (
                        r
                            .addElement(e.querySelector('ion-backdrop'))
                            .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                            .beforeStyles({ 'pointer-events': 'none' })
                            .afterClearStyles(['pointer-events']),
                        n
                            .addElement(e.querySelector('.modal-wrapper'))
                            .keyframes([
                                {
                                    offset: 0,
                                    opacity: 0.01,
                                    transform: 'translateY(40px)',
                                },
                                {
                                    offset: 1,
                                    opacity: 1,
                                    transform: 'translateY(0px)',
                                },
                            ]),
                        t
                            .addElement(e)
                            .easing('cubic-bezier(0.36,0.66,0.04,1)')
                            .duration(280)
                            .beforeAddClass('show-modal')
                            .addAnimation([r, n])
                    );
                },
                b = function(e) {
                    var t = Object(o.a)(),
                        r = Object(o.a)(),
                        n = Object(o.a)(),
                        i = e.querySelector('.modal-wrapper');
                    return (
                        r
                            .addElement(e.querySelector('ion-backdrop'))
                            .fromTo('opacity', 'var(--backdrop-opacity)', 0),
                        n.addElement(i).keyframes([
                            {
                                offset: 0,
                                opacity: 0.99,
                                transform: 'translateY(0px)',
                            },
                            {
                                offset: 1,
                                opacity: 0,
                                transform: 'translateY(40px)',
                            },
                        ]),
                        t
                            .addElement(e)
                            .easing('cubic-bezier(0.47,0,0.745,0.715)')
                            .duration(200)
                            .addAnimation([r, n])
                    );
                },
                y = (function() {
                    function e(t) {
                        var r = this;
                        _classCallCheck(this, e),
                            Object(n.k)(this, t),
                            (this.gestureAnimationDismissing = !1),
                            (this.presented = !1),
                            (this.mode = Object(n.d)(this)),
                            (this.keyboardClose = !0),
                            (this.backdropDismiss = !0),
                            (this.showBackdrop = !0),
                            (this.animated = !0),
                            (this.swipeToClose = !1),
                            (this.onBackdropTap = function() {
                                r.dismiss(void 0, d.a);
                            }),
                            (this.onDismiss = function(e) {
                                e.stopPropagation(),
                                    e.preventDefault(),
                                    r.dismiss();
                            }),
                            (this.onLifecycle = function(e) {
                                var t = r.usersElement,
                                    n = v[e.type];
                                if (t && n) {
                                    var i = new CustomEvent(n, {
                                        bubbles: !1,
                                        cancelable: !1,
                                        detail: e.detail,
                                    });
                                    t.dispatchEvent(i);
                                }
                            }),
                            Object(d.e)(this.el),
                            (this.didPresent = Object(n.e)(
                                this,
                                'ionModalDidPresent',
                                7
                            )),
                            (this.willPresent = Object(n.e)(
                                this,
                                'ionModalWillPresent',
                                7
                            )),
                            (this.willDismiss = Object(n.e)(
                                this,
                                'ionModalWillDismiss',
                                7
                            )),
                            (this.didDismiss = Object(n.e)(
                                this,
                                'ionModalDidDismiss',
                                7
                            ));
                    }
                    var t, r;
                    return (
                        _createClass(
                            e,
                            [
                                {
                                    key: 'present',
                                    value:
                                        ((r = _asyncToGenerator(
                                            regeneratorRuntime.mark(
                                                function e() {
                                                    var t,
                                                        r,
                                                        o,
                                                        l,
                                                        b,
                                                        y = this;
                                                    return regeneratorRuntime.wrap(
                                                        function(e) {
                                                            for (;;)
                                                                switch (
                                                                    (e.prev =
                                                                        e.next)
                                                                ) {
                                                                    case 0:
                                                                        if (
                                                                            !this
                                                                                .presented
                                                                        ) {
                                                                            e.next = 2;
                                                                            break;
                                                                        }
                                                                        return e.abrupt(
                                                                            'return'
                                                                        );
                                                                    case 2:
                                                                        if (
                                                                            (t = this.el.querySelector(
                                                                                '.modal-wrapper'
                                                                            ))
                                                                        ) {
                                                                            e.next = 5;
                                                                            break;
                                                                        }
                                                                        throw new Error(
                                                                            'container is undefined'
                                                                        );
                                                                    case 5:
                                                                        return (
                                                                            (r = Object.assign(
                                                                                Object.assign(
                                                                                    {},
                                                                                    this
                                                                                        .componentProps
                                                                                ),
                                                                                {
                                                                                    modal: this
                                                                                        .el,
                                                                                }
                                                                            )),
                                                                            (e.next = 8),
                                                                            Object(
                                                                                m.a
                                                                            )(
                                                                                this
                                                                                    .delegate,
                                                                                t,
                                                                                this
                                                                                    .component,
                                                                                [
                                                                                    'ion-page',
                                                                                ],
                                                                                r
                                                                            )
                                                                        );
                                                                    case 8:
                                                                        return (
                                                                            (this.usersElement =
                                                                                e.sent),
                                                                            (e.next = 11),
                                                                            Object(
                                                                                p.a
                                                                            )(
                                                                                this
                                                                                    .usersElement
                                                                            )
                                                                        );
                                                                    case 11:
                                                                        return (
                                                                            (e.next = 13),
                                                                            Object(
                                                                                d.f
                                                                            )(
                                                                                this,
                                                                                'modalEnter',
                                                                                u,
                                                                                f,
                                                                                this
                                                                                    .presentingElement
                                                                            )
                                                                        );
                                                                    case 13:
                                                                        (o = Object(
                                                                            n.d
                                                                        )(
                                                                            this
                                                                        )),
                                                                            this
                                                                                .swipeToClose &&
                                                                                'ios' ===
                                                                                    o &&
                                                                                ((l =
                                                                                    this
                                                                                        .leaveAnimation ||
                                                                                    i.b.get(
                                                                                        'modalLeave',
                                                                                        h
                                                                                    )),
                                                                                (b = this.animation = l(
                                                                                    this
                                                                                        .el,
                                                                                    this
                                                                                        .presentingElement
                                                                                )),
                                                                                (this.gesture = (function(
                                                                                    e,
                                                                                    t,
                                                                                    r
                                                                                ) {
                                                                                    var n =
                                                                                            e.offsetHeight,
                                                                                        i = !1,
                                                                                        o = Object(
                                                                                            c.createGesture
                                                                                        )(
                                                                                            {
                                                                                                el: e,
                                                                                                gestureName:
                                                                                                    'modalSwipeToClose',
                                                                                                gesturePriority: 40,
                                                                                                direction:
                                                                                                    'y',
                                                                                                threshold: 10,
                                                                                                canStart: function(
                                                                                                    e
                                                                                                ) {
                                                                                                    var t =
                                                                                                        e
                                                                                                            .event
                                                                                                            .target;
                                                                                                    return (
                                                                                                        null ===
                                                                                                            t ||
                                                                                                        !t.closest ||
                                                                                                        null ===
                                                                                                            t.closest(
                                                                                                                'ion-content'
                                                                                                            )
                                                                                                    );
                                                                                                },
                                                                                                onStart: function() {
                                                                                                    t.progressStart(
                                                                                                        !0,
                                                                                                        i
                                                                                                            ? 1
                                                                                                            : 0
                                                                                                    );
                                                                                                },
                                                                                                onMove: function(
                                                                                                    e
                                                                                                ) {
                                                                                                    var r =
                                                                                                        e.deltaY /
                                                                                                        n;
                                                                                                    r <
                                                                                                        0 ||
                                                                                                        t.progressStep(
                                                                                                            r
                                                                                                        );
                                                                                                },
                                                                                                onEnd: function(
                                                                                                    e
                                                                                                ) {
                                                                                                    var r =
                                                                                                            e.velocityY,
                                                                                                        c =
                                                                                                            e.deltaY /
                                                                                                            n;
                                                                                                    if (
                                                                                                        !(
                                                                                                            c <
                                                                                                            0
                                                                                                        )
                                                                                                    ) {
                                                                                                        var d =
                                                                                                                (e.deltaY +
                                                                                                                    1e3 *
                                                                                                                        r) /
                                                                                                                    n >=
                                                                                                                0.5,
                                                                                                            l = d
                                                                                                                ? -0.001
                                                                                                                : 0.001;
                                                                                                        d
                                                                                                            ? (t.easing(
                                                                                                                  'cubic-bezier(0.32, 0.72, 0, 1)'
                                                                                                              ),
                                                                                                              (l += Object(
                                                                                                                  s.a
                                                                                                              )(
                                                                                                                  [
                                                                                                                      0,
                                                                                                                      0,
                                                                                                                  ],
                                                                                                                  [
                                                                                                                      0.32,
                                                                                                                      0.72,
                                                                                                                  ],
                                                                                                                  [
                                                                                                                      0,
                                                                                                                      1,
                                                                                                                  ],
                                                                                                                  [
                                                                                                                      1,
                                                                                                                      1,
                                                                                                                  ],
                                                                                                                  c
                                                                                                              )[0]))
                                                                                                            : (t.easing(
                                                                                                                  'cubic-bezier(1, 0, 0.68, 0.28)'
                                                                                                              ),
                                                                                                              (l += Object(
                                                                                                                  s.a
                                                                                                              )(
                                                                                                                  [
                                                                                                                      0,
                                                                                                                      0,
                                                                                                                  ],
                                                                                                                  [
                                                                                                                      1,
                                                                                                                      0,
                                                                                                                  ],
                                                                                                                  [
                                                                                                                      0.68,
                                                                                                                      0.28,
                                                                                                                  ],
                                                                                                                  [
                                                                                                                      1,
                                                                                                                      1,
                                                                                                                  ],
                                                                                                                  c
                                                                                                              )[0]));
                                                                                                        var m = (function(
                                                                                                            e,
                                                                                                            t
                                                                                                        ) {
                                                                                                            return Object(
                                                                                                                a.c
                                                                                                            )(
                                                                                                                400,
                                                                                                                e /
                                                                                                                    Math.abs(
                                                                                                                        1.1 *
                                                                                                                            t
                                                                                                                    ),
                                                                                                                500
                                                                                                            );
                                                                                                        })(
                                                                                                            d
                                                                                                                ? c *
                                                                                                                      n
                                                                                                                : (1 -
                                                                                                                      c) *
                                                                                                                      n,
                                                                                                            r
                                                                                                        );
                                                                                                        (i = d),
                                                                                                            o.enable(
                                                                                                                !1
                                                                                                            ),
                                                                                                            t
                                                                                                                .onFinish(
                                                                                                                    function() {
                                                                                                                        d ||
                                                                                                                            o.enable(
                                                                                                                                !0
                                                                                                                            );
                                                                                                                    }
                                                                                                                )
                                                                                                                .progressEnd(
                                                                                                                    d
                                                                                                                        ? 1
                                                                                                                        : 0,
                                                                                                                    l,
                                                                                                                    m
                                                                                                                ),
                                                                                                            d &&
                                                                                                                ((y.gestureAnimationDismissing = !0),
                                                                                                                y.animation.onFinish(
                                                                                                                    _asyncToGenerator(
                                                                                                                        regeneratorRuntime.mark(
                                                                                                                            function e() {
                                                                                                                                return regeneratorRuntime.wrap(
                                                                                                                                    function(
                                                                                                                                        e
                                                                                                                                    ) {
                                                                                                                                        for (;;)
                                                                                                                                            switch (
                                                                                                                                                (e.prev =
                                                                                                                                                    e.next)
                                                                                                                                            ) {
                                                                                                                                                case 0:
                                                                                                                                                    return (
                                                                                                                                                        (e.next = 2),
                                                                                                                                                        y.dismiss(
                                                                                                                                                            void 0,
                                                                                                                                                            'gesture'
                                                                                                                                                        )
                                                                                                                                                    );
                                                                                                                                                case 2:
                                                                                                                                                    y.gestureAnimationDismissing = !1;
                                                                                                                                                case 3:
                                                                                                                                                case 'end':
                                                                                                                                                    return e.stop();
                                                                                                                                            }
                                                                                                                                    },
                                                                                                                                    e
                                                                                                                                );
                                                                                                                            }
                                                                                                                        )
                                                                                                                    )
                                                                                                                ));
                                                                                                    }
                                                                                                },
                                                                                            }
                                                                                        );
                                                                                    return o;
                                                                                })(
                                                                                    this
                                                                                        .el,
                                                                                    b
                                                                                )),
                                                                                this.gesture.enable(
                                                                                    !0
                                                                                ));
                                                                    case 15:
                                                                    case 'end':
                                                                        return e.stop();
                                                                }
                                                        },
                                                        e,
                                                        this
                                                    );
                                                }
                                            )
                                        )),
                                        function() {
                                            return r.apply(this, arguments);
                                        }),
                                },
                                {
                                    key: 'dismiss',
                                    value:
                                        ((t = _asyncToGenerator(
                                            regeneratorRuntime.mark(function e(
                                                t,
                                                r
                                            ) {
                                                var n, i;
                                                return regeneratorRuntime.wrap(
                                                    function(e) {
                                                        for (;;)
                                                            switch (
                                                                (e.prev =
                                                                    e.next)
                                                            ) {
                                                                case 0:
                                                                    if (
                                                                        !this
                                                                            .gestureAnimationDismissing ||
                                                                        'gesture' ===
                                                                            r
                                                                    ) {
                                                                        e.next = 2;
                                                                        break;
                                                                    }
                                                                    return e.abrupt(
                                                                        'return',
                                                                        !1
                                                                    );
                                                                case 2:
                                                                    return (
                                                                        (n =
                                                                            d.i.get(
                                                                                this
                                                                            ) ||
                                                                            []),
                                                                        (e.next = 5),
                                                                        Object(
                                                                            d.g
                                                                        )(
                                                                            this,
                                                                            t,
                                                                            r,
                                                                            'modalLeave',
                                                                            h,
                                                                            b,
                                                                            this
                                                                                .presentingElement
                                                                        )
                                                                    );
                                                                case 5:
                                                                    if (
                                                                        ((i =
                                                                            e.sent),
                                                                        (e.t0 = i),
                                                                        !e.t0)
                                                                    ) {
                                                                        e.next = 12;
                                                                        break;
                                                                    }
                                                                    return (
                                                                        (e.next = 10),
                                                                        Object(
                                                                            m.b
                                                                        )(
                                                                            this
                                                                                .delegate,
                                                                            this
                                                                                .usersElement
                                                                        )
                                                                    );
                                                                case 10:
                                                                    this
                                                                        .animation &&
                                                                        this.animation.destroy(),
                                                                        n.forEach(
                                                                            function(
                                                                                e
                                                                            ) {
                                                                                return e.destroy();
                                                                            }
                                                                        );
                                                                case 12:
                                                                    return (
                                                                        (this.animation = void 0),
                                                                        e.abrupt(
                                                                            'return',
                                                                            i
                                                                        )
                                                                    );
                                                                case 14:
                                                                case 'end':
                                                                    return e.stop();
                                                            }
                                                    },
                                                    e,
                                                    this
                                                );
                                            })
                                        )),
                                        function(e, r) {
                                            return t.apply(this, arguments);
                                        }),
                                },
                                {
                                    key: 'onDidDismiss',
                                    value: function() {
                                        return Object(d.h)(
                                            this.el,
                                            'ionModalDidDismiss'
                                        );
                                    },
                                },
                                {
                                    key: 'onWillDismiss',
                                    value: function() {
                                        return Object(d.h)(
                                            this.el,
                                            'ionModalWillDismiss'
                                        );
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var e,
                                            t = Object(n.d)(this);
                                        return Object(n.i)(
                                            n.a,
                                            {
                                                'no-router': !0,
                                                'aria-modal': 'true',
                                                class: Object.assign(
                                                    ((e = {}),
                                                    _defineProperty(e, t, !0),
                                                    _defineProperty(
                                                        e,
                                                        'modal-card',
                                                        void 0 !==
                                                            this
                                                                .presentingElement &&
                                                            'ios' === t
                                                    ),
                                                    e),
                                                    Object(l.b)(this.cssClass)
                                                ),
                                                style: {
                                                    zIndex: ''.concat(
                                                        2e4 + this.overlayIndex
                                                    ),
                                                },
                                                onIonBackdropTap: this
                                                    .onBackdropTap,
                                                onIonDismiss: this.onDismiss,
                                                onIonModalDidPresent: this
                                                    .onLifecycle,
                                                onIonModalWillPresent: this
                                                    .onLifecycle,
                                                onIonModalWillDismiss: this
                                                    .onLifecycle,
                                                onIonModalDidDismiss: this
                                                    .onLifecycle,
                                            },
                                            Object(n.i)('ion-backdrop', {
                                                visible: this.showBackdrop,
                                                tappable: this.backdropDismiss,
                                            }),
                                            Object(n.i)('div', {
                                                role: 'dialog',
                                                class: 'modal-wrapper',
                                            })
                                        );
                                    },
                                },
                                {
                                    key: 'el',
                                    get: function() {
                                        return Object(n.f)(this);
                                    },
                                },
                            ],
                            [
                                {
                                    key: 'style',
                                    get: function() {
                                        return '.sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h{--backdrop-opacity:var(--ion-backdrop-opacity,0.32)}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}';
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })(),
                v = {
                    ionModalDidPresent: 'ionViewDidEnter',
                    ionModalWillPresent: 'ionViewWillEnter',
                    ionModalWillDismiss: 'ionViewWillLeave',
                    ionModalDidDismiss: 'ionViewDidLeave',
                };
        },
    },
]);
