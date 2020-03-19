function _defineProperty(e, n, i) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[n] = i),
        e
    );
}
function asyncGeneratorStep(e, n, i, t, a, o, r) {
    try {
        var s = e[o](r),
            c = s.value;
    } catch (d) {
        return void i(d);
    }
    s.done ? n(c) : Promise.resolve(c).then(t, a);
}
function _asyncToGenerator(e) {
    return function() {
        var n = this,
            i = arguments;
        return new Promise(function(t, a) {
            var o = e.apply(n, i);
            function r(e) {
                asyncGeneratorStep(o, t, a, r, s, 'next', e);
            }
            function s(e) {
                asyncGeneratorStep(o, t, a, r, s, 'throw', e);
            }
            r(void 0);
        });
    };
}
function _classCallCheck(e, n) {
    if (!(e instanceof n))
        throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, n) {
    for (var i = 0; i < n.length; i++) {
        var t = n[i];
        (t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            'value' in t && (t.writable = !0),
            Object.defineProperty(e, t.key, t);
    }
}
function _createClass(e, n, i) {
    return (
        n && _defineProperties(e.prototype, n), i && _defineProperties(e, i), e
    );
}
(window.webpackJsonp = window.webpackJsonp || []).push([
    [50],
    {
        N3W9: function(e, n, i) {
            'use strict';
            i.r(n),
                i.d(n, 'ion_loading', function() {
                    return u;
                });
            var t = i('imtE'),
                a = i('AfW+'),
                o = (i('aiEM'), i('1ym9')),
                r = (i('EV1M'), i('7TZ+')),
                s = i('Dl6n'),
                c = i('YtD4'),
                d = function(e) {
                    var n = Object(o.a)(),
                        i = Object(o.a)(),
                        t = Object(o.a)();
                    return (
                        i
                            .addElement(e.querySelector('ion-backdrop'))
                            .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                            .beforeStyles({ 'pointer-events': 'none' })
                            .afterClearStyles(['pointer-events']),
                        t
                            .addElement(e.querySelector('.loading-wrapper'))
                            .keyframes([
                                {
                                    offset: 0,
                                    opacity: 0.01,
                                    transform: 'scale(1.1)',
                                },
                                {
                                    offset: 1,
                                    opacity: 1,
                                    transform: 'scale(1)',
                                },
                            ]),
                        n
                            .addElement(e)
                            .easing('ease-in-out')
                            .duration(200)
                            .addAnimation([i, t])
                    );
                },
                l = function(e) {
                    var n = Object(o.a)(),
                        i = Object(o.a)(),
                        t = Object(o.a)();
                    return (
                        i
                            .addElement(e.querySelector('ion-backdrop'))
                            .fromTo('opacity', 'var(--backdrop-opacity)', 0),
                        t
                            .addElement(e.querySelector('.loading-wrapper'))
                            .keyframes([
                                {
                                    offset: 0,
                                    opacity: 0.99,
                                    transform: 'scale(1)',
                                },
                                {
                                    offset: 1,
                                    opacity: 0,
                                    transform: 'scale(0.9)',
                                },
                            ]),
                        n
                            .addElement(e)
                            .easing('ease-in-out')
                            .duration(200)
                            .addAnimation([i, t])
                    );
                },
                p = function(e) {
                    var n = Object(o.a)(),
                        i = Object(o.a)(),
                        t = Object(o.a)();
                    return (
                        i
                            .addElement(e.querySelector('ion-backdrop'))
                            .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                            .beforeStyles({ 'pointer-events': 'none' })
                            .afterClearStyles(['pointer-events']),
                        t
                            .addElement(e.querySelector('.loading-wrapper'))
                            .keyframes([
                                {
                                    offset: 0,
                                    opacity: 0.01,
                                    transform: 'scale(1.1)',
                                },
                                {
                                    offset: 1,
                                    opacity: 1,
                                    transform: 'scale(1)',
                                },
                            ]),
                        n
                            .addElement(e)
                            .easing('ease-in-out')
                            .duration(200)
                            .addAnimation([i, t])
                    );
                },
                m = function(e) {
                    var n = Object(o.a)(),
                        i = Object(o.a)(),
                        t = Object(o.a)();
                    return (
                        i
                            .addElement(e.querySelector('ion-backdrop'))
                            .fromTo('opacity', 'var(--backdrop-opacity)', 0),
                        t
                            .addElement(e.querySelector('.loading-wrapper'))
                            .keyframes([
                                {
                                    offset: 0,
                                    opacity: 0.99,
                                    transform: 'scale(1)',
                                },
                                {
                                    offset: 1,
                                    opacity: 0,
                                    transform: 'scale(0.9)',
                                },
                            ]),
                        n
                            .addElement(e)
                            .easing('ease-in-out')
                            .duration(200)
                            .addAnimation([i, t])
                    );
                },
                u = (function() {
                    function e(n) {
                        var i = this;
                        _classCallCheck(this, e),
                            Object(t.k)(this, n),
                            (this.presented = !1),
                            (this.mode = Object(t.d)(this)),
                            (this.keyboardClose = !0),
                            (this.duration = 0),
                            (this.backdropDismiss = !1),
                            (this.showBackdrop = !0),
                            (this.translucent = !1),
                            (this.animated = !0),
                            (this.onBackdropTap = function() {
                                i.dismiss(void 0, r.a);
                            }),
                            Object(r.e)(this.el),
                            (this.didPresent = Object(t.e)(
                                this,
                                'ionLoadingDidPresent',
                                7
                            )),
                            (this.willPresent = Object(t.e)(
                                this,
                                'ionLoadingWillPresent',
                                7
                            )),
                            (this.willDismiss = Object(t.e)(
                                this,
                                'ionLoadingWillDismiss',
                                7
                            )),
                            (this.didDismiss = Object(t.e)(
                                this,
                                'ionLoadingDidDismiss',
                                7
                            ));
                    }
                    var n;
                    return (
                        _createClass(
                            e,
                            [
                                {
                                    key: 'componentWillLoad',
                                    value: function() {
                                        if (void 0 === this.spinner) {
                                            var e = Object(t.d)(this);
                                            this.spinner = a.b.get(
                                                'loadingSpinner',
                                                a.b.get(
                                                    'spinner',
                                                    'ios' === e
                                                        ? 'lines'
                                                        : 'crescent'
                                                )
                                            );
                                        }
                                    },
                                },
                                {
                                    key: 'present',
                                    value:
                                        ((n = _asyncToGenerator(
                                            regeneratorRuntime.mark(
                                                function e() {
                                                    var n = this;
                                                    return regeneratorRuntime.wrap(
                                                        function(e) {
                                                            for (;;)
                                                                switch (
                                                                    (e.prev =
                                                                        e.next)
                                                                ) {
                                                                    case 0:
                                                                        return (
                                                                            (e.next = 2),
                                                                            Object(
                                                                                r.f
                                                                            )(
                                                                                this,
                                                                                'loadingEnter',
                                                                                d,
                                                                                p,
                                                                                void 0
                                                                            )
                                                                        );
                                                                    case 2:
                                                                        this
                                                                            .duration >
                                                                            0 &&
                                                                            (this.durationTimeout = setTimeout(
                                                                                function() {
                                                                                    return n.dismiss();
                                                                                },
                                                                                this
                                                                                    .duration +
                                                                                    10
                                                                            ));
                                                                    case 3:
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
                                            return n.apply(this, arguments);
                                        }),
                                },
                                {
                                    key: 'dismiss',
                                    value: function(e, n) {
                                        return (
                                            this.durationTimeout &&
                                                clearTimeout(
                                                    this.durationTimeout
                                                ),
                                            Object(r.g)(
                                                this,
                                                e,
                                                n,
                                                'loadingLeave',
                                                l,
                                                m
                                            )
                                        );
                                    },
                                },
                                {
                                    key: 'onDidDismiss',
                                    value: function() {
                                        return Object(r.h)(
                                            this.el,
                                            'ionLoadingDidDismiss'
                                        );
                                    },
                                },
                                {
                                    key: 'onWillDismiss',
                                    value: function() {
                                        return Object(r.h)(
                                            this.el,
                                            'ionLoadingWillDismiss'
                                        );
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var e,
                                            n = this.message,
                                            i = this.spinner,
                                            a = Object(t.d)(this);
                                        return Object(t.i)(
                                            t.a,
                                            {
                                                onIonBackdropTap: this
                                                    .onBackdropTap,
                                                style: {
                                                    zIndex: ''.concat(
                                                        4e4 + this.overlayIndex
                                                    ),
                                                },
                                                class: Object.assign(
                                                    Object.assign(
                                                        {},
                                                        Object(s.b)(
                                                            this.cssClass
                                                        )
                                                    ),
                                                    ((e = {}),
                                                    _defineProperty(e, a, !0),
                                                    _defineProperty(
                                                        e,
                                                        'loading-translucent',
                                                        this.translucent
                                                    ),
                                                    e)
                                                ),
                                            },
                                            Object(t.i)('ion-backdrop', {
                                                visible: this.showBackdrop,
                                                tappable: this.backdropDismiss,
                                            }),
                                            Object(t.i)(
                                                'div',
                                                {
                                                    class: 'loading-wrapper',
                                                    role: 'dialog',
                                                },
                                                i &&
                                                    Object(t.i)(
                                                        'div',
                                                        {
                                                            class:
                                                                'loading-spinner',
                                                        },
                                                        Object(t.i)(
                                                            'ion-spinner',
                                                            {
                                                                name: i,
                                                            }
                                                        )
                                                    ),
                                                n &&
                                                    Object(t.i)('div', {
                                                        class:
                                                            'loading-content',
                                                        innerHTML: Object(c.a)(
                                                            n
                                                        ),
                                                    })
                                            )
                                        );
                                    },
                                },
                                {
                                    key: 'el',
                                    get: function() {
                                        return Object(t.f)(this);
                                    },
                                },
                            ],
                            [
                                {
                                    key: 'style',
                                    get: function() {
                                        return '.sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);--backdrop-opacity:var(--ion-backdrop-opacity,0.32);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}';
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })();
        },
    },
]);
