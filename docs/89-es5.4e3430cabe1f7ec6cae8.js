function _defineProperty(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
function asyncGeneratorStep(t, e, n, i, o, r, a) {
    try {
        var s = t[r](a),
            c = s.value;
    } catch (d) {
        return void n(d);
    }
    s.done ? e(c) : Promise.resolve(c).then(i, o);
}
function _asyncToGenerator(t) {
    return function() {
        var e = this,
            n = arguments;
        return new Promise(function(i, o) {
            var r = t.apply(e, n);
            function a(t) {
                asyncGeneratorStep(r, i, o, a, s, 'next', t);
            }
            function s(t) {
                asyncGeneratorStep(r, i, o, a, s, 'throw', t);
            }
            a(void 0);
        });
    };
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
    for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
    }
}
function _createClass(t, e, n) {
    return (
        e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t
    );
}
(window.webpackJsonp = window.webpackJsonp || []).push([
    [89],
    {
        WbT0: function(t, e, n) {
            'use strict';
            n.r(e),
                n.d(e, 'ion_toggle', function() {
                    return s;
                });
            var i = n('imtE'),
                o = (n('AfW+'), n('aiEM')),
                r = n('Dl6n'),
                a = n('opz7'),
                s = (function() {
                    function t(e) {
                        var n = this;
                        _classCallCheck(this, t),
                            Object(i.k)(this, e),
                            (this.inputId = 'ion-tg-'.concat(d++)),
                            (this.lastDrag = 0),
                            (this.activated = !1),
                            (this.name = this.inputId),
                            (this.checked = !1),
                            (this.disabled = !1),
                            (this.value = 'on'),
                            (this.onClick = function() {
                                n.lastDrag + 300 < Date.now() &&
                                    (n.checked = !n.checked);
                            }),
                            (this.onFocus = function() {
                                n.ionFocus.emit();
                            }),
                            (this.onBlur = function() {
                                n.ionBlur.emit();
                            }),
                            (this.ionChange = Object(i.e)(
                                this,
                                'ionChange',
                                7
                            )),
                            (this.ionFocus = Object(i.e)(this, 'ionFocus', 7)),
                            (this.ionBlur = Object(i.e)(this, 'ionBlur', 7)),
                            (this.ionStyle = Object(i.e)(this, 'ionStyle', 7));
                    }
                    var e;
                    return (
                        _createClass(
                            t,
                            [
                                {
                                    key: 'checkedChanged',
                                    value: function(t) {
                                        this.ionChange.emit({
                                            checked: t,
                                            value: this.value,
                                        });
                                    },
                                },
                                {
                                    key: 'disabledChanged',
                                    value: function() {
                                        this.emitStyle(),
                                            this.gesture &&
                                                this.gesture.enable(
                                                    !this.disabled
                                                );
                                    },
                                },
                                {
                                    key: 'connectedCallback',
                                    value:
                                        ((e = _asyncToGenerator(
                                            regeneratorRuntime.mark(
                                                function t() {
                                                    var e = this;
                                                    return regeneratorRuntime.wrap(
                                                        function(t) {
                                                            for (;;)
                                                                switch (
                                                                    (t.prev =
                                                                        t.next)
                                                                ) {
                                                                    case 0:
                                                                        return (
                                                                            (t.next = 2),
                                                                            Promise.resolve().then(
                                                                                n.bind(
                                                                                    null,
                                                                                    'AzGJ'
                                                                                )
                                                                            )
                                                                        );
                                                                    case 2:
                                                                        (this.gesture = t.sent.createGesture(
                                                                            {
                                                                                el: this
                                                                                    .el,
                                                                                gestureName:
                                                                                    'toggle',
                                                                                gesturePriority: 100,
                                                                                threshold: 5,
                                                                                passive: !1,
                                                                                onStart: function() {
                                                                                    return e.onStart();
                                                                                },
                                                                                onMove: function(
                                                                                    t
                                                                                ) {
                                                                                    return e.onMove(
                                                                                        t
                                                                                    );
                                                                                },
                                                                                onEnd: function(
                                                                                    t
                                                                                ) {
                                                                                    return e.onEnd(
                                                                                        t
                                                                                    );
                                                                                },
                                                                            }
                                                                        )),
                                                                            this.disabledChanged();
                                                                    case 4:
                                                                    case 'end':
                                                                        return t.stop();
                                                                }
                                                        },
                                                        t,
                                                        this
                                                    );
                                                }
                                            )
                                        )),
                                        function() {
                                            return e.apply(this, arguments);
                                        }),
                                },
                                {
                                    key: 'disconnectedCallback',
                                    value: function() {
                                        this.gesture &&
                                            (this.gesture.destroy(),
                                            (this.gesture = void 0));
                                    },
                                },
                                {
                                    key: 'componentWillLoad',
                                    value: function() {
                                        this.emitStyle();
                                    },
                                },
                                {
                                    key: 'emitStyle',
                                    value: function() {
                                        this.ionStyle.emit({
                                            'interactive-disabled': this
                                                .disabled,
                                        });
                                    },
                                },
                                {
                                    key: 'onStart',
                                    value: function() {
                                        (this.activated = !0), this.setFocus();
                                    },
                                },
                                {
                                    key: 'onMove',
                                    value: function(t) {
                                        c(
                                            document,
                                            this.checked,
                                            t.deltaX,
                                            -10
                                        ) &&
                                            ((this.checked = !this.checked),
                                            Object(a.d)());
                                    },
                                },
                                {
                                    key: 'onEnd',
                                    value: function(t) {
                                        (this.activated = !1),
                                            (this.lastDrag = Date.now()),
                                            t.event.preventDefault(),
                                            t.event.stopImmediatePropagation();
                                    },
                                },
                                {
                                    key: 'getValue',
                                    value: function() {
                                        return this.value || '';
                                    },
                                },
                                {
                                    key: 'setFocus',
                                    value: function() {
                                        this.buttonEl && this.buttonEl.focus();
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var t,
                                            e = this,
                                            n = this.inputId,
                                            a = this.disabled,
                                            s = this.checked,
                                            c = this.activated,
                                            d = this.color,
                                            l = this.el,
                                            g = Object(i.d)(this),
                                            u = n + '-lbl',
                                            h = Object(o.f)(l),
                                            b = this.getValue();
                                        return (
                                            h && (h.id = u),
                                            Object(o.a)(
                                                !0,
                                                l,
                                                this.name,
                                                s ? b : '',
                                                a
                                            ),
                                            Object(i.i)(
                                                i.a,
                                                {
                                                    onClick: this.onClick,
                                                    role: 'checkbox',
                                                    'aria-disabled': a
                                                        ? 'true'
                                                        : null,
                                                    'aria-checked': ''.concat(
                                                        s
                                                    ),
                                                    'aria-labelledby': u,
                                                    class: Object.assign(
                                                        Object.assign(
                                                            {},
                                                            Object(r.a)(d)
                                                        ),
                                                        ((t = {}),
                                                        _defineProperty(
                                                            t,
                                                            g,
                                                            !0
                                                        ),
                                                        _defineProperty(
                                                            t,
                                                            'in-item',
                                                            Object(r.c)(
                                                                'ion-item',
                                                                l
                                                            )
                                                        ),
                                                        _defineProperty(
                                                            t,
                                                            'toggle-activated',
                                                            c
                                                        ),
                                                        _defineProperty(
                                                            t,
                                                            'toggle-checked',
                                                            s
                                                        ),
                                                        _defineProperty(
                                                            t,
                                                            'toggle-disabled',
                                                            a
                                                        ),
                                                        _defineProperty(
                                                            t,
                                                            'interactive',
                                                            !0
                                                        ),
                                                        t)
                                                    ),
                                                },
                                                Object(i.i)(
                                                    'div',
                                                    { class: 'toggle-icon' },
                                                    Object(i.i)('div', {
                                                        class: 'toggle-inner',
                                                    })
                                                ),
                                                Object(i.i)('button', {
                                                    type: 'button',
                                                    onFocus: this.onFocus,
                                                    onBlur: this.onBlur,
                                                    disabled: a,
                                                    ref: function(t) {
                                                        return (e.buttonEl = t);
                                                    },
                                                })
                                            )
                                        );
                                    },
                                },
                                {
                                    key: 'el',
                                    get: function() {
                                        return Object(i.f)(this);
                                    },
                                },
                            ],
                            [
                                {
                                    key: 'watchers',
                                    get: function() {
                                        return {
                                            checked: ['checkedChanged'],
                                            disabled: ['disabledChanged'],
                                        };
                                    },
                                },
                                {
                                    key: 'style',
                                    get: function() {
                                        return ':host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.088);--background-checked:var(--ion-color-primary,#3880ff);--handle-background:#fff;--handle-background-checked:#fff;--border-radius:16px;--handle-border-radius:14px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background-color .3s;transition:background-color .3s;background:var(--background);overflow:hidden;pointer-events:none}.toggle-inner{left:2px;top:2px;border-radius:var(--handle-border-radius);position:absolute;width:28px;height:28px;-webkit-transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms;transition:transform .3s,width .12s ease-in-out 80ms,left .11s ease-in-out 80ms,right .11s ease-in-out 80ms,-webkit-transform .3s;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:2px}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-activated) .toggle-icon:before,:host(.toggle-checked) .toggle-icon:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 19px),0,0);transform:translate3d(calc(-1 * 19px),0,0)}:host(.toggle-activated.toggle-checked) .toggle-inner:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-activated) .toggle-inner{width:34px}:host(.toggle-activated.toggle-checked) .toggle-inner{left:-4px}:host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-inner{left:unset;right:unset;right:-4px}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:20px;padding-right:10px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:10px;padding-inline-end:10px}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}';
                                    },
                                },
                            ]
                        ),
                        t
                    );
                })(),
                c = function(t, e, n, i) {
                    var o = 'rtl' === t.dir;
                    return e
                        ? (!o && i > n) || (o && -i < n)
                        : (!o && -i < n) || (o && i > n);
                },
                d = 0;
        },
    },
]);
