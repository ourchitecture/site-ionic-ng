function _defineProperty(t, e, o) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = o),
        t
    );
}
function asyncGeneratorStep(t, e, o, n, i, a, r) {
    try {
        var c = t[a](r),
            s = c.value;
    } catch (l) {
        return void o(l);
    }
    c.done ? e(s) : Promise.resolve(s).then(n, i);
}
function _asyncToGenerator(t) {
    return function() {
        var e = this,
            o = arguments;
        return new Promise(function(n, i) {
            var a = t.apply(e, o);
            function r(t) {
                asyncGeneratorStep(a, n, i, r, c, 'next', t);
            }
            function c(t) {
                asyncGeneratorStep(a, n, i, r, c, 'throw', t);
            }
            r(void 0);
        });
    };
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
    for (var o = 0; o < e.length; o++) {
        var n = e[o];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
    }
}
function _createClass(t, e, o) {
    return (
        e && _defineProperties(t.prototype, e), o && _defineProperties(t, o), t
    );
}
(window.webpackJsonp = window.webpackJsonp || []).push([
    [15],
    {
        bnjm: function(t, e, o) {
            'use strict';
            o.r(e),
                o.d(e, 'ion_action_sheet', function() {
                    return u;
                });
            var n = o('imtE'),
                i = (o('AfW+'), o('aiEM'), o('1ym9')),
                a = (o('EV1M'), o('7TZ+')),
                r = o('Dl6n'),
                c = function(t) {
                    var e = Object(i.a)(),
                        o = Object(i.a)(),
                        n = Object(i.a)();
                    return (
                        o
                            .addElement(t.querySelector('ion-backdrop'))
                            .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                            .beforeStyles({ 'pointer-events': 'none' })
                            .afterClearStyles(['pointer-events']),
                        n
                            .addElement(
                                t.querySelector('.action-sheet-wrapper')
                            )
                            .fromTo(
                                'transform',
                                'translateY(100%)',
                                'translateY(0%)'
                            ),
                        e
                            .addElement(t)
                            .easing('cubic-bezier(.36,.66,.04,1)')
                            .duration(400)
                            .addAnimation([o, n])
                    );
                },
                s = function(t) {
                    var e = Object(i.a)(),
                        o = Object(i.a)(),
                        n = Object(i.a)();
                    return (
                        o
                            .addElement(t.querySelector('ion-backdrop'))
                            .fromTo('opacity', 'var(--backdrop-opacity)', 0),
                        n
                            .addElement(
                                t.querySelector('.action-sheet-wrapper')
                            )
                            .fromTo(
                                'transform',
                                'translateY(0%)',
                                'translateY(100%)'
                            ),
                        e
                            .addElement(t)
                            .easing('cubic-bezier(.36,.66,.04,1)')
                            .duration(450)
                            .addAnimation([o, n])
                    );
                },
                l = function(t) {
                    var e = Object(i.a)(),
                        o = Object(i.a)(),
                        n = Object(i.a)();
                    return (
                        o
                            .addElement(t.querySelector('ion-backdrop'))
                            .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
                            .beforeStyles({ 'pointer-events': 'none' })
                            .afterClearStyles(['pointer-events']),
                        n
                            .addElement(
                                t.querySelector('.action-sheet-wrapper')
                            )
                            .fromTo(
                                'transform',
                                'translateY(100%)',
                                'translateY(0%)'
                            ),
                        e
                            .addElement(t)
                            .easing('cubic-bezier(.36,.66,.04,1)')
                            .duration(400)
                            .addAnimation([o, n])
                    );
                },
                d = function(t) {
                    var e = Object(i.a)(),
                        o = Object(i.a)(),
                        n = Object(i.a)();
                    return (
                        o
                            .addElement(t.querySelector('ion-backdrop'))
                            .fromTo('opacity', 'var(--backdrop-opacity)', 0),
                        n
                            .addElement(
                                t.querySelector('.action-sheet-wrapper')
                            )
                            .fromTo(
                                'transform',
                                'translateY(0%)',
                                'translateY(100%)'
                            ),
                        e
                            .addElement(t)
                            .easing('cubic-bezier(.36,.66,.04,1)')
                            .duration(450)
                            .addAnimation([o, n])
                    );
                },
                u = (function() {
                    function t(e) {
                        var o = this;
                        _classCallCheck(this, t),
                            Object(n.k)(this, e),
                            (this.presented = !1),
                            (this.mode = Object(n.d)(this)),
                            (this.keyboardClose = !0),
                            (this.buttons = []),
                            (this.backdropDismiss = !0),
                            (this.translucent = !1),
                            (this.animated = !0),
                            (this.onBackdropTap = function() {
                                o.dismiss(void 0, a.a);
                            }),
                            (this.dispatchCancelHandler = function(t) {
                                var e = t.detail.role;
                                if (Object(a.j)(e)) {
                                    var n = o.getButtons().find(function(t) {
                                        return 'cancel' === t.role;
                                    });
                                    o.callButtonHandler(n);
                                }
                            }),
                            Object(a.e)(this.el),
                            (this.didPresent = Object(n.e)(
                                this,
                                'ionActionSheetDidPresent',
                                7
                            )),
                            (this.willPresent = Object(n.e)(
                                this,
                                'ionActionSheetWillPresent',
                                7
                            )),
                            (this.willDismiss = Object(n.e)(
                                this,
                                'ionActionSheetWillDismiss',
                                7
                            )),
                            (this.didDismiss = Object(n.e)(
                                this,
                                'ionActionSheetDidDismiss',
                                7
                            ));
                    }
                    var e, o;
                    return (
                        _createClass(
                            t,
                            [
                                {
                                    key: 'present',
                                    value: function() {
                                        return Object(a.f)(
                                            this,
                                            'actionSheetEnter',
                                            c,
                                            l
                                        );
                                    },
                                },
                                {
                                    key: 'dismiss',
                                    value: function(t, e) {
                                        return Object(a.g)(
                                            this,
                                            t,
                                            e,
                                            'actionSheetLeave',
                                            s,
                                            d
                                        );
                                    },
                                },
                                {
                                    key: 'onDidDismiss',
                                    value: function() {
                                        return Object(a.h)(
                                            this.el,
                                            'ionActionSheetDidDismiss'
                                        );
                                    },
                                },
                                {
                                    key: 'onWillDismiss',
                                    value: function() {
                                        return Object(a.h)(
                                            this.el,
                                            'ionActionSheetWillDismiss'
                                        );
                                    },
                                },
                                {
                                    key: 'buttonClick',
                                    value:
                                        ((o = _asyncToGenerator(
                                            regeneratorRuntime.mark(function t(
                                                e
                                            ) {
                                                var o;
                                                return regeneratorRuntime.wrap(
                                                    function(t) {
                                                        for (;;)
                                                            switch (
                                                                (t.prev =
                                                                    t.next)
                                                            ) {
                                                                case 0:
                                                                    if (
                                                                        ((o =
                                                                            e.role),
                                                                        !Object(
                                                                            a.j
                                                                        )(o))
                                                                    ) {
                                                                        t.next = 5;
                                                                        break;
                                                                    }
                                                                    (t.t0 = this.dismiss(
                                                                        void 0,
                                                                        o
                                                                    )),
                                                                        (t.next = 13);
                                                                    break;
                                                                case 5:
                                                                    return (
                                                                        (t.next = 7),
                                                                        this.callButtonHandler(
                                                                            e
                                                                        )
                                                                    );
                                                                case 7:
                                                                    if (
                                                                        !t.sent
                                                                    ) {
                                                                        t.next = 11;
                                                                        break;
                                                                    }
                                                                    (t.t1 = this.dismiss(
                                                                        void 0,
                                                                        e.role
                                                                    )),
                                                                        (t.next = 12);
                                                                    break;
                                                                case 11:
                                                                    t.t1 = Promise.resolve();
                                                                case 12:
                                                                    t.t0 = t.t1;
                                                                case 13:
                                                                    return t.abrupt(
                                                                        'return',
                                                                        t.t0
                                                                    );
                                                                case 14:
                                                                case 'end':
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    this
                                                );
                                            })
                                        )),
                                        function(t) {
                                            return o.apply(this, arguments);
                                        }),
                                },
                                {
                                    key: 'callButtonHandler',
                                    value:
                                        ((e = _asyncToGenerator(
                                            regeneratorRuntime.mark(function t(
                                                e
                                            ) {
                                                return regeneratorRuntime.wrap(
                                                    function(t) {
                                                        for (;;)
                                                            switch (
                                                                (t.prev =
                                                                    t.next)
                                                            ) {
                                                                case 0:
                                                                    if (
                                                                        ((t.t0 = !e),
                                                                        t.t0)
                                                                    ) {
                                                                        t.next = 7;
                                                                        break;
                                                                    }
                                                                    return (
                                                                        (t.t1 = !1),
                                                                        (t.next = 5),
                                                                        Object(
                                                                            a.n
                                                                        )(
                                                                            e.handler
                                                                        )
                                                                    );
                                                                case 5:
                                                                    (t.t2 =
                                                                        t.sent),
                                                                        (t.t0 =
                                                                            t.t1 !==
                                                                            t.t2);
                                                                case 7:
                                                                    return t.abrupt(
                                                                        'return',
                                                                        t.t0
                                                                    );
                                                                case 8:
                                                                case 'end':
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t
                                                );
                                            })
                                        )),
                                        function(t) {
                                            return e.apply(this, arguments);
                                        }),
                                },
                                {
                                    key: 'getButtons',
                                    value: function() {
                                        return this.buttons.map(function(t) {
                                            return 'string' == typeof t
                                                ? { text: t }
                                                : t;
                                        });
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var t = this,
                                            e = Object(n.d)(this),
                                            o = this.getButtons(),
                                            i = o.find(function(t) {
                                                return 'cancel' === t.role;
                                            }),
                                            a = o.filter(function(t) {
                                                return 'cancel' !== t.role;
                                            });
                                        return Object(n.i)(
                                            n.a,
                                            {
                                                role: 'dialog',
                                                'aria-modal': 'true',
                                                style: {
                                                    zIndex: ''.concat(
                                                        2e4 + this.overlayIndex
                                                    ),
                                                },
                                                class: Object.assign(
                                                    Object.assign(
                                                        _defineProperty(
                                                            {},
                                                            e,
                                                            !0
                                                        ),
                                                        Object(r.b)(
                                                            this.cssClass
                                                        )
                                                    ),
                                                    {
                                                        'action-sheet-translucent': this
                                                            .translucent,
                                                    }
                                                ),
                                                onIonActionSheetWillDismiss: this
                                                    .dispatchCancelHandler,
                                                onIonBackdropTap: this
                                                    .onBackdropTap,
                                            },
                                            Object(n.i)('ion-backdrop', {
                                                tappable: this.backdropDismiss,
                                            }),
                                            Object(n.i)(
                                                'div',
                                                {
                                                    class:
                                                        'action-sheet-wrapper',
                                                    role: 'dialog',
                                                },
                                                Object(n.i)(
                                                    'div',
                                                    {
                                                        class:
                                                            'action-sheet-container',
                                                    },
                                                    Object(n.i)(
                                                        'div',
                                                        {
                                                            class:
                                                                'action-sheet-group',
                                                        },
                                                        void 0 !==
                                                            this.header &&
                                                            Object(n.i)(
                                                                'div',
                                                                {
                                                                    class:
                                                                        'action-sheet-title',
                                                                },
                                                                this.header,
                                                                this
                                                                    .subHeader &&
                                                                    Object(n.i)(
                                                                        'div',
                                                                        {
                                                                            class:
                                                                                'action-sheet-sub-title',
                                                                        },
                                                                        this
                                                                            .subHeader
                                                                    )
                                                            ),
                                                        a.map(function(o) {
                                                            return Object(n.i)(
                                                                'button',
                                                                {
                                                                    type:
                                                                        'button',
                                                                    class: b(o),
                                                                    onClick: function() {
                                                                        return t.buttonClick(
                                                                            o
                                                                        );
                                                                    },
                                                                },
                                                                Object(n.i)(
                                                                    'span',
                                                                    {
                                                                        class:
                                                                            'action-sheet-button-inner',
                                                                    },
                                                                    o.icon &&
                                                                        Object(
                                                                            n.i
                                                                        )(
                                                                            'ion-icon',
                                                                            {
                                                                                icon:
                                                                                    o.icon,
                                                                                lazy: !1,
                                                                                class:
                                                                                    'action-sheet-icon',
                                                                            }
                                                                        ),
                                                                    o.text
                                                                ),
                                                                'md' === e &&
                                                                    Object(n.i)(
                                                                        'ion-ripple-effect',
                                                                        null
                                                                    )
                                                            );
                                                        })
                                                    ),
                                                    i &&
                                                        Object(n.i)(
                                                            'div',
                                                            {
                                                                class:
                                                                    'action-sheet-group action-sheet-group-cancel',
                                                            },
                                                            Object(n.i)(
                                                                'button',
                                                                {
                                                                    type:
                                                                        'button',
                                                                    class: b(i),
                                                                    onClick: function() {
                                                                        return t.buttonClick(
                                                                            i
                                                                        );
                                                                    },
                                                                },
                                                                Object(n.i)(
                                                                    'span',
                                                                    {
                                                                        class:
                                                                            'action-sheet-button-inner',
                                                                    },
                                                                    i.icon &&
                                                                        Object(
                                                                            n.i
                                                                        )(
                                                                            'ion-icon',
                                                                            {
                                                                                icon:
                                                                                    i.icon,
                                                                                lazy: !1,
                                                                                class:
                                                                                    'action-sheet-icon',
                                                                            }
                                                                        ),
                                                                    i.text
                                                                ),
                                                                'md' === e &&
                                                                    Object(n.i)(
                                                                        'ion-ripple-effect',
                                                                        null
                                                                    )
                                                            )
                                                        )
                                                )
                                            )
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
                                        return '.sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios:after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios:after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios:after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios:after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover:hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover:after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity,0.4);--button-background:linear-gradient(0deg,rgba(var(--ion-text-color-rgb,0,0,0),0.08),rgba(var(--ion-text-color-rgb,0,0,0),0.08) 50%,transparent 0) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color,#000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-background-color,#fff);--button-background-selected-opacity:1;--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-400,#999);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top,0);margin-bottom:var(--ion-safe-area-bottom,0)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.8)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8))),-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.8)));background-image:linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.8),rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%),linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.4),rgba(var(--ion-background-color-rgb,255,255,255),.4) 50%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 0);background-repeat:no-repeat;background-position:top,bottom;background-size:100% calc(100% - 1px),100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg,rgba(var(--ion-text-color-rgb,0,0,0),.08),rgba(var(--ion-text-color-rgb,0,0,0),.08) 50%,transparent 0) bottom/100% 1px no-repeat transparent;padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color,var(--ion-color-step-400,#999));font-size:13px;font-weight:400;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:15px;padding-bottom:0;font-size:12px}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;font-size:20px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:.1em;font-size:28px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:.1em;margin-inline-end:.1em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:700}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios:after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios, .action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios, .action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger,#eb445a)}@media (any-hover:hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger,#eb445a)}}';
                                    },
                                },
                            ]
                        ),
                        t
                    );
                })(),
                b = function(t) {
                    return Object.assign(
                        _defineProperty(
                            {
                                'action-sheet-button': !0,
                                'ion-activatable': !0,
                                'ion-focusable': !0,
                            },
                            'action-sheet-'.concat(t.role),
                            void 0 !== t.role
                        ),
                        Object(r.b)(t.cssClass)
                    );
                };
        },
    },
]);
