function _defineProperty(e, i, n) {
    return (
        i in e
            ? Object.defineProperty(e, i, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[i] = n),
        e
    );
}
function asyncGeneratorStep(e, i, n, t, o, a, r) {
    try {
        var s = e[a](r),
            c = s.value;
    } catch (d) {
        return void n(d);
    }
    s.done ? i(c) : Promise.resolve(c).then(t, o);
}
function _asyncToGenerator(e) {
    return function() {
        var i = this,
            n = arguments;
        return new Promise(function(t, o) {
            var a = e.apply(i, n);
            function r(e) {
                asyncGeneratorStep(a, t, o, r, s, 'next', e);
            }
            function s(e) {
                asyncGeneratorStep(a, t, o, r, s, 'throw', e);
            }
            r(void 0);
        });
    };
}
function _classCallCheck(e, i) {
    if (!(e instanceof i))
        throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, i) {
    for (var n = 0; n < i.length; n++) {
        var t = i[n];
        (t.enumerable = t.enumerable || !1),
            (t.configurable = !0),
            'value' in t && (t.writable = !0),
            Object.defineProperty(e, t.key, t);
    }
}
function _createClass(e, i, n) {
    return (
        i && _defineProperties(e.prototype, i), n && _defineProperties(e, n), e
    );
}
(window.webpackJsonp = window.webpackJsonp || []).push([
    [49],
    {
        J3Yu: function(e, i, n) {
            'use strict';
            n.r(i),
                n.d(i, 'ion_loading', function() {
                    return f;
                });
            var t = n('imtE'),
                o = n('AfW+'),
                a = (n('aiEM'), n('1ym9')),
                r = (n('EV1M'), n('7TZ+')),
                s = n('Dl6n'),
                c = n('YtD4'),
                d = function(e) {
                    var i = Object(a.a)(),
                        n = Object(a.a)(),
                        t = Object(a.a)();
                    return (
                        n
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
                        i
                            .addElement(e)
                            .easing('ease-in-out')
                            .duration(200)
                            .addAnimation([n, t])
                    );
                },
                l = function(e) {
                    var i = Object(a.a)(),
                        n = Object(a.a)(),
                        t = Object(a.a)();
                    return (
                        n
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
                        i
                            .addElement(e)
                            .easing('ease-in-out')
                            .duration(200)
                            .addAnimation([n, t])
                    );
                },
                p = function(e) {
                    var i = Object(a.a)(),
                        n = Object(a.a)(),
                        t = Object(a.a)();
                    return (
                        n
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
                        i
                            .addElement(e)
                            .easing('ease-in-out')
                            .duration(200)
                            .addAnimation([n, t])
                    );
                },
                u = function(e) {
                    var i = Object(a.a)(),
                        n = Object(a.a)(),
                        t = Object(a.a)();
                    return (
                        n
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
                        i
                            .addElement(e)
                            .easing('ease-in-out')
                            .duration(200)
                            .addAnimation([n, t])
                    );
                },
                f = (function() {
                    function e(i) {
                        var n = this;
                        _classCallCheck(this, e),
                            Object(t.k)(this, i),
                            (this.presented = !1),
                            (this.mode = Object(t.d)(this)),
                            (this.keyboardClose = !0),
                            (this.duration = 0),
                            (this.backdropDismiss = !1),
                            (this.showBackdrop = !0),
                            (this.translucent = !1),
                            (this.animated = !0),
                            (this.onBackdropTap = function() {
                                n.dismiss(void 0, r.a);
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
                    var i;
                    return (
                        _createClass(
                            e,
                            [
                                {
                                    key: 'componentWillLoad',
                                    value: function() {
                                        if (void 0 === this.spinner) {
                                            var e = Object(t.d)(this);
                                            this.spinner = o.b.get(
                                                'loadingSpinner',
                                                o.b.get(
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
                                        ((i = _asyncToGenerator(
                                            regeneratorRuntime.mark(
                                                function e() {
                                                    var i = this;
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
                                                                                    return i.dismiss();
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
                                            return i.apply(this, arguments);
                                        }),
                                },
                                {
                                    key: 'dismiss',
                                    value: function(e, i) {
                                        return (
                                            this.durationTimeout &&
                                                clearTimeout(
                                                    this.durationTimeout
                                                ),
                                            Object(r.g)(
                                                this,
                                                e,
                                                i,
                                                'loadingLeave',
                                                l,
                                                u
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
                                            i = this.message,
                                            n = this.spinner,
                                            o = Object(t.d)(this);
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
                                                    _defineProperty(e, o, !0),
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
                                                n &&
                                                    Object(t.i)(
                                                        'div',
                                                        {
                                                            class:
                                                                'loading-spinner',
                                                        },
                                                        Object(t.i)(
                                                            'ion-spinner',
                                                            {
                                                                name: n,
                                                            }
                                                        )
                                                    ),
                                                i &&
                                                    Object(t.i)('div', {
                                                        class:
                                                            'loading-content',
                                                        innerHTML: Object(c.a)(
                                                            i
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
                                        return '.sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);--backdrop-opacity:var(--ion-backdrop-opacity,0.3);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}';
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
